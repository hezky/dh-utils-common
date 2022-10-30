import { assert } from "chai";
import { utilsBoolean } from "";

describe("boolean : method isNotEmpty", () => {
  it("isNotEmpty ... true", () => {
    assert.isTrue(utilsBoolean.isNotEmpty(true));
  });
  it("isNotEmpty ... false", () => {
    assert.isFalse(utilsBoolean.isNotEmpty(false));
  });
});
