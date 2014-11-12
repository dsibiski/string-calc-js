function StringCalc(string) {

    var newlineIndicator = '\n';
    var defaultDelimiter = ',';
    var delimiterDefinitionIndicator = '//';
    var delimiterPosition = 2;

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
        return string.replace(newlineIndicator, delimiter()).split(delimiter());
    }

    function delimiter() {
        if (hasDelimiterDefinition()) return string[delimiterPosition];
        return defaultDelimiter;
    }

    function hasDelimiterDefinition() {
        return (string.indexOf(delimiterDefinitionIndicator) === 0);
    }
}

module.exports = StringCalc;

