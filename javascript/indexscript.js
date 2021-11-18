/*===================================================================================*/
var labels = document.querySelectorAll('.slide01-labels label');
var inputs = document.querySelectorAll('.slider01-warpper input');
var banner = document.querySelector('.slide01-contents');
var index = 1, content= 0;



[].forEach.call(labels,function(label){
    var value = 100*content;
    label.addEventListener('click',()=>{
        banner.style.transform='translateX(-'+value+'%)';
        for(var n of labels){n.classList.remove('show');};
        label.classList.add('show');
    });
    content++;
})

function autoMove() {
    labels[index].click();
    index >= 3 ? index = 0:index++;
}
setInterval(()=>{autoMove()}, 8000);
/*===================================================================================*/
var cardMargin = 300;
var cardHeight = 0;
var cardList = document.querySelectorAll('.card-content')

var cardFunc = function(){
    for(var card of cardList){
        !card.classList.contains('show') ? cardHeight = card.getBoundingClientRect().top + cardMargin:'';
        
        window.innerHeight > cardHeight ? card.classList.add('show'):'';
    }
}
window.addEventListener('load',cardFunc);
window.addEventListener('scroll',cardFunc);
/*===================================================================================*/