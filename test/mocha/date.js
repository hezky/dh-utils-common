import { assert } from "chai";
import { utilsDate } from "";

describe("date : method is", () => {
  it("is : true", () => {
    assert.isTrue(utilsDate.is(new Date("1995-12-17T03:24:00")), "is(new Date('1995-12-17T03:24:00')) === true");
  });
  it("is : false", () => {
    assert.isFalse(utilsDate.is([]), "is([]) === false");
    assert.isFalse(utilsDate.is([1, 2, 3]), "is([1, 2, 3]) === false");
    assert.isFalse(utilsDate.is(true), "is(true) === false");
    assert.isFalse(utilsDate.is(false), "is(false) === false");
    assert.isFalse(
      utilsDate.is(() => 1),
      "is(() => 1) === false"
    );
    assert.isFalse(utilsDate.is(null), "is(null) === false");
    assert.isFalse(utilsDate.is(3), "is(3) === false");
    assert.isFalse(utilsDate.is(NaN), "is(NaN) === false");
    assert.isFalse(utilsDate.is({}), "is({}) === false");
    assert.isFalse(utilsDate.is(/ab+c/), "is(/ab+c/) === false");
    assert.isFalse(utilsDate.is("ABC"), "is('ABC') === false");
    assert.isFalse(utilsDate.is("true"), "is('true') === false");
    assert.isFalse(utilsDate.is(Symbol()), "is(Symbol()) === false");
    assert.isFalse(utilsDate.is(Symbol(42)), "is(Symbol(42)) === false");
    assert.isFalse(utilsDate.is(Symbol("foo")), "is(Symbol('foo')) === false");
    assert.isFalse(utilsDate.is(undefined), "is(undefined) === false");
    assert.isFalse(utilsDate.is(), "is() === false");
  });
});
