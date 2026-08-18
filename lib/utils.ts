export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export const DEMO_MAIL =
  "mailto:info@joinolevy.com?subject=Book%20a%20demo%20with%20Olevy";
