import type { NextConfig } from "next";
import i18nConfig from "./next-i18next.config.js";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  i18: i18nConfig.i18n,
};

export default nextConfig;
