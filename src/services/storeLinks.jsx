//Buscar os links salvos

export async function getLinksSalve(key){
    const myLinks = await localStorage.getItem(key)

    let linksSaves=JSON.parse(myLinks) || []

    return linksSaves
}

// Salvar um link no localStorage
export async function saveLink(key,newLink){
    let linkStorage = await getLinksSalve(key)

    //Se já tiver um link salvo com algum ID eu nao vou duplicar
    const hasLink=linkStorage.some(links=>links.id===newLink.id)

    if(hasLink){
        console.log("Este link já existe")
        return
    }

    //adicionar esse novo link na lista

    linkStorage.push(newLink)
    await localStorage.setItem(key,JSON.stringify(linkStorage))
    console.log("Link salvo com sucesso")

}
//deletar um link salvo

export function linkDelete(links,id){
    let myLinks=links.filter(item=>{
        return (item.id!==id)

    })
    localStorage.setItem('@encurtaLink',JSON.stringify(myLinks))
    return myLinks

}



