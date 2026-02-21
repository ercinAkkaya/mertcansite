import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { seoPages } from '@/lib/seoData';
import styles from '../hizmetlerimiz/service.module.css';

export const dynamicParams = false; // Forces 404 for ungenerated paths (vital for catch-all)

export async function generateStaticParams() {
    return seoPages.map((page) => ({
        seo_slug: page.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ seo_slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const pageData = seoPages.find((p) => p.slug === resolvedParams.seo_slug);

    if (!pageData) {
        return { title: 'Sayfa Bulunamadı' };
    }

    return {
        title: `${pageData.title} | Aynı Gün Acil Servis`,
        description: `${pageData.locationName} ve çevresinde profesyonel ${pageData.serviceName.toLowerCase()} hizmeti. SM Mühendislik güvencesiyle 7/24 hizmetinizdeyiz.`,
        alternates: {
            canonical: `https://www.smmhendislik.com/${pageData.slug}`,
        }
    };
}

export default async function SeoLandingPage({ params }: { params: Promise<{ seo_slug: string }> }) {
    const resolvedParams = await params;
    const pageData = seoPages.find((p) => p.slug === resolvedParams.seo_slug);

    if (!pageData) {
        notFound();
    }

    return (
        <div className={styles.pageContainer}>
            <section className={styles.pageHeader}>
                <div className="container">
                    <h1 className={`${styles.pageTitle} animate-fade-in-up`}>{pageData.title}</h1>
                    <p className={`${styles.pageSubtitle} animate-fade-in-up animate-delay-1`}>
                        {pageData.locationName} bölgesinde 7/24 kesintisiz, yetkili ve garantili {pageData.serviceName.toLowerCase()} çözümleri arıyorsanız doğru yerdesiniz.
                    </p>
                </div>
            </section>

            <section className="container relative">
                <div className={`${styles.mainContent} animate-fade-in-up animate-delay-2`}>
                    <div className={styles.contentWrapper}>

                        <div style={{ position: 'relative', width: '100%', height: '350px', marginBottom: '3rem', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(45deg, var(--color-primary-navy), var(--color-accent))', opacity: 0.2, zIndex: 1 }}></div>
                            <Image
                                src="/images/hero_background.png"
                                alt={pageData.title}
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>

                        <h2>{pageData.locationName} {pageData.serviceName} Hizmetleri</h2>
                        <p>
                            Kış aylarında veya günün en beklenmedik saatlerinde karşılaştığınız doğalgaz sızıntıları, ısıtma problemleri veya tesisat arızaları günlük yaşamı durma noktasına getirebilir. <strong>SM Mühendislik</strong> olarak, {pageData.locationName} bölgesi ve çevresinde, tüm <strong>{pageData.serviceName.toLowerCase()}</strong> işlemlerinde alanında MYK yetki belgeli uzman kadromuz ile aynı gün hizmet vermekteyiz.
                        </p>

                        <div className={styles.highlightBox}>
                            <p>{pageData.locationName} içerisindeki tüm adreslere en fazla 1 saat içerisinde mobil teknik servis yönlendirmesi sağlayan hızlı hizmet ağına sahibiz.</p>
                        </div>

                        <h3>{pageData.locationName} Bölgesinde Neden Bizi Seçmelisiniz?</h3>
                        <ul>
                            <li><strong>Uzman Kadro:</strong> {pageData.serviceName} konusunda 10 yılı aşkın tecrübeye sahip sertifikalı personellerle çalışıyoruz.</li>
                            <li><strong>Hızlı Müdahale:</strong> {pageData.locationName} ilçesinin neresinde olursanız olun, çağrınızdan kısa süre sonra kapınızdayız.</li>
                            <li><strong>Garantili Hizmet:</strong> Uyguladığımız tesisat onarımları ve kombi tamiratları 1 yıl servis garantisi altındadır.</li>
                        </ul>

                        <div className={styles.contentCta}>
                            <h3>{pageData.title} Konusunda Acil Desteğe mi İhtiyacınız Var?</h3>
                            <p>Arızanızla zaman kaybetmeyin, hemen bize ulaşın teknisyenlerimiz adresinize gelsin.</p>
                            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1rem', flexWrap: 'wrap' }}>
                                <a href="tel:05545609954" className="btn btn-whatsapp" style={{ display: 'inline-flex', padding: '1rem 2.5rem', fontSize: '1.1rem', background: '#25D366' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" style={{ marginRight: '10px' }}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.878-.788-1.481-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" /></svg>
                                    WhatsApp İle Ulaş
                                </a>
                                <a href="tel:05545609954" className="btn" style={{ background: 'var(--color-white)', color: 'var(--color-primary-navy)', fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
                                    Hemen Ara
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
