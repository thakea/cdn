console.log(document.querySelectorAll("[data-salla-click-event='cart::adding-item']")[0]);
document.addEventListener("DOMContentLoaded", function(){ document.querySelectorAll("[data-salla-click-event='cart::adding-item']")[0].addEventListener("click",function(){setTimeout(function(){document.location.href='https://thakea.com/cart';},250);});});
