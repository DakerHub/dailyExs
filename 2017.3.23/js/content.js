setGlobalVar("currentWindow","content");//设置窗口名以让主页区分是内容页跳转
var search = location.search.substring(1),
    contentUrl = "http://localhost/dailyExs/2017.3.23/content.json",//请求的数据地址，需更改此变量才能在你的环境运行
    nodeUrl = "http://localhost/dailyExs/2017.3.23/node.json",//请求的数据地址，需更改此变量才能在你的环境运行
    util = new Util(),
    activeEle = document.getElementById("img0"),
    containerH = 510;

/*
util.ajax({//请求content内容
    method: "GET",
    url: contentUrl,
    data: {},
    onsuccess: function (data) {
        var name = search.split("=")[0];
        var val = search.split("=")[1];
        for(var i=0;i<data.length;i++){
            if(data[i][name] == val){
                content = data[i];
                util.render(data[i]);
            }
        }
        util.ajax({//请求node.json
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
*/

//模拟ajax请求成功后的数据处理
success();
function success(){
    data = content;
    var name = search.split("=")[0];
    var val = search.split("=")[1];
    for(var i=0;i<data.length;i++){
        if(data[i][name] == val){
            content = data[i];
            util.render(data[i]);
        }
    }
    document.getElementById("title").innerHTML = node.name;
}

document.onkeydown = function(e){
    switch(e.keyCode){
        case 39:
            util.changeImg("right");
        break;
        case 37:
            util.changeImg("left");
        break;
        case 38:
            util.scrollContent("up");
        break;
        case 40:
            util.scrollContent("down");
        break;
        case 8:
            history.back();
        break;
    }
}

function Util(){
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
    };
    this.render = function(contentObj){
        content = contentObj.content;
        document.getElementById("contentTitle").innerHTML = contentObj.title;
        for(var i=0;i<4;i++){
            var htmlStr = content.substring(content.indexOf("<p>"),content.indexOf("</p>")+4);
            var src = htmlStr.substring(content.indexOf('src="')+5,content.indexOf('" '));
            content = content.substring(content.indexOf("</p>")+4);
            document.getElementById("img"+i).src = src;
            if(i===0){
                document.getElementById("bigImg").src = src;
            }
        }
        document.getElementById("content").innerHTML = content;
    };
    this.changeImg = function(dir){
        var order = parseInt(activeEle.id.substring(activeEle.id.length-1));
        switch(dir){
            case "right":
                if(parseInt(order) === 3){
                    order = 0;
                }else{
                    order = order+1;
                }
            break;
            case "left":
                if(parseInt(order) === 0){
                    order = 3;
                }else{
                    order = order-1;
                }
            break;
        }
        activeEle = document.getElementById("img"+order);
        document.getElementById("bigImg").src = activeEle.src;
        document.getElementById("picNow").style.left = parseInt(activeEle.parentNode.style.left)-3+"px";
    };
    this.scrollContent = function(dir){
        var content = document.getElementById("content");
        var top = parseInt(content.style.top==""?0:content.style.top);
        var h = parseInt(window.getComputedStyle(content).height==""?0:window.getComputedStyle(content).height);
        var step = 120;
        switch(dir){
            case "up":
                if(top > -step){
                    top = 0;
                }else{
                    top = top + step;
                }
            break;
            case "down":
                if(containerH - top < h - step){
                    top = top - step;
                }else{
                    top = containerH - h;
                }
            break;
        }
        document.getElementById("content").style.top = top+"px";
        document.getElementById("barDiv").style.top = parseInt(top/(containerH-h)*520)-20+"px";
    };
}