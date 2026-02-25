(function () {
  const translations = {
    th: {
      page: { title: "ส้มโอ" },
      ui: { play: "▶", close: "✖" },
      reference: { label: "อ้างอิง :" },
      hotspot: {
        trunk: {
          title: "ลำต้น",
          desc: `เป็นส่วนลำต้นหลักของไม้ยืนต้นขนาดใหญ่<br><br>

          <b>ความสูง :</b> มีทรงพุ่มใหญ่และสูงได้ถึง 30 ฟุต<br><br>

          <b>เปลือก :</b> มีลักษณะ เรียบ สีน้ำตาลอ่อน หรือสีเทาอมเหลืองหนาม ตามกิ่งและลำต้นของส้มโอ อาจมีหนามแหลมสั้นๆ<br><br>

          <b>เนื้อไม้ :</b> ลำต้นมีความแข็งแรง โดยเฉพาะเมื่อใช้ ต้นตอที่มีระบบรากที่แข็งแรง`,
          reference: `
      <a href="https://www.kasettambon.com/%e0%b8%aa%e0%b9%89%e0%b8%a1%e0%b9%82%e0%b8%ad-%e0%b8%ab%e0%b8%a3%e0%b8%b7%e0%b8%ad-%e0%b8%a5%e0%b8%b9%e0%b8%81%e0%b9%82%e0%b8%ad-%e0%b8%a0%e0%b8%b2%e0%b8%84%e0%b9%83%e0%b8%95%e0%b9%89%e0%b8%9c/" target="_blank">
      คลิกเพื่อดูแหล่งอ้างอิง</a>`
        },
        leaf: {
          title: "ใบ",
          desc: `เป็นใบเดี่ยว แต่มีปีกใบขนาดใหญ่คล้ายใบประกอบ แผ่นใบรูปไข่หรือรี ปลายแหลม โคนมน ขอบใบหยักมนหรือเรียบ ใบมีต่อมน้ำมัน จึงมีกลิ่นหอมเฉพาะตัว<br><br>

          <b>สรรพคุณ :</b> สามารถใช้ตำพอกเพื่อแก้ปวดศีรษะได้ สามารถใช้ขยี้ทา ระงับอาการปวดบวม จากแมลงกัดต่อยได้ และช่วยขับลม และแก้ลำคออักเสบ หากนำใบมาตากแห้งชงดื่ม`,
          reference: `
      <a href="https://www.kasettambon.com/%e0%b8%aa%e0%b9%89%e0%b8%a1%e0%b9%82%e0%b8%ad-%e0%b8%ab%e0%b8%a3%e0%b8%b7%e0%b8%ad-%e0%b8%a5%e0%b8%b9%e0%b8%81%e0%b9%82%e0%b8%ad-%e0%b8%a0%e0%b8%b2%e0%b8%84%e0%b9%83%e0%b8%95%e0%b9%89%e0%b8%9c/" target="_blank">
      คลิกเพื่อดูแหล่งอ้างอิง</a>`
        },
        fruit: {
          title: "ผล",
          desc: `เนื้อมีรสหวานอมเปรี้ยวหรือหวานจัด ฉ่ำน้ำ และมีเยื่อหุ้มหนา วิตามิน C สูง เปลือกหนา มีรูพรุน (ต่อมน้ำมัน)<br><br>

          <b>สรรพคุณ :</b> เสริมภูมิคุ้มกัน บำรุงผิวพรรณ ช่วยในการเจริญอาหาร แก้เมาสุราได้ เปลือกใช้แก้จุกเสียดแน่นท้อง ขับเสมหะ ขับลม และใช้ต้มน้ำอาบแก้คัน<br><br>

          <b>ดอก :</b> ดอกสีขาวมีกลิ่นหอมใช้เป็นยาช่วยขับลมและขับเสมหะ<br><br>

          <b>เมล็ด :</b> มีรสขม ใช้แก้ปวดท้อง และจุกเสียดแน่นท้อง (ช่วยลดอาการหดตัวผิดปกติของลำไส้เล็ก)<br><br>`,
          reference: `
      <a href="https://www.kasettambon.com/%e0%b8%aa%e0%b9%89%e0%b8%a1%e0%b9%82%e0%b8%ad-%e0%b8%ab%e0%b8%a3%e0%b8%b7%e0%b8%ad-%e0%b8%a5%e0%b8%b9%e0%b8%81%e0%b9%82%e0%b8%ad-%e0%b8%a0%e0%b8%b2%e0%b8%84%e0%b9%83%e0%b8%95%e0%b9%89%e0%b8%9c/" target="_blank">
      คลิกเพื่อดูแหล่งอ้างอิง</a>`
        },

        root: {
          title: "ราก",
          desc: `แข็งแรง ทนทาน และมีอายุยืนยาว<br><br>

          <b>องค์ประกอบของราก :</b> รากแก้ว (ถ้าเพาะเมล็ด), รากแขนงและ รากฝอย<br><br>

          <b>ระดับความลึกของราก :</b> ส่วนใหญ่ที่ใช้ดูดซึมอาหารจะอยู่ในระดับค่อนข้างตื้น รากที่หนาแน่นที่สุดอยู่แค่ประมาณ 1–2 ฟุตจากผิวดิน<br><br>

          <b>สรรพคุณ :</b> รากมีรสขมปร่า ใช้แก้หวัด แก้ไอ ช่วยแก้จุกเสียด และขับพยาธิ<br><br>

          <b>เทคนิคการปลูก :</b> นิยมใช้เทคนิค "ยกโขด" และ "เสริมราก" เพื่อให้รากแผ่ขยายและดูดอาหารได้ดี ทำให้ต้นโตเร็ว`,
          reference: `
      <a href="http://lib.doa.go.th/multim/e-book/EB00577.pdf" target="_blank">
      คลิกเพื่อดูแหล่งอ้างอิง</a>`
        },
        care: {
          title: "การดูแล",
          desc: `<b>แสงแดด :</b> ต้องการ แสงแดดจัดเต็มวัน (อย่างน้อย 6 ชั่วโมงต่อวัน)<br><br>

          <b>ดิน :</b> ชอบดินที่ระบายน้ำดีและมีอินทรียวัตถุสูง<br><br>

          <b>การให้น้ำ :</b> ให้น้ำสม่ำเสมอการกระตุ้นดอกต้องงดน้ำ 20–30 วันจนใบเริ่มเหี่ยวเล็กน้อยจากนั้นจึงให้น้ำอย่างเต็มที่<br><br>

          <b>การตัดแต่งกิ่ง :</b> ควรตัดแต่งกิ่งให้ ทรงพุ่มโปร่ง และควบคุมความสูง หลังการเก็บเกี่ยวผลผลิต เพื่อกระตุ้นการแตกใบอ่อนใหม่<br><br>
          
          <b>การจัดการผล :</b> ควรมีการปลิดผลทิ้งให้เหลือปริมาณที่เหมาะสมกับขนาดต้น เพื่อให้ผลที่เหลือมีขนาดใหญ่และคุณภาพดี`,
          reference: `
      <a href="https://www.opsmoac.go.th/angthong-article_prov-preview-441991791795" target="_blank">
      คลิกเพื่อดูแหล่งอ้างอิง</a>`
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
      reference: { label: "Reference :" },
      hotspot: {
        trunk: {
          title: "Trunk",
          desc: `<b>Type :</b> The main trunk of a large perennial tree.<br><br>

<b>Height :</b> Has a large canopy and can grow up to 30 feet tall.<br><br>

<b>Bark :</b> Smooth, light brown or yellowish-gray in color.<br><br>

<b>Thorns :</b> Branches and trunk may have short, sharp thorns.<br><br>

<b>Wood :</b> The trunk is strong, especially when using a rootstock with a robust root system.`,
          reference: `
          <a href="https://www.kasettambon.com/%e0%b8%aa%e0%b9%89%e0%b8%a1%e0%b9%82%e0%b8%ad-%e0%b8%ab%e0%b8%a3%e0%b8%b7%e0%b8%ad-%e0%b8%a5%e0%b8%b9%e0%b8%81%e0%b9%82%e0%b8%ad-%e0%b8%a0%e0%b8%b2%e0%b8%84%e0%b9%83%e0%b8%95%e0%b9%89%e0%b8%9c/" target="_blank">
          Click to see references.</a>`
        },
        leaf: {
          title: "Leaf",
          desc: `<b>Leaf characteristics :</b> Simple leaves with large wing-like extensions resembling compound leaves; the leaf blade is oval or elliptical, pointed at the tip, rounded at the base, with either smooth or slightly wavy edges.<br><br>

<b>Scent :</b> The leaves have oil glands, giving them a distinct fragrant smell (a sweet, slightly pungent aroma).<br><br>

<b>Leaf uses :</b> Can be crushed and applied to relieve headaches, rubbed on insect bites to reduce pain and swelling, and used to relieve gas and sore throat. Dried leaves can be brewed as tea.`,
          reference: `
          <a href="https://www.kasettambon.com/%e0%b8%aa%e0%b9%89%e0%b8%a1%e0%b9%82%e0%b8%ad-%e0%b8%ab%e0%b8%a3%e0%b8%b7%e0%b8%ad-%e0%b8%a5%e0%b8%b9%e0%b8%81%e0%b9%82%e0%b8%ad-%e0%b8%a0%e0%b8%b2%e0%b8%84%e0%b9%83%e0%b8%95%e0%b9%89%e0%b8%9c/" target="_blank">
          Click to see references.</a>`
        },
        fruit: {
          title: "Fruit",
          desc: `<b>Fruit flesh :</b> Sweet-tart or very sweet, juicy, with thick pulp, high in vitamin C.
<br><br>
<b>Uses of flesh :</b> Boosts immunity, nourishes skin, stimulates appetite, and can help relieve hangovers.
<br><br>
<b>Peel (skin) :</b> Thick and porous (with oil glands).
<br><br>
<b>Uses of peel :</b> Relieves bloating, expels phlegm and gas, and can be boiled as a bath to relieve itching.
<br><br>
<b>Flowers :</b> White, fragrant; used medicinally to relieve gas and expel phlegm.
<br><br>
<b>Seeds :</b> Bitter; used to relieve stomach pain and bloating (helps reduce abnormal small intestine contractions).`,
          reference: `
          <a href="https://www.kasettambon.com/%e0%b8%aa%e0%b9%89%e0%b8%a1%e0%b9%82%e0%b8%ad-%e0%b8%ab%e0%b8%a3%e0%b8%b7%e0%b8%ad-%e0%b8%a5%e0%b8%b9%e0%b8%81%e0%b9%82%e0%b8%ad-%e0%b8%a0%e0%b8%b2%e0%b8%84%e0%b9%83%e0%b8%95%e0%b9%89%e0%b8%9c/" target="_blank">
          Click to see references.</a>`
        },

        root: {
          title: "Root",
          desc: `<b>Root characteristics :</b> Strong, durable, and long-lived.
<br><br>
<b>Root components :</b> Taproot (if grown from seed), lateral roots, and fibrous roots.
<br><br>
<b>Root depth :</b> Most nutrient-absorbing roots are relatively shallow, with the densest roots only about 1–2 feet from the soil surface.
<br><br>
<b>Uses :</b> The roots are bitter and astringent; they can be used to treat colds, coughs, bloating, and expel intestinal parasites.
<br><br>
<b>Cultivation techniques :</b> Techniques like “mound planting” and “root reinforcement” are used to help roots spread and absorb nutrients effectively, promoting faster tree growth.`,
          reference: `
          <a href="http://lib.doa.go.th/multim/e-book/EB00577.pdf" target="_blank">
          Click to see references.</a>`
        },
        care: {
          title: "Care",
          desc: `<b>Sunlight :</b> Needs full sun all day (at least 6 hours per day).
<br><br>
<b>Soil :</b> Prefers well-drained soil with high organic matter.
<br><br>
<b>Watering during growth :</b> Water consistently.
<br><br>
<b>Flower stimulation :</b> Stop watering for 20–30 days until the leaves begin to wilt slightly, then water fully to encourage flowering.
<br><br>
<b>Pruning (important) :</b> Prune to maintain an open canopy and control height after harvesting to stimulate new leaf growth.
<br><br>
<b>Fruit management :</b> Thin out excess fruit to leave an appropriate amount for the tree size, ensuring the remaining fruits are large and high-quality.`,
          reference: `
          <a href="https://www.opsmoac.go.th/angthong-article_prov-preview-441991791795" target="_blank">
          Click to see references.</a>`
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
    const ref = document.getElementById("hotspot-reference");

    if (title && data.title) title.textContent = data.title;
    if (desc && data.desc) desc.innerHTML = data.desc;
    if (ref && data.reference) ref.innerHTML = data.reference;
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

  // ✅ โหลดครั้งแรก
  document.addEventListener("DOMContentLoaded", () => {
    applyStaticTranslations();
  });
})();
