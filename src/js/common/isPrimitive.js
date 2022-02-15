import isBoolean from "boolean/is";
import isNumber from "number/is";
import isString from "string/is";

const isPrimitive = (a) => isBoolean(a) || isNumber(a) || isString(a);

export default isPrimitive;
