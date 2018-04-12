;(function ($,document,window) {
    $(function () {
        /*字数*/
        $("#cooperation").maxlength({
            max: 200,
            feedbackText: '还可输入{r}字'
        })
    })
})(jQuery,document,window);