import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      // ✅ এখানে আপনার আসল Vercel লিংক দেওয়া হলো
      url: 'https://personal-portfolio-livid-psi-80.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
