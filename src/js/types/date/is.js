import { isDefined } from "common";

const is = (date) => isDefined(date) && date.constructor === Date;

export default is;
