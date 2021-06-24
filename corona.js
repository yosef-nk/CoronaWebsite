let menu = document.getElementById("menu");
let navbar = document.querySelector(".navbar");
let header = document.querySelector("header");
// sections
let home = document.querySelector(".home");
let prevent = document.querySelector(".prevent");
let symptoms = document.querySelector(".symptoms");
let precautions = document.querySelector(".precautions") ;
let handWash = document.querySelector(".second");
let child = Array.from(navbar.children) ;

menu.addEventListener("click", function () {
    this.classList.toggle("fa-times")
    navbar.classList.toggle("nav-toggle");
})
window.addEventListener("scroll", function (e) {
    menu.classList.remove("fa-times")
    navbar.classList.remove("nav-toggle");
    if (window.scrollY > 0) {
        header.classList.add("sticky");
    }
    else {
        header.classList.remove("sticky")
    }

    if(home.offsetTop <= pageYOffset && prevent.offsetTop > pageYOffset ) {
        child.forEach(function(value){
            value.classList.remove("active")
        })
        child[0].classList.add("active")
    }
    if(prevent.offsetTop <= pageYOffset && symptoms.offsetTop > pageYOffset ) {
        child.forEach(function(value){
            value.classList.remove("active")
        })
        child[1].classList.add("active")
    }
    if(symptoms.offsetTop <= pageYOffset && precautions.offsetTop > pageYOffset ) {
        child.forEach(function(value){
            value.classList.remove("active")
        })
        child[2].classList.add("active")
    }
    if(precautions.offsetTop <= pageYOffset && handWash.offsetTop > pageYOffset ) {
        child.forEach(function(value){
            value.classList.remove("active")
        })
        child[3].classList.add("active")
    }
    if(handWash.offsetTop <= pageYOffset ) {
        child.forEach(function(value){
            value.classList.remove("active")
        })
        child[4].classList.add("active")
    }

    
    
})






