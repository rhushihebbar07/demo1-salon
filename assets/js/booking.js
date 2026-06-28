/*=========================================
LUXEAURA BOOKING ENGINE
=========================================*/

class BookingEngine{

    constructor(){

        this.service=null;
        this.price=0;
        this.duration="";
        this.image="";

        this.specialist=null;

        this.date=null;
        this.time=null;

        this.init();

    }

    init(){

        this.loadServices();
        this.loadSpecialists();
        this.loadDate();
        this.loadTime();

    }

    /*=============================
    SERVICES
    =============================*/

    loadServices(){

        const cards=document.querySelectorAll(".service-card");

        cards.forEach(card=>{

            card.addEventListener("click",()=>{

                cards.forEach(c=>c.classList.remove("active"));

                card.classList.add("active");

                this.service=card.dataset.service;

                this.price=parseInt(card.dataset.price);

                this.duration=card.dataset.duration;

                this.image=card.dataset.image;

                this.updateSummary();

            });

        });

    }

    /*=============================
    SPECIALIST
    =============================*/

    loadSpecialists(){

        const cards=document.querySelectorAll(".specialist-card");

        cards.forEach(card=>{

            card.addEventListener("click",()=>{

                cards.forEach(c=>c.classList.remove("active"));

                card.classList.add("active");

                this.specialist=card.dataset.name;

                this.updateSummary();

            });

        });

    }

    /*=============================
    DATE
    =============================*/

    loadDate(){

        const input=document.querySelector(".booking-input");

        if(!input) return;

        input.addEventListener("change",()=>{

            this.date=input.value;

            this.updateSummary();

        });

    }

    /*=============================
    TIME
    =============================*/

    loadTime(){

        const slots=document.querySelectorAll(".time-slot");

        slots.forEach(slot=>{

            slot.addEventListener("click",()=>{

                if(slot.classList.contains("booked")) return;

                slots.forEach(s=>s.classList.remove("active"));

                slot.classList.add("active");

                this.time=slot.innerText;

                this.updateSummary();

            });

        });

    }

    /*=============================
    UPDATE SUMMARY
    =============================*/

    updateSummary(){

        if(window.bookingSummary){

            bookingSummary.update(this);

        }

    }

}

const bookingEngine=new BookingEngine();