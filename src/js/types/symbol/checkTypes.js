import { is } from "symbol";
import uCheckTypes from "utils/checkTypes";

const checkTypes = (...args) => uCheckTypes(args, is);

export default checkTypes;
