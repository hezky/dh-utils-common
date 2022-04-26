import { assert } from "chai";
import { utilsBigInt } from "";

describe("number : method isEmpty", () => {
  it("result ... true", () => {
    assert.isTrue(utilsBigInt.isNotEmpty(2n));
    assert.isTrue(utilsBigInt.isNotEmpty(-2n));
  });
  it("result ... false", () => {
    assert.isFalse(utilsBigInt.isNotEmpty(0));
  });
});
