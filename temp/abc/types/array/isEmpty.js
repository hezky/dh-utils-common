import { assert } from "chai";
import { utilsArray } from "";

describe("array : method isEmpty", () => {
  it("result ... true", () => {
    assert.isTrue(utilsArray.isEmpty([]));
  });
  it("result ... false", () => {
    assert.isFalse(utilsArray.isEmpty([1, 2, 3]));
  });
});
