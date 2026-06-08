import type { NextConfig } from "next";

const repositoryName = "GreenBharathFoundation";
const isProduction = process.env.NODE_ENV === "production";
const githubPagesBasePath = isProduction ? `/${repositoryName}` : undefined;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: githubPagesBasePath,
  assetPrefix: githubPagesBasePath ? `${githubPagesBasePath}/` : undefined,
  images: {
    loader: "custom",
    loaderFile: "./src/lib/imageLoader.ts",
  },
};

export default nextConfig;
