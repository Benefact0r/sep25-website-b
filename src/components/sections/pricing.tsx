import { pricingTiers } from "@/content/content";

export function PricingSection() {
  return (
    <section id="pricing" className="space-y-6">
      <div className="max-w-2xl space-y-2">
        <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">Plans that grow with every location</h2>
        <p className="text-muted">
          Choose the launch path that fits your rollout pace. Upgrade anytime as your guest engagement program expands.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {pricingTiers.map((tier) => (
          <article
            key={tier.name}
            className="flex h-full flex-col gap-4 rounded-2xl border border-border/40 bg-surface p-6 shadow-sm"
          >
            <div className="space-y-1">
              <h3 className="text-xl font-semibold text-foreground">{tier.name}</h3>
              <p className="text-sm font-medium text-[var(--color-primary)]">{tier.price}</p>
              <p className="text-sm text-muted">{tier.description}</p>
            </div>
            <ul className="mt-auto space-y-2 text-sm text-muted">
              {tier.features.map((item) => (
                <li key={item} className="flex items-start gap-2 text-foreground">
                  <span aria-hidden>✔</span>
                  <span className="text-sm text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
