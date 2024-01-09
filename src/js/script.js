window.addEventListener('DOMContentLoaded', function() {
  let btn = document.querySelector('.promo__btn');
  let counter = 0;
  let promoImg = document.querySelector('.promo__img');
  let promoMain = document.querySelector('.promo__main');
  const promoImgs = [
    './images/promo/slots_machine-2.png',
    './images/promo/slots_machine-1.png',
    './images/promo/slots_machine-3.png'
  ];
  
  promoImg.addEventListener('click', function() {
    counter++;

    if (counter > promoImgs.length - 1) {
      counter = 0;
    }
    
    promoImg.style.background = `url('${promoImgs[counter]}') center / cover no-repeat`;
  });


})