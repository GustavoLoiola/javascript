import tabela2025 from "./tabela.js"
import express from "express"

const app = express()

app.get('/', (requisicao, resposta) => {
resposta.send(tabela2025)
})

app.get('/:sigla', (requisicao, resposta) => {
    const siglaInformada = requisicao.params.sigla.toUpperCase()
    const time = tabela2025.find(infoTime => infoTime.sigla === siglaInformada)
    resposta.send(time)
})

app.listen(3000, () => console.log('servidor rodando com sucesso!'))