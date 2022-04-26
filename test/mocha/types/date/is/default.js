import { assert } from "chai";
import { isDate } from "";

describe("date : method is", () => {
  it("is : true", () => {
    assert.isTrue(
      isDate(new Date("1995-12-17T03:24:00")),
      "is(new Date('1995-12-17T03:24:00')) === true"
    );
  });
  it("is : false", () => {
    assert.isFalse(isDate([]), "is([]) === false");
    assert.isFalse(isDate([1, 2, 3]), "is([1, 2, 3]) === false");
    assert.isFalse(isDate(true), "is(true) === false");
    assert.isFalse(isDate(false), "is(false) === false");
    assert.isFalse(
      isDate(() => 1),
      "is(() => 1) === false"
    );
    assert.isFalse(isDate(null), "is(null) === false");
    assert.isFalse(isDate(3), "is(3) === false");
    assert.isFalse(isDate(NaN), "is(NaN) === false");
    assert.isFalse(isDate({}), "is({}) === false");
    assert.isFalse(isDate(/ab+c/), "is(/ab+c/) === false");
    assert.isFalse(isDate("ABC"), "is('ABC') === false");
    assert.isFalse(isDate("true"), "is('true') === false");
    assert.isFalse(isDate(Symbol()), "is(Symbol()) === false");
    assert.isFalse(isDate(Symbol(42)), "is(Symbol(42)) === false");
    assert.isFalse(isDate(Symbol("foo")), "is(Symbol('foo')) === false");
    assert.isFalse(isDate(undefined), "is(undefined) === false");
    assert.isFalse(isDate(), "is() === false");
  });
});
