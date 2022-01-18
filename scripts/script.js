// Carne - 400gr por pessoa  + de 6 horas - 650
// Cerveja - 1200 ml por Pessoa + de 6 horas - 2000 ml
// Refrigerante/agua - 1000ml por pessoa + 6 horas 1500 ml

// Crianças valem por 0,5


// Variaveis globais
let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultados = document.getElementById("resultado");

function runCalcular(){
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao)/ 2 * criancas);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalRefrigerante = refrigerantePP(duracao) * adultos + (refrigerantePP(duracao)/ 2 * criancas);
    
    if ( (qtdTotalCarne != 0) && (qtdTotalCerveja != 0) && (qtdTotalRefrigerante != 0) ){
        resultados.innerHTML = `<p><strong>${qtdTotalCarne/1000}</strong> Kg de Carne</p>`
        resultados.innerHTML += `<p><strong>${Math.ceil(qtdTotalCerveja/355)}</strong> Latas de Cerveja</p>`
        resultados.innerHTML += `<p><strong>${qtdTotalRefrigerante}</strong> ml de Bebida</p>`
    } else {
        resultados.innerHTML = `<h3> Informações insuficientes </h3>`
    }
    console.log(criancas);
}

function carnePP(duracao){
    if (duracao >= 6){
        return 650;
    }else{
        return 400;
    }
}

function cervejaPP(duracao){
    if (duracao >= 6){
        return 2000;
    } else {
        return 1200;
    }
}

function refrigerantePP(duracao){
  if (duracao >= 6){
      return 1500;
  } else {
      return 1000;
  }
}