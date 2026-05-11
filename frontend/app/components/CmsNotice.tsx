interface CmsNoticeProps {
  email?: string
}

const FALLBACK_EMAIL = 'info@menntec.de'

export function CmsNotice({ email = FALLBACK_EMAIL }: CmsNoticeProps) {
  const displayEmail = email || FALLBACK_EMAIL

  return (
    <div className="w-full bg-secondary border-b border-tertiary">
      <div className="inner px-6 py-5 text-center">
        <p className="text-text-gray text-sm font-semibold tracking-wide">
          Die Seiteninhalte werden gerade aktualisiert.
        </p>
        <p className="text-text-gray text-sm mt-1">
          Für Anfragen erreichen Sie uns direkt unter{' '}
          <a
            href={`mailto:${displayEmail}`}
            className="text-accent font-bold hover:underline transition-colors duration-200"
          >
            {displayEmail}
          </a>
        </p>
      </div>
    </div>
  )
}
