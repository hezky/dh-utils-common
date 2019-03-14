import { isDefined, utilsString } from "./";

const compare = (a, b) => utilsString.compare(a.toString(), b.toString());

const copy = a => a;

const equal = (a, b) => utilsString.equal(a, b);

const is = val => isDefined(val) && val.constructor === RegExp;

export { compare, copy, equal, is };
