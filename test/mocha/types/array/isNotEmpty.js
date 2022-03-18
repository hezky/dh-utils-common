import { assert } from "chai";
import { utilsArray } from "";

describe("array : method isNotEmpty", () => {
  it("result ... true", () => {
    assert.isFalse(utilsArray.isNotEmpty([]));
  });
  it("result ... false", () => {
    assert.isTrue(utilsArray.isNotEmpty([1, 2, 3]));
  });
});
