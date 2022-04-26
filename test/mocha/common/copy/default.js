import { assert } from "chai";
import { copy } from "";

describe("common : method copy", () => {
  it("copy check array : shallow copy", () => {
    const arrOrig = [1, 2];
    const arrCopy = copy(arrOrig);
    assert.isTrue(arrOrig !== arrCopy, "arrays do not have same reference");
    assert.deepEqual(copy(arrCopy), [1, 2], "copy([1, 2]) copied");
  });

  it("copy check array : deep", () => {
    const arrOrig = [{ a: 1 }, { b: 2 }];
    const arrCopy = copy(arrOrig);
    assert.isTrue(arrOrig !== arrCopy, "arrays do not have same reference");
    assert.deepEqual(
      arrCopy,
      [{ a: 1 }, { b: 2 }],
      "copy([{ a: 1 }, { b: 2 }]) copied"
    );
  });

  it("copy check boolean", () => {
    assert.equal(copy(false), false, "copy(false) === false");
    assert.equal(copy(true), true, "copy(true) === true");
  });

  it("copy check date", () => {
    const dateA = new Date("1995-12-17T03:24:00");
    const dateB = copy(dateA);
    assert.equal(
      dateA.toString(),
      dateB.toString(),
      "copy(date) - check same value"
    );
    assert.isTrue(dateA !== dateB, "copy(date) - check different references");
  });

  it("copy check function", () => {
    const fceA = function () {
      return "helllooo";
    };
    const fceB = copy(fceA);
    assert.isTrue(fceA === fceB, "copy");
  });

  it("copy check null", () => {
    assert.equal(copy(null), null, "copy(null) === null");
  });

  it("copy check number", () => {
    assert.equal(copy(2), 2, "copy(2) === 2");
  });

  it("copy check object : should return copy of object", () => {
    const test = { a: "c", b: "d" };
    const res = copy(test);
    assert.deepEqual(res, test);
  });

  it("copy check object : should not return same object", () => {
    const test = { a: "c", b: "d" };
    const res = copy(test);
    assert.notEqual(res, test);
  });

  it("copy check regExp", () => {
    assert.equal(
      copy(/\d+/).toString(),
      /\d+/.toString(),
      "copy(/\\d+/) === /\\d+/"
    );
  });

  it("copy check string", () => {
    assert.equal(copy("ABC"), "ABC", 'copy("ABC") === "ABC"');
  });

  it("copy check symbol", () => {
    const a = Symbol("a");
    const b = copy(a);
    assert.isFalse(a === b, "copy(a) !== a");
  });

  it("copy", () => {
    assert.equal(copy(undefined), undefined, "copy(undefined) === undefined");
  });
});
