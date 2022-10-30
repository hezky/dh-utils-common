import { assert } from "chai";
import { utilsNumber } from "";

describe("number : method isNotEmpty", () => {
  it("isNotEmpty ... true", () => {
    assert.isTrue(utilsNumber.isNotEmpty(2));
    assert.isTrue(utilsNumber.isNotEmpty(-2));
  });
  it("isNotEmpty ... false", () => {
    assert.isFalse(utilsNumber.isNotEmpty(0));
  });
});
