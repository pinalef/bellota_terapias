(function($) {
  $(function() {
    $('.sidenav').sidenav();
    $('.dropdown-trigger').dropdown({ // Does not change width of dropdown to that of the activator
      hover: true,
      coverTrigger: false

    });
    $('.materialboxed').materialbox();
  }); // end of document ready
})(jQuery); // end of jQuery name space