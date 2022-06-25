// add active class on click

const dot = document.querySelector('.dot');
const sec = document.querySelector('.sec');
const p = document.querySelector('p');
dot.onclick = function() {
    dot.classList.toggle('active')
    sec.classList.toggle('active')
    p.classList.toggle('active')
}


document.addEventListener("mousemove", function(e){
    const dot = document.querySelector('.dot');
    dot.style.left = e.pageX + 'px';
    dot.style.top = e.pageY + 'px';
})