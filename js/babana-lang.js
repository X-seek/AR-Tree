(function () {
  const translations = {
    th: {
      page: { title: "กล้วย" },
      ui: { play: "▶ เล่นเสียง", close: "✖ ปิด" },
      hotspot: {
        trunk: {
          title: "ลำต้น",
          desc: "ลำต้นของกล้วยมีลักษณะเป็นกาบซ้อนกัน ไม่ใช่ไม้เนื้อแข็ง",
        },
        leaf: {
          title: "ใบ",
          desc: "ใบกล้วยมีขนาดใหญ่ กว้าง เหมาะสำหรับห่ออาหารและใช้ประโยชน์หลากหลาย",
        },
        fruit: {
          title: "ผล",
          desc: "ผลกล้วยเป็นแหล่งพลังงาน มีคาร์โบไฮเดรต วิตามิน และเกลือแร่",
        },
        flower: {
          title: "ดอก",
          desc: "ดอกกล้วย หรือปลี สามารถนำไปประกอบอาหารได้",
        },
        root: {
          title: "ราก",
          desc: "รากของกล้วยเป็นรากฝอย ช่วยยึดเกาะดินและดูดซึมสารอาหาร",
        },
        care: {
          title: "การดูแล",
          desc: "ควรรดน้ำอย่างสม่ำเสมอและใส่ปุ๋ยเพื่อให้กล้วยเติบโตแข็งแรง",
        },
      },
    },
    en: {
      page: { title: "Banana Tree" },
      ui: { play: "▶ Play Sound", close: "✖ Close" },
      hotspot: {
        trunk: {
          title: "Banana Trunk",
          desc: "The banana trunk consists of overlapping leaf sheaths, not hardwood.",
        },
        leaf: {
          title: "Banana Leaf",
          desc: "Banana leaves are large and wide, suitable for wrapping food and various uses.",
        },
        fruit: {
          title: "Banana Fruit",
          desc: "Banana fruit is an energy source, rich in carbohydrates, vitamins, and minerals.",
        },
        flower: {
          title: "Banana Flower (Blossom)",
          desc: "The banana blossom can be cooked and used in many dishes.",
        },
        root: {
          title: "Banana Root",
          desc: "Banana roots are fibrous, helping anchor the plant and absorb nutrients.",
        },
        care: {
          title: "Banana Care",
          desc: "Water regularly and fertilize to keep the tree strong and healthy.",
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
