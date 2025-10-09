(function () {
  const translations = {
    th: {
      page: { title: "ส้มโอ" },
      ui: { play: "▶ เล่นเสียง", close: "✖ ปิด" },
      hotspot: {
        trunk: {
          title: "ลำต้น",
          desc: "ลำต้นส้มโอเป็นไม้ยืนต้นขนาดกลาง เปลือกเรียบ สีเทาอมเขียว มีกิ่งก้านมากและมีกลิ่นหอมอ่อน ๆ",
        },
        leaf: {
          title: "ใบ",
          desc: "ใบส้มโอเป็นใบเดี่ยว รูปไข่หรือรูปรี ปลายมน โคนเว้าเล็กน้อย ผิวใบมัน สีเขียวเข้ม และมีกลิ่นน้ำมันหอมระเหย",
        },
        fruit: {
          title: "ผล",
          desc: "ผลส้มโอมีขนาดใหญ่ เปลือกหนา เนื้อภายในแบ่งเป็นกลีบ สีชมพูหรือเหลือง รสหวานอมเปรี้ยว มีกลิ่นหอม",
        },
        flower: {
          title: "ดอก",
          desc: "ดอกส้มโอออกเป็นช่อ สีขาว กลีบดอกหนา มีกลิ่นหอมแรง ช่วยดึงดูดแมลงผสมเกสร",
        },
        root: {
          title: "ราก",
          desc: "รากส้มโอเป็นรากแก้วแข็งแรง แผ่กระจาย ช่วยยึดเกาะและดูดซึมธาตุอาหารได้ดี",
        },
        care: {
          title: "การดูแล",
          desc: "ควรปลูกในดินร่วนปนทราย ระบายน้ำดี แสงแดดจัด รดน้ำสม่ำเสมอ และใส่ปุ๋ยอินทรีย์บำรุงผล",
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
        flower: {
          title: "Flower",
          desc: "Pomelo flowers are white, thick-petaled, and strongly fragrant, attracting pollinating insects.",
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
