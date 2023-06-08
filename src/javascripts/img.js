$(function () {

    //alert(document.body.offsetWidth+' '+document.body.clientWidth );
    $('.fixed_top').mouseover(function () {
        $('.fixed_top').css('box-shadow','0px 0px 5px #000');
    }).mouseout(function () {
        $('.fixed_top').css('box-shadow','');
    });
    //判断是否为主页调整导航来颜色
    if(window.location.pathname=="/"){
        $('.top').css('background-color','');
    }else{
        $('.top').css('background-color','#2d3a45');
        if(window.location.pathname=='/solution_scheme'){
            $('.top').css('background-color','#616161');
        }
    }
    $('.top').css('box-shadow','0px 0px 0px #000');
    //页面滚动监听
    $(window).scroll(function () {
        //document.documentElement.scrollTop==0不兼容，$(document).scrollTop()兼容
        if($(document).scrollTop()==0){
            $('.fixed_top').fadeOut();
            $('.top').css('box-shadow','0px 0px 0px #000 ');
            if(window.location.pathname=='/solution_scheme'){
                $('.top').css('background-color','#616161');
            }
            //判断屏幕宽度调整导航栏字体颜色
            if($(document.body).width()>641){
                $('.nav_li').css('color','#ffffff');
                //
                $('.swiper-container').css('position','static').css('z-index','99');
                $('.smart_city').css('margin-top',0);
                $('.pagination').css({'bottom':'30px',
                    'position':'relative'
                });
            }else {
                $('.nav_li').css('color','#7e7e7e');
            }
            $('.imgs').css('background-image','url("/images/bjtlogo.png")');
            //判断是否为主页调整导航来颜色
            if(window.location.pathname=="/"){
                $('.top').css('background-color','');
            }else{
                $('.top').css('background-color','#2d3a45');
                if(window.location.pathname=='/solution_scheme'){
                    $('.top').css('background-color','#616161');
                }
            }
        }else if($(document).scrollTop()>0){
            $('.fixed_top').fadeIn();
            $('.top').css('background-color','#ffffff').css('box-shadow','0px 0px 10px #535353 ');
            $('.nav_li').css('color','#7e7e7e');
            $('.imgs').css('background-image', 'url("/images/bjttitle1.png")');
            $('.nav_a').mouseover(function () {
                $(this).css('color','#ff844f');
            }).mouseout(function () {
                $(this).css('color','');
            });
            if($(document.body).width()>641){
                $('.swiper-container').css('position','fixed').css('z-index','-99');
                $('.smart_city').css('margin-top',$('.swiper-container').height());
            }

        }
    });
    //nav dropdown
    $('.nav_join').mouseover(function () {
        $('.nav_tul2').show();
    }).mouseout(function () {
        $('.nav_tul2').hide();
    });
    //判断屏幕大小刷新
    window.addEventListener('orientationchange',function () {
        if($(this).width()<640){
            window.location.reload();
        }else if($(this).width()<901 && $(this).width()>640){
            window.location.reload();
        }
    },false);

    //slider scroll
    $('.bjt').click(function () {
        $('html,body').animate({scrollTop:$('#bjt').offset().top},500);
    });
    $('.nav_product_intro').click(function () {
        $('html,body').animate({ scrollTop: $('#product_intro').offset().top }, 500);
    });
    $('.nav_about').click(function () {
        
        $('html,body').animate({ scrollTop: $('#about_us').offset().top }, 500);
    });
    $('.nav_solution_scheme').click(function () {
        $('html,body').animate({ scrollTop: $('#smart_city').offset().top }, 500);
    });
    $('.nav_news').click(function () {
        $('html,body').animate({scrollTop:$('#news').offset().top},500);
    });
    $('.jumpic2_button').click(function () {
        $('html,body').animate({scrollTop:$('.anti').offset().top},500);
    });
    $('.imgs').click(function () {
        $('html,body').animate({scrollTop:$('#fff').offset().top},500);
    });
    $('.fixed_top').click(function () {
        $('.fixed_top').attr('href',window.location.pathname+'#fff');
        $('html,body').animate({scrollTop:$('#fff').offset().top},500);
    });
    //pi
    $('.pi_four').find('.pi_img').mouseover(function(){
        $(this).addClass('animated bounce').css('color','#ffffff');;
    }).mouseout(function(){
        $(this).removeClass('animated bounce').css('color','#f94b07');
    });
    //pic news
    $('.news_six').find('.news_n').mouseover(function () {
        $(this).children().first().show();
    }).mouseout(function () {
        $(this).children().first().hide();
    });
    //go to model
    $('.model_button').on('click',function () {
        window.location.href="/model";
    });

});