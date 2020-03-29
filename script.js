// ACTIVE MENU LINKS

function onScroll(){
    const MENU = document.querySelectorAll('#menu li a')
    const HOME = document.getElementById('home');
    const SERVICES = document.getElementById('services');
    const PORTFOLIO = document.getElementById('portfolio');
    const ABOUT = document.getElementById('about');
    const CONTACT = document.getElementById('contact');
    const HEADER = document.getElementById('header');
    const curPos = window.scrollY;


    document.getElementById('header').addEventListener('click', () => {
        if (event.target.tagName == 'A') {
        MENU.forEach(element => element.classList.remove('active'));
        event.target.classList.add('active');
        }
        console.log(MENU.classList)
      });

    window.addEventListener('scroll', () => {
        if (curPos < SERVICES.offsetTop - HEADER) {
            MENU.forEach(element => element.classList.remove('active'));
            HOME.classList.add('active');
        };
    
        if (curPos >= SERVICES.offsetTop - HEADER
          && curPos < PORTFOLIO.offsetTop - HEADER) {
            MENU.forEach(element => element.classList.remove('active'));
            SERVICES.classList.add('active');
        };
    
        if (curPos >= PORTFOLIO.offsetTop - HEADER
          && curPos < ABOUT.offsetTop - HEADER) {
            MENU.forEach(element => element.classList.remove('active'));
            PORTFOLIO.classList.add('active');
        };
    
        if (curPos >= ABOUT.offsetTop - HEADER
          && curPos < CONTACT.offsetTop - HEADER) {
            MENU.forEach(element => element.classList.remove('active'));
            ABOUT.classList.add('active');
        };
    
        if (curPos >= CONTACT.offsetTop - HEADER
          || document.documentElement.scrollTop + document.documentElement.clientHeight == document.documentElement.scrollHeight
          || curPos > document.documentElement.scrollHeight - document.documentElement.clientHeight) {
            MENU.forEach(element => element.classList.remove('active'));
            CONTACT.classList.add('active');
        };
      });

}

// SLIDER

let images = document.querySelectorAll('.slider img');
let current = 0;

function slider() {
    for (let i = 0; i < images.length; i++){
        images[i].classList.add('opacity0');
    }
    images[current].classList.remove('opacity0');
    
    
}

document.querySelector('.btn-left').onclick = function(){
    if (current - 1 == -1){
        current = images.length - 1;
    }else{
        current--;
    }
    slider();
};

document.querySelector('.btn-right').onclick = function(){
    if (current + 1 == images.length){
        current = 0;
    }else{
        current++;
    }
    slider();
};



onScroll()