const hotspotUI = document.getElementById('hotspot-ui');
const hotspotText = document.getElementById('hotspot-text');
const hotspotAudio = document.getElementById('hotspot-audio');
const playBtn = document.getElementById('play-sound');
const closeBtn = document.getElementById('close-ui');

// ข้อมูล Hotspot
const hotspotData = {
  trunk: { text: "นี่คือลำต้นของต้นกล้วย", audio: "trunk.mp3" },
  leaf: { text: "นี่คือใบกล้วย", audio: "leaves.mp3" },
  fruit: { text: "นี่คือผลกล้วย", audio: "fruit.mp3" },
  flower: { text: "นี่คือดอกกล้วย", audio: "flower.mp3" },
  root: { text: "นี่คือรากกล้วย", audio: "root.mp3" },
  care: { text: "นี่คือวิธีดูแลต้นกล้วย", audio: "care.mp3" }
};

// ปุ่มกดด้านขวา
document.getElementById("btn-trunk").addEventListener("click", () => showHotspot("trunk"));
document.getElementById("btn-leaf").addEventListener("click", () => showHotspot("leaf"));
document.getElementById("btn-fruit").addEventListener("click", () => showHotspot("fruit"));
document.getElementById("btn-flower").addEventListener("click", () => showHotspot("flower"));
document.getElementById("btn-root").addEventListener("click", () => showHotspot("root"));
document.getElementById("btn-care").addEventListener("click", () => showHotspot("care"));


function showHotspot(key) {
  hotspotText.textContent = hotspotData[key].text;
  hotspotAudio.src = hotspotData[key].audio;
  hotspotUI.classList.add("active");
}

// ปิด UI
closeBtn.addEventListener("click", () => {
  hotspotUI.classList.remove("active");
  hotspotAudio.pause();
  hotspotAudio.currentTime = 0;
});

// เล่นเสียง
playBtn.addEventListener("click", () => {
  hotspotAudio.play();
});