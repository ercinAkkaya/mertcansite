import type { LocationRegion, SeoPage } from './seoData';
import { regionLabels } from './seoData';

const regionHighlights: Record<LocationRegion, string> = {
    kocaeli:
        'Kocaeli ve Gebze hattındaki mobil servis araçlarımızla Dilovası, Darıca ve İzmit çevresine hızlı ulaşım sağlıyoruz.',
    'istanbul-anadolu':
        'Pendik, Tuzla, Kartal ve Maltepe başta olmak üzere Anadolu Yakası\'nın tüm ilçelerine aynı gün ekip yönlendirmesi yapıyoruz.',
    'istanbul-avrupa':
        'Avrupa Yakası genelinde Esenyurt, Beylikdüzü, Başakşehir ve çevre ilçelere 7/24 teknik destek sunuyoruz.',
    sakarya:
        'Adapazarı, Serdivan ve Sakarya genelinde doğalgaz ve kombi arızalarına özel mobil ekiplerimizle müdahale ediyoruz.',
    ankara:
        'Çankaya, Keçiören, Mamak ve Ankara genelinde doğalgaz mevzuatına uygun, belgeli mühendislik hizmeti veriyoruz.',
};

const bodyVariants: Record<string, string[]> = {
    'dogalgaz-tesisati': [
        '{location} bölgesinde konut ve iş yeri doğalgaz tesisatı projelerinde keşif, proje, montaj ve devreye alma süreçlerini tek elden yönetiyoruz.',
        '{location} ilçesinde yeni bina tesisatı, hat yenileme ve gaz açma öncesi basınç testi hizmetleri sunuyoruz.',
        '{location} ve çevresinde standartlara uygun boru hattı çekimi, vana montajı ve sızdırmazlık kontrolü yapıyoruz.',
    ],
    'dogalgaz-tamiri': [
        '{location} bölgesinde acil doğalgaz arızalarına 7/24 müdahale ediyor; vana, hat ve bağlantı sorunlarını garantili şekilde onarıyoruz.',
        '{location} ilçesinde basınç düşmesi, tesisat kaçağı ve hat hasarı gibi sorunlara kırmadan tespit, noktasal onarım uyguluyoruz.',
        '{location} ve mahallelerinde doğalgaz kokusu, vanadan kaçak ve tesisat arızalarına aynı gün yerinde çözüm üretiyoruz.',
    ],
    'dogalgaz-kacak-tespiti': [
        '{location} bölgesinde elektronik gaz dedektörü ve akustik cihazlarla duvar kırmadan kaçak noktası tespiti yapıyoruz.',
        '{location} ilçesinde şüpheli gaz kokusu bildirimlerine en kısa sürede müdahale ederek güvenliği sağlıyoruz.',
        '{location} ve çevresinde termal kamera destekli kaçak tespiti sonrası aynı gün onarım imkânı sunuyoruz.',
    ],
    'kombi-montaji': [
        '{location} bölgesinde her marka kombi montajı, eski cihaz sökümü, baca bağlantısı ve devreye alma işlemlerini gerçekleştiriyoruz.',
        '{location} ilçesinde yeni kombi montajı öncesi tesisat uygunluk kontrolü ve gaz güvenlik testi yapıyoruz.',
        '{location} ve çevresinde kombi değişim projelerinde hızlı montaj ve kullanım eğitimi sağlıyoruz.',
    ],
    'kombi-bakimi': [
        '{location} bölgesinde yıllık kombi bakımı, brülör temizliği ve verim testi ile kışa hazırlık hizmeti veriyoruz.',
        '{location} ilçesinde periyodik bakım ile kombi ömrünü uzatıyor, enerji tüketimini düşürüyoruz.',
        '{location} ve mahallelerinde kış öncesi güvenlik kontrolü ve petek basınç ayarı yapıyoruz.',
    ],
    'kombi-tamiri': [
        '{location} bölgesinde sıcak su kesilmesi, petek ısıtmama, ateşleme hatası ve anakart arızalarına aynı gün tamir yapıyoruz.',
        '{location} ilçesinde ECA, Baymak, Demirdöküm, Vaillant ve tüm markalarda orijinal parça ile kombi onarımı sunuyoruz.',
        '{location} ve çevresinde kombi arıza kodu tespiti ve yerinde kalıcı çözüm için 7/24 servis hattımız açıktır.',
    ],
    'petek-temizligi': [
        '{location} bölgesinde makineli petek temizliği ile evin daha hızlı ve eşit ısınmasını sağlıyoruz.',
        '{location} ilçesinde petek tıkanıklığı ve çamur birikimi temizliği sonrası kombi yükünü azaltıyoruz.',
        '{location} ve çevresinde kimyasal flushing ile radyatör verimini artırıyor, ısınma maliyetini düşürüyoruz.',
    ],
};

function pickVariant<T>(key: string, items: T[]): T {
    const hash = key.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
    return items[hash % items.length];
}

export function getHighlightText(page: SeoPage): string {
  const regional = regionHighlights[page.locationRegion];
  return `${page.locationName} içindeki tüm mahallelere hızlı mobil servis yönlendirmesi yapıyoruz. ${regional}`;
}

export function getSecondaryParagraph(page: SeoPage): string {
    const variants = bodyVariants[page.serviceId] ?? [
        '{location} bölgesinde profesyonel, garantili ve aynı gün {service} hizmeti sunuyoruz.',
    ];
    const template = pickVariant(page.slug, variants);
    return template
        .replace(/\{location\}/g, page.locationName)
        .replace(/\{service\}/g, page.serviceName.toLowerCase());
}

export function getLocationFaqs(page: SeoPage) {
    return [
        {
            question: `${page.locationName} ${page.serviceName.toLowerCase()} için aynı gün servis var mı?`,
            answer: `Evet. ${page.locationName} ve ${regionLabels[page.locationRegion]} genelinde çağrınızdan sonra aynı gün içinde mobil ekibimizi yönlendiriyoruz. Acil durumlarda 7/24 ulaşabilirsiniz.`,
        },
        {
            question: `${page.locationName} bölgesinde fiyat nasıl belirleniyor?`,
            answer: `Keşif ve arıza tespiti sonrası yapılacak işlem size şeffaf şekilde bildirilir; onayınız olmadan işleme başlanmaz. Parça ve işçilik için 1 yıl garanti sunuyoruz.`,
        },
        {
            question: `${page.locationName}'da hangi markalarda hizmet veriyorsunuz?`,
            answer: `ECA, Baymak, Demirdöküm, Vaillant, Buderus, Bosch ve diğer tüm yaygın markalarda ${page.serviceName.toLowerCase()} hizmeti veriyoruz. Orijinal yedek parça kullanımı standart uygulamamızdır.`,
        },
    ];
}

export function getMetaDescription(page: SeoPage, serviceIntro: string): string {
    return `${page.locationName} ${page.serviceName.toLowerCase()} — 7/24 acil servis, aynı gün müdahale. ${serviceIntro} ${regionLabels[page.locationRegion]} | SM Mühendislik, MYK belgeli ekip.`;
}
