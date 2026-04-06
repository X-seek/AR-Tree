(function () {
  const translations = {
    th: {
      page: { title: "มะนาว" },
      ui: { play: "▶", close: "✖" },
      reference: { label: "แหล่งที่มา :" },
      hotspot: {
        trunk: {
          title: "ลำต้น",
          desc: `เป็นไม้พุ่มสูง 2-4 เมตร เปลือกลำต้นมีสีเทาปนน้ำตาล กิ่งอ่อนมีสีเขียวอ่อนเมื่อแก่สีเข้ม บนลำต้นและกิ่งก้านจะมีหนามแข็งแหลม ส่วนใหญ่เกิดที่ซอกใบ`,

          reference: `
          <a href="https://www.allkaset.com/plant/%E0%B8%A1%E0%B8%B0%E0%B8%99%E0%B8%B2%E0%B8%A7.php" target="_blank">แหล่งที่มา 1</a>`
        },
        leaf: {
          title: "ใบ",
          desc: `เป็นใบประกอบชนิดมีใบย่อยใบเดียว เรียงสลับ มีสีเขียวอ่อนรูปร่างยาวรีหรือรูปไข่ ปลายใบมีลักษณะแหลมขอบใบ<br><br>

          <b>สรรพคุณ :</b> นำใบมะนาวมาหั่นฝอย ๆ ชงด้วยน้ำเดือด ดื่มแบบน้ำชา จะช่วยลดไข้ และใช้อมกลั้วคอ ฆ่าเชื้อโรคได้ชาวมาเลเซียใช้ใบมะนาวผสมกับน้ำมะนาว บดทำเป็นยาใส่ผม แก้ปวดศีรษะ`,
         
          reference: `
          <a href="https://www.allkaset.com/plant/%E0%B8%A1%E0%B8%B0%E0%B8%99%E0%B8%B2%E0%B8%A7.php" target="_blank">แหล่งที่มา 1</a>, 
          <a href="https://www.kasettambon.com/%e0%b8%a1%e0%b8%b0%e0%b8%99%e0%b8%b2%e0%b8%a7%e0%b9%80%e0%b8%ad%e0%b8%b2%e0%b9%84%e0%b8%9b%e0%b8%97%e0%b8%b3%e0%b8%ad%e0%b8%b0%e0%b9%84%e0%b8%a3%e0%b9%84%e0%b8%94%e0%b9%89%e0%b8%9a%e0%b9%89%e0%b8%b2/" target="_blank">แหล่งที่มา 2</a>`
        },
        fruit: {
          title: "ผล",
          desc: `ผลสดรูปกลมและรูปยาวรีหรือรูปไข่ มีขนาดความกว้างและความยาวประมาณ 3-12 เซนติเมตร ผิวเปลือกมีลักษณะขรุขระ และมีต่อมน้ำมันที่ผิว<br><br>

          <b>คุณค่าโภชนาการ</b>
         <ul class="desc">
          
         <li>พลังงาน 30 กิโลแคลอรี, ไขมัน 0.2 กรัม, โปรตีน 0.7 กรัม, คาร์โบไฮเดรต 10.5 กรัม, น้ำตาล1.7 กรัม, เส้นใย 2.8 กรัม, วิตามินบี 1 0.03 มิลลิกรัม, วิตามินบี 2 0.02 มิลลิกรัม, วิตามินบี 3 0.2 มิลลิกรัม, วิตามินบี 5 0.217 มิลลิกรัม, วิตามินบี 6 0.046 มิลลิกรัม, วิตามินบี 9 8 ไมโครกรัม, วิตามินซี 29.1 กรัม, ธาตุเหล็ก 0.6 กรัม, แมกนีเซียม 6 มิลลิกรัม, โซเดียม 2 มิลลิกรัม, ฟอสฟอรัส 18 มิลลิกรัม, โพแทสเซียม 102 มิลลิกรัม, แคลเซียม 33 มิลลิกรัม</li>
         
         </ul><br>
         
          <b>สรรพคุณ :</b> ใช้มะนาว 4 ลูก เกลือ 1 ช้อนหรือประมาณ 3-4 เม็ด น้ำผึ้ง 1 ช้อนชา ใช้จิบทุกครั้งที่ไอ, บรรเทาต่อมทอนซิลอักเสบ ผสมน้ำมะนาวกับน้ำผึ้งดื่ม ช่วยบรรเทาต่อมทอนซิลอักเสบ, ใช้มะนาว 1 ผลครึ่ง บีบใส่แก้วดื่มให้หมดจะรู้สึกกระชุ่มกระชวยดี, ช่วยลดความอ้วน`,
         
          reference: `
          <a href="https://www.allkaset.com/plant/%E0%B8%A1%E0%B8%B0%E0%B8%99%E0%B8%B2%E0%B8%A7.php" target="_blank">แหล่งที่มา 1</a>, 
          <a href="https://www.kasettambon.com/%e0%b8%a1%e0%b8%b0%e0%b8%99%e0%b8%b2%e0%b8%a7%e0%b9%80%e0%b8%ad%e0%b8%b2%e0%b9%84%e0%b8%9b%e0%b8%97%e0%b8%b3%e0%b8%ad%e0%b8%b0%e0%b9%84%e0%b8%a3%e0%b9%84%e0%b8%94%e0%b9%89%e0%b8%9a%e0%b9%89%e0%b8%b2/" target="_blank">แหล่งที่มา 2</a>`
        },
        root: {
          title: "ราก",
          desc: `รากมะนาวมักแผ่ขยายในแนวนอนมากกว่าแนวดิ่ง โดยกระจุกอยู่ในช่วงความลึกประมาณ 30-60 เซนติเมตร<br><br>

          <b>สรรพคุณ :</b> กระทุ้งพิษไข้ ถอนพิษสำแดง แก้สติหลงลืม แก้ไข้ แก้ไข้กาฬ แก้ฝี แก้เปวด แก้อักเสบ ถอนพิษไข้`,
         
          reference: `
          <a href="https://www.rspg.or.th/plants_data/herbs/herbs_08_9.htm" target="_blank">แหล่งที่มา 1</a>,
          <a href="https://www.manow2.com/article244.html" target="_blank">แหล่งที่มา 2</a>`
        },
        care: {
          title: "การดูแล",
          desc: `<b>การให้น้ำ :</b> ต้องมีการให้น้ำอย่างสม่ำเสมอ หลังจากปลูกประมาณ 15 วัน มะนาวสามารถตั้งตัวได้แล้ว ให้น้ำเดือนละ 2-3 ครั้ง<br><br>

          
          <b>การใส่ปุ๋ย : </b>หลังจากมะนาวอายุได้ 3-4 เดือน ควรใส่ปุ๋ยเคมี ปุ๋ยหมัก หรือปุ๋ยคอก ประมาณต้นละ 0.5 กิโลกรัม กรณีใส่ปุ๋ยเคมีควรใส่หลังจากพรวนดินกําจัดวัชพืชแล้ว โดยใส่บริเวณรอบทรงพุ่ม แล้วก็ให้น้ำตามเพื่อให้ปุ๋ยละลาย<br>
          <ul class="desc">
          
          <li>เมื่อมะนาวอายุ 1 ปี ให้ใส่ปุ๋ยสูตร 15-15-15 ประมาณต้นละ 300 กรัม และเมื่อมะนาวอายุ 2 ปี ก็เพิ่มปริมาณปุ๋ยโดยใส่ปีละ 2 ครั้ง ครั้งละประมาณ 1 กิโลกรัม</li>
          
          <li>ช่วงระยะก่อนออกดอกประมาณ 1-2 เดือน ให้ใส่ปุ๋ยสูตรที่มีฟอสฟอรัสสูง เช่น สูตร12-24 – 12 หรืออาจใช้ปุ๋ยสูตร 3-10-10 เพื่อเร่งการเจริญเติบโตในระยะที่ยังไม่ออกดอก และใช้สูตร 0-52-34 ในระยะเร่งการออกดอก ประมาณ 0.5-1 กิโลกรัม/ต้น</li>
          </ul>
          
          <b>การกําจัดวัชพืช : </b>การกําจัดวัชพืชในสวนมะนาวสามารถทำได้หลายวิธี เช่น ถอน ถาง หรือใช้เครื่องตัดหญ้าแต่ต้องระวังอย่าให้เกิดบาดแผลตามโคนต้น หรือกระทบกระเทือนราก วิธีกําจัดวัชพืชอีกวิธีหนึ่งที่นิยม คือ การใช้สารเคมี เช่น พาราควอตไกลโฟเซต ดาวพอน เป็นต้น`,
         

          reference: `
          <a href="https://www.allkaset.com/plant/%E0%B8%A1%E0%B8%B0%E0%B8%99%E0%B8%B2%E0%B8%A7.php" target="_blank">แหล่งที่มา 1</a>`
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
      page: { title: "Lime" },
      ui: { play: "▶", close: "✖" },
      reference: { label: "Reference :" },
      hotspot: {
        trunk: {
          title: "Stem",
          desc: `The lime is a small shrub attaining a height of 2 to 4 metres. The trunk bark is grey-brown; young branches are 
          light green, darkening with age. Sharp, rigid thorns are borne along the trunk and branches, arising principally at the leaf axils.
           `,
          
          reference: `
          <a href="https://www.allkaset.com/plant/%E0%B8%A1%E0%B8%B0%E0%B8%99%E0%B8%B2%E0%B8%A7.php" target="_blank">Source 1</a>`
        },
        leaf: {
          title: "Leaf",
          desc: `The lime leaf is a unifoliolate compound leaf, arranged in alternating fashion along the stem, with a light green, 
          elongated-ovoid shape and a pointed apex and margin.<br><br>
          
          <b>Medicinal Properties :</b><br>
          Finely sliced lime leaves, steeped in boiling water and consumed as a tea, are reputed to reduce fever. The tea may 
          also be used as a gargle to eliminate pathogens. In the Malay tradition, a preparation of lime leaves mixed with lime 
          juice is ground and applied to the hair as a remedy for headache.`,
          
          reference: `
          <a href="https://www.allkaset.com/plant/%E0%B8%A1%E0%B8%B0%E0%B8%99%E0%B8%B2%E0%B8%A7.php" target="_blank">Source 1</a>, 
          <a href="https://www.kasettambon.com/%e0%b8%a1%e0%b8%b0%e0%b8%99%e0%b8%b2%e0%b8%a7%e0%b9%80%e0%b8%ad%e0%b8%b2%e0%b9%84%e0%b8%9b%e0%b8%97%e0%b8%b3%e0%b8%ad%e0%b8%b0%e0%b9%84%e0%b8%a3%e0%b9%84%e0%b8%94%e0%b9%89%e0%b8%9a%e0%b9%89%e0%b8%b2/" target="_blank">Source 2</a>`
        },
        fruit: {
          title: "Fruit",
          desc: `The fruit is round, elongated, or ovoid, measuring approximately 3 to 12 centimetres in both width and length. The exterior rind is textured and bears oil glands on the surface.<br><br>
          <b>Nutritional Value :</b>

         <ul class="desc">

            <li>Per 100 grams of edible portion, the lime provides: 30 kilocalories of energy; 0.2 grams of fat; 0.7 grams of protein; 10.5 grams of carbohydrates; 1.7 grams of sugar; 2.8 grams of dietary fibre; vitamins B1, B2, B3, B5, B6, and B9; 29.1 milligrams of vitamin C; and the minerals iron, magnesium, sodium, phosphorus, potassium, and calcium.</li>
          </ul><br>
          <b>Medicinal Properties :</b> Lime juice combined with salt and honey, sipped at each episode of coughing, is prescribed as a cough remedy. A mixture of lime juice and honey, consumed orally, is employed to relieve tonsillar inflammation. Half a lime, squeezed and drunk neat, is said to invigorate and refresh. The fruit is also reputed to assist in weight reduction.`,
          reference: `
          <a href="https://www.allkaset.com/plant/%E0%B8%A1%E0%B8%B0%E0%B8%99%E0%B8%B2%E0%B8%A7.php" target="_blank">Source 1</a>, 
          <a href="https://www.kasettambon.com/%e0%b8%a1%e0%b8%b0%e0%b8%99%e0%b8%b2%e0%b8%a7%e0%b9%80%e0%b8%ad%e0%b8%b2%e0%b9%84%e0%b8%9b%e0%b8%97%e0%b8%b3%e0%b8%ad%e0%b8%b0%e0%b9%84%e0%b8%a3%e0%b9%84%e0%b8%94%e0%b9%89%e0%b8%9a%e0%b9%89%e0%b8%b2/" target="_blank">Source 2</a>`
        },
        root: {
          title: "Root",
          desc: `The root system of the lime extends primarily in the horizontal plane rather than vertically, becoming concentrated 
          at a depth of approximately 30 to 60 centimetres below the soil surface.<br><br>
          
          <b>Medicinal Properties :</b><br>The root is employed to expel fever toxins, to neutralise the effects of poisonous substances, to remedy 
          memory impairment, to reduce fever of various kinds, to treat abscesses, to alleviate pain and inflammation, and to counteract toxic fevers.`,
         
          reference: `
          <a href="https://www.rspg.or.th/plants_data/herbs/herbs_08_9.htm" target="_blank">Source 1</a>,
          <a href="https://www.manow2.com/article244.html" target="_blank">Source 2</a>`
        },
        care: {
          title: "Cultivation and Care",
          desc: `<b>Watering:</b>Regular irrigation is essential. After approximately 15 days from planting, the lime tree becomes
          
          established, and watering may then be reduced to two to three times per month.<br><br>
          
          <b>Fertilisation : </b>When the tree is three to four months old, chemical fertiliser, compost, or organic manure is applied at 
          approximately 0.5 kilograms per tree. Chemical fertiliser should be applied after weeding and soil cultivation, distributed around 
          the canopy drip line, followed by irrigation to dissolve the fertiliser. At one year of age, a formula of 15-15-15 is applied 
          at 300 grams per tree. At two years of age, the quantity is increased and applied twice annually at approximately 1 kilogram 
          per application. One to two months prior to the expected flowering period, a high-phosphorus formula such as 12-24-12, or 
          alternatively 3-10-10, is applied to stimulate growth before flowering, and the formula 0-52-34 is applied to hasten 
          flowering at 0.5 to 1 kilogram per tree.<br><br>
          
          <b>Weed Control :</b>
          Weeds in a lime orchard may be managed by hand-pulling, slashing, or mechanical cutting, taking care not to cause wounds 
          at the base of the trunk or disturb the roots. Chemical weed control using herbicides is also commonly practised.`,
          
          reference: `
          <a href="https://www.allkaset.com/plant/%E0%B8%A1%E0%B8%B0%E0%B8%99%E0%B8%B2%E0%B8%A7.php" target="_blank">Source 1</a>`
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
