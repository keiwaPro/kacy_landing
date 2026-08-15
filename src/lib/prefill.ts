const EVENT = "kacy:prefill-whatsapp";

export function prefillWhatsapp(value: string) {
  window.dispatchEvent(new CustomEvent(EVENT, { detail: value }));
}

export function onPrefillWhatsapp(handler: (value: string) => void) {
  const listener = (e: Event) => handler((e as CustomEvent<string>).detail);
  window.addEventListener(EVENT, listener);
  return () => window.removeEventListener(EVENT, listener);
}
