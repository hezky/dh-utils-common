import { assert } from "chai";
import { utilsFunction } from "";

describe("function : method compare", () => {
  it("compare : -1", () => {
    const fceA = function fce() {
      const variableA = 5;
      return variableA;
    };
    const fceB = function fce() {
      const variableB = 5;
      return variableB;
    };
    assert.equal(
      utilsFunction.compare(fceA, fceB),
      -1,
      "compare(fce,fce) === -1"
    );
  });
  it("compare : reference - 0", () => {
    const fceA = function fce() {
      const variable = 5;
      return variable;
    };
    const fceB = fceA;
    assert.equal(
      utilsFunction.compare(fceA, fceB),
      0,
      "compare(fce, fce) === 0"
    );
  });
  it("compare : 0", () => {
    const fceA = function fce() {
      const variable = 5;
      return variable;
    };
    const fceB = function fce() {
      const variable = 5;
      return variable;
    };
    assert.equal(
      utilsFunction.compare(fceA, fceB),
      0,
      "compare(fce,fce) === 0"
    );
  });
  it("compare : 1", () => {
    const fceA = function fce() {
      const variableZ = 5;
      return variableZ;
    };
    const fceB = function fce() {
      const variableX = 5;
      return variableX;
    };
    assert.equal(
      utilsFunction.compare(fceA, fceB),
      1,
      "compare(fce,fce) === 1"
    );
  });
});
