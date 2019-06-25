$(document).ready(function () {

  $("#carousel").owlCarousel({

    navigation: true,

    slideSpeed: 300,
    paginationSpeed: 400,

    items: 1,
    itemsDesktop: false,
    itemsDesktopSmall: false,
    itemsTablet: false,
    itemsMobile: false

  });

  const owl = $('.owl-carousel');
  const trapezoid = $('.trapezoid__img')[0];
  owl.owlCarousel();

  owl.on('changed.owl.carousel', trapImageChange);

  function trapImageChange() {
    const owl_active = document.getElementsByClassName('owl-item active')[0];
    const carousel_item = owl_active.getElementsByClassName("carousel__item")[0];
    const carousel_image = carousel_item.getElementsByTagName("a")[0];

    function chooseImage() {
      switch (carousel_image.className) {
        case 'second':
          trapezoid.style.backgroundImage = "url(./img/trap1.png)";
          break;
        case 'first':
          trapezoid.style.backgroundImage = "url(./img/trap2.png)";
          break;
      }

    }
    setTimeout(chooseImage, 300);
  }
});