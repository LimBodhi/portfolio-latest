import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Portofolio Lim Bodhi Wijaya',
  keywords: ['portfolio', 'teaching assistant', 'education', 'AI', 'UI', 'sistem informasi', 'GEMASTIK', 'TASLA'],
  authors: [{ name: 'Lim Bodhi Wijaya' }],
  creator: 'Lim Bodhi Wijaya',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://limbodhi.vercel.app',
    title: 'Lim Bodhi Wijaya - Portofolio',
    description: 'Portfolio - Lim Bodhi Wijaya',
    siteName: 'Lim Bodhi Wijaya Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lim Bodhi Wijaya - Portofolio',
    description: 'Portfolio - Lim Bodhi Wijaya',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  )
} 