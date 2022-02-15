import { copy as copyCommon } from "common";

const copy = (arr) => arr.map((val) => copyCommon(val));

export default copy;
