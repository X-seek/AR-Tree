(function () {
  const translations = {
    th: {
      page: { title: "ละมุด" },
      ui: { play: "▶", close: "✖" },
      hotspot: {
        trunk: {
          title: "ลำต้น",
          desc: `ประเภท: เป็นส่วนลำต้นหลักของไม้ยืนต้นขนาดใหญ่
ความสูง: มีทรงพุ่มใหญ่และสูงได้ถึง 30 ฟุต
เปลือก: มีลักษณะ เรียบ สีน้ำตาลอ่อน หรือสีเทาอมเหลือง
หนาม ตามกิ่งและลำต้นของส้มโอ อาจมีหนามแหลมสั้น ๆ
เนื้อไม้: ลำต้นมีความแข็งแรง โดยเฉพาะเมื่อใช้ ต้นตอที่มีระบบรากที่แข็งแรง
`,
        },
        leaf: {
          title: "ใบ",
          desc: `ลักษณะใบ: เป็นใบเดี่ยว แต่มี ปีกใบ ขนาดใหญ่คล้ายใบประกอบ แผ่นใบรูปไข่หรือรี ปลายแหลม โคนมน ขอบใบหยักมนหรือเรียบ

กลิ่น: ใบมีต่อมน้ำมัน จึงมี กลิ่นหอมเฉพาะตัว (กลิ่นปร่าหอม)

สรรพคุณของใบ: สามารถใช้ตำพอกเพื่อ แก้ปวดศีรษะได้  สามารถใช้ขยี้ทา ระงับอาการปวดบวม จากแมลงกัดต่อยได้ และช่วย ขับลม และแก้ ลำคออักเสบ หากนำใบมาตากแห้งชงดื่ม
`,
        },
        fruit: {
          title: "ผล",
          desc: `ลักษณะผล: ผลมีรูปกลมรี หรือรูปไข่ เมื่อดิบมีสีเขียว เมื่อสุกจะมี เปลือกบางสีน้ำตาลแดง

เนื้อ: มีผลสุกมีสีน้ำตาลอมเหลือง มีรสชาติ หวานจัด และมี เนื้อสัมผัสคล้ายเม็ดทราย

ยางในผล: ละมุดดิบ มียางสีขาวและสารฝาดสมาน (แทนนิน) สูง ไม่ควรรับประทาน เพราะจะเฝื่อนลิ้น

คุณค่าโภชนาการ: ใยอาหารสูงมาก (เป็นยาระบายอ่อนๆ), มีวิตามิน A, วิตามิน C, แคลเซียม, ฟอสฟอรัส

สรรพคุณเด่น: มีส่วนช่วย เสริมภูมิคุ้มกัน ป้องกันหวัด, ป้องกันท้องผูก/มะเร็งลำไส้, มีสาร แทนนิน ช่วย ต้านการอักเสบ ในร่างกาย (เช่น กรดไหลย้อน)`,
        },
        root: {
          title: "ราก",
          desc: `ลักษณะราก: เป็นระบบรากแข็งแรง มีรากจำนวนมาก และทนทานต่อการขาดน้ำได้ดี (ถ้าตั้งตัวได้แล้ว)

การเตรียมปลูก: ในกิ่งชำหรือต้นกล้าที่มีรากขด ควร แผ่ช่วย รากออกขณะปลูกเพื่อให้ระบบรากเจริญเติบโตได้ดี

การฟื้นฟู: สำหรับต้นละมุดที่มีอายุมาก อาจ ตัดแต่งรากส่วนปลาย (พรวนดินลึก 10-15 ซม. รอบทรงพุ่ม) เพื่อกระตุ้นให้รากใหม่แตกออกมาและดูดซับสารอาหารได้ดีขึ้น
`,
        },
        care: {
          title: "การดูแล",
          desc: `แสงแดดและอากาศ: ต้นละมุดชอบ อากาศร้อน ต้องการ แสงแดดเต็มที่ตลอดวัน (มากกว่า 6 ชั่วโมง) จึงจะเติบโตได้ดีและมีผลดก

ดิน: ต้นละมุดชอบดินที่ ร่วนซุย และมี อินทรียวัตถุมาก (เช่น ดินดำ/หน้าดิน ผสมปุ๋ยคอกเก่า)

น้ำ: ต้องการน้ำในระดับ ปานกลาง และต้องมีการ ระบายน้ำดี ดินไม่แฉะ ช่วงปลูกแรกๆ ควรรดน้ำวันละครั้ง

การตัดแต่งกิ่ง: ควร ตัดแต่งกิ่งบ้าง เพื่อควบคุมความสูงของต้น (ให้ง่ายต่อการเก็บผล) และช่วยให้ต้นมี ทรงพุ่มสวยงาม

การให้ผลผลิต: ต้นที่ปลูกจาก กิ่งตอน จะให้ผลครั้งแรกภายใน 1 ปี แต่ถ้าปลูกจากเมล็ดจะใช้เวลา 4-5 ปี
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
          pomelo1: "ส้มโอ",
        },
      },
    },

    en: {
      page: { title: "Sapodilla" },
      ui: { play: "▶", close: "✖" },
      hotspot: {
        trunk: {
          title: "Trunk",
          desc: `Type: The main trunk of a large perennial tree.

Height: Has a large canopy and can grow up to 30 feet tall.

Bark: Smooth, light brown or yellowish-gray.

Thorns: Branches and trunk may have short, sharp thorns.

Wood: Strong trunk, especially when the tree is grafted onto a rootstock with a robust root system.`,
        },
        leaf: {
          title: "Leaf",
          desc: `Leaf characteristics: Simple leaves with large wing-like extensions resembling compound leaves; the leaf blade is oval or elliptical, pointed at the tip, rounded at the base, with either smooth or slightly wavy edges.

Scent: The leaves have oil glands, giving them a distinct fragrant smell (slightly pungent and sweet).

Leaf uses: Can be crushed and applied to relieve headaches, rubbed on insect bites to reduce pain and swelling, and used to relieve gas and sore throat. Dried leaves can be brewed as tea.`,
        },
        fruit: {
          title: "Fruit",
          desc: `Fruit characteristics: The fruit is oval or oblong. When unripe, it is green; when ripe, it has a thin reddish-brown skin.

Flesh: The ripe fruit is yellowish-brown, very sweet, with a grainy texture.

Latex in fruit: Unripe sap contains white latex and high tannins, which should not be eaten as it can make the tongue astringent.

Nutritional value: Very high in dietary fiber (mild laxative effect), contains vitamin A, vitamin C, calcium, and phosphorus.

Key benefits: Helps boost immunity, prevent colds, relieve constipation, reduce the risk of colon cancer, and tannins provide anti-inflammatory effects in the body (e.g., for acid reflux).`,
        },
        root: {
          title: "Root",
          desc: `Root characteristics: Strong root system with many roots, highly drought-tolerant once established.

Planting preparation: For cuttings or seedlings with coiled roots, spread the roots during planting to help the root system grow well.

Restoration: For older sapodilla trees, trim the outer roots (loosen soil 10–15 cm deep around the canopy) to stimulate new root growth and improve nutrient absorption.`,
        },
        care: {
          title: "Care",
          desc: `Sunlight and climate: Sapodilla trees prefer hot weather and need full sun all day (more than 6 hours) to grow well and produce abundant fruit.

Soil: Prefers loose, fertile soil rich in organic matter (e.g., topsoil mixed with aged compost).

Watering: Requires moderate water and good drainage; soil should not be waterlogged. During the first planting stage, water once a day.

Pruning: Prune occasionally to control tree height (for easier harvesting) and to maintain a nice canopy shape.

Fruit production: Trees propagated from cuttings will bear fruit within 1 year, while seed-grown trees take 4–5 years.`,
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
          pomelo1: "Pomelo",
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

  // ✅ โหลดแปลทันทีเมื่อ DOM พร้อม
  document.addEventListener("DOMContentLoaded", () => {
    applyStaticTranslations();
  });
})();
