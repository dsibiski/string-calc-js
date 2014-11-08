var StringCalc = require('../lib/string_calc');

describe('StringCalc', function() {

  describe('.add', function () {

    describe('given an empty string', function() {
      it('returns 0', function() {
        var sut = new StringCalc('');
        expect(sut.add()).toEqual(0);
      });
    });

    describe('given a single number', function() {
      it('returns 1', function () {
        var sut = new StringCalc('1');
        expect(sut.add()).toEqual(1);
      });

      it('returns 2 given "2"', function () {
        var sut = new StringCalc('2');
        expect(sut.add()).toEqual(2);
      });
    });

    describe('given 2 numbers', function () {
      it('returns the sum', function () {
        var sut = new StringCalc('1,2');
        expect(sut.add()).toEqual(3);
      });

      it('returns 7 given "3,4"', function () {
        var sut = new StringCalc('3,4');
        expect(sut.add()).toEqual(7);
      });

      it('returns 46 given "12,34"', function () {
        var sut = new StringCalc('12,34');
        expect(sut.add()).toEqual(46);
      });
    });

  });

});
