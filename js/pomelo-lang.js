(function () {
  const translations = {
    th: {
      page: { title: "ส้มโอ" },
      ui: { play: "▶ เล่นเสียง", close: "✖ ปิด" },
      hotspot: {
        trunk: {
          title: "ลำต้น",
          desc: `ประเภท: เป็นส่วนลำต้นหลักของไม้ยืนต้นขนาดใหญ่
ความสูง: มีทรงพุ่มใหญ่และสูงได้ถึง 30 ฟุต
เปลือก: มีลักษณะ เรียบ สีน้ำตาลอ่อน หรือสีเทาอมเหลือง
หนาม ตามกิ่งและลำต้นของส้มโอ อาจมีหนามแหลมสั้น ๆ
เนื้อไม้: ลำต้นมีความแข็งแรง โดยเฉพาะเมื่อใช้ ต้นตอที่มีระบบรากที่แข็งแรง
`,
        },
        leaf: {
          title: "ใบ",
          desc: `ลักษณะใบ: เป็นใบเดี่ยว แต่มี ปีกใบ ขนาดใหญ่คล้ายใบประกอบ แผ่นใบรูปไข่หรือรี ปลายแหลม โคนมน ขอบใบหยักมนหรือเรียบ

กลิ่น: ใบมีต่อมน้ำมัน จึงมี กลิ่นหอมเฉพาะตัว (กลิ่นปร่าหอม)

สรรพคุณของใบ: สามารถใช้ตำพอกเพื่อ แก้ปวดศีรษะได้  สามารถใช้ขยี้ทา ระงับอาการปวดบวม จากแมลงกัดต่อยได้ และช่วย ขับลม และแก้ ลำคออักเสบ หากนำใบมาตากแห้งชงดื่ม`,
        },
        fruit: {
          title: "ผล",
          desc: `เนื้อผล: เนื้อมีรสหวานอมเปรี้ยวหรือหวานจัด ฉ่ำน้ำ และมีเยื่อหุ้มหนา วิตามิน C สูง
สรรพคุณ: เสริมภูมิคุ้มกัน บำรุงผิวพรรณ ช่วยในการเจริญอาหาร แก้เมาสุราได้
เปลือก (ผิว): เปลือกหนา มีรูพรุน (ต่อมน้ำมัน)
สรรพคุณ: ใช้แก้ จุกเสียดแน่นท้อง, ขับเสมหะ, ขับลม และใช้ต้มน้ำอาบ แก้คัน
ดอก: ดอกสีขาว มีกลิ่นหอม ใช้เป็นยาช่วย ขับลม และ ขับเสมหะ

เมล็ด: มีรสขม ใช้แก้ ปวดท้อง และ จุกเสียด แน่นท้อง (ช่วยลดอาการหดตัวผิดปกติของลำไส้เล็ก)
`,
        },
      
        root: {
          title: "ราก",
          desc:  `ลักษณะราก:  แข็งแรง ทนทาน และมีอายุยืนยาว

องค์ประกอบของราก: รากแก้ว (ถ้าเพาะเมล็ด), รากแขนงและ รากฝอย 

ระดับความลึกของราก: ส่วนใหญ่ที่ใช้ดูดซึมอาหารจะอยู่ในระดับ ค่อนข้างตื้น รากที่หนาแน่นที่สุดอยู่แค่ ประมาณ 1–2 ฟุต จากผิวดิน

สรรพคุณ: รากมีรสขมปร่า ใช้ แก้หวัด, แก้ไอ, ช่วยแก้ จุกเสียด และ ขับพยาธิ

เทคนิคการปลูก: นิยมใช้เทคนิค "ยกโขด" และ "เสริมราก" เพื่อให้รากแผ่ขยายและดูดอาหารได้ดี ทำให้ต้นโตเร็ว
 `,
        },
        care: {
          title: "การดูแล",
          desc:  `แสงแดด: ต้องการ แสงแดดจัดเต็มวัน (อย่างน้อย 6 ชั่วโมงต่อวัน)
ดิน: ชอบดินที่ ระบายน้ำดี และมีอินทรียวัตถุสูง
การให้น้ำในระยะเจริญเติบโต: ให้น้ำสม่ำเสมอ การกระตุ้นดอก: ต้อง งดน้ำ 20–30 วัน จนใบเริ่มเหี่ยวเล็กน้อย จากนั้นจึงให้น้ำอย่างเต็มที่

การตัดแต่งกิ่ง(สำคัญ): ควรตัดแต่งกิ่งให้ ทรงพุ่มโปร่ง และควบคุมความสูง หลังการเก็บเกี่ยวผลผลิต เพื่อกระตุ้นการแตกใบอ่อนใหม่

การจัดการผล: ควรมีการ ปลิดผลทิ้ง ให้เหลือปริมาณที่เหมาะสมกับขนาดต้น เพื่อให้ผลที่เหลือ มีขนาดใหญ่และคุณภาพดี
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
          pomelo1: "ส้มโอ",
        },
      },
    },
    en: {
      page: { title: "Pomelo" },
      ui: { play: "▶ Play Sound", close: "✖ Close" },
      hotspot: {
        trunk: {
          title: "Trunk",
          desc: "The pomelo tree is a medium-sized evergreen with smooth gray-green bark and many branches, emitting a mild citrus scent.",
        },
        leaf: {
          title: "Leaf",
          desc: "Pomelo leaves are simple, oval to oblong with a rounded tip and slightly notched base. They are glossy dark green and aromatic.",
        },
        fruit: {
          title: "Fruit",
          desc: "The pomelo fruit is large with thick rind and segmented juicy flesh, pink or yellow, sweet-tart, and fragrant.",
        },
       
        root: {
          title: "Root",
          desc: "Pomelo has a strong taproot system that anchors firmly and absorbs nutrients efficiently.",
        },
        care: {
          title: "Care",
          desc: "Plant in sandy loam soil with good drainage under full sun. Water regularly and use organic fertilizer to enhance fruit quality.",
        },
      },
      gallery: {
        title: "Choose a Tree Model",
        items: {
          banana1: "Banana",
          coconut1: "Coconut",
          sugarcane1: "Red Sugarcane",
          custardApple1: "Custard Apple",
          fig1: "Fig",
          mango1: "Mango",
          guava1: "Guava",
          lime1: "Lime",
          longan1: "Longan",
          sapodilla1: "Sapodilla",
          pomelo1: "Pomelo",
        },
      },
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

  // ✅ โหลดครั้งแรก
  document.addEventListener("DOMContentLoaded", () => {
    applyStaticTranslations();
  });
})();
