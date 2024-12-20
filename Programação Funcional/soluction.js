
LerTestes();

function LerTestes(){
    const fs = require("fs");
    const readline = require("readline");
    const path = "C:\\Users\\luisk\\Desktop\\Geral\\Teoria-da-Computacao\\Programação Funcional\\estoque.csv";
    const readStream = fs.createReadStream(path);
      
    const output = [];
  
    const readInterface = readline.createInterface({
      input: readStream
    });
      
    readInterface.on("line", (line) => {
      const row = line.split("\n");
      output.push(row);
    });
      
    readInterface.on("close", () => {
      arqTeste = output;
      main();
    });
      
    readInterface.on("error", (err) => {
      console.error("Error reading the CSV file:", err);
    });
}


function main(){
    const arqTabela = converterParaTabela(arqTeste);

    AumentoPrecos(arqTabela);
    filtrarTipoEPreco(arqTabela);
    quantidadeProdutosUnid(arqTabela);
    quantidadeProdutosUnidAbaixoMediaPreco(arqTabela);
}

function converterParaTabela(listaJson){
  let TABELA = [];
  for(let i = 1; i < listaJson.length; i++)
    TABELA.push(listaJson[i].toString().split(";"));
  return TABELA;
}

function AumentoPrecos(tabela){
  const inflacao = 1.09;
  let newTabela = tabela.map(([w, x, y, z]) => [w, x, y*inflacao, z]);
  imprimirDados(newTabela);
}

function filtrarTipoEPreco(tabela){
  let newTabela = [];
  newTabela.push(tabela.filter(([w, x, y, z]) => y < 50 && z == "Kilo"));
  newTabela.push(tabela.filter(([w, x, y, z]) => y >= 50 && z == "Kilo"));
  newTabela.push(tabela.filter(([w, x, y, z]) => y < 50 && z == "Unidade"));
  newTabela.push(tabela.filter(([w, x, y, z]) => y >= 50 && z == "Unidade"));
  imprimirDados(newTabela);
}

function quantidadeProdutosUnid(tabela){
  let newTabela = tabela.filter(([w, x, y, z]) => z == "Unidade");
  let qtdProdutosUnid = newTabela.reduce((acc, curr) => {return acc + Number(curr[1]);}, 0);
  console.log(qtdProdutosUnid);
}

function quantidadeProdutosUnidAbaixoMediaPreco(tabela){
  let count = 0;
  let newTabela = tabela.filter(([w, x, y, z]) => z == "Unidade");
  let precoTotalUnid = newTabela.reduce((acc, curr) => {count++; return acc + Number(curr[2]);}, 0);
  let mediaPreco = precoTotalUnid/count;
  console.log(mediaPreco);
  newTabela = newTabela.filter(([w, x, y, z]) => y < mediaPreco);
  imprimirDados(newTabela)
}

function imprimirDados(tabela){
  let count = 0;  
  while(count < tabela.length){
    console.log(tabela[count]);
    count++;
  }
}
