import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nelson Avellaneda | Full-Stack Analyst and Developer',
  description:
    'Portafolio profesional de Nelson Avellaneda. Analista y desarrollador full-stack especializado en React, Next.js y Node.js. Construyendo experiencias digitales excepcionales.',
  keywords: ['analista', 'full-stack', 'react', 'next.js', 'portfolio', 'web developer'],
  authors: [{ name: 'Nelson Avellaneda' }],
  icons: {
    icon: [
      {
        url: '/My Icon.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/My Icon.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/My Icon.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/My Icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1a1a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
