import { assert } from "chai";
import { utilsNumber } from "";

describe("number : method compare", () => {
  it("compare : -1", () => {
    assert.equal(utilsNumber.compare(0, 2), -1);
    assert.equal(utilsNumber.compare(-2, 0), -1);
    assert.equal(utilsNumber.compare(-2, 2), -1);
  });
  it("compare : 0", () => {
    assert.equal(utilsNumber.compare(0, 0), 0);
    assert.equal(utilsNumber.compare(2, 2), 0);
    assert.equal(utilsNumber.compare(-2, -2), 0);
  });
  it("compare : 1", () => {
    assert.equal(utilsNumber.compare(2, 0), 1);
    assert.equal(utilsNumber.compare(0, -2), 1);
    assert.equal(utilsNumber.compare(2, -2), 1);
  });
});
