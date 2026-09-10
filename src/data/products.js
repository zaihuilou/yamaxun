/**
 * Product catalogue - DATA DRIVEN.
 * To add a new product, simply copy one object below and edit the fields.
 * No new page or component is required.
 *
 * Image files live in /public/images  ->  referenced as "/images/xxx.png"
 * Replace the placeholder images with your own photos (English file names only).
 */

export const categories = [
  { key: 'all', label: 'All Products' },
  { key: 'standard', label: 'Standard Nylon' },
  { key: 'special', label: 'Special Purpose' },
  { key: 'metal', label: 'Metal Ties' },
]

export const products = [
  {
    id: 'nylon-cable-tie',
    name: 'Nylon 66 Cable Tie (Natural / Black)',
    model: 'CT-N66',
    category: 'standard',
    image: '/images/product-nylon-white.png',
    badge: 'Best Seller',
    short:
      'General purpose PA66 cable ties, from 80 mm to 1200 mm, tensile strength 8 kg to 114 kg.',
    description:
      'Our standard nylon cable ties are molded from 100% virgin PA66 with a self-locking stainless pawl inside the head. They are used worldwide for bundling cables, wires, hoses and pipes. Available in natural (white) and black, with a smooth rounded tail for fast hand or tool installation.',
    specs: [
      ['Material', 'PA66 (Nylon 66), 94V-2'],
      ['Color', 'Natural / Black (custom colors available)'],
      ['Length', '80 mm - 1200 mm (3" - 47")'],
      ['Width', '2.5 mm / 3.6 mm / 4.8 mm / 7.2 mm / 9.0 mm / 12.0 mm'],
      ['Tensile strength', '8 kg - 114 kg (18 lb - 250 lb)'],
      ['Working temperature', '-40°C to +85°C'],
      ['Flammability', 'UL 94V-2'],
      ['Certification', 'CE / RoHS / REACH / UL'],
    ],
    features: [
      'Self-locking head with stainless steel pawl for a secure grip',
      'Rounded tail tip for quick insertion and tool-free handling',
      'Smooth strap edges - no sharp burrs, safe for the installer',
      'UV resistant version available for outdoor use',
      'Halogen free and RoHS compliant',
    ],
    applications: ['Wire harness', 'Panel wiring', 'Cable management', 'Packaging', 'DIY & household'],
    packaging: '100 pcs / bag, 100 bags / carton (custom polybag with header card available)',
    moq: '10,000 pcs per size',
  },
  {
    id: 'uv-resistant-cable-tie',
    name: 'UV Resistant Black Cable Tie',
    model: 'CT-UV200',
    category: 'standard',
    image: '/images/product-uv-black.png',
    badge: 'Outdoor',
    short:
      'Carbon black stabilized PA66 ties designed for long-term outdoor and solar installation use.',
    description:
      'UV resistant cable ties are produced with a special carbon black master-batch that protects the nylon from sunlight degradation. They keep their tensile strength for more than 10 years of outdoor exposure, which makes them the standard choice for solar farms, outdoor lighting and telecom cabinets.',
    specs: [
      ['Material', 'UV stabilized PA66, 94V-2'],
      ['Color', 'Black'],
      ['Length', '100 mm - 900 mm'],
      ['Width', '2.5 mm / 3.6 mm / 4.8 mm / 7.6 mm / 9.0 mm'],
      ['Tensile strength', '8 kg - 79 kg'],
      ['Working temperature', '-40°C to +105°C'],
      ['Weather resistance', '10+ years outdoor (ISO 4892-2)'],
      ['Certification', 'CE / RoHS / TUV'],
    ],
    features: [
      'Carbon black formula blocks UV and slows aging',
      'Passed 1,500 h xenon-arc weathering test',
      'Higher heat resistance than standard nylon ties',
      'Ideal for solar panel and PV cable fixing',
    ],
    applications: ['Solar panels', 'Outdoor lighting', 'Telecom cabinets', 'Fencing', 'Marine deck'],
    packaging: '100 pcs / bag, 50 bags / carton',
    moq: '10,000 pcs per size',
  },
  {
    id: 'releasable-cable-tie',
    name: 'Releasable / Reusable Cable Tie',
    model: 'CT-REL150',
    category: 'special',
    image: '/images/product-releasable.png',
    badge: 'Reusable',
    short:
      'Zip ties with a release tab - open and re-use them without cutting, perfect for temporary wiring.',
    description:
      'Releasable cable ties have a small lever on the head. Press the tab and the strap can be pulled back out, so the tie can be reused many times. This saves cost and avoids waste on temporary installations, events, exhibition booths and maintenance work.',
    specs: [
      ['Material', 'PA66 (Nylon 66), 94V-2'],
      ['Color', 'Natural / Black'],
      ['Length', '100 mm / 150 mm / 200 mm / 300 mm'],
      ['Width', '4.8 mm / 7.6 mm'],
      ['Tensile strength', '22 kg / 54 kg'],
      ['Working temperature', '-40°C to +85°C'],
      ['Reuse cycles', '20+ times'],
      ['Certification', 'CE / RoHS'],
    ],
    features: [
      'Press the tab to release - no cutting tool required',
      'Reusable, reduces material waste and cost',
      'Same locking strength as a standard tie',
      'Ideal where cables need frequent re-routing',
    ],
    applications: ['Temporary wiring', 'Events & exhibitions', 'Maintenance', 'Server room', 'Home / office'],
    packaging: '100 pcs / bag, 60 bags / carton',
    moq: '10,000 pcs per size',
  },
  {
    id: 'heavy-duty-cable-tie',
    name: 'Heavy Duty Cable Tie (Large Size)',
    model: 'CT-HD370',
    category: 'special',
    image: '/images/product-heavy-duty.png',
    badge: 'Heavy Duty',
    short:
      'Extra wide and long ties up to 12 mm wide and 1200 mm long, up to 114 kg loop tensile strength.',
    description:
      'Heavy duty cable ties are made for the toughest bundling jobs: large cable trays, pipe fixing, construction scaffolding and industrial machinery. The wider strap distributes pressure over the bundle and the reinforced head withstands high pulling force when used with a tensioning tool.',
    specs: [
      ['Material', 'PA66 (Nylon 66), 94V-2'],
      ['Color', 'Black / Natural'],
      ['Length', '370 mm - 1200 mm'],
      ['Width', '7.6 mm / 9.0 mm / 12.0 mm'],
      ['Tensile strength', '54 kg - 114 kg (120 lb - 250 lb)'],
      ['Working temperature', '-40°C to +85°C'],
      ['Tool', 'Recommended tensioning tool CT-GUN01'],
      ['Certification', 'CE / RoHS / SGS test report'],
    ],
    features: [
      'Up to 114 kg loop tensile strength',
      'Reinforced head with a strong stainless pawl',
      'Works with manual or pneumatic tensioning tools',
      'Heat stabilized version available on request',
    ],
    applications: ['Cable trays', 'Pipe fixing', 'Scaffolding', 'Machinery', 'Shipbuilding'],
    packaging: '50 pcs / bag, 40 bags / carton',
    moq: '5,000 pcs per size',
  },
  {
    id: 'stainless-steel-cable-tie',
    name: 'Stainless Steel Cable Tie (SS304 / SS316)',
    model: 'CT-SS304',
    category: 'metal',
    image: '/images/product-stainless-steel.png',
    badge: 'Metal',
    short:
      'Self-locking metal ties with a ball bearing lock, fire proof and corrosion resistant, up to 538°C.',
    description:
      'Stainless steel cable ties use a roller ball locking mechanism that grips the strap tighter as it is pulled. They will not burn, melt or age, and they resist salt water, acids and most chemicals. Available in bare stainless steel or with a polyester coated (epoxy) strap to prevent galvanic corrosion between metals.',
    specs: [
      ['Material', 'SS304 / SS316 / coated SS304'],
      ['Color', 'Metallic silver / Black coated'],
      ['Length', '100 mm - 1200 mm'],
      ['Width', '4.6 mm / 7.9 mm / 10 mm / 12 mm / 16 mm'],
      ['Thickness', '0.25 mm / 0.3 mm / 0.4 mm'],
      ['Tensile strength', '45 kg - 160 kg'],
      ['Working temperature', '-80°C to +538°C'],
      ['Certification', 'RoHS / ABS / DNV'],
    ],
    features: [
      'Ball-lock design - no crimping tool required',
      'Fire proof, UV proof and corrosion resistant',
      'Coated version avoids contact corrosion with copper',
      'Suitable for extreme temperatures and harsh environments',
    ],
    applications: ['Shipbuilding', 'Oil & gas', 'Railway', 'Power plants', 'Outdoor signage'],
    packaging: '100 pcs / bag, 20 bags / carton',
    moq: '2,000 pcs per size',
  },
  {
    id: 'colored-cable-tie',
    name: 'Colored Nylon Cable Tie',
    model: 'CT-COL200',
    category: 'standard',
    image: '/images/hero.png',
    badge: 'OEM Color',
    short:
      'Any Pantone color for easy cable identification, identification tags and retail packaging.',
    description:
      'Colored cable ties help technicians identify circuits, phases and cable routes at a glance. We match any Pantone / RAL color, and we can also print your logo or part number on the head or on the strap. Popular in retail blister packs and for datacenter color coding.',
    specs: [
      ['Material', 'PA66 (Nylon 66), 94V-2'],
      ['Color', 'Red / Blue / Yellow / Green / any Pantone'],
      ['Length', '80 mm - 500 mm'],
      ['Width', '2.5 mm / 3.6 mm / 4.8 mm / 7.6 mm'],
      ['Tensile strength', '8 kg - 54 kg'],
      ['Working temperature', '-40°C to +85°C'],
      ['Printing', 'Laser / pad printing of logo or text'],
      ['Certification', 'CE / RoHS'],
    ],
    features: [
      'Color matching to any Pantone / RAL number',
      'Color fast - pigments are added in the master-batch',
      'Logo or text printing on the head or strap',
      'Retail blister / header card packaging available',
    ],
    applications: ['Cable identification', 'Data center', 'Retail packs', 'Events', 'Automotive harness'],
    packaging: '100 pcs / bag, or 10 pcs / blister card',
    moq: '20,000 pcs per color',
  },
]

export function getProductById(id) {
  return products.find((p) => p.id === id)
}
