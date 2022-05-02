export function diff(a, b) {
  const as = Math.abs(a);
  const bs = Math.abs(b);

  return as > bs ? as - bs : bs - as;
}

export function isWord(text) {
  return text.split(" ").length === 1;
}

export function pow(a, x) {
  return a ** x;
}
