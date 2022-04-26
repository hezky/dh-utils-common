import { assert } from "chai";
import { equalReferences } from "";

describe("common : method equalReferences", () => {
  it("equalReferences : true", () => {
    const objA = {};
    const objB = objA;
    assert.isTrue(
      equalReferences(objA, objB),
      "equalReferences(obj,obj) === true"
    );
  });
  it("equalReferences : false", () => {
    const objA = {};
    const objB = {};
    assert.isFalse(
      equalReferences(objA, objB),
      "equalReferences(obj,obj) === false"
    );
  });
});
