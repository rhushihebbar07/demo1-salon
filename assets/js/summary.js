/*====================================
SUMMARY
====================================*/

class BookingSummary{

    constructor(){

        this.service=document.querySelector(".summary-service");

        this.specialist=document.querySelector(".summary-specialist");

        this.date=document.querySelector(".summary-date");

        this.time=document.querySelector(".summary-time");

        this.price=document.querySelector(".summary-price");

        this.total=document.querySelector(".summary-total-price");

        this.duration=document.querySelector(".summary-duration");

        this.image=document.getElementById("summaryImage");

    }

    update(data){

        if(data.service){

            this.service.innerText=data.service;

        }

        if(data.specialist){

            this.specialist.innerText=data.specialist;

        }

        if(data.date){

            this.date.innerText=

            new Date(data.date).toLocaleDateString("en-IN",{

                day:"numeric",

                month:"long",

                year:"numeric"

            });

        }

        if(data.time){

            this.time.innerText=data.time;

        }

        if(data.duration){

            this.duration.innerText=data.duration;

        }

        if(data.price){

            this.price.innerText=

            "₹"+data.price.toLocaleString("en-IN");

            this.total.innerText=

            "₹"+data.price.toLocaleString("en-IN");

        }

        if(data.image){

            this.image.src=data.image;

        }

    }

}

const bookingSummary=new BookingSummary();
window.bookingSummary=bookingSummary;