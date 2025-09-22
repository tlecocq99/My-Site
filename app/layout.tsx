import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Thomas Lecocq - Junior Web Developer | React & Next.js Specialist',
  description: 'Recent bootcamp graduate specializing in React, Next.js, TypeScript, and modern web development. Available for immediate hire in Lafayette, LA.',
  keywords: 'junior developer, react, nextjs, typescript, javascript, lafayette louisiana, web developer, bootcamp graduate, institute of data',
  authors: [{ name: 'Thomas Lecocq' }],
  openGraph: {
    title: 'Thomas Lecocq - Junior Web Developer',
    description: 'Recent bootcamp graduate specializing in React, Next.js, and modern web development. Available in Lafayette, LA.',
    url: 'https://thomaslecocq.dev',
    siteName: 'Thomas Lecocq Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thomas Lecocq - Junior Web Developer',
    description: 'Recent bootcamp graduate specializing in React, Next.js, and modern web development',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}