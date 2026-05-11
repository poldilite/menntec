import { Hero, Section, Grid, Card } from '../components';
import { fetchServices } from '@/lib/cms';

export const revalidate = 60;

async function getServices() {
  try {
    const result = await fetchServices();
    return result?.docs || [];
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
}

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <Hero
        title="Unsere Services"
        subtitle="Umfassende IT-Lösungen für Ihr Unternehmen"
      />

      {/* Services Grid */}
      <Section
        backgroundColor="light"
      >
        {services.length > 0 ? (
          <Grid columns={3}>
            {services.map((service: any) => (
              <Card
                key={service.id}
                title={service.name}
                description={service.description}
                image={service.image?.url}
                imageAlt={service.image?.alt || service.name}
                badge={service.exclusive ? 'Exklusiv' : service.new ? 'Neu' : undefined}
              />
            ))}
          </Grid>
        ) : (
          <div className="text-center py-12">
            <p className="text-body text-gray-600">
              Keine Services verfügbar. Bitte versuchen Sie es später erneut.
            </p>
          </div>
        )}
      </Section>
    </main>
  );
}
