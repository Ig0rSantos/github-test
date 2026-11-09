const nome = "Igor";
const notaTeste = 10;
const notaProjeto = 15;

//calcular a media das notas
function calcularMedia(nota1, nota2) { 
    return (nota1 + nota2) / 2;
}
//console.log("A média das notas é: " + calcularMedia(notaTeste, notaProjeto));
console.log("Valores enter (0-20) para as notas do teste e do projeto.");

if(calcularMedia(notaTeste, notaProjeto) >= 10 && calcularMedia(notaTeste, notaProjeto) <= 20){
    console.log("Parabéns " + nome + ", você está aprovado!" + " A média foi de: " + calcularMedia(notaTeste, notaProjeto));
}else if(calcularMedia(notaTeste, notaProjeto) >=0 && calcularMedia(notaTeste, notaProjeto) < 10){
    console.log("Tenta novamenmte " + nome + ", desta vez estás reprovado!" + " A média foi de: " + calcularMedia(notaTeste, notaProjeto));
}else if(calcularMedia(notaTeste, notaProjeto) < 0 || calcularMedia(notaTeste, notaProjeto) > 20){
    console.log("Erro: Apenas notas válidas (entre 0 e 20).");
}

// ciclo para apresentar a tabuada da media arredondada para baixo
console.log("------ // --------");
let mediaArredondada = Math.floor(calcularMedia(notaTeste, notaProjeto));
console.log("A média arredondada é: " + mediaArredondada);

// ciclo para apresentar a tabuada da media arredondada para baixo
console.log("Tabuada da média arredondada: ");
for(let i = 1; i <= 10; i++){
    console.log(mediaArredondada + " x " + i + " = " + (mediaArredondada * i));
}

