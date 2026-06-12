import HeroBanner from '@/components/HeroBanner/HeroBanner';
import JsonLd from '@/components/Seo/JsonLd';
import { buildPageMetadata } from '@/lib/seoMetadata';
import { getServiceContent } from '@/lib/seoContent';
import { faqSchema } from '@/lib/structuredData';
import { primaryPhone } from '@/lib/siteConfig';
import styles from '../service.module.css';

const content = getServiceContent('dogalgaz-tamiri');

export const metadata = buildPageMetadata({
    title: 'Doğalgaz Tamiri ve Acil Onarım | İstanbul & Kocaeli',
    description:
        'İstanbul ve Kocaeli genelinde doğalgaz tamiri, tesisat onarımı ve acil müdahale. Gebze, Pendik, Tuzla ve tüm ilçelere 7/24 garantili servis.',
    path: '/hizmetlerimiz/dogalgaz-tamiri',
    keywords: ['doğalgaz tamiri', 'acil doğalgaz servisi', 'gebze doğalgaz tamiri', 'istanbul doğalgaz tamiri'],
});

export default function DogalgazTamiriPage() {
    const whatsappLink = `https://wa.me/${primaryPhone.whatsapp}?text=${encodeURIComponent('Merhaba, doğalgaz tamiri hizmeti hakkında bilgi almak istiyorum.')}`;

    return (
        <div className={styles.pageContainer}>
            <JsonLd data={faqSchema(content.faqs)} />

            <section className={styles.pageHeader}>
                <div className="container">
                    <h1 className={`${styles.pageTitle} animate-fade-in-up`}>Doğalgaz Tamiri ve Acil Onarım</h1>
                    <p className={`${styles.pageSubtitle} animate-fade-in-up animate-delay-1`}>
                        İstanbul ve Kocaeli&apos;nde tesisat arızalarına kırmadan tespit, garantili onarım ve 7/24 acil müdahale.
                    </p>
                </div>
            </section>

            <section className="container relative">
                <div className={`${styles.mainContent} animate-fade-in-up animate-delay-2`}>
                    <div className={styles.contentWrapper}>
                        <HeroBanner
                            alt="Doğalgaz tesisatı ve boru hattı onarımı — profesyonel servis"
                            src="/images/dogalgaz-tamiri.jpg"
                        />

                        <h2>Güvenli ve Kalıcı Doğalgaz Onarımı</h2>
                        <p>
                            <strong>SM Mühendislik</strong>, Gebze, Pendik, Tuzla, Çayırova başta olmak üzere İstanbul ve
                            Kocaeli genelinde doğalgaz tesisat arızalarına aynı gün müdahale eder. {content.intro}
                        </p>

                        <div className={styles.highlightBox}>
                            <p>Doğalgaz kokusu veya şüpheli kaçak durumunda önce gazı kapatın, elektrik düğmelerine dokunmayın ve hemen bizi arayın.</p>
                        </div>

                        <h3>Hizmet Kapsamımız</h3>
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
                            <h3>Acil Doğalgaz Tamiri İçin Hemen Arayın</h3>
                            <p>7/24 mobil ekip yönlendirmesi — İstanbul ve Kocaeli geneli.</p>
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
