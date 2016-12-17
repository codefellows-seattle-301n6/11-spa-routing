'use strict';

(function(module) {
  var articleController = {};

  articleController.reveal = function() {
    /* TODO: Use your DOM skills to reveal only the articles section! */
    document.getElementByID('#articles').display = 'visible';
  };
  module.articleController = articleController;
})(window);
