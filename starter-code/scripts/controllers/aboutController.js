'use strict';

(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {
    /* TODO: Use your DOM skills to reveal only the about section! */
    $('.main-nav').on('click', '.tab', function(e) {
      $('.tab-content').hide();
      $('#' + $(this).data('content')).fadeIn();
    });
    // $('.main-nav .tab:second').click();
  // };
  };

  module.aboutController = aboutController;
})(window);
