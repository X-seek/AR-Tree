  const hotspots = document.querySelectorAll('model-viewer button[slot^="hotspot"]');
  const hotspotUI = document.getElementById('hotspot-ui');
  const hotspotText = document.getElementById('hotspot-text');
  const hotspotAudio = document.getElementById('hotspot-audio');
  const playBtn = document.getElementById('play-sound');
  const closeBtn = document.getElementById('close-ui');

  // ข้อมูลแต่ละ Hotspot
  const hotspotData = {
    "hotspot-1": { text: "นี่คือลำต้นของต้นกล้วย", audio: "trunk.mp3" },
    "hotspot-2": { text: "นี่คือใบกล้วย", audio: "leaves.mp3" },
    "hotspot-3": { text: "นี่คือวิธีดูแลต้นกล้วย", audio: "care.mp3" },
  };

  // เปิด Hotspot UI เมื่อคลิกหรือแตะ
  hotspots.forEach(btn => {
    ["click", "touchstart"].forEach(evt => {
      btn.addEventListener(evt, (e) => {
        e.stopPropagation(); // ป้องกัน event ซ้อน
        const slot = btn.getAttribute('slot');
        hotspotText.textContent = hotspotData[slot].text;
        hotspotAudio.src = hotspotData[slot].audio;
        hotspotUI.classList.add('active'); // ใช้ class active แทน style.display
      });
    });
  });

  // ปิด UI
  closeBtn.addEventListener('click', () => {
    hotspotUI.classList.remove('active');
    hotspotAudio.pause();
    hotspotAudio.currentTime = 0;
  });

  // เล่นเสียง
  playBtn.addEventListener('click', () => {
    hotspotAudio.play();
  });

  // ฟังข้อมูล (ปุ่มหลัก)
  function playInfo() {
    document.getElementById("infoSound").play();
  }

  // เปลี่ยนโมเดล (ตัวอย่าง)
  function switchModel() {
    const viewer = document.getElementById("viewer");
    viewer.src = viewer.src.includes("banana.glb") ? "banana2.glb" : "banana.glb";
  }

  // ปิด Hotspot UI หากคลิกรอบนอก popup
  document.addEventListener('click', (e) => {
    if (!hotspotUI.contains(e.target)) {
      hotspotUI.classList.remove('active');
      hotspotAudio.pause();
      hotspotAudio.currentTime = 0;
    }
  });