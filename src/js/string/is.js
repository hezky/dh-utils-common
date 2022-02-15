import { isDefined } from "common";

const is = (str) => isDefined(str) && str.constructor === String;

export default is;
