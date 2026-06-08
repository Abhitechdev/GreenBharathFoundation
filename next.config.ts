import type { NextConfig } from "next";

const repositoryName = "GreenBharath";
const isProduction = process.env.NODE_ENV === "production";
const githubPagesBasePath = isProduction ? `/${repositoryName}` : undefined;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: githubPagesBasePath,
  assetPrefix: githubPagesBasePath ? `${githubPagesBasePath}/` : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
