'use strict';

(function(module) {
  var statsController = {};

  statsController.reveal = function() {
    /* TODO: DONE: Use your DOM skills to reveal only the articles section! */
    $('#about').hide();
    $('#articles').hide();
    $('#stats').fadeIn(1000);
  };

  module.statsController = statsController;
})(window);
