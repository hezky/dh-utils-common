import { assert } from "chai";
import { utilsObject } from "";

describe("object : method isNotEmpty", () => {
  it("isNotEmpty : true", () => {
    assert.isTrue(utilsObject.isNotEmpty({ a: 0 }), "is({a:0}) === true");
  });
  it("isNotEmpty : false", () => {
    assert.isFalse(utilsObject.isNotEmpty({}), "is({}) === false");
  });
});
