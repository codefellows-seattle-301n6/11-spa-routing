'use strict';

(function(module) {
  var articleController = {};

  articleController.reveal = function() {
    /* TODO: DONE! Use your DOM skills to reveal only the articles section! */
    $('.main-nav').on('click', '.tab', function(e) {
      e.preventDefault();
      $('.tab-content').hide();
      $('#' + $(this).data('content')).fadeIn();
    });
    $('.main-nav .tab:first').click();
  };

  module.articleController = articleController;
})(window);
