(function () {
  const translations = {
    th: {
      page: { title: "มะเดื่อ" },
      ui: { play: "▶", close: "✖" },
      reference: { label: "แหล่งที่มา :" },
      hotspot: {
        trunk: {
          title: "ลำต้น",
          desc: `เป็นพรรณไม้ยืนต้นขนาดกลาง ทรงพุ่มกว้าง ใบหนาทึบ ลำต้นสูงประมาณ 5-20 เมตร ลำต้นเกลี้ยง เปลือกต้นเป็นสีน้ำตาลหรือน้ำตาลปนเทา กิ่งอ่อนเป็นสีเขียว ส่วนกิ่งแก่เป็นสีน้ำตาลเกลี้ยง<br><br>
          <b>สรรพคุณ :</b> แก้ท้องร่วง ท้องเสีย ประดงเม็ดผื่นคัน และชะล้างบาดแผล ห้ามเลือด แก้อาเจียน`,
          reference: `
          <a href="https://medthai.com/%e0%b8%a1%e0%b8%b0%e0%b9%80%e0%b8%94%e0%b8%b7%e0%b9%88%e0%b8%ad%e0%b8%8a%e0%b8%b8%e0%b8%a1%e0%b8%9e%e0%b8%a3/" target="_blank">แหล่งที่มา 1</a>, 
          <a href="https://www.doctor.or.th/article/detail/2290#:~:text=%E0%B8%A1%E0%B8%B0%E0%B9%80%E0%B8%94%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%AD%E0%B8%B8%E0%B8%97%E0%B8%B8%E0%B8%A1%E0%B8%9E%E0%B8%A3%20%E0%B8%A1%E0%B8%B5%E0%B8%84%E0%B8%B8%E0%B8%93%E0%B8%AA%E0%B8%A1%E0%B8%9A%E0%B8%B1%E0%B8%95%E0%B8%B4%E0%B8%97%E0%B8%B2%E0%B8%87,%E0%B9%84%E0%B8%82%E0%B9%89%E0%B8%81%E0%B8%B2%E0%B8%AC%20%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B9%84%E0%B8%82%E0%B9%89%E0%B8%9E%E0%B8%B4%E0%B8%A9%E0%B8%97%E0%B8%B8%E0%B8%81%E0%B8%8A%E0%B8%99%E0%B8%B4%E0%B8%94" target="_blank">แหล่งที่มา 2</a>`
        },
        leaf: {
          title: "ใบ",
          desc: `เป็นใบเดี่ยวค่อนข้างหนา ขอบใบหยัก 3-5 หยัก หรือตรงผิวใบด้านบนหยาบ<br><br>
          <b>สรรพคุณ :</b>
          <ul class="desc">
            <li>มีเส้นใยสูง ช่วยในการกำจัดของเสียในร่างกายและการขับถ่ายดีขึ้น</li>
            <li>ป้องกันนิ่ว และที่สำคัญ คือ มีสารยับยั้งป้องกันการเกิดมะเร็ง ช่วยระงับการเจริญเติบโตของมะเร็งลำไส้</li>
          </ul>`,
          reference: `
          <a href="https://www.scimath.org/article-biology/item/553-ficus-casica-linn" target="_blank">แหล่งที่มา 1</a>`
        },
        fruit: {
          title: "ผล",
          desc: `ผลไม้ลูกเล็ก ๆ ที่มีเนื้อด้านในเป็นสีแดงเข้ม เมื่อสุกได้ที่จะมีรสชาติหวาน หอมละมุน และเนื้อละเอียด ซึ่งเป็นอีกหนึ่งผลไม้ที่ได้รับความนิยมอย่างมากในหมู่คนรักสุขภาพ<br><br>
          <b>คุณค่าทางโภชนาการ :</b> วิตามินเอ, วิตามินบี 1, วิตามินบี 2, วิตามินซี, มีธาตุแคลเซียม, โพแทสเซียม, ฟอสฟอรัส และมีธาตุเหล็กสูงมาก ไม่มีไขมัน ไม่มีคอเลสเตอรอล และยังมีสมบัติในการสร้างสมดุลระหว่างความเป็นกรด-เบส มีน้ำตาลธรรมชาติมากถึง 83% ได้แก่ น้ำตาลกลูโคส ฟรุกโตส และซูโครส<br><br>
          <b>สรรพคุณ :</b>
          <ul class="desc">
            <li>แก้ไข้ แก้ไข้พิษ แก้ไข้กาฬ แก้ร้อนใน ช่วยระงับความร้อน กระทุ้งพิษไข้</li>
            <li>ช่วยกล่อมเสมหะ ช่วยกล่อมโลหิต แก้ไข้หัวลม แก้อาการปากเปื่อย</li>
            <li>ช่วยลดน้ำตาลในเลือด ต้านเชื้อบิด ช่วยลดความดันโลหิตสูง ช่วยคลายกล้ามเนื้อเรียบ</li>
            <li>ต้านเชื้อแบคทีเรีย ไวรัส ช่วยลดไขมันในเลือด ช่วยแก้อาเจียน แก้ธาตุพิการ</li>
            <li>แก้อาการท้องเสีย ท้องร่วง ช่วยห้ามเลือด ช่วยชะล้างบาดแผล สมานแผล แก้เม็ดผื่นคัน เป็นยาระบาย</li>
          </ul>`,
          reference: `
          <a href="https://www.scimath.org/article-biology/item/553-ficus-casica-linn" target="_blank">แหล่งที่มา 1</a>, 
          <a href="https://www.ananda.co.th/blog/thegenc/%E0%B8%A5%E0%B8%B9%E0%B8%81%E0%B8%9F%E0%B8%B4%E0%B8%81-fig-%E0%B8%AB%E0%B8%A3%E0%B8%B7%E0%B8%AD-%E0%B8%A1%E0%B8%B0%E0%B9%80%E0%B8%94%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%9D%E0%B8%A3%E0%B8%B1%E0%B9%88%E0%B8%87-%E0%B8%9C%E0%B8%A5%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%A1%E0%B8%B2%E0%B9%81%E0%B8%A3%E0%B8%87%E0%B9%81%E0%B8%AB%E0%B9%88%E0%B8%87%E0%B8%A2%E0%B8%B8%E0%B8%84%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%84%E0%B8%99%E0%B9%80%E0%B8%AE%E0%B8%A5%E0%B8%97%E0%B9%8C%E0%B8%95%E0%B8%B5%E0%B9%89/#:~:text=%E2%80%93%20%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B8%8A%E0%B9%88%E0%B8%A7%E0%B8%A2%E0%B8%A5%E0%B8%94%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%81%20%E0%B9%80%E0%B8%9E%E0%B8%A3%E0%B8%B2%E0%B8%B0%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%9E%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%AA%E0%B8%B9%E0%B8%87%20%E0%B9%83%E0%B8%99%E0%B8%82%E0%B8%93%E0%B8%B0%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%81%E0%B8%84%E0%B8%A5%E0%B8%95%E0%B9%88%E0%B8%B3%20%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%9B%E0%B8%A3%E0%B8%B2%E0%B8%A8%E0%B8%88%E0%B8%B2%E0%B8%81%E0%B9%84%E0%B8%82%E0%B8%A1%E0%B8%B1%E0%B8%99%E0%B8%84%E0%B8%AD%E0%B8%A5%E0%B9%80%E0%B8%A5%E0%B8%AA%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B8%AD%E0%B8%A5%20%E0%B8%97%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%A5%E0%B9%89%E0%B8%A7%E0%B8%AD%E0%B8%A2%E0%B8%B9%E0%B9%88%E0%B8%97%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%84%E0%B8%94%E0%B9%89%E0%B8%94%E0%B8%B5%20%E2%80%93,%E0%B8%99%E0%B8%B2%E0%B8%97%E0%B8%B5%E0%B9%81%E0%B8%A5%E0%B9%89%E0%B8%A7%E0%B8%9B%E0%B8%AD%E0%B8%81%E0%B9%80%E0%B8%9B%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%97%E0%B8%B2%E0%B8%99%20%E2%80%93%20%E0%B9%83%E0%B8%AA%E0%B9%88%E0%B9%83%E0%B8%99%E0%B9%82%E0%B8%A2%E0%B9%80%E0%B8%81%E0%B8%B4%E0%B8%A3%E0%B9%8C%E0%B8%95%20%E0%B8%AB%E0%B8%A3%E0%B8%B7%E0%B8%AD%E0%B8%8B%E0%B8%B5%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%A5%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%A0%E0%B8%B2%E0%B8%9E%20%E2%80%93%20%E0%B9%80%E0%B8%AA%E0%B8%B4%E0%B8%A3%E0%B9%8C%E0%B8%9F%E0%B8%84%E0%B8%B9%E0%B9%88%E0%B8%81%E0%B8" target="_blank">แหล่งที่มา 2</a>`
        },
        root: {
          title: "ราก",
          desc: `มะเดื่อฝรั่งชอบความชื้น แต่ไม่ทนต่อการมีน้ำขัง ซึ่งอาจทำให้เกิดโรครากเน่าได้ง่าย<br><br>
          <b>สรรพคุณ :</b> ใช้แก้ไข้ กระทุ้งพิษไข้ กล่อมเสมหะและเลือด แก้ไข้หวัด แก้ไข้กาฬ และไข้พิษทุกชนิด<br><br>
          <b>การเสริมราก :</b> ในไทยนิยมเสริมรากด้วยตอมะเดื่ออุทุมพร (มะเดื่อไทย) เนื่องจากรากอุทุมพรมีความแข็งแรง ทนทานต่อโรค และช่วยให้ต้นมะเดื่อฝรั่งเจริญเติบโตได้ดี ให้ผลดกกว่าการใช้รากเดิม`,
          reference: `
          <a href="https://www.doctor.or.th/article/detail/2290#:~:text=%E0%B8%A1%E0%B8%B0%E0%B9%80%E0%B8%94%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%AD%E0%B8%B8%E0%B8%97%E0%B8%B8%E0%B8%A1%E0%B8%9E%E0%B8%A3%20%E0%B8%A1%E0%B8%B5%E0%B8%84%E0%B8%B8%E0%B8%93%E0%B8%AA%E0%B8%A1%E0%B8%9A%E0%B8%B1%E0%B8%95%E0%B8%B4%E0%B8%97%E0%B8%B2%E0%B8%87,%E0%B9%84%E0%B8%82%E0%B9%89%E0%B8%81%E0%B8%B2%E0%B8%AC%20%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B9%84%E0%B8%82%E0%B9%89%E0%B8%9E%E0%B8%B4%E0%B8%A9%E0%B8%97%E0%B8%B8%E0%B8%81%E0%B8%8A%E0%B8%99%E0%B8%B4%E0%B8%94" target="_blank">แหล่งที่มา 1</a>`
        },
        care: {
          title: "การดูแล",
          desc: `ต้นพันธุ์ที่นำมาปลูกต้องเป็นต้นที่แข็งแรงไม่มีโรคแมลงติดมาด้วย และต้นพันธุ์นั้นควรมีอายุมากกว่า 2 เดือนขึ้นไป หลังจากปลูกดูแลรดน้ำอีกประมาณ 6 เดือนก็จะเริ่มให้ผลผลิต หรือบางสายพันธุ์ถ้าได้รับการดูแลอย่างดี ต้นสมบูรณ์ก็จะให้ผลผลิตเร็วกว่านั้น<br><br>
          <b>การให้น้ำ :</b> ระบบน้ำจะให้แบบน้ำหยดหรือแบบสปิงเกอร์<br><br>
          <b>การใส่ปุ๋ย :</b> บำรุงด้วยปุ๋ยสูตรเสมอ 15-15-15 หรือ 16-16-16 สลับกับการให้ปุ๋ยหมักเดือนละครั้ง ซึ่งการบำรุงก็ขึ้นอยู่กับดินที่ปลูกหรือวัสดุที่ใช้ปลูกหากมีธาตุอาหารเพียงพอก็ไม่ต้องบำรุงมาก`,
          reference: `
          <a href="https://gardenandfarm.baanlaesuan.com/347930/farming-101/10_tips_figs#f03" target="_blank">แหล่งที่มา 1</a>`
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
      page: { title: "Fig" },
      ui: { play: "▶", close: "✖" },
      reference: { label: "Reference :" },
      hotspot: {
        trunk: {
          title: "Stem",
          desc: `The fig is a medium-sized perennial tree with a broadly spreading crown and dense,
           heavy foliage. The trunk may attain a height of 5 to 20 metres. The bark is smooth and brown to 
           brownish-grey in colour; young branches are green, whilst mature branches are smooth and brown.<br><br>
          
          <b>Medicinal Properties : </b><br>The stem bark is used to treat diarrhoea and loose stools, skin rashes 
          and itching, and to cleanse and staunch bleeding wounds; it also serves as an antiemetic.`,
          
          reference: `
          <a href="https://medthai.com/%e0%b8%a1%e0%b8%b0%e0%b9%80%e0%b8%94%e0%b8%b7%e0%b9%88%e0%b8%ad%e0%b8%8a%e0%b8%b8%e0%b8%a1%e0%b8%9e%e0%b8%a3/" target="_blank">Source 1</a>, 
          <a href="https://www.doctor.or.th/article/detail/2290#:~:text=%E0%B8%A1%E0%B8%B0%E0%B9%80%E0%B8%94%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%AD%E0%B8%B8%E0%B8%97%E0%B8%B8%E0%B8%A1%E0%B8%9E%E0%B8%A3%20%E0%B8%A1%E0%B8%B5%E0%B8%84%E0%B8%B8%E0%B8%93%E0%B8%AA%E0%B8%A1%E0%B8%9A%E0%B8%B1%E0%B8%95%E0%B8%B4%E0%B8%97%E0%B8%B2%E0%B8%87,%E0%B9%84%E0%B8%82%E0%B9%89%E0%B8%81%E0%B8%B2%E0%B8%AC%20%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B9%84%E0%B8%82%E0%B9%89%E0%B8%9E%E0%B8%B4%E0%B8%A9%E0%B8%97%E0%B8%B8%E0%B8%81%E0%B8%8A%E0%B8%99%E0%B8%B4%E0%B8%94" target="_blank">Source 2</a>`
        },
        leaf: {
          title: "Leaf",
          desc: `The fig leaf is a single, comparatively thick blade with three to five lobes or indentations along the 
          margin. The upper surface is rough to the touch.<br><br>
          
          <b>Medicinal Properties :</b><br>The leaf is rich in dietary fibre, promoting the elimination of 
          bodily waste and improving bowel regularity. It is also reputed to prevent kidney stones and, 
          of particular significance, contains compounds that inhibit the onset of cancer, specifically 
          suppressing the growth of colon cancer cells.`,
          
          reference: `
          <a href="https://www.scimath.org/article-biology/item/553-ficus-casica-linn" target="_blank">Source 1</a>`
        },
        fruit: {
          title: "Fruit",
          desc: `The fig is a small fruit with a deep red interior that, upon reaching full ripeness, 
          develops a sweet, delicately fragrant, and finely textured flesh. It has garnered considerable 
          popularity among health-conscious consumers.<br><br>
          
          <b>Nutritional Value : </b><br>The fig is richly endowed with vitamins A, B1, B2, and C, as well as 
          the minerals calcium, potassium, phosphorus, and notably high levels of iron. It contains neither 
          fat nor cholesterol, and is further distinguished by its capacity to maintain the acid-base balance 
          of the body. It contains natural sugars in a proportion of up to 83 percent, comprising glucose, fructose, and sucrose.<br><br>
          
          <b>Medicinal Properties : </b><br>The fig is attributed with a wide range of therapeutic applications in 
          traditional medicine. It is employed to reduce fever of various kinds, to alleviate internal heat, 
          to expel toxins, to regulate phlegm and blood, to treat mouth sores, to lower blood sugar levels, 
          to combat dysentery, to reduce high blood pressure, to relax smooth muscle, to act against bacterial 
          and viral infections, to reduce blood lipids, to relieve vomiting, to address digestive disorders, 
          to treat diarrhoea, to staunch bleeding, to cleanse and heal wounds, and to relieve skin rashes and itching.`,
          
          reference: `
          <a href="https://www.scimath.org/article-biology/item/553-ficus-casica-linn" target="_blank">Source 1</a>, 
          <a href="https://www.ananda.co.th/blog/thegenc/%E0%B8%A5%E0%B8%B9%E0%B8%81%E0%B8%9F%E0%B8%B4%E0%B8%81-fig-%E0%B8%AB%E0%B8%A3%E0%B8%B7%E0%B8%AD-%E0%B8%A1%E0%B8%B0%E0%B9%80%E0%B8%94%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%9D%E0%B8%A3%E0%B8%B1%E0%B9%88%E0%B8%87-%E0%B8%9C%E0%B8%A5%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%A1%E0%B8%B2%E0%B9%81%E0%B8%A3%E0%B8%87%E0%B9%81%E0%B8%AB%E0%B9%88%E0%B8%87%E0%B8%A2%E0%B8%B8%E0%B8%84%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%84%E0%B8%99%E0%B9%80%E0%B8%AE%E0%B8%A5%E0%B8%97%E0%B9%8C%E0%B8%95%E0%B8%B5%E0%B9%89/#:~:text=%E2%80%93%20%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B8%8A%E0%B9%88%E0%B8%A7%E0%B8%A2%E0%B8%A5%E0%B8%94%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%81%20%E0%B9%80%E0%B8%9E%E0%B8%A3%E0%B8%B2%E0%B8%B0%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%9E%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%AA%E0%B8%B9%E0%B8%87%20%E0%B9%83%E0%B8%99%E0%B8%82%E0%B8%93%E0%B8%B0%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%81%E0%B8%84%E0%B8%A5%E0%B8%95%E0%B9%88%E0%B8%B3%20%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%9B%E0%B8%A3%E0%B8%B2%E0%B8%A8%E0%B8%88%E0%B8%B2%E0%B8%81%E0%B9%84%E0%B8%82%E0%B8%A1%E0%B8%B1%E0%B8%99%E0%B8%84%E0%B8%AD%E0%B8%A5%E0%B9%80%E0%B8%A5%E0%B8%AA%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B8%AD%E0%B8%A5%20%E0%B8%97%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%A5%E0%B9%89%E0%B8%A7%E0%B8%AD%E0%B8%A2%E0%B8%B9%E0%B9%88%E0%B8%97%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%84%E0%B8%94%E0%B9%89%E0%B8%94%E0%B8%B5%20%E2%80%93,%E0%B8%99%E0%B8%B2%E0%B8%97%E0%B8%B5%E0%B9%81%E0%B8%A5%E0%B9%89%E0%B8%A7%E0%B8%9B%E0%B8%AD%E0%B8%81%E0%B9%80%E0%B8%9B%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%97%E0%B8%B2%E0%B8%99%20%E2%80%93%20%E0%B9%83%E0%B8%AA%E0%B9%88%E0%B9%83%E0%B8%99%E0%B9%82%E0%B8%A2%E0%B9%80%E0%B8%81%E0%B8%B4%E0%B8%A3%E0%B9%8C%E0%B8%95%20%E0%B8%AB%E0%B8%A3%E0%B8%B7%E0%B8%AD%E0%B8%8B%E0%B8%B5%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%A5%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%A0%E0%B8%B2%E0%B8%9E%20%E2%80%93%20%E0%B9%80%E0%B8%AA%E0%B8%B4%E0%B8%A3%E0%B9%8C%E0%B8%9F%E0%B8%84%E0%B8%B9%E0%B9%88%E0%B8%81%E0%B8" target="_blank">Source 2</a>`
        },
        root: {
          title: "Root",
          desc: `The fig tree prefers moist conditions, yet it does not tolerate waterlogging, which may readily give rise to root rot.<br><br>
          
          <b>Medicinal Properties : </b><br>The root is used to reduce fever, expel toxins, regulate phlegm and blood, and to treat common colds, severe fevers, and all manner of toxic fevers.<br><br>
          
          <b>Root Grafting : </b>In Thailand, it is common practice to graft fig trees onto the rootstock of 
          the native Thai fig (มะเดื่ออุทุมพร, Ficus racemosa), as the roots of this species are considerably 
          stronger, more disease-resistant, and support more vigorous growth and greater fruit yield than the original root system.`,
          
          reference: `
          <a href="https://www.doctor.or.th/article/detail/2290#:~:text=%E0%B8%A1%E0%B8%B0%E0%B9%80%E0%B8%94%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%AD%E0%B8%B8%E0%B8%97%E0%B8%B8%E0%B8%A1%E0%B8%9E%E0%B8%A3%20%E0%B8%A1%E0%B8%B5%E0%B8%84%E0%B8%B8%E0%B8%93%E0%B8%AA%E0%B8%A1%E0%B8%9A%E0%B8%B1%E0%B8%95%E0xB4%E0%B8%97%E0xB2%E0xB8%87,%E0xB9%84%E0xB8%82%E0xB9%89%E0xB8%81%E0xB8%B2%E0xB8%AC%20%E0xB9%81%E0xB8%A5%E0xB８%B0%E0xB9%84%E0xB８%82%E0xB9%89%E0xB8%9E%E0xB8%B4%E0xB8%A9%E0%B8%97%E0%B8%B8%E0%B8%81%E0%B8%8A%E0%B8%99%E0%B8%B4%E0%B8%94" target="_blank">Source 1</a>`
        },
        care: {
          title: "Cultivation and Care",
          desc: `Planting stock must be healthy and free from disease and insect infestation, and should be 
          at least two months of age. Approximately six months after planting and careful tending, the tree
           will begin to yield fruit. Some varieties, when well-maintained, may bear fruit even earlier.<br><br>
          
           <b>Watering : </b>Water is supplied via drip irrigation or sprinkler systems.<br><br>
          
           <b>Fertilisation : </b>The tree is nourished with a balanced fertiliser formula of 15-15-15 or 16-16-16, 
           alternated with organic compost applied monthly. The quantity of fertilisation required varies according to
            the soil composition and growing medium; where nutrients are adequate, less supplementary fertilisation is necessary.`,
          
           reference: `
          <a href="https://gardenandfarm.baanlaesuan.com/347930/farming-101/10_tips_figs#f03" target="_blank">Source 1</a>`
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
