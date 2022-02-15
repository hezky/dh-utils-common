import { compare as compareNumber } from "number";

const compare = (dateA, dateB) => {
  const _dateA = dateA.valueOf();
  const _dateB = dateB.valueOf();
  return isFinite(_dateA) && isFinite(_dateB)
    ? compareNumber(_dateA, _dateB)
    : NaN;
};

export default compare;
