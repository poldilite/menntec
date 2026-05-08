export const MOCK_HOMEPAGE_DATA = {
  homepage: {
    heroText: 'Industrie- und Gebäudetechnik',
    descriptionText: 'Wir sind Ihr Partner für hochwertige Lösungen in der Industrie- und Gebäudetechnik',
    __typename: 'Homepage',
  },
};

export const MOCK_CONTACTS_DATA = {
  contacts: [
    {
      id: '1',
      firstName: 'Max',
      lastName: 'Mustermann',
      title: 'Geschäftsführer',
      xing: 'https://xing.com/maxmustermann',
      email: 'max@example.com',
      image: {
        name: 'max.jpg',
        url: 'https://via.placeholder.com/200',
        __typename: 'UploadFile',
      },
      __typename: 'Contact',
    },
    {
      id: '2',
      firstName: 'Erika',
      lastName: 'Musterfrau',
      title: 'Projektleiterin',
      xing: 'https://xing.com/erikamusterfrau',
      email: 'erika@example.com',
      image: {
        name: 'erika.jpg',
        url: 'https://via.placeholder.com/200',
        __typename: 'UploadFile',
      },
      __typename: 'Contact',
    },
  ],
};

export const MOCK_PRODUCTS_DATA = {
  services: [
    {
      id: '1',
      name: 'Automatisierungslösungen',
      description: 'Modernste Automatisierungstechnik für Ihre Prozesse',
      new: true,
      exclusive: false,
      image: {
        name: 'automation.jpg',
        url: 'https://via.placeholder.com/400x300?text=Automation',
        __typename: 'UploadFile',
      },
      __typename: 'Service',
    },
    {
      id: '2',
      name: 'Energiemanagement',
      description: 'Optimierte Energielösungen für Gebäude',
      new: false,
      exclusive: true,
      image: {
        name: 'energy.jpg',
        url: 'https://via.placeholder.com/400x300?text=Energy',
        __typename: 'UploadFile',
      },
      __typename: 'Service',
    },
    {
      id: '3',
      name: 'Gebäudeüberwachung',
      description: 'Intelligente Überwachungssysteme',
      new: true,
      exclusive: false,
      image: {
        name: 'monitoring.jpg',
        url: 'https://via.placeholder.com/400x300?text=Monitoring',
        __typename: 'UploadFile',
      },
      __typename: 'Service',
    },
  ],
};

export const MOCK_IMPRINT_DATA = {
  imprint: {
    title: 'Impressum',
    heroTitle: 'Impressum',
    imprintText: `MennTEC GmbH
Beispielstraße 123
12345 Musterstadt

Geschäftsführer: Max Mustermann
Registergericht: Amtsgericht Musterstadt
Registernummer: HRB 123456

USt-IdNr.: DE123456789`,
    __typename: 'Imprint',
  },
};

export const MOCK_DATASEC_DATA = {
  dataPrivacy: {
    title: 'Datenschutz',
    heroTitle: 'Datenschutzerklärung',
    dataPrivacyText: `1. Verantwortlicher
MennTEC GmbH
Beispielstraße 123
12345 Musterstadt

2. Datenerfassung und Verarbeitung
Wir erheben und verarbeiten personenbezogene Daten nur mit Ihrer Einwilligung oder auf gesetzlicher Grundlage.`,
    __typename: 'DataPrivacy',
  },
};

export const MOCK_JOBADS_DATA = {
  jobAdPage: {
    pageInfo: {
      heroTitle: 'Karriere bei MennTEC',
      heroText: 'Werden Sie Teil unseres Teams',
      __typename: 'JobAdPageInfo',
    },
    jobAdRelation: {
      job_ads: [
        {
          id: '1',
          jobTitle: 'Senior Softwareentwickler (m/w/d)',
          jobTitleSubtext: 'Angular/TypeScript',
          bannerText1: 'Vollzeit',
          bannerText2: 'Berlin',
          jobSpecs: {
            jobTasks: [
              { text: 'Entwicklung von Web-Anwendungen' },
              { text: 'Zusammenarbeit mit dem Team' },
              { text: 'Codereviews und Best Practices' },
            ],
            jobBenefits: [
              { text: 'Flexible Arbeitszeiten' },
              { text: 'Home Office Möglichkeit' },
              { text: 'Weiterbildung' },
            ],
            jobPrerequisites: [
              { text: 'Erfahrung mit Angular' },
              { text: 'TypeScript Kenntnisse' },
              { text: 'Kommunikationsfähigkeit' },
            ],
            __typename: 'JobSpecs',
          },
          __typename: 'JobAd',
        },
      ],
      contact: {
        firstName: 'Hans',
        lastName: 'Recruiter',
        email: 'jobs@menntec.de',
        phone: '+49 (0) 123 456789',
        __typename: 'Contact',
      },
      __typename: 'JobAdRelation',
    },
    __typename: 'JobAdPage',
  },
};
