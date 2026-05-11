import type { CollectionConfig } from 'payload';

export const PagesCollection: CollectionConfig = {
  slug: 'pages',
  labels: {
    singular: 'Page',
    plural: 'Pages',
  },
  access: {
    read: () => true,
  },
  admin: {
    group: 'Content',
  },
  fields: [
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL slug (e.g., "impressum", "datenschutz")',
      },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'heroTitle',
      type: 'text',
      admin: {
        description: 'Hero section heading',
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      admin: {
        description:
          'Verfügbare Variablen (werden beim Rendern durch Firmendaten ersetzt): ' +
          '{{companyName}}, {{legalForm}}, {{street}}, {{zip}}, {{city}}, ' +
          '{{email}}, {{phone}}, {{geschaeftsfuehrer}}, ' +
          '{{ustIdNr}}, {{handelsregisterGericht}}, {{handelsregisterNr}}, ' +
          '{{dsName}}, {{dsEmail}}',
      },
    },
  ],
};
