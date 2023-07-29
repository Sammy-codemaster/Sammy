let listElement = document.querySelector(".list");
let barElement = document.querySelector(".bars")
let line1 = document.querySelector(".line1")
let line2 = document.querySelector(".line2")
let line3 = document.querySelector(".line3")






barElement.onclick = function(){
    listElement.classList.toggle("show");
    line1.classList.toggle("show-line1")
    line2.classList.toggle("show-line2")
    line3.classList.toggle("show-line3")
}