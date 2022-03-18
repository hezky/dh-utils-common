import { isDefined, isNotArray } from "common";

const is = (val) =>
  isDefined(val) &&
  isNotArray(val) &&
  typeof val === "object" &&
  val?.constructor !== RegExp;

export default is;
