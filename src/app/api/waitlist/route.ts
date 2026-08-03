import { apiFetch, describeError } from "@/lib/api";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    console.error("[landing][waitlist:post] corps JSON invalide → 400");
    return Response.json({ error: "Corps de requête invalide." }, { status: 400 });
  }

  console.log(
    `[landing][waitlist:post] champs reçus: ${
      body && typeof body === "object" ? Object.keys(body).join(", ") : typeof body
    }`,
  );

  try {
    const res = await apiFetch("waitlist:post", "/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(5000),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) console.error(`[landing][waitlist:post] backend ${res.status}:`, data);
    return Response.json(data, { status: res.status });
  } catch (err) {
    console.error(`[landing][waitlist:post] échec → 503 · ${describeError(err)}`);
    return Response.json({ error: "Service indisponible, réessayez." }, { status: 503 });
  }
}

export async function GET() {
  try {
    const res = await apiFetch("waitlist:count", "/api/waitlist/count", {
      signal: AbortSignal.timeout(3000),
    });
    if (!res.ok) {
      console.error(`[landing][waitlist:count] HTTP ${res.status} → count: null`);
      return Response.json({ count: null });
    }
    const data = await res.json();
    console.log(`[landing][waitlist:count] count=${data.count}`);
    return Response.json(data);
  } catch (err) {
    console.error(`[landing][waitlist:count] échec → count: null · ${describeError(err)}`);
    return Response.json({ count: null });
  }
}
