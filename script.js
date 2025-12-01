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

function renderImages() {
let contentRef = document.getElementById('imgList')
   contentRef.innerHTML = "";
  for (let indexPics = 0; indexPics < pics.length; indexPics++) {
    contentRef.innerHTML += `<img src="${pics[indexPics]}" />`;
  }
}

function templates (index){
  return  `<img src="${pics[indexPics]} "/>`
}


function openDialog(index) {
  dialogRef.showModal();

  }
 const dialogRef = document.getElementById("myDialog");