const pics = [
  "./Img2/Schaf.jpg",
  "./Img2/Viper-Schlange.jpg",
  "./Img2/Wolf.jpg",
  "./Img2/Husky.jpg",
  "./Img2/Löwe.jpg",
  "./Img2/Eule.jpg",
  "./Img2/Marienkäfer - Kopie.jpg",
  "./Img2/Giraffe - Kopie.jpg",
  "./Img2/brown-bear-892232_1280.jpg",
  "./Img2/Schmetterling.jpg",
];

const altPics =[
  "Schafsherde",
  "Schlange auf einem Ast",
  "Wolf",
  "Husky",
  "Löwe",
  "Eule",
  "Marienkäfer",
  "Giraffe",
  "Braunbär",
  "Schmetterling",
] 

let currentIndex = 0;

const animalNames = [
  "Schaf",
  "Schlange",
  "Wolf",
  "Husky",
  "Löwe",
  "Eule",
  "Marienkäfer",
  "Giraffe",
  "Bär",
  "Schmetterling",
];

let numbers = [
  "1/10",
  "2/10",
  "3/10",
  "4/10",
  "5/10",
  "6/10",
  "7/10",
  "8/10",
  "9/10",
  "10/10",
];

function renderImages() {
  let contentRef = document.getElementById("gallery-list");
  contentRef.innerHTML = "";
  for (let indexPics = 0; indexPics < pics.length; indexPics++) {
    contentRef.innerHTML += imgTemplates(indexPics);
  }
};

function imgTemplates(indexPics) {
  return `
    <button onclick="openDialog(${indexPics})" class="img-btn">
      <img class="gallery-img" src="${pics[indexPics]}" alt="${altPics[indexPics]}"/>
    </button>
  `;
};


function openDialog(indexPics) {
  const dialogRef = document.getElementById("dialog-photo");
  dialogRef.showModal();
  const modalPicture = document.getElementById("dialog-image-src");
  currentIndex = indexPics;
  modalPicture.src = pics[currentIndex];
  const animalRef = document.getElementById("dialog-title-text");
  animalRef.innerHTML = animalNames[currentIndex];
  const numbersRef = document.getElementById("dialog-index");
  numbersRef.innerHTML = numbers[currentIndex];
  document.getElementsByTagName("body")[0].classList.add('overflow-y-hidden');
};


function nextPicture() {
  const modalPicture = document.getElementById("dialog-image-src");
  const animalRef = document.getElementById("dialog-title-text");
  const numbersRef = document.getElementById("dialog-index");
  currentIndex++;

  if (currentIndex >= pics.length) currentIndex = 0;
  modalPicture.src = pics[currentIndex];
  animalRef.innerHTML = animalNames[currentIndex];
  numbersRef.innerHTML = numbers[currentIndex];
};


function previousPicture() {
  const modalPicture = document.getElementById("dialog-image-src");
  const animalRef = document.getElementById("dialog-title-text");
  const numbersRef = document.getElementById("dialog-index");
  currentIndex--;

  if (currentIndex < 0) currentIndex = pics.length - 1;
  modalPicture.src = pics[currentIndex];
  animalRef.innerHTML = animalNames[currentIndex];
  numbersRef.innerHTML = numbers[currentIndex];
};


function closeDialog() {
  const closeRef = document.getElementById("dialog-photo");
  closeRef.close();
  document.getElementsByTagName("body")[0].classList.remove('overflow-y-hidden');
};


function prevBubbiling(event) {
  event.stopPropagation(event);
};
