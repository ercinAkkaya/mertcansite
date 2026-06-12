import Image from 'next/image';
import styles from './HeroBanner.module.css';

type HeroBannerProps = {
    alt: string;
    src?: string;
    className?: string;
    height?: string;
};

export default function HeroBanner({ alt, src, className = '', height = '350px' }: HeroBannerProps) {
    return (
        <div
            className={`${styles.banner} ${src ? styles.bannerWithImage : ''} ${className}`}
            style={{ height }}
            role={src ? undefined : 'img'}
            aria-label={src ? undefined : alt}
        >
            {src ? (
                <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(max-width: 800px) 100vw, 800px"
                    className={styles.bannerImage}
                    priority
                />
            ) : null}
        </div>
    );
}
