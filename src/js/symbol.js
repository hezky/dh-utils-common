import { isDefined, utilsString } from "";

const NAME = "symbol";

const compare = (a, b) => utilsString.compare(a.toString(), b.toString());

const copy = (a) => a;

const equal = (a, b) => utilsString.equal(a.toString(), b.toString());

const is = (val) => isDefined(val) && typeof val === "symbol";

export { NAME, compare, copy, equal, is };
