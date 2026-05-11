import type { CollectionConfig } from 'payload';

export const HomepageCollection: CollectionConfig = {
  slug: 'homepages',
  labels: {
    singular: 'Homepage',
    plural: 'Homepages',
  },
  admin: {
    group: 'Content',
  },
  fields: [
    {
      name: 'heroText',
      type: 'text',
      required: true,
      admin: {
        description: 'Main hero section text (e.g., "Industrie- und Gebäudetechnik")',
      },
    },
    {
      name: 'descriptionText',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Homepage description/subtitle',
      },
    },
  ],
};
