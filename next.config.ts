import type { NextConfig } from "next";
export const experimental_ppr = true;

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    ppr: "incremental",
  },
};

export default nextConfig;
