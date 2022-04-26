import { assert } from "chai";
import { utilsDate } from "";

describe("date : method isNotEmpty", () => {
  it("isNotEmpty : true", () => {
    assert.isTrue(
      utilsDate.isNotEmpty(new Date()),
      "isNotEmpty(date) === true"
    );
  });
});
