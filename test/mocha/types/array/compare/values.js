import { assert } from "chai";
import { utilsArray } from "";

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
