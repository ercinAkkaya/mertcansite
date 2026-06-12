import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Seo/Breadcrumbs';
import HeroBanner from '@/components/HeroBanner/HeroBanner';
import JsonLd from '@/components/Seo/JsonLd';
import { buildPageMetadata } from '@/lib/seoMetadata';
import { getRegionContext, getServiceContent } from '@/lib/seoContent';
import {
    getHighlightText,
    getLocationFaqs,
    getMetaDescription,
    getSecondaryParagraph,
} from '@/lib/seoPageContent';
import {
    getNearbyLocationPages,
    getPageKeywords,
    getRelatedSeoPages,
    getSeoPageBySlug,
    regionLabels,
    seoPages,
} from '@/lib/seoData';
import { baseUrl, primaryPhone } from '@/lib/siteConfig';
import {
    breadcrumbSchema,
    faqSchema,
    servicePageSchema,
} from '@/lib/structuredData';
import styles from '../hizmetlerimiz/service.module.css';

export const dynamicParams = false;

export async function generateStaticParams() {
    return seoPages.map((page) => ({ seo_slug: page.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ seo_slug: string }>;
}): Promise<Metadata> {
    const { seo_slug } = await params;
    const pageData = getSeoPageBySlug(seo_slug);

    if (!pageData) {
        return { title: 'Sayfa Bulunamadı' };
    }

    const content = getServiceContent(pageData.serviceId);

    return buildPageMetadata({
        title: `${pageData.title} | 7/24 Acil Servis`,
        description: getMetaDescription(pageData, content.intro),
        path: `/${pageData.slug}`,
        keywords: getPageKeywords(pageData),
    });
}

export default async function SeoLandingPage({
    params,
}: {
    params: Promise<{ seo_slug: string }>;
}) {
    const { seo_slug } = await params;
    const pageData = getSeoPageBySlug(seo_slug);

    if (!pageData) {
        notFound();
    }

    const content = getServiceContent(pageData.serviceId);
    const regionContext = getRegionContext(pageData.locationRegion);
    const relatedPages = getRelatedSeoPages(pageData);
    const nearbyPages = getNearbyLocationPages(pageData);
    const locationFaqs = getLocationFaqs(pageData);
    const allFaqs = [...content.faqs, ...locationFaqs];
    const heroSrc =
        pageData.serviceId === 'dogalgaz-tamiri' ? '/images/dogalgaz-tamiri.jpg' : undefined;

    const whatsappLink = `https://wa.me/${primaryPhone.whatsapp}?text=${encodeURIComponent(
        `Merhaba, ${pageData.title} hizmeti hakkında bilgi almak istiyorum.`
    )}`;

    const breadcrumbs = [
        { label: 'Ana Sayfa', href: '/' },
        { label: 'Hizmet Bölgeleri', href: '/hizmet-bolgeleri' },
        { label: pageData.title },
    ];

    const schemaBreadcrumbs = breadcrumbSchema([
        { name: 'Ana Sayfa', url: baseUrl },
        { name: 'Hizmet Bölgeleri', url: `${baseUrl}/hizmet-bolgeleri` },
        { name: pageData.title, url: `${baseUrl}/${pageData.slug}` },
    ]);

    return (
        <div className={styles.pageContainer}>
            <JsonLd data={[servicePageSchema(pageData), schemaBreadcrumbs, faqSchema(allFaqs)]} />

            <section className={styles.pageHeader}>
                <div className="container">
                    <Breadcrumbs items={breadcrumbs} variant="light" />
                    <h1 className={`${styles.pageTitle} animate-fade-in-up`}>{pageData.title}</h1>
                    <p className={`${styles.pageSubtitle} animate-fade-in-up animate-delay-1`}>
                        {pageData.locationName} ve çevresinde 7/24 kesintisiz, yetkili ve garantili{' '}
                        {pageData.serviceName.toLowerCase()} — {regionLabels[pageData.locationRegion]}.
                    </p>
                </div>
            </section>

            <section className="container relative">
                <div className={`${styles.mainContent} animate-fade-in-up animate-delay-2`}>
                    <div className={styles.contentWrapper}>
                        <HeroBanner alt={pageData.title} src={heroSrc} />

                        <h2>
                            {pageData.locationName} {pageData.serviceName} Hizmetleri
                        </h2>
                        <p>
                            <strong>SM Mühendislik</strong>, {pageData.locationName} bölgesinde{' '}
                            <strong>{pageData.serviceName.toLowerCase()}</strong> konusunda MYK belgeli
                            uzman kadrosuyla aynı gün hizmet vermektedir. {content.intro} {regionContext}
                        </p>
                        <p>{getSecondaryParagraph(pageData)}</p>

                        <div className={styles.highlightBox}>
                            <p>{getHighlightText(pageData)}</p>
                        </div>

                        <h3>{pageData.locationName} Bölgesinde Neden SM Mühendislik?</h3>
                        <ul>
                            {content.benefits.map((benefit) => (
                                <li key={benefit}>{benefit}</li>
                            ))}
                            <li>
                                <strong>Hızlı Müdahale:</strong> {pageData.locationName} ilçesinin her
                                noktasına aynı gün servis.
                            </li>
                            <li>
                                <strong>Garantili İşçilik:</strong> Tüm onarım ve bakım işlemlerinde 1 yıl
                                firma garantisi.
                            </li>
                        </ul>

                        {nearbyPages.length > 0 && (
                            <>
                                <h3>{regionLabels[pageData.locationRegion]} — Yakın İlçeler</h3>
                                <div className={styles.relatedLinks}>
                                    {nearbyPages.map((nearby) => (
                                        <Link key={nearby.slug} href={`/${nearby.slug}`}>
                                            {nearby.locationName} {pageData.serviceName}
                                        </Link>
                                    ))}
                                </div>
                            </>
                        )}

                        <h3>Sıkça Sorulan Sorular — {pageData.title}</h3>
                        <div className={styles.faqList}>
                            {allFaqs.map((faq) => (
                                <div key={faq.question} className={styles.faqItem}>
                                    <h4>{faq.question}</h4>
                                    <p>{faq.answer}</p>
                                </div>
                            ))}
                        </div>

                        {relatedPages.length > 0 && (
                            <>
                                <h3>İlgili Hizmetler ve Bölgeler</h3>
                                <div className={styles.relatedLinks}>
                                    {relatedPages.map((related) => (
                                        <Link key={related.slug} href={`/${related.slug}`}>
                                            {related.title}
                                        </Link>
                                    ))}
                                    <Link href={pageData.servicePath}>
                                        {pageData.serviceName} hizmet detayı →
                                    </Link>
                                    <Link href="/hizmet-bolgeleri">Tüm hizmet bölgeleri →</Link>
                                </div>
                            </>
                        )}

                        <div className={styles.contentCta}>
                            <h3>{pageData.title} — Acil Destek</h3>
                            <p>
                                {pageData.locationName} ve {regionLabels[pageData.locationRegion]} genelinde
                                arızanızla zaman kaybetmeyin; teknisyenlerimiz adresinize gelsin.
                            </p>
                            <div className={styles.ctaButtons}>
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-whatsapp"
                                >
                                    WhatsApp İle Ulaş
                                </a>
                                <a href={`tel:${primaryPhone.tel}`} className="btn btn-primary">
                                    Hemen Ara: {primaryPhone.display}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
