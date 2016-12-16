'use strict';

(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {
    /* TODO: DONE: Use your DOM skills to reveal only the about section! */
    $('#articles').hide();
    $('#stats').hide();
    $('#about').fadeIn(1000);
  };

  module.aboutController = aboutController;
})(window);
