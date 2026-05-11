import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

// Collections
import { ServicesCollection } from './src/collections/Services'
import { ContactsCollection } from './src/collections/Contacts'
import { JobAdsCollection } from './src/collections/JobAds'
import { PagesCollection } from './src/collections/Pages'
import { ContactInquiriesCollection } from './src/collections/ContactInquiries'
import { MediaCollection } from './src/collections/Media'
import { Users } from './src/collections/Users'

// Globals
import { HomepageGlobal } from './src/globals/Homepage'
import { CompanyInfoGlobal } from './src/globals/CompanyInfo'

import dotenv from 'dotenv'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ path: path.resolve(dirname, '.env.local') })
}

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3002',
  admin: {
    user: Users.slug,
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
    Users,
    MediaCollection,
    ServicesCollection,
    ContactsCollection,
    JobAdsCollection,
    PagesCollection,
    ContactInquiriesCollection,
  ],
  globals: [
    HomepageGlobal,
    CompanyInfoGlobal,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'dev-secret-key-minimum-32-characters-long',
  typescript: {
    outputFile: path.resolve(dirname, 'src/payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || 'postgresql://postgres:dev-password@postgres:5432/menntec',
    },
  }),
  sharp,
  cors: [
    'http://localhost:3002',
    'http://localhost:3003',
    'http://cms:3000',
    'http://frontend:3001',
    'https://menntec.de',
    'https://www.menntec.de',
    'https://cms.menntec.de',
  ],
  csrf: [
    'http://localhost:3002',
    'http://localhost:3003',
    'http://cms:3000',
    'http://frontend:3001',
    'https://menntec.de',
    'https://www.menntec.de',
    'https://cms.menntec.de',
  ],
})
