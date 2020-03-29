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

// GALLERY


// BUTTONS

function activeGalleryButtons() {

const ALL = document.getElementById('all');
const WEB = document.getElementById('web');
const DESIGN = document.getElementById('design');
const ARTWORK = document.getElementById('artwork');
const BUTTONS = document.querySelectorAll('.buttons button');
    
ALL.addEventListener('click', () =>{
    BUTTONS.forEach(element => element.classList.remove('active'));
    ALL.classList.add('active');
})
WEB.addEventListener('click', () =>{
    BUTTONS.forEach(element => element.classList.remove('active'));
    WEB.classList.add('active');
})
DESIGN.addEventListener('click', () =>{
    BUTTONS.forEach(element => element.classList.remove('active'));
    DESIGN.classList.add('active');
})
ARTWORK.addEventListener('click', () =>{
    BUTTONS.forEach(element => element.classList.remove('active'));
    ARTWORK.classList.add('active');
})

}

// PICTURES

function gallerySelect() {
    const ITEMS = document.querySelectorAll('.gallery__item');
    let one = document.getElementById('1'),
        two = document.getElementById('2'),
        three = document.getElementById('3'),
        four = document.getElementById('4'),
        five = document.getElementById('5'),
        six = document.getElementById('6'),
        seven = document.getElementById('7'),
        eight = document.getElementById('8'),
        nine = document.getElementById('9'),
        ten = document.getElementById('10'),
        eleven = document.getElementById('11'),
        twelve = document.getElementById('12');
        
        one.addEventListener('click', () =>{
        ITEMS.forEach(element => element.classList.remove('gallery-image-border'));
        one.classList.add('gallery-image-border');
    })
        two.addEventListener('click', () =>{
        ITEMS.forEach(element => element.classList.remove('gallery-image-border'));
        two.classList.add('gallery-image-border');
    })
        three.addEventListener('click', () =>{
        ITEMS.forEach(element => element.classList.remove('gallery-image-border'));
        three.classList.add('gallery-image-border');
    })
        four.addEventListener('click', () =>{
        ITEMS.forEach(element => element.classList.remove('gallery-image-border'));
        four.classList.add('gallery-image-border');
    })
        five.addEventListener('click', () =>{
        ITEMS.forEach(element => element.classList.remove('gallery-image-border'));
        five.classList.add('gallery-image-border');
    })
        six.addEventListener('click', () =>{
        ITEMS.forEach(element => element.classList.remove('gallery-image-border'));
        six.classList.add('gallery-image-border');
    })
        seven.addEventListener('click', () =>{
        ITEMS.forEach(element => element.classList.remove('gallery-image-border'));
        seven.classList.add('gallery-image-border');
    })
        eight.addEventListener('click', () =>{
        ITEMS.forEach(element => element.classList.remove('gallery-image-border'));
        eight.classList.add('gallery-image-border');
    })
        nine.addEventListener('click', () =>{
        ITEMS.forEach(element => element.classList.remove('gallery-image-border'));
        nine.classList.add('gallery-image-border');
    })
        ten.addEventListener('click', () =>{
        ITEMS.forEach(element => element.classList.remove('gallery-image-border'));
        ten.classList.add('gallery-image-border');
    })
        eleven.addEventListener('click', () =>{
        ITEMS.forEach(element => element.classList.remove('gallery-image-border'));
        eleven.classList.add('gallery-image-border');
    })
        twelve.addEventListener('click', () =>{
        ITEMS.forEach(element => element.classList.remove('gallery-image-border'));
        twelve.classList.add('gallery-image-border');
    })
}
onScroll();
activeGalleryButtons();
gallerySelect();