function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = () => {
    this.value += Number(prompt("Enter a Number:"));
  };
}
