# MennTEC - Next.js + Payload CMS

Modern website for MennTEC (Industrie- und Gebäudetechnik) built with:
- **Frontend**: Next.js 14+ with React, Tailwind CSS
- **CMS**: Payload CMS (headless, Node.js-based)
- **Database**: PostgreSQL
- **Deployment**: Docker containerized

## Quick Start (Local Development)

### Prerequisites
- Docker & Docker Compose installed
- Node.js 18+ (optional, for non-Docker development)

### Start Local Environment
```bash
# Clone and navigate to project
cd /Users/martin/Documents/reigniteX/Projects/Web/menntec

# Start all services (PostgreSQL, Payload CMS, Next.js)
docker-compose up

# First time? Payload CMS needs initial admin user setup:
# Visit http://localhost:3000 and follow the setup wizard
```

**Accessing the app:**
- 🌐 **Frontend**: http://localhost:3001
- 🎛️ **CMS Admin**: http://localhost:3000
- 🗄️ **Database**: localhost:5432 (postgres / dev-password)

## Development Workflow

### Editing Content
1. Go to http://localhost:3000
2. Login with your CMS credentials
3. Edit pages, products, team members, job ads
4. Content updates automatically sync to frontend via ISR (Incremental Static Regeneration)

### Modifying Frontend Code
```bash
# Frontend code is in /frontend directory
# Changes hot-reload automatically (Next.js dev server)
```

### Modifying CMS Schema
```bash
# CMS code is in /cms directory
# Payload CMS schema is in /cms/src/collections/
# Restart container after schema changes: docker-compose restart cms
```

## Project Structure

```
menntec/
├── frontend/                # Next.js application
│   ├── app/                # App router pages
│   ├── components/         # React components
│   ├── lib/               # Utilities, CMS fetch functions
│   ├── styles/            # Tailwind config + global styles
│   └── package.json
├── cms/                    # Payload CMS application
│   ├── src/
│   │   ├── collections/   # Database models (Homepage, Products, etc)
│   │   ├── access/        # Role-based access control
│   │   └── server.ts      # Payload config
│   └── package.json
├── shared/                # Shared types/utilities
├── docker-compose.yml     # Local dev orchestration
├── Dockerfile             # Production multi-stage build
└── ecosystem.config.js    # PM2 process management (production)
```

## Environment Variables

### Local Development (.env.local)
```env
# Generated automatically in docker-compose.yml
# No setup needed for local development
```

### Production (.env.production)
```env
DATABASE_URI=postgresql://user:password@host:5432/menntec
PAYLOAD_SECRET=your-secret-key-here
NEXT_PUBLIC_CMS_URL=https://your-domain.com/cms
NODE_ENV=production
```

## Deployment

### Build Docker Image
```bash
docker build -t menntec:latest .
```

### Deploy to VPS
```bash
# Push to registry
docker push your-registry/menntec:latest

# On VPS:
docker pull your-registry/menntec:latest
docker-compose -f docker-compose.prod.yml up -d
```

## Key Features

✅ **Content Management**: Payload CMS for flexible content editing  
✅ **Image Optimization**: Automatic image processing and responsive variants  
✅ **Webhooks**: Auto-trigger frontend revalidation on content changes  
✅ **Multi-User Admin**: Role-based access control (Admin, Editor, Viewer)  
✅ **Responsive Design**: Tailwind CSS with mobile-first design  
✅ **SEO Optimized**: Next.js meta tags, sitemap, robots.txt  
✅ **Form Handling**: Contact form with EmailJS integration  

## API Documentation

Payload CMS auto-generates REST API at:
- Homepage: `GET /api/homepages`
- Products: `GET /api/services`
- Contacts: `GET /api/contacts`
- Job Ads: `GET /api/job-ads`
- Pages: `GET /api/pages/:slug`

Full API docs available at: http://localhost:3000/api

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port
lsof -i :3000  # CMS
lsof -i :3001  # Frontend
lsof -i :5432  # Database

kill -9 <PID>
```

### Database Connection Error
```bash
# Check PostgreSQL is running
docker-compose logs postgres

# Restart database
docker-compose restart postgres
```

### Clear Docker Resources
```bash
docker-compose down -v  # Remove containers & volumes
docker-compose up       # Fresh start
```

## Contributing

1. Create feature branch from `dev`: `git checkout -b feature/your-feature`
2. Make changes in `frontend/` or `cms/` directories
3. Test locally with `docker-compose up`
4. Commit and push to remote
5. Create pull request to `dev` branch

## License

Proprietary - MennTEC

## Support

For questions or issues, contact the development team.
