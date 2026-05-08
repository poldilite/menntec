import { Hero, Section, Grid, Card, Button } from './components';
import { fetchHomepage, fetchServices, fetchContacts } from '@/lib/cms';

export const revalidate = 60;

async function getHomeData() {
  try {
    const [homepage, services, contacts] = await Promise.all([
      fetchHomepage(),
      fetchServices(),
      fetchContacts(),
    ]);

    return {
      homepage: homepage?.docs?.[0],
      services: services?.docs || [],
      contacts: contacts?.docs || [],
    };
  } catch (error) {
    console.error('Error fetching home data:', error);
    return {
      homepage: null,
      services: [],
      contacts: [],
    };
  }
}

export default async function Home() {
  const { homepage, services, contacts } = await getHomeData();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero
        title={homepage?.heroText || 'Willkommen bei MennTEC'}
        subtitle={homepage?.descriptionText || 'Innovative Lösungen für digitale Herausforderungen'}
        backgroundImage={homepage?.backgroundImage?.url}
      >
        <div className="flex gap-4 justify-center flex-wrap">
          <Button href="/services">Unsere Services</Button>
          <Button href="/kontakt" variant="outline">Kontakt aufnehmen</Button>
        </div>
      </Hero>

      {/* Services Section */}
      {services.length > 0 && (
        <Section
          title="Unsere Services"
          subtitle="Wir bieten umfassende IT-Lösungen für Ihr Unternehmen"
          backgroundColor="light"
        >
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
        </Section>
      )}

      {/* Contacts Section */}
      {contacts.length > 0 && (
        <Section
          title="Unser Team"
          subtitle="Lernen Sie unsere Experten kennen"
          centered
          backgroundColor="white"
        >
          <Grid columns={4}>
            {contacts.map((contact: any) => (
              <Card
                key={contact.id}
                title={`${contact.firstName} ${contact.lastName}`}
                description={contact.title}
                image={contact.image?.url}
                imageAlt={contact.image?.alt || `${contact.firstName} ${contact.lastName}`}
              >
                <div className="space-y-2 text-sm">
                  {contact.email && (
                    <p>
                      <a href={`mailto:${contact.email}`} className="text-accent hover:underline">
                        {contact.email}
                      </a>
                    </p>
                  )}
                  {contact.phone && (
                    <p>
                      <a href={`tel:${contact.phone}`} className="text-accent hover:underline">
                        {contact.phone}
                      </a>
                    </p>
                  )}
                </div>
              </Card>
            ))}
          </Grid>
        </Section>
      )}

      {/* CTA Section */}
      <Section
        title="Lassen Sie uns zusammenarbeiten"
        subtitle="Kontaktieren Sie uns heute für eine kostenlose Beratung"
        centered
        backgroundColor="accent"
      >
        <div className="flex justify-center gap-4 flex-wrap">
          <Button href="/kontakt" variant="secondary" size="large">
            Kontakt aufnehmen
          </Button>
        </div>
      </Section>
    </main>
  );
}
