(() => {
    let currentSlideIdx = 0;
    let pictureID = 0;

    const slides = [
        '<img src="img/port-in-norway.jpg" id="img_0" alt="Port in Norway">',
        '<img src="img/iceberg-in-the-sea.jpg" id="img_1" alt="Iceberg in the sea">',
        '<img src="img/man-on-the-rock.jpg" id="img_2" alt="Man on the rock">',
    ];

    function renderSlide() {
        const slideContainer = document.querySelector('.galery');
        slideContainer.innerHTML = '<div><a href="#popap">' + slides[currentSlideIdx] + '</a></div>';
        if (window.innerWidth > 600) {
            const secondSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
            slideContainer.innerHTML += '<div><a href="#popap">' + slides[secondSlideIdx] + '</a></div>';
            if (window.innerWidth > 900) {
                const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
                slideContainer.innerHTML += '<div><a href="#popap">' + slides[thirdSlideIdx] + '</a></div>';
            }
        }
        const zoomContainer = document.querySelector('.modal_window_content');
        zoomContainer.innerHTML = slides[pictureID];
    }

    // Функція отримання номеру зображення після натискання
    function getValueImg(pict) {
        const pushPictureID = pict.target.id;
        pictureID = parseInt(pushPictureID.slice(4));
        renderSlide() 
    }

    renderSlide()

    // Обробник натискання на зображення та виклик функції 
    const selectPicture = document.querySelector('.galery');
    selectPicture.addEventListener('click', getValueImg);

    window.addEventListener('resize', renderSlide);

})();