import type { Metadata } from "next";
import Link from "next/link";

import { HeroSection } from "@/components/sections/hero";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { PricingSection } from "@/components/sections/pricing";
import { brand } from "@/content/brand";
import { contact } from "@/content/content";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  return {
    title: brand.meta.title,
    description: brand.meta.description,
  };
}

export default function HomePage() {
  return (
    <div className="space-y-16">
      <HeroSection />
      <FeatureGrid />
      <PricingSection />
      <section className="rounded-3xl border border-border/40 bg-surface p-8 shadow-sm sm:p-12">
        <div className="grid gap-6 sm:grid-cols-[2fr,1fr] sm:items-center">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">{contact.heading}</h2>
            <p className="text-sm text-muted sm:text-base">{contact.description}</p>
          </div>
          <div className="flex justify-start sm:justify-end">
            <Link
              href={brand.contactCta.href}
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-[var(--color-primary-foreground)] shadow transition hover:opacity-90"
            >
              {brand.contactCta.label}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
