let imgs = ["image1.jpg", "image2.jpg", "image3.jpg"];
let act = 0;

setTimeout(ChangeImg, 3000);

function ChangeImg() {
    document.getElementById('image').src = imgs[Math.floor(Math.random() * 3)];
    // if (act >= 3) act = 0;

    setTimeout(ChangeImg, 3000);
}