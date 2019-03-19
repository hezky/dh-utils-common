import { assert } from "chai";
import { utilsString } from "./../../src/js/";

describe("string : method compare", () => {
  it("compare : -1", () => {
    assert.equal(utilsString.compare("ABC", "ZXY"), -1);
  });
  it("compare : 0", () => {
    assert.equal(utilsString.compare("ABC", "ABC"), 0);
  });
  it("compare : 1", () => {
    assert.equal(utilsString.compare("ZXY", "ABC"), 1);
  });
});

describe("string : method copy", () => {
  it("copy", () => {
    assert.equal(utilsString.copy("ABC"), "ABC", "copy(ABC) === ABC");
  });
});

describe("string : method equal", () => {
  it("equal", () => {
    assert.equal(utilsString.equal("ABC", "XYZ"), false, "equal(ABC,XYZ) === false");
    assert.equal(utilsString.equal("ABC", "ABC"), true, "equal(ABC,ABC) === true");
  });
});

describe("string : method is", () => {
  it("is", () => {
    assert.ok(utilsString.is("ABC"), "is(ABC) === true");
    assert.notOk(utilsString.is(false), "is(false) === false");
    assert.notOk(utilsString.is(3), "is(3) === false");
  });
});

describe("string : method isNumeric", () => {
  it("isNumeric : true", () => {
    assert.ok(utilsString.isNumeric("1234"), "isNumeric true");
  });

  it("isNumeric : false", () => {
    assert.notOk(utilsString.isNumeric(null), "isNumeric false : null");
    assert.notOk(utilsString.isNumeric(undefined), "isNumeric false : undefined");
    assert.notOk(utilsString.isNumeric("as"), "isNumeric false : alphabet");
    assert.notOk(utilsString.isNumeric("123f"), "isNumeric false : mix numeric and alphabet");
  });
});
