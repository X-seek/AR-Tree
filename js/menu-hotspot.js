// js/menu-hotspot.js
const el = (id) => document.getElementById(id);

// =================== อ้างอิง element ===================
let hotspotUI, hotspotTitle, hotspotDesc, hotspotImg, hotspotAudio, playBtn, closeBtn;

function bindElements() {
  hotspotUI = el("hotspot-ui");
  hotspotTitle = el("hotspot-title");
  hotspotDesc = el("hotspot-desc");
  hotspotImg = el("hotspot-img");
  hotspotAudio = el("hotspot-audio");
  playBtn = el("play-sound");
  closeBtn = el("close-ui");

  if (closeBtn) {
    closeBtn.removeEventListener("click", handleClose);
    closeBtn.addEventListener("click", handleClose);
  }
  if (playBtn) {
    playBtn.removeEventListener("click", handlePlay);
    playBtn.addEventListener("click", handlePlay);
  }
}

// =================== Page detection ===================
const currentPage = window.location.pathname.split("/").pop().split(".")[0] || "index";
const pageKeyMap = {
  index: "banana",
  banana: "banana",
  coconut: "coconut",
  "custard-apple": "custard-apple",
  fig: "fig",
  guava: "guava",
  lime: "lime",
  mango: "mango",
  pomelo: "pomelo",
  sapodilla: "sapodilla",
  longan: "longan",
};
const currentPageKey = pageKeyMap[currentPage] || "banana";

// =================== Hotspot Data (ตัวอย่างเต็ม) ===================
// เพิ่ม audio ภาษาไทย/อังกฤษสำหรับทุกต้นไม้
const hotspotData = {
  banana: {
    trunk: { img: "images/hotspot/banana/trunk.png", audio: { th: "audio/th/banana/trunk_th.mp3", en: "audio/eng/banana/trunk_en.mp3" } },
    leaf: { img: "images/hotspot/banana/leaf.png", audio: { th: "audio/th/banana/leaf.mp3", en: "audio/eng/banana/leaf.mp3" } },
    fruit: { img: "images/hotspot/banana/fruit.png", audio: { th: "audio/th/banana/fruit.mp3", en: "audio/eng/banana/fruit.mp3" } },
    flower: { img: "images/hotspot/banana/flower.png", audio: { th: "audio/th/banana/flower.mp3", en: "audio/eng/banana/flower.mp3" } },
    root: { img: "images/hotspot/banana/root.png", audio: { th: "audio/th/banana/root.mp3", en: "audio/eng/banana/root.mp3" } },
    care: { img: "images/hotspot/banana/care.png", audio: { th: "audio/th/banana/care.mp3", en: "audio/eng/banana/care.mp3" } },
  },
  coconut: {
    trunk: { img: "images/hotspot/coconut/trunk.png", audio: { th: "audio/th/coconut/trunk.mp3", en: "audio/eng/coconut/trunk.mp3" } },
    leaf: { img: "images/hotspot/coconut/leaf.png", audio: { th: "audio/th/coconut/leaf.mp3", en: "audio/eng/coconut/leaf.mp3" } },
    fruit: { img: "images/hotspot/coconut/fruit.png", audio: { th: "audio/th/coconut/fruit.mp3", en: "audio/eng/coconut/fruit.mp3" } },
    flower: { img: "images/hotspot/coconut/flower.png", audio: { th: "audio/th/coconut/flower.mp3", en: "audio/eng/coconut/flower.mp3" } },
    root: { img: "images/hotspot/coconut/root.png", audio: { th: "audio/th/coconut/root.mp3", en: "audio/eng/coconut/root.mp3" } },
    care: { img: "images/hotspot/coconut/care.png", audio: { th: "audio/th/coconut/care.mp3", en: "audio/eng/coconut/care.mp3" } },
  },
  // เพิ่มต้นไม้อื่น ๆ ในรูปแบบเดียวกัน...
};

// =================== Show Hotspot ===================
function showHotspot(key) {
  if (!hotspotUI) bindElements();

  window.currentHotspotKey = key;
  const lang = window.i18n?.getCurrentLang() || "th"; // ใช้ i18n เป็นแหล่งข้อมูลภาษา

  const treeData = hotspotData[currentPageKey] || hotspotData["banana"];
  const data = treeData && treeData[key];
  if (!data) {
    hotspotImg.src = "";
    if (hotspotAudio) hotspotAudio.src = "";
    window.i18n?.applyHotspotContent(key);
    hotspotUI.classList.add("active");
    return;
  }

  hotspotImg.src = data.img || "";
  hotspotAudio.src = (data.audio && data.audio[lang]) || data.audio?.th || "";

  window.i18n?.applyHotspotContent(key);
  hotspotUI.classList.add("active");
}

// =================== Handlers ===================
function handleClose() {
  if (hotspotUI) hotspotUI.classList.remove("active");
  if (hotspotAudio) {
    try {
      hotspotAudio.pause();
      hotspotAudio.currentTime = 0;
    } catch (e) {}
  }
}

function handlePlay() {
  if (hotspotAudio && hotspotAudio.src) {
    hotspotAudio.play().catch(() => {});
  }
}

// =================== Toggle Menu ===================
function toggleMenu() {
  document.querySelector(".hotspot-menu")?.classList.toggle("active");
}

// =================== Init ===================
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bindElements);
} else {
  bindElements();
}

// =================== Export ===================
window._menuHotspot = {
  bindElements,
  showHotspot,
  toggleMenu
};
