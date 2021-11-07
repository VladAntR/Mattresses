const btns = document.querySelectorAll('.counter_btn');
const head = document.getElementById('header');
const headLogo = document.getElementById('header_logo');
const ul = document.getElementById('ul');
const burger = document.getElementById('burger');
const icons = document.getElementById('icons');
const array = [head,headLogo,ul,burger,icons];
const list = document.querySelectorAll('.li');
const btn = document.getElementById('button')



//Menu
burger.addEventListener('click',()=>{
    for(item of array){
        item.classList.toggle('active');
    }
});

//Button more detalis
btn.addEventListener('click',()=>{
    list.forEach(elem => {
        if(elem.classList.value === 'li active'){
            elem.classList.toggle('active');  
            changeTextButton_uk();
            changeTextButton_en();  
        }else{
            if(elem.classList.value === 'li'){
                elem.classList.add('active');
                changeTextButton_uk();
                changeTextButton_en();
            }
        }
    });
});

//Change text in the button

function changeTextButton_uk(){
    if(btn.innerHTML==='Детальніше'){
        btn.innerHTML = 'Сховати';
    }else{
        if(btn.innerHTML==='Сховати'){
            btn.innerHTML = 'Детальніше';
        }
    }
}

function changeTextButton_en(){
    if(btn.innerHTML==='More details'){
        btn.innerHTML = 'Hidden';
    }else{
        if(btn.innerHTML==='Hidden'){
            btn.innerHTML = 'More details';
        }
    }
}
