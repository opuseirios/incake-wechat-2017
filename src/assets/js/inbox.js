(function(window, document, $, undefined) {
    $(function() {
        var navigator = $('#navigator'),
            dotElem = navigator.find('span');

        new AlloyTouch.FullPage('#fullpage', {
            animationEnd: function() {},
            leavePage: function(index) {},
            beginToPage: function(index) {

                // 判断是不是第一屏，第一屏分页器在右侧，其它屏分页器在左侧
                if (index === 0) {
                    navigator
                        .addClass('first-section')
                        .removeClass('normal-section');
                } else {
                    navigator
                        .removeClass('first-section')
                        .addClass('normal-section');
                }

                // 设置对应屏为 active 状态
                dotElem
                    .eq(index)
                    .addClass('active')
                    .siblings()
                    .removeClass('active');
            }
        });

    });
})(window, document, jQuery);