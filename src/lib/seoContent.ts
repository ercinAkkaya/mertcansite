import type { LocationRegion } from './seoData';

type ServiceContent = {
    intro: string;
    benefits: string[];
    faqs: { question: string; answer: string }[];
};

const regionContext: Record<LocationRegion, string> = {
    kocaeli:
        'Kocaeli bölgesinde İZGAZ altyapısına uygun, standartlara bağlı ve belgeli mühendislik hizmeti sunuyoruz.',
    'istanbul-anadolu':
        'İstanbul Anadolu Yakası\'nda İGDAŞ mevzuatına uygun, hızlı mobil servis ekibimizle aynı gün müdahale sağlıyoruz.',
    'istanbul-avrupa':
        'İstanbul Avrupa Yakası\'nın tüm ilçelerine genişleyen servis ağımızla 7/24 teknik destek veriyoruz.',
    sakarya:
        'Sakarya genelinde ADAGAZ altyapısına uygun tesisat, tamir ve kombi servisi hizmeti veriyoruz.',
    ankara:
        'Ankara\'da BAŞKENTGAZ mevzuatına uygun, belgeli mühendislik ve 7/24 acil servis desteği sağlıyoruz.',
};

export const serviceContent: Record<string, ServiceContent> = {
    'dogalgaz-tesisati': {
        intro:
            'Yeni bina tesisatı, proje çizimi, hat çekimi ve gaz açma süreçlerinde A\'dan Z\'ye mühendislik desteği sağlıyoruz.',
        benefits: [
            'İGDAŞ / İZGAZ / BAŞKENTGAZ / ADAGAZ onay süreçlerinde evrak ve proje desteği',
            'Standartlara uygun boru hattı ve vana montajı',
            'Basınç testi ve sızdırmazlık kontrolü',
            'Konut, iş yeri ve sanayi tesisatı deneyimi',
        ],
        faqs: [
            {
                question: 'Doğalgaz tesisatı ne kadar sürer?',
                answer:
                    'Daire büyüklüğüne göre değişmekle birlikte standart bir konut tesisatı genellikle 1–2 gün içinde tamamlanır. Keşif sonrası net süre paylaşılır.',
            },
            {
                question: 'Gaz açma işlemini siz mi yapıyorsunuz?',
                answer:
                    'Tesisat tamamlandıktan sonra basınç testi ve evrak süreçlerini yönetiyoruz; gaz açma randevusu için gerekli hazırlıkları birlikte planlıyoruz.',
            },
        ],
    },
    'dogalgaz-tamiri': {
        intro:
            'Tesisat arızaları, vana sorunları, basınç düşüşleri ve hat hasarlarında kırmadan tespit, garantili onarım hizmeti veriyoruz.',
        benefits: [
            'Acil doğalgaz arızalarına 7/24 müdahale',
            'Orijinal parça ve sertifikalı kaynak işçiliği',
            'Kırmadan dökmeden noktasal onarım',
            '1 yıl işçilik garantisi',
        ],
        faqs: [
            {
                question: 'Doğalgaz kokusu alıyorum, ne yapmalıyım?',
                answer:
                    'Önce gaz vanasını kapatın, elektrik düğmelerine dokunmayın, pencere açın ve hemen bizi arayın. Ekip en kısa sürede kaçak tespiti için yönlendirilir.',
            },
            {
                question: 'Tamir sonrası garanti veriyor musunuz?',
                answer:
                    'Evet. Yapılan tüm doğalgaz tamir işlemlerinde 1 yıl firma garantisi sunuyoruz.',
            },
        ],
    },
    'dogalgaz-kacak-tespiti': {
        intro:
            'Elektronik gaz dedektörü ve akustik dinleme cihazlarıyla duvar ve zemin kırmadan kaçak noktasını tespit ediyoruz.',
        benefits: [
            'Kırmadan dökmeden hassas kaçak tespiti',
            'Termal kamera destekli kontrol',
            'Tespit sonrası aynı gün onarım imkânı',
            'Raporlama ve güvenlik önerileri',
        ],
        faqs: [
            {
                question: 'Kaçak tespiti evi kirletir mi?',
                answer:
                    'Hayır. Modern cihazlarımızla kaçağın tam noktasını bulduğumuz için gereksiz kırım yapılmaz; yalnızca arızalı bölgeye müdahale edilir.',
            },
            {
                question: 'Tespit ne kadar sürer?',
                answer:
                    'Ortalama 30–60 dakika içinde kaçak noktası belirlenir; ardından onarım planı ve fiyat bilgisi paylaşılır.',
            },
        ],
    },
    'kombi-montaji': {
        intro:
            'Her marka kombi için söküm, montaj, baca bağlantısı, tesisat uyumu ve devreye alma işlemlerini tek elden yönetiyoruz.',
        benefits: [
            'Tüm marka ve modellerde montaj',
            'Eski kombi sökümü ve atık bertarafı',
            'Baca ve havalandırma kontrolü',
            'Montaj sonrası test ve kullanım eğitimi',
        ],
        faqs: [
            {
                question: 'Kombi montajı aynı gün yapılır mı?',
                answer:
                    'Stok ve randevu durumuna göre çoğu montaj aynı gün veya ertesi gün tamamlanır.',
            },
            {
                question: 'Hangi markaları monte ediyorsunuz?',
                answer:
                    'ECA, Baymak, Demirdöküm, Vaillant, Buderus, Bosch, Viessmann ve diğer tüm yaygın markalarda montaj yapıyoruz.',
            },
        ],
    },
    'kombi-bakimi': {
        intro:
            'Yıllık periyodik bakım, brülör temizliği, filtre değişimi ve verim testi ile kombinizin ömrünü uzatıyoruz.',
        benefits: [
            'Enerji tasarrufu ve yüksek verim',
            'Kış öncesi güvenlik kontrolü',
            'Petek ve tesisat basınç ayarı',
            'Bakım sonrası servis raporu',
        ],
        faqs: [
            {
                question: 'Kombi bakımı ne sıklıkla yapılmalı?',
                answer:
                    'Üretici önerisi ve güvenlik açısından yılda en az bir kez, ideal olarak kış öncesi bakım yaptırmanız önerilir.',
            },
            {
                question: 'Bakım sırasında parça değişimi gerekir mi?',
                answer:
                    'Kontrol sonrası aşınmış parçalar (filtre, conta vb.) tespit edilirse onayınızla değiştirilir; şeffaf fiyat sunulur.',
            },
        ],
    },
    'kombi-tamiri': {
        intro:
            'Sıcak su kesilmesi, petek ısıtmama, ateşleme hatası, basınç düşmesi ve anakart arızalarında aynı gün yerinde tamir.',
        benefits: [
            'Orijinal yedek parça stoğu',
            'Anakart, pompa, sensör ve vana onarımı',
            'Arıza kodu tespiti ve kalıcı çözüm',
            '1 yıl parça ve işçilik garantisi',
        ],
        faqs: [
            {
                question: 'Kombi tamiri evde mi yapılır?',
                answer:
                    'Arızaların büyük çoğunluğu yerinde, ortalama 1 saat içinde çözülür. Nadir durumlarda parça atölyeye alınabilir.',
            },
            {
                question: 'Hangi arıza kodlarına bakıyorsunuz?',
                answer:
                    'F28, E01, E02 ve tüm marka ekran kodlarında uzman ekibimiz teşhis koyup onarım yapar.',
            },
        ],
    },
    'petek-temizligi': {
        intro:
            'Makineli petek temizliği ve kimyasal flushing ile ısınma verimini artırıyor, enerji faturalarını düşürüyoruz.',
        benefits: [
            'Profesyonel makineli petek yıkama',
            'Tıkanıklık ve çamur temizliği',
            'Daha hızlı ve eşit ısınma',
            'Kombi yükünü azaltarak cihaz ömrünü uzatma',
        ],
        faqs: [
            {
                question: 'Petek temizliği gerçekten fark eder mi?',
                answer:
                    'Evet. Tıkalı peteklerde ısınma %30–40 düşebilir; temizlik sonrası evin daha hızlı ve eşit ısınması sağlanır.',
            },
            {
                question: 'Temizlik ne kadar sürer?',
                answer:
                    'Daire büyüklüğüne göre 2–4 saat sürer; işlem sırasında evde kalabilirsiniz.',
            },
        ],
    },
};

export function getRegionContext(region: LocationRegion) {
    return regionContext[region];
}

export function getServiceContent(serviceId: string): ServiceContent {
    return (
        serviceContent[serviceId] ?? {
            intro: 'Profesyonel, garantili ve aynı gün servis hizmeti sunuyoruz.',
            benefits: ['7/24 destek', 'MYK belgeli ekip', 'Şeffaf fiyat', '1 yıl garanti'],
            faqs: [
                {
                    question: 'Aynı gün servis mümkün mü?',
                    answer: 'Evet, çağrınızdan sonra en yakın mobil ekibimiz aynı gün yönlendirilir.',
                },
            ],
        }
    );
}
