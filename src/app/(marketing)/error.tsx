"use client";

export default function MarketingError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="space-y-4 rounded-3xl border border-border/40 bg-surface p-6 text-center shadow-sm">
      <h2 className="text-xl font-semibold text-foreground">Something went wrong</h2>
      <p className="text-sm text-muted">
        {error.message || "We couldn’t load this page. Please try again."}
      </p>
      <button
        type="button"
        onClick={reset}
        className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-5 py-2 text-sm font-semibold text-[var(--color-primary-foreground)] shadow transition hover:opacity-90"
      >
        Retry
      </button>
    </div>
  );
}
