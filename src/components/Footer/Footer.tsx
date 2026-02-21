import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContainer}`}>

                {/* Company Info */}
                <div className={styles.footerCol}>
                    <Link href="/" className={styles.logo}>
                        <span className={styles.logoSM}>SM</span>
                        <span className={styles.logoText}>Mühendislik</span>
                    </Link>
                    <p className={styles.description}>
                        Çayırova ve Kocaeli çevresinde profesyonel doğalgaz tesisatı, kombi montajı ve arıza tespit hizmetleri sunan yetkili mühendislik firmasıdır.
                    </p>
                    <div className={styles.badges}>
                        <span className={styles.badge}>7/24 Servis</span>
                        <span className={styles.badge}>Garantili İşçilik</span>
                    </div>
                </div>

                {/* Quick Links */}
                <div className={styles.footerCol}>
                    <h3 className={styles.colTitle}>Hızlı Menü</h3>
                    <ul className={styles.linkList}>
                        <li><Link href="/">Ana Sayfa</Link></li>
                        <li><Link href="/hakkimizda">Hakkımızda</Link></li>
                        <li><Link href="/cayirova-dogalgaz-tamiri">Doğalgaz Tamiri</Link></li>
                        <li><Link href="/iletisim">İletişim</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className={styles.footerCol}>
                    <h3 className={styles.colTitle}>İletişim Bilgileri</h3>
                    <ul className={styles.contactList}>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            <span>
                                <strong>Mertcan Nar:</strong> <br />
                                <a href="tel:05545609954">0554 560 9954</a>
                            </span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            <span>
                                <strong>Sümer Kapusız:</strong> <br />
                                <a href="tel:05384052206">0538 405 2206</a>
                            </span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                            <span>Çayırova, Kocaeli</span>
                        </li>
                    </ul>
                </div>

            </div>

            <div className={styles.footerBottom}>
                <div className="container">
                    <p>© {currentYear} SM Mühendislik Kocaeli. Tüm hakları saklıdır.</p>
                </div>
            </div>
        </footer>
    );
}
