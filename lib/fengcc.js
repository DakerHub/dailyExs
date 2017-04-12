(function(window){
    var fcc = (function(){
        var fcc = function(selector){
            return new fcc.prototype.init(selector);
        };
        fcc.prototype = {
            constructor : fcc,
            init : function(selector){
                if(typeof selector == "string"){
                    switch(selector[0]){
                        case "#"://id选择器
                            this[0] = document.getElementById(selector.substring(1));
                            this.length = 1;
                        break;
                        case "."://class选择器
                            var eles = document.getElementsByClassName(selector.substring(1));
                            for(var i=0;i<eles.length;i++){
                                this[i] = eles[i];
                            }
                            this.length = eles.length;
                        break;
                    }
                }else if(typeof selector == "object"){
                    if(selector.nodeType && selector.nodeType === 1){
                        this[0] = selector;
                        this.length = 1;
                    }else if(selector instanceof Array){
                        for(var i=0;i<selector.length;i++){
                            this[i] = selector[i];
                        }
                        this.length = selector.length;
                    }
                }
                return this;
            },
            addClass: function(className){
                var curEle,clazz,i=0;
                if(typeof className != "string"){
                    console.warn("The param must be string!")
                }else{
                    while((curEle = this[i++])){
                        clazz = curEle.nodeType == 1 && (curEle.getAttribute && " "+curEle.getAttribute("class")+" ")||"";
                        if(clazz){
                            if(clazz.indexOf(" "+className+" ") < 0){
                                clazz += className;
                            }
                            clazz = clazz.substring(1);
                            curEle.setAttribute("class",clazz);
                        }
                    }
                }
            },
            removeClass : function(className){
                var curEle,clazz,temp,i=0;
                while((curEle = this[i++])){
                    clazz = curEle.nodeType === 1 && (curEle.getAttribute && " "+curEle.getAttribute("class")+" ")||"";
                    if(clazz){
                        if(clazz.indexOf(" "+className+" ") >= 0){
                            temp = clazz.split(" "+className+" ");
                            clazz = temp.join(" ");
                        }
                    }
                    clazz = clazz.trim();
                    curEle.setAttribute("class",clazz);
                }
            },
            bindNav(clazz,current,callback){
                var curEle,i=0;
                while((curEle = this[i++])){
                    curEle.addEventListener("click",function(e){
                        var target = e.target;
                        if(target.getAttribute("class") && target.getAttribute("class").indexOf(clazz) >= 0){
                            e.preventDefault();
                            if(target.getAttribute("class") && target.getAttribute("class").indexOf(current) < 0){
                                fcc("."+current).removeClass(current);
                                fcc(target).addClass(current);
                                if(typeof callback === "function"){
                                    callback(target);
                                }
                            }
                        }
                    })
                }
            }
        }

        function getAjax(){
            /**
            *
            通过参入的参数创建ajax并且发送请求，调用回调。
            *
            *@method ajax
            *
            *@param {obj} paramObj paramObj.method为请求方式（必选），paramObj.url请求地址（必选），paramObj.data请求参数，
            *                      paramObj.type请求数据类型（默认JSON），paramObj.onsuccess成功的回调，paramObj.onfail失败的回调，
            *                      paramObj.timeout超时时长。
            *
            */
            function ajax(paramObj) {//ajax方法
                var method = paramObj.method,
                    url = paramObj.url,
                    data = paramObj.data || null,
                    type = paramObj.type || "JSON",
                    timeout = paramObj.timeout || 8000,
                    onsuccess = paramObj.onsuccess || function () { },
                    onfail = paramObj.onfail || function () { },
                    timer = 0,
                    xhr = creatXHR();

                if (method.toUpperCase() === "POST") {
                    xhr.open("POST", url, true);
                    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    xhr.sned(formatUrl(data));

                } else if (method.toUpperCase() === "GET") {
                    url = url + "?" + formatUrl(data);
                    xhr.open("GET", url, true);
                    xhr.send();
                }
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 0) {
                        timer = setTimeout(onfail, timeout);
                    } else if (xhr.readyState === 4 && xhr.status === 200) {
                        clearTimeout(timer);
                        var res = type.toUpperCase() === "JSON" ? JSON.parse(xhr.responseText):xhr.responseText;
                        onsuccess(res);
                    }
                }
            };
            /**
            *
            跨浏览器创建一个XHR对象用于ajax
            *
            *@method creatXHR
            *
            *@return {obj} 返回一个XHR对象
            *
            */
            function creatXHR() {
                var xhr = false;//可以使用creatXHR()返回值判断浏览器是否支持XHR
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
            /**
            *
            将一个js对象格式化为查询字符串
            *
            *@method formatUrl
            *
            *@param {obj} searchObj 符合json格式的js对象
            *
            *@return {str} 查询字符串格式
            *
            */
            function formatUrl(searchObj) {
                var search = "";
                if (searchObj) {
                    for (var n in searchObj) {
                        search += n + "=" + searchObj[n] + "&";
                    }
                    search = search.substring(0, search.length - 1);
                }
                return search;
            }

            return ajax;
        }
        fcc.ajax = getAjax();
        
        fcc.prototype.init.prototype = fcc.prototype;
        return fcc;
    })()
    window.fcc = fcc;
})(window)