import { assert } from "chai";
import { utilsBigInt } from "";

describe("bigInt : method isEmpty", () => {
  it("result ... true", () => {
    assert.isTrue(utilsBigInt.isEmpty(0));
  });
  it("result ... false", () => {
    assert.isFalse(utilsBigInt.isEmpty(2n));
    assert.isFalse(utilsBigInt.isEmpty(-2n));
  });
});
