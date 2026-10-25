"use client";

import { submitSupportRequest } from "@/lib/actions/submit-support-request";
import { FIELD_LIMITS, MIN_MESSAGE_LENGTH } from "@/lib/form-validation";
import { FormField } from "../form-field";
import { InquiryForm } from "../inquiry-form";

export function SupportForm({ slug }: { slug: string }) {
  return (
    <InquiryForm
      action={submitSupportRequest}
      submitLabel="Send to support"
      successMessage="Our support team will reply to the email you gave us."
    >
      <input type="hidden" name="slug" value={slug} />
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Name" name="name" required maxLength={FIELD_LIMITS.name} autoComplete="name" />
        <FormField label="Email" name="email" type="email" required maxLength={FIELD_LIMITS.email} autoComplete="email" />
      </div>
      <FormField
        multiline
        label="How can we help?"
        name="message"
        required
        minLength={MIN_MESSAGE_LENGTH}
        maxLength={FIELD_LIMITS.message}
        placeholder="Tell us what happened, and what device you are using."
      />
    </InquiryForm>
  );
}
