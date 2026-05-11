'use client'

interface QuoteProps {
  text?: string
}

export function Quote({ text = 'Qualität ist unser Anspruch.' }: QuoteProps) {
  return (
    <section className="h-screen bg-accent flex items-center justify-center w-full">
      <div className="w-full max-w-[78rem] px-8 mx-auto">
        <p className="text-center text-text-light font-bold text-[1.425rem] md:text-[2.4rem] leading-tight">
          {text}
        </p>
      </div>
    </section>
  )
}
