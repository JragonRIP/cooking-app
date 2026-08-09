/** Scale a leading amount in an ingredient string for more servings. */
export function scaleIngredientName(
  name: string,
  servings: number,
  baseServings = 1,
): string {
  const factor = servings / Math.max(baseServings, 1);
  if (factor === 1) return name;

  const match = name.match(/^(\d+)\s*\/\s*(\d+)(.*)$/);
  if (match) {
    const num = Number(match[1]) / Number(match[2]);
    return `${formatAmount(num * factor)}${match[3]}`;
  }

  const decimal = name.match(/^(\d+\.\d+)(.*)$/);
  if (decimal) {
    return `${formatAmount(Number(decimal[1]) * factor)}${decimal[2]}`;
  }

  const whole = name.match(/^(\d+)(.*)$/);
  if (whole) {
    return `${formatAmount(Number(whole[1]) * factor)}${whole[2]}`;
  }

  if (servings > 1) {
    return `${name} (×${servings})`;
  }
  return name;
}

function formatAmount(n: number): string {
  if (Number.isInteger(n)) return String(n);
  const rounded = Math.round(n * 4) / 4;
  if (rounded === 0.25) return "1/4";
  if (rounded === 0.5) return "1/2";
  if (rounded === 0.75) return "3/4";
  if (rounded === 1.25) return "1 1/4";
  if (rounded === 1.5) return "1 1/2";
  if (rounded === 1.75) return "1 3/4";
  if (rounded === 2.5) return "2 1/2";
  return String(Number(rounded.toFixed(2)));
}

export function formatTimer(totalSeconds: number): string {
  const s = Math.max(0, Math.ceil(totalSeconds));
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${r.toString().padStart(2, "0")}`;
}
