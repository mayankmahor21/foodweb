
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





const slide = document.querySelectorAll(".slide");
var counter = 0;

// Set the position of each slide
slide.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

// Function to go to the previous slide
const goPrev = () => {
    counter--;
    if (counter < 0) {
        counter = slide.length - 1; // Loop back to the last slide
    }
    slideImage();
};

// Function to go to the next slide
const goNext = () => {
    counter++;
    if (counter >= slide.length) {
        counter = 0; // Loop back to the first slide
    }
    slideImage();
};

// Function to update the slide position
const slideImage = () => {
    slide.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};


