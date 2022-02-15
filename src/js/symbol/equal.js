import { equal as equalString } from "string";

const equal = (symA, symB) => equalString(symA.toString(), symB.toString());

export default equal;
