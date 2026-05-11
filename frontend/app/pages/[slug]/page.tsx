import { Hero } from '../../components/Hero'
import { fetchPageBySlug } from '@/lib/cms'

export const revalidate = 60

interface PageProps {
  params: {
    slug: string
  }
}

async function getPageData(slug: string) {
  try {
    const result = await fetchPageBySlug(slug)
    return result?.docs?.[0] || null
  } catch (error) {
    console.error(`Error fetching page ${slug}:`, error)
    return null
  }
}

export default async function DynamicPage({ params }: PageProps) {
  const page = await getPageData(params.slug)

  if (!page) {
    return (
      <main>
        <Hero text="Seite nicht gefunden" />
        <section className="w-full bg-primary py-12 px-6">
          <div className="max-w-6xl mx-auto text-center py-12">
            <p className="text-base text-text-gray">
              Die gesuchte Seite konnte nicht gefunden werden.
            </p>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main>
      <Hero text={page.title || page.heroTitle || 'Seite'} />

      <section className="w-full bg-primary py-12 px-6">
        <div className="max-w-4xl mx-auto prose prose-lg">
          {page.content && (
            <div
              className="prose prose-lg max-w-none text-text"
              dangerouslySetInnerHTML={{ __html: page.content }}
            />
          )}
        </div>
      </section>
    </main>
  )
}
