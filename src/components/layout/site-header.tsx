"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import { brand } from "@/content/brand";
import { useTheme } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme, isReady } = useTheme();

  const initials = useMemo(() => {
    return brand.name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .slice(0, 3)
      .toUpperCase();
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-border/40 bg-surface/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
          <span
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent)] text-sm font-semibold text-[var(--color-accent-foreground)] shadow"
            aria-hidden
          >
            {initials}
          </span>
          <div className="flex flex-col leading-tight">
            <span>{brand.name}</span>
            <span className="text-xs text-muted">{brand.tagline}</span>
          </div>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {brand.navigation.map((item) => {
            const [basePath] = item.href.split("#");
            const isAnchor = item.href.includes("#");
            const isActive = isAnchor
              ? pathname === (basePath || "/")
              : pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition-colors hover:text-foreground",
                  isActive ? "text-foreground" : "text-muted",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-surface shadow-sm transition hover:border-border"
            aria-label="Toggle color theme"
            disabled={!isReady}
          >
            <span className="text-base" aria-hidden>
              {isReady && theme === "dark" ? "🌙" : "☀️"}
            </span>
          </button>
          <Link
            href={brand.contactCta.href}
            className="hidden rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-[var(--color-primary-foreground)] shadow-sm transition hover:opacity-90 md:inline-block"
          >
            {brand.contactCta.label}
          </Link>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-border/60 p-2 md:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
          >
            <span className="text-lg" aria-hidden>
              {isMenuOpen ? "✕" : "☰"}
            </span>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="border-t border-border/40 bg-surface md:hidden">
          <nav className="flex flex-col gap-1 px-4 py-3 text-base">
            {brand.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-muted transition hover:bg-muted/40 hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={brand.contactCta.href}
              className="mt-2 rounded-full bg-[var(--color-primary)] px-4 py-2 text-center text-sm font-semibold text-[var(--color-primary-foreground)] shadow-sm transition hover:opacity-90"
            >
              {brand.contactCta.label}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
