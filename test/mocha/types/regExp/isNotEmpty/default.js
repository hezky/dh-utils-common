import { assert } from "chai";
import { utilsRegExp } from "";

describe("regExp : method isNotEmpty", () => {
  it("isNotEmpty : true", () => {
    assert.isTrue(utilsRegExp.isNotEmpty(/\d+/));
  });
});
