const images = [
    {
        src: "gal1.png",
        caption: "rocket view"
    },
    {
        src: "gal2.png",
        caption: "space view"
    },
    {
        src: "gal3.png",
        caption: "rocket launch"
    }
];

let index = 0;

function showImage() {
    document.getElementById("galleryImage").src = images[index].src;
    document.getElementById("caption").innerText = images[index].caption;
}

function nextImage() {
    index = (index + 1) % images.length;
    showImage();
}

function previousImage() {
    index = (index - 1 + images.length) % images.length;
    showImage();
}
