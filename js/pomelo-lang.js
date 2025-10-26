(function () {
  const translations = {
    th: {
      page: { title: "ส้มโอ" },
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

สรรพคุณของใบ: สามารถใช้ตำพอกเพื่อ แก้ปวดศีรษะได้  สามารถใช้ขยี้ทา ระงับอาการปวดบวม จากแมลงกัดต่อยได้ และช่วย ขับลม และแก้ ลำคออักเสบ หากนำใบมาตากแห้งชงดื่ม`,
        },
        fruit: {
          title: "ผล",
          desc: `เนื้อผล: เนื้อมีรสหวานอมเปรี้ยวหรือหวานจัด ฉ่ำน้ำ และมีเยื่อหุ้มหนา วิตามิน C สูง
สรรพคุณ: เสริมภูมิคุ้มกัน บำรุงผิวพรรณ ช่วยในการเจริญอาหาร แก้เมาสุราได้
เปลือก (ผิว): เปลือกหนา มีรูพรุน (ต่อมน้ำมัน)
สรรพคุณ: ใช้แก้ จุกเสียดแน่นท้อง, ขับเสมหะ, ขับลม และใช้ต้มน้ำอาบ แก้คัน
ดอก: ดอกสีขาว มีกลิ่นหอม ใช้เป็นยาช่วย ขับลม และ ขับเสมหะ

เมล็ด: มีรสขม ใช้แก้ ปวดท้อง และ จุกเสียด แน่นท้อง (ช่วยลดอาการหดตัวผิดปกติของลำไส้เล็ก)
`,
        },
      
        root: {
          title: "ราก",
          desc:  `ลักษณะราก:  แข็งแรง ทนทาน และมีอายุยืนยาว

องค์ประกอบของราก: รากแก้ว (ถ้าเพาะเมล็ด), รากแขนงและ รากฝอย 

ระดับความลึกของราก: ส่วนใหญ่ที่ใช้ดูดซึมอาหารจะอยู่ในระดับ ค่อนข้างตื้น รากที่หนาแน่นที่สุดอยู่แค่ ประมาณ 1–2 ฟุต จากผิวดิน

สรรพคุณ: รากมีรสขมปร่า ใช้ แก้หวัด, แก้ไอ, ช่วยแก้ จุกเสียด และ ขับพยาธิ

เทคนิคการปลูก: นิยมใช้เทคนิค "ยกโขด" และ "เสริมราก" เพื่อให้รากแผ่ขยายและดูดอาหารได้ดี ทำให้ต้นโตเร็ว
 `,
        },
        care: {
          title: "การดูแล",
          desc:  `แสงแดด: ต้องการ แสงแดดจัดเต็มวัน (อย่างน้อย 6 ชั่วโมงต่อวัน)
ดิน: ชอบดินที่ ระบายน้ำดี และมีอินทรียวัตถุสูง
การให้น้ำในระยะเจริญเติบโต: ให้น้ำสม่ำเสมอ การกระตุ้นดอก: ต้อง งดน้ำ 20–30 วัน จนใบเริ่มเหี่ยวเล็กน้อย จากนั้นจึงให้น้ำอย่างเต็มที่

การตัดแต่งกิ่ง(สำคัญ): ควรตัดแต่งกิ่งให้ ทรงพุ่มโปร่ง และควบคุมความสูง หลังการเก็บเกี่ยวผลผลิต เพื่อกระตุ้นการแตกใบอ่อนใหม่

การจัดการผล: ควรมีการ ปลิดผลทิ้ง ให้เหลือปริมาณที่เหมาะสมกับขนาดต้น เพื่อให้ผลที่เหลือ มีขนาดใหญ่และคุณภาพดี
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
      page: { title: "Pomelo" },
      ui: { play: "▶", close: "✖" },
      hotspot: {
        trunk: {
          title: "Trunk",
          desc: `Type: The main trunk of a large perennial tree.

Height: Has a large canopy and can grow up to 30 feet tall.

Bark: Smooth, light brown or yellowish-gray in color.

Thorns: Branches and trunk may have short, sharp thorns.

Wood: The trunk is strong, especially when using a rootstock with a robust root system.`,
        },
        leaf: {
          title: "Leaf",
          desc: `Leaf characteristics: Simple leaves with large wing-like extensions resembling compound leaves; the leaf blade is oval or elliptical, pointed at the tip, rounded at the base, with either smooth or slightly wavy edges.

Scent: The leaves have oil glands, giving them a distinct fragrant smell (a sweet, slightly pungent aroma).

Leaf uses: Can be crushed and applied to relieve headaches, rubbed on insect bites to reduce pain and swelling, and used to relieve gas and sore throat. Dried leaves can be brewed as tea.`,
        },
        fruit: {
          title: "Fruit",
          desc: `Fruit flesh: Sweet-tart or very sweet, juicy, with thick pulp, high in vitamin C.

Uses of flesh: Boosts immunity, nourishes skin, stimulates appetite, and can help relieve hangovers.

Peel (skin): Thick and porous (with oil glands).

Uses of peel: Relieves bloating, expels phlegm and gas, and can be boiled as a bath to relieve itching.

Flowers: White, fragrant; used medicinally to relieve gas and expel phlegm.

Seeds: Bitter; used to relieve stomach pain and bloating (helps reduce abnormal small intestine contractions).`,
        },
       
        root: {
          title: "Root",
          desc: `Root characteristics: Strong, durable, and long-lived.

Root components: Taproot (if grown from seed), lateral roots, and fibrous roots.

Root depth: Most nutrient-absorbing roots are relatively shallow, with the densest roots only about 1–2 feet from the soil surface.

Uses: The roots are bitter and astringent; they can be used to treat colds, coughs, bloating, and expel intestinal parasites.

Cultivation techniques: Techniques like “mound planting” and “root reinforcement” are used to help roots spread and absorb nutrients effectively, promoting faster tree growth.`,
        },
        care: {
          title: "Care",
          desc: `Sunlight: Needs full sun all day (at least 6 hours per day).

Soil: Prefers well-drained soil with high organic matter.

Watering during growth: Water consistently.

Flower stimulation: Stop watering for 20–30 days until the leaves begin to wilt slightly, then water fully to encourage flowering.

Pruning (important): Prune to maintain an open canopy and control height after harvesting to stimulate new leaf growth.

Fruit management: Thin out excess fruit to leave an appropriate amount for the tree size, ensuring the remaining fruits are large and high-quality.`,
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

  // ✅ โหลดครั้งแรก
  document.addEventListener("DOMContentLoaded", () => {
    applyStaticTranslations();
  });
})();
