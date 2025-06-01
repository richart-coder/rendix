function Match({ value, children }) {
  const cases = children();
  return cases[value] ?? cases._ ?? cases.default ?? null;
}

export default Match;
