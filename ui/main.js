console.log('Loaded!');

// i am going to go to add some change
var element = document.getElementById('main-text');
element.innerHTML = 'New value';

var img = document.getElementById('madi');
 var marginLeft = 0;
function moveRight() {
   
    var moveLeft = moveLeft + 100;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function(){
    
    var interval = setInterval(moveRight,100);
    img.style.marginLeft = '100px';
    
    
    
};