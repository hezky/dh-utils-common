import { is } from "number";
import uCheckTypes from "utils/checkTypes";

const checkTypes = (...args) => uCheckTypes(args, is);

export default checkTypes;
