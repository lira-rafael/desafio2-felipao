// Função
function saldoRankeadas(vitorias, derrotas) {
    
    let saldoVitorias = (vitorias - derrotas) // calcula saldo de vitórias 
      
    let nivel; // nível com base no saldo de vitórias

    // Estrutura de condição
    if(saldoVitorias < 10) {
        nivel = "Ferro";
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivel = "Bronze;"
    } else if ( saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal"
    }

    // Retorna mensagem de saída
    return (`O Herói tem saldo de ${saldoVitorias} está no nível de ${nivel}`);
}

// Variáves 
let vitorias = 90
let derrotas = 20

const resultado = saldoRankeadas(vitorias, derrotas);
console.log(resultado)

    