'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { services } from '@/lib/seoData';
import styles from './Header.module.css';

const navLinks = [
    { name: 'Ana Sayfa', path: '/' },
    { name: 'Hakkımızda', path: '/hakkimizda' },
    { name: 'Hizmet Bölgeleri', path: '/hizmet-bolgeleri' },
    { name: 'İletişim', path: '/iletisim' },
];

const servicesHubPath = '/hizmetlerimiz';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={`container ${styles.headerContainer}`}>
                <Link href="/" className={styles.logo}>
                    <span className={styles.logoSM}>SM</span>
                    <span className={styles.logoText}>Mühendislik</span>
                </Link>

                <nav className={styles.desktopNav}>
                    <ul className={styles.navList}>
                        {navLinks.slice(0, 2).map((link) => (
                            <li key={link.path}>
                                <Link href={link.path} className={styles.navLink}>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                        <li
                            className={styles.dropdownWrap}
                            onMouseEnter={() => setIsServicesOpen(true)}
                            onMouseLeave={() => setIsServicesOpen(false)}
                        >
                            <button
                                type="button"
                                className={styles.navLink}
                                aria-expanded={isServicesOpen}
                                aria-haspopup="true"
                            >
                                Hizmetlerimiz
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
                            </button>
                            {isServicesOpen && (
                                <ul className={styles.dropdown}>
                                    <li>
                                        <Link href={servicesHubPath}>Tüm Hizmetler</Link>
                                    </li>
                                    {services.map((srv) => (
                                        <li key={srv.id}>
                                            <Link href={srv.path}>{srv.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                        {navLinks.slice(2).map((link) => (
                            <li key={link.path}>
                                <Link href={link.path} className={styles.navLink}>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className={styles.ctaWrapper}>
                    <a href="tel:05545609954" className={`btn btn-primary ${styles.ctaButton}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                        Hemen Ara
                    </a>
                </div>

                <button
                    className={styles.mobileMenuBtn}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Menüyü Aç/Kapat"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {isMobileMenuOpen ? (
                            <path d="M18 6 6 18M6 6l12 12" />
                        ) : (
                            <path d="M4 12v0M4 6v0M4 18v0M8 12h12M8 6h12M8 18h12" />
                        )}
                    </svg>
                </button>
            </div>

            {isMobileMenuOpen && (
                <div className={styles.mobileNavOverlay}>
                    <nav className={styles.mobileNav}>
                        <ul className={styles.mobileNavList}>
                            {navLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        href={link.path}
                                        className={styles.mobileNavLink}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                            <li className={styles.mobileServicesTitle}>Hizmetlerimiz</li>
                            {services.map((srv) => (
                                <li key={srv.id}>
                                    <Link
                                        href={srv.path}
                                        className={styles.mobileSubLink}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {srv.name}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <a href="tel:05545609954" className={`btn btn-primary ${styles.mobileCta}`}>
                                    Hemen Ara: 0554 560 9954
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    );
}
