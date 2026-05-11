'use client'

interface CTAProps {
  text?: string
}

export function CTA({
  text = 'Sie suchen nach einem starken Partner für Ihr Projekt? Kontaktieren Sie uns gerne über unser Kontaktformular.',
}: CTAProps) {
  return (
    <section className="min-h-[70vh] bg-tertiary flex flex-col items-center justify-center px-10 py-4">
      <h2 className="text-[2rem] md:text-[2.5rem] lg:text-[3.125rem] font-bold text-footer-light text-center my-8">
        {text}
      </h2>
      <a
        href="#contact-form"
        className="text-text-gray hover:text-accent transition-colors cursor-pointer"
        aria-label="Scroll to contact"
      >
        <svg
          className="w-[2.6rem] h-[2.6rem] animate-bounce"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </section>
  )
}
