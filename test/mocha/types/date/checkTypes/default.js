import { assert } from "chai";
import { utilsDate } from "";
import { TYPE_ERROR_MESSAGE } from "common/constants";

describe("date : method checkTypes", () => {
  it("checkTypes ... true", () => {
    const date1 = new Date("1996-12-17T03:24:00");
    const date2 = new Date("1997-12-17T03:24:00");
    const date3 = new Date("1998-12-17T03:24:00");
    assert.isTrue(
      utilsDate.checkTypes(date1, date2, date3),
      "checkTypes(date, date, date) === true"
    );
  });
  it("checkTypes ... throw error", () => {
    const date1 = "1996-12-17T03:24:00";
    const date2 = "1997-12-17T03:24:00";
    const date3 = 2;
    assert.throws(
      function () {
        utilsDate.checkTypes(date1, date2, date3);
      },
      Error,
      TYPE_ERROR_MESSAGE
    );
  });
});
