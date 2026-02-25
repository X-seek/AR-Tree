(function () {
  const translations = {
    th: {
      page: { title: "น้อยหน่า" },
      ui: { play: "▶", close: "✖" },
      reference: { label: "อ้างอิง :" },
      hotspot: {
        trunk: {
          title: "ลำต้น",
          desc: `เป็นไม้ยืนต้นขนาดเล็ก ผลัดใบ สูงประมาณ 3–6 เมตร ลำต้นและกิ่งก้านค่อนข้าง เปราะ หักง่าย เปลือกลำต้นบางสีน้ำตาลถึงดำ<br><br>
          <b>ประโยชน์ลำต้น/เปลือก :</b> เปลือกลำต้น ใช้เป็นยา ฝาดสมาน สมานแผล แก้ท้องร่วง แก้โรคลำไส้อักเสบ และแก้รำมะนาด<br><br>
			     <b>เนื้อไม้ :</b> มีสีเหลืองจากสาร โมริน สามารถใช้ย้อมผ้าไหมได้`,
            reference: `
      <a href="https://www.kasettambon.com/%e0%b8%99%e0%b9%89%e0%b8%ad%e0%b8%a2%e0%b8%ab%e0%b8%99%e0%b9%88%e0%b8%b2-%e0%b8%9c%e0%b8%a5%e0%b9%84%e0%b8%a1%e0%b9%89%e0%b8%97%e0%b8%b5%e0%b9%88%e0%b8%a1%e0%b8%b5%e0%b8%aa%e0%b8%a3%e0%b8%a3%e0%b8%9e/" target="_blank">
      คลิกเพื่อดูแหล่งอ้างอิง
      </a>`
        },

        leaf: {
          title: "ใบ",
          desc: `ใบเดี่ยว เรียงสลับ รูปรี ปลายและโคนใบแหลม สีเขียว หากบดใบจะมีกลิ่นหอม<br>
<ul>
  <b>สรรพคุณ :</b> ใช้ฆ่าแมลง/พยาธิ 
    <li>ใบสดและเมล็ดนำมาตำหรือบด ใช้ฆ่าเหาและรักษาโรคกลากเกลื้อน โดยการพอกหรือทา</li>
			<li>ลดน้ำตาล : ใบน้อยหน่าสามารถนำมาชงดื่มเพื่อช่วยลดน้ำตาลในเลือด ลดไขมันในเส้นเลือด และลดความดันโลหิต</li>
</ul>
<b>ข้อควรระวัง :</b> เมล็ดมีสารแอนโนนาซีและนีโออันโนนิน ซึ่งมีความเป็นพิษสูง ดังนั้นจึงห้ามรับประทาน`,
 reference: `
      <a href="https://www.kasettambon.com/%e0%b8%99%e0%b9%89%e0%b8%ad%e0%b8%a2%e0%b8%ab%e0%b8%99%e0%b9%88%e0%b8%b2-%e0%b8%9c%e0%b8%a5%e0%b9%84%e0%b8%a1%e0%b9%89%e0%b8%97%e0%b8%b5%e0%b9%88%e0%b8%a1%e0%b8%b5%e0%b8%aa%e0%b8%a3%e0%b8%a3%e0%b8%9e/" target="_blank">
      คลิกเพื่อดูแหล่งอ้างอิง
      </a>`
        },
        fruit: {
          title: "ผล",
          desc: `เป็นรูปกลมป้อม ผิวขรุขระ เป็นช่องกลมนูน สีเขียว (น้อยหน่าฝ้าย) หรือสีเขียว/เหลือง/ม่วงเข้ม (น้อยหน่าหนัง) เนื้อสีขาวนวล รสชาติหอมหวาน
           ข้างในมีเมล็ดสีดำและมีน้ำตาลในปริมาณที่มาก<br><br>

<b>คุณค่าทางโภชนาการ :</b> ให้พลังงานสูง (ประมาณ 101 กิโลแคลอรี่/100 กรัม) อุดมไปด้วยวิตามิน C (ช่วยเสริมภูมิคุ้มกันในร่างกาย), 
วิตามิน B (ควบคุมคอเลสเตอรอล), แมงกานีส, แคลเซียม, และลูทีน<br><br>

<b>สรรพคุณ :</b> อุดมไปด้วยสารต้านอนุมูลอิสระ, ลูทีน ช่วยบำรุงสายตาและลดความเสี่ยงจอประสาทตาเสื่อมได้, มีใยอาหารช่วยในเรื่องระบบย่อยอาหาร
 ใช้รักษาแผลไฟไหม้ อักเสบ แผลน้ำร้อนลวก, แก้เป็นฝีในลำคอ<br><br>
 
<b>ข้อควรระวัง :</b> เหมาะสำหรับผู้ที่กำลังลดน้ำหนักเพราะมีไขมันต่ำหาก ผู้ป่วยเป็นโรคเบาหวานควรบริโภคอย่างระมัดระวัง เนื่องจากมีปริมาณน้ำตาลที่สูง`,
 reference: `
      <a href="https://www.kasettambon.com/%e0%b8%99%e0%b9%89%e0%b8%ad%e0%b8%a2%e0%b8%ab%e0%b8%99%e0%b9%88%e0%b8%b2-%e0%b8%9c%e0%b8%a5%e0%b9%84%e0%b8%a1%e0%b9%89%e0%b8%97%e0%b8%b5%e0%b9%88%e0%b8%a1%e0%b8%b5%e0%b8%aa%e0%b8%a3%e0%b8%a3%e0%b8%9e/" target="_blank">
      คลิกเพื่อดูแหล่งอ้างอิง
      </a>`
        },
        root: {
          title: "ราก",
          desc: `เป็นระบบรากกว้างขวาง (รากแก้ว)<br><br>
<b>สรรพคุณ :</b> เป็นยาระบาย (ใช้ในปริมาณน้อย) ช่วยล้างพิษ ถอนพิษเบื่อเมา และแก้พิษงูได้`,
 reference: `
      <a href="https://th.wikipedia.org/wiki/%E0%B8%99%E0%B9%89%E0%B8%AD%E0%B8%A2%E0%B8%AB%E0%B8%99%E0%B9%88%E0%B8%B2" target="_blank">
      คลิกเพื่อดูแหล่งอ้างอิง
      </a>`
        },
        care: {
          title: "การดูแล",
          desc: `<b>สภาพแวดล้อม :</b> เป็น ไม้ผลทนแล้ง เจริญเติบโตได้ดีในสภาพอากาศอบอุ่น แสงแดดเต็มที่ (อย่างน้อย 6 ชั่วโมงต่อวัน) 
          และทนต่อสภาพดินหลายรูปแบบ แต่ต้องระบายน้ำได้ดี และน้ำไม่ท่วมขัง<br><br>

<b>การให้น้ำ :</b> น้อยหน่าเป็นพืชทนแล้ง แต่ต้องรดน้ำอย่างสม่ำเสมอในช่วงที่ผลกำลังโต เพื่อให้ได้ผลผลิตที่มีคุณภาพ<br><br>

<b>การใส่ปุ๋ย :</b> มีความสำคัญเพื่อสนับสนุนการเจริญเติบโต สามารถใช้ปุ๋ยมูลไก่ผสมแกลบ ในอัตรา 4-5 กิโลกรัม/ต้น หลังเก็บเกี่ยวผลผลิต<br><br>

<b>การตัดแต่งกิ่ง :</b> เทคนิคสำคัญในการบังคับให้ออกดอกและติดผล ควรตัดแต่งกิ่งเพื่อกระตุ้นผลผลิตหลังเก็บเกี่ยวเสร็จแล้ว<br><br>

<b>การป้องกัน :</b> เนื่องจากน้อยหน่ามีกิ่งที่เปราะ ควรปลูกในบริเวณที่มีไม้บังลม เพื่อป้องกันลมแรงและกิ่งไม้หัก`,
 reference: `
      <a href="https://www.picturethisai.com/th/care/Annona_squamosa.html#:~:text=%E0%B8%99%E0%B9%89%E0%B8%AD%E0%B8%A2%E0%B8%AB%E0%B8%99%E0%B9%88%E0%B8%B2%20%E0%B8%96%E0%B8%B7%E0%B8%AD%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%95%E0%B9%89%E0%B8%99%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%94%E0%B8%B9%E0%B9%81%E0%B8%A5%E0%B8%87%E0%B9%88%E0%B8%B2%E0%B8%A2%2C%20%E0%B9%80%E0%B8%88%E0%B8%A3%E0%B8%B4%E0%B8%8D%E0%B9%80%E0%B8%95%E0%B8%B4%E0%B8%9A%E0%B9%82%E0%B8%95%E0%B9%84%E0%B8%94%E0%B9%89%E0%B8%94%E0%B8%B5%E0%B9%83%E0%B8%99%E0%B8%AA%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%AD%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%AD%E0%B8%9A%E0%B8%AD%E0%B8%B8%E0%B9%88%E0%B8%99%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%A1%E0%B8%B5%E0%B9%81%E0%B8%AA%E0%B8%87%E0%B9%81%E0%B8%94%E0%B8%94%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%94%E0%B8%B5%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%AA%E0%B8%B8%E0%B8%94%E0%B9%83%E0%B8%99%E0%B8%94%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A1%E0%B8%B5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%B2%E0%B8%A2%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%94%E0%B8%B5%20%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%95%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%94%E0%B8%B9%E0%B9%81%E0%B8%A5%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%9E%E0%B8%B4%E0%B9%80%E0%B8%A8%E0%B8%A9%E0%B8%A3%E0%B8%A7%E0%B8%A1%E0%B8%96%E0%B8%B6%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A3%E0%B8%94%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AD%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B8%AA%E0%B8%A1%E0%B9%88%E0%B8%B3%E0%B9%80%E0%B8%AA%E0%B8%A1%E0%B8%AD%E0%B9%83%E0%B8%99%E0%B8%A3%E0%B8%B0%E0%B8%AB%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9E%E0%B8%B1%E0%B8%92%E0%B8%99%E0%B8%B2%E0%B8%9C%E0%B8%A5%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A1%E0%B8%B5%E0%B8%A5%E0%B8%A1%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%9B%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%AA%E0%B8%B2%E0%B8%82%E0%B8%B2%E0%B8%82%E0%B8%AD%E0%B8%87%20%E0%B8%99%E0%B9%89%E0%B8%AD%E0%B8%A2%E0%B8%AB%E0%B8%99%E0%B9%88%E0%B8%B2%20%E0%B9%80%E0%B8%9E%E0%B8%A3%E0%B8%B2%E0%B8%B0%E0%B8%A1%E0%B8%B5%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B9%80%E0%B8%9B%E0%B8%A3%E0%B8%B2%E0%B8%B0%E0%B8%9A%E0%B8%B2%E0%B8%87%E0%B8%AD%E0%B8%A2%E0%B8%B9%E0%B9%88%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%87%20%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%9B%E0%B8%B8%E0%B9%8B%E0%B8%A2%E0%B8%A2%E0%B8%B1%E0%B8%87%E0%B8%A1%E0%B8%B5%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%AA%E0%B8%B3%E0%B8%84%E0%B8%B1%E0%B8%8D%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%AA%E0%B8%99%E0%B8%B1%E0%B8%9A%E0%B8%AA%E0%B8%99%E0%B8%B8%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%88%E0%B8%A3%E0%B8%B4%E0%B8%8D%E0%B9%80%E0%B8%95%E0%B8%B4%E0%B8%9A%E0%B9%82%E0%B8%95%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%AD%E0%B8%AD%E0%B8%81%E0%B8%9C%E0%B8%A5.,%E0%B8%95%E0%B8%B1%E0%B8%94%E0%B9%81%E0%B8%95%E0%B9%88%E0%B8%87%E0%B8%81%E0%B8%B4%E0%B9%88%E0%B8%87%20%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%82%E0%B8%A2%E0%B8%B2%E0%B8%A2%E0%B8%9E%E0%B8%B1%E0%B8%99%E0%B8%98%E0%B8%B8%E0%B9%8C%20%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A2%E0%B9%89%E0%B8%B2%E0%B8%A2%E0%B8%9B%E0%B8%A5%E0%B8%B9%E0%B8%81%20%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9B%E0%B8%A5%E0%B8%B9%E0%B8%81%20%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A2%E0%B9%89%E0%B8%B2%E0%B8%A2%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%96%E0%B8%B2%E0%B8%87%20%E0%B9%81%E0%B8%A1%E0%B8%A5%E0%B8%87%E0%B8%A8%E0%B8%B1%E0%B8%95%E0%B8%A3%E0%B8%B9%E0%B8%9E%E0%B8%B7%E0%B8%8A%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B9%82%E0%B8%A3%E0%B8%84%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%9E%E0%B8%9A%E0%B8%9A%E0%B9%88%E0%B8%AD%E0%B8%A2%20%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%9E%E0%B8%B4%E0%B8%A9" target="_blank">
      คลิกเพื่อดูแหล่งอ้างอิง
      </a>`
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
      page: { title: "Custard Apple" },
      ui: { play: "▶", close: "✖" },
      reference: { label: "Reference :" },
      hotspot: {
        trunk: {
          title: "Trunk",
          desc: `<b>Characteristics :</b> A small deciduous tree about 3–6 meters tall. The trunk and branches are brittle and break easily. 
          The bark is thin, brown to dark in color.<br><br>

<b>Uses (Trunk/Bark) :</b> The bark is used as an astringent medicine for treating diarrhea, intestinal inflammation, and gum disease.
The wood contains a yellow pigment (Morin) that can be used for dyeing silk.`,
          reference: `
          <a href="https://www.kasettambon.com/%e0%b8%99%e0%b9%89%e0%b8%ad%e0%b8%a2%e0%b8%ab%e0%b8%99%e0%b9%88%e0%b8%b2-%e0%b8%9c%e0%b8%a5%e0%b9%84%e0%b8%a1%e0%b9%89%e0%b8%97%e0%b8%b5%e0%b9%88%e0%b8%a1%e0%b8%b5%e0%b8%aa%e0%b8%a3%e0%b8%a3%e0%b8%9e/" target="_blank">
          Click to see references.
          </a>`
        },
        leaf: {
          title: "Leaf",
          desc: `<b>Characteristics :</b> Simple, alternate leaves that are lance-shaped with pointed ends and smooth green surfaces. When crushed, they emit a pleasant fragrance.
<br><br>
Medicinal Properties :
<ul>
<li> Insecticide/Antiparasitic (External): Fresh leaves and seeds can be crushed and used to kill lice or treat fungal infections such as ringworm.</li>
<li>Blood Sugar Control: Dried or boiled leaves can be made into tea to help reduce blood sugar, blood fat, and blood pressure.</li>
</ul>
<b>Caution :</b> The seeds contain toxic alkaloids (annonaine and neoannonin) and must not be eaten.`,
 reference: `
          <a href="https://www.kasettambon.com/%e0%b8%99%e0%b9%89%e0%b8%ad%e0%b8%a2%e0%b8%ab%e0%b8%99%e0%b9%88%e0%b8%b2-%e0%b8%9c%e0%b8%a5%e0%b9%84%e0%b8%a1%e0%b9%89%e0%b8%97%e0%b8%b5%e0%b9%88%e0%b8%a1%e0%b8%b5%e0%b8%aa%e0%b8%a3%e0%b8%a3%e0%b8%9e/" target="_blank">
          Click to see references.
          </a>`
        },
        fruit: {
          title: "Fruit",
          desc: `<b>Characteristics :</b> Round, bumpy fruit with a knobby green rind (green or purple in some varieties). The flesh is creamy white, fragrant, and very sweet, containing several black seeds.
<br><br>
<b>Nutrition :</b> High in energy (about 101 kcal per 100g), rich in Vitamin C (boosts immunity), Vitamin B (controls cholesterol), manganese, calcium, and lutein (for eye health).
<br><br>
Health Benefits :
<ul>
<li> Rich in antioxidants and lutein, which support eye health and reduce the risk of macular degeneration.</li>
<li> High fiber content aids digestion.</li>
<li> Traditional uses: Treats burns, inflammation, and throat abscesses.</li>
</ul>
<b>Caution :</b> Though low in fat and suitable for weight control, the fruit contains a high amount of sugar — diabetics should consume in moderation.`,
 reference: `
          <a href="https://www.kasettambon.com/%e0%b8%99%e0%b9%89%e0%b8%ad%e0%b8%a2%e0%b8%ab%e0%b8%99%e0%b9%88%e0%b8%b2-%e0%b8%9c%e0%b8%a5%e0%b9%84%e0%b8%a1%e0%b9%89%e0%b8%97%e0%b8%b5%e0%b9%88%e0%b8%a1%e0%b8%b5%e0%b8%aa%e0%b8%a3%e0%b8%a3%e0%b8%9e/" target="_blank">
          Click to see references.
          </a>`
        },
        root: {
          title: "Root",
          desc: `Root System: Deep taproot system with spreading roots.<br><br>

<b>Medicinal Uses :</b> Acts as a mild laxative (in small amounts), detoxifies the body, relieves poisoning, and can be used as an antidote for snake venom.`,
 reference: `
          <a href="https://th.wikipedia.org/wiki/%E0%B8%99%E0%B9%89%E0%B8%AD%E0%B8%A2%E0%B8%AB%E0%B8%99%E0%B9%88%E0%B8%B2" target="_blank">
          Click to see references.
          </a>`
        },
        care: {
          title: "Care",
          desc: `Environment: Drought-tolerant fruit tree that grows well in warm climates with full sunlight (at least 6 hours a day). It adapts to many soil types but prefers well-drained soil without flooding.
<br><br>
<b>Watering :</b> Although drought-resistant, it should be watered regularly during fruit development for better yield.<br><br>

<b>Fertilization :</b> Apply organic fertilizer such as chicken manure mixed with rice husks (about 4–5 kg per tree) after harvesting.<br><br>

<b>Pruning :</b> Essential for inducing flowering and fruiting. Prune branches after harvest to encourage new growth and improve fruit production.<br><br>

<b>Protection :</b> Since the branches are brittle, plant in areas protected from strong winds to prevent breakage.`,
 reference: `
          <a href="https://www.picturethisai.com/th/care/Annona_squamosa.html#:~:text=%E0%B8%99%E0%B9%89%E0%B8%AD%E0%B8%A2%E0%B8%AB%E0%B8%99%E0%B9%88%E0%B8%B2%20%E0%B8%96%E0%B8%B7%E0%B8%AD%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%95%E0%B9%89%E0%B8%99%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%94%E0%B8%B9%E0%B9%81%E0%B8%A5%E0%B8%87%E0%B9%88%E0%B8%B2%E0%B8%A2%2C%20%E0%B9%80%E0%B8%88%E0%B8%A3%E0%B8%B4%E0%B8%8D%E0%B9%80%E0%B8%95%E0%B8%B4%E0%B8%9A%E0%B9%82%E0%B8%95%E0%B9%84%E0%B8%94%E0%B9%89%E0%B8%94%E0%B8%B5%E0%B9%83%E0%B8%99%E0%B8%AA%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%AD%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%AD%E0%B8%9A%E0%B8%AD%E0%B8%B8%E0%B9%88%E0%B8%99%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%A1%E0%B8%B5%E0%B9%81%E0%B8%AA%E0%B8%87%E0%B9%81%E0%B8%94%E0%B8%94%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%94%E0%B8%B5%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%AA%E0%B8%B8%E0%B8%94%E0%B9%83%E0%B8%99%E0%B8%94%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A1%E0%B8%B5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%B2%E0%B8%A2%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%94%E0%B8%B5%20%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%95%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%94%E0%B8%B9%E0%B9%81%E0%B8%A5%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%9E%E0%B8%B4%E0%B9%80%E0%B8%A8%E0%B8%A9%E0%B8%A3%E0%B8%A7%E0%B8%A1%E0%B8%96%E0%B8%B6%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A3%E0%B8%94%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AD%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B8%AA%E0%B8%A1%E0%B9%88%E0%B8%B3%E0%B9%80%E0%B8%AA%E0%B8%A1%E0%B8%AD%E0%B9%83%E0%B8%99%E0%B8%A3%E0%B8%B0%E0%B8%AB%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9E%E0%B8%B1%E0%B8%92%E0%B8%99%E0%B8%B2%E0%B8%9C%E0%B8%A5%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A1%E0%B8%B5%E0%B8%A5%E0%B8%A1%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%9B%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%AA%E0%B8%B2%E0%B8%82%E0%B8%B2%E0%B8%82%E0%B8%AD%E0%B8%87%20%E0%B8%99%E0%B9%89%E0%B8%AD%E0%B8%A2%E0%B8%AB%E0%B8%99%E0%B9%88%E0%B8%B2%20%E0%B9%80%E0%B8%9E%E0%B8%A3%E0%B8%B2%E0%B8%B0%E0%B8%A1%E0%B8%B5%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B9%80%E0%B8%9B%E0%B8%A3%E0%B8%B2%E0%B8%B0%E0%B8%9A%E0%B8%B2%E0%B8%87%E0%B8%AD%E0%B8%A2%E0%B8%B9%E0%B9%88%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%87%20%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%9B%E0%B8%B8%E0%B9%8B%E0%B8%A2%E0%B8%A2%E0%B8%B1%E0%B8%87%E0%B8%A1%E0%B8%B5%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%AA%E0%B8%B3%E0%B8%84%E0%B8%B1%E0%B8%8D%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%AA%E0%B8%99%E0%B8%B1%E0%B8%9A%E0%B8%AA%E0%B8%99%E0%B8%B8%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%88%E0%B8%A3%E0%B8%B4%E0%B8%8D%E0%B9%80%E0%B8%95%E0%B8%B4%E0%B8%9A%E0%B9%82%E0%B8%95%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%AD%E0%B8%AD%E0%B8%81%E0%B8%9C%E0%B8%A5.,%E0%B8%95%E0%B8%B1%E0%B8%94%E0%B9%81%E0%B8%95%E0%B9%88%E0%B8%87%E0%B8%81%E0%B8%B4%E0%B9%88%E0%B8%87%20%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%82%E0%B8%A2%E0%B8%B2%E0%B8%A2%E0%B8%9E%E0%B8%B1%E0%B8%99%E0%B8%98%E0%B8%B8%E0%B9%8C%20%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A2%E0%B9%89%E0%B8%B2%E0%B8%A2%E0%B8%9B%E0%B8%A5%E0%B8%B9%E0%B8%81%20%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9B%E0%B8%A5%E0%B8%B9%E0%B8%81%20%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A2%E0%B9%89%E0%B8%B2%E0%B8%A2%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%96%E0%B8%B2%E0%B8%87%20%E0%B9%81%E0%B8%A1%E0%B8%A5%E0%B8%87%E0%B8%A8%E0%B8%B1%E0%B8%95%E0%B8%A3%E0%B8%B9%E0%B8%9E%E0%B8%B7%E0%B8%8A%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B9%82%E0%B8%A3%E0%B8%84%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%9E%E0%B8%9A%E0%B8%9A%E0%B9%88%E0%B8%AD%E0%B8%A2%20%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%9E%E0%B8%B4%E0%B8%A9" target="_blank">
          Click to see references.
          </a>`
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
