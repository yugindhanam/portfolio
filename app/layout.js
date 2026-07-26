import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'Yugin Santhosh K — Portfolio',
  description: 'IT Engineering Student & Full Stack Developer Portfolio — React, Next.js, Node.js, Python',
  keywords: ['portfolio', 'developer', 'full stack', 'react', 'next.js', 'Yugin Santhosh'],
  authors: [{ name: 'Yugin Santhosh K' }],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
