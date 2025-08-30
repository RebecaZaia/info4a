//Common JS => require const http = require('http')
import http from 'node:http' //ESModules => import/export Foi adicionado "type": "module", no outro arquivo

const server = http.createServer((req, res) => {
    const {method, url} = req

    if (url == "/user" && method == "GET'"){
        return res.end("Buscar usuários")
    }

    if (url == "/user" && method == "POST'"){
        return res.end("Criar usuários")
    }
    
    return res.end("Hello world")
})

server.listen(3333) //acerssar localhost:3333
//nao to vendo esse arquivo :'(