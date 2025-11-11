// Elemente referenzieren
const modal = document.getElementById("myModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");
const counterEl = document.getElementById("whichPic");
const prevBtn = document.querySelector(".btn-prev");
const nextBtn = document.querySelector(".btn-next");

// Alle Galerie-Bilder einsammeln
const images = Array.from(document.querySelectorAll(".gallery-img"));
let currentIndex = 0;

// Anzeige im Modal aktualisieren
function updateModal() {
  const img = images[currentIndex];
  modalImg.src = img.src;
  modalImg.alt = img.alt || "";
  counterEl.textContent = `${currentIndex + 1}/${images.length}`;

  // optionales Preloading für flüssigen Wechsel
  const nextIdx = (currentIndex + 1) % images.length;
  const prevIdx = (currentIndex - 1 + images.length) % images.length;
  new Image().src = images[nextIdx].src;
  new Image().src = images[prevIdx].src;
}

// Modal öffnen mit gewähltem Index
function openModal(index) {
  currentIndex = index;
  updateModal();
  modal.style.display = "block";
  modal.setAttribute("aria-hidden", "false");
}

// Modal schließen
function closeModal() {
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
}

// Klick-Events für alle Thumbnails
images.forEach((img, idx) => {
  img.addEventListener("click", () => openModal(idx));
});

// Weiter / Zurück
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateModal();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateModal();
});

// Schließen (X), Klick auf Hintergrund, und Tastatur
closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (modal.style.display === "block") {
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowRight") nextBtn.click();
    if (e.key === "ArrowLeft") prevBtn.click();
  }
});
