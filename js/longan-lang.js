(function () {
  const translations = {
    th: {
      page: { title: "ลำไย" },
      ui: { play: "▶", close: "✖" },
      reference: { label: "อ้างอิง :" },
      hotspot: {
        trunk: {
          title: "ลำต้น",
          desc: `เป็นไม้ยืนต้นขนาดใหญ่ เปลือกสีน้ำตาลหรือเทาปนน้ำตาล เมื่อแก่จัดเปลือกจะแตกเป็นสะเก็ดและมีร่องขรุขระ<br><br>

<b>ลักษณะกิ่ง :</b> มีลักษณะกลม มักมีเนื้อไม้ที่ค่อนข้างเปราะ ทำให้กิ่งหักง่าย เมื่อมีผลผลิต`,
reference: `
      <a href="https://kaset.today/%E0%B8%9C%E0%B8%A5%E0%B9%84%E0%B8%A1%E0%B9%89/%E0%B8%A5%E0%B8%B3%E0%B9%84%E0%B8%A2/" target="_blank">
      คลิกเพื่อดูแหล่งอ้างอิง
      </a>`
        },
        leaf: {
          title: "ใบ",
          desc: `เป็นใบประกอบ (มีใบย่อยหลายใบในก้านเดียว) ใบมีรูปทรงรี ผิวเรียบ ขอบใบเรียบ ส่วนมากมีสีเขียวเข้ม<br><br>

<b>สรรพคุณ :</b> ใบอ่อนหรือใบแก่มีรสหวานจืด ใช้ต้มดื่มเป็นน้ำชาเพื่อแก้หวัด ไข้มาลาเรีย และริดสีดวงทวาร`,
reference: `
      <a href="https://www.kasettambon.com/%e0%b8%a5%e0%b8%b3%e0%b9%84%e0%b8%a2-%e0%b9%81%e0%b8%84%e0%b8%a5%e0%b8%ad%e0%b8%a3%e0%b8%b5%e0%b9%88-%e0%b8%aa%e0%b8%a3%e0%b8%a3%e0%b8%9e%e0%b8%84%e0%b8%b8%e0%b8%93%e0%b8%a5%e0%b8%b3%e0%b9%84%e0%b8%a2/" target="_blank">
      คลิกเพื่อดูแหล่งอ้างอิง
      </a>`
        },
        fruit: {
          title: "ผล",
          desc: `ทรงกลม มีเปลือกบางสีน้ำตาลอ่อนหรือน้ำตาลเหลือง เนื้อใสสีขาวฉ่ำน้ำ หุ้มเมล็ดกลมสีดำเป็นมัน<br><br>

<b>รสชาติ/เนื้อสัมผัส :</b> รสหวานจัด มีกลิ่นหอมเฉพาะตัว<br><br>

<b>คุณค่าโภชนาการ :</b> มีไขมันที่ต่ำ อุดมไปด้วย วิตามิน C, วิตามิน B12, โพแทสเซียม, และธาตุเหล็ก<br><br>

<b>สรรพคุณ :</b> เนื้อลำไยมีช่วยบำรุงประสาทและสมอง (ช่วยความจำ, คลายเครียด) บำรุงเลือด และให้พลังงานสูง (รู้สึกสดชื่น) มีสารต้านอนุมูลอิสระ ช่วยลดอาการปวดข้อ และกล้ามเนื้อ เปลือกผลแห้งสามารถใช้ในการแพทย์พื้นบ้านเพื่อขับลม ถอนพิษ สมานแผล<br><br>

<b>สรรพคุณ :</b> เปลือกผลแห้งสามารถใช้ในการแพทย์พื้นบ้านเพื่อ ขับลม, ถอนพิษ, สมานแผล`,
reference: `
      <a href="https://www.kasettambon.com/%e0%b8%a5%e0%b8%b3%e0%b9%84%e0%b8%a2-%e0%b9%81%e0%b8%84%e0%b8%a5%e0%b8%ad%e0%b8%a3%e0%b8%b5%e0%b9%88-%e0%b8%aa%e0%b8%a3%e0%b8%a3%e0%b8%9e%e0%b8%84%e0%b8%b8%e0%b8%93%e0%b8%a5%e0%b8%b3%e0%b9%84%e0%b8%a2/" target="_blank">
      คลิกเพื่อดูแหล่งอ้างอิง
      </a>`
        },

        root: {
          title: "ราก",
          desc: `เป็นไม้ใบเลี้ยงคู่ มีทั้งรากแก้ว (ถ้าเพาะเมล็ด) รากแขนง และรากฝอย<br><br>

<b>การแผ่ราก :</b> ระบบรากของลำไยจะค่อนข้างตื้น รากฝอยที่ดูดอาหารจะกระจายอยู่บริเวณใต้ ทรงพุ่มและผิวหน้าดิน ทำให้เห็นรากโผล่ขึ้นมาได้<br><br>

<b>ต้นตอนกิ่ง :</b> ต้นที่ได้จากการตอนกิ่ง ไม่มีรากแก้ว แต่จะมีรากฝอยแผ่กว้าง ทำให้ทรงพุ่มแผ่กว้างกว่าต้นเพาะเมล็ด<br><br>

<b>การฟื้นฟู :</b> สามารถตัดแต่งรากส่วนปลาย (พรวนดินตื้น ๆ รอบทรงพุ่ม) เพื่อกระตุ้นให้รากใหม่แตกออกมาดูดซับอาหารได้ดีขึ้น`,
reference: `
      <a href="https://www.kasettambon.com/%e0%b8%a5%e0%b8%b3%e0%b9%84%e0%b8%a2-%e0%b9%81%e0%b8%84%e0%b8%a5%e0%b8%ad%e0%b8%a3%e0%b8%b5%e0%b9%88-%e0%b8%aa%e0%b8%a3%e0%b8%a3%e0%b8%9e%e0%b8%84%e0%b8%b8%e0%b8%93%e0%b8%a5%e0%b8%b3%e0%b9%84%e0%b8%a2/" target="_blank">
      คลิกเพื่อดูแหล่งอ้างอิง
      </a>`
        },
        care: {
          title: "การดูแล",
          desc: `<b>แสงแดดและดิน :</b> ต้นลำไยต้องการแสงแดดจัดเต็มวัน และปลูกในดินที่ระบายน้ำได้ดี<br><br>

<b>การให้น้ำ (ทั่วไป) :</b> ให้น้ำอย่างสม่ำเสมอ เพื่อช่วยในการเจริญเติบโตและแตกใบอ่อน<br><br>

<b>การให้น้ำ (เพื่อกระตุ้นดอก)สำคัญมาก :</b> ต้องงดการให้น้ำอย่างเด็ดขาดในช่วงที่ต้องการให้ต้นพักตัว (หลังหมดฝน) เพื่อกระตุ้นการออกดอก<br><br>

<b>การตัดแต่งกิ่ง :</b> ควรตัดแต่งกิ่งให้ทรงพุ่มโปร่ง และควบคุมความสูง หลังการเก็บเกี่ยวผลผลิต เพื่อป้องกันโรคแมลง และกระตุ้นการแตกยอดใบใหม่ที่สมบูรณ์<br><br>

<b>การบังคับดอก :</b> เกษตรกรนิยมราดสารบังคับให้ออกดอก เช่น โพแทสเซียมคลอเรต เพื่อกำหนดช่วงเวลาเก็บเกี่ยวผลผลิตให้เป็นไปตามต้องการ`,
reference: `
      <a href="https://kaset.today/%E0%B8%9C%E0%B8%A5%E0%B9%84%E0%B8%A1%E0%B9%89/%E0%B8%A5%E0%B8%B3%E0%B9%84%E0%B8%A2/" target="_blank">
      คลิกเพื่อดูแหล่งอ้างอิง
      </a>`
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
      ui: { play: "▶", close: "✖" },
      reference: { label: "Reference :" },
      hotspot: {
        trunk: {
          title: "Trunk",
          desc: `<b>Trunk characteristics :</b> A large perennial tree, with brown or grayish-brown bark. When mature, the bark peels into flakes and has rough grooves.
<br><br>
<b>Branch characteristics :</b> Round in shape, often with fairly brittle wood, making the branches easy to break when bearing fruit.`,
reference: `
          <a href="https://kaset.today/%E0%B8%9C%E0%B8%A5%E0%B9%84%E0%B8%A1%E0%B9%89/%E0%B8%A5%E0%B8%B3%E0%B9%84%E0%B8%A2/" target="_blank">
          Click to see references.</a>`
        },
        leaf: {
          title: "Leaf",
          desc: `<b>Leaf characteristics :</b> Compound leaves (several leaflets on one stem), oval-shaped, smooth surface, entire margins, mostly dark green.
<br><br>
<b>Leaf uses :</b> Young or mature leaves taste mildly sweet and bland. They can be boiled as tea to relieve colds, malaria, and hemorrhoids.`,
reference: `
          <a href="https://www.kasettambon.com/%e0%b8%a5%e0%b8%b3%e0%b9%84%e0%b8%a2-%e0%b9%81%e0%b8%84%e0%b8%a5%e0%b8%ad%e0%b8%a3%e0%b8%b5%e0%b9%88-%e0%b8%aa%e0%b8%a3%e0%b8%a3%e0%b8%9e%e0%b8%84%e0%b8%b8%e0%b8%93%e0%b8%a5%e0%b8%b3%e0%b9%84%e0%b8%a2/" target="_blank">
          Click to see references.
          </a>`
        },
        fruit: {
          title: "Fruit",
          desc: `<b>Physical characteristics :</b> Round shape, thin light brown or yellow-brown skin, juicy white flesh, enclosing shiny black round seeds.<br><br>

<b>Taste/Texture :</b> Very sweet with a distinct fragrance.<br><br>

<b>Nutritional value :</b> Low in fat, rich in vitamin C, vitamin B12, potassium, and iron.<br><br>

<b>Key benefits :</b> The flesh of the longan fruit can:
Nourish the nerves and brain (improve memory, relieve stress)
Nourish the blood and provide high energy (feel refreshed)
Contain antioxidants that help reduce joint and muscle pain<br><br>

<b>Peel benefits :</b> The dried fruit peel can be used in traditional medicine to relieve gas, detoxify, and heal wounds.`,
reference: `
          <a href="https://www.kasettambon.com/%e0%b8%a5%e0%b8%b3%e0%b9%84%e0%b8%a2-%e0%b9%81%e0%b8%84%e0%b8%a5%e0%b8%ad%e0%b8%a3%e0%b8%b5%e0%b9%88-%e0%b8%aa%e0%b8%a3%e0%b8%a3%e0%b8%9e%e0%b8%84%e0%b8%b8%e0%b8%93%e0%b8%a5%e0%b8%b3%e0%b9%84%e0%b8%a2/" target="_blank">
          Click to see references.
          </a>`
        },
    
        root: {
          title: "Root",
          desc: `<b>Root type :</b> A dicotyledonous tree with taproots (if grown from seeds), lateral roots, and fibrous roots.<br><br>

<b>Root spread :</b> The longan’s root system is relatively shallow. The fibrous roots that absorb nutrients spread under the canopy and near the soil surface, sometimes becoming visible above the ground.<br><br>

<b>Branch layering propagation :</b> Trees propagated from branch layering do not have taproots but have widely spreading fibrous roots, resulting in a broader canopy than seed-grown trees.<br><br>

<b>Restoration :</b> Shallow trimming or loosening of the outer roots around the canopy can stimulate new roots to grow, improving nutrient absorption.`,
reference: `
          <a href="https://www.kasettambon.com/%e0%b8%a5%e0%b8%b3%e0%b9%84%e0%b8%a2-%e0%b9%81%e0%b8%84%e0%b8%a5%e0%b8%ad%e0%b8%a3%e0%b8%b5%e0%b9%88-%e0%b8%aa%e0%b8%a3%e0%b8%a3%e0%b8%9e%e0%b8%84%e0%b8%b8%e0%b8%93%e0%b8%a5%e0%b8%b3%e0%b9%84%e0%b8%a2/" target="_blank">
          Click to see references.
          </a>`
        },
        care: {
          title: "Care",
          desc: `<b>Sunlight and soil :</b> Longan trees need full sun all day and well-drained soil.<br><br>

<b>Watering (general) :</b> Water consistently to support growth and the emergence of new leaves.<br><br>

<b>Watering (to stimulate flowering) – very important :</b> Stop watering completely during the tree’s resting period (after the rainy season) to trigger flowering.<br><br>

<b>Pruning :</b> Prune to maintain an open canopy and control height after harvesting 
<ul><li>to : Prevent pests and diseasesStimulate healthy new leaf growth</li>
</ul>
<b>Flower induction :</b> Farmers often use flower-inducing chemicals (e.g., potassium chlorate) to control the harvest period according to demand.`,
reference: `
          <a href="https://kaset.today/%E0%B8%9C%E0%B8%A5%E0%B9%84%E0%B8%A1%E0%B9%89/%E0%B8%A5%E0%B8%B3%E0%B9%84%E0%B8%A2/" target="_blank">
          Click to see references.
          </a>`
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
})();
