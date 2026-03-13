import './globals.css';
import type { Metadata } from 'next';

const siteUrl = 'https://thermablueir.com';
const siteTitle = 'ThermaBlue IR — Engineered for control.';
const siteDescription = 'ThermaBlue IR is a manufacturing and infrastructure platform built around engineering logic, disciplined construction, and durable climate systems. Heating & Air is the catalyst product.';
const previewImage = '/images/social-preview-corporate.png';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  applicationName: 'ThermaBlue IR',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: 'ThermaBlue IR',
    images: [
      {
        url: previewImage,
        width: 2048,
        height: 1365,
        alt: 'ThermaBlue IR corporate logo and thermal wave background',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [previewImage],
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png', sizes: '256x256' },
      { url: '/favicon-64.png', type: 'image/png', sizes: '64x64' },
    ],
    shortcut: ['/favicon.png'],
    apple: [{ url: '/favicon.png', sizes: '256x256', type: 'image/png' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
