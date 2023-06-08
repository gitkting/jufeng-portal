$(function () {

    $(window).scroll(function () {
        //document.documentElement.scrollTop==0不兼容，$(document).scrollTop()兼容
        if($(document).scrollTop()==0){
            $('.left').css('top','45px');
        }else if($(document).scrollTop()>30){
            $('.left').css('top','0px');
        }
    });
    $.ajax({
        url:"/about_bjt",
        type:"post",
        success:function(data,status)
        {
            // $.each(data,function(i,n){
            //     if(n.type==1) {
            //         $(".right1").html(n.content)
            //     }
            //     else if(n.type==2)
            //     {
            //         $(".right2").html(n.content)
            //     }
            //     else if(n.type==3)
            //     {
            //         $(".right3").html(n.content)
            //     }
            //     else if(n.type==4)
            //     {
            //         $(".right4").html(n.content)
            //     }
            // })
        }
    });

    if($(document.body).width()>641) {
        $('.m_img').click(function () {
            $('.video').show();
            $('.ab5').css({
                width: $(window).innerWidth(),
                height: $(window).innerHeight(),
                'background-color': 'rgba(33, 33, 33, 0.75)',
                'z-index': '100'
            });
            $('body').css({
                height: $(window).innerHeight(),
                width: $(window).width(),
                'overflow': 'hidden'
            })
        })
        $('.ab5').click(function () {
            $('.video').hide();
            $('.ab5').css({
                width: '0px',
                height: '0px'
            });
            $('body').css({
                height: 'auto',
                width: 'auto',
                'overflow': 'scroll'
            })
        })
    }else {
        $('.m_img').click(function () {
            $('.video').show();
            $('body').css({
                height: $(window).innerHeight(),
                width: $(window).width()
            })
        })
    }
});