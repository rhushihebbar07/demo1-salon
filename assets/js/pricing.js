/*==========================
FAQ
==========================*/

const faqItems = document.querySelectorAll(".faq-item");

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

/*==========================
CATEGORY FILTER
==========================*/

const filterButtons=document.querySelectorAll(".price-filter button");

filterButtons.forEach(btn=>{

btn.addEventListener("click",()=>{

filterButtons.forEach(b=>b.classList.remove("active"));

btn.classList.add("active");

/*
Later you can dynamically switch pricing
cards using AJAX or JSON data.
*/

});

});