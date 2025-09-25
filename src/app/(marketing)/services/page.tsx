import type { Metadata } from "next";

import { brand } from "@/content/brand";
import { services, seo } from "@/content/content";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  return {
    title: seo.services.title,
    description: seo.services.description,
  };
}

export default function ServicesPage() {
  return (
    <div className="space-y-10">
      <div className="max-w-3xl space-y-3">
        <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">Services</h1>
        <p className="text-muted">
          {brand.name} partners with you end-to-end — from designing your loyalty currency to integrating with every touchpoint.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.name}
            className="flex h-full flex-col gap-3 rounded-2xl border border-border/40 bg-surface p-6 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-foreground">{service.name}</h2>
            <p className="text-sm text-muted">{service.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
