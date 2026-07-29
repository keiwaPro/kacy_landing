const TOTAL_PLACES = 50;

async function getRemainingPlaces(): Promise<number> {
  const apiUrl = process.env.API_URL ?? "http://localhost:3010";
  try {
    const res = await fetch(`${apiUrl}/api/waitlist/count`, {
      signal: AbortSignal.timeout(3000),
      cache: "no-store",
    });
    if (!res.ok) return TOTAL_PLACES;
    const data = await res.json();
    return Math.max(0, TOTAL_PLACES - (data.count ?? 0));
  } catch {
    return TOTAL_PLACES;
  }
}

export default async function Banner() {
  const remaining = await getRemainingPlaces();

  return (
    <div className="banner">
      <span className="dot" />
      <strong>{remaining} places restantes</strong> sur {TOTAL_PLACES}
      <span className="sep">·</span>
      Offre lancement jusqu&apos;au <strong>15.05.2026</strong>
    </div>
  );
}
