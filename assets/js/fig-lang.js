(function () {
  const translations = {
    th: {
      page: { title: "มะเดื่อ" },
      ui: { play: "▶ เล่นเสียง", close: "✖ ปิด" },
      hotspot: {
        trunk: {
          title: "ลำต้น",
          desc: "ลำต้นน้อยหน่าเป็นไม้พุ่มหรือไม้ยืนต้นขนาดเล็ก ผิวเปลือกค่อนข้างเรียบ แตกกิ่งก้านมาก",
        },
        leaf: {
          title: "ใบ",
          desc: "ใบน้อยหน่าเป็นใบเดี่ยว รูปรีถึงรูปหอก ปลายใบแหลม ผิวใบเรียบ สีเขียวเข้ม",
        },
        fruit: {
          title: "ผล",
          desc: "ผลน้อยหน่ามีเปลือกเป็นปุ่มนูน เนื้อด้านในสีขาว รสหวาน เมล็ดสีดำแข็ง",
        },
        flower: {
          title: "ดอก",
          desc: "ดอกน้อยหน่ามีกลีบเรียวยาว สีเขียวอมเหลือง ออกตามกิ่งหรือซอกใบ",
        },
        root: {
          title: "ราก",
          desc: "รากน้อยหน่าเป็นรากแก้วและรากแขนง ช่วยยึดเกาะดินและดูดซึมธาตุอาหาร",
        },
        care: {
          title: "การดูแล",
          desc: "ควรปลูกในดินร่วน ระบายน้ำดี แดดจัด รดน้ำพอประมาณ และใส่ปุ๋ยบำรุงผล",
        },
      },
      gallery: {
        title: "เลือกดูโมเดลต้นไม้",
        items: {
          banana1: "กล้วย",
          coconut1: "มะพร้าวน้ำหอม",
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
      page: { title: "Fig" },
      ui: { play: "▶ Play Sound", close: "✖ Close" },
      hotspot: {
        trunk: {
          title: "Trunk",
          desc: "The Fig tree is a small shrub or tree with relatively smooth bark and many branches.",
        },
        leaf: {
          title: "Leaf",
          desc: "The leaves are simple, oblong to lance-shaped, with pointed tips and smooth dark-green surfaces.",
        },
        fruit: {
          title: "Fruit",
          desc: "The fruit has a bumpy green rind, with soft sweet white flesh and hard black seeds.",
        },
        flower: {
          title: "Flower",
          desc: "The flowers are long and narrow, greenish-yellow, and bloom along branches or leaf axils.",
        },
        root: {
          title: "Root",
          desc: "The tree has a taproot with lateral roots, anchoring the plant and absorbing nutrients.",
        },
        care: {
          title: "Care",
          desc: "Plant in well-drained loamy soil under full sun, water moderately, and fertilize to improve fruit quality.",
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

  // ✅ โหลดครั้งแรก
  document.addEventListener("DOMContentLoaded", () => {
    applyStaticTranslations();
  });
})();
