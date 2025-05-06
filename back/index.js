//para rodar, npm run start:dev
//motivo: mudança no script 

const express = require('express')
const app = express()
const { GoogleGenAI } = require ('@google/genai')
app.use(express.json())

//endpoint: metodo http, padrão de acesso, funcionalidade (3 coisas que caracterizam o endpoint)
//metodos que podem ser utilizada: GET(obter), POST(postar/lançar), PUT (atualizar), DELETE
//usjt.br/notas
//funcionalidade () => {}

// metodo:
//
// funcionalidade:() => {}
app.post('/pergunte-ao-gemini', async (req, res) => {
    const ai = new GoogleGenAI({ apiKey: "" })
    const prompt = req.body.prompt
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt,
    });
    res.json({"resposta": response.text})
})
app.listen(3000, () => console.log("Beleza, rodando"))