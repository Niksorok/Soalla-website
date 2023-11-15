const Dresses = document.querySelector(".dresses");
const Model = document.querySelector(".model");

const Button = document.querySelector(".open-model");

Button.addEventListener('click', () => {
    Dresses.classList.add("dresses_close");
    Model.classList.add("model_open");
});
