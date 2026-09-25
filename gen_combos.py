#!/usr/bin/env python3
"""Generate the remaining 96 service x city combos with unique localized copy."""
import re, json, hashlib, os

BASE = os.path.expanduser('~/workspace/drafttodesign')

def frontmatter(path):
    txt = open(path).read()
    m = re.match(r'^---\n(.*?)\n---', txt, re.S)
    fm = {}
    for line in m.group(1).split('\n'):
        if ':' not in line:
            continue
        k, v = line.split(':', 1)
        fm[k.strip()] = v.strip().strip('"')
    return fm

services = {}
for f in os.listdir(f'{BASE}/src/content/services'):
    slug = f[:-3]
    fm = frontmatter(f'{BASE}/src/content/services/{f}')
    services[slug] = fm

cities = {}
for f in os.listdir(f'{BASE}/src/content/cities'):
    slug = f[:-3]
    fm = frontmatter(f'{BASE}/src/content/cities/{f}')
    nb = re.search(r'neighborhoods:\s*\[(.*?)\]', open(f'{BASE}/src/content/cities/{f}').read(), re.S)
    fm['nb_list'] = [x.strip().strip('"') for x in nb.group(1).split(',')] if nb else []
    cities[slug] = fm

HAND = {
    ('3d-rendering','houston'),('3d-rendering','los-angeles'),('3d-rendering','miami'),
    ('3d-rendering','dallas'),('3d-rendering','san-diego'),
    ('2d-floor-plans','houston'),('2d-floor-plans','dallas'),('2d-floor-plans','los-angeles'),
    ('interior-design','los-angeles'),('interior-design','miami'),
    ('3d-modeling','houston'),('exterior-design-landscaping','miami'),
}

def h(svc, city, salt=''):
    return int(hashlib.md5(f'{svc}/{city}/{salt}'.encode()).hexdigest(), 16)

CITY_NOTES = {
 'houston': "Houston's lack of traditional zoning creates a rare mix of housing styles on the same street, from colonials to modern farmhouses. Second-story additions inside the Loop and new construction in Katy, Cypress and Pearland keep design demand constant.",
 'dallas': "Dallas-Fort Worth is among the fastest-growing metros in the US, with master-planned communities rising in Frisco, Plano and McKinney. Investors flip homes across the metroplex while established neighborhoods like Lake Highlands see steady remodel work.",
 'austin': "Austin's tech boom keeps remodels rolling in neighborhoods like Hyde Park and Mueller. Small lots and rising land values make ADUs and smart space planning especially valuable here.",
 'san-antonio': "San Antonio blends historic character in districts like King William with rapid suburban growth to the north. Alamo Heights remodels and Hill Country modern new builds both need careful design work.",
 'fort-worth': "Fort Worth pairs historic neighborhoods like Fairmount with fast-growing suburbs around Alliance. Ranch-style homes dominate, and additions that respect the original architecture are in constant demand.",
 'el-paso': "El Paso's desert Southwest character means adobe, Spanish and ranch influences shape local design. Mission Valley and the west side see steady new construction adapted to the desert climate.",
 'los-angeles': "LA's design review boards, hillside ordinances and small lots make visual communication essential. ADUs, Spanish colonials in Los Feliz and modern Hills builds all move faster with professional design assets.",
 'san-diego': "San Diego's indoor-outdoor lifestyle blurs the line between interior and exterior space. Coastal properties, canyon-view lots and ADU projects define the local design market.",
 'san-jose': "Silicon Valley housing costs make every square foot precious in San Jose. Eichler mid-century homes and new ADUs across the city drive demand for precise space planning.",
 'sacramento': "Sacramento's relative affordability draws Bay Area transplants, fueling remodels in East Sac and new builds in Elk Grove. Classic California ranch homes are the most common project starting point.",
 'oakland': "Oakland's Craftsman and Victorian housing stock in the hills and Temescal sees constant renovation. View lots and older homes with good bones reward careful design investment.",
 'fresno': "Fresno's Central Valley market is one of California's most affordable, with steady new construction and ranch-home remodels. Practical, budget-conscious design work wins here.",
 'san-francisco': "San Francisco's Victorians and Edwardians sit on steep lots under strict planning rules. Space is the ultimate luxury, and precise plans make small footprints live large.",
 'miami': "Miami's tropical modern aesthetic runs on light, water and bold lines, from Brickell condos to Coral Gables estates. Outdoor living space counts as real living space here.",
 'orlando': "Orlando's growth stretches from historic Winter Park to new communities in Lake Nona. Vacation rentals near the tourism corridor create constant demand for attractive, durable interiors.",
 'tampa': "Tampa blends historic Ybor City and South Tampa bungalows with waterfront new construction. The warm climate keeps outdoor living and curb appeal front and center.",
 'jacksonville': "Jacksonville is the largest US city by land area, with everything from historic San Marco to coastal Ponte Vedra. Military relocations and steady growth keep the housing market moving.",
 'fort-lauderdale': "Fort Lauderdale's boating and waterfront lifestyle shapes its design market, from Las Olas condos to tropical single-family homes. Indoor-outdoor flow and storm-ready materials matter here.",
}

ANGLES = {
 '2d-floor-plans': [
  "Every {city} remodel, addition and new build starts with a dimensioned floor plan. It is the document contractors bid from and the base every 3D view is built on. We draw as-built plans from your measurements and sketches, then develop the proposed layout with you until it is right.",
  "In {city}, {nb} represent very different housing eras, and accurate existing-condition plans are the foundation of any project. We turn hand sketches and room measurements into clean, dimensioned drawings with fast turnaround.",
 ],
 '3d-modeling': [
  "A 3D model lets you orbit your {city} project from any angle before construction starts. Check ceiling heights, sight lines and rooflines while changes are still free, then use the same model to generate photorealistic renders later.",
  "{city} projects often hinge on massing: how an addition meets the existing house, or how a new build sits on its lot. Our models answer those questions visually, which beats weeks of debate over flat drawings.",
 ],
 '3d-rendering': [
  "Photorealistic renders show your {city} project exactly as it will look: materials, light, landscaping. Builders pre-sell from them, homeowners finalize designs with confidence, and listings with 3D visuals draw more qualified buyers.",
  "Flat drawings leave too much to the imagination, and in {city}'s competitive market that uncertainty costs money. Our renders resolve materials, lighting and curb appeal before you commit to construction.",
 ],
 'architectural-drafting': [
  "Architectural drafting turns your {city} project ideas into precise technical drawings: dimensioned plans, elevations and sections drawn to standard conventions. Contractors bid accurately from our drawings, which means fewer surprises and change orders.",
  "Good drafting is invisible when it is right and expensive when it is wrong. We produce clean, coordinated drawing sets for {city} projects, from single-room remodels to full new construction.",
 ],
 'interior-design': [
  "Our remote interior design service gives {city} homeowners a designer-level concept without in-person designer fees: space planning, palette, materials, furniture and lighting, all presented as photorealistic 3D renders of your actual rooms.",
  "You do not need to live near a design district to get a professionally designed home in {city}. We develop complete room concepts remotely, with a specification list of purchasable pieces so you can execute at your own pace.",
 ],
 'exterior-design-landscaping': [
  "Curb appeal drives value in {city}, and the exterior is the first thing buyers, guests and neighbors see. We design facade makeovers, outdoor living areas and planting concepts, presented as photorealistic renders.",
  "In {city}, outdoor space is living space for much of the year. Our exterior concepts integrate the facade, hardscape, planting and lighting into one coherent design you can actually build from.",
 ],
}

POINTS = {
 '2d-floor-plans': ["As-built plans drawn from your measurements, photos or sketches","Remodel and addition layouts with demolition and new construction notes","Space planning that tests furniture fit before you buy","Dimensioned drawings contractors can bid from directly","Two revision rounds included with every plan"],
 '3d-modeling': ["Exterior massing models showing how new meets old","Interior volume studies: ceiling heights, sight lines, stair runs","Roofline and elevation options explored in 3D","Models you can orbit, share and present to stakeholders","A ready base for photorealistic renders later"],
 '3d-rendering': ["Photorealistic interior and exterior views","Dusk and twilight views for listings and presentations","Material and finish options visualized before you buy","Two revision rounds included on every view","Rush delivery available for tight deadlines"],
 'architectural-drafting': ["Dimensioned floor plans drawn to standard conventions","Exterior elevations and building sections","Coordinated drawing sets with consistent dimensions","Redline revisions handled quickly","Files ready for contractor bidding"],
 'interior-design': ["Full-room concepts: layout, palette, materials, furniture, lighting","Photorealistic 3D renders of your actual rooms","Specification list with purchasable pieces at your budget","Designs that work with furniture you already own","Two revision rounds to get every room right"],
 'exterior-design-landscaping': ["Facade makeover concepts: cladding, paint, lighting, entry","Outdoor living areas: patios, pergolas, outdoor kitchens","Planting concepts suited to the local climate","Hardscape and driveway design","Dusk renders showing the landscape lighting"],
}

FAQS = {
 '2d-floor-plans': [
  ("How much does a floor plan cost in {city}?","Our floor plans start at {price}. Typical remodel plans with proposed changes run $200 to $500 depending on size and complexity."),
  ("How fast can I get my floor plan?","Standard delivery is {time}. Two revision rounds are included so the plan matches exactly what you want."),
  ("Can you draw plans from my hand sketches?","Yes. Most of our {city} clients start with hand sketches and room measurements. We turn them into clean, dimensioned, professional drawings."),
  ("What if I need changes after delivery?","Two revision rounds are included with every plan, so we keep adjusting until the layout is exactly right."),
 ],
 '3d-modeling': [
  ("How much does 3D modeling cost in {city}?","Models start at {price}. Larger or more complex projects are quoted individually based on size and detail."),
  ("How long does a 3D model take?","Standard delivery is {time}. Most residential models land in the first half of that window."),
  ("What is the difference between a 3D model and a render?","A model is the 3D geometry you can orbit and explore. A render is a photorealistic image made from the model. Models are for understanding space; renders are for presenting it."),
  ("Can I get renders from the model later?","Yes. Once the model exists, adding photorealistic renders is fast and cost-effective, since the heavy lifting is already done."),
 ],
 '3d-rendering': [
  ("How much does 3D rendering cost in {city}?","Our renders start at {price} per view. Most residential projects need 3 to 8 views, and we quote every package individually."),
  ("How fast can I get my renders?","Standard delivery is {time}. If you are up against a listing or presentation deadline, ask about rush delivery."),
  ("What do you need from me to start?","Floor plans or sketches with dimensions, reference photos of the style you want, and your list of views. The clearer your brief, the faster the turnaround."),
  ("How many revisions are included?","Two revision rounds are included on every view, so the final images match your vision."),
 ],
 'architectural-drafting': [
  ("How much does drafting cost in {city}?","Our drafting services start at {price}. Full drawing sets are quoted per project based on scope."),
  ("How long does a drawing set take?","Standard delivery is {time}, depending on project complexity."),
  ("What drawings are included?","Typical sets include dimensioned floor plans, exterior elevations and building sections. We scope each project individually so you pay only for what you need."),
  ("Are your drawings permit-ready?","We provide design drawings suitable for planning and contractor bidding. Permit submittals often require additional code documentation and sometimes a licensed professional, depending on your jurisdiction."),
 ],
 'interior-design': [
  ("How much does interior design cost in {city}?","Our concept service starts at {price} per room, a fraction of in-person designer rates. Whole-home concepts are quoted per project with bundled pricing."),
  ("Do I get to see the design before buying furniture?","Yes. You receive photorealistic 3D renders of your actual rooms plus a specification list. You buy only when you love what you see."),
  ("Can you work with furniture I already own?","Absolutely. Send photos and dimensions of pieces you want to keep, and we design around them."),
  ("How long does a design concept take?","Standard delivery is {time}."),
 ],
 'exterior-design-landscaping': [
  ("How much does exterior design cost in {city}?","Concepts start at {price}. Full property concepts including outdoor living and planting plans are quoted per project."),
  ("Can you work from photos of my current house?","Yes. Photos plus basic measurements are enough to start a facade makeover concept."),
  ("Do you consider the local climate?","Yes. Our concepts favor materials and planting suited to {city}'s climate, and we flag maintenance and durability considerations."),
  ("How long does an exterior concept take?","Standard delivery is {time}."),
 ],
}

INTROS = [
 "{Service} for {city}, {abbr} projects, delivered remotely and fast. {desc} Get a fixed quote within 24 hours.",
 "Planning a project in {city}? Our {service_lower} service covers {city} and the surrounding {state} area. {desc} Pricing starts at {price} with delivery in {time}.",
 "Get professional {service_lower} for your {city} home or development. {desc} We work 100 percent remotely, which keeps prices low and turnaround fast: from {price}, delivered in {time}.",
]

TITLES = [
 "Why {service_lower} matters in {city}",
 "{Service} for {city} homes and projects",
]

CLOSERS = [
 "Send your plans, sketches or measurements and get a fixed, no-obligation quote within 24 hours.",
 "Share your project details today and receive a fixed quote within 24 hours, no obligation.",
 "Tell us about your project and get a clear fixed quote within 24 hours.",
]

out = []
for svc in sorted(services):
    S = services[svc]
    for cty in sorted(cities):
        if (svc, cty) in HAND:
            continue
        C = cities[cty]
        nb = ", ".join(C['nb_list'][:4]) if C['nb_list'] else C['cityName']
        slots = {
            'Service': S['shortTitle'], 'service_lower': S['shortTitle'].lower(),
            'city': C['cityName'], 'state': C['stateName'], 'abbr': C['stateAbbr'],
            'nb': nb, 'price': S['priceFrom'], 'time': S['deliveryTime'], 'desc': S['description'],
        }
        intro = INTROS[h(svc, cty, 'intro') % len(INTROS)].format(**slots)
        title = TITLES[h(svc, cty, 'title') % len(TITLES)].format(**slots)
        angle = ANGLES[svc][h(svc, cty, 'angle') % 2].format(**slots)
        note = CITY_NOTES[cty]
        pts = POINTS[svc]
        start = h(svc, cty, 'pts') % len(pts)
        points = [pts[(start + i) % len(pts)] for i in range(4)]
        faqs = FAQS[svc]
        fstart = h(svc, cty, 'faq') % len(faqs)
        picked = [faqs[(fstart + i) % len(faqs)] for i in range(3)]
        faqlist = [{'q': q.format(**slots), 'a': a.format(**slots)} for q, a in picked]
        closer = CLOSERS[h(svc, cty, 'closer') % len(CLOSERS)]
        out.append({
            'service': svc, 'city': cty,
            'intro': [intro, closer],
            'localTitle': title,
            'localAngle': [angle, note],
            'points': points,
            'faqs': faqlist,
        })

# safety: no em-dashes anywhere
blob = json.dumps(out)
assert '\u2014' not in blob, 'em-dash found!'
assert len(out) == 96, f'expected 96, got {len(out)}'
pairs = [(c['service'], c['city']) for c in out]
assert len(set(pairs)) == 96

ts = "import type { Combo } from './combos';\n\nexport const generatedCombos: Combo[] = " + blob + ";\n"
# pretty-ish: keep compact JSON, valid TS
open(f'{BASE}/src/data/combos-generated.ts', 'w').write(ts)
print('wrote 96 combos')
