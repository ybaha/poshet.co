"use client";

import { FormEvent, ReactNode, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { CONTACT_EMAIL } from "@/data/studio";
import type { FormResult } from "@/lib/form-validation";
import { Button } from "./button-link";
import { textLinkClasses } from "./text-link";

type Status =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "success" }
  | { state: "error"; message: string };

type InquiryFormProps = {
  /** Server action that validates and delivers the submission. */
  action: (data: FormData) => Promise<FormResult>;
  /** The form's fields. A honeypot is added for you. */
  children: ReactNode;
  submitLabel?: string;
  successTitle?: string;
  successMessage?: string;
};

export function InquiryForm({
  action,
  children,
  submitLabel = "Send message",
  successTitle = "Message sent. Thank you!",
  successMessage = "We will get back to you as soon as we can.",
}: InquiryFormProps) {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus({ state: "sending" });

    try {
      const result = await action(new FormData(form));
      if (result.ok) {
        form.reset();
        setStatus({ state: "success" });
      } else {
        setStatus({ state: "error", message: result.error });
      }
    } catch {
      setStatus({
        state: "error",
        message: `Something went wrong. Please email ${CONTACT_EMAIL} instead.`,
      });
    }
  }

  if (status.state === "success") {
    return (
      <div role="status" className="flex flex-col items-start gap-4 py-8">
        <CheckCircle2 aria-hidden="true" className="h-10 w-10 text-studio-blue" />
        <h2 className="font-display text-card font-medium text-studio-navy">{successTitle}</h2>
        <p className="text-[16px] text-studio-muted">{successMessage}</p>
        <button
          type="button"
          onClick={() => setStatus({ state: "idle" })}
          className={textLinkClasses("accent", "text-[15px]")}
        >
          Send another message
        </button>
      </div>
    );
  }

  const sending = status.state === "sending";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {children}

      {/* Honeypot: hidden from people and assistive tech. */}
      <div className="hidden" aria-hidden="true">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {status.state === "error" && (
        <p role="alert" className="text-[15px] text-red-600">
          {status.message}
        </p>
      )}

      <Button type="submit" disabled={sending} className="w-full">
        {sending ? "Sending…" : submitLabel}
      </Button>
    </form>
  );
}
