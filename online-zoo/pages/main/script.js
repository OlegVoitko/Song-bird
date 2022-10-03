const headerBurger = document.querySelector('.header__burger')
const headerMenu = document.querySelector('.header__navigation')
const headerContainer = document.querySelector('.header__wrapper')
const headerBefore = document.querySelector('.header')
const headerLink = document.querySelectorAll('.navigation__link')
if(headerBurger){    
    headerBurger.addEventListener("click", function (e){
        headerBurger.classList.toggle('_active')
        headerMenu.classList.toggle('_active')        
        headerContainer.classList.toggle('_active')
        headerBefore.classList.toggle('_activeShadou')
        document.body.classList.toggle('_lock')
    })
}

function closeMenu(){
    headerBurger.classList.remove('_active')
    headerMenu.classList.remove('_active')        
    headerContainer.classList.remove('_active')
    headerBefore.classList.remove('_activeShadou')
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