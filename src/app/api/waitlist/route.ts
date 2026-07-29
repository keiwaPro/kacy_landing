const API_URL = process.env.API_URL ?? "http://localhost:3010";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Corps de requête invalide." }, { status: 400 });
  }

  try {
    const res = await fetch(`${API_URL}/api/waitlist`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(5000),
    });
    const data = await res.json().catch(() => ({}));
    return Response.json(data, { status: res.status });
  } catch {
    return Response.json({ error: "Service indisponible, réessayez." }, { status: 503 });
  }
}

export async function GET() {
  try {
    const res = await fetch(`${API_URL}/api/waitlist/count`, {
      signal: AbortSignal.timeout(3000),
    });
    if (!res.ok) return Response.json({ count: null });
    return Response.json(await res.json());
  } catch {
    return Response.json({ count: null });
  }
}
