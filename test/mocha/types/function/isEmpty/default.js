import { assert } from "chai";
import { utilsFunction } from "";

describe("function : method isEmpty", () => {
  it("isEmpty : false", () => {
    assert.isFalse(
      utilsFunction.isEmpty(function () {}),
      "isEmpty(function) === false"
    );
  });
});
