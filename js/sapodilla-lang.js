(function () {
  const translations = {
    th: {
      page: { title: "ละมุด" },
      ui: { play: "▶", close: "✖" },
      reference: { label: "อ้างอิง :" },
      hotspot: {
        stem: {
          title: "ลำต้น",
          desc: `<div class="content-box">ไม้ยืนต้นทรงพุ่มทึบ ไม้เนื้อแข็งและเหนียว มียางสีขาวขุ่นคล้ายน้ำนมไหลเมื่อเกิดแผล<br><br>
    
          <b>ประโยชน์</b><br>

          เนื้อไม้ ใช้ทำบ้าน เฟอร์นิเจอร์ เครื่องมือ และฟืน, เปลือกต้น ต้มดื่มแก้โรคบิด, ยาง ใช้เป็นยาถ่ายพยาธิอย่างแรง และใช้ในอุตสาหกรรมทำหมากฝรั่ง และรองเท้าบูท</div>`,
         
          reference: `
      <a href="https://www.rspg.or.th/plants_data/use/fruit_13.htm" target="_blank">แหล่งที่มา 1</a>,
      <a href="https://medthai.com/%E0%B8%A5%E0%B8%B0%E0%B8%A1%E0%B8%B8%E0%B8%94/" target="_blank">แหล่งที่มา 2</a>,
      <a href="http://www.medi.co.th/news_detail.php?q_id=311" target="_blank">แหล่งที่มา 3</a>,
      <a href="https://skm.ssru.ac.th/news/view/wut025" target="_blank">แหล่งที่มา 4</a>`
        },
        leaf: {
          title: "ใบ",

          desc: `<div class="content-box">ใบเดี่ยว ท้องใบสีน้ำตาลอมเขียว ออกกระจุกปลายกิ่ง<br><br>

          <b>ประโยชน์</b><br>สกัดทำเซรั่มชะลอวัย บำรุงผิวพรรณ ส่วนกิ่งใบเหลือทิ้งนำไปทำถ่านชีวภาพเพื่อบำรุงดินได้</div>`,
          

          reference: `
      <a href="https://www.rspg.or.th/plants_data/use/fruit_13.htm" target="_blank">แหล่งที่มา 1</a>,
      <a href="https://thailandinnovationportal.com/info/product/item/65883" target="_blank">แหล่งที่มา 2</a>,
      <a href="http://clinictech.ops.go.th/online/cmo/finalreport/202412131511391.pdf" target="_blank">แหล่งที่มา 3</a>`
        },
        fruit: {
          title: "ผล",
          desc: `<div class="content-box">ดอกสมบูรณ์มีขนาดเล็ก 1 เซนติเมตร มีกลีบเลี้ยง 2 ชั้น แต่ละชั้นมี 3 กลีบ และกลีบดอกจำนวน 12 กลีบ ด้านในมีเกสรตัวผู้ 6 อัน และมีรังไข่อยู่เหนือกลีบดอก<br><br>
              
          <b>คุณค่าทางโภชนาการ</b>
              <ul class="desc">
              
              <li>พลังงาน 83 กิโลแคลอรี, คาร์โบไฮเดรต 19.96 กรัม, เส้นใย 5.3 กรัม, ไขมัน 1.1 กรัม, โปรตีน 0.44 กรัม, วิตามินบี 2 (ไรโบฟลาวิน) 0.50 มิลลิกรัม, วิตามินบี 3 (ไนอะซิน) 0.20 มิลลิกรัม, วิตามินบี 5 0.252 มิลลิกรัม, วิตามินบี 6 0.037 มิลลิกรัม, วิตามินบี 9 14 ไมโครกรัม, วิตามินซี 14.7 มิลลิกรัม, ธาตุแคลเซียม 21 มิลลิกรัม, ธาตุเหล็ก 0.8 มิลลิกรัม, ธาตุแมกนีเซียม 12 มิลลิกรัม, ธาตุฟอสฟอรัส 12 มิลลิกรัม, ธาตุโพแทสเซียม 193 มิลลิกรัม, ธาตุโซเดียม 12 มิลลิกรัม, ธาตุสังกะสี 0.1 มิลลิกรัม</li>
              
              </ul><br>

              <b>ประโยชน์</b><br>วิตามินซีสูงต้านหวัด, ใยอาหารช่วยขับถ่ายและป้องกันมะเร็งลำไส้, เมล็ดบำรุงกำลัง, นิยมทานสด หรือทำน้ำ/ไวน์ละมุด<br><br>

              <b>ข้อควรระวัง :</b> น้ำตาลสูง ผู้ป่วยเบาหวานควรจำกัดปริมาณ และระวังเมล็ดติดคอเด็ก ควรแกะเมล็ดออกและหั่น/บดให้ละเอียดก่อนป้อน</div>`,

          reference: `
      <a href="https://medthai.com/%e0%b8%a5%e0%b8%b0%e0%b8%a1%e0%b8%b8%e0%b8%94/" target="_blank">แหล่งที่มา 1</a>,
      <a href="http://mdc.library.mju.ac.th/article/90984/297631/291926.pdf" target="_blank">แหล่งที่มา 2</a>,
      <a href="https://www.svppijit.com/images/km2Manilkara.pdf" target="_blank">แหล่งที่มา 3</a>`
        },
        root: {
          title: "ราก",
          desc: `<div class="content-box">ต้นที่เพาะเมล็ดจะมีรากแก้วที่ลึกและแข็งแรง<br><br>

          <b>ประโยชน์</b><br>เกษตรกรนิยมใช้เป็น “ต้นตอ” เพื่อเสียบยอดละมุดพันธุ์ดี เพราะหาอาหารเก่งและยึดดินแน่น<br><br>

          <b>ข้อควรระวัง :</b> ไม่ทนน้ำท่วมขัง หากรากแช่น้ำนานจะโตช้า ขาดออกซิเจน และเกิดโรครากเน่าได้</div>`,
          
          reference: `
      <a href="https://www.khaosod.co.th/technologychaoban/featured/article_185228" target="_blank">แหล่งที่มา 1</a>,
      <a href="https://www.lemon8-app.com/@user81163700610444/7323193837520912898" target="_blank">แหล่งที่มา 2</a>`
        },
        Cultivation_and_Care: {
          title: "การดูแล",
          desc: `<div class="content-box"><b>การให้น้ำ : </b>รดน้ำสม่ำเสมอ แต่ควรลดน้ำช่วงผลแก่ใกล้เก็บเกี่ยว จะช่วยให้ผลหวานกรอบ<br><br>

<b>การใส่ปุ๋ย : </b>ควรใส่ปุ๋ยคอก/ชีวภาพปีละ 1-2 ครั้ง ช่วงปลูกสามารถรองก้นหลุมด้วยปุ๋ย 15-15-15<br><br>

<b>การตัดแต่งกิ่ง : </b>ควรตัดกิ่งแห้งทิ้ง หรือทำสาวต้นที่แก่เกินไป เพื่อกระตุ้นให้ออกดอกและติดผลดีขึ้น<br><br>

<b>ศัตรูพืช : </b>หนอนเจาะผล, แมลงวันทอง ทำให้ผลเน่าร่วง, แมลงค่อมทอง กัดกินใบอ่อนและดอก</div>`,

          reference: `
      <a href="https://www.ipthailand.go.th/images/2284/SCH61100101.pdf" target="_blank">แหล่งที่มา 1</a>,
      <a href="https://www.svppijit.com/images/km2Manilkara.pdf" target="_blank">แหล่งที่มา 2</a>,
      <a href="https://kohyor.go.th/travel/detail/1222" target="_blank">แหล่งที่มา 3</a>,
      <a href="https://www.hu.ac.th/Conference/conference2024/proceedings/doc/07%20%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C%20(Sc)/Sc-060%20%E0%B8%A5%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%A1%E0%B8%B5%20%E0%B8%AA%E0%B8%B8%E0%B8%A0%E0%B8%B1%E0%B8%97%E0%B8%A3%E0%B8%B2%20(1583-1592).pdf" target="_blank">แหล่งที่มา 4</a>`
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
      page: { title: "Sapodilla" },
      ui: { play: "▶", close: "✖" },
      reference: { label: "Reference :" },
      hotspot: {
        stem: {
          title: "Stem",
          desc: `<div class="content-box"><b>Trunk Characteristics :</b> The sapodilla is a perennial tree with a dense crown and hard, tenacious timber. When any part of the tree is wounded, a milky white latex sap exudes.<br><br>

            <b>Uses</b>

            <ul class="desc">

            <li>The timber is used in the construction of houses and the crafting of furniture, tools, and fuel wood.</li>

            <li>A decoction of the bark is consumed to treat dysentery.</li>

            <li><b>Sap :</b> The white latex exuding from the trunk and branches serves as a potent anthelmintic, and is also employed in the manufacturing of chewing gum and rubber boots.</li>
</ul></div>`,
          reference: `
      <a href="https://www.rspg.or.th/plants_data/use/fruit_13.htm" target="_blank">Source 1</a>,
      <a href="https://medthai.com/%E0%B8%A5%E0%B8%B0%E0%B8%A1%E0%B8%B8%E0%B8%94/" target="_blank">Source 2</a>,
      <a href="http://www.medi.co.th/news_detail.php?q_id=311" target="_blank">Source 3</a>,
      <a href="https://skm.ssru.ac.th/news/view/wut025" target="_blank">Source 4</a>`
        },
        leaf: {
          title: "Leaf",
          desc: `<div class="content-box"><b>Leaf Characteristics :</b> The leaf is a simple blade, brownish-green on the underside, clustered at the tips of branches. The leaves are oval or elliptical in shape, with pointed tips and tapering bases. The surface is glossy dark green.<br><br>

          <b>Uses</b>
          <ul class="desc">
          <li>Extracts from the leaf are used in the formulation of serums for anti-ageing and skin nourishment.</li>
         
          <li>Pruned branches and leaves may be processed into biochar for soil enrichment.</li>
          </ul></div>`,
          reference: `
      <a href="https://www.rspg.or.th/plants_data/use/fruit_13.htm" target="_blank">Source 1</a>,
      <a href="https://thailandinnovationportal.com/info/product/item/65883" target="_blank">Source 2</a>,
      <a href="http://clinictech.ops.go.th/online/cmo/finalreport/202412131511391.pdf" target="_blank">Source 3</a>`
        },
        fruit: {
          title: "Fruit",
          desc: `<div class="content-box"><b>Fruit Characteristics :</b> The sapodilla produces small, perfect flowers measuring approximately 1 centimetre in diameter, with two whorls of three sepals each and twelve petals. Within the flower are six stamens and a superior ovary. The fruit is oval or oblong. When unripe, it is green; when ripe, it has a thin reddish-brown skin.<br><br>

            <b>Flesh :</b> The ripe fruit is yellowish-brown, very sweet, with a grainy texture.<br><br>

            <b>Latex in Fruit :</b> Unripe sapodilla contains white latex and high levels of tannins, which should not be eaten as it causes an unpleasant astringent sensation on the tongue.<br><br>

            <b>Nutritional Value</b>

            <ul class="desc">

            <li>83 kcal energy; 19.96g carbohydrates; 5.3g dietary fibre; 1.1g fat; 0.44g protein; vitamin B2 (riboflavin) 0.50mg; vitamin B3 (niacin) 0.20mg; vitamin B5 0.252mg; vitamin B6 0.037mg; vitamin B9 14 mcg; vitamin C 14.7mg; calcium 21mg; iron 0.8mg; magnesium 12mg; phosphorus 12mg; potassium 193mg; sodium 12mg; zinc 0.1mg.</li>
            </ul><br>

            <b>Precaution :</b> The fruit contains elevated levels of natural sugars; persons with diabetes should limit their consumption. Care must also be taken with young children, as the seeds may present a choking hazard; seeds should be removed and the fruit sliced or puréed before serving.</div>`,
          reference: `
      <a href="https://medthai.com/%e0%b8%a5%e0%b8%b0%e0%b8%a1%e0%b8%b8%e0%b8%94/" target="_blank">Source 1</a>,
      <a href="http://mdc.library.mju.ac.th/article/90984/297631/291926.pdf" target="_blank">Source 2</a>,
      <a href="https://www.svppijit.com/images/km2Manilkara.pdf" target="_blank">Source 3</a>`
        },
        root: {
          title: "Root",
          desc: `<div class="content-box"><b>Root Characteristics :</b> Trees grown from seed possess a deep, robust taproot. The root system is strong with many roots, highly drought-tolerant once established.<br><br>

<b>Uses</b><br>Agricultural growers frequently employ sapodilla seedlings as rootstock for grafting superior varieties, on account of the species' vigorous nutrient uptake and firm anchorage in the soil.<br><br>

<b>Precaution :</b> The sapodilla does not tolerate waterlogging; prolonged immersion of the roots results in stunted growth, oxygen deprivation, and root rot.</div>`,
          reference: `
      <a href="https://www.khaosod.co.th/technologychaoban/featured/article_185228" target="_blank">Source 1</a>,
      <a href="https://www.lemon8-app.com/@user81163700610444/7323193837520912898" target="_blank">Source 2</a>`
        },
        Cultivation_and_Care: {
          title: "Cultivation_and_Care",
          desc: `<div class="content-box"><b>Watering :</b> Regular irrigation is maintained, though water should be reduced as the fruit nears maturity and harvest, which enhances the crispness and sweetness of the ripe fruit. Requires moderate water and good drainage; soil should not be waterlogged. During the first planting stage, water once a day.<br><br>

            <b>Fertilisation :</b> Organic or biological fertiliser is applied once or twice annually. During the planting phase, the base of the planting hole may be lined with a balanced fertiliser formula of 15-15-15.<br><br>
                    
            <b>Pruning :</b> Dead branches should be removed and overly mature trees may be rejuvenated by severe pruning in order to stimulate renewed flowering and fruiting. Prune occasionally to control tree height for easier harvesting and to maintain a nice canopy shape.<br><br>
                    
            <b>Pests :</b> Principal pests include the fruit borer; the oriental fruit fly, which causes fruit drop and rot; and the golden beetle (แมลงค่อมทอง), which feeds upon young leaves and flowers.</div>`,
          reference: `
      <a href="https://www.ipthailand.go.th/images/2284/SCH61100101.pdf" target="_blank">Source 1</a>,
      <a href="https://www.svppijit.com/images/km2Manilkara.pdf" target="_blank">Source 2</a>,
      <a href="https://kohyor.go.th/travel/detail/1222" target="_blank">Source 3</a>,
      <a href="https://www.hu.ac.th/Conference/conference2024/proceedings/doc/07%20%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C%20(Sc)/Sc-060%20%E0%B8%A5%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%A1%E0%B8%B5%20%E0%B8%AA%E0%B8%B8%E0%B8%A0%E0%B8%B1%E0%B8%97%E0%B8%A3%E0%B8%B2%20(1583-1592).pdf" target="_blank">Source 4</a>`
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

  document.addEventListener("DOMContentLoaded", () => {
    applyStaticTranslations();
  });
})();
