'use strict';

(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {
    /* TODO: DONE! Use your DOM skills to reveal only the about section! */
    $('.main-nav').on('click', '.tab', function(e) {
      e.preventDefault();
      $('.tab-content').hide();
      $('#' + $(this).data('content')).fadeIn();
    });
  };

  module.aboutController = aboutController;
})(window);
