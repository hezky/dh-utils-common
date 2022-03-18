import { isDefined } from "common";

const is = (val) => isDefined(val) && val.constructor === RegExp;

export default is;
