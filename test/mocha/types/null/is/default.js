import { assert } from "chai";
import { utilsNull } from "";

describe("null : method is", () => {
  it("is : true", () => {
    assert.isTrue(utilsNull.is(null), "is(null) === true");
  });
  it("is : false", () => {
    assert.isFalse(utilsNull.is([]), "is([]) === false");
    assert.isFalse(utilsNull.is([1, 2, 3]), "is([1, 2, 3]) === false");
    assert.isFalse(utilsNull.is(true), "is(true) === false");
    assert.isFalse(utilsNull.is(false), "is(false) === false");
    assert.isFalse(
      utilsNull.is(new Date("1995-12-17T03:24:00")),
      "is(new Date('1995-12-17T03:24:00')) === false"
    );
    assert.isFalse(
      utilsNull.is(() => 1),
      "is(() => 1) === false"
    );
    assert.isFalse(utilsNull.is(3), "is(3) === false");
    assert.isFalse(utilsNull.is(NaN), "is(NaN) === false");
    assert.isFalse(utilsNull.is({}), "is({}) === false");
    assert.isFalse(utilsNull.is(/ab+c/), "is(/ab+c/) === false");
    assert.isFalse(utilsNull.is("ABC"), "is('ABC') === false");
    assert.isFalse(utilsNull.is("true"), "is('true') === false");
    assert.isFalse(utilsNull.is(Symbol()), "is(Symbol()) === false");
    assert.isFalse(utilsNull.is(Symbol(42)), "is(Symbol(42)) === false");
    assert.isFalse(utilsNull.is(Symbol("foo")), "is(Symbol('foo')) === false");
    assert.isFalse(utilsNull.is(undefined), "is(undefined) === false");
    assert.isFalse(utilsNull.is(), "is() === false");
  });
});
