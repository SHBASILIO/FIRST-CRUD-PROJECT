const menu = document.querySelectorAll('.menu-mobile')[0]
const navBar = document.querySelectorAll('.nav-bar')[0]

menu.addEventListener("click", toggleMenu, false)

var isOpen = false
function toggleMenu(){
    if(!isOpen){
        navBar.classList.add('menu-opened')
        isOpen = true
    }
    else{
        navBar.classList.remove('menu-opened')
        isOpen = false
    }
}

/* MENU ATIVO */

const courrentPage = location.pathname
const menuItens = document.querySelectorAll("nav ul a")

for(iten of menuItens){
    if(courrentPage.includes(iten.getAttribute("href"))){
        iten.classList.add("menuActive")
    }
}