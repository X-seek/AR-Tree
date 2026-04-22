const mapContainer = document.getElementById("map-container");
const markersWrap = document.getElementById("markers");
const list = document.getElementById("markerList");

// ✅ เพิ่มรองรับ 2 ภาษา
const markersData = [
  { id: "banana", title: { th: "กล้วย", en: "Banana" }, x: 10, y: 32, model: "models/bnn-v1.glb", page: "index.html" },
  { id: "banana", title: { th: "กล้วย", en: "Banana" }, x: 13, y: 32, model: "models/bnn-v1.glb", page: "index.html" },
  { id: "banana", title: { th: "กล้วย", en: "Banana" }, x: 16, y: 32, model: "models/bnn-v1.glb", page: "index.html" },

  { id: "custard-apple", title: { th: "น้อยหน่า", en: "Custard Apple" }, x: 35, y: 32, model: "models/custard-apple-v1.glb", page: "custard-apple.html" },

  { id: "fig", title: { th: "มะเดื่อ", en: "Fig" }, x: 46, y: 64, model: "models/fig.glb", page: "fig.html" },
  { id: "fig", title: { th: "มะเดื่อ", en: "Fig" }, x: 49, y: 64, model: "models/fig.glb", page: "fig.html" },
  { id: "fig", title: { th: "มะเดื่อ", en: "Fig" }, x: 52, y: 64, model: "models/fig.glb", page: "fig.html" },

  { id: "guava", title: { th: "ฝรั่ง", en: "Guava" }, x: 57, y: 32, model: "models/guava.glb", page: "guava.html" },
  { id: "guava", title: { th: "ฝรั่ง", en: "Guava" }, x: 63, y: 32, model: "models/guava.glb", page: "guava.html" },

  { id: "guava", title: { th: "ฝรั่ง", en: "Guava" }, x: 83, y: 32, model: "models/guava.glb", page: "guava.html" },
  { id: "guava", title: { th: "ฝรั่ง", en: "Guava" }, x: 88, y: 32, model: "models/guava.glb", page: "guava.html" },
  { id: "guava", title: { th: "ฝรั่ง", en: "Guava" }, x: 93, y: 32, model: "models/guava.glb", page: "guava.html" },
  { id: "guava", title: { th: "ฝรั่ง", en: "Guava" }, x: 97, y: 32, model: "models/guava.glb", page: "guava.html" },

  { id: "lime", title: { th: "มะนาว", en: "Lime" }, x: 48, y: 52, model: "models/lime-v1.glb", page: "lime.html" },
  { id: "lime", title: { th: "มะนาว", en: "Lime" }, x: 50, y: 52, model: "models/lime-v1.glb", page: "lime.html" },

  { id: "mango", title: { th: "มะม่วง", en: "Mango" }, x: 43, y: 32, model: "models/mango.glb", page: "mango.html" },

  { id: "longan", title: { th: "ลำไย", en: "Longan" }, x: 47, y: 32, model: "models/longan.glb", page: "longan.html" },

  { id: "pomelo", title: { th: "ส้มโอ", en: "Pomelo" }, x: 24, y: 32, model: "models/pomelo.glb", page: "pomelo.html" },

  { id: "sapodilla", title: { th: "ละมุด", en: "Sapodilla" }, x: 50, y: 32, model: "models/sapodilla.glb", page: "sapodilla.html" }
];

// ✅ ดึงภาษา
function getLang() {
  return localStorage.getItem("lang") || "th";
}

// ✅ สร้าง markers และรายการไม่ซ้ำ
function createMarkers() {
  const addedTitles = new Set();
  const lang = getLang();

  markersData.forEach((m) => {
    const title = m.title[lang];

    // ---------- Marker ----------
    const el = document.createElement("button");
    el.className = "marker";
    el.style.left = m.x + "%";
    el.style.top = m.y + "%";
    el.innerHTML = `
      <img src="images/tree-icons/${m.id}.png" alt="${title}" class="tree-icon">
      <span class="label" data-id="${m.id}">${title}</span>`;
    el.addEventListener("click", () => openModal(m));
    markersWrap.appendChild(el);

    // ---------- List ----------
    if (!addedTitles.has(title)) {
      const li = document.createElement("li");
      li.textContent = title;
      li.dataset.id = m.id;
      li.addEventListener("click", () => openModal(m));
      list.appendChild(li);
      addedTitles.add(title);
    }
  });
}

// ✅ เปิด modal (แก้ภาษา)
function openModal(marker) {
  const modal = document.getElementById("modelModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalModel = document.getElementById("modalModel");
  const openModelPage = document.getElementById("openModelPage");

  const lang = getLang();

  modalTitle.dataset.id = marker.id;
  modalTitle.textContent = marker.title[lang];
  modalModel.src = marker.model;
  modalModel.alt = marker.title[lang];
  openModelPage.href = marker.page;

  modal.setAttribute("aria-hidden", "false");
}

// ==========================
// ที่เหลือไม่แตะ (เหมือนเดิม)
// ==========================

function closeModal() {
  const modal = document.getElementById("modelModal");
  modal.setAttribute("aria-hidden", "true");
}

function bindModal() {
  document.getElementById("modalClose").addEventListener("click", closeModal);
  document.getElementById("closeBtn").addEventListener("click", closeModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

// ==========================
// Zoom & Drag System
// ==========================
let scale = 1;
let originX = 0, originY = 0;
let startX = 0, startY = 0;
let isDragging = false;
let isTouchDragging = false;
let touchStartX = 0, touchStartY = 0;
let lastDist = 0;

function clampPosition() {
  const mapW = mapContainer.offsetWidth * scale;
  const mapH = mapContainer.offsetHeight * scale;
  const viewW = window.innerWidth;
  const viewH = window.innerHeight;
  const maxX = mapW / 2;
  const maxY = mapH / 2;
  originX = Math.min(Math.max(originX, -maxX), maxX);
  originY = Math.min(Math.max(originY, -maxY), maxY);
}

function updateTransform() {
  clampPosition();
  mapContainer.style.transform = `translate(${originX}px, ${originY}px) scale(${scale})`;
}

mapContainer.addEventListener("wheel", (e) => {
  e.preventDefault();
  const zoomSpeed = 0.005;
  scale += e.deltaY < 0 ? zoomSpeed : -zoomSpeed;
  scale = Math.min(Math.max(scale, 1), 10);
  updateTransform();
});

mapContainer.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.clientX - originX;
  startY = e.clientY - originY;
});
window.addEventListener("mouseup", () => (isDragging = false));

window.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  originX = e.clientX - startX;
  originY = e.clientY - startY;
  updateTransform();
});

mapContainer.addEventListener("touchstart", (e) => {
  if (e.touches.length === 1) {
    isTouchDragging = true;
    touchStartX = e.touches[0].clientX - originX;
    touchStartY = e.touches[0].clientY - originY;
  }
  if (e.touches.length === 2) {
    lastDist = getPinchDistance(e);
  }
});

mapContainer.addEventListener("touchmove", (e) => {
  e.preventDefault();
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  if (e.touches.length === 2) {
    const dist = getPinchDistance(e);
    if (isMobile) {
      scale += (dist - lastDist) * 0.005;
      scale = Math.min(Math.max(scale, 1), 18);
    } else {
      scale += (dist - lastDist) * 0.001;
      scale = Math.min(Math.max(scale, 1), 10);
    }
    lastDist = dist;
    updateTransform();
    return;
  }

  if (isTouchDragging && e.touches.length === 1) {
    originX = e.touches[0].clientX - touchStartX;
    originY = e.touches[0].clientY - touchStartY;
    updateTransform();
  }
});

mapContainer.addEventListener("touchend", () => {
  isTouchDragging = false;
  lastDist = 0;
});

function getPinchDistance(e) {
  const dx = e.touches[0].clientX - e.touches[1].clientX;
  const dy = e.touches[0].clientY - e.touches[1].clientY;
  return Math.sqrt(dx * dx + dy * dy);
}

document.addEventListener("DOMContentLoaded", () => {
  createMarkers();
  bindModal();
});

function goBack() {
  if (document.referrer) window.history.back();
  else window.location.href = "index.html";
}