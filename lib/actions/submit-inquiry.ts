"use server";

import {
  DELIVERY_ERROR,
  FIELD_LIMITS,
  isHoneypotTripped,
  readField,
  validateMessage,
  validateSender,
  type FormResult,
} from "@/lib/form-validation";
import { sendTelegramMessage } from "@/lib/sendTelegramMessage";

export async function submitInquiry(formData: FormData): Promise<FormResult> {
  // Report success to bots without doing anything.
  if (isHoneypotTripped(formData)) return { ok: true };

  const name = readField(formData, "name");
  const email = readField(formData, "email");
  const company = readField(formData, "company");
  const message = readField(formData, "message");

  const error =
    validateSender(name, email) ??
    (company.length > FIELD_LIMITS.company ? "Company name is too long." : null) ??
    validateMessage(message);
  if (error) return { ok: false, error };

  const lines = ["New website inquiry", `From: ${name}`, `Email: ${email}`];
  if (company) lines.push(`Company: ${company}`);
  lines.push("", message);

  const delivered = await sendTelegramMessage(lines.join("\n"));
  return delivered ? { ok: true } : { ok: false, error: DELIVERY_ERROR };
}
