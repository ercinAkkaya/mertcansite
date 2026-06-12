export type LocationRegion =
    | 'kocaeli'
    | 'istanbul-anadolu'
    | 'istanbul-avrupa'
    | 'sakarya'
    | 'ankara';

export type Location = {
    id: string;
    name: string;
    region: LocationRegion;
    priority: number;
};

export type Service = {
    id: string;
    name: string;
    shortName: string;
    path: string;
};

export const regionLabels: Record<LocationRegion, string> = {
    kocaeli: 'Kocaeli',
    'istanbul-anadolu': 'İstanbul Anadolu Yakası',
    'istanbul-avrupa': 'İstanbul Avrupa Yakası',
    sakarya: 'Sakarya',
    ankara: 'Ankara',
};

export const locations: Location[] = [
    // Öncelikli — ana hizmet bölgeleri
    { id: 'gebze', name: 'Gebze', region: 'kocaeli', priority: 1 },
    { id: 'pendik', name: 'Pendik', region: 'istanbul-anadolu', priority: 1 },
    { id: 'tuzla', name: 'Tuzla', region: 'istanbul-anadolu', priority: 1 },
    { id: 'cayirova', name: 'Çayırova', region: 'kocaeli', priority: 1 },
    { id: 'darica', name: 'Darıca', region: 'kocaeli', priority: 1 },
    { id: 'kartal', name: 'Kartal', region: 'istanbul-anadolu', priority: 1 },
    { id: 'maltepe', name: 'Maltepe', region: 'istanbul-anadolu', priority: 1 },
    { id: 'dilovasi', name: 'Dilovası', region: 'kocaeli', priority: 1 },
    { id: 'adapazari', name: 'Adapazarı', region: 'sakarya', priority: 1 },
    { id: 'cankaya', name: 'Çankaya', region: 'ankara', priority: 1 },

    // Kocaeli geneli
    { id: 'izmit', name: 'İzmit', region: 'kocaeli', priority: 2 },
    { id: 'derince', name: 'Derince', region: 'kocaeli', priority: 2 },
    { id: 'korfez', name: 'Körfez', region: 'kocaeli', priority: 2 },
    { id: 'sekerpinar', name: 'Şekerpınar', region: 'kocaeli', priority: 2 },
    { id: 'golcuk', name: 'Gölcük', region: 'kocaeli', priority: 2 },
    { id: 'kartepe', name: 'Kartepe', region: 'kocaeli', priority: 2 },
    { id: 'basiskele', name: 'Başiskele', region: 'kocaeli', priority: 2 },

    // İstanbul Anadolu
    { id: 'sultanbeyli', name: 'Sultanbeyli', region: 'istanbul-anadolu', priority: 2 },
    { id: 'sancaktepe', name: 'Sancaktepe', region: 'istanbul-anadolu', priority: 2 },
    { id: 'umraniye', name: 'Ümraniye', region: 'istanbul-anadolu', priority: 2 },
    { id: 'atasehir', name: 'Ataşehir', region: 'istanbul-anadolu', priority: 2 },
    { id: 'kadikoy', name: 'Kadıköy', region: 'istanbul-anadolu', priority: 2 },
    { id: 'uskudar', name: 'Üsküdar', region: 'istanbul-anadolu', priority: 2 },
    { id: 'beykoz', name: 'Beykoz', region: 'istanbul-anadolu', priority: 2 },
    { id: 'cekmekoy', name: 'Çekmeköy', region: 'istanbul-anadolu', priority: 2 },

    // İstanbul Avrupa
    { id: 'esenyurt', name: 'Esenyurt', region: 'istanbul-avrupa', priority: 2 },
    { id: 'beylikduzu', name: 'Beylikdüzü', region: 'istanbul-avrupa', priority: 2 },
    { id: 'avcilar', name: 'Avcılar', region: 'istanbul-avrupa', priority: 2 },
    { id: 'basaksehir', name: 'Başakşehir', region: 'istanbul-avrupa', priority: 2 },
    { id: 'bagcilar', name: 'Bağcılar', region: 'istanbul-avrupa', priority: 2 },
    { id: 'kucukcekmece', name: 'Küçükçekmece', region: 'istanbul-avrupa', priority: 2 },
    { id: 'bahcelievler', name: 'Bahçelievler', region: 'istanbul-avrupa', priority: 2 },
    { id: 'gaziosmanpasa', name: 'Gaziosmanpaşa', region: 'istanbul-avrupa', priority: 2 },

    // Sakarya
    { id: 'serdivan', name: 'Serdivan', region: 'sakarya', priority: 2 },
    { id: 'erenler', name: 'Erenler', region: 'sakarya', priority: 2 },
    { id: 'arifiye', name: 'Arifiye', region: 'sakarya', priority: 2 },
    { id: 'hendek', name: 'Hendek', region: 'sakarya', priority: 2 },
    { id: 'akyazi', name: 'Akyazı', region: 'sakarya', priority: 2 },
    { id: 'sapanca', name: 'Sapanca', region: 'sakarya', priority: 2 },
    { id: 'karasu', name: 'Karasu', region: 'sakarya', priority: 2 },
    { id: 'geyve', name: 'Geyve', region: 'sakarya', priority: 2 },
    { id: 'ferizli', name: 'Ferizli', region: 'sakarya', priority: 2 },
    { id: 'kaynarca', name: 'Kaynarca', region: 'sakarya', priority: 2 },

    // Ankara
    { id: 'kecioren', name: 'Keçiören', region: 'ankara', priority: 2 },
    { id: 'mamak', name: 'Mamak', region: 'ankara', priority: 2 },
    { id: 'etimesgut', name: 'Etimesgut', region: 'ankara', priority: 2 },
    { id: 'sincan', name: 'Sincan', region: 'ankara', priority: 2 },
    { id: 'yenimahalle', name: 'Yenimahalle', region: 'ankara', priority: 2 },
    { id: 'pursaklar', name: 'Pursaklar', region: 'ankara', priority: 2 },
    { id: 'altindag', name: 'Altındağ', region: 'ankara', priority: 2 },
    { id: 'golbasi', name: 'Gölbaşı', region: 'ankara', priority: 2 },
    { id: 'eryaman', name: 'Eryaman', region: 'ankara', priority: 2 },
    { id: 'polatli', name: 'Polatlı', region: 'ankara', priority: 2 },
    { id: 'cubuk', name: 'Çubuk', region: 'ankara', priority: 2 },
    { id: 'beypazari', name: 'Beypazarı', region: 'ankara', priority: 2 },
];

export const services: Service[] = [
    { id: 'dogalgaz-tesisati', name: 'Doğalgaz Tesisatı', shortName: 'Tesisat', path: '/hizmetlerimiz/dogalgaz-tesisati' },
    { id: 'dogalgaz-tamiri', name: 'Doğalgaz Tamiri', shortName: 'Tamir', path: '/hizmetlerimiz/dogalgaz-tamiri' },
    { id: 'dogalgaz-kacak-tespiti', name: 'Doğalgaz Kaçak Tespiti', shortName: 'Kaçak Tespiti', path: '/hizmetlerimiz/dogalgaz-kacak-tespiti' },
    { id: 'kombi-montaji', name: 'Kombi Montajı', shortName: 'Montaj', path: '/hizmetlerimiz/kombi-montaji' },
    { id: 'kombi-bakimi', name: 'Kombi Bakımı', shortName: 'Bakım', path: '/hizmetlerimiz/kombi-bakimi' },
    { id: 'kombi-tamiri', name: 'Kombi Tamiri', shortName: 'Tamir', path: '/hizmetlerimiz/kombi-tamiri' },
    { id: 'petek-temizligi', name: 'Petek Temizliği', shortName: 'Petek', path: '/hizmetlerimiz/petek-temizligi' },
];

export type SeoPage = {
    slug: string;
    locationId: string;
    locationName: string;
    locationRegion: LocationRegion;
    serviceId: string;
    serviceName: string;
    servicePath: string;
    title: string;
    priority: number;
};

export const seoPages: SeoPage[] = locations.flatMap((loc) =>
    services.map((srv) => ({
        slug: `${loc.id}-${srv.id}`,
        locationId: loc.id,
        locationName: loc.name,
        locationRegion: loc.region,
        serviceId: srv.id,
        serviceName: srv.name,
        servicePath: srv.path,
        title: `${loc.name} ${srv.name}`,
        priority: loc.priority,
    }))
);

export const allRegions: LocationRegion[] = [
    'kocaeli',
    'istanbul-anadolu',
    'istanbul-avrupa',
    'sakarya',
    'ankara',
];

export const priorityLocations = locations.filter((l) => l.priority === 1);

export function getLocationsByRegion(region: LocationRegion) {
    return locations.filter((l) => l.region === region);
}

export function getSeoPageBySlug(slug: string) {
    return seoPages.find((p) => p.slug === slug);
}

export function getNearbyLocationPages(page: SeoPage, limit = 5) {
    return seoPages
        .filter(
            (p) =>
                p.locationRegion === page.locationRegion &&
                p.locationId !== page.locationId &&
                p.serviceId === page.serviceId
        )
        .slice(0, limit);
}

export function getRelatedSeoPages(page: SeoPage, limit = 8) {
    const sameLocation = seoPages.filter(
        (p) => p.locationId === page.locationId && p.slug !== page.slug
    );
    const sameRegion = seoPages.filter(
        (p) =>
            p.locationRegion === page.locationRegion &&
            p.serviceId === page.serviceId &&
            p.locationId !== page.locationId
    );
    const sameService = seoPages.filter(
        (p) =>
            p.serviceId === page.serviceId &&
            p.locationRegion !== page.locationRegion &&
            p.locationId !== page.locationId
    );
    return [...sameLocation.slice(0, 3), ...sameRegion.slice(0, 3), ...sameService.slice(0, 2)].slice(0, limit);
}

export function getPageKeywords(page: SeoPage): string[] {
    const s = page.serviceName.toLowerCase();
    const l = page.locationName;
    return [
        `${l} ${s}`,
        `${l} ${s.split(' ')[0]} servisi`,
        `${l} kombi servisi`,
        `${l} doğalgaz tamiri`,
        `${l} acil servis`,
        `${l} 7/24 servis`,
        `${regionLabels[page.locationRegion]} ${s}`,
        'aynı gün servis',
        'MYK belgeli usta',
    ];
}
