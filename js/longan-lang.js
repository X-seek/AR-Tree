(function () {
  const translations = {
    th: {
      page: { title: "ลำไย" },
      ui: { play: "▶", close: "✖" },
      hotspot: {
        trunk: {
          title: "ลำต้น",
          desc: `ลักษณะลำต้น: เป็นไม้ยืนต้นขนาดใหญ่, เปลือกสีน้ำตาลหรือเทาปนน้ำตาล, เมื่อแก่จัดเปลือกจะ แตกเป็นสะเก็ดและมีร่องขรุขระ

ลักษณะกิ่ง: มีลักษณะกลม มักมีเนื้อไม้ที่ ค่อนข้างเปราะ ทำให้กิ่งหักง่าย เมื่อมีผลผลิต`,
        },
        leaf: {
          title: "ใบ",
          desc: `ลักษณะใบ: เป็น ใบประกอบ (มีใบย่อยหลายใบในก้านเดียว), ใบมีรูปทรงรี ผิวเรียบ ขอบใบเรียบ ส่วนมากมีสีเขียวเข้ม

สรรพคุณใบ: ใบอ่อนหรือใบแก่มีรสหวานจืด ใช้ต้มดื่มเป็นน้ำชาเพื่อ แก้หวัด, ไข้มาลาเรีย, และ ริดสีดวงทวาร
`,
        },
        fruit: {
          title: "ผล",
          desc: `ลักษณะทางกายภาพ: ทรงกลม มีเปลือกบางสีน้ำตาลอ่อนหรือน้ำตาลเหลือง เนื้อใสสีขาวฉ่ำน้ำ หุ้มเมล็ดกลมสีดำเป็นมัน

รสชาติ/เนื้อสัมผัส: รสหวานจัด มีกลิ่นหอมเฉพาะตัว

คุณค่าโภชนาการ: มีไขมันที่ต่ำ อุดมไปด้วย วิตามิน C, วิตามิน B12, โพแทสเซียม, และธาตุเหล็ก

สรรพคุณเด่น: เนื้อลำไยมีสรรพคุณ: 1. บำรุงประสาทและสมอง (ช่วยความจำ, คลายเครียด) 2. บำรุงเลือด และให้พลังงานสูง (รู้สึกสดชื่น) 3. มีสารต้านอนุมูลอิสระ ช่วยลดอาการปวดข้อและกล้ามเนื้อ

สรรพคุณเปลือก: เปลือกผลแห้งสามารถใช้ในการแพทย์พื้นบ้านเพื่อ ขับลม, ถอนพิษ, สมานแผล
`,
        },

        root: {
          title: "ราก",
          desc: `ประเภทราก: เป็นไม้ใบเลี้ยงคู่ มีทั้งรากแก้ว (ถ้าเพาะเมล็ด), รากแขนง, และรากฝอย

การแผ่ราก: ระบบรากของลำไยจะ ค่อนข้างตื้น รากฝอยที่ดูดอาหาร จะกระจายอยู่บริเวณ ใต้ทรงพุ่มและผิวหน้าดิน ทำให้เห็นรากโผล่ขึ้นมาได้

ต้นตอนกิ่ง: ต้นที่ได้จากการตอนกิ่ง ไม่มีรากแก้ว แต่จะมีรากฝอยแผ่กว้าง ทำให้ทรงพุ่มแผ่กว้างกว่าต้นเพาะเมล็ด

การฟื้นฟู: สามารถ ตัดแต่งรากส่วนปลาย (พรวนดินตื้น ๆ รอบทรงพุ่ม) เพื่อกระตุ้นให้รากใหม่แตกออกมาดูดซับอาหารได้ดีขึ้น
`,
        },
        care: {
          title: "การดูแล",
          desc: `แสงแดดและดิน: ต้นลำไยต้องการ แสงแดดจัดเต็มวัน และปลูกในดินที่ ระบายน้ำได้ดี

น้ำ (ทั่วไป): ให้น้ำอย่างสม่ำเสมอ เพื่อช่วยในการเจริญเติบโตและแตกใบอ่อน

น้ำ (เพื่อกระตุ้นดอก)สำคัญมาก: ต้อง งดการให้น้ำ อย่างเด็ดขาดในช่วงที่ต้องการให้ต้นพักตัว (หลังหมดฝน) เพื่อกระตุ้นการออกดอก

การตัดแต่งกิ่ง: ควรตัดแต่งกิ่งให้ ทรงพุ่มโปร่ง และควบคุมความสูง หลังการเก็บเกี่ยวผลผลิต 
เพื่อ: 1. ป้องกันโรคแมลง 2. กระตุ้นการแตกยอดใบใหม่ที่สมบูรณ์
การบังคับดอก: เกษตรกรนิยม ราดสารบังคับให้ออกดอก (เช่น โพแทสเซียมคลอเรต) เพื่อกำหนดช่วงเวลาเก็บเกี่ยวผลผลิตให้เป็นไปตามต้องการ
`,
        },
      },
      gallery: {
        title: "เลือกดูโมเดลต้นไม้",
        items: {
          banana1: "กล้วย",
          coconut1: "มะพร้าว",
          sugarcane1: "อ้อยแดง",
          custardApple1: "น้อยหน่า",
          fig1: "มะเดื่อ",
          mango1: "มะม่วง",
          guava1: "ฝรั่ง",
          lime1: "มะนาว",
          longan1: "ลำไย",
          sapodilla1: "ละมุด",
          pomelo1: "ส้มโอ"
        }
      }
    },

    en: {
      page: { title: "Longan" },
      ui: { play: "▶", close: "✖" },
      hotspot: {
        trunk: {
          title: "Trunk",
          desc: `Trunk characteristics: A large perennial tree, with brown or grayish-brown bark. When mature, the bark peels into flakes and has rough grooves.

Branch characteristics: Round in shape, often with fairly brittle wood, making the branches easy to break when bearing fruit.`,
        },
        leaf: {
          title: "Leaf",
          desc: `Leaf characteristics: Compound leaves (several leaflets on one stem), oval-shaped, smooth surface, entire margins, mostly dark green.

Leaf uses: Young or mature leaves taste mildly sweet and bland. They can be boiled as tea to relieve colds, malaria, and hemorrhoids.`,
        },
        fruit: {
          title: "Fruit",
          desc: `Physical characteristics: Round shape, thin light brown or yellow-brown skin, juicy white flesh, enclosing shiny black round seeds.

Taste/Texture: Very sweet with a distinct fragrance.

Nutritional value: Low in fat, rich in vitamin C, vitamin B12, potassium, and iron.

Key benefits: The flesh of the longan fruit can:

Nourish the nerves and brain (improve memory, relieve stress)

Nourish the blood and provide high energy (feel refreshed)

Contain antioxidants that help reduce joint and muscle pain

Peel benefits: The dried fruit peel can be used in traditional medicine to relieve gas, detoxify, and heal wounds.`,
        },
    
        root: {
          title: "Root",
          desc: `Root type: A dicotyledonous tree with taproots (if grown from seeds), lateral roots, and fibrous roots.

Root spread: The longan’s root system is relatively shallow. The fibrous roots that absorb nutrients spread under the canopy and near the soil surface, sometimes becoming visible above the ground.

Branch layering propagation: Trees propagated from branch layering do not have taproots but have widely spreading fibrous roots, resulting in a broader canopy than seed-grown trees.

Restoration: Shallow trimming or loosening of the outer roots around the canopy can stimulate new roots to grow, improving nutrient absorption.`,
        },
        care: {
          title: "Care",
          desc: `Sunlight and soil: Longan trees need full sun all day and well-drained soil.

Watering (general): Water consistently to support growth and the emergence of new leaves.

Watering (to stimulate flowering) – very important: Stop watering completely during the tree’s resting period (after the rainy season) to trigger flowering.

Pruning: Prune to maintain an open canopy and control height after harvesting to:

Prevent pests and diseases

Stimulate healthy new leaf growth

Flower induction: Farmers often use flower-inducing chemicals (e.g., potassium chlorate) to control the harvest period according to demand.`,
        },
      },
      gallery: {
        title: "Choose a Tree Model",
        items: {
          banana1: "Namwa Banana",
          coconut1: "Aromatic Coconut",
          sugarcane1: "Red Sugarcane",
          custardApple1: "Custard Apple",
          fig1: "Fig",
          mango1: "Mango",
          guava1: "Guava",
          lime1: "Lime",
          longan1: "Longan",
          sapodilla1: "Sapodilla",
          pomelo1: "Pomelo"
        }
      }
    },
  };

  let currentLang = localStorage.getItem("lang") || "th";

  const get = (obj, path) =>
    path.split(".").reduce((o, k) => (o && o[k] != null ? o[k] : undefined), obj);

  function applyStaticTranslations() {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const txt = get(translations[currentLang], key);
      if (txt !== undefined) el.textContent = txt;
    });
  }

  function applyHotspotContent(key) {
    if (!key) return;
    const data = get(translations[currentLang], `hotspot.${key}`);
    if (!data) return;

    const title = document.getElementById("hotspot-title");
    const desc = document.getElementById("hotspot-desc");
    const img = document.getElementById("hotspot-img");

    if (title) title.textContent = data.title;
    if (desc) desc.textContent = data.desc;
    if (img) img.alt = data.title;
  }

  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem("lang", lang);
    applyStaticTranslations();
    applyHotspotContent(window.currentHotspotKey);
  }

  function initToggle() {
    const check = document.getElementById("lang-check");
    if (!check) return;
    check.checked = currentLang === "en";
    check.addEventListener("change", () => {
      setLanguage(check.checked ? "en" : "th");
    });
  }

  window.i18n = {
    setLanguage,
    getCurrentLang: () => currentLang,
    applyHotspotContent,
    initToggle,
  };
})();
