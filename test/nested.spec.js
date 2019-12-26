var chai = require('chai');  
var assert = chai.assert;
const calc = require("../js/calculator");

// describe to group similar test cases
describe('division group', function() {

    // used to define simple test
    it("To check division of two numbers return valid result", function(){
        assert.equal(2, calc.div(2, 1));
    });

    it("division with 0 raises exception", ()=>{
        chai.expect(calc.div(2, 0)).to.throw('expected Infinity to be a function');
    });
  })
