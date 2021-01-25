import { assert } from "chai";
import { utilsArray } from "";

describe("boolean : method equal", () => {
  it("equal : true (boolean)", () => {
    const a1 = [true, true, false, false];
    const a2 = [true, true, false, false];
    assert.ok(
      utilsArray.equal(a1, a2),
      "equal([true, true, false, false],[true, true, false, false]) === true (boolean)"
    );
  });
  it("equal : true (date)", () => {
    const a1 = [
      new Date(2016, 1, 1),
      new Date(2016, 2, 1),
      new Date(2016, 3, 1),
      new Date(2016, 4, 1),
    ];
    const a2 = [
      new Date(2016, 1, 1),
      new Date(2016, 2, 1),
      new Date(2016, 3, 1),
      new Date(2016, 4, 1),
    ];
    assert.ok(utilsArray.equal(a1, a2), "equal array with dates");
  });
  it("equal : true (numbers)", () => {
    const a1 = [1, 2, 3, 4];
    const a2 = [1, 2, 3, 4];
    assert.ok(
      utilsArray.equal(a1, a2),
      "equal([1,2,3,4],[1,2,3,4]) === true (numbers)"
    );
  });
  it("equal : true (regexp)", () => {
    const a1 = [/ab+c/, /ab+d/, /ab+e/, /ab+f/];
    const a2 = [/ab+c/, /ab+d/, /ab+e/, /ab+f/];
    assert.ok(utilsArray.equal(a1, a2), "equal array with regexp");
  });
  it("equal : true (strings)", () => {
    const a1 = ["1", "2", "3", "4"];
    const a2 = ["1", "2", "3", "4"];
    assert.ok(
      utilsArray.equal(a1, a2),
      "equal(['1','2','3','4'],['1','2','3','4']) === true (strings)"
    );
  });
  it("equal : true (mixed)", () => {
    const a1 = [1, /ab+d/, "tri", new Date(2016, 1, 1)];
    const a2 = [1, /ab+d/, "tri", new Date(2016, 1, 1)];
    assert.ok(utilsArray.equal(a1, a2), "equal array with mixed");
  });
  it("equal : true (deep)", () => {
    const a1 = [1, 1, 2, [1, 2, 3, 4], 5, 6];
    const a2 = [1, 1, 2, [1, 2, 3, 4], 5, 6];
    assert.ok(utilsArray.equal(a1, a2), "equal array with deep");
  });
  it("equal : false (numbers)", () => {
    const a1 = [1, 2, 3, 4];
    const a2 = [1, 2, 3, 4, 5];
    assert.notOk(utilsArray.equal(a1, a2), "not equal array with numbers");
  });
  it("equal : false (numbers)", () => {
    const a1 = [1, 2, 3, 4];
    const a2 = [4, 1, 2, 3];
    assert.notOk(utilsArray.equal(a1, a2), "not equal array with numbers");
  });
  it("equal : false (undefined)", () => {
    const a1 = undefined;
    const a2 = undefined;
    assert.notOk(utilsArray.equal(a1, a2), "bad parameters undefined");
  });
  it("equal : false (null)", () => {
    const a1 = null;
    const a2 = null;
    assert.notOk(utilsArray.equal(a1, a2), "bad parameters null");
  });
  it("equal : false (bad parameters)", () => {
    const a1 = 1;
    const a2 = [];
    assert.notOk(utilsArray.equal(a1, a2), "bad parameters");
  });
});

describe("array : method is", () => {
  it("is : true", () => {
    assert.isTrue(utilsArray.is([]), "is([]) === true");
    assert.isTrue(utilsArray.is([1, 2, 3]), "is([1,2,3]) === true");
    assert.isTrue(utilsArray.is(new Array()), "is(new Array()) === true");
  });
  it("is : false", () => {
    assert.isFalse(utilsArray.is(true), "is(true) === false");
    assert.isFalse(utilsArray.is(false), "is(false) === false");
    assert.isFalse(
      utilsArray.is(new Date("1995-12-17T03:24:00")),
      "is(new Date('1995-12-17T03:24:00')) === false"
    );
    assert.isFalse(
      utilsArray.is(() => 1),
      "is(() => 1) === false"
    );
    assert.isFalse(utilsArray.is(null), "is(null) === false");
    assert.isFalse(utilsArray.is(3), "is(3) === false");
    assert.isFalse(utilsArray.is(NaN), "is(NaN) === false");
    assert.isFalse(utilsArray.is({}), "is({}) === false");
    assert.isFalse(utilsArray.is(/ab+c/), "is(/ab+c/) === false");
    assert.isFalse(utilsArray.is("ABC"), "is('ABC') === false");
    assert.isFalse(utilsArray.is("true"), "is('true') === false");
    assert.isFalse(utilsArray.is(Symbol()), "is(Symbol()) === false");
    assert.isFalse(utilsArray.is(Symbol(42)), "is(Symbol(42)) === false");
    assert.isFalse(utilsArray.is(Symbol("foo")), "is(Symbol('foo')) === false");
    assert.isFalse(utilsArray.is(undefined), "is(undefined) === false");
    assert.isFalse(utilsArray.is(), "is() === false");
  });
});
