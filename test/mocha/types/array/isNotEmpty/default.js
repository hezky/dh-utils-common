import { assert } from "chai";
import { utilsArray } from "";

describe("array : method isNotEmpty", () => {
  it("isNotEmpty ... true", () => {
    assert.isFalse(utilsArray.isNotEmpty([]));
  });
  it("isNotEmpty ... false", () => {
    assert.isTrue(utilsArray.isNotEmpty([1, 2, 3]));
  });
});
