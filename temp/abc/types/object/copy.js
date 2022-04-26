import { assert } from "chai";
import { utilsObject } from "";

describe("object : copy", () => {
  it("should return copy of object", () => {
    const test = { a: "c", b: "d" },
      res = utilsObject.copy(test);
    assert.deepEqual(res, test);
  });
  it("should not return same object", () => {
    const test = { a: "c", b: "d" },
      res = utilsObject.copy(test);
    assert.notEqual(res, test);
  });
});
