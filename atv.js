//Detector de vel
let vel = 74
if (vel <= 60) {
    console.log ("Dentro do litmite")
}
else if (vel <= 80) {
    console.log ("Atenção")
}
else {
    console.log ("Multado");
}


//Sabedor de idade
let idade = 99; 
console.log(idade >= 18 ? "Maior de idade": "Menor de iade");

//Usuario logado
const usLog = false
const mensagem = usLog ? "Bem vindo!" : "Faça login"
console.log(mensagem)


//Notanotanota
let nota = 8
let resultador = nota >= 7 ? "Aprovado" : "Reprovado"
console.log("Resultado:", resultador)


//ULTIMO EXERCICIO
let pontuação = 150
console.log(pontuação >= 100 ? "Parabens você ganhou um prêmo!!1" : "Mais sprte na próxima :(")


//Objeto dick
let pinto = {
    nome: "Luis Carlos",
    tamanho: 150,
    estaDuro: true
}
console.log("Seu nome é:", pinto.nome)
console.log("Seu tamanho (em cm):", pinto.tamanho)


//Livro obj
let livro = {
    título: "Java Script Essential",
    paginas: 240,
    Autor: "João Silva"
}
console.log(`${livro.título} tem ${livro.paginas}`)


//O david ia amar isso
let carro = {
    Modelo: "Uno",
    Ano: 2008,
    Automatico: false
}
console.log(`O carro ${carro.Modelo} é automático? ${carro.Automatico}`)