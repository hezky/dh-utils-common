import { assert } from "chai";
import { utilsNumber } from "";

describe("number : method isEmpty", () => {
  it("isEmpty ... true", () => {
    assert.isTrue(utilsNumber.isEmpty(0));
  });
  it("isEmpty ... false", () => {
    assert.isFalse(utilsNumber.isEmpty(2));
    assert.isFalse(utilsNumber.isEmpty(-2));
  });
});
