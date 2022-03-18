import { assert } from "chai";
import { utilsString } from "";

describe("string : method isNotEmpty", () => {
  it("isNotEmpty : true", () => {
    assert.isTrue(utilsString.isNotEmpty("123"));
  });
  it("isNotEmpty : false", () => {
    assert.isFalse(utilsString.isNotEmpty(""));
  });
});
