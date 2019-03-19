import { assert } from "chai";
import { utilsBoolean } from "./../../src/js/";

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
  it("equal", () => {
    assert.equal(utilsBoolean.equal(true, false), false, "equal(true,false) === false");
    assert.equal(utilsBoolean.equal(false, true), false, "equal(false,true) === false");
    assert.equal(utilsBoolean.equal(false, false), true, "equal(false,false) === true");
    assert.equal(utilsBoolean.equal(true, true), true, "equal(true,true) === true");
  });
});

describe("boolean : method is", () => {
  it("is", () => {
    assert.ok(utilsBoolean.is(true), "is(true) === true");
    assert.ok(utilsBoolean.is(false), "is(false) === true");
    assert.notOk(utilsBoolean.is(3), "is(3) === false");
  });
});
