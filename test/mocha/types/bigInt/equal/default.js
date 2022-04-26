import { assert } from "chai";
import { utilsBigInt } from "";

describe("bigInt : method equal", () => {
  it("equal : true", () => {
    assert.isTrue(utilsBigInt.equal(2n, 2n), "equal(2n, 2n) === true");
  });
  it("equal : false", () => {
    assert.isFalse(utilsBigInt.equal(1n, 2n), "equal(1,2) === false");
  });
});
