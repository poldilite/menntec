'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { submitContact } from '@/app/actions/contact'

interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
}

const inputClass =
  'font-[inherit] text-[1.2rem] md:text-[1.625rem] border-0 outline-0 w-full rounded-[3px] transition-all duration-300 text-primary bg-footer-dark mb-[2.1875rem] p-5 placeholder:text-center placeholder:font-black placeholder:text-primary focus:outline-none overflow-hidden'

const errorClass =
  'absolute text-[0.7rem] mt-[-1.65rem] left-1/2 -translate-x-1/2 text-red-400 whitespace-nowrap'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm<ContactFormData>({ mode: 'onTouched' })

  const onSubmit = async (data: ContactFormData) => {
    setSubmitError(null)
    const result = await submitContact(data)
    if (result.success) {
      setSubmitted(true)
      reset()
      setTimeout(() => setSubmitted(false), 5000)
    } else {
      setSubmitError(result.error || 'Nachricht konnte nicht gesendet werden.')
    }
  }

  return (
    <section id="contact-form" className="bg-footer-light text-text-light text-center font-bold">
      <div className="w-full max-w-[78rem] mx-auto px-[1.3rem] py-[3.25rem] md:py-[5rem] desktop:px-0 relative">
        <h2 className="text-[1.65rem] md:text-[3rem] font-bold mb-0">Kontaktieren Sie uns...</h2>

        <div className="text-[0.75rem] md:px-32 mt-0">
          <p className="leading-normal my-4">
            Hinterlassen Sie mir eine Nachricht und ich nehme gerne Kontakt zu Ihnen auf.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="pt-[3.9rem] md:pt-[5.375rem]">
          <div className="relative">
            <input
              type="text"
              placeholder="Vorname eingeben"
              {...register('firstName', { required: 'Bitte geben Sie Ihren Vornamen ein' })}
              className={inputClass}
            />
            {errors.firstName && (
              <p className={errorClass}>{errors.firstName.message}</p>
            )}
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Nachname eingeben"
              {...register('lastName', { required: 'Bitte geben Sie Ihren Nachnamen ein' })}
              className={inputClass}
            />
            {errors.lastName && (
              <p className={errorClass}>{errors.lastName.message}</p>
            )}
          </div>

          <div className="relative">
            <input
              type="email"
              placeholder="eMail-Adresse eingeben"
              {...register('email', {
                required: 'Bitte geben Sie eine gültige eMail-Adresse ein',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Bitte geben Sie eine gültige eMail-Adresse ein',
                },
              })}
              className={inputClass}
            />
            {errors.email && (
              <p className={errorClass}>{errors.email.message}</p>
            )}
          </div>

          <div className="relative">
            <input
              type="tel"
              placeholder="Telefonnummer eingeben"
              {...register('phone', { required: 'Bitte geben Sie eine gültige Telefonnummer ein' })}
              className={inputClass}
            />
            {errors.phone && (
              <p className={errorClass}>{errors.phone.message}</p>
            )}
          </div>

          <div className="relative">
            <textarea
              placeholder="Ihre Nachricht"
              {...register('message', { required: 'Bitte geben Sie eine Nachricht ein' })}
              className="font-[inherit] text-[1.2rem] md:text-[1.625rem] border-0 outline-0 w-full rounded-[3px] transition-all duration-300 text-primary bg-footer-dark mb-[2.1875rem] p-5 desktop:py-[1.875rem] placeholder:text-center placeholder:font-bold placeholder:leading-[6rem] placeholder:text-primary min-h-[10.5rem] resize-none overflow-auto focus:outline-none"
            />
            {errors.message && (
              <p className={errorClass}>{errors.message.message}</p>
            )}
          </div>

          {submitError && (
            <p className="text-red-400 text-[0.8rem] mb-4">{submitError}</p>
          )}

          <div>
            <button
              type="submit"
              disabled={isSubmitting || !isValid}
              className="text-[1rem] md:text-[1.325rem] block w-[30%] min-w-[18.75rem] border-0 p-0 leading-[3em] bg-tertiary text-text-gray lowercase text-center mx-auto cursor-pointer transition-all duration-200 hover:bg-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Wird gesendet...' : 'Absenden'}
            </button>
          </div>
        </form>

        {submitted && (
          <div className="max-w-[50%] p-4 absolute left-1/2 -translate-x-1/2 text-text-light font-semibold">
            Danke für Ihre Nachricht, ich komme so schnell wie möglich auf Sie zu.
          </div>
        )}
      </div>
    </section>
  )
}
