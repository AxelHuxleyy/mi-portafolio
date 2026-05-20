import './globals.css'
import { LanguageProvider } from '../lib/LanguageContext'

export const metadata = {
  title: 'Axel Huxley Ramírez — UI Team Leader & Software Engineer',
  description:
    'UI Team Leader & Software Engineer especializado en React, Next.js y React Native. Experiencia liderando equipos de 8+ developers en Accenture para clientes Fortune 500.',
  keywords: [
    'Axel Huxley',
    'Frontend Developer',
    'UI Team Leader',
    'React',
    'Next.js',
    'React Native',
    'Software Engineer',
    'Querétaro',
  ],
  authors: [{ name: 'Axel Huxley Ramírez Sánchez' }],
  openGraph: {
    title: 'Axel Huxley Ramírez — UI Team Leader & Software Engineer',
    description:
      'Especializado en React, Next.js y React Native. Liderando equipos para clientes Fortune 500.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {/* Aurora background blobs */}
        <div className="aurora" aria-hidden="true">
          <div className="aurora-blob aurora-blob-1" />
          <div className="aurora-blob aurora-blob-2" />
          <div className="aurora-blob aurora-blob-3" />
        </div>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
