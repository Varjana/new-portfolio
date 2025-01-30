
        // function toggleMenu() {
        //     document.querySelector('.nav-link').classList.toggle('show');
        // }
  




let currentIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  if (index >= slides.length) currentIndex = 0;
  if (index < 0) currentIndex = slides.length - 1;

  const offset = -currentIndex * 100;
  document.querySelector(".slider").style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  currentIndex++;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex--;
  showSlide(currentIndex);
}

/* Auto Slide Every 3 Seconds */
setInterval(() => {
  nextSlide();
}, 3000);
