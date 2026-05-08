const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL || 'http://localhost:3000';

interface CacheOptions {
  revalidate?: number;
}

const defaultCache: CacheOptions = {
  revalidate: 60,
};

async function fetchCMS<T>(
  endpoint: string,
  options?: RequestInit & CacheOptions
): Promise<T> {
  const { revalidate, ...fetchOptions } = options || {};

  const url = `${CMS_URL}/api${endpoint}`;

  try {
    const response = await fetch(url, {
      ...fetchOptions,
      next: {
        revalidate: revalidate || defaultCache.revalidate,
      },
    });

    if (!response.ok) {
      throw new Error(`CMS API error: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error(`Failed to fetch from ${url}:`, error);
    throw error;
  }
}

export async function fetchHomepage() {
  return fetchCMS('/collections/homepages?limit=1&where[active][equals]=true');
}

export async function fetchServices() {
  return fetchCMS('/collections/services?limit=100&sort=-createdAt');
}

export async function fetchContacts() {
  return fetchCMS('/collections/contacts?limit=100&sort=lastName');
}

export async function fetchJobAds() {
  return fetchCMS('/collections/jobAds?limit=100&sort=-createdAt');
}

export async function fetchPageBySlug(slug: string) {
  return fetchCMS(`/collections/pages?where[slug][equals]=${slug}`);
}

export async function fetchContactInquiries() {
  return fetchCMS('/collections/contactInquiries?limit=100&sort=-createdAt');
}

export async function submitContactForm(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
}) {
  return fetchCMS('/collections/contactInquiries', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}
