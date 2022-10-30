import { assert } from "chai";
import { utilsBigInt } from "";

describe("number : method isNotEmpty", () => {
  it("isNotEmpty ... true", () => {
    assert.isTrue(utilsBigInt.isNotEmpty(2n));
    assert.isTrue(utilsBigInt.isNotEmpty(-2n));
  });
  it("isNotEmpty ... false", () => {
    assert.isFalse(utilsBigInt.isNotEmpty(0));
  });
});
