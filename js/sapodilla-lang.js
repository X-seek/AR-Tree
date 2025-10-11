(function () {
  const translations = {
    th: {
      page: { title: "ละมุด" },
      ui: { play: "▶ เล่นเสียง", close: "✖ ปิด" },
      hotspot: {
        trunk: {
          title: "ลำต้น",
          desc: "ลำต้นละมุดเป็นไม้ยืนต้นขนาดกลางถึงใหญ่ เปลือกสีน้ำตาลเข้ม ผิวหยาบ แตกเป็นร่อง มียางเหนียวสีขาวคล้ายน้ำนม",
        },
        leaf: {
          title: "ใบ",
          desc: "ใบทึบหนา รูปรี ปลายมน โคนสอบ สีเขียวเข้มเป็นมัน ผิวใบเรียบแข็งแรง เรียงสลับกันตามกิ่ง",
        },
        fruit: {
          title: "ผล",
          desc: "ผลละมุดรูปไข่หรือรูปกลม เปลือกสีน้ำตาล เนื้อในนุ่ม รสหวาน มีกลิ่นหอม และมีเมล็ดสีดำมันอยู่ด้านใน",
        },
        flower: {
          title: "ดอก",
          desc: "ดอกละมุดมีสีขาวครีม กลีบดอกเล็กเรียว ออกตามซอกใบหรือกิ่งอ่อน มีกลิ่นหอมอ่อน ๆ",
        },
        root: {
          title: "ราก",
          desc: "รากละมุดเป็นระบบรากแก้วลึก แผ่กระจาย ช่วยยึดต้นและดูดซึมอาหารได้ดี",
        },
        care: {
          title: "การดูแล",
          desc: "ปลูกในดินร่วนซุย ระบายน้ำดี ชอบแสงแดดเต็มวัน รดน้ำสม่ำเสมอ และใส่ปุ๋ยบำรุงผลให้มีรสหวาน",
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
      ui: { play: "▶ Play Sound", close: "✖ Close" },
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
        flower: {
          title: "Flower",
          desc: "Flowers are small, cream-white, and fragrant, growing singly or in small clusters in leaf axils.",
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
