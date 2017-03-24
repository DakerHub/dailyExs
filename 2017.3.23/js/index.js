var util = new Util(),
    content = null,
    activeId = "sub_poster_0",//需要同步全局变量记录焦点，焦点变换不更新该值
    currentPage = 1,//需要同步全局变量记录焦点
    currentImgs = 0,//当前视图的图片个数，用于判断按下键时是否有可选焦点
    totalPage = 0,//总页数
    contentUrl = "http://localhost/dailyExs/2017.3.23/content.json",//请求的数据地址，需更改此变量才能在你的环境运行
    nodeUrl = "http://localhost/dailyExs/2017.3.23/node.json";//请求的数据地址，需更改此变量才能在你的环境运行
if(getGlobalVar("currentWindow") === "content"){//判断页面来源，如果由content跳转,则同步全局变量，回忆焦点。
    activeId = getGlobalVar("activeId")||"sub_poster_0";
    currentPage = getGlobalVar("currentPage")||1;
}
setGlobalVar("currentWindow","index");//设置窗口名以区分是否是内容页跳转
var activeEle = document.getElementById(activeId);//根据ID来获取当前焦点DOM元素


/**
 * 焦点移动的逻辑判断，通过设置class来识别焦点
 */
document.onkeyup = function(e){
    var order = parseInt(activeEle.id.substring(activeEle.id.length-1));//order为当前焦点的序号，由ID的命名规律获取。
    util.removeClass(activeEle,"active");

    //设置当前焦点的字幕滚动停止，以便将字幕滚动应用到下一个焦点。
    var title = content[(currentPage-1)*6+order].title;
    var titleLen = getStrChineseLength(title);
    if(titleLen>12){
        title = subStr(title,12,"..")
    }
    document.getElementById("sub_name_"+order).innerHTML = title;

    //按键情况判断，根据不同的按键，判断其条件，设置order;
    switch(e.keyCode){//根据按键来控制焦点
        case 37://left
            if(order != 0){
                order = order-1;
            }else if(currentPage > 1){
                currentPage--;
                util.loadMsg(content.slice((currentPage-1)*6, currentPage*6));
                order = 5;
                activeEle = document.getElementById("sub_poster_5");
            }
        break;
        case 38://up
            if(order >= 3){
                order = order-3;
            }else if(currentPage > 1){
                currentPage--;
                util.loadMsg(content.slice((currentPage-1)*6, currentPage*6));
                order = order+3;
            }
        break;
        case 39://right
            if(order+1 <= currentImgs-1){//往右还有可选焦点
                order = order+1;
            }else if(currentPage < totalPage){//还可刷新的页面，则刷新DOM后改变焦点为第一个
                currentPage++;
                util.loadMsg(content.slice((currentPage-1)*6, currentPage*6));
                order = 0;
                activeEle = document.getElementById("sub_poster_0");
            }
        break;
        case 40://down
            if(order+3 <= currentImgs - 2){//往下还有可选焦点
                order = order+3;
            }else{
                if(order <= 2){//焦点不在底部，但是往下没有可选焦点，则将焦点移至末尾。
                    order = currentImgs-1;
                }else if(currentPage < totalPage){//到底部，判断能否刷新
                    currentPage++;
                    util.loadMsg(content.slice((currentPage-1)*6, currentPage*6));
                    order = order-3
                }
            }
        break;
        case 13:
            util.trueTo(content[(currentPage-1)*6+order].sortValue);
        break;
    }

    //设置完order,再根据order设置ID，通过ID获取下一个焦点元素。设置其属性。
    activeEle = document.getElementById("sub_poster_"+order);
    var title = content[(currentPage-1)*6+order].title;
    document.getElementById("sub_name_"+order).innerHTML = marqueeStr(title,8,"240px")
    document.getElementById("current_page").innerHTML = currentPage;
    util.addClass(activeEle,"active");
}

//ajax请求，请求完成后获取的数据进行初始化渲染。
util.ajax({
    method: "GET",
    url: contentUrl,
    data: {},
    onsuccess: function (data) {
        content = data;
        document.getElementById("total_page").innerHTML = Math.ceil(data.length/6);
        totalPage = Math.ceil(data.length/6);
        currentImgs = (data.length - (currentPage - 1)*6)>6?6:(data.length - (currentPage - 1)*6);
        document.getElementById("current_page").innerHTML = currentPage;
        util.loadMsg(data.slice((currentPage-1)*6, currentPage*6));
        util.addClass(activeEle,"active");
        var order = parseInt(activeEle.id.substring(activeEle.id.length-1));
        document.getElementById("sub_name_"+order).innerHTML = marqueeStr(data[(currentPage-1)*6+order].title,8,"240px");
        util.ajax({//请求node.json，并设置title的innerHTML
            method: "GET",
            url: nodeUrl,
            data: {},
            onsuccess: function (data) {
                document.getElementById("title").innerHTML = data.name;
            }
        });
    },
    onfail: function () {
        console.log("request failed")
    }
});

//工具对象定义
function Util() {
    this.ajax = function (paramObj) {//ajax方法
        var method = paramObj.method,
            url = paramObj.url,
            data = paramObj.data || null,
            onsuccess = paramObj.onsuccess || function () { },
            onfail = paramObj.onfail || function () { },
            xhr = this.creatXHR();
        if (method.toUpperCase() === "POST") {
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.sned(formatUrl(data));
        } else if (method.toUpperCase() === "GET") {
            url = url + "?" + this.formatUrl(data);
            xhr.open("GET", url, true);
            xhr.send();
        }
        xhr.onreadystatechange = function () {
            var timeout;
            if (xhr.readyState === 0) {
                timeout = setTimeout(onfail, 5000);
            } else if (xhr.readyState === 4 && xhr.status) {
                onsuccess(JSON.parse(xhr.responseText));
            }
        }
    };
    /**
     * 根据获取的数据渲染页面
     * 参数：contentArr 为ajax获取的数组数据。
     */
    this.loadMsg = function(contentArr) {
        for (var i = 0; i < 6; i++) {
                var poster = document.getElementById("sub_poster_" + i);
                var name = document.getElementById("sub_name_" + i);
            if (typeof contentArr[i] != "undefined") {
                var title = contentArr[i].title;
                var titleLen = getStrChineseLength(title);
                if(titleLen>12){
                    title = subStr(contentArr[i].title,12,"..")
                }
                name.innerHTML = title;
                poster.src = contentArr[i].entryImage.imageUrl;
                poster.style.visibility = "visible";
                name.style.visibility = "visible";
                currentImgs = i+1;
            }else{
                poster.style.visibility = "hidden";
                name.style.visibility = "hidden";
            }
        }
        document.getElementById("barDiv").style.top = Math.floor((currentPage-1)/totalPage*483)+"px";
    };
    this.addClass = function(ele,className){
        ele.className += className;
    };
    this.removeClass = function(ele,className){
        var name = ele.className;
        if(name.indexOf(" "+className) != -1){
            ele.className = name.replace(" "+className,"")
        }else if(name.indexOf(className+" ") != -1){
            ele.className = name.replace(className+" ","")
        }else if(name.indexOf(className) != -1){
            ele.className = name.replace(className,"")
        }
    };
    this.trueTo = function(sortValue){
        setGlobalVar("activeId",activeEle.id);
        setGlobalVar("currentPage",currentPage);
        window.open("content.htm?sortValue="+sortValue,"_self");
    };
    this.creatXHR = function() {
        var xhr = false;
        if (window.XMLHttpRequest) {//标准XHR对象创建
            xhr = new XMLHttpRequest();
            return xhr;
        } else if (window.ActiveXObject) {//各种IE浏览器创建XHR对象时传递的参数
            var versions = ['Microsoft.XMLHTTP',
                'MSXML.XMLHTTP',
                'Msxml2.XMLHTTP.7.0',
                'Msxml2.XMLHTTP.6.0',
                'Msxml2.XMLHTTP.5.0',
                'Msxml2.XMLHTTP.4.0',
                'MSXML2.XMLHTTP.3.0',
                'MSXML2.XMLHTTP'];
            for (var i = 0; i < versions.length; i++) {
                try {
                    xhr = new ActiveXObject(versions[i]);//各个IE浏览器版本的参数不同
                    if (xhr) {
                        return xhr;
                    }
                } catch (e) {
                }
            }
        }
        return xhr;
    };
    this.formatUrl = function(searchObj) {
        str = "";
        if (searchObj) {
            for (var n in searchObj) {
                str += n + "=" + searchObj[n] + "&";
            }
            str = str.substring(0, str.length - 1);
        }
        return str;
    }
}