# Testing With javascript

## Pre Requisite
    
    1. Node installed

## Setting up project 

1. Creating project directory
2. run command `npm init` will generate package.json file with specified configuration
3. Installing mocha
    `npm install mocha`
4.  `npm install chai`
5. To run mocha via npm need change test script in package.json to 
    `"test": "mocha --recursive"`


## Framework / Libraries used:

* [Mocha](https://mochajs.org/) – the core framework: it provides common testing functions including describe and it and the main function that runs tests.
* [Chai](https://www.chaijs.com/) – the library with many assertions. It allows to use a lot of different assertions, for now we need only assert.equal.
* [Sinon](https://sinonjs.org/) – a library to spy over functions, emulate built-in functions and more, we’ll need it much later.

## Notes: 
* Mocha : 
  Test spec has three main building blocks
    1. `describe("title", function() { ... })` it works like a suit or tests container. using [Mocha] for it
    2. `it("use case description", function() { ... })`  perticular use case or A test. 
    3. `assert` to check if works as expected. using [Chai] for it
    4. In Async js testing -> this context in not accessible in arrow functions in ES6 hence mocha suggest we should not use arrow function.
    

* Running tests
    1. run command `mocha` will find automatically all tests under test directory but not nested
    2. run `mocha --recursive` to run nested directories
    3. `mocha "test/dirName/*.spec.js"` to specify custom path


[nvm](https://github.com/nvm-sh/nvm) - node version manager to work with multiple version of node
