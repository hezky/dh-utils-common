import { compare } from "date";

const equal = (dateA, dateB) => compare(dateA, dateB) === 0;

export default equal;
