import { buildConfig } from 'payload/config';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import path from 'path';

// Collections
import { HomepageCollection } from './src/collections/Homepage';
import { ServicesCollection } from './src/collections/Services';
import { ContactsCollection } from './src/collections/Contacts';
import { JobAdsCollection } from './src/collections/JobAds';
import { PagesCollection } from './src/collections/Pages';
import { ContactInquiriesCollection } from './src/collections/ContactInquiries';

export default buildConfig({
  admin: {
    user: 'users',
    livePreview: {
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  collections: [
    HomepageCollection,
    ServicesCollection,
    ContactsCollection,
    JobAdsCollection,
    PagesCollection,
    ContactInquiriesCollection,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'dev-secret',
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    url: process.env.DATABASE_URI,
  }),
  cors: ['http://localhost:3001', 'http://localhost:3000'],
  csrf: ['http://localhost:3001', 'http://localhost:3000'],
});
