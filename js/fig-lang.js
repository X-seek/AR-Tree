(function () {
  const translations = {
    th: {
      page: { title: "มะเดื่อ" },
      ui: { play: "▶", close: "✖" },
      hotspot: {
        trunk: {
          title: "ลำต้น",
          desc: `ลำต้นและกิ่งเปลือกต้น: มีสีเทาเรียบ มีน้ำยางสีขาว (Latex) อยู่ทุกส่วนของต้นและผล

สรรพคุณเปลือก/ลำต้น: เปลือกและลำต้นสามารถนำมาต้มน้ำดื่มเพื่อ แก้ปวดท้อง บรรเทาอาการโรคบิด และ แก้อาการปวดเมื่อย ตามร่างกายได้
`,
        },
        leaf: {
          title: "ใบ",
          desc: `ลักษณะใบ: ใบมีขนาดใหญ่ หยักลึก เป็นแฉก (คล้ายนิ้วมือ) ประมาณ 3-5 แฉก ผิวใบหยาบ มีสีเขียวเข้ม

สรรพคุณใบ (ชา): ใบมะเดื่อฝรั่งมักนิยมนำมาทำชา ซึ่งมีสรรพคุณช่วย ลดระดับน้ำตาลในเลือดได้, ลดไตรกลีเซอไรด์, ลดความดันโลหิต
`,
        },
        fruit: {
          title: "ผล",
          desc: `คุณค่าโภชนาการ: เป็นผลไม้ที่มี ไฟเบอร์ (ใยอาหาร) สูง และมีแร่ธาตุสำคัญ เช่น แคลเซียมสูงธาตุเหล็ก และ โฟเลต

ประโยชน์ต่อระบบขับถ่าย: ระบบขับถ่ายเป็นยาระบายอ่อนๆ ช่วย บรรเทาและป้องกันอาการท้องผูก ได้ดีเยี่ยม เพราะมีใยอาหารสูงมาก

ประโยชน์ต่อร่างกาย: ช่วย ควบคุมระดับน้ำตาลในเลือด จึงเหมาะกับผู้ป่วยเบาหวาน (แต่ควรระวัง/ปรึกษาแพทย์), ช่วย ลดความดันโลหิตสูง และ ลดไขมันในเลือด

ด้านกระดูกและหัวใจ: ช่วยบำรุงกระดูกและฟัน ช่วยป้องกันโรคกระดูกพรุน และมีส่วนช่วยลดความเสี่ยงโรคหัวใจและหลอดเลือดได้

ข้อควรระวัง: ผู้ป่วยเบาหวานต้องเฝ้าระวังระดับน้ำตาลในเลือดเมื่อบริโภค เนื่องจากอาจทำให้ระดับน้ำตาลลดต่ำลง`,
        },
        root: {
          title: "ราก",
          desc: `ลักษณะทั่วไป: ระบบรากของมะเดื่อฝรั่งชอบความชื้น แต่ ไม่ทนต่อการมีน้ำขัง ซึ่งอาจทำให้เกิดโรครากเน่าได้ง่าย

การเสริมราก : ในไทยนิยม เสริมราก ด้วย ตอมะเดื่ออุทุมพร (มะเดื่อไทย) เนื่องจากรากอุทุมพรมีความแข็งแรง ทนทานต่อโรค และช่วยให้ต้นมะเดื่อฝรั่งเจริญเติบโตได้ดี ให้ผลดกกว่าการใช้รากเดิม
ศัตรูที่ราก: ควรระวัง ไส้เดือนฝอย ซึ่งเป็นศัตรูที่เข้าทำลายระบบรากของมะเดื่อฝรั่งได้`,
        },
        care: {
          title: "การดูแล",
          desc: `แสงแดด/สภาพอากาศ: ต้องการ แสงแดดเต็มวัน (6 ชั่วโมงขึ้นไป) เจริญเติบโตได้ดีในทุกพื้นที่ของประเทศไทยทั้งร้อนชื้นและร้อนแห้ง

ดินและการปลูก: ต้องใช้วัสดุปลูกที่ ระบายน้ำได้ดีมาก ไม่อัดแน่น ปลูกได้ทั้งในแปลง (ระยะ 2x2 เมตร) และในกระถาง/วงบ่อ

การให้น้ำ: ต้นมะเดื่อฝรั่งชอบน้ำ ควรให้น้ำสม่ำเสมอ แต่ ห้ามมีน้ำขังเด็ดขาด ควรคลุมโคนต้นด้วยฟางเพื่อช่วยเก็บความชื้น

การตัดแต่งกิ่ง: เป็นเทคนิคสำคัญในการทำให้ต้น ออกลูกดกตลอดปี โดยควรตัดแต่งกิ่งเพื่อให้เกิดกิ่งใหม่และกระตุ้นการออกผลอย่างต่อเนื่อง

ศัตรูพืชที่ควรระวังโรค: ราสนิม และ โรคใบจุด มักพบในฤดูฝนเนื่องจากความชื้นสูง และควรระวังหนอนเจาะทำลายใบและผล`,
        },
      },
      gallery: {
        title: "เลือกดูโมเดลต้นไม้",
        items: {
          banana1: "กล้วย",
          coconut1: "มะพร้าวน้ำหอม",
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
      page: { title: "Fig" },
      ui: { play: "▶", close: "✖" },
      hotspot: {
        trunk: {
          title: "Trunk",
          desc: `Trunk and Branches: The bark is smooth and gray with white latex present in all parts of the plant, including the fruit.

Medicinal Properties: The bark and trunk can be boiled and consumed to relieve stomach pain, dysentery, and general body aches.`,
        },
        leaf: {
          title: "Leaf",
          desc: `Leaf Characteristics: Large leaves with 3–5 deep lobes (finger-like shape), rough texture, and dark green color.

Medicinal Use (Tea): Fig leaves are commonly used to make tea, which helps lower blood sugar, reduce triglycerides, and decrease blood pressure.`,
        },
        fruit: {
          title: "Fruit",
          desc: `Nutritional Value: Figs are rich in dietary fiber and important minerals such as calcium, iron, and folate.

Digestive Benefits: Acts as a mild natural laxative that helps relieve and prevent constipation due to its high fiber content.

Health Benefits: Helps control blood sugar levels, suitable for diabetics (consult a doctor first), reduces high blood pressure and blood fat levels.

Bone and Heart Health: Strengthens bones and teeth, helps prevent osteoporosis, and may reduce the risk of heart disease and stroke.

Caution: People with diabetes should monitor their blood sugar levels, as overconsumption may cause blood sugar to drop too low.`,
        },
        root: {
          title: "Root",
          desc: `General Characteristics: Fig roots prefer moisture but do not tolerate waterlogging, which can easily cause root rot.

Root Grafting: In Thailand, figs are often grafted onto “Ma Duea Uthumporn” (native fig) rootstock because it is stronger, more disease-resistant, and improves yield.

Root Pests: Beware of nematodes, which can attack and damage the root system.`,
        },
        care: {
          title: "Care",
          desc: `Sunlight/Climate: Requires full sunlight (at least 6 hours daily). Thrives in both humid and dry tropical climates in Thailand.

Soil and Planting: Prefers well-drained, loose soil. Can be planted both in-ground (2x2 m spacing) or in large pots.

Watering: Figs like consistent moisture but must not be waterlogged. Mulching with straw helps retain soil moisture.

Pruning: Regular pruning is key to encouraging continuous fruiting throughout the year by stimulating new branch growth.

Pests and Diseases: Watch for rust fungus and leaf spot during the rainy season, and protect against caterpillars that damage leaves and fruits.`,
        },
      },
      gallery: {
        title: "Choose a Tree Model",
        items: {
          banana1: "Banana",
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

  document.addEventListener("DOMContentLoaded", () => {
    applyStaticTranslations();
  });
})();
