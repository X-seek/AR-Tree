(function () {
  const translations = {
    th: {
      page: { title: "มะนาว" },
      ui: { play: "▶", close: "✖" },
      hotspot: {
        trunk: {
          title: "ลำต้น",
          desc: `ลักษณะลำต้น: เป็นไม้พุ่ม มีเปลือกเรียบสีน้ำตาลปนเทา กิ่งอ่อน มีหนามแหลม

สรรพคุณเปลือก/ดอก: ดอกและเปลือกมีส่วนช่วย แก้อาการท้องอืด ท้องเฟ้อ และ ปวดท้อง
`,
        },
        leaf: {
          title: "ใบ",
          desc: `ลักษณะใบ: เป็นใบประกอบ มีใบย่อยใบเดียว รูปไข่หรือรี ปลายแหลม โคนมน ขอบใบหยัก และมี ต่อมน้ำมัน กระจายอยู่ทั่วผิวใบ

สรรพคุณของใบ: ในตำรับยาไทย สามารถใช้ใบเพื่อ ฟอกโลหิต และ แก้ตับทรุด ได้
`,
        },
        fruit: {
          title: "ผล",
          desc: `รูปร่างและขนาด: มีทรงกลมแป้น ขนาดใหญ่ ผิวเกลี้ยง

เปลือก: มีจุดเด่นคือ เปลือกบางเฉียบ และมีกลิ่นหอม

น้ำและรสชาติ: มีปริมาณน้ำที่เยอะมาก มีรสชาติ เปรี้ยวจัด เนื้อสีเขียว

เมล็ด: มีเมล็ดทรงรีสีขาว แต่มี จำนวนเมล็ดน้อย

สรรพคุณเด่น: มีวิตามิน C สูง มาก ช่วย รักษาโรคลักปิดลักเปิด (เลือดออกตามไรฟัน), ช่วยขับเสมหะ, และแก้อาการท้องอืด

การติดผล: เป็นพันธุ์ที่ ติดผลดก และให้ผลผลิตสม่ำเสมอ
`,
        },

        root: {
          title: "ราก",
          desc: `ลักษณะราก: รากหลักเป็นรากแก้ว มีรากแขนงและรากฝอยแผ่ขยายใน แนวนอน มากกว่าแนวดิ่ง

ความลึกของราก: รากที่ดูดซึมอาหารส่วนใหญ่อยู่ในระดับความลึกประมาณ 30–60 ซม. ใต้ผิวดิน

ข้อจำกัดของราก: รากไม่ทนต่อน้ำขัง และมีความเสี่ยงสูงต่อโรค รากเน่าโคนเน่า และ ไส้เดือนฝอย หากดินระบายน้ำไม่ดี

เทคนิคการปลูก: ควร จัดราก ให้แผ่ออกด้านข้างขณะปลูก เพื่อให้รากหากินอาหารได้ง่าย และนิยมปลูกใน บ่อซีเมนต์ เพื่อช่วยควบคุมการระบายน้ำ
`,
        },
        care: {
          title: "การดูแล",
          desc: `แสงแดด: ต้องการ แสงแดดจัดเต็มวัน หรืออย่างน้อย 6-7 ชั่วโมงต่อวัน

ดิน: ควรเป็น ดินร่วนปนทราย ที่มีอินทรียวัตถุสูง และ ต้องระบายน้ำดีมาก

น้ำ: รดน้ำสม่ำเสมอ (วันละ 1 ครั้ง ในช่วงแรก) ห้ามปล่อยให้น้ำขังเด็ดขาด ควรคลุมโคนต้นเพื่อรักษาความชื้น

การใส่ปุ๋ย: เมื่อต้นมะนาวมีอายุ 8 เดือน - 1 ปี ควรใช้ปุ๋ยสูตร สะสมตาดอก เช่น 8–24–24 หรือ 12-24-12 เพื่อกระตุ้นการออกดอก
`,
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
      page: { title: "Lime" },
      ui: { play: "▶", close: "✖" },
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
       
        root: {
          title: "Root",
          desc: "Most lemon roots do not grow very deep from the soil surface, but spread out laterally.",
        },
        care: {
          title: "Care",
          desc: "Plant in well-drained loamy soil, water regularly, and apply organic fertilizer every 1–2 months.",
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
