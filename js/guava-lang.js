(function () {
  const translations = {
    th: {
      page: { title: "ฝรั่ง" },
      ui: { play: "▶", close: "✖" },
      hotspot: {
        trunk: {
          title: "ลำต้น",
          desc: `ลักษณะลำต้น: เป้นต้นไม้ขนาดกลาง สูงประมาณ 3-5 เมตร ผิวเปลือกต้นเรียบเกลี้ยง กิ่งอ่อนเป็นสี่เหลี่ยม

สรรพคุณเปลือกต้น: เปลือกต้นสดใช้ต้มน้ำชะล้างบริเวณที่เป็น ผดผื่นคัน หรือใช้ต้มแก้อาการลำไส้อักเสบ
`,
        },
        leaf: {
          title: "ใบ",
          desc: `ลักษณะ: เป็นใบเดี่ยว เรียงตรงข้าม มีความหนา หยาบ ใต้ท้องใบเป็นริ้ว เห็นเส้นใบชัดเจน ใบยาวประมาณ 10 ซม.
          
สารสำคัญที่เด่น: มีสาร แทนนิน และเป็นน้ำมันหอมระเหย ซึ่งมีฤทธิ์ ฝาดสมาน และยับยั้งเชื้อโรคได้

สรรพคุณทางยา: แก้ท้องเสีย/ท้องร่วง: นำใบสดหรือใบเพสลาดมาต้ม หรือเคี้ยวสดได้ เพื่อรักษาอาการท้องเดิน/ท้องร่วง (ที่ไม่ใช่บิดหรืออหิวาตกโรค)
		ภายนอก: ใช้ใบสดตำพอก ห้ามเลือด ใส่แผลสด ดูดหนอง แก้แผลพุพอง และช่วยดับกลิ่นปาก (เคี้ยวใบ 2-3 ใบ)
		ช่องปาก: บรรเทาอาการ ปวดฟัน และเหงือกบวม

`,
        },
        fruit: {
          title: "ผล",
          desc: `ลักษณะ: ลูกฝรั่งมีรูปทรงกลม รูปไข่ หรือรูปรี ผิวเรียบเกลี้ยง เนื้อในมีสีแดงสด (หรือสีชมพู) รสชาติหวานกรอบ

คุณค่าโภชนาการ: อุดมไปด้วย วิตามิน C (สูงมาก), วิตามิน A, B, K, โพแทสเซียม, และไฟเบอร์สูง

สารที่โดดเด่น: ไลโคฟิน (Lycopene) สารต้านอนุมูลอิสระที่มีประโยชน์มาก ซึ่งเป็นสาเหตุของสีแดงในเนื้อ

สรรพคุณ/ประโยชน์เฉพาะ ต้านมะเร็ง: ไลโคฟินมีฤทธิ์ยับยั้งการเจริญเติบโตของเซลล์มะเร็ง เช่น มะเร็งมดลูก มะเร็งปอด และมะเร็งต่อมลูกหมาก
	สุขภาพด้านหัวใจ: สารแทนนินช่วย ลดไขมันในเส้นเลือด และลดความเสี่ยงโรคหัวใจ ความดันเป็นต้น
	ด้านการลดน้ำหนักและระบบย่อยอาหาร: แคลอรี่ต่ำ ไฟเบอร์สูง ทำให้อิ่มนาน และช่วยบำรุงระบบทางเดินอาหารได้
`,
        },
      
        root: {
          title: "ราก",
          desc: `ระบบราก: มีการแผ่ขยาย (ต้องให้พื้นที่ปลูกกว้างพอ) รากส่วนใหญ่หากินอยู่บริเวณผิวดิน
สรรพคุณของราก: ใช้แก้น้ำเหลืองเสียเป็นฝี แผลพุพอง และแก้เลือดกำเดาไหลได้
`,
        },
        care: {
          title: "การดูแล",
          desc: `สภาพแวดล้อม: เจริญเติบโตได้ดีในสภาพอากาศอบอุ่น อุณหภูมิไม่ต่ำกว่า 16 องศาเซลเซียส ใช้ดินร่วนปนทราย ที่มีความอุดมสมบูรณ์และระบายน้ำดี ไม่ชอบน้ำขัง

การปลูก: ควรยกระดับแปลงปลูก และทำร่องระบายน้ำให้ดี ไม่ควรลองก้นหลุมด้วยปุ๋ย ในช่วงแรกของการปลูก

การให้น้ำ: ต้องรดน้ำให้ชื้นอยู่เสมอโดยเฉพาะในช่วงติดดอกและพัฒนาผล เพื่อป้องกันดอกร่วงก่อนติดผล

การตัดแต่งกิ่ง: เป็นหัวใจสำคัญในการกระตุ้นการออกผล โดยควร ตัดแต่งกิ่งให้โปร่ง และ เด็ดยอด ทุกความยาว 30-50 ซม. เพื่อให้กิ่งใหม่ออกมาติดผล

การป้องกันศัตรูพืช: ศัตรูสำคัญคือ แมลงวันผลไม้ ซึ่งป้องกันได้โดยการ ห่อผล ตั้งแต่ผิวผลยังแข็งและสีเขียว
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
      page: { title: "Guava" },
      ui: { play: "▶", close: "✖" },
      hotspot: {
        trunk: {
          title: "Trunk",
          desc: "The custard apple tree is a small shrub or tree with relatively smooth bark and many branches.",
        },
        leaf: {
          title: "Leaf",
          desc: "The leaves are simple, oblong to lance-shaped, with pointed tips and smooth dark-green surfaces.",
        },
        fruit: {
          title: "Fruit",
          desc: "The fruit has a bumpy green rind, with soft sweet white flesh and hard black seeds.",
        },
        root: {
          title: "Root",
          desc: "The tree has a taproot with lateral roots, anchoring the plant and absorbing nutrients.",
        },
        care: {
          title: "Care",
          desc: "Plant in well-drained loamy soil under full sun, water moderately, and fertilize to improve fruit quality.",
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

  // ✅ โหลดครั้งแรก
  document.addEventListener("DOMContentLoaded", () => {
    applyStaticTranslations();
  });
})();
