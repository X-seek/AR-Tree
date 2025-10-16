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
    leaf: { img: "images/hotspot/banana/leaf.png", audio: { th: "audio/th/banana/leaf_th.mp3", en: "audio/eng/banana/leaf.mp3" } },
    fruit: { img: "images/hotspot/banana/fruit.png", audio: { th: "audio/th/banana/fruit.mp3", en: "audio/eng/banana/fruit.mp3" } },
    root: { img: "images/hotspot/banana/root.png", audio: { th: "audio/th/banana/root.mp3", en: "audio/eng/banana/root.mp3" } },
    care: { img: "images/logo-menu/planting.png", audio: { th: "audio/th/banana/care.mp3", en: "audio/eng/banana/care.mp3" } },
  },
  coconut: {
    trunk: { img: "images/hotspot/coconut/trunk.png", audio: { th: "audio/th/coconut/trunk.mp3", en: "audio/eng/coconut/trunk.mp3" } },
    leaf: { img: "images/hotspot/coconut/leaf.png", audio: { th: "audio/th/coconut/leaf.mp3", en: "audio/eng/coconut/leaf.mp3" } },
    fruit: { img: "images/hotspot/coconut/fruit.png", audio: { th: "audio/th/coconut/fruit.mp3", en: "audio/eng/coconut/fruit.mp3" } },
    root: { img: "images/hotspot/coconut/root.png", audio: { th: "audio/th/coconut/root.mp3", en: "audio/eng/coconut/root.mp3" } },
    care: { img: "images/logo-menu/planting.png", audio: { th: "audio/th/coconut/care.mp3", en: "audio/eng/coconut/care.mp3" } },
  },
  "custard-apple": {
    trunk: { img: "images/hotspot/custard-apple/trunk.png", audio: { th: "audio/th/custard-apple/trunk.mp3", en: "audio/eng/custard-apple/trunk.mp3" } },
    leaf: { img: "images/hotspot/custard-apple/leaf.png", audio: { th: "audio/th/custard-apple/leaf.mp3", en: "audio/eng/custard-apple/leaf.mp3" } },
    fruit: { img: "images/hotspot/custard-apple/fruit.png", audio: { th: "audio/th/custard-apple/fruit.mp3", en: "audio/eng/custard-apple/fruit.mp3" } },
    root: { img: "images/hotspot/custard-apple/root.png", audio: { th: "audio/th/custard-apple/root.mp3", en: "audio/eng/custard-apple/root.mp3" } },
    care: { img: "images/logo-menu/planting.png", audio: { th: "audio/th/custard-apple/care.mp3", en: "audio/eng/custard-apple/care.mp3" } },
  },
  fig: {
    trunk: { img: "images/hotspot/fig/trunk.png", audio: { th: "audio/th/fig/trunk.mp3", en: "audio/eng/fig/trunk.mp3" } },
    leaf: { img: "images/hotspot/fig/leaf.png", audio: { th: "audio/th/fig/leaf.mp3", en: "audio/eng/fig/leaf.mp3" } },
    fruit: { img: "images/hotspot/fig/fruit.png", audio: { th: "audio/th/fig/fruit.mp3", en: "audio/eng/fig/fruit.mp3" } },
    root: { img: "images/hotspot/fig/root.png", audio: { th: "audio/th/fig/root.mp3", en: "audio/eng/fig/root.mp3" } },
    care: { img: "images/logo-menu/planting.png", audio: { th: "audio/th/fig/care.mp3", en: "audio/eng/fig/care.mp3" } },
  },
  guava: {
    trunk: { img: "images/hotspot/guava/trunk.png", audio: { th: "audio/th/guava/trunk.mp3", en: "audio/eng/guava/trunk.mp3" } },
    leaf: { img: "images/hotspot/guava/leaf.png", audio: { th: "audio/th/guava/leaf.mp3", en: "audio/eng/guava/leaf.mp3" } },
    fruit: { img: "images/hotspot/guava/fruit.png", audio: { th: "audio/th/guava/fruit.mp3", en: "audio/eng/guava/fruit.mp3" } },
    root: { img: "images/hotspot/guava/root.png", audio: { th: "audio/th/guava/root.mp3", en: "audio/eng/guava/root.mp3" } },
    care: { img: "images/logo-menu/planting.png", audio: { th: "audio/th/guava/care.mp3", en: "audio/eng/guava/care.mp3" } },
  },
  lime: {
    trunk: { img: "images/hotspot/lime/trunk.png", audio: { th: "audio/th/lime/trunk.mp3", en: "audio/eng/lime/trunk.mp3" } },
    leaf: { img: "images/hotspot/lime/leaf.png", audio: { th: "audio/th/lime/leaf.mp3", en: "audio/eng/lime/leaf.mp3" } },
    fruit: { img: "images/hotspot/lime/fruit.png", audio: { th: "audio/th/lime/fruit.mp3", en: "audio/eng/lime/fruit.mp3" } },
    root: { img: "images/hotspot/lime/root.png", audio: { th: "audio/th/lime/root.mp3", en: "audio/eng/lime/root.mp3" } },
    care: { img: "images/logo-menu/planting.png", audio: { th: "audio/th/lime/care.mp3", en: "audio/eng/lime/care.mp3" } },
  },
  longan: {
    trunk: { img: "images/hotspot/longan/trunk.png", audio: { th: "audio/th/longan/trunk.mp3", en: "audio/eng/longan/trunk.mp3" } },
    leaf: { img: "images/hotspot/longan/leaf.png", audio: { th: "audio/th/longan/leaf.mp3", en: "audio/eng/longan/leaf.mp3" } },
    fruit: { img: "images/hotspot/longan/fruit.png", audio: { th: "audio/th/longan/fruit.mp3", en: "audio/eng/longan/fruit.mp3" } },
    root: { img: "images/hotspot/longan/root.png", audio: { th: "audio/th/longan/root.mp3", en: "audio/eng/longan/root.mp3" } },
    care: { img: "images/logo-menu/planting.png", audio: { th: "audio/th/longan/care.mp3", en: "audio/eng/longan/care.mp3" } },
  },
  mango: {
    trunk: { img: "images/hotspot/mango/trunk.png", audio: { th: "audio/th/mango/trunk.mp3", en: "audio/eng/mango/trunk.mp3" } },
    leaf: { img: "images/hotspot/mango/leaf.png", audio: { th: "audio/th/mango/leaf.mp3", en: "audio/eng/mango/leaf.mp3" } },
    fruit: { img: "images/hotspot/mango/fruit.png", audio: { th: "audio/th/mango/fruit.mp3", en: "audio/eng/mango/fruit.mp3" } },
    root: { img: "images/hotspot/mango/root.png", audio: { th: "audio/th/mango/root.mp3", en: "audio/eng/mango/root.mp3" } },
    care: { img: "images/logo-menu/planting.png", audio: { th: "audio/th/mango/care.mp3", en: "audio/eng/mango/care.mp3" } },
  },
  pomelo: {
    trunk: { img: "images/hotspot/pomelo/trunk.png", audio: { th: "audio/th/pomelo/trunk.mp3", en: "audio/eng/pomelo/trunk.mp3" } },
    leaf: { img: "images/hotspot/pomelo/leaf.png", audio: { th: "audio/th/pomelo/leaf.mp3", en: "audio/eng/pomelo/leaf.mp3" } },
    fruit: { img: "images/hotspot/pomelo/fruit.png", audio: { th: "audio/th/pomelo/fruit.mp3", en: "audio/eng/pomelo/fruit.mp3" } },
    root: { img: "images/hotspot/pomelo/root.png", audio: { th: "audio/th/pomelo/root.mp3", en: "audio/eng/pomelo/root.mp3" } },
    care: { img: "images/logo-menu/planting.png", audio: { th: "audio/th/pomelo/care.mp3", en: "audio/eng/pomelo/care.mp3" } },
  },
  sapodilla: {
    trunk: { img: "images/hotspot/sapodilla/trunk.png", audio: { th: "audio/th/sapodilla/trunk.mp3", en: "audio/eng/sapodilla/trunk.mp3" } },
    leaf: { img: "images/hotspot/sapodilla/leaf.png", audio: { th: "audio/th/sapodilla/leaf.mp3", en: "audio/eng/sapodilla/leaf.mp3" } },
    fruit: { img: "images/hotspot/sapodilla/fruit.png", audio: { th: "audio/th/sapodilla/fruit.mp3", en: "audio/eng/sapodilla/fruit.mp3" } },
    root: { img: "images/hotspot/sapodilla/root.png", audio: { th: "audio/th/sapodilla/root.mp3", en: "audio/eng/sapodilla/root.mp3" } },
    care: { img: "images/logo-menu/planting.png", audio: { th: "audio/th/sapodilla/care.mp3", en: "audio/eng/sapodilla/care.mp3" } },
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
    } catch (e) { }
  }
}

function handlePlay() {
  if (hotspotAudio && hotspotAudio.src) {
    hotspotAudio.play().catch(() => { });
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
