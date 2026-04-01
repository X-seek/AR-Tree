(function () {
  const translations = {
    th: {
      page: { title: "ลำไย" },
      ui: { play: "▶", close: "✖" },
      reference: { label: "แหล่งที่มา :" },
      hotspot: {
        trunk: {
          title: "ลำต้น",
          desc: `ไม้ยืนต้นทรงพุ่มทึบ ไม้เนื้อแข็ง เปลือกขรุขระ เนื้อไม้สีแดงหรือน้ำตาลอมแดง แข็งแรงมาก<br><br>
          <b>ประโยชน์ :</b> เปลือกต้มดื่มแก้ท้องร่วง ท้องเสีย และใช้สมานแผล ไฟไหม้ และน้ำร้อนลวก ส่วนเนื้อไม้ใช้ทำเฟอร์นิเจอร์ ครก เขียง หรือเป็นไม้ฟืนรมควันชั้นดี เพราะให้ความร้อนสูงและควันมีกลิ่นหอมเป็นเอกลักษณ์`,
          reference: `
                <a href="https://archive.lib.cmu.ac.th/full/T/2535/biol0535tc_ch2.pdf" target="_blank">แหล่งที่มา 1</a>, 
                <a href="https://www.rspg.or.th/plants_data/use/juice2-9.htm" target="_blank">แหล่งที่มา 2</a>, 
                <a href="https://www.disthai.com/17370860/%E0%B8%A5%E0%B8%B3%E0%B9%84%E0%B8%A2" target="_blank">แหล่งที่มา 3</a>, 
                <a href="https://www.thaihof.org/ลำไย-ผลไม้และยาพื้นบ้าน/" target="_blank">แหล่งที่มา 4</a>`
        },
        leaf: {
          title: "ใบ",
          desc: `เป็นใบประกอบแบบขนนก ใบย่อยรูปรีแกมรูปหอก<br><br>
          <b>สรรพคุณ :</b> ต้มดื่มเป็นชาแก้หวัด ไข้มาลาเรีย บรรเทาริดสีดวงทวาร หรือใช้ต้มชะล้างแผลเปื่อย แผลหนอง ฝี`,
          reference: `
                <a href="https://www.doctor.or.th/article/detail/5986" target="_blank">แหล่งที่มา 1</a>, 
                <a href="https://researchex.mju.ac.th/dbplant/index.php/horticulture/item/e-daw" target="_blank">แหล่งที่มา 2</a>, 
                <a href="https://skm.ssru.ac.th/news/view/176649" target="_blank">แหล่งที่มา 3</a>, 
                <a href="https://www.qsds.go.th/pd/detail.php?idplant=2&catplant=ล" target="_blank">แหล่งที่มา 4</a>`
        },
        fruit: {
          title: "ผล",
          desc: `ดอกออกเป็นช่อสีขาวอมเหลือง มีกลิ่นหอม ต้องการอุณหภูมิต่ำกว่า 20 องศาเซลเซียส เพื่อกระตุ้นการออกดอก ผลกลม เนื้อสีขาวใส ฉ่ำน้ำ รสหวานจัด เมล็ดสีดำเงา<br><br>
              <b>คุณค่าทางโภชนาการ :</b>
              <ul style="list-style-type: disc; margin-left: 20px;">
                <li>พลังงาน 60 แคลอรี, ไขมัน 0.1 กรัม, คาร์โบไฮเดรต 15.1 กรัม, เส้นใยอาหาร 1.1 กรัม, โปรตีน 1.31 กรัม, แคลเซียม 1 มิลลิกรัม, ฟอสฟอรัส 21 มิลลิกรัม, เหล็ก 0.13 มิลลิกรัม, ไนอะซิน 0.3 มิลลิกรัม, วิตามินซี 84 มิลลิกรัม</li>
              </ul><br>
              <b>ประโยชน์ :</b> วิตามินและแร่ธาตุช่วยให้สดชื่น บำรุงประสาท บำรุงเลือด ต้มน้ำดื่มคลายเครียด นิยมทานสดและแปรรูปอบแห้ง และกระป๋อง<br><br>
              <b>ข้อควรระวัง :</b> น้ำตาลสูงมาก ผู้ป่วยเบาหวานควรจำกัดปริมาณ ทานเยอะทำให้ร้อนใน ตาแฉะ หรือเจ็บคอ`,
          reference: `
                <a href="https://www.rspg.or.th/plants_data/use/fruit_25.htm" target="_blank">แหล่งที่มา 1</a>, 
                <a href="https://www.doa.go.th/hort/wp-content/uploads/2020/10/longan-knowledge.pdf" target="_blank">แหล่งที่มา 2</a>, 
                <a href="https://medthai.com/%E0%B8%A5%E0%B8%B3%E0%B9%84%E0%B8%A2/" target="_blank">แหล่งที่มา 3</a>, 
                <a href="https://pharmacy.mahidol.ac.th/th/knowledge/article/486/ลำไย/" target="_blank">แหล่งที่มา 4</a>`
        },
        root: {
          title: "ราก",
          desc: `ต้นจากเมล็ดมีรากแก้วแข็งแรง ส่วนต้นจากกิ่งตอนจะไม่มีรากแก้ว ทำให้โค่นล้มง่าย<br><br>
          <b>ประโยชน์ :</b> รากต้มดื่มแก้ช้ำใน ตกขาว ขับพยาธิเส้นด้าย แก้เสมหะ เกษตรกรมักนิยมทำ "การเสริมราก" นำต้นเพาะเมล็ดมาทาบโคนต้นตอน เพื่อเพิ่มความแข็งแรงและช่วยหาอาหาร<br><br>
          <b>ข้อควรระวัง :</b> การราดสารเคมี เช่น โพแทสเซียมคลอเรต เพื่อบังคับออกดอกนอกฤดูในปริมาณมากเกินไป จะทำลายระบบรากจนต้นตายได้`,
          reference: `
                <a href="https://moi.gcc.go.th/index.php?option=com_content&view=article&id=12163" target="_blank">แหล่งที่มา 1</a>, 
                <a href="https://thbif.onep.go.th/minisite/hkk1/taxons/detail/18177" target="_blank">แหล่งที่มา 2</a>, 
                <a href="https://medthai.com/ลำไย/" target="_blank">แหล่งที่มา 3</a>, 
                <a href="https://www.khaosod.co.th/technologychaoban/techno/plants-vegetables-fruit/article_204869" target="_blank">แหล่งที่มา 4</a>`
        },
        care: {
          title: "การดูแล",
          desc: `<b>การให้น้ำ :</b> รดน้ำสม่ำเสมอช่วงแตกใบ แต่ห้ามฉีดน้ำแรงช่วงดอกบาน (ดอกจะร่วง)<br><br>
          <b>การใส่ปุ๋ย :</b> หลังเก็บเกี่ยวให้ปุ๋ย N (ไนโตรเจน) สูงเร่งใบ และให้ปุ๋ย P, K (ฟอสฟอรัส, โพแทสเซียม) สูงช่วงเปิดตาดอกเพื่อบำรุงดอก<br><br>
          <b>การตัดแต่งกิ่ง :</b> รีบตัดแต่งกิ่งให้โปร่งภายใน 15 วันหลังเก็บเกี่ยว และควร "แต่งช่อผล" เด็ดผลเล็กและมีตำหนิทิ้ง เพื่อให้ผลที่เหลือลูกใหญ่สม่ำเสมอ<br><br>
          <b>ศัตรูพืช :</b> มวนลำไย ดูดน้ำเลี้ยงจนผลดำร่วง, เพลี้ยแป้ง มีมดเป็นพาหะ ทำให้เกิดโรคราดำ, หนอนกินใบ ทำลายยอดอ่อนและดอก`,
          reference: `
                <a href="https://ppsf.doae.go.th/wp-content/uploads/2023/11/คำแนะนำการจัดการศัตรูพืชลำไย-3-ชนิดศัตรูพืช.pdf" target="_blank">แหล่งที่มา 1</a>, 
                <a href="https://esc.doae.go.th/โรคและแมลงศัตรูลำไยที่/" target="_blank">แหล่งที่มา 2</a>, 
                <a href="https://www.kasetkaoklai.com/home/2018/07/ไปเรียนรู้ทำลำไยนอกฤดู/" target="_blank">แหล่งที่มา 3</a>, 
                <a href="https://www.gotoknow.org/posts/517095" target="_blank">แหล่งที่มา 4</a>`
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
      page: { title: "Longan" },
      ui: { play: "▶", close: "✖" },
      reference: { label: "Reference :" },
      hotspot: {
        trunk: {
          title: "Trunk",
          desc: `The longan is a perennial tree with a dense, rounded crown and hard timber. The bark is rough, and the wood is red or reddish-brown in colour and of exceptional strength.<br><br>
  <b>Uses :</b> A decoction of the bark is consumed to treat diarrhoea and loose stools, and to heal burns and scalds. The timber is valued for the crafting of furniture, mortars, and chopping boards, and is regarded as an excellent fuel wood, as it burns with an intense heat and emits a characteristically pleasant and distinctive aroma.`,
          reference: `
            <a href="https://archive.lib.cmu.ac.th/full/T/2535/biol0535tc_ch2.pdf" target="_blank">Source 1</a>, 
            <a href="https://www.rspg.or.th/plants_data/use/juice2-9.htm" target="_blank">Source 2</a>, 
            <a href="https://www.disthai.com/17370860/%E0%B8%A5%E0%B8%B3%E0%B9%84%E0%B8%A2" target="_blank">Source 3</a>, 
            <a href="https://www.thaihof.org/ลำไย-ผลไม้และยาพื้นบ้าน/" target="_blank">Source 4</a>`
        },
        leaf: {
          title: "Leaf",
          desc: `The leaf is a pinnately compound leaf with lanceolate-elliptical leaflets.<br><br>
  <b>Medicinal Properties :</b> A decoction of the leaves, consumed as a tea, is prescribed to treat common colds and malarial fever, and to relieve haemorrhoids. The decoction may also be applied externally to cleanse suppurating wounds, abscesses, and boils.`,
          reference: `
            <a href="https://www.doctor.or.th/article/detail/5986" target="_blank">Source 1</a>, 
            <a href="https://researchex.mju.ac.th/dbplant/index.php/horticulture/item/e-daw" target="_blank">Source 2</a>, 
            <a href="https://skm.ssru.ac.th/news/view/176649" target="_blank">Source 3</a>, 
            <a href="https://www.qsds.go.th/pd/detail.php?idplant=2&catplant=ล" target="_blank">Source 4</a>`
        },
        fruit: {
          title: "Fruit",
          desc: `The longan produces inflorescences of small, white to yellowish flowers with a pleasant fragrance. The plant requires temperatures below 20 degrees Celsius to stimulate flowering. The fruit is round, with translucent white, juicy flesh of an intensely sweet flavour and a black, lustrous seed.<br><br>
  <b>Nutritional Value (Per 100g) :</b>
  <ul style="list-style-type: disc; margin-left: 20px;">
    <li>60 kcal energy; 0.1g fat; 15.1g carbs; 1.1g fibre; 1.31g protein; 1mg calcium; 21mg phosphorus; 0.13mg iron; 0.3mg niacin; 84mg vitamin C.</li>
  </ul><br>
  <b>Uses and Benefits :</b> Promotes vitality, nourishes the nervous system and blood, and relieves stress. Enjoyed fresh, dried, or canned.<br><br>
  <b>Precaution :</b> High sugar content; diabetics should limit intake. Excessive consumption may cause internal heat, eye discharge, or sore throat.`,
          reference: `
            <a href="https://www.rspg.or.th/plants_data/use/fruit_25.htm" target="_blank">Source 1</a>, 
            <a href="https://www.doa.go.th/hort/wp-content/uploads/2020/10/longan-knowledge.pdf" target="_blank">Source 2</a>, 
            <a href="https://medthai.com/%E0%B8%A5%E0%B8%B3%E0%B9%84%E0%B8%A2/" target="_blank">Source 3</a>, 
            <a href="https://pharmacy.mahidol.ac.th/th/knowledge/article/486/ลำไย/" target="_blank">Source 4</a>`
        },
        root: {
          title: "Root",
          desc: `Trees grown from seed possess a robust taproot, while air-layered trees lack one, making them susceptible to uprooting.<br><br>
  <b>Uses :</b> A decoction of the root is consumed to relieve internal bruising, leucorrhoea, pinworm infestation, and to dissolve phlegm. Growers often use "root reinforcement" to augment vigour.<br><br>
  <b>Precaution :</b> Excessive potassium chlorate (used for off-season flowering) can destroy the root system and kill the tree.`,
          reference: `
            <a href="https://moi.gcc.go.th/index.php?option=com_content&view=article&id=12163" target="_blank">Source 1</a>, 
            <a href="https://thbif.onep.go.th/minisite/hkk1/taxons/detail/18177" target="_blank">Source 2</a>, 
            <a href="https://medthai.com/ลำไย/" target="_blank">Source 3</a>, 
            <a href="https://www.khaosod.co.th/technologychaoban/techno/plants-vegetables-fruit/article_204869" target="_blank">Source 4</a>`
        },
        care: {
          title: "Cultivation and Care",
          desc: `<b>Watering :</b> Regular irrigation during leaf emergence. Avoid strong sprays during flowering to prevent flower drop.<br><br>
  <b>Fertilisation :</b> High nitrogen after harvest for leaf growth. High phosphorus and potassium at bud initiation for flowers.<br><br>
  <b>Pruning :</b> Prune within 15 days post-harvest. Thinning of fruit clusters is recommended for uniform and large fruit size.<br><br>
  <b>Pests :</b> Longan bugs (cause fruit drop), mealybugs (cause sooty mould), and leaf-eating caterpillars.`,
          reference: `
            <a href="https://ppsf.doae.go.th/wp-content/uploads/2023/11/คำแนะนำการจัดการศัตรูพืชลำไย-3-ชนิดศัตรูพืช.pdf" target="_blank">Source 1</a>, 
            <a href="https://esc.doae.go.th/โรคและแมลงศัตรูลำไยที่/" target="_blank">Source 2</a>, 
            <a href="https://www.kasetkaoklai.com/home/2018/07/ไปเรียนรู้ทำลำไยนอกฤดู/" target="_blank">Source 3</a>, 
            <a href="https://www.gotoknow.org/posts/517095" target="_blank">Source 4</a>`
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

  document.addEventListener("DOMContentLoaded", () => {
    applyStaticTranslations();
  });
})();
