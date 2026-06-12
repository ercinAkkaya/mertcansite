import { MetadataRoute } from 'next';
import { seoPages, services } from '@/lib/seoData';
import { baseUrl } from '@/lib/siteConfig';

export const dynamic = 'force-static';

const staticPages: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[0]['changeFrequency'] }[] = [
    { path: '', priority: 1, changeFrequency: 'daily' },
    { path: '/hakkimizda', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/iletisim', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/hizmet-bolgeleri', priority: 0.95, changeFrequency: 'weekly' },
    { path: '/hizmetlerimiz', priority: 0.95, changeFrequency: 'weekly' },
    { path: '/cayirova-dogalgaz-tamiri', priority: 0.9, changeFrequency: 'weekly' },
    ...services.map((s) => ({
        path: s.path,
        priority: 0.9,
        changeFrequency: 'weekly' as const,
    })),
];

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    const staticEntries = staticPages.map((page) => ({
        url: `${baseUrl}${page.path}`,
        lastModified: now,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
    }));

    const dynamicEntries = seoPages.map((page) => ({
        url: `${baseUrl}/${page.slug}`,
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: page.priority === 1 ? 0.85 : 0.75,
    }));

    return [...staticEntries, ...dynamicEntries];
}
