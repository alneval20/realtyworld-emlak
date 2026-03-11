import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: {
    default: 'Realty World Söke Emlak | Aydın Söke Satılık & Kiralık Gayrimenkul',
    template: '%s | Realty World Söke'
  },
  description: 'Aydın Söke\'de satılık ve kiralık daireler, arsalar, villalar ve ticari gayrimenkuller. Realty World Söke uzmanlığı ile en doğru yatırım fırsatlarını keşfedin.',
  keywords: ['Söke emlak', 'Söke satılık daire', 'Söke kiralık ev', 'Aydın Söke emlakçı', 'Realty World Söke', 'Söke arsa', 'Söke villa'],
  authors: [{ name: 'Realty World Söke' }],
  creator: 'Realty World Söke',
  publisher: 'Realty World Söke',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://ais-pre-sozqddnvsr6i6qgyg3a5go-495551996573.europe-west2.run.app',
    siteName: 'Realty World Söke',
    title: 'Realty World Söke Emlak | Aydın Söke Gayrimenkul Danışmanlığı',
    description: 'Söke\'nin en geniş portföyüne sahip emlak ofisi. Satılık ve kiralık ilanlarımızı inceleyin.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Realty World Söke Emlak',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Realty World Söke Emlak',
    description: 'Söke\'de gayrimenkulün güvenilir adresi.',
    images: ['https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200&h=630'],
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
  alternates: {
    canonical: 'https://ais-pre-sozqddnvsr6i6qgyg3a5go-495551996573.europe-west2.run.app',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${inter.variable} ${montserrat.variable}`}>
      <body suppressHydrationWarning className="font-sans bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
