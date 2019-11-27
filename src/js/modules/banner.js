define(['jquery'],function($){

    $banner_imgs = $('#banner').find('.banner_imgs');
    $banner_dots = $('#banner').find('.banner_dots');
    

    function bannerInit(data){

        let banner_list = data.banner_list;
        let tmp = `
            ${
                banner_list.map((v,i)=>{
                    
                   return `<li><a href="${v.imgLink}"><img src="${v.imgUrl}"></a></li>`;
                    
                }).join('')
            }
        `;
        let tmp2 = `
            ${
                banner_list.map((v,i)=>{
                    if(i==0){
                        return `<li class="active"></li>`;
                    }
                    else{
                        return `<li></li>`;
                    }
                }).join('')
            }
        `;
        $banner_imgs.html(tmp);
        $banner_dots.html(tmp2);
        bannerBind();

    }

    function bannerBind(){
        $banner_dots.on('mouseover','li',function(){
            $(this).attr('class','active').siblings().attr('class','');
            $banner_imgs.find('li').eq( $(this).index() ).fadeIn().siblings().fadeOut();
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