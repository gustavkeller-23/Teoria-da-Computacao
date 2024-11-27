
// Grammatic Context //

const { count } = require('console');

const Grammatic = readAlgothim(); 
let newGrammatic = main();

writeNewAlgothim(newGrammatic);



function main(){

    let Productions = [];
    Productions = OrganizedGrammatic();

    Productions = Simplification_UselessSymbols(Productions);
    Productions = Simplification_EmptyProductions(Productions);
    Productions = Simplification_ReplacementsProductions(Productions);

    //NormalForms_Chomsky();
    //NormalForms_Greibach();

    return Productions;
}



// ------------------ Simplificações --------------------- //

function Simplification_UselessSymbols(Productions){
    //símbolos inúteis/inalcançáveis

    let simbols = [];
    let tempSimbols = [];

    for(let i = 0; i < Productions.length; i++)
        simbols[i] = Productions[i][0];

    let cont = 0;
    for(let i = 0; i < Productions[0][1].length; i++){
        for(let j = simbols.length; j >=0 ; j--){
            if(Productions[0][1][i].includes(simbols[j])){
                tempSimbols[cont] = simbols[j];
                cont++;
            }
        }
    }

    let sizeStable;
    do{
        sizeStable = true;

        for(let i = 1; i < Productions.length; i++){
            for(let j = 0; j < Productions[i][1].length; j++){
                for(let k = 0; k < simbols.length; k++){
                    if(Productions[i][1][j].includes(simbols[k]) && tempSimbols.indexOf(simbols[k]) < 0){
                        sizeStable = false;
                        tempSimbols.push(simbols[k]);
                    }
                }
            }
        }

    }while(sizeStable);

    for(let i = 1; i < Productions.length; i++){
        if(!tempSimbols.includes(Productions[i][0])){
            Productions[i] = Productions[Productions.length-1];
            Productions.pop();
            i--;
        }
    }

    return Productions;
}

function Simplification_EmptyProductions(Productions){
    //produções vazias
    
    let ahVazio = false;

    for(let i = 1; i < Productions.length || Productions == null; i++){
        for(let j = 0; j < Productions[i][1].length; j++){
            if(Productions[i][1][j] == '-'){
                ahVazio = true;
                let valTemp = Productions[i][1][j];
                Productions[i][1][j] = Productions[i][1][Productions[i][1].length-1];
                Productions[i][1][Productions[i][1].length-1] = valTemp;
                Productions[i][1].pop();
                j--;
            }
        }
        if(Productions[i][1].length == 0){
            let prodTemp = Productions[i];
            Productions[i] = Productions[Productions.length-1];
            Productions[Productions.length-1] = prodTemp;
            Productions.pop();
            i--;
        }
    }

    if(ahVazio){
        Productions[0][1].push('-');
    }

    return Productions;
}

function Simplification_ReplacementsProductions(Productions){
    //substituição de produções
    let tempProd, tempSymbol;

    for(let i = 1; i < Productions.length || Productions == null; i++){
        if(Productions[i][1].length == 1){
            tempSymbol = Productions[i][0];
            tempProd = Productions[i][1][0];
            
            let prodTemp = Productions[i];
            Productions[i] = Productions[Productions.length-1];
            Productions[Productions.length-1] = prodTemp;
            Productions.pop();

            for(let k = 0; k < Productions.length; k++){
                for(let w = 0; w < Productions[k][1].length; w++){ //Remove o vazio do fim
                    if(Productions[k][1][w].includes(tempSymbol)){
                        Productions[k][1][w] = Productions[k][1][w].replace(tempSymbol, tempProd);
                    }
                }
            }

            i--;
        }
    }

    return Productions;
}


// ------------------ Formas Normais --------------------- //

function NormalForms_Greibach(){
    //Greibach

}

function NormalForms_Chomsky(){
    //Chomsky

}


// ------------------ Comandos De Arquivos --------------------- //
function readAlgothim(){
    // Leitor
    const fs = require('fs');
    const info = fs.readFileSync('grammatic.txt', 'utf8');
      
    return info;
} 

function writeNewAlgothim(Grammatic){
    // Escritor
    const fs = require('fs');
    let newGrammatic = [];

    for(let i = 0; i < Grammatic.length; i++){
        newGrammatic[i] = Grammatic[i][0].toString() + ' -> ' + Grammatic[i][1].toString() + '\n';
        newGrammatic[i] = newGrammatic[i].replace(',', ' | ');
    }

    fs.writeFile('newGrammatic.txt', newGrammatic.toString(), (err) => {
        if (err) throw err;
    })
}

function OrganizedGrammatic(){
    let ProductionsTemp = Grammatic.split("\r\n").toString();
    ProductionsTemp = ProductionsTemp.split(" -> ").toString();
    ProductionsTemp = ProductionsTemp.split(", ").toString();
    ProductionsTemp = ProductionsTemp.split(",");

    let p = [[]];

    for(let i = 0; i < ProductionsTemp.length/2; i++){
        p[i] = [];

        p[i][0] = ProductionsTemp[i*2];
        p[i][1] = ProductionsTemp[(i*2)+1];
    }

    for(let i = 0; i < p.length; i++){
        p[i][1] = p[i][1].split(' | ');
    }

    return p;
}