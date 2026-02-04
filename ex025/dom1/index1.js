//Função para mudar tema

const btn_light = document.getElementById('lang')
const CurrentTheme = document.documentElement;


changeTheme = () => {
    const theme = CurrentTheme.getAttribute('data-theme');

    if(theme === 'dark') {
        CurrentTheme.removeAttribute('data-theme');
    }
    else {
       CurrentTheme.setAttribute('data-theme', 'dark')
    }
}

btn_light.addEventListener('click', changeTheme)






//Função carrosesel de cards


const cardsSection = document.querySelector('#cards');
const card = document.querySelectorAll('.card');
const btnLeft = document.querySelector('.arrow.left');
const btnRight = document.querySelector('.arrow.right');


const totalCards = card.length;
const visibleCards = 5;


const cardWidth = card[0].getBoundingClientRect().width + 12; // gap


let currentIndex = 0;
const maxIndex = totalCards - visibleCards;


function updateCarousel() {
  const offset = currentIndex * cardWidth;
  cardsSection.style.transform = `translateX(-${offset}px)`;
}

// direita
btnRight.addEventListener('click', () => {
  if (currentIndex < maxIndex) {
    currentIndex++;
    updateCarousel();
  }
});

// esquerda
btnLeft.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});
