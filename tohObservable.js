'use strict';

const Rx = require("rx");

const numberOfDisks = process.argv[2] || 4;

const toh_ = Rx.Observable.create( (observer) => {

  let count = 0;

  const TOH = (n, a, b, c) => {
    
    if(n > 0){
      TOH(n-1, a, c, b);
      observer.onNext({
        move: ++count,
        from: a,
        to: c
      });

      TOH(n-1, b, a, c);
    }
    
  };

  TOH(numberOfDisks, 'A', 'B', 'C');

  // Complete the sequence
  observer.OnCompleted();

  return () => console.log('disposed');

} );

let moves = [];

toh_.subscribe( 
  move => {  
    console.log(`Move ${move.move} from ${move.from} to ${move.to}`);
    } , 
  () => console.log('Completed'));
