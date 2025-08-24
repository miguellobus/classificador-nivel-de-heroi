//Classificação de heroi por XP
//AUTOR: Miguel P. Lobo

let nomeHeroi = "Tonho Pipoco";
let xpHeroi = 10001; 
let nivelHeroi = "Aprendiz";

if(xpHeroi < 1001) {
    nivelHeroi = "Ferro";
}
else if(xpHeroi >= 1001 && xpHeroi < 2001) {
    nivelHeroi = "Bronze";
}
else if(xpHeroi >= 2001 && xpHeroi < 5001) {
    nivelHeroi = "Prata";
}
else if(xpHeroi >= 5001 && xpHeroi < 7001) {
    nivelHeroi = "Ouro";
}
else if(xpHeroi >= 7001 && xpHeroi < 8001) {
    nivelHeroi = "Platina";
}
else if(xpHeroi >= 8001 && xpHeroi < 9001) {
    nivelHeroi = "Ascendente";
}
else if(xpHeroi >= 9001 && xpHeroi < 10001) {
    nivelHeroi = "Imortal";
}
else {
    nivelHeroi = "Radiante";
}

console.log("O heroi de nome " + nomeHeroi + " está no nivel " + nivelHeroi);