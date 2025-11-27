(function () {
  const translations = {
    th: {
      page: {
        title: "แผนผังไร่ — ลุงสายันต์",
        hint: "คลิกที่จุด (mark) เพื่อดูโมเดลของต้นไม้/แปลงต่างๆ",
      },
      ui: {
        back: "← ย้อนกลับ",
        list: "รายการตำแหน่ง",
        open: "เปิดหน้าโมเดล",
        close: "ปิด",
      },
      modalTitle: {
        banana: "กล้วย",
        "custard-apple": "น้อยหน่า",
        fig: "มะเดื่อ",
        guava: "ฝรั่ง",
        lime: "มะนาว",
        longan: "ลำไย",
        mango: "มะม่วง",
        pomelo: "ส้มโอ",
        sapodilla: "ละมุด",
      },
    },

    en: {
      page: {
        title: "Farm Map — Uncle Sayan",
        hint: "Click a mark to view the 3D tree or field model.",
      },
      ui: {
        back: "← Back",
        list: "Marker List",
        open: "Open Model Page",
        close: "Close",
      },
      modalTitle: {
        banana: "Banana",
        "custard-apple": "Custard Apple",
        fig: "Fig",
        guava: "Guava",
        lime: "Lime",
        longan: "Longan",
        mango: "Mango",
        pomelo: "Pomelo",
        sapodilla: "Sapodilla",
      },
    },
  };

  let currentLang = localStorage.getItem("lang") || "th";

  const get = (obj, path) =>
    path.split(".").reduce((o, k) => (o && o[k] != null ? o[k] : undefined), obj);

  // ⭐ สลับรูปแผนที่ตามภาษา
  function updateMapImage(lang) {
    const img = document.getElementById("farmMap");
    if (!img) return;

    img.src =
      lang === "en"
        ? "images/map/map-en.jpg"
        : "images/map/map-th.jpg";
  }

  // ============================
  //  ปุ่มเปลี่ยนภาษา
  // ============================
  function initLangToggle() {
    const container = document.getElementById("change-lang-container");
    if (!container) return;

    container.innerHTML = `
      <div class="lang-container">
        <label class="lang-toggle">
          <input type="checkbox" id="lang-check" hidden ${currentLang === "en" ? "checked" : ""}>
          <div class="lang-slider">
            <img src="images/flags/th.png" class="flag flag-th" alt="TH">
            <img src="images/flags/en.png" class="flag flag-en" alt="EN">
          </div>
        </label>
      </div>
    `;

    const check = document.getElementById("lang-check");
    check.addEventListener("change", () => {
      setLanguage(check.checked ? "en" : "th");
    });
  }

  // ============================
  //  ฟังก์ชันแปลทั้งหมดในหน้า
  // ============================
  function translatePage() {
    document.title = get(translations[currentLang], "page.title");

    const h1 = document.querySelector("h1");
    if (h1) h1.textContent = get(translations[currentLang], "page.title");

    const hint = document.querySelector(".hint");
    if (hint) hint.textContent = get(translations[currentLang], "page.hint");

    const backBtn = document.querySelector(".back-btn");
    if (backBtn) backBtn.textContent = get(translations[currentLang], "ui.back");

    const sidebarTitle = document.querySelector("aside h3");
    if (sidebarTitle) sidebarTitle.textContent = get(translations[currentLang], "ui.list");

    const openBtn = document.getElementById("openModelPage");
    if (openBtn) openBtn.textContent = get(translations[currentLang], "ui.open");

    const closeBtn = document.getElementById("closeBtn");
    if (closeBtn) closeBtn.textContent = get(translations[currentLang], "ui.close");

    // ⭐ แปล modalTitle
    const modalTitle = document.getElementById("modalTitle");
    if (modalTitle && modalTitle.dataset.id) {
      const text = get(translations[currentLang], `modalTitle.${modalTitle.dataset.id}`);
      if (text) modalTitle.textContent = text;
    }

    // ⭐ แปลรายการตำแหน่ง (sidebar list)
    const listItems = document.querySelectorAll("#markerList li");
    listItems.forEach((li) => {
      const id = li.dataset.id;
      const text = get(translations[currentLang], `modalTitle.${id}`);
      if (text) li.textContent = text;
    });

    // ⭐ แปล label บน marker
    const labels = document.querySelectorAll(".marker .label");
    labels.forEach((label) => {
      const id = label.dataset.id;
      const text = get(translations[currentLang], `modalTitle.${id}`);
      if (text) label.textContent = text;
    });

    // ⭐ เปลี่ยนภาพแผนที่
    updateMapImage(currentLang);
  }

  // ============================
  //  เปลี่ยนภาษา
  // ============================
  function setLanguage(lang) {
    if (!translations[lang]) return;

    currentLang = lang;
    localStorage.setItem("lang", lang);

    translatePage();
  }

  window.mapLang = {
    setLanguage,
    getCurrentLang: () => currentLang,
    translatePage,
  };

  document.addEventListener("DOMContentLoaded", () => {
    initLangToggle();
    translatePage();
  });
})();
