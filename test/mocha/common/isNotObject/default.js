import { assert } from "chai";
import { isNotObject } from "";

describe("common : method isNotObject", () => {
  it("isNotObject : false", () => {
    assert.isFalse(isNotObject({}), "isNotObject({}) === false");
    assert.isFalse(
      isNotObject(new Date("1995-12-17T03:24:00")),
      "isNotObject(new Date('1995-12-17T03:24:00')) === false"
    );
  });
  it("isNotObject : true", () => {
    assert.isTrue(isNotObject([]), "isNotObject([]) === true");
    assert.isTrue(isNotObject([1, 2, 3]), "isNotObject([1, 2, 3]) === true");
    assert.isTrue(isNotObject(true), "isNotObject(true) === true");
    assert.isTrue(isNotObject(false), "isNotObject(false) === true");
    assert.isTrue(isNotObject(/ab+c/), "isNotObject(/ab+c/) === true");
    assert.isTrue(
      isNotObject(() => 1),
      "isNotObject(() => 1) === true"
    );
    assert.isTrue(isNotObject(null), "isNotObject(null) === true");
    assert.isTrue(isNotObject(3), "isNotObject(3) === true");
    assert.isTrue(isNotObject(NaN), "isNotObject(NaN) === true");
    assert.isTrue(isNotObject("3"), "isNotObject('3') === true");
    assert.isTrue(isNotObject("ABC"), "isNotObject('ABC') === true");
    assert.isTrue(isNotObject("true"), "isNotObject('true') === true");
    assert.isTrue(isNotObject(Symbol()), "isNotObject(Symbol()) === true");
    assert.isTrue(isNotObject(Symbol(42)), "isNotObject(Symbol(42)) === true");
    assert.isTrue(
      isNotObject(Symbol("foo")),
      "isNotObject(Symbol('foo')) === true"
    );
    assert.isTrue(isNotObject(undefined), "isNotObject(undefined) === true");
    assert.isTrue(isNotObject(), "isNotObject() === true");
  });
});
