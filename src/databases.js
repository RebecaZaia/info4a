selectItem (table, id){
  const data = this.#database[table] ?? []
  let item = {}
  if(Array.isArray(data)){
    item = data.filter(item => item.id == id)
  }
}
