let maior18 = true;
let menor18 = false;
let comMae = true;
let semMae = false;

//Operadores Lógicos - Disjunção
// console.log("Operadores Lógicos - Disjunção");

// if(maior18 || comMae){
//     resposta = true;
// }else{
//     resposta = false;
// } console.log("\nverdadeiro ou verdadeiro: " + resposta);

//-------------------//

// if(maior18 || semMae){
//     resposta = true;
// }else{
//     resposta = false;
// }console.log("\nverdadeiro ou falso: " + resposta);

//-------------------//

// if(menor18 || comMae){
//     resposta = true;
// }else{
//     resposta = false;
// } console.log("\nfalso ou verdadeiro: " + resposta);

//-------------------//

if(!(maior18 ^ comMae)){
    resposta = true;
}else{
    resposta = false;
} console.log("\nfalso ou falso: " + resposta);
