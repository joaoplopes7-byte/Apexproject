class Inventario {
    capacidadeMaxima: number
    itens: string[]

    constructor() {
        this.capacidadeMaxima = 5
        this.itens = []
    }

    adicionarItem(nomeDoItem: string) {
        this.itens.push(nomeDoItem)
    }
}

enum EstadoJogador {
    VIVO = "VIVO",
    MORTO = "MORTO",
    ENVENENADO = "ENVENENADO"
}

class Personagem {
    protected nome: string
    protected vida: number
    public mochila: Inventario
    public estado: EstadoJogador

    constructor(nomeRecebido: string) {
        this.nome = nomeRecebido
        this.vida = 100
        this.mochila = new Inventario()
        this.estado = EstadoJogador.VIVO
    }

    get lerVida(): number {
        return this.vida
    }

    receberDano(dano:number) {
        this.vida -= dano
        if(this.vida < 0) {
            this.vida = 0
        }
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome}, e tenho ${this.vida} de vida!`)
    }

    atacar(){
        console.log(`${this.nome} desferiu um ataque básico.`)
    }

    esquivar(){
        console.log(`${this.nome} tentou rolar para longe do perigo.`)
    }
}


// class Pocao {
//     public nome: string
//     private cura: number

//     constructor(nomePocao: string, quantidadeCura: number) {
//         this.nome = nomePocao
//         this.cura = quantidadeCura
//     }

//     get lerCura(): number {
//         return this.cura
//     }

//     set alterarPoderdeCura(novoValor: number) {
//         this.cura = novoValor
//     }

//     consumir(){
//         console.log(`Você bebeu a ${this.nome} e curou ${this.cura} HP!`)
//     }

// }

// let pocao1 = new Pocao("HP +20", 20)
// let pocao2 = new Pocao("HP +30", 30)

// //heroi.apresentar()

// pocao1.consumir()
// pocao2.consumir()



// class Mago extends Personagem {
//     public mana: number

//     constructor(nomeMago: string) {
//         super(nomeMago)
//         this.mana = 100
//         this.vida = 80
//     }

//     atacar(){
//         if(this.mana >= 20){
//             console.log(`${this.nome} conjurou Bola de Fogo!`)
//             this.mana -= 20
//         } else {
//             console.log(`${this.nome} está sem mana e bateu com o cajado.`)
        
//         }
//     }
// }

class Guerreiro extends Personagem {
    public furia: number
    public forcaFisica: number

    constructor(nomeGuerreiro: string) {
        super(nomeGuerreiro)
        this.forcaFisica = 20
        this.furia = 0
        this.vida = 150
    }

    atacar(){
        if(this.furia < 100){
            console.log(`${this.nome} executou um golpe com sua espada! (+10 de Fúria)`)
            this.furia += 10
        } else {
            console.log(`${this.nome} executou o Golpe Furiosoooo! tiinnn.... pannn.... powww...uhg`)
            this.furia = 0
        }
    }
}

// let marlom = new Mago("Marlom")
// let felipus = new Guerreiro("Felipus")

// marlom.atacar()
// felipus.atacar()

// marlom.receberDano

//------------------------------------------------------------------------------------------------------------------------------------------------//

//Atividade-31-08-2026
class Arqueiro extends Personagem {
    public flechas : number

    constructor (nomeArqueiro: string) {
        super(nomeArqueiro)
        this.flechas = 20
    }

    atacar(){
        if (this.flechas > 0){
            console.log(`${this.nome} disparou uma flecha veloz!`)
            this.flechas -= 1
        } else {
            console.log(`${this.nome} está sem flechas e precisa recarregar!`)

        }
    }
}

let arqueiro = new Arqueiro("Arqueiro")
arqueiro.esquivar() //Arqueiro realizou a ação pois 'esquivar' já está definido na classe Pai 'Entidade'



let legolas = new Arqueiro("Legolas")

legolas.atacar()
legolas.atacar()
legolas.atacar()

legolas.esquivar()

legolas.mochila.adicionarItem("Arco Élfico")

console.log(legolas.mochila.itens[0])