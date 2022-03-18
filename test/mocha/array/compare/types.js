import { assert } from "chai";
import { utilsArray } from "";

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
