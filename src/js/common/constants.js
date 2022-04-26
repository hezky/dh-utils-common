import * as utilsArray from "array";
import * as utilsBigInt from "bigInt";
import * as utilsBoolean from "boolean";
import * as utilsDate from "date";
import * as utilsFunction from "function";
import * as utilsNull from "null";
import * as utilsNumber from "number";
import * as utilsObject from "object";
import * as utilsRegExp from "regExp";
import * as utilsString from "string";
import * as utilsSymbol from "symbol";
import * as utilsUndefined from "undefined";

const TYPE_ERROR_MESSAGE = "Unknown type";

const UTILS_LIST = [
  utilsArray,
  utilsBigInt,
  utilsBoolean,
  utilsDate,
  utilsFunction,
  utilsNull,
  utilsNumber,
  utilsObject,
  utilsRegExp,
  utilsString,
  utilsSymbol,
  utilsUndefined,
];

export { TYPE_ERROR_MESSAGE, UTILS_LIST };
