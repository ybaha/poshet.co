"use server";

import { getAppData } from "@/lib/apps";
import {
  DELIVERY_ERROR,
  isHoneypotTripped,
  readField,
  validateMessage,
  validateSender,
  type FormResult,
} from "@/lib/form-validation";
import { sendTelegramMessage } from "@/lib/sendTelegramMessage";

export async function submitSupportRequest(formData: FormData): Promise<FormResult> {
  if (isHoneypotTripped(formData)) return { ok: true };

  const app = getAppData(readField(formData, "slug"));
  const name = readField(formData, "name");
  const email = readField(formData, "email");
  const message = readField(formData, "message");

  if (!app) return { ok: false, error: "We could not find that app." };
  const error = validateSender(name, email) ?? validateMessage(message);
  if (error) return { ok: false, error };

  const delivered = await sendTelegramMessage(
    [`New support request: ${app.metadata.name}`, `From: ${name}`, `Email: ${email}`, "", message].join("\n")
  );
  return delivered ? { ok: true } : { ok: false, error: DELIVERY_ERROR };
}
