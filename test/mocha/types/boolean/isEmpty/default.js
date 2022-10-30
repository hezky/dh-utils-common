import { assert } from "chai";
import { utilsBoolean } from "";

describe("boolean : method isEmpty", () => {
  it("isEmpty ... true", () => {
    assert.isTrue(utilsBoolean.isEmpty(false));
  });
  it("isEmpty ... false", () => {
    assert.isFalse(utilsBoolean.isEmpty(true));
  });
});
