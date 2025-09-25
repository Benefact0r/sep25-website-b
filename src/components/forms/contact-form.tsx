"use client";

import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Enter a valid email."),
  message: z.string().min(10, "Share a bit more about your goals."),
});

type ContactValues = z.infer<typeof contactSchema>;

type FieldErrors = Partial<Record<keyof ContactValues, string>>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const values = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    } satisfies ContactValues;

    const parsed = contactSchema.safeParse(values);

    if (!parsed.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const field = issue.path[0] as keyof ContactValues;
        fieldErrors[field] = issue.message;
      }
      setErrors(fieldErrors);
      toast.error("Please fix the highlighted fields.");
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(parsed.data),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        throw new Error(payload.error ?? "Unable to submit form.");
      }

      toast.success("Thanks! We’ll be in touch shortly.");
      event.currentTarget.reset();
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Something went wrong. Please try again.";
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl border border-border/40 bg-surface p-6 shadow-sm">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
          Name
          <input
            name="name"
            type="text"
            className="rounded-xl border border-border/60 bg-background px-4 py-2 text-sm text-foreground placeholder:text-muted focus:border-[var(--color-primary)] focus:outline-none"
            placeholder="Jane Doe"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            required
          />
          {errors.name && (
            <span id="name-error" className="text-xs text-[var(--color-accent-foreground)]">
              {errors.name}
            </span>
          )}
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
          Email
          <input
            name="email"
            type="email"
            className="rounded-xl border border-border/60 bg-background px-4 py-2 text-sm text-foreground placeholder:text-muted focus:border-[var(--color-primary)] focus:outline-none"
            placeholder="you@example.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            required
          />
          {errors.email && (
            <span id="email-error" className="text-xs text-[var(--color-accent-foreground)]">
              {errors.email}
            </span>
          )}
        </label>
      </div>
      <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
        How can we help?
        <textarea
          name="message"
          rows={5}
          className="rounded-xl border border-border/60 bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-[var(--color-primary)] focus:outline-none"
          placeholder="Share your locations, goals, or current loyalty setup."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          required
        />
        {errors.message && (
          <span id="message-error" className="text-xs text-[var(--color-accent-foreground)]">
            {errors.message}
          </span>
        )}
      </label>
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-[var(--color-primary-foreground)] shadow transition hover:opacity-90 disabled:opacity-70"
      >
        {isSubmitting ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
