$(document).ready(function() {
    /**
     * 为每个侧边栏按钮绑定事件
     */
    var $siderLis = $('.sider_menu').find('li');
    $siderLis.each(function(i){
        var $this = $(this);
        if(i!==0){
            $this.click(function(){
                var $icon = $('.myActive').find('.icon'),
                    bgUrl = $icon.css('background-image'),
                    actBgUrl = "";
                if(typeof bgUrl === "undefined"){
                    $this.addClass('myActive');
                    bgUrl = $this.find('.icon').css('background-image');
                    actBgUrl = bgUrl.substring(0,bgUrl.lastIndexOf('.'))+'_1.png';
                    console.log(bgUrl);
                    console.log(actBgUrl);
                    $this.find('.icon').css('background-image',actBgUrl);
                }else{
                    console.log(bgUrl);
                    actBgUrl = bgUrl.substring(0,bgUrl.lastIndexOf('_'))+'.png';
                    console.log(actBgUrl);
                    $icon.css('background-image',actBgUrl);
                    $siderLis.removeClass('myActive');
                    $this.addClass('myActive');
                    var bgImg = $this.find('.icon').css('background-image');
                    $this.find('.icon').css('background-image',bgImg);
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
            $task = $('.sider_task');
        if($title.eq(0).hasClass('hidden')){
            
            $sider.css({'width':'188px',"box-shadow": "20px 0px 28px -11px #111"});
            $task.css('width','160px');
            $('.menu1').css('background-color','#090e1f');
            (function($title,$task){
                setTimeout(function(){
                    $task.removeClass('hidden');
                    $title.removeClass('hidden');
                },250);
            })($title,$task);
        }else{
            $('.menu1').css('background-color','#3b4363');
            $task.addClass('hidden');
            $title.addClass('hidden');
            $sider.css({'width':'75px','-webkit-transition':'width .3s',"box-shadow": "none"});  
            $task.css({'width':0,'-webkit-transition':'width .3s'});
        }
    });
    /**
     * 为频道获取按钮绑定ajax事件
     */
    $('.menu9').click(function(){
        var $container = $('.container'),
            url = "http://dtv.homed.me/media/task/get_list?";
            $.ajax({
                url: url,
                type: 'get',
                data: {
                    accesstoken: 'TOKEN3090',
                    pageidx: 1,
                    pagenum: 20,
                    starttime: '',
                    endtime: ''
                },
                success: function(data){
                    var str = setDom(data);
                    $container.append($(str));
                }
            })
        /**
         * 用获取的对象数组生成DOM挂载在页面上
         * @param {obj} data 
         */        
        function setDom(data){
            var list = data.list;
                str = '<div class="chn_list"><div class="chn_head">频道列表</div><ul>';
            for(var i = 1; i < list.length + 1; i++){
                    str += '<li><a href="#">' + i + list[i-1].chnl_name+'</a><span>99</span></li>';
                }
            str += '</ul></div></div>';
            return str;
        }
    });
    $('.menu9').click();//页面加载默认选中频道列表
});