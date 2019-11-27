define(['jquery' , '../server/main' , './modules/cartStorage',],function($ , { getDetailData } , { addCartStorage }){

    var type = window.location.search.match(/type=([^&]+)/)[1];
    var id = window.location.search.match(/id=([^&]+)/)[1];
    var $detail = $('#detail');
    var $detailGoods = $('#detailGoods');
 
 
    getDetailData(type , id).then((res)=>{
         detailInit(res);
    });
 
    
    function detailInit(data){
         var tmp = `
      
             <div class="left-img"><img src="${data.photoNormal}" alt=""></div>
             <div class="detail_message l">
                 <h2>${data.goodsName}</h2>
                 <p>价 格 <span class="detail_message_price">¥${data.goodsPrice}.00</span></p>
                 <p>选择颜色 
                     ${
                         data.chooseColor.map((v,i)=>{
                             if(i==0){
                                 return `<span class="detail_message_box active">${v}</span>`;
                             }
                             else{
                                 return `<span class="detail_message_box">${v}</span>`;
                             }
                         }).join('')
                     }
                 </p>
                 <div class="detail_message_btn clearfix">
                     <div class="detail_message_num l">
                         <input type="text" value="1">
                         <span>+</span>
                         <span>-</span>
                     </div>
                     <div class="detail_message_cart l"><a href="javascript:;">加入购物车</a></div>
                     <div class="detail_message_computed l"><a href="cart.html">立即下单</a></div>
                 </div>
             </div>
         `;
         var tmp2 = `
             <h3>-- 商品详情 --</h3>
             ${
                 data.goodsInfo.map((v,i)=>{
                     return `<img src="${v}" alt="">`;
                 }).join('')
             }
         `;
         $detail.html(tmp);
         $detailGoods.html(tmp2);
        //  magnifier();
         chooseColor();
         chooseNumber();
         addCart(data);
    }
 
    // //放大镜
    // function magnifier(){
    //     $banner_dots.on('click','div',function(){
    //         $(this).attr('class','active').siblings().attr('class','');
    //         $div.eq( $(this).index() ).attr('class','show').siblings().attr('class','');
    //     });
    // }
    // function magnifier(){
    //      let $detail_gallery_normal = $detail.find('.detail_gallery_normal');
    //      let $detail_gallery_large = $detail.find('.detail_gallery_large');
    //      var $largeImg = $detail_gallery_large.find('img');
 
    //      $detail_gallery_normal.hover(function(ev){
    //          let $span = $(this).find('span');
    //          $span.css({
    //              left : ev.pageX - $(this).offset().left - $span.width()/2,
    //              top : ev.pageY - $(this).offset().top - $span.height()/2
    //          });
    //          $span.show();
    //          $detail_gallery_large.show();
    //      },function(){
    //          let $span = $(this).find('span');
    //          $span.hide();
    //          $detail_gallery_large.hide();
    //      }).mousemove(function(ev){
 
    //          let $span = $(this).find('span');
    //          let L = ev.pageX - $(this).offset().left - $span.width()/2;
    //          let T = ev.pageY - $(this).offset().top - $span.height()/2;4
 
    //          if(L<0){
    //              L = 0;
    //          }
    //          else if(L > $(this).width() - $span.width()){
    //              L = $(this).width() - $span.width();
    //          }
    //          if(T<0){
    //              T = 0;
    //          }
    //          else if(T > $(this).height() - $span.height()){
    //              T = $(this).height() - $span.height();
    //          }
 
    //          $span.css({
    //              left : L,
    //              top : T
    //          });
 
    //          let scaleX = L / ($(this).width() - $span.width());  //0~1
    //          let scaleY = T / ($(this).height() - $span.height());  //0~1
 
             
    //          $largeImg.css({
    //              left : - scaleX * ( $largeImg.width() - $detail_gallery_large.width() ),
    //              top : - scaleY * ( $largeImg.height() - $detail_gallery_large.height() )
    //          });
 
    //      });
 
    // }
    //选择商品颜色
    function chooseColor(){
         var $detail_message_box = $detail.find('.detail_message_box');
         $detail_message_box.click(function(){
             $(this).addClass('active').siblings().removeClass('active');
         });    
    }
    //选择商品个数
    function chooseNumber(){
         var $detail_message_num = $detail.find('.detail_message_num');
         var $input = $detail_message_num.find('input');
         var $span = $detail_message_num.find('span');
         $span.eq(0).click(function(){   // +
             var value = $input.val();
             $input.val( ++value );
         });
         $span.eq(1).click(function(){   // -
             var value = $input.val();
             if(value == 1){
                 return;
             }
             $input.val( --value );
         });
    }
    //添加购物车
    function addCart(data){
       let $detail_message_cart = $detail.find('.detail_message_cart');
       $detail_message_cart.click(function(){
 
         let result = {
             goodsName : data.goodsName,
             goodsPrice : data.goodsPrice,
             goodsNumber : Number($detail.find('.detail_message_num input').val()),
             goodsColor : $detail.find('.detail_message_box').filter('.active').html(),
             goodsId : data.goodsId,
             goodsChecked : true
         };
 
         addCartStorage(result , function(){
             alert('添加成功');
         });
 
       });
    }
 
 });