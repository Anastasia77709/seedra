let body = document.querySelector(".page");
let promo = document.querySelector(".promo");
let blogItem1 = document.querySelector(".blog-item1");
let blogItem2 = document.querySelector(".blog-item2");
let blogItem3 = document.querySelector(".blog-item3");
let blogItem4 = document.querySelector(".blog-item4");
let container = document.querySelector(".container");
let setting = document.querySelector(".setting-click-img");
let settingBlock = document.querySelector(".setting-panel");
let themeButtons = document.querySelectorAll(".theme-buttons");
let viewButtonTile = document.querySelector(".view-button-tile");
let viewButtonStandard = document.querySelector(".view-button-standard");
let productBlock = document.querySelectorAll(".product-block");
let productsBox = document.querySelector(".products-box");
let main = document.querySelector(".main");
let firstButton = document.querySelector(".first-font-button");
let secondButton = document.querySelector(".second-font-button");
let texts = document.getElementsByTagName("p");
let h1s = document.getElementsByTagName("h1");
let buttons = document.getElementsByTagName("button");

setting.onclick = function () {
    settingBlock.classList.toggle("hidden-block");
}




for (let themeButton of themeButtons) { 
  themeButton.addEventListener('click', function(){ 
    document.querySelector('.active').classList.remove('active'); 
    themeButton.classList.add('active'); 
    promo.classList.toggle("dark");
    body.classList.toggle("dark");
    blogItem1.classList.toggle("dark");
    blogItem2.classList.toggle("dark");
    blogItem3.classList.toggle("dark");
    blogItem4.classList.toggle("dark");
  }); 
} 


let buttonTileHandler = () => {
  viewButtonTile.classList.add('view-checked'); 
  viewButtonStandard.classList.remove('view-checked');
  productsBox.classList.remove('list-standard-view'); 
  main.classList.remove("list-standard-view");
}

let buttonStandardHandler = () => {
  productsBox.classList.add('list-standard-view'); 
  main.classList.add("list-standard-view");
    viewButtonStandard.classList.add('view-checked'); 
    viewButtonTile.classList.remove('view-checked');
}

const init = () =>{ 
  viewButtonStandard.addEventListener('click', buttonStandardHandler); 
  viewButtonTile.addEventListener('click', buttonTileHandler); 
}; 


init(); 

let cookieAgreementBlock = document.querySelector(".cookies-agreement");
let cookieAgreementButton = document.querySelector(".cookies-agreement-button");

cookieAgreementButton.onclick = function () {
  cookieAgreementBlock.classList.add("hidden-block");
}

 secondButton.addEventListener('click', function(){ 
   for (let text of texts) {
    text.classList.remove("first-font");
    text.classList.add("second-font");
  }; 
 })

  secondButton.addEventListener('click', function(){ 
    for (let h1 of h1s) {
  h1.classList.remove("first-font");
    h1.classList.add("second-font");
  }; 
  })

   secondButton.addEventListener('click', function(){ 
    for (let button of buttons) {
  button.classList.remove("first-font");
  button.classList.add("second-font");
  }; 
  })
 
   firstButton.addEventListener('click', function(){ 
     for (let text of texts) {
    text.classList.remove("second-font");
    text.classList.add("first-font");
  }; 
 })

  firstButton.addEventListener('click', function(){ 
    for (let h1 of h1s) {
    h1.classList.remove("second-font");
    h1.classList.add("first-font");
  }; 
 })

   firstButton.addEventListener('click', function(){ 
    for (let button of buttons) {
    button.classList.remove("second-font");
    button.classList.add("first-font");
  }; 
   })
 




