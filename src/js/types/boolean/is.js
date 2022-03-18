import { isDefined } from "common";

const is = (bool) => isDefined(bool) && bool.constructor === Boolean;

export default is;
