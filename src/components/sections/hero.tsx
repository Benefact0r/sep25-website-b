import Link from "next/link";

import { brand } from "@/content/brand";
import { hero } from "@/content/content";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-border/40 bg-gradient-to-br from-[var(--color-primary)]/10 via-[var(--color-surface)] to-[var(--color-accent)]/10 px-6 py-16 shadow-sm sm:px-12">
      <div className="max-w-2xl space-y-6">
        <span className="text-sm font-medium uppercase tracking-wide text-[var(--color-accent-foreground)]">
          {hero.kicker}
        </span>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {brand.heroHeadline}
        </h1>
        <p className="text-base text-muted sm:text-lg">{hero.description}</p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href={brand.contactCta.href}
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-[var(--color-primary-foreground)] shadow transition hover:opacity-90"
          >
            {brand.contactCta.label}
          </Link>
          <Link
            href={brand.secondaryCta.href}
            className="inline-flex items-center justify-center rounded-full border border-border/60 px-6 py-3 text-sm font-semibold text-foreground transition hover:border-foreground"
          >
            {brand.secondaryCta.label}
          </Link>
        </div>
      </div>
      <div className="pointer-events-none absolute -right-10 -top-10 hidden h-52 w-52 rounded-full bg-[var(--color-primary)]/15 blur-3xl sm:block" aria-hidden />
      <div className="pointer-events-none absolute -bottom-12 left-1/3 hidden h-40 w-40 rounded-full bg-[var(--color-accent)]/20 blur-3xl sm:block" aria-hidden />
    </section>
  );
}
