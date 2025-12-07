let pics = [
  "./Img2/Schaf.jpg",
  "./Img2/Viper-Schlange.jpg",
  "./Img2/Wolf.jpg",
  "./Img2/Husky.jpg",
  "./Img2/Löwe.png",
  "./Img2/Eule.jpg",
  "./Img2/Marienkäfer - Kopie.jpg",
  "./Img2/Giraffe - Kopie.jpg",
  "./Img2/brown-bear-892232_1280.jpg",
  "./Img2/Schmetterling.jpg",
];
let currentIndex = 0;

let animalNames = [
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

let numbers = ["1/10", "2/10", "3/10", "4/10", "5/10", "6/10", "7/10", "8/10", "9/10", "10/10"];

function renderImages() {
  let contentRef = document.getElementById("imgList");
  contentRef.innerHTML = "";
  for (let indexPics = 0; indexPics < pics.length; indexPics++) {
    contentRef.innerHTML += imgTemplates(indexPics);
  }
}

function imgTemplates(indexPics) {
  return `<img class="gallery-img "
  src="${pics[indexPics]} "
  onclick="openDialog(${indexPics})"
  />`;
}

function openDialog(indexPics) {
  const dialogRef = document.getElementById("myDialog");
  dialogRef.showModal();
  const modalPicture = document.getElementById("modal-picture");
  currentIndex = indexPics;
  modalPicture.src = pics[currentIndex];
  const animalRef = document.getElementById("animals-names");
  animalRef.innerHTML = animalNames[currentIndex];
  const numbersRef = document.getElementById("site-number");
  numbersRef.innerHTML = numbers[currentIndex];
}
function nextPicture() {
  const modalPicture = document.getElementById("modal-picture");
  const animalRef = document.getElementById("animals-names");
  const numbersRef = document.getElementById("site-number");
  currentIndex++;
  if (currentIndex >= pics.length) currentIndex = 0;
  modalPicture.src = pics[currentIndex];
  animalRef.innerHTML = animalNames[currentIndex];

  numbersRef.innerHTML = numbers[currentIndex];
}

function previousPicture() {
  const modalPicture = document.getElementById("modal-picture");
  const animalRef = document.getElementById("animals-names");
  const numbersRef = document.getElementById("site-number");
  currentIndex--;
  if (currentIndex < 0) currentIndex = 0;
  modalPicture.src = pics[currentIndex];
  animalRef.innerHTML = animalNames[currentIndex];

  numbersRef.innerHTML = numbers[currentIndex];
}

// function nextPicture() {
//   const PictureRef = document.getElementById("weiter");
//   PictureRef.innerHTML = "";

//   while (pics < pics.length) {
//     PictureRef.innerHTML += renderImages(indexPics);
//     pics++;
//   }
// }

// // function nextPicture(){
// //  PictureRef.innerHTML+= imgTemplates(indexPics);
// // }
