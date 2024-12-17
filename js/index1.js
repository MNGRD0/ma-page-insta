const carousel = document.querySelector('.carousel');

const prevBtn = document.querySelector('.prev-btn');

const nextBtn = document.querySelector('.next-btn');

const images = Array.from(carousel.querySelectorAll('img'));

const toggleButton = document.getElementById('toggle-dark-mode');

const body = document.body;

const carouselContainer = document.querySelector('.carousel-container');

const firstImageClone = images[0].cloneNode(true);
const lastImageClone = images[images.length - 1].cloneNode(true);

carousel.appendChild(firstImageClone);
carousel.insertBefore(lastImageClone, images[0]);

let index = 1;

function updateCarousel() {
    const width = images[0].clientWidth + 20;

    // Met à jour la position du carrousel
    carousel.style.transition = 'transform 0.3s ease-in-out';
    carousel.style.transform = `translateX(${-index * width}px)`;
}

updateCarousel();

prevBtn.addEventListener('click', () => {
    if (index <= 0) {
        index = images.length;
        carousel.style.transition = 'none';
        carousel.style.transform = `translateX(${-index * width}px)`;
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                carousel.style.transition = 'transform 0.3s ease-in-out';
                index--;
                updateCarousel();
            });
        });
    } else {
        index--;
        updateCarousel();
    }
});

nextBtn.addEventListener('click', () => {
    if (index >= images.length) {
        index = 1;
        carousel.style.transition = 'none';
        carousel.style.transform = `translateX(${0}px)`;
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                carousel.style.transition = 'transform 0.3s ease-in-out';
                index++;
                updateCarousel();
            });
        });
    } else {
        index++;
        updateCarousel();
    }
});

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    carouselContainer.classList.toggle('dark-mode');
});
