(function () {
  const translations = {
    th: {
      page: { title: "ละมุด" },
      ui: { play: "▶", close: "✖" },
      hotspot: {
        trunk: {
          title: "ลำต้น",
          desc: `<b>ยาง :</b> มีสีขาวที่ออกมาจากลำต้นและกิ่ง สามารถนำไปใช้ในอุตสาหกรรม ทำหมากฝรั่ง และรองเท้าบูทได้
`,
        },
        leaf: {
          title: "ใบ",
          desc: `เป็นใบเดี่ยว รูปรี หรือรูปไข่ ปลายแหลม โคนใบสอบ ผิวใบมัน สีเขียวเข้ม ออกหนาแน่นที่ปลายกิ่ง
`,
        },
        fruit: {
          title: "ผล",
          desc: `มีรูปกลมรี หรือรูปไข่ เมื่อดิบมีสีเขียว เมื่อสุกจะมี เปลือกบางสีน้ำตาลแดง
<br><br>
<b>เนื้อ :</b> มีผลสุกมีสีน้ำตาลอมเหลือง มีรสชาติ หวานจัด และมี เนื้อสัมผัสคล้ายเม็ดทราย
<br><br>
<b>ยางในผล :</b> ละมุดดิบ มียางสีขาวและสารฝาดสมาน (แทนนิน) สูง ไม่ควรรับประทาน เพราะจะเฝื่อนลิ้น
<br><br>
<b>คุณค่าทางโภชนาการ :</b> ใยอาหารสูงมาก (เป็นยาระบายอ่อนๆ), มีวิตามิน A, วิตามิน C, แคลเซียม, ฟอสฟอรัส
<br><br>
<b>สรรพคุณ :</b> มีส่วนช่วยเสริมภูมิคุ้มกัน ป้องกันหวัด ป้องกันท้องผูก/มะเร็งลำไส้ มีสารแทนนิน ช่วยต้านการอักเสบในร่างกาย เช่น กรดไหลย้อน`,
        },
        root: {
          title: "ราก",
          desc: `เป็นระบบรากแข็งแรง มีรากจำนวนมาก และทนทานต่อการขาดน้ำได้ดี 
<br><br>
<b>การเตรียมปลูก :</b> ในกิ่งชำหรือต้นกล้าที่มีรากขดควรแผ่รากออกขณะปลูกเพื่อให้ระบบรากเจริญเติบโตได้ดี
<br><br>
<b>การฟื้นฟู :</b> สำหรับต้นละมุดที่มีอายุมาก อาจตัดแต่งรากส่วนปลาย (พรวนดินลึก 10 - 15 เซนติเมตร รอบทรงพุ่ม) เพื่อกระตุ้นให้รากใหม่แตกออกมาและดูดซับสารอาหารได้ดีขึ้น
`,
        },
        care: {
          title: "การดูแล",
          desc: `<b>แสงแดดและอากาศ :</b> ต้นละมุดชอบอากาศร้อน ต้องการแสงแดดเต็มที่ตลอดวัน (มากกว่า 6 ชั่วโมง) จึงจะเติบโตได้ดีและมีผลดก
<br><br>
<b>ดิน :</b> ต้นละมุดชอบดินที่ร่วนซุย และมีอินทรียวัตถุมาก เช่น ดินดำ/หน้าดิน ผสมปุ๋ยคอกเก่า
<br><br>
<b>การให้น้ำ :</b> ต้องการน้ำในระดับปานกลาง และต้องมีการระบายน้ำดี ดินไม่แฉะ ช่วงปลูกแรก ๆ ควรรดน้ำวันละครั้ง
<br><br>
<b>การตัดแต่งกิ่ง :</b> ควรตัดแต่งกิ่งบ้าง เพื่อควบคุมความสูงของต้นให้ง่ายต่อการเก็บผล และช่วยให้ต้นมีทรงพุ่มสวยงาม
<br><br>
<b>การให้ผลผลิต :</b> ต้นที่ปลูกจากกิ่งตอน จะให้ผลครั้งแรกภายใน 1 ปี แต่ถ้าปลูกจากเมล็ดจะใช้เวลา 4 - 5 ปี
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
          desc: `<b>Sap :</b> The sap is white and exudes from the trunk and branches. It can be used industrially 
          to produce chewing gum and rubber boots.
          `,
        },
        leaf: {
          title: "Leaf",
          desc: `<b>Leaf characteristics :</b> The leaves are simple, oval or elliptical in shape, with pointed tips and tapering bases. 
          The surface is glossy dark green, and the leaves grow densely at the tips of the branches.
          `,
        },
        fruit: {
          title: "Fruit",
          desc: `<b>Fruit characteristics :</b> The fruit is oval or oblong. When unripe, it is green; when ripe, it has a thin reddish-brown skin.
<br><br>
<b>Flesh :</b> The ripe fruit is yellowish-brown, very sweet, with a grainy texture.
<br><br>
<b>Latex in fruit :</b> Unripe sap contains white latex and high tannins, which should not be eaten as it can make the tongue astringent.
<br><br>
<b>Nutritional value :</b> Very high in dietary fiber (mild laxative effect), contains vitamin A, vitamin C, calcium, and phosphorus.
<br><br>
<b>Key benefits :</b> Helps boost immunity, prevent colds, relieve constipation, reduce the risk of colon cancer, and tannins provide anti-inflammatory effects in the body (e.g., for acid reflux).`,
        },
        root: {
          title: "Root",
          desc: `<b>Root characteristics :</b> Strong root system with many roots, highly drought-tolerant once established.
<br><br>
<b>Planting preparation :</b> For cuttings or seedlings with coiled roots, spread the roots during planting to help the root system grow well.
<br><br>
<b>Restoration :</b> For older sapodilla trees, trim the outer roots (loosen soil 10–15 cm deep around the canopy) to stimulate new root growth and improve nutrient absorption.`,
        },
        care: {
          title: "Care",
          desc: `<b>Sunlight and climate :</b> Sapodilla trees prefer hot weather and need full sun all day (more than 6 hours) to grow well and produce abundant fruit.
<br><br>
<b>Soil :</b> Prefers loose, fertile soil rich in organic matter (e.g., topsoil mixed with aged compost).
<br><br>
<b>Watering :</b> Requires moderate water and good drainage; soil should not be waterlogged. During the first planting stage, water once a day.
<br><br>
<b>Pruning :</b> Prune occasionally to control tree height (for easier harvesting) and to maintain a nice canopy shape.
<br><br>
<b>Fruit production :</b> Trees propagated from cuttings will bear fruit within 1 year, while seed-grown trees take 4–5 years.`,
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
    if (desc) desc.innerHTML = data.desc;
    if (img) img.alt = data.title;
  }

  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem("lang", lang);
    applyStaticTranslations();
    applyHotspotContent(window.currentHotspotKey);
    window.dispatchEvent(new CustomEvent("language-change", { detail: { lang } }));
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
