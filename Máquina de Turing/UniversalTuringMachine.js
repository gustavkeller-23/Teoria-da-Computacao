const TuringMachine = lerJSON();
let fita = '';

turingMachine();


function lerJSON(){
  const fs = require('fs');
  const info = fs.readFileSync('statesModel.json', 'utf8');
  return JSON.parse(info);
}

function lerFita() {
  const fs = require('fs');
  try {
    fita = fs.readFileSync('./problem.txt', 'utf8');
  } catch (erro) {
    console.error('Erro ao ler o arquivo:', erro);
  }
}


function turingMachine(){
  let posicaoFita = 0;
  let stateAtual = TuringMachine.initial;

  lerFita();  
  fita = fita.toString();

  while(!finalizou(stateAtual)){
    let operacaoRalizada = false;

    for(let i = 0; i < TuringMachine.transitions.length && operacaoRalizada == false; i++){
      if(TuringMachine.transitions[i].from == stateAtual && TuringMachine.transitions[i].read == fita[posicaoFita]){
        fita = fita.replace(TuringMachine.transitions[i].read.toString(), TuringMachine.transitions[i].write.toString());
        stateAtual = TuringMachine.transitions[i].to;
        if(TuringMachine.transitions[i].dir.toString() == "R")
          posicaoFita++;
        else
          posicaoFita--;
        operacaoRalizada = true;
      }
    }

    if(!operacaoRalizada){
      stateAtual = TuringMachine.final;
      console.log("O resultado foi negado!");
    }
  }

  escreverFitaResultante();
}


function finalizou(stateAtual){
  if (stateAtual == TuringMachine.final[0]){
    return 1;
  }
}


function escreverFitaResultante(){
  const fs = require('fs');
    fs.writeFile('fitaFinal.txt', fita, err => {
      if(err){
        console.error(err);
        return;
      }
    });
}