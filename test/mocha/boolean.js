import { assert } from "chai";
import { utilsBoolean } from "";

describe("boolean : method compare", () => {
  it("compare", () => {
    assert.equal(utilsBoolean.compare(false, true), -1, "compare(false, true) === -1");
    assert.equal(utilsBoolean.compare(false, false), 0, "compare(false, false) === 0");
    assert.equal(utilsBoolean.compare(true, true), 0, "compare(true, true) === 0");
    assert.equal(utilsBoolean.compare(true, false), 1, "compare(true, false) === 1");
  });
});

describe("boolean : method copy", () => {
  it("copy", () => {
    assert.equal(utilsBoolean.copy(false), false, "copy(false) === false");
    assert.equal(utilsBoolean.copy(true), true, "copy(true) === true");
  });
});

describe("boolean : method equal", () => {
  it("equal : true", () => {
    assert.isTrue(utilsBoolean.equal(false, false), "equal(false, false) === true");
    assert.isTrue(utilsBoolean.equal(true, true), "equal(true, true) === true");
  });
  it("equal : false", () => {
    assert.isFalse(utilsBoolean.equal(true, false), "equal(true, false) === false");
    assert.isFalse(utilsBoolean.equal(false, true), "equal(false, true) === false");
  });
});

describe("boolean : method is", () => {
  it("is : true", () => {
    assert.isTrue(utilsBoolean.is(true), "is(true) === true");
    assert.isTrue(utilsBoolean.is(false), "is(false) === true");
  });
  it("is : false", () => {
    assert.isFalse(utilsBoolean.is([]), "is([]) === false");
    assert.isFalse(utilsBoolean.is([1, 2, 3]), "is([1, 2, 3]) === false");
    assert.isFalse(utilsBoolean.is(new Date("1995-12-17T03:24:00")), "is(new Date('1995-12-17T03:24:00')) === false");
    assert.isFalse(utilsBoolean.is(() => 1), "is(() => 1) === false");
    assert.isFalse(utilsBoolean.is(null), "is(null) === false");
    assert.isFalse(utilsBoolean.is(3), "is(3) === false");
    assert.isFalse(utilsBoolean.is(NaN), "is(NaN) === false");
    assert.isFalse(utilsBoolean.is({}), "is({}) === false");
    assert.isFalse(utilsBoolean.is(/ab+c/), "is(/ab+c/) === false");
    assert.isFalse(utilsBoolean.is("ABC"), "is('ABC') === false");
    assert.isFalse(utilsBoolean.is("true"), "is('true') === false");
    assert.isFalse(utilsBoolean.is(Symbol()), "is(Symbol()) === false");
    assert.isFalse(utilsBoolean.is(Symbol(42)), "is(Symbol(42)) === false");
    assert.isFalse(utilsBoolean.is(Symbol("foo")), "is(Symbol('foo')) === false");
    assert.isFalse(utilsBoolean.is(undefined), "is(undefined) === false");
    assert.isFalse(utilsBoolean.is(), "is() === false");
  });
});
