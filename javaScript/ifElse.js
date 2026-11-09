const avaliacao1="nao aprovado";
const avaliacao2="suficiente";
const avaliacao3="bom";
const avaliacao4="muito bom";

const nota = 20;


if (nota < 0 || nota > 20) {
    console.log(` nota inválida`);
}else if (nota >= 0 && nota <= 9) {
    console.log(`valor final: ${nota} - ${avaliacao1}`);
} else if (nota >= 10 && nota <= 13) {
    console.log(`valor final: ${nota} - ${avaliacao2}`);
} else if (nota >= 14 && nota <= 17) {
    console.log(`valor final: ${nota} - ${avaliacao3}`);
} else {
    console.log(`valor final: ${nota} - ${avaliacao4}`);
} 