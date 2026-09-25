import { getCollection } from 'astro:content';
import { combos } from '../data/combos';

const site = 'https://drafttodesign.com';

const staticPages = [
  '/',
  '/about/',
  '/contact/',
  '/disclaimer/',
  '/faq/',
  '/portfolio/',
  '/pricing/',
  '/privacy-policy/',
  '/process/',
  '/terms-of-service/',
  '/blog/',
];

const slugOf = (e: { id: string }) => e.id.replace(/\.md$/, '');

export async function GET() {
  const urls: string[] = [...staticPages];

  const services = await getCollection('services');
  for (const s of services) urls.push(`/services/${slugOf(s)}/`);

  const states = await getCollection('states');
  const cities = await getCollection('cities');
  const cityBySlug = new Map(cities.map((c) => [slugOf(c), c]));

  for (const st of states) urls.push(`/${slugOf(st)}/`);
  for (const c of cities) urls.push(`/${c.data.stateSlug}/${slugOf(c)}/`);

  for (const combo of combos) {
    const city = cityBySlug.get(combo.city);
    if (city) urls.push(`/${city.data.stateSlug}/${combo.city}/${combo.service}/`);
  }

  const posts = await getCollection('posts');
  for (const p of posts) urls.push(`/blog/${slugOf(p)}/`);

  const today = new Date().toISOString().split('T')[0];
  const items = urls
    .map((u) => `  <url>\n    <loc>${site}${u}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n  </url>`)
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items}\n</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
