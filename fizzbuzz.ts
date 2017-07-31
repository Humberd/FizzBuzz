console.clear();

const config = [{
  number: 3,
  word: "Fizz"
}, {
  number: 5,
  word: "Buzz"
}];

function initialize(from, to, configuration) {
  for (let i = from; i <= to; i++) {
    console.log(getConditionalOutputs(configuration, i) || i);
  }
}

const getConditionalOutputs = (configuration, index) => configuration.reduce(comparer(index), "");

const comparer = (index) => (output, item) => index % item.number ? output : output + item.word;

initialize(1, 100, config);