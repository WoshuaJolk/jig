export function generateId() {
  return Math.random().toString(36).slice(2, 9);
}

export function num(val: string): number {
  const n = parseFloat(val);
  return isNaN(n) ? 0 : n;
}

export function fmt(n: number): string {
  return "$" + n.toFixed(2);
}
