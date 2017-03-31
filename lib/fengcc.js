(function(window){
    var fcc = (function(){
        var fcc = function(selector){
            return new fcc.prototype.init(selector);
        };
        fcc.prototype = {
            constructor : fcc,
            init : function(selector){
                switch(selector[0]){
                    case "#"://id选择器
                        this[0] = document.getElementById(selector.substring(1));
                        this.length = 1;
                    break;
                    case "."://class选择器
                        var eles = document.getElementsByClassName(selector.substring(1));
                        this.elements = ;
                    break;
                }
                return this;
            },
            addClass: function(className){
                var ele = this[0];
                ele.className += className;
            },
            removeClass : function(className){
                var ele = this[0];
                var name = ele.className;
                if(name.indexOf(" "+className) != -1){
                    ele.className = name.replace(" "+className,"")
                }else if(name.indexOf(className+" ") != -1){
                    ele.className = name.replace(className+" ","")
                }else if(name.indexOf(className) != -1){
                    ele.className = name.replace(className,"")
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