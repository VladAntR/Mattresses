const btns = document.querySelectorAll('.counter_btn');
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