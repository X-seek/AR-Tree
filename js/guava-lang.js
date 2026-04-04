(function () {
  const translations = {
    th: {
      page: { title: "ฝรั่ง" },
      ui: { play: "▶", close: "✖" },
      reference: { label: "แหล่งที่มา :" },
      hotspot: {
        trunk: {
          title: "ลำต้น",
          desc: `เป็นไม้ยืนต้นขนาดเล็ก เป็นทรงพุ่ม สูงประมาณ 3-10 เมตร แตกกิ่งก้านบริเวณใกล้โคนต้น มีการแตกหน่อจากรากบริเวณใกล้กับลำต้น เปลือกมีสีน้ำตาลอมแดงหรือน้ำตาลอมเขียว เปลือกลอกออกเมื่อลำต้นแก่ กิ่งอ่อนมีปีกเล็ก ทำให้กิ่งมีรูปเป็นสี่เหลี่ยม กิ่งอ่อนมีสีเขียวอมเหลืองหรือแดงเข้ม มีขนปกคลุมหนาแน่น และจะหลุดหายเมื่อกิ่งแก่ กิ่งแก่สีน้ำตาลอมแดงไม่มีขนปกคลุม<br><br>
          
          <b>สรรพคุณ :</b> เปลือกต้น บรรเทาอาการปวดท้อง ใช้ร่วมกับพืชอื่นต้มดื่มแก้ท้องเสีย`,
          
          reference: `
          <a href="https://www.allkaset.com/plant/%E0%B8%9D%E0%B8%A3%E0%B8%B1%E0%B9%88%E0%B8%87.php" target="_blank">แหล่งที่มา 1</a>,
          <a href="https://www.kasettambon.com/%e0%b8%9d%e0%b8%a3%e0%b8%b1%e0%b9%88%e0%b8%87-%e0%b8%9c%e0%b8%a5%e0%b9%84%e0%b8%a1%e0%b9%89%e0%b8%97%e0%b8%b5%e0%b9%88%e0%b8%a1%e0%b8%b5%e0%b8%a7%e0%b8%b4%e0%b8%95%e0%b8%b2%e0%b8%a1%e0%b8%b4%e0%b8%99/" target="_blank">แหล่งที่มา 2</a>`
        },
        leaf: {
          title: "ใบ",
          desc: `เป็นไม้ประเภทใบคู่ ใบอ่อนมีสีเขียว ผิวใบมีลักษณะไม่เรียบ มีขนอ่อนปกคลุม แตกออก 2 ใบ จากกิ่งตรงข้ามกัน ด้านบน ใบมีร่องลึก แผ่นใบเป็นรูปไข่ ปลายมน กว้าง 3-7 เซนติเมตร ยาว 5-15 เซนติเมตร ด้านหลังใบเรียบ ด้านท้องใบมีขนอ่อนปกคลุม มีเส้นใบมองเห็นชัด เป็นนูนขึ้นมา ฐานใบโค้ง ขอบใบเรียบ และมีขอบโปร่งใส<br><br>
          
          <b>สรรพคุณ :</b> แก้ท้องเสีย ท้องร่วง ท้องเดิน (ที่ไม่ใช่บิด หรืออหิวาตกโรค) เป็นยาห้ามเลือด ใส่แผลสด ใช้ใบ 2-3 ใบเคี้ยว ๆ ระงับกลิ่นปาก แก้ฝี เป็นยาล้างแผล ดูดหนองและถอนพิษบาดแผล แก้เหงือกบวม แก้พิษเรื้อรัง แก้ปวดเนื่องจากเล็บขบ แก้แพ้ยุง`,
         
          reference: `
          <a href="https://www.allkaset.com/plant/%E0%B8%9D%E0%B8%A3%E0%B8%B1%E0%B9%88%E0%B8%87.php" target="_blank">แหล่งที่มา 1</a>,
          <a href="https://www.kasettambon.com/%e0%b8%9d%e0%b8%a3%e0%b8%b1%e0%b9%88%e0%b8%87-%e0%b8%9c%e0%b8%a5%e0%b9%84%e0%b8%a1%e0%b9%89%e0%b8%97%e0%b8%b5%e0%b9%88%e0%b8%a1%e0%b8%b5%e0%b8%a7%e0%b8%b4%e0%b8%95%e0%b8%b2%e0%b8%a1%e0%b8%b4%e0%b8%99/" target="_blank">แหล่งที่มา 2</a>`
        },
        fruit: {
          title: "ผล",
          desc: `รูปร่างกลมหรือรูปไข่ เป็นป่องตรงปลาย เส้นผ่าศูนย์กลาง 5-9 เซนติเมตร ยาว 5-12 เซนติเมตร เปลือกโดยทั่วไปเรียบและขรุขระเล็กน้อย ผิวเปลือกเป็นมัน ผลอ่อนสีเขียวเข้ม ผลแก่สีเขียวอ่อน เมื่อสุกจะมีสีเหลือง เนื้อผลมีสีขาว สีขาวชมพู หรือเหลืองตามสายพันธุ์<br><br>
          
          <b>คุณค่าทางโภชนาการ</b>
          <ul class="desc">
            
          <li>น้ำ 111 กรัม, น้ำตาล 8 กรัม, ใยอาหาร 3.6 กรัม, เบต้าแคโรทีน 26 ไมโครกรัม, วิตามินซี 234 มิลลิกรัม, โพแทสเซียม 230 มิลลิกรัม</li>
          
          </ul><br>
          <b>สรรพคุณ :</b>
          <ul class="desc">
           
          <li><b>ผลอ่อน</b> แก้ท้องเสีย ท้องร่วง ท้องเดิน ระงับกลิ่นปาก แก้บิดมูกเลือด แก้โรคเลือดออกตามไรฟัน (ลักปิดลักเปิด) บำรุงเหงือกและฟัน บำรุงผิวพรรณ</li>
            
          <li><b>ผลสุก</b> มีสารเพ็กตินอยู่มาก ใช้รับประทานเป็นยาระบายได้</li>
          </ul>`,
          reference: `
          <a href="https://www.allkaset.com/plant/%E0%B8%9D%E0%B8%A3%E0%B8%B1%E0%B9%88%E0%B8%87.php" target="_blank">แหล่งที่มา 1</a>`
        },
        root: {
          title: "ราก",
          desc: `เป็นระบบรากแก้ว แตกเป็นรากแขนงจำนวนมาก และหยั่งลึกได้มากกว่า 2-5 เมตร<br><br>
          
          <b>สรรพคุณ :</b> แก้น้ำเหลืองเสีย เป็นฝี แผลพุพอง และแก้เลือดกำเดาไหล`,
         
          reference: `
          <a href="https://www.allkaset.com/plant/%E0%B8%9D%E0%B8%A3%E0%B8%B1%E0%B9%88%E0%B8%87.php" target="_blank">แหล่งที่มา 1</a>,
          <a href="https://www.kasettambon.com/%e0%b8%9d%e0%b8%a3%e0%b8%b1%e0%b9%88%e0%b8%87-%e0%b8%9c%e0%b8%a5%e0%b9%84%e0%b8%a1%e0%b9%89%e0%b8%97%e0%b8%b5%e0%b9%88%e0%b8%a1%e0%b8%b5%e0%b8%a7%e0%b8%b4%e0%b8%95%e0%b8%b2%e0%b8%a1%e0%b8%b4%e0%b8%99/" target="_blank">แหล่งที่มา 2</a>`
        },
        care: {
          title: "การดูแล",
          desc: `<b>การให้น้ำ :</b> เริ่มให้น้ำครั้งแรกหลังการปลูกเสร็จให้เปียกชุ่ม หลังจากนั้นให้น้ำทุก 2 ครั้ง/วัน เช้า-เย็น<br><br>
          
          <b>การใส่ปุ๋ย : การใส่ปุ๋ยแบ่งเป็น 2 ช่วง ได้แก่</b><br>
          <ul  class="desc">
         
          <li>ช่วงปลูกจนถึงออกผลรุ่นแรก จะใส่ปุ๋ยเป็นระยะเพื่อให้ต้นฝรั่งสามารถเจริญเติบโตได้ดี โดยอาจใช้ปุ๋ยคอกหรือปุ๋ยหมักผสมกับปุ๋ยเคมีในสูตร 12-12-0 ในอัตราส่วนปุ๋ยคอกต่อปุ๋ยเคมี 10:1 ในอัตรา 0.5 กิโลกรัม/ต้น ประมาณ 1-2 ครั้ง ก่อนการติดดอก</li>
          
          <li>ช่วงให้ผลผลิต ในช่วงที่ให้ผลิตในระยะออกดอกให้ใส่ปุ๋ยหมักร่วมกับปุ๋ยเคมีสูตร 15-15-15 ในอัตราเดียวกัน และเมื่อก่อนที่ผลฝรั่งจะห่ามก่อนเก็บผลผลิตประมาณ 1 เดือน ให้ใส่ปุ๋ยสูตร 12-12-24 ในอัตราเดียวกัน</li>
          </ul>
          
          <b>การกำจัดวัชพืช :</b>ในระยะเริ่มปลูกจนถึงต้นอายุ 6 เดือน หลังปลูก ให้กำจัดวัชพืชรอบโคนต้นทุก ๆ 1 ครั้ง/เดือน ร่วมด้วยกับการไถกลบ หลังจากเมื่อต้นแตกกิ่งแล้วอาจทำการกำจัดวัชพืชน้อยลงก็ได้<br><br>
          
          <b>การตัดแต่งกิ่ง :</b>การตัดแต่งกิ่งจะตัดกิ่งที่มีอายุมากแล้วออกเพื่อให้กิ่งใหม่ขึ้นแทน เพราะหากใช้กิ่งที่ให้ผลมาแล้วตั้งแต่ 3 ปี จะทำให้ผลที่ได้มีขนาดเล็ก เพื่อให้มีลักษณะทรงพุ่มที่พอเหมาะสำหรับการเก็บผล`,
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
          <b>Medicinal Properties : </b>The bark of the stem is used to relieve abdominal pain and in combination with other plants in a decoction to treat diarrhoea.`,
          reference: `
          <a href="https://www.allkaset.com/plant/%E0%B8%9D%E0%B8%A3%E0%B8%B1%E0%B9%88%E0%B8%87.php" target="_blank">Source 1</a>,
          <a href="https://www.kasettambon.com/%e0%b8%9d%e0%b8%a3%e0%b8%b1%e0%b9%88%e0%b8%87-%e0%b8%9c%e0%b8%a5%e0%b9%84%e0%b8%a1%e0%b9%89%e0%b8%97%e0%b8%b5%e0%b9%88%e0%b8%a1%e0%b8%b5%e0%b8%a7%e0%b8%b4%e0%b8%95%e0%b8%b2%e0%b8%a1%e0%b8%b4%e0%b8%99/" target="_blank">Source 2</a>`
        },
        leaf: {
          title: "Leaf",
          desc: `The leaf is paired, with young leaves being green and covered with fine hairs on a slightly uneven surface. The blade is ovoid in shape with a rounded apex, measuring 3 to 7 cm in width and 5 to 15 cm in length. The underside has soft hairs and prominently visibly raised veins.<br><br>
          <b>Medicinal Properties:</b>
          <ul class="desc">
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
          <ul class="desc">
            <li>111g water, 8g sugar, 3.6g dietary fibre, 26mcg beta-carotene, 234mg vitamin C, 230mg potassium.</li>
          </ul><br>
          <b>Medicinal Properties:</b>
          <ul class="desc">
            <li><b>Unripe fruit:</b> Used to treat diarrhoea, dysentery, and bloody stools; neutralises bad breath; treats scurvy and bleeding gums.</li>
            <li><b>Ripe fruit:</b> Contains a substantial quantity of pectin and is consumed as a natural laxative.</li>
          </ul>`,
          reference: `
          <a href="https://www.allkaset.com/plant/%E0%B8%9D%E0%B8%A3%E0%B8%B1%E0%B9%88%E0%B8%87.php" target="_blank">Source 1</a>`
        },
        root: {
          title: "Root",
          desc: `The guava possesses a taproot system from which numerous lateral roots radiate, penetrating the soil to a depth of more than 2 to 5 metres. Most roots grow near the soil surface.<br><br>
          <b>Medicinal Properties : </b>The root is used to treat impurity of the lymphatic system, abscesses, suppurating wounds, and nosebleeds.`,
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
