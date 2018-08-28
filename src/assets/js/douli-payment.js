(function ($,window,doucment) {
    $(function () {
        /*点击获取验证码*/
        $('.getCode').on('click',function () {
            var phoneNum = $('.phoneNum').val();
            var mobile = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
            var count = 60;
            var timer = null;
            if(!phoneNum.match(mobile)){
                $('.wrong-msg').html('您输入的手机号有误，请重新输入').show();
                return;
            }
            timer = setInterval(function () {
                count--;
                $('.getCode').html('还剩'+count+'S').attr('disabled',true).addClass('active')
                if(count<1){
                    clearInterval(timer);
                    $('.getCode').removeClass('active').html('点击重新获取').attr('disabled',false);
                }
            },1000)
        })
        $('input').on('focus',function () {
            $('.wrong-msg').hide();
        })
    })
})(jQuery,window,document);