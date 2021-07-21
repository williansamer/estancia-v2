let itemInicio = document.querySelector(".item-inicio span");
let itemFim = document.querySelector(".item-fim span");
let sliderTop = document.querySelector(".slider-top");
let sliderDescription = document.querySelector(".slider-description");
let sliderDescriptionUs = document.querySelector(".description-us");
let allSliders = [document.querySelector(".item1"),
                  document.querySelector(".item2"), 
                  document.querySelector(".item3"), 
                  document.querySelector(".item4"), 
                  document.querySelector(".item5"), 
                  document.querySelector(".item6"), 
                  document.querySelector(".item7"), 
                  document.querySelector(".item8"), 
                  document.querySelector(".item9")];

let totalSliders = document.querySelectorAll(".slider-item").length;
/* let sliderItemWidth = document.querySelector(".slider-item").clientWidth; */

let currentItem = 0;

let title = {title1 : '<div>Amplo Espaço</div>',
            title2 : '<div>Piscina</div>',
            title3 : '<div>Área para Churrasco</div>',
            title4 : '<div>WiFi</div>',
            title5 : '<div>Utensílios</div>',
            title6 : '<div>Campo de Futebol</div>',
            title7 : '<div>Jogos</div>',
            title8 : '<div>Cômodos</div>',
            title9 : '<div>Quer Mais?</div>'};
let titleArray = ['title1', 'title2', 'title3', 'title4', 'title5', 'title6', 'title7', 'title8', 'title9'];

let description = {description1 : '<div class="slider-description">São xxxm² de área construída e xxxm² de área útil, entre casa, quiosques e campo. É muito espaco.</div>',
            description2 : '<div class="slider-description">Piscina de 32.000 litros e uma piscina kids de 3.000 litros. Proporcionará ótimos momentos entre familiares e amigos.</div>',
            description3 : '<div class="slider-description">Churrasqueira, fogão a lenha e até forno para pizza. UAU!!!</div>',
            description4 : '<div class="slider-description">Achou que iria ficar sem internet? Aqui temos WIFI para você publicar os melhores momentos nas redes sociais.</div>',
            description5 : '<div class="slider-description">Todos os utensílios inclusos. É chegar e fazer aquela comidinha gostosa. (obs: exceto gás de cozinha)</div>',
            description6 : '<div class="slider-description">Campo com xxxm2, graminha cortada e plana a espera do seu time.</div>',
            description7 : '<div class="slider-description">Bilhar, tênis de mesa, Pinbolim. Não existe tédio por aqui.</div>',
            description8 : '<div class="slider-description">Sala, cozinha, 3 quartos, 5 banheiros, garagem e muito espaço para todo o pessoal.</div>',
            description9 : '<div class="slider-description">Fogão industrial, mesa para refeição, mesas/cadeiras de plástico, vários colchões e camas, freezers e mais um pouco.</div>'};
let descriptionArray = ['description1', 'description2', 'description3', 'description4', 'description5', 'description6', 'description7', 'description8', 'description9'];

let descriptionUs = {descriptionUs1 : '<div class="description-us">É fundamental para qualquer chácara de aluguel. Aqui, todas as roupas de cama, sofá, e a área em geral são limpos e higienizados minuciosamente. Tudo para te dar tranquilidade e conforto.</div>',
            descriptionUs2 : '<div  class="description-us">Somos uma das pouquíssimas chácaras regulamentadas pela prefeitura e pelo corpo de bombeiros. Com 2 extintores, te damos segurança em seu tempo dedicado a diversão.</div>',
            descriptionUs3 : '<div  class="description-us">Isto é o que interessa no final das contas, né? E isto é a nossa recompensa: A sua satisfação de que o seu tempo foi bem gasto.</div>'};
let descriptionUsArray = ['descriptionUs1', 'descriptionUs2', 'descriptionUs3'];


let timer;
let timerUs;

onload = function(){
document.querySelector(".slider-back").style.width = 
`calc(200px * ${totalSliders})`;
sliderTop.innerHTML = '';
itemInicio.innerHTML = '';
itemFim.innerHTML = '';
allSliders[currentItem].style.opacity = "1";
allSliders[currentItem].style.boxShadow = "inset 0 0 20px 1px white, 2px 2px 5px black";

sliderTop.innerHTML = title[titleArray[currentItem]];
sliderDescription.innerHTML = description[descriptionArray[currentItem]];
sliderDescriptionUs.innerHTML = descriptionUs[descriptionUsArray[currentItemUs]];

timer = setInterval(goNext, 5000);
timerUs = setInterval(goNextUs, 5000);
}

function goPrev(){
  currentItem--;
  if(currentItem < 0){
    currentItem = (totalSliders - 3);
  }
  if(currentItem === (totalSliders - 3)){
    allSliders[0].style.opacity = "0.3";
    allSliders[0].style.boxShadow = "none";
  } else{
    allSliders[currentItem + 1].style.opacity = "0.3";
    allSliders[currentItem + 1].style.boxShadow = "none";
  }
  updateMargin();
}
function goNext(){
  currentItem++;
  if(currentItem > (totalSliders - 3)){
    currentItem = 0;
  }
  if(currentItem === 0){
    allSliders[totalSliders - 3].style.opacity = "0.3";
    allSliders[totalSliders - 3].style.boxShadow = "none";
  } else{
    allSliders[currentItem - 1].style.opacity = "0.3";
    allSliders[currentItem - 1].style.boxShadow = "none";
  }
  updateMargin();
}

function updateMargin(){
  let SliderItemWidth = (document.querySelector(".slider-item").clientWidth + 10);
  let newMargin = (currentItem * SliderItemWidth);

  sliderTop.innerHTML = title[titleArray[currentItem]];
  sliderDescription.innerHTML = description[descriptionArray[currentItem]];
  allSliders[currentItem].style.opacity = "1";
  allSliders[currentItem].style.boxShadow = "inset 0 0 20px 1px white, 2px 2px 5px black";

  document.querySelector(".slider-back").style.marginLeft = 
  `-${newMargin}px`;
}

function stopInterval(){
  clearInterval(timer);
}
function restartInterval(){
  timer = setInterval(goNext, 5000);
}

/* _____________________________________________________________________________ */

let totalSlidersUs = document.querySelectorAll(".slider-us-item").length;

let currentItemUs = 0;

document.querySelector(".slider-us-back").clientWidth = 
  totalSlidersUs * document.querySelector(".slider-us").clientWidth;

function goPrevUs(){
  currentItemUs--;
  if(currentItemUs < 0){
    currentItemUs = (totalSlidersUs - 1);
  }
  updateMarginUs();
}

function goNextUs(){
  currentItemUs++;
  if(currentItemUs > (totalSlidersUs - 1)){
    currentItemUs = 0;
  }
  updateMarginUs();
}

function updateMarginUs(){
  let sliderItemUsWidth = document.querySelector(".slider-us-item").clientWidth;
  let newMarginUs = (currentItemUs * sliderItemUsWidth);

  sliderDescriptionUs.innerHTML = descriptionUs[descriptionUsArray[currentItemUs]];
  document.querySelector(".slider-us-back").style.marginLeft = 
    `-${newMarginUs}px`;
}

function stopIntervalUs(){
  clearInterval(timerUs);
}
function restartIntervalUs(){
  timerUs = setInterval(goNextUs, 5000);
}