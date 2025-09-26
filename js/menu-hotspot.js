// =================== อ้างอิง element ===================
const hotspotUI = document.getElementById("hotspot-ui");
const hotspotTitle = document.getElementById("hotspot-title");
const hotspotDesc = document.getElementById("hotspot-desc");
const hotspotImg = document.getElementById("hotspot-img");
const hotspotAudio = document.getElementById("hotspot-audio");
const playBtn = document.getElementById("play-sound");
const closeBtn = document.getElementById("close-ui");

// =================== Hotspot Data ===================
const hotspotData = {
  trunk: { img: "images/logo-menu/trunk.png", audio: "trunk.mp3" },
  leaf: { img: "images/logo-menu/leaf.png", audio: "leaves.mp3" },
  fruit: { img: "images/logo-menu/fruits.png", audio: "fruit.mp3" },
  flower: { img: "images/logo-menu/sakura.png", audio: "flower.mp3" },
  root: { img: "images/logo-menu/root.png", audio: "root.mp3" },
  care: { img: "images/logo-menu/plant-a-tree.png", audio: "care.mp3" },
};

// =================== Show Hotspot ===================
function showHotspot(key) {
  window.currentHotspotKey = key;
  const data = hotspotData[key];
  if (!data) return;

  hotspotImg.src = data.img;
  hotspotAudio.src = data.audio;

  if (window.i18n) {
    window.i18n.applyHotspotContent(key);
  }

  hotspotUI.classList.add("active");
}

// =================== Close Button ===================
closeBtn?.addEventListener("click", () => {
  hotspotUI.classList.remove("active");
  hotspotAudio.pause();
  hotspotAudio.currentTime = 0;
});

// =================== Play Sound Button ===================
playBtn?.addEventListener("click", () => {
  hotspotAudio.play();
});

// =================== Menu slide ===================
function toggleMenu() {
  document.querySelector(".hotspot-menu")?.classList.toggle("active");
}
