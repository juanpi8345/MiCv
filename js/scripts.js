"use strict"

new WOW().init();

const body = document.querySelector("body");
const tramaInicio = document.getElementById("carga");
const header = document.getElementById("menu");
const btn = document.querySelector(".barras");
const menu = document.querySelector(".menu");

addEventListener("load",e=>{
    tramaInicio.style.animation = "desaparecer .5s forwards";
    setTimeout(()=>{
        tramaInicio.style.display = "none";
    },1100)
    
})

addEventListener("scroll",()=>{
    var y = window.scrollY;
    console.log(y);
    if(y > 250){
        header.style.background = "rgba(0,0,0,.35)";
    }
    else{
        header.style.background = "none";
    }
})

btn.addEventListener("click",e=>{
    e.preventDefault();
    menu.classList.toggle("abierto");
    body.classList.toggle("abierto");

})



