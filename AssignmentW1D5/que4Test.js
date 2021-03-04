"use strict";

const assert = require("assert");
const my_functions = require('./que4.js');


describe("checkPrime", function () {
    it("Greatest common factor :", function () {
        assert.strictEqual(my_functions.getNewGCF(6,12), 6);
    });
    it(" Greatest common factor :", function () {
        assert.strictEqual(my_functions.getNewGCF(121,11), 11);
    });
    it(" Greatest common factor :", function () {
        assert.strictEqual(my_functions.getNewGCF(10,100), 10);
    });
});