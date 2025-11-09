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
      items: {
        banana: "กล้วย",
        'custard-apple': "น้อยหน่า",
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
      items: {
        banana: "Banana",
        'custard-apple': "Custard Apple",
        fig: "fig",
        guava: "Guava",
        lime: "Lime",
        longan: "longan",
        mango: "Mango",
        pomelo: "Pomelo",
        sapodilla: "Sapodilla",
      },
    },
  };

  let currentLang = localStorage.getItem("lang") || "th";

  const get = (obj, path) =>
    path.split(".").reduce((o, k) => (o && o[k] != null ? o[k] : undefined), obj);

  // ✅ สร้างปุ่มเปลี่ยนภาษา (ธงชาติ)
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

  // ✅ แปลข้อความในหน้า
  function translatePage() {
    document.title = get(translations[currentLang], "page.title");
    document.querySelector("h1").textContent = get(translations[currentLang], "page.title");
    document.querySelector(".hint").textContent = get(translations[currentLang], "page.hint");

    const backBtn = document.querySelector(".back-btn");
    if (backBtn) backBtn.textContent = get(translations[currentLang], "ui.back");

    const sidebarTitle = document.querySelector("aside h3");
    if (sidebarTitle) sidebarTitle.textContent = get(translations[currentLang], "ui.list");

    const openBtn = document.getElementById("openModelPage");
    if (openBtn) openBtn.textContent = get(translations[currentLang], "ui.open");

    const closeBtn = document.getElementById("closeBtn");
    if (closeBtn) closeBtn.textContent = get(translations[currentLang], "ui.close");

    // ✅ แปลชื่อในรายการตำแหน่ง
    const listItems = document.querySelectorAll("#markerList li");
    listItems.forEach((li) => {
      const id = li.dataset.id;
      const name = get(translations[currentLang], `items.${id}`);
      if (name) li.textContent = name;
    });

    // ✅ แปล label บน marker ด้วย
    const markers = document.querySelectorAll(".marker .label");
    markers.forEach((label) => {
      const id = label.dataset.id;
      const name = get(translations[currentLang], `items.${id}`);
      if (name) label.textContent = name;
    });
  }

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
