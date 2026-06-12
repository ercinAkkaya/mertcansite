import Link from 'next/link';
import styles from './Breadcrumbs.module.css';

type Crumb = { label: string; href?: string };

type BreadcrumbsProps = {
    items: Crumb[];
    variant?: 'light' | 'dark';
};

export default function Breadcrumbs({ items, variant = 'dark' }: BreadcrumbsProps) {
    return (
        <nav className={`${styles.breadcrumbs} ${variant === 'light' ? styles.light : ''}`} aria-label="Breadcrumb">
            <ol className={styles.list}>
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;
                    return (
                        <li key={`${item.label}-${index}`} className={styles.item}>
                            {item.href && !isLast ? (
                                <Link href={item.href}>{item.label}</Link>
                            ) : (
                                <span aria-current={isLast ? 'page' : undefined}>{item.label}</span>
                            )}
                            {!isLast && <span className={styles.separator}>/</span>}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
