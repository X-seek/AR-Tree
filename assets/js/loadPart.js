async function loadPart(id, file) {
  try {
    const res = await fetch(file);
    if (!res.ok) throw new Error("ไม่พบไฟล์ " + file);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;
  } catch (err) {
    console.error("โหลด fragment ไม่ได้:", err);
  }
}
