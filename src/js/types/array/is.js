import { isDefined } from "common";

const is = (arr) => isDefined(arr) && arr.constructor === Array;

export default is;
