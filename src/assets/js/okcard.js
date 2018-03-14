;(function(window, document, $, undefined) {
  $(function() {
    verifyCity() && initCard();
  });

  function verifyCity() {
    var currCity = $('#currentCityCode').val();
    return (currCity != '' && currCity == '021') ? true : false;
  }

  function initCard() {
    // doms
    var $container = $('<div class="okcard-container"><img src="assets/imgs/okcard/img_banner.jpg" alt="okcard"></div>');

    // css properties
    $container.css({
      position: 'relative',
      width: '100%',
      'padding-top': '10px',
      'margin-bottom': '-15px'
    });

    // append to body
    var $swiper = $('#project').find('.swiper-container');
    $swiper.after($container);
  }
})(window, document, jQuery);