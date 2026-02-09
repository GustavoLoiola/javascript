//Função para mudar tema

const btn_light = document.getElementById('lang')
const CurrentTheme = document.documentElement


changeTheme = () => {
    const theme = CurrentTheme.getAttribute('data-theme')

    if(theme === 'dark') {
        CurrentTheme.removeAttribute('data-theme')
    }
    else {
       CurrentTheme.setAttribute('data-theme', 'dark')
    }
}

btn_light.addEventListener('click', changeTheme)






//Função para mudar cor do header de acordo com a altura da tela

const header = document.querySelector("header")

changeColor = () => {
  if (window.scrollY > 200) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

window.addEventListener("scroll", changeColor);




//Animação de entrada para o article

const text = document.querySelector("article")


textAnimation = () => {
  if(window.scrollY > 100 && window.scrollY < 1200 ) {
    text.classList.add("active")
  }
  else {
    text.classList.remove("active")
  }
}

window.addEventListener('scroll', textAnimation)