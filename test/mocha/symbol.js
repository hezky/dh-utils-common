import { assert } from "chai";
import { utilsSymbol } from "";

describe("symbol : method is", () => {
  it("is : true", () => {
    assert.isTrue(utilsSymbol.is(Symbol()), "is(new Symbol) === true");
    assert.isTrue(utilsSymbol.is(Symbol(42)), "is() === true");
    assert.isTrue(utilsSymbol.is(Symbol("foo")), "is() === true");
  });
  it("is : false", () => {
    assert.isFalse(utilsSymbol.is(true), "is(true) === false");
    assert.isFalse(utilsSymbol.is(false), "is(false) === false");
    assert.isFalse(utilsSymbol.is(new Date("1995-12-17T03:24:00")), "is(new Date('1995-12-17T03:24:00')) === false");
    assert.isFalse(utilsSymbol.is(() => 1), "is(() => 1) === false");
    assert.isFalse(utilsSymbol.is(null), "is(null) === false");
    assert.isFalse(utilsSymbol.is(3), "is(3) === false");
    assert.isFalse(utilsSymbol.is(NaN), "is(NaN) === false");
    assert.isFalse(utilsSymbol.is({}), "is({}) === false");
    assert.isFalse(utilsSymbol.is(/ab+c/), "is(/ab+c/) === false");
    assert.isFalse(utilsSymbol.is("ABC"), "is('ABC') === false");
    assert.isFalse(utilsSymbol.is("true"), "is('true') === false");
    assert.isFalse(utilsSymbol.is(undefined), "is(undefined) === false");
    assert.isFalse(utilsSymbol.is(), "is() === false");
  });
});
