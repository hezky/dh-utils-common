import { assert } from "chai";
import { utilsBoolean } from "";

describe("boolean : method equal", () => {
  it("equal : true", () => {
    assert.isTrue(
      utilsBoolean.equal(false, false),
      "equal(false, false) === true"
    );
    assert.isTrue(utilsBoolean.equal(true, true), "equal(true, true) === true");
  });
  it("equal : false", () => {
    assert.isFalse(
      utilsBoolean.equal(true, false),
      "equal(true, false) === false"
    );
    assert.isFalse(
      utilsBoolean.equal(false, true),
      "equal(false, true) === false"
    );
  });
});
