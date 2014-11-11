function StringCalc(string) {
    var NEWLINE_INDICATOR = '\n';
    var DEFAULT_DELIMITER = ',';
    var DELIMITER_DEFINITION_INDICATOR = '//';
    var DELIMITER_POSITION = 2;

    return Object.freeze({
        add: function() {
            return numbers().reduce(sum);
        }
    });

    function delimiter() {
        if (has_delimiter_definition()) return string[DELIMITER_POSITION];
        return DEFAULT_DELIMITER;
    }

    function has_delimiter_definition() {
        return (string.indexOf(DELIMITER_DEFINITION_INDICATOR) === 0);
    }

    function sum(a, b) {
        return a + b;
    }

    function numbers() {
        return string_split_with_delimiter().map(number_from_string);
    }

    function string_split_with_delimiter() {
        return string.replace(NEWLINE_INDICATOR, delimiter()).split(delimiter());
    }

    function number_from_string(string) {
        return Number(string) || 0;
    }
}

module.exports = StringCalc;

