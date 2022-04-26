import { assert } from "chai";
import { isNotEmpty } from "";

describe("common : method isNotEmpty", () => {
  it("isNotEmpty check array : true", () => {
    assert.isTrue(isNotEmpty([1, 2, 3]), "isNotEmpty([1, 2, 3]) === true");
  });

  it("isNotEmpty check array : false", () => {
    assert.isFalse(isNotEmpty([]), "isNotEmpty([]) === false");
  });

  it("isNotEmpty boolean : false", () => {
    assert.isFalse(isNotEmpty(false), "isNotEmpty(false) === false");
  });

  it("isNotEmpty boolean : true", () => {
    assert.isTrue(isNotEmpty(true), "isNotEmpty(true) === true");
  });

  it("isNotEmpty date : true", () => {
    assert.isTrue(
      isNotEmpty(new Date("1995-12-17T03:24:00")),
      'isNotEmpty(new Date("1995-12-17T03:24:00")) === true'
    );
  });

  it("isNotEmpty function : true", () => {
    assert.isTrue(
      isNotEmpty(function () {}),
      "isNotEmpty(function () {}) === true"
    );
    assert.isTrue(
      isNotEmpty(() => {}),
      "isNotEmpty(() => {}) === true"
    );
  });

  it("isNotEmpty null : false", () => {
    assert.isFalse(isNotEmpty(null), "isNotEmpty(null) === false");
  });

  it("isNotEmpty number : false", () => {
    assert.isFalse(isNotEmpty(0), "isNotEmpty(0) === false");
  });

  it("isNotEmpty number : true", () => {
    assert.isTrue(isNotEmpty(2), "isNotEmpty(2) === true");
    assert.isTrue(isNotEmpty(3.14), "isNotEmpty(3.14) === true");
  });

  it("isNotEmpty object : false", () => {
    assert.isFalse(isNotEmpty({}), "isNotEmpty({}) === false");
  });

  it("isNotEmpty object : true", () => {
    assert.isTrue(isNotEmpty({ a: 1 }), "isNotEmpty({ a: 1 }) === true");
  });

  it("isNotEmpty regExp : true", () => {
    assert.isTrue(isNotEmpty(/ab+c/), "regExp", "isNotEmpty(/ab+c/) === true");
  });

  it("isNotEmpty string : false", () => {
    assert.isFalse(isNotEmpty(""), 'isNotEmpty("") === false');
  });

  it("isNotEmpty string : true", () => {
    assert.isTrue(isNotEmpty("abcd"), 'isNotEmpty("abcd") === true');
  });

  it("isNotEmpty symbol : true", () => {
    assert.isTrue(isNotEmpty(Symbol()), "isNotEmpty(Symbol()) === true");
  });

  it("isNotEmpty undefined : false", () => {
    assert.isFalse(isNotEmpty(undefined), "isNotEmpty(undefined) === false");
    assert.isFalse(isNotEmpty(), "undefined", "isNotEmpty() === false");
  });
});
