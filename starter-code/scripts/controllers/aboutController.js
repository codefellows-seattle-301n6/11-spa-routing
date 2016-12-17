'use strict';

(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {
    /* TODO: Use your DOM skills to reveal only the about section! */
    document.getElementByID('#about').display = 'visible';

  };

  module.aboutController = aboutController;
})(window);
