// Definindo uma função que aceita um parâmetro para o valor máximo
function testBreak() {
    // Usando uma variável local para o loop
    for (var i = 1; i < 21; i++) {
        console.log(i);

        // Condicional para verificar se o valor de i é igual a 3
        if (i == 7) {
            // Saindo do loop quando i é igual a 3
            break;
        }
    }
}
testBreak();