// animations.js
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