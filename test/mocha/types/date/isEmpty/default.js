import { assert } from "chai";
import { utilsDate } from "";

describe("date : method isEmpty", () => {
  it("isEmpty : false", () => {
    assert.isFalse(utilsDate.isEmpty(new Date()), "isEmpty(date) === false");
  });
});
