const lousa = require('readline-sync');

let sair: boolean = false;
let valor_total: number = 0;

while(!sair){
    let valor: number =
    parseFloat(lousa.question("Adicione o valor do produtos: "));

    valor_total += valor;

    let pgt: string = lousa.question(" Deseja sair ? ")
    if(pgt == 'y'){
        sair = true;
        console.log(valor_total);
    }


}