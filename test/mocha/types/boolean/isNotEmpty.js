import { assert } from "chai";
import { utilsBoolean } from "";

describe("boolean : method isEmpty", () => {
  it("result ... true", () => {
    assert.isTrue(utilsBoolean.isNotEmpty(true));
  });
  it("result ... false", () => {
    assert.isFalse(utilsBoolean.isNotEmpty(false));
  });
});
