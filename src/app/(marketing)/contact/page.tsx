import type { Metadata } from "next";

import { ContactForm } from "@/components/forms/contact-form";
import { contact, seo } from "@/content/content";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  return {
    title: seo.contact.title,
    description: seo.contact.description,
  };
}

export default function ContactPage() {
  return (
    <div className="grid gap-10 lg:grid-cols-[1.1fr,1fr] lg:items-start">
      <div className="space-y-4">
        <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">{contact.heading}</h1>
        <p className="text-muted text-base">{contact.description}</p>
        <div className="rounded-2xl border border-dashed border-border/60 bg-surface/60 p-6 text-sm text-muted">
          <p className="font-medium text-foreground">What to expect</p>
          <ul className="mt-2 space-y-2">
            <li>• Strategy review and platform walk-through</li>
            <li>• Exchange connections and risk settings setup</li>
            <li>• Seven-day trial with performance check-in</li>
          </ul>
        </div>
      </div>
      <ContactForm />
    </div>
  );
}
