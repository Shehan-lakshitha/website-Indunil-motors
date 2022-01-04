const popup = document.querySelector('.popup');
const close = document.querySelector('.close');


window.onload = function(){
    setTimeout(function(){
        popup.style.display = "block"
    },5000)
    
}

close.addEventListener('click', () =>{
    popup.style.display = "none";
})


const parallax = document.getElementsByClassName(".contanier");

window.addEventListener("scroll", function(){
    var offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7;
})


























































