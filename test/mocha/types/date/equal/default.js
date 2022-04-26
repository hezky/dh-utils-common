import { assert } from "chai";
import { utilsDate } from "";

describe("date : method equal", () => {
  it("equal : true", () => {
    const dateA = new Date("1995-12-17T03:24:00");
    const dateB = new Date("1995-12-17T03:24:00");
    assert.isTrue(utilsDate.equal(dateA, dateB), "equal(date, date) === true");
  });
  it("equal : false - operand less", () => {
    const dateA = new Date("1995-12-16T03:24:00");
    const dateB = new Date("1995-12-17T03:24:00");
    assert.isFalse(
      utilsDate.equal(dateA, dateB),
      "equal(date, date) === false : A < B"
    );
  });
  it("equal : false - operand greater", () => {
    const dateA = new Date("1995-12-18T03:24:00");
    const dateB = new Date("1995-12-17T03:24:00");
    assert.isFalse(
      utilsDate.equal(dateA, dateB),
      "equal(date, date) === false : A > B"
    );
  });
});
