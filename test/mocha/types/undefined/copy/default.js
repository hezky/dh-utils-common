import { assert } from "chai";
import { utilsUndefined } from "";

describe("undefined : method copy", () => {
  it("copy", () => {
    assert.equal(
      utilsUndefined.copy(undefined),
      undefined,
      "copy(undefined) === undefined"
    );
  });
});
