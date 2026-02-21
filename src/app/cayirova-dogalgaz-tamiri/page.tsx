import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Çayırova Doğalgaz Tamiri | Aynı Gün Servis | SM Mühendislik',
    description: 'Çayırova doğalgaz tamiri, garantili kombi servisi ve tesisat onarımı. Kocaeli doğalgaz tamircisi arayanlar için yetkili ve sertifikalı ustalarla 7/24 hizmet.',
    alternates: {
        canonical: 'https://www.smmhendislik.com/cayirova-dogalgaz-tamiri',
    }
};

export default function CayirovaDogalgazTamiriPage() {
    return (
        <div className={styles.pageContainer}>

            {/* HEADER SECTION */}
            <section className={styles.pageHeader}>
                <div className="container">
                    <h1 className={styles.pageTitle}>Çayırova Doğalgaz Tamiri ve Kombi Servisi</h1>
                    <p className={styles.pageSubtitle}>
                        Kocaeli'nin Çayırova bölgesinde, acil doğalgaz tesisat arızaları, kaçak tespiti ve kombi tamirinde
                        Garantili İşçilik ve Aynı Gün Servis ile yanınızdayız.
                    </p>
                </div>
            </section>

            {/* ARTICLE CONTENT */}
            <section className="container relative">
                <div className={styles.mainContent}>
                    <div className={styles.contentWrapper}>

                        <p>
                            Ev ve iş yerlerinizdeki doğalgaz sistemlerinde meydana gelebilecek en ufak bir sızıntı, arıza veya tesisat problemi yaşam alanlarınızın güvenliğini doğrudan tehlikeye atar. <strong>SM Mühendislik</strong> olarak, <strong>Çayırova doğalgaz tamiri</strong> denilince akla ilk gelen garantili teknik servislerden biri olmanın gururunu yaşıyoruz. Firmamız, kombi bakımı, radyatör temizliği, tesisat yenileme ve gaz kaçağı tespiti gibi tüm doğalgaz ihtiyaçlarınıza <strong>Kocaeli doğalgaz tamircisi</strong> olarak 7 gün 24 saat profesyonel çözüm sunmaktadır.
                        </p>

                        <div className={styles.highlightBox}>
                            <p>Müdahale Ettiğimiz Doğalgaz Arızalarında Önceliğimiz "%100 Güvenlik ve Garantili İşçilik"tir. Acil durumlar için bize hemen ulaşın.</p>
                        </div>

                        <h2>Çayırova Doğalgaz Ustası ve Çözüm Sürecimiz</h2>
                        <p>
                            Doğalgaz kaçağı şüphesi duyduğunuzda yapmanız gereken ilk şey doğalgaz vanalarını kapatmak ve alanı havalandırmaktır. Ardından hiç vakit kaybetmeden sertifikalı bir <strong>Çayırova doğalgaz ustası</strong> ile iletişime geçmelisiniz. SM Mühendislik bünyesindeki tüm çalışma arkadaşlarımız Mesleki Yeterlilik Kurumu (MYK) onaylı belgelere sahip, alanında tecrübeli teknikerlerdir.
                        </p>

                        <p>
                            Servis talebiniz bize ulaştıktan sonra <strong>aynı gün servis Çayırova</strong> prensibimiz gereğince en yakın ekibimiz adresinize yönlendirilir. Yüksek hassasiyetli gaz detektörlerimizle kırma ve dökme yapmadan kaçağın noktasal olarak yerini belirliyor, gerekli boru veya conta değişimini anında gerçekleştiriyoruz.
                        </p>

                        <h3>Kocaeli Doğalgaz Firması Olarak Verdiğimiz Başlıca Hizmetler</h3>
                        <ul>
                            <li><strong>Doğalgaz Kaçak Tespiti:</strong> Teknolojik cihazlarla noktasal gaz sızıntısı taraması.</li>
                            <li><strong>Kombi Servisi ve Tamiri:</strong> Her marka ve modele uygun yedek parça desteği ile <strong>Çayırova kombi servisi</strong> imkanı.</li>
                            <li><strong>Tesisat Proje ve Montaj:</strong> Yeni doğalgaz boru hattı döşenmesi, ocak dönüşümü ve petek temizliği işlemleri.</li>
                            <li><strong>Kombi Bakımı:</strong> Kış aylarına girmeden enerji tasarrufu ve verim için periyodik kombi bakımları.</li>
                        </ul>

                        <h2>Neden Bizi Tercih Etmelisiniz?</h2>
                        <p>
                            Doğalgaz ile ilgili yapılan en büyük teknik hatalardan biri, yetkisiz ve belgesiz kişilere işlem yaptırmaktır. <strong>Doğalgaz tesisat firması Çayırova</strong> çevresinde lisanssız işlem yapan kişilerin sebep olduğu maddi ve manevi zararlar telafi edilemez boyutlara ulaşabilir. SM Mühendislik olarak şeffaf fiyatlandırma, zamanında teslimat ve %100 orijinal yedek parça kullanarak güveninizi kazanıyoruz.
                        </p>

                        <div className={styles.contentCta}>
                            <h3>Acil Doğalgaz Tamirine mi İhtiyacınız Var?</h3>
                            <p>Hemen şimdi bizi arayarak aynı gün servis garantimizden faydalanın.</p>
                            <a href="tel:05545609954" className="btn btn-whatsapp" style={{ marginTop: '1rem', display: 'inline-flex', padding: '0.75rem 2rem' }}>
                                Hemen Ara: 0554 560 9954
                            </a>
                        </div>

                        <h2>Sıkça Sorulan Sorular (SSS)</h2>

                        <h3>1. Kombimde "Reset" (Yeniden başlatma) yapmama rağmen hata kodu gitmiyor, ne yapmalıyım?</h3>
                        <p>Kombiniz ardı ardına reset atmanıza rağmen düzelmiyorsa anakart, fan motoru ya da gaz valfi arızası yaşanıyor olabilir. Donanımsal arızalarda kendiniz müdahale etmemeli, profesyonel <strong>Çayırova kombi servisi</strong> ekiplerini çağırmalısınız.</p>

                        <h3>2. Doğalgaz kokusu alıyorum, tesisata kim müdahale edebilir?</h3>
                        <p>Kokuyu hissettiğiniz anda pencereleri açıp ortamı havalandırın ve doğalgaz cihazlarını kapalı tutun. 187 Doğalgaz Acil hattına haber vermeli ve lokal onarım için belgeli <strong>Kocaeli doğalgaz tamircisi</strong> ekibimiz ile (SM Mühendislik) derhal irtibat kurmalısınız.</p>

                        <h3>3. Çayırova bölgesine ne kadar sürede geliyorsunuz?</h3>
                        <p>Gezici araçlarımız Çayırova / Kocaeli bölgesinde aktif olarak çalışmaktadır. Çağrı merkezimize gelen ihbarın aciliyetine (gaz kaçağı vs.) göre aynı gün, genellikle birkaç saat içerisinde kapınızda oluyoruz.</p>

                    </div>
                </div>
            </section>

        </div>
    );
}
