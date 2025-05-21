let vel = 300
if (vel <= 60) {
    console.log ("Dentro do litmite")
}
else if (vel <= 80) {
    console.log ("Atenção")
}
else {
    console.log ("Multado");
}


let idade = 99; 
console.log(idade >= 18 ? "Maior de idade": "Menor de iade");


const usLog = false
const mensagem = usLog ? "Bem vindo!" : "Faça login"
console.log(mensagem)