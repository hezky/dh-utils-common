import { assert } from "chai";
import { utilsBigInt } from "";

describe("number : method copy", () => {
  it("copy", () => {
    assert.equal(utilsBigInt.copy(2n), 2n, "copy(2n) === 2n");
  });
});
