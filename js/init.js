(function ($) {
  $(function () {
    $('.parallax').parallax();
    $('.sidenav').sidenav();
    $('.dropdown-trigger').dropdown({ // Does not change width of dropdown to that of the activator
      hover: true,
      coverTrigger: false

    });
    $('.materialboxed').materialbox();
    $('.scrollspy').scrollSpy();
    $('.carousel').carousel();
    $('.slider').slider();
  }); // end of document ready
})(jQuery); // end of jQuery name space