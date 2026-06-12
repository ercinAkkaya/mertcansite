import Link from 'next/link';
import { buildPageMetadata } from '@/lib/seoMetadata';
import { getServiceContent } from '@/lib/seoContent';
import { allRegions, regionLabels, services } from '@/lib/seoData';
import styles from './hub.module.css';

export const metadata = buildPageMetadata({
    title: 'Hizmetlerimiz | Doğalgaz & Kombi Servisi',
    description:
        'Doğalgaz tesisatı, tamiri, kaçak tespiti, kombi montajı, bakımı, tamiri ve petek temizliği. İstanbul, Kocaeli, Sakarya ve Ankara genelinde 7/24 servis.',
    path: '/hizmetlerimiz',
    keywords: [
        'doğalgaz hizmetleri',
        'kombi servisi',
        'petek temizliği',
        'doğalgaz kaçak tespiti',
        'kombi montajı',
    ],
});

export default function HizmetlerimizPage() {
    return (
        <div className={styles.pageContainer}>
            <section className={styles.pageHeader}>
                <div className="container">
                    <h1 className={styles.pageTitle}>Hizmetlerimiz</h1>
                    <p className={styles.pageSubtitle}>
                        İstanbul, Kocaeli, Sakarya ve Ankara genelinde 7/24 profesyonel doğalgaz ve kombi
                        hizmetleri. MYK belgeli ekip, garantili işçilik.
                    </p>
                </div>
            </section>

            <section className="container">
                <div className={styles.grid}>
                    {services.map((srv) => {
                        const content = getServiceContent(srv.id);
                        return (
                            <article key={srv.id} className={styles.card}>
                                <h2>
                                    <Link href={srv.path}>{srv.name}</Link>
                                </h2>
                                <p>{content.intro}</p>
                                <ul>
                                    {content.benefits.slice(0, 3).map((b) => (
                                        <li key={b}>{b}</li>
                                    ))}
                                </ul>
                                <Link href={srv.path} className={styles.cardLink}>
                                    Detaylı bilgi →
                                </Link>
                            </article>
                        );
                    })}
                </div>

                <div className={styles.regionsBlock}>
                    <h2>Bölge Bazlı Hizmet Sayfaları</h2>
                    <p>İlçenize özel sayfalar için aşağıdan bölgenizi seçin:</p>
                    <div className={styles.regionLinks}>
                        {allRegions.map((region) => (
                            <Link key={region} href="/hizmet-bolgeleri">
                                {regionLabels[region]}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
