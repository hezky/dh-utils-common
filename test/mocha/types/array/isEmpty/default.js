import { assert } from "chai";
import { utilsArray } from "";

describe("array : method isEmpty", () => {
  it("isEmpty ... true", () => {
    assert.isTrue(utilsArray.isEmpty([]));
  });
  it("isEmpty ... false", () => {
    assert.isFalse(utilsArray.isEmpty([1, 2, 3]));
  });
});
