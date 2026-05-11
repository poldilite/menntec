'use client'

interface HeroProps {
  text: string
}

export function Hero({ text }: HeroProps) {
  const splitPosition = text.split(' ', 4).join(' ').length
  const coloredText = text.slice(0, splitPosition)
  const normalText = text.slice(splitPosition)

  return (
    <section className="min-h-screen flex items-center justify-center w-full px-10 py-6">
      <div className="w-full max-w-[78rem] mx-auto">
        <h1 className="text-[2.25rem] md:text-[4rem] text-center font-bold leading-tight">
          <span className="text-accent">{coloredText}</span>
          <span className="text-text">{normalText}</span>
        </h1>
      </div>
    </section>
  )
}
