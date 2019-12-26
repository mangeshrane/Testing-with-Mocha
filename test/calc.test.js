var assert = require('assert');
const calc = require("../js/calculator");

// describe to group similar test cases
describe('Addition group', function() {

    // used to define simple test
    it("add method should return valid addition", function(){
        assert.equal(3, calc.add(2, 1));
    });

    it("Addition with negative numbers should return valid result", ()=>{
        assert.equal(2, calc.add(-1, 3));
    });
  })
