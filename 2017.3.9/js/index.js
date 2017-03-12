var globalDnsConfigVar = typeof top.globalDnsConfigVar != "undefined" ? top.globalDnsConfigVar : globalDnsConfigVar,
    CONFIG = {
        token: "TOKEN3090"
    };
/**
 * 初始化iHomed对象
 */
iHomed("config", CONFIG);
iHomed("api", {
    get_series_list: globalDnsConfigVar.dtvAddr + "/media/series/get_list"
});

/**
 * 数据获取与分页
 */
var options = {
    request: {
        url: "get_series_list",
        type: "GET",
        data: {
            accesstoken: iHomed("config", "token"),
            label: "0",
            sortby: 3,
            asc: 0,
            pageidx: 1,
            pagenum: 8
        },
        error: function () {
            console.log("error");
            alert("服务器异常");
        }
    },
    select: {
        option: [8, 16, 24, 36],
        unit: "个"
    },
    scope: 5,
    indexColumn: "pageidx",
    sizeColumn: "pagenum",
    totalColumn: "total",
    onPaging: function () {},
    error: function () {},
    /**
     * 加载数据时
     * @param  {object} data  返回的数据
     * @param  {number} total 数据的总条数
     */
    loadData: function (data, total) {
        /**
         * 将获取的数据解析加载到DOM上
         */
        var $tbody = $('#my_table').find('tbody'),
            listArr = data.serieslist,
            htmlStr = '';
        if (data.ret === 0) {
            console.log('loadData')
            for (var i = 0; i < listArr.length; i++) {
                htmlStr += '<tr class="row_' + (i + 1) + '">' +
                    '<td><input type="checkbox" class="checkbox" id="check-row' + (i + 1) + '"><label for="check-row' + (i + 1) + '"></label></td>' +
                    '<td>' + (i + 1) + '</td>' +
                    '<td>' + listArr[i].seriesname + '</td>' +
                    '<td>' + defTrans(listArr[i].definition) + '</td>' +
                    '<td>' + (listArr[i].providerid ? listArr[i].providerid : '未知') + '</td>' +
                    '<td>' + listArr[i].seriesnum + '</td>' +
                    '<td>' + listArr[i].status + '</td>' +
                    '<td>' + (listArr[i].uploadtime ? iHomed.timeFormat(listArr[i].uploadtime) : '未知') + '</td>' +
                    '<td>' + (listArr[i].releasetime ? iHomed.timeFormat(listArr[i].releasetime) : '未知') + '</td>' +
                    '<td>' + listArr[i].uploaduser + '</td>' +
                    '<td class="tools"></td></tr>'
            }
            $tbody.empty().append($(htmlStr));
        }
        // 定义“操作”列的按钮
        var tools = [{
                type: "image",
                text: "按钮1",
                toolID: "tool-button1",
                disabled: false,
                map: {
                    "tool-button1": {
                        action: function () {
                            alert("点击了按钮1");
                        },
                        iconClass: {
                            normal: "btn1Normal",
                            hover: "btn1Hover",
                            disabled: "btn1Disabled"
                        }
                    }
                }
            },
            {
                type: "image",
                text: "按钮2",
                toolID: "tool-button2",
                disabled: false,
                map: {
                    "tool-button2": {
                        action: function () {
                            alert("点击了按钮2");
                        },
                        iconClass: {
                            normal: "btn2Normal",
                            hover: "btn2Hover",
                            disabled: "btn2Disabled"
                        }
                    }
                }
            },
            {
                type: "image",
                text: "按钮3",
                toolID: "tool-button3",
                disabled: false,
                map: {
                    "tool-button3": {
                        action: function () {
                            alert("点击了按钮3");
                        },
                        iconClass: {
                            normal: "btn3Normal",
                            hover: "btn3Hover",
                            disabled: "btn3Disabled"
                        }
                    }
                }
            },
            {
                type: "image",
                text: "按钮4",
                toolID: "tool-button4",
                disabled: false,
                map: {
                    "tool-button4": {
                        action: function () {
                            alert("点击了按钮4");
                        },
                        iconClass: {
                            normal: "btn4Normal",
                            hover: "btn4Hover",
                            disabled: "btn4Disabled"
                        }
                    }
                }
            }
        ];
        $(".tools").iHomed("initTools", tools);
        /**
         * 解析清晰度字段
         * @param {num} definition 
         */
        function defTrans(definition) {
            switch (definition) {
                case 0:
                    return '标清';
                    break;
                case 1:
                    return '高清';
                    break;
                case 2:
                    return '超清';
                    break;
            }
        }
    },
    /**
     * 获取分页数据成功
     * @param  {object} data 返回的数据
     */
    onSuccess: function (data) {
        console.log("onSuccess");
        console.log(data);
    }
}
$('#page_nav').iHomed('tPager', options);

/**
 * checkbox的事件委托
 */
$('#my_table').on('click', '.checkbox', function () {
    var $tbboxs = $('#my_tbody').find('.checkbox');
    $this = $(this);
    var allChecked = false;
    if ($this.attr('id') === 'check-all') {
        if ($this.prop('checked')) {
            $this.prop('checked', true);
            $tbboxs.prop('checked', true);
        } else {
            $tbboxs.prop('checked', false);
            $this.prop('checked', false);
        }
    } else {
        if ($this.prop('checked')) {
            allChecked = true;
            $tbboxs.each(function () {
                if ($(this).prop('checked') == false) {
                    allChecked = false;
                }
            });
            if (allChecked) {
                $('#check-all').prop('checked', true);
            }
            $this.prop('checked', true);
        } else {
            $('#check-all').prop('checked', false);
            $this.prop('checked', false);
        }
    }
})

/**
 * 顶部按钮定义
 */
var editBtns = [{
    type: "image",
    text: "上传文件",
    toolID: "updataFile",
    disabled: false,
    map: {
        "updataFile": {
            action: function () {
                alert('上传文件')
            },
            iconClass: {
                normal: "updataNomal",
                hover: "updataHover",
                disabled: "updataDisabled"
            }
        }

    }
}, {
    type: "image",
    text: "删除剧集",
    toolID: "deleteFile",
    disabled: true,
    map: {
        "deleteFile": {
            action: function () {
                alert('删除剧集')
            },
            iconClass: {
                normal: "deleteNomal",
                hover: "deleteHover",
                disabled: "deleteDisabled"
            }
        }
    }
}];
$('#edit-btn').iHomed('initTools', editBtns);