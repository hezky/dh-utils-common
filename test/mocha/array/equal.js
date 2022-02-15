import { assert } from "chai";
import { utilsArray } from "";

describe("array : method equal (items boolean)", () => {
  it("result ... true", () => {
    const a1 = [true, false];
    const a2 = [true, false];
    assert.isTrue(
      utilsArray.equal(a1, a2),
      "equal([true, false],[true, false]) === true (boolean)"
    );
  });

  it("result ... false", () => {
    const a1 = [true, false];
    const a2 = [true, true];
    assert.isFalse(
      utilsArray.equal(a1, a2),
      "equal([true, false],[true, true]) === false (boolean)"
    );
  });
});

describe("array : method equal (items date)", () => {
  it("result ... true", () => {
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
    assert.isTrue(utilsArray.equal(a1, a2), "equal array with dates");
  });
  it("result ... false", () => {
    const a1 = [
      new Date(2016, 1, 1),
      new Date(2016, 2, 1),
      new Date(2016, 3, 2),
      new Date(2016, 4, 1),
    ];
    const a2 = [
      new Date(2016, 1, 1),
      new Date(2016, 2, 1),
      new Date(2016, 3, 1),
      new Date(2016, 4, 1),
    ];
    assert.isFalse(utilsArray.equal(a1, a2), "does not equal array with dates");
  });
});

describe("array : method equal (items numbers)", () => {
  it("result ... true", () => {
    const a1 = [1, 2, 3, 4];
    const a2 = [1, 2, 3, 4];
    assert.isTrue(
      utilsArray.equal(a1, a2),
      "equal([1,2,3,4],[1,2,3,4]) === true"
    );
  });
  it("result ... false", () => {
    const a1 = [1, 2, 3, 4];
    const a2 = [1, 2, 2, 4];
    assert.isFalse(
      utilsArray.equal(a1, a2),
      "equal([1,2,3,4],[1,2,2,4]) === false"
    );
  });
  it("result ... false", () => {
    const a1 = [1, 2, 3, 4];
    const a2 = [1, 2, 3, 4, 5];
    assert.isFalse(
      utilsArray.equal(a1, a2),
      "does not equal array with numbers"
    );
  });
  it("result ... false", () => {
    const a1 = [1, 2, 3, 4];
    const a2 = [4, 1, 2, 3];
    assert.isFalse(
      utilsArray.equal(a1, a2),
      "does not equal array with numbers"
    );
  });
});

describe("array : method equal (items regexp)", () => {
  it("result ... true", () => {
    const a1 = [/ab+c/, /ab+d/, /ab+e/, /ab+f/];
    const a2 = [/ab+c/, /ab+d/, /ab+e/, /ab+f/];
    assert.isTrue(utilsArray.equal(a1, a2), "equal array with regexp");
  });
  it("result ... false", () => {
    const a1 = [/ab+c/, /ab+e/, /ab+e/, /ab+f/];
    const a2 = [/ab+c/, /ab+d/, /ab+e/, /ab+f/];
    assert.isFalse(
      utilsArray.equal(a1, a2),
      "does not equal array with regexp"
    );
  });
});

describe("array : method equal (items string)", () => {
  it("result ... true", () => {
    const a1 = ["1", "2", "3", "4"];
    const a2 = ["1", "2", "3", "4"];
    assert.isTrue(
      utilsArray.equal(a1, a2),
      "equal(['1','2','3','4'],['1','2','3','4']) === true"
    );
  });
  it("result ... false", () => {
    const a1 = ["1", "2", "2", "4"];
    const a2 = ["1", "2", "3", "4"];
    assert.isFalse(
      utilsArray.equal(a1, a2),
      "equal(['1','2','2','4'],['1','2','3','4']) === false"
    );
  });
});

describe("array : method equal (mixed)", () => {
  it("mixed ... true", () => {
    const a1 = [1, /ab+d/, "tri", new Date(2016, 1, 1)];
    const a2 = [1, /ab+d/, "tri", new Date(2016, 1, 1)];
    assert.isTrue(utilsArray.equal(a1, a2), "equal array with mixed");
  });
  it("deep ... true", () => {
    const a1 = [1, 1, 2, [1, 2, 3, 4], 5, 6];
    const a2 = [1, 1, 2, [1, 2, 3, 4], 5, 6];
    assert.isTrue(utilsArray.equal(a1, a2), "equal array with deep");
  });
});
