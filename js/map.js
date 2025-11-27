const mapContainer = document.getElementById("map-container");
const markersWrap = document.getElementById("markers");
const list = document.getElementById("markerList");

const markersData = [
  { id: "banana", title: "กล้วย", x: 10, y: 32, model: "models/bnn-v1.glb", page: "index.html" },
  { id: "banana", title: "กล้วย", x: 13, y: 32, model: "models/bnn-v1.glb", page: "index.html" },
  { id: "banana", title: "กล้วย", x: 16, y: 32, model: "models/bnn-v1.glb", page: "index.html" },

  { id: "custard-apple", title: "น้อยหน่า", x: 35, y: 32, model: "models/custard-apple-v1.glb", page: "custard-apple.html" },

  { id: "fig", title: "มะเดื่อ", x: 46, y: 64, model: "models/fig.glb", page: "fig.html" },
  { id: "fig", title: "มะเดื่อ", x: 49, y: 64, model: "models/fig.glb", page: "fig.html" },
  { id: "fig", title: "มะเดื่อ", x: 52, y: 64, model: "models/fig.glb", page: "fig.html" },

  { id: "guava", title: "ฝรั่ง", x: 57, y: 32, model: "models/guava.glb", page: "guava.html" },
  { id: "guava", title: "ฝรั่ง", x: 63, y: 32, model: "models/guava.glb", page: "guava.html" },

  { id: "guava", title: "ฝรั่ง", x: 83, y: 32, model: "models/guava.glb", page: "guava.html" },
  { id: "guava", title: "ฝรั่ง", x: 88, y: 32, model: "models/guava.glb", page: "guava.html" },
  { id: "guava", title: "ฝรั่ง", x: 93, y: 32, model: "models/guava.glb", page: "guava.html" },
  { id: "guava", title: "ฝรั่ง", x: 97, y: 32, model: "models/guava.glb", page: "guava.html" },
  
  { id: "lime", title: "มะนาว", x: 48, y:52, model: "models/lime-v1.glb", page: "lime.html" },
  { id: "lime", title: "มะนาว", x: 50, y:52, model: "models/lime-v1.glb", page: "lime.html" },
 
  { id: "mango", title: "มะม่วง", x: 43, y:32, model: "models/mango.glb", page: "mango.html" },

  { id: "longan", title: "ลำไย", x: 47, y: 32, model: "models/longan.glb", page: "longan.html" },

  { id: "pomelo", title: "ส้มโอ", x: 24, y: 32, model: "models/pomelo.glb", page: "pomelo.html" },

  { id: "sapodilla", title: "ละมุด", x: 50, y: 32, model: "models/sapodilla.glb", page: "sapodilla.html" }
];

// ✅ สร้าง markers และรายการไม่ซ้ำ
function createMarkers() {
  const addedTitles = new Set(); // เก็บชื่อที่เคยเพิ่มในรายการแล้ว

  markersData.forEach((m) => {
    // ---------- สร้าง marker บนแผนที่ ----------
    const el = document.createElement("button");
    el.className = "marker";
    el.style.left = m.x + "%";
    el.style.top = m.y + "%";
    el.innerHTML = `
     <img src="images/tree-icons/${m.id}.png" alt="${m.title}" class="tree-icon">
  <span class="label" data-id="${m.id}">${m.title}</span>`;
    el.addEventListener("click", () => openModal(m));
    markersWrap.appendChild(el);

    // ---------- สร้างรายการตำแหน่ง (เฉพาะชื่อที่ยังไม่เคยมี) ----------
    if (!addedTitles.has(m.title)) {
      const li = document.createElement("li");
      li.textContent = m.title;
      li.dataset.id = m.id;
      li.addEventListener("click", () => openModal(m));
      list.appendChild(li);
      addedTitles.add(m.title); // บันทึกว่าชื่อนี้มีแล้ว
    }
  });
}

// ✅ เปิด modal
function openModal(marker) {
  const modal = document.getElementById("modelModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalModel = document.getElementById("modalModel");
  const openModelPage = document.getElementById("openModelPage");

modalTitle.dataset.id = marker.id;
modalTitle.textContent = marker.title;
  modalModel.src = marker.model;
  modalModel.alt = marker.title;
  openModelPage.href = marker.page;
  modal.setAttribute("aria-hidden", "false");
}

// ✅ ปิด modal
function closeModal() {
  const modal = document.getElementById("modelModal");
  modal.setAttribute("aria-hidden", "true");
}

// ✅ ผูก event ปุ่มปิด
function bindModal() {
  document.getElementById("modalClose").addEventListener("click", closeModal);
  document.getElementById("closeBtn").addEventListener("click", closeModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

// ==========================
// Zoom & Drag System (PC + Mobile)
// ==========================
let scale = 1;
let originX = 0, originY = 0;
let startX = 0, startY = 0;
let isDragging = false;
let isTouchDragging = false;
let touchStartX = 0, touchStartY = 0;
let lastDist = 0;

// จำกัดไม่ให้ภาพหลุดจากขอบจนเลื่อนต่อไม่ได้
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

// ---------------- PC Zoom ----------------
mapContainer.addEventListener("wheel", (e) => {
  e.preventDefault();
  const zoomSpeed = 0.005;

  scale += e.deltaY < 0 ? zoomSpeed : -zoomSpeed;
  scale = Math.min(Math.max(scale, 1), 10);

  updateTransform();
});

// ---------------- PC Drag ----------------
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

// ---------------- Touch Start ----------------
mapContainer.addEventListener("touchstart", (e) => {
  if (e.touches.length === 1) {
    // Start dragging
    isTouchDragging = true;
    touchStartX = e.touches[0].clientX - originX;
    touchStartY = e.touches[0].clientY - originY;
  }

  if (e.touches.length === 2) {
    // Start pinch zoom
    lastDist = getPinchDistance(e);
  }
});

// ---------------- Touch Move ----------------
mapContainer.addEventListener("touchmove", (e) => {
  e.preventDefault();

  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  // --- Pinch Zoom ---
  if (e.touches.length === 2) {
    const dist = getPinchDistance(e);

    if (isMobile) {
      scale += (dist - lastDist) * 0.005; // มือถือ ซูมลื่นขึ้น
      scale = Math.min(Math.max(scale, 1), 18); // ซูมได้ลึกมาก
    } else {
      scale += (dist - lastDist) * 0.001; // PC
      scale = Math.min(Math.max(scale, 1), 10);
    }

    lastDist = dist;
    updateTransform();
    return;
  }

  // --- Drag with 1 finger ---
  if (isTouchDragging && e.touches.length === 1) {
    originX = e.touches[0].clientX - touchStartX;
    originY = e.touches[0].clientY - touchStartY;
    updateTransform();
  }
});

// ---------------- Touch End ----------------
mapContainer.addEventListener("touchend", () => {
  isTouchDragging = false;
  lastDist = 0;
});

// ---------------- Utility ----------------
function getPinchDistance(e) {
  const dx = e.touches[0].clientX - e.touches[1].clientX;
  const dy = e.touches[0].clientY - e.touches[1].clientY;
  return Math.sqrt(dx * dx + dy * dy);
}


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
