define(['jquery'],function($){

    $banner_imgs = $('#banner').find('.swiper-wrapper');
    // $banner_dots = $('#banner').find('.banner_dots');
    

    function bannerInit(data){

        let banner_list = data.banner_list;
        let tmp = `
            ${
                banner_list.map((v,i)=>{
                    
                   return `<div class="swiper-slide"><a href="${v.imgLink}"><img src="${v.imgUrl}"></a></div>`;
                    
                }).join('')
            }
        `;
        // let tmp2 = `
        //     ${
        //         banner_list.map((v,i)=>{
        //             if(i==0){
        //                 return `<div class="swiper-pagination"></div>`;
        //             }
        //             else{
        //                 return `<div></div>`;
        //             }
        //         }).join('')
        //     }
        // `;
        $banner_imgs.html(tmp);
        // $banner_dots.html(tmp2);
		if(banner_list.length>0){
			bannerBind();
		}
        

    }

    function bannerBind(){
        // $banner_dots.on('mouseover','li',function(){
        //     $(this).attr('class','active').siblings().attr('class','');
        //     $banner_imgs.find('li').eq( $(this).index() ).fadeIn().siblings().fadeOut();
        // });
		console.log(223333)
		
		    var swiper = new Swiper('.swiper-container', {
		      spaceBetween: 30,
		      centeredSlides: true,
		      autoplay: {
		        delay: 2500,
		        disableOnInteraction: false,
		      },
		      pagination: {
		        el: '.swiper-pagination',
		        clickable: true,
		      },
		      navigation: {
		        nextEl: '.swiper-button-next',
		        prevEl: '.swiper-button-prev',
		      },
		    });
	
    }
        //     function btnprev(){
        //         $('banner_btn_left').click(function(){
        //             $(this).prev().$
        //         })
        //     }
        //     function btnnext(){
        //       $('banner_btn_left').click(function(){
        //           $(this).next()
        //       })
        //   }



    return {
        bannerInit
    }

});