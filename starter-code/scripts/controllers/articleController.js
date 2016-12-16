'use strict';

(function(module) {
  var articleController = {};

  articleController.reveal = function() {
    /* TODO: Use your DOM skills to reveal only the articles section! */
    $('.main-nav').on('click', '.tab', function(e) {
      $('.tab-content').hide();
      $('#' + $(this).data('content')).fadeIn();
    });
    $('.main-nav .tab:first').click();
  };

  module.articleController = articleController;
})(window);
