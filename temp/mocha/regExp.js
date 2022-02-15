import { assert } from "chai";
import { utilsRegExp } from "";

describe("regexp : method is", () => {
  it("is : true", () => {
    assert.isTrue(utilsRegExp.is(/ab+c/), "is(/ab+c/) === true");
  });
  it("is : false", () => {
    assert.isFalse(utilsRegExp.is([]), "is([]) === false");
    assert.isFalse(utilsRegExp.is([1, 2, 3]), "is([1, 2, 3]) === false");
    assert.isFalse(utilsRegExp.is(true), "is(true) === false");
    assert.isFalse(utilsRegExp.is(false), "is(false) === false");
    assert.isFalse(
      utilsRegExp.is(new Date("1995-12-17T03:24:00")),
      "is(new Date('1995-12-17T03:24:00')) === false"
    );
    assert.isFalse(
      utilsRegExp.is(() => 1),
      "is(() => 1) === false"
    );
    assert.isFalse(utilsRegExp.is(null), "is(null) === false");
    assert.isFalse(utilsRegExp.is(3), "is(3) === false");
    assert.isFalse(utilsRegExp.is(NaN), "is(NaN) === false");
    assert.isFalse(utilsRegExp.is({}), "is({}) === false");
    assert.isFalse(utilsRegExp.is("ABC"), "is('ABC') === false");
    assert.isFalse(utilsRegExp.is("true"), "is('true') === false");
    assert.isFalse(utilsRegExp.is(Symbol()), "is(Symbol()) === false");
    assert.isFalse(utilsRegExp.is(Symbol(42)), "is(Symbol(42)) === false");
    assert.isFalse(
      utilsRegExp.is(Symbol("foo")),
      "is(Symbol('foo')) === false"
    );
    assert.isFalse(utilsRegExp.is(undefined), "is(undefined) === false");
    assert.isFalse(utilsRegExp.is(), "is() === false");
  });
});
