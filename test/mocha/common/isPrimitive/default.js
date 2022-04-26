import { assert } from "chai";
import { isPrimitive } from "";

describe("common : method isPrimitive", () => {
  it("isPrimitive check array : false", () => {
    assert.isFalse(isPrimitive([1, 2, 3]), "isPrimitive([1, 2, 3]) === false");
    assert.isFalse(isPrimitive([]), "isPrimitive([]) === false");
  });

  it("isPrimitive check boolean : true", () => {
    assert.isTrue(isPrimitive(false), "isPrimitive(false) === true");
    assert.isTrue(isPrimitive(true), "isPrimitive(true) === true");
  });

  it("isPrimitive check date : false", () => {
    assert.isFalse(
      isPrimitive(new Date("1995-12-17T03:24:00")),
      'isPrimitive(new Date("1995-12-17T03:24:00")) === false'
    );
  });

  it("isPrimitive check function : false", () => {
    assert.isFalse(
      isPrimitive(function () {}),
      "isPrimitive(function () {}) === false"
    );
    assert.isFalse(
      isPrimitive(() => {}),
      "isPrimitive(() => {}) === false"
    );
  });

  it("isPrimitive check null : true", () => {
    assert.isTrue(isPrimitive(null), "isPrimitive(null) === true");
  });

  it("isPrimitive check number : true", () => {
    assert.isTrue(isPrimitive(0), "isPrimitive(0) === true");
    assert.isTrue(isPrimitive(2), "isPrimitive(2) === true");
    assert.isTrue(isPrimitive(3.14), "isPrimitive(3.14) === true");
  });

  it("isPrimitive check object : false", () => {
    assert.isFalse(isPrimitive({}), "isPrimitive({}) === false");
    assert.isFalse(isPrimitive({ a: 1 }), "isPrimitive({ a: 1 }) === false");
  });

  it("isPrimitive check regExp : false", () => {
    assert.isFalse(
      isPrimitive(/ab+c/),
      "regExp",
      "isPrimitive(/ab+c/) === false"
    );
  });

  it("isPrimitive check string : true", () => {
    assert.isTrue(isPrimitive(""), 'isPrimitive("") === true');
    assert.isTrue(isPrimitive("abcd"), 'isPrimitive("abcd") === true');
  });

  it("isPrimitive symbol : false", () => {
    assert.isFalse(isPrimitive(Symbol()), "isPrimitive(Symbol()) === false");
  });

  it("isPrimitive undefined : true", () => {
    assert.isTrue(isPrimitive(undefined), "isPrimitive(undefined) === true");
    assert.isTrue(isPrimitive(), "undefined", "isPrimitive() === true");
  });
});
