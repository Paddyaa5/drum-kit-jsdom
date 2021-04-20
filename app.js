// sound variables
const boom = document.getElementById("boom");
const clap = document.getElementById("clap");
const hihat = document.getElementById("hihat");
const kick = document.getElementById("kick");
const openhat = document.getElementById("openhat");
const ride = document.getElementById("ride");
const snare = document.getElementById("snare");
const tink = document.getElementById("tink");
const tom = document.getElementById("tom");
// box variables
const boomBox = document.getElementById("boom-box");
const clapBox = document.getElementById("clap-box");
const hihatBox = document.getElementById("hihat-box");
const kickBox = document.getElementById("kick-box");
const openhatBox = document.getElementById("openhat-box");
const rideBox = document.getElementById("ride-box");
const snareBox = document.getElementById("snare-box");
const tinkBox = document.getElementById("tink-box");
const tomBox = document.getElementById("tom-box");
// theme variable
const page = document.getElementById("full-page");
const theme = document.getElementById("theme");

document.addEventListener("keypress", (e) => {
    if (e.key === "a" || e.key === "A") {
        boom.pause();
        boom.currentTime = 0;
        boom.play();
        setTimeout(() => {
            boomBox.classList.toggle("boom-active");
        }, 250);
        boomBox.classList.toggle("boom-active");
    } else if (e.key === "s" || e.key === "S") {
        clap.pause();
        clap.currentTime = 0;
        clap.play();
        setTimeout(() => {
            clapBox.classList.toggle("clap-active");
        }, 250);
        clapBox.classList.toggle("clap-active");
    } else if (e.key === "d" || e.key === "D") {
        hihat.pause();
        hihat.currentTime = 0;
        hihat.play();
        setTimeout(() => {
            hihatBox.classList.toggle("hihat-active");
        }, 250);
        hihatBox.classList.toggle("hihat-active");
    } else if (e.key === "f" || e.key === "F") {
        kick.pause();
        kick.currentTime = 0;
        kick.play();
        setTimeout(() => {
            kickBox.classList.toggle("kick-active");
        }, 250);
        kickBox.classList.toggle("kick-active");
    } else if (e.key === "g" || e.key === "G") {
        openhat.pause();
        openhat.currentTime = 0;
        openhat.play();
        setTimeout(() => {
            openhatBox.classList.toggle("openhat-active");
        }, 250);
        openhatBox.classList.toggle("openhat-active");
    } else if (e.key === "h" || e.key === "H") {
        ride.pause();
        ride.currentTime = 0;
        ride.play();
        setTimeout(() => {
            rideBox.classList.toggle("ride-active");
        }, 250);
        rideBox.classList.toggle("ride-active");
    } else if (e.key === "j" || e.key === "J") {
        snare.pause();
        snare.currentTime = 0;
        snare.play();
        setTimeout(() => {
            snareBox.classList.toggle("snare-active");
        }, 250);
        snareBox.classList.toggle("snare-active");
    } else if (e.key === "k" || e.key === "K") {
        tink.pause();
        tink.currentTime = 0;
        tink.play();
        setTimeout(() => {
            tinkBox.classList.toggle("tink-active");
        }, 250);
        tinkBox.classList.toggle("tink-active");
    } else if (e.key === "l" || e.key === "L") {
        tom.pause();
        tom.currentTime = 0;
        tom.play();
        setTimeout(() => {
            tomBox.classList.toggle("tom-active");
        }, 250);
        tomBox.classList.toggle("tom-active");
    }
});

theme.addEventListener("click", () => {
    if (page.style.backgroundColor === "white") {
        page.style.backgroundColor = "black";
        theme.innerHTML = "&#9790";
        page.style.color = "white";
    } else {
        page.style.backgroundColor = "white";
        theme.innerHTML = "&#9788";
        page.style.color = "black";
    }
});
