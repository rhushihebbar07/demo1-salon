/*==================================================
LUXEAURA BLOG
blog.js
==================================================*/

document.addEventListener("DOMContentLoaded",()=>{

"use strict";

/*==================================================
ELEMENTS
==================================================*/

const loader=document.getElementById("loader");

const backTop=document.getElementById("backToTop");

const newsletter=document.querySelector(".newsletter-form");

const searchInput=document.querySelector(".blog-search input");

const searchButton=document.querySelector(".blog-search button");

const filterButtons=document.querySelectorAll(".blog-filters button");

const blogCards=document.querySelectorAll(".blog-card");

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
NEWSLETTER
==================================================*/

if(newsletter){

newsletter.addEventListener("submit",(e)=>{

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
SEARCH
==================================================*/

function searchBlogs(){

const keyword=searchInput.value.toLowerCase();

blogCards.forEach(card=>{

const text=card.innerText.toLowerCase();

if(text.includes(keyword)){

card.style.display="block";

}else{

card.style.display="none";

}

});

}

if(searchButton){

searchButton.addEventListener("click",searchBlogs);

}

if(searchInput){

searchInput.addEventListener("keyup",searchBlogs);

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

const category=button.textContent.trim().toLowerCase();

blogCards.forEach(card=>{

const cardCategory=

card.querySelector(".blog-category")

.textContent

.trim()

.toLowerCase();

if(category==="all"){

card.style.display="block";

return;

}

if(cardCategory.includes(category)){

card.style.display="block";

}else{

card.style.display="none";

}

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
.blog-card,\
.newsletter-box,\
.pagination,\
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
PAGINATION
==================================================*/

document.querySelectorAll(".pagination a").forEach(link=>{

link.addEventListener("click",(e)=>{

e.preventDefault();

document

.querySelectorAll(".pagination a")

.forEach(a=>{

a.classList.remove("active");

});

link.classList.add("active");

window.scrollTo({

top:0,

behavior:"smooth"

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

"%cLuxeAura Blog Loaded",

"color:#ff4f88;font-size:18px;font-weight:bold;"

);

console.log(

"%cDesigned & Developed by Yukthi Technologies",

"color:#888;font-size:13px;"

);
});