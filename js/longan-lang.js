(function () {
  const translations = {
    th: {
      page: { title: "ลำไย" },
      ui: { play: "▶ เล่นเสียง", close: "✖ ปิด" },
      hotspot: {
        trunk: {
          title: "ลำต้น",
          desc: "ลำต้นลำไยเป็นไม้ยืนต้นขนาดกลาง เปลือกสีน้ำตาลเทา ผิวขรุขระ แตกกิ่งก้านมาก",
        },
        leaf: {
          title: "ใบ",
          desc: "ใบลำไยเป็นใบประกอบแบบขนนก มีใบย่อย 4-6 คู่ รูปรี สีเขียวเข้มเป็นมัน",
        },
        fruit: {
          title: "ผล",
          desc: "ผลลำไยกลม เปลือกบางสีน้ำตาล เนื้อในสีขาวใส รสหวาน มีกลิ่นหอม และมีเมล็ดเดียวสีดำมัน",
        },
        flower: {
          title: "ดอก",
          desc: "ดอกลำไยออกเป็นช่อใหญ่ที่ปลายกิ่ง สีขาวนวลหรือเหลืองอ่อน มีกลิ่นหอมอ่อน ๆ",
        },
        root: {
          title: "ราก",
          desc: "รากลำไยเป็นระบบรากแก้วและรากแขนง ช่วยยึดเกาะดินและดูดซึมธาตุอาหารได้ดี",
        },
        care: {
          title: "การดูแล",
          desc: "ควรปลูกในดินร่วนซุย ระบายน้ำดี ต้องการแสงแดดเต็มวัน รดน้ำสม่ำเสมอ และใส่ปุ๋ยบำรุงผลตามฤดูกาล",
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
          pomelo1: "ส้มโอ"
        }
      }
    },

    en: {
      page: { title: "Longan" },
      ui: { play: "▶ Play Sound", close: "✖ Close" },
      hotspot: {
        trunk: {
          title: "Trunk",
          desc: "The longan tree is a medium-sized evergreen tree with rough grayish-brown bark and many branches.",
        },
        leaf: {
          title: "Leaf",
          desc: "Longan leaves are pinnate with 4–6 pairs of glossy dark green leaflets shaped like ovals.",
        },
        fruit: {
          title: "Fruit",
          desc: "Longan fruits are round with thin brown skin, translucent white flesh that is sweet and aromatic, and a single shiny black seed.",
        },
        flower: {
          title: "Flower",
          desc: "Longan flowers grow in large clusters at branch tips, pale yellow or cream-colored with a mild fragrance.",
        },
        root: {
          title: "Root",
          desc: "The root system is composed of a taproot and lateral roots, helping the tree anchor and absorb nutrients effectively.",
        },
        care: {
          title: "Care",
          desc: "Plant in well-drained loamy soil under full sunlight. Water regularly and fertilize seasonally to promote healthy fruiting.",
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
})();
