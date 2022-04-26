const copy = (sym) => {
  return Object(Symbol.prototype.valueOf.call(sym));
};

export default copy;
