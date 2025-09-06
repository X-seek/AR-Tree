const hotspotUI = document.getElementById('hotspot-ui');
const hotspotText = document.getElementById('hotspot-text');
const hotspotAudio = document.getElementById('hotspot-audio');
const playBtn = document.getElementById('play-sound');
const closeBtn = document.getElementById('close-ui');

// เลือกปุ่มทั้งหมด
const hotspotButtons = document.querySelectorAll(".hotspot-menu button");

// ข้อมูล Hotspot
const hotspotData = {
  trunk: { text: "นี่คือลำต้นของต้นกล้วย", audio: "trunk.mp3" },
  leaf: { text: "นี่คือใบกล้วย", audio: "leaves.mp3" },
  fruit: { text: "นี่คือผลกล้วย", audio: "fruit.mp3" },
  flower: { text: "นี่คือดอกกล้วย", audio: "flower.mp3" },
  root: { text: "นี่คือรากกล้วย", audio: "root.mp3" },
  care: { text: "นี่คือวิธีดูแลต้นกล้วย", audio: "care.mp3" }
};

// ฟังก์ชันแสดงข้อมูล + ทำปุ่ม active
function showHotspot(key, button) {
  // ลบ active ออกจากปุ่มทั้งหมด
  hotspotButtons.forEach(btn => btn.classList.remove("active"));

  // ใส่ active ให้ปุ่มที่กด
  button.classList.add("active");

  // แสดง popup
  hotspotText.textContent = hotspotData[key].text;
  hotspotAudio.src = hotspotData[key].audio;
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
