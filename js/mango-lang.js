(function () {
  const translations = {
    th: {
      page: { title: "มะม่วง" },
      ui: { play: "▶", close: "✖" },
      reference: { label: "แหล่งที่มา :" },
      hotspot: {
        trunk: {
          title: "ลำต้น",
          desc: `ไม้ยืนต้นทรงพุ่มโปร่ง สูง 10-15 เมตร ไม้เนื้อแข็ง เปลือกสีดำอมเทา-น้ำตาล มียางสีขาวทั่วต้นไหลออกเมื่อเป็นแผล<br><br>

          <b>ประโยชน์ :</b> เปลือกต้นต้มดื่มแก้โรคคอตีบ อักเสบในช่องปากและจมูก และลำต้นให้ร่มเงา และเนื้อไม้ใช้สอยได้<br><br>`,

          reference: `
      <a href="https://rspgdb.bru.ac.th/biological/views/tablelist/show.php?type=plants&id=49" target="_blank">แหล่งที่มา 1</a>,
      <a href="https://puechkaset.com/%E0%B8%A1%E0%B8%B0%E0%B8%A1%E0%B9%88%E0%B8%A7%E0%B8%87%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%94%E0%B8%AD%E0%B8%81%E0%B9%84%E0%B8%A1%E0%B9%89/" target="_blank">แหล่งที่มา 2</a>,
      <a href="https://xn--12cg5dba1cebiacd7cvc2fh9b0dk8k8h3b.com/garden/treeshow.php?tree_id=123" target="_blank">แหล่งที่มา 3</a>,
      <a href="https://food.trueid.net/detail/LAxa3j6JEkwY" target="_blank">แหล่งที่มา 4</a>`
        },
        leaf: {
          title: "ใบ",
          desc: `เป็นใบเดี่ยวรูปหอก ขอบใบเป็นคลื่น ใบแก่สีเขียวเข้มมันเงา<br><br>

          <b>ประโยชน์</b><br>สารแมงจิเฟอรินช่วยต้านอักเสบ ลดไขมันในเลือด ป้องกันเบาหวาน ใบสดตำพอกสมานแผล ยอดอ่อนทานเป็นผักเคียงรสเปรี้ยวอมฝาด ลาบ ซุปหน่อไม้ และใบแก่ตากแห้งชงชาแก้อาการไอ<br><br>

          <b>ข้อควรระวัง :</b>ไม่ควรเคี้ยวใบสด เพราะน้ำยางมะม่วงอาจกัดปากได้ หากจะใช้ควรนำไปต้มก่อน`,

          reference: `
      <a href="https://rspgdb.bru.ac.th/biological/views/tablelist/show.php?type=plants&id=49" target="_blank">แหล่งที่มา 1</a>,
      <a href="https://puechkaset.com/%E0%B8%A1%E0%B8%B0%E0%B8%A1%E0%B9%88%E0%B8%A7%E0%B8%87%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%94%E0%B8%AD%E0%B8%81%E0%B9%84%E0%B8%A1%E0%B9%89/" target="_blank">แหล่งที่มา 2</a>,
      <a href="https://www.disthai.com/17229789/%E0%B8%A1%E0%B8%B0%E0%B8%A1%E0%B9%88%E0%B8%A7%E0%B8%87" target="_blank">แหล่งที่มา 3</a>,
      <a href="https://farm.vayo.co.th/blog/mangifera-indica-nam-dok-mai-mun/" target="_blank">แหล่งที่มา 4</a>`
        },
        fruit: {
          title: "ผล",
          desc: `ดอกออกเป็นช่อแขนงปลายกิ่ง มีทั้งดอกกะเทยและดอกสมบูรณ์เพศ ผลทรงรีหรือกระบอก ปลายแหลม 
          ผลดิบสีเขียว ผลสุกสีเหลืองทอง เนื้อละเอียดนุ่ม ไม่มีเสี้ยน รสหวานฉ่ำกลิ่นหอม<br><br>

            <b>คุณค่าทางโภชนาการ</b>
             <ul class="desc">
                <li>พลังงาน 76 กิโลแคลอรี, น้ำ 80.3 กรัม, โปรตีน 0.60 กรัม, ไขมัน 0.23 กรัม, คาร์โบไฮเดรต 17.73 กรัม, ใยอาหาร 0.8 กรัม, เถ้า 0.39 กรัม, แคลเซียม 3 มิลลิกรัม, ฟอสฟอรัส 15 มิลลิกรัม, แมกนีเซียม 7 มิลลิกรัม, โซเดียม 1 มิลลิกรัม, โพแทสเซียม 196 มิลลิกกรัม, ทองแดง 0.15 มิลลิกรัม, ไอโอดีน 1.59 ไมโครกรัม, เบต้าแคโรทีน 877 ไมโครกรัม, วิตามินเอ 73 ไมโครกรัม, วิตามินบี 1 0.07 มิลลิกรัม, วิตามินบี 2 0.06 มิลลิกรัม, วิตามินบี 3 1.81 มิลลิกรัม, วิตามินซี 14 มิลลิกรัม, วิตามินอี 1.10 มิลลิกรัม, น้ำตาล 15 กรัม</li>
              </ul><br>
  
              <b>ประโยชน์</b><br>สารแมงจิเฟอริน (Mangiferin) และเบต้าแคโรทีนต้านอนุมูลอิสระ ลดเสี่ยงมะเร็ง, วิตามินซีและวิตามินเอบำรุงภูมิคุ้มกันและสายตา, ใยอาหารช่วยขับถ่าย มักนิยมทานสด ทานคู่ข้าวเหนียวมูน หรือทำขนม<br><br>
  
              <b>ข้อควรระวัง :</b> น้ำตาลสูง ควรทานแต่พอดี และผู้ป่วยโรคไตควรระวังเพราะมีโพแทสเซียม มะม่วงมีน้ำยางซึ่งอาจทำให้เกิดการระคายเคืองต่อผิวหนัง ควรล้างยางออกทันที`,

          reference: `
      <a href="https://puechkaset.com/%E0%B8%A1%E0%B8%B0%E0%B8%A1%E0%B9%88%E0%B8%A7%E0%B8%87%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%94%E0%B8%AD%E0%B8%81%E0%B9%84%E0%B8%A1%E0%B9%89/" target="_blank">แหล่งที่มา 1</a>,
      <a href="https://researchcafe.tsri.or.th/antioxidant/" target="_blank">แหล่งที่มา 2</a>,
      <a href="https://www.agri.cmu.ac.th/2017/webs/mainmenu_detail/4/3620/1" target="_blank">แหล่งที่มา 3</a>,
      <a href="https://www.thailandpostmart.com/news/1443" target="_blank">แหล่งที่มา 4</a>,
      <a href="https://thaifcd.anamai.moph.go.th/nss/view.php?fID=05093" target="_blank">แหล่งที่มา 5</a>`
        },
        root: {
          title: "ราก",
          desc: `รากที่เกิดจากต้นเพาะเมล็ดมีรากแก้วหยั่งลึก แข็งแรง<br><br>

          <b>ประโยชน์</b><br>รากต้มดื่มเป็นยาขับพยาธิ บรรเทาอาการฝี ยับยั้งแบคทีเรียในลำไส้ใหญ่ เกษตรกรนิยมทำ “การเสริมราก” นำ
              มะม่วงป่าเพาะเมล็ดมาทาบกิ่งโคนต้น เพื่อช่วยค้ำยันและหาอาหารให้มะม่วงพันธุ์ดี<br><br>

          <b>ข้อควรระวัง :</b> หากปลูกที่ลุ่มน้ำขัง ดินตื้น รากแก้วจะลงลึกไม่ได้ ทำให้รากตื้น โค่นล้มง่าย และอายุไม่ยืน`,

          reference: `
      <a href="https://www.doctor.or.th/article/detail/5323" target="_blank">แหล่งที่มา 1</a>,
      <a href="https://www.rakbankerd.com/agriculture/print.php?id=3337&s=tblplant" target="_blank">แหล่งที่มา 2</a>,
      <a href="https://kaset.today/%E0%B8%9C%E0%B8%A5%E0%B9%84%E0%B8%A1%E0%B9%89/%E0%B8%A1%E0%B8%B0%E0%B8%A1%E0%B9%88%E0%B8%A7%E0%B8%87%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%A7%E0%B9%80%E0%B8%AA%E0%B8%A7%E0%B8%A2/" target="_blank">แหล่งที่มา 3</a>,
      <a href="https://www.gotoknow.org/posts/499790" target="_blank">แหล่งที่มา 4</a>`
        },
        care: {
          title: "การดูแล",
          desc: `<b>การให้น้ำ :</b> ปีแรกรดน้ำสม่ำเสมอ เทคนิคเร่งดอก/เพิ่มความหวาน : งดน้ำ 1-2 เดือนก่อนออกดอก และงดอีกครั้ง 2-3 สัปดาห์ก่อนเก็บเกี่ยว เพื่อให้ผลหวานขึ้น<br><br>

<b>การใส่ปุ๋ย : </b>ใส่ปุ๋ยสูตรเสมอ 15-15-15 บำรุงต้น และสูตรตัวกลางและหลังสูง 8-24-24 เร่งดอก<br><br>

<b>การตัดแต่งกิ่ง : </b>ควรตัดกิ่งทันทีหลังเก็บเกี่ยว กิ่งแห้ง กิ่งโรค กิ่งชี้ลงดิน/น้ำค้าง กิ่งกระโดง เพื่อให้พุ่มโปร่ง แสงส่องถึง ลดความชื้นและโรค<br><br>

<b>โรคและศัตรูพืช : </b>โรคแอนแทรกโนส เชื้อราหน้าฝน ทำดอกร่วง ผลเน่ามีจุดดำ, เพลี้ยจักจั่น ดูดน้ำเลี้ยงช่อดอกจนร่วง และถ่ายมูลทำให้เกิด “โรคราดำ” และแมลงวันทอง วางไข่ในผลใกล้สุก หนอนไชผลเน่าร่วง ป้องกันโดยการห่อผลด้วยถุงคาร์บอนตั้งแต่ลูกเท่าไข่ไก่`,

          reference: `
      <a href="https://aopdh02.doae.go.th/wp-content/uploads/2021/09/Mango.pdf" target="_blank">แหล่งที่มา 1</a>,
      <a href="https://puechkaset.com/%E0%B8%A1%E0%B8%B0%E0%B8%A1%E0%B9%88%E0%B8%A7%E0%B8%87%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%94%E0%B8%AD%E0%B8%81%E0%B9%84%E0%B8%A1%E0%B9%89/" target="_blank">แหล่งที่มา 2</a>,
      <a href="http://www.hort.doa.go.th/knowledge/mango_pest_management.pdf" target="_blank">แหล่งที่มา 3</a>`
        },
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
      page: { title: "Mango" },
      ui: { play: "▶", close: "✖" },
      reference: { label: "Reference :" },
      hotspot: {
        trunk: {
          title: "Stem",
          desc: `The mango is a perennial tree with an open, spreading crown, attaining a height of 10 to 15 metres. 
          The timber is hard; the bark is blackish-grey to brown in colour, and the tree exudes a white latex sap from any wound sustained.<br><br>

          <b>Uses : </b><br>
          A decoction of the bark is consumed to treat diphtheria and inflammation of the oral and nasal passages. 
          The tree provides valuable shade, and the timber serves numerous practical purposes.`,
          
          reference: `
      <a href="https://rspgdb.bru.ac.th/biological/views/tablelist/show.php?type=plants&id=49" target="_blank">Source 1</a>,
      <a href="https://puechkaset.com/%E0%B8%A1%E0%B8%B0%E0%B8%A1%E0%B9%88%E0%B8%A7%E0%B8%87%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%94%E0%B8%AD%E0%B8%81%E0%B9%84%E0%B8%A1%E0%B9%89/" target="_blank">Source 2</a>,
      <a href="https://xn--12cg5dba1cebiacd7cvc2fh9b0dk8k8h3b.com/garden/treeshow.php?tree_id=123" target="_blank">Source 3</a>,
      <a href="https://food.trueid.net/detail/LAxa3j6JEkwY" target="_blank">Source 4</a>`
        },
        leaf: {
          title: "Leaf",
          desc: `<b>Leaf Characteristics : </b>The leaf is a simple, lanceolate blade with an undulating margin; mature leaves are deep green and lustrous.<br><br>

          <b>Uses : </b><br>
          Mangiferin, present in the leaf, acts as an anti-inflammatory agent, reduces blood lipids, and affords protection 
          against diabetes. Fresh leaves, pounded and applied as a poultice, promote wound healing. Young shoots are consumed as 
          an accompaniment to minced meat salad (laab), bamboo shoot soup, and similar preparations. Dried, mature leaves may be infused as a tea to relieve coughing.<br><br>

          <b>Precaution :</b> Do not chew fresh leaves, as the mango latex may irritate the mouth. If using the leaves medicinally, they should be boiled first.`,

          reference: `
      <a href="https://rspgdb.bru.ac.th/biological/views/tablelist/show.php?type=plants&id=49" target="_blank">Source 1</a>,
      <a href="https://puechkaset.com/%E0%B8%A1%E0%B8%B0%E0%B8%A1%E0%B9%88%E0%B8%A7%E0%B8%87%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%94%E0%B8%AD%E0%B8%81%E0%B9%84%E0%B8%A1%E0%B9%89/" target="_blank">Source 2</a>,
      <a href="https://www.disthai.com/17229789/%E0%B8%A1%E0%B8%B0%E0%B8%A1%E0%B9%88%E0%B8%A7%E0%B8%87" target="_blank">Source 3</a>,
      <a href="https://farm.vayo.co.th/blog/mangifera-indica-nam-dok-mai-mun/" target="_blank">Source 4</a>`
        },
        fruit: {
          title: "Fruit",
          desc: `<b>Fruit Characteristics : </b>The mango produces terminal panicles bearing both bisexual and hermaphroditic flowers. The fruit 
          is oval or cylindrical in form, with a pointed apex. Immature fruit is green; ripe fruit is golden yellow. The flesh is fine and smooth,
           without fibre, and is characteristically sweet, juicy, and fragrant.<br><br>

           <b>Nutritional Value : </b><br>
            Per 100 grams of edible portion, mango provides: 76 kilocalories of energy; 80.3 grams of water; 0.60 grams of protein; 0.23 grams of 
            fat; 17.73 grams of carbohydrates; 0.8 grams of dietary fibre; as well as calcium, phosphorus, magnesium, sodium, potassium, copper, 
            iodine, beta-carotene, vitamins A, B1, B2, B3, C, and E; and 15 grams of natural sugars.

           <b>Uses and Benefits : </b>The compound mangiferin (Mangiferin) and beta-carotene present in mango act as antioxidants and reduce the 
           risk of cancer. Vitamin C and vitamin A nourish the immune system and support visual health. Dietary fibre promotes bowel regularity. 
           The mango is widely consumed fresh, as a companion to glutinous rice and coconut cream (khao niao mamuang), and in various <br><br>

           <b>Precaution : </b>Owing to its high sugar content, mango should be consumed in moderation. Persons with kidney disease should exercise 
           caution on account of the fruit's potassium content.`,
          
           reference: `
      <a href="https://puechkaset.com/%E0%B8%A1%E0%B8%B0%E0%B8%A1%E0%B9%88%E0%B8%A7%E0%B8%87%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%94%E0%B8%AD%E0%B8%81%E0%B9%84%E0%B8%A1%E0%B9%89/" target="_blank">Source 1</a>,
      <a href="https://researchcafe.tsri.or.th/antioxidant/" target="_blank">Source 2</a>,
      <a href="https://www.agri.cmu.ac.th/2017/webs/mainmenu_detail/4/3620/1" target="_blank">Source 3</a>,
      <a href="https://www.thailandpostmart.com/news/1443" target="_blank">Source 4</a>,
      <a href="https://thaifcd.anamai.moph.go.th/nss/view.php?fID=05093" target="_blank">Source 5</a>`
        },
        root: {
          title: "Root",
          desc: `Trees grown from seed possess a deeply penetrating, robust taproot.<br><br>

            <b>Uses : </b><br>
            A decoction of the root is consumed as an anthelmintic, to relieve abscesses, and to inhibit bacteria in the large intestine. 
            Agricultural growers commonly employ the practice of grafting wild mango seedlings onto the base of cultivated trees to provide structural 
            support and enhance nutrient uptake.

            <b>Precaution : </b>Where planting occurs in a low-lying area prone to waterlogging, or in shallow soil, the taproot cannot penetrate deeply, 
            resulting in a shallow root system, susceptibility to uprooting, and a shortened lifespan.`,
         
            reference: `
      <a href="https://www.doctor.or.th/article/detail/5323" target="_blank">Source 1</a>,
      <a href="https://www.rakbankerd.com/agriculture/print.php?id=3337&s=tblplant" target="_blank">Source 2</a>,
      <a href="https://kaset.today/%E0%B8%9C%E0%B8%A5%E0%B9%84%E0%B8%A1%E0%B9%89/%E0%B8%A1%E0%B8%B0%E0%B8%A1%E0%B9%88%E0%B8%A7%E0%B8%87%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%A7%E0%B9%80%E0%B8%AA%E0%B8%A7%E0%B8%A2/" target="_blank">Source 3</a>,
      <a href="https://www.gotoknow.org/posts/499790" target="_blank">Source 4</a>`
        },
        care: {
          title: "Care",
          desc: `<b>Watering :</b>In the first year, water is applied regularly. A technique for inducing flowering and enhancing 
          sweetness involves withholding water for one to two months prior to the expected flowering period, and again for two to 
          three weeks before harvest, in order to intensify the sweetness of the ripened fruit.<br><br>

          <b>Fertilisation : </b>A balanced fertiliser formula of 15-15-15 is applied to maintain tree vigour, and a formula with 
          elevated middle and terminal values of 8-24-24 is applied to stimulate flowering.<br><br>

          <b>Pruning :</b>Pruning should be undertaken immediately after harvest, targeting dry branches, diseased branches, 
          downward-facing branches, water-sprouting branches, and vigorous vertical shoots, in order to open the canopy, admit light, 
          and reduce moisture and disease pressure.<br><br>

          <b>Diseases and Pests : </b>Anthracnose, a fungal disease prevalent during the rainy season, causes flower drop and 
          fruit rot with dark spotting. The mango leafhopper sucks sap from flowering panicles causing them to drop, and its 
          excretions give rise to sooty mould disease. The oriental fruit fly deposits eggs in nearly ripe fruit, and the resultant 
          larvae cause internal rotting. This last `,
          
          reference: `
      <a href="https://aopdh02.doae.go.th/wp-content/uploads/2021/09/Mango.pdf" target="_blank">Source 1</a>,
      <a href="https://puechkaset.com/%E0%B8%A1%E0%B8%B0%E0%B8%A1%E0%B9%88%E0%B8%A7%E0%B8%87%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%94%E0%B8%AD%E0%B8%81%E0%B9%84%E0%B8%A1%E0%B9%89/" target="_blank">Source 2</a>,
      <a href="http://www.hort.doa.go.th/knowledge/mango_pest_management.pdf" target="_blank">Source 3</a>`
        },
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
