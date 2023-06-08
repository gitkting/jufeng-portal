/**
 * Created by Administrator on 2016/9/30 0030.
 */
$(function () {
    var swiper = new Swiper('.swiper-container', {
        autoplay : 5000,
        loop:true,
        speed:1000,
        pagination: '.pagination',
        paginationClickable: true,
        noSwiping : true,
        paginationBulletRender: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        }
    });
    if($(window).width()<640) {
        $('.swiper-slide').removeClass('swiper-no-swiping');
    }
});