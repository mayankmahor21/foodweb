
const lenis = new Lenis({
    autoRaf: true,
  });
  
  
  lenis.on('scroll', (e) => {
    console.log(e);
  });





// const slide = document.querySelectorAll(".slide")
// var counter = 0;
// slide.forEach(
//     (slide, index) =>{
//         slide.style.left = `${index * 100}%`
//     }
// )

// const goPrev = () => {
//     counter--
//     slideImage()
// }
// const goNext = () => {
//     counter++
//     slideImage()
// }

// const slideImage = () => {
//     slide.forEach(
//         (slide) => {
//             slide.style.transform = `translateX(-${counter * 100}%)`
//         }
//     )
// }





// const slide = document.querySelectorAll(".slide");
// var counter = 0;


// slide.forEach((slide, index) => {
//     slide.style.left = `${index * 100}%`;
// });


// const goPrev = () => {
//     counter--;
//     if (counter < 0) {
//         counter = slide.length - 1; 
//     }
//     slideImage();
// };


// const goNext = () => {
//     counter++;
//     if (counter >= slide.length) {
//         counter = 0; 
//     }
//     slideImage();
// };


// const slideImage = () => {
//     slide.forEach((slide) => {
//         slide.style.transform = `translateX(-${counter * 100}%)`;
//     });
// };


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
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

