// Adiciona um evento de envio ao formulário com ID 'campos'
document.getElementById('campos').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Obtém os valores dos campos de entrada
    let nome = document.getElementById('nome').value;
    let idade = parseInt(document.getElementById('idade').value); 
    let tipo = document.getElementById('tipo').value.toLowerCase(); // Corrigido para pegar o valor como string

    class Heroi {
        constructor(nome, idade, tipo) {
            this.nome = nome;
            this.idade = idade;
            this.tipo = tipo;
        }

        atacar() {
            const ataques = {
                mago: "magia",
                guerreiro: "espada",
                monge: "artes marciais",
                ninja: "shuriken"
            };
            const ataque = ataques[this.tipo];
            if (ataque) {
                return `Herói: ${this.nome}, Idade: ${this.idade}, Tipo: ${this.tipo}<br>O ${this.tipo} atacou usando ${ataque}`;
            } else {
                return `Herói: ${this.nome}, Idade: ${this.idade}, Tipo: ${this.tipo}<br>Tipo inválido. Ataque inválido.`;
            }
        }
    }

    const heroi = new Heroi(nome, idade, tipo);
    document.getElementById('resultado').innerHTML = heroi.atacar();
});