import { isDefined } from "";

const NAME = "boolean";

const compare = (a, b) => (a > b) - (a < b);

const copy = (a) => a;

const equal = (a, b) => a === b;

const is = (val) => isDefined(val) && val.constructor === Boolean;

export { NAME, compare, copy, equal, is };
