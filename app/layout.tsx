import type { Metadata } from 'next';
import { Fraunces, Geist } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  display: 'swap',
  axes: ['SOFT', 'WONK', 'opsz'],
});

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
  display: 'swap',
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://cairn.vercel.app';
const TITLE = 'Cairn — A retirement plan you can read';
const DESC = 'A retirement planning tool that explains itself. Built for the gap between bank dashboards and FIRE spreadsheets.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: '%s · Cairn' },
  description: DESC,
  applicationName: 'Cairn',
  keywords: ['retirement planning', 'financial planning', 'CFP directory', 'retirement calculator'],
  openGraph: {
    type: 'website',
    siteName: 'Cairn',
    title: TITLE,
    description: DESC,
    url: SITE_URL,
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${geist.variable} h-full antialiased`}>
      <body className="bg-[#0d0c0a] text-stone-100 min-h-full">{children}</body>
    </html>
  );
}
