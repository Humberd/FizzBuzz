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
/*
  A higher order function that is used to reduce array of configs to a single string.
  When the current index modulo config number equals 0 then it adds config word to the previous output.
 */
var comparer = function (index) { return function (output, configItem) { return index % configItem.number ? output : output + configItem.word; }; };
initialize(1, 100, config);
