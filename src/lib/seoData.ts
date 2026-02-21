export const locations = [
    { id: 'cayirova', name: 'Çayırova' },
    { id: 'gebze', name: 'Gebze' },
    { id: 'darica', name: 'Darıca' },
    { id: 'dilovasi', name: 'Dilovası' },
    { id: 'sekerpinar', name: 'Şekerpınar' },
    { id: 'tuzla', name: 'Tuzla' },
    { id: 'pendik', name: 'Pendik' },
];

export const services = [
    { id: 'dogalgaz-tesisati', name: 'Doğalgaz Tesisatı' },
    { id: 'dogalgaz-tamiri', name: 'Doğalgaz Tamiri' },
    { id: 'dogalgaz-kacak-tespiti', name: 'Doğalgaz Kaçak Tespiti' },
    { id: 'kombi-montaji', name: 'Kombi Montajı' },
    { id: 'kombi-bakimi', name: 'Kombi Bakımı' },
    { id: 'kombi-tamiri', name: 'Kombi Tamiri' },
    { id: 'petek-temizligi', name: 'Petek Temizliği' },
];

// Combine them into a single massive array of permutations
export const seoPages = locations.flatMap((loc) =>
    services.map((srv) => ({
        slug: `${loc.id}-${srv.id}`, // e.g. "gebze-kombi-tamiri"
        locationId: loc.id,
        locationName: loc.name,
        serviceId: srv.id,
        serviceName: srv.name,
        title: `${loc.name} ${srv.name}`, // e.g. "Gebze Kombi Tamiri"
    }))
);
