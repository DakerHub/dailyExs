$(document).ready(function() {
    /**
     * 为每个侧边栏按钮绑定事件
     */
    var $siderLis = $('.sider_menu').find('li'),
        $container = $('.container');
    $siderLis.each(function(i){
        var $this = $(this);
        if(i !== 0){
            $this.click(function(){
                $('.active_bar').remove();
                $this.append($('<div class="active_bar"></div>'));
                var $icon = $('.myActive').find('.icon'),
                    bgUrl = $icon.css('background-image'),
                    actBgUrl = "";
                if(typeof bgUrl === "undefined"){
                    $this.addClass('myActive');
                    bgUrl = $this.find('.icon').css('background-image');
                    actBgUrl = toggleBg($this.find('.icon'));
                    $this.find('.icon').css('background-image',actBgUrl);
                }else{
                    actBgUrl = toggleBg($icon);
                    $icon.css('background-image',actBgUrl);
                    $siderLis.removeClass('myActive');
                    $this.addClass('myActive');
                    bgUrl = $this.find('.icon').css('background-image');
                    if(bgUrl.indexOf('active') === -1){
                        bgUrl = bgUrl.substring(0,bgUrl.lastIndexOf('.')) + '_active.png';
                    }
                    $this.find('.icon').css('background-image',bgUrl);
                }
                if($this.nextAll().length !== 0){
                    $container.empty()
                              .append($('<h1>'+$this.find('.menu_title').text()+'</h1>'));
                }else{
                    $container.empty();
                }
            });
        }
    })
    /**
     * 绑定侧边栏的伸缩动画
     */
    $('.menu1').click(function(e){
        var $title = $('.menu_title'),
            $sider = $('.sider'),
            $task = $('.sider_task'),
            $copyright = $('.copyright');
        if($title.eq(0).hasClass('hidden')){
            $sider.css({'width':'188px','-webkit-transition':'width .3s',"box-shadow": "20px 0px 28px -11px #111"});
            $task.css('width','160px');
            $('.menu1').css('background-color','#090e1f');
            (function($title,$task,$copyright){
                setTimeout(function(){
                    $copyright.removeClass('hidden');
                    $task.removeClass('hidden');
                    $title.removeClass('hidden');
                },250);
            })($title,$task,$copyright);
        }else{
            $('.menu1').css('background-color','#3b4363');
            $task.addClass('hidden');
            $title.addClass('hidden');
            $copyright.addClass('hidden');
            $sider.css({'width':'75px','-webkit-transition':'width .3s',"box-shadow": "none"});  
            $task.css({'width':0,'-webkit-transition':'width .3s'});
        }
    });
    /**
     * 为频道获取按钮绑定ajax事件
     */
    $('.menu9').click(function(){
        var obj = {
            list: [{chnl_name:"贵州卫视"},{chnl_name:"贵州卫视"},{chnl_name:"贵州卫视"},{chnl_name:"贵州卫视"},{chnl_name:"贵州卫视"},{chnl_name:"贵州卫视"},{chnl_name:"贵州卫视"},{chnl_name:"贵州卫视"},{chnl_name:"贵州卫视"},{chnl_name:"贵州卫视"},{chnl_name:"贵州卫视"},{chnl_name:"贵州卫视"},{chnl_name:"贵州卫视"},{chnl_name:"贵州卫视"},{chnl_name:"贵州卫视"},{chnl_name:"贵州卫视"},{chnl_name:"贵州卫视"},{chnl_name:"贵州卫视"},{chnl_name:"贵州卫视"},{chnl_name:"贵州卫视"},{chnl_name:"贵州卫视"},{chnl_name:"贵州卫视"},{chnl_name:"贵州卫视"},{chnl_name:"贵州卫视"},{chnl_name:"贵州卫视"},{chnl_name:"贵州卫视"},{chnl_name:"贵州卫视"},{chnl_name:"贵州卫视"},{chnl_name:"贵州卫视"},{chnl_name:"贵州卫视"},{chnl_name:"贵州卫视"},{chnl_name:"贵州卫视"},{chnl_name:"贵州卫视"},{chnl_name:"贵州卫视"},{chnl_name:"贵州卫视"},{chnl_name:"贵州卫视"}]
        };
        $('.container').append($(setDom(obj)));
        //  var url = "http://dtv.homed.me/media/task/get_list?";
            // $.ajax({
            //     url: url,
            //     type: 'get',
            //     data: {
            //         accesstoken: 'TOKEN3090',
            //         pageidx: 1,
            //         pagenum: 20,
            //         starttime: '',
            //         endtime: ''
            //     },
            //     success: function(data){
            //         var str = setDom(data);
            //         $container.append($(str));
            //     }
            // })

        /**
         * 用获取的对象数组生成DOM挂载在页面上
         * @param {obj} data 
         */        
        function setDom(data) {
            var list = data.list;
                str = '<div class="chn_list"><div class="chn_head">频道列表</div><ul>';
            for(var i = 1; i < list.length + 1; i++){
                    str += '<li><a href="#">' + i + list[i-1].chnl_name+'</a><span>99</span></li>';
                }
            str += '</ul></div></div>';
            return str;
        }
    });
    /**
     * 用来反转图标的背景颜色
     * @param {obj} $obj 
     */
    function toggleBg($obj) {
        var bgUrl = $obj.css('background-image');
        if(bgUrl.indexOf('active') === -1){
            bgUrl = bgUrl.substring(0,bgUrl.lastIndexOf('.')) + '_active.png';
        }else{
            bgUrl = bgUrl.substring(0,bgUrl.lastIndexOf('_')) + '.png';
        }
        return bgUrl;
    }
    $('.menu9').click();//页面加载默认选中频道列表
});