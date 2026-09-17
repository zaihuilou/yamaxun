/**
 * Product catalogue - DATA DRIVEN + BILINGUAL.
 *
 * To add a new product: copy one object below and edit the fields.
 * No new page or component is required.
 *
 * Text fields use { en, zh } and are rendered with tv().
 * Values that are identical in both languages (sizes, temperatures) stay plain strings.
 *
 * Image files live in /public/images  ->  referenced as "/images/xxx.png"
 * Replace the placeholder images with your own photos (English file names only).
 */

export const categories = [
  { key: 'all', label: { en: 'All Products', zh: '全部产品' } },
  { key: 'standard', label: { en: 'Standard Nylon', zh: '常规尼龙' } },
  { key: 'special', label: { en: 'Special Purpose', zh: '特殊用途' } },
  { key: 'metal', label: { en: 'Metal Ties', zh: '金属扎带' } },
]

const spec = (kEn, kZh, vEn, vZh) => ({
  k: { en: kEn, zh: kZh },
  v: { en: vEn, zh: vZh },
})

export const products = [
  {
    id: 'nylon-cable-tie',
    name: { en: 'Nylon 66 Cable Tie (Natural / Black)', zh: '尼龙 66 扎带（本色 / 黑色）' },
    model: 'CT-N66',
    category: 'standard',
    image: '/images/product-nylon-white.png',
    badge: { en: 'Best Seller', zh: '热销款' },
    short: {
      en: 'General purpose PA66 cable ties, from 80 mm to 1200 mm, tensile strength 8 kg to 114 kg.',
      zh: '通用型 PA66 扎带，长度 80mm 至 1200mm，拉力 8kg 至 114kg。',
    },
    description: {
      en: 'Our standard nylon cable ties are molded from 100% virgin PA66 with a self-locking stainless pawl inside the head. They are used worldwide for bundling cables, wires, hoses and pipes. Available in natural (white) and black, with a smooth rounded tail for fast hand or tool installation.',
      zh: '常规尼龙扎带采用 100% 全新 PA66 原料注塑成型，头部内置自锁不锈钢卡齿，全球广泛用于捆扎线缆、软管和管道。提供本色（白色）与黑色，带身尾部圆角处理，手工或工具安装都快捷。',
    },
    specs: [
      spec('Material', '材质', 'PA66 (Nylon 66), 94V-2', 'PA66（尼龙66），94V-2'),
      spec('Color', '颜色', 'Natural / Black (custom colors available)', '本色 / 黑色（可定制颜色）'),
      spec('Length', '长度', '80 mm - 1200 mm (3" - 47")', '80 mm - 1200 mm（3" - 47"）'),
      spec('Width', '宽度', '2.5 / 3.6 / 4.8 / 7.2 / 9.0 / 12.0 mm', '2.5 / 3.6 / 4.8 / 7.2 / 9.0 / 12.0 mm'),
      spec('Tensile strength', '拉力强度', '8 kg - 114 kg (18 lb - 250 lb)', '8 kg - 114 kg'),
      spec('Working temperature', '工作温度', '-40°C to +85°C', '-40°C ~ +85°C'),
      spec('Flammability', '阻燃等级', 'UL 94V-2', 'UL 94V-2'),
      spec('Certification', '认证', 'CE / RoHS / REACH', 'CE / RoHS / REACH'),
    ],
    features: [
      { en: 'Self-locking head with stainless steel pawl for a secure grip', zh: '头部自锁不锈钢卡齿，咬合牢固不滑脱' },
      { en: 'Rounded tail tip for quick insertion and tool-free handling', zh: '尾部圆角设计，穿插顺畅，无需工具' },
      { en: 'Smooth strap edges - no sharp burrs, safe for the installer', zh: '带身边缘光滑无毛刺，不伤手' },
      { en: 'UV resistant version available for outdoor use', zh: '可选抗紫外线款，适用于户外' },
      { en: 'Halogen free and RoHS compliant', zh: '无卤素，符合 RoHS 标准' },
    ],
    applications: [
      { en: 'Wire harness', zh: '线束' },
      { en: 'Panel wiring', zh: '配电柜布线' },
      { en: 'Cable management', zh: '线缆整理' },
      { en: 'Packaging', zh: '包装捆扎' },
      { en: 'DIY & household', zh: '家用 DIY' },
    ],
    packaging: {
      en: '100 pcs / bag, 100 bags / carton (custom polybag with header card available)',
      zh: '100 条 / 袋，100 袋 / 箱（可定制吊卡袋）',
    },
    moq: { en: '10,000 pcs per size', zh: '每个规格 10,000 条' },
  },
  {
    id: 'uv-resistant-cable-tie',
    name: { en: 'UV Resistant Black Cable Tie', zh: '抗紫外线黑色扎带' },
    model: 'CT-UV200',
    category: 'standard',
    image: '/images/product-uv-black.png',
    badge: { en: 'Outdoor', zh: '户外专用' },
    short: {
      en: 'Carbon black stabilized PA66 ties designed for long-term outdoor and solar installation use.',
      zh: '添加炭黑稳定剂的 PA66 扎带，专为长期户外与光伏安装设计。',
    },
    description: {
      en: 'UV resistant cable ties are produced with a special carbon black master-batch that protects the nylon from sunlight degradation. They keep their tensile strength for more than 10 years of outdoor exposure, which makes them the standard choice for solar farms, outdoor lighting and telecom cabinets.',
      zh: '抗紫外线扎带采用特殊炭黑母粒，保护尼龙免受阳光降解。户外暴露 10 年以上仍能保持拉力强度，是光伏电站、户外照明和通信机柜的标准选择。',
    },
    specs: [
      spec('Material', '材质', 'UV stabilized PA66, 94V-2', '抗紫外线 PA66，94V-2'),
      spec('Color', '颜色', 'Black', '黑色'),
      spec('Length', '长度', '100 mm - 900 mm', '100 mm - 900 mm'),
      spec('Width', '宽度', '2.5 / 3.6 / 4.8 / 7.6 / 9.0 mm', '2.5 / 3.6 / 4.8 / 7.6 / 9.0 mm'),
      spec('Tensile strength', '拉力强度', '8 kg - 79 kg', '8 kg - 79 kg'),
      spec('Working temperature', '工作温度', '-40°C to +105°C', '-40°C ~ +105°C'),
      spec('Weather resistance', '耐候性', '10+ years outdoor (ISO 4892-2)', '户外 10 年以上（ISO 4892-2）'),
      spec('Certification', '认证', 'CE / RoHS / TUV', 'CE / RoHS / TUV'),
    ],
    features: [
      { en: 'Carbon black formula blocks UV and slows aging', zh: '炭黑配方阻隔紫外线，延缓老化' },
      { en: 'Passed 1,500 h xenon-arc weathering test', zh: '通过 1,500 小时氙灯老化测试' },
      { en: 'Higher heat resistance than standard nylon ties', zh: '耐热性优于常规尼龙扎带' },
      { en: 'Ideal for solar panel and PV cable fixing', zh: '适合光伏组件与光伏线缆固定' },
    ],
    applications: [
      { en: 'Solar panels', zh: '光伏组件' },
      { en: 'Outdoor lighting', zh: '户外照明' },
      { en: 'Telecom cabinets', zh: '通信机柜' },
      { en: 'Fencing', zh: '围栏' },
      { en: 'Marine deck', zh: '船舶甲板' },
    ],
    packaging: { en: '100 pcs / bag, 50 bags / carton', zh: '100 条 / 袋，50 袋 / 箱' },
    moq: { en: '10,000 pcs per size', zh: '每个规格 10,000 条' },
  },
  {
    id: 'releasable-cable-tie',
    name: { en: 'Releasable / Reusable Cable Tie', zh: '可重复使用扎带（可松式）' },
    model: 'CT-REL150',
    category: 'special',
    image: '/images/product-releasable.png',
    badge: { en: 'Reusable', zh: '可重复使用' },
    short: {
      en: 'Zip ties with a release tab - open and re-use them without cutting, perfect for temporary wiring.',
      zh: '带释放拨片的扎带，无需剪断即可拆下重复使用，非常适合临时布线。',
    },
    description: {
      en: 'Releasable cable ties have a small lever on the head. Press the tab and the strap can be pulled back out, so the tie can be reused many times. This saves cost and avoids waste on temporary installations, events, exhibition booths and maintenance work.',
      zh: '可重复使用扎带的头部设有小拨片，按下即可将带身抽出，扎带可多次重复使用。在临时布线、展会搭建和设备维护场景中既省钱又减少浪费。',
    },
    specs: [
      spec('Material', '材质', 'PA66 (Nylon 66), 94V-2', 'PA66（尼龙66），94V-2'),
      spec('Color', '颜色', 'Natural / Black', '本色 / 黑色'),
      spec('Length', '长度', '100 / 150 / 200 / 300 mm', '100 / 150 / 200 / 300 mm'),
      spec('Width', '宽度', '4.8 mm / 7.6 mm', '4.8 mm / 7.6 mm'),
      spec('Tensile strength', '拉力强度', '22 kg / 54 kg', '22 kg / 54 kg'),
      spec('Working temperature', '工作温度', '-40°C to +85°C', '-40°C ~ +85°C'),
      spec('Reuse cycles', '重复使用次数', '20+ times', '20 次以上'),
      spec('Certification', '认证', 'CE / RoHS', 'CE / RoHS'),
    ],
    features: [
      { en: 'Press the tab to release - no cutting tool required', zh: '按下拨片即可松开，无需剪断工具' },
      { en: 'Reusable, reduces material waste and cost', zh: '可重复使用，减少材料浪费和成本' },
      { en: 'Same locking strength as a standard tie', zh: '锁紧力与常规扎带相同' },
      { en: 'Ideal where cables need frequent re-routing', zh: '适合需要频繁改线的场景' },
    ],
    applications: [
      { en: 'Temporary wiring', zh: '临时布线' },
      { en: 'Events & exhibitions', zh: '活动与展会' },
      { en: 'Maintenance', zh: '设备维护' },
      { en: 'Server room', zh: '机房' },
      { en: 'Home / office', zh: '家庭 / 办公室' },
    ],
    packaging: { en: '100 pcs / bag, 60 bags / carton', zh: '100 条 / 袋，60 袋 / 箱' },
    moq: { en: '10,000 pcs per size', zh: '每个规格 10,000 条' },
  },
  {
    id: 'heavy-duty-cable-tie',
    name: { en: 'Heavy Duty Cable Tie (Large Size)', zh: '重型扎带（大规格）' },
    model: 'CT-HD370',
    category: 'special',
    image: '/images/product-heavy-duty.png',
    badge: { en: 'Heavy Duty', zh: '重型' },
    short: {
      en: 'Extra wide and long ties up to 12 mm wide and 1200 mm long, up to 114 kg loop tensile strength.',
      zh: '加宽加长款，最宽 12mm、最长 1200mm，环拉强度最高 114kg。',
    },
    description: {
      en: 'Heavy duty cable ties are made for the toughest bundling jobs: large cable trays, pipe fixing, construction scaffolding and industrial machinery. The wider strap distributes pressure over the bundle and the reinforced head withstands high pulling force when used with a tensioning tool.',
      zh: '重型扎带用于最严苛的捆扎场景：大型桥架、管道固定、建筑脚手架和工业机械。加宽带身可分散对捆扎物的压力，加强型头部配合拉紧枪可承受更大的拉力。',
    },
    specs: [
      spec('Material', '材质', 'PA66 (Nylon 66), 94V-2', 'PA66（尼龙66），94V-2'),
      spec('Color', '颜色', 'Black / Natural', '黑色 / 本色'),
      spec('Length', '长度', '370 mm - 1200 mm', '370 mm - 1200 mm'),
      spec('Width', '宽度', '7.6 / 9.0 / 12.0 mm', '7.6 / 9.0 / 12.0 mm'),
      spec('Tensile strength', '拉力强度', '54 kg - 114 kg (120 lb - 250 lb)', '54 kg - 114 kg'),
      spec('Working temperature', '工作温度', '-40°C to +85°C', '-40°C ~ +85°C'),
      spec('Tool', '配套工具', 'Recommended tensioning tool CT-GUN01', '建议使用拉紧枪 CT-GUN01'),
      spec('Certification', '认证', 'CE / RoHS / SGS test report', 'CE / RoHS / SGS 检测报告'),
    ],
    features: [
      { en: 'Up to 114 kg loop tensile strength', zh: '环拉强度最高可达 114 kg' },
      { en: 'Reinforced head with a strong stainless pawl', zh: '加强型头部配强力不锈钢卡齿' },
      { en: 'Works with manual or pneumatic tensioning tools', zh: '可配合手动或气动拉紧枪使用' },
      { en: 'Heat stabilized version available on request', zh: '可按需提供耐热稳定型' },
    ],
    applications: [
      { en: 'Cable trays', zh: '电缆桥架' },
      { en: 'Pipe fixing', zh: '管道固定' },
      { en: 'Scaffolding', zh: '脚手架' },
      { en: 'Machinery', zh: '机械设备' },
      { en: 'Shipbuilding', zh: '船舶制造' },
    ],
    packaging: { en: '50 pcs / bag, 40 bags / carton', zh: '50 条 / 袋，40 袋 / 箱' },
    moq: { en: '5,000 pcs per size', zh: '每个规格 5,000 条' },
  },
  {
    id: 'stainless-steel-cable-tie',
    name: { en: 'Stainless Steel Cable Tie (SS304 / SS316)', zh: '不锈钢扎带（SS304 / SS316）' },
    model: 'CT-SS304',
    category: 'metal',
    image: '/images/product-stainless-steel.png',
    badge: { en: 'Metal', zh: '金属' },
    short: {
      en: 'Self-locking metal ties with a ball bearing lock, fire proof and corrosion resistant, up to 538°C.',
      zh: '滚珠自锁式金属扎带，防火、耐腐蚀，耐温可达 538°C。',
    },
    description: {
      en: 'Stainless steel cable ties use a roller ball locking mechanism that grips the strap tighter as it is pulled. They will not burn, melt or age, and they resist salt water, acids and most chemicals. Available in bare stainless steel or with a polyester coated (epoxy) strap to prevent galvanic corrosion between metals.',
      zh: '不锈钢扎带采用滚珠锁紧结构，越拉越紧。不燃烧、不熔化、不老化，耐盐水、耐酸碱及多数化学品。提供裸不锈钢与聚酯（环氧）涂层款，后者可避免与铜等不同金属接触时产生电化学腐蚀。',
    },
    specs: [
      spec('Material', '材质', 'SS304 / SS316 / coated SS304', 'SS304 / SS316 / 涂层 SS304'),
      spec('Color', '颜色', 'Metallic silver / Black coated', '金属银 / 黑色涂层'),
      spec('Length', '长度', '100 mm - 1200 mm', '100 mm - 1200 mm'),
      spec('Width', '宽度', '4.6 / 7.9 / 10 / 12 / 16 mm', '4.6 / 7.9 / 10 / 12 / 16 mm'),
      spec('Thickness', '厚度', '0.25 / 0.3 / 0.4 mm', '0.25 / 0.3 / 0.4 mm'),
      spec('Tensile strength', '拉力强度', '45 kg - 160 kg', '45 kg - 160 kg'),
      spec('Working temperature', '工作温度', '-80°C to +538°C', '-80°C ~ +538°C'),
      spec('Certification', '认证', 'RoHS / ABS / DNV', 'RoHS / ABS / DNV'),
    ],
    features: [
      { en: 'Ball-lock design - no crimping tool required', zh: '滚珠自锁结构，无需压接工具' },
      { en: 'Fire proof, UV proof and corrosion resistant', zh: '防火、防紫外线、耐腐蚀' },
      { en: 'Coated version avoids contact corrosion with copper', zh: '涂层款避免与铜接触产生腐蚀' },
      { en: 'Suitable for extreme temperatures and harsh environments', zh: '适用于极端温度与恶劣环境' },
    ],
    applications: [
      { en: 'Shipbuilding', zh: '船舶制造' },
      { en: 'Oil & gas', zh: '石油天然气' },
      { en: 'Railway', zh: '轨道交通' },
      { en: 'Power plants', zh: '电厂' },
      { en: 'Outdoor signage', zh: '户外标识牌' },
    ],
    packaging: { en: '100 pcs / bag, 20 bags / carton', zh: '100 条 / 袋，20 袋 / 箱' },
    moq: { en: '2,000 pcs per size', zh: '每个规格 2,000 条' },
  },
  {
    id: 'colored-cable-tie',
    name: { en: 'Colored Nylon Cable Tie', zh: '彩色尼龙扎带' },
    model: 'CT-COL200',
    category: 'standard',
    image: '/images/hero.png',
    badge: { en: 'OEM Color', zh: '颜色定制' },
    short: {
      en: 'Any Pantone color for easy cable identification, identification tags and retail packaging.',
      zh: '可按任意潘通色号定制，便于线缆识别、标识管理与零售包装。',
    },
    description: {
      en: 'Colored cable ties help technicians identify circuits, phases and cable routes at a glance. We match any Pantone / RAL color, and we can also print your logo or part number on the head or on the strap. Popular in retail blister packs and for datacenter color coding.',
      zh: '彩色扎带帮助技术人员一眼识别回路、相位和走线路径。我们可匹配任意潘通 / RAL 色号，并可在头部或带身印刷 logo 和料号。广泛用于零售吸塑包装和数据中心色彩管理。',
    },
    specs: [
      spec('Material', '材质', 'PA66 (Nylon 66), 94V-2', 'PA66（尼龙66），94V-2'),
      spec('Color', '颜色', 'Red / Blue / Yellow / Green / any Pantone', '红 / 蓝 / 黄 / 绿 / 任意潘通色'),
      spec('Length', '长度', '80 mm - 500 mm', '80 mm - 500 mm'),
      spec('Width', '宽度', '2.5 / 3.6 / 4.8 / 7.6 mm', '2.5 / 3.6 / 4.8 / 7.6 mm'),
      spec('Tensile strength', '拉力强度', '8 kg - 54 kg', '8 kg - 54 kg'),
      spec('Working temperature', '工作温度', '-40°C to +85°C', '-40°C ~ +85°C'),
      spec('Printing', '印刷', 'Laser / pad printing of logo or text', '激光 / 移印 logo 或文字'),
      spec('Certification', '认证', 'CE / RoHS', 'CE / RoHS'),
    ],
    features: [
      { en: 'Color matching to any Pantone / RAL number', zh: '可按任意潘通 / RAL 色号配色' },
      { en: 'Color fast - pigments are added in the master-batch', zh: '色母粒添加，颜色牢固不易褪' },
      { en: 'Logo or text printing on the head or strap', zh: '头部或带身可印刷 logo 或文字' },
      { en: 'Retail blister / header card packaging available', zh: '可提供零售吸塑 / 吊卡包装' },
    ],
    applications: [
      { en: 'Cable identification', zh: '线缆标识' },
      { en: 'Data center', zh: '数据中心' },
      { en: 'Retail packs', zh: '零售装' },
      { en: 'Events', zh: '活动展会' },
      { en: 'Automotive harness', zh: '汽车线束' },
    ],
    packaging: {
      en: '100 pcs / bag, or 10 pcs / blister card',
      zh: '100 条 / 袋，或 10 条 / 吸塑卡',
    },
    moq: { en: '20,000 pcs per color', zh: '每种颜色 20,000 条' },
  },
]

export function getProductById(id) {
  return products.find((p) => p.id === id)
}
