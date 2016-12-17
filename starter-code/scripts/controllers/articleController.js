'use strict';

(function(module) {
  var articleController = {};

  articleController.reveal = function() {
    /* TODO: DONE Use your DOM skills to reveal only the articles section! */
    $('#about').hide();
    $('#articles').fadeIn(1000);
  };
  module.articleController = articleController;
})(window);
