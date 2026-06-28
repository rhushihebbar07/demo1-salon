// main.js
/*=========================================
LuxeAura Beauty Salon
Demo Website
Yukthi Technologies
=========================================*/

// =========================
// LOADER
// =========================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 2800);

});


// =========================
// CUSTOM CURSOR
// =========================

const cursor = document.querySelector(".cursor");
const cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove", (e)=>{

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    cursor2.style.left = e.clientX + "px";
    cursor2.style.top = e.clientY + "px";

});


// =========================
// NAVBAR SCROLL
// =========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        navbar.style.background="rgba(0,0,0,.92)";
        navbar.style.boxShadow="0 10px 30px rgba(0,0,0,.35)";

    }

    else{

        navbar.style.background="rgba(10,10,10,.75)";
        navbar.style.boxShadow="none";

    }

});


// =========================
// MOBILE MENU
// =========================

const menuBtn=document.querySelector(".menu-btn");
const nav=document.querySelector(".nav-links");

menuBtn.addEventListener("click",()=>{

    nav.classList.toggle("showMenu");

    if(nav.classList.contains("showMenu")){

        menuBtn.innerHTML="<i class='fa-solid fa-xmark'></i>";

    }

    else{

        menuBtn.innerHTML="<i class='fa-solid fa-bars'></i>";

    }

});


// =========================
// SCROLL REVEAL
// =========================

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach((sec)=>{

sec.classList.add("hidden");

observer.observe(sec);

});


// =========================
// HERO BUTTON RIPPLE
// =========================

document.querySelectorAll(".btn-main").forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-5px) scale(1.03)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0) scale(1)";

});

});


// =========================
// FLOATING IMAGE EFFECT
// =========================

const heroImage=document.querySelector(".hero-right img");

window.addEventListener("mousemove",(e)=>{

let x=(window.innerWidth/2-e.pageX)/80;
let y=(window.innerHeight/2-e.pageY)/80;

heroImage.style.transform=`translate(${x}px,${y}px)`;

});


// =========================
// ACTIVE NAVIGATION
// =========================

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href").includes(current)){

link.classList.add("active");

}

});

});


// =========================
// BACK TO TOP BUTTON
// =========================

const topBtn=document.createElement("div");

topBtn.className="backTop";

topBtn.innerHTML="<i class='fa-solid fa-arrow-up'></i>";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.classList.add("showTop");

}

else{

topBtn.classList.remove("showTop");

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


// =========================
// DEMO NOTICE
// =========================

setTimeout(()=>{

console.log(
"%cDemo Website\nAll Rights Reserved © Yukthi Technologies\nCreated only for representation purposes.",
"color:#ff8eb5;font-size:18px;font-weight:bold;"
);

},3000);
const faqs=document.querySelectorAll(".faq-item");

faqs.forEach(item=>{

const head=item.querySelector(".faq-header");

head.addEventListener("click",()=>{

faqs.forEach(f=>{

if(f!==item){

f.classList.remove("active");

}

});

item.classList.toggle("active");

});

});