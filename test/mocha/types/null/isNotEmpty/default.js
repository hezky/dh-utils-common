import { assert } from "chai";
import { utilsNull } from "";

describe("null : method isNotEmpty", () => {
  it("isNotEmpty : false", () => {
    assert.isFalse(utilsNull.isNotEmpty(null), "isNotEmpty(null) === false");
  });
});
