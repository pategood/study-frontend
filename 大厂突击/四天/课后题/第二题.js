var x = 2;
var y = {
  x: 3,
  z: (function (x) {
    this.x *= x;
    x += 2;
    return function (n) {
      this.x *= n;
      x += 3;
      console.log(x);
    }
  })
};
var m = y.Z;
m(4);
y.z(5); 
console.log(x, y.x);
