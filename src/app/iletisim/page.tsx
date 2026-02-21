import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'İletişim | SM Mühendislik Kocaeli',
    description: 'SM Mühendislik ile iletişime geçin. Acil kombi arızası, doğalgaz tesisatı ve gaz kaçağı çözümleri için Kocaeli ve Çayırova genelinde 7/24 hizmetinizdeyiz.',
    alternates: {
        canonical: 'https://www.smmhendislik.com/iletisim',
    }
};

export default function IletisimPage() {
    const schemaMarkup = {
        "@context": "https://schema.org",
        "@type": "Plumber",
        "name": "SM Mühendislik Kocaeli",
        "image": "https://www.smmhendislik.com/images/hero_background.png",
        "url": "https://www.smmhendislik.com",
        "telephone": "05545609954",
        "priceRange": "₺₺",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Çayırova",
            "addressRegion": "Kocaeli",
            "addressCountry": "TR"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 40.8251,
            "longitude": 29.3879
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
        }
    };

    return (
        <div className={styles.pageContainer}>
            {/* JSON-LD Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
            />

            {/* HEADER SECTION */}
            <section className={styles.pageHeader}>
                <div className="container">
                    <h1 className={styles.pageTitle}>Bize Ulaşın</h1>
                    <p className={styles.pageSubtitle} style={{ color: 'rgba(255,255,255,0.8)' }}>
                        Doğalgaz tesisatı, acil gaz kaçağı veya kombi arızaları için 7/24 kesintisiz destek veriyoruz.
                    </p>
                </div>
            </section>

            {/* MAIN CONTENT */}
            <section className="container relative">
                <div className={styles.mainContent}>
                    <div className={styles.contactGrid}>

                        {/* Contact Info Column */}
                        <div className={styles.contactInfo}>
                            <h2>İletişim Bilgilerimiz</h2>

                            <div className={styles.contactList}>
                                <div className={styles.contactItem}>
                                    <div className={styles.iconWrapper}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                    </div>
                                    <div className={styles.itemDetails}>
                                        <h3>Mertcan Nar (Ana Hat / WhatsApp)</h3>
                                        <p><a href="tel:05545609954">0554 560 9954</a></p>
                                    </div>
                                </div>

                                <div className={styles.contactItem}>
                                    <div className={styles.iconWrapper}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                    </div>
                                    <div className={styles.itemDetails}>
                                        <h3>Sümer Kapusız (Alternatif Hat)</h3>
                                        <p><a href="tel:05384052206">0538 405 2206</a></p>
                                    </div>
                                </div>

                                <div className={styles.contactItem}>
                                    <div className={styles.iconWrapper}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                    </div>
                                    <div className={styles.itemDetails}>
                                        <h3>Hizmet Bölgemiz</h3>
                                        <p>Çayırova başta olmak üzere Kocaeli geneli.</p>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.workingHours}>
                                <h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                    Çalışma Saatleri
                                </h3>
                                <ul>
                                    <li><span>Pazartesi - Cuma</span> <span>7/24 Kesintisiz</span></li>
                                    <li><span>Cumartesi</span> <span>7/24 Kesintisiz</span></li>
                                    <li><span>Pazar</span> <span>7/24 Kesintisiz</span></li>
                                </ul>
                            </div>
                        </div>

                        {/* Map Column */}
                        <div className={styles.mapContainer}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48344.666014589945!2d29.362140417253303!3d40.827376043818315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cad1b23838dcbd%3A0xe53bc9f3e490e665!2zw4dhecSxcbWvdmEvS29jYWVsaQ!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
                                className={styles.mapIframe}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Maps Çayırova Konumu"
                            ></iframe>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}
