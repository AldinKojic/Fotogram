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
"./Img2/Adler.jpg"
]

function showpic() {
  let contentRef = document.getElementById('imgList');
  
 for (let indexPics = 0; indexPics < pics.length; indexPics++) {
  const element = pics[indexPics];
    const img = document.createElement("img");
    
    img.src = element;
    contentRef.appendChild(img);
    
 }
 
}
showpic();


function openDialog() {
  const dialog = document.getElementById("dialogImage")
  const dialogImg = document.getElementById("imageDialog")

  
}

