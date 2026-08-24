const API_URL = process.env.API_URL ?? "http://localhost:3010";
const API_URL_ORIGIN = process.env.API_URL ? "env" : "DÉFAUT (env API_URL absente)";

export function describeError(err: unknown): string {
  if (!(err instanceof Error)) return String(err);
  const cause = (err as Error & { cause?: unknown }).cause;
  const suffix = cause instanceof Error ? ` · cause: ${cause.message}` : "";
  return `${err.name}: ${err.message}${suffix}`;
}

export async function apiFetch(label: string, path: string, init?: RequestInit) {
  const url = `${API_URL}${path}`;
  const method = init?.method ?? "GET";
  const started = Date.now();
  console.log(`[landing][${label}] → ${method} ${url} · API_URL ${API_URL_ORIGIN}`);
  try {
    const res = await fetch(url, init);
    console.log(`[landing][${label}] ← ${res.status} ${res.statusText} en ${Date.now() - started} ms`);
    return res;
  } catch (err) {
    console.error(`[landing][${label}] ✗ ${describeError(err)} après ${Date.now() - started} ms`);
    throw err;
  }
}
