let cartIcon = document.querySelector("#cartIcon");
let addCart=document.querySelector("addtocart");
let closeCart=document.querySelector("#closeCart");

if(document.readyState=='loading'){
    document.addEventListener("DOMContentLoaded",ready)
}else{
    ready()
}

function ready(){
    var removeCartButtons=document.getElementsByClassName('cart-remove');
    console.log(removeCartButtons)
    for(var i;i<removeCartButtons.length;i++){
        var buttons=removeCartButtons[i]
        buttons.addEventListener('click',removeCartItem)
    }
}
function removeCartItem(event){
    var buttonClicked=event.target;
    buttonClicked.parentElement.remove();
}
