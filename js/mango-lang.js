
(function () {
  const translations = {
    th: {
      page: { title: "มะม่วง" },
      ui: { play: "▶", close: "✖" },
      hotspot: {
        trunk: {
          title: "ลำต้น",
          desc: `<b>ลักษณะลำต้น :</b> เป็นไม้ยืนต้นขนาดใหญ่ เนื้อไม้สามารถนำไปทำเฟอร์นิเจอร์ได้
<br><br>
<b>สรรพคุณเปลือกต้น :</b> เปลือกของลำต้นสามารถนำมาต้มดื่มเป็นยา แก้โรคคอตีบ อาการเยื่อปากอักเสบ และจมูกอักเสบได้
`,
        },
        leaf: {
          title: "ใบ",
          desc: `<b>สรรพคุณของใบ :</b> นำใบสดมาตำ พอกแผลสด เพื่อสมานแผล และล้างบาดแผลภายนอกได้ ส่วนใบแห้งใช้ต้มดื่ม แก้ท้องร่วง/ลำไส้อักเสบเรื้อรัง นอกจากนี้ยังมีตำราพื้นบ้านใช้ต้มดื่ม แก้สะอึกได้
<br><br>
<b>ข้อควรระวังในการใช้ใบ :</b> ไม่ควรเคี้ยวใบสด เพราะ น้ำยางมะม่วง อาจกัดปากได้ หากจะใช้ ควรนำไปต้มก่อน
`,
        },
        fruit: {
          title: "ผล",
          desc: `<b>มะม่วงดิบ :</b> มีรสชาติเปรี้ยว มี วิตามิน C สูง ช่วยป้องกันหวัดและโรคเลือดออกตามไรฟันได้ (ลักปิดลักเปิด) นอกจากนี้ยังมีสารต้านอนุมูลอิสระสูง
<br><br>
<b>มะม่วงสุก :</b> มีรสชาติหวาน เนื้อนุ่ม มี วิตามิน A และเบต้าแคโรทีนสูงช่วยในการบำรุงสายตา (มองในเวลากลางคืนดีขึ้น) และช่วยบำรุงผิว
<br><br>
<b>สรรพคุณโดยรวม :</b> มีกากใยอาหารที่สูง ช่วยในการ ขับถ่าย (มะม่วงสุกเป็นยาระบายอ่อนๆ) และช่วยแก้อาการ วิงเวียนศีรษะ คลื่นไส้อาเจียน
<br><br>
<b>ประโยชน์ที่มีต่อร่างกาย :</b> มีสารต้านอนุมูลอิสระ ลดความเสี่ยงมะเร็ง (เช่น มะเร็งเต้านม, ลำไส้) และช่วย บำรุงหัวใจ
<br><br>
<b>ข้อควรระวัง :</b> มะม่วงมีน้ำยาง ซึ่งอาจทำให้เกิดการระคายเคืองต่อผิวหนัง ควรล้างยางออกทันที
`,
        },
      
        root: {
          title: "ราก",
          desc: `<b>ระบบของราก :</b> เป็น รากแก้ว ที่สามารถไชชอนลงดินได้ลึก (ลึกถึง 6 เมตร) แต่ รากจะดูดซึมอยู่หนาแน่นที่บริเวณผิวดิน (ลึก 30-60 ซม.) และแผ่บริเวณกว้าง
<br><br>
<b>การเสริมราก :</b> เกษตรกรส่วนใหญ่นิยม เสริมราก ให้กับต้นมะม่วงช่วยให้รากแข็งแรง ทนทานต่อลมพายุ ไม่ล้มง่าย และช่วยเพิ่มการดูดซึมของรากได้
`,
        },
        care: {
          title: "การดูแล",
          desc: `<b>สภาพแวดล้อม :</b> ต้นมะม่วงต้องการ สภาพอากาศอบอุ่น และ แสงแดดเต็มที่ (อย่างน้อย 6 ชั่วโมงต่อวัน) และชอบดินที่ ลึกและระบายน้ำได้ดี
<br><br>
<b>การให้น้ำ :</b> ต้นอ่อนต้องการน้ำมากในช่วงแรก แต่ต้นที่โตเต็มที่ สามารถทนต่อความแห้งแล้งได้บางส่วน แต่ควรรดน้ำสม่ำเสมอในช่วง 1 ปีแรก และก่อน/หลังการราดสารกระตุ้นดอก
<br><br>
<b>การตัดแต่งกิ่ง :</b> จำเป็นต้อง ตัดแต่งกิ่งอย่างสม่ำเสมอ เพื่อให้ทรงพุ่มโปร่ง อากาศถ่ายเทได้สะดวก และเพื่อ กระตุ้นการผลิตผล (ตัดกิ่งกระโดง/กิ่งซับซ้อนออก)
<br><br>
<b>การกระตุ้นดอก :</b> ก่อนราดสารกระตุ้นดอก (เช่น แพคโคลบิวทราซอล) ต้อง     ให้ น้ำมะม่วงให้ชุ่ม 7-10 วัน และใส่ปุ๋ยสูตร สะสมตาดอก เช่น 8-24-24 หรือ 12-24-12
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
      page: { title: "Mango" },
      ui: { play: "▶", close: "✖" },
      hotspot: {
        trunk: {
          title: "Trunk",
          desc: `<b>Trunk characteristics :</b> A large perennial tree, with wood suitable for making furniture.
<br><br>
<b>Trunk bark uses :</b> The bark can be boiled and used as medicine to treat diphtheria, inflammation of the oral mucosa, and nasal inflammation.`,
        },
        leaf: {
          title: "Leaf",
          desc: `<b>Leaf uses :</b> Fresh leaves can be crushed and applied to wounds to help heal and clean them. Dried leaves can be boiled and drunk to treat diarrhea or chronic intestinal inflammation. Traditional medicine also uses boiled leaves to relieve hiccups.
<br><br>
<b>Precautions :</b> Do not chew fresh leaves, as the mango latex may irritate the mouth. If using, the leaves should be boiled first.`,
        },
        fruit: {
          title: "Fruit",
          desc: `<b>Fruit Unripe Mango :</b> Has a sour taste and is rich in vitamin C, which helps prevent colds and bleeding gums. It also contains high levels of antioxidants.
<br><br>
<b>Ripe Mango :</b> Has a sweet taste and soft texture. It is rich in vitamin A and beta-carotene, which help improve vision (especially at night) and nourish the skin.
<br><br>
<b>Overall Benefits :</b> Mangoes are high in fiber, which helps with digestion. Ripe mangoes act as a mild laxative and can help relieve dizziness and nausea.
<br><br>
<b>Health Benefits :</b> Contain antioxidants that help reduce the risk of cancer (such as breast and colon cancer) and support heart health.
<br><br>
<b>Caution :</b> Mango sap can cause skin irritation. Be sure to wash it off immediately after contact.`,
        },
      
        root: {
          title: "Root",
          desc: `<b>Root system :</b> Mango trees have a taproot that can grow deep into the soil (up to 6 meters), but most nutrient absorption occurs densely near the soil surface (30–60 cm deep) and spreads widely.

Root reinforcement: Most farmers strengthen the roots to make the tree more resilient to storms, prevent it from falling, and improve nutrient absorption.`,
        },
        care: {
          title: "Care",
          desc: `<b>Environment :</b> Mango trees need a warm climate and full sun (at least 6 hours per day) and prefer deep, well-drained soil.
<br><br>
<b>Watering :</b> Young trees need plenty of water at first. Mature trees can tolerate some drought but should be watered consistently during the first year and before/after applying flower-inducing chemicals.
<br><br>
<b>Pruning :</b> Regular pruning is necessary to maintain an open canopy, allow air circulation, and stimulate fruit production (remove tall or tangled branches).
<br><br>
<b>Flower stimulation :</b> Before applying flower-inducing chemicals (e.g., paclobutrazol), water the trees thoroughly for 7–10 days and apply a flowering fertilizer like 8–24–24 or 12–24–12.`,
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

  // ✅ โหลดครั้งแรก
  document.addEventListener("DOMContentLoaded", () => {
    applyStaticTranslations();
  });
})();
