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
let sec_1 = docum.querySelector(".sec_1")
let sec_2 = docum.querySelector(".sec_2")
let sec_3 = docum.querySelector(".sec_3")
let foot = docum.querySelector("footer")
let pos_sec1 = sec_1.offsetTop;
let pos_sec2 = sec_2.offsetTop;
let pos_sec3 = sec_3.offsetTop;
let pos_foot = foot.offsetTop;
let a_1_scr = docum.querySelector(".sec1_scr")
let a_2_scr = docum.querySelector(".sec2_scr")
let a_3_scr = docum.querySelector(".sec3_scr")
let a_4_scr = docum.querySelector(".foot_scr")

// a_1_scr.addEventListener('click', (event)=>{
//     event.preventDefault() // ссылка перестает перекидывать или обновлять страницу

//     window.scrollTo({top: pos_sec1  , left : 0, behavior: 'smooth'})
// })
a_1_scr.addEventListener('click', jakor);
a_2_scr.addEventListener('click', jakor_2);
a_3_scr.addEventListener('click', jakor_3);
a_4_scr.addEventListener('click', jakor_4);
function jakor(event){
    event.preventDefault() // отключение обновления
    window.scrollTo({
        top: pos_sec1,// на сколько вниз он должен прокрутиться 
        left: 0, 
        behavior: "smooth" // планость 
    })
}
function jakor_2(event){
    event.preventDefault() // отключение обновления
    window.scrollTo({
        top: pos_sec2,// на сколько вниз он должен прокрутиться 
        left: 0, 
        behavior: "smooth" // планость 
    })
}
function jakor_3(event){
    event.preventDefault() // отключение обновления
    window.scrollTo({
        top: pos_sec3,// на сколько вниз он должен прокрутиться 
        left: 0, 
        behavior: "smooth" // планость 
    })
}
function jakor_4(event){
    event.preventDefault() // отключение обновления
    window.scrollTo({
        top: pos_foot,// на сколько вниз он должен прокрутиться 
        left: 0, 
        behavior: "smooth" // планость 
    })
}
let svt = docum.querySelector(".Svetlana")

window.onresize= ()=> {
    if(window.pageYOffset > 300){
    svt.classList.toggle("svt_show")
        
    }else {
        alert("Ошибка")
        console.log("Ошибка");
        
    }
}
