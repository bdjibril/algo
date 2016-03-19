'use strict';

const Rx = require("rx");
const http = require('http');
const PORT = 3000;

let server;

const httpRequest_ = Rx.Observable.create( (observer) => {
    // This will create a single Observer (we will need to share it later)
    if(!server){
      server = http.createServer( (request, response) => {
          let body = '';
          request.on('data', (data) => body += data);
          request.on('end', () => observer.onNext({request, response, body}) );

        });
      server.listen(PORT); 
      console.log(`App listening on port ${PORT}`)
    }
    return () => console.log('disposed');
});

const request_ = httpRequest_.share();

const malformedRequest_ = request_.filter((http) => {
    try {
      JSON.parse(http.body)
      return false;
    }catch(e){
      return true;
    }
  }
);

const wellformedRequest_ = request_.filter((http) => {
    try {
      JSON.parse(http.body)
      return true;
    }catch(e){
      return false;
    }
  }
);

const orderRequest_ = wellformedRequest_
  .filter( (http) => http.request.url === '/orders' && http.request.method === 'POST' )
  .map((http) => {
    return {
      request : http.request,
      response : http.response,
      order : JSON.parse(http.body)
    }
  });

const validOrderRequest_ = orderRequest_.filter((orderRequest) => orderRequest.order.valid === true);
const invalidOrderRequest_ = orderRequest_.filter((orderRequest) => orderRequest.order.valid === false);

const validOrder_ = validOrderRequest_.map((orderRequest) => orderRequest.order);

const smOrder_ = validOrder_.filter((order) => order.type === "ServerM");
const amOrder_ = validOrder_.filter((order) => order.type === "AppM");

// Side Effects

// Log all Orders
orderRequest_.subscribe(
    (x) => {
      console.log('Got Order request: ');
      console.dir(x.order);
    }
    ,
    (err) => console.log('Error: ' + err)
    ,
    () => console.log('Completed')
);

// Return Malformed request
malformedRequest_.subscribe(
    (x) => {
      console.log('Malformed request Body: ');
      console.dir(x.body);
      x.response.end(`Malformed request Body:\n ${x.body} \n`);
    }
);

// Log valid Orders
validOrderRequest_.subscribe(
    (x) => {
      console.log('Request Passed validation for Order: ');
      console.dir(x.order);
      x.response.end('Valid\n');
    }
);

// Log invalid Orders
invalidOrderRequest_.subscribe(
    (x) => {
      console.log('Request Failed validation for Order: ');
      console.dir(x.order);
      x.response.end('Invalid\n');
    }
);

// Provision Server Monitoring Orders
smOrder_.subscribe(
    (x) => console.log('Provisioning Server Monitoring of: ' + x.oid)
);

// Provision Server Monitoring Orders
amOrder_.subscribe(
    (x) => console.log('Provisioning APP Monitoring of: ' + x.oid)
);