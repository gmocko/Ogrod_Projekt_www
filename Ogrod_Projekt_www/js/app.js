document.addEventListener("DOMContentLoaded", function(){

    const  divSlider = document.querySelector('div');
    const  prevButton = document.getElementById('prevPicture');
    const  nextButton = document.getElementById('nextPicture');
    let toChange = 0;
    const listElements = document.querySelectorAll('li');
    listElements[toChange].classList.add('visible');
    divSlider.classList.add('slider');
    prevButton.addEventListener('click', function () {
        listElements[toChange].classList.remove('visible');
        toChange -= 1;
        if (toChange < 0){
            toChange = listElements.length-1;
        }
        listElements[toChange].classList.add('visible');
    });
    nextButton.addEventListener('click', function () {
        listElements[toChange].classList.remove('visible');
        toChange += 1;
        if (toChange > listElements.length-1){
            toChange = 0;
        }
        listElements[toChange].classList.add('visible');
    });
// print text 
    let j = 0;
    const txt = 'Zieleń to całe nasze życie'; 
    const speed = 100; //time 

function typeWriter() {
  if (j < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(j);
    j++;
    setTimeout(typeWriter, speed);
  }
}

const nurseryBtn = document.getElementById("nurseryBtn");
console.log(nurseryBtn);

nurseryBtn.addEventListener('click', function(){
    typeWriter()
})
// on site welcom text
window.onload = typeWriter();

// to pause video 
const vid = document.getElementById("myVideo"); 
function pauseVid() { 
    vid.pause(); 
}
const stopButton = document.getElementById("stopVid");
stopButton.addEventListener("click", function(){
    pauseVid()
});


});

