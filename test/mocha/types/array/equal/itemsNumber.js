import { assert } from "chai";
import { utilsArray } from "";

describe("array : method equal (items number)", () => {
  it("equal ... true", () => {
    const a1 = [1, 2, 3, 4];
    const a2 = [1, 2, 3, 4];
    assert.isTrue(
      utilsArray.equal(a1, a2),
      "equal([1,2,3,4],[1,2,3,4]) === true"
    );
  });
  it("equal ... false", () => {
    const a1 = [1, 2, 3, 4];
    const a2 = [1, 2, 2, 4];
    assert.isFalse(
      utilsArray.equal(a1, a2),
      "equal([1,2,3,4],[1,2,2,4]) === false"
    );
  });
  it("equal ... false", () => {
    const a1 = [1, 2, 3, 4];
    const a2 = [1, 2, 3, 4, 5];
    assert.isFalse(
      utilsArray.equal(a1, a2),
      "does not equal array with numbers"
    );
  });
  it("equal ... false", () => {
    const a1 = [1, 2, 3, 4];
    const a2 = [4, 1, 2, 3];
    assert.isFalse(
      utilsArray.equal(a1, a2),
      "does not equal array with numbers"
    );
  });
});
