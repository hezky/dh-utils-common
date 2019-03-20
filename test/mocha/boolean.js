import { assert } from "chai";
import { utilsBoolean } from "";

describe("boolean : method compare", () => {
  it("compare", () => {
    assert.equal(utilsBoolean.compare(false, true), -1, "compare(false,true) === -1");
    assert.equal(utilsBoolean.compare(false, false), 0, "compare(false,false) === 0");
    assert.equal(utilsBoolean.compare(true, true), 0, "compare(true,true) === 0");
    assert.equal(utilsBoolean.compare(true, false), 1, "compare(true,false) === 1");
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
    assert.isTrue(utilsBoolean.equal(false, false), "equal(false,false) === true");
    assert.isTrue(utilsBoolean.equal(true, true), "equal(true,true) === true");
  });
  it("equal : false", () => {
    assert.isFalse(utilsBoolean.equal(true, false), "equal(true,false) === false");
    assert.isFalse(utilsBoolean.equal(false, true), "equal(false,true) === false");
  });
});

describe("boolean : method is", () => {
  it("is : true", () => {
    assert.isTrue(utilsBoolean.is(true), "is(true) === true");
    assert.isTrue(utilsBoolean.is(false), "is(false) === true");
  });
  it("is : false", () => {
    assert.isFalse(utilsBoolean.is(3), "is(3) === false");
    assert.isFalse(utilsBoolean.is(undefined), "is(undefined) === false");
    assert.isFalse(utilsBoolean.is(), "is() === false");
    assert.isFalse(utilsBoolean.is("ABC"), "is(ABC) === false");
    assert.isFalse(utilsBoolean.is("true"), "is(true) === false");
    assert.isFalse(utilsBoolean.is(NaN), "is(NaN) === false");
  });
});
