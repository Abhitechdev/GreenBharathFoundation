import type { NextConfig } from "next";

const githubRepository = process.env.GITHUB_REPOSITORY; // e.g. "Abhitechdev/GreenBharathFoundation"
const repositoryName = githubRepository ? githubRepository.split("/")[1] : "GreenBharathFoundation";

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
  env: {
    NEXT_PUBLIC_REPOSITORY_NAME: repositoryName,
  },
};

export default nextConfig;
