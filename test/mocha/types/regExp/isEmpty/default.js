import { assert } from "chai";
import { utilsRegExp } from "";

describe("regExp : method isEmpty", () => {
  it("isEmpty : false", () => {
    assert.isFalse(utilsRegExp.isEmpty(/\d+/));
  });
});
