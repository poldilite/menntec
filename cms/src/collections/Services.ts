import { CollectionConfig } from 'payload/types';

export const ServicesCollection: CollectionConfig = {
  slug: 'services',
  labels: {
    singular: 'Service',
    plural: 'Services',
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
  ],
};
