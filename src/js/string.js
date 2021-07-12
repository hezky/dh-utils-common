import { isDefined } from "";

const NAME = "string";

const compare = (a, b) => a.localeCompare(b);

const copy = (a) => a;

const equal = (a, b) => a.toString() === b.toString();

const is = (val) => isDefined(val) && val.constructor === String;

const isEmpty = (val) => val.length === 0;

const isNotEmpty = (val) => val.length > 0;

const isNumeric = (val) => /^[0-9]+$/.test(val);

export { NAME, compare, copy, equal, is, isEmpty, isNotEmpty, isNumeric };
