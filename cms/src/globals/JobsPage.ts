import type { GlobalConfig } from 'payload';

export const JobsPageGlobal: GlobalConfig = {
  slug: 'jobs-page',
  label: 'Jobs-Seite',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Content',
  },
  fields: [
    {
      name: 'heroTitle',
      type: 'text',
      required: true,
      defaultValue: 'Karriere bei MennTEC',
      admin: {
        description: 'Überschrift auf der Karriere-Seite',
      },
    },
  ],
};
