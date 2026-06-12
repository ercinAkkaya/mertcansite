import type { Metadata } from 'next';
import { baseUrl, siteConfig } from './siteConfig';

type PageMetaInput = {
    title: string;
    description: string;
    path: string;
    keywords?: string[];
    noIndex?: boolean;
};

export function buildPageMetadata({
    title,
    description,
    path,
    keywords = [],
    noIndex = false,
}: PageMetaInput): Metadata {
    const canonical = `${baseUrl}${path}`;
    const fullTitle = title.includes(siteConfig.name) ? title : `${title} | ${siteConfig.name}`;

    return {
        title: fullTitle,
        description,
        keywords: keywords.length > 0 ? keywords : undefined,
        alternates: { canonical },
        robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
        openGraph: {
            type: 'website',
            locale: siteConfig.locale,
            url: canonical,
            siteName: siteConfig.name,
            title: fullTitle,
            description,
            images: [
                {
                    url: `${baseUrl}${siteConfig.ogImage}`,
                    width: 1200,
                    height: 630,
                    alt: `${siteConfig.name} - İstanbul ve Kocaeli Doğalgaz & Kombi Servisi`,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: fullTitle,
            description,
            images: [`${baseUrl}${siteConfig.ogImage}`],
        },
    };
}
