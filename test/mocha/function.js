import { assert } from "chai";
import { utilsFunction } from "";

describe("function : method is", () => {
  it("is : true", () => {
    assert.isTrue(
      utilsFunction.is(() => 1),
      "is(() => 1) === true"
    );
  });
  it("is : false", () => {
    assert.isFalse(utilsFunction.is([]), "is([]) === false");
    assert.isFalse(utilsFunction.is([1, 2, 3]), "is([1, 2, 3]) === false");
    assert.isFalse(utilsFunction.is(true), "is(true) === false");
    assert.isFalse(utilsFunction.is(false), "is(false) === false");
    assert.isFalse(
      utilsFunction.is(new Date("1995-12-17T03:24:00")),
      "is(new Date('1995-12-17T03:24:00')) === false"
    );
    assert.isFalse(utilsFunction.is(null), "is(null) === false");
    assert.isFalse(utilsFunction.is(3), "is(3) === false");
    assert.isFalse(utilsFunction.is(NaN), "is(NaN) === false");
    assert.isFalse(utilsFunction.is({}), "is({}) === false");
    assert.isFalse(utilsFunction.is(/ab+c/), "is(/ab+c/) === false");
    assert.isFalse(utilsFunction.is("ABC"), "is('ABC') === false");
    assert.isFalse(utilsFunction.is("true"), "is('true') === false");
    assert.isFalse(utilsFunction.is(Symbol()), "is(Symbol()) === false");
    assert.isFalse(utilsFunction.is(Symbol(42)), "is(Symbol(42)) === false");
    assert.isFalse(
      utilsFunction.is(Symbol("foo")),
      "is(Symbol('foo')) === false"
    );
    assert.isFalse(utilsFunction.is(undefined), "is(undefined) === false");
    assert.isFalse(utilsFunction.is(), "is() === false");
  });
});
