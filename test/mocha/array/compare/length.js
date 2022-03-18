import { assert } from "chai";
import { utilsArray } from "";

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
