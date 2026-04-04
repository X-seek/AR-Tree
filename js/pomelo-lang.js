(function () {
  const translations = {
    th: {
      page: { title: "ส้มโอ" },
      ui: { play: "▶", close: "✖" },
      reference: { label: "แหล่งที่มา :" },
      hotspot: {
        trunk: {
          title: "ลำต้น",
          desc: `ไม้ยืนต้นทรงพุ่ม สูง 5-15 เมตร มีหนามตามลำต้นและกิ่ง กิ่งอ่อนมีขนสั้น<br><br>
          <b>ประโยชน์</b><br>แก่นต้นต้มดื่มช่วยขับพยาธิ ขับลม ขับปัสสาวะ และเกษตรกรมักนิยมทำการเสริมราก ปลูกแบบ 3 ขา เพื่อค้ำยันและหาอาหาร<br><br>
          <b>ข้อควรระวัง :</b> เสี่ยงต่อโรครากเน่าโคนเน่า จากเชื้อราไฟทอปธอรา ทำให้เปลือกช้ำ มีน้ำยางไหล และเนื้อไม้ข้างในเน่าดำ`,
          reference: `
          <a href="https://www.disthai.com/17066273/%E0%B8%AA%E0%B9%89%E0%B8%A1%E0%B9%82%E0%B8%AD" target="_blank">แหล่งที่มา 1</a>, 
          <a href="https://puechkaset.com/%E0%B8%AA%E0%B9%89%E0%B8%A1%E0%B9%82%E0%B8%AD/" target="_blank">แหล่งที่มา 2</a>, 
          <a href="https://www.rakbankerd.com/agriculture/print.php?id=6334&s=tblplant" target="_blank">แหล่งที่มา 3</a>, 
          <a href="http://mdc.library.mju.ac.th/article/57695/243851/357475.pdf" target="_blank">แหล่งที่มา 4</a>`
        },  
        leaf: {
          title: "ใบ",
          desc: `ก้านใบแผ่เป็นปีกคล้ายใบมะกรูดแต่ใหญ่กว่า หนา แข็ง มีกลิ่นหอมน้ำมันหอมระเหย<br><br>
          <b>ประโยชน์</b><br>ตำพอกศีรษะแก้ปวดหัว ตำย่างไฟพอกแก้ปวดบวมข้อ บรรเทาท้องอืด มีสารกลุ่มฟลาโวนอยด์ที่มีแนวโน้มยับยั้งเซลล์มะเร็ง<br><br>
          <b>ศัตรูพืชที่ใบ : </b>หนอนชอนใบ ทิ้งรอยขาวคดเคี้ยว เป็นช่องทางเกิดโรคแคงเกอร์ และเพลี้ยจักจั่น ดูดน้ำเลี้ยงจนใบหงิกเหลือง`,
          reference: `
          <a href="https://www.rspg.or.th/plants_data/use/fruit_16.htm" target="_blank">แหล่งที่มา 1</a>, 
          <a href="https://www.rspg.or.th/plants_data/homklindokmai/budhabot/som.htm" target="_blank">แหล่งที่มา 2</a>, 
          <a href="https://medthai.com/%E0%B8%AA%E0%B9%89%E0%B8%A1%E0%B9%82%E0%B8%AD/" target="_blank">แหล่งที่มา 3</a>, 
          <a href="https://hdmall.co.th/blog/c/pomelo/" target="_blank">แหล่งที่มา 4</a>,
          <a href="https://www.naewna.com/local/538581" target="_blank">แหล่งที่มา 5</a>,
          <a href="https://www.mardubai.in.th/leafhopper-pomelo" target="_blank">แหล่งที่มา 6</a>`
        },
        fruit: {
          title: "ผล",
          desc: `ดอกสมบูรณ์เพศสีขาว ผลเป็นตระกูลส้ม (Hesperidium) ทรงกลม เปลือกมีต่อมน้ำมัน ถัดเข้าเป็นปุยสีขาวหนา<br><br>
          <b>คุณค่าทางโภชนาการ</b>
          <ul class="desc">
            <li>พลังงาน 38 กิโลแคลอรี, คาร์โบไฮเดรต 9.62 กรัม, โปรตีน 0.76 กรัม, ไขมัน 0.04 กรัม, ใยอาหาร 1 กรัม, แคลเซียม 4 มิลลิกรัม, ธาตุเหล็ก 0.11 มิลลิกรัม, ฟอสฟอรัส 17 มิลลิกรัม, โพแทสเซียม 216 มิลลิกรัม, วิตามินซี 61 มิลลิกรัม</li>
          </ul><br>
          <b>ประโยชน์</b><br>วิตามินซีช่วยกันโรคเลือดออกตามไรฟัน ขับลม แก้แฮงค์ มีสารต้านอนุมูลอิสระ (ลดไขมันในเลือด) / ทานสดหรือทำอาหาร (ยำ, เมี่ยง) / ปุยขาวมีเพคตินสูง นำไปเชื่อมหรือกวนได้<br><br>
          <b>ข้อควรระวัง :</b> ห้ามทานตอนท้องว่าง เพราะกรดและวิตามินซีสูงจะระคายเคืองกระเพาะอาหาร โดยเฉพาะผู้เป็นแผลในกระเพาะ`,
          reference: `
          <a href="https://www.rspg.or.th/plants_data/kp_bot_garden/kpb_28-4.htm" target="_blank">แหล่งที่มา 1</a>, 
          <a href="https://www.rspg.or.th/plants_data/use/fruit_16.htm" target="_blank">แหล่งที่มา 2</a>, 
          <a href="https://medplant.mahidol.ac.th/active/shownews.asp?id=929" target="_blank">แหล่งที่มา 3</a>, 
          <a href="https://medthai.com/%E0%B8%AA%E0%B9%89%E0%B8%A1%E0%B9%82%E0%B8%AD/" target="_blank">แหล่งที่มา 4</a>,
          <a href="https://e-research.siam.edu/wp-content/uploads/2022/09/Liberal-Arts-Tourism-and-Hospitality-Industry-2021-coop-Pomelo-Bath-Bomb1.pdf" target="_blank">แหล่งที่มา 5</a>,
          <a href="https://hdmall.co.th/blog/c/pomelo/" target="_blank">แหล่งที่มา 6</a>`
        },
        root: {
          title: "ราก",
          desc: `รากแก้วลึกลงดิน 4.5-5 ม. นิยมปลูกแบบยกโขด พูนดินให้สูง เพื่อให้รากอยู่ตื้นและดูดซับปุ๋ยได้เร็ว<br><br>
          <b>ประโยชน์</b><br>เป็นยาสมุนไพรรสฉุน แก้ปวดกระเพาะ ท้องน้อย ไส้เลื่อน แก้ไอและหวัด<br><br>
          <b>ข้อควรระวัง : </b>ถ้าน้ำขังแฉะ รากจะขาดออกซิเจนและนำไปสู่โรครากเน่า ต้นตายได้`,
          reference: `
          <a href="https://www.disthai.com/17066273/%E0%B8%AA%E0%B9%89%E0%B8%A1%E0%B9%82%E0%B8%AD" target="_blank">แหล่งที่มา 1</a>, 
          <a href="https://puechkaset.com/%E0%B8%AA%E0%B9%89%E0%B8%A1%E0%B9%82%E0%B8%AD/" target="_blank">แหล่งที่มา 2</a>, 
          <a href="https://www.rakbankerd.com/agriculture/print.php?id=6334&s=tblplant" target="_blank">แหล่งที่มา 3</a>, 
          <a href="http://mdc.library.mju.ac.th/article/57695/243851/357475.pdf" target="_blank">แหล่งที่มา 4</a>`
        },
        care: {
          title: "การดูแล",
          desc: `<b>การให้น้ำและดิน :</b> ชอบความชื้นแต่ห้ามแฉะ ที่ลุ่มต้องยกร่อง<br><br>
          <b>การเร่งดอก :</b> งดน้ำ 20-30 วันจนใบเหี่ยวม้วน แล้วรดน้ำเต็มที่ 4-5 วัน ต้นจะแตกตาดอก<br><br>
          <b>การใส่ปุ๋ย :</b> บำรุงใบใช้สูตร 16-16-16 ห้ามใส่ปุ๋ยคอกหรือไนโตรเจนเยอะช่วงติดผลเล็ก เพราะจะทำให้เปลือกหนา ผลบวม<br><br>
          <b>โรคและศัตรูพืช :</b> โรคแคงเกอร์, โรคยางไหล, เพลี้ยไฟ, ไรแดง, ผีเสื้อมวนหวาน มักระบาดช่วงแทงช่อดอกและติดผล`,
          reference: `
          <a href="https://chainatpomelo.com/documents/knowladge/ข้อมูล แผนผังการดูแลส้มโอ-31-10-66.pdf" target="_blank">แหล่งที่มา 1</a>, 
          <a href="https://www.chiataigroup.com/article-detail/Pomelo-MrVitoon" target="_blank">แหล่งที่มา 2</a>, 
          <a href="https://www.chiataigroup.com/article-detail/FertilizerforPomelo" target="_blank">แหล่งที่มา 3</a>, 
          <a href="https://thaifarmer.lib.ku.ac.th/news/5f714116a9aa136333e5da4c" target="_blank">แหล่งที่มา 4</a>`
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
      page: { title: "Pomelo" },
      ui: { play: "▶", close: "✖" },
      reference: { label: "Reference :" },
      hotspot: {
        trunk: {
          title: "Stem",
          desc: `A perennial tree with a spreading crown, 5 to 15 metres tall, bearing thorns along the trunk and branches. Young branches are covered with short hairs.<br><br>
            <b>Uses :</b> Heartwood decoction is used to expel parasites, relieve flatulence, and promote urination. Growers often use "three-legged root reinforcement" for support.<br><br>
            <b>Precaution :</b> Susceptible to Phytophthora root and crown rot, causing bark bruising, gum exudation, and internal wood decay.`,
          reference: `
            <a href="https://www.disthai.com/17066273/%E0%B8%AA%E0%B9%89%E0%B8%A1%E0%B9%82%E0%B8%AD" target="_blank">Source 1</a>, 
            <a href="https://puechkaset.com/%E0%B8%AA%E0%B9%89%E0%B8%A1%E0%B9%82%E0%B8%AD/" target="_blank">Source 2</a>, 
            <a href="https://www.rakbankerd.com/agriculture/print.php?id=6334&s=tblplant" target="_blank">Source 3</a>, 
            <a href="http://mdc.library.mju.ac.th/article/57695/243851/357475.pdf" target="_blank">Source 4</a>`
        },
        leaf: {
          title: "Leaf",
          desc: `The petiole bears prominent wings resembling kaffir lime leaves but larger. They are thick, firm, and fragrant with volatile oils.<br><br>
            <b>Uses :</b> Pounded as a poultice for headaches; toasted for joint pain and bloating. Contains flavonoids that may inhibit cancer cell growth.<br><br>
            <b>Pests :</b> Leaf miners (white winding trails) and citrus leafhoppers (causing leaf curling and yellowing).`,
          reference: `
            <a href="https://www.rspg.or.th/plants_data/use/fruit_16.htm" target="_blank">Source 1</a>, 
            <a href="https://www.rspg.or.th/plants_data/homklindokmai/budhabot/som.htm" target="_blank">Source 2</a>, 
            <a href="https://medthai.com/%E0%B8%AA%E0%B9%89%E0%B8%A1%E0%B9%82%E0%B8%AD/" target="_blank">Source 3</a>, 
            <a href="https://hdmall.co.th/blog/c/pomelo/" target="_blank">Source 4</a>,
            <a href="https://www.naewna.com/local/538581" target="_blank">Source 5</a>,
            <a href="https://www.mardubai.in.th/leafhopper-pomelo" target="_blank">Source 6</a>`
        },
        fruit: {
          title: "Fruit",
          desc: `Bears bisexual white flowers; fruit is a hesperidium type. Round form with oil glands on the rind and a thick, white, spongy internal pith.<br><br>
            <b>Nutritional Value (Per 100g) :</b>
            <ul class="desc">
              <li>38 kcal energy; 9.62g carbs; 0.76g protein; 0.04g fat; 1g fibre; calcium, iron, phosphorus, potassium, and 61mg vitamin C.</li>
            </ul><br>
            <b>Uses and Benefits :</b> Protects against scurvy, relieves flatulence and hangovers. High in antioxidants. Pith is rich in pectin, used for preserves.<br><br>
            <b>Precaution :</b> Avoid consuming on an empty stomach; high acidity may irritate the gastric lining.`,
          reference: `
            <a href="https://www.rspg.or.th/plants_data/kp_bot_garden/kpb_28-4.htm" target="_blank">Source 1</a>, 
            <a href="https://www.rspg.or.th/plants_data/use/fruit_16.htm" target="_blank">Source 2</a>, 
            <a href="https://medplant.mahidol.ac.th/active/shownews.asp?id=929" target="_blank">Source 3</a>, 
            <a href="https://medthai.com/%E0%B8%AA%E0%B9%89%E0%B8%A1%E0%B9%82%E0%B8%AD/" target="_blank">Source 4</a>,
            <a href="https://e-research.siam.edu/wp-content/uploads/2022/09/Liberal-Arts-Tourism-and-Hospitality-Industry-2021-coop-Pomelo-Bath-Bomb1.pdf" target="_blank">Source 5</a>,
            <a href="https://hdmall.co.th/blog/c/pomelo/" target="_blank">Source 6</a>`
        },
        root: {
          title: "Root",
          desc: `Taproot penetrates 4.5 to 5 metres. Commonly grown on raised mounds to keep roots shallow for efficient nutrient absorption.<br><br>
            <b>Uses :</b> Pungent medicinal character; used for gastric pain, hernia, coughing, and colds.<br><br>
            <b>Precaution :</b> Waterlogging causes oxygen deprivation and root rot, leading to tree death.`,
          reference: `
            <a href="https://www.disthai.com/17066273/%E0%B8%AA%E0%B9%89%E0%B8%A1%E0%B9%82%E0%B8%AD" target="_blank">Source 1</a>, 
            <a href="https://puechkaset.com/%E0%B8%AA%E0%B9%89%E0%B8%A1%E0%B9%82%E0%B8%AD/" target="_blank">Source 2</a>, 
            <a href="https://www.rakbankerd.com/agriculture/print.php?id=6334&s=tblplant" target="_blank">Source 3</a>, 
            <a href="http://mdc.library.mju.ac.th/article/57695/243851/357475.pdf" target="_blank">Source 4</a>`
        },
        care: {
          title: "Cultivation and Care",
          desc: `<b>Watering and Soil :</b> Favours moisture but not waterlogging; requires raised beds in low-lying areas.<br><br>
            <b>Flowering Induction :</b> Withhold water for 20-30 days until leaves wilt, then irrigate fully for 4-5 days to stimulate buds.<br><br>
            <b>Fertilisation :</b> Use 16-16-16 for foliage. Avoid high-nitrogen fertiliser during early fruit set to prevent thick rinds.<br><br>
            <b>Diseases and Pests :</b> Canker, gummosis, thrips, and red spider mites, especially during flowering and fruit set.`,
          reference: `
            <a href="https://chainatpomelo.com/documents/knowladge/ข้อมูล แผนผังการดูแลส้มโอ-31-10-66.pdf" target="_blank">Source 1</a>, 
            <a href="https://www.chiataigroup.com/article-detail/Pomelo-MrVitoon" target="_blank">Source 2</a>, 
            <a href="https://www.chiataigroup.com/article-detail/FertilizerforPomelo" target="_blank">Source 3</a>, 
            <a href="https://thaifarmer.lib.ku.ac.th/news/5f714116a9aa136333e5da4c" target="_blank">Source 4</a>`
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
  });
})();
