import { assert } from "chai";
import { utilsString } from "";

describe("string : method is", () => {
  it("is : true", () => {
    assert.isTrue(utilsString.is("ABC"), "is(ABC) === true");
  });
  it("is : false", () => {
    assert.isFalse(utilsString.is([]), "is([]) === false");
    assert.isFalse(utilsString.is([1, 2, 3]), "is([1, 2, 3]) === false");
    assert.isFalse(utilsString.is(true), "is(true) === false");
    assert.isFalse(utilsString.is(false), "is(false) === false");
    assert.isFalse(
      utilsString.is(new Date("1995-12-17T03:24:00")),
      "is(new Date('1995-12-17T03:24:00')) === false"
    );
    assert.isFalse(
      utilsString.is(() => 1),
      "is(() => 1) === false"
    );
    assert.isFalse(utilsString.is(null), "is(null) === false");
    assert.isFalse(utilsString.is(3), "is(3) === false");
    assert.isFalse(utilsString.is(NaN), "is(NaN) === false");
    assert.isFalse(utilsString.is({}), "is({}) === false");
    assert.isFalse(utilsString.is(/ab+c/), "is(/ab+c/) === false");
    assert.isFalse(utilsString.is(Symbol()), "is(Symbol()) === false");
    assert.isFalse(utilsString.is(Symbol(42)), "is(Symbol(42)) === false");
    assert.isFalse(
      utilsString.is(Symbol("foo")),
      "is(Symbol('foo')) === false"
    );
    assert.isFalse(utilsString.is(undefined), "is(undefined) === false");
    assert.isFalse(utilsString.is(), "is() === false");
  });
});
