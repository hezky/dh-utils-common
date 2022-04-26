import { assert } from "chai";
import { utilsUndefined } from "";

describe("undefined : method equal", () => {
  it("equal : true", () => {
    assert.isTrue(
      utilsUndefined.equal(undefined, undefined),
      "equal(undefined, undefined) === true"
    );
  });
});
