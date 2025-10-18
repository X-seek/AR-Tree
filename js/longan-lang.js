(function () {
  const translations = {
    th: {
      page: { title: "ลำไย" },
      ui: { play: "▶", close: "✖" },
      hotspot: {
        trunk: {
          title: "ลำต้น",
          desc: "ลำต้นลำไยเป็นไม้ยืนต้นขนาดกลาง เปลือกสีน้ำตาลเทา ผิวขรุขระ แตกกิ่งก้านมาก",
        },
        leaf: {
          title: "ใบ",
          desc: `ลักษณะใบ: เป็น ใบประกอบ (มีใบย่อยหลายใบในก้านเดียว), ใบมีรูปทรงรี ผิวเรียบ ขอบใบเรียบ ส่วนมากมีสีเขียวเข้ม

สรรพคุณใบ: ใบอ่อนหรือใบแก่มีรสหวานจืด ใช้ต้มดื่มเป็นน้ำชาเพื่อ แก้หวัด, ไข้มาลาเรีย, และ ริดสีดวงทวาร

ลำต้น
ลักษณะลำต้น: เป็นไม้ยืนต้นขนาดใหญ่, เปลือกสีน้ำตาลหรือเทาปนน้ำตาล, เมื่อแก่จัดเปลือกจะ แตกเป็นสะเก็ดและมีร่องขรุขระ

ลักษณะกิ่ง: มีลักษณะกลม มักมีเนื้อไม้ที่ ค่อนข้างเปราะ ทำให้กิ่งหักง่าย เมื่อมีผลผลิตมาก
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

การตัดแต่งกิ่ง: ควรตัดแต่งกิ่งให้ ทรงพุ่มโปร่ง และควบคุมความสูง หลังการเก็บเกี่ยวผลผลิต เพื่อ: 1. ป้องกันโรคแมลง 2. กระตุ้นการแตกยอดใบใหม่ที่สมบูรณ์

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
          desc: "The longan tree is a medium-sized evergreen tree with rough grayish-brown bark and many branches.",
        },
        leaf: {
          title: "Leaf",
          desc: "Longan leaves are pinnate with 4–6 pairs of glossy dark green leaflets shaped like ovals.",
        },
        fruit: {
          title: "Fruit",
          desc: "Longan fruits are round with thin brown skin, translucent white flesh that is sweet and aromatic, and a single shiny black seed.",
        },
    
        root: {
          title: "Root",
          desc: "The root system is composed of a taproot and lateral roots, helping the tree anchor and absorb nutrients effectively.",
        },
        care: {
          title: "Care",
          desc: "Plant in well-drained loamy soil under full sunlight. Water regularly and fertilize seasonally to promote healthy fruiting.",
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
