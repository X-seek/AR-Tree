const hotspotUI = document.getElementById('hotspot-ui');
const hotspotTitle = document.getElementById('hotspot-title');
const hotspotImg = document.getElementById('hotspot-img');
const hotspotDesc = document.getElementById('hotspot-desc');
const hotspotAudio = document.getElementById('hotspot-audio');
const playBtn = document.getElementById('play-sound');
const closeBtn = document.getElementById('close-ui');

// เลือกปุ่มทั้งหมด
const hotspotButtons = document.querySelectorAll(".hotspot-menu button");

// ข้อมูล Hotspot
const hotspotData = {
  trunk: {
    title: "ลำต้นกล้วย",
    img: "images/logo-menu/trunk.png",
    desc: "ลำต้นของกล้วยมีลักษณะเป็นกาบซ้อนกัน ไม่ใช่ไม้เนื้อแข็ง",
    audio: "trunk.mp3"
  },
  leaf: {
    title: "ใบกล้วย",
    img: "images/logo-menu/leaf.png",
    desc: "ใบกล้วยมีขนาดใหญ่ กว้าง เหมาะสำหรับห่ออาหารและใช้ประโยชน์หลากหลาย",
    audio: "leaves.mp3"
  },
  fruit: {
    title: "ผลกล้วย",
    img: "images/logo-menu/fruits.png",
    desc: "ผลกล้วยเป็นแหล่งพลังงาน มีคาร์โบไฮเดรต วิตามิน และเกลือแร่",
    audio: "fruit.mp3"
  },
  flower: {
    title: "ดอกกล้วย (ปลี)",
    img: "images/logo-menu/sakura.png",
    desc: "ดอกกล้วย หรือปลี สามารถนำไปประกอบอาหารได้",
    audio: "flower.mp3"
  },
  root: {
    title: "รากกล้วย",
    img: "images/logo-menu/root.png",
    desc: "รากของกล้วยเป็นรากฝอย ช่วยยึดเกาะดินและดูดซึมสารอาหาร",
    audio: "root.mp3"
  },
  care: {
    title: "การดูแลกล้วย",
    img: "images/logo-menu/plant-a-tree.png",
    desc: "ควรรดน้ำอย่างสม่ำเสมอและใส่ปุ๋ยเพื่อให้กล้วยเติบโตแข็งแรง",
    audio: "care.mp3"
  }
};

// ฟังก์ชันแสดงข้อมูล + ทำปุ่ม active
function showHotspot(key, button) {
  // ลบ active ออกจากปุ่มทั้งหมด
  hotspotButtons.forEach(btn => btn.classList.remove("active"));

  // ใส่ active ให้ปุ่มที่กด
  button.classList.add("active");

  // ดึงข้อมูลมาใส่ใน UI
  const data = hotspotData[key];
  hotspotTitle.textContent = data.title;
  hotspotImg.src = data.img;
  hotspotDesc.textContent = data.desc;
  hotspotAudio.src = data.audio;

  // แสดง popup
  hotspotUI.classList.add("active");
}

// ปุ่มกดด้านขวา
document.getElementById("btn-trunk").addEventListener("click", (e) => showHotspot("trunk", e.currentTarget));
document.getElementById("btn-leaf").addEventListener("click", (e) => showHotspot("leaf", e.currentTarget));
document.getElementById("btn-fruit").addEventListener("click", (e) => showHotspot("fruit", e.currentTarget));
document.getElementById("btn-flower").addEventListener("click", (e) => showHotspot("flower", e.currentTarget));
document.getElementById("btn-root").addEventListener("click", (e) => showHotspot("root", e.currentTarget));
document.getElementById("btn-care").addEventListener("click", (e) => showHotspot("care", e.currentTarget));

// ปิด UI
closeBtn.addEventListener("click", () => {
  hotspotUI.classList.remove("active");
  hotspotAudio.pause();
  hotspotAudio.currentTime = 0;

  // ลบ active ออกจากปุ่มทั้งหมด
  hotspotButtons.forEach(btn => btn.classList.remove("active"));
});

// เล่นเสียง
playBtn.addEventListener("click", () => {
  hotspotAudio.play();
});
