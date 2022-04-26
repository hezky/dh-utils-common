import isBigInt from "bigInt/is";
import isBoolean from "boolean/is";
import isNull from "null/is";
import isUndefined from "undefined/is";
import isNumber from "number/is";
import isString from "string/is";

const isPrimitive = (a) =>
  isBigInt(a) ||
  isBoolean(a) ||
  isNull(a) ||
  isNumber(a) ||
  isString(a) ||
  isUndefined(a);

export default isPrimitive;
