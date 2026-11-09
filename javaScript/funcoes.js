function calcularMedia(nota1, nota2) { 
    return (nota1 + nota2) / 2;
}
console.log("A média das notas é: " + calcularMedia(7, 8));


console.log("------ // --------");

// Função para verificar se um número é par
function ehPar(numero) {
    if(numero % 2===0){
        return true;
    }
    return false;
}
console.log("O número 5 é par? " + ehPar(5));
console.log("O número 6 é par? " + ehPar(6));


console.log("------ // --------");


//função para verificar se um número é impar
function ehImpar(numero) {
    if(numero % 2!==0){
        return true;
    }
    return false;
}
console.log("O número 5 é impar? " + ehImpar(7));
console.log("O número 6 é impar? " + ehImpar(8));


console.log("------ // --------");


// Função para calcular o preço com desconto
function priceDiscount(price, discount) {
    return price - (price * discount / 100);
} 
console.log("O preço com desconto é: " + priceDiscount(100, 10));


console.log("------ // --------");


// Função que usa return para testar varios valores
function testarValores() {
    return [1, 2, 3, 4, 15];
}
console.log("Os valores testados são: " + testarValores());


console.log("------ // --------");


