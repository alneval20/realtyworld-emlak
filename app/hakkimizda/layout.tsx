import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description: 'Realty World Söke kurumsal bilgileri, vizyonumuz, misyonumuz ve Söke emlak pazarındaki uzmanlığımız.',
  openGraph: {
    title: 'Kurumsal | Realty World Söke',
    description: 'Söke\'nin güvenilir emlak ofisi Realty World hakkında daha fazla bilgi edinin.',
  },
};

export default function HakkimizdaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
