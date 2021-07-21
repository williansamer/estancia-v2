// Carne - 400gr por pessoa   >   + de 6hrs - 650gr
// Cerveja - 1200ml por pessoa    >   + de 6hrs - 2000ml
// Refri  - 1000ml por pessoa   >   + de 6hrs - 1500ml

// Crianças valem por 0.5

//VARIAVEIS DE CONTROLE
let adultos = document.querySelector(".adultos");
let criancas = document.querySelector(".criancas");
let duracao = document.querySelector(".duracao");
let c1 = document.querySelector(".cBovino");
let c2 = document.querySelector(".cFrango");
let c3 = document.querySelector(".cLinguica");
let c4 = document.querySelector(".pao");
let botao = document.querySelector(".btn");
let resultado = document.querySelector(".results");
let rBovino = document.querySelector(".qtddCarneBovina small");
let rFrango= document.querySelector(".qtddCarneFrango small");
let rLinguica = document.querySelector(".qtddLinguica small");
let rPaoDeAlho = document.querySelector(".qtddPaoDeAlho small");
let rCerveja = document.querySelector(".qtddCerveja small");
let rRefri = document.querySelector(".qtddRefri small");

//VARIAVEIS DE AMBIENTE
let qtddCarneAdulto1 = 600;
let qtddCarneCrianca1 = qtddCarneAdulto1 / 2;
let qtddCarneAdulto2 = 800;
let qtddCarneCrianca2 = qtddCarneAdulto2 / 2;
let qtddCerveja1 = 1500;
let qtddCerveja2 = 2500;
let qtddRefriAdulto1 = 1000;
let qtddRefriCrianca1 = qtddRefriAdulto1 / 2;
let qtddRefriAdulto2 = 1500;
let qtddRefriCrianca2 = qtddRefriAdulto2 / 2;
let bovino = "";
let frango = "";
let linguica = "";
let paoDeAlho = "";
let cerveja = "";
let refrigerante = "";

  onload = function(){
  resultado.style.display = "none";
  }

  function comecar(){
    let inpAd = document.querySelector(".adultos");
    let inpDr = document.querySelector(".duracao");

    document.querySelector(".qtddCarneBovina").style.display = "block";
    document.querySelector(".qtddCarneFrango").style.display = "block";
    document.querySelector(".qtddLinguica").style.display = "block";
    document.querySelector(".qtddPaoDeAlho").style.display = "block";

    if(inpAd.value === "" && inpDr.value === ""){
      alert("Coloque pelo menos 1 Adulto e a Quantidade de Horas");
    } else if(inpAd.value === "" && inpDr.value !== ""){
      alert("Coloque pelo menos 1 Adulto");
    } else if(inpAd.value !== "" && inpDr.value === ""){
      alert("Coloque a quantidade de horas");
    } else{
      conta();
    }
    if(parseInt(c1.value) + parseInt(c2.value) + parseInt(c3.value) + parseInt(c4.value) > 100){
      alert("A soma das porcentagens tem que ser no máximo 100%");
    } else if(parseInt(c1.value) + parseInt(c2.value) + parseInt(c3.value) + parseInt(c4.value) < 100){
      alert("A soma das porcentagens tem que ser 100%");
    }
  }

  function conta(){
    let inpAd = document.querySelector(".adultos");
    let inpDr = document.querySelector(".duracao");
    let inpCr = document.querySelector(".criancas");

    if(inpDr.value < 6){
      bovino = (inpAd.value * (c1.value / 100) * qtddCarneAdulto1) + (inpCr.value * (c1.value / 100)  * qtddCarneCrianca1);
      frango = (inpAd.value * (c2.value / 100) * qtddCarneAdulto1) + (inpCr.value * (c2.value / 100)  * qtddCarneCrianca1);
      linguica = (inpAd.value * (c3.value / 100) * qtddCarneAdulto1) + (inpCr.value * (c3.value / 100)  * qtddCarneCrianca1);
      paoDeAlho = (inpAd.value * (c4.value / 100) * qtddCarneAdulto1) + (inpCr.value * (c4.value / 100)  * qtddCarneCrianca1);
      cerveja = (inpAd.value * qtddCerveja1);
      refrigerante = (inpAd.value * qtddRefriAdulto1) + (inpCr.value * qtddRefriCrianca1);

      resultado.style.display = "block";
    } else{
      bovino = (inpAd.value * (c1.value / 100) * qtddCarneAdulto2) + (inpCr.value * (c1.value / 100)  * qtddCarneCrianca2);
      frango = (inpAd.value * (c2.value / 100) * qtddCarneAdulto2) + (inpCr.value * (c2.value / 100)  * qtddCarneCrianca2);
      linguica = (inpAd.value * (c3.value / 100) * qtddCarneAdulto2) + (inpCr.value * (c3.value / 100)  * qtddCarneCrianca2);
      paoDeAlho = (inpAd.value * (c4.value / 100) * qtddCarneAdulto2) + (inpCr.value * (c4.value / 100)  * qtddCarneCrianca2);
      cerveja = (inpAd.value * qtddCerveja2);
      refrigerante = (inpAd.value * qtddRefriAdulto2) + (inpCr.value * qtddRefriCrianca2);

      resultado.style.display = "block";
    }
    if(bovino === 0){
      document.querySelector(".qtddCarneBovina").style.display = "none";
    }
    if(frango === 0){ 
      document.querySelector(".qtddCarneFrango").style.display = "none";
    }
    if(linguica === 0){
      document.querySelector(".qtddLinguica").style.display = "none";
    }
    if(paoDeAlho === 0){
      document.querySelector(".qtddPaoDeAlho").style.display = "none";
    }
    resultadoFinal()
  }

  function resultadoFinal(){
    
      rBovino.innerHTML = `${bovino / 1000} Kg de carne bovina`;
      rFrango.innerHTML = `${frango / 1000} Kg de carne de frango`;
      rLinguica.innerHTML = `${linguica / 1000} Kg de linguiça`;
      rPaoDeAlho.innerHTML = `${paoDeAlho / 1000} Kg de pão de alho`;
      rCerveja.innerHTML = `${cerveja / 1000} Litros de cerveja ou ${Math.ceil(cerveja / 355)} latas de 355ml`
      rRefri.innerHTML = `${refrigerante /1000} Litros de refrigerante ou ${Math.ceil(refrigerante / 2000)} pet 2 Litros`
  }