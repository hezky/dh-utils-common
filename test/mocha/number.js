import { assert } from "chai";
import { utilsNumber } from "";

describe("number : method is", () => {
  it("is : true", () => {
    assert.isTrue(utilsNumber.is(3), "is(3) === true");
    assert.isTrue(utilsNumber.is(NaN), "is(NaN) === true");
  });
  it("is : false", () => {
    assert.isFalse(utilsNumber.is([]), "is([]) === false");
    assert.isFalse(utilsNumber.is([1, 2, 3]), "is([1, 2, 3]) === false");
    assert.isFalse(utilsNumber.is(true), "is(true) === false");
    assert.isFalse(utilsNumber.is(false), "is(false) === false");
    assert.isFalse(utilsNumber.is(new Date("1995-12-17T03:24:00")), "is(new Date('1995-12-17T03:24:00')) === false");
    assert.isFalse(utilsNumber.is(() => 1), "is(() => 1) === false");
    assert.isFalse(utilsNumber.is(null), "is(null) === true");
    assert.isFalse(utilsNumber.is("3"), "is('3') === false");
    assert.isFalse(utilsNumber.is({}), "is({}) === false");
    assert.isFalse(utilsNumber.is(/ab+c/), "is(/ab+c/) === false");
    assert.isFalse(utilsNumber.is("ABC"), "is('ABC') === false");
    assert.isFalse(utilsNumber.is("true"), "is('true') === false");
    assert.isFalse(utilsNumber.is(Symbol()), "is(Symbol()) === false");
    assert.isFalse(utilsNumber.is(Symbol(42)), "is(Symbol(42)) === false");
    assert.isFalse(utilsNumber.is(Symbol("foo")), "is(Symbol('foo')) === false");
    assert.isFalse(utilsNumber.is(undefined), "is(undefined) === false");
    assert.isFalse(utilsNumber.is(), "is() === false");
  });
});
