import { isDefined } from "common";

const is = (sym) => isDefined(sym) && typeof sym === "symbol";

export default is;
