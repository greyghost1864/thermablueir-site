import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ThermaBlue IR',
  description:
    'ThermaBlue IR is a manufacturing and infrastructure platform built around engineering logic, disciplined construction, and durable systems.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
