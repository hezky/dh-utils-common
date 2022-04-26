import { assert } from "chai";
import { utilsDate } from "";

describe("date : method compare", () => {
  it("compare : -1", () => {
    const dateA = new Date("1995-12-16T03:24:00");
    const dateB = new Date("1995-12-17T03:24:00");
    assert.equal(
      utilsDate.compare(dateA, dateB),
      -1,
      "compare(date, date) === -1"
    );
  });
  it("compare : 0", () => {
    const dateA = new Date("1995-12-17T03:24:00");
    const dateB = new Date("1995-12-17T03:24:00");
    assert.equal(
      utilsDate.compare(dateA, dateB),
      0,
      "compare(date, date) === 0"
    );
  });
  it("compare : 1", () => {
    const dateA = new Date("1995-12-18T03:24:00");
    const dateB = new Date("1995-12-17T03:24:00");
    assert.equal(
      utilsDate.compare(dateA, dateB),
      1,
      "compare(date, date) === 1"
    );
  });
});
