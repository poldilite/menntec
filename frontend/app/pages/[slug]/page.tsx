import { Hero, Section } from '../../components';
import { fetchPageBySlug } from '@/lib/cms';

export const revalidate = 60;

interface PageProps {
  params: {
    slug: string;
  };
}

async function getPageData(slug: string) {
  try {
    const result = await fetchPageBySlug(slug);
    return result?.docs?.[0] || null;
  } catch (error) {
    console.error(`Error fetching page ${slug}:`, error);
    return null;
  }
}

export default async function DynamicPage({ params }: PageProps) {
  const page = await getPageData(params.slug);

  if (!page) {
    return (
      <main className="min-h-screen bg-white">
        <Hero title="Seite nicht gefunden" subtitle="Diese Seite existiert leider nicht." />
        <Section>
          <div className="text-center py-12">
            <p className="text-body text-gray-600">
              Die gesuchte Seite konnte nicht gefunden werden.
            </p>
          </div>
        </Section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <Hero
        title={page.title || page.heroTitle}
        backgroundImage={page.heroImage?.url}
      />

      {/* Content */}
      <Section>
        <div className="max-w-4xl mx-auto prose prose-lg">
          {page.content && (
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: page.content }}
            />
          )}
        </div>
      </Section>
    </main>
  );
}
