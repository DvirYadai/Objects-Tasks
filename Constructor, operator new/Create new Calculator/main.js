function Calculator() {
  this.read = () => {
    this.a = prompt("Enter a Number:");
    this.b = prompt("Enter a second Number:");
  };
  this.sum = () => {
    return Number(this.a) + Number(this.b);
  };
  this.mul = () => {
    return Number(this.a) * Number(this.b);
  };
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());
