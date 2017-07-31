console.clear();
var config = [{
        number: 3,
        word: "Fizz"
    }, {
        number: 5,
        word: "Buzz"
    }];
function initialize(from, to, configuration) {
    for (var i = from; i <= to; i++) {
        console.log(getConditionalOutputs(configuration, i) || i);
    }
}
var getConditionalOutputs = function (configuration, index) { return configuration.reduce(comparer(index), ""); };
var comparer = function (index) { return function (output, item) { return index % item.number ? output : output + item.word; }; };
initialize(1, 100, config);
