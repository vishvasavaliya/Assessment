const sliderImage = document.querySelector('.slider-image');
const sliderThumbnails = document.querySelectorAll('.slider-thumbnails img');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

//  update the slider image
function updateSliderImage(index) {
  sliderImage.src = sliderThumbnails[index].src;
  currentIndex = index;
}

// Event listener for thumbnail clicks
sliderThumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    updateSliderImage(index);
  });
});

// Event listener for previous button
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + sliderThumbnails.length) % sliderThumbnails.length;
  updateSliderImage(currentIndex);
});

// Event listener for next button
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % sliderThumbnails.length;
  updateSliderImage(currentIndex);
});

// Update slider image on page load
updateSliderImage(currentIndex);