import { assert } from "chai";
import { utilsNumber } from "";

describe("number : method isEmpty", () => {
  it("result ... true", () => {
    assert.isTrue(utilsNumber.isNotEmpty(2));
    assert.isTrue(utilsNumber.isNotEmpty(-2));
  });
  it("result ... false", () => {
    assert.isFalse(utilsNumber.isNotEmpty(0));
  });
});
