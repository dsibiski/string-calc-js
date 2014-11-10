function StringCalc(string) {
    var DEFAULT_DELIMITER = ',';

    return Object.freeze({
        add: function () {
            if (string === '0') return 0;
            return calculate_total();
        },
    });

    function calculate_total() {
        return numbers().reduce(sum);
    }

    function numbers() {
        return string.split(DEFAULT_DELIMITER).map(Number);
    }

    function sum(a, b) {
        return a + b;
    }
}

module.exports = StringCalc;

