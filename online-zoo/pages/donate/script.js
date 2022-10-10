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






document.getElementById('textField').value='100';

let radio = document.getElementsByName('point');

for (let i = 0; i < radio.length; i++) {
    radio[i].onchange = testRadio;
}
function testRadio () {
    document.getElementById('textField').value = (this.value);
    // console.log (this.value)
}

let radioValue = document.getElementsByName('point')

  textField.oninput = function() {
    textField.innerHTML = textField.value;  
    // console.log(textField.value)        
    for (let i = 0; i < radioValue.length; i++){
        if(textField.value === radioValue[i].value) {              
            radioValue[i].checked = true        
        } else radioValue[i].checked = false
    }
    if (this.value.length > 4) {
        this.value = this.value.slice(0,0); 
    }
};


 
 
