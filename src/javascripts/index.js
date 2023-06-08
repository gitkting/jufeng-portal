$(function(){
//新闻
    $.ajax({
        url:"/",
        type:"post",
        data:{id:2},
        success:function(data,status){
            var arr="";
            if(data) {
                $.each(data, function (i, n) {
                    var url="";
                    if(n.url)
                    {
                        url= n.url;
                    }
                    else
                    {
                        url="/news_dynamic/"+n._id;
                    }
                    //$(".news_six .news_" + (i + 1)).append('<img src='+n.pic+'>').attr("href",url).find(".zz").text(n.title);
                    $(".news_six .news_" + (i + 1)).css("background-image", "url('" + n.pic + "')").attr("href",url).find(".zz").text(n.title);
                })
            }
        }
    });

//案例
    $.ajax({
        url:"/",
        type:"post",
        data:{id:1},
        success:function(data,status){
            var arr="";
            if(data)
            {
                $.each(data,function(i,n){
                    arr+='<p><a href="/operation_case/'+ n._id+'">'+ n.title+'</a></p>';
                })
            }
            $(".threenews").after(arr);
        }
    });


    


    //招聘信息
    $.ajax({
        url:"/",
        type:"post",
        data:{id:3},
        success:function(data,status){
            var arr="";
            if(data)
            {
                $.each(data,function(i,n){
                    arr+='<p><a href="/employ?type='+n.type+'">'+ n.name+'</a></p>';
                })
            }
            $(".threejobs").after(arr);
        }
    })
})