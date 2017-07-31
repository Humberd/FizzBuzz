# FizzBuzz

Fizz buzz is a group word game for children to teach them about division.
Players take turns to count incrementally, replacing any number divisible by three with the word "fizz", and any number divisible by five with the word "buzz".
[wiki](https://en.wikipedia.org/wiki/Fizz_buzz)

## Implementation

An example implementation has been written using **ES6/TypeScript** (fizzbuzz.ts).

I also attached a compiled version in **ES5/JavaScript** (fizzbuzz.js).

### Solutions

Everything starts with the `initialize()` function, which takes a range and a configs array;

A config object has 2 fields:
 * Number - if index modulo this number equals 0, then the comparer method returns a 'word'
 * Word - wor that is added if the condition above is fulfilled.
