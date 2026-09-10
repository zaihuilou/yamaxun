/**
 * Site-wide information.
 * TODO: replace every value below with your real company information.
 */

export const site = {
  brand: 'YAMAXUN',
  legalName: 'YAMAXUN INDUSTRIAL CO., LTD.',
  tagline: 'Nylon Cable Tie Manufacturer & Supplier',
  description:
    'YAMAXUN is a professional nylon cable tie manufacturer in China, supplying PA66 cable ties, UV resistant ties, releasable ties and stainless steel ties with OEM / ODM service.',

  // Contact
  email: 'sales@yamaxun-industrial.com',
  phone: '+86-574-8888-6688',
  whatsapp: '+86 138 8888 6688',
  wechat: 'yamaxun-sales',
  address: 'No. 128, Yunlin Industrial Zone, Ningbo, Zhejiang, 315000, China',
  workingHours: 'Mon - Sat  08:30 - 18:00 (GMT+8)',

  // Factory facts shown on Home / About
  stats: [
    { value: '18', suffix: '+', label: 'Years of manufacturing experience' },
    { value: '46', suffix: '', label: 'Injection molding machines' },
    { value: '60', suffix: '+', label: 'Export countries & regions' },
    { value: '320', suffix: 'T', label: 'Monthly production capacity' },
  ],

  // Certifications shown on About page
  certificates: [
    { code: 'ISO 9001:2015', title: 'Quality Management System' },
    { code: 'UL 94V-2', title: 'Flammability rating (E-file available)' },
    { code: 'CE', title: 'European conformity' },
    { code: 'RoHS / REACH', title: 'Environmental compliance' },
    { code: 'SGS', title: 'Third party tensile test report' },
    { code: 'BSCI', title: 'Social compliance audit' },
  ],

  // Company milestones
  milestones: [
    {
      year: '2008',
      title: 'Factory founded',
      text: 'Started with 6 injection machines in Ningbo, producing PA66 cable ties for the domestic market.',
    },
    {
      year: '2013',
      title: 'First export order',
      text: 'Shipped the first container to a German distributor and obtained full export licence.',
    },
    {
      year: '2017',
      title: 'ISO 9001 certified',
      text: 'Built an in-house laboratory for tensile strength, aging and flammability testing.',
    },
    {
      year: '2021',
      title: 'New production base',
      text: 'Moved into a 12,000 m² facility with 46 automated injection molding lines.',
    },
    {
      year: '2024',
      title: '60+ countries served',
      text: 'Annual output exceeded 3,800 tons, serving distributors in Europe, North America and the Middle East.',
    },
  ],

  // Why choose us
  advantages: [
    {
      icon: '🏭',
      title: 'Factory direct price',
      text: 'No trading company margin. You buy directly from the manufacturer with a transparent cost structure.',
    },
    {
      icon: '🔬',
      title: 'In-house QC laboratory',
      text: 'Every batch is tested for tensile strength, dimensions, heat aging and flammability before shipment.',
    },
    {
      icon: '🚀',
      title: 'Fast lead time',
      text: 'Standard items ship within 7-10 days. Custom colors, lengths and printing within 15-20 days.',
    },
    {
      icon: '🧩',
      title: 'OEM & ODM service',
      text: 'Custom length, width, color, packaging, logo printing and private label are all supported.',
    },
    {
      icon: '📦',
      title: 'Low MOQ & free samples',
      text: 'MOQ from 10,000 pcs per size. Free samples are sent within 3 working days.',
    },
    {
      icon: '🌍',
      title: 'Export experience',
      text: 'Familiar with EU / US packaging standards, and we handle all export documentation.',
    },
  ],

  // Production / cooperation process
  process: [
    { step: '01', title: 'Send inquiry', text: 'Tell us the size, color, quantity and packaging you need.' },
    { step: '02', title: 'Quotation', text: 'A detailed quotation with specs and photos within 12 hours.' },
    { step: '03', title: 'Samples', text: 'Free samples produced and shipped for your approval.' },
    { step: '04', title: 'Mass production', text: 'Production starts after deposit, with QC reports per batch.' },
    { step: '05', title: 'Delivery', text: 'Sea / air / express shipping with full export documents.' },
  ],

  // Application industries
  industries: [
    { icon: '⚡', name: 'Electrical & Power' },
    { icon: '🚗', name: 'Automotive & EV' },
    { icon: '📡', name: 'Telecom & Data Center' },
    { icon: '🏗️', name: 'Construction' },
    { icon: '🚢', name: 'Marine & Offshore' },
    { icon: '🏠', name: 'Home Appliance' },
    { icon: '🌞', name: 'Solar Energy' },
    { icon: '📦', name: 'Logistics & Packaging' },
  ],

  // Customer feedback
  testimonials: [
    {
      quote:
        'We have been importing cable ties from YAMAXUN for 6 years. Quality is stable, the tensile strength always passes our incoming inspection, and never a delayed shipment.',
      name: 'Michael Brandt',
      role: 'Purchasing Manager, ElektroHandel GmbH (Germany)',
    },
    {
      quote:
        'They made a custom 450 mm black UV tie with our logo on the head. Tooling was fast and the print quality is excellent. Very reliable OEM partner.',
      name: 'Sofia Almeida',
      role: 'Product Director, Cable Solutions Lda (Portugal)',
    },
    {
      quote:
        'Compared with 4 other suppliers, YAMAXUN offered the best balance of price, certification and communication. Samples arrived in 4 days.',
      name: 'David Osei',
      role: 'Owner, Westline Industrial Supply (Ghana)',
    },
  ],

  // Frequently asked questions
  faqs: [
    {
      q: 'What is your MOQ?',
      a: 'For standard sizes the MOQ is 10,000 pcs per size and color. For custom colors or printed logos, the MOQ is 50,000 pcs.',
    },
    {
      q: 'Can I get free samples?',
      a: 'Yes. Samples are free of charge; you only pay the courier cost, or we can send them with your freight collect account (DHL / FedEx / UPS).',
    },
    {
      q: 'What material do you use?',
      a: 'We use 100% virgin PA66 (Nylon 66) from certified suppliers. Recycled material is available on request at a lower price.',
    },
    {
      q: 'What are your payment terms?',
      a: 'T/T 30% deposit and 70% before shipment. L/C at sight is accepted for orders above USD 20,000. PayPal and Western Union for sample orders.',
    },
    {
      q: 'How long is the lead time?',
      a: 'Standard items: 7-10 working days. Custom items: 15-20 working days after sample approval.',
    },
    {
      q: 'Which shipping methods do you support?',
      a: 'EXW, FOB Ningbo / Shanghai, CIF, DDP. We also support Amazon FBA labeling and pallet packing.',
    },
  ],

  /**
   * Inquiry form endpoint (Formcarry).
   * Your endpoint: https://formcarry.com/s/s9LVzQT9xSS
   *
   * To change it: log in to https://formcarry.com -> your form -> Endpoints,
   * copy the URL and replace the value below.
   * Leave it empty to fall back to demo mode (no email is actually sent).
   */
  formEndpoint: 'https://formcarry.com/s/s9LVzQT9xSS',
}
