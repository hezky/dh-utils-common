import { assert } from "chai";
import { utilsArray } from "";

describe("array : method compare (check references)", () => {
  it("arrA === arrB ...  0", () => {
    const arrA = [1, 2, 3];
    const arrB = arrA;
    assert.equal(
      utilsArray.compare(arrA, arrB),
      0,
      "compare(sameObject,sameObject) === 0"
    );
  });
  it("arrA !== arrB ... -1x", () => {
    const arrA = [1, 1, 1];
    const arrB = [2, 2, 2];
    assert.equal(
      utilsArray.compare(arrA, arrB),
      -1,
      "compare(otherObj,otherObj) === -1"
    );
  });
});

describe("array : method compare (check length)", () => {
  it("arrA.length < arrB.length ... -1", () => {
    const arrA = [1, 2];
    const arrB = [1, 2, 3];
    assert.equal(
      utilsArray.compare(arrA, arrB),
      -1,
      "compare([1,2],[1,2,3]) === -1"
    );
  });
  it("arrA.length = arrB.length ...  0", () => {
    const arrA = [1, 2, 3];
    const arrB = [1, 2, 3];
    assert.equal(
      utilsArray.compare(arrA, arrB),
      0,
      "compare([1,2,3],[1,2,3]) === 0"
    );
  });
  it("arrA.length > arrB.length ...  1", () => {
    const arrA = [1, 2, 3];
    const arrB = [1, 2];
    assert.equal(
      utilsArray.compare(arrA, arrB),
      1,
      "compare([1,2,3],[1,2]) === 1"
    );
  });
});

describe("array : method compare (check types)", () => {
  it("number, string ... -1", () => {
    const arrA = [1, 2];
    const arrB = [1, "2"];
    assert.equal(
      utilsArray.compare(arrA, arrB),
      -1,
      'compare([1,2],[1,"2"]) === -1'
    );
  });
  it("number, number ...  0", () => {
    const arrA = [1, 2];
    const arrB = [1, 2];
    assert.equal(
      utilsArray.compare(arrA, arrB),
      0,
      "compare([1,2],[1,2]) === 0"
    );
  });
  it("string, number ...  1", () => {
    const arrA = [1, "2"];
    const arrB = [1, 2];
    assert.equal(
      utilsArray.compare(arrA, arrB),
      1,
      'compare([1,"2"],[1,2]) === 1'
    );
  });
});

describe("array : method compare (check values)", () => {
  it("values [1,1] < value [1,2] ... -1", () => {
    const arrA = [1, 1];
    const arrB = [1, 2];
    assert.equal(
      utilsArray.compare(arrA, arrB),
      -1,
      "compare([1,1],[1,2]) === -1"
    );
  });
  it("values [1,1] = value [1,1] ...  0", () => {
    const arrA = [1, 1];
    const arrB = [1, 1];
    assert.equal(
      utilsArray.compare(arrA, arrB),
      0,
      "compare([1,1],[1,1]) === 0"
    );
  });
  it("values [1,2] > value [1,1] ...  1", () => {
    const arrA = [1, 2];
    const arrB = [1, 1];
    assert.equal(
      utilsArray.compare(arrA, arrB),
      1,
      "compare([1,2],[1,1]) === 1"
    );
  });
});
