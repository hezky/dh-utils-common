import { assert } from "chai";
import { equal } from "";

describe("common : method equal", () => {
  it("equal check array : true", () => {
    assert.isTrue(equal([], []), "equal: array empty");
    assert.isTrue(
      equal([1, 2, 3, 4], [1, 2, 3, 4]),
      "equal: array with numbers"
    );
    assert.isTrue(
      equal([{ a: 1, b: 2, c: { d: 2 } }], [{ a: 1, b: 2, c: { d: 2 } }]),
      "equal: array with objects"
    );
  });

  it("equal check array : false", () => {
    assert.isFalse(equal([1, 2, 3], [1, 2, 2]), "equal: array with numbers");
    assert.isFalse(
      equal([{ a: 1, b: 2, c: { d: 1 } }], [{ a: 1, b: 2, c: { d: 2 } }]),
      "equal: array with objects"
    );
  });

  it("equal check boolean : true", () => {
    assert.isTrue(equal(false, false), "equal: false == false");
    assert.isTrue(equal(true, true), "equal: true == true");
  });

  it("equal check boolean : false", () => {
    assert.isFalse(equal(false, true), "equal: false == true");
    assert.isFalse(equal(true, false), "equal: true == false");
  });

  it("equal check date : true", () => {
    assert.isTrue(
      equal(new Date("1995-12-17T03:24:00"), new Date("1995-12-17T03:24:00")),
      "equal: date == date"
    );
  });

  it("equal check date : false", () => {
    assert.isFalse(
      equal(new Date("1995-12-18T03:24:00"), new Date("1995-12-17T03:24:00")),
      "equal: date > date"
    );
    assert.isFalse(
      equal(new Date("1995-12-16T03:24:00"), new Date("1995-12-17T03:24:00")),
      "equal: date < date"
    );
  });

  it("equal check function : true", () => {
    const a = function () {
      return true;
    };
    const b = a;
    assert.isTrue(equal(a, b), "equa check function: reference");
  });

  it("equal check function : false", () => {
    const a = function () {
      return true;
    };
    const b = function () {
      return true;
    };
    assert.isFalse(equal(a, b), "equal check function: different function");
  });

  it("equal check null : true", () => {
    assert.isTrue(equal(null, null), "equal check null: true");
  });

  it("equal check number : true", () => {
    assert.isTrue(equal(5, 5), "equal check number: true");
    assert.isTrue(equal(0, 0), "equal check number: true");
  });

  it("equal check number : false", () => {
    assert.isFalse(equal(2, 1), "equal check number: false");
    assert.isFalse(equal(3.14, 0), "equal check number: false");
    assert.isFalse(equal(0, 5), "equal check number: false");
  });

  it("equal check object: true", () => {
    const object1 = { a: 1, b: 2 };
    const object2 = { a: 1, b: 2 };
    const res = equal(object1, object2);
    assert.isTrue(res, "equal check object: true");
  });

  it("equal check deep object: true", () => {
    const object1 = { a: 1, b: 2, c: { a: 1, b: 2 } };
    const object2 = { a: 1, b: 2, c: { a: 1, b: 2 } };
    const res = equal(object1, object2);
    assert.isTrue(res, "equal check deep object: true");
  });

  it("equal check object: is equal with atribute array", () => {
    const object1 = { a: 1, b: 2, c: [1, 2] };
    const object2 = { a: 1, b: 2, c: [1, 2] };
    const res = equal(object1, object2);
    assert.isTrue(res, "equal check object: true");
  });

  it("equal check object: is not equal", () => {
    const object2 = { a: 1, b: 2 };
    const object1 = { a: 1, b: 3 };
    const res = equal(object1, object2);
    assert.isFalse(res, "equal check object: false");
  });

  it("equal check object: props is not sorted", () => {
    const object1 = { b: 2, a: 1 };
    const object2 = { a: 1, b: 2 };
    const res = equal(object1, object2);
    assert.isTrue(res, "equal check object: true");
  });

  it("equal check regExp: true", () => {
    assert.isTrue(equal(/\d+/, /\d+/), "equal(regExp,regExp) === true");
    const regExpA = new RegExp(/\d+/);
    assert.isTrue(equal(regExpA, /\d+/), "equal(regExp,regExp) === true");
    const regExpB = new RegExp("\\d+");
    assert.isTrue(
      equal(regExpB, /\d+/),
      "equal(regExp,regExp) === true"
    );
  });

  it("equal check regExp: false", () => {
    assert.isFalse(equal(/\d+/, /fooBar/gi), "equal(regExp,regExp) === false");
  });

  it("equal check string: true", () => {
    assert.isTrue(equal("ABC", "ABC"), "equal(ABC,ABC) === true");
  });

  it("equal check string: false", () => {
    assert.isFalse(equal("ABC", "XYZ"), "equal(ABC,XYZ) === false");
  });

  it("equal check symbol: true", () => {
    const a = Symbol("a");
    const b = a;
    assert.isTrue(equal(a, b), "equal(symbol,symbol) === true");
    assert.isTrue(
      equal(Symbol.for("abc"), Symbol.for("abc")),
      'equal(Symbol.for("abc"),Symbol.for("abc")) === true'
    );
  });

  it("equal check symbol: false", () => {
    assert.isFalse(
      equal(Symbol("a"), Symbol("a")),
      "equal(symbol,symbol) === false"
    );
    assert.isFalse(equal(Symbol(), Symbol()), "equal(symbol,symbol) === false");
  });

  it("equal check undefined: true", () => {
    assert.isTrue(
      equal(undefined, undefined),
      "equal(undefined, undefined) === true"
    );
  });
});
