
var burgerDiv = document.querySelector('.toogle_menu_bar');
var saugiklis = true;

function burger(){
    if(saugiklis){
        burgerDiv.classList.add('overlay');   
        saugiklis = false;
        console.log(burgerDiv);
    }else{
    burgerDiv.classList.remove('overlay');
    saugiklis = true;
    console.log(burgerDiv);
}
}