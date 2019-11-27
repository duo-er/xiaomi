define(['jquery' , '../server/main', './modules/banner' , './modules/goods'],function($ , { getBannerData , getGoodsData , isLogin } , { bannerInit } , { goodsInit }){


    //首页Banner操作
    getBannerData().then(function(res){
        bannerInit(res);
    });

    //首页手机列表操作
    getGoodsData('phone').then(function(res){
        goodsInit('phone' , res);
    });

    //首页笔记本列表操作
    getGoodsData('capacity').then(function(res){
        goodsInit('capacity' , res);
    });

    //首页平板列表操作
    getGoodsData('appliance').then(function(res){
        goodsInit('appliance' , res);
    });

    //是否登录

    isLogin().then(function(res){
        console.log( res );
    });

});