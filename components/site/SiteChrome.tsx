"use client";

import { usePathname } from "next/navigation";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { BackToTop } from "@/components/ui/BackToTop";

/**
 * Renders the site header/footer around page content — except on the embedded
 * Sanity Studio (`/studio`), which takes over the full screen.
 */
export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname?.startsWith("/studio")) {
    return <>{children}</>;
  }
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <BackToTop />
    </>
  );
}
