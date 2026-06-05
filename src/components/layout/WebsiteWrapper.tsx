'use client'

import { useEffect, useState } from 'react'
import AccentStripe from './AccentStripe'
import Nav from './Nav'
import Footer from './Footer'
import LoaderWrapper from '@/components/ui/LoaderWrapper'

export default function WebsiteWrapper({ children }: { children: React.ReactNode }) {
  const [isStudio, setIsStudio] = useState(false)

  useEffect(() => {
    setIsStudio(window.location.pathname.startsWith('/studio'))
  }, [])

  if (isStudio) {
    return <>{children}</>
  }

  return (
    <>
      <AccentStripe />
      <Nav />
      <LoaderWrapper>
        <main>{children}</main>
      </LoaderWrapper>
      <Footer />
    </>
  )
}
