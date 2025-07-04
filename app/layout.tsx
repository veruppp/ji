
import './styles/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'v-cloud uploader',
  description: 'Simple video/image/audio hosting with embed',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
