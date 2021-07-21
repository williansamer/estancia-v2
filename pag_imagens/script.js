let miniatura = document.querySelector(".slider-small");

let totalSliders = document.querySelectorAll(".slider-item").length;
let currentItem = 0;

let totalSlidersSmall = document.querySelectorAll(".slider-item-small").length; // 20
let currentItemSmall = 0;
let vw_ = 100;
let vwSmall = vw_ / totalSlidersSmall; // 5
let frame = Math.ceil(totalSlidersSmall / vwSmall); // 4


document.querySelector(".slider-back").style.width =
      `calc(100vw * ${totalSliders})`;
document.querySelector(".slider-arrow").style.height =
      `${document.querySelector(".slider").clientHeight}px`



onload = function(){
  window.location.href='#comeco';
  miniatura.style.display = 'none';
}

document.addEventListener("keyup", function(event){
  if(event.key === "ArrowLeft"){
    goPrev();
  }
  if(event.key === "ArrowRight"){
    goNext();
  }
})

function goPrev(){
  currentItem--;
  if(currentItem < 0){
    currentItem = (totalSliders - 1);
  }
  updateMargin();
  syncSlyders();
}

function goNext(){
  currentItem++;
  if(currentItem > (totalSliders -1)){
    currentItem = 0;
  }
  updateMargin();
  syncSlyders();
}

function syncSlyders(){
  if(currentItem < (Math.floor(totalSliders / frame) * 1)){
    currentItemSmall = 0;
    updateMarginSmall()
  } else if(currentItem < (Math.floor(totalSliders / frame) * 2)){
    currentItemSmall = 1;
    updateMarginSmall()
  } else if(currentItem < (Math.floor(totalSliders / frame) * 3)){
    currentItemSmall = 2;
    updateMarginSmall()
  } else  if(currentItem >= (Math.floor(totalSliders / frame) * 3)){
    currentItemSmall = 3;
    updateMarginSmall()
  }
}

function updateMargin(){
  let sliderItemWidth = document.querySelector(".slider-item").clientWidth;
  let newMargin = (currentItem * sliderItemWidth);

  document.querySelector(".slider-back").style.marginLeft =
        `-${newMargin}px`
}


//_____________________________________________________________________________________
document.querySelector(".slider-back-small").style.width =
      `calc(20vw * ${totalSlidersSmall})`;


function overSmall(){
  miniatura.style.display = 'block';
}

function outSmall(){
  miniatura.style.display = 'none';
}

function goPrevSmall(){
  currentItemSmall--;
  if(currentItemSmall < 0){
    currentItemSmall = (frame - 1)
  }
  updateMarginSmall()
}
function goNextSmall(){
  currentItemSmall++;
  if(currentItemSmall > (frame - 1)){
    currentItemSmall = 0;
  }
  updateMarginSmall()
}

function updateMarginSmall(){
  let newMarginSmall = (currentItemSmall * (document.querySelector(".slider-item-small").clientWidth * vwSmall));

  document.querySelector(".slider-back-small").style.marginLeft =
        `-${newMarginSmall}px`;
}

function overOn(n){
  n.style.border = 'solid 2px yellow';
}

function OutOff(n){
  n.style.border = 'none';
}

function updateDirect(n){
  let nImage = n;
  let sliderItemWidth = document.querySelector(".slider-item").clientWidth;
  let updateSliderBack = document.querySelector(".slider-back");
  let newMargin = (nImage * sliderItemWidth);

  updateSliderBack.style.marginLeft = `-${newMargin}px`;
  currentItem = nImage;
}