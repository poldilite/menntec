import type { GlobalConfig } from 'payload';

export const HomepageGlobal: GlobalConfig = {
  slug: 'homepage',
  label: 'Homepage',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Content',
  },
  fields: [
    {
      name: 'heroText',
      type: 'text',
      required: true,
      defaultValue: 'Willkommen bei MennTEC',
      admin: {
        description: 'Hauptüberschrift im Hero-Bereich',
      },
    },
    {
      name: 'quoteText',
      type: 'text',
      required: true,
      defaultValue: 'Qualität ist unser Anspruch.',
      admin: {
        description: 'Zitat-Text auf der orangen Sektion',
      },
    },
    {
      name: 'ctaText',
      type: 'text',
      required: true,
      defaultValue: 'Sie suchen nach einem starken Partner für Ihr Projekt? Kontaktieren Sie uns gerne über unser Kontaktformular.',
      admin: {
        description: 'Text im Call-to-Action-Bereich',
      },
    },
  ],
};
