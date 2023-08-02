var lousa = require('readline-sync');
var sair = false;
var valor_total = 0;
while (!sair) {
    var valor = parseFloat(lousa.question("Adicione o valor do produtos: "));
    valor_total += valor;
    var pgt = lousa.question(" Deseja sair ? ");
    if (pgt == 'y') {
        sair = true;
        console.log(valor_total);
    }
}
