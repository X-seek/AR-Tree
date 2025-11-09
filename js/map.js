const mapContainer = document.getElementById("map-container");
const markersWrap = document.getElementById("markers");
const list = document.getElementById("markerList");

const markersData = [
  { id: "banana", title: "กล้วย", x: 10, y: 30, model: "models/bnn-v1.glb", page: "index.html" },
  { id: "banana", title: "กล้วย", x: 13, y: 30, model: "models/bnn-v1.glb", page: "index.html" },
  { id: "banana", title: "กล้วย", x: 16, y: 30, model: "models/bnn-v1.glb", page: "index.html" },

  { id: "custard-apple", title: "น้อยหน่า", x: 32, y: 30, model: "models/custard-apple-v1.glb", page: "custard-apple.html" },

  { id: "fig", title: "มะเดื่อ", x: 64, y: 30, model: "models/fig.glb", page: "fig.html" },
  { id: "fig", title: "มะเดื่อ", x: 69, y: 30, model: "models/fig.glb", page: "fig.html" },

  { id: "guava", title: "ฝรั่ง", x: 58, y: 30, model: "models/guava.glb", page: "guava.html" },
  { id: "guava", title: "ฝรั่ง", x: 76, y: 30, model: "models/guava.glb", page: "guava.html" },
  { id: "guava", title: "ฝรั่ง", x: 82, y: 30, model: "models/guava.glb", page: "guava.html" },
  { id: "guava", title: "ฝรั่ง", x: 88, y: 30, model: "models/guava.glb", page: "guava.html" },

  { id: "lime", title: "มะนาว", x: 89, y: 58, model: "models/lime-v1.glb", page: "lime.html" },
  { id: "lime", title: "มะนาว", x: 83, y: 58, model: "models/lime-v1.glb", page: "lime.html" },

  { id: "longan", title: "ลำไย", x: 53, y: 58, model: "models/longan.glb", page: "longan.html" },
  { id: "longan", title: "ลำไย", x: 60, y: 58, model: "models/longan.glb", page: "longan.html" },
  { id: "longan", title: "ลำไย", x: 65, y: 58, model: "models/longan.glb", page: "longan.html" },
  { id: "longan", title: "ลำไย", x: 74, y: 58, model: "models/longan.glb", page: "longan.html" },
  
  { id: "mango", title: "มะม่วง", x: 42, y:30, model: "models/mango.glb", page: "mango.html" },

  { id: "pomelo", title: "ส้มโอ", x: 23, y: 30, model: "models/pomelo.glb", page: "pomelo.html" },

  { id: "sapodilla", title: "ละมุด", x: 50, y: 30, model: "models/sapodilla.glb", page: "sapodilla.html" }
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

// ✅ เพิ่ม zoom/drag ให้ map
let scale = 1;
let originX = 0, originY = 0;
let startX = 0, startY = 0;
let isDragging = false;

function updateTransform() {
  mapContainer.style.transform = `translate(${originX}px, ${originY}px) scale(${scale})`;
}

mapContainer.addEventListener("wheel", (e) => {
  e.preventDefault();
  const zoomSpeed = 0.1;
  scale += e.deltaY < 0 ? zoomSpeed : -zoomSpeed;
  scale = Math.min(Math.max(scale, 1), 4);
  updateTransform();
});

mapContainer.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.clientX - originX;
  startY = e.clientY - originY;
});
window.addEventListener("mouseup", () => (isDragging = false));

let lastX = 0, lastY = 0;

window.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  const dx = e.clientX - startX;
  const dy = e.clientY - startY;
  originX = dx;
  originY = dy;
  updateTransform();
  lastX = dx;
  lastY = dy;
});

let lastDist = 0;
mapContainer.addEventListener("touchstart", (e) => {
  if (e.touches.length === 2) lastDist = getPinchDistance(e);
});
mapContainer.addEventListener("touchmove", (e) => {
  e.preventDefault();
  if (e.touches.length === 2) {
    const dist = getPinchDistance(e);
    const zoomSpeed = 0.001;
    scale += (dist - lastDist) * zoomSpeed;
    scale = Math.min(Math.max(scale, 1), 10);
    lastDist = dist;
  }
  updateTransform();
});
mapContainer.addEventListener("touchend", () => (lastDist = 0));

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
