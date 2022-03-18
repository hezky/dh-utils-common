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
