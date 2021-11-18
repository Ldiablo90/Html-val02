var navIcon = document.querySelector('.nav-icon');
var icons = document.querySelector('.icons');

icons.addEventListener('click',()=>{
    !navIcon.classList.contains('show')?navIcon.classList.add('show'):navIcon.classList.remove('show');
})

/*===================================================================================*/
var pranchise = document.querySelector('.icon-pranchise');
pranchise.addEventListener('click',()=>{
    var icon = pranchise.querySelector('.bx');
    if(!pranchise.classList.contains('show')){
        icon.classList.remove('bx-chevron-down');
        icon.classList.add('bx-chevron-up');
        pranchise.classList.add('show');
    }else{
        icon.classList.remove('bx-chevron-up');
        icon.classList.add('bx-chevron-down');
        pranchise.classList.remove('show');
    }
})
window.addEventListener('wheel',()=>{
    console.log(window.innerHeight);
})
/*===================================================================================*/





/*===================================================================================*/