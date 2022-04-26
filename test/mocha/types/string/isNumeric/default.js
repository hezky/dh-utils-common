import { assert } from "chai";
import { utilsString } from "";

describe("string : method isNumeric", () => {
  it("isNumeric : true", () => {
    assert.isTrue(utilsString.isNumeric("1234"), "isNumeric(1234) === true");
  });
  it("isNumeric : false", () => {
    assert.isFalse(utilsString.isNumeric(null), "isNumeric(null) === false");
    assert.isFalse(
      utilsString.isNumeric(undefined),
      "isNumeric(undefined) === false"
    );
    assert.isFalse(utilsString.isNumeric(true), "isNumeric(true) === false");
    assert.isFalse(utilsString.isNumeric(false), "isNumeric(false) === false");
    assert.isFalse(utilsString.isNumeric("as"), "isNumeric(as) === false");
    assert.isFalse(utilsString.isNumeric("123f"), "isNumeric(123f) === false");
  });
});
