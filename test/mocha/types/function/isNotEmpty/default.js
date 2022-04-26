import { assert } from "chai";
import { utilsFunction } from "";

describe("function : method isNotEmpty", () => {
  it("isNotEmpty : true", () => {
    assert.isTrue(
      utilsFunction.isNotEmpty(function () {}),
      "isNotEmpty(symbol) === true"
    );
  });
});
