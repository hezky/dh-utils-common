import { assert } from "chai";
import { utilsNumber } from "";

describe("number : method isEmpty", () => {
  it("result ... true", () => {
    assert.isTrue(utilsNumber.isEmpty(0));
  });
  it("result ... false", () => {
    assert.isFalse(utilsNumber.isEmpty(2));
    assert.isFalse(utilsNumber.isEmpty(-2));
  });
});
