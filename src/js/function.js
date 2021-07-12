import { utilsString } from "";

const NAME = "function";

const compare = (a, b) => utilsString.compare(a.toString(), b.toString());

const copy = (a) => a;

const equal = (a, b) => utilsString.equal(a.toString(), b.toString());

const is = (val) => typeof val === "function";

export { NAME, compare, copy, equal, is };
