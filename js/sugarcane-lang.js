(function () {
  const translations = {
    th: {
      page: { title: "อ้อย" },
      ui: { play: "▶ เล่นเสียง", close: "✖ ปิด" },
      hotspot: {
        trunk: {
          title: "ลำต้นอ้อย",
          desc: "ลำต้นอ้อยเป็นข้อปล้องยาว มีน้ำหวานภายใน ใช้ทำเป็นน้ำตาลและน้ำอ้อยได้",
        },
        leaf: {
          title: "ใบอ้อย",
          desc: "ใบอ้อยยาวแคบและมีเส้นกลางใบแข็งแรง ช่วยในการสังเคราะห์แสง",
        },
        fruit: {
          title: "ผลอ้อย",
          desc: "อ้อยไม่ได้ใช้ผล แต่ใช้ลำต้นที่สะสมน้ำตาลเป็นส่วนสำคัญ",
        },
        flower: {
          title: "ดอกอ้อย",
          desc: "ดอกอ้อยออกเป็นช่อฟูสีขาวหรือม่วงอ่อน มักออกเมื่ออ้อยแก่",
        },
        root: {
          title: "รากอ้อย",
          desc: "รากอ้อยเป็นระบบรากฝอย ช่วยดูดซึมอาหารและน้ำจากดิน",
        },
        care: {
          title: "การดูแลอ้อย",
          desc: "ควรปลูกในดินร่วนหรือดินร่วนปนทราย ต้องการแสงแดดมาก และรดน้ำอย่างสม่ำเสมอ",
        },
      },
    },
    en: {
      page: { title: "Sugarcane" },
      ui: { play: "▶ Play Sound", close: "✖ Close" },
      hotspot: {
        trunk: {
          title: "Sugarcane Stem",
          desc: "Sugarcane stems are jointed and filled with sweet juice, used for sugar and cane juice.",
        },
        leaf: {
          title: "Sugarcane Leaf",
          desc: "The leaves are long and narrow with a strong midrib, aiding photosynthesis.",
        },
        fruit: {
          title: "Sugarcane Fruit",
          desc: "Sugarcane is not grown for its fruit but for its stems that store sugar.",
        },
        flower: {
          title: "Sugarcane Flower",
          desc: "Sugarcane flowers grow in fluffy clusters, white or pale purple, usually when the cane matures.",
        },
        root: {
          title: "Sugarcane Root",
          desc: "Sugarcane has fibrous roots that absorb water and nutrients from the soil.",
        },
        care: {
          title: "Sugarcane Care",
          desc: "Plant in loamy or sandy loam soil, requires full sunlight and regular watering.",
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
