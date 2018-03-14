;(function ($,window,document) {
    $(function () {
        initYZCakes();
        initSZCakes();
        initPowerCakes();
    });
    function initYZCakes() {
        var $yanzhiCakes = $('#yanzhiCakes');
        var _data={
            list:[
                {
                    img:'assets/imgs/exchangeIndex/cake1.png',
                    name:'印克 经典奶香',
                    link:'javascript:;'
                },
                {
                    img:'assets/imgs/exchangeIndex/cake2.png',
                    name:'印克 草莓物语',
                    link:'javascript:;'
                },
                {
                    img:'assets/imgs/exchangeIndex/cake3.png',
                    name:'印克 经典双拼',
                    link:'javascript:;'
                },
                {
                    img:'assets/imgs/exchangeIndex/cake1.png',
                    name:'印克 经典奶香',
                    link:'javascript:;'
                },
                {
                    img:'assets/imgs/exchangeIndex/cake2.png',
                    name:'印克 草莓物语',
                    link:'javascript:;'
                },
                {
                    img:'assets/imgs/exchangeIndex/cake3.png',
                    name:'印克 经典双拼',
                    link:'javascript:;'
                },
            ]
        };
        var _html = template('yzCakes',_data);
        $yanzhiCakes.html(_html);
    }
    function initSZCakes() {
        var $shejianCakes = $('#shejianCakes');
        var _data={
            list:[
                {
                    img:'assets/imgs/exchangeIndex/cake1.png',
                    name:'印克 经典奶香',
                    link:'javascript:;'
                },
                {
                    img:'assets/imgs/exchangeIndex/cake2.png',
                    name:'印克 草莓物语',
                    link:'javascript:;'
                },
                {
                    img:'assets/imgs/exchangeIndex/cake3.png',
                    name:'印克 经典双拼',
                    link:'javascript:;'
                },
                {
                    img:'assets/imgs/exchangeIndex/cake1.png',
                    name:'印克 经典奶香',
                    link:'javascript:;'
                },
                {
                    img:'assets/imgs/exchangeIndex/cake2.png',
                    name:'印克 草莓物语',
                    link:'javascript:;'
                },
                {
                    img:'assets/imgs/exchangeIndex/cake3.png',
                    name:'印克 经典双拼',
                    link:'javascript:;'
                },
            ]
        };
        var _html = template('sjCakes',_data);
        $shejianCakes.html(_html);
    }
    function initPowerCakes() {
        var $powerUP = $('#powerUP');
        var _data={
            list:[
                {
                    img:'assets/imgs/exchangeIndex/cake1.png',
                    name:'印克 经典奶香',
                    link:'javascript:;'
                },
                {
                    img:'assets/imgs/exchangeIndex/cake2.png',
                    name:'印克 草莓物语',
                    link:'javascript:;'
                },
                {
                    img:'assets/imgs/exchangeIndex/cake3.png',
                    name:'印克 经典双拼',
                    link:'javascript:;'
                },
                {
                    img:'assets/imgs/exchangeIndex/cake1.png',
                    name:'印克 经典奶香',
                    link:'javascript:;'
                },
                {
                    img:'assets/imgs/exchangeIndex/cake2.png',
                    name:'印克 草莓物语',
                    link:'javascript:;'
                },
                {
                    img:'assets/imgs/exchangeIndex/cake3.png',
                    name:'印克 经典双拼',
                    link:'javascript:;'
                },
                {
                    img:'assets/imgs/exchangeIndex/cake1.png',
                    name:'印克 经典奶香',
                    link:'javascript:;'
                },
                {
                    img:'assets/imgs/exchangeIndex/cake2.png',
                    name:'印克 草莓物语',
                    link:'javascript:;'
                },
                {
                    img:'assets/imgs/exchangeIndex/cake3.png',
                    name:'印克 经典双拼',
                    link:'javascript:;'
                },
            ]
        };
        var _html = template('powerUpCakes',_data);
        $powerUP.html(_html);
    }
})(jQuery,window,document);