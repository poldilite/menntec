import { Hero } from './components/Hero'
import { Quote } from './components/Quote'
import { JobAds } from './components/JobAds'
import { Products } from './components/Products'
import { About } from './components/About'
import { CTA } from './components/CTA'
import { Contact } from './components/Contact'
import { CmsNotice } from './components/CmsNotice'
import { fetchHomepage, fetchJobAds, fetchContacts, fetchCompanyInfo } from '@/lib/cms'

export const revalidate = 0

const CMS_INTERNAL_URL = process.env.CMS_INTERNAL_URL || process.env.NEXT_PUBLIC_CMS_URL || 'http://localhost:3002'

function rewriteImageUrl(url: string): string {
  // Replace whatever origin Payload reported with the Docker-internal URL
  return url.replace(/^https?:\/\/[^/]+/, CMS_INTERNAL_URL)
}

async function getHomepageData() {
  try {
    const [homepage, jobsResult, contactsResult, companyInfo] = await Promise.all([
      fetchHomepage(),
      fetchJobAds(),
      fetchContacts(),
      fetchCompanyInfo(),
    ])

    const jobs = jobsResult?.docs || []
    const contacts = contactsResult?.docs || []
    const primaryContact = contacts[0] || null

    const formattedJobs = jobs.map((job: any) => ({
      id: job.id,
      jobTitle: job.jobTitle,
      jobSubtitle: job.jobTitleSubtext || '',
      bannerText1: job.bannerText1 || '',
      bannerText2: job.bannerText2 || '',
      specs: {
        tasks: job.jobTasks?.map((t: any) => t.text) || [],
        prerequisites: job.jobPrerequisites?.map((p: any) => p.text) || [],
        benefits: job.jobBenefits?.map((b: any) => b.text) || [],
      },
    }))

    const formattedContacts = contacts.map((c: any) => ({
      id: String(c.id),
      firstName: c.firstName,
      lastName: c.lastName,
      title: c.title || '',
      email: c.email,
      xing: c.xing || undefined,
      linkedin: c.linkedin || undefined,
      image: c.image?.url ? { url: rewriteImageUrl(c.image.url) } : undefined,
    }))

    const hasContent = !!(homepage.heroText || jobs.length > 0 || contacts.length > 0)
    const companyAddress = companyInfo
      ? `${companyInfo.street}, ${companyInfo.zip} ${companyInfo.city}`
      : ''

    return {
      cmsAvailable: hasContent,
      heroText: homepage.heroText,
      quoteText: homepage.quoteText,
      ctaText: homepage.ctaText,
      jobs: formattedJobs,
      contacts: formattedContacts,
      contactFirstName: primaryContact?.firstName || '',
      contactLastName: primaryContact?.lastName || '',
      contactEmail: primaryContact?.email || '',
      contactPhone: primaryContact?.phone || '',
      companyAddress,
    }
  } catch {
    return {
      cmsAvailable: false,
      heroText: 'Willkommen bei MennTEC',
      quoteText: 'Qualität ist unser Anspruch.',
      ctaText: 'Sie suchen nach einem starken Partner für Ihr Projekt? Kontaktieren Sie uns gerne über unser Kontaktformular.',
      jobs: [],
      contacts: [],
      contactFirstName: '',
      contactLastName: '',
      contactEmail: '',
      contactPhone: '',
      companyAddress: 'Am Grünen Weg 23, 52385 Nideggen',
    }
  }
}

export default async function Home() {
  const { cmsAvailable, heroText, quoteText, ctaText, jobs, contacts, contactFirstName, contactLastName, contactEmail, contactPhone, companyAddress } = await getHomepageData()

  return (
    <main>
      {!cmsAvailable && <CmsNotice />}
      <Hero text={heroText} />
      <Quote text={quoteText} />
      {jobs.length > 0 && (
        <JobAds
          jobAds={jobs}
          contactFirstName={contactFirstName}
          contactLastName={contactLastName}
          contactEmail={contactEmail}
          contactPhone={contactPhone}
          companyAddress={companyAddress}
        />
      )}
      <Products />
      {contacts.length > 0 && <About contacts={contacts} />}
      <CTA text={ctaText} />
      <Contact />
    </main>
  )
}
