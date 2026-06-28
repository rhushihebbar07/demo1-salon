/*=========================================================
VALIDATION ENGINE
=========================================================*/

class BookingValidation {

    constructor() {

        this.form = document.getElementById("bookingForm");

        if (!this.form) return;

        this.init();

    }

    init() {

        this.form.addEventListener("submit", (e) => {

            e.preventDefault();

            if (this.validate()) {

                if (window.bookingStorage) {
                    bookingStorage.save();
                }

                if (window.bookingModal) {
                    bookingModal.show();
                }

            }

        });

    }

    validate() {

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const phone = document.getElementById("phone");
        const gender = document.getElementById("gender");

        this.clearErrors();

        let valid = true;

        /* Name */

        if (name.value.trim().length < 3) {

            this.error(name, "Enter a valid name");

            valid = false;

        }

        /* Email */

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email.value.trim())) {

            this.error(email, "Invalid email");

            valid = false;

        }

        /* Phone */

        const phoneRegex = /^[6-9]\d{9}$/;

        if (!phoneRegex.test(phone.value.trim())) {

            this.error(phone, "Enter valid mobile number");

            valid = false;

        }

        /* Gender */

        if (gender.value === "") {

            this.error(gender, "Select gender");

            valid = false;

        }

        /* Booking */

        if (!bookingEngine.service) {

            alert("Please select a service.");

            valid = false;

        }

        if (!bookingEngine.specialist) {

            alert("Please choose a specialist.");

            valid = false;

        }

        if (!bookingEngine.date) {

            alert("Please select appointment date.");

            valid = false;

        }

        if (!bookingEngine.time) {

            alert("Please select appointment time.");

            valid = false;

        }

        return valid;

    }

    error(input, message) {

        input.style.borderColor = "#ff4f88";

        const small = document.createElement("small");

        small.className = "input-error";

        small.innerText = message;

        input.parentNode.appendChild(small);

    }

    clearErrors() {

        document.querySelectorAll(".input-error").forEach(e => e.remove());

        document.querySelectorAll("input,select,textarea").forEach(i => {

            i.style.borderColor = "";

        });

    }

}

const bookingValidation = new BookingValidation();