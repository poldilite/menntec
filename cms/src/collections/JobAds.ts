import { CollectionConfig } from 'payload/types';

export const JobAdsCollection: CollectionConfig = {
  slug: 'job-ads',
  labels: {
    singular: 'Job Ad',
    plural: 'Job Ads',
  },
  admin: {
    group: 'Content',
  },
  fields: [
    {
      name: 'jobTitle',
      type: 'text',
      required: true,
    },
    {
      name: 'jobTitleSubtext',
      type: 'text',
      admin: {
        description: 'e.g., "Angular/TypeScript"',
      },
    },
    {
      name: 'bannerText1',
      type: 'text',
      admin: {
        description: 'e.g., "Vollzeit"',
      },
    },
    {
      name: 'bannerText2',
      type: 'text',
      admin: {
        description: 'e.g., "Berlin"',
      },
    },
    {
      name: 'jobTasks',
      type: 'array',
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'jobBenefits',
      type: 'array',
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'jobPrerequisites',
      type: 'array',
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'contactPerson',
      type: 'relationship',
      relationTo: 'contacts',
      admin: {
        description: 'Contact person for this job',
      },
    },
  ],
};
