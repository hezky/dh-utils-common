import { assert } from "chai";
import { utilsUndefined } from "";

describe("undefined : method compare", () => {
  it("compare : 0", () => {
    assert.equal(
      utilsUndefined.compare(undefined, undefined),
      0,
      "compare(undefined, undefined) === 0"
    );
  });
});
