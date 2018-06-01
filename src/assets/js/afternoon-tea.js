;(function ($,window,document) {
    $(function () {
        initGroup();
    })
    /*初始化第一组蛋糕*/
    function initGroup() {
        var data = {
            list:[
                {
                    img:'./assets/imgs/afternoon-tea/cake1.png',
                    name:'INBOX(抹茶诱惑)',
                    en:'INBOX',
                    price:69,
                    unit:'1盒'
                },
                {
                    img:'./assets/imgs/afternoon-tea/cake2.png',
                    name:'INBOX(八四二四)',
                    en:'INBOX',
                    price:69,
                    unit:'1盒'
                },
                {
                    img:'./assets/imgs/afternoon-tea/cake4.png',
                    name:'INBOX(莓の恋)',
                    en:'INBOX',
                    price:69,
                    unit:'1盒'
                },
                {
                    img:'./assets/imgs/afternoon-tea/cake5.png',
                    name:'INBOX(至爱红丝绒)',
                    en:'INBOX',
                    price:69,
                    unit:'1盒'
                },
                {
                    img:'./assets/imgs/afternoon-tea/cake6.png',
                    name:'INBOX(芒果白雪)',
                    en:'INBOX',
                    price:69,
                    unit:'1盒'
                },
                {
                    img:'./assets/imgs/afternoon-tea/cake7.png',
                    name:'INBOX(黑巧脏脏)',
                    en:'INBOX',
                    price:69,
                    unit:'1盒'
                },
                {
                    img:'./assets/imgs/afternoon-tea/cake8.png',
                    name:'INBOX(豆の乳)',
                    en:'INBOX',
                    price:69,
                    unit:'1盒'
                },
                {
                    img:'./assets/imgs/afternoon-tea/cake9.png',
                    name:'巧克力瑞士卷',
                    en:'Chocolate Swiss Roll',
                    price:68,
                    unit:'4只'
                },
                {
                    img:'./assets/imgs/afternoon-tea/cake10.png',
                    name:'香草瑞士卷',
                    en:'Vanilla Swiss Roll',
                    price:68,
                    unit:'4只'
                },
                {
                    img:'./assets/imgs/afternoon-tea/cake11.png',
                    name:'经典小方',
                    en:'Classic slices',
                    price:68,
                    unit:'4只'
                },
                {
                    img:'./assets/imgs/afternoon-tea/cake12.png',
                    name:'芝士星语',
                    en:'Queen Cheese',
                    price:99,
                    unit:'4只'
                }
            ]
        }
        var _html = template('tplGroup',data);
        $('#group').append(_html);
    }

})(jQuery,window,document);