function StringCalc(string) {
  this.string = string;
}

StringCalc.prototype.add = function () {
  if (this.string === '0') {
    return 0;
  }
  return Number(this.string);
};

module.exports = StringCalc;

