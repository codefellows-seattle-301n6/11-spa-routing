'use strict';

(function(module) {
  var articleController = {};

  articleController.reveal = function() {
    /* TODO: DONE Use your DOM skills to reveal only the articles section! */
    document.getElementByID('#articles').display = 'visible';
  };
  module.articleController = articleController;
})(window);
