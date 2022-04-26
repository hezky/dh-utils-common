import { assert } from "chai";
import { utilsNumber } from "";

describe("number : method copy", () => {
  it("copy", () => {
    assert.equal(utilsNumber.copy(2), 2, "copy(2) === 2");
  });
});
