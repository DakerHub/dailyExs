var globalDomain = ".homed.me";
var globalDnsConfigVar ={
	// 运营商标识,默认为ipanel
	// 页面有特殊化处理的现场请务必修改该值
	// 取值枚举：
	// 1）北京--"beijing"
	// 2）大连--"dalian"
	// 3）福建--"fujian"
	// 4）宁夏--"ningxia"
	// 5）淄博--"zibo"
	// ...
	operator: "ipanel",
	slaveAddr:"http://slave"+globalDomain+":13160",
	dtvAddr:"http://dtv"+globalDomain+":12890",
	//dtvAddr:"http://access"+globalDomain,
	accessAddr:"http://access"+globalDomain+":12690",
	//互动消息的api域名
	msgAddr:"http://message"+globalDomain+":11890",
	//图文的api域名
	ipwedAddr:"http://ipwed"+globalDomain+":17090",
	//推荐与应用的api域名
	homedsAddr:"http://homeds"+globalDomain+":11390",
	//自办频道的api域名
	selflowAddr:"http://selflow"+globalDomain+":13160",
	//操作记录的api域名
	elasticAttr:"http://elastic"+globalDomain+":9200",
	//海报插件公共配置目录
	bossAssetsUrl:"http://boss"+globalDomain+"/pubFile/flash/imgEditor/",
	//回看编辑打点flash插件公共配置目录
	sliceAssetsUrl:"http://boss"+globalDomain+"/pubFile/flash/slicePlayer/",
	//视频播放flash插件公共配置目录
	pcAssetsUrl:"http://boss"+globalDomain+"/pubFile/flash/pcPlayer/",
	//回首页的地址	
	homePageAddr:"http://boss"+globalDomain,
	//"system_id":999999,"system_name":"超级管理员"
	sysOpeAddr:"http://operators"+globalDomain,
	//"system_id":1,"system_name":"栏目管理"
	indexAddr:"http://index"+globalDomain,
	//"system_id":2,"system_name":"视频上传"
	uploadAddr:"http://upload"+globalDomain,
	//"system_id":3,"system_name":"回看视频编辑"
	recordingAddr:"http://recording"+globalDomain,
	//"system_id":4,"system_name":"后台用户管理"
	operatorsAddr:"http://operators"+globalDomain,
	//"system_id":5,"system_name":"图文应用编辑"
	appEditAddr:"http://appEdit"+globalDomain,
	//"system_id":6,"system_name":"应用管理"
	appstoreAddr:"http://appstore"+globalDomain,
	//"system_id":7,"system_name":"终端用户管理"
	enduserAddr:"http://enduser"+globalDomain,
	//"system_id":8,"system_name":"互动消息管理"
	msgeditAddr:"http://msgedit"+globalDomain,
	//"system_id":9,"system_name":"内容推荐管理"
	/*promotionAddr:"http://promotion"+globalDomain,*/
	//"system_id":10,"system_name":"转码管理","iconImg":"img/icon/sys_encoded.png","url":"","backColorFirst":"img/icon/bg_red.jpg","flag":"1"},
	//{"system_id":11,"system_name":"网盘管理","iconImg":"img/icon/sys_skyDrive.png","url":"","backColorFirst":"img/icon/bg_cyan.jpg","flag":"5"},
	//{"system_id":12,"system_name":"设备管理","iconImg":"img/icon/sys_subject.png","url":"","backColorFirst":"img/icon/bg_orange.jpg","flag":"2"},
	//"system_id":13,"system_name":"上传视频打点"
	// vodeditAddr:"http://vodedit"+globalDomain,
	//"system_id":14,"system_name":"业务管理"
	feemngAddr:"http://feemng"+globalDomain,
	//"system_id":17,"system_name":"portal路由管理"
	portalrouterAddr:"http://portalrouter"+globalDomain,
	//"system_id":18,"system_name":"音乐管理"
	musicAddr:"http://music"+globalDomain,
	//"system_id":19,"system_name":"频道管理"
	channelAddr:"http://channel"+globalDomain,
	//"system_id":20,"system_name":"视频监控"
	monitorAddr:"http://monitor"+globalDomain,
	//"system_id":21,"system_name":"马赛克后台"
	mosaicAddr:"http://mosaic"+globalDomain,
	//"system_id":22,"system_name":"自办频道管理" 
	livestreamAddr:"http://livestreaming"+globalDomain,
	//"system_id":10,"system_name":"在线转码系统" , http://transcoding.homed.me
	onlinetranscodingAddr:"http://onlinetranscoding"+globalDomain,
	//"system_id":23,"system_name":"云转码系统" , http://transcoding.homed.me
	transcodingAddr:{
		pageUrl: "http://cloudtranscoding"+globalDomain,
		reqUrl: "http://offlinetranscoding"+globalDomain+":32000/transcoder/offline"
	},
	//"system_id":24,"system_name":"意见反馈管理"
	feedbackAddr: "http://feedback"+globalDomain,
	//"system_id":25,"system_name":"敏感词管理"
	sensitiveAddr: "http://sensitive"+globalDomain,
	//"system_id":26,"system_name":"新闻资讯"
	newsAddr: "http://news"+globalDomain,
	//"system_id":27,"system_name":"推流资源管理系统"
	ipqamAddr: "http://ipqam"+globalDomain,
	//"system_id":29,"system_name":"大数据"
	bigDataAddr: "http://bigdata"+globalDomain,
	//"system_id":30,"system_name":"增强电视"
	edtvAddr: "http://edtv"+globalDomain,
	//"system_id":31,"system_name":"配置管理系统"
	configAddr: "http://config"+globalDomain,
	//监控管理系统，主要用在后台用户管理系统操作监控系统系统管理员时用到
	smcenterAddr:"http://192.168.101.102:31700", //102代表开发，103代表调试，104代表运营
	//"system_id":32,"system_name":"电商管理后台"
	shopManageAddr: "http://shopping"+globalDomain,
	//"system_id":33,"system_name":"教育后台系统"
	eduManageAddr: "http://education"+globalDomain,
	//"system_id":34,"system_name":"评论管理系统"
	commentAddr: "http://comment"+globalDomain,
	//"system_id":35,"system_name":"旅游管理后台"
	tourAddr: "http://tour"+globalDomain,
	//"system_id":36,"system_name":"专题管理后台"
	subjectAddr: "http://subject"+globalDomain,
	//"system_id":37,"system_name":"天气管理后台"
	weatherManageAddr: "http://weather"+globalDomain,
	uCookieDomain:globalDomain
};

/**
 * 海报尺寸配置
 * @type {Object}
 */
var posterSizeConf = {

	basic: {

		// 竖版（父级320x400）
		p_large: 	"320x400",		// TV端详情页
		p_medium: 	"240x300",
		p_small: 	"160x200",		// TV端推荐、检索4行、视频网站

		// 横版（父级500x280）
		l_large: 	"500x280",
		l_medium: 	"375x210",
		l_small: 	"246x138",		// TV端检索5行、手机端		
		
	},

	// 台标海报尺寸
	channelLogo: ["90x90", "100x100"],

	// 监控频道海报尺寸
	monitor: ["113x138", "142x172", "162x138", "163x198", "232x138"],

	// 实时海报尺寸
	realtime: ["320x400", "500x280", "246x138"],

	// 音乐海报尺寸
	music: ["138x138", "150x150", "172x172", "1280x720"]
};

/**
 * 公共的工具函数合集
 * @type {Object}
 */
var globalDnsConfigUtils = {
	// 动态引入js文件
	/**
	 * 动态引入js文件
	 * @param  {string} path    路径字符串
	 * @param  {object} options 设置参数
	 * @return 无
	 */
	loadPublicJsFile: function ( path, options ) {
		options = options || {};

		var context = options.context || document,
            element = context.createElement( "script" );

		element.setAttribute( 'type','text/javascript' );
		element.setAttribute( 'src',path );
		// element.setAttribute('defer','defer');

		element.onload = element.onreadystatechange = function ( ) {
		    if(!this.readyState || this.readyState=='loaded' || this.readyState=='complete'){
		       console.log( "__success__" );
		       if( options.success )options.success( element );
		    }
		};
		element.onerror = function ( ) {
	    	console.log( "__error__" );
			if( options.error )options.error( element );
		};

		context.getElementsByTagName( 'head' )[0].appendChild( element );

	},
	/**
	 * 获取cookies
	 * @param  {string} name cookies的key
	 * @return {string}      cookies的value
	 */
	getCookie: function ( name ) {
		var arr,
			reg = new RegExp( "(^| )" + name + "=([^;]*)(;|$)" );

		if ( arr = document.cookie.match(reg) ) {
			return unescape(arr[2]);
		} else {
			return null;
		}
	},
	/**
	 * 原生js的ajax请求
	 * @param  {object} options 参数设置
	 * @return 无
	 */
	ajaxData: function ( options ) {
		var url = options.url || "",
			type = options.type || "GET",
			data = options.data,
			success_fn = options.success || function(){},
			error_fn = options.error || function(){};

		var obj = new XMLHttpRequest();  // XMLHttpRequest对象用于在后台与服务器交换数据 
		obj.open( type, url, true );
		if ( type == "POST" ) obj.setRequestHeader( "Content-type", "application/x-www-form-urlencoded" ); // 发送信息至服务器时内容编码类型

		obj.onreadystatechange = function () {
	        if ( obj.readyState == 4 && (obj.status == 200 || obj.status == 304) ) {  // 304未修改
	            success_fn.call( this, eval("(" + obj.responseText + ")") );
	        } else if ( obj.readyState == 4 ) {
	            error_fn.call( this, obj.responseText );
	        }
	    };

	    obj.send( type == "POST" ? JSON.stringify(data) : data );
	},
	/**
     * 获取变量的类型
     * @param  {各类型} variable 变量
     * @return {String}          返回变量的类型, 如：number, array, function, object等
     */
    typeOf: function (variable) {
        var type = Object.prototype.toString.call(variable);
        return ((/\[object\s+(.*)\]/ig).exec(type)[1]).toLowerCase();
    },
	/**
     * 如果fn为函数则运行该函数
     * @param  {Function}  fn       函数名
     * @param  {Object}    thisObj  函数的当前对象
     * @param  {Array}     args     函数参数
     * @return 无返回
     */
    runFunction: function (fn, thisObj, args) {
        if (this.typeOf(fn) == "function") {
            var argus = arguments,
                argsl = argus.length;

            //如果函数的参数列表存在1个参数
            if (argsl == 1) {
                return fn.apply(window);
            }

            //如果函数的参数列表存在2个参数
            if (argsl == 2) {
                if (this.typeOf(thisObj) == "array") {
                    return fn.apply(window, thisObj);
                } else {
                    return fn.apply(thisObj);
                }
            }

            //如果函数的参数列表存在3个参数
            if (argsl == 3) {
                return fn.apply(thisObj || window, args);
            }
        }
    },
};

/**
 * 内容类型
 * @type {Object}
 * 使用方式：
 * 比如要获取“电影”类型的相关属性，则调用contentType["电影"]，能获取到的属性包括内容类型的id值（id），以及可能存在的子类型（subtype，部分内容类型可能没有扩展子类型）
 */
var contentType = {};

var options = {
	url: globalDnsConfigVar.dtvAddr + "/config/mediatype/get_list",
	type: "POST",
	data: {
		accesstoken: globalDnsConfigUtils.getCookie( "accesstoken" ),
		pageidx: 1,
		pagenum: 10000,
		// parentid: 0
	},
	success: function ( data ) {
		if ( data.ret == 0 ) {
			var list = data.list || [],
				map = {};

			list.sort( function( a, b ) {
				var aid = a.originalid,
					bid = b.originalid;

				return aid - bid;
			} );

			for ( var i = 0, len = list.length; i < len; ++i ) {
				var row = list[ i ],
					mid = row.mediatypeid,
					oid = parseInt( row.originalid ),
					pid = row.parentid,
					name = row.name;

				if ( row.status != 5 ) continue;

				if ( pid == 0 ) {
					if ( !map[ mid ] ) map[ mid ] = {};

					contentType[ name ] = {
						id: oid,
						subType: map[ mid ]
					};
				} else {
					if ( !map[ pid ] ) map[ pid ] = {};

					map[ pid ][ oid ] = name;
				}
			}
			console.log( "__配置接口调用成功__" );
			console.log( contentType );
		} else {
			options.error();
		}
	},
	error: function () {
		console.log( "__配置接口调用失败，启用备份配置__" );
		// 动态加载内容类型
		globalDnsConfigUtils.loadPublicJsFile( globalDnsConfigVar.homePageAddr + "/pubFile/commjs/contentType.js?_=" + ( new Date() ).getTime(), {
			success: function ( ) {
				console.log( contentType );
			},
			error: function ( ) {
			}
		} );
	}
};

globalDnsConfigUtils.ajaxData( options );

//部分系统可能单独用到子类型，但是无法通过contentType准确拿到其id，故在此对象中单独配置
//尽可能减少在各个单独系统中写死ID的情况
var contentTypeSpeical = {
	//多处会用到mv子类型，故单独配置
	//add zhanglun 2016-04-15
	mv_sub_type: "11031001"
};

/**
 * 系统列表
 */
var publicUrl = globalDnsConfigVar.homePageAddr + "/pubFile/iconsys/";
var sysList = {
    "999999":{"role":-1,"flag":0,"systemid":999999,"name":"超级管理员","titleimgurl":""+publicUrl+"sys999999.png","listiconurl":""+publicUrl+"iconsys999999.jpg","pageurl":globalDnsConfigVar.sysOpeAddr+"/index.html"},
    "0":{"role":-1,"flag":1,"systemid":0,"name":"首页","titleimgurl":""+publicUrl+"sys0.png","listiconurl":""+publicUrl+"iconsys0.jpg","pageurl":globalDnsConfigVar.homePageAddr+"/index.html"},
    "1":{"role":-1,"flag":0,"systemid":1,"name":"栏目管理","titleimgurl":""+publicUrl+"sys1.png","listiconurl":""+publicUrl+"iconsys1.jpg","pageurl":globalDnsConfigVar.indexAddr+"/index.html"},
    "2":{"role":-1,"flag":0,"systemid":2,"name":"视频上传","titleimgurl":""+publicUrl+"sys2.png","listiconurl":""+publicUrl+"iconsys2.jpg","pageurl":globalDnsConfigVar.uploadAddr+"/index.html"},
    "3":{"role":-1,"flag":0,"systemid":3,"name":"回看视频编辑","titleimgurl":""+publicUrl+"sys3.png","listiconurl":""+publicUrl+"iconsys3.jpg","pageurl":globalDnsConfigVar.recordingAddr+"/index.html"},
    "4":{"role":-1,"flag":0,"systemid":4,"name":"后台用户管理","titleimgurl":""+publicUrl+"sys4.png","listiconurl":""+publicUrl+"iconsys4.jpg","pageurl":globalDnsConfigVar.operatorsAddr+"/index.html"},
    "5":{"role":-1,"flag":0,"systemid":5,"name":"图文编辑","titleimgurl":""+publicUrl+"sys5.png","listiconurl":""+publicUrl+"iconsys5.jpg","pageurl":globalDnsConfigVar.appEditAddr+"/index.html"},
    "6":{"role":-1,"flag":0,"systemid":6,"name":"应用管理","titleimgurl":""+publicUrl+"sys6.png","listiconurl":""+publicUrl+"iconsys6.jpg","pageurl":globalDnsConfigVar.appstoreAddr+"/index.html"},
    "7":{"role":-1,"flag":0,"systemid":7,"name":"终端用户管理","titleimgurl":""+publicUrl+"sys7.png","listiconurl":""+publicUrl+"iconsys7.jpg","pageurl":globalDnsConfigVar.enduserAddr+"/index.html"},
    "8":{"role":-1,"flag":0,"systemid":8,"name":"互动消息管理","titleimgurl":""+publicUrl+"sys8.png","listiconurl":""+publicUrl+"iconsys8.jpg","pageurl":globalDnsConfigVar.msgeditAddr+"/index.html"},
    /*"9":{"role":-1,"flag":0,"systemid":9,"name":"推荐管理","titleimgurl":""+publicUrl+"sys9.png","listiconurl":""+publicUrl+"iconsys9.jpg","pageurl":globalDnsConfigVar.promotionAddr+"/index.html"},*/
    "10":{"role":-1,"flag":0,"systemid":10,"name":"在线转码管理","titleimgurl":""+publicUrl+"sys10.png","listiconurl":""+publicUrl+"iconsys10.jpg","pageurl":globalDnsConfigVar.onlinetranscodingAddr+"/webtrans/index.php"},
    "11":{"role":-1,"flag":0,"systemid":11,"name":"网盘管理","titleimgurl":""+publicUrl+"sys11.png","listiconurl":""+publicUrl+"iconsys11.jpg","pageurl":""},
    "12":{"role":-1,"flag":0,"systemid":12,"name":"设备管理","titleimgurl":""+publicUrl+"sys12.png","listiconurl":""+publicUrl+"iconsys12.jpg","pageurl":""},
    /*"13":{"role":-1,"flag":0,"systemid":13,"name":"上传视频打点","titleimgurl":""+publicUrl+"sys13.png","listiconurl":""+publicUrl+"iconsys13.jpg","pageurl":globalDnsConfigVar.vodeditAddr+"/index.html"},*/
    "14":{"role":-1,"flag":0,"systemid":14,"name":"业务管理","titleimgurl":""+publicUrl+"sys14.png","listiconurl":""+publicUrl+"iconsys14.jpg","pageurl":globalDnsConfigVar.feemngAddr+"/index.html"},
    "15":{"role":-1,"flag":0,"systemid":15,"name":"主题管理","titleimgurl":""+publicUrl+"sys15.png","listiconurl":""+publicUrl+"iconsys15.jpg","pageurl":""},
    "16":{"role":-1,"flag":0,"systemid":16,"name":"审核","titleimgurl":""+publicUrl+"sys16.png","listiconurl":""+publicUrl+"iconsys16.jpg","pageurl":""},
    "17":{"role":-1,"flag":0,"systemid":17,"name":"portal路由管理","titleimgurl":""+publicUrl+"sys17.png","listiconurl":""+publicUrl+"iconsys17.jpg","pageurl":"http://portalrouter.homed.me/index.htm"},
    "18":{"role":-1,"flag":0,"systemid":18,"name":"音乐管理","titleimgurl":""+publicUrl+"sys18.png","listiconurl":""+publicUrl+"iconsys18.jpg","pageurl":globalDnsConfigVar.musicAddr+"/index.html"},
    "19":{"role":-1,"flag":0,"systemid":19,"name":"频道管理","titleimgurl":""+publicUrl+"sys19.png","listiconurl":""+publicUrl+"iconsys19.jpg","pageurl":globalDnsConfigVar.channelAddr+"/index.html"},
    "20":{"role":-1,"flag":0,"systemid":20,"name":"视频监控","titleimgurl":""+publicUrl+"sys20.png","listiconurl":""+publicUrl+"iconsys20.jpg","pageurl":globalDnsConfigVar.monitorAddr+"/index.html"},
    "21":{"role":-1,"flag":0,"systemid":21,"name":"马赛克后台","titleimgurl":""+publicUrl+"sys21.png","listiconurl":""+publicUrl+"iconsys21.jpg","pageurl":globalDnsConfigVar.mosaicAddr+"/index.html"},
    "22":{"role":-1,"flag":0,"systemid":22,"name":"自办频道管理","titleimgurl":""+publicUrl+"sys22.png","listiconurl":""+publicUrl+"iconsys22.jpg","pageurl":globalDnsConfigVar.livestreamAddr+"/index.html"},
    "23":{"role":-1,"flag":0,"systemid":23,"name":"云转码","titleimgurl":""+publicUrl+"sys23.png","listiconurl":""+publicUrl+"iconsys23.jpg","pageurl":globalDnsConfigVar.transcodingAddr.pageUrl+"/login.html"},
    "24":{"role":-1,"flag":0,"systemid":24,"name":"意见反馈管理","titleimgurl":""+publicUrl+"sys24.png","listiconurl":""+publicUrl+"iconsys24.jpg","pageurl":globalDnsConfigVar.feedbackAddr+"/index.html"},
    "25":{"role":-1,"flag":0,"systemid":25,"name":"敏感词管理","titleimgurl":""+publicUrl+"sys25.png","listiconurl":""+publicUrl+"iconsys25.jpg","pageurl":globalDnsConfigVar.sensitiveAddr+"/index.html"},
    "26":{"role":-1,"flag":0,"systemid":26,"name":"新闻资讯","titleimgurl":""+publicUrl+"sys26.png","listiconurl":""+publicUrl+"iconsys26.jpg","pageurl":globalDnsConfigVar.newsAddr+"/index.html"},
    "27":{"role":-1,"flag":0,"systemid":27,"name":"IPQAM管理","titleimgurl":""+publicUrl+"sys27.png","listiconurl":""+publicUrl+"iconsys27.jpg","pageurl":globalDnsConfigVar.ipqamAddr+"/index.html"},
   /* "29":{"role":-1,"flag":0,"systemid":29,"name":"大数据系统","titleimgurl":""+publicUrl+"sys29.png","listiconurl":""+publicUrl+"iconsys29.jpg","pageurl":globalDnsConfigVar.bigDataAddr+"/index.html"},*/
    "30":{"role":-1,"flag":0,"systemid":30,"name":"增强电视","titleimgurl":""+publicUrl+"sys30.png","listiconurl":""+publicUrl+"iconsys30.jpg","pageurl":globalDnsConfigVar.edtvAddr+"/index.html"},
    "31":{"role":-1,"flag":0,"systemid":31,"name":"配置管理","titleimgurl":""+publicUrl+"sys31.png","listiconurl":""+publicUrl+"iconsys31.jpg","pageurl":globalDnsConfigVar.configAddr+"/index.html"},
    "32":{"role":-1,"flag":0,"systemid":32,"name":"电商管理后台","titleimgurl":""+publicUrl+"sys32.png","listiconurl":""+publicUrl+"iconsys32.jpg","pageurl":globalDnsConfigVar.shopManageAddr+"/index.html"},
    "33":{"role":-1,"flag":0,"systemid":33,"name":"教育后台管理","titleimgurl":""+publicUrl+"sys33.png","listiconurl":""+publicUrl+"iconsys33.jpg","pageurl":globalDnsConfigVar.eduManageAddr+"/index.html"},
    "34":{"role":-1,"flag":0,"systemid":34,"name":"评论管理","titleimgurl":""+publicUrl+"sys34.png","listiconurl":""+publicUrl+"iconsys34.jpg","pageurl":globalDnsConfigVar.commentAddr+"/index.html"},
    "35":{"role":-1,"flag":0,"systemid":35,"name":"旅游管理","titleimgurl":""+publicUrl+"sys35.png","listiconurl":""+publicUrl+"iconsys35.jpg","pageurl":globalDnsConfigVar.tourAddr+"/index.html"},
    "36":{"role":-1,"flag":0,"systemid":36,"name":"专题管理","titleimgurl":""+publicUrl+"sys36.png","listiconurl":""+publicUrl+"iconsys36.jpg","pageurl":globalDnsConfigVar.subjectAddr+"/index.html"},
    "37":{"role":-1,"flag":0,"systemid":37,"name":"天气管理","titleimgurl":""+publicUrl+"sys37.png","listiconurl":""+publicUrl+"iconsys37.jpg","pageurl":globalDnsConfigVar.weatherManageAddr+"/index.html"}
};

/**
 * 媒资提供商对象
 * @param {number} type 需要获取的提供商类型，取值如下：
 *                      1）0或不传："全部"
 *                      2）1：内容提供商
 *                      3）2：服务提供商
 *                      4）3：第三方BO
 *                      5）4：版权提供商 
 */
var ProviderObject = function( type ) {
	type = type || 0;
	
	var self = this,
		allList = [],
		typeList = {},
        pidMap = {},
		utils = globalDnsConfigUtils;

	// 标记初始化时ajax请求是否完成
	var ajaxFlag = true;

	/**
	 * 根据内容类型获取某个类型提供商的列表
	 * @param  {Number}   _contenttype 内容类型
	 * @param  {Number}   _partnertype 提供商类型，不传默认与构造对象时的type相同
	 * @param  {Function} fn           回调函数
	 * 
	 * 或 把参数打包成对象传入
	 *  
	 * @param {Object} 
	 * {
	 * 	contenttype 	内容类型
	 * 	partnertype 	提供商类型
	 * 	callback 		回调函数
	 * }
	 * 
	 * @return {Object}
	 */
	this.getListByType = function ( _contenttype, _partnertype, fn ) {
		var ret_obj = {},
			argus = arguments,
            argsl = argus.length;

       	// 对入参进行处理
        if ( argsl ==1 && utils.typeOf(_contenttype) == "object" ) {
        	_partnertype = _contenttype.partnertype;
        	fn = _contenttype.callback;
        	_contenttype = _contenttype.contenttype;
        } else if (argsl == 2 && utils.typeOf(_partnertype) == "function") {
            fn = _partnertype;
            _partnertype = type;
        }

		getTargetList( {
			contenttype: _contenttype || "",
			partnertype: _partnertype || type,
			callback: function ( list ) {
				for ( var i = 0, len = list.length; i < len; ++i ) {
					var row = list[i],
						id = row.english_name,
						value = row.name;

					if ( _partnertype == 4 || type == 4 ) {
                        ret_obj[ value ] = value;
                    } else {
                        ret_obj[ id ] = value;
                    }
				}

                utils.runFunction( fn, [ ret_obj ] );
			}
		} );

		return ret_obj;
	};

	/**
	 * 获取某个类型提供商的列表
	 * @param  {Number}   _partnertype 提供商类型，不传默认与构造对象时的type相同
	 * @param  {Function} fn           回调函数
	 * @return {Object}
	 */
	this.getList = function ( _partnertype, fn ) {
		var ret_obj = {},
			argus = arguments,
            argsl = argus.length;

       	// 对入参进行处理
        if ( argsl ==1 && utils.typeOf(_partnertype) == "object" ) {
        	_partnertype = _contenttype.partnertype;
        	fn = _contenttype.callback;
        	_contenttype = _contenttype.contenttype;
        } else if (argsl == 1 && utils.typeOf(_partnertype) == "function") {
            fn = _partnertype;
            _partnertype = type;
        }

		getTargetList( {
			contenttype: "all",
			partnertype: _partnertype || type,
			callback: function ( list ) {
				for ( var i = 0, len = list.length; i < len; ++i ) {
					var row = list[i],
						id = row.english_name,
						value = row.name;

					if ( _partnertype == 4 || type == 4 ) {
                        ret_obj[ value ] = value;
                    } else {
                        ret_obj[ id ] = value;
                    }
				}

				utils.runFunction( fn, [ ret_obj ] );
			}
		} );

		return ret_obj;
	};

    this.getNameByPid = function ( pid, fn ) {
        var ret_obj = {};

        getTargetList( {
            partnerid: pid,
            callback: function ( data ) {
                if ( data.english_name || data.name ) {
                    ret_obj.id = data.english_name;
                    ret_obj.name = data.name;
                }

                utils.runFunction( fn, [ ret_obj ] );
            }
        } );

        return ret_obj;
    };

	function getTargetList ( _params ) {
		var argus = arguments;
		if ( ajaxFlag ) {
			setTimeout( function () {
				argus.callee( _params );
			}, 500 );
		} else {
			var ctype = _params.contenttype || "all",
				ptype = _params.partnertype || "",
                pid = _params.partnerid,
				data = pidMap[pid] || ( typeList[ptype] || {} )[ctype] || [];

			utils.runFunction( _params.callback, [data] );
		}
	};

	/**
     * construct 构造函数
     */
    ( function __construct() {
    	var opt = {
			url: globalDnsConfigVar.dtvAddr + "/config/partner/get_list",
			type: "POST",
			data: {
				accesstoken: utils.getCookie( "accesstoken" ),
				partnertype: "" + (type || ""),
				pageidx: 1,
				pagenum: 10000,
			},
			success: function ( data ) {
				ajaxFlag = false;
				if ( data.ret == 0 ) {
					var list = data.list || [];

					for ( var i = 0, len = list.length; i < len; ++i ) {
						var row = list[ i ],
							ptype = ( row.partner_type || "" ).split( "|" ),
							ctype = ( row.contenttype || "" ).split( "|" ),
							status = row.status;

						if ( status != 5 ) continue;

						allList.push( row );
                        pidMap[ row.partner_id ] = row;

						for ( var j = 0, plen = ptype.length; j < plen; ++j ) {
							var p = ptype[ j ],
								list_p = typeList[ p ] || {},
								list_p_all = list_p[ "all" ] || [];

							typeList[ p ] = list_p;
							list_p[ "all" ] = list_p_all;

							list_p_all.push( row );

							for ( var k = 0, clen = ctype.length; k < clen; ++k ) {
								var c = ctype[ k ],
									list_p_c = list_p[ c ] || [];

								list_p[ c ] = list_p_c;

								list_p_c.push( row );
							}
						}
					}

					console.log( "__服务商接口调用成功__" );
					console.log( allList );
					console.log( typeList );
				} else {
					opt.error();
				}
			},
			error: function () {
				ajaxFlag = false;
				console.log( "__服务商接口调用失败__" );
			}
		};

		utils.ajaxData( opt );
    } () );
};