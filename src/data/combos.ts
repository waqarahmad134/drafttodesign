export interface ComboFaq {
  q: string;
  a: string;
}

export interface Combo {
  service: string;
  city: string;
  intro: string[];
  localTitle: string;
  localAngle: string[];
  points: string[];
  faqs: ComboFaq[];
}

const handCombos: Combo[] = [
  {
    service: '3d-rendering',
    city: 'houston',
    intro: [
      'Houston builders and homeowners use photorealistic 3D rendering to see a project before a single wall comes down. From new construction in Katy to luxury remodels in River Oaks, a render answers the questions flat drawings cannot: how will the light fall, do these materials work together, is this actually what I want?',
      'DraftToDesign delivers interior and exterior renders for Houston projects in 3 to 7 days, starting at $79 per view. Send your plans or sketches and get a fixed quote within 24 hours.',
    ],
    localTitle: 'Why Houston projects need 3D rendering',
    localAngle: [
      'Houston has no zoning in the traditional sense, which means an unusual mix of housing styles sits side by side: colonials next to modern farmhouses next to townhomes. When your street has no single architectural language, a render is how you test whether your design actually fits, or stands out the way you want it to.',
      'Renders also do heavy lifting in Houston\'s competitive new-construction market. Builders in Cypress, Pearland and The Woodlands pre-sell homes off renders months before completion, and listings with 3D visuals consistently draw more qualified buyers than floor plans alone.',
    ],
    points: [
      'Exterior renders with Houston-appropriate landscaping, brick, stucco and siding options',
      'Interior renders for open-plan suburban layouts common in Katy and Sugar Land',
      'Dusk and twilight views that make listings stand out',
      'Two revision rounds included, so the render matches your final vision',
    ],
    faqs: [
      {
        q: 'How much does 3D rendering cost in Houston?',
        a: 'At DraftToDesign, a single exterior or interior render starts at $79. Most Houston residential projects need 3 to 6 views, putting a typical package between $300 and $800 depending on detail and turnaround.',
      },
      {
        q: 'How fast can I get my renders?',
        a: 'Standard delivery is 3 to 7 business days. If you are up against a listing or HOA deadline, ask about rush delivery when you request your quote.',
      },
      {
        q: 'What do you need from me to start?',
        a: 'Floor plans or sketches with dimensions, a few reference photos of the style you want, and your list of views (front exterior, kitchen, living room, etc.). The clearer your brief, the faster the turnaround.',
      },
    ],
  },
  {
    service: '3d-rendering',
    city: 'los-angeles',
    intro: [
      'In Los Angeles, design is currency. Whether you are remodeling a Spanish colonial in Los Feliz, adding an ADU in Silver Lake or developing a modern build in the Hills, photorealistic 3D rendering lets you perfect the design before construction starts.',
      'DraftToDesign creates interior and exterior renders for LA projects in 3 to 7 days, starting at $79 per view. Fixed quote within 24 hours, two revision rounds included.',
    ],
    localTitle: 'Rendering for the LA market',
    localAngle: [
      'LA\'s design review boards, HOAs and hillside ordinances mean many projects need visual approvals before permits move forward. A photorealistic render communicates your intent far better than elevations, and it often shortens the back-and-forth with reviewers.',
      'For developers and flippers, renders are a marketing tool. Pre-selling or pre-leasing off high-end visuals is standard practice from Downtown to the Westside, and the cost of a render package is trivial next to LA construction budgets.',
    ],
    points: [
      'Exterior renders handling LA\'s varied styles: Spanish, mid-century, modern, Craftsman',
      'Interior renders with California indoor-outdoor living in mind',
      'ADU renders showing the unit in context with the main house and lot',
      'Hillside and view-lot visualizations with accurate terrain and sight lines',
    ],
    faqs: [
      {
        q: 'How much does 3D rendering cost in Los Angeles?',
        a: 'Our renders start at $79 per view. A typical LA home package of 4 to 8 views runs $400 to $1,000. Complex hillside or multi-structure projects are quoted individually.',
      },
      {
        q: 'Can renders help with design review or HOA approval?',
        a: 'Yes. Many of our LA clients order renders specifically to present to design review boards or HOAs. Photorealistic views of materials, massing and landscaping resolve objections faster than line drawings.',
      },
      {
        q: 'Do you render ADUs?',
        a: 'Absolutely. ADU projects are one of our most common LA requests. We render the unit in context with your lot and main house so you can see exactly how it will sit on the property.',
      },
    ],
  },
  {
    service: '3d-rendering',
    city: 'miami',
    intro: [
      'Miami architecture lives on light, water and bold modern lines. Photorealistic 3D rendering captures all three before you commit to construction, from Brickell condos to Coral Gables estates.',
      'DraftToDesign delivers interior and exterior renders for Miami projects in 3 to 7 days, starting at $79 per view. Fixed quote within 24 hours.',
    ],
    localTitle: 'Rendering for South Florida design',
    localAngle: [
      'South Florida\'s tropical modern aesthetic depends on details that flat drawings hide: how deep roof overhangs shade the glass, how the pool deck meets the living space, how the facade reads at dusk when the landscape lighting comes on. Renders let you judge all of it in advance.',
      'For waterfront properties, renders also test the view corridors. We model the lot context so you can confirm sight lines to the water from the rooms that matter most, before the concrete is poured.',
    ],
    points: [
      'Tropical modern exteriors with stucco, coral stone, wood screens and impact glass',
      'Pool, patio and outdoor living areas rendered as part of the design',
      'Interior renders with bright, airy coastal palettes',
      'Dusk views showing landscape and pool lighting design',
    ],
    faqs: [
      {
        q: 'How much does 3D rendering cost in Miami?',
        a: 'Renders start at $79 per view. Most Miami residential projects order 4 to 8 views, for a typical package of $400 to $1,000 including outdoor living spaces.',
      },
      {
        q: 'Can you render the pool and landscaping too?',
        a: 'Yes. For Miami projects the outdoor spaces are half the design, so we routinely include pools, decks, pergolas and planting in exterior renders.',
      },
      {
        q: 'Do you handle condo interiors?',
        a: 'Yes. We render condo and apartment interiors from your floor plan and finish selections, which is ideal for pre-construction purchases where you are choosing finishes off a menu.',
      },
    ],
  },
  {
    service: '3d-rendering',
    city: 'dallas',
    intro: [
      'Dallas-Fort Worth is one of the fastest-growing housing markets in the country, and 3D rendering keeps projects competitive here. Builders pre-sell from renders, homeowners finalize remodel designs with confidence, and investors market flips before renovation is done.',
      'DraftToDesign delivers photorealistic renders for Dallas projects in 3 to 7 days, starting at $79 per view. Fixed quote within 24 hours, two revision rounds included.',
    ],
    localTitle: 'Why Dallas builds start with renders',
    localAngle: [
      'In master-planned communities across Frisco, Plano and McKinney, buyers choose from options packages: elevations, brick colors, flooring, fixtures. Renders let buyers see their exact combination before they sign, which reduces change orders and buyer remorse for builders.',
      'For remodels in established neighborhoods like Lake Highlands or Preston Hollow, renders resolve the biggest homeowner fear: will this actually look good? Seeing the finished design photorealistically is the difference between hesitating for a year and breaking ground next month.',
    ],
    points: [
      'Builder option-package renders: elevations, materials and interior finish combos',
      'Remodel visualisations for kitchens, primary suites and additions',
      'New construction exterior renders for pre-sales and marketing',
      'Fast packages for investors flipping across the metroplex',
    ],
    faqs: [
      {
        q: 'How much does 3D rendering cost in Dallas?',
        a: 'Single views start at $79. Builder packages with multiple elevations and interior options typically run $500 to $1,200 depending on the number of views and variations.',
      },
      {
        q: 'Can you render multiple elevation or color options?',
        a: 'Yes, this is a common Dallas request. We build one 3D model and render your option variations from it, which is far cheaper than modeling each option separately.',
      },
      {
        q: 'What is the turnaround for a full render package?',
        a: 'Most packages deliver in 1 to 2 weeks. Single views take 3 to 5 business days. Rush service is available for listing and closing deadlines.',
      },
    ],
  },
  {
    service: '3d-rendering',
    city: 'san-diego',
    intro: [
      'San Diego\'s indoor-outdoor lifestyle means the line between interior and exterior design barely exists. Photorealistic 3D rendering shows the whole picture: the kitchen opening to the patio, the sight line from the living room to the canyon, the dusk view from the deck.',
      'DraftToDesign creates renders for San Diego projects in 3 to 7 days, starting at $79 per view. Fixed quote within 24 hours.',
    ],
    localTitle: 'Rendering San Diego\'s indoor-outdoor homes',
    localAngle: [
      'So much of San Diego design value sits in transitions: sliding walls of glass, covered patios, outdoor kitchens. These are exactly the spaces flat drawings fail to communicate. A render shows how the spaces flow together and where the light lands at different times of day.',
      'Coastal properties add another layer: view corridors, salt-air material choices, and facade designs that handle marine exposure. We render with these realities in mind, not just pretty pictures.',
    ],
    points: [
      'Indoor-outdoor transition renders: patios, folding glass walls, outdoor kitchens',
      'Coastal home exteriors with view-corridor verification',
      'ADU and guest house renders in context with the main home',
      'Drought-smart landscaping visualized in exterior views',
    ],
    faqs: [
      {
        q: 'How much does 3D rendering cost in San Diego?',
        a: 'Views start at $79. A typical San Diego package covering interior, exterior and outdoor living runs $400 to $1,000.',
      },
      {
        q: 'Can you show indoor and outdoor spaces together?',
        a: 'Yes, and for San Diego projects we recommend it. Combined interior-exterior views are the best way to judge how the whole property flows.',
      },
      {
        q: 'Do you model the existing terrain and views?',
        a: 'We model the lot context including slopes and neighboring structures where they affect the design, so view corridors in your renders are realistic.',
      },
    ],
  },
  {
    service: '2d-floor-plans',
    city: 'houston',
    intro: [
      'Every Houston remodel, addition and new build starts with a dimensioned floor plan. It is the document contractors bid from, the basis for every 3D view, and the fastest way to test whether your layout ideas actually work.',
      'DraftToDesign draws floor plans for Houston projects in 2 to 4 business days, starting at $99. Send sketches or measurements and get a fixed quote within 24 hours.',
    ],
    localTitle: 'Floor plans for Houston homes',
    localAngle: [
      'Houston\'s housing stock is unusually diverse: 1920s bungalows in the Heights, 1970s ranch homes in Memorial, new traditional builds in the suburbs. Each era has its quirks, from load-bearing walls in unexpected places to additions built without records. A careful as-built plan is the foundation everything else depends on.',
      'Second-story additions are especially common inside the Loop, where lot sizes are tight and going up is the only way to gain space. These projects live or die on accurate existing-condition plans, because the new structure has to land exactly on the old one.',
    ],
    points: [
      'As-built plans drawn from your measurements, photos or sketches',
      'Remodel and addition plans with demolition and new construction notes',
      'Second-story addition layouts coordinated with existing structure',
      'Furniture layouts so you can see what fits before you buy',
    ],
    faqs: [
      {
        q: 'How much does a floor plan cost in Houston?',
        a: 'Our floor plans start at $99 for straightforward layouts. Remodel plans with proposed changes typically run $200 to $500. New construction plan sets are quoted per project.',
      },
      {
        q: 'How fast can I get my floor plan?',
        a: 'Standard delivery is 2 to 4 business days. Two revision rounds are included so the plan matches exactly what you want.',
      },
      {
        q: 'Can you draw plans from my hand sketches?',
        a: 'Yes. Most of our Houston clients start with hand sketches and room measurements. We turn them into clean, dimensioned, professional drawings.',
      },
    ],
  },
  {
    service: '2d-floor-plans',
    city: 'dallas',
    intro: [
      'Dallas homeowners remodel at a relentless pace, and every project starts the same way: with an accurate, dimensioned floor plan. Whether it is opening up a 1990s floor plan in Plano or planning an addition in Lakewood, the plan is what contractors price from.',
      'DraftToDesign delivers floor plans for Dallas projects in 2 to 4 business days, starting at $99. Fixed quote within 24 hours.',
    ],
    localTitle: 'Floor plans for DFW remodels',
    localAngle: [
      'The Dallas market is full of homes with closed-off, compartmentalized layouts from the 80s and 90s. The most common project we draw for is the great-room conversion: removing walls between kitchen, dining and living areas. These plans have to be precise, because the structural questions (which walls carry load, where the beams land) get answered from the drawing.',
      'For investors flipping across the metroplex, speed matters more than anything. Our 2 to 4 day turnaround keeps your project timeline intact, and clean plans get you comparable contractor bids instead of guesswork pricing.',
    ],
    points: [
      'Open-concept conversion plans with wall removal and beam notes',
      'Addition layouts for growing families in the suburbs',
      'As-built documentation for homes with no existing drawings',
      'Dimensioned plans contractors can bid from directly',
    ],
    faqs: [
      {
        q: 'How much does a floor plan cost in Dallas?',
        a: 'Plans start at $99. Typical remodel plans with proposed changes run $200 to $500. Investor packages for multiple properties are quoted at volume rates.',
      },
      {
        q: 'Can you show which walls can be removed?',
        a: 'We note likely load-bearing walls based on the structure shown in your plans, but final structural confirmation always needs a local engineer or contractor on site.',
      },
      {
        q: 'Do you work with real estate investors?',
        a: 'Yes. Many of our Dallas clients are investors who need fast, clean plans to get contractor bids and keep flips on schedule.',
      },
    ],
  },
  {
    service: '2d-floor-plans',
    city: 'los-angeles',
    intro: [
      'Los Angeles projects demand precision. Small lots, hillside constraints, ADU regulations and strict setbacks mean your floor plan has to be right before anything else moves forward.',
      'DraftToDesign draws floor plans for LA projects in 2 to 4 business days, starting at $99. Fixed quote within 24 hours, two revision rounds included.',
    ],
    localTitle: 'Floor plans for LA\'s tight lots',
    localAngle: [
      'ADUs are the defining LA project of this decade, and every ADU starts with a floor plan that squeezes maximum livability into 400 to 1,200 square feet. We draw ADU layouts that account for the realities: storage, natural light, privacy from the main house, and circulation that does not waste a single square foot.',
      'Beyond ADUs, LA remodels often involve reconfiguring small, chopped-up floor plans in older homes. Opening sight lines and improving flow in a 1,200 sq ft bungalow is a design puzzle, and the floor plan is where it gets solved.',
    ],
    points: [
      'ADU floor plans optimized for small footprints',
      'Remodel layouts that open up compartmentalized older homes',
      'Space planning for additions within tight setback constraints',
      'Furniture layouts proving every room works at its size',
    ],
    faqs: [
      {
        q: 'How much does a floor plan cost in Los Angeles?',
        a: 'Plans start at $99. ADU plans typically run $200 to $500 depending on size and complexity. Full remodel plan sets are quoted per project.',
      },
      {
        q: 'Can you design an ADU layout from scratch?',
        a: 'Yes. Tell us the ADU size you are targeting and how it will be used, and we will develop layout options that maximize the space.',
      },
      {
        q: 'Are your plans permit-ready?',
        a: 'We provide design drawings: dimensioned plans suitable for planning your project and getting contractor bids. Permit submittals usually require additional code documentation and often a licensed professional, depending on your jurisdiction.',
      },
    ],
  },
  {
    service: 'interior-design',
    city: 'los-angeles',
    intro: [
      'Los Angeles sets interior design trends for the rest of the country. Our remote interior design service gives you a designer-level concept for your LA home: space planning, palette, materials, furniture and lighting, presented as photorealistic 3D renders.',
      'Concepts start at $299 per room with delivery in 7 to 14 days. Fixed quote within 24 hours.',
    ],
    localTitle: 'Interior design for LA living',
    localAngle: [
      'LA interiors are about the blend: mid-century pieces with contemporary art, Spanish architecture with minimalist furniture, indoor spaces that dissolve into patios. Getting the mix right takes a trained eye, and that is exactly what our concept service provides without the $200-per-hour in-person designer fees.',
      'We design for how LA actually lives: open plans that flow to outdoor space, home offices that double as guest rooms, and primary suites that function as retreats. Every concept is presented as photorealistic renders of your actual rooms, so there is no guessing.',
    ],
    points: [
      'Full-room concepts: layout, palette, materials, furniture, lighting',
      'Designs tuned to LA styles: mid-century, Spanish modern, contemporary, eclectic',
      'Indoor-outdoor flow planned as part of the concept',
      'Shopping-style specification list so you can buy everything yourself',
    ],
    faqs: [
      {
        q: 'How much does interior design cost in Los Angeles?',
        a: 'Our concept service starts at $299 per room, a fraction of in-person LA designer rates. Whole-home concepts are quoted per project with bundled pricing.',
      },
      {
        q: 'Do I get to see the design before buying furniture?',
        a: 'Yes, that is the point. You receive photorealistic 3D renders of your actual rooms with the proposed design, plus a specification list. You buy only when you love what you see.',
      },
      {
        q: 'Can you work with furniture I already own?',
        a: 'Absolutely. Send photos and dimensions of pieces you want to keep, and we design around them.',
      },
    ],
  },
  {
    service: 'interior-design',
    city: 'miami',
    intro: [
      'Miami interiors are bright, bold and unapologetically coastal. Our remote interior design service creates complete concepts for Miami homes: space planning, tropical-modern palettes, materials, furniture and lighting, all shown as photorealistic 3D renders.',
      'Concepts start at $299 per room with delivery in 7 to 14 days. Fixed quote within 24 hours.',
    ],
    localTitle: 'Interior design for South Florida homes',
    localAngle: [
      'Designing for Miami means designing for light and humidity: bleached woods and performance fabrics that handle the climate, palettes that stay fresh in intense sun, and layouts that keep sight lines open to the water or garden. Our concepts are built around these realities, not generic coastal cliches.',
      'For condo owners, we specialize in making compact footprints feel expansive: the right scale of furniture, mirrored and glass elements, and palettes that bounce light through the whole unit. For estate homes, we design the grand gestures: double-height living spaces, statement staircases, resort-style primary suites.',
    ],
    points: [
      'Tropical modern concepts with climate-appropriate materials',
      'Condo interiors designed to maximize light and perceived space',
      'Waterfront home designs with view corridors preserved',
      'Outdoor living areas designed as extensions of the interior',
    ],
    faqs: [
      {
        q: 'How much does interior design cost in Miami?',
        a: 'Concepts start at $299 per room. Whole-home and condo packages are quoted per project.',
      },
      {
        q: 'Do you design outdoor living spaces too?',
        a: 'Yes. In Miami the loggia, pool deck and summer kitchen are living space, so we design them as part of the concept when you want.',
      },
      {
        q: 'Can you source furniture available in the US?',
        a: 'Yes. Your specification list includes specific, purchasable pieces from US retailers at your budget level.',
      },
    ],
  },
  {
    service: '3d-modeling',
    city: 'houston',
    intro: [
      'A 3D model is the most practical design tool most Houston homeowners never knew they needed. Orbit your project from any angle, check sight lines and ceiling heights, and catch design problems while they are still free to fix.',
      'DraftToDesign builds 3D models for Houston projects in 5 to 10 business days, starting at $199. Fixed quote within 24 hours.',
    ],
    localTitle: 'What Houston clients use 3D models for',
    localAngle: [
      'The most valuable use we see in Houston is addition planning. When you are adding a second story in the Heights or extending the back of a Memorial ranch home, a 3D model shows exactly how the new massing meets the old: rooflines, window alignments, and whether the addition looks intentional or bolted-on.',
      'Builders use our models to walk clients through options before committing. Swapping a hip roof for a gable, testing two brick colors, trying a covered patio: all of it takes minutes in the model and would take weeks of debate from flat drawings.',
    ],
    points: [
      'Massing models for additions showing new meeting old',
      'Roofline and elevation studies for new construction',
      'Interior volume checks: ceiling heights, sight lines, stair runs',
      'Models delivered in formats you can view and share easily',
    ],
    faqs: [
      {
        q: 'How much does 3D modeling cost in Houston?',
        a: 'Models start at $199 for straightforward homes. Larger or more complex projects are quoted individually, typically $300 to $800.',
      },
      {
        q: 'What is the difference between a 3D model and a render?',
        a: 'A model is the 3D geometry you can orbit and explore. A render is a photorealistic image made from the model. Models are for understanding space; renders are for presenting and marketing it.',
      },
      {
        q: 'Can I get renders from the model later?',
        a: 'Yes. Once the model exists, adding photorealistic renders is fast and cost-effective, since the heavy lifting is already done.',
      },
    ],
  },
  {
    service: 'exterior-design-landscaping',
    city: 'miami',
    intro: [
      'In Miami, the exterior is half the home: facade, pool deck, landscaping and outdoor living all read as one design. Our exterior and landscaping concept service designs the complete outdoor picture, presented as photorealistic 3D renders.',
      'Concepts start at $349 with delivery in 7 to 14 days. Fixed quote within 24 hours.',
    ],
    localTitle: 'Exterior design for the Miami climate',
    localAngle: [
      'Miami exteriors have to perform: hurricane-rated everything, materials that survive salt air and brutal sun, and landscaping that thrives in Zone 10b without constant rescue. Our concepts specify with this in mind, pairing the tropical modern look with choices that actually last here.',
      'Curb appeal in neighborhoods like Coral Gables or Pinecrest directly affects property value, and the difference between a dated facade and a sharp one is often just confident design: new cladding or paint, modern lighting, re-proportioned landscaping, and a driveway and entry that feel intentional.',
    ],
    points: [
      'Facade makeovers: cladding, paint, windows, lighting, entry design',
      'Pool deck and outdoor kitchen concepts integrated with the home',
      'Tropical planting plans suited to South Florida\'s climate',
      'Dusk renders showing the landscape lighting design',
    ],
    faqs: [
      {
        q: 'How much does exterior design cost in Miami?',
        a: 'Concepts start at $349. Full property concepts including pool area and planting plans are quoted per project.',
      },
      {
        q: 'Do you specify hurricane-appropriate materials?',
        a: 'Our concepts favor materials known to perform in South Florida\'s climate, and we flag where impact-rated products are required. Final product selection should be confirmed with your local contractor.',
      },
      {
        q: 'Can you work from photos of my current house?',
        a: 'Yes. Photos plus basic measurements are enough to start a facade makeover concept. For full landscape plans, a lot survey or dimensions help.',
      },
    ],
  },
];

import { generatedCombos } from './combos-generated';

export const combos: Combo[] = [...handCombos, ...generatedCombos];
