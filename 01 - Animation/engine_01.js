'use strict';

let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let anima = document.querySelector('.anima');

//bloco de código para o botão 1//
{
  btn1.addEventListener('click', ()=>{
    if (anima.classList.contains('animaBtn2')) {
      anima.classList.remove('animaBtn2');  
      anima.classList.add('animaBtn1');
    } else {
      anima.classList.add('animaBtn1');
    }
   })
}

//bloco de código para o botão 2//
{
  btn2.addEventListener('click', ()=>{
    if(anima.classList.contains('animaBtn1')) {
      anima.classList.remove('animaBtn1');
      anima.classList.add('animaBtn2');
    } else if(anima.classList.contains('animaBtn2')) {
      anima.classList.remove('animaBtn2');
    } else {
      anima.classList.add('animaBtn2');
    }
  })
}