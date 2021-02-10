const calculator = {
  read() {
    this.a = prompt("Enter a Number:");
    this.b = prompt("Enter a second Number:");
  },
  sum() {
    return Number(this.a) + Number(this.b);
  },
  mul() {
    return Number(this.a) * Number(this.b);
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
