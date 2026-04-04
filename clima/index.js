const key = '4f49024084d955995e077c00af97457e'
const city = document.querySelector("input#city")
const btn = document.querySelector("button#btn")


const dataView = (data) => {
    document.querySelector("div#name").innerHTML = `Tempo em ${data.name}`
    document.querySelector("div#number").innerHTML = `${Math.floor(data.main.temp)}°C`
    document.querySelector("p#desc").innerHTML = data.weather[0].description
    document.querySelector("div#humidity").innerHTML = `Umidade: ${data.main.humidity.toFixed(0)}%`
    document.querySelector("img#weather-icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    document.querySelector("img#weather-icon").style.visibility = 'visible'

    console.log(data)
}

 const searchCity = async (city) => {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())

    dataView(data)
}

const btnClick = () => {
    searchCity(city.value)
}


btn.addEventListener('click', btnClick)