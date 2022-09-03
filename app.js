let imgs = ["image1.jpg", "image2.jpg", "image3.jpg"];


function ChangeImg() {
    document.getElementById('image').src = imgs[Math.floor(Math.random() * 3)];

    setTimeout(ChangeImg, 2000);
}

ChangeImg();