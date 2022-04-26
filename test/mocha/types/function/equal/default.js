import { assert } from "chai";
import { utilsFunction } from "";

describe("function : method equal", () => {
  it("equal : reference - true", () => {
    const fceA = function fce() {
      const variable = 5;
      return variable;
    };
    const fceB = fceA;
    assert.isTrue(utilsFunction.equal(fceA, fceB), "equal(fce,fce) === true");
  });
  it("equal : true", () => {
    const fceA = function fce() {
      const variable = 5;
      return variable;
    };
    const fceB = function fce() {
      const variable = 5;
      return variable;
    };
    assert.isTrue(utilsFunction.equal(fceA, fceB), "equal(fce,fce) === true");
  });
  it("equal : false", () => {
    const fceA = function fce() {
      const variableA = 5;
      return variableA;
    };
    const fceB = function fce() {
      const variableB = 5;
      return variableB;
    };
    assert.isFalse(utilsFunction.equal(fceA, fceB), "equal(fce,fce) === false");
  });
});
