var DEFAULT_DELIMITER = ',';

function StringCalc(string) {
  this.string = string;
}

StringCalc.prototype.add = function () {
  if (this.string === '0') return 0;

  if (this.string.indexOf(DEFAULT_DELIMITER) !== -1) {
    return this.numbers()[0] + this.numbers()[1];
  }

  return Number(this.string);
};

StringCalc.prototype.numbers = function () {
  return this.string.split(',').map(Number);
};

module.exports = StringCalc;

