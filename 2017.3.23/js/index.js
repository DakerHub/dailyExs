var util = new util(),
    content = null,
    activeEle = document.getElementById("sub_poster_0"),
    currentPage = 1,
    currentImgs = 0,
    totalPage = 0,
    contentUrl = "http://localhost/dailyExs/2017.3.23/content.json",
    nodeUrl = "http://localhost/dailyExs/2017.3.23/node.json";
document.onkeyup = function(e){
    var order = parseInt(activeEle.id.substring(activeEle.id.length-1));
    util.removeClass(activeEle,"active");
    var title = content[(currentPage-1)*6+order].title;
    var titleLen = getStrChineseLength(title);
    if(titleLen>12){
        title = subStr(title,12,"..")
    }
    document.getElementById("sub_name_"+order).innerHTML = title;
    switch(e.keyCode){
        case 37://left
            if(order != 0){
                order = order-1;
                // activeEle = document.getElementById("sub_poster_"+(order-1));
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
                // activeEle = document.getElementById("sub_poster_"+(order-3));
            }else if(currentPage > 1){
                currentPage--;
                util.loadMsg(content.slice((currentPage-1)*6, currentPage*6));
                order = order+3;
                // activeEle = document.getElementById("sub_poster_"+(order+3));
            }
        break;
        case 39://right
            if(order+1 <= currentImgs-1){//往右还有可选焦点
                order = order+1;
                // activeEle = document.getElementById("sub_poster_"+(order+1));
            }else if(currentPage < totalPage){//还可刷新的页面，则刷新DOM后改变焦点为第一个
                currentPage++;
                util.loadMsg(content.slice((currentPage-1)*6, currentPage*6));
                order = 0;
                activeEle = document.getElementById("sub_poster_0");
            }
        break;
        case 40://down
            if(order+3 <= currentImgs-2){//往下还有可选焦点
                // activeEle = document.getElementById("sub_poster_"+(order+3));
                order = order+3;
            }else{
                if(order <= 2){//焦点不在底部，但是往下没有可选焦点，则将焦点移至末尾。
                    order = currentImgs-1;
                    // activeEle = document.getElementById("sub_poster_"+(currentImgs-1));
                }else if(currentPage < totalPage){//到底部，判断能否刷新
                    currentPage++;
                    util.loadMsg(content.slice((currentPage-1)*6, currentPage*6));
                    order = order-3
                    // activeEle = document.getElementById("sub_poster_"+(order-3));
                }
            }
        break;
    }
    activeEle = document.getElementById("sub_poster_"+order);
    var title = content[(currentPage-1)*6+order].title;
    document.getElementById("sub_name_"+order).innerHTML = marqueeStr(title,8,"240px")
    document.getElementById("current_page").innerHTML = currentPage;
    util.addClass(activeEle,"active");
}
util.ajax({
    method: "GET",
    url: contentUrl,
    data: {},
    onsuccess: function (data) {
        content = data;
        document.getElementById("total_page").innerHTML = Math.ceil(data.length/6);
        totalPage = Math.ceil(data.length/6);
        currentImgs = data.length>6?6:data.length;
        document.getElementById("current_page").innerHTML = currentPage;
        util.loadMsg(data.slice(0, 6));
        util.addClass(activeEle,"active");
        var order = parseInt(activeEle.id.substring(activeEle.id.length-1));
        marqueeStr(data[order].title,8,"240px");
    },
    onfail: function () {
        console.log("request failed")
    }
});
function util() {
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
    }
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
    }
    this.addClass = function(ele,className){
        ele.className += className;
    }
    this.removeClass = function(ele,className){
        var name = ele.className;
        if(name.indexOf(" "+className) != -1){
            ele.className = name.replace(" "+className,"")
        }else if(name.indexOf(className+" ") != -1){
            ele.className = name.replace(className+" ","")
        }else if(name.indexOf(className) != -1){
            ele.className = name.replace(className,"")
        }
    }
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