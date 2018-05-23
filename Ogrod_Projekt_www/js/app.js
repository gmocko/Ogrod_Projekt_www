document.addEventListener("DOMContentLoaded", function(){

    const  divSlider = document.getElementById('sliderWrapper');
    const  prevButton = document.getElementById('prevPicture');
    const  nextButton = document.getElementById('nextPicture');
    
    const listElements = document.getElementsByClassName('nurserySliderElement');
    // const sliderCompaniesElement = document.getElementsByClassName('sliderCompaniesElement');
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
    setTimeout(autoSlider,5000);
    if (counter < 0){
    counter = sliderCompaniesElement.length-1;
    }
    sliderCompaniesElement[counter].classList.add('visible');
    
}

const nurseryBtn = document.getElementById("nurseryBtn");
console.log(nurseryBtn);

nurseryBtn.addEventListener('click', function(){
    typeWriter()
})
// on site welcom text
onload = typeWriter();
onload = autoSlider();


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

