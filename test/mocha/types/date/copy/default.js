import { assert } from "chai";
import { utilsDate } from "";

describe("date : copy", () => {
  it("copy", () => {
    const dateA = new Date("1995-12-17T03:24:00");
    const dateB = utilsDate.copy(dateA);
    assert.equal(
      dateA.toString(),
      dateB.toString(),
      "copy(date) - check same value"
    );
    assert.isTrue(dateA !== dateB, "copy(date) - check different references");
  });
});
