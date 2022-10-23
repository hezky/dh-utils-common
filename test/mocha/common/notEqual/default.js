import { assert } from "chai";
import { notEqual } from "";

describe("common : method notEqual", () => {
  it("notEqual check array : false", () => {
    assert.isFalse(notEqual([], []), "notEqual: array empty");
    assert.isFalse(
      notEqual([1, 2, 3, 4], [1, 2, 3, 4]),
      "notEqual: array with numbers"
    );
    assert.isFalse(
      notEqual([{ a: 1, b: 2, c: { d: 2 } }], [{ a: 1, b: 2, c: { d: 2 } }]),
      "notEqual: array with objects"
    );
  });

  it("notEqual check array : true", () => {
    assert.isTrue(
      notEqual([1, 2, 3], [1, 2, 2]),
      "notEqual: array with numbers"
    );
    assert.isTrue(
      notEqual([{ a: 1, b: 2, c: { d: 1 } }], [{ a: 1, b: 2, c: { d: 2 } }]),
      "notEqual: array with objects"
    );
  });

  it("notEqual check boolean : false", () => {
    assert.isFalse(notEqual(false, false), "notEqual: false == false");
    assert.isFalse(notEqual(true, true), "notEqual: false == true");
  });

  it("notEqual check boolean : true", () => {
    assert.isTrue(notEqual(true, false), "notEqual: true == false");
    assert.isTrue(notEqual(false, true), "notEqual: false == true");
  });

  it("notEqual check date : false", () => {
    assert.isFalse(
      notEqual(
        new Date("1995-12-17T03:24:00"),
        new Date("1995-12-17T03:24:00")
      ),
      "notEqual: date == date"
    );
  });

  it("notEqual check date : true", () => {
    assert.isTrue(
      notEqual(
        new Date("1995-12-18T03:24:00"),
        new Date("1995-12-17T03:24:00")
      ),
      "notEqual: date > date"
    );
    assert.isTrue(
      notEqual(
        new Date("1995-12-16T03:24:00"),
        new Date("1995-12-17T03:24:00")
      ),
      "notEqual: date < date"
    );
  });

  it("notEqual check function : false", () => {
    const a = function () {
      return true;
    };
    const b = a;
    assert.isFalse(notEqual(a, b), "equa check function: reference");
  });

  it("notEqual check function : true", () => {
    const a = function () {
      return true;
    };
    const b = function () {
      return true;
    };
    assert.isTrue(
      notEqual(a, b),
      "notEqual check function: different function"
    );
  });

  it("notEqual check null : false", () => {
    assert.isFalse(notEqual(null, null), "notEqual check null: false");
  });

  it("notEqual check number : false", () => {
    assert.isFalse(notEqual(5, 5), "notEqual check number: false");
    assert.isFalse(notEqual(0, 0), "notEqual check number: false");
  });

  it("notEqual check number : true", () => {
    assert.isTrue(notEqual(2, 1), "notEqual check number: true");
    assert.isTrue(notEqual(3.14, 0), "notEqual check number: true");
    assert.isTrue(notEqual(0, 5), "notEqual check number: true");
  });

  it("notEqual check object: false", () => {
    const object1 = { a: 1, b: 2 };
    const object2 = { a: 1, b: 2 };
    const res = notEqual(object1, object2);
    assert.isFalse(res, "notEqual check object: false");
  });

  it("notEqual check deep object: false", () => {
    const object1 = { a: 1, b: 2, c: { a: 1, b: 2 } };
    const object2 = { a: 1, b: 2, c: { a: 1, b: 2 } };
    const res = notEqual(object1, object2);
    assert.isFalse(res, "notEqual check deep object: false");
  });

  it("notEqual check object: is notEqual with atribute array", () => {
    const object1 = { a: 1, b: 2, c: [1, 2] };
    const object2 = { a: 1, b: 2, c: [1, 2] };
    const res = notEqual(object1, object2);
    assert.isFalse(res, "notEqual cTrueXheck object: false");
  });

  it("notEqual check object: is not notEqual", () => {
    const object2 = { a: 1, b: 2 };
    const object1 = { a: 1, b: 3 };
    const res = notEqual(object1, object2);
    assert.isTrue(res, "notEqual check object: true");
  });

  it("qual check object: props is not sorted", () => {
    const object1 = { b: 2, a: 1 };
    const object2 = { a: 1, b: 2 };
    const res = notEqual(object1, object2);
    assert.isFalse(res, "notEqual check object: false");
  });

  it("notEqual check regExp: false", () => {
    assert.isFalse(notEqual(/\d+/, /\d+/), "notEqual(regExp,regExp) === true");
    assert.isFalse(
      notEqual(new RegExp(/\d+/), /\d+/),
      "notEqual(regExp,regExp) === true"
    );
    assert.isFalse(
      notEqual(new RegExp("\\d+"), /\d+/),
      "notEqual(regExp,regExp) === true"
    );
  });

  it("notEqual check regExp: true", () => {
    assert.isTrue(
      notEqual(/\d+/, /fooBar/gi),
      "notEqual(regExp,regExp) === true"
    );
  });

  it("notEqual check string: false", () => {
    assert.isFalse(notEqual("ABC", "ABC"), "notEqual(ABC,ABC) === true");
  });

  it("notEqual check string: true", () => {
    assert.isTrue(notEqual("ABC", "XYZ"), "notEqual(ABC,XYZ) === true");
  });

  it("notEqual check symbol: false", () => {
    const a = Symbol("a");
    const b = a;
    assert.isFalse(notEqual(a, b), "notEqual(symbol,symbol) === true");
    assert.isFalse(
      notEqual(Symbol.for("abc"), Symbol.for("abc")),
      'notEqual(Symbol.for("abc"),Symbol.for("abc")) === true'
    );
  });

  it("notEqual check symbol: true", () => {
    assert.isTrue(
      notEqual(Symbol("a"), Symbol("a")),
      "notEqual(symbol,symbol) === true"
    );
    assert.isTrue(
      notEqual(Symbol(), Symbol()),
      "notEqual(symbol,symbol) === true"
    );
  });

  it("notEqual check undefined: false", () => {
    assert.isFalse(
      notEqual(undefined, undefined),
      "notEqual(undefined, undefined) === true"
    );
  });
});
