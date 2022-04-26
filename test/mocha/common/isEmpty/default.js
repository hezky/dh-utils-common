import { assert } from "chai";
import { isEmpty } from "";

describe("common : method isEmpty", () => {
  it("isEmpty check array : true", () => {
    assert.isTrue(isEmpty([]), "isEmpty([]) === true");
  });

  it("isEmpty check array : false", () => {
    assert.isFalse(isEmpty([1, 2, 3]), "isEmpty([1, 2, 3]) === false");
  });

  it("isEmpty boolean : true", () => {
    assert.isTrue(isEmpty(false), "isEmpty(false) === true");
  });

  it("isEmpty boolean : false", () => {
    assert.isFalse(isEmpty(true), "isEmpty(true) === false");
  });

  it("isEmpty date : false", () => {
    assert.isFalse(
      isEmpty(new Date("1995-12-17T03:24:00")),
      'isEmpty(new Date("1995-12-17T03:24:00")) === false'
    );
  });

  it("isEmpty function : false", () => {
    assert.isFalse(
      isEmpty(function () {}),
      "isEmpty(function () {}) === false"
    );
    assert.isFalse(
      isEmpty(() => {}),
      "isEmpty(() => {}) === false"
    );
  });

  it("isEmpty null : true", () => {
    assert.isTrue(isEmpty(null), "isEmpty(null) === true");
  });

  it("isEmpty number : true", () => {
    assert.isTrue(isEmpty(0), "isEmpty(0) === true");
  });

  it("isEmpty number : false", () => {
    assert.isFalse(isEmpty(2), "isEmpty(2) === false");
    assert.isFalse(isEmpty(3.14), "isEmpty(3.14) === false");
  });

  it("isEmpty object : true", () => {
    assert.isTrue(isEmpty({}), "isEmpty({}) === true");
  });

  it("isEmpty object : false", () => {
    assert.isFalse(isEmpty({ a: 1 }), "isEmpty({ a: 1 }) === false");
  });

  it("isEmpty regExp : false", () => {
    assert.isFalse(isEmpty(/ab+c/), "regExp", "isEmpty(/ab+c/) === false");
  });

  it("isEmpty string : true", () => {
    assert.isTrue(isEmpty(""), 'isEmpty("") === true');
  });

  it("isEmpty string : false", () => {
    assert.isFalse(isEmpty("abcd"), 'isEmpty("abcd") === false');
  });

  it("isEmpty symbol : false", () => {
    assert.isFalse(isEmpty(Symbol()), "isEmpty(Symbol()) === false");
  });

  it("isEmpty undefined : true", () => {
    assert.isTrue(isEmpty(undefined), "isEmpty(undefined) === true");
    assert.isTrue(isEmpty(), "undefined", "isEmpty() === true");
  });
});
