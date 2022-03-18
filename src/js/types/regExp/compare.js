import { compare as compareString } from "string";

const compare = (regA, regB) => compareString(regA.toString(), regB.toString());

export default compare;
