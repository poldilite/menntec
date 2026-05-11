import { Hero } from '../components/Hero'
import { RichText } from '../components/RichText'
import { fetchCompanyInfo, fetchPageBySlug } from '@/lib/cms'

export const revalidate = 0

export default async function ImpressumPage() {
  const [pageResult, coResult] = await Promise.allSettled([
    fetchPageBySlug('impressum'),
    fetchCompanyInfo(),
  ])

  const page =
    pageResult.status === 'fulfilled' ? pageResult.value?.docs?.[0] : null
  const co = coResult.status === 'fulfilled' ? coResult.value : null

  const variables: Record<string, string> = co
    ? {
        companyName: co.companyName,
        legalForm: co.legalForm ?? '',
        street: co.street,
        zip: co.zip,
        city: co.city,
        email: co.email,
        phone: co.phone ?? '',
        geschaeftsfuehrer: co.geschaeftsfuehrer ?? '',
        ustIdNr: co.ustIdNr ?? '',
        handelsregisterGericht: co.handelsregisterGericht ?? '',
        handelsregisterNr: co.handelsregisterNr ?? '',
      }
    : {}

  return (
    <main>
      <Hero text={page?.heroTitle || 'Impressum'} />
      <section className="w-full bg-primary py-12 px-6">
        <div className="max-w-4xl mx-auto prose prose-lg">
          {page?.content ? (
            <RichText content={page.content} variables={variables} />
          ) : (
            <p>Inhalt nicht verfügbar.</p>
          )}
        </div>
      </section>
    </main>
  )
}
