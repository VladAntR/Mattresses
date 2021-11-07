const head = document.getElementById('header');
const headLogo = document.getElementById('header_logo');
const ul = document.getElementById('ul');
const burger = document.getElementById('burger');
const icons = document.getElementById('icons');
const array = [head,headLogo,ul,burger,icons];


//Menu
burger.addEventListener('click',()=>{
    for(item of array){
        item.classList.toggle('active');
    }
});

//Slider

const prev = document.getElementById('btn_prev'),
    next = document.getElementById('btn_next'),
    slides = document.querySelectorAll('.slide'),
    dots = document.querySelectorAll('.dot');
let index = 0;    


const activeSlide = n =>{
    for(slide of slides){
        slide.classList.remove('active');
    }
    const interval = setTimeout(()=>{
        slides[n].classList.add('active')
    },300);
};

const activeDots = n =>{
    for(dot of dots){
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
};

const prepareCurrentSlide = ind =>{
    activeSlide(ind);
    activeDots(ind);


};

const nextSlide= ()=>{
    if(index===slides.length-1){
        index=0;
        prepareCurrentSlide(index);
    }else{
        index++;
        prepareCurrentSlide(index);
    }
};

const prevSlide = () =>{
    if(index===0){
        index=slides.length-1;
        prepareCurrentSlide(index);
    }else{
        index--;
        prepareCurrentSlide(index);
    }
};

next.addEventListener('click',nextSlide);
prev.addEventListener('click',prevSlide);



