/*=========================================================
LOCAL STORAGE
=========================================================*/

class BookingStorage{

    save(){

        const booking={

            service:bookingEngine.service,

            specialist:bookingEngine.specialist,

            date:bookingEngine.date,

            time:bookingEngine.time,

            duration:bookingEngine.duration,

            price:bookingEngine.price,

            image:bookingEngine.image,

            customer:{

                name:document.getElementById("name").value,

                email:document.getElementById("email").value,

                phone:document.getElementById("phone").value,

                gender:document.getElementById("gender").value,

                message:document.getElementById("message").value

            },

            bookedAt:new Date()

        };

        localStorage.setItem(

            "luxeaura-booking",

            JSON.stringify(booking)

        );

    }

    load(){

        const data=localStorage.getItem("luxeaura-booking");

        if(!data) return;

        const booking=JSON.parse(data);

        document.getElementById("name").value=booking.customer.name;

        document.getElementById("email").value=booking.customer.email;

        document.getElementById("phone").value=booking.customer.phone;

        document.getElementById("gender").value=booking.customer.gender;

        document.getElementById("message").value=booking.customer.message;

    }

    clear(){

        localStorage.removeItem("luxeaura-booking");

    }

}

const bookingStorage=new BookingStorage();

bookingStorage.load();