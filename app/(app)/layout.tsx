import React from 'react'
import {ClerkProvider} from "@clerk/nextjs"
import { SanityLive } from '@/sanity/lib/live'

function AppLayout({children}: Readonly<{children:React.ReactNode}>) {
  return (
    <ClerkProvider>
      <div>{children}</div>
      <SanityLive/>
    </ClerkProvider>
  )
}

export default AppLayout