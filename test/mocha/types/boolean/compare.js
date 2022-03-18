import { assert } from "chai";
import { utilsBoolean } from "";

describe("boolean : method compare", () => {
  it("compare", () => {
    assert.equal(
      utilsBoolean.compare(false, true),
      -1,
      "compare(false, true) === -1"
    );
    assert.equal(
      utilsBoolean.compare(false, false),
      0,
      "compare(false, false) === 0"
    );
    assert.equal(
      utilsBoolean.compare(true, true),
      0,
      "compare(true, true) === 0"
    );
    assert.equal(
      utilsBoolean.compare(true, false),
      1,
      "compare(true, false) === 1"
    );
  });
});
