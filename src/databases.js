import { error } from 'node:console'
import fs from 'node:fs/promises'

const databasePath = new URL('../db.json', import.meta.url)

export class Database {
    #database = {}

    constructor (){
        fs.readFile(databasePath, 'utf-8')
        .then(data => {
            this.#database = JSON.parse(data)
        })
        .catch(() => {
            this.#persist()
        })
    }

    #persist(){
        fs.writeFile(databasePath, JSON.stringify(this.#database))
    }

    select(table){
        const data = this.#database[table] ?? []
        return data
    }

    selectItem(table, id){
        const data = this.#database[table] ?? []
        let item = {}
        if(Array.isArray(data)){
            item = data.find(item => item.id == id)
        }
       return item 
    }

    delete(table, id){
        try {
            const data = this.#database[table] ?? []
            const newData = data.filter(item => item.id != id)
            console.log("Dados carregados")
            this.#database[table] = [newData]
            this.#persist()
            return ({
                error: false,
                mensagem: "Sucesso ao deletar"
            })
        } catch (error) {
            return ({
                error: error,
                mensagem: "Erro ao deletar"
            })
        }

    }

    update(table, id, novo){
        const data = this.#database[table] ?? []
        const indice = data.findIndex(item => item.id == id)
        if (indice != -1){
            data.splice(indice, 1, novo)
            this.#persist()
            return {
                error: false,
                mensagem: "Alterado com sucesso"
            }
        }

        return {
                error: true,
                mensagem: "Id não encontrado"
        }
    }


    insert(table, data){
        if(Array.isArray(this.#database[table])){
            this.#database[table].push(data)
        } else {
            this.#database[table] = [data]
        }

        this.#persist()

        return data
    }
}
