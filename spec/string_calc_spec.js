var StringCalc = require('../lib/string_calc');

describe('StringCalc', function() {

    describe('.add', function() {

        describe('given an empty string', function() {
            it('returns 0', function() {
                var sut = StringCalc('');
                expect(sut.add()).toEqual(0);
            });
        });

        describe('given a single number', function() {
            it('returns 1', function() {
                var sut = StringCalc('1');
                expect(sut.add()).toEqual(1);
            });

            it('returns 2 given "2"', function() {
                var sut = StringCalc('2');
                expect(sut.add()).toEqual(2);
            });
        });

        describe('given 2 numbers', function() {
            it('returns the sum', function() {
                var sut = StringCalc('1,2');
                expect(sut.add()).toEqual(3);
            });

            it('returns 7 given "3,4"', function() {
                var sut = StringCalc('3,4');
                expect(sut.add()).toEqual(7);
            });

            it('returns 46 given "12,34"', function() {
                var sut = StringCalc('12,34');
                expect(sut.add()).toEqual(46);
            });
        });

        describe('given 3 numbers', function() {
            it('returns the sum', function() {
                var sut = StringCalc('1,2,3');
                expect(sut.add()).toEqual(6);
            });

            it('returns 66 for "11,22,33"', function() {
                var sut = StringCalc('11,22,33');
                expect(sut.add()).toEqual(66);
            });
        });

        describe('given any amount of numbers', function() {
            it('returns the sum', function() {
                var sut = StringCalc('1,2,3,4,5,6,7,8,9');
                expect(sut.add()).toEqual(45);
            });
        });

        describe('given a newline as a delimiter', function() {
            it('returns the sum', function() {
                var sut = StringCalc('1\n2');
                expect(sut.add()).toEqual(3);
            });

            it('returns 6 for "1\n2,3"', function() {
                var sut = StringCalc('1\n2,3');
                expect(sut.add()).toEqual(6);
            });
        });

        describe('with a delimiter definition', function() {
            it('returns the sum', function() {
                var sut = StringCalc('//;\n1;2');
                expect(sut.add()).toEqual(3);
            });

            it('returns 6 given "//;\n1;2;3"', function() {
                var sut = StringCalc('//;\n1;2;3');
                expect(sut.add()).toEqual(6);
            });
        });

    });

});

