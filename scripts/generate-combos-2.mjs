// Generates city pages + combos for the 28 new locations.
// Run: node scripts/generate-combos-2.mjs
import { writeFileSync, mkdirSync } from 'fs';
import { LOCATIONS } from './location-data.mjs';

const fill = (s, loc) =>
  s.replaceAll('{city}', loc.cityName).replaceAll('{state}', loc.stateName).replaceAll('{abbr}', loc.stateAbbr);

const SERVICES = {
  '2d-floor-plans': {
    name: '2D Floor Plans',
    localTitle: l => `2D Floor Plans for ${l.cityName} homes and projects`,
    intros: [
      l => [
        `Planning a project in ${l.cityName}? Our 2D floor plan service covers ${l.cityName} and the surrounding ${l.stateName} area. Accurate, professional 2D floor plans for homes, apartments, offices and commercial spaces, drawn from your sketches or measurements. Pricing starts at $99 with delivery in 3-5 days.`,
        `Tell us about your project and get a clear fixed quote within 24 hours. Two revision rounds are included with every plan.`,
      ],
      l => [
        `Get professional 2D floor plans for your ${l.cityName} home or development. From hand sketches or room measurements to clean CAD-ready drawings, we deliver dimensioned plans contractors can bid from directly. We work 100 percent remotely, which keeps prices low and turnaround fast: from $99, delivered in 3-5 days.`,
        `Share your project details today and receive a fixed quote within 24 hours, no obligation.`,
      ],
    ],
    points: [
      'As-built plans drawn from your measurements, photos or sketches',
      'Remodel and addition layouts with demolition and new construction notes',
      'Space planning that tests furniture fit before you buy',
      'Dimensioned drawings contractors can bid from directly',
      'Two revision rounds included with every plan',
      'Clean CAD linework any drafter or architect can build on',
    ],
    faqs: [
      ['Can you draw plans from my hand sketches?', l => `Yes. Most of our ${l.cityName} clients start with hand sketches and room measurements. We turn them into clean, dimensioned, professional drawings.`],
      ['How much does a floor plan cost in {city}?', () => 'Our floor plans start at $99. Typical remodel plans with proposed changes run $200 to $500 depending on size and complexity.'],
      ['How fast can I get my floor plan?', () => 'Standard delivery is 3-5 days. Two revision rounds are included so the plan matches exactly what you want.'],
      ['What if I need changes after delivery?', () => 'Two revision rounds are included with every plan, so we keep adjusting until the layout is exactly right.'],
      ['Do you measure the property yourself?', () => 'We work 100 percent remotely: you send measurements, photos or sketches, and we handle the rest. For most homes a tape measure and a phone camera are enough.'],
    ],
  },
  'architectural-drafting': {
    name: 'Architectural Drafting',
    localTitle: l => `Architectural Drafting for ${l.cityName} remodels and additions`,
    intros: [
      l => [
        `Remodeling or adding on in ${l.cityName}? Our architectural drafting service produces clean, coordinated drawing sets: existing conditions, proposed floor plans and exterior elevations, all dimensioned and annotated. Drafting starts at $199 with delivery in 5-10 days.`,
        `Send your sketches, measurements or builder plans and get a fixed quote within 24 hours.`,
      ],
      l => [
        `Professional drafting for ${l.cityName} projects, delivered remotely and fast. We document your existing home precisely, then draw the proposed changes as a coordinated set your contractor can price and build from. From $199, delivered in 5-10 days.`,
        `Share your project details today and receive a fixed, no-obligation quote within 24 hours.`,
      ],
    ],
    points: [
      'Existing-condition documentation from your photos and measurements',
      'Proposed floor plans, elevations and sections in one coordinated set',
      'Dimensioned, annotated drawings builders can price accurately',
      'Two revision rounds to refine every detail',
      'Clean CAD linework compatible with architects and engineers',
      'ADU, addition and remodel plan sets for straightforward projects',
    ],
    faqs: [
      ['What is included in a drafting set?', () => 'Typically existing and proposed floor plans plus exterior elevations. Sections and details are added when the project needs them.'],
      ['How much does drafting cost in {city}?', () => 'Drafting starts at $199. Most single-room remodel sets run $300 to $800; larger additions are quoted per project.'],
      ['How long does drafting take?', () => 'Most drafting sets deliver in 5-10 days depending on complexity, with two revision rounds included.'],
      ['Can you work from my builder\u2019s plans?', () => 'Yes. We redraw and modify builder or architect plans with your changes, keeping everything coordinated.'],
      ['Do you do permit drawings?', () => 'We provide design and visualization drawings only. For permit submission sets, a locally licensed professional should finalize and stamp the drawings.'],
    ],
  },
  '3d-modeling': {
    name: '3D Modeling',
    localTitle: l => `3D Modeling for ${l.cityName} design and construction projects`,
    intros: [
      l => [
        `Need a 3D model of your ${l.cityName} project? We build accurate SketchUp models from your plans or sketches: massing, interiors, furniture and fixtures blocked in at real scale. Modeling starts at $149 with delivery in 5-10 days.`,
        `Send your plans today and get a fixed quote within 24 hours, with two revision rounds included.`,
      ],
      l => [
        `3D modeling for ${l.cityName} builders, designers and homeowners, delivered remotely. From simple massing studies to detailed interior models ready for rendering, we build in SketchUp and deliver the formats your team uses. From $149, delivered in 5-10 days.`,
        `Share your project details and receive a fixed, no-obligation quote within 24 hours.`,
      ],
    ],
    points: [
      'Accurate 3D massing and detailed models built from your plans',
      'SketchUp, Revit-compatible and neutral formats (SKP, FBX, OBJ)',
      'Furniture, fixtures and material blocking for realistic scale',
      'Two revision rounds included with every model',
      'Models ready for rendering, VR walkthroughs or presentations',
      'Site context and massing studies for new construction',
    ],
    faqs: [
      ['What file formats do I receive?', () => 'SketchUp (SKP) plus your choice of FBX or OBJ. Tell us what your team uses and we match it.'],
      ['How much does 3D modeling cost in {city}?', () => 'Modeling starts at $149. Most single-family home models run $250 to $600 depending on detail level.'],
      ['How long does a 3D model take?', () => 'Standard delivery is 5-10 days. Two revision rounds are included.'],
      ['Can you model from photos only?', () => 'For exteriors, yes, with good photos and basic dimensions. Interiors need measurements or a floor plan for accuracy.'],
      ['What is the model used for?', () => 'Renderings, design review, client presentations and VR walkthroughs. A good model is the foundation of every visualization.'],
    ],
  },
  '3d-rendering': {
    name: '3D Rendering',
    localTitle: l => `Photorealistic 3D Rendering for ${l.cityName} projects`,
    intros: [
      l => [
        `${l.cityName} builders and homeowners use photorealistic 3D rendering to see a project before construction starts. From new builds to luxury remodels, a render answers the questions flat drawings cannot: how will the light fall, do these materials work together, is this what I want? Renders start at $79 per view, delivered in 3-7 days.`,
        `Send your plans or sketches and get a fixed quote within 24 hours.`,
      ],
      l => [
        `Photorealistic 3D renders for ${l.cityName} projects, delivered remotely and fast. Interior and exterior views with day and dusk lighting, material options shown side by side, all from your floor plans. Starting at $79 per view, delivered in 3-7 days.`,
        `Share your project details today and receive a fixed quote within 24 hours, no obligation.`,
      ],
    ],
    points: [
      'Photorealistic interior and exterior views from your plans',
      'Day and dusk lighting options for maximum impact',
      'Material and finish options shown side by side',
      'Two revision rounds included with every view',
      'High-resolution images ready for listings and presentations',
      'Rush delivery available when your deadline is tight',
    ],
    faqs: [
      ['How much does a 3D render cost in {city}?', () => 'Renders start at $79 per view. Most clients order 3-5 views, which we discount as a package.'],
      ['How long does rendering take?', () => 'Standard delivery is 3-7 days per batch of views. Rush options are available.'],
      ['What do you need from me to start?', () => 'Floor plans or sketches, plus inspiration images for style. The more reference you share, the closer the first draft.'],
      ['Can you change finishes after the first render?', () => 'Yes. Two revision rounds are included, so we adjust materials, colors and lighting until it looks right.'],
      ['Can renders help sell my property?', () => 'Absolutely. Listings with 3D visuals consistently draw more qualified buyers than floor plans alone.'],
    ],
  },
  'interior-design': {
    name: 'Interior Design',
    localTitle: l => `Interior Design for ${l.cityName} homes and projects`,
    intros: [
      l => [
        `Interior design for ${l.cityName}, ${l.stateAbbr} projects, delivered remotely and fast. Complete interior design concepts: layouts, color palettes, materials, furniture and lighting, presented with photorealistic 3D renders. Get a fixed quote within 24 hours.`,
        `Send your plans, sketches or measurements and get a fixed, no-obligation quote within 24 hours.`,
      ],
      l => [
        `Professional interior design concepts for ${l.cityName} homes without in-person designer fees. Space planning, palettes, materials, furniture and lighting, all presented as photorealistic 3D renders of your actual rooms. Room concepts start at $299.`,
        `Share your project details today and receive a fixed quote within 24 hours.`,
      ],
    ],
    points: [
      'Complete room concepts: layout, palette, materials and lighting',
      'Photorealistic 3D renders of your actual rooms',
      'Specification list with purchasable pieces at your budget',
      'Designs that work with furniture you already own',
      'Two revision rounds to get every room right',
      'Kitchen and bath concepts with fixture and tile selections',
    ],
    faqs: [
      ['How much does interior design cost in {city}?', () => 'Our room concepts start at $299. Whole-home concepts are quoted per project, typically far below in-person designer fees.'],
      ['Do I get to see the design before buying furniture?', () => 'Yes. You receive photorealistic 3D renders of your actual rooms plus a specification list. You buy only when you love what you see.'],
      ['Can you work with furniture I already own?', () => 'Absolutely. Send photos and dimensions of pieces you want to keep, and we design around them.'],
      ['How long does a design concept take?', () => 'Standard delivery is 7-14 days.'],
      ['Do you handle purchasing and installation?', () => 'We provide the concept, renders and shopping list; you purchase at your pace. This keeps our fees low and you in control.'],
    ],
  },
  'exterior-design-landscaping': {
    name: 'Exterior & Landscaping',
    localTitle: l => `Exterior and Landscaping Design for ${l.cityName} homes`,
    intros: [
      l => [
        `Exterior and landscaping design for ${l.cityName} homes, delivered remotely. Facade refresh concepts, front and backyard landscaping plans, pool decks and outdoor kitchens, all shown as photorealistic 3D renders. Concepts start at $249.`,
        `Send photos of your home and get a fixed quote within 24 hours.`,
      ],
      l => [
        `Give your ${l.cityName} home standout curb appeal without guesswork. We design facade updates, landscaping, patios and outdoor living spaces, then render them so you see the finished look before spending. From $249, delivered in 5-10 days.`,
        `Share your project details today and receive a fixed, no-obligation quote within 24 hours.`,
      ],
    ],
    points: [
      'Facade refresh concepts with new colors, materials and details',
      'Front and backyard landscaping plans with plant selections',
      'Pool decks, patios and outdoor kitchens designed in 3D',
      'Day and dusk exterior renders for full impact',
      'Curb-appeal packages tuned for listing photos',
      'Two revision rounds included with every concept',
    ],
    faqs: [
      ['How much does exterior design cost in {city}?', () => 'Exterior concepts start at $249. Full facade plus landscaping packages are quoted per project.'],
      ['Do you design pools and outdoor kitchens?', () => 'Yes. We design the full outdoor living package: pool decks, kitchens, pergolas and planting, shown in 3D.'],
      ['Will the design suit my climate?', () => 'We specify plants and materials suited to your region, so the design thrives, not just photographs well.'],
      ['How long does an exterior concept take?', () => 'Standard delivery is 5-10 days, with two revision rounds included.'],
      ['Can you work from just photos of my house?', () => 'Yes. Good exterior photos plus basic measurements are enough to start most facade and landscaping concepts.'],
    ],
  },
};

const pick = (arr, offset, n) => {
  const out = [];
  for (let i = 0; i < n; i++) out.push(arr[(offset + i) % arr.length]);
  return out;
};

// ---------- city .md files ----------
mkdirSync('src/content/cities', { recursive: true });
for (const loc of LOCATIONS) {
  const serviceBullets = [
    `**3D interior and exterior renders** to finalize finishes before committing`,
    `**Floor plans and drafting** for remodels, additions and ADUs`,
    `**Interior design concepts** with photorealistic room renders`,
    `**Exterior and landscaping concepts** tuned for ${loc.stateName} living`,
  ];
  const md = `---
title: "Design, Drafting & 3D Rendering in ${loc.cityName}, ${loc.stateAbbr}"
cityName: "${loc.cityName}"
stateName: "${loc.stateName}"
stateAbbr: "${loc.stateAbbr}"
stateSlug: "${loc.stateSlug}"
description: "2D floor plans, architectural drafting, 3D modeling, rendering, interior and exterior design services in ${loc.cityName}, ${loc.stateName}. Remote, fast, affordable."
metaTitle: "3D Rendering, Floor Plans & Interior Design in ${loc.cityName}, ${loc.stateAbbr} - DraftToDesign"
metaDescription: "DraftToDesign offers 2D floor plans, drafting, 3D modeling, photorealistic rendering, interior and exterior design in ${loc.cityName}, ${loc.stateAbbr}. Free quote in 24 hours."
neighborhoods: [${loc.neighborhoods.map(n => `"${n}"`).join(', ')}]
---

## Design and drafting services in ${loc.cityName}, ${loc.stateAbbr}

${loc.blurb.split('\n').join('\n\n')}

## Popular services in ${loc.cityName}

${serviceBullets.map(b => `- ${b}`).join('\n')}

## Neighborhoods we serve

${loc.neighborhoods.join(', ')}, and greater ${loc.cityName}.

## How it works

Send your plans, photos or ideas. We deliver professional drawings and renders in days, with two revision rounds included.
`;
  writeFileSync(`src/content/cities/${loc.slug}.md`, md);
}

// ---------- combos ----------
const combos = [];
LOCATIONS.forEach((loc, li) => {
  Object.entries(SERVICES).forEach(([service, t], si) => {
    const intro = t.intros[(li + si) % t.intros.length](loc);
    combos.push({
      service,
      city: loc.slug,
      intro,
      localTitle: t.localTitle(loc),
      localAngle: [loc.angleA, loc.angleB],
      points: pick(t.points, (li + si) % t.points.length, 4),
      faqs: pick(t.faqs, (li + si) % t.faqs.length, 3).map(([q, a]) => ({
        q: fill(q, loc),
        a: a(loc),
      })),
    });
  });
});

// serialize as TS (JSON is valid TS)
const ts = `import type { Combo } from './combos';

export const generatedCombos2: Combo[] = ${JSON.stringify(combos, null, 2)};
`;
writeFileSync('src/data/combos-generated-2.ts', ts);
console.log(`Wrote ${LOCATIONS.length} city files and ${combos.length} combos.`);
