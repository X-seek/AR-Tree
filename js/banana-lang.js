(function () {
  const translations = {
    th: {
      page: { title: "กล้วย" },
      ui: { play: "▶", close: "✖" },

      hotspot: {
        trunk: {
          title: "ลำต้น",
          desc: `ลักษณะไม่ใช่ลำต้นจริงแต่เป็น "ลำต้นเทียม" (Pseudostem) 
ที่เกิดจากการอัดแน่นของกาบใบซ้อนทับกัน มีเนื้อเยื่ออ่อนและมีน้ำมาก<br><br>
<b>ประโยชน์หลัก :</b> หยวกกล้วย (ส่วนอ่อน) ใช้ประกอบอาหาร เช่น แกงหยวกกล้วย<br><br>
<b>สรรพคุณทางยา :</b> ช่วยห้ามเลือด, แก้โรคไส้เลื่อน (ตามตำรับสมุนไพรโบราณ)<br><br>
<b>ประโยชน์อื่นๆ :</b> ลำต้นที่ตัดแล้วสามารถนำมาใช้เป็นวัสดุเพาะเห็ด หรือใช้ในงานหัตถกรรมได้`
        },

        leaf: {
          title: "ใบ",
          desc: `แผ่นใบใหญ่ รูปทรงขอบขนาน ปลายใบมน สีเขียว ยาวประมาณ 1.7 - 2.5 เมตร 
กว้าง 70 - 90 เซนติเมตร<br><br>

<b>ประโยชน์หลัก :</b> ใช้ห่ออาหาร เช่น ขนม หรือห่อหมก เพราะทนความร้อนและให้กลิ่นหอม<br><br>

<b>สรรพคุณทางยา :</b> ปิ้งไฟพออุ่น นำมาประคบแผลไฟไหม้,
ต้มน้ำใช้อาบแก้ผดผื่นคัน, ห้ามเลือด, รักษาแผลสุนัขกัด<br><br>

<b>ยางจากใบ :</b> ช่วยห้ามเลือดและสมานแผล`
        },

        fruit: {
          title: "ผล",
          desc: `ผลมีรูปร่างป้อม เปลือกหนา เนื้อรสหวานอมเปรี้ยว (แตกต่างกันตามความสุก)
มีทั้งพันธุ์ที่มีเมล็ดและไม่มีเมล็ด<br><br>

<b>คุณค่าโภชนาการ :</b> เป็นแหล่งพลังงานดี (ประมาณ 100 กิโลแคลอรี่ต่อผล)  
มีน้ำตาลธรรมชาติ 3 ชนิด (ซูโครส, ฟรุกโตส, กลูโคส) และใยอาหารสูง  
อุดมด้วยโพแทสเซียม วิตามิน B6 ธาตุเหล็ก และแคลเซียม  
<ul>
<li>ผลดิบ : มีแทนนิน ช่วยรักษาอาการท้องเสียเล็กน้อย และโรคกระเพาะ</li>  
<li>ผลสุก : เป็นยาระบายอ่อน ๆ ช่วยแก้ท้องผูก บำรุงเหงือกและฟัน
ช่วยลดกลิ่นปาก (หากรับประทานก่อนแปรงฟันตอนเช้า)</li> 
</ul>
ประโยชน์ต่อสุขภาพ : ป้องกันโลหิตจาง บำรุงผิวพรรณ และเสริมภูมิคุ้มกัน
`
        },

        root: {
          title: "ราก",
          desc: `รากกล้วยเป็นรากฝอย แผ่กระจายไปด้านข้างกว้างถึง 5 เมตร 
และลึกประมาณ 70 เซนติเมตร ถือเป็นรากตื้นที่อยู่ใกล้ผิวดิน<br><br>

<b>ข้อควรระวัง :</b> ไม่ควรพรวนดินรอบโคนต้น ควรถางหญ้าแทน<br><br>
<b>สรรพคุณทางยา :</b> รากช่วยแก้อาการขัดเบา (ปัสสาวะขัด)`
        },

        care: {
          title: "การดูแล",
          desc: `<b>ดิน :</b> ชอบดินร่วนหรือดินร่วนปนทราย ระบายน้ำดี ไม่ท่วมขัง<br><br>
<b>น้ำ :</b> ต้องการน้ำสม่ำเสมอ โดยเฉพาะในฤดูแล้ง<br><br>
<b>ปุ๋ย </b>: ใส่ปุ๋ยคอกหรือปุ๋ยหมักทุก 2–3 เดือน 
อาจเสริมปุ๋ยเคมีสูตร 15-15-15 หรือที่มีโพแทสเซียมสูง<br><br>
<b>การตัดแต่ง :</b> ตัดใบแห้งหรือติดเชื้อออกเป็นประจำ เพื่อป้องกันโรคและแมลง<br><br>
<b>จัดการหน่อ :</b> ควรเหลือหน่อรอบกอไม่เกิน 2–3 หน่อ เพื่อให้ต้นแม่แข็งแรง`
        }
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

    // ---------------- ENGLISH TRANSLATION ----------------
    en: {
      page: { title: "Banana" },
      ui: { play: "▶", close: "✖" },

      hotspot: {
        trunk: {
          title: "Trunk",
          desc: `The banana trunk is actually a “pseudostem,” formed by tightly packed leaf sheaths. 
It contains soft tissue and a high amount of water.<br><br>

<b>Main uses :</b> The inner core (called “banana pith”) is edible and used in Thai dishes.<br><br>
<b>Medicinal properties :</b> Used to stop bleeding and relieve hernia (in traditional remedies).<br><br>
<b>Other uses :</b> The trunk can be used for mushroom cultivation or handicrafts.`
        },

        leaf: {
          title: "Leaf",
          desc: `Banana leaves are large, oblong, and bright green, about 1.7–2.5 meters long and 70–90 cm wide.  <br><br>

<b>Main uses :</b> Natural food wrapping material, great for steaming and grilling.  <br><br>
<b>Medicinal properties :</b> Slightly roasted leaves can treat burns; boiled leaves help relieve rashes and itching. 
The sap from the leaf can stop bleeding and help wounds heal faster.`
        },

        fruit: {
          title: "Fruit",
          desc: `The fruit is short and thick, with a firm peel and soft, sweet flesh.  
Some varieties contain seeds, while others are seedless.  <br><br>

<b>Nutritional value :</b> High in natural sugars (sucrose, fructose, glucose), fiber, and potassium.  
Rich in vitamin B6, iron, and calcium.  <br><br>

<b>Unripe fruit :</b> Contains tannins that relieve mild diarrhea and gastritis.  <br><br>
<b>Ripe fruit :</b> Acts as a mild laxative, relieves constipation, and freshens breath.  <br><br>
<b>Health benefits :</b> Prevents anemia, improves skin, and supports immunity.`
        },
        root: {
          title: "Root",
          desc: `The roots are fibrous and spread horizontally up to 5 meters wide and about 70 cm deep.  <br><br>
<b>Caution :</b> Avoid digging around the root zone—use weeding instead.  <br><br>
<b>Medicinal use :</b> Root decoction helps relieve urinary difficulties.`
        },

        care: {
          title: "Care",
          desc: `<b>Soil :</b> Prefers loamy or sandy loam soil with good drainage.  <br><br>
<b>Water :</b> Needs consistent moisture, especially in dry seasons.  <br><br>
<b>Fertilizer :</b> Apply compost or manure every 2–3 months.  
Supplement with balanced fertilizer (15-15-15) or potassium-rich formula.  <br><br>
<b>Pruning :</b> Remove dried or infected leaves regularly.  <br><br>
<b>Suckers :</b> Keep only 2–3 healthy suckers per clump for best fruit production.`
        }
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
    }
  };

  // ================== Language System ==================
  let currentLang = localStorage.getItem("lang") || "th";

  const get = (obj, path) =>
    path.split(".").reduce((o, k) => (o && o[k] != null ? o[k] : undefined), obj);

  function translateElement(el) {
    const key = el.getAttribute("data-i18n");
    const txt = get(translations[currentLang], key);
    if (!txt) return;
    if (el.tagName.toLowerCase() === "img") el.alt = txt;
    else el.textContent = txt;
  }

  function applyStaticTranslations() {
    document.querySelectorAll("[data-i18n]").forEach(translateElement);
    const titleEl = document.querySelector(".title");
    const titleTxt = get(translations[currentLang], "page.title");
    if (titleEl && titleTxt) titleEl.textContent = titleTxt;
  }

  function applyHotspotContent(key) {
    const data = get(translations[currentLang], `hotspot.${key}`);
    if (!data) return;
    const title = document.getElementById("hotspot-title");
    const desc = document.getElementById("hotspot-desc");
    if (title && data.title) title.textContent = data.title;
    if (desc && data.desc) desc.innerHTML = data.desc;
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
    applyStaticTranslations();
  }

  window.i18n = {
    setLanguage,
    getCurrentLang: () => currentLang,
    applyHotspotContent,
    applyStaticTranslations,
    initToggle
  };

  if (document.readyState === "complete" || document.readyState === "interactive")
    applyStaticTranslations();
  else
    document.addEventListener("DOMContentLoaded", applyStaticTranslations);
})();
