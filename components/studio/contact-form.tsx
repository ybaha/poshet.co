"use client";

import { submitInquiry } from "@/lib/actions/submit-inquiry";
import { FIELD_LIMITS, MIN_MESSAGE_LENGTH } from "@/lib/form-validation";
import { FormField } from "./form-field";
import { InquiryForm } from "./inquiry-form";

export function ContactForm() {
  return (
    <InquiryForm action={submitInquiry}>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Name" name="name" required maxLength={FIELD_LIMITS.name} autoComplete="name" />
        <FormField label="Email" name="email" type="email" required maxLength={FIELD_LIMITS.email} autoComplete="email" />
      </div>
      <FormField label="Company" name="company" optional maxLength={FIELD_LIMITS.company} autoComplete="organization" />
      <FormField
        multiline
        label="What are you building?"
        name="message"
        required
        minLength={MIN_MESSAGE_LENGTH}
        maxLength={FIELD_LIMITS.message}
        placeholder="A few sentences about your project, goals and timing."
      />
    </InquiryForm>
  );
}
