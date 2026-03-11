import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Satılık ve Kiralık İlanlar',
  description: 'Söke\'de satılık daireler, kiralık evler, arsalar ve villalar. Realty World Söke güncel ilan listesi.',
  openGraph: {
    title: 'Söke Emlak İlanları | Realty World Söke',
    description: 'En güncel Söke emlak ilanlarını keşfedin. Satılık ve kiralık seçenekler.',
  },
};

export default function IlanlarLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
