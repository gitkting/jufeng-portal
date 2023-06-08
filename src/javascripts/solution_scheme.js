/**
 * Created by Administrator on 2016/9/13 0013.
 */
$(function () {
    //$('.send').hide();
    $(window).on('click', function(){
        //alert('');
    });
    $('.ss2_more1').mouseover(function () {
       $('.ss2_s1').show();
    }).mouseleave(function () {
        $('.ss2_s1').hide();
    });
    $('.ss2_more2').mouseover(function () {
        $('.ss2_s2').show();
    }).mouseleave(function () {
        $('.ss2_s2').hide();
    });
    $('.ss2_more3').mouseover(function () {
        $('.ss2_s3').show();
    }).mouseleave(function () {
        $('.ss2_s3').hide();
    });
    $('.ss2_more4').mouseover(function () {
        $('.ss2_s4').show();
    }).mouseleave(function () {
        $('.ss2_s4').hide();
    });
});