let ladder = {
  step: 0,
  up() {
    this.step++;
    return ladder;
  },
  down() {
    this.step--;
    return ladder;
  },
  showStep: function () {
    // shows the current step
    alert(this.step);
    return ladder;
  },
};
