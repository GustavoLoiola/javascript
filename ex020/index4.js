const div = document.querySelector('div#quadrado')
const cores = ['Yellow', 'Green', 'Red', 'Blue', 'Pink']
indice = 0
mudaCor = () => {
    div.style.backgroundColor = cores[indice]
    indice = (indice + 1) % cores.length
}


div.addEventListener('click', mudaCor)