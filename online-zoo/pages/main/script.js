const headerBurger = document.querySelector('.header__burger')
const headerMenu = document.querySelector('.header__navigation')
const headerContainer = document.querySelector('.header__wrapper')
const headerBefore = document.querySelector('.header')
const headerLink = document.querySelectorAll('.navigation__link')
const headerLogo = document.querySelector('.logo')
const headerH1 = document.querySelector('h1')
const headerNavigation = document.querySelector('.navigation')
const headerLogoBorder = document.querySelector('.logo__border')
const headerFigma = document.querySelector('.navigation__link__burger')
const headerNavLink = document.querySelector('.color__figma')
const headerBamboo = document.querySelector('.bamboo__header')
const headerLine1 = document.querySelector('.burger__line__1')
const headerLine2 = document.querySelector('.burger__line__2')
const headerLine3 = document.querySelector('.burger__line__3')
const headerLinkColor = document.querySelector('.navigation__link__active')

if(headerBurger){    
    headerBurger.addEventListener("click", function (e){
        headerBurger.classList.toggle('_active')
        headerMenu.classList.toggle('_active')        
        headerContainer.classList.toggle('_active')
        headerBefore.classList.toggle('_activeShadou')
        headerLogo.classList.toggle('_active')
        headerLogoBorder.classList.toggle('_active')
        headerH1.classList.toggle('_active')
        headerNavigation.classList.toggle('_active')
        headerFigma.classList.toggle('_active')
        headerNavLink.classList.toggle('_active')
        headerBamboo.classList.toggle('_active')
        headerLine1.classList.toggle('_active')
        headerLine2.classList.toggle('_active')
        headerLine3.classList.toggle('_active')
        headerLinkColor.classList.toggle('_active')         
        document.body.classList.toggle('_lock')
    })
}

function closeMenu(){
    headerBurger.classList.remove('_active')
    headerMenu.classList.remove('_active')        
    headerContainer.classList.remove('_active')
    headerBefore.classList.remove('_activeShadou')
    headerLogo.classList.remove('_active')

    headerH1.classList.remove('_active')
    headerNavigation.classList.remove('_active')
    headerLogoBorder.classList.remove('_active')
    headerFigma.classList.remove('_active')
    headerNavLink.classList.remove('_active')
    headerBamboo.classList.remove('_active')
    headerLine1.classList.remove('_active')
    headerLine2.classList.remove('_active')
    headerLine3.classList.remove('_active')
    headerLinkColor.classList.remove('_active')    
    document.body.classList.remove('_lock')
}
headerLink.forEach(menuItem => {
    menuItem.addEventListener('click', () =>{
        closeMenu();
    })
})

headerBefore.addEventListener('click', (e) =>{
    if(e.target.classList.contains('_activeShadou')){
        closeMenu();
    }
})


// document.getElementById('button__arrow__left').onclick = sliderLeft;
// var left = 0;

// function sliderLeft() {
//     let carousel = document.getElementById('carousel');
//     left = left - 390;
//     carousel.style.left = left+'px';
// }

// document.getElementById('button__arrow__right').onclick = sliderRight;
// var right = 0;

// function sliderRight() {
//     let carousel = document.getElementById('carousel');
//     left = left + 390;
//     carousel.style.left = left+'px';
// }

// const inputElement = document.getElementsByTagName("input")[0]
// const progressElement = document.getElementsByTagName("progress")[0]

// inputElement.oninput = (event) => { 
//   progressElement.value = event.target.value
// }



// =================================slider
let dataAnimals = [
    {
      id: '0', 
      name: "GIANT PANDAS",
      img_animal: "../../assets/images/Rectangle 5.jpg",
      img: "../../assets/icons/banana-bamboo_icon.png",      
      description: "Native to Southwest China",      
    },
    {
      id: '1',
      name: "EAGLES",
      img_animal: "../../assets/images/Rectangle 5 (1).jpg",
      img: "../../assets/icons/meet-fish_icon.png",      
      description: "Native to South America",      
    },
    {
      id: '2',
      name: "GORILLAS",
      img_animal: "../../assets/images/Rectangle 5 (2).jpg",
      img: "../../assets/icons/banana-bamboo_icon.png",      
      description: "Native to Congo",      
    },     
    {
      id: '3',
      name: "TWO-TOED SLOTH",
      img_animal: "../../assets/images/Rectangle 5 (3).jpg",
      img: "../../assets/icons/banana-bamboo_icon.png",      
      description: "Mesoamerica, South America",      
    },     
    {
      id: '4', 
      name: "ALLIGATORS",
      img_animal: "../../assets/images/Rectangle 5 (6).jpg",
      img: "../../assets/icons/meet-fish_icon.png",      
      description: "Native to Southeastern U. S.",      
    },     
    {
      id: '5',
      name: "CHEETAHS",
      img_animal: "../../assets/images/Rectangle 5 (4).jpg",
      img: "../../assets/icons/meet-fish_icon.png",      
      description: "Native to Africa",      
    },     
    {
      id: '6',
      name: "PENGUINS",
      img_animal: "../../assets/images/Rectangle 5 (5).jpg",
      img: "../../assets/icons/meet-fish_icon.png",      
      description: "Native to Antarctica",      
    },     
  ];
 

// const sliderCards = document.querySelector(".slider__cards");
// const sliderArrowLeft  = document.querySelector("#button__arrow__left");
// const sliderArrowRight  = document.querySelector("#button__arrow__right");

// const sliderCardsLeft = document.querySelector(".slider__cards_left");
// const sliderCardsCenter = document.querySelector(".slider__cards_center");
// const sliderCardsRight = document.querySelector(".slider__cards_right");

// let windowInnerWidth = window.innerWidth;

// let bgBlockControls = true;

// const startCardArray = [0, 1, 2, 3, 4, 5, 6, 7];
// let shuffleCardArray = [];
// let centrCardArray = [];
// let leftRightCardArray = [];
// let countStepCardArray = 6;

// function updateCountStepCardArray() {
//     if (windowInnerWidth >= 1000) {
//        countStepCardArray = 6;
//     } else if (windowInnerWidth > 630 && windowInnerWidth < 1000) {
//        countStepCardArray = 4;
//     } else {
//        countStepCardArray = 2;
//     }    
//  }
//  updateCountStepCardArray();

// // Начало от ширины экрана количество карточек
// window.addEventListener("resize", function () {    
//     windowInnerWidth = window.innerWidth;
//     testimonialsInput.value = 0;    
//     updateCountStepCardArray();
//     UpdateStapTransformTestimonials();
//     updatetesTimonialsInputMax();
 
//     sliderCardsLeft.innerHTML = "";
//     sliderCardsCenter.innerHTML = "";
//     sliderCardsRight.innerHTML = "";
//     startgenerareArraysCards();
//     addCardsFromArray(centrCardArray, addSliderCardsCenter);
//     addCardsFromArray(leftRightCardArray, addSliderCardsLeftAndRight); 
    
//  });
//  // Конец от ширины экрана количество карточек
 
//  // Начало Функция перемешивания массива
//  function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//        const j = Math.floor(Math.random() * (i + 1));
//        [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
//  }
//  // Конец Функция перемешивания массива
 
//  //===========формируем массивы =====================
 
//  function startgenerareArraysCards(params) {
//     shuffleCardArray = startCardArray.slice(0);
//     shuffleCardArray = shuffle(shuffleCardArray);
//     centrCardArray = shuffleCardArray.splice(0, countStepCardArray);
//     leftRightCardArray = shuffleCardArray.splice(0, countStepCardArray);     
//  }
//  startgenerareArraysCards();
 
//  // ===========Конец ===========
 
//  //  ==========Начало заполнения карточек================
 
//  function addCardsFromArray(array, cardFunction) {
//     array.forEach((id, index, array) => {
//        cardFunction(id);
//     });
//  }
 
//  function addSliderCardsLeftAndRight(id) {
//     sliderCardsLeft.append(createCard(id));
//     if (windowInnerWidth > 630) {
//        sliderCardsRight.append(createCard(id));
//     }
//  }
 
//  function addSliderCardsCenter(id) {
//     sliderCardsCenter.append(createCard(id));
//  }
 
//  addCardsFromArray(centrCardArray, addSliderCardsCenter);
//  addCardsFromArray(leftRightCardArray, addSliderCardsLeftAndRight);
 
//  // Конец 
 
//  sliderCards.addEventListener("transitionstart", (e) => {
//     if (
//        e.target.className === "slider__cards" &&
//        e.propertyName === "transform"
//     ) {
//        setTimeout(() => {
//           bgBlockControls = false;
//        }, 50);
//     }
//  });
 
//  sliderCards.addEventListener("transitionend", (e) => {    
//     if (
//        e.target.className === "slider__cards" &&
//        e.propertyName === "transform"
//     ) {
//        setTimeout(() => {
//           bgBlockControls = true;
//        }, 50);
//        sliderCardsCenter.innerHTML = "";
//        addCardsFromArray(leftRightCardArray, addSliderCardsCenter);
//        sliderCards.style.transitionDuration = "0s";
//        sliderCards.style.transform = `translateX(${0}%)`;
 
//        shuffleCardArray = Array.from(
//           new Set(shuffleCardArray.concat(centrCardArray))
//        );
//        shuffleCardArray = shuffle(shuffleCardArray);
       
 
//        centrCardArray = leftRightCardArray.slice(0);
//        leftRightCardArray = shuffleCardArray.splice(0, countStepCardArray);       
//        sliderCardsLeft.innerHTML = "";
//        sliderCardsRight.innerHTML = "";
//        addCardsFromArray(leftRightCardArray, addSliderCardsLeftAndRight);
//     }
//  });
 
//  sliderArrowRight.addEventListener("click", () => {
//     if (bgBlockControls) {
//        sliderCards.style.transitionDuration = "1.5s";
//        sliderCards.style.transform = `translateX(${-100}%)`;
//     }
//  });
 
//  sliderArrowLeft.addEventListener("click", () => {
//     if (bgBlockControls) {
//        sliderCards.style.transitionDuration = "1.5s";
//        sliderCards.style.transform = `translateX(${100}%)`;
//     }
//  });
 
//  function createCard(id) {
//     let sliderCard = document.createElement("div");
//     sliderCard.classList.add("slider__card");    
 
//     let imgCard = document.createElement("img");
//     imgCard.src = dataAnimals[0].img_animal;
//     sliderCard.append(imgCard);
 
//     let sliderCardWrapper = document.createElement("div");
//     sliderCardWrapper.classList.add("slider__card__wrapper");
//     sliderCard.append(sliderCardWrapper);
 
//     let divWrapperNull = document.createElement("div");
//     sliderCardWrapper.append(divWrapperNull);
 
//     let sliderCardTitle = document.createElement("p");
//     sliderCardTitle.classList.add("animals__text_bold");
//     sliderCardTitle.textContent = dataAnimals[0].name;
//     divWrapperNull.append(sliderCardTitle);
 
//     let sliderCardDescription = document.createElement("div");
//     sliderCardDescription.classList.add("animals__text__300");
//     sliderCardDescription.textContent = dataAnimals[0].description;
//     divWrapperNull.append(sliderCardDescription);
 
//     let sliderCardImg = document.createElement("div");
//     sliderCardImg.classList.add("animals__icons");
//     sliderCardWrapper.append(sliderCardImg);
 
//     let sliderCardEat = document.createElement("img");
//     sliderCardEat.src = dataAnimals[1].img;
//     sliderCardImg.append(sliderCardEat);
 
//     return sliderCard;
//  }
 
 // End Slider Pets


const BTN_LEFT = document.querySelector("#button__arrow__left");
const BTN_RIGHT = document.querySelector("#button__arrow__right");
const CAROUSEL = document.querySelector("#carousel");
const ITEM_LEFT = document.querySelector("#item-left");
const ITEM_RIGHT = document.querySelector("#item-right");

const createCardTemplate = () => {
  const card = document.createElement("div");
  card.classList.add("card");
  return card;
}

const moveLeft = () => {
  CAROUSEL.classList.add("transition-left");
  BTN_LEFT.removeEventListener("click", moveLeft);
  BTN_RIGHT.removeEventListener("click", moveRight);
};

const moveRight = () => {
  CAROUSEL.classList.add("transition-right");
  BTN_LEFT.removeEventListener("click", moveLeft);
  BTN_RIGHT.removeEventListener("click", moveRight);
};

BTN_LEFT.addEventListener("click", moveLeft);
BTN_RIGHT.addEventListener("click", moveRight);

CAROUSEL.addEventListener("animationend", (animationEvent) => {
  let changedItem;
  if (animationEvent.animationName === "move-left") {
    CAROUSEL.classList.remove("transition-left");
    changedItem = ITEM_LEFT;
    document.querySelector("#item-active").innerHTML = ITEM_LEFT.innerHTML;
  } else {
    CAROUSEL.classList.remove("transition-right");
    changedItem = ITEM_RIGHT;
    document.querySelector("#item-active").innerHTML = ITEM_RIGHT.innerHTML;      
  }
    
//   changedItem.innerHTML = "";    
//   for (let i = 0; i < 3; i++) {
//     const card = createCardTemplate();
//     card.innerText = Math.floor(Math.random() * 8);
//     changedItem.appendChild(card);
//   }

              
    let card = document.createDocumentFragment();
    while (changedItem.children.length) {
        card.appendChild(changedItem.children[Math.floor(Math.random() * changedItem.children.length)]);
    }
    changedItem.appendChild(card);  


  
  BTN_LEFT.addEventListener("click", moveLeft);
  BTN_RIGHT.addEventListener("click", moveRight);
})

// onload = function left(){
//     var parent = document.getElementById("item-left");
//     console.log(parent)    
//     var frag = document.createDocumentFragment();
//     while (parent.children.length) {
//         frag.appendChild(parent.children[Math.floor(Math.random() * parent.children.length)]);
//     }
//     parent.appendChild(frag);
// }





// let booksList = document.querySelector(`.item`);
// let liveBooks = booksList.children;

// console.log(liveBooks);

// let arr = [];
// for(let i = 0; i < liveBooks.length; i++) {
//     arr.push(liveBooks[i])
// }
// console.log(Object.values(arr));

// function shuffleArray(arr) {
//     for (var i = arr.length - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         var temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//     }
//     return arr
// }
// console.log(shuffleArray(arr))

// console.log(Object.fromEntries(arr));





let elem = document.querySelector('input[type="range"]');
const screenWidth = document.documentElement.clientWidth
console.log(document.documentElement.clientWidth)

let rangeValue = function(){
    let newValue = elem.value;
    
    if(screenWidth >= 1600){
        if(newValue === '0') {
            let target = document.getElementById('testimonials__items__slider').style.transform = 'translateX(5px)'       
        }
        if(newValue === '1') {
            let target = document.getElementById('testimonials__items__slider').style.transform = 'translateX(-284px)'       
        }else if(newValue === '2'){
            let target = document.getElementById('testimonials__items__slider').style.transform = 'translateX(-580px)' 
        }else if(newValue === '3'){
            let target = document.getElementById('testimonials__items__slider').style.transform = 'translateX(-875px)' 
        }else if(newValue === '4'){
            let target = document.getElementById('testimonials__items__slider').style.transform = 'translateX(-1165px)' 
        }else if(newValue === '5'){
            let target = document.getElementById('testimonials__items__slider').style.transform = 'translateX(-1463px)' 
        }else if(newValue === '6'){
            let target = document.getElementById('testimonials__items__slider').style.transform = 'translateX(-1754px)' 
        }else if(newValue === '7'){
            let target = document.getElementById('testimonials__items__slider').style.transform = 'translateX(-2047px)' 
        }
    }

    if(screenWidth >= 1000 && screenWidth <= 1599){
        if(newValue === '0') {
            let target = document.getElementById('testimonials__items__slider').style.transform = 'translateX(2px)'       
        }
        if(newValue === '1') {
            let target = document.getElementById('testimonials__items__slider').style.transform = 'translateX(-318px)'       
        }else if(newValue === '2'){
            let target = document.getElementById('testimonials__items__slider').style.transform = 'translateX(-640px)' 
        }else if(newValue === '3'){
            let target = document.getElementById('testimonials__items__slider').style.transform = 'translateX(-960px)' 
        }else if(newValue === '4'){
            let target = document.getElementById('testimonials__items__slider').style.transform = 'translateX(-1280px)' 
        }else if(newValue === '5'){
            let target = document.getElementById('testimonials__items__slider').style.transform = 'translateX(-1604px)' 
        }else if(newValue === '6'){
            let target = document.getElementById('testimonials__items__slider').style.transform = 'translateX(-1923px)' 
        }else if(newValue === '7'){
            let target = document.getElementById('testimonials__items__slider').style.transform = 'translateX(-2245px)' 
        }
    }        
    //target.innerHTML = newValue;
}
elem.addEventListener("input", rangeValue)


// var elem = document.querySelector('input[type="range"]');

// var rangeValue = function(){
//   var newValue = elem.value;
//   console.log(newValue)

//   if(newValue === '2'){
//     console.log('yes')
//   }

//   var target = document.querySelector('.value');
//   //target.innerHTML = newValue;
// }

// elem.addEventListener("input", rangeValue);

// var oldWidth = window.innerWidth;
// window.onresize = function () {
// 	var newWidth = window.innerWidth;
// 	if (newWidth != oldWidth) {
// 		//alert("width changed");
// 		oldWidth = newWidth;
// 	}
// };



// const popupLinks = document.querySelectorAll('.popup-link');
// const body = document.querySelector('body');
// const lockPadding = document.querySelectorAll('.lock-pading');

// let unlock = true;

// if(popupLinks.length > 0) {
//     for (let index = 0; index < popupLinks.length; index++) {
//         const popupLink = popupLinks[index];
//         popupLink.addEventListener('click', function (e) {
//             const popupName = popupLink.getAttribute('href').replace('#', '');
//             const curentPopup = document.getElementById(popupName);
//             popupOpen(curentPopup);
//             e.preventDefault();
//         });
//     }
// }
// const popupCloseIcon = document.querySelectorAll('.close-popup');
// if (popupCloseIcon.length > 0) {
//     for (let index = 0; index < popupCloseIcon.length; index++) {
//         const el = popupCloseIcon[index];
//         el.addEventListener('click', function (e) {
//             popupClose(el.closest('.popup'));
//             e.preventDefault();
//         });
//     }
// }

// function popupOpen(curentPopup) {
//     if (curentPopup && unlock) {
//         const popupActive = document.querySelector('.popup.open');
//         if (popupActive) {
//             popupClose(popupActive, false);
//         } else {
//             bodyLock()
//         }
//         curentPopup.classList.add('open');
//         curentPopup.addEventListener('click', function (e) {
//             if (!e.target.closest('.popup__content')) {
//                 popupClose(e.target.closest('.popup'));
//             }
//         });
//     }
// }

// function popupClose(popupActive, doUnlock = true) {
//     if (unlock) {
//         popupActive.classList.remove('open');        
//     }
// }
        
const CARD_POPUP1 = document.querySelector('.popup-link1')
const MODAL_POPUP1 = document.querySelector('.popup1')
    const CARD_POPUP2 = document.querySelector('.popup-link2')
    const MODAL_POPUP2 = document.querySelector('.popup2')
        const CARD_POPUP3 = document.querySelector('.popup-link3')
        const MODAL_POPUP3 = document.querySelector('.popup3')
            const CARD_POPUP4 = document.querySelector('.popup-link4')
            const MODAL_POPUP4 = document.querySelector('.popup4')
                const CARD_POPUP5 = document.querySelector('.popup-link5')
                const MODAL_POPUP5 = document.querySelector('.popup5')
                    const CARD_POPUP6 = document.querySelector('.popup-link6')
                    const MODAL_POPUP6 = document.querySelector('.popup6')
                        const CARD_POPUP7 = document.querySelector('.popup-link7')
                        const MODAL_POPUP7 = document.querySelector('.popup7')
                            const CARD_POPUP8 = document.querySelector('.popup-link8')
                            const MODAL_POPUP8 = document.querySelector('.popup8')
                                const CARD_POPUP9 = document.querySelector('.popup-link9')
                                const MODAL_POPUP9 = document.querySelector('.popup9')
                                    const CARD_POPUP10 = document.querySelector('.popup-link10')
                                    const MODAL_POPUP10 = document.querySelector('.popup10')
                                        const CARD_POPUP11 = document.querySelector('.popup-link11')
                                        const MODAL_POPUP11 = document.querySelector('.popup11')                

const CANCEL_POPUP1 = document.querySelector('.cancel_popup1')
const CANCEL_POPUP2 = document.querySelector('.cancel_popup2')
const CANCEL_POPUP3 = document.querySelector('.cancel_popup3')
const CANCEL_POPUP4 = document.querySelector('.cancel_popup4')
const CANCEL_POPUP5 = document.querySelector('.cancel_popup5')
const CANCEL_POPUP6 = document.querySelector('.cancel_popup6')
const CANCEL_POPUP7 = document.querySelector('.cancel_popup7')
const CANCEL_POPUP8 = document.querySelector('.cancel_popup8')
const CANCEL_POPUP9 = document.querySelector('.cancel_popup9')
const CANCEL_POPUP10 = document.querySelector('.cancel_popup10')
const CANCEL_POPUP11 = document.querySelector('.cancel_popup11')

CARD_POPUP1.addEventListener("click", function(e){
    MODAL_POPUP1.classList.toggle('_active')
    document.body.classList.toggle('_lock')
    CANCEL_POPUP1.classList.toggle('_active')
})
CARD_POPUP2.addEventListener("click", function(e){
    MODAL_POPUP2.classList.toggle('_active')
    document.body.classList.toggle('_lock')
    CANCEL_POPUP2.classList.toggle('_active')
})
CARD_POPUP3.addEventListener("click", function(e){
    MODAL_POPUP3.classList.toggle('_active')
    document.body.classList.toggle('_lock')
    CANCEL_POPUP3.classList.toggle('_active')
})
CARD_POPUP4.addEventListener("click", function(e){
    MODAL_POPUP4.classList.toggle('_active')
    document.body.classList.toggle('_lock')
    CANCEL_POPUP4.classList.toggle('_active')
})
CARD_POPUP5.addEventListener("click", function(e){
    MODAL_POPUP5.classList.toggle('_active')
    document.body.classList.toggle('_lock')
    CANCEL_POPUP5.classList.toggle('_active')
})
CARD_POPUP6.addEventListener("click", function(e){
    MODAL_POPUP6.classList.toggle('_active')
    document.body.classList.toggle('_lock')
    CANCEL_POPUP6.classList.toggle('_active')
})
CARD_POPUP7.addEventListener("click", function(e){
    MODAL_POPUP7.classList.toggle('_active')
    document.body.classList.toggle('_lock')
    CANCEL_POPUP7.classList.toggle('_active')
})
CARD_POPUP8.addEventListener("click", function(e){
    MODAL_POPUP8.classList.toggle('_active')
    document.body.classList.toggle('_lock')
    CANCEL_POPUP8.classList.toggle('_active')
})
CARD_POPUP9.addEventListener("click", function(e){
    MODAL_POPUP9.classList.toggle('_active')
    document.body.classList.toggle('_lock')
    CANCEL_POPUP9.classList.toggle('_active')
})
CARD_POPUP10.addEventListener("click", function(e){
    MODAL_POPUP10.classList.toggle('_active')
    document.body.classList.toggle('_lock')
    CANCEL_POPUP10.classList.toggle('_active')
})
CARD_POPUP11.addEventListener("click", function(e){
    MODAL_POPUP11.classList.toggle('_active')
    document.body.classList.toggle('_lock')
    CANCEL_POPUP11.classList.toggle('_active')
})

function closeCard(){    
    MODAL_POPUP1.classList.remove('_active')
    CANCEL_POPUP1.classList.remove('_active')
    MODAL_POPUP2.classList.remove('_active')
    CANCEL_POPUP2.classList.remove('_active')
    MODAL_POPUP3.classList.remove('_active')
    CANCEL_POPUP3.classList.remove('_active')
    MODAL_POPUP4.classList.remove('_active')
    CANCEL_POPUP4.classList.remove('_active')
    MODAL_POPUP5.classList.remove('_active')
    CANCEL_POPUP5.classList.remove('_active')
    MODAL_POPUP6.classList.remove('_active')
    CANCEL_POPUP6.classList.remove('_active')
    MODAL_POPUP7.classList.remove('_active')
    CANCEL_POPUP7.classList.remove('_active')
    MODAL_POPUP8.classList.remove('_active')
    CANCEL_POPUP8.classList.remove('_active')
    MODAL_POPUP9.classList.remove('_active')
    CANCEL_POPUP9.classList.remove('_active')
    MODAL_POPUP10.classList.remove('_active')
    CANCEL_POPUP10.classList.remove('_active')
    MODAL_POPUP11.classList.remove('_active')
    CANCEL_POPUP11.classList.remove('_active')    
    document.body.classList.toggle('_lock')
}

MODAL_POPUP1.addEventListener('click', (e) =>{
    if(e.target.classList.contains('_active')){
        closeCard();
    }
})
MODAL_POPUP2.addEventListener('click', (e) =>{
    if(e.target.classList.contains('_active')){
        closeCard();
    }
})
MODAL_POPUP3.addEventListener('click', (e) =>{
    if(e.target.classList.contains('_active')){
        closeCard();
    }
})
MODAL_POPUP4.addEventListener('click', (e) =>{
    if(e.target.classList.contains('_active')){
        closeCard();
    }
})
MODAL_POPUP5.addEventListener('click', (e) =>{
    if(e.target.classList.contains('_active')){
        closeCard();
    }
})
MODAL_POPUP6.addEventListener('click', (e) =>{
    if(e.target.classList.contains('_active')){
        closeCard();
    }
})
MODAL_POPUP7.addEventListener('click', (e) =>{
    if(e.target.classList.contains('_active')){
        closeCard();
    }
})
MODAL_POPUP8.addEventListener('click', (e) =>{
    if(e.target.classList.contains('_active')){
        closeCard();
    }
})
MODAL_POPUP9.addEventListener('click', (e) =>{
    if(e.target.classList.contains('_active')){
        closeCard();
    }
})
MODAL_POPUP10.addEventListener('click', (e) =>{
    if(e.target.classList.contains('_active')){
        closeCard();
    }
})
MODAL_POPUP11.addEventListener('click', (e) =>{
    if(e.target.classList.contains('_active')){
        closeCard();
    }
})

