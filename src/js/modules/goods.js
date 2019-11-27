define(['jquery'],function($){

    function goodsInit( type , data){
        var $parent = $(`#${type}`);
        var tmp = `
        <img data-src="${data.style}" alt="" >
            <h2>${data.title}</h2>
            <img data-src="${data.img}" alt="" class="image">
            <ul class="clearfix">
                ${
                    data.goods_list.map((v,i)=>{
                        return `
                                <li>
                                    <a href="./detail.html?type=${type}&id=${v.goodsId}" target="_blank">
                                        <div><img data-src="${v.goodsImg}" alt=""></div>
                                        <h3>${v.goodsName}</h3>
                                        <p>${v.goodsintro}</p>
                                        <h4>¥${v.goodsPrice}</h4>
                                    </a>
                                </li>`;
                    }).join('').repeat(2)
                }
            </ul>
        `;
        $parent.html(tmp);
    }

    return {
        goodsInit
    }

});