import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import StickyContact from '@/components/StickyContact/StickyContact';
import JsonLd from '@/components/Seo/JsonLd';
import { buildPageMetadata } from '@/lib/seoMetadata';
import { localBusinessSchema, websiteSchema } from '@/lib/structuredData';

export const metadata: Metadata = {
    ...buildPageMetadata({
        title: 'İstanbul, Kocaeli, Sakarya & Ankara Doğalgaz | Kombi Servisi 7/24',
        description:
            'Gebze, Pendik, Adapazarı, Çankaya ve 50+ ilçede doğalgaz tamiri, kombi servisi, kaçak tespiti. MYK belgeli ekip, aynı gün servis, 1 yıl garanti.',
        path: '/',
        keywords: [
            'doğalgaz tamiri istanbul',
            'kombi servisi kocaeli',
            'sakarya doğalgaz tamiri',
            'ankara kombi servisi',
            'gebze doğalgaz tamiri',
            'adapazarı kombi servisi',
            'çankaya doğalgaz tamiri',
            '7/24 acil servis',
        ],
    }),
    metadataBase: new URL('https://www.smmhendislik.com'),
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="tr">
            <body>
                <JsonLd data={[localBusinessSchema(), websiteSchema()]} />
                <Header />
                <main>{children}</main>
                <Footer />
                <StickyContact />
            </body>
        </html>
    );
}
