var steps = document.querySelectorAll('.step');

[].forEach.call(steps,function(col){
    col.addEventListener('mouseover',function(){
        for(var step of steps){step.classList.remove('show')}
        col.classList.add('show');
    });
});
