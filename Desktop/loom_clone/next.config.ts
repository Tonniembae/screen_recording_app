import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint:{
    ignoreDuringBuilds:true,
  },
  typescript:{
    ignoreBuildErrors:true,
  },
  /* config options here */
  images:{
    remotePatterns: [
      {hostname: '*', protocol:'https',port:'',pathname:'/**'}
    ]
  }
  
};

export default nextConfig;
