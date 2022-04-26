import { assert } from "chai";
import { utilsObject } from "";

describe("object : method isEmpty", () => {
  it("isEmpty : true", () => {
    assert.isTrue(utilsObject.isEmpty({}), "is({}) === true");
  });
  it("isEmpty : false", () => {
    assert.isFalse(utilsObject.isEmpty({ a: 0 }), "is({a:0}) === false");
  });
});
