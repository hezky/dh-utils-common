import { assert } from "chai";
import { utilsBigInt } from "";

describe("number : method compare", () => {
  it("compare : -1", () => {
    assert.equal(utilsBigInt.compare(1n, 2n), -1);
    assert.equal(utilsBigInt.compare(-2n, 1n), -1);
    assert.equal(utilsBigInt.compare(-2n, 2n), -1);
  });
  it("compare : 0", () => {
    assert.equal(utilsBigInt.compare(0n, 0n), 0);
    assert.equal(utilsBigInt.compare(2n, 2n), 0);
    assert.equal(utilsBigInt.compare(-2n, -2n), 0);
  });
  it("compare : 1", () => {
    assert.equal(utilsBigInt.compare(2n, 1n), 1);
    assert.equal(utilsBigInt.compare(1n, -2n), 1);
    assert.equal(utilsBigInt.compare(2n, -2n), 1);
  });
});
