import { assert } from "chai";
import { utilsBigInt } from "";

describe("bigInt : method is", () => {
  it("is : true", () => {
    assert.isTrue(utilsBigInt.is(3n), "is(3n) === true");
  });
  it("is : false", () => {
    assert.isFalse(utilsBigInt.is(3), "is(3) === false");
    assert.isFalse(utilsBigInt.is(NaN), "is(NaN) === false");
    assert.isFalse(utilsBigInt.is([]), "is([]) === false");
    assert.isFalse(utilsBigInt.is([1, 2, 3]), "is([1, 2, 3]) === false");
    assert.isFalse(utilsBigInt.is(true), "is(true) === false");
    assert.isFalse(utilsBigInt.is(false), "is(false) === false");
    assert.isFalse(
      utilsBigInt.is(new Date("1995-12-17T03:24:00")),
      "is(new Date('1995-12-17T03:24:00')) === false"
    );
    assert.isFalse(
      utilsBigInt.is(() => 1),
      "is(() => 1) === false"
    );
    assert.isFalse(utilsBigInt.is(null), "is(null) === true");
    assert.isFalse(utilsBigInt.is("3"), "is('3') === false");
    assert.isFalse(utilsBigInt.is({}), "is({}) === false");
    assert.isFalse(utilsBigInt.is(/ab+c/), "is(/ab+c/) === false");
    assert.isFalse(utilsBigInt.is("ABC"), "is('ABC') === false");
    assert.isFalse(utilsBigInt.is("true"), "is('true') === false");
    assert.isFalse(utilsBigInt.is(Symbol()), "is(Symbol()) === false");
    assert.isFalse(utilsBigInt.is(Symbol(42)), "is(Symbol(42)) === false");
    assert.isFalse(
      utilsBigInt.is(Symbol("foo")),
      "is(Symbol('foo')) === false"
    );
    assert.isFalse(utilsBigInt.is(undefined), "is(undefined) === false");
    assert.isFalse(utilsBigInt.is(), "is() === false");
  });
});
