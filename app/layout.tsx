import type { Metadata } from "next";
// Self-hosted variable fonts (no external font CDN dependency).
import "@fontsource-variable/fraunces";
import "@fontsource-variable/inter";
import "./globals.css";
import { SiteChrome } from "@/components/site/SiteChrome";

export const metadata: Metadata = {
  metadataBase: new URL("https://vasectomyaustralia.com.au"),
  title: {
    default: "Vasectomy Australia | No-Scalpel Vasectomy with Dr Geoff & Dr Matt",
    template: "%s | Vasectomy Australia",
  },
  description:
    "Australia's most trusted no-scalpel vasectomists. Dr Geoff Cashion and Dr Matt Valentine perform thousands of quick, low-risk vasectomies a year under local anaesthetic — most under 15 minutes, more than 99% effective.",
  openGraph: {
    title: "Vasectomy Australia | Dr Geoff & Dr Matt",
    description:
      "The two doctors behind Australia's most trusted vasectomy practice. No-scalpel, local anaesthetic, most procedures under 15 minutes.",
    type: "website",
    locale: "en_AU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-bone text-ink">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
