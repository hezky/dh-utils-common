import { assert } from "chai";
import { utilsString } from "";

describe("string : method copy", () => {
  it("copy", () => {
    assert.equal(utilsString.copy("ABC"), "ABC", "copy(ABC) === ABC");
  });
});
