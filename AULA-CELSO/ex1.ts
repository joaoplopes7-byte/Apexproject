// Missão 1: Dicionário de Combustíveis (Enum)
export enum TipoCombustivel {
    GASOLINA = "GASOLINA",
    ALCOOL = "ALCOOL",
    DIESEL = "DIESEL",
    ELETRICO = "ELETRICO"
}

//  Missão 2 & Desafio Bônus: Classe Base (Veiculo)
export class Veiculo {
    protected marca: string;
    protected modelo: string;
    protected velocidadeAtual: number;
    public combustivel: TipoCombustivel;


    
    constructor(marca: string, modelo: string, combustivel: TipoCombustivel) {
        this.marca = marca;
        this.modelo = modelo;
        this.combustivel = combustivel;
        this.velocidadeAtual = 0;
    }

    public acelerar(): void {
        console.log("O veículo acelerou!");
    }

    //  Desafio Bônus: Método frear
    public frear(): void {
        if (this.velocidadeAtual >= 10) {
            this.velocidadeAtual -= 10;
        } else {
            this.velocidadeAtual = 0;
        }
        console.log(`O veículo reduziu a velocidade para ${this.velocidadeAtual} km/h.`);
    }
}

//  Missão 3 e 4: Classe Carro
export class Carro extends Veiculo {
    public numeroDePortas: number;

    constructor(marca: string, modelo: string, combustivel: TipoCombustivel, numeroDePortas: number) {
        super(marca, modelo, combustivel);
        this.numeroDePortas = numeroDePortas;
    }

    public acelerar(): void {
        this.velocidadeAtual += 20;
        console.log(`O carro ${this.marca} ${this.modelo} acelerou suavemente para ${this.velocidadeAtual} km/h.`);
    }
}

//  Missão 3 e 4: Classe Moto
export class Moto extends Veiculo {
    public cilindradas: number;

    constructor(marca: string, modelo: string, combustivel: TipoCombustivel, cilindradas: number) {
        super(marca, modelo, combustivel);
        this.cilindradas = cilindradas;
    }

    public acelerar(): void {
        this.velocidadeAtual += 40;
        console.log(`A moto ${this.marca} cortou giro e saltou para ${this.velocidadeAtual} km/h!`);
    }
}

//  Missão 5: O Grande Teste

// 1 & 2. Instanciando o Carro e a Moto
const meuCarro = new Carro("Honda", "Civic", TipoCombustivel.GASOLINA, 4);
const minhaMoto = new Moto("Yamaha", "MT-09", TipoCombustivel.GASOLINA, 900);

// 3. Criando o Array tipado para a classe base Veiculo
const garagem: Veiculo[] = [meuCarro, minhaMoto];

// 4 & 5. Executando o laço forEach
console.log("---  TESTANDO ACELERAÇÃO DA GARAGEM ---");
garagem.forEach((veiculo) => {
    veiculo.acelerar();
});