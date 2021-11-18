

var cards = document.querySelectorAll('.menu-card');
var modal = document.querySelector('.card-modal');
var modalImg = document.querySelector('.card-modal-img');
var modalTitle = document.querySelector('.modal-title');
var modalContent = document.querySelector('.modal-content');
[].forEach.call(cards,(card)=>{
    card.addEventListener('click',()=>{
        var img = card.querySelector('img');
        modal.classList.add('show');
        modalImg.src = img.src;
        // modalTitle.innerHTML = img.dataset.modalTitle;
        // modalContent.innerHTML = img.dataset.modalContent;
    })
})


var close = document.querySelector('.close');
close.addEventListener('click',()=>{modal.classList.remove('show');})

/* 이 코드는 윈도우 자체 휠이벤트를 막는이벤트 주석제거시 휠로 위아래 이동 불능
window.addEventListener('wheel',function(e){
    e.preventDefault();
},{passive:false});*/

// var cardMargin = 500;
// var cardHeight = 0;
// var cardList = document.querySelectorAll('.menu-card')

// var cardFunc = function(){
//     for(var card of cardList){
//         !card.classList.contains('show') ? cardHeight = card.getBoundingClientRect().top + cardMargin:'';
//         window.innerHeight > cardHeight ? card.classList.add('show') :'';        
//     }
// }
// window.addEventListener('load',cardFunc);
// window.addEventListener('scroll',cardFunc);