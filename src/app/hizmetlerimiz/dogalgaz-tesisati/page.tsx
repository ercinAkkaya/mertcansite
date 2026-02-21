import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../service.module.css';

export const metadata: Metadata = {
    title: 'Doğalgaz Tesisatı | SM Mühendislik Çayırova Kocaeli',
    description: 'Proje çiziminden tesisat çekimine kadar tüm doğalgaz aşamalarında güvenli ve sertifikalı hizmet. Çayırova doğalgaz firması SM Mühendislik garantisiyle.',
    alternates: {
        canonical: 'https://www.smmhendislik.com/hizmetlerimiz/dogalgaz-tesisati',
    }
};

export default function DogalgazTesisatiPage() {
    return (
        <div className={styles.pageContainer}>
            <section className={styles.pageHeader}>
                <div className="container">
                    <h1 className={`${styles.pageTitle} animate-fade-in-up`}>Doğalgaz Tesisatı</h1>
                    <p className={`${styles.pageSubtitle} animate-fade-in-up animate-delay-1`}>
                        Güvenli, standartlara uygun projelendirme ve garantili tesisat montajı ile yaşam alanlarınız güvende.
                    </p>
                </div>
            </section>

            <section className="container relative">
                <div className={`${styles.mainContent} animate-fade-in-up animate-delay-2`}>
                    <div className={styles.contentWrapper}>

                        <div style={{ position: 'relative', width: '100%', height: '350px', marginBottom: '3rem', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(45deg, var(--color-primary-navy), var(--color-primary-blue))', opacity: 0.1, zIndex: 1 }}></div>
                            <Image
                                src="/images/hero_background.png"
                                alt="Doğalgaz Tesisatı Hizmeti"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>

                        <h2>Kocaeli ve Çayırova'da Profesyonel Doğalgaz Tesisatı Hizmeti</h2>
                        <p>
                            Doğalgaz, konforlu bir ısınma ve enerji kaynağı olmasının yanında, uzman eller tarafından kurulmadığında büyük riskler taşıyan bir sistemdir. <strong>SM Mühendislik</strong>, Kocaeli ve Çayırova bölgesindeki yetkili mühendislik firması olarak doğalgaz projelendirme ve tesisat çekim süreçlerini sıfır hata prensibiyle yönetmektedir.
                        </p>

                        <div className={styles.highlightBox}>
                            <p>Mühendislerimiz tarafından çizilen projeler gaz dağıtım şirketlerinin (İzgaz vs.) onay standartlarına tam uyumludur.</p>
                        </div>

                        <h3>Sürecimiz Nasıl İşliyor?</h3>
                        <ul>
                            <li><strong>Ücretsiz Keşif:</strong> Adresinize gelerek mekanın yapısına en uygun tesisat hattını belirliyoruz.</li>
                            <li><strong>Proje Çizimi ve Onay:</strong> Mühendis kadromuz tarafından hazırlanan projeler ilgili kurumlara sunularak onaylatılır.</li>
                            <li><strong>Tesisat Çekimi:</strong> Kaynaklı veya vidalı (paslanmaz çelik, bakır, vb.) kaliteli boru malzemeleriyle sistem kurulur.</li>
                            <li><strong>Gaz Açımı ve Kontrol:</strong> Sızdırmazlık testleri yapılır ve güvenle doğalgazınız kullanıma açılır.</li>
                        </ul>

                        <h3 style={{ marginTop: '3rem' }}>Sıkça Sorulan Sorular</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
                            <div style={{ background: 'var(--color-primary-light)', padding: '1.5rem', borderRadius: 'var(--radius-lg)' }}>
                                <h4 style={{ color: 'var(--color-primary-navy)', fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 700 }}>Doğalgaz tesisatı kaç günde çekilir?</h4>
                                <p style={{ color: 'var(--color-text-muted)', margin: 0, fontSize: '0.95rem' }}>Dairenin büyüklüğüne ve projenin detaylarına göre değişiklik göstermekle birlikte, standart bir dairenin tesisatı genellikle 1-2 iş günü içerisinde tamamlanmaktadır.</p>
                            </div>
                            <div style={{ background: 'var(--color-primary-light)', padding: '1.5rem', borderRadius: 'var(--radius-lg)' }}>
                                <h4 style={{ color: 'var(--color-primary-navy)', fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 700 }}>Proje çizimi ve gaz açımı ne kadar sürer?</h4>
                                <p style={{ color: 'var(--color-text-muted)', margin: 0, fontSize: '0.95rem' }}>Proje çizimi ve gaz dağıtım şirketinin (İzgaz vb.) onay süreçleri dahilinde gaz açımı ortalama 3 ile 7 iş günü arasında gerçekleşmektedir.</p>
                            </div>
                        </div>

                        <div className={styles.contentCta}>
                            <h3>Hemen Teklif ve Keşif İsteyin</h3>
                            <p>Siz de güvenilir bir doğalgaz tesisatı arıyorsanız bize ulaşın.</p>
                            <a href="tel:05545609954" className="btn btn-whatsapp" style={{ marginTop: '1rem', display: 'inline-flex', padding: '1rem 2.5rem', fontSize: '1.1rem', background: '#25D366' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" style={{ marginRight: '10px' }}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.878-.788-1.481-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" /></svg>
                                Ücretsiz Keşif İçin WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
