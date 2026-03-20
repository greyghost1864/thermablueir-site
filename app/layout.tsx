import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ThermaBlue IR — Engineered for control.',
  description:
    'ThermaBlue IR is a manufacturing and infrastructure platform built around engineering logic, disciplined construction, and durable climate systems.',
  metadataBase: new URL('https://thermablueir.com'),
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: ['/favicon.ico']
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'ThermaBlue IR — Engineered for control.',
    description:
      'ThermaBlue IR is a manufacturing and infrastructure platform built around engineering logic, disciplined construction, and durable climate systems.',
    url: 'https://thermablueir.com',
    siteName: 'ThermaBlue IR',
    images: ['/images/social-preview-corporate.png'],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ThermaBlue IR — Engineered for control.',
    description:
      'ThermaBlue IR is a manufacturing and infrastructure platform built around engineering logic, disciplined construction, and durable climate systems.',
    images: ['/images/social-preview-corporate.png']
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
