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
    leaf: { img: "images/hotspot/banana/leaf.png", audio: { th: "audio/th/banana/leaf_th.mp3", en: "audio/eng/banana/leaf_en.mp3" } },
    fruit: { img: "images/hotspot/banana/fruit.png", audio: { th: "audio/th/banana/fruit_th.mp3", en: "audio/eng/banana/fruit_en.mp3" } },
    root: { img: "images/hotspot/banana/root.png", audio: { th: "audio/th/banana/root_th.mp3", en: "audio/eng/banana/root_en.mp3" } },
    care: { img: "images/logo-menu/planting.png", audio: { th: "audio/th/banana/care_th.mp3", en: "audio/eng/banana/care_en.mp3" } },
  },
  coconut: {
    trunk: { img: "images/hotspot/coconut/trunk.png", audio: { th: "audio/th/coconut/trunk_th.mp3", en: "audio/eng/coconut/trunk_en.mp3" } },
    leaf: { img: "images/hotspot/coconut/leaf.png", audio: { th: "audio/th/coconut/leaf_th.mp3", en: "audio/eng/coconut/leaf_en.mp3" } },
    fruit: { img: "images/hotspot/coconut/fruit.png", audio: { th: "audio/th/coconut/fruit_th.mp3", en: "audio/eng/coconut/fruit_en.mp3" } },
    root: { img: "images/hotspot/coconut/root.png", audio: { th: "audio/th/coconut/root_th.mp3", en: "audio/eng/coconut/root_en.mp3" } },
    care: { img: "images/logo-menu/planting.png", audio: { th: "audio/th/coconut/care_th.mp3", en: "audio/eng/coconut/care_en.mp3" } },
  },
  "custard-apple": {
    trunk: { img: "images/hotspot/custard-apple/trunk.png", audio: { th: "audio/th/custard-apple/trunk_th.mp3", en: "audio/eng/custard-apple/trunk_en.mp3" } },
    leaf: { img: "images/hotspot/custard-apple/leaf.png", audio: { th: "audio/th/custard-apple/leaf_th.mp3", en: "audio/eng/custard-apple/leaf_en.mp3" } },
    fruit: { img: "images/hotspot/custard-apple/fruit.png", audio: { th: "audio/th/custard-apple/fruit_th.mp3", en: "audio/eng/custard-apple/fruit_en.mp3" } },
    root: { img: "images/hotspot/custard-apple/root.png", audio: { th: "audio/th/custard-apple/root_th.mp3", en: "audio/eng/custard-apple/root_en.mp3" } },
    care: { img: "images/logo-menu/planting.png", audio: { th: "audio/th/custard-apple/care_th.mp3", en: "audio/eng/custard-apple/care_en.mp3" } },
  },
  fig: {
    trunk: { img: "images/hotspot/fig/trunk.png", audio: { th: "audio/th/fig/trunk_th.mp3", en: "audio/eng/fig/trunk_en.mp3" } },
    leaf: { img: "images/hotspot/fig/leaf.png", audio: { th: "audio/th/fig/leaf_th.mp3", en: "audio/eng/fig/leaf_en.mp3" } },
    fruit: { img: "images/hotspot/fig/fruit.png", audio: { th: "audio/th/fig/fruit_th.mp3", en: "audio/eng/fig/fruit_en.mp3" } },
    root: { img: "images/hotspot/fig/root.png", audio: { th: "audio/th/fig/root_th.mp3", en: "audio/eng/fig/root_en.mp3" } },
    care: { img: "images/logo-menu/planting.png", audio: { th: "audio/th/fig/care_th.mp3", en: "audio/eng/fig/care_en.mp3" } },
  },
  guava: {
    trunk: { img: "images/hotspot/guava/trunk.png", audio: { th: "audio/th/guava/trunk_th.mp3", en: "audio/eng/guava/trunk_en.mp3" } },
    leaf: { img: "images/hotspot/guava/leaf.png", audio: { th: "audio/th/guava/leaf_th.mp3", en: "audio/eng/guava/leaf_en.mp3" } },
    fruit: { img: "images/hotspot/guava/fruit.png", audio: { th: "audio/th/guava/fruit_th.mp3", en: "audio/eng/guava/fruit_en.mp3" } },
    root: { img: "images/hotspot/guava/root.png", audio: { th: "audio/th/guava/root_th.mp3", en: "audio/eng/guava/root_en.mp3" } },
    care: { img: "images/logo-menu/planting.png", audio: { th: "audio/th/guava/care_th.mp3", en: "audio/eng/guava/care_en.mp3" } },
  },
  lime: {
    trunk: { img: "images/hotspot/lime/trunk.png", audio: { th: "audio/th/lime/trunk_th.mp3", en: "audio/eng/lime/trunk_en.mp3" } },
    leaf: { img: "images/hotspot/lime/leaf.png", audio: { th: "audio/th/lime/leaf_th.mp3", en: "audio/eng/lime/leaf_en.mp3" } },
    fruit: { img: "images/hotspot/lime/fruit.png", audio: { th: "audio/th/lime/fruit_th.mp3", en: "audio/eng/lime/fruit_en.mp3" } },
    root: { img: "images/hotspot/lime/root.png", audio: { th: "audio/th/lime/root_th.mp3", en: "audio/eng/lime/root_en.mp3" } },
    care: { img: "images/logo-menu/planting.png", audio: { th: "audio/th/lime/care_th.mp3", en: "audio/eng/lime/care_en.mp3" } },
  },
  longan: {
    trunk: { img: "images/hotspot/longan/trunk.png", audio: { th: "audio/th/longan/trunk_th.mp3", en: "audio/eng/longan/trunk_en.mp3" } },
    leaf: { img: "images/hotspot/longan/leaf.png", audio: { th: "audio/th/longan/leaf_th.mp3", en: "audio/eng/longan/leaf_en.mp3" } },
    fruit: { img: "images/hotspot/longan/fruit.png", audio: { th: "audio/th/longan/fruit_th.mp3", en: "audio/eng/longan/fruit_en.mp3" } },
    root: { img: "images/hotspot/longan/root.png", audio: { th: "audio/th/longan/root_th.mp3", en: "audio/eng/longan/root_en.mp3" } },
    care: { img: "images/logo-menu/planting.png", audio: { th: "audio/th/longan/care_th.mp3", en: "audio/eng/longan/care_en.mp3" } },
  },
  mango: {
    trunk: { img: "images/hotspot/mango/trunk.png", audio: { th: "audio/th/mango/trunk_th.mp3", en: "audio/eng/mango/trunk_en.mp3" } },
    leaf: { img: "images/hotspot/mango/leaf.png", audio: { th: "audio/th/mango/leaf_th.mp3", en: "audio/eng/mango/leaf_en.mp3" } },
    fruit: { img: "images/hotspot/mango/fruit.png", audio: { th: "audio/th/mango/fruit_th.mp3", en: "audio/eng/mango/fruit_en.mp3" } },
    root: { img: "images/hotspot/mango/root.png", audio: { th: "audio/th/mango/root_th.mp3", en: "audio/eng/mango/root_en.mp3" } },
    care: { img: "images/logo-menu/planting.png", audio: { th: "audio/th/mango/care_th.mp3", en: "audio/eng/mango/care_en.mp3" } },
  },
  pomelo: {
    trunk: { img: "images/hotspot/pomelo/trunk.png", audio: { th: "audio/th/pomelo/trunk_th.mp3", en: "audio/eng/pomelo/trunk_en.mp3" } },
    leaf: { img: "images/hotspot/pomelo/leaf.png", audio: { th: "audio/th/pomelo/leaf_th.mp3", en: "audio/eng/pomelo/leaf_en.mp3" } },
    fruit: { img: "images/hotspot/pomelo/fruit.png", audio: { th: "audio/th/pomelo/fruit_th.mp3", en: "audio/eng/pomelo/fruit_en.mp3" } },
    root: { img: "images/hotspot/pomelo/root.png", audio: { th: "audio/th/pomelo/root_th.mp3", en: "audio/eng/pomelo/root_en.mp3" } },
    care: { img: "images/logo-menu/planting.png", audio: { th: "audio/th/pomelo/care_th.mp3", en: "audio/eng/pomelo/care_en.mp3" } },
  },
  sapodilla: {
    trunk: { img: "images/hotspot/sapodilla/trunk.png", audio: { th: "audio/th/sapodilla/trunk_th.mp3", en: "audio/eng/sapodilla/trunk_en.mp3" } },
    leaf: { img: "images/hotspot/sapodilla/leaf.png", audio: { th: "audio/th/sapodilla/leaf_th.mp3", en: "audio/eng/sapodilla/leaf_en.mp3" } },
    fruit: { img: "images/hotspot/sapodilla/fruit.png", audio: { th: "audio/th/sapodilla/fruit_th.mp3", en: "audio/eng/sapodilla/fruit_en.mp3" } },
    root: { img: "images/hotspot/sapodilla/root.png", audio: { th: "audio/th/sapodilla/root_th.mp3", en: "audio/eng/sapodilla/root_en.mp3" } },
    care: { img: "images/logo-menu/planting.png", audio: { th: "audio/th/sapodilla/care_th.mp3", en: "audio/eng/sapodilla/care_en.mp3" } },
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


const menu = document.getElementById("hotspotMenu");
// --- ใช้คลิก ---
menu.addEventListener("click", (e) => {
  if (e.target.closest(".submenu")) return;
  menu.classList.toggle("show");
});

//  --- ถ้าอยากใช้ hover แทน click (เลือกอย่างใดอย่างหนึ่งเท่านั้น) ---
menu.addEventListener("mouseenter", () => menu.classList.add("show"));
menu.addEventListener("mouseleave", () => menu.classList.remove("show"));


// =================== Init ===================
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bindElements);
} else {
  bindElements();
}

// =================== Export ===================
window._menuHotspot = {
  bindElements,
  showHotspot
};
