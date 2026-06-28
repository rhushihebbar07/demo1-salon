/*==================================================
LUXEAURA BLOG SINGLE
blog-single.js
==================================================*/

document.addEventListener("DOMContentLoaded",()=>{

"use strict";

/*==================================================
ELEMENTS
==================================================*/

const loader=document.getElementById("loader");

const backTop=document.getElementById("backToTop");

const newsletter=document.querySelector(".newsletter-form");

const commentForm=document.querySelector(".comment-form form");

const article=document.querySelector(".article-content");

const tocLinks=document.querySelectorAll(".sidebar-card ul li a");

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
READING PROGRESS BAR
==================================================*/

const progress=document.createElement("div");

progress.id="readingProgress";

progress.style.position="fixed";

progress.style.left="0";

progress.style.top="0";

progress.style.height="4px";

progress.style.width="0%";

progress.style.zIndex="99999";

progress.style.background="linear-gradient(90deg,#ff7ea8,#ff4f88)";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const total=document.documentElement.scrollHeight-window.innerHeight;

const current=window.scrollY;

const width=(current/total)*100;

progress.style.width=width+"%";

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
SMOOTH SCROLL
==================================================*/

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",e=>{

const target=document.querySelector(link.getAttribute("href"));

if(!target)return;

e.preventDefault();

target.scrollIntoView({

behavior:"smooth",

block:"start"

});

});

});

});
/*==================================================
TABLE OF CONTENTS ACTIVE
==================================================*/

const headings=document.querySelectorAll(

".article-content h2,.article-content h3"

);

if(headings.length && tocLinks.length){

window.addEventListener("scroll",()=>{

let current="";

headings.forEach(section=>{

const top=section.offsetTop-180;

if(window.scrollY>=top){

current=section.textContent.trim();

}

});

tocLinks.forEach(link=>{

link.classList.remove("active");

if(link.textContent.trim()===current){

link.classList.add("active");

}

});

});

}

/*==================================================
ESTIMATED READING TIME
==================================================*/

if(article){

const words=article.innerText.trim().split(/\s+/).length;

const minutes=Math.max(1,Math.ceil(words/200));

const meta=document.querySelector(".blog-meta");

if(meta){

const reading=document.createElement("span");

reading.innerHTML=`

<i class="fa-solid fa-book-open"></i>

${minutes} Min Read

`;

meta.appendChild(reading);

}

}

/*==================================================
IMAGE HOVER EFFECT
==================================================*/

document.querySelectorAll(

".featured-image img,.image-row img,.blog-card img"

).forEach(image=>{

image.addEventListener("mousemove",(e)=>{

const rect=image.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

image.style.transformOrigin=`${x}px ${y}px`;

});

image.addEventListener("mouseenter",()=>{

image.style.transform="scale(1.08)";

});

image.addEventListener("mouseleave",()=>{

image.style.transform="scale(1)";

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

".featured-image,\
.article-content,\
.tip-box,\
blockquote,\
.sidebar-card,\
.author-card,\
.comment,\
.blog-card"

).forEach(item=>{

observer.observe(item);

});

/*==================================================
PARALLAX HERO
==================================================*/

const hero=document.querySelector(".blog-hero");

window.addEventListener("scroll",()=>{

if(hero){

hero.style.backgroundPositionY=

window.scrollY*0.4+"px";

}

});
/*==================================================
COMMENT FORM VALIDATION
==================================================*/

if(commentForm){

commentForm.addEventListener("submit",(e)=>{

e.preventDefault();

const name=commentForm.querySelector("input[type='text']");
const email=commentForm.querySelector("input[type='email']");
const message=commentForm.querySelector("textarea");

if(name.value.trim().length<3){

showToast("Please enter a valid name.","error");

name.focus();

return;

}

const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email.value.trim())){

showToast("Please enter a valid email address.","error");

email.focus();

return;

}

if(message.value.trim().length<20){

showToast("Comment should contain at least 20 characters.","error");

message.focus();

return;

}

showToast("🎉 Your comment has been submitted successfully!","success");

commentForm.reset();

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

const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email)){

showToast("Please enter a valid email.","error");

return;

}

showToast("🎉 Thank you for subscribing!","success");

input.value="";

});

}

/*==================================================
COPY LINK
==================================================*/

const copyBtn=document.querySelector(".copy-link");

if(copyBtn){

copyBtn.addEventListener("click",()=>{

navigator.clipboard.writeText(window.location.href);

showToast("Blog link copied successfully!","success");

});

}

/*==================================================
WHATSAPP SHARE
==================================================*/

const whatsapp=document.querySelector(".share-whatsapp");

if(whatsapp){

whatsapp.addEventListener("click",()=>{

const url=

"https://wa.me/?text="+

encodeURIComponent(document.title+" "+window.location.href);

window.open(url,"_blank");

});

}

/*==================================================
FACEBOOK SHARE
==================================================*/

const facebook=document.querySelector(".share-facebook");

if(facebook){

facebook.addEventListener("click",()=>{

window.open(

"https://www.facebook.com/sharer/sharer.php?u="+

encodeURIComponent(window.location.href),

"_blank"

);

});

}

/*==================================================
X SHARE
==================================================*/

const twitter=document.querySelector(".share-twitter");

if(twitter){

twitter.addEventListener("click",()=>{

window.open(

"https://twitter.com/intent/tweet?url="+

encodeURIComponent(window.location.href)+

"&text="+

encodeURIComponent(document.title),

"_blank"

);

});

}

/*==================================================
TOAST
==================================================*/

function showToast(message,type="success"){

const toast=document.createElement("div");

toast.className="toast";

toast.innerHTML=`

<i class="fa-solid ${type==="success"

?"fa-circle-check"

:"fa-circle-xmark"}"></i>

<span>${message}</span>

`;

toast.style.position="fixed";

toast.style.top="30px";

toast.style.right="30px";

toast.style.padding="18px 25px";

toast.style.borderRadius="14px";

toast.style.display="flex";

toast.style.alignItems="center";

toast.style.gap="12px";

toast.style.zIndex="999999";

toast.style.color="#fff";

toast.style.fontWeight="500";

toast.style.background=

type==="success"

?"linear-gradient(135deg,#00c853,#009624)"

:"linear-gradient(135deg,#ff5252,#d50000)";

toast.style.boxShadow="0 15px 35px rgba(0,0,0,.25)";

toast.style.transform="translateX(120%)";

toast.style.transition=".4s";

document.body.appendChild(toast);

requestAnimationFrame(()=>{

toast.style.transform="translateX(0)";

});

setTimeout(()=>{

toast.style.transform="translateX(120%)";

setTimeout(()=>{

toast.remove();

},400);

},3000);

}

/*==================================================
KEYBOARD SHORTCUTS
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

"%cLuxeAura Blog Loaded Successfully",

"font-size:18px;color:#ff4f88;font-weight:bold;"

);

console.log(

"%cDesigned & Developed by Yukthi Technologies",

"color:#888;font-size:13px;"

);