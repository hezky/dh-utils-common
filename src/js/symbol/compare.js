import { compare as compareString } from "string";

const compare = (symA, symB) => compareString(symA.toString(), symB.toString());

export default compare;
