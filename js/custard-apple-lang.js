(function () {
  const translations = {
    th: {
      page: { title: "น้อยหน่า" },
      ui: { play: "▶", close: "✖" },
      reference: { label: "แหล่งที่มา :" },
      hotspot: {
        trunk: {
          title: "ลำต้น",
          desc: `เป็นไม้ต้นขนาดเล็ก ผลัดใบ สูง 2-5 เมตร ลำต้นและกิ่งก้านค่อนข้างเปราะ หักง่าย เปลือกเรียบสีน้ำตาล<br><br>
          <b>ประโยชน์ :</b> เปลือกของต้นรสฝาดเฝื่อน ใช้สมานบาดแผล ห้ามเลือด แก้โรคท้องร่วง และเป็นยาบำรุงกำลัง<br><br>
          <b>การตกแต่ง :</b> นิยมตัดแต่งกิ่งให้สูงไม่เกิน 2 เมตร เพื่อให้แตกใบและติดผลดก`,
          reference: `
          <a href="https://www.wattano.ac.th/wattano/web_saunpluak/My%20Hip/116.html" target="_blank">แหล่งที่มา 1</a>`
        },
        leaf: {
          title: "ใบ",
          desc: `ใบเดี่ยว เรียงสลับ รูปรี ผิวใบเขียวเข้ม เมื่อตำผสมเหล้าขาวช่วยกำจัดเหาได้<br><br>
          <b>สรรพคุณ :</b> แก้กลากเกลื้อนและฆ่าเหา<br><br>
          <b>ข้อควรระวัง :</b> น้ำคั้นจากใบห้ามเข้าตาหรือสัมผัสเนื้อเยื่ออ่อน เพราะอาจทำให้แสบร้อนหรือเยื่อบุตาอักเสบได้`,
          reference: `
          <a href="http://rpk46.ac.th/home/web%20%E0%B8%AA%E0%B8%A7%E0%B8%99%E0%B8%9E%E0%B8%A4%E0%B8%A9%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C62/home/index2.html" target="_blank">แหล่งที่มา 1</a>`
        },
        fruit: {
          title: "ผล",
          desc: `รูปทรงคล้ายลูกระเบิด ผิวเปลือกขรุขระเป็นร่อง เนื้อเหนียวนุ่มหอมหวานจนได้ชื่อว่า “Sugar Apple”<br><br>
          <b>คุณค่าทางโภชนาการ (ต่อ 100 กรัม) :</b>
          <ul style="list-style-type: disc; margin-left: 20px;">
            <li>พลังงาน 94 kcal, คาร์โบไฮเดรต 23.64 กรัม, เส้นใย 4.4 กรัม, โปรตีน 2.06 กรัม, วิตามินซี 36.3 มิลลิกรัม, แคลเซียม 24 มิลลิกรัม, โพแทสเซียม 247 มิลลิกรัม</li>
          </ul><br>
          <b>สรรพคุณ :</b> มีอนุมูลอิสระสูง บำรุงสายตาและหัวใจ ช่วยควบคุมระดับน้ำตาล (เส้นใย) และลดความดันโลหิต<br><br>
          <b>ข้อควรระวัง :</b> น้ำสกัดจากเมล็ดอาจทำให้แพ้และอันตรายต่อดวงตา ผลแห้งใช้ทาแก้เริมและงูสวัดได้`,
          reference: `
          <a href="http://rpk46.ac.th/home/web%20%E0%B8%AA%E0%B8%A7%E0%B8%99%E0%B8%9E%E0%B8%A4%E0%B8%A9%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C62/home/index2.html" target="_blank">แหล่งที่มา 1</a>, 
          <a href="https://clgc.agri.kps.ku.ac.th/resources/herb/annona-s.html" target="_blank">แหล่งที่มา 2</a>`
        },
        root: {
          title: "ราก",
          desc: `ระบบรากแก้วแผ่กว้างขวาง<br><br>
          <b>สรรพคุณ :</b> ใช้เป็นยาระบาย ทำให้อาเจียน และใช้ถอนพิษเบื่อเมาหรือแก้พิษงูได้`,
          reference: `
          <a href="https://th.wikipedia.org/wiki/%E0%B8%99%E0%B9%89%E0%B8%AD%E0%B8%A2%E0%B8%AB%E0%B8%99%E0%B9%88%E0%B8%B2" target="_blank">แหล่งที่มา 1</a>`
        },
        care: {
          title: "การดูแล",
          desc: `<b>สภาพแวดล้อม :</b> ชอบแสงแดดเต็มที่ อุณหภูมิที่เหมาะสม 20-38 องศาเซลเซียส ทนแล้งได้ดี<br><br>
          <b>การให้น้ำ :</b> ทุกๆ 1-2 สัปดาห์ (ระดับปานกลาง)<br><br>
          <b>การตัดแต่ง :</b> ควรทำในช่วงฤดูหนาวขณะต้นพักตัว เพื่อกระตุ้นการเติบโตและผลผลิตที่ใหญ่สมบูรณ์ในฤดูใบไม้ผลิ`,
          reference: `
          <a href="https://puechkaset.com/%E0%B8%99%E0%B9%89%E0%B8%AD%E0%B8%A2%E0%B8%AB%E0%B8%99%E0%B9%88%E0%B8%B2/" target="_blank">แหล่งที่มา 1</a>`
        }
      },
      gallery: {
        title: "เลือกดูโมเดลต้นไม้",
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
      page: { title: "Custard Apple" },
      ui: { play: "▶", close: "✖" },
      reference: { label: "Reference :" },
      hotspot: {
        trunk: {
          title: "Stem",
          desc: `A small deciduous tree, 2-5 metres tall. The wood is brittle and the bark is smooth brown.<br><br>
          <b>Uses :</b> The astringent bark is used to heal wounds, staunch bleeding, and treat diarrhoea.<br><br>
          <b>Pruning :</b> Usually pruned to under 2 metres to encourage abundant leaf and fruit emergence.`,
          reference: `
          <a href="https://www.wattano.ac.th/wattano/web_saunpluak/My%20Hip/116.html" target="_blank">Source 1</a>`
        },
        leaf: {
          title: "Leaf",
          desc: `Simple leaves used as a poultice with white spirit to effectively treat head lice.<br><br>
          <b>Medicinal Properties :</b> Used to treat ringworm, tinea versicolor, and lice.<br><br>
          <b>Precaution :</b> Leaf juice can cause a burning sensation or conjunctivitis if it contacts eyes or nostrils.`,
          reference: `
          <a href="http://rpk46.ac.th/home/web%20%E0%B8%AA%E0%B8%A7%E0%B8%99%E0%B8%9E%E0%B8%A4%E0%B8%A9%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C62/home/index2.html" target="_blank">Source 1</a>`
        },
        fruit: {
          title: "Fruit",
          desc: `Shaped like a hand grenade with sweet, fragrant flesh, earning it the name "Sugar Apple."<br><br>
          <b>Nutritional Value (Per 100g) :</b>
          <ul style="list-style-type: disc; margin-left: 20px;">
            <li>94 kcal, 23.64g carbs, 4.4g fiber, vitamins B1-B9, 36.3mg Vit C, 24mg calcium, 247mg potassium.</li>
          </ul><br>
          <b>Properties :</b> Rich in antioxidants to nourish skin and hair. Helps regulate blood sugar and supports cardiac health.<br><br>
          <b>Precaution :</b> Seed extract may provoke allergic reactions; care must be taken to prevent contact with eyes.`,
          reference: `
          <a href="http://rpk46.ac.th/home/web%20%E0%B8%AA%E0%B8%A7%E0%B8%99%E0%B8%9E%E0%B8%A4%E0%B8%A9%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C62/home/index2.html" target="_blank">Source 1</a>, 
          <a href="https://clgc.agri.kps.ku.ac.th/resources/herb/annona-s.html" target="_blank">Source 2</a>`
        },
        root: {
          title: "Root",
          desc: `Possesses an extensive taproot system.<br><br>
          <b>Medicinal Properties :</b> Serves as a laxative, emetic, and antidote to snake venom and other toxins.`,
          reference: `
          <a href="https://th.wikipedia.org/wiki/%E0%B8%99%E0%B9%89%E0%B8%AD%E0%B8%A2%E0%B8%AB%E0%B8%99%E0%B9%88%E0%B8%B2" target="_blank">Source 1</a>`
        },
        care: {
          title: "Cultivation and Care",
          desc: `<b>Environment :</b> Full sun, optimal temp 20-38°C. Prefers sandy loam or chalky soil with pH 5.5-7.5.<br><br>
          <b>Watering :</b> Moderate moisture; every 1-2 weeks.<br><br>
          <b>Pruning :</b> Best performed during winter dormancy to stimulate vigorous spring growth and larger fruit size.`,
          reference: `
          <a href="https://puechkaset.com/%E0%B8%99%E0%B9%89%E0%B8%AD%E0%B8%A2%E0%B8%AB%E0%B8%99%E0%B9%88%E0%B8%B2/" target="_blank">Source 1</a>`
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
