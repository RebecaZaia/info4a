//no terminal: npm i express
import express from 'express'
const app = express()

app.use(espress.json())

const usuarios = []
app.get('/user', (req, res)=>{
  res.status(200).json(usuarios)
})

app.post('/user', (req, res) => {
  const {nome, idade} = req.body;
  usuarios.push({nome, idade})
  res.status(201).send("Tudo ok")
})

app.listen(3333, () => {
  console.log("Servidor rodando na porta 3333")
})
