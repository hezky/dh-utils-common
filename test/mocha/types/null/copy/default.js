import { assert } from "chai";
import { utilsNull } from "";

describe("null : method copy", () => {
  it("copy", () => {
    assert.equal(utilsNull.copy(null), null, "copy(null) === null");
  });
});
