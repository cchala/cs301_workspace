"use strict";
// const assert = require("assert");
// const my_functions = require('./que2.js');
// describe("checkPrime", function () {
//     it("Area of circle :", function () {
//         assert.strictEqual(my_functions.areaOfCircle(3), 28.274333882308138);
//     });
//     it("Area of circle :", function () {
//         assert.strictEqual(my_functions.areaOfCircle(3), 28.274333882308138);
//     });
// });
// //to check the volume of cylinder
const assert = require("assert");
const my_functions = require('./que2.js');
describe("checkPrime", function () {
    it("The volume of the cylinder :", function () {
        assert.strictEqual(my_functions.volumeOfCylinder(3,3), 84.82300164692441);
    });
    it("The volume of the cylinder :", function () {
        assert.strictEqual(my_functions.volumeOfCylinder(3,9), 763.4070148223198);
    });
});

