import { features } from "@/content/content";

export function FeatureGrid() {
  return (
    <section id="features" className="space-y-6">
      <div className="max-w-2xl space-y-2">
        <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">Built for modern loyalty teams</h2>
        <p className="text-muted">
          Everything you need to design, launch, and measure blockchain-powered rewards without the engineering backlog.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="flex h-full flex-col gap-3 rounded-2xl border border-border/40 bg-surface p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
            <p className="text-sm text-muted">{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
