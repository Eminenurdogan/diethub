const STORAGE_KEY = "dh-community-quiet-hours";

export type QuietHours = { enabled: boolean; start: string; end: string };
export const DEFAULT_QUIET_HOURS: QuietHours = { enabled: true, start: "21:00", end: "07:00" };

export function getQuietHours(): QuietHours {
  if (typeof window === "undefined") return DEFAULT_QUIET_HOURS;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_QUIET_HOURS;
    const parsed = JSON.parse(raw);
    if (typeof parsed?.enabled === "boolean" && typeof parsed?.start === "string" && typeof parsed?.end === "string") return parsed;
    return DEFAULT_QUIET_HOURS;
  } catch {
    return DEFAULT_QUIET_HOURS;
  }
}

export function setQuietHours(value: QuietHours) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  } catch {
    // localStorage kullanılamıyor olabilir (gizli sekme vb.) — demo akışını bozmadan sessizce yoksay.
  }
}

/** "21:00" - "07:00" gibi gece yarısını aşan aralıkları da doğru şekilde ele alır. */
export function isWithinQuietHours(now: Date, start: string, end: string) {
  const [startH, startM] = start.split(":").map(Number);
  const [endH, endM] = end.split(":").map(Number);
  const nowMinutes = now.getHours() * 60 + now.getMinutes();
  const startMinutes = startH * 60 + startM;
  const endMinutes = endH * 60 + endM;
  if (startMinutes === endMinutes) return false;
  if (startMinutes < endMinutes) return nowMinutes >= startMinutes && nowMinutes < endMinutes;
  return nowMinutes >= startMinutes || nowMinutes < endMinutes;
}
