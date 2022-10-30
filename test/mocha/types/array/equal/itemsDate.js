import { assert } from "chai";
import { utilsArray } from "";

describe("array : method equal (items date)", () => {
  it("equal ... true", () => {
    const a1 = [
      new Date(2016, 1, 1),
      new Date(2016, 2, 1),
      new Date(2016, 3, 1),
      new Date(2016, 4, 1),
    ];
    const a2 = [
      new Date(2016, 1, 1),
      new Date(2016, 2, 1),
      new Date(2016, 3, 1),
      new Date(2016, 4, 1),
    ];
    assert.isTrue(utilsArray.equal(a1, a2), "equal array with dates");
  });
  it("equal ... false", () => {
    const a1 = [
      new Date(2016, 1, 1),
      new Date(2016, 2, 1),
      new Date(2016, 3, 2),
      new Date(2016, 4, 1),
    ];
    const a2 = [
      new Date(2016, 1, 1),
      new Date(2016, 2, 1),
      new Date(2016, 3, 1),
      new Date(2016, 4, 1),
    ];
    assert.isFalse(utilsArray.equal(a1, a2), "does not equal array with dates");
  });
});
