import { apiFetch, describeError } from "@/lib/api";

const TOTAL_PLACES = 100;

async function getRemainingPlaces(): Promise<number> {
  try {
    const res = await apiFetch("banner", "/api/waitlist/count", {
      signal: AbortSignal.timeout(3000),
      cache: "no-store",
    });
    if (!res.ok) {
      console.error(`[landing][banner] HTTP ${res.status} → REPLI ${TOTAL_PLACES} places`);
      return TOTAL_PLACES;
    }
    const data = await res.json();
    const remaining = Math.max(0, TOTAL_PLACES - (data.count ?? 0));
    console.log(`[landing][banner] count=${data.count} → ${remaining} places restantes`);
    return remaining;
  } catch (err) {
    console.error(
      `[landing][banner] échec → REPLI ${TOTAL_PLACES} places · ${describeError(err)}`,
    );
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
      Offre lancement jusqu&apos;au <strong>31.08.2026</strong>
    </div>
  );
}
