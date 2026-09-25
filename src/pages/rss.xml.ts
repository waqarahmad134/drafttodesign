import { getCollection } from 'astro:content';

const site = 'https://drafttodesign.com';

function esc(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export async function GET() {
  const posts = (await getCollection('posts')).sort(
    (a, b) => +new Date(b.data.pubDate) - +new Date(a.data.pubDate)
  );

  const items = posts
    .map((p) => {
      const slug = p.id.replace(/\.md$/, '');
      const url = `${site}/blog/${slug}/`;
      const pubDate = new Date(p.data.pubDate).toUTCString();
      return `    <item>
      <title>${esc(p.data.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${esc(p.data.description)}</description>
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>DraftToDesign Blog</title>
    <link>${site}/blog/</link>
    <description>Guides on 3D rendering, floor plans, drafting and home design services across the USA.</description>
    <language>en-us</language>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
}
