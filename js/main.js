new Vue({
    el: "#app",
    data: {
        searchBar: 0
    }
})

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
})