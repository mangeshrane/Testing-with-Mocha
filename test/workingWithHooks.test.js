
describe("Working with Hooks", () => {

    before(() => console.log("Testing started – before all tests"));
    after(() => console.log("Testing finished – after all tests"));

    beforeEach(() => console.log("Before a test – enter a test"));
    afterEach(() => console.log("After a test – exit a test"));

    it("test one", ()=>{
        console.log("Inside test 1");
    });

    it("test two", ()=>{
        console.log("Inside test 2");
    });
});