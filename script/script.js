let docum = document;

let button_1 = docum.querySelector(".reg_butts_1");
let button_2 = docum.querySelector(".reg_butts_2");

button_1.addEventListener('click', () => {
    button_1.style.background = '#2C60B7'; 
    button_2.style.background = 'grey'; 
});

button_2.addEventListener('click', () => {
    button_2.style.background = '#2C60B7'; 
    button_1.style.background = 'grey'; 
});

let strelka = docum.querySelector(".strelka");
let sec1 = docum.querySelector(".sec1");
let sec2 = docum.querySelector(".sec2");
let img_2 = docum.querySelector(".img_sec2");
let header = docum.querySelector("header")
strelka.addEventListener('click', ()=>{
    strelka.classList.toggle('strelka_per')
    sec1.classList.toggle('sec1_hide')
    sec2.classList.toggle('sec2_show')
    img_2.classList.toggle('img_sec2_show')
    header.classList.toggle('header_show')
})













