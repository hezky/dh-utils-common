import { isDefined } from "";

const compare = (a, b) => (a === b ? 0 : (a > b) - (a < b));

const copy = a => a;

const equal = (a, b) => a === b;

const is = val => isDefined(val) && val.constructor === Number;

export { compare, copy, equal, is };
