import { ClerkProvider } from '@clerk/nextjs'
import '../app/globals.css'
import PageHeader from '@/components/page-header'
import Script from 'next/script'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <Script src='https://saas-rouge.vercel.app/'></Script> 
        </head>
        <body>
        <PageHeader />
        {children}
        </body>
      </html>
    </ClerkProvider>
  )
}