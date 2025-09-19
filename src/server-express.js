//no terminal: npm i express
import express from 'express'
const app = express()

app.use(express.json())

const usuarios = []
app.get('/user', (req, res)=>{
  res.status(200).json(usuarios)
})

app.post('/user', (req, res) => {
  const {nome, idade} = req.body;
  if (nome && idade){
    usuarios.push({nome, idade})
  } 
  else { return res.send("Informações inválidas")}

  console.log(usuarios)
  res.status(201).send("Tudo ok")
})

app.listen(3333, () => {
  console.log("Servidor na porta 3333")
})
