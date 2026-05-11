// Internal URL for server-side fetches (Docker service name)
const CMS_INTERNAL_URL = process.env.CMS_INTERNAL_URL || process.env.NEXT_PUBLIC_CMS_URL || 'http://localhost:3002'

interface CacheOptions {
  revalidate?: number
}

async function fetchCMS<T>(
  endpoint: string,
  options?: RequestInit & CacheOptions
): Promise<T> {
  const { revalidate, ...fetchOptions } = options || {}

  const url = `${CMS_INTERNAL_URL}/api${endpoint}`

  try {
    const response = await fetch(url, {
      ...fetchOptions,
      next: {
        revalidate: revalidate ?? 60,
      },
    })

    if (!response.ok) {
      throw new Error(`CMS API error: ${response.status} – ${url}`)
    }

    return response.json()
  } catch (error) {
    console.error(`Failed to fetch from ${url}:`, error)
    throw error
  }
}

// ─── Globals ─────────────────────────────────────────────────────────────────

export async function fetchHomepage() {
  return fetchCMS<{
    heroText: string
    quoteText: string
    ctaText: string
  }>('/globals/homepage')
}

export interface CompanyInfo {
  companyName: string
  legalForm?: string
  street: string
  zip: string
  city: string
  email: string
  phone?: string
  geschaeftsfuehrer?: string
  handelsregisterGericht?: string
  handelsregisterNr?: string
  ustIdNr?: string
  datenschutzContact?: {
    firstName: string
    lastName: string
    email: string
  }
}

export async function fetchCompanyInfo(): Promise<CompanyInfo> {
  return fetchCMS<CompanyInfo>('/globals/company-info?depth=1')
}

export async function fetchJobsPage() {
  return fetchCMS<{
    heroTitle: string
  }>('/globals/jobs-page')
}

// ─── Collections ─────────────────────────────────────────────────────────────

export async function fetchServices() {
  return fetchCMS<{ docs: any[] }>('/services?limit=100&sort=sortOrder&depth=1')
}

export async function fetchContacts() {
  return fetchCMS<{ docs: any[] }>('/contacts?limit=100&sort=lastName&depth=1')
}

export async function fetchJobAds() {
  return fetchCMS<{ docs: any[] }>('/job-ads?limit=100&sort=-createdAt')
}

export async function fetchPageBySlug(slug: string) {
  return fetchCMS<{ docs: any[] }>(`/pages?where[slug][equals]=${encodeURIComponent(slug)}`)
}

export async function submitContactForm(data: {
  firstName: string
  lastName: string
  email: string
  phone?: string
  message: string
}) {
  return fetchCMS('/contact-inquiries', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    revalidate: 0,
  })
}
