import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/best-dental-clinics-kochi",
        destination: "/best-dental-clinics-kochi-reddit",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
