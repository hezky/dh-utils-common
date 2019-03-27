import { assert } from "chai";
import { utilsObject } from "";

describe("object : method is", () => {
  it("is : true", () => {
    assert.isTrue(utilsObject.is({}), "is({}) === true");
    assert.isTrue(utilsObject.is(new Date("1995-12-17T03:24:00")), "is(new Date('1995-12-17T03:24:00')) === true");
    assert.isTrue(utilsObject.is(/ab+c/), "is(/ab+c/) === true");
  });
  it("is : false", () => {
    assert.isFalse(utilsObject.is([]), "is([]) === false");
    assert.isFalse(utilsObject.is([1, 2, 3]), "is([1, 2, 3]) === false");
    assert.isFalse(utilsObject.is(true), "is(true) === false");
    assert.isFalse(utilsObject.is(false), "is(false) === false");
    assert.isFalse(utilsObject.is(() => 1), "is(() => 1) === false");
    assert.isFalse(utilsObject.is(null), "is(null) === true");
    assert.isFalse(utilsObject.is(3), "is(3) === false");
    assert.isFalse(utilsObject.is(NaN), "is(NaN) === false");
    assert.isFalse(utilsObject.is("3"), "is('3') === false");
    assert.isFalse(utilsObject.is("ABC"), "is('ABC') === false");
    assert.isFalse(utilsObject.is("true"), "is('true') === false");
    assert.isFalse(utilsObject.is(Symbol()), "is(Symbol()) === false");
    assert.isFalse(utilsObject.is(Symbol(42)), "is(Symbol(42)) === false");
    assert.isFalse(utilsObject.is(Symbol("foo")), "is(Symbol('foo')) === false");
    assert.isFalse(utilsObject.is(undefined), "is(undefined) === false");
    assert.isFalse(utilsObject.is(), "is() === false");
  });
});
