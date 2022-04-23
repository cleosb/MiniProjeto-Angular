
export class Cartao{
    titulo: String
    descricao: String
    dono: String = ''

    constructor(titulo: String, descricao: String){
        this.titulo = titulo
        this.descricao = descricao
    }
}