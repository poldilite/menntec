import payload from 'payload';
import dotenv from 'dotenv';

dotenv.config();

const seed = async () => {
  try {
    console.log('Connecting to database...');
    await payload.init({
      secret: process.env.PAYLOAD_SECRET || 'test-secret',
      mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/menntec',
      email: {
        fromName: 'MennTEC CMS',
        fromAddress: 'noreply@menntec.de',
      },
    });

    console.log('Creating seed data...');

    // Create Homepage
    const homepage = await payload.create({
      collection: 'homepages',
      data: {
        heroText: 'Willkommen bei MennTEC',
        descriptionText:
          'Wir bieten innovative IT-Lösungen und digitale Beratung für Ihr Unternehmen',
        active: true,
      },
    });
    console.log('✓ Homepage created');

    // Create Services
    const services = [
      {
        name: 'Web Entwicklung',
        description:
          'Moderne und performante Webapplikationen mit React, Next.js und TypeScript',
        new: true,
      },
      {
        name: 'Mobile Entwicklung',
        description: 'Native und Cross-Platform mobile Apps für iOS und Android',
        exclusive: false,
      },
      {
        name: 'Cloud Architektur',
        description:
          'Skalierbare Cloud-Lösungen mit AWS, Azure und Google Cloud Platform',
        new: false,
      },
      {
        name: 'DevOps Consulting',
        description: 'CI/CD Pipelines, Docker, Kubernetes und Infrastructure as Code',
        exclusive: false,
      },
      {
        name: 'Datenbankoptimierung',
        description:
          'PostgreSQL, MySQL und NoSQL Datenbanken für optimale Performance',
        exclusive: true,
      },
      {
        name: 'IT Sicherheit',
        description:
          'Penetration Testing und Sicherheitsaudits für Ihre Anwendungen',
        new: true,
      },
    ];

    for (const service of services) {
      await payload.create({
        collection: 'services',
        data: service,
      });
    }
    console.log(`✓ ${services.length} services created`);

    // Create Contacts
    const contacts = [
      {
        firstName: 'Max',
        lastName: 'Mustermann',
        title: 'Senior Developer',
        email: 'max@menntec.de',
        phone: '+49 123 456789',
      },
      {
        firstName: 'Anna',
        lastName: 'Schmidt',
        title: 'DevOps Engineer',
        email: 'anna@menntec.de',
        phone: '+49 123 456790',
      },
      {
        firstName: 'Thomas',
        lastName: 'Weber',
        title: 'Project Manager',
        email: 'thomas@menntec.de',
        phone: '+49 123 456791',
      },
      {
        firstName: 'Sarah',
        lastName: 'Meyer',
        title: 'UI/UX Designer',
        email: 'sarah@menntec.de',
        phone: '+49 123 456792',
      },
    ];

    for (const contact of contacts) {
      await payload.create({
        collection: 'contacts',
        data: contact,
      });
    }
    console.log(`✓ ${contacts.length} contacts created`);

    // Create Job Ads
    const jobAds = [
      {
        jobTitle: 'Senior Full-Stack Developer',
        jobTitleSubtext: 'React, Node.js, PostgreSQL',
        jobTasks: [
          { task: 'Entwicklung moderner Web-Applikationen' },
          { task: 'Architektur und Design von Systemen' },
          { task: 'Code Reviews und Mentoring' },
        ],
        jobBenefits: [
          { benefit: 'Flexible Arbeitszeiten' },
          { benefit: 'Remote-Work möglich' },
          { benefit: 'Weiterbildungsbudget' },
        ],
        jobPrerequisites: [
          { requirement: '5+ Jahre Erfahrung in Web-Entwicklung' },
          { requirement: 'Expertise mit React/Next.js' },
          { requirement: 'PostgreSQL oder ähnliche Datenbanken' },
        ],
      },
      {
        jobTitle: 'DevOps Engineer',
        jobTitleSubtext: 'Docker, Kubernetes, AWS',
        jobTasks: [
          { task: 'Aufbau und Verwaltung von CI/CD Pipelines' },
          { task: 'Infrastructure as Code mit Terraform' },
          { task: 'Monitoring und Performance Optimization' },
        ],
        jobBenefits: [
          { benefit: 'Kompetitives Gehalt' },
          { benefit: 'Kostenlose Schulungen' },
          { benefit: 'Moderne Tech Stack' },
        ],
        jobPrerequisites: [
          { requirement: '3+ Jahre DevOps Erfahrung' },
          { requirement: 'Kubernetes Expertise' },
          { requirement: 'Shell und Python Kenntnisse' },
        ],
      },
    ];

    for (const job of jobAds) {
      await payload.create({
        collection: 'jobAds',
        data: job,
      });
    }
    console.log(`✓ ${jobAds.length} job ads created`);

    // Create Pages
    const pages = [
      {
        slug: 'impressum',
        title: 'Impressum',
        heroTitle: 'Impressum',
        content: '<p>Rechtliche Informationen...</p>',
      },
      {
        slug: 'datenschutz',
        title: 'Datenschutz',
        heroTitle: 'Datenschutzerklärung',
        content: '<p>Datenschutzinformationen...</p>',
      },
    ];

    for (const page of pages) {
      await payload.create({
        collection: 'pages',
        data: page,
      });
    }
    console.log(`✓ ${pages.length} pages created`);

    console.log('\n✅ Seed data created successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seed();
