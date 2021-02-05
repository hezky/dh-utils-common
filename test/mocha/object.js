import { assert } from "chai";
import { utilsObject } from "";

describe("object : method compare", () => {
  it("compare : -1", () => {
    assert.equal(
      utilsObject.compare({ prop1: "10" }, { prop2: "10" }),
      -1,
      "utilsObject.compare({prop1: '10'},{prop2: '10'})"
    );
    assert.equal(
      utilsObject.compare({ prop1: "10" }, { prop1: "11" }),
      -1,
      "utilsObject.compare({prop1: '10'},{prop1: '11'}"
    );
    assert.equal(
      utilsObject.compare({ prop1: "10" }, { prop1: "10", prop2: "10" }),
      -1,
      "utilsObject.compare({prop1: '10'},{prop1: '10',prop2: '10'})"
    );
  });
  it("compare : 0", () => {
    const a1 = {},
      b1 = a1;
    assert.equal(utilsObject.compare(a1, b1), 0);
    assert.equal(utilsObject.compare({ prop1: 10 }, { prop1: 10 }), 0);
  });
  it("compare : 1", () => {
    assert.equal(utilsObject.compare({ prop2: "10" }, { prop1: "10" }), 1);
    assert.equal(utilsObject.compare({ prop1: "11" }, { prop1: "10" }), 1);
    assert.equal(
      utilsObject.compare({ prop1: "10", prop2: "10" }, { prop1: "10" }),
      1
    );
  });
});

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

describe("object : method is", () => {
  it("is : true", () => {
    assert.isTrue(utilsObject.is({}), "is({}) === true");
    assert.isTrue(
      utilsObject.is(new Date("1995-12-17T03:24:00")),
      "is(new Date('1995-12-17T03:24:00')) === true"
    );
    assert.isTrue(utilsObject.is(/ab+c/), "is(/ab+c/) === true");
  });
  it("is : false", () => {
    assert.isFalse(utilsObject.is([]), "is([]) === false");
    assert.isFalse(utilsObject.is([1, 2, 3]), "is([1, 2, 3]) === false");
    assert.isFalse(utilsObject.is(true), "is(true) === false");
    assert.isFalse(utilsObject.is(false), "is(false) === false");
    assert.isFalse(
      utilsObject.is(() => 1),
      "is(() => 1) === false"
    );
    assert.isFalse(utilsObject.is(null), "is(null) === true");
    assert.isFalse(utilsObject.is(3), "is(3) === false");
    assert.isFalse(utilsObject.is(NaN), "is(NaN) === false");
    assert.isFalse(utilsObject.is("3"), "is('3') === false");
    assert.isFalse(utilsObject.is("ABC"), "is('ABC') === false");
    assert.isFalse(utilsObject.is("true"), "is('true') === false");
    assert.isFalse(utilsObject.is(Symbol()), "is(Symbol()) === false");
    assert.isFalse(utilsObject.is(Symbol(42)), "is(Symbol(42)) === false");
    assert.isFalse(
      utilsObject.is(Symbol("foo")),
      "is(Symbol('foo')) === false"
    );
    assert.isFalse(utilsObject.is(undefined), "is(undefined) === false");
    assert.isFalse(utilsObject.is(), "is() === false");
  });
});

describe("object : method isEmpty", () => {
  it("isEmpty : true", () => {
    assert.isTrue(utilsObject.isEmpty({}), "is({}) === true");
  });
  it("isEmpty : false", () => {
    assert.isFalse(utilsObject.isEmpty({ a: 0 }), "is({a:0}) === false");
  });
});

describe("object : method isNotEmpty", () => {
  it("isNotEmpty : true", () => {
    assert.isTrue(utilsObject.isNotEmpty({ a: 0 }), "is({a:0}) === true");
  });
  it("isNotEmpty : false", () => {
    assert.isFalse(utilsObject.isNotEmpty({}), "is({}) === false");
  });
});
