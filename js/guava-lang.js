(function () {
  const translations = {
    th: {
      page: { title: "ฝรั่ง" },
      ui: { play: "▶", close: "✖" },
      reference: { label: "แหล่งที่มา :" },
      hotspot: {
        trunk: {
          title: "ลำต้น",
          desc: `เป็นไม้ยืนต้นขนาดเล็กถึงขนาดกลาง เป็นทรงพุ่ม สูงประมาณ 3-10 เมตร แตกกิ่งก้านบริเวณใกล้โคนต้น มีการแตกหน่อจากรากบริเวณใกล้กับลำต้น เปลือกมีสีน้ำตาลอมแดงหรือน้ำตาลอมเขียว เปลือกลอกออกเมื่อลำต้นแก่ กิ่งอ่อนมีปีกเล็ก ทำให้กิ่งมีรูปเป็นสี่เหลี่ยม<br><br>
          <b>สรรพคุณ :</b> เปลือกต้น บรรเทาอาการปวดท้อง ใช้ร่วมกับพืชอื่นต้มดื่มแก้ท้องเสีย`,
          reference: `
          <a href="https://www.allkaset.com/plant/%E0%B8%9D%E0%B8%A3%E0%B8%B1%E0%B9%88%E0%B8%87.php" target="_blank">แหล่งที่มา 1</a>,
          <a href="https://www.kasettambon.com/%e0%b8%9d%e0%b8%a3%e0%b8%b1%e0%b9%88%e0%b8%87-%e0%b8%9c%e0%b8%a5%e0%b9%84%e0%b8%a1%e0%b9%89%e0%b8%97%e0%b8%b5%e0%b9%88%e0%b8%a1%e0%b8%b5%e0%b8%a7%e0%b8%b4%e0%b8%95%e0%b8%b2%e0%b8%a1%e0%b8%b4%e0%b8%99/" target="_blank">แหล่งที่มา 2</a>`
        },
        leaf: {
          title: "ใบ",
          desc: `เป็นใบเดี่ยว เรียงตรงข้าม ใบอ่อนมีสีเขียว ผิวใบมีลักษณะไม่เรียบ มีขนอ่อนปกคลุม ด้านบนใบมีร่องลึก แผ่นใบเป็นรูปไข่ ปลายมน กว้าง 3-7 เซนติเมตร ยาว 5-15 เซนติเมตร ฐานใบโค้ง ขอบใบเรียบ และมีขอบโปร่งใส<br><br>
          <b>สรรพคุณ :</b>
          <ul style="list-style-type: disc; margin-left: 20px;">
            <li>แก้ท้องเสีย ท้องร่วง ท้องเดิน (ที่ไม่ใช่บิด หรืออหิวาตกโรค)</li>
            <li>เป็นยาห้ามเลือด ใส่แผลสด โดยใช้ใบ 2-3 ใบเคี้ยวหรือตำพอก</li>
            <li>ระงับกลิ่นปาก แก้ฝี เป็นยาล้างแผล ดูดหนองและถอนพิษบาดแผล</li>
            <li>แก้เหงือกบวม แก้พิษเรื้อรัง แก้ปวดเนื่องจากเล็บขบ และแก้แพ้ยุง</li>
          </ul>`,
          reference: `
          <a href="https://www.allkaset.com/plant/%E0%B8%9D%E0%B8%A3%E0%B8%B1%E0%B9%88%E0%B8%87.php" target="_blank">แหล่งที่มา 1</a>,
          <a href="https://www.kasettambon.com/%e0%b8%9d%e0%b8%a3%e0%b8%b1%e0%b9%88%e0%b8%87-%e0%b8%9c%e0%b8%a5%e0%b9%84%e0%b8%a1%e0%b9%89%e0%b8%97%e0%b8%b5%e0%b9%88%e0%b8%a1%e0%b8%b5%e0%b8%a7%e0%b8%b4%e0%b8%95%e0%b8%b2%e0%b8%a1%e0%b8%b4%e0%b8%99/" target="_blank">แหล่งที่มา 2</a>`
        },
        fruit: {
          title: "ผล",
          desc: `รูปร่างกลมหรือรูปไข่ เป็นป่องตรงปลาย เส้นผ่าศูนย์กลาง 5-9 เซนติเมตร ยาว 5-12 เซนติเมตร เปลือกโดยทั่วไปเรียบและขรุขระเล็กน้อย ผิวเปลือกเป็นมัน ผลอ่อนสีเขียวเข้ม ผลแก่สีเขียวอ่อน เมื่อสุกจะมีสีเหลือง เนื้อผลมีสีขาว สีขาวชมพู หรือเหลืองตามสายพันธุ์<br><br>
          <b>คุณค่าทางโภชนาการ</b>
          <ul style="list-style-type: disc; margin-left: 20px;">
            <li>น้ำ 111 กรัม, น้ำตาล 8 กรัม, ใยอาหาร 3.6 กรัม, เบต้าแคโรทีน 26 ไมโครกรัม, วิตามินซี 234 มิลลิกรัม, โพแทสเซียม 230 มิลลิกรัม</li>
          </ul><br>
          <b>สรรพคุณ</b>
          <ul style="list-style-type: disc; margin-left: 20px;">
            <li><b>ผลอ่อน :</b> แก้ท้องเสีย ท้องร่วง ระงับกลิ่นปาก แก้บิดมูกเลือด แก้โรคเลือดออกตามไรฟัน บำรุงเหงือก ฟัน และผิวพรรณ</li>
            <li><b>ผลสุก :</b> มีสารเพ็กตินอยู่มาก ใช้รับประทานเป็นยาระบายได้</li>
          </ul>`,
          reference: `
          <a href="https://www.allkaset.com/plant/%E0%B8%9D%E0%B8%A3%E0%B8%B1%E0%B9%88%E0%B8%87.php" target="_blank">แหล่งที่มา 1</a>`
        },
        root: {
          title: "ราก",
          desc: `เป็นระบบรากแก้ว แตกเป็นรากแขนงจำนวนมาก และหยั่งลึกได้มากกว่า 2-5 เมตร รากส่วนใหญ่หากินอยู่บริเวณผิวดิน<br><br>
          <b>สรรพคุณ :</b> แก้น้ำเหลืองเสีย เป็นฝี แผลพุพอง และแก้เลือดกำเดาไหลได้`,
          reference: `
          <a href="https://www.allkaset.com/plant/%E0%B8%9D%E0%B8%A3%E0%B8%B1%E0%B9%88%E0%B8%87.php" target="_blank">แหล่งที่มา 1</a>,
          <a href="https://www.kasettambon.com/%e0%b8%9d%e0%b8%a3%e0%b8%b1%e0%b9%88%e0%b8%87-%e0%b8%9c%e0%b8%a5%e0%b9%84%e0%b8%a1%e0%b9%89%e0%b8%97%e0%b8%b5%e0%b9%88%e0%b8%a1%e0%b8%b5%e0%b8%a7%e0%b8%b4%e0%b8%95%e0%b8%b2%e0%b8%a1%e0%b8%b4%e0%b8%99/" target="_blank">แหล่งที่มา 2</a>`
        },
        care: {
          title: "การดูแล",
          desc: `<b>การให้น้ำ :</b> เริ่มให้น้ำครั้งแรกหลังการปลูกเสร็จให้เปียกชุ่ม หลังจากนั้นให้น้ำทุก 2 ครั้ง/วัน เช้า-เย็น<br><br>
          <b>การใส่ปุ๋ย :</b> ช่วงปลูกใช้ปุ๋ยสูตร 12-12-0 ผสมปุ๋ยคอกอัตรา 10:1 ช่วงออกดอกใช้สูตร 15-15-15 และก่อนเก็บเกี่ยว 1 เดือนใช้สูตร 12-12-24<br><br>
          <b>การตัดแต่งกิ่ง :</b> ตัดกิ่งที่มีอายุมากเกิน 3 ปีออกเพื่อให้กิ่งใหม่ขึ้นแทน เนื่องจากกิ่งเก่าจะให้ผลที่มีขนาดเล็กลง<br><br>
          <b>การป้องกัน :</b> ควรห่อผลตั้งแต่ผิวผลยังแข็งและสีเขียว เพื่อป้องกันแมลงวันผลไม้ และหมั่นกำจัดวัชพืชรอบโคนต้นทุกเดือน`,
          reference: `
          <a href="https://www.allkaset.com/plant/%E0%B8%9D%E0%B8%A3%E0%B8%B1%E0%B9%88%E0%B8%87.php" target="_blank">แหล่งที่มา 1</a>`
        }
      },
      gallery: {
        title: "เลือกดูโมเดลต้นไม้อื่น ๆ",
        items: {
          banana1: "กล้วย",
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
      reference: { label: "Reference :" },
      hotspot: {
        trunk: {
          title: "Stem",
          desc: `The guava is a small, shrubby perennial tree with a rounded crown, attaining a height of approximately 3 to 10 metres. It branches freely near the base. The bark is reddish-brown or brownish-green and peels away as the trunk matures. Young branches bear small wings, giving them a square cross-section.<br><br>
          <b>Medicinal Properties:</b> The bark of the stem is used to relieve abdominal pain and in combination with other plants in a decoction to treat diarrhoea.`,
          reference: `
          <a href="https://www.allkaset.com/plant/%E0%B8%9D%E0%B8%A3%E0%B8%B1%E0%B9%88%E0%B8%87.php" target="_blank">Source 1</a>,
          <a href="https://www.kasettambon.com/%e0%b8%9d%e0%b8%a3%e0%b8%b1%e0%b9%88%e0%b8%87-%e0%b8%9c%e0%b8%a5%e0%b9%84%e0%b8%a1%e0%b9%89%e0%b8%97%e0%b8%b5%e0%b9%88%e0%b8%a1%e0%b8%b5%e0%b8%a7%e0%b8%b4%e0%b8%95%e0%b8%b2%e0%b8%a1%e0%b8%b4%e0%b8%99/" target="_blank">Source 2</a>`
        },
        leaf: {
          title: "Leaf",
          desc: `The leaf is paired, with young leaves being green and covered with fine hairs on a slightly uneven surface. The blade is ovoid in shape with a rounded apex, measuring 3 to 7 cm in width and 5 to 15 cm in length. The underside has soft hairs and prominently visibly raised veins.<br><br>
          <b>Medicinal Properties:</b>
          <ul style="list-style-type: disc; margin-left: 20px;">
            <li>Used to treat diarrhoea (excluding dysentery and cholera) and as an agent to staunch bleeding for fresh wounds.</li>
            <li>Neutralises bad breath (by chewing 2-3 leaves) and treats abscesses.</li>
            <li>Cleanses wounds, draws out pus, relieves swollen gums, and treats chronic toxicity.</li>
            <li>Relieves pain from ingrown toenails and treats mosquito bites.</li>
          </ul>`,
          reference: `
          <a href="https://www.allkaset.com/plant/%E0%B8%9D%E0%B8%A3%E0%B8%B1%E0%B9%88%E0%B8%87.php" target="_blank">Source 1</a>,
          <a href="https://www.kasettambon.com/%e0%b8%9d%e0%b8%a3%e0%b8%b1%e0%b9%88%e0%b8%87-%e0%b8%9c%e0%b8%a5%e0%b9%84%e0%b8%a1%e0%b9%89%e0%b8%97%e0%b8%b5%e0%b9%88%e0%b8%a1%e0%b8%b5%e0%b8%a7%e0%b8%b4%e0%b8%95%e0%b8%b2%e0%b8%a1%e0%b8%b4%e0%b8%99/" target="_blank">Source 2</a>`
        },
        fruit: {
          title: "Fruit",
          desc: `Round or ovoid in form, prominently tapering at the apex, with a diameter of 5-9 cm and length of 5-12 cm. Immature fruit is deep green; as it matures it becomes light green, turning yellow upon ripening. The flesh may be white, pinkish-white, or yellow.<br><br>
          <b>Nutritional Value (Per 100g):</b>
          <ul style="list-style-type: disc; margin-left: 20px;">
            <li>111g water, 8g sugar, 3.6g dietary fibre, 26mcg beta-carotene, 234mg vitamin C, 230mg potassium.</li>
          </ul><br>
          <b>Medicinal Properties:</b>
          <ul style="list-style-type: disc; margin-left: 20px;">
            <li><b>Unripe fruit:</b> Used to treat diarrhoea, dysentery, and bloody stools; neutralises bad breath; treats scurvy and bleeding gums.</li>
            <li><b>Ripe fruit:</b> Contains a substantial quantity of pectin and is consumed as a natural laxative.</li>
          </ul>`,
          reference: `
          <a href="https://www.allkaset.com/plant/%E0%B8%9D%E0%B8%A3%E0%B8%B1%E0%B9%88%E0%B8%87.php" target="_blank">Source 1</a>`
        },
        root: {
          title: "Root",
          desc: `The guava possesses a taproot system from which numerous lateral roots radiate, penetrating the soil to a depth of more than 2 to 5 metres. Most roots grow near the soil surface.<br><br>
          <b>Medicinal Properties:</b> The root is used to treat impurity of the lymphatic system, abscesses, suppurating wounds, and nosebleeds.`,
          reference: `
          <a href="https://www.allkaset.com/plant/%E0%B8%9D%E0%B8%A3%E0%B8%B1%E0%B9%88%E0%B8%87.php" target="_blank">Source 1</a>,
          <a href="https://www.kasettambon.com/%e0%b8%9d%e0%b8%a3%e0%b8%b1%e0%b9%88%e0%b8%87-%e0%b8%9c%e0%b8%a5%e0%b9%84%e0%b8%a1%e0%b9%89%e0%b8%97%e0%b8%b5%e0%b9%88%e0%b8%a1%e0%b8%b5%e0%b8%a7%e0%b8%b4%e0%b8%95%e0%b8%b2%e0%b8%a1%e0%b8%b4%e0%b8%99/" target="_blank">Source 2</a>`
        },
        care: {
          title: "Cultivation and Care",
          desc: `<b>Watering:</b> Thorough irrigation immediately following planting, thereafter twice daily—in the morning and evening.<br><br>
          <b>Fertilisation:</b> Initially use formula 12-12-0 with organic manure (10:1 ratio). During production, apply 15-15-15 during flowering, and 12-12-24 one month prior to harvest.<br><br>
          <b>Pruning:</b> Remove branches that have borne fruit for three or more years to allow new growth, preventing progressively smaller fruit size.<br><br>
          <b>Maintenance:</b> Clear weeds monthly combined with soil cultivation. Wrap individual fruits when firm and green to prevent fruit fly infestation.`,
          reference: `
          <a href="https://www.allkaset.com/plant/%E0%B8%9D%E0%B8%A3%E0%B8%B1%E0%B9%88%E0%B8%87.php" target="_blank">Source 1</a>`
        }
      },
      gallery: {
        title: "Choose a Tree Model",
        items: {
          banana1: "Banana",
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
  const get = (obj, path) => path.split(".").reduce((o, k) => (o && o[k] != null ? o[k] : undefined), obj);

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
    if (title) title.textContent = data.title;
    if (desc) desc.innerHTML = data.desc;
    if (ref) ref.innerHTML = data.reference;
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
    check.addEventListener("change", () => setLanguage(check.checked ? "en" : "th"));
  }

  window.i18n = { setLanguage, getCurrentLang: () => currentLang, applyHotspotContent, initToggle };
  document.addEventListener("DOMContentLoaded", () => { applyStaticTranslations(); initToggle(); });
})();
