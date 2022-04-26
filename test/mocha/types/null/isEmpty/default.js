import { assert } from "chai";
import { utilsNull } from "";

describe("null : method isEmpty", () => {
  it("isEmpty : true", () => {
    assert.isTrue(utilsNull.isEmpty(null), "isEmpty(null) === true");
  });
});
