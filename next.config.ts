import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/320kbps", // Set the base path for the application (If you are deploying to a subdirectory, set this to the subdirectory name)
};

export default nextConfig;