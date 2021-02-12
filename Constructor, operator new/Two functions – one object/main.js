function A() {
  return c;
}
function B() {
  return c;
}

let c = {};

let a = new A();
let b = new B();

let asd = a == b;
asd;
