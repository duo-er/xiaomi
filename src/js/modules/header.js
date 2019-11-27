define(['jquery' , './modules/cartStorage',],function($ , { setCartStorage , getCartStorage }){

    var $nav_r=$('.nav_r');

    let cartNum;
    cartInit();
    cart();
    function cart(){
        cartNum = getCartStorage() || [];
        let tmp = `
        ${
            cartNum.map((v,i)=>{
                return `
            <li class="cartwarp"><a href="#"><span class="iconfont icon-gouwuche"></span>购物车(${v.goodsNumber})</a>
            <div class="cart"></div>
            </li>
                `;
            }).join('')
        }
    `;
    $nav_r.html(tmp);

}
})
//--------------------------------------------------------//
// define(['jquery', './cartStorage'], function ( $, { getCartStorage }) {
//     $info = $('.shopping_ul').find('ul')
//     $empty = $('.shopping_ul').find('.empty')
//     $shopping_car = $('#shopping_car')
    
//     hoverall();
//     // infoInit();
//     function infoInit() {
//         cartList = getCartStorage() || [];
//         if ((cartList.length) !==0) {
//             $empty.css("display","none")
//             let tmp = `
//         ${
//             cartList.map((v,i)=>{
//                 return `
//             <li>
//                 <img src="${v.goodsPhoto}" alt="">
//                 <div class="Rinfo">
//                     <div class="Rinfo_top">
//                     ${v.goodsName}&nbsp;&nbsp;${v.goodsColor}
//                     </div>
//                     <div class="Rinfo_bottom">
//                         <span>￥${v.goodsPrice}.00</span>
//                         <span>x${v.goodsNmber}</span>
//                     </div>
//                 </div>
//             </li>
//                          `
//             }).join('')
//         }
//         `;
//         var gaodu = 105*(cartList.length)
//         // console.log(gaodu)
//         $info.html(tmp);
//         /* console.log(tmp) */
//         if (gaodu<525) {
//             $('.shopping_ul').css("height",gaodu);
//         }
//         else{
//             $('.shopping_ul').css({"height":"525","overflow":"auto"});
//         }
//         }
//         if ((cartList.length) ==0){
//             $empty.css("display","block");
//             $('.shopping_ul').css("height","0");
//         }

//         var count=0;
//         for(var i=0;i<cartList.length;i++){
//             count += cartList[i].goodsNmber;
//             console.log(count);
//             if (count !==0) {
//                 $shopping_car.html(count).css("font-size","12");
//             }
//             if (count == 0) {
//                 $shopping_car.html("0").css("font-size","12");
//             }
//         }
//     }


// function hoverall(){
// let more = document.querySelector('#more');
// let more_ul = document.querySelector('.more_ul');
// let service_ul = document.querySelector('#service_ul');
// let Service = document.querySelector('.Service');
// let nav_ul = document.querySelector('.nav_ul');
// let nav_2 = document.querySelector('.nav_2');
// let phone = document.querySelector('.phone');
// let phone_ul = document.querySelector('.phone_ul');
// let shopping = document.querySelector('.shopping');
// let shopping_ul = document.querySelector('.shopping_ul')
// more.onmouseenter = function () {
//     more_ul.style.display = 'block';
//     more.style.background = '#fff';

// }
// more.onmouseleave = function () {
//     more_ul.style.display = 'none';
//     more.style.background = '#f9f9f9';

// }
// service_ul.onmouseenter = function () {
//     Service.style.display = 'block';
//     service_ul.style.background = '#fff';

// }
// service_ul.onmouseleave = function () {
//     Service.style.display = 'none';
//     service_ul.style.background = '#f9f9f9';
// }
// nav_ul.onmouseenter = function () {
//     nav_2.style.display = 'block';
//     nav_ul.style.background = '#fff';

// }
// nav_ul.onmouseleave = function () {
//     nav_2.style.display = 'none';
//     nav_ul.style.background = '#f9f9f9';
// }
// phone.onmouseenter = function () {
//     phone_ul.style.display = 'block';
//     phone.style.background = '#fff'
// }
// phone.onmouseleave = function () {
//     phone_ul.style.display = 'none';
//     phone.style.background = '#f9f9f9';
// }
// shopping.onmouseenter = function () {
//     shopping_ul.style.display = 'block';
//     shopping.style.background = '#fff';
// }
// shopping.onmouseleave = function () {
//     shopping_ul.style.display = 'none';
//     shopping.style.background = '#f2f2f2';
// }
// }

// return {
//     infoInit
// }

// })

// })