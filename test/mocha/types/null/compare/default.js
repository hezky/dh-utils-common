import { assert } from "chai";
import { utilsNull } from "";

describe("null : method compare", () => {
  it("compare : 0", () => {
    assert.equal(utilsNull.compare(null, null), 0, "compare(null, null) === 0");
  });
});
