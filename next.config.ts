import type { NextConfig } from "next";
import WebpackErrorReporterPlugin from "./webpack/plugins/WebpackErrorReporterPlugin";

const nextConfig: NextConfig = {
  // Separate build directory for production builds
  distDir: process.env.NODE_ENV === 'production' ? '.next' : '.next-dev',
  devIndicators: false,
  // Generate standalone output for easier deployment
  output: 'standalone',
  
  // Custom webpack config to handle file conflicts and path resolution
  webpack: (config, { dev }) => {
    if (dev) {
      config.devtool = 'eval'; 
      config.cache = {
        type: 'filesystem',
        cacheDirectory: '/home/user/.next-cache-dev'
      };

      config.plugins.push(new WebpackErrorReporterPlugin(process.env.NEXT_PUBLIC_PROJECT_ID, process.env.NEXT_PUBLIC_WEBHOOK_BUILD_ERROR_URL));
      console.log('WebpackErrorReporterPlugin registered for dev mode.');

    } else {
      config.cache = {
        type: 'filesystem',
        cacheDirectory: '/home/user/.next-cache-build'
      }
    }
    // Handle missing modules gracefully
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
      os: false
    }

    return config
  },

  // Transpile packages that might cause issues
  transpilePackages: ['@radix-ui/react-accordion', 'lucide-react'],

  // TypeScript configuration - allow errors to be caught by webpack
  typescript: {
    // Don't ignore build errors so webpack can catch and report them
    ignoreBuildErrors: false
  },

  // ESLint configuration - allow errors to be caught by webpack  
  eslint: {
    // Don't ignore errors during builds so webpack can catch and report them
    ignoreDuringBuilds: false
  }
};

export default nextConfig;
