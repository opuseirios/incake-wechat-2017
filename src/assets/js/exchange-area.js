;(function ($, window, document) {
    /*template规则*/
    template.helper('specFormat', function (specs) {
        var str = '';
        if (!!specs && $.isArray(specs)) {
            for (var i = 0, len = specs.length; i < len; i++) {
                var spec = specs[i];
                var comment = spec.comment.join('===');
                if (i !== specs.length - 1) {
                    str += spec.pound + '||' + spec.price + '||' + comment + '|***|';
                } else {
                    str += spec.pound + '||' + spec.price + '||' + comment;
                }
            }
        }
        return str;
    });
    template.helper('commentFormat', function (comment) {
        var str = '';
        if (!!comment && $.isArray(comment)) {
            str += comment.join('*||*');
        }
        return str;
    });

    $(function () {
        var tl = new TimelineLite();
        /*tab栏切换*/
        var $tab = $(".tab div");
        $tab.click(function () {
            var $this = $(this);
            itemIndex = $this.index();
            $this.addClass('active').siblings().removeClass('active');
            $('.lists').eq(itemIndex).show().siblings('.lists').hide();
        })
        //加载图片
        initData();
        //节流加载
        var throttle = _.throttle(scroll, 200);
        $(window).on('scroll', throttle);

        // 图片懒加载
        (function () {
            var imgLazyLoad = new LazyLoad({
                elements_selector: ".lazy"
            });

            // 节流函数，减少更新频率
            var imgsThrottle = _.throttle(updateViewport, 200);
            $(window).on('scroll', imgsThrottle);

            function updateViewport() {
                imgLazyLoad.update();
            }
        })();

        /*点击checkbox切换状态*/
        $('.part .pitch-on').click(function() {
            if (!$(this).hasClass("active") && !$(this).next('a').hasClass('active')) {
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
                $('.all-select').removeClass('active');
            }
        });

        /*餐盘的增减*/
        (function () {
            function add(add, minus, number) {
                var $add = $(add),
                    $subtract = $(minus),
                    num = 0;

                $add.click(function() {

                    amout = parseInt($(number).html());
                    amout++;
                    if (amout > 1) {
                        $subtract.removeClass('disabled');
                    }
                    $(number).html(amout);
                });
                $subtract.click(function() {
                    if ($(this).hasClass("disabled")) {
                        return false;
                    }
                    amout = parseInt($(number).html());
                    if (amout === 1) {
                        return false;
                    }

                    amout--;
                    if (amout <= 1) {
                        $(this).addClass('disabled');
                    }
                    $(number).html(amout);
                })
            };
            add('.add01', '.minus01', '.number01');
            add('.add02', '.minus02', '.number02');
            add('.add03', '.minus03', '.number03');
        })();


        /*点击蜡烛加号，弹出选框*/
        var addPart = document.getElementsByClassName('addPart')[0];
        $(addPart).click(function () {
            $('.accounts').fadeOut();
            $('.shade').fadeIn(function () {
                $('.parcel').fadeIn().animate({'bottom':0},200);
            })
        })
        $('.shade').click(function(e) {
            if (e.target === $('.shade')[0]) {
                $(".parcel").animate({
                    bottom: '-100%'
                }, function() {
                    $(this).fadeOut();
                    $('.shade').fadeOut();
                    $('.accounts').fadeIn();
                });
            }
        });

        //蜡烛加减
        (function() {
            var amout = 0;
            $(".candle").on("click", ".addNumber", function(event) {
                event.preventDefault();
                event.stopPropagation();
                var $this = $(this);
                amout = parseInt($this.siblings('.number').text());
                amout++;

                if (amout > 0) {
                    $this.siblings('.subtract').removeClass('disabled').addClass('active');
                }
                $this.siblings('.number').text(amout);
            });
            $(".candle").on("click", ".subtract", function(event) {
                event.preventDefault();
                event.stopPropagation();
                var $this = $(this);

                if ($this.hasClass("disabled")) {
                    return false;
                }
                amout = parseInt($this.siblings('.number').text());
                if (amout === 0) {
                    $this.addClass('disabled').removeClass('active');
                    return false;
                }
                amout--;
                if (amout <= 0) {
                    $this.addClass('disabled').removeClass('active');
                }
                $this.siblings('.number').text(amout);
            });
        })();

        //确定
        $(".confirm-select").click(function() {
            tl.clear();
            tl.to($('.parcel'), 0.5, {
                bottom: "-100%",
                onComplete: function() {
                    $(".shade").fadeOut();
                    $('.parcel').fadeOut();
                    $('.accounts').fadeIn();
                }
            });
        });
    })


    //scroll事件
    function scroll() {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop,
            viewHeight = $(window).height(),
            mainTop = $("#cake-swiper").offset().top,
            mainHeight = $("#cake-swiper").height(),
            accountHeight = $('.accounts').height();
        //		var	mainpaddingBottom = parseInt($("#loading").css("padding-bottom"));
        var disT = (scrollTop + viewHeight+accountHeight) - (mainTop + mainHeight);
        if (disT > 0) {
            initData();
        }
    }

    /*加载数据*/
    function initData() {
        // ajax
        var leftList = {
            list: []
        };

        var rightList = {
            list: []
        };

        var data = [
            {
                link: 'detail.html',
                textlink: 'javascript:;',
                textimg: 'assets/imgs/icons/car.png',
                img: 'assets/imgs/index/cake.png',
                name: {
                    cn: '百变魔方',
                    en: 'Rubikl Cube'
                },
                label: {
                    one: '标签1',
                    two: '标签2',
                    three: '标签3'
                },
                price: '189',
                pound: '1.5磅',
                oldPrice: '189',
                sell: true,
                specs: [
                    {
                        pound: 1.5,
                        price: 189,
                        comment: ['14CM*14CM*4.5CM≈6寸，约510g', '免费赠送5份餐具', '适合2~3人食用']
                    },
                    {
                        pound: 2.5,
                        price: 279,
                        comment: ['17.5CM*17.5CM*4.5CM≈8寸，约1.0kg', '免费赠送10份餐具', '适合7~8人食用']
                    },
                    {
                        pound: 3.5,
                        price: 429,
                        comment: ['23CM*23CM*4.5CM≈12寸，约1.5kg', '免费赠送15份餐具', '适合11~12人食用']
                    },
                    {
                        pound: 5.5,
                        price: 709,
                        comment: ['30CM*30CM*4.5CM≈14寸，约2.4kg', '免费赠送20份餐具', '适合15~20人食用']
                    }
                ]
            },
            {
                link: 'detail.html',
                textlink: 'javascript:;',
                textimg: 'assets/imgs/icons/car.png',
                img: 'assets/imgs/index/cake.png',
                name: {
                    cn: '百变魔方',
                    en: 'Rubikl Cube'
                },
                label: {
                    one: '标签1',
                    two: '标签2',
                    three: '标签3'
                },
                price: '189',
                oldPrice: '189',
                pound: '1.5磅',
                sold: true,
                specs: [
                    {
                        pound: 1.5,
                        price: 189,
                        comment: ['14CM*14CM*4.5CM≈6寸，约510g', '免费赠送5份餐具', '适合2~3人食用']
                    },
                    {
                        pound: 2.5,
                        price: 279,
                        comment: ['17.5CM*17.5CM*4.5CM≈8寸，约1.0kg', '免费赠送10份餐具', '适合7~8人食用']
                    },
                    {
                        pound: 3.5,
                        price: 429,
                        comment: ['23CM*23CM*4.5CM≈12寸，约1.5kg', '免费赠送15份餐具', '适合11~12人食用']
                    },
                    {
                        pound: 5.5,
                        price: 709,
                        comment: ['30CM*30CM*4.5CM≈14寸，约2.4kg', '免费赠送20份餐具', '适合15~20人食用']
                    }
                ]
            },
            {
                link: 'detail.html',
                textlink: 'javascript:;',
                textimg: 'assets/imgs/icons/car.png',
                img: 'assets/imgs/index/cake.png',
                name: {
                    cn: '百变魔方',
                    en: 'Rubikl Cube'
                },
                label: {
                    one: '标签1',
                    two: '标签2',
                    three: '标签3'
                },
                price: '189',
                pound: '1.5磅',
                oldPrice: '189',
                specs: [
                    {
                        pound: 1.5,
                        price: 189,
                        comment: ['14CM*14CM*4.5CM≈6寸，约510g', '免费赠送5份餐具', '适合2~3人食用']
                    },
                    {
                        pound: 2.5,
                        price: 279,
                        comment: ['17.5CM*17.5CM*4.5CM≈8寸，约1.0kg', '免费赠送10份餐具', '适合7~8人食用']
                    },
                    {
                        pound: 3.5,
                        price: 429,
                        comment: ['23CM*23CM*4.5CM≈12寸，约1.5kg', '免费赠送15份餐具', '适合11~12人食用']
                    },
                    {
                        pound: 5.5,
                        price: 709,
                        comment: ['30CM*30CM*4.5CM≈14寸，约2.4kg', '免费赠送20份餐具', '适合15~20人食用']
                    }
                ]
            },
            {
                link: 'detail.html',
                textlink: 'javascript:;',
                textimg: 'assets/imgs/icons/car.png',
                img: 'assets/imgs/index/cake.png',
                name: {
                    cn: '百变魔方',
                    en: 'Rubikl Cube'
                },
                label: {
                    one: '标签1',
                    two: '标签2',
                    three: '标签3'
                },
                price: '189',
                pound: '1.5磅',
                specs: [
                    {
                        pound: 1.5,
                        price: 189,
                        comment: ['14CM*14CM*4.5CM≈6寸，约510g', '免费赠送5份餐具', '适合2~3人食用']
                    },
                    {
                        pound: 2.5,
                        price: 279,
                        comment: ['17.5CM*17.5CM*4.5CM≈8寸，约1.0kg', '免费赠送10份餐具', '适合7~8人食用']
                    },
                    {
                        pound: 3.5,
                        price: 429,
                        comment: ['23CM*23CM*4.5CM≈12寸，约1.5kg', '免费赠送15份餐具', '适合11~12人食用']
                    },
                    {
                        pound: 5.5,
                        price: 709,
                        comment: ['30CM*30CM*4.5CM≈14寸，约2.4kg', '免费赠送20份餐具', '适合15~20人食用']
                    }
                ]
            }];

        $.each(data, function (idx, ele) {
            if (idx % 2 === 0) {
                leftList.list.push(ele);
            } else {
                rightList.list.push(ele);
            }
        });

        var $boxLeft = $('.box-left'),
            $boxRight = $('.box-right');

        var _html = template('tplList', leftList);
        $boxLeft.append(_html);

        var _html = template('tplList', rightList);
        $boxRight.append(_html);
    };
    //关闭
    $("#normsShade").on('click', '.close', function () {
        $(".norms-shade").fadeOut();
    });

    //数据绑定
    $("#main").on('click', '.icon-add', function () {
        var str = $(this).closest('.box').attr('data-regular').trim();
        var cakeName = $(this).closest('.box-text').find('.change').html().trim(),
            hasRegular = str === '' ? false : true;

        var data = {
            sc: [],
            regular: []
        };
        var groupTmp = [],
            itemTmp = [];
        if (hasRegular) {
            groupTmp = str.split('|***|');
            for (var i = 0, len = groupTmp.length; i < len; i++) {
                itemTmp = groupTmp[i].split('||');
                data.regular.push({
                    pound: itemTmp[0],
                    price: itemTmp[1],
                    comment: itemTmp[2].split('===')
                });
            }
        }
        //常规
        $("#normsShade").on('click', '.poundage-normal li', function () {
            $(this).addClass("active").siblings().removeClass("active");
            var comment = $(this).attr('data-comment');
            var prices = $(this).attr('data-prices');
            var data_norms = $(this).attr('data-comment').split("||");
            var li_one = $(".pound-normal").find('li:eq(0)');
            var li_two = $(".pound-normal").find('li:eq(1)');
            var li_three = $(".pound-normal").find('li:eq(2)');
            li_one.text(data_norms[0]);
            li_two.text(data_norms[1]);
            li_three.text(data_norms[2]);
            $(".subtract-normal").removeClass('active');
            $(".number-normal").text(1);
            $(".prices").text(parseInt(prices, 10));
        });

        handle4BindShade(data, cakeName);
    });

    // 绑定加入购物车弹框数据
    function handle4BindShade(data, cakeName) {
        var _html = template('tplNormsShade', data);
        $('#normsShade').html(_html);

        $(".norms-shade").fadeIn(function () {
            $('.hid_name').val(cakeName);
        });
    }

    var $add_surprised = $(".add-surprised"),
        $subtract_surprised = $(".subtract-surprised"),
        $number_surprised = $(".number-surprised");

    var $add_normal = $(".add-normal"),
        $subtract_normal = $(".subtract-normal"),
        $number_normal = $(".number-normal");

    //加减常规
    $("#normsShade").on("click", '.add-normal', function () {
        amout = parseInt($(".number-normal").text());
        amout++;
        if (amout > 1) {
            $(".subtract-normal").removeClass('disabled').addClass('active');
        }
        $(".number-normal").text(amout);
    });
    $("#normsShade").on("click", '.subtract-normal', function () {
        if ($(this).hasClass("disabled")) {
            return false;
        }
        amout = parseInt($(".number-normal").text());
        if (amout === 1) {
            $(this).addClass('disabled').removeClass('active');
            return false;
        }
        amout--;
        if (amout <= 1) {
            $(this).addClass('disabled').removeClass('active');
        }
        $(".number-normal").text(amout);
    });


})(jQuery, window, document);