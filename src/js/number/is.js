import { isDefined } from "common";

const is = (num) => isDefined(num) && num.constructor === Number;

export default is;
