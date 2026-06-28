import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Editorial imagery is currently served from the Higgsfield CloudFront CDN.
    // These remote hosts are swapped for the Sanity media library once content
    // is migrated into the CMS.
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "*.cloudfront.net" },
      { protocol: "https", hostname: "cdn.sanity.io" },
    ],
  },
};

export default nextConfig;
