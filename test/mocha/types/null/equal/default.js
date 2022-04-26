import { assert } from "chai";
import { utilsNull } from "";

describe("null : method equal", () => {
  it("equal : true", () => {
    assert.isTrue(utilsNull.equal(null, null), "equal(null,null) === true");
  });
});
