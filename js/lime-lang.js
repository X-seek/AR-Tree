(function () {
  const translations = {
    th: {
      page: { title: "มะนาว" },
      ui: { play: "▶", close: "✖" },
      hotspot: {
        trunk: {
          title: "ลำต้น",
          desc: `<b>ลักษณะลำต้น :</b> เป็นไม้พุ่ม มีเปลือกเรียบสีน้ำตาลปนเทา กิ่งอ่อน มีหนามแหลม<br><br>
<b>สรรพคุณเปลือก/ดอก :</b> ดอกและเปลือกมีส่วนช่วยแก้อาการท้องอืด ท้องเฟ้อ และปวดท้อง
`,
        },
        leaf: {
          title: "ใบ",
          desc: `<b>ลักษณะใบ :</b> เป็นใบประกอบมีใบย่อยใบเดียวรูปไข่หรือรีปลายแหลมโคนมน ขอบใบหยักและมีต่อมน้ำมันกระจายอยู่ทั่วผิวใบ<br><br>

<b>สรรพคุณของใบ :</b> ในตำรับยาไทยสามารถใช้ใบเพื่อฟอกโลหิตและแก้ตับทรุดได้
`,
        },
        fruit: {
          title: "ผล",
          desc: `<b>รูปร่างและขนาด :</b> มีทรงกลมแป้น ขนาดใหญ่ ผิวเกลี้ยง<br><br>

<b>เปลือก :</b> มีจุดเด่นคือ เปลือกบางเฉียบ และมีกลิ่นหอม<br><br>

<b>น้ำและรสชาติ :</b> มีปริมาณน้ำที่เยอะมาก มีรสชาติ เปรี้ยวจัด เนื้อสีเขียว<br><br>

<b>เมล็ด :</b> มีเมล็ดทรงรีสีขาว แต่มี จำนวนเมล็ดน้อย<br><br>

<b>สรรพคุณเด่น :</b> มีวิตามิน C สูง มาก ช่วย รักษาโรคลักปิดลักเปิด (เลือดออกตามไรฟัน), ช่วยขับเสมหะ, และแก้อาการท้องอืด<br><br>

<b>การติดผล :</b> เป็นพันธุ์ที่ ติดผลดก และให้ผลผลิตสม่ำเสมอ
`,
        },

        root: {
          title: "ราก",
          desc: `<b>ลักษณะราก :</b> รากหลักเป็นรากแก้ว มีรากแขนงและรากฝอยแผ่ขยายใน แนวนอน มากกว่าแนวดิ่ง<br><br>

<b>ความลึกของราก :</b> รากที่ดูดซึมอาหารส่วนใหญ่อยู่ในระดับความลึกประมาณ 30–60 ซม. ใต้ผิวดิน<br><br>

<b>ข้อจำกัดของราก :</b> รากไม่ทนต่อน้ำขัง และมีความเสี่ยงสูงต่อโรค รากเน่าโคนเน่า และ ไส้เดือนฝอย หากดินระบายน้ำไม่ดี<br><br>

<b>เทคนิคการปลูก :</b> ควร จัดราก ให้แผ่ออกด้านข้างขณะปลูก เพื่อให้รากหากินอาหารได้ง่าย และนิยมปลูกใน บ่อซีเมนต์ เพื่อช่วยควบคุมการระบายน้ำ
`,
        },
        care: {
          title: "การดูแล",
          desc: `<b>แสงแดด :</b> ต้องการ แสงแดดจัดเต็มวัน หรืออย่างน้อย 6-7 ชั่วโมงต่อวัน<br><br>

<b>ดิน :</b> ควรเป็น ดินร่วนปนทราย ที่มีอินทรียวัตถุสูง และ ต้องระบายน้ำดีมาก<br><br>

<b>น้ำ :</b> รดน้ำสม่ำเสมอ (วันละ 1 ครั้ง ในช่วงแรก) ห้ามปล่อยให้น้ำขังเด็ดขาด ควรคลุมโคนต้นเพื่อรักษาความชื้น<br><br>

<b>การใส่ปุ๋ย :</b> เมื่อต้นมะนาวมีอายุ 8 เดือน - 1 ปี ควรใช้ปุ๋ยสูตร สะสมตาดอก เช่น 8–24–24 หรือ 12-24-12 เพื่อกระตุ้นการออกดอก
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
          desc: `<b>Trunk Characteristics :</b> A shrub with smooth bark in brownish-gray color. The young branches have sharp thorns.<br><br>

<b>Medicinal Properties of the Bark/Flowers :</b> Both the flowers and bark help relieve bloating, flatulence, and stomach pain.`,
        },
        leaf: {
          title: "Leaf",
          desc: `<b>Leaf Characteristics :</b> A compound leaf with a single leaflet that is oval or oblong in shape, tapering at the tip and rounded at the base. The edges are serrated, and oil glands are scattered across the leaf surface.
<br><br>
<b>Medicinal Properties of the Leaf :</b> In traditional Thai medicine, the leaves are used to purify the blood and treat liver weakness.`,
        },
        fruit: {
          title: "Fruit",
          desc: `<b>Shape and Size :</b> Round and slightly flattened, large in size, with a smooth surface.<br><br>

<b>Peel :</b> Notably thin and fragrant.<br><br>

<b>Juice and Taste :</b> Contains a lot of juice with an intensely sour flavor and green-colored flesh.<br><br>

<b>Seeds :</b> Oval-shaped and white, but few in number.<br><br>

<b>Key Benefits :</b> Extremely rich in vitamin C, helps prevent scurvy (bleeding gums), relieves phlegm, and eases bloating.<br><br>

<b>Fruit Bearing :</b> This variety produces abundant and consistent yields.`,
        },
       
        root: {
          title: "Root",
          desc: `<b>Root Characteristics :</b> The main root is a taproot, with lateral and fibrous roots spreading more horizontally than vertically.<br><br>

<b>Root Depth :</b> Most nutrient-absorbing roots are found about 30–60 cm below the soil surface.<br><br>

<b>Root Limitations :</b> The roots are not tolerant of waterlogging and are highly susceptible to root rot, collar rot, and nematode infestations if the soil has poor drainage.<br><br>

<b>Planting Technique :</b> The roots should be spread outward during planting to help them absorb nutrients more easily. It’s also common to grow the plant in a cement pot to better control water drainage.`,
        },
        care: {
          title: "Care",
          desc: `<b>Sunlight :</b> Needs full sun all day, or at least 6–7 hours per day.<br><br>

<b>Soil :</b> Should be sandy loam with high organic matter and very good drainage.<br><br>

<b>Watering :</b> Water regularly (once a day at first). Do not let water accumulate. Mulch around the base to keep moisture.<br><br>

<b>Fertilizing :</b> When the lime tree is 8 months–1 year old, use a flowering fertilizer like 8–24–24 or 12–24–12 to stimulate flowering.`,
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
    if (desc) desc.innerHTML = data.desc;
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
