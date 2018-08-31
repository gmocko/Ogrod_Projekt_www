document.addEventListener("DOMContentLoaded", function(){

    const  divSlider = document.getElementById('sliderWrapper');
    const  prevButton = document.getElementById('prevPicture');
    const  nextButton = document.getElementById('nextPicture');
    const listElements = document.getElementsByClassName('nurserySliderElement');
    let toChange = 0;
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
    const  divSliderPrivate = document.getElementById('sliderWrapperPrivate');
    const  prevPicturePrivate = document.getElementById('prevPicturePrivate');
    const  nextPicturePrivate = document.getElementById('nextPicturePrivate');
    const listElementsPrivate = document.getElementsByClassName('privateSliderElement');
    let toChangePrivate = 0;
    listElementsPrivate[toChange].classList.add('visible');
    divSliderPrivate.classList.add('slider');
    prevPicturePrivate.addEventListener('click', function () {
        listElementsPrivate[toChangePrivate].classList.remove('visible');
        toChangePrivate -= 1;
        if (toChangePrivate < 0){
            toChangePrivate = listElementsPrivate.length-1;
        }
        listElementsPrivate[toChangePrivate].classList.add('visible');
    });
    nextPicturePrivate.addEventListener('click', function () {
        listElementsPrivate[toChangePrivate].classList.remove('visible');
        toChangePrivate += 1;
        if (toChangePrivate > listElementsPrivate.length-1){
            toChangePrivate = 0;
        }
        listElementsPrivate[toChangePrivate].classList.add('visible');
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
//autoslider
let counter = 0;
const sliderCompaniesElement = document.getElementsByClassName('sliderCompaniesElement'); 
function autoSlider(){
    sliderCompaniesElement[counter].classList.remove('visible');
    counter -= 1;
    setTimeout(autoSlider,4000);
    if (counter < 0){
    counter = sliderCompaniesElement.length-1;
    }
    sliderCompaniesElement[counter].classList.add('visible');
    
}
const nurseryBtn = document.getElementById("nurseryBtn");
nurseryBtn.addEventListener('click', function(){
    typeWriter()
})
window.onload = typeWriter();
onload = autoSlider();
// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({ 
            behavior: 'smooth'
        });
    });
});
// to pause video 
// const vid = document.getElementById("myVideo"); 
// function pauseVid() { 
//     vid.pause(); 
// }
// const stopButton = document.getElementById("stopVid");
// stopButton.addEventListener("click", function(){
//     pauseVid()
// });
});

