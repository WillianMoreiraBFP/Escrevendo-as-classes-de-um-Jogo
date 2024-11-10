// Definindo a classe Heroi
class Heroi {
  // Construtor para inicializar as propriedades do herói
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  // Método atacar que exibe a mensagem conforme o tipo do herói
  atacar() {
    let ataque = "";

    // Definindo o tipo de ataque com base no tipo do herói
    if (this.tipo === "mago") {
      ataque = "usou magia";
    } else if (this.tipo === "guerreiro") {
      ataque = "usou espada";
    } else if (this.tipo === "monge") {
      ataque = "usou artes marciais";
    } else if (this.tipo === "ninja") {
      ataque = "usou shuriken";
    }

    // Exibindo a mensagem do ataque
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Criando instâncias (objetos) de heróis com diferentes tipos
let heroi1 = new Heroi("Arthur", 30, "guerreiro");
let heroi2 = new Heroi("Merlin", 50, "mago");
let heroi3 = new Heroi("Liang", 40, "monge");
let heroi4 = new Heroi("Shiro", 25, "ninja");

// Chamando o método atacar para cada herói
heroi1.atacar();  // O guerreiro atacou usando espada
heroi2.atacar();  // O mago atacou usando magia
heroi3.atacar();  // O monge atacou usando artes marciais
heroi4.atacar();  // O ninja atacou usando shuriken
