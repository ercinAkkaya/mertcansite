import type { Metadata } from 'next';
import Image from 'next/image';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Hakkımızda | SM Mühendislik | Kocaeli Doğalgaz Firması',
    description: 'SM Mühendislik Kocaeli, Çayırova bölgesinde yılların tecrübesiyle doğalgaz tesisatı ve kombi servisi hizmeti veren yetkili mühendislik firmasıdır.',
    alternates: {
        canonical: 'https://www.smmhendislik.com/hakkimizda',
    }
};

export default function HakkimizdaPage() {
    return (
        <div className={styles.pageContainer}>

            {/* HEADER SECTION */}
            <section className={styles.pageHeader}>
                <div className="container">
                    <h1 className={styles.pageTitle}>Hakkımızda</h1>
                    <p className={styles.pageSubtitle} style={{ color: 'rgba(255,255,255,0.8)' }}>
                        Tecrübemiz, uzman kadromuz ve kalite anlayışımızla Kocaeli'de güvenin adresi <strong>SM Mühendislik</strong>.
                    </p>
                </div>
            </section>

            {/* MAIN CONTENT */}
            <section className="container relative">
                <div className={styles.mainContent}>
                    <div className={styles.contentWrapper}>

                        <div className={styles.introSection}>
                            <div className={styles.introText}>
                                <h2>Biz Kimiz?</h2>
                                <p>
                                    <strong>SM Mühendislik</strong>, Kocaeli ve ağırlıklı olarak Çayırova bölgesinde doğalgaz tesisatı, kombi montajı, arıza tespiti ve bakım hizmetleri sunan öncü bir mühendislik firmasıdır. Kurulduğumuz günden bu yana, yaşam alanlarınızda maksimum güvenlik ve verimliliği sağlamak amacıyla çalışıyoruz.
                                </p>
                                <p>
                                    Sektördeki teknolojik gelişmeleri yakından takip ederek, kırmadan dökmeden cihazla kaçak tespiti gibi modern yöntemleri standart hizmetimiz haline getirdik. Alanında uzman, mesleki yeterlilik belgelerine (MYK) sahip tekniker kadromuzla, karşılaştığınız her türlü ısıtma ve gaz problemine "Aynı Gün Servis" prensibiyle müdahale ediyoruz.
                                </p>
                            </div>
                        </div>

                        <div className={styles.missionVision}>
                            <div className={styles.card}>
                                <h3>Misyonumuz</h3>
                                <p>
                                    Müşterilerimizin can ve mal güvenliğini en üst düzeyde koruyarak, ihtiyaçlarına en uygun, ekonomik ve uzun ömürlü doğalgaz-ısıtma çözümlerini sunmak. Hizmet verdiğimiz her projede şeffaf, dürüst ve garantili işçilik standartlarından asla taviz vermemek.
                                </p>
                            </div>

                            <div className={styles.card}>
                                <h3>Vizyonumuz</h3>
                                <p>
                                    Sürekli gelişen hizmet altyapımız ve uzman ekibimizle, sadece Çayırova'da değil tüm Kocaeli genelinde akla ilk gelen, en çok tavsiye edilen yetkili mühendislik ve doğalgaz firması olmak.
                                </p>
                            </div>
                        </div>

                        <div className={styles.statsSection}>
                            <div className={styles.statItem}>
                                <div className={styles.statValue}>10+</div>
                                <div className={styles.statLabel}>Yıllık Tecrübe</div>
                            </div>
                            <div className={styles.statItem}>
                                <div className={styles.statValue}>%100</div>
                                <div className={styles.statLabel}>Müşteri Memnuniyeti</div>
                            </div>
                            <div className={styles.statItem}>
                                <div className={styles.statValue}>7/24</div>
                                <div className={styles.statLabel}>Acil Teknik Servis</div>
                            </div>
                            <div className={styles.statItem}>
                                <div className={styles.statValue}>1 Yıl</div>
                                <div className={styles.statLabel}>İşçilik Garantisi</div>
                            </div>
                        </div>

                        <div className={styles.teamValues}>
                            <h3>SM Mühendislik Farkı</h3>

                            <div className={styles.valuesList}>
                                <div className={styles.valueItem}>
                                    <div className={styles.valueIcon}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                                    </div>
                                    <div className={styles.valueText}>
                                        <h4>Sertifikalı ve Yetkili Ekip</h4>
                                        <p>Tüm personelimiz gerekli belgelere sahiptir, yetkisiz hiçbir işlem yapılmaz.</p>
                                    </div>
                                </div>

                                <div className={styles.valueItem}>
                                    <div className={styles.valueIcon}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                    </div>
                                    <div className={styles.valueText}>
                                        <h4>Hızlı Tepki Süresi</h4>
                                        <p>Çayırova ve çevre ilçelerdeki çağrılara aynı gün içerisinde müdahale ederek mağduriyeti önlüyoruz.</p>
                                    </div>
                                </div>

                                <div className={styles.valueItem}>
                                    <div className={styles.valueIcon}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></svg>
                                    </div>
                                    <div className={styles.valueText}>
                                        <h4>Şeffaf Fiyatlandırma</h4>
                                        <p>Sürpriz maliyetlerle karşılaşmazsınız, yapılacak işlem ve ücreti önceden açıkça belirtilir.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}
