score=0;
document.onkeydown = function (e) {
    console.log("Key code is: ", e.keyCode)
    if (e.keyCode == 38) {
        monkey = document.querySelector('.monkey');
        monkey.classList.add('animatemonkey');
        setTimeout(() => {
            monkey.classList.remove('animatemonkey')
        }, 700);
    } 
    if (e.keyCode == 39) {
        monkey = document.querySelector('.monkey');
        monkey.classList.add('animatemonkey');
        setTimeout(() => {
            monkey.classList.remove('animatemonkey')
        }, 700);
    } 
      
}
function updateScore(score){
    scorecount.innerHTML="Your Score:"+score;
}

setInterval(() => {
    monkey=document.querySelector('.monkey');
    gameover=document.querySelector('.gameover');
    obstaicle=document.querySelector('.obstacle');
    mx=parseInt(window.getComputedStyle(monkey,null).getPropertyValue('left'));
    my=parseInt(window.getComputedStyle(monkey,null).getPropertyValue('top'));

    ox=parseInt(window.getComputedStyle(obstaicle,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstaicle,null).getPropertyValue('top'));

    offsetX=Math.abs(mx-ox);
    offsetY=Math.abs(my-oy);
    console.log(offsetX,offsetY);
    if(offsetX < 93 && offsetY < 53){
        gameOver.innerHtml="Game Over - Reload to play again";
         obstaicle.classList.remove('obstaicledog');
    }
    else if(offsetX<145 && cross)  {
        
        score =score+1   ;
          updatescore(score);
          cross=false;
          setTimeout(()=> {
              cross =true;
          },1000);
    }

}, 100);


function updateScore(score){
    scoreCount.innerHTML="Your Score:"+score;
}


