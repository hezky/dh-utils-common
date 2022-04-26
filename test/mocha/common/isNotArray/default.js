import { assert } from "chai";
import { isNotArray } from "";

describe("common : method isNotArray", () => {
  it("isNotArray ... false", () => {
    assert.isFalse(isNotArray([]), "isNotArray([]) === false");
    assert.isFalse(isNotArray([1, 2, 3]), "isNotArray([1,2,3]) === false");
    assert.isFalse(
      isNotArray(new Array()),
      "isNotArray(new Array()) === false"
    );
  });
  it("isNotArray ... true", () => {
    assert.isTrue(isNotArray(true), "isNotArray(true) === true");
    assert.isTrue(isNotArray(false), "isNotArray(false) === true");
    assert.isTrue(
      isNotArray(new Date("1995-12-17T03:24:00")),
      "isNotArray(new Date('1995-12-17T03:24:00')) === true"
    );
    assert.isTrue(
      isNotArray(() => 1),
      "isNotArray(() => 1) === true"
    );
    assert.isTrue(isNotArray(null), "isNotArray(null) === true");
    assert.isTrue(isNotArray(3), "isNotArray(3) === true");
    assert.isTrue(isNotArray(NaN), "isNotArray(NaN) === true");
    assert.isTrue(isNotArray({}), "isNotArray({}) === true");
    assert.isTrue(isNotArray(/ab+c/), "isNotArray(/ab+c/) === true");
    assert.isTrue(isNotArray("ABC"), "isNotArray('ABC') === true");
    assert.isTrue(isNotArray("true"), "isNotArray('true') === true");
    assert.isTrue(isNotArray(Symbol()), "isNotArray(Symbol()) === true");
    assert.isTrue(isNotArray(Symbol(42)), "isNotArray(Symbol(42)) === true");
    assert.isTrue(
      isNotArray(Symbol("foo")),
      "isNotArray(Symbol('foo')) === true"
    );
    assert.isTrue(isNotArray(undefined), "isNotArray(undefined) === true");
    assert.isTrue(isNotArray(), "isNotArray() === true");
  });
});
