import { assert } from "chai";
import { utilsBoolean } from "";

describe("boolean : method is", () => {
  it("is : true", () => {
    assert.isTrue(utilsBoolean.is(true), "is(true) === true");
    assert.isTrue(utilsBoolean.is(false), "is(false) === true");
  });
  it("is : false", () => {
    assert.isFalse(utilsBoolean.is([]), "is([]) === false");
    assert.isFalse(utilsBoolean.is([1, 2, 3]), "is([1, 2, 3]) === false");
    assert.isFalse(
      utilsBoolean.is(new Date("1995-12-17T03:24:00")),
      "is(new Date('1995-12-17T03:24:00')) === false"
    );
    assert.isFalse(
      utilsBoolean.is(() => 1),
      "is(() => 1) === false"
    );
    assert.isFalse(utilsBoolean.is(null), "is(null) === false");
    assert.isFalse(utilsBoolean.is(3), "is(3) === false");
    assert.isFalse(utilsBoolean.is(NaN), "is(NaN) === false");
    assert.isFalse(utilsBoolean.is({}), "is({}) === false");
    assert.isFalse(utilsBoolean.is(/ab+c/), "is(/ab+c/) === false");
    assert.isFalse(utilsBoolean.is("ABC"), "is('ABC') === false");
    assert.isFalse(utilsBoolean.is("true"), "is('true') === false");
    assert.isFalse(utilsBoolean.is(Symbol()), "is(Symbol()) === false");
    assert.isFalse(utilsBoolean.is(Symbol(42)), "is(Symbol(42)) === false");
    assert.isFalse(
      utilsBoolean.is(Symbol("foo")),
      "is(Symbol('foo')) === false"
    );
    assert.isFalse(utilsBoolean.is(undefined), "is(undefined) === false");
    assert.isFalse(utilsBoolean.is(), "is() === false");
  });
});
