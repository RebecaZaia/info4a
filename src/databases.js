












selectItem (table, id){
  const data = this.#database[table] ?? []
  let item = {}
  if(Array.isArray(data)){
    item = data.find(item => item.id == id)
  }
  return item
}
