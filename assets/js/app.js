
$(document).ready(function () {
  let toggler = $("#navbar__toggler");
  let navbar = document.getElementById("navbar");

  $(document).scroll(() => {
    let scrollPosition = window.scrollY;

    if (scrollPosition >= 100) {
      $(navbar).addClass("dark-bg");
    } else $(navbar).removeClass("dark-bg");
  });

  $(toggler).click(function () {
    this.classList.toggle("is-active");
    navbar.classList.toggle("active");
  });

  let splide = new Splide( '.splide', {
    arrows: true,
    perPage: 1,
    breakpoints: {
      768: {
        arrows: false,
      }
    }
  } );
  splide.mount();
});
