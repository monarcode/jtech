
$(document).ready(function () {
  let toggler = $("#navbar__toggler");
  let navbar = document.getElementById("navbar");

  let splide = new Splide( '.splide', {
    arrows: false,
    perPage: 1
  } );
  splide.mount();

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
});
