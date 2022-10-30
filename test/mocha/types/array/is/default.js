import { assert } from "chai";
import { utilsArray } from "";

describe("array : method is", () => {
  it("is ... true", () => {
    assert.isTrue(utilsArray.is([]), "is([]) === true");
    assert.isTrue(utilsArray.is([1, 2, 3]), "is([1,2,3]) === true");
    assert.isTrue(utilsArray.is(new Array()), "is(new Array()) === true");
  });
  it("is ... false", () => {
    assert.isFalse(utilsArray.is(true), "is(true) === false");
    assert.isFalse(utilsArray.is(false), "is(false) === false");
    assert.isFalse(
      utilsArray.is(new Date("1995-12-17T03:24:00")),
      "is(new Date('1995-12-17T03:24:00')) === false"
    );
    assert.isFalse(
      utilsArray.is(() => 1),
      "is(() => 1) === false"
    );
    assert.isFalse(utilsArray.is(null), "is(null) === false");
    assert.isFalse(utilsArray.is(3), "is(3) === false");
    assert.isFalse(utilsArray.is(NaN), "is(NaN) === false");
    assert.isFalse(utilsArray.is({}), "is({}) === false");
    assert.isFalse(utilsArray.is(/ab+c/), "is(/ab+c/) === false");
    assert.isFalse(utilsArray.is("ABC"), "is('ABC') === false");
    assert.isFalse(utilsArray.is("true"), "is('true') === false");
    assert.isFalse(utilsArray.is(Symbol()), "is(Symbol()) === false");
    assert.isFalse(utilsArray.is(Symbol(42)), "is(Symbol(42)) === false");
    assert.isFalse(utilsArray.is(Symbol("foo")), "is(Symbol('foo')) === false");
    assert.isFalse(utilsArray.is(undefined), "is(undefined) === false");
    assert.isFalse(utilsArray.is(), "is() === false");
  });
});
