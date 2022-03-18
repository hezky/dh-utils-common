import { equal as equalString } from "string";

const equal = (funA, funB) => equalString(funA.toString(), funB.toString());

export default equal;
