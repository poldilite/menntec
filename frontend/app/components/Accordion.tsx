'use client'

import { ReactNode, useState } from 'react'

interface AccordionItemProps {
  title: string
  children: ReactNode
  defaultOpen?: boolean
}

interface AccordionProps {
  children: ReactNode
}

export function AccordionItem({ title, children, defaultOpen = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div style={{ marginTop: '.2rem' }}>
      {/* Header — matches .acc-header */}
      <div
        className={`acc-header bg-secondary flex flex-row items-center cursor-pointer${isOpen ? ' acc-header--open' : ''}`}
        style={{ minHeight: '1.5rem', padding: '.35rem .9rem' }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div style={{ fontWeight: 600, fontSize: '.85rem', overflowWrap: 'break-word', overflow: 'auto', width: '100%' }}>
          {title}
        </div>
        {/* Chevron arrow — rotates 180° when open, matches ion-ios-arrow-down */}
        <span
          className={`transform transition-transform duration-200 flex-shrink-0${isOpen ? ' rotate-180' : ''}`}
        >
          <svg width="12" height="7" viewBox="0 0 12 7" fill="none" aria-hidden="true">
            <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>

      {/* Body — matches .acc-body */}
      {isOpen && (
        <div
          className="bg-secondary"
          style={{ minHeight: '1.5rem', padding: '0.45rem 1.75rem', display: 'flex', alignItems: 'center', fontSize: '.65rem', letterSpacing: '.03rem' }}
        >
          {children}
        </div>
      )}
    </div>
  )
}

export function Accordion({ children }: AccordionProps) {
  return <div>{children}</div>
}
