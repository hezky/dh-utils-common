import { assert } from "chai";
import { utilsBigInt } from "";

describe("bigInt : method isEmpty", () => {
  it("isEmpty ... true", () => {
    assert.isTrue(utilsBigInt.isEmpty(0));
  });
  it("isEmpty ... false", () => {
    assert.isFalse(utilsBigInt.isEmpty(2n));
    assert.isFalse(utilsBigInt.isEmpty(-2n));
  });
});
