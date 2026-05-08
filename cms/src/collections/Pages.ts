import { CollectionConfig } from 'payload/types';

export const PagesCollection: CollectionConfig = {
  slug: 'pages',
  labels: {
    singular: 'Page',
    plural: 'Pages',
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
    },
  ],
};
