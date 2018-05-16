;(function ($,window,document) {
    $(function(){
        fnInitSlideLock();

        /*领取优惠券*/
        $('#receiveCoupon').click(function(){
            $('.receiveSuccess').fadeIn('1500');
        })
        $('.receiveSuccess').on('click',function(e){
            var elem = e.target||e.srcElement;
            if(elem.className==='receiveSuccess') {
                $('.receiveSuccess').fadeOut(1000)
            }
        })

        /*复制到粘贴板*/
        var clipboard = new ClipboardJS('#copyCoupon');
        clipboard.on('success',function(e){
            $('.copyMsg').text('复制成功').fadeIn(500).delay(2000)
                .fadeOut(500)
        })
        clipboard.on('error',function(){
            $('.copyMsg').text('复制失败，请手动复制或者截图保存优惠券').fadeIn(500)
        })
    })


    /*滑动解锁*/
    function fnInitSlideLock() {
        var $oMaskAction = $('#maskAction'),
            $oBtn = $oMaskAction.find('.button'),
            $oSlider = $oMaskAction.find('.slider'),
            $oTrack = $oMaskAction.find('.track'),
            $bgGreen = $oMaskAction.find('.bg-green'),
            disX, iLeft,
            time = 10,
            isMoving = false,
            isCompleted = false;

        $oBtn.on('touchstart.action',function (e) {
            if(isCompleted||isMoving){
                return false;
            }
            var touches = e.originalEvent.touches[0];
            disX = touches.clientX - $oBtn.position().left;
            $oBtn.removeClass('button-on');
            $oTrack.removeClass('track-on');
            document.addEventListener('touchmove',defaultEvent,false);/*阻止页面发生默认事件*/
        })

        $oBtn.on('touchmove.action',function(e){
            if(isCompleted){
                return false;
            }
            isMoving = true;

            var touches = e.originalEvent.touches[0];
            iLeft = touches.clientX - disX;
            var disW = $oSlider.width() - $oBtn.width();
            if(iLeft<0){
                iLeft = 0;
                $oBtn.addClass('active')
            }else if(iLeft>disW){
                iLeft = disW;
            }

            $oBtn.css({
                left:iLeft+'px'
            });
            $oTrack.css({
                width:iLeft+25+'px'
            })
        });

        $oBtn.on('touchend.action',function(){
            if(isCompleted){
                return false;
            }

            isMoving = false;

            var disW = $oSlider.width() - $oBtn.width();
            if(iLeft>=disW){
                $oBtn.removeClass('active').css({
                    left:disW+'px'
                });
                $oTrack.width(disW+25);
                isCompleted=true;

                /*函数滑到最右边的处理函数*/
                verification();
            }else{
                $oBtn.addClass('active').css({
                    left: '0'
                });
                $oTrack.css({
                    width: '0'
                });
            }
            $oBtn.addClass('button-on');
            $oTrack.addClass('track-on');
            document.removeEventListener("touchmove", defaultEvent, false);
        })

        function defaultEvent(e){
            e.preventDefault();
        }


        /*函数滑到最右边的处理函数*/
        function verification() {
            var $mobile = $('.txt-mobile'),
                txtMobile = $mobile.val().trim(),
                mobileReg = /^(?=\d{11}$)^1(?:3\d|4[57]|5[^4\D]|7[^249\D]|8\d)\d{8}$/;
            
            /*手机号合法性判断*/
            if(txtMobile === ''){
                $bgGreen.text('手机号不能为空');
                setTimeout(fnReset,2000);
                return false;
            }

            if(!mobileReg.test(txtMobile)){
                $bgGreen.text('请输入正确的手机号');
                setTimeout(fnReset,2000);
                return false;
            }

            /*TODO 处理发送短信验证码逻辑*/
            handle4CountDown($bgGreen, 90, fnReset);
        }
        
        function fnReset() {
            $oBtn.addClass('active').css({
                left: '0'
            });
            $oTrack.css({
                width: '0'
            });
            $bgGreen.empty();
            isCompleted = false;
        }
    }
    function handle4CountDown($oTarget,timeToCountDown,callback){
        var timer = null;
        var beginTime = new Date().getTime();
        var endTime = beginTime + timeToCountDown * 1000;
        var curShowTimeSeconds = 0;

        curShowTimeSeconds = getCurrentShowTimeSeconds();

        timer = setInterval(function(){
            render();
            update();
        }, 50)

        function update(){
            var nextShowTimeSeconds = getCurrentShowTimeSeconds();
            var nextSeconds = nextShowTimeSeconds;
            var curSeconds = curShowTimeSeconds;
            if (nextSeconds !== curSeconds) {
                curShowTimeSeconds = nextShowTimeSeconds;
            }
        }

        function render() {
            var seconds = curShowTimeSeconds;
            if (seconds === 0) {
                clearInterval(timer);

                // 倒计时完成把isSend设成空字符串
                $oTarget.text('');

                callback && callback();
            } else {
                $oTarget.html('短信验证码已发送，' + seconds + 's 后重新获取');
            }
        }

        function getCurrentShowTimeSeconds(){
            var curTime = new Date().getTime();
            var ret = endTime - curTime;
            ret = Math.round(ret / 1000);
            return ret >= 0 ? ret : 0;
        }
    }


})(jQuery,window,document);