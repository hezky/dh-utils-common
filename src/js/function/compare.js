import { compare as compareString } from "string";

const compare = (funA, funB) => compareString(funA.toString(), funB.toString());

export default compare;
