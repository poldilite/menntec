import type { ServerFunctionClient } from 'payload'
import { RootLayout } from '@payloadcms/next/layouts'
import config from '@/payload.config'
import { importMap } from './importMap.js'
import React from 'react'
import '@payloadcms/next/css'

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const serverFunction: ServerFunctionClient = async function (args) {
    'use server'
    const { handleServerFunctions } = await import('@payloadcms/next/layouts')
    return handleServerFunctions({
      ...args,
      config,
      importMap,
    })
  }

  return (
    <RootLayout
      config={config}
      importMap={importMap}
      serverFunction={serverFunction}
    >
      {children}
    </RootLayout>
  )
}
