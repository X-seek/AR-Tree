(function () {
  const translations = {
    th: {
      page: { title: "กล้วย" },
      ui: { play: "▶", close: "✖" },
      reference: { label: "อ้างอิง :" },
      hotspot: {
        trunk: {
          title: "ลำต้น",
          desc: `ลำต้นอยู่ใต้ดินเรียกว่า “เหง้า” ที่เราเห็นอยู่เหนือพื้นดินเป็นลำต้นเทียม ประกอบด้วย กาบใบ ซึ่งจะชูก้านใบและใบ เมื่อเจริญแล้วจะมีใบสุดท้ายก่อนเกิดดอก เรียกว่า “ใบธง”<br><br>
          <b>สรรพคุณ :</b> ห้ามเลือด แก้โรคไส้เลื่อน<br><br>
          <b>ประโยชน์ :</b> ช่วยรักษาปัญหาผิวหนัง ผื่นแดง แผลไฟไหม้ และน้ำร้อนลวก สามารถนำมาทำเป็นเชือก หรือทำเส้นใยทอผ้า`,
          reference: `
          <a href="https://saranukromthai.or.th/smallchild/1086#:~:text=%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9B%E0%B8%A5%E0%B8%B9%E0%B8%81%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%94%E0%B8%B9%E0%B9%81%E0%B8%A5" target="_blank">แหล่งที่มา 1</a>, 
          <a href="https://hdmall.co.th/blog/c/banana-types-and-benefits/" target="_blank">แหล่งที่มา 2</a>, 
          <a href="https://www.rspg.or.th/plants_data/herbs/herbs_13_1.htm" target="_blank">แหล่งที่มา 3</a>`
        },
        leaf: {
          title: "ใบ",
          desc: `เป็นแผ่นใบใหญ่สีเขียว กว้างประมาณ 70-90 เซนติเมตร ยาวประมาณ 1.7-2.5 เมตร ทั้งปลายและโคนใบมน รูปใบขอบขนาน<br><br>
          <b>สรรพคุณ :</b> รักษาแผลสุนัขกัด ห้ามเลือด<br><br>
          <b>ประโยชน์ :</b> ใช้ประดิษฐ์กระทงหรือบายศรี เป็นวัสดุรองอาหารร้อนๆ และใช้ห่ออาหารได้หลากหลายชนิด เช่น ขนม ผักสด ห่อหมก เพราะทนความร้อนได้ดีและมีกลิ่นหอม`,
          reference: `
          <a href="https://saranukromthai.or.th/smallchild/1086#:~:text=%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9B%E0%B8%A5%E0%B8%B9%E0%B8%81%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%94%E0%B8%B9%E0%B9%81%E0%B8%A5" target="_blank">แหล่งที่มา 1</a>, 
          <a href="https://hdmall.co.th/blog/c/banana-types-and-benefits/" target="_blank">แหล่งที่มา 2</a>, 
          <a href="https://www.rspg.or.th/plants_data/herbs/herbs_13_1.htm" target="_blank">แหล่งที่มา 3</a>`
        },
        fruit: {
          title: "ผล",
          desc: `กลุ่มดอกเพศเมียเจริญเป็นผลได้โดยไม่ต้องผสมพันธุ์ 1 หวีคือ 1 กลุ่ม และทั้งช่อเรียกว่า "เครือ" จำนวนหวีขึ้นอยู่กับพันธุ์และการดูแล<br><br>
          <b>คุณค่าทางโภชนาการ :</b>
          <ul style="list-style-type: disc; margin-left: 20px;">
            <li>พลังงาน 132 กิโลแคลอรี, น้ำ 66.3 กรัม, โปรตีน 0.9 กรัม, ไขมัน 0.2 กรัม, คาร์โบไฮเดรต 31.7 กรัม, ไฟเบอร์ 1.9 กรัม, แคลเซียม 26 มิลลิกรัม, ฟอสฟอรัส 46 มิลลิกรัม, เหล็ก 0.8 มิลลิกรัม, เบต้าแคโรทีน 99 ไมโครกรัม, วิตามินเอ 17 ไมโครกรัม, วิตามินบี 1 (ไทอะมีน) 0.04 มิลลิกรัม, วิตามินบี 2 (ไรโบฟลาวิน) 0.07 มิลลิกรัม, ไนอะซิน 0.1 มิลลิกรัม, วิตามินซี 27 มิลลิกรัม</li>
          </ul><br>
          <b>ประโยชน์ :</b> ใช้ในพิธีกรรมต่างๆ เป็นอาหารเสริมเด็กและอาหารสุขภาพ มีโพแทสเซียมสูงช่วยลดความดันและบำรุงผิว<br>
          • <b>ผลดิบ:</b> แก้อาการท้องเสีย<br>
          • <b>เปลือกกล้วย:</b> แก้อาการผื่นคันจากยุงกัด`,
          reference: `
          <a href="https://saranukromthai.or.th/smallchild/1086#:~:text=%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9B%E0%B8%A5%E0%B8%B9%E0%B8%81%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%94%E0%B8%B9%E0%B9%81%E0%B8%A5" target="_blank">แหล่งที่มา 1</a>, 
          <a href="https://www.rattinan.com/banana/" target="_blank">แหล่งที่มา 2</a>, 
          <a href="https://phayao.mnre.go.th/th/board/topic/102" target="_blank">แหล่งที่มา 3</a>`
        },
        root: {
          title: "ราก",
          desc: `เป็นระบบรากฝอย แผ่ไปทางกว้าง<br><br>
          <b>สรรพคุณ :</b> แก้ขัดเบา, แก้ร้อนในกระหายน้ำ, แก้ท้องร่วง บิด, แก้โรคปากเปื่อย, ไข้ และปวดตามข้อ<br><br>
          <b>ตำรับตรีอมฤต :</b> รากกล้วยตีบผสมรากกระดอมและรากมะกอก ช่วยแก้ไข้ ขับปัสสาวะ และบำรุงธาตุ`,
          reference: `
          <a href="https://saranukromthai.or.th/smallchild/1086#:~:text=%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9B%E0%B8%A5%E0%B8%B9%E0%B8%81%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%94%E0%B8%B9%E0%B9%81%E0%B8%A5" target="_blank">แหล่งที่มา 1</a>, 
          <a href="https://hdmall.co.th/blog/c/banana-types-and-benefits/" target="_blank">แหล่งที่มา 2</a>, 
          <a href="https://www.rspg.or.th/plants_data/herbs/herbs_13_1.htm" target="_blank">แหล่งที่มา 3</a>, 
          <a href="https://phar.ubu.ac.th/herb-DetailThaicrudedrug/197" target="_blank">แหล่งที่มา 4</a>`
        },
        care: {
          title: "การดูแล",
          desc: `<b>สภาพแวดล้อม :</b> ชอบอากาศร้อนชื้น ดินร่วนปนทรายระบายน้ำดี (ชะงักการโตถ้าต่ำกว่า 14°C)<br><br>
          <b>การใส่ปุ๋ย :</b> เริ่มด้วยยูเรีย, เดือน 3-4 ใช้ 15-15-15, เดือน 5-6 ใช้ 13-13-21 ต้นละ 0.5 กก.<br><br>
          <b>ข้อควรระวัง :</b> ไม่ควรพรวนดินรอบโคนต้น (ควรใช้วิธีถางหญ้า) และตัดแต่งหน่อให้เหลือเพียง 1-2 หน่อเพื่อพยุงต้นแม่`,
          reference: `
          <a href="https://saranukromthai.or.th/smallchild/1086#:~:text=%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9B%E0%B8%A5%E0%B8%B9%E0%B8%81%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%94%E0%B8%B9%E0%B9%81%E0%B8%A5" target="_blank">แหล่งที่มา 1</a>`
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
    en: {
      page: { title: "Banana" },
      ui: { play: "▶", close: "✖" },
      reference: { label: "Reference :" },
      hotspot: {
        trunk: {
          title: "Stem",
          desc: `The visible part is a "pseudostem" made of leaf sheaths. The true stem is the underground rhizome.<br><br>
          <b>Medicinal Properties :</b> Staunch bleeding and treat hernia.<br><br>
          <b>Uses :</b> Addressing skin conditions (redness/burns), making rope, or weaving into textile fibers.`,
          reference: `
          <a href="https://saranukromthai.or.th/smallchild/1086" target="_blank">Source 1</a>, 
          <a href="https://hdmall.co.th/blog/c/banana-types-and-benefits/" target="_blank">Source 2</a>, 
          <a href="https://www.rspg.or.th/plants_data/herbs/herbs_13_1.htm" target="_blank">Source 3</a>`
        },
        leaf: {
          title: "Leaf",
          desc: `Broad green blades (1.7-2.5m long). Oblong shape with rounded apex and base.<br><br>
          <b>Uses :</b> Crafting traditional decorations (Kratong/Baisri), lining vessels for hot food, and wrapping steamed dishes due to high heat resistance and fragrance.`,
          reference: `
          <a href="https://saranukromthai.or.th/smallchild/1086" target="_blank">Source 1</a>, 
          <a href="https://hdmall.co.th/blog/c/banana-types-and-benefits/" target="_blank">Source 2</a>, 
          <a href="https://www.rspg.or.th/plants_data/herbs/herbs_13_1.htm" target="_blank">Source 3</a>`
        },
        fruit: {
          title: "Fruit",
          desc: `Develops without pollination. A cluster is a "hand" and the entire structure is a "bunch".<br><br>
          <b>Nutritional Value :</b>
          <ul style="list-style-type: disc; margin-left: 20px;">
            <li>Per 100g: 132 kcal; 66.3g water; 0.9g protein; 0.2g fat; 31.7g carbs; 1.9g fibre; 26mg calcium; 46mg phosphorus; 0.8mg iron; 99mcg beta-carotene; 17mcg Vit A; 0.04mg B1; 0.07mg B2; 0.1mg niacin; 27mg Vit C.</li>
          </ul><br>
          <b>Benefits :</b> High potassium regulates blood pressure and nourishes skin. Unripe fruit treats diarrhea; peel soothes mosquito bites.`,
          reference: `
          <a href="https://saranukromthai.or.th/smallchild/1086" target="_blank">Source 1</a>, 
          <a href="https://www.rattinan.com/banana/" target="_blank">Source 2</a>, 
          <a href="https://phayao.mnre.go.th/th/board/topic/102" target="_blank">Source 3</a>`
        },
        root: {
          title: "Root",
          desc: `Fibrous root system spreading laterally.<br><br>
          <b>Traditional Medicine :</b> Prescribed for thirst, internal heat, fever, and muscle pain. Part of the "Tri Amrit" formula to promote urination and appetite.`,
          reference: `
          <a href="https://saranukromthai.or.th/smallchild/1086" target="_blank">Source 1</a>, 
          <a href="https://hdmall.co.th/blog/c/banana-types-and-benefits/" target="_blank">Source 2</a>, 
          <a href="https://www.rspg.or.th/plants_data/herbs/herbs_13_1.htm" target="_blank">Source 3</a>, 
          <a href="https://phar.ubu.ac.th/herb-DetailThaicrudedrug/197" target="_blank">Source 4</a>`
        },
        care: {
          title: "Cultivation and Care",
          desc: `<b>Watering :</b> Growth impedes below 14°C. Prefers sandy loam with good drainage.<br><br>
          <b>Fertilisation :</b> Initial Urea, followed by 15-15-15 (Month 3-4), then 13-13-21 (Month 5-6).<br><br>
          <b>Caution :</b> Weeding is preferred over tilling to avoid root damage. Maintain only 1-2 suckers for support.`,
          reference: `
          <a href="https://saranukromthai.or.th/smallchild/1086" target="_blank">Source 1</a>`
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

  document.addEventListener("DOMContentLoaded", () => {
    applyStaticTranslations();
    initToggle();
  });
})();
