let imgs = ["image1.jpg", "image2.jpg", "image3.jpg"];
let old_img = -1;

function ChangeImg() {
    do {
        new_img = Math.floor(Math.random() * 3);
    } while( new_img == old_img);
    old_img = new_img;
    document.getElementById('image').src = imgs[new_img];
    setTimeout(ChangeImg, 2000);
}
