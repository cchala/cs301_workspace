"use strict";

const assert = require("assert");
const my_functions = require('./que5.js');


describe("checkPrime", function () {
    it("Least common Multiple :", function () {
        assert.strictEqual(my_functions.getLCM(6,12), 12);
    });
    it(" least common multiple:", function () {
        assert.strictEqual(my_functions.getLCM(121,11), 121);
    });
    it(" Least common multiple :", function () {
        assert.strictEqual(my_functions.getLCM(10,100), 100);
    });
});