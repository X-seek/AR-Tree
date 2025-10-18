(function () {
  const translations = {
    th: {
      page: { title: "ละมุด" },
      ui: { play: "▶", close: "✖" },
      hotspot: {
        trunk: {
          title: "ลำต้น",
          desc: "ยาง: มีสีขาวที่ออกมาจากลำต้นและกิ่ง สามารถนำไปใช้ในอุตสาหกรรม ทำหมากฝรั่ง และรองเท้าบูทได้",
        },
        leaf: {
          title: "ใบ",
          desc: "ลักษณะใบ: ใบเป็นใบเดี่ยว รูปรีหรือรูปไข่ ปลายแหลม โคนใบสอบ ผิวใบมัน สีเขียวเข้ม ออกหนาแน่นที่ปลายกิ่ง",
        },
        fruit: {
          title: "ผล",
          desc: `ลักษณะผล: ผลมีรูปกลมรี หรือรูปไข่ เมื่อดิบมีสีเขียว เมื่อสุกจะมี เปลือกบางสีน้ำตาลแดง

เนื้อ: มีผลสุกมีสีน้ำตาลอมเหลือง มีรสชาติ หวานจัด และมี เนื้อสัมผัสคล้ายเม็ดทราย

ยางในผล: ละมุดดิบ มียางสีขาวและสารฝาดสมาน (แทนนิน) สูง ไม่ควรรับประทาน เพราะจะเฝื่อนลิ้น

คุณค่าโภชนาการ: ใยอาหารสูงมาก (เป็นยาระบายอ่อนๆ), มีวิตามิน A, วิตามิน C, แคลเซียม, ฟอสฟอรัส

สรรพคุณเด่น: มีส่วนช่วย เสริมภูมิคุ้มกัน ป้องกันหวัด, ป้องกันท้องผูก/มะเร็งลำไส้, มีสาร แทนนิน ช่วย ต้านการอักเสบ ในร่างกาย (เช่น กรดไหลย้อน)`,
        },
        root: {
          title: "ราก",
          desc: `ลักษณะราก: เป็นระบบรากแข็งแรง มีรากจำนวนมาก และทนทานต่อการขาดน้ำได้ดี (ถ้าตั้งตัวได้แล้ว)

การเตรียมปลูก: ในกิ่งชำหรือต้นกล้าที่มีรากขด ควร แผ่ช่วย รากออกขณะปลูกเพื่อให้ระบบรากเจริญเติบโตได้ดี

การฟื้นฟู: สำหรับต้นละมุดที่มีอายุมาก อาจ ตัดแต่งรากส่วนปลาย (พรวนดินลึก 10-15 ซม. รอบทรงพุ่ม) เพื่อกระตุ้นให้รากใหม่แตกออกมาและดูดซับสารอาหารได้ดีขึ้น

`,
        },
        care: {
          title: "การดูแล",
          desc: `แสงแดดและอากาศ: ต้นละมุดชอบ อากาศร้อน ต้องการ แสงแดดเต็มที่ตลอดวัน (มากกว่า 6 ชั่วโมง) จึงจะเติบโตได้ดีและมีผลดก

ดิน: ต้นละมุดชอบดินที่ ร่วนซุย และมี อินทรียวัตถุมาก (เช่น ดินดำ/หน้าดิน ผสมปุ๋ยคอกเก่า)

น้ำ: ต้องการน้ำในระดับ ปานกลาง และต้องมีการ ระบายน้ำดี ดินไม่แฉะ ช่วงปลูกแรกๆ ควรรดน้ำวันละครั้ง

การตัดแต่งกิ่ง: ควร ตัดแต่งกิ่งบ้าง เพื่อควบคุมความสูงของต้น (ให้ง่ายต่อการเก็บผล) และช่วยให้ต้นมี ทรงพุ่มสวยงาม

การให้ผลผลิต: ต้นที่ปลูกจาก กิ่งตอน จะให้ผลครั้งแรกภายใน 1 ปี แต่ถ้าปลูกจากเมล็ดจะใช้เวลา 4-5 ปี
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
      page: { title: "Sapodilla" },
      ui: { play: "▶", close: "✖" },
      hotspot: {
        trunk: {
          title: "Trunk",
          desc: "The sapodilla tree is a medium to large evergreen with rough dark brown bark containing milky latex sap.",
        },
        leaf: {
          title: "Leaf",
          desc: "Leaves are thick, glossy, and oval with smooth edges and a dark green color, arranged alternately along branches.",
        },
        fruit: {
          title: "Fruit",
          desc: "Sapodilla fruits are oval or round with brown skin, soft sweet flesh, and glossy black seeds inside.",
        },
        root: {
          title: "Root",
          desc: "Sapodilla has a strong taproot system that spreads deep and helps anchor the tree firmly.",
        },
        care: {
          title: "Care",
          desc: "Grow in well-drained loamy soil under full sunlight. Water regularly and apply fertilizer for sweeter fruits.",
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

  // ✅ โหลดแปลทันทีเมื่อ DOM พร้อม
  document.addEventListener("DOMContentLoaded", () => {
    applyStaticTranslations();
  });
})();
