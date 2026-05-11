import { JobAds } from '../components/JobAds'
import { fetchJobAds, fetchContacts, fetchCompanyInfo } from '@/lib/cms'

export const revalidate = 0

async function getJobsData() {
  try {
    const [jobsResult, contactsResult, companyInfo] = await Promise.all([
      fetchJobAds(),
      fetchContacts(),
      fetchCompanyInfo(),
    ])

    const jobs = jobsResult?.docs || []
    const contacts = contactsResult?.docs || []
    const primaryContact = contacts[0] || null

    return {
      jobs,
      contactFirstName: primaryContact?.firstName || '',
      contactLastName: primaryContact?.lastName || '',
      contactEmail: primaryContact?.email || '',
      contactPhone: primaryContact?.phone || '',
      companyAddress: companyInfo
        ? `${companyInfo.street}, ${companyInfo.zip} ${companyInfo.city}`
        : '',
    }
  } catch (error) {
    console.error('Error fetching jobs data:', error)
    return {
      jobs: [],
      contactFirstName: '',
      contactLastName: '',
      contactEmail: '',
      contactPhone: '',
      companyAddress: 'Am Grünen Weg 23, 52385 Nideggen',
    }
  }
}

export default async function JobsPage() {
  const { jobs, contactFirstName, contactLastName, contactEmail, contactPhone, companyAddress } = await getJobsData()

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

  return (
    <main>
      {formattedJobs.length > 0 ? (
        <JobAds
          jobAds={formattedJobs}
          contactFirstName={contactFirstName}
          contactLastName={contactLastName}
          contactEmail={contactEmail}
          contactPhone={contactPhone}
          companyAddress={companyAddress}
        />
      ) : (
        <section className="min-h-screen flex items-center justify-center bg-secondary">
          <div className="text-center">
            <p className="text-lg text-text-gray">Zur Zeit sind keine Positionen verfügbar.</p>
          </div>
        </section>
      )}
    </main>
  )
}
