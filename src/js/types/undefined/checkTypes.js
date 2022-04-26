import { is } from "undefined";
import uCheckTypes from "utils/checkTypes";

const checkTypes = (...args) => uCheckTypes(args, is);

export default checkTypes;
