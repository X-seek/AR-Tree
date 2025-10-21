// ปุ่ม AR
const arButton = document.getElementById("ar-button");
const modelViewer = document.getElementById("viewer");

// ตรวจสอบว่าอุปกรณ์รองรับ AR หรือไม่
function checkARSupport() {
  if (!modelViewer.activateAR) {
    console.warn("⚠️ Model Viewer ยังไม่โหลด หรือไม่รองรับฟังก์ชัน activateAR()");
    return false;
  }

  // ตรวจสอบว่าเปิดในมือถือไหม
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  if (!isMobile) {
    console.log("💻 ตรวจพบว่าเป็น Desktop: ปิดปุ่ม AR");
    arButton.style.display = "none";
    return false;
  }

  // ตรวจสอบว่า Browser รองรับ AR mode ไหม
  if (!modelViewer.canActivateAR) {
    // ถ้ายังไม่เคยแจ้งเตือนมาก่อน
    if (!sessionStorage.getItem("arAlertShown")) {
      alert("⚠️ อุปกรณ์นี้ไม่รองรับการเปิดดูใน AR");
      sessionStorage.setItem("arAlertShown", "true");
    }
    return false;
  }

  console.log("✅ อุปกรณ์นี้รองรับ AR");
  return true;
}

// เมื่อกดปุ่ม “ดูใน AR”
arButton.addEventListener("click", () => {
  if (checkARSupport()) {
    console.log("🎯 เปิดโหมด AR...");
    modelViewer.activateAR();
  }
});

// ตรวจสอบตอนโหลดหน้าครั้งแรก
document.addEventListener("DOMContentLoaded", () => {
  checkARSupport();
});
