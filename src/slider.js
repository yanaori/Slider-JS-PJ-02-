const entities = [
    {
        headerTextDescription: [
            {
                city: "Rostov-on-Don \n LCD admiral",
                area: "81 m2",
                time: "3.5 months",
                cost: "Upon request"
            }
        ],
        headerSliderImage: './img/image2.1.png'
    },
    {
        headerTextDescription: [
            {
                city: "Sochi \n Thieves",
                area: "105 m2",
                time: "4 months",
                cost: "Upon request"
            }
        ],
        headerSliderImage: './img/image2.png'
    },
    {
        headerTextDescription: [
            {
                city: "Rostov-on-Don \n Patriotic",
                area: "93 m2",
                time: "3 months",
                cost: "Upon request"
            }
        ],
        headerSliderImage: './img/image3.png'
    },
]

const headerTextDescription = document.querySelectorAll('.header_text-description')
const headerSliderImage = document.querySelectorAll('.header_slider-image');
const headerSliderDots = document.querySelectorAll('.header_slider-dot');
const prevBtn = document.querySelector('.header_slider-prev');
const nextBtn = document.querySelector('.header_slider-next');
const headerItem = document.querySelectorAll('.header_item');

let currentSlide = 0;

function showSlide(index) {
    const slide = entities[index];
    const textDescription = slide.headerTextDescription[0];

    const cityElement = document.getElementById('city');
    const areaElement = document.getElementById('apartmentArea');
    const timeElement = document.getElementById('repairTime');
    const costElement = document.getElementById('repairCost');

    cityElement.textContent = textDescription.city;
    areaElement.textContent = textDescription.area;
    timeElement.textContent = textDescription.time;
    costElement.textContent = textDescription.cost;

    headerSliderImage.forEach((image, i) => {
        if (i === index) {
            image.style.display = 'block';
            headerSliderDots[i].classList.add('active');
        } else {
            image.style.display = 'none';
            headerSliderDots[i].classList.remove('disabled');
        }
    });

    headerItem.forEach((link, i) => {
        if (i === index) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    headerSliderDots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('disabled');
        } else {
            dot.classList.remove('disabled');
        }
    });

    if (index === 0) {
        prevBtn.classList.add('active');
    } else {
        prevBtn.classList.remove('active');
    }

    if (index === entities.length - 1) {
        nextBtn.classList.add('active');
    } else {
        nextBtn.classList.remove('active');
    }

}

function prevSlide() {
    currentSlide = (currentSlide - 1 + headerSliderImage.length) % headerSliderImage.length;
    showSlide(currentSlide);
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % headerSliderImage.length;
    showSlide(currentSlide);
}

function setSliderByDot(dotIndex) {
    currentSlide = dotIndex;
    showSlide(currentSlide);
}

function setSliderByLink(linkIndex) {
    currentSlide = linkIndex;
    showSlide(currentSlide);
}

prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + headerSliderImage.length) % headerSliderImage.length;
    showSlide(currentSlide);
})

nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % headerSliderImage.length;
    showSlide(currentSlide);
})

headerSliderDots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        setSliderByDot(i);
    });
});

headerItem.forEach((link, i) => {
    link.addEventListener('click', () => {
        setSliderByLink(i);
    });
});

showSlide(currentSlide);


