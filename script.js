let currentIndex=0;
const Slides=document.querySelectorAll(".slide");
function showSlide(index){
    if (index>= Slides.length){
        currentIndex=0;
    }
    else if(index<0){
        currentIndex=slides.length-1;
    }
    else{
        currentIndex=index;
    }
    const offset=-currentIndex*100;
    document.querySelector(".slides").Style.transform='translateX(${offset}%)';
}
function nextSlide(){
    showSlide(currentIndex+1);
}
function prevSlide(){
    showSlide(currentIndex-1);
}
setInterval(()=>{
    nextSlide();
},5000);

showSlide(currentIndex);