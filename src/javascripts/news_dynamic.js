var page = 1, pageSize = 6, tabVal = "00";
demo(page);
function demo(curr) {
    var data = {page: curr, pageSize: pageSize, tab: tabVal};
    $.ajax({
        url: "/news_dynamic",
        type: "post",
        data: data,
        success: function (data) {
            if(data.count<=pageSize)
            {
                $("#page").hide();
            }
            else
            {
                $("#page").show();
            }
            var html = "";
            if (data.doc) {
                $.each(data.doc, function (entryindex, entry) {
                    var url="";
                    if(entry['url'])
                    {
                        url=entry['url'];
                    }
                    else
                    {
                        url="/news_dynamic/" + entry['_id'];
                    }
                    var threeLine=entry['cZy'].substr(0,60)+'...';
                    html += '<div class="mobile_news">';
                    html += '<div class="news_img"><img src="' + entry['pic'] + '" alt=""/></div>';
                    html += '<div class="news_contents">';
                    html += '<div class="title"><a target="_blank" href="'+url+'">' + entry['title'] + '</a></div>';
                    html += '<div class="time">'+new Date(entry["upDate"]).Format("yyyy-MM-dd hh:mm:ss")+'</div>'
                    html += '<div class="content"><a target="_blank" href="'+url+'">' + threeLine + '</a></div>';
                    html += '</div></div>';
                });
                laypage({
                    cont: 'page', //容器。值支持id名、原生dom对象，jquery对象。【如该容器为】：<div id="page1"></div>
                    pages: Math.ceil(data.count / pageSize), //通过后台拿到的总页数
                    curr: curr || 1, //当前页
                    skin: 'yahei',
                    groups: 7,
                    prev: '上一页',
                    next: '下一页',
                    jump: function (obj, first) { //触发分页后的回调
                        if (!first) { //点击跳页触发函数自身，并传递当前页：obj.curr
                            demo(obj.curr);
                        }
                    }
                });
            }
            $("#newsList").html(html);
        },
        error: function (data, status) {
            alert("post错误")
        }
    });
};