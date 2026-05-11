'use client'

import { useState, useRef, useEffect } from 'react'
import { Accordion, AccordionItem } from './Accordion'

interface JobSpec {
  tasks: string[]
  prerequisites: string[]
  benefits: string[]
}

interface JobAd {
  id: string
  jobTitle: string
  jobSubtitle: string
  bannerText1: string
  bannerText2: string
  specs: JobSpec
}

interface JobAdsProps {
  jobAds: JobAd[]
  contactFirstName?: string
  contactLastName?: string
  contactEmail?: string
  contactPhone?: string
  companyAddress?: string
  ctaText?: string
}

export function JobAds({
  jobAds,
  contactFirstName = '',
  contactLastName = '',
  contactEmail = '',
  contactPhone = '',
  companyAddress = '',
  ctaText = 'Dann freuen wir uns auf Ihre aussagekräftige Bewerbung per Post oder per eMail.',
}: JobAdsProps) {
  const [currentIdx, setCurrentIdx] = useState(0)
  const [ctaOpen, setCtaOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(true)
  const slideRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const goTo = (idx: number) => {
    setCurrentIdx(idx)
    if (slideRef.current) slideRef.current.style.top = `${-idx * 75}vh`
  }

  if (!jobAds || jobAds.length === 0) return null

  const job = jobAds[currentIdx]

  return (
    <section className="overflow-hidden block min-h-screen text-[0.85rem] bg-secondary md:bg-gradient-to-b md:from-accent md:to-secondary md:pt-8 md:relative md:text-[0.775rem]">
      {/* Inner wide: max-width 90rem, 98% at tablet */}
      <div className="w-full max-w-[90rem] mx-auto md:w-[98%]">
        <div className="relative" style={{ minHeight: '100vh' }}>

          {/* Slider main: absolute, full width mobile / 80% tablet, centered */}
          <div className="absolute w-full left-1/2 -translate-x-1/2 md:w-[80%]">

            {/* Slider box */}
            <div className="relative h-[70vh] w-full bg-white overflow-hidden md:shadow-default">

              {/* Banner up: 10.5rem mobile → 17rem tablet, skewY(-5deg) */}
              <div
                className="absolute z-[99] right-0 bg-accent text-primary font-semibold skew-y-[-5deg]
                  top-[3.25rem] w-[10.5rem] px-4 py-2 text-[0.6rem]
                  md:top-[4.25rem] md:w-[17rem] md:text-[0.825rem] md:py-3
                  lg:top-[5rem]"
                style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}
              >
                {job.bannerText1}
              </div>

              {/* Banner down: 10.25rem mobile → 16.75rem tablet, darker */}
              <div
                className="absolute z-[90] right-0 text-primary font-semibold skew-y-[-5deg]
                  top-[5rem] w-[10.25rem] px-4 py-2 text-[0.6rem]
                  md:top-[6.75rem] md:w-[16.75rem] md:text-[0.825rem] md:py-3
                  lg:top-[7.5rem]"
                style={{ background: '#BA4610', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}
              >
                {job.bannerText2}
              </div>

              {/* Slides — vertical scroll via top offset */}
              <div
                ref={slideRef}
                className="absolute top-0 left-0 w-full"
                style={{ transition: 'top 0.4s ease' }}
              >
                {jobAds.map((ad) => (
                  <div
                    key={ad.id}
                    className="h-[75vh] px-4 py-[0.8rem] md:p-5"
                  >
                    {/* Title: 1.65rem mobile, 2.45rem tablet, 2.9rem desktop */}
                    <h2 className="font-bold text-text mb-1 text-[1.65rem] md:text-[2.45rem] desktop:text-[2.9rem] pr-[11rem] md:pr-[18rem] desktop:pr-0">
                      {ad.jobTitle}
                    </h2>
                    {/* Subtitle: h4, size = section (0.85rem/0.775rem), bold = browser UA default */}
                    <h4 className="font-bold text-text pb-[0.35rem] pr-[11rem] md:pr-[18rem] desktop:pr-0" style={{ fontSize: 'inherit' }}>
                      {ad.jobSubtitle}
                    </h4>

                    <div className="mt-2">
                      {isMobile ? (
                        <Accordion>
                          <AccordionItem title="Aufgabengebiet" defaultOpen>
                            <ul className="list-disc pl-4">
                              {ad.specs.tasks.map((t, i) => <li key={i}>{t}</li>)}
                            </ul>
                          </AccordionItem>
                          <AccordionItem title="Was Sie mitbringen sollten">
                            <ul className="list-disc pl-4">
                              {ad.specs.prerequisites.map((p, i) => <li key={i}>{p}</li>)}
                            </ul>
                          </AccordionItem>
                          <AccordionItem title="Was Sie von uns erwarten dürfen">
                            <ul className="list-disc pl-4">
                              {ad.specs.benefits.map((b, i) => <li key={i}>{b}</li>)}
                            </ul>
                          </AccordionItem>
                        </Accordion>
                      ) : (
                        <div>
                          {[
                            { title: 'Aufgabengebiet', items: ad.specs.tasks },
                            { title: 'Was Sie mitbringen sollten', items: ad.specs.prerequisites },
                            { title: 'Was Sie von uns erwarten dürfen', items: ad.specs.benefits },
                          ].map(({ title, items }) => (
                            <div key={title} className="pb-2">
                              {/* jobAd__content__title: 1.6rem tablet, 2.1rem desktop */}
                              <h3
                                className="font-bold text-text jobad-content-title"
                              >
                                {title}
                              </h3>
                              <ul className="list-disc pl-5 text-text-gray">
                                {items.map((item, i) => <li key={i}>{item}</li>)}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA — hidden below box, slides to bottom:0 on click
                  Total height ≈ 0.75 + button + 9rem content + 0.75 ≈ 11.5rem
                  bottom: -10.5rem hides content, shows only button bar */}
              <div
                className={`absolute bottom-0 left-0 w-full bg-accent text-primary z-[2000] jobad-cta${ctaOpen ? ' jobad-cta--open' : ''}`}
              >
                <div
                  className="text-center w-full cursor-pointer"
                  onClick={() => setCtaOpen(!ctaOpen)}
                >
                  Wir haben Ihr Interesse geweckt?
                </div>
                <div className="jobad-cta-content">
                  <p style={{ margin: '.5rem 0' }}>{ctaText}</p>
                  <p style={{ margin: '.5rem 0 0' }}>
                    Ansprechpartner:<br />
                    {contactFirstName} {contactLastName} |{' '}
                    <a href={`mailto:${contactEmail}`} className="underline text-primary">
                      {contactEmail}
                    </a>
                    <br />
                    Tel.: {contactPhone}<br />
                    {companyAddress && <>Postanschrift:<br />{companyAddress}</>}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation buttons: 22rem wide, 2-col grid, accent bg */}
            <div
              className="absolute left-1/2 -translate-x-1/2 grid grid-cols-2 p-4 w-[22rem] md:w-[45rem]"
              style={{ minHeight: 'calc(2rem + 2em)' }}
            >
              {currentIdx > 0 && (
                <button
                  onClick={() => goTo(currentIdx - 1)}
                  className="col-start-1 border-0 p-0 leading-[2em] font-bold lowercase text-[1rem] md:text-[1.325rem] cursor-pointer text-primary w-full"
                  style={{ background: 'rgba(233,88,20,0.8)' }}
                >
                  vorherige anzeige
                </button>
              )}
              {currentIdx < jobAds.length - 1 && (
                <button
                  onClick={() => goTo(currentIdx + 1)}
                  className="col-start-2 border-0 p-0 leading-[2em] font-bold lowercase text-[1rem] md:text-[1.325rem] cursor-pointer text-primary w-full"
                  style={{ background: 'rgba(233,88,20,0.8)' }}
                >
                  nächste anzeige
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
