import { baseUrl, primaryPhone, siteConfig } from './siteConfig';
import { locations, type SeoPage } from './seoData';
import { getServiceContent } from './seoContent';

const priorityAreaNames = locations
    .filter((l) => l.priority === 1)
    .map((l) => ({ '@type': 'AdministrativeArea' as const, name: l.name }));

export function localBusinessSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'HVACBusiness',
        name: siteConfig.legalName,
        image: `${baseUrl}${siteConfig.ogImage}`,
        url: baseUrl,
        telephone: primaryPhone.tel,
        priceRange: '₺₺',
        description: siteConfig.description,
        address: {
            '@type': 'PostalAddress',
            addressLocality: siteConfig.address.locality,
            addressRegion: siteConfig.address.region,
            addressCountry: siteConfig.address.country,
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: siteConfig.geo.latitude,
            longitude: siteConfig.geo.longitude,
        },
        areaServed: [
            { '@type': 'City', name: 'İstanbul' },
            { '@type': 'City', name: 'Kocaeli' },
            { '@type': 'City', name: 'Sakarya' },
            { '@type': 'City', name: 'Ankara' },
            ...priorityAreaNames,
        ],
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '00:00',
            closes: '23:59',
        },
        sameAs: [`https://wa.me/${primaryPhone.whatsapp}`],
    };
}

export function websiteSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: siteConfig.name,
        url: baseUrl,
        description: siteConfig.description,
        inLanguage: 'tr-TR',
        publisher: {
            '@type': 'Organization',
            name: siteConfig.legalName,
            url: baseUrl,
        },
    };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };
}

export function servicePageSchema(page: SeoPage) {
    const content = getServiceContent(page.serviceId);
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: page.title,
        serviceType: page.serviceName,
        description: `${page.locationName} bölgesinde ${page.serviceName.toLowerCase()} hizmeti. ${content.intro}`,
        provider: {
            '@type': 'HVACBusiness',
            name: siteConfig.legalName,
            telephone: primaryPhone.tel,
            url: baseUrl,
        },
        areaServed: {
            '@type': 'City',
            name: page.locationName,
        },
        url: `${baseUrl}/${page.slug}`,
        offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
            priceCurrency: 'TRY',
            description: '7/24 acil servis — keşif sonrası fiyatlandırma',
        },
    };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };
}
