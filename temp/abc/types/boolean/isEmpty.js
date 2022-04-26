import { assert } from "chai";
import { utilsBoolean } from "";

describe("boolean : method isEmpty", () => {
  it("result ... true", () => {
    assert.isTrue(utilsBoolean.isEmpty(false));
  });
  it("result ... false", () => {
    assert.isFalse(utilsBoolean.isEmpty(true));
  });
});
