let pics = [
  "./Img2/Schaf.jpg" ,
  "./Img2/Viper-Schlange.jpg" ,
  "./Img2/Wolf.jpg" ,
"./Img2/Husky.jpg" ,
"./Img2/Löwe.png" ,
"./Img2/Eule.jpg" ,
"./Img2/Marienkäfer - Kopie.jpg" ,
"./Img2/Giraffe - Kopie.jpg" ,
"./Img2/brown-bear-892232_1280.jpg" ,
"./Img2/Schmetterling.jpg" 
]


let html = "";

for (let i = 0; i < pics.length; i++) {
  html += `<img src="${pics[i]}" />`;
}

document.getElementById("imgList").innerHTML = html;


let dialog ="";


for (let i = 0; i < pics.length; i++) {
  dialog += `<img src="${pics[i]}" />`;
}

document.getElementById("myImgDialog").innerHTML = dialog;
document.getElementById("myDialog").innerHTML = dialog;



let dialogRef = document.getElementById("myDialog");
let imgRef = document.getElementById("myImgDialog");

function openDialog() {
  dialogRef.showModal();

  }


function openRightPic() {
  for (let indexPics = 0; indexImage < Image.length; indexImage++) {
    const element = Image[indexImage];
  }
}




// document.getElementById('imgList').setAttribute('dialog','img src="./Img2/Schaf.jpg"')

// function logger(){
// image.innerHTML = '<dialog><img src="./Img2/Schaf.jpg"></dialog>';
// document.getElementById('imgList').setAttribute('dialog','img src="./Img2/Schaf.jpg"')
// }

// function showpic() {
//   let contentRef = document.getElementById('imgList');

//  for (let indexPics = 0; indexPics < pics.length; indexPics++) {
//   const element = pics[indexPics];
//    document.getElementById('imgList').innerHTML =' <img src= "./Img2/Schaf.jpg" > <img src= "./Img2/Viper-Schlange.jpg" ><img src= "./Img2/Wolf.jpg" ><img src= "./Img2/Husky.jpg" ><img src= "./Img2/Löwe.png" ><img src= "./Img2/Eule.jpg" ><img src= "./Img2/Marienkäfer - Kopie.jpg" ><img src= "./Img2/Giraffe - Kopie.jpg" ><img src= "./Img2/brown-bear-892232_1280.jpg" ><img src= "./Img2/Schmetterling.jpg" ><img src= "./Img2/Adler.jpg" >'
//  }

// }
// showpic();

// function dialogopen(){
//   const dialog = document.getElementById ('imageDialog');
//    const imagedialog2 = document.getElementById ('dialogImage');

// }

// let OpenDialogImg = document.getElementById('dialogImage').innerHTML;

// OpenDialogImg.innerHTML="./Img2/Schaf.jpg";
