const hamburguer = document.querySelector("img#hamburguer")
const itemMenu = document.querySelectorAll("ul.navigation > li")
const nav = document.querySelector("div#nav")


const openMenu = ()  =>{
    if(nav.style.display == 'none') {
        nav.style.display = 'flex'
    }
    else {
        nav.style.display = 'none'
    }
}

hamburguer.addEventListener("click", openMenu)