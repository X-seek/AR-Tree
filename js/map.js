/* app.js
   สร้าง marker จาก array (พิกัดเป็น %)
   ปรับตำแหน่งใน array ได้ง่าย ๆ
*/

const markersData = [
  // ตัวอย่าง: เปอร์เซนต์ x (left), y (top) จากมุมบนซ้ายของภาพ map (0-100)
  { id: "bananaPatch", title: "แปลงกล้วย", x: 18, y: 32, model: "Model/banana.glb", page: "index.html" },
  { id: "coconutPatch", title: "แปลงมะพร้าว", x: 38, y: 30, model: "Model/coconut.glb", page: "coconut.html" },
  { id: "custard", title: "น้อยหน่า", x: 58, y: 30, model: "Model/custard-apple.glb", page: "custard-apple.html" },
  { id: "fig", title: "มะเดื่อ", x: 78, y: 30, model: "Model/fig.glb", page: "fig.html" },
  { id: "sugarcane", title: "แปลงอ้อย", x: 86, y: 56, model: "Model/sugarcane.glb", page: "sugarcane.html" },
  { id: "guava", title: "ฝรั่ง", x: 64, y: 58, model: "Model/guava.glb", page: "guava.html" },
  { id: "lime", title: "มะนาว", x: 46, y: 58, model: "Model/lime.glb", page: "lime.html" },
  { id: "sapodilla", title: "ละมุด", x: 26, y: 66, model: "Model/sapodilla.glb", page: "sapodilla.html" }
];

// helper: สร้าง element marker และเพิ่มไปแผนที่
function createMarkers() {
  const markersWrap = document.getElementById("markers");
  const list = document.getElementById("markerList");
  markersData.forEach((m) => {
    // DOM marker
    const el = document.createElement("button");
    el.className = "marker";
    el.dataset.id = m.id;
    el.style.left = m.x + "%";
    el.style.top = m.y + "%";
    el.innerHTML = `<span class="dot"></span>
                    <span class="label">${m.title}</span>`;
    el.addEventListener("click", () => openModal(m));
    markersWrap.appendChild(el);

    // list item
    const li = document.createElement("li");
    li.textContent = m.title;
    li.addEventListener("click", () => {
      // scroll map to approx location (no scroll if not needed) + open modal
      openModal(m);
    });
    list.appendChild(li);
  });
}

// open modal and set model-viewer
function openModal(marker) {
  const modal = document.getElementById("modelModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalModel = document.getElementById("modalModel");
  const openModelPage = document.getElementById("openModelPage");

  modalTitle.textContent = marker.title || "Model";
  modalModel.src = marker.model || "";
  modalModel.alt = marker.title || "";
  openModelPage.href = marker.page || "#";
  modal.setAttribute("aria-hidden", "false");
}

// close modal
function closeModal() {
  const modal = document.getElementById("modelModal");
  const modalModel = document.getElementById("modalModel");
  modal.setAttribute("aria-hidden", "true");
  // stop model loading / reset src to free memory (optional)
  // modalModel.src = "";
}

// bind modal buttons
function bindModal() {
  document.getElementById("modalClose").addEventListener("click", closeModal);
  document.getElementById("closeBtn").addEventListener("click", closeModal);
  // close on ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

// init
document.addEventListener("DOMContentLoaded", () => {
  createMarkers();
  bindModal();
});
