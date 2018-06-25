;(function ($, window, document) {

    $(function () {

        //swiper图片轮播
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            loop: true,
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: 2500,
            autoplayDisableOnInteraction: false
        });

        //返回首页小图标
        var $swiper_container_top = $('.swiper-container').height(),
            $home = $('.home');


        /*detail*/


        $(window).scroll(function () {
            if ($(window).scrollTop() > $swiper_container_top) {
                $home.show();
            } else {
                $home.hide();
            }
        });
        $(".content_li").on("click", "li", function () {
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
        });

        $(".like").click(function () {
            if (!$(this).hasClass("active")) {
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
            }
        });

        //数量增加减少
        (function () {
            var $add = $(".add"),
                $subtract = $(".subtract"),
                num = 0;

            $add.click(function () {
                amout = parseInt($(".number").val());
                amout++;
                if (amout > 1) {
                    $subtract.removeClass('disabled').addClass('active');
                }
                $(".number").val(amout);
            });
            $subtract.click(function () {
                if ($(this).hasClass("disabled")) {
                    return false;
                }
                amout = parseInt($(".number").val());
                amout--;
                if (amout <= 1) {
                    $(this).addClass('disabled').removeClass('active');
                }
                $(".number").val(amout);
            })
        })();
        //收藏
        $(".heart").click(function () {
            var isFavored = $(this).hasClass("active");
            if ($(this).hasClass("heart-shade")) {
                return false;
            }
            if (!isFavored) {
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
            }


        })

        $(".next_page a").click(function () {
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
        })
        //加入购物车
        $(".add-shop").click(function () {
            $("#shade").fadeIn(function () {
                $(".shade_shopping").fadeIn();
            });
            $("body").on('touchmove.mask', function (event) {
                event.preventDefault();
                event.stopPropagation();
            });
        });
        $(".visit_again").click(function () {
            $(".shade_shopping").fadeOut(function () {
                $("#shade").fadeOut();
            });
            $("body").off(".mask");
        })

        //换页
        $(".right").on("click.page", function () {
            var $right_active = $(".next_page").not("span").find("a.active");
            var $right = $(".next_page a").eq($(".next_page a").length - 1);
            $right_active.removeClass("active").next().addClass("active");
            if ($right.hasClass("active")) {
                $(".right").addClass('disabled');
            }
        });
        $(".left").on("click.page", function () {
            var $left_active = $(".next_page").not("span").find("a.active");
            var $left = $(".next_page a").eq(0);

            $left_active.removeClass("active").prev().addClass("active");
            if ($left.hasClass("active")) {
                $(".left").off(".page");
            }

        });

        /*点击加号按钮，增加数字*/
        $('.operators .jiajia-add').on('click', function () {
            var jiajiaNum = parseInt($(this).siblings('.jiajia-num').html());
            jiajiaNum++;
            if (jiajiaNum > 0) {
                $(this).siblings('.jiajia-num').show();
                $(this).siblings('.jiajia-minus').show();
            }
            $(this).siblings('.jiajia-num').html(jiajiaNum);
        })

        $('.operators .jiajia-minus').on('click', function () {
            var jiajiaNum = parseInt($(this).siblings('.jiajia-num').html());
            jiajiaNum--;
            if(jiajiaNum<1){
                $(this).siblings('.jiajia-num').hide();
                $(this).hide();
            }
            $(this).siblings('.jiajia-num').html(jiajiaNum);
        })
        /*加价购详情初始化*/
        jiajiaDetail();

        /*点击按钮，详情打开*/
        $('.four_li .open-detail').click(function () {
            $('#jiajiaDetail').fadeIn(300);
        })
        $('#jiajiaDetail .close-jiajiaDetail').click(function () {
            $(this).parent().parent().fadeOut(300);
        })
    });

    /*加价购详情*/
    function jiajiaDetail() {

        var data = {
                list: [
                    {
                        imgUrl: './assets/imgs/detail/jiajia-img.png',
                        product: {
                            name: '商品名称',
                            detail1: '花材数量：9枝',
                            detail2: '花材品质：A级玫瑰',
                            detail3: '花盒尺寸：22*30*22cm'
                        },
                        maintenance: {
                            name: '养护',
                            maintain1: '玫瑰由花泥保鲜',
                            maintain2: '可直接置于桌面摆放，无需剪枝打理',
                            maintain3: '3~4天可浇水一次，延长花期',
                        }
                    }
                ]
            }
        ;
        var _html = template('tplJiaJia',data);
        $('#jiajiaDetail').html(_html);
    }
})(jQuery, window, document);
