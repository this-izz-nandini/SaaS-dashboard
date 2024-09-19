import { ClerkProvider } from '@clerk/nextjs'
import '../app/globals.css'
import PageHeader from '@/components/page-header'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
        <PageHeader />
        {children}
        </body>
      </html>
    </ClerkProvider>
  )
}