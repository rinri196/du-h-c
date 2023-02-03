window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    document.getElementById("navbar").style.padding = "5px 10px";
    document.getElementById("navbar").style.background = "#fff";
    document.getElementById("logo").style.height = "50px";
    document.getElementById("logo").style.width = "50px";
  } else {
    document.getElementById("navbar").style.background = "#ffffff00";
    document.getElementById("navbar").style.padding = "20px 10px";
    document.getElementById("logo").style.height = "50px";
    document.getElementById("logo").style.width = "50px";
  }
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}