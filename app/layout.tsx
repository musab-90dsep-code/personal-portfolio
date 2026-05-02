import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css'; // Global styles
import AnimatedBackground from '@/components/AnimatedBackground';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-theme',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://musabkhan.dev'),
  title: {
    default: 'Musab Khan | Digital Architect & Full-Stack Developer',
    template: '%s | Musab Khan'
  },
  description: 'Professional portfolio of Musab Khan, a high-performance Full-Stack Developer specializing in Next.js, Django, and Scalable Digital Architectures.',
  keywords: ['Musab Khan', 'Full Stack Developer', 'Next.js Expert', 'Web Architect', 'Software Engineer Portfolio', 'Bangladesh Developer', 'React Developer'],
  authors: [{ name: 'Musab Khan' }],
  creator: 'Musab Khan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://musabkhan.dev', // Replace with your actual domain later
    siteName: 'Musab Khan Portfolio',
    title: 'Musab Khan | Digital Architect & Full-Stack Developer',
    description: 'Engineering high-performance, pixel-perfect digital solutions with modern web technologies.',
    images: [
      {
        url: '/og-image.png', // You should put a screenshot of your site here later
        width: 1200,
        height: 630,
        alt: 'Musab Khan Portfolio Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Musab Khan | Full-Stack Developer',
    description: 'Engineering high-performance digital solutions with Next.js & modern tech.',
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
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Musab Khan",
              "url": "https://musabkhan.dev",
              "jobTitle": "Full-Stack Developer",
              "sameAs": [
                "https://www.linkedin.com/in/musabkhan-dev",
                "https://www.facebook.com/musabkhan.dev",
                "https://www.instagram.com/musabkhan.dev",
                "https://github.com/musab-90dsep-code"
              ],
              "description": "Digital Architect & Full-Stack Developer specializing in high-performance web applications."
            })
          }}
        />
      </head>
      <meta name="google-site-verification" content="VQ9uxGB3y448z4KrIUlrWNFWOB5759eHBJRbztbUb-c" />
      <body className="bg-[#0a0c10] text-gray-50 antialiased selection:bg-[#00f2ff]/30 selection:text-[#00f2ff]" suppressHydrationWarning>
        <AnimatedBackground />
        {children}
      </body>
    </html>
  );
}
