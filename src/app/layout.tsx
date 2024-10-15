import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';

import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import { Providers } from '@/lib/providers';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const title = 'Navneet Singh Arora | Machine Learning Engineer';
const description =
  'An AI/ML Expert and a Full Stack Engineer';

const url = 'https://navneetsingharora.com';

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  keywords: [
    'Engineer',
    'AI/ML Expert',
    'AI/ML Engineer',
    'Software Engineer',
    'Machine Learning',
    'Full Stack Developer',
    'Navneet Singh Arora',
    'Database',
    'Web Development',
    'Tableau',
    'Python',
    'JavaScript',
    'Pytorch',
    'Tensorflow',
    'Git',
    'Docker',
    'Redis',
    'PostgreSQL',
  ],
  creator: 'Navneet Singh Arora',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],

  // TODO: Change the below images
  openGraph: {
    type: 'website',
    url,
    title,
    description,
    siteName: title,
    images: [
      {
        url: '/images/open-graph-sagar.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    creator: '@shahsagarm',
    images: '/images/open-graph-sagar.png',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

const googleAnalyticsId = process.env.GOOGLE_ANALYTICS_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      {googleAnalyticsId ? (
        <head>
          <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          ></Script>
          <Script id="google-anayltics-script">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', '${googleAnalyticsId}');
          `}
          </Script>
        </head>
      ) : null}
      <body className={`${inter.className} bg-gray text-gray-600 antialiased`}>
        <Providers>
          <Header />
          <main className="flex min-h-screen w-full flex-col">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
