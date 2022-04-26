import { assert } from "chai";
import { utilsNumber } from "";

describe("number : method equal", () => {
  it("equal : true", () => {
    assert.isTrue(utilsNumber.equal(2, 2), "equal(2,2) === true");
  });
  it("equal : false", () => {
    assert.isFalse(utilsNumber.equal(1, 2), "equal(1,2) === false");
  });
});
