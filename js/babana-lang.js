(function () {
  const translations = {
    th: {
      page: { title: "กล้วย" },
      ui: { play: "▶ เล่นเสียง", close: "✖ ปิด" },
      hotspot: {
        trunk: { title: "ลำต้น", desc: "ลำต้นมีลักษณะเป็นกาบซ้อนกัน" },
        leaf: { title: "ใบ", desc: "ใบมีขนาดใหญ่ ใช้ประโยชน์ได้หลากหลาย" },
        fruit: { title: "ผล", desc: "ผลเป็นแหล่งพลังงาน" },
        flower: { title: "ดอก", desc: "ดอกสามารถนำไปประกอบอาหารได้" },
        root: { title: "ราก", desc: "รากเป็นรากฝอย" },
        care: { title: "การดูแล", desc: "รดน้ำและใส่ปุ๋ยอย่างเหมาะสม" },
      },
      gallery: {
        title: "เลือกดูโมเดลต้นไม้",
        items: {
          banana1: "กล้วยน้ำว้า",
          coconut1: "มะพร้าวน้ำหอม",
          sugarcane1: "อ้อยแดง",
          custardapple1: "น้อยหน่า",
          fig1: "มะเดื่อ",
          mango1: "มะม่วง",
          guava1: "ฝรั่ง",
          lime1: "มะนาว",
          sapadilla1: "ละมุด",
        },
      },
    },

    en: {
      page: { title: "Banana Tree" },
      ui: { play: "▶ Play Sound", close: "✖ Close" },
      hotspot: {
        trunk: { title: "Trunk", desc: "The trunk consists of overlapping sheaths." },
        leaf: { title: "Leaf", desc: "Leaves are large and multipurpose." },
        fruit: { title: "Fruit", desc: "Fruit is a source of energy." },
        flower: { title: "Flower", desc: "Flower can be used in cooking." },
        root: { title: "Root", desc: "Root is fibrous." },
        care: { title: "Care", desc: "Water and fertilize properly." },
      },
      gallery: {
        title: "Choose a Tree Model",
        items: {
          banana1: "Namwa Banana",
          coconut1: "Aromatic Coconut",
          sugarcane1: "Red Sugarcane",
          custardapple1: "Custard Apple",
          fig1: "Fig",
          mango1: "Mango",
          guava1: "Guava",
          lime1: "Lime",
          sapadilla1: "Sapodilla",
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

    const titleEl = document.querySelector(".title");
    if (titleEl)
      titleEl.textContent =
        get(translations[currentLang], "page.title") || titleEl.textContent;
  }

  function applyHotspotContent(key) {
    if (!key) return;
    const data = get(translations[currentLang], `hotspot.${key}`);
    if (!data) return;
    const title = document.getElementById("hotspot-title");
    const desc = document.getElementById("hotspot-desc");
    if (title) title.textContent = data.title;
    if (desc) desc.textContent = data.desc;
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
    setLanguage(currentLang);
  }

  window.i18n = {
    setLanguage,
    getCurrentLang: () => currentLang,
    applyHotspotContent,
    initToggle,
    applyStaticTranslations, // ✅ เพิ่มไว้ให้เรียกซ้ำได้ตอน fragment โหลด
  };
})();
