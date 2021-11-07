const head = document.getElementById('header');
const headLogo = document.getElementById('header_logo');
const ul = document.getElementById('ul');
const burger = document.getElementById('burger');
const icons = document.getElementById('icons');
const array = [head,headLogo,ul,burger,icons];
const input = document.getElementById('input');
const filter = document.getElementById('filter'),
    navFilter = document.getElementById('nav_filter');


//Menu
burger.addEventListener('click',()=>{
    for(item of array){
        item.classList.toggle('active');
    }
});

//Cursor for input focus
function setCarentPosition(ctrl,pos){
    if(ctrl.setSelectionRange){
        ctrl.setSelectionRange(pos, pos);
    }else if (ctrl.createTextRange) {
        var range = ctrl.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
}

setCarentPosition(input, input.value.length);
input.addEventListener('click', ()=>{
    input.value='';
});

//Filter

navFilter.addEventListener('click', ()=>{
    filter.classList.add('active');
});

filter.addEventListener('click', ()=>{
    filter.classList.toggle('active');
});




