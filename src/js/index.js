define(['jquery' , '../server/main', './modules/banner' , './modules/goods'],function($ , { getBannerData , getGoodsData , isLogin } , { bannerInit } , { goodsInit }){
    
    
    showImg();
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

    

    $(document).scroll(showImg);


    function showImg(){

        var viewH = $(window).height();
        var scrollT = $(document).scrollTop();

        $('img').each(function(i,elem){
            if( $(elem).offset().top <= viewH + scrollT ){   //说明这张图进入可视区了
                var imgSrc = $(elem).attr('data-src');

                if(imgSrc===undefined){
                   
                }else if(imgSrc==='undefined'){

                }else{
                    $(elem).attr('src' , imgSrc);
                }
                
            }
        });

    }
    

});