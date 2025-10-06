// js/babana-lang.js
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
        care: { title: "การดูแล", desc: "รดน้ำและใส่ปุ๋ยอย่างเหมาะสม" }
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
      page: { title: "Banana" },
      ui: { play: "▶ Play Sound", close: "✖ Close" },
      hotspot: {
        trunk: { title: "Trunk", desc: "The trunk consists of overlapping sheaths." },
        leaf: { title: "Leaf", desc: "Leaves are large and multipurpose." },
        fruit: { title: "Fruit", desc: "Fruit is a source of energy." },
        flower: { title: "Flower", desc: "Flower can be used in cooking." },
        root: { title: "Root", desc: "Root is fibrous." },
        care: { title: "Care", desc: "Water and fertilize properly." }
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
          pomelo1: "Pomelo"
        }
      }
    }
  };

  // current language (persist)
  let currentLang = localStorage.getItem("lang") || "th";

  const get = (obj, path) =>
    path.split(".").reduce((o, k) => (o && o[k] != null ? o[k] : undefined), obj);

  // translate a single element (supports setting textContent or alt)
  function translateElement(el) {
    const key = el.getAttribute("data-i18n");
    if (!key) return;
    const txt = get(translations[currentLang], key);
    if (txt === undefined) return;

    // if element is img and has data-i18n, set alt instead of textContent
    if (el.tagName.toLowerCase() === "img") {
      el.alt = txt;
      return;
    }

    // otherwise set textContent
    el.textContent = txt;
  }

  // apply translations to all elements with data-i18n
  function applyStaticTranslations() {
    // Find elements newly added by fragments as well
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      translateElement(el);
    });

    // update title overlay if present (fallback)
    const titleEl = document.querySelector(".title");
    if (titleEl) {
      const t = get(translations[currentLang], "page.title");
      if (t !== undefined) titleEl.textContent = t;
    }
  }

  // apply hotspot texts (for the popup UI)
  function applyHotspotContent(key) {
    if (!key) return;
    const data = get(translations[currentLang], `hotspot.${key}`);
    if (!data) return;

    const title = document.getElementById("hotspot-title");
    const desc = document.getElementById("hotspot-desc");
    if (title && data.title) title.textContent = data.title;
    if (desc && data.desc) desc.textContent = data.desc;
  }

  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem("lang", lang);
    applyStaticTranslations();
    // update hotspot UI if currently open
    applyHotspotContent(window.currentHotspotKey);
  }

  function initToggle() {
    const check = document.getElementById("lang-check");
    if (!check) return;
    // set initial checkbox state
    check.checked = currentLang === "en";
    check.addEventListener("change", () => {
      setLanguage(check.checked ? "en" : "th");
    });
    // apply immediately
    applyStaticTranslations();
  }

  // Expose API
  window.i18n = {
    setLanguage,
    getCurrentLang: () => currentLang,
    applyHotspotContent,
    applyStaticTranslations,
    initToggle
  };

  // If script is loaded after DOM fully ready, apply translations once.
  if (document.readyState === "complete" || document.readyState === "interactive") {
    // but fragments may be loaded later; we still apply here for elements present
    applyStaticTranslations();
  } else {
    document.addEventListener("DOMContentLoaded", applyStaticTranslations);
  }
})();
