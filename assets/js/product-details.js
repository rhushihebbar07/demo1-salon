/*==================================================
LUXEAURA PRODUCT DETAILS
product-details.js
==================================================*/

document.addEventListener("DOMContentLoaded",()=>{

"use strict";

/*==================================================
ELEMENTS
==================================================*/

const loader=document.getElementById("loader");

const backTop=document.getElementById("backToTop");

const newsletter=document.querySelector(".newsletter-form");

const faqItems=document.querySelectorAll(".faq-item");

const thumbnails=document.querySelectorAll(".thumb");

const mainImage=document.getElementById("mainProductImage");

const quantityInput=document.getElementById("quantity");

const minusBtn=document.getElementById("minus");

const plusBtn=document.getElementById("plus");

/*==================================================
PRELOADER
==================================================*/

window.addEventListener("load",()=>{

if(loader){

loader.style.opacity="0";

loader.style.visibility="hidden";

loader.style.pointerEvents="none";

setTimeout(()=>{

loader.remove();

},600);

}

});

/*==================================================
PRODUCT IMAGE GALLERY
==================================================*/

if(mainImage){

thumbnails.forEach(img=>{

img.addEventListener("click",()=>{

thumbnails.forEach(t=>t.classList.remove("active"));

img.classList.add("active");

mainImage.style.opacity=".2";

setTimeout(()=>{

mainImage.src=img.src;

mainImage.style.opacity="1";

},200);

});

});

}

/*==================================================
QUANTITY
==================================================*/

if(quantityInput){

minusBtn.addEventListener("click",()=>{

let qty=parseInt(quantityInput.value);

if(qty>1){

quantityInput.value=qty-1;

}

});

plusBtn.addEventListener("click",()=>{

let qty=parseInt(quantityInput.value);

quantityInput.value=qty+1;

});

quantityInput.addEventListener("change",()=>{

if(quantityInput.value<1){

quantityInput.value=1;

}

});

}

/*==================================================
FAQ
==================================================*/

faqItems.forEach(item=>{

const question=item.querySelector(".faq-question");

question.addEventListener("click",()=>{

faqItems.forEach(f=>{

if(f!==item){

f.classList.remove("active");

}

});

item.classList.toggle("active");

});

});

/*==================================================
NEWSLETTER
==================================================*/

if(newsletter){

newsletter.addEventListener("submit",e=>{

e.preventDefault();

const input=newsletter.querySelector("input");

const email=input.value.trim();

const pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!pattern.test(email)){

showToast("Please enter a valid email.","error");

return;

}

showToast("Thank you for subscribing!","success");

input.value="";

});

}
/*==================================================
BACK TO TOP
==================================================*/

if(backTop){

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

backTop.style.opacity="1";
backTop.style.visibility="visible";
backTop.style.transform="translateY(0)";

}else{

backTop.style.opacity="0";
backTop.style.visibility="hidden";
backTop.style.transform="translateY(20px)";

}

});

backTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

/*==================================================
SMOOTH SCROLL
==================================================*/

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",e=>{

const target=document.querySelector(

link.getAttribute("href")

);

if(!target) return;

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

});

});

/*==================================================
SCROLL REVEAL
==================================================*/

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("fade-up");

observer.unobserve(entry.target);

}

});

},{

threshold:.15

});

document.querySelectorAll(

".product-grid,\
.info-card,\
.step,\
.review-card,\
.product-card,\
.faq-item,\
.newsletter-box"

).forEach(item=>{

observer.observe(item);

});

/*==================================================
BUTTON RIPPLE
==================================================*/

document.querySelectorAll(

".btn-main,.btn-outline,button"

).forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const diameter=Math.max(

this.clientWidth,

this.clientHeight

);

const radius=diameter/2;

circle.style.width=diameter+"px";
circle.style.height=diameter+"px";

circle.style.left=

e.clientX-

this.getBoundingClientRect().left-

radius+"px";

circle.style.top=

e.clientY-

this.getBoundingClientRect().top-

radius+"px";

circle.classList.add("ripple");

const ripple=this.querySelector(".ripple");

if(ripple){

ripple.remove();

}

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});

/*==================================================
ADD TO CART DEMO
==================================================*/

const cartButton=document.querySelector(".btn-main");

if(cartButton){

cartButton.addEventListener("click",(e)=>{

e.preventDefault();

const qty=quantityInput.value;

showToast(

`🛒 ${qty} product(s) added to cart.`,

"success"

);

});

}

/*==================================================
WISHLIST DEMO
==================================================*/

const wishlist=document.querySelector(".btn-outline");

if(wishlist){

wishlist.addEventListener("click",(e)=>{

e.preventDefault();

showToast(

"❤️ Added to your wishlist.",

"success"

);

});

}

/*==================================================
TOAST MESSAGE
==================================================*/

function showToast(message,type="success"){

const toast=document.createElement("div");

toast.innerHTML=`

<i class="fa-solid ${type==="success"

?"fa-circle-check"

:"fa-circle-xmark"}"></i>

<span>${message}</span>

`;

toast.style.position="fixed";
toast.style.top="25px";
toast.style.right="25px";
toast.style.display="flex";
toast.style.alignItems="center";
toast.style.gap="12px";
toast.style.padding="18px 24px";
toast.style.borderRadius="14px";
toast.style.background=

type==="success"

?"linear-gradient(135deg,#00c853,#009624)"

:"linear-gradient(135deg,#ff5252,#d50000)";

toast.style.color="#fff";
toast.style.fontWeight="500";
toast.style.zIndex="999999";
toast.style.boxShadow="0 20px 45px rgba(0,0,0,.25)";
toast.style.transform="translateX(130%)";
toast.style.transition=".4s";

document.body.appendChild(toast);

requestAnimationFrame(()=>{

toast.style.transform="translateX(0)";

});

setTimeout(()=>{

toast.style.transform="translateX(130%)";

setTimeout(()=>{

toast.remove();

},400);

},3000);

}

/*==================================================
KEYBOARD SHORTCUT
==================================================*/

document.addEventListener("keydown",e=>{

if(e.key==="Home"){

window.scrollTo({

top:0,

behavior:"smooth"

});

}

});

/*==================================================
CONSOLE BRANDING
==================================================*/

console.log(

"%cLuxeAura Product Details Loaded",

"color:#ff4f88;font-size:18px;font-weight:bold;"

);

console.log(

"%cDesigned & Developed by Yukthi Technologies",

"color:#888;font-size:13px;"

);
});