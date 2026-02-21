import React from 'react';
import styles from './StickyContact.module.css';

export default function StickyContact() {
    const whatsappNumber = '905545609954';
    const phoneNumber = '05545609954';

    const whatsappMessage = 'Merhaba, doğalgaz/kombi hizmetiniz hakkında bilgi almak istiyorum.';
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <div className={styles.stickyContainer}>
            <div className={styles.buttonGroup}>
                {/* WhatsApp Button */}
                <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.button} ${styles.btnWhatsapp}`}
                    aria-label="WhatsApp'tan Bize Ulaşın"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21.11 2.89a10 10 0 0 0-14.14 0L4.54 5.31A10 10 0 0 0 2 12a9.9 9.9 0 0 0 1.52 4.67l-1.39 5.21 5.34-1.4A9.9 9.9 0 0 0 12 22a10 10 0 0 0 7.07-2.89A10 10 0 0 0 22 12a10 10 0 0 0-2.89-7.11M16.5 15.65c-.24.7-.84 1.34-1.74 1.55a4.7 4.7 0 0 1-2.92-.35c-2.3-1.01-4-2.88-5.35-5.2A5.19 5.19 0 0 1 5.76 8.9c0-.6.28-1 .73-1.28.29-.19.53-.18.84.05.3.23.58.64.93 1.13.32.48.51 1 .59 1.14.28.5-.07.95-.36 1.35-.12.16-.25.3-.39.42-.06.06-.11.12-.04.22.63 1.12 1.48 2 2.54 2.6.14.08.2.04.27-.04.14-.15.29-.32.47-.5.35-.35.8-.3 1.25-.09.6.28 1.4.67 1.83.89.28.14.44.22.5.34.1.2.1.58-.14 1.28" />
                    </svg>
                    <span className={styles.text}>WhatsApp</span>
                </a>

                {/* Call Button */}
                <a
                    href={`tel:${phoneNumber}`}
                    className={`${styles.button} ${styles.btnCall}`}
                    aria-label="Hemen Arayın"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span className={styles.text}>Hemen Ara</span>
                </a>
            </div>
        </div>
    );
}
