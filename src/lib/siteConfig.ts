export const siteConfig = {
    name: 'SM Mühendislik',
    legalName: 'SM Mühendislik Kocaeli',
    url: 'https://www.smmhendislik.com',
    locale: 'tr_TR',
    description:
        'İstanbul, Kocaeli, Sakarya ve Ankara genelinde doğalgaz tamiri, kombi servisi, kaçak tespiti ve tesisat. Gebze, Pendik, Adapazarı, Çankaya ve tüm ilçelere 7/24 aynı gün servis.',
    phones: {
        primary: { label: 'Mertcan Nar', display: '0554 560 9954', tel: '05545609954', whatsapp: '905545609954' },
        secondary: { label: 'Sümer Kapusız', display: '0538 405 2206', tel: '05384052206' },
    },
    address: {
        locality: 'Çayırova',
        region: 'Kocaeli',
        country: 'TR',
        countryName: 'Türkiye',
    },
    geo: { latitude: 40.8251, longitude: 29.3879 },
    serviceArea: 'İstanbul, Kocaeli, Sakarya ve Ankara',
    ogImage: '/images/og-cover.jpg',
} as const;

export const primaryPhone = siteConfig.phones.primary;
export const baseUrl = siteConfig.url;
