import { assert } from "chai";
import { utilsUndefined } from "";

describe("undefined : method isEmpty", () => {
  it("isEmpty : true", () => {
    assert.isTrue(
      utilsUndefined.isEmpty(undefined),
      "isEmpty(undefined) === true"
    );
  });
});
