
/*==================================================
LUXEAURA PRODUCTS
products.js
==================================================*/

document.addEventListener("DOMContentLoaded",()=>{

"use strict";

/*==================================================
ELEMENTS
==================================================*/

const loader=document.getElementById("loader");

const backTop=document.getElementById("backToTop");

const newsletter=document.querySelector(".newsletter-form");

const searchInput=document.querySelector(".product-search input");

const searchButton=document.querySelector(".product-search button");

const filterButtons=document.querySelectorAll(".product-filters button");

const productCards=document.querySelectorAll(".product-card");

const wishlistButtons=document.querySelectorAll(".wishlist");

const addCartButtons=document.querySelectorAll(".btn-main");

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
SEARCH
==================================================*/

function searchProducts(){

const keyword=searchInput.value.trim().toLowerCase();

productCards.forEach(card=>{

const text=card.innerText.toLowerCase();

if(text.includes(keyword)){

card.style.display="block";

}else{

card.style.display="none";

}

});

}

if(searchButton){

searchButton.addEventListener("click",searchProducts);

}

if(searchInput){

searchInput.addEventListener("keyup",searchProducts);

}

/*==================================================
CATEGORY FILTER
==================================================*/

filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

filterButtons.forEach(btn=>{

btn.classList.remove("active");

});

button.classList.add("active");

const category=

button.textContent.trim().toLowerCase();

productCards.forEach(card=>{

const productCategory=

card.querySelector(".product-content span")

.textContent

.trim()

.toLowerCase();

if(category==="all"){

card.style.display="block";

return;

}

if(productCategory.includes(category)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

});

/*==================================================
WISHLIST
==================================================*/

wishlistButtons.forEach(button=>{

button.addEventListener("click",(e)=>{

e.preventDefault();

button.classList.toggle("active");

const icon=button.querySelector("i");

if(button.classList.contains("active")){

icon.classList.remove("fa-regular");

icon.classList.add("fa-solid");

showToast(

"❤️ Added to Wishlist",

"success"

);

}else{

icon.classList.remove("fa-solid");

icon.classList.add("fa-regular");

showToast(

"Removed from Wishlist",

"error"

);

}

});

});

/*==================================================
ADD TO CART
==================================================*/

addCartButtons.forEach(button=>{

if(

button.textContent

.toLowerCase()

.includes("add")

){

button.addEventListener("click",(e)=>{

e.preventDefault();

showToast(

"🛒 Product added to cart",

"success"

);

});

}

});

/*==================================================
NEWSLETTER
==================================================*/

if(newsletter){

newsletter.addEventListener("submit",(e)=>{

e.preventDefault();

const input=newsletter.querySelector("input");

const email=input.value.trim();

const pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!pattern.test(email)){

showToast(

"Please enter a valid email.",

"error"

);

return;

}

showToast(

"Thank you for subscribing!",

"success"

);

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
PAGINATION
==================================================*/

document.querySelectorAll(".pagination a").forEach(link=>{

link.addEventListener("click",(e)=>{

e.preventDefault();

document.querySelectorAll(".pagination a").forEach(item=>{

item.classList.remove("active");

});

link.classList.add("active");

window.scrollTo({

top:0,

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

".featured-grid,\
.product-card,\
.pagination,\
.newsletter-box,\
.footer"

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
SMOOTH SCROLL
==================================================*/

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",(e)=>{

const target=document.querySelector(

link.getAttribute("href")

);

if(!target) return;

e.preventDefault();

target.scrollIntoView({

behavior:"smooth",

block:"start"

});

});

});

/*==================================================
TOAST
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
toast.style.fontWeight="600";
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

document.addEventListener("keydown",(e)=>{

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

"%cLuxeAura Products Loaded",

"color:#ff4f88;font-size:18px;font-weight:bold;"

);

console.log(

"%cDesigned & Developed by Yukthi Technologies",

"color:#999;font-size:13px;"

);
});
