import { assert } from "chai";
import { utilsRegExp } from "";

describe("string : method copy", () => {
  it("copy", () => {
    assert.equal(
      utilsRegExp.copy(/\d+/).toString(),
      /\d+/.toString(),
      "copy(/\\d+/) === /\\d+/"
    );
  });
});
