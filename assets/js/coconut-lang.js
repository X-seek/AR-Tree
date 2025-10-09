(function () {
  const translations = {
    th: {
      page: { title: "มะพร้าว" },
      ui: { play: "▶ เล่นเสียง", close: "✖ ปิด" },
      hotspot: {
        trunk: {
          title: "ลำต้น",
          desc: "ลำต้นมะพร้าวเป็นไม้เนื้อแข็ง สูง ตรง และมีข้อเป็นช่วง ๆ",
        },
        leaf: {
          title: "ใบ",
          desc: "ใบมะพร้าวเป็นใบประกอบแบบขนนก ใช้ทำไม้กวาดหรือเครื่องจักสานได้",
        },
        fruit: {
          title: "ผล",
          desc: "ผลมะพร้าวมีน้ำมะพร้าวหวานหอม เนื้อมะพร้าวใช้ประกอบอาหารหรือทำน้ำกะทิได้",
        },
        flower: {
          title: "ดอก",
          desc: "ดอกมะพร้าวออกเป็นช่อ ใช้ทำตาลโตนดหรือน้ำตาลสดได้",
        },
        root: {
          title: "ราก",
          desc: "รากเป็นรากฝอย ช่วยยึดเกาะดินและดูดซึมสารอาหารจากดิน",
        },
        care: {
          title: "การดูแล",
          desc: "ปลูกในดินร่วนระบายน้ำดี รดน้ำสม่ำเสมอ และใส่ปุ๋ยอินทรีย์เพื่อผลผลิตที่ดี",
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
      page: { title: "Coconut" },
      ui: { play: "▶ Play Sound", close: "✖ Close" },
      hotspot: {
        trunk: {
          title: " Trunk",
          desc: "The coconut trunk is tall, straight, and marked with ring-like leaf scars.",
        },
        leaf: {
          title: " Leaf",
          desc: "Coconut leaves are feather-shaped and can be used for making brooms or weaving.",
        },
        fruit: {
          title: "Fruit",
          desc: "Coconut fruit contains sweet water, and its flesh can be used for cooking or making coconut milk.",
        },
        flower: {
          title: "Flower",
          desc: "Coconut flowers grow in clusters and are used for producing palm sugar or fresh sap.",
        },
        root: {
          title: "Root",
          desc: "Coconut roots are fibrous, helping anchor the tree and absorb nutrients.",
        },
        care: {
          title: "Care",
          desc: "Plant in well-drained soil, water regularly, and apply organic fertilizer for better yields.",
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
