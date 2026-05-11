'use client'

import Image from 'next/image'
import { MdEmail } from 'react-icons/md'
import { FaXing, FaLinkedinIn } from 'react-icons/fa'

interface Contact {
  id: string
  firstName: string
  lastName: string
  title: string
  email: string
  xing?: string
  linkedin?: string
  image?: {
    url: string
  }
}

interface AboutProps {
  contacts: Contact[]
}

export function About({ contacts }: AboutProps) {
  return (
    <section className="bg-primary">
      <div className="w-full max-w-[78rem] mx-auto">
        <div className="block px-6 py-12 desktop:px-0">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className="relative h-[26rem] flex items-center justify-center md:h-[28rem] mb-16 last:mb-0"
            >
              {/* Image — always left */}
              {contact.image && (
                <div className="absolute w-full h-[70%] left-0 md:h-full lg:w-[60%] lg:left-[4rem]">
                  <Image
                    src={contact.image.url}
                    alt={`${contact.firstName} ${contact.lastName}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 60vw"
                  />
                </div>
              )}

              {/* Description card — always right */}
              <div className="absolute z-10 bg-accent text-primary p-4 w-full bottom-0 md:bottom-[-2rem] lg:bottom-auto lg:right-[4rem] lg:h-[70%] lg:w-[33%] lg:p-6 lg:shadow-default xl:h-[85%] flex flex-col">
                <div className="text-[1.8rem] md:text-[2.4rem] font-bold mb-1">
                  {contact.firstName} {contact.lastName}
                </div>
                <div className="text-[0.75rem] md:text-[0.9rem] mb-5">
                  {contact.title}
                </div>
                <div className="flex gap-2">
                  <a
                    href={`mailto:${contact.email}`}
                    className="bg-primary text-accent w-10 h-10 flex items-center justify-center hover:bg-opacity-90 transition-all"
                    aria-label={`Email ${contact.firstName}`}
                  >
                    <MdEmail size={22} />
                  </a>
                  {contact.xing && (
                    <a
                      href={contact.xing}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-accent w-10 h-10 flex items-center justify-center hover:bg-opacity-90 transition-all"
                      aria-label={`Xing ${contact.firstName}`}
                    >
                      <FaXing size={20} />
                    </a>
                  )}
                  {contact.linkedin && (
                    <a
                      href={contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-accent w-10 h-10 flex items-center justify-center hover:bg-opacity-90 transition-all"
                      aria-label={`LinkedIn ${contact.firstName}`}
                    >
                      <FaLinkedinIn size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
