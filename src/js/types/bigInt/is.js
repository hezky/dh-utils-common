import { isDefined } from "common";

const is = (num) => isDefined(num) && num.constructor === BigInt;

export default is;
