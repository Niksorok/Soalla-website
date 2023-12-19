const Dresses = document.querySelector(".dresses");
const Model = document.querySelector(".model");

const OpenSonya = document.querySelector("#open_Sonya");
const OpenLada = document.querySelector("#open_Lada");

function DressView(dress){
    Dresses.classList.add("dresses_close");
    Model.classList.add("model_open");

    document.querySelector("#neck-0").src = `./image/${dress}_neck-0.png`;
    document.querySelector("#neck-1").src = `./image/${dress}_neck-1.png`;
    document.querySelector("#neck-2").src = `./image/${dress}_neck-2.png`;

    document.querySelector("#chest_belly-0").src = `./image/${dress}_chest_belly-0.png`;
    document.querySelector("#chest_belly-1").src = `./image/${dress}_chest_belly-1.png`;
    document.querySelector("#chest_belly-2").src = `./image/${dress}_chest_belly-2.png`;

    document.querySelector("#legs-0").src = `./image/${dress}_legs-0.png`;
    document.querySelector("#legs-1").src = `./image/${dress}_legs-1.png`;
    document.querySelector("#legs-2").src = `./image/${dress}_legs-2.png`;
}

OpenSonya.addEventListener('click', () => { DressView('Sonya')});
OpenLada.addEventListener('click', () => { DressView('Lada')});

new Swiper('.swiper-container', {
    spaceBetween: 0,
    initialSlide: 1,
});
