var price = document.querySelector("#price")
var cartbtns = document.querySelectorAll("#add")
var checkout = document.querySelector("#check-btn")
var totalPrice = 0
cartbtns.forEach(function(item){
    item.onclick = function(){
        totalPrice += +(item.getAttribute("price"));
        price.innerHTML = totalPrice + "$"
        if (price.innerHTML != ""){
            checkout.style.display = "block" 
        }
    }
})

