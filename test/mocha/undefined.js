import { assert } from "chai";
import { utilsUndefined } from "";

describe("undefined : method is", () => {
  it("is : true", () => {
    assert.isTrue(utilsUndefined.is(undefined), "is(undefined) === true");
    assert.isTrue(utilsUndefined.is(), "is() === true");
  });
  it("is : false", () => {
    assert.isFalse(utilsUndefined.is([]), "is([]) === false");
    assert.isFalse(utilsUndefined.is([1, 2, 3]), "is([1, 2, 3]) === false");
    assert.isFalse(utilsUndefined.is(true), "is(true) === false");
    assert.isFalse(utilsUndefined.is(false), "is(false) === false");
    assert.isFalse(utilsUndefined.is(new Date("1995-12-17T03:24:00")), "is(new Date('1995-12-17T03:24:00')) === false");
    assert.isFalse(
      utilsUndefined.is(() => 1),
      "is(() => 1) === false"
    );
    assert.isFalse(utilsUndefined.is(null), "is(null) === false");
    assert.isFalse(utilsUndefined.is(3), "is(3) === false");
    assert.isFalse(utilsUndefined.is(NaN), "is(NaN) === false");
    assert.isFalse(utilsUndefined.is({}), "is({}) === false");
    assert.isFalse(utilsUndefined.is(/ab+c/), "is(/ab+c/) === false");
    assert.isFalse(utilsUndefined.is("ABC"), "is('ABC') === false");
    assert.isFalse(utilsUndefined.is("true"), "is('true') === false");
    assert.isFalse(utilsUndefined.is(Symbol()), "is(Symbol()) === false");
    assert.isFalse(utilsUndefined.is(Symbol(42)), "is(Symbol(42)) === false");
    assert.isFalse(utilsUndefined.is(Symbol("foo")), "is(Symbol('foo')) === false");
  });
});
