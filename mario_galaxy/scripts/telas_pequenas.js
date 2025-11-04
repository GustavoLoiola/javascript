const hamburguer = document.querySelector("img#hamburguer");
const itemMenu = document.querySelectorAll("ul.navigation > li");
const nav = document.querySelector("div#nav");

let isOpen = false;

const openMenu = () => {
  if (!isOpen) {
    // mostra o nav primeiro (estava display: none no CSS)
    nav.style.display = 'flex';
    // espera o frame para o browser aplicar o display, aí anima
    requestAnimationFrame(() => {
      nav.style.transform = 'translateX(0)';
    });
    isOpen = true;
  } else {
    // anima para fora
    nav.style.transform = 'translateX(-100%)';
    // depois que a transição terminar, esconde com display:none
    const onTransEnd = (e) => {
      if (e.propertyName === 'transform') {
        nav.style.display = 'none';
        nav.removeEventListener('transitionend', onTransEnd);
      }
    };
    nav.addEventListener('transitionend', onTransEnd);
    isOpen = false;
  }
};

hamburguer.addEventListener("click", openMenu);
