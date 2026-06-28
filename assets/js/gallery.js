// gallery.js
// Gallery Filter

const buttons = document.querySelectorAll(".gallery-filter button");
const items = document.querySelectorAll(".gallery-item");

buttons.forEach(button => {

button.addEventListener("click",()=>{

buttons.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

const filter = button.textContent.toLowerCase();

items.forEach(item=>{

if(filter==="all"){

item.style.display="block";

}

else if(item.classList.contains(filter)){

item.style.display="block";

}

else{

item.style.display="none";

}

});

});

});
/*=============================
LIGHTBOX
=============================*/

const galleryImages=document.querySelectorAll(".gallery-item img");

const lightbox=document.querySelector(".lightbox");

const lightImg=document.getElementById("lightbox-img");

galleryImages.forEach(img=>{

img.onclick=()=>{

lightbox.style.display="flex";

lightImg.src=img.src;

}

});

document.querySelector(".close-lightbox").onclick=()=>{

lightbox.style.display="none";

};
