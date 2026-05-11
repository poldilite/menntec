'use server'

import { submitContactForm } from '@/lib/cms'

export async function submitContact(data: {
  firstName: string
  lastName: string
  email: string
  phone?: string
  message: string
}) {
  try {
    await submitContactForm(data)
    return { success: true }
  } catch (error) {
    console.error('Contact form submission failed:', error)
    return { success: false, error: 'Nachricht konnte nicht gesendet werden.' }
  }
}
