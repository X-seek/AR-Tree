(function () {
  const translations = {
    th: {
      page: { title: "มะนาว" },
      ui: { play: "▶ เล่นเสียง", close: "✖ ปิด" },
      hotspot: {
        trunk: {
          title: "ลำต้น",
          desc: "ลำต้นมีลักษณะเป็นไม้พุ่มขนาดเล็ก มีกิ่งก้านมีหนาม เปลือกสีเขียวอมเทา",
        },
        leaf: {
          title: "ใบ",
          desc: "ใบเดี่ยว สีเขียวเข้ม มีกลิ่นหอมเฉพาะตัวเมื่อขยี้ นิยมใช้ปรุงอาหาร",
        },
        fruit: {
          title: "ผล",
          desc: "ผลมีลักษณะกลม เปลือกบาง สีเขียวถึงเหลือง รสเปรี้ยว นิยมใช้ปรุงอาหารและเครื่องดื่ม",
        },
        flower: {
          title: "ดอก",
          desc: "ดอกสีขาว มีกลิ่นหอมอ่อน ๆ ออกตามซอกใบหรือตามกิ่ง",
        },
        root: {
          title: "ราก",
          desc: "",
        },
        care: {
          title: "การดูแล",
          desc: "ควรปลูกในดินร่วนซุย ระบายน้ำดี รดน้ำสม่ำเสมอ และใส่ปุ๋ยอินทรีย์ทุก 1-2 เดือน",
        },
      },
    },
    en: {
      page: { title: "Lime" },
      ui: { play: "▶ Play Sound", close: "✖ Close" },
      hotspot: {
        trunk: {
          title: "Trunk",
          desc: "A small shrub with thorny branches and gray-green bark.",
        },
        leaf: {
          title: "Leaf",
          desc: "Dark green leaves with a pleasant citrus aroma, often used in cooking.",
        },
        fruit: {
          title: "Fruit",
          desc: "Small round fruit with thin green to yellow skin and sour juice, used in food and drinks.",
        },
        flower: {
          title: "Flower",
          desc: "White, mildly fragrant flowers that bloom along branches or leaf axils.",
        },
        root: {
          title: "Root",
          desc: "",
        },
        care: {
          title: "Care",
          desc: "Plant in well-drained loamy soil, water regularly, and apply organic fertilizer every 1–2 months.",
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
})();
