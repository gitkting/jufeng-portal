$(function () {
    load();
})

function load() {
    $.ajax({
        url: "/operation_case",
        type: "post",
        success: function (data, status) {
            var arr = "";
            if (data) {
                $.each(data, function (i, n) {
                    if (i % 2 == 0) {
                        arr += '<div class="oc_left_container"><div class="oc_left_dot"><li></li></div><a title="' + n.title + '" href="operation_case/' + n._id + '"><div class="oc_left_corner"><p>' + cuttitle(n.title, 15) + '</p></div><div class="time">' + new Date(n.lastTime).Format("yyyy-MM-dd") + '</div><section>' + delHtmlTag(n.content).substring(0, 50) + '</section></a>';
                        arr += '</div>';
                    }
                    if (i % 2 != 0) {
                        arr += '<div class="oc_left_container_right"><div class="oc_right_dot"><li></li></div><a title="' + n.title + '" href="operation_case/' + n._id + '"><div class="oc_right_corner"><p>' + cuttitle(n.title, 15) + '</p></div><div class="time">' + new Date(n.lastTime).Format("yyyy-MM-dd") + '</div><section>' + delHtmlTag(n.content).substring(0, 50) + '</section></a>';
                        arr += '</div>';
                    }
                })
            }
            $(".left").html(arr);
        }
    })
}

function cuttitle(title, len) {
    if (title && title.length > len) {
        title = title.substring(0, len) + '.....';
    }
    return title;
}