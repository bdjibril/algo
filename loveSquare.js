console.clear();
const rect1 = {
  x : 3,
  y : 4,
  lenX : 15,
  lenY : 20
};

const rect2 = {
  x : 0,
  y : 1,
  lenX : 10,
  lenY : 7
};

const rect3 = {
  x : 6,
  y : 9,
  lenX : 3,
  lenY : 3
};

const getXsegment = (rect) => {
  return { start: rect.x , end: rect.x + rect.lenX };
};

const getYsegment = (rect) => {
  return { start: rect.y , end: rect.y + rect.lenY };
};

const getOverlap = (seg1, seg2) => {  
  return { start: Math.max(seg1.start,seg2.start), end: Math.min(seg1.end,seg2.end) };
};

const loveSquare = (rect1, rect2) => {
  
  const r1xSeg = getXsegment(rect1);
  const r2xSeg = getXsegment(rect2);
  const xOverlap = getOverlap(r1xSeg, r2xSeg);
  if(xOverlap.start >= xOverlap.end) return "Error the x axis doesnt Overlap";
  
  const r1ySeg = getYsegment(rect1);
  const r2ySeg = getYsegment(rect2);
  const yOverlap = getOverlap(r1ySeg, r2ySeg);
  if(yOverlap.start >= yOverlap.end) return "Error the y axis doesnt Overlap";
  
  return {xOverlap,yOverlap}
};

console.log(loveSquare(rect1, rect2));
console.log(loveSquare(rect1, rect3));
