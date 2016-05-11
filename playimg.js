$(function() {
    /*利用for循环制作项目导航点*/
    var aLi = "",
        len = $('.in-banner').find('img').length,
        ul_width = len * 25,
   		$img_wade = $('.in-banner').find('img').width(),
        num = 0;
    for (var i = 0; i < len; i++) {
        aLi += "<li></li>";
    }
    $('.banner').append("<ul>" + aLi + "</ul>");
    $('.banner').find('ul').width(ul_width);
    $('.banner ul').find('li').eq(0).addClass('play_img_active');

    /*图片轮播*/
    $('.banner ul').find('li').each(function(index) { /*鼠标移入显示对应的img*/
        var li_index = $(this).index;
        $(this).on('mouseover', function play_img() {
            //if (!$('.in-banner').is(':animated')) {   //判断是否处于动画状态
            $('.in-banner').stop().animate({
                left: -index * $img_wade
            }, 1000, 'easeInOutBack');
            $('.banner ul').find('li').removeClass().eq(index).addClass('play_img_active');
            num = index;
            // }
        })
    });

    setInterval(function() { /* 使用定时器让 img auto play */
            if (num >= len) {
                num = 0;
            }
            $('.in-banner').animate({
                left: -num * $img_wade
            }, 1000, 'easeInOutBack');
            $('.banner ul').find('li').removeClass().eq(num).addClass('play_img_active');
            num++;
        }, 3000)
        /*图片轮播结束*/
})
