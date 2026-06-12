import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/Seo/JsonLd';
import { buildPageMetadata } from '@/lib/seoMetadata';
import { allRegions, getLocationsByRegion, regionLabels, services } from '@/lib/seoData';
import { breadcrumbSchema } from '@/lib/structuredData';
import { baseUrl } from '@/lib/siteConfig';
import styles from './page.module.css';

export const metadata: Metadata = buildPageMetadata({
    title: 'Hizmet Bölgeleri | İstanbul, Kocaeli, Sakarya & Ankara',
    description:
        '50+ ilçede doğalgaz tamiri, kombi servisi ve kaçak tespiti. Gebze, Pendik, Adapazarı, Çankaya, Serdivan, Keçiören ve tüm bölgelere 7/24 aynı gün mobil servis.',
    path: '/hizmet-bolgeleri',
    keywords: [
        'hizmet bölgeleri',
        'istanbul doğalgaz servisi',
        'sakarya kombi servisi',
        'ankara doğalgaz tamiri',
        'kocaeli kombi servisi',
        'adapazarı doğalgaz tamiri',
        'çankaya kombi servisi',
    ],
});

export default function HizmetBolgeleriPage() {
    return (
        <div className={styles.pageContainer}>
            <JsonLd
                data={breadcrumbSchema([
                    { name: 'Ana Sayfa', url: baseUrl },
                    { name: 'Hizmet Bölgeleri', url: `${baseUrl}/hizmet-bolgeleri` },
                ])}
            />

            <section className={styles.pageHeader}>
                <div className="container">
                    <h1 className={styles.pageTitle}>Hizmet Bölgelerimiz</h1>
                    <p className={styles.pageSubtitle}>
                        İstanbul, Kocaeli, Sakarya ve Ankara genelinde 7/24 doğalgaz, kombi ve tesisat servisi.
                        Ana hatlarımız Gebze, Pendik, Adapazarı ve Çankaya; 50+ ilçeye mobil ekip yönlendirmesi
                        yapıyoruz.
                    </p>
                </div>
            </section>

            <section className="container">
                <div className={styles.mainContent}>
                    <p className={styles.intro}>
                        Aşağıdan ilçenizi seçerek o bölgedeki hizmet sayfalarımıza ulaşabilirsiniz. Her ilçe
                        için doğalgaz tamiri, kombi servisi, kaçak tespiti ve daha fazlası için ayrı sayfalar
                        hazırladık.
                    </p>

                    {allRegions.map((region) => {
                        const locs = getLocationsByRegion(region);
                        return (
                            <div key={region} className={styles.regionBlock}>
                                <h2 className={styles.regionTitle}>{regionLabels[region]}</h2>
                                <div className={styles.locationGrid}>
                                    {locs.map((loc) => (
                                        <div key={loc.id} className={styles.locationCard}>
                                            <h3>{loc.name}</h3>
                                            <ul>
                                                {services.map((srv) => (
                                                    <li key={srv.id}>
                                                        <Link href={`/${loc.id}-${srv.id}`}>
                                                            {loc.name} {srv.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}

                    <div className={styles.ctaBox}>
                        <h2>Bölgeniz listede yok mu?</h2>
                        <p>
                            İstanbul, Kocaeli, Sakarya ve Ankara genelinde hizmet veriyoruz. Aradığınız ilçe
                            listede olmasa bile bizi arayın; en yakın ekibimizi yönlendirelim.
                        </p>
                        <a href="tel:05545609954" className="btn btn-primary">
                            7/24 Ara: 0554 560 9954
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
