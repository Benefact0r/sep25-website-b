export const brand = {
  name: "Trader Helper",
  tagline: "AI signals for crypto futures",
  heroHeadline: "Smarter trades in minutes",
  contactCta: {
    label: "Start free trial",
    href: "/contact",
  },
  secondaryCta: {
    label: "See how it works",
    href: "/#pricing",
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Contact", href: "/contact" },
  ],
  socialLinks: [
    { label: "Telegram", href: "https://t.me" },
    { label: "Twitter", href: "https://x.com" },
    { label: "YouTube", href: "https://youtube.com" },
  ],
  colors: {
    primary: "#2563eb",
    primaryForeground: "#f0f9ff",
    accent: "#10b981",
    accentForeground: "#022c22",
    muted: "#0f172a",
  },
  meta: {
    title: "Trader Helper | AI signals for crypto futures",
    description:
      "Trade confidently with AI-optimized EMA, RSI, and MACD strategies, real-time Binance data, and automated risk sizing.",
  },
};

type Brand = typeof brand;

export type NavigationItem = Brand["navigation"][number];
export type SocialLink = Brand["socialLinks"][number];
