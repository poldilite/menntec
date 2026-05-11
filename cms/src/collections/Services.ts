import type { CollectionConfig } from 'payload';

export const ServicesCollection: CollectionConfig = {
  slug: 'services',
  labels: {
    singular: 'Service',
    plural: 'Services',
  },
  access: {
    read: () => true,
  },
  admin: {
    group: 'Content',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'new',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Show "New" badge',
      },
    },
    {
      name: 'exclusive',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Show "Exclusive" badge',
      },
    },
    {
      name: 'sortOrder',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: 'Reihenfolge der Anzeige (aufsteigend, 0 = zuerst)',
      },
    },
  ],
};
