var image = document.querySelector('#container img');
var heartIcon = document.querySelector('#container i');

image.addEventListener('dblclick', function() {
    heartIcon.style.transform = 'translate(-50%, -50%) scale(1)';
   // heartIcon.style.scale = 1;
    setTimeout(function() {
        heartIcon.style.scale = 0;
    }, 1000);
    setTimeout(function() {
        heartIcon.style.transform = 'translate(-50%, -50%) scale(0)';
    }, 1000);
});
