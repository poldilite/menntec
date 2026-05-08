import { CollectionConfig } from 'payload/types';

export const ContactInquiriesCollection: CollectionConfig = {
  slug: 'contact-inquiries',
  labels: {
    singular: 'Contact Inquiry',
    plural: 'Contact Inquiries',
  },
  admin: {
    group: 'Submissions',
    defaultColumns: ['firstName', 'lastName', 'email', 'createdAt'],
  },
  access: {
    create: () => true, // Allow form submissions
    read: ({ req }) => !!req.user, // Only logged-in users can view
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  fields: [
    {
      name: 'firstName',
      type: 'text',
      required: true,
    },
    {
      name: 'lastName',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
    },
  ],
};
