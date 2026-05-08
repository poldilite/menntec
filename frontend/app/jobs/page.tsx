import { Hero, Section, Card, Grid } from '../components';
import { fetchJobAds } from '@/lib/cms';

export const revalidate = 60;

async function getJobAds() {
  try {
    const result = await fetchJobAds();
    return result?.docs || [];
  } catch (error) {
    console.error('Error fetching job ads:', error);
    return [];
  }
}

export default async function JobsPage() {
  const jobs = await getJobAds();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <Hero
        title="Karriere bei MennTEC"
        subtitle="Werden Sie Teil unseres innovativen Teams"
      />

      {/* Jobs List */}
      <Section
        title="Offene Positionen"
        backgroundColor="light"
      >
        {jobs.length > 0 ? (
          <div className="space-y-6">
            {jobs.map((job: any) => (
              <div
                key={job.id}
                className="bg-white p-8 rounded-lg shadow-default hover:shadow-lg transition-shadow"
              >
                <div className="mb-6">
                  <h3 className="text-h3 mb-2">{job.jobTitle}</h3>
                  {job.jobTitleSubtext && (
                    <p className="text-body text-gray-600">{job.jobTitleSubtext}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 tablet-portrait-up:grid-cols-3 gap-8 mb-8">
                  {/* Tasks */}
                  {job.jobTasks && job.jobTasks.length > 0 && (
                    <div>
                      <h4 className="text-h5 font-semibold mb-4">Aufgaben</h4>
                      <ul className="space-y-2">
                        {job.jobTasks.map((task: any, idx: number) => (
                          <li key={idx} className="flex items-start gap-3 text-body text-gray-700">
                            <span className="text-accent font-bold flex-shrink-0">•</span>
                            <span>{task.task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Benefits */}
                  {job.jobBenefits && job.jobBenefits.length > 0 && (
                    <div>
                      <h4 className="text-h5 font-semibold mb-4">Vorteile</h4>
                      <ul className="space-y-2">
                        {job.jobBenefits.map((benefit: any, idx: number) => (
                          <li key={idx} className="flex items-start gap-3 text-body text-gray-700">
                            <span className="text-accent font-bold flex-shrink-0">✓</span>
                            <span>{benefit.benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Requirements */}
                  {job.jobPrerequisites && job.jobPrerequisites.length > 0 && (
                    <div>
                      <h4 className="text-h5 font-semibold mb-4">Anforderungen</h4>
                      <ul className="space-y-2">
                        {job.jobPrerequisites.map((req: any, idx: number) => (
                          <li key={idx} className="flex items-start gap-3 text-body text-gray-700">
                            <span className="text-accent font-bold flex-shrink-0">→</span>
                            <span>{req.requirement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Contact Person */}
                {job.contactPerson && (
                  <div className="border-t pt-6">
                    <p className="text-body font-semibold mb-2">Kontaktperson:</p>
                    <p className="text-body text-gray-700">
                      {job.contactPerson.firstName} {job.contactPerson.lastName}
                    </p>
                    {job.contactPerson.email && (
                      <p>
                        <a
                          href={`mailto:${job.contactPerson.email}`}
                          className="text-accent hover:underline"
                        >
                          {job.contactPerson.email}
                        </a>
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-body text-gray-600">
              Zur Zeit sind keine Positionen verfügbar.
            </p>
          </div>
        )}
      </Section>
    </main>
  );
}
