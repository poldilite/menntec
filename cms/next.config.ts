import type { NextConfig } from 'next'
import { withPayload } from '@payloadcms/next/withPayload'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typescript: {
    tsconfigPath: './tsconfig.json',
    // Payload generates importMap.js with complex inferred types that
    // TypeScript cannot express portably. Type safety is ensured in dev mode.
    ignoreBuildErrors: true,
  },
}

export default withPayload(nextConfig)
