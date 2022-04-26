import { assert } from "chai";
import { utilsObject } from "";

describe("object : equal", () => {
  it("object equal", () => {
    const object1 = { a: 1, b: 2 },
      object2 = { a: 1, b: 2 },
      res = utilsObject.equal(object1, object2);
    assert.ok(res, "is equal");
  });
  it("object deep equal", () => {
    const object1 = { a: 1, b: 2, c: { a: 1, b: 2 } },
      object2 = { a: 1, b: 2, c: { a: 1, b: 2 } },
      res = utilsObject.equal(object1, object2);
    assert.ok(res, "is equal");
  });
  it("object is equal with atribute array", () => {
    const object1 = { a: 1, b: 2, c: [1, 2] },
      object2 = { a: 1, b: 2, c: [1, 2] },
      res = utilsObject.equal(object1, object2);
    assert.ok(res, "utilsObject.is equal");
  });
  it("object is not equal", () => {
    const object2 = { a: 1, b: 2 },
      object1 = { a: 1, b: 3 },
      res = utilsObject.equal(object1, object2);
    assert.notOk(res, "utilsObject.is not equal");
  });
  it("object is equal and props is not sorted", () => {
    const object1 = { b: 2, a: 1 },
      object2 = { a: 1, b: 2 },
      res = utilsObject.equal(object1, object2);
    assert.ok(res, "is equal");
  });
});
