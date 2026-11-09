// ciclos  - imprime os numeros  de 1-10

for(let i = 1; i <= 10; i++){
    console.log("ciclo:" + i);
}


console.log("------ // --------");

// Apenas numeros pares
for(let i=2; i <= 10; i+=2){
    console.log("numero par:" + i);
}

console.log("------ // --------");


// Apenas numeros impares
for(let i=1; i <= 10; i+=2){
    console.log("numero impar:" + i);
}

console.log("------ // --------");

// soma de 10 a 20
let soma = 0;
for(let i = 10; i <= 20; i++){
    soma += i;
}
console.log("A soma de todos os numeros de 10 a 20 é: " + soma);