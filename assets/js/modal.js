/*=========================================================
BOOKING SUCCESS MODAL
=========================================================*/

class BookingModal{

    constructor(){

        this.create();

    }

    create(){

        const modal=document.createElement("div");

        modal.id="bookingModal";

        modal.innerHTML=`

        <div class="booking-modal-box">

            <div class="modal-icon">

                <i class="fa-solid fa-circle-check"></i>

            </div>

            <h2>

                Booking Confirmed

            </h2>

            <p>

                Thank you for booking with LuxeAura.

            </p>

            <div class="modal-details">

                <p>

                    <strong>Service:</strong>

                    ${bookingEngine.service||"-"}

                </p>

                <p>

                    <strong>Specialist:</strong>

                    ${bookingEngine.specialist||"-"}

                </p>

                <p>

                    <strong>Date:</strong>

                    ${bookingEngine.date||"-"}

                </p>

                <p>

                    <strong>Time:</strong>

                    ${bookingEngine.time||"-"}

                </p>

            </div>

            <button id="closeBookingModal">

                Close

            </button>

        </div>

        `;

        document.body.appendChild(modal);

        modal.style.display="none";

        document
        .getElementById("closeBookingModal")
        .onclick=()=>{

            modal.style.display="none";

        };

    }

    show(){

        document.getElementById("bookingModal").style.display="flex";

        document.querySelector(".modal-details").innerHTML=`

        <p><strong>Service:</strong> ${bookingEngine.service}</p>

        <p><strong>Specialist:</strong> ${bookingEngine.specialist}</p>

        <p><strong>Date:</strong> ${bookingEngine.date}</p>

        <p><strong>Time:</strong> ${bookingEngine.time}</p>

        <p><strong>Total:</strong> ₹${bookingEngine.price}</p>

        `;

    }

}

const bookingModal=new BookingModal();