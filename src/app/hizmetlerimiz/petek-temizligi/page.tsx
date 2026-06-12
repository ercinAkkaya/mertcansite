import HeroBanner from '@/components/HeroBanner/HeroBanner';
import JsonLd from '@/components/Seo/JsonLd';
import { buildPageMetadata } from '@/lib/seoMetadata';
import { getServiceContent } from '@/lib/seoContent';
import { faqSchema } from '@/lib/structuredData';
import { primaryPhone } from '@/lib/siteConfig';
import styles from '../service.module.css';

const content = getServiceContent('petek-temizligi');

export const metadata = buildPageMetadata({
    title: 'Petek Temizliği | Makineli Radyatör Yıkama — İstanbul & Kocaeli',
    description:
        'Profesyonel petek temizliği ile daha iyi ısınma ve düşük fatura. Gebze, Pendik, Tuzla ve İstanbul genelinde makineli petek yıkama hizmeti.',
    path: '/hizmetlerimiz/petek-temizligi',
    keywords: ['petek temizliği', 'radyatör temizliği', 'gebze petek temizliği', 'kombi petek temizliği'],
});

export default function PetekTemizligiPage() {
    const whatsappLink = `https://wa.me/${primaryPhone.whatsapp}?text=${encodeURIComponent('Merhaba, petek temizliği hizmeti hakkında bilgi almak istiyorum.')}`;

    return (
        <div className={styles.pageContainer}>
            <JsonLd data={faqSchema(content.faqs)} />

            <section className={styles.pageHeader}>
                <div className="container">
                    <h1 className={`${styles.pageTitle} animate-fade-in-up`}>Petek Temizliği</h1>
                    <p className={`${styles.pageSubtitle} animate-fade-in-up animate-delay-1`}>
                        Makineli petek yıkama ile evinizi daha hızlı ısıtın, kombi yükünü azaltın, enerji tasarrufu sağlayın.
                    </p>
                </div>
            </section>

            <section className="container relative">
                <div className={`${styles.mainContent} animate-fade-in-up animate-delay-2`}>
                    <div className={styles.contentWrapper}>
                        <HeroBanner alt="Petek Temizliği Hizmeti" />

                        <h2>Profesyonel Makineli Petek Temizliği</h2>
                        <p>
                            Zamanla peteklerin içinde biriken çamur ve kireç ısınmayı düşürür, kombiyi zorlar.
                            <strong> SM Mühendislik</strong> olarak İstanbul ve Kocaeli genelinde {content.intro.toLowerCase()}
                        </p>

                        <div className={styles.highlightBox}>
                            <p>Kış öncesi petek temizliği yaptırarak hem konforunuzu artırın hem de kombi arıza riskini azaltın.</p>
                        </div>

                        <h3>Neler Yapıyoruz?</h3>
                        <ul>
                            {content.benefits.map((b) => (
                                <li key={b}>{b}</li>
                            ))}
                        </ul>

                        <h3>Sıkça Sorulan Sorular</h3>
                        <div className={styles.faqList}>
                            {content.faqs.map((faq) => (
                                <div key={faq.question} className={styles.faqItem}>
                                    <h4>{faq.question}</h4>
                                    <p>{faq.answer}</p>
                                </div>
                            ))}
                        </div>

                        <div className={styles.contentCta}>
                            <h3>Petek Temizliği Randevusu Alın</h3>
                            <p>Gebze, Pendik, Tuzla ve İstanbul genelinde aynı hafta içi randevu.</p>
                            <div className={styles.ctaButtons}>
                                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                                    WhatsApp
                                </a>
                                <a href={`tel:${primaryPhone.tel}`} className="btn btn-primary">
                                    Ara: {primaryPhone.display}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
