;(function ($,window,document) {

    $(function () {
        $("#normalList").on('click','.like',function(){
            if(!$(this).hasClass('active')){
                $(this).addClass('active');
            }else{
                $(this).removeClass('active');
            }
        });
    })
})(jQuery,window,document);