const bgImageElement = document.getElementById("bg-image");

// console.log(bgImageElement);
window.addEventListener("scroll", ()=>{
    updateImage();

});

function updateImage() {
    bgImageElement.style.opacity = 1 - window.pageYOffset / 900;
    bgImageElement.style.backgroundSize = 160 - window.pageYOffset / 12 + "%" 
    
}