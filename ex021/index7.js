const informacoesPais = async (paisdesejado) => {
    const info = await fetch('https://restcountries.com/v3.1/name/' + paisdesejado)
    console.log(await info.json())
}

informacoesPais('korea')