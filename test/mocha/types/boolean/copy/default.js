import { assert } from "chai";
import { utilsBoolean } from "";

describe("boolean : method copy", () => {
  it("copy", () => {
    assert.equal(utilsBoolean.copy(false), false, "copy(false) === false");
    assert.equal(utilsBoolean.copy(true), true, "copy(true) === true");
  });
});
