(function () {
  const translations = {
    th: {
      page: { title: "มะพร้าว" },
      ui: { play: "▶ เล่นเสียง", close: "✖ ปิด" },
      hotspot: {
        trunk: {
          title: "ลำต้นมะพร้าว",
          desc: "ลำต้นมะพร้าวเป็นไม้เนื้อแข็ง สูง ตรง และมีข้อเป็นช่วง ๆ",
        },
        leaf: {
          title: "ใบมะพร้าว",
          desc: "ใบมะพร้าวเป็นใบประกอบแบบขนนก ใช้ทำไม้กวาดหรือเครื่องจักสานได้",
        },
        fruit: {
          title: "ผลมะพร้าว",
          desc: "ผลมะพร้าวมีน้ำมะพร้าวหวานหอม เนื้อมะพร้าวใช้ประกอบอาหารหรือทำน้ำกะทิได้",
        },
        flower: {
          title: "ดอกมะพร้าว",
          desc: "ดอกมะพร้าวออกเป็นช่อ ใช้ทำตาลโตนดหรือน้ำตาลสดได้",
        },
        root: {
          title: "รากมะพร้าว",
          desc: "รากเป็นรากฝอย ช่วยยึดเกาะดินและดูดซึมสารอาหารจากดิน",
        },
        care: {
          title: "การดูแลมะพร้าว",
          desc: "ปลูกในดินร่วนระบายน้ำดี รดน้ำสม่ำเสมอ และใส่ปุ๋ยอินทรีย์เพื่อผลผลิตที่ดี",
        },
      },
    },
    en: {
      page: { title: "Coconut" },
      ui: { play: "▶ Play Sound", close: "✖ Close" },
      hotspot: {
        trunk: {
          title: "Coconut Trunk",
          desc: "The coconut trunk is tall, straight, and marked with ring-like leaf scars.",
        },
        leaf: {
          title: "Coconut Leaf",
          desc: "Coconut leaves are feather-shaped and can be used for making brooms or weaving.",
        },
        fruit: {
          title: "Coconut Fruit",
          desc: "Coconut fruit contains sweet water, and its flesh can be used for cooking or making coconut milk.",
        },
        flower: {
          title: "Coconut Flower",
          desc: "Coconut flowers grow in clusters and are used for producing palm sugar or fresh sap.",
        },
        root: {
          title: "Coconut Root",
          desc: "Coconut roots are fibrous, helping anchor the tree and absorb nutrients.",
        },
        care: {
          title: "Coconut Care",
          desc: "Plant in well-drained soil, water regularly, and apply organic fertilizer for better yields.",
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
