import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import StickyContact from '@/components/StickyContact/StickyContact';

export const metadata: Metadata = {
  title: 'Çayırova Doğalgaz Tamiri | SM Mühendislik Kocaeli',
  description: 'Çayırova doğalgaz tamiri, kombi servisi ve tesisat hizmetleri. Aynı gün servis, garantili işçilik. SM Mühendislik Kocaeli.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyContact />
      </body>
    </html>
  );
}
