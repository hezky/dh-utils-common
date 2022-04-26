import { assert } from "chai";
import { utilsUndefined } from "";

describe("undefined : method isNotEmpty", () => {
  it("isNotEmpty : false", () => {
    assert.isFalse(
      utilsUndefined.isNotEmpty(undefined),
      "isNotEmpty(undefined) === false"
    );
  });
});
