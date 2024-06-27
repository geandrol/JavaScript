const leia = require('readline-sync');

let nome;
let idade;

nome = leia.question("\nDigite seu nome: ")
idade = leia.questionInt("\nDigite sua idade: ")

if (idade >= 0 && idade <= 10) {
    console.log("\no seu Plano de Saude custara R$ 100,00 por mes.");
} else if (idade <= 29) {
    console.log("\no seu Plano de Saude custara R$ 200,00 por mes.");
}else if(idade >= 30 && idade <= 45){
    console.log("\no seu Plano de Saude custara R$ 300,00 por mes.");
}else if(idade >= 46 && idade <= 59){
    console.log("\no seu Plano de Saude custara R$ 400,00 por mes.");
}else if(idade >= 60 && idade <= 65){
    console.log("\no seu Plano de Saude custara R$ 500,00 por mes.");
}else {
    console.log("\no seu Plano de Saude custara R$ 1000,00 por mes.");
}

if(nome.toUpperCase() === 'Geandro'){
    console.log(`\n Muito obrigado! ${nome}` );
}