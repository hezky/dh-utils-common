import { assert } from "chai";
import { compareReferences } from "";

describe("common : method compareReferences", () => {
  it("compareReferences : 0", () => {
    const objA = {};
    const objB = objA;
    assert.equal(
      compareReferences(objA, objB),
      0,
      "compareReferences(obj,obj) === 0"
    );
  });
  it("compareReferences : -1", () => {
    const objA = {};
    const objB = {};
    assert.equal(compareReferences(objA, objB), -1, "compare(ABC,XYZ) === -1");
  });
});
