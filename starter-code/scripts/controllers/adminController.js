'use strict';

(function(module) {
  var adminController = {};

  adminController.reveal = function() {

    $('.main-nav').on('click', '.tab', function(e) {
      e.preventDefault();
      $('.tab-content').hide();
      $('#' + $(this).data('content')).fadeIn();
    });
  };


    var template = Handlebars.compile($('#author-template').text());
    Article.numWordsByAuthor().forEach(function(stat) {
      $('.author-stats').append(template(stat));
    });
    $('#blog-stats .articles').text(Article.allArticles.length);
    $('#blog-stats .words').text(Article.numWordsAll());
  };



  module.adminController = adminController;

  // Article.fetchAll(articleView.initAdminPage);

})(window);
