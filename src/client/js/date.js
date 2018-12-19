import { isDefined, utilsNumber } from "./";

const milliseconds = "milliseconds",
  seconds = "seconds",
  minutes = "minutes",
  hours = "hours",
  days = "days",
  weeks = "weeks",
  months = "months",
  years = "years";

export const COUNT_DAYS_IN_WEEK = 7;

export function add(d, obj) {
  let result = new Date(d.getTime());
  for (let prop in obj) {
    if (obj[prop] !== undefined) {
      switch (prop) {
        case milliseconds:
          result.setMilliseconds(result.getMilliseconds() + obj[milliseconds]);
          break;
        case seconds:
          result.setSeconds(result.getSeconds() + obj[seconds]);
          break;
        case minutes:
          result.setMinutes(result.getMinutes() + obj[minutes]);
          break;
        case hours:
          result.setHours(result.getHours() + obj[hours]);
          break;
        case days:
          result.setDate(result.getDate() + obj[days]);
          break;
        case weeks:
          result.setDate(result.getDate() + obj[weeks] * 7);
          break;
        case months:
          result.setMonth(result.getMonth() + obj[months]);
          break;
        case years:
          result.setFullYear(result.getFullYear() + obj[years]);
          break;
      }
    }
  }
  return result;
}

export function addDays(d, n) {
  d = add(d, { days: n });
  return d;
}

export function clearTime(d) {
  d.setHours(0, 0, 0, 0);
  return d;
}

export function compare(a, b) {
  let bRes = is(a) && is(b) ? true : NaN;
  if (bRes) {
    const _a = a.valueOf(),
      _b = b.valueOf();
    bRes = isFinite(_a) && isFinite(_b) ? utilsNumber.compare(_a, _b) : NaN;
  }
  return bRes;
}

export function convert(d) {
  return d.constructor === Date
    ? d
    : d.constructor === Array
    ? new Date(d[0], d[1], d[2])
    : d.constructor === Number
    ? new Date(d)
    : d.constructor === String
    ? new Date(d)
    : typeof d === "object"
    ? new Date(d.year, d.month, d.date)
    : NaN;
}

export function copy(obj) {
  if (is(obj)) return new Date(obj.getTime());
  throw new Error("Unable to copy obj! Its type isn't supported.");
}

export function currentDateTime() {
  return new Date();
}

export function currentFullYear(d = new Date()) {
  return d.getFullYear();
}

export function currentTimestamp() {
  return currentDateTime().getTime();
}

export function endTime(d) {
  d.setHours(23, 59, 59, 999);
  return d;
}

export function equal(a, b) {
  return is(a) && is(b) && compare(a, b) === 0;
}

export function equalDMY(a, b) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export function firstDayInMonth(d = new Date()) {
  d = clearTime(d);
  d.setDate(1);
  return d;
}

export function firstDayInYear(d = new Date()) {
  d = clearTime(d);
  d.setDate(1);
  d.setMonth(0);
  return d;
}

export function inRange(start, end, crr = new Date()) {
  const _crr = convert(crr).valueOf(),
    _start = convert(start).valueOf(),
    _end = convert(end).valueOf();
  return isFinite(_crr) && isFinite(_start) && isFinite(_end)
    ? start <= crr && crr <= end
    : NaN;
}

export function is(val) {
  return isDefined(val) && val.constructor === Date;
}

export function isCurrentDateInRange(start, end) {
  return inRange(start, end);
}

export function nextDay(d) {
  d = addDays(d, 1);
  return d;
}

export function previousDay(d) {
  d = addDays(d, -1);
  return d;
}

export function startTime(d) {
  return clearTime(d);
}

export function today() {
  let d = new Date();
  d = startTime(d);
  return d;
}

export function tomorrow(d = today()) {
  d = nextDay(d);
  return d;
}

export function yesterday(d = today()) {
  d = previousDay(d);
  return d;
}
