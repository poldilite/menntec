'use server'

import { fetchServices as fetchServicesFromCMS } from '@/lib/cms'

const CMS_INTERNAL_URL = process.env.CMS_INTERNAL_URL || process.env.NEXT_PUBLIC_CMS_URL || 'http://localhost:3002'

function rewriteImageUrl(url: string): string {
  return url.replace(/^https?:\/\/[^/]+/, CMS_INTERNAL_URL)
}

export async function getServices() {
  try {
    const data = await fetchServicesFromCMS()
    const docs = data?.docs || []
    return docs.map((s: any) => ({
      ...s,
      image: s.image?.url ? { ...s.image, url: rewriteImageUrl(s.image.url) } : undefined,
    }))
  } catch (error) {
    console.error('Error fetching services:', error)
    return []
  }
}
