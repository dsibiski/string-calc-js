function StringCalc(string) {
    var NEWLINE_INDICATOR = '\n';
    var DEFAULT_DELIMITER = ',';
    var DELIMITER_DEFINITION_INDICATOR = '//';
    var DELIMITER_POSITION = 2;

    return Object.freeze({
        add: function () {
            return numbers().reduce(function sum(a, b) {
                return a + b;
            });
        }
    });

    function numbers() {
        return delimitedString().map(function (string) {
            return Number(string) || 0;
        });
    }

    function delimitedString() {
        return string.replace(NEWLINE_INDICATOR, delimiter()).split(delimiter());
    }

    function delimiter() {
        if (hasDelimiterDefinition()) return string[DELIMITER_POSITION];
        return DEFAULT_DELIMITER;
    }

    function hasDelimiterDefinition() {
        return (string.indexOf(DELIMITER_DEFINITION_INDICATOR) === 0);
    }
}

module.exports = StringCalc;

