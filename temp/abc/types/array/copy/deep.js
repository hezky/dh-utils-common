import { assert } from "chai";
import { utilsArray } from "";

describe("array : method copy (deep)", () => {
  it("deep copy", () => {
    const arrOrig = [{ a: 1 }, { b: 2 }];
    const arrCopy = utilsArray.copy(arrOrig);
    assert.isTrue(arrOrig !== arrCopy, "arrays do not have same reference");
    assert.deepEqual(
      arrCopy,
      [{ a: 1 }, { b: 2 }],
      "copy([{ a: 1 }, { b: 2 }]) copied"
    );
  });
});
