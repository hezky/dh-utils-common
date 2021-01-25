import { assert } from "chai";
import { utilsString } from "";

describe("string : method compare", () => {
  it("compare : -1", () => {
    assert.equal(
      utilsString.compare("ABC", "ZXY"),
      -1,
      "compare(ABC, ZXY) === -1"
    );
  });
  it("compare : 0", () => {
    assert.equal(
      utilsString.compare("ABC", "ABC"),
      0,
      "compare(ABC, ABC) === 0"
    );
  });
  it("compare : 1", () => {
    assert.equal(
      utilsString.compare("ZXY", "ABC"),
      1,
      "compare(ZXY, ABC) === 1"
    );
  });
});

describe("string : method copy", () => {
  it("copy", () => {
    assert.equal(utilsString.copy("ABC"), "ABC", "copy(ABC) === ABC");
  });
});

describe("string : method equal", () => {
  it("equal : true", () => {
    assert.isTrue(utilsString.equal("ABC", "ABC"), "equal(ABC,ABC) === true");
  });
  it("equal : false", () => {
    assert.isFalse(utilsString.equal("ABC", "XYZ"), "equal(ABC,XYZ) === false");
  });
});

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

describe("string : method isNumeric", () => {
  it("isNumeric : true", () => {
    assert.isTrue(utilsString.isNumeric("1234"), "isNumeric(1234) === true");
  });
  it("isNumeric : false", () => {
    assert.isFalse(utilsString.isNumeric(null), "isNumeric(null) === false");
    assert.isFalse(
      utilsString.isNumeric(undefined),
      "isNumeric(undefined) === false"
    );
    assert.isFalse(utilsString.isNumeric(true), "isNumeric(true) === false");
    assert.isFalse(utilsString.isNumeric(false), "isNumeric(false) === false");
    assert.isFalse(utilsString.isNumeric("as"), "isNumeric(as) === false");
    assert.isFalse(utilsString.isNumeric("123f"), "isNumeric(123f) === false");
  });
});
