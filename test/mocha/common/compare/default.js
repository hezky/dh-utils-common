import { assert } from "chai";
import { compare } from "";

describe("common : method compare", () => {
  it("compare check array : 0", () => {
    assert.equal(compare([], []), 0, "compare: array empty");
    assert.equal(
      compare([1, 2, 3, 4], [1, 2, 3, 4]),
      0,
      "compare: array with numbers === 0"
    );
    assert.equal(
      compare([{ a: 1, b: 2, c: { d: 2 } }], [{ a: 1, b: 2, c: { d: 2 } }]),
      0,
      "compare: array with objects === 0"
    );
  });

  it("compare check array : -1", () => {
    assert.equal(
      compare([1, 2, 1], [1, 2, 2]),
      -1,
      "compare: array with numbers === -1"
    );
    assert.equal(
      compare([{ a: 1, b: 2, c: { d: 1 } }], [{ a: 1, b: 2, c: { d: 2 } }]),
      -1,
      "compare: array with objects === -1"
    );
  });

  it("compare check array : 1", () => {
    assert.equal(
      compare([1, 2, 3], [1, 2, 2]),
      1,
      "compare: array with numbers === 1"
    );
    assert.equal(
      compare([{ a: 1, b: 2, c: { d: 3 } }], [{ a: 1, b: 2, c: { d: 2 } }]),
      1,
      "compare: array with objects === 1"
    );
  });

  it("compare check boolean : 0", () => {
    assert.equal(compare(false, false), 0, "compare(false, false) === 0");
    assert.equal(compare(true, true), 0, "compare(true, true) === 0");
  });

  it("compare check boolean : -1", () => {
    assert.equal(compare(false, true), -1, "compare(false, true) === -1");
  });

  it("compare check boolean : 1", () => {
    assert.equal(compare(true, false), 1, "compare(true, false) === 1");
  });

  it("compare check date : 0", () => {
    assert.equal(
      compare(new Date("1995-12-17T03:24:00"), new Date("1995-12-17T03:24:00")),
      0,
      "compare(date, date) === 0"
    );
  });

  it("compare check date : -1", () => {
    assert.equal(
      compare(new Date("1995-12-16T03:24:00"), new Date("1995-12-17T03:24:00")),
      -1,
      "compare(date, date) === -1"
    );
  });

  it("compare check date : 1", () => {
    assert.equal(
      compare(new Date("1995-12-18T03:24:00"), new Date("1995-12-17T03:24:00")),
      1,
      "compare(date, date) === 1"
    );
  });

  it("compare check function : 0 (reference)", () => {
    const a = function () {
      return true;
    };
    const b = a;
    assert.equal(compare(a, b), 0, "compare(fce, fce) === 0 (reference)");
  });

  it("compare check function : 0 (different function)", () => {
    const a = function a() {
      return true;
    };
    const b = function a() {
      return true;
    };
    assert.equal(compare(a, b), 0, "compare(fce, fce) === 0");
  });

  it("compare check function : -1", () => {
    const fceA = function fce() {
      const variableA = 5;
      return variableA;
    };
    const fceB = function fce() {
      const variableB = 5;
      return variableB;
    };
    assert.equal(compare(fceA, fceB), -1, "compare(fce, fce) === -1");
  });

  it("compare check function : 1", () => {
    const fceA = function fce() {
      const variableZ = 5;
      return variableZ;
    };
    const fceB = function fce() {
      const variableX = 5;
      return variableX;
    };
    assert.equal(compare(fceA, fceB), 1, "compare(fce, fce) === 1");
  });

  it("compare check null : 0", () => {
    assert.equal(compare(null, null), 0, "compare(null, null) === 0");
  });

  it("compare check number : 0", () => {
    assert.equal(compare(5, 5), 0, "compare(5, 5) === 0");
    assert.equal(compare(0, 0), 0, "compare(0, 0) === 0");
  });

  it("compare check number : -1", () => {
    assert.equal(compare(1, 2), -1, "compare(1, 2) === -1");
    assert.equal(compare(3.14, 6.8), -1, "compare(3.14, 6.8) === -1");
    assert.equal(compare(0, 5), -1, "compare(0, 5) === -1");
    assert.equal(compare(-1, 0), -1, "compare(-1, 0) === -1");
  });

  it("compare check number : 1", () => {
    assert.equal(compare(3, 2), 1, "compare(3, 2) === 1");
    assert.equal(compare(8.14, 6.8), 1, "compare(8.14, 6.8) === 1");
    assert.equal(compare(5, 0), 1, "compare(5, 0) === 1");
    assert.equal(compare(0, -1), 1, "compare(0, -1) === 1");
  });

  it("compare check object : -1", () => {
    assert.equal(
      compare({ prop1: "10" }, { prop2: "10" }),
      -1,
      "compare(obj, obj) === -1"
    );
    assert.equal(
      compare({ prop1: "10" }, { prop1: "11" }),
      -1,
      "compare(obj, obj) === -1"
    );
    assert.equal(
      compare({ prop1: "10" }, { prop1: "10", prop2: "10" }),
      -1,
      "compare(obj, obj) === -1"
    );
  });

  it("compare : 0", () => {
    const a1 = {};
    const b1 = a1;
    assert.equal(compare(a1, b1), 0, "compare(obj, obj) === 0 (reference)");
    assert.equal(
      compare({ prop1: 10 }, { prop1: 10 }),
      0,
      "compare(obj, obj) === 0"
    );
  });

  it("compare : 1", () => {
    assert.equal(
      compare({ prop2: "10" }, { prop1: "10" }),
      1,
      "compare(obj, obj) === 1"
    );
    assert.equal(
      compare({ prop1: "11" }, { prop1: "10" }),
      1,
      "compare(obj, obj) === 1"
    );
    assert.equal(
      compare({ prop1: "10", prop2: "10" }, { prop1: "10" }),
      1,
      "compare(obj, obj) === 1"
    );
  });

  it("compare check deep object: 0", () => {
    const object1 = { a: 1, b: 2, c: { a: 1, b: 2 } };
    const object2 = { a: 1, b: 2, c: { a: 1, b: 2 } };
    const res = compare(object1, object2);
    assert.equal(res, 0, "compare check deep object: 0");
  });

  it("compare check deep object: -1", () => {
    const object1 = { a: 1, b: 2, c: { a: 1, b: 2 } };
    const object2 = { a: 1, b: 2, c: { a: 1, b: 3 } };
    const res = compare(object1, object2);
    assert.equal(res, -1, "compare check deep object: -1");
  });

  it("compare check deep object: 1", () => {
    const object1 = { a: 1, b: 2, c: { a: 1, b: 2 } };
    const object2 = { a: 1, b: 2, c: { a: 1, b: 1 } };
    const res = compare(object1, object2);
    assert.equal(res, 1, "compare check deep object: 1");
  });

  it("compare check object: is compare with atribute array: 0", () => {
    const object1 = { a: 1, b: 2, c: [1, 2] };
    const object2 = { a: 1, b: 2, c: [1, 2] };
    const res = compare(object1, object2);
    assert.equal(res, 0, "compare check object: 0");
  });

  it("compare check object: is compare with atribute array: -1", () => {
    const object1 = { a: 1, b: 2, c: [1, 1] };
    const object2 = { a: 1, b: 2, c: [1, 2] };
    const res = compare(object1, object2);
    assert.equal(res, -1, "compare check object: -1");
  });
  it("compare check object: is compare with atribute array: 1", () => {
    const object1 = { a: 1, b: 2, c: [1, 2] };
    const object2 = { a: 1, b: 2, c: [1, 1] };
    const res = compare(object1, object2);
    assert.equal(res, 1, "compare check object: 1");
  });

  it("compare check object: props is not sorted: 0", () => {
    const object1 = { b: 2, a: 1 };
    const object2 = { a: 1, b: 2 };
    const res = compare(object1, object2);
    assert.equal(res, 0, "compare check object: 0");
  });

  it("compare : -1", () => {
    assert.equal(
      compare(/a\d+bcd/, /w\d+xyz/),
      -1,
      "compare(regExp, regExp) === -1"
    );
  });

  it("compare : 0", () => {
    assert.equal(compare(/\d+/, /\d+/), 0, "compare(regExp, regExp) === 0");
  });

  it("compare : 1", () => {
    assert.equal(
      compare(/w\d+xyz/, /a\d+bcd/),
      1,
      "compare(regExp, regExp) === 1"
    );
  });

  it("compare check string: 0", () => {
    assert.equal(compare("ABC", "ABC"), 0, 'compare("ABC","ABC") === 0');
  });

  it("compare check string: -1", () => {
    assert.equal(compare("ABC", "MJK"), -1, 'compare("ABC","MJK") === -1');
  });

  it("compare check string: 1", () => {
    assert.equal(compare("XYZ", "MJK"), 1, 'compare("XYZ","MJK") === 1');
  });

  it("compare check symbol: 0", () => {
    const a = Symbol("a");
    const b = a;
    assert.equal(compare(a, b), 0, "compare(symbol,symbol) === true");
    assert.equal(
      compare(Symbol.for("abc"), Symbol.for("abc")),
      0,
      'compare(Symbol.for("abc"),Symbol.for("abc")) === 0'
    );
  });

  it("compare check symbol: -1", () => {
    assert.equal(
      compare(Symbol("a"), Symbol("a")),
      -1,
      "compare(symbol,symbol) === -1"
    );
    assert.equal(
      compare(Symbol(), Symbol()),
      -1,
      "compare(symbol,symbol) === -1"
    );
  });

  it("compare check undefined: 0", () => {
    assert.equal(compare(undefined, undefined), 0, "compare: 0");
  });
});
