/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselCont = document.querySelector('.carousel-container');

let createCarousel = () => {
  // create DOM elements
  const carousel = document.createElement('div');
  const leftButton = document.createElement('div');
  const rightButton = document.createElement('div');
  
  let currentSlide = document.createElement('img');

  // add classes/src
  carousel.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');

  // image url array
  const image1 = './assets/carousel/mountains.jpeg';
  const image2 = './assets/carousel/computer.jpeg';
  const image3 = './assets/carousel/trees.jpeg';
  const image4 = './assets/carousel/turntable.jpeg';
  const sliderArray = [image1, image2, image3, image4];
  let current = 0;
  currentSlide.src = sliderArray[current];
  
  leftButton.addEventListener('click', () => {
    current++;
    if (current > 3) {
      current = 0;
    }
    currentSlide.src = sliderArray[current];
  });
  
  rightButton.addEventListener('click', () => {
    current--;
    if (current < 0) {
      current = 3;
    }
    currentSlide.src = sliderArray[current];
  });

  // displaying slide
  currentSlide.style.display = 'initial';

  // populate buttons
  leftButton.innerHTML = '<';
  rightButton.innerHTML = '>';
  
  // appending
  carousel.appendChild(leftButton);
  carousel.appendChild(currentSlide);
  carousel.appendChild(rightButton);
  carouselCont.appendChild(carousel);
  return carousel;
} // end createCarousel

createCarousel();


