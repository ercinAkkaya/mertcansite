import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  const services = [
    {
      title: 'Doğalgaz Tesisatı',
      desc: 'Güvenli ve standartlara uygun projelendirme ve tesisat çekimi.',
      link: '/hizmetlerimiz/dogalgaz-tesisati',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /><path d="M12 12v9" /><path d="m8 17 4 4 4-4" /></svg>
      )
    },
    {
      title: 'Doğalgaz Kaçak Tespiti',
      desc: 'İleri teknoloji cihazlarla kırmadan dökmeden anında kaçak tespiti.',
      link: '/hizmetlerimiz/dogalgaz-kacak-tespiti',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
      )
    },
    {
      title: 'Kombi Montajı',
      desc: 'Tüm marka ve modellerde yetkili ve sertifikalı ustalarla montaj.',
      link: '/hizmetlerimiz/kombi-montaji',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
      )
    },
    {
      title: 'Kombi Bakımı',
      desc: 'Kışa girmeden detaylı petek ve kombi bakımı, yüksek verim garantisi.',
      link: '/hizmetlerimiz/kombi-bakimi',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
      )
    },
    {
      title: 'Kombi Tamiri',
      desc: 'Orijinal yedek parça ve alanında uzman ekiple aynı gün sorun çözümü.',
      link: '/hizmetlerimiz/kombi-tamiri',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><path d="m10 13-2 2 2 2" /><path d="m14 17 2-2-2-2" /></svg>
      )
    },
    {
      title: 'Petek Temizliği',
      desc: 'Özel makinalar ve koruyucu kimyasallarla tam detaylı radyatör temizliği.',
      link: '/hizmetlerimiz/kombi-bakimi',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20" /><path d="M6 10V6a4 4 0 0 1 5-2 4 4 0 0 1 5 2v4" /><path d="M6 14v4a4 4 0 0 0 5 2 4 4 0 0 0 5-2v-4" /></svg>
      )
    }
  ];

  return (
    <div className={styles.main}>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <Image
          src="/images/hero_background.png"
          alt="Çayırova Doğalgaz Tamiri ve Kombi Servisi"
          priority
          fill
          quality={100}
          className={styles.heroBg}
        />
        <div className={styles.heroOverlay}></div>

        <div className={`container ${styles.heroContent}`}>
          <div className="animate-fade-in-up">
            <span className={styles.heroBadge}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'var(--color-success)' }}></span>
              7/24 Aktif Çayırova Servisi
            </span>
          </div>

          <h1 className={`${styles.heroTitle} animate-fade-in-up animate-delay-1`}>
            Isınma ve Doğalgaz Sorunlarına <span>Kalıcı Çözüm.</span>
          </h1>

          <p className={`${styles.heroDesc} animate-fade-in-up animate-delay-2`}>
            Kocaeli genelinde yılların tecrübesi, MYK belgeli uzman kadro ve son teknoloji ekipmanlarla garantili tesisat, kaçak tespiti ve kombi servis hizmeti sunuyoruz.
          </p>

          <div className={`${styles.heroActions} animate-fade-in-up animate-delay-3`}>
            <a href="tel:05545609954" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.2rem' }}>
              Acil Servis Çağır
            </a>
            <a href="https://wa.me/905545609954" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ padding: '1rem 2rem', fontSize: '1.2rem' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.878-.788-1.481-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" /></svg>
              WhatsApp
            </a>
          </div>

          <div className={`${styles.statsRow} animate-fade-in-up animate-delay-3`}>
            <div className={styles.statItem}>
              <span className={styles.statValue}>10+</span>
              <span className={styles.statLabel}>Yıllık Sektör Tecrübesi</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>2K+</span>
              <span className={styles.statLabel}>Mutlu Müşteri</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>20+</span>
              <span className={styles.statLabel}>MYK Belgeli Uzman</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>%100</span>
              <span className={styles.statLabel}>Garantili İşçilik</span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES ROW */}
      <section className={styles.features}>
        <div className="container">
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
              </div>
              <h3 className={styles.featureTitle}>7/24 Kesintisiz</h3>
              <p className={styles.featureDesc}>Günün her saati acil doğalgaz ve kombi arızaları için ekibimize ulaşabilirsiniz.</p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
              </div>
              <h3 className={styles.featureTitle}>Aynı Gün Servis</h3>
              <p className={styles.featureDesc}>Çağrılarınıza aynı gün içinde geri dönüş yapıyor ve sorunu yerinde çözüyoruz.</p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              </div>
              <h3 className={styles.featureTitle}>1 Yıl Garanti</h3>
              <p className={styles.featureDesc}>Yapılan tüm tamir, bakım ve yedek parça işlemlerinde 1 yıla kadar firma garantisi.</p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
              </div>
              <h3 className={styles.featureTitle}>Yetkili Personel</h3>
              <p className={styles.featureDesc}>Tüm işlemler, MYK Mesleki Yeterlilik Belgesine sahip profesyonel ustalarımızca yapılır.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="section bg-pattern-dot">
        <div className="container">
          <div className={styles.aboutRow}>
            <div className={styles.aboutImageWrapper}>
              <div className={styles.imageDecoration}></div>
              <Image
                src="/images/service_van.png"
                alt="SM Mühendislik Servis Aracı"
                width={600}
                height={400}
                quality={90}
                className={styles.aboutImage}
              />
            </div>
            <div className={styles.aboutContent}>
              <h2 className="text-navy">Profesyonel Mimari, <br /><span className="text-gradient">Kalıcı Çözümler</span></h2>
              <p className="text-muted" style={{ fontSize: '1.1rem' }}>
                <strong>SM Mühendislik</strong>, Kocaeli ve Çayırova ilçesinde doğalgaz tesisatı, kaçak tespiti,
                kombi montajı ve arıza onarımı konularında uzmanlaşmış yetkili bir kuruluştur.
                Amacımız, yapılarınızı teknolojik donanımlı araçlarımız ve kalifiye ekibimizle en güvenli standartlara taşımaktır.
              </p>
              <ul style={{ margin: '2rem 0', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary-navy)', fontWeight: 600 }}>
                  <svg style={{ color: 'var(--color-success)' }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Bilgisayarlı Cihazlarla Kırmadan Dökmeden Tespit
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary-navy)', fontWeight: 600 }}>
                  <svg style={{ color: 'var(--color-success)' }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Yüksek Standartlı Orijinal Yedek Parça Kullanımı
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary-navy)', fontWeight: 600 }}>
                  <svg style={{ color: 'var(--color-success)' }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Şeffaf Fiyatlandırma ve Ön Bilgilendirme
                </li>
              </ul>
              <Link href="/hakkimizda" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                Biz Kimiz? Detaylı Oku &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section section-light">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2 className="text-navy">Nasıl Çalışıyoruz?</h2>
            <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>
              Sorunsuz, hızlı ve güvenilir bir hizmet deneyimi için kurduğumuz sistemli çalışma prensibimiz.
            </p>
          </div>

          <div className={styles.processGrid}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>1</div>
              <h3 className={styles.stepTitle}>Randevu & Keşif</h3>
              <p className="text-muted">Çağrı merkezimize veya WhatsApp hattımıza ulaşın. Aynı gün içerisinde teknisyenlerimiz adresinize yönlendirilsin.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>2</div>
              <h3 className={styles.stepTitle}>Tespit & Fiyatlama</h3>
              <p className="text-muted">Son model cihazlarımızla arıza noktası tam olarak bulunur, yapılacak işlem ve şeffaf tutar size sunulur.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>3</div>
              <h3 className={styles.stepTitle}>Garantili Onarım</h3>
              <p className="text-muted">Onayınızın ardından işlem uzman ellerce gerçekleştirilir, test edilerek tarafınıza 1 yıl garantili teslim edilir.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW EXTENDED */}
      <section className="section bg-pattern-grid">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2 className="text-navy">Uzmanlık Alanlarımız</h2>
            <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>
              İhtiyacınıza yönelik, garantili ve modern mühendislik standartlarına uygun hizmet yelpazemiz.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div key={index} className={styles.serviceCardExt}>
                <div className={styles.serviceImage}>
                  {service.icon}
                </div>
                <div className={styles.serviceBody}>
                  <h3 className={styles.featureTitle}>{service.title}</h3>
                  <p className={styles.featureDesc} style={{ marginBottom: '1.5rem' }}>{service.desc}</p>
                  <Link href={service.link} className="text-primary" style={{ fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    İncele <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SLIDER */}
      <section className="section section-light">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2 className="text-navy">Müşterilerimiz Ne Diyor?</h2>
            <p className="text-muted">Kocaeli bölgesinde binlerce yüzü gülen müşterimizden bazıları.</p>
          </div>

          <div className={styles.testimonialSlider}>
            <div className={styles.testimonialTrack}>
              {[
                { name: "Ahmet K.", text: "Gece 11'de kombimiz kaloriferleri ısıtmamaya başladı. Aradık, sağ olsunlar 30 dakikada gelip anakartı onararak sorunu çözdüler. Çok profesyoneller." },
                { name: "Merve S.", text: "Doğalgaz kokusu alıyorduk, kırmadan dökmeden cihazla ufacık bir rekor arızası olduğunu buldular. Evimizi harabeye çevirmeden hallettikleri için teşekkürler." },
                { name: "Kemal Y.", text: "Yeni eve taşınırken kombi değişimi montajı için SM Mühendislik ile çalıştım. İZGAZ onayı süreçlerini bile onlar halletti. Gözü kapalı itimat edebilirsiniz." },
                { name: "Selin B.", text: "Petek temizliği için çağırdık, ev gerçekten daha iyi ısınmaya başladı. Gelen ustalar çok kibar ve temiz çalıştılar." },
                { name: "Turgut M.", text: "Darıca'daki restoranımızın devasa tesisat sorununu aynı gün içinde çözüp işimizi kurtardılar. Ekiplerine %100 güvenebilirsiniz." },
                // Duplicate for seamless loop
                { name: "Ahmet K.", text: "Gece 11'de kombimiz kaloriferleri ısıtmamaya başladı. Aradık, sağ olsunlar 30 dakikada gelip anakartı onararak sorunu çözdüler. Çok profesyoneller." },
                { name: "Merve S.", text: "Doğalgaz kokusu alıyorduk, kırmadan dökmeden cihazla ufacık bir rekor arızası olduğunu buldular. Evimizi harabeye çevirmeden hallettikleri için teşekkürler." },
                { name: "Kemal Y.", text: "Yeni eve taşınırken kombi değişimi montajı için SM Mühendislik ile çalıştım. İZGAZ onayı süreçlerini bile onlar halletti. Gözü kapalı itimat edebilirsiniz." },
                { name: "Selin B.", text: "Petek temizliği için çağırdık, ev gerçekten daha iyi ısınmaya başladı. Gelen ustalar çok kibar ve temiz çalıştılar." },
                { name: "Turgut M.", text: "Darıca'daki restoranımızın devasa tesisat sorununu aynı gün içinde çözüp işimizi kurtardılar. Ekiplerine %100 güvenebilirsiniz." }
              ].map((t, i) => (
                <div key={i} className={styles.testimonialCard}>
                  <svg className={styles.quoteIcon} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                  <div className={styles.stars}>
                    {[...Array(5)].map((_, idx) => <svg key={idx} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>)}
                  </div>
                  <p className={styles.testimonialText}>"{t.text}"</p>
                  <div className={styles.clientName}>— {t.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className={styles.ctaBanner}>
        <div className={`container ${styles.ctaBannerWrap}`}>
          <h2 className={styles.ctaTitle}>Sorununuz mu var? Hemen Müdahale Edelim.</h2>
          <p className={styles.ctaDesc}>
            Çayırova doğalgaz ustası mı arıyorsunuz? Aynı gün servis ve ücretsiz keşif avantajından yararlanmak için bize ulaşın.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="tel:05545609954" className="btn" style={{ background: 'var(--color-white)', color: 'var(--color-primary-blue)', fontSize: '1.2rem', boxShadow: 'var(--shadow-lg)' }}>
              Mertcan Nar: 0554 560 9954
            </a>
            <a href="tel:05384052206" className="glass btn" style={{ color: 'var(--color-white)', fontSize: '1.2rem' }}>
              Sümer Kapusız: 0538 405 2206
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
