document.addEventListener("DOMContentLoaded", () => {

    /*==============================
        SERVICE SELECTION
    ==============================*/

const serviceCards = document.querySelectorAll(".service-card");

const summaryService = document.querySelector(".summary-service");
const summaryPrice = document.querySelector(".summary-price");
const summaryTotal = document.querySelector(".summary-total-price");

serviceCards.forEach(card=>{

    card.addEventListener("click",()=>{

        serviceCards.forEach(c=>c.classList.remove("active"));

        card.classList.add("active");

        const service = card.dataset.service;
        const price = Number(card.dataset.price);

        summaryService.textContent = service;

        summaryPrice.textContent =
            "₹" + price.toLocaleString("en-IN");

        summaryTotal.textContent =
            "₹" + price.toLocaleString("en-IN");

    });

});
/*=========================================
PRELOADER
=========================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

        loader.style.pointerEvents = "none";

        setTimeout(()=>{

            loader.remove();

        },600);

    }

});
    /*==============================
        SPECIALIST
    ==============================*/

    const specialistCards = document.querySelectorAll(".specialist-card");
    const summarySpecialist = document.querySelector(".summary-specialist");

    specialistCards.forEach(card => {

        card.addEventListener("click", () => {

            specialistCards.forEach(c => c.classList.remove("active"));

            card.classList.add("active");

            if(summarySpecialist){
                summarySpecialist.textContent =
                    card.querySelector("h3").textContent;
            }

        });

    });



    /*==============================
        TIME SLOT
    ==============================*/

    const timeButtons = document.querySelectorAll(".time-slots button");
    const summaryTime = document.querySelector(".summary-time");

    timeButtons.forEach(button => {

        button.addEventListener("click", () => {

            timeButtons.forEach(btn => btn.classList.remove("active"));

            button.classList.add("active");

            if(summaryTime){
                summaryTime.textContent = button.textContent;
            }

        });

    });



    /*==============================
        DATE
    ==============================*/

    const dateInput = document.querySelector(".booking-input");
    const summaryDate = document.querySelector(".summary-date");

    if(dateInput){

        dateInput.addEventListener("change",()=>{

            if(summaryDate){

                const date = new Date(dateInput.value);

                summaryDate.textContent =
                    date.toLocaleDateString("en-IN",{
                        day:"numeric",
                        month:"long",
                        year:"numeric"
                    });

            }

        });

    }



    /*==============================
        FAQ
    ==============================*/

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



    /*==============================
        BOOKING FORM
    ==============================*/

    const form=document.querySelector(".details-form form");

    if(form){

        form.addEventListener("submit",(e)=>{

            e.preventDefault();

            const name=form.querySelector("input[type='text']").value.trim();
            const email=form.querySelector("input[type='email']").value.trim();
            const phone=form.querySelector("input[type='tel']").value.trim();

            if(name==="" || email==="" || phone===""){

                alert("Please fill all required fields.");

                return;

            }

            const service =
                document.querySelector(".summary-service")?.textContent || "Hair Styling";

            const specialist =
                document.querySelector(".summary-specialist")?.textContent || "Emma Wilson";

            const date =
                document.querySelector(".summary-date")?.textContent || "Not Selected";

            const time =
                document.querySelector(".summary-time")?.textContent || "Not Selected";

            alert(

`🎉 Appointment Booked Successfully!

Name: ${name}

Service: ${service}

Specialist: ${specialist}

Date: ${date}

Time: ${time}

Thank you for choosing LuxeAura.

(Demo Website by Yukthi Technologies.)`

);

            form.reset();

        });

    }

});
/*==================================================
SPECIALIST SELECTION
==================================================*/

specialistCards.forEach(card=>{

card.addEventListener("click",()=>{

specialistCards.forEach(c=>c.classList.remove("active"));

card.classList.add("active");

booking.specialist=card.dataset.name;

updateSummary();

saveBooking();

});

});

/*==================================================
DATE SELECTION
==================================================*/

if(bookingDate){

const today=new Date();

today.setHours(0,0,0,0);

bookingDate.min=today.toISOString().split("T")[0];

bookingDate.addEventListener("change",()=>{

if(!bookingDate.value)return;

const selected=new Date(bookingDate.value);

booking.date=selected.toLocaleDateString("en-IN",{

day:"numeric",

month:"long",

year:"numeric"

});

updateSummary();

saveBooking();

});

}

/*==================================================
TIME SLOT
==================================================*/

timeSlots.forEach(slot=>{

slot.addEventListener("click",()=>{

timeSlots.forEach(t=>t.classList.remove("active"));

slot.classList.add("active");

booking.time=slot.textContent.trim();

updateSummary();

saveBooking();

});

});

/*==================================================
LOCAL STORAGE
==================================================*/

function saveBooking(){

localStorage.setItem(

"luxeaura-booking",

JSON.stringify(booking)

);

}

function loadBooking(){

const data=localStorage.getItem("luxeaura-booking");

if(!data)return;

booking=JSON.parse(data);

/* Restore Service */

serviceCards.forEach(card=>{

if(card.dataset.service===booking.service){

card.classList.add("active");

}else{

card.classList.remove("active");

}

});

/* Restore Specialist */

specialistCards.forEach(card=>{

if(card.dataset.name===booking.specialist){

card.classList.add("active");

}else{

card.classList.remove("active");

}

});

/* Restore Date */

if(

bookingDate &&

booking.date!=="Not Selected"

){

const date=new Date(booking.date);

if(!isNaN(date)){

bookingDate.value=date.toISOString().split("T")[0];

}

}

/* Restore Time */

timeSlots.forEach(slot=>{

if(slot.textContent.trim()===booking.time){

slot.classList.add("active");

}else{

slot.classList.remove("active");

}

});

updateSummary();

}

loadBooking();
/*==================================================
FORM VALIDATION
==================================================*/

const nameInput=document.getElementById("name");
const emailInput=document.getElementById("email");
const phoneInput=document.getElementById("phone");
const genderInput=document.getElementById("gender");
const messageInput=document.getElementById("message");

function validateName(){

const value=nameInput.value.trim();

if(value.length<3){

alert("Please enter a valid full name.");

nameInput.focus();

return false;

}

return true;

}

function validateEmail(){

const email=emailInput.value.trim();

const pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!pattern.test(email)){

alert("Please enter a valid email address.");

emailInput.focus();

return false;

}

return true;

}

function validatePhone(){

const phone=phoneInput.value.trim();

const pattern=/^[6-9]\d{9}$/;

if(!pattern.test(phone)){

alert("Please enter a valid 10-digit mobile number.");

phoneInput.focus();

return false;

}

return true;

}

function validateBooking(){

if(!validateName()) return false;

if(!validateEmail()) return false;

if(!validatePhone()) return false;

if(booking.date==="Not Selected"){

alert("Please select your appointment date.");

bookingDate.focus();

return false;

}

return true;

}

/*==================================================
BOOKING FORM
==================================================*/

if(bookingForm){

bookingForm.addEventListener("submit",(e)=>{

e.preventDefault();

if(!validateBooking()) return;

const bookingId="LUX-"+Math.floor(Math.random()*900000+100000);

const customer={

bookingId:bookingId,

name:nameInput.value.trim(),

email:emailInput.value.trim(),

phone:phoneInput.value.trim(),

gender:genderInput.value,

message:messageInput.value.trim(),

service:booking.service,

specialist:booking.specialist,

date:booking.date,

time:booking.time,

duration:booking.duration,

price:booking.price

};

/* Save */

localStorage.setItem(

"luxeaura-last-booking",

JSON.stringify(customer)

);

/* Success */

showSuccess(customer);

/* Reset */

bookingForm.reset();

booking.date="Not Selected";

booking.time="09:00 AM";

booking.service="Hair Styling";

booking.specialist="Emma Wilson";

booking.price=799;

booking.duration="45 Minutes";

booking.image="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1200&auto=format&fit=crop";

/* Reset Service */

serviceCards.forEach((card,index)=>{

card.classList.remove("active");

if(index===0){

card.classList.add("active");

}

});

/* Reset Specialist */

specialistCards.forEach((card,index)=>{

card.classList.remove("active");

if(index===0){

card.classList.add("active");

}

});

/* Reset Time */

timeSlots.forEach((slot,index)=>{

slot.classList.remove("active");

if(index===0){

slot.classList.add("active");

}

});

if(bookingDate){

bookingDate.value="";

}

updateSummary();

localStorage.removeItem("luxeaura-booking");

});

}

/*==================================================
SUCCESS MESSAGE
==================================================*/

function showSuccess(data){

alert(

`🎉 APPOINTMENT BOOKED SUCCESSFULLY!

Booking ID : ${data.bookingId}

Name : ${data.name}

Service : ${data.service}

Specialist : ${data.specialist}

Date : ${data.date}

Time : ${data.time}

Duration : ${data.duration}

Amount : ₹${Number(data.price).toLocaleString("en-IN")}

Thank you for choosing LuxeAura Beauty Salon.

We look forward to serving you.

Designed & Developed by Yukthi Technologies.`

);

}
/*==================================================
FAQ ACCORDION
==================================================*/

const faqItems=document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

const question=item.querySelector(".faq-question");

if(!question) return;

question.addEventListener("click",()=>{

faqItems.forEach(faq=>{

if(faq!==item){

faq.classList.remove("active");

}

});

item.classList.toggle("active");

});

});

/*==================================================
NEWSLETTER
==================================================*/

const newsletter=document.querySelector(".newsletter-form");

if(newsletter){

newsletter.addEventListener("submit",(e)=>{

e.preventDefault();

const input=newsletter.querySelector("input");

const email=input.value.trim();

const pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!pattern.test(email)){

alert("Please enter a valid email address.");

return;

}

alert("🎉 Thank you for subscribing to LuxeAura!");

input.value="";

});

}

/*==================================================
BACK TO TOP
==================================================*/

const backTop=document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

if(!backTop) return;

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

if(backTop){

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

link.addEventListener("click",(e)=>{

const target=document.querySelector(link.getAttribute("href"));

if(!target) return;

e.preventDefault();

target.scrollIntoView({

behavior:"smooth",

block:"start"

});

});

});

/*==================================================
MOBILE MENU
==================================================*/

const menuToggle=document.querySelector(".menu-toggle");

const navLinks=document.querySelector(".nav-links");

if(menuToggle && navLinks){

menuToggle.addEventListener("click",()=>{

navLinks.classList.toggle("show");

menuToggle.classList.toggle("active");

});

}

/*==================================================
BUTTON RIPPLE EFFECT
==================================================*/

document.querySelectorAll(".btn-main,.btn-outline,.booking-btn,.select-specialist,.time-slot")
.forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

const x=e.clientX-rect.left-size/2;

const y=e.clientY-rect.top-size/2;

ripple.style.width=size+"px";
ripple.style.height=size+"px";
ripple.style.left=x+"px";
ripple.style.top=y+"px";

ripple.classList.add("ripple");

const oldRipple=this.querySelector(".ripple");

if(oldRipple){

oldRipple.remove();

}

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

/*==================================================
SCROLL ANIMATION
==================================================*/

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("fade-up");

}

});

},{

threshold:0.15

});

document.querySelectorAll(

".service-card,.specialist-card,.booking-card,.summary-card,.hours-card,.contact-card,.faq-item"

).forEach(el=>{

observer.observe(el);

});

/*==================================================
PAGE READY
==================================================*/

console.log(

"%cLuxeAura Appointment System Loaded Successfully",

"color:#ff4f88;font-size:16px;font-weight:bold;"

);

console.log(

"Designed & Developed by Yukthi Technologies"

);