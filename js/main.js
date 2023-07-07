const burguer = document.querySelector('#burguer');
const enlaces = document.querySelector('#menuDesktop');
   /*menu = document.querySelector('menuMobile div:nth-child(2)');*/
    burguer.addEventListener('click', () => {
         enlaces.classList.toggle('active');
});

//''