export type FormResult = { ok: true } | { ok: false; error: string };

export const FIELD_LIMITS = { name: 100, email: 200, company: 150, message: 4000 } as const;
export const MIN_MESSAGE_LENGTH = 10;
export const DELIVERY_ERROR = "Something went wrong. Please email us directly instead.";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const readField = (data: FormData, key: string) => String(data.get(key) ?? "").trim();

/** True when the hidden honeypot field was filled in, which only bots do. */
export const isHoneypotTripped = (data: FormData) => readField(data, "website") !== "";

/** Returns an error message for the first invalid sender detail, or null when both are fine. */
export function validateSender(name: string, email: string): string | null {
  if (!name || name.length > FIELD_LIMITS.name) return "Please enter your name.";
  if (!EMAIL_PATTERN.test(email) || email.length > FIELD_LIMITS.email) {
    return "Please enter a valid email address.";
  }
  return null;
}

export function validateMessage(message: string): string | null {
  if (message.length < MIN_MESSAGE_LENGTH || message.length > FIELD_LIMITS.message) {
    return `Please tell us a little more (${MIN_MESSAGE_LENGTH}–${FIELD_LIMITS.message} characters).`;
  }
  return null;
}
