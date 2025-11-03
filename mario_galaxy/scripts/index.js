const hamburguer = document.querySelector("img#hamburguer")
const menu = document.querySelectorAll("ul.navigation")
const lateral = document.querySelector("div#nav")


const clickMenu = () => {
    menu.forEach(menu => {
    if(menu.style.display == 'none'|| menu.style.display =='') {
        menu.style.display = 'block'
        menu.style.flexDirection ='column'
        menu.style.columnGap = '200px'
        lateral.style.marginTop = '300px'
        lateral.style.height = '100vh'
        lateral.style.width = '25vw'
        lateral.style.justifyContent = 'space-around'
        lateral.style.flexDirection = 'column'
        lateral.style.backgrounSize = 'cover'
        lateral.style.margin = '-20px'
    }
    else {
        menu.style.display = 'none'
    }
    })
}


hamburguer.addEventListener( "click", clickMenu) 

