/**
 * Site-wide information - BILINGUAL.
 *
 * Rules:
 *  - A plain string  -> shared by both languages (brand, email, phone, icons...)
 *  - { en, zh }      -> translated per language, rendered with tv()
 *
 * TODO: replace every value below with your real company information.
 */

export const site = {
  brand: 'sxpackage',
  legalName: {
    en: 'sxpackage INDUSTRIAL CO., LTD.',
    zh: '我们工业有限公司',
  },
  tagline: {
    en: 'Nylon Cable Tie Manufacturer & Supplier',
    zh: '尼龙扎带厂家与供应商',
  },
  description: {
    en: 'sxpackage is a professional nylon cable tie manufacturer in China, supplying PA66 cable ties, UV resistant ties, releasable ties and stainless steel ties with OEM / ODM service.',
    zh: '我们是中国专业的尼龙扎带生产厂家，供应 PA66 扎带、抗紫外线扎带、可重复使用扎带、不锈钢扎带，支持 OEM / ODM 定制。',
  },

  /* Contact (shared) */
  email: 'sales@sxpackage.com',
  phone: '+86-574-8888-6688',
  whatsapp: '+86 138 8888 6688',
  wechat: 'sxpackage-sales',

  address: {
    en: 'No. 128, Yunlin Industrial Zone, Ningbo, Zhejiang, 315000, China',
    zh: '中国浙江省宁波市云林工业区 128 号，邮编 315000',
  },
  workingHours: {
    en: 'Mon - Sat  08:30 - 18:00 (GMT+8)',
    zh: '周一至周六 08:30 - 18:00（北京时间）',
  },

  /* Factory facts shown on Home / About */
  stats: [
    { value: '18', suffix: '+', label: { en: 'Years of manufacturing experience', zh: '年制造经验' } },
    { value: '46', suffix: '', label: { en: 'Injection molding machines', zh: '台注塑机' } },
    { value: '60', suffix: '+', label: { en: 'Export countries & regions', zh: '个出口国家和地区' } },
    { value: '320', suffix: 'T', label: { en: 'Monthly production capacity', zh: '月产能（吨）' } },
  ],

  /* Certifications shown on About page */
  certificates: [
    { code: 'ISO 9001:2015', title: { en: 'Quality Management System', zh: '质量管理体系' } },
    { code: 'CE', title: { en: 'European conformity', zh: '欧盟合规认证' } },
    { code: 'RoHS / REACH', title: { en: 'Environmental compliance', zh: '环保合规认证' } },
    { code: 'SGS', title: { en: 'Third party tensile test report', zh: '第三方拉力检测报告' } },
    { code: 'BSCI', title: { en: 'Social compliance audit', zh: '社会责任审核' } },
  ],

  /* Company milestones */
  milestones: [
    {
      year: '2008',
      title: { en: 'Factory founded', zh: '工厂成立' },
      text: {
        en: 'Started with 6 injection machines in Ningbo, producing PA66 cable ties for the domestic market.',
        zh: '在宁波以 6 台注塑机起步，为国内市场生产 PA66 扎带。',
      },
    },
    {
      year: '2013',
      title: { en: 'First export order', zh: '首笔出口订单' },
      text: {
        en: 'Shipped the first container to a German distributor and obtained full export licence.',
        zh: '向德国经销商发出第一个货柜，并取得完整出口资质。',
      },
    },
    {
      year: '2017',
      title: { en: 'ISO 9001 certified', zh: '通过 ISO 9001 认证' },
      text: {
        en: 'Built an in-house laboratory for tensile strength, aging and flammability testing.',
        zh: '建成自有实验室，可检测拉力、老化与阻燃性能。',
      },
    },
    {
      year: '2021',
      title: { en: 'New production base', zh: '新生产基地投产' },
      text: {
        en: 'Moved into a 12,000 m² facility with 46 automated injection molding lines.',
        zh: '迁入 12,000 平方米新厂区，配备 46 条自动化注塑生产线。',
      },
    },
    {
      year: '2024',
      title: { en: '60+ countries served', zh: '服务 60+ 国家' },
      text: {
        en: 'Annual output exceeded 3,800 tons, serving distributors in Europe, North America and the Middle East.',
        zh: '年产量突破 3,800 吨，服务欧洲、北美、中东等地经销商。',
      },
    },
  ],

  /* Why choose us */
  advantages: [
    {
      icon: '🏭',
      title: { en: 'Factory direct price', zh: '厂家直销价格' },
      text: {
        en: 'No trading company margin. You buy directly from the manufacturer with a transparent cost structure.',
        zh: '没有贸易商差价，直接向厂家采购，成本结构透明。',
      },
    },
    {
      icon: '🧩',
      title: { en: 'OEM & ODM service', zh: 'OEM 与 ODM 服务' },
      text: {
        en: 'Custom length, width, color, packaging, logo printing and private label are all supported.',
        zh: '支持定制长度、宽度、颜色、包装、印刷 logo 及贴牌。',
      },
    },
    {
      icon: '📦',
      title: { en: 'Low MOQ', zh: '低起订量' },
      text: {
        en: 'MOQ from 10,000 pcs per size.',
        zh: '每个规格 10,000 条起订。',
      },
    },
    {
      icon: '🌍',
      title: { en: 'Export experience', zh: '丰富出口经验' },
      text: {
        en: 'Familiar with EU / US packaging standards, and we handle all export documentation.',
        zh: '熟悉欧美包装标准，全套出口单证由我们办理。',
      },
    },
  ],

  /* Production / cooperation process */
  process: [
    {
      step: '01',
      title: { en: 'Send inquiry', zh: '发送询价' },
      text: { en: 'Tell us the size, color, quantity and packaging you need.', zh: '告诉我们您需要的尺寸、颜色、数量和包装。' },
    },
    {
      step: '02',
      title: { en: 'Quotation', zh: '报价' },
      text: { en: 'A detailed quotation with specs and photos within 24 hours.', zh: '24 小时内提供含规格与图片的详细报价。' },
    },
    {
      step: '03',
      title: { en: 'Bulk stocking', zh: '批量备货' },
      text: { en: 'Bulk stocking starts after the deposit is received.', zh: '收到定金之后批量备货。' },
    },
    {
      step: '04',
      title: { en: 'Delivery', zh: '交付发货' },
      text: { en: 'Sea / air / express shipping with full export documents.', zh: '海运 / 空运 / 快递发货，随附全套出口单证。' },
    },
  ],

  /* Application industries */
  industries: [
    { icon: '⚡', name: { en: 'Electrical & Power', zh: '电力电气' } },
    { icon: '🚗', name: { en: 'Automotive & EV', zh: '汽车与新能源' } },
    { icon: '📡', name: { en: 'Telecom & Data Center', zh: '通信与数据中心' } },
    { icon: '🏗️', name: { en: 'Construction', zh: '建筑工程' } },
    { icon: '🚢', name: { en: 'Marine & Offshore', zh: '船舶与海洋工程' } },
    { icon: '🏠', name: { en: 'Home Appliance', zh: '家用电器' } },
    { icon: '🌞', name: { en: 'Solar Energy', zh: '光伏发电' } },
    { icon: '📦', name: { en: 'Logistics & Packaging', zh: '物流包装' } },
  ],

  /* Customer feedback */
  testimonials: [
    {
      quote: {
        en: 'We have been importing cable ties from sxpackage for 6 years. Quality is stable, the tensile strength always passes our incoming inspection, and never a delayed shipment.',
        zh: '从我们进口扎带已经 6 年了。品质稳定，拉力每次都通过我们的来料检验，从来没延误过交期。',
      },
      name: 'Michael Brandt',
      role: { en: 'Purchasing Manager, ElektroHandel GmbH (Germany)', zh: '采购经理，ElektroHandel GmbH（德国）' },
    },
    {
      quote: {
        en: 'They made a custom 450 mm black UV tie with our logo on the head. Tooling was fast and the print quality is excellent. Very reliable OEM partner.',
        zh: '他们为我们定制了 450mm 黑色抗紫外线扎带，头部印着我们的 logo。开模很快，印刷质量也很好，是非常可靠的 OEM 伙伴。',
      },
      name: 'Sofia Almeida',
      role: { en: 'Product Director, Cable Solutions Lda (Portugal)', zh: '产品总监，Cable Solutions Lda（葡萄牙）' },
    },
    {
      quote: {
        en: 'Compared with 4 other suppliers, sxpackage offered the best balance of price, certification and communication.',
        zh: '对比了另外 4 家供应商，我们在价格、认证和沟通上平衡得最好。',
      },
      name: 'David Osei',
      role: { en: 'Owner, Westline Industrial Supply (Ghana)', zh: '负责人，Westline Industrial Supply（加纳）' },
    },
  ],

  /* Frequently asked questions */
  faqs: [
    {
      q: { en: 'What is your MOQ?', zh: '你们的起订量是多少？' },
      a: {
        en: 'For standard sizes the MOQ is 10,000 pcs per size and color. For custom colors or printed logos, the MOQ is 50,000 pcs.',
        zh: '常规规格每个尺寸、每种颜色 10,000 条起订。定制颜色或印刷 logo 的起订量为 50,000 条。',
      },
    },
    {
      q: { en: 'What material do you use?', zh: '你们用什么原料？' },
      a: {
        en: 'We use 100% virgin PA66 (Nylon 66) from certified suppliers. Recycled material is available on request at a lower price.',
        zh: '我们使用认证供应商的 100% 全新 PA66（尼龙66）原料。如需回料也可提供，价格更低。',
      },
    },
    {
      q: { en: 'How long until shipment?', zh: '发货期多久？' },
      a: {
        en: 'Standard items ship in 7-10 working days. Custom items ship in 15-20 working days after confirmation.',
        zh: '常规品 7-10 个工作日发货；定制品确认后 15-20 个工作日发货。',
      },
    },
    {
      q: { en: 'Which shipping methods do you support?', zh: '支持哪些运输方式？' },
      a: {
        en: 'EXW, FOB Ningbo / Shanghai, CIF. We also support Amazon FBA labeling and pallet packing.',
        zh: '支持 EXW、FOB 宁波/上海、CIF。也可提供亚马逊 FBA 贴标和托盘包装。',
      },
    },
  ],

  /**
   * Inquiry form endpoint (Formcarry).
   * Your endpoint: https://formcarry.com/s/s9LVzQT9xSS
   * Leave it empty to fall back to demo mode (no email is actually sent).
   */
  formEndpoint: 'https://formcarry.com/s/s9LVzQT9xSS',
}
