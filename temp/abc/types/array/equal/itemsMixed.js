import { assert } from "chai";
import { utilsArray } from "";

describe("array : method equal (mixed)", () => {
  it("mixed ... true", () => {
    const a1 = [1, /ab+d/, "tri", new Date(2016, 1, 1)];
    const a2 = [1, /ab+d/, "tri", new Date(2016, 1, 1)];
    assert.isTrue(utilsArray.equal(a1, a2), "equal array with mixed");
  });
  it("deep ... true", () => {
    const a1 = [1, 1, 2, [1, 2, 3, 4], 5, 6];
    const a2 = [1, 1, 2, [1, 2, 3, 4], 5, 6];
    assert.isTrue(utilsArray.equal(a1, a2), "equal array with deep");
  });
});
