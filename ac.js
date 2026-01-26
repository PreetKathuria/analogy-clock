const hand = document.querySelector(".hand");
const secs = document.querySelector(".secs");
const mins = document.querySelector(".mins");
const hours = document.querySelector(".hours");

function displaytime() {
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hrotation = 30*hh + mm/2;
    let mrotation =  mm/2;
    let srotation = 6*ss;

   hours.style.transform = `rotate(${hrotation}deg)`;
   mins.style.transform = `rotate(${mrotation}deg)`;
   secs.style.transform = `rotate(${srotation}deg)`;
}

setInterval(displaytime,1000);