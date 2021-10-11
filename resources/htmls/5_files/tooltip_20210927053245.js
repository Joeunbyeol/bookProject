function _settingPolyfill(t,e,n,i,o){(o||!t[e].prototype[n])&&(t[e].prototype[n]=i)
}function polyfillArray(t){function e(t){if("function"!=typeof t){throw new TypeError("callback is not a function.")
}}_settingPolyfill(t,"Array","forEach",function(t,n){e(t);
for(var i=arguments.length>=2?n:void 0,o=0,r=this.length;
r>o;
o++){t.call(i,this[o],o,this)
}}),_settingPolyfill(t,"Array","every",function(t,n){e(t);
for(var i=arguments.length>=2?n:void 0,o=0,r=this.length;
r>o;
o++){if(!t.call(i,this[o],o,this)){return !1
}}return !0
})
}function polyfillTimer(t){function e(){var e,n=t.Date.now(),i={};
for(var o in h){var r=h[o];
_[r.clearType](h[o].key),delete h[o],r.timerType==c&&(e=n-r.createdTime,r.delay=e>=r.delay?0:r.delay-e),r.isCall||(r.key=_[r.timerType](r.callback.bind(r),r.delay),i[o]=r)
}h=i,i=null
}var n,i=t.navigator.userAgent,o=/i(Pad|Phone|Pod)/.test(i);
if(o){var r=i.match(/OS\s(\d)/);
r&&(n=parseInt(r[1],10))
}var s=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame,a=t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.msCancelAnimationFrame;
if(s&&!a){var l={},d=s;
s=function(t){function e(){l[n]&&t()
}var n=d(e);
return l[n]=!0,n
},a=function(t){delete l[t]
}
}else{s&&a||(s=function(e){return t.setTimeout(e,16)
},a=t.clearTimeout)
}if(t.requestAnimationFrame=s,t.cancelAnimationFrame=a,n>=6&&t.requestAnimationFrame(function(){}),6==n){var h={},c="setTimeout",u="clearTimeout",p="setInterval",f="clearInterval",_={setTimeout:t.setTimeout.bind(t),clearTimeout:t.clearTimeout.bind(t),setInterval:t.setInterval.bind(t),clearInterval:t.clearInterval.bind(t)};
[[c,u],[p,f]].forEach(function(e){t[e[0]]=function(e,n){return function(i,o){var r={key:"",isCall:!1,timerType:e,clearType:n,realCallback:i,callback:function(){var t=this.realCallback;
t(),this.timerType===c&&(this.isCall=!0,delete h[this.key])
},delay:o,createdTime:t.Date.now()};
return r.key=_[e](r.callback.bind(r),o),h[r.key]=r,r.key
}
}(e[0],e[1]),t[e[1]]=function(t){return function(e){e&&h[e]&&(_[t](h[e].key),delete h[e])
}
}(e[1])
}),t.addEventListener("scroll",function(){e()
})
}return t
}function _event_getScrollbarSize(){var t={x:0,y:0},e=dttjindo.$(['<div style="',["overflow:scroll","width:100px","height:100px","position:absolute","left:-1000px","border:0","margin:0","padding:0"].join(" !important;"),' !important;">'].join(""));
return document.body.insertBefore(e,document.body.firstChild),t={x:e.offsetWidth-e.scrollWidth,y:e.offsetHeight-e.scrollHeight},document.body.removeChild(e),e=null,_event_getScrollbarSize=function(){return t
},t
}function _ie_check_scroll(t,e){var n=dttjindo._p_._j_ag.match(/(?:MSIE) ([0-9.]+)/);
return(_ie_check_scroll=document.body.componentFromPoint&&n&&8==parseInt(n[1],10)?function(t,e){return !/HTMLGenericElement/.test(t+"")&&/(scrollbar|outside)/.test(t.componentFromPoint(e.clientX,e.clientY))&&t.clientHeight!==t.scrollHeight
}:function(t,e){return/(scrollbar|outside)/.test(t.componentFromPoint(e.clientX,e.clientY))
})(t,e)
}function _event_isScroll(t,e){if(t.componentFromPoint){return _ie_check_scroll(t,e)
}if(dttjindo._p_._JINDO_IS_FF){try{var n=e.originalTarget.localName;
return"thumb"===n||"slider"===n||"scrollcorner"===n||"scrollbarbutton"===n
}catch(i){return !0
}}var o=dttjindo.$Element(t).css("display");
if("inline"===o){return !1
}var r={x:e.offsetX||e.layerX||0,y:e.offsetY||e.layerY||0};
dttjindo._p_._JINDO_IS_WK&&(r.x-=t.clientLeft,r.y-=t.clientTop);
var s=_event_getScrollbarSize(),a={x:[t.clientWidth,t.clientWidth+s.x],y:[t.clientHeight,t.clientHeight+s.y]};
return a.x[0]<=r.x&&r.x<=a.x[1]||a.y[0]<=r.y&&r.y<=a.y[1]
}var dttjindo=window.dttjindo||{};
if(dttjindo._p_={},dttjindo._p_.dttjindoName="dttjindo",window[dttjindo._p_.dttjindoName]){var __old_j=window[dttjindo._p_.dttjindoName];
for(var i in __old_j){dttjindo[i]=__old_j[i]
}}window.__isPolyfillTestMode||polyfillArray(window),Function.prototype.bind||(Function.prototype.bind=function(t){if("function"!=typeof this){throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable")
}var e=Array.prototype.slice.call(arguments,1),n=this,i=function(){},o=function(){return n.apply(i.prototype&&this instanceof i&&t?this:t,e.concat(Array.prototype.slice.call(arguments)))
};
return i.prototype=this.prototype,o.prototype=new i,o
}),window.__isPolyfillTestMode||polyfillTimer(window),dttjindo._p_._j_ag=navigator.userAgent,dttjindo._p_._JINDO_IS_IE=/(MSIE|Trident)/.test(dttjindo._p_._j_ag),dttjindo._p_._JINDO_IS_FF=dttjindo._p_._j_ag.indexOf("Firefox")>-1,dttjindo._p_._JINDO_IS_OP=dttjindo._p_._j_ag.indexOf("Opera")>-1,dttjindo._p_._JINDO_IS_SP=dttjindo._p_._j_ag.indexOf("Safari")>-1,dttjindo._p_._JINDO_IS_SF=dttjindo._p_._j_ag.indexOf("Apple")>-1,dttjindo._p_._JINDO_IS_CH=dttjindo._p_._j_ag.indexOf("Chrome")>-1,dttjindo._p_._JINDO_IS_WK=dttjindo._p_._j_ag.indexOf("WebKit")>-1,dttjindo._p_._JINDO_IS_MO=/(iPad|Mobile|Android|Nokia|webOS|BlackBerry|Opera Mini)/.test(dttjindo._p_._j_ag),dttjindo._p_.trim=function(t){var e="\\s|\\t|"+String.fromCharCode(12288),n=new RegExp(["^(?:",")+|(?:",")+$"].join(e),"g");
return t.replace(n,"")
},dttjindo.$Jindo=function(){var t=arguments.callee,e=t._cached;
return e?e:this instanceof t?(e||(t._cached=this),void (this.version="2.10.0")):new t
},dttjindo.$Jindo.VERSION="2.10.0",dttjindo._p_.addExtension=function(t,e,n){dttjindo[t][e]?dttjindo.$Jindo._warn(t+"."+e+" was overwrite."):/^x/.test(e)?dttjindo[t][e]=n:dttjindo.$Jindo._warn("The Extension Method("+t+"."+e+") must be used with x prefix.")
},dttjindo.$Jindo.compatible=function(){return !1
},dttjindo.$Jindo.mixin=function(t,e){g_checkVarType(arguments,{obj:["oDestination:Hash+","oSource:Hash+"]},"<static> $Jindo#mixin");
var n={};
for(var i in t){n[i]=t[i]
}for(i in e){e.hasOwnProperty(i)&&!dttjindo.$Jindo.isHash(e[i])&&(n[i]=e[i])
}return n
},dttjindo._p_._objToString=Object.prototype.toString,dttjindo.$Error=function(t,e){this.message="	method : "+e+"\n	message : "+t,this.type="Jindo Custom Error",this.toString=function(){return this.message+"\n	"+this.type
}
},dttjindo.$Except={CANNOT_USE_OPTION:"해당 옵션은 사용할 수 없습니다.",CANNOT_USE_HEADER:"type이 jsonp 또는 데스크탑 환경에서 CORS 호출시 XDomainRequest(IE8,9) 객체가 사용되는 경우 header메서드는 사용할 수 없습니다.",PARSE_ERROR:"파싱중 에러가 발생했습니다.",NOT_FOUND_ARGUMENT:"파라미터가 없습니다.",NOT_STANDARD_QUERY:"css셀렉터가 정상적이지 않습니다.",INVALID_DATE:"날짜 포멧이 아닙니다.",REQUIRE_AJAX:"가 없습니다.",NOT_FOUND_ELEMENT:"엘리먼트가 없습니다.",HAS_FUNCTION_FOR_GROUP:"그룹으로 지우지 않는 경우 detach할 함수가 있어야 합니다.",NONE_ELEMENT:"에 해당하는 엘리먼트가 없습니다.",NOT_SUPPORT_SELECTOR:"는 지원하지 않는 selector입니다.",NOT_SUPPORT_CORS:"현재 브라우저는 CORS를 지원하지 않습니다.",NOT_SUPPORT_METHOD:"desktop에서 지원하지 않는 메서드 입니다.",JSON_MUST_HAVE_ARRAY_HASH:"get메서드는 json타입이 hash나 array타입만 가능합니다.",MUST_APPEND_DOM:"document에 붙지 않은 엘리먼트를 기준 엘리먼트로 사용할 수 없습니다.",NOT_USE_CSS:"는 css를 사용 할수 없습니다.",NOT_WORK_DOMREADY:"domready이벤트는 iframe안에서 사용할 수 없습니다.",CANNOT_SET_OBJ_PROPERTY:"속성은 오브젝트입니다.\n클래스 속성이 오브젝트이면 모든 인스턴스가 공유하기 때문에 위험합니다.",NOT_FOUND_HANDLEBARS:"{{not_found_handlebars}}",INVALID_MEDIA_QUERY:"{{invalid_media_query}}"},dttjindo._p_._toArray=function(t){return Array.prototype.slice.apply(t)
};
try{Array.prototype.slice.apply(document.documentElement.childNodes)
}catch(e){dttjindo._p_._toArray=function(t){for(var e=[],n=t.length,i=0;
n>i;
i++){e.push(t[i])
}return e
}
}dttjindo.$Jindo.isNumeric=function(t){return !isNaN(parseFloat(t))&&!dttjindo.$Jindo.isArray(t)&&isFinite(t)
},function(){var t={Element:1,Document:9};
for(var e in t){dttjindo.$Jindo["is"+e]=function(t,e){return function(n){return new RegExp(t).test(dttjindo._p_._objToString.call(n))?!0:"[object Object]"==dttjindo._p_._objToString.call(n)&&null!==n&&void 0!==n&&n.nodeType==e?!0:!1
}
}(e,t[e])
}for(var n=["Function","Array","String","Boolean","Date","RegExp"],e=0,i=n.length;
i>e;
e++){dttjindo.$Jindo["is"+n[e]]=function(t){return function(e){return dttjindo._p_._objToString.call(e)=="[object "+t+"]"
}
}(n[e])
}}(),dttjindo.$Jindo.isNode=function(t){try{return !(!t||!t.nodeType)
}catch(e){return !1
}},dttjindo.$Jindo.isHash=function(t){return"[object Object]"==dttjindo._p_._objToString.call(t)&&null!==t&&void 0!==t&&!t.nodeType&&!dttjindo.$Jindo.isWindow(t)
},dttjindo.$Jindo.isNull=function(t){return null===t
},dttjindo.$Jindo.isUndefined=function(t){return void 0===t
},dttjindo.$Jindo.isWindow=function(t){return t&&(t==window.top||t==t.window)
},dttjindo.$Jindo.Break=function(){if(!(this instanceof arguments.callee)){throw new arguments.callee
}},dttjindo.$Jindo.Continue=function(){if(!(this instanceof arguments.callee)){throw new arguments.callee
}},dttjindo.$Jindo._F=function(t){return t
},dttjindo.$Jindo._warn=function(t){window.console&&(console.warn&&console.warn(t),!0)
},dttjindo.$Jindo._maxWarn=function(t,e,n){t>e&&dttjindo.$Jindo._warn("추가적인 파라미터가 있습니다. : "+n)
},dttjindo.$Jindo.checkVarType=function(t,e,n){var n=n||t.callee.name||"anonymous",i=dttjindo.$Jindo,o=i.compatible(),r=t.callee["_checkVarType_"+o];
if(r){return r(t,e,n)
}var s=[];
s.push("var nArgsLen = aArgs.length;"),s.push("var $Jindo = "+dttjindo._p_.dttjindoName+".$Jindo;"),o&&(s.push("var nMatchScore;"),s.push("var nMaxMatchScore = -1;"),s.push("var oFinalRet = null;"));
var a=[],l=0;
for(var d in e){e.hasOwnProperty(d)&&(l=Math.max(e[d].length,l))
}for(var d in e){if(e.hasOwnProperty(d)){var h=e[d],c=h.length,u=[],p=[],f=[];
o||p.push(l>c?"nArgsLen === "+c:"nArgsLen >= "+c),f.push("var oRet = new $Jindo._varTypeRetObj();");
for(var _=c,m=0;
c>m;
++m){/^([^:]+):([^\+]*)(\+?)$/.test(h[m]);
var g=RegExp.$1,v=RegExp.$2,y=RegExp.$3?!0:!1;
if("Variant"===v){o&&p.push(m+" in aArgs"),f.push('oRet["'+g+'"] = aArgs['+m+"];"),_--
}else{if(i._varTypeList[v]){var E="tmp"+v+"_"+m;
u.push("var "+E+" = $Jindo._varTypeList."+v+"(aArgs["+m+"], "+y+");"),p.push(E+" !== "+dttjindo._p_.dttjindoName+".$Jindo.VARTYPE_NOT_MATCHED"),f.push('oRet["'+g+'"] = '+E+";")
}else{if(/^\$/.test(v)&&dttjindo[v]){var j,T="";
y&&(j={$Fn:"Function",$S:"String",$A:"Array",$H:"Hash",$ElementList:"Array"}[v]||v.replace(/^\$/,""),dttjindo.$Jindo["is"+j]&&(T=" || $Jindo.is"+j+"(vNativeArg_"+m+")")),p.push("(aArgs["+m+"] instanceof "+dttjindo._p_.dttjindoName+"."+v+T+")"),f.push('oRet["'+g+'"] = '+dttjindo._p_.dttjindoName+"."+v+"(aArgs["+m+"]);")
}else{if(!dttjindo.$Jindo["is"+v]){throw new Error("VarType("+v+") Not Found")
}var b,T="";
y&&(b={Function:"$Fn",String:"$S",Array:"$A",Hash:"$H"}[v]||"$"+v,dttjindo[b]&&(T=" || aArgs["+m+"] instanceof "+dttjindo._p_.dttjindoName+"."+b)),p.push("($Jindo.is"+v+"(aArgs["+m+"])"+T+")"),f.push('oRet["'+g+'"] = vNativeArg_'+m+";")
}}}}f.push('oRet.__type = "'+d+'";'),o?(f.push("nMatchScore = "+(1000*c+10*_)+" + (nArgsLen === "+c+" ? 1 : 0);"),f.push("if (nMatchScore > nMaxMatchScore) {"),f.push("    nMaxMatchScore = nMatchScore;"),f.push("    oFinalRet = oRet;"),f.push("}")):f.push("return oRet;"),a.push(u.join("\n")),p.length&&a.push("if ("+p.join(" && ")+") {"),a.push(f.join("\n")),p.length&&a.push("}")
}}s.push(" $Jindo._maxWarn(nArgsLen,"+l+',"'+n+'");');
for(var m=0;
l>m;
++m){var S="aArgs["+m+"]";
s.push(["var vNativeArg_",m," = ",S," && ",S,".$value ? ",S,".$value() : ",S+";"].join(""))
}return o||a.push("$Jindo.checkVarType._throwException(aArgs, oRules, sFuncName);"),a.push("return oFinalRet;"),t.callee["_checkVarType_"+o]=r=new Function("aArgs,oRules,sFuncName",s.join("\n")+a.join("\n")),r(t,e,n)
};
var g_checkVarType=dttjindo.$Jindo.checkVarType;
dttjindo.$Jindo._varTypeRetObj=function(){},dttjindo.$Jindo._varTypeRetObj.prototype.toString=function(){return this.__type
},dttjindo.$Jindo.checkVarType._throwException=function(t,e,n){for(var i=function(t){for(var e in dttjindo){if(dttjindo.hasOwnProperty(e)){var n=dttjindo[e];
if("function"!=typeof n){continue
}if(t instanceof n){return e
}}}var i=dttjindo.$Jindo;
for(var e in i){if(i.hasOwnProperty(e)){if(!/^is(.+)$/.test(e)){continue
}var o=RegExp.$1,r=i[e];
if(r(t)){return o
}}}return"Unknown"
},o=function(t,e,n){var i=["잘못된 파라미터입니다.",""];
if(t&&(i.push("호출한 형태 :"),i.push("	"+t),i.push("")),e.length){i.push("사용 가능한 형태 :");
for(var o=0,r=e.length;
r>o;
o++){i.push("	"+e[o])
}i.push("")
}return n&&(i.push("매뉴얼 페이지 :"),i.push("	"+n),i.push("")),i.unshift(),i.join("\n")
},r=[],s=0,a=t.length;
a>s;
++s){try{r.push(i(t[s]))
}catch(l){r.push("Unknown")
}}var d=n+"("+r.join(", ")+")",h=[];
for(var c in e){if(e.hasOwnProperty(c)){var u=e[c];
h.push(""+n+"("+u.join(", ").replace(/(^|,\s)[^:]+:/g,"$1")+")")
}}var p;
throw /(\$\w+)#(\w+)?/.test(n)&&(p="http://dttjindo.dev.naver.com/docs/dttjindo/2.10.0/desktop/ko/classes/dttjindo."+encodeURIComponent(RegExp.$1)+".html#method_"+RegExp.$2),new TypeError(o(d,h,p))
};
var _getElementById=function(t,e){docEle=t.documentElement;
var n="dttjindo"+(new Date).getTime(),i=t.createElement("div");
return i.style.display="none","undefined"!=typeof MSApp?MSApp.execUnsafeLocalFunction(function(){i.innerHTML="<input type='hidden' name='"+n+"'/>"
}):i.innerHTML="<input type='hidden' name='"+n+"'/>",docEle.insertBefore(i,docEle.firstChild),_getElementById=t.getElementById(n)?function(t,e){var n=t.getElementById(e);
if(null==n){return n
}if(n.attributes.id&&n.attributes.id.value==e){return n
}for(var i=t.all[e],o=1;
o<i.length;
o++){if(i[o].attributes.id&&i[o].attributes.id.value==e){return i[o]
}}}:function(t,e){return t.getElementById(e)
},docEle.removeChild(i),_getElementById(t,e)
};
dttjindo.$Jindo.varType=function(){var t=this.checkVarType(arguments,{s4str:["sTypeName:String+","fpFunc:Function+"],s4obj:["oTypeLists:Hash+"],g:["sTypeName:String+"]}),e=dttjindo.$Jindo._denyTypeListComma;
switch(t+""){case"s4str":var n=","+t.sTypeName.replace(/\+$/,"")+",";
if(e.indexOf(n)>-1){throw new Error("Not allowed Variable Type")
}return this._varTypeList[t.sTypeName]=t.fpFunc,this;
case"s4obj":var i=t.oTypeLists;
for(var o in i){i.hasOwnProperty(o)&&(fpFunc=i[o],arguments.callee.call(this,o,fpFunc))
}return this;
case"g":return this._varTypeList[t.sTypeName]
}},dttjindo.$Jindo.VARTYPE_NOT_MATCHED={},function(){var t=dttjindo.$Jindo._varTypeList={},e=dttjindo.$Jindo,n=e.VARTYPE_NOT_MATCHED;
t.Numeric=function(t){return e.isNumeric(t)?1*t:n
},t.Hash=function(t,i){return i&&dttjindo.$H&&t instanceof dttjindo.$H?t.$value():e.isHash(t)?t:n
},t.$Class=function(t){return e.isFunction(t)&&t.extend?t:n
};
var i=[];
for(var o in e){e.hasOwnProperty(o)&&/^is(.+)$/.test(o)&&i.push(RegExp.$1)
}e._denyTypeListComma=i.join(","),e.varType("ArrayStyle",function(t){return t&&(/(Arguments|NodeList|HTMLCollection|global|Window)/.test(dttjindo._p_._objToString.call(t))||/Object/.test(dttjindo._p_._objToString.call(t))&&e.isNumeric(t.length))?dttjindo._p_._toArray(t):n
}),e.varType("Form",function(t,e){return t?(e&&t.$value&&(t=t.$value()),t.tagName&&"FORM"==t.tagName.toUpperCase()?t:n):n
})
}(),dttjindo._p_._createEle=function(t,e,n,i){var o="R"+(new Date).getTime()+parseInt(100000*Math.random(),10),r=n.createElement("div");
switch(t){case"select":case"table":case"dl":case"ul":case"fieldset":case"audio":r.innerHTML="<"+t+' class="'+o+'">'+e+"</"+t+">";
break;
case"thead":case"tbody":case"col":r.innerHTML="<table><"+t+' class="'+o+'">'+e+"</"+t+"></table>";
break;
case"tr":r.innerHTML='<table><tbody><tr class="'+o+'">'+e+"</tr></tbody></table>";
break;
default:r.innerHTML='<div class="'+o+'">'+e+"</div>"
}var s;
for(s=r.firstChild;
s&&s.className!=o;
s=s.firstChild){}return i?s:s.childNodes
},dttjindo.$=function(){if(!arguments.length){throw new dttjindo.$Error(dttjindo.$Except.NOT_FOUND_ARGUMENT,"$")
}var t=[],e=arguments,n=e.length,i=e[n-1],o=document,r=null,s=/^<([a-z]+|h[1-5])>$/i,a=/^<([a-z]+|h[1-5])(\s+[^>]+)?>/i;
n>1&&"string"!=typeof i&&i.body&&(e=Array.prototype.slice.apply(e,[0,n-1]),o=i);
for(var l=0;
n>l;
l++){if(r=e[l]&&e[l].$value?e[l].$value():e[l],dttjindo.$Jindo.isString(r)||dttjindo.$Jindo.isNumeric(r)){if(r+="",r=r.replace(/^\s+|\s+$/g,""),r=r.replace(/<!--(.|\n)*?-->/g,""),r.indexOf("<")>-1){if(s.test(r)){r=o.createElement(RegExp.$1)
}else{if(a.test(r)){for(var d={thead:"table",tbody:"table",tr:"tbody",td:"tr",dt:"dl",dd:"dl",li:"ul",legend:"fieldset",option:"select",source:"audio"},h=RegExp.$1.toLowerCase(),c=dttjindo._p_._createEle(d[h],r,o),l=0,u=c.length;
u>l;
l++){t.push(c[l])
}r=null
}}}else{r=_getElementById(o,r)
}}r&&r.nodeType&&(t[t.length]=r)
}return t.length>1?t:t[0]||null
},dttjindo.$Class=function(oDef){function typeClass(){for(var t=this,a=[],superFunc=function(m,superClass,func){if("constructor"!=m&&func.toString().indexOf("$super")>-1){var funcArg=func.toString().replace(/function\s*\(([^\)]*)[\w\W]*/g,"$1").split(","),funcStr=func.toString().replace(/function[^{]*{/,"").replace(/(\w|\.?)(this\.\$super|this)/g,function(t,e,n){return e?t:n+".$super"
});
funcStr=funcStr.substr(0,funcStr.length-1),func=superClass[m]=eval("false||function("+funcArg.join(",")+"){"+funcStr+"}")
}return function(){var t=this.$this[m],e=this.$this,n=(e[m]=func).apply(e,arguments);
return e[m]=t,n
}
};
void 0!==t._$superClass;
){t.$super=new Object,t.$super.$this=this;
for(var x in t._$superClass.prototype){t._$superClass.prototype.hasOwnProperty(x)&&(void 0===this[x]&&"$init"!=x&&(this[x]=t._$superClass.prototype[x]),t.$super[x]="constructor"!=x&&"_$superClass"!=x&&"function"==typeof t._$superClass.prototype[x]?superFunc(x,t._$superClass,t._$superClass.prototype[x]):t._$superClass.prototype[x])
}"function"==typeof t.$super.$init&&(a[a.length]=t),t=t.$super
}for(var i=a.length-1;
i>-1;
i--){a[i].$super.$init.apply(a[i].$super,arguments)
}if(this.$autoBind){for(var i in this){/^\_/.test(i)&&(this[i]=dttjindo.$Fn(this[i],this).bind())
}}"function"==typeof this.$init&&this.$init.apply(this,arguments)
}var oArgs=g_checkVarType(arguments,{"4obj":["oDef:Hash+"]},"$Class");
if(void 0!==oDef.$static){var i=0,x;
for(x in oDef){oDef.hasOwnProperty(x)&&("$static"==x||i++)
}for(x in oDef.$static){oDef.$static.hasOwnProperty(x)&&(typeClass[x]=oDef.$static[x])
}if(!i){return oDef.$static
}delete oDef.$static
}return typeClass.prototype=oDef,typeClass.prototype.constructor=typeClass,typeClass.prototype.kindOf=function(t){return dttjindo._p_._kindOf(this.constructor.prototype,t.prototype)
},typeClass.extend=dttjindo.$Class.extend,typeClass
},dttjindo._p_._kindOf=function(t,e){return t!=e?t._$superClass?dttjindo._p_._kindOf(t._$superClass.prototype,e):!1:!0
},dttjindo.$Class.extend=function(t){g_checkVarType(arguments,{"4obj":["oDef:$Class"]},"<static> $Class#extend"),this.prototype._$superClass=t;
var e=t.prototype;
for(var n in e){dttjindo.$Jindo.isHash(e[n])&&dttjindo.$Jindo._warn(dttjindo.$Except.CANNOT_SET_OBJ_PROPERTY)
}for(var i in t){if(t.hasOwnProperty(i)){if("prototype"==i){continue
}this[i]=t[i]
}}return this
},dttjindo.VERSION="2.10.0",dttjindo.TYPE="desktop",dttjindo.$$=dttjindo.cssquery=function(){function GEBID(t,e,n){if(9===t.nodeType||t.parentNode&&t.parentNode.tagName){return _getElementById(n,e)
}for(var i=t.getElementsByTagName("*"),o=0,r=i.length;
r>o;
o++){if(i[o].id===e){return i[o]
}}}function getElementsByClass(t,e,n){var o=new Array;
null==e&&(e=document),null==n&&(n="*");
var r=e.getElementsByTagName(n),s=r.length,a=new RegExp("(^|\\s)"+t+"(\\s|$)");
for(i=0,j=0;
s>i;
i++){a.test(r[i].className)&&(o[j]=r[i],j++)
}return o
}function _isNonStandardQueryButNotException(t){return/\[\s*(?:checked|selected|disabled)/.test(t)
}function _commaRevise(t,e){return t.replace(/\,/gi,e)
}function _startCombinator(t){return/^[~>+]/.test(t)
}function _addQueryId(t,e){var n,i;
return/^\w+$/.test(t.id)?n="#"+t.id:(i="C"+(new Date).getTime()+Math.floor(1000000*Math.random()),t.setAttribute(e,i),n="["+e+"="+i+"]"),n
}function _getSelectorMethod(t,e){var n={method:null,query:null};
return/^\s*[a-z]+\s*$/i.test(t)?n.method="getElementsByTagName":/^\s*([#\.])([\w\-]+)\s*$/i.test(t)&&(n.method="#"==RegExp.$1?"getElementById":"getElementsByClassName",n.query=RegExp.$2),(!document[n.method]||"#"==RegExp.$1&&!e)&&(n.method=n.query=null),n
}var sVersion="3.0",debugOption={repeat:1},UID=1,cost=0,validUID={},bSupportByClassName=document.getElementsByClassName?!0:!1,safeHTML=!1,getUID4HTML=function(t){var e=safeHTML?t._cssquery_UID&&t._cssquery_UID[0]:t._cssquery_UID;
return e&&validUID[e]==t?e:(e=UID++,t._cssquery_UID=safeHTML?[e]:e,validUID[e]=t,e)
},getUID4XML=function(t){var e=t.getAttribute("_cssquery_UID"),n=safeHTML?e&&e[0]:e;
return n||(n=UID++,t.setAttribute("_cssquery_UID",safeHTML?[n]:n)),n
},getUID=getUID4HTML,uniqid=function(t){return(t||"")+(new Date).getTime()+parseInt(100000000*Math.random(),10)
},getChilds_dontShrink=function(t,e,n){return bSupportByClassName&&n?t.getElementsByClassName?t.getElementsByClassName(n):t.querySelectorAll?t.querySelectorAll(n):getElementsByClass(n,t,e):"*"==e?t.all||t.getElementsByTagName(e):t.getElementsByTagName(e)
},clearKeys=function(){backupKeys._keys={}
},oDocument_dontShrink=document,bXMLDocument=!1,backupKeys=function(t){var e=backupKeys._keys;
t=t.replace(/'(\\'|[^'])*'/g,function(t){var n=uniqid("QUOT");
return e[n]=t,n
}),t=t.replace(/"(\\"|[^"])*"/g,function(t){var n=uniqid("QUOT");
return e[n]=t,n
}),t=t.replace(/\[(.*?)\]/g,function(t,n){if(0==n.indexOf("ATTR")){return t
}var i="["+uniqid("ATTR")+"]";
return e[i]=t,i
});
var n;
do{n=!1,t=t.replace(/\(((\\\)|[^)|^(])*)\)/g,function(t,i){if(0==i.indexOf("BRCE")){return t
}var o="_"+uniqid("BRCE");
return e[o]=t,n=!0,o
})
}while(n);
return t
},restoreKeys=function(t,e){var n,i=backupKeys._keys,o=e?/(\[ATTR[0-9]+\])/g:/(QUOT[0-9]+|\[ATTR[0-9]+\])/g;
do{n=!1,t=t.replace(o,function(t){return i[t]?(n=!0,i[t]):t
})
}while(n);
return t=t.replace(/_BRCE[0-9]+/g,function(t){return i[t]?i[t]:t
})
},restoreString=function(sKey){var oKeys=backupKeys._keys,sOrg=oKeys[sKey];
return sOrg?eval(sOrg):sKey
},wrapQuot=function(t){return'"'+t.replace(/"/g,'\\"')+'"'
},getStyleKey=function(t){return/^@/.test(t)?t.substr(1):null
},getCSS=function(t,e){return t.currentStyle?("float"==e&&(e="styleFloat"),t.currentStyle[e]||t.style[e]):window.getComputedStyle?oDocument_dontShrink.defaultView.getComputedStyle(t,null).getPropertyValue(e.replace(/([A-Z])/g,"-$1").toLowerCase())||t.style[e]:("float"==e&&dttjindo._p_._JINDO_IS_IE&&(e="styleFloat"),t.style[e])
},oCamels={accesskey:"accessKey",cellspacing:"cellSpacing",cellpadding:"cellPadding","class":"className",colspan:"colSpan","for":"htmlFor",maxlength:"maxLength",readonly:"readOnly",rowspan:"rowSpan",tabindex:"tabIndex",valign:"vAlign"},getDefineCode=function(t){var e,n;
if(bXMLDocument){e='oEl.getAttribute("'+t+'",2)'
}else{if(n=getStyleKey(t)){t="$$"+n,e='getCSS(oEl, "'+n+'")'
}else{switch(t){case"checked":e='oEl.checked + ""';
break;
case"disabled":e='oEl.disabled + ""';
break;
case"enabled":e='!oEl.disabled + ""';
break;
case"readonly":e='oEl.readOnly + ""';
break;
case"selected":e='oEl.selected + ""';
break;
default:e=oCamels[t]?"oEl."+oCamels[t]:'oEl.getAttribute("'+t+'",2)'
}}}return"_"+t.replace(/\-/g,"_")+" = "+e
},getReturnCode=function(t){var e=getStyleKey(t.key),n="_"+(e?"$$"+e:t.key);
n=n.replace(/\-/g,"_");
var i=t.val?wrapQuot(t.val):"";
switch(t.op){case"~=":return"("+n+' && (" " + '+n+' + " ").indexOf(" " + '+i+' + " ") > -1)';
case"^=":return"("+n+" && "+n+".indexOf("+i+") == 0)";
case"$=":return"("+n+" && "+n+".substr("+n+".length - "+t.val.length+") == "+i+")";
case"*=":return"("+n+" && "+n+".indexOf("+i+") > -1)";
case"!=":return"("+n+" != "+i+")";
case"=":return"("+n+" == "+i+")"
}return"("+n+")"
},getNodeIndex=function(t){var e=getUID(t),n=oNodeIndexes[e]||0;
if(0==n){for(var i=(t.parentNode||t._IE5_parentNode).firstChild;
i;
i=i.nextSibling){1==i.nodeType&&(n++,setNodeIndex(i,n))
}n=oNodeIndexes[e]
}return n
},oNodeIndexes={},setNodeIndex=function(t,e){var n=getUID(t);
oNodeIndexes[n]=e
},unsetNodeIndexes=function(){setTimeout(function(){oNodeIndexes={}
},0)
},oPseudoes_dontShrink={contains:function(t,e){return(t.innerText||t.textContent||"").indexOf(e)>-1
},"last-child":function(t){for(t=t.nextSibling;
t;
t=t.nextSibling){if(1==t.nodeType){return !1
}}return !0
},"first-child":function(t){for(t=t.previousSibling;
t;
t=t.previousSibling){if(1==t.nodeType){return !1
}}return !0
},"only-child":function(t){for(var e=0,n=(t.parentNode||t._IE5_parentNode).firstChild;
n;
n=n.nextSibling){if(1==n.nodeType&&e++,e>1){return !1
}}return e?!0:!1
},empty:function(t){return t.firstChild?!1:!0
},"nth-child":function(t,e,n){var i=getNodeIndex(t);
return i%e==n
},"nth-last-child":function(t,e,n){for(var i=(t.parentNode||t._IE5_parentNode).lastChild;
i&&1!=i.nodeType;
i=i.previousSibling){}var o=getNodeIndex(i),r=getNodeIndex(t),s=o-r+1;
return s%e==n
},checked:function(t){return !!t.checked
},selected:function(t){return !!t.selected
},enabled:function(t){return !t.disabled
},disabled:function(t){return !!t.disabled
}},getExpression=function(t){var e,n,i={defines:"",returns:"true"},t=restoreKeys(t,!0),o=[],r=[],s=[],t=t.replace(/:([\w-]+)(\(([^)]*)\))?/g,function(t,e,n,o){switch(e){case"not":var r=getExpression(o),a=r.defines,l=r.returnsID+r.returnsTAG+r.returns;
s.push("!(function() { "+a+" return "+l+" })()");
break;
case"nth-child":case"nth-last-child":o=restoreString(o),"even"==o?o="2n":"odd"==o&&(o="2n+1");
var d,h,c=o.match(/([0-9]*)n([+-][0-9]+)*/);
c?(d=c[1]||1,h=c[2]||0):(d=1/0,h=parseInt(o,10)),s.push("oPseudoes_dontShrink["+wrapQuot(e)+"](oEl, "+d+", "+h+")");
break;
case"first-of-type":case"last-of-type":e="first-of-type"==e?"nth-of-type":"nth-last-of-type",o=1;
case"nth-of-type":case"nth-last-of-type":o=restoreString(o),"even"==o?o="2n":"odd"==o&&(o="2n+1");
var d,h;
/([0-9]*)n([+-][0-9]+)*/.test(o)?(d=parseInt(RegExp.$1,10)||1,h=parseInt(RegExp.$2,20)||0):(d=1/0,h=parseInt(o,10)),i.nth=[d,h,e];
break;
default:o=o?restoreString(o):"",s.push("oPseudoes_dontShrink["+wrapQuot(e)+"](oEl, "+wrapQuot(o)+")")
}return""
}),t=t.replace(/\[(@?[\w-]+)(([!^~$*]?=)([^\]]*))?\]/g,function(t,e,n,i,r){return e=restoreString(e),r=restoreString(r),("checked"==e||"disabled"==e||"enabled"==e||"readonly"==e||"selected"==e)&&(r||(i="=",r="true")),o.push({key:e,op:i,val:r}),""
}),a=null,t=t.replace(/\.([\w-]+)/g,function(t,e){return o.push({key:"class",op:"~=",val:e}),a||(a=e),""
}),t=t.replace(/#([\w-]+)/g,function(t,n){return bXMLDocument?o.push({key:"id",op:"=",val:n}):e=n,""
});
n="*"==t?"":t;
for(var l,d={},h=0;
l=o[h];
h++){var c=l.key;
d[c]||r.push(getDefineCode(c)),s.unshift(getReturnCode(l)),d[c]=!0
}return r.length&&(i.defines="var "+r.join(",")+";"),s.length&&(i.returns=s.join("&&")),i.quotID=e?wrapQuot(e):"",i.quotTAG=n?wrapQuot(bXMLDocument?n:n.toUpperCase()):"",bSupportByClassName&&(i.quotCLASS=a?wrapQuot(a):""),i.returnsID=e?"oEl.id == "+i.quotID+" && ":"",i.returnsTAG=n&&"*"!=n?"oEl.tagName == "+i.quotTAG+" && ":"",i
},splitToParts=function(t){var e=[],n=" ",i=t.replace(/(.*?)\s*(!?[+>~ ]|!)\s*/g,function(t,i,o){return i&&e.push({rel:n,body:i}),n=o.replace(/\s+$/g,"")||" ",""
});
return i&&e.push({rel:n,body:i}),e
},isNth_dontShrink=function(t,e,n,i,o){for(var r=0,s=t;
s;
s=s[o]){1!=s.nodeType||e&&e!=s.tagName||r++
}return r%n==i
},compileParts=function(aParts){for(var aPartExprs=[],i=0,oPart;
oPart=aParts[i];
i++){aPartExprs.push(getExpression(oPart.body))
}for(var sFunc="",sPushCode="aRet.push(oEl); if (oOptions.single) { bStop = true; }",i=aParts.length-1,oPart;
oPart=aParts[i];
i--){var oExpr=aPartExprs[i],sPush=(debugOption.callback?"cost++;":"")+oExpr.defines,sReturn="if (bStop) {"+(0==i?"return aRet;":"return;")+"}";
sPush+="true"==oExpr.returns?(sFunc?sFunc+"(oEl);":sPushCode)+sReturn:"if ("+oExpr.returns+") {"+(sFunc?sFunc+"(oEl);":sPushCode)+sReturn+"}";
var sCheckTag="oEl.nodeType != 1";
oExpr.quotTAG&&(sCheckTag="oEl.tagName != "+oExpr.quotTAG);
var sTmpFunc="(function(oBase"+(0==i?", oOptions) { var bStop = false; var aRet = [];":") {");
switch(oExpr.nth&&(sPush="if (isNth_dontShrink(oEl, "+(oExpr.quotTAG?oExpr.quotTAG:"false")+","+oExpr.nth[0]+","+oExpr.nth[1]+',"'+("nth-of-type"==oExpr.nth[2]?"previousSibling":"nextSibling")+'")) {'+sPush+"}"),oPart.rel){case" ":sTmpFunc+=oExpr.quotID?"var oEl = GEBID(oBase,"+oExpr.quotID+",oDocument_dontShrink);var oCandi = oEl;for (; oCandi; oCandi = (oCandi.parentNode || oCandi._IE5_parentNode)) {if (oCandi == oBase) break;}if (!oCandi || "+sCheckTag+") return aRet;"+sPush:"var aCandi = getChilds_dontShrink(oBase, "+(oExpr.quotTAG||'"*"')+", "+(oExpr.quotCLASS||"null")+");for (var i = 0, oEl; oEl = aCandi[i]; i++) {"+(oExpr.quotCLASS?"if ("+sCheckTag+") continue;":"")+sPush+"}";
break;
case">":sTmpFunc+=oExpr.quotID?"var oEl = GEBID(oBase,"+oExpr.quotID+",oDocument_dontShrink);if ((oEl.parentNode || oEl._IE5_parentNode) != oBase || "+sCheckTag+") return aRet;"+sPush:"for (var oEl = oBase.firstChild; oEl; oEl = oEl.nextSibling) {if ("+sCheckTag+") { continue; }"+sPush+"}";
break;
case"+":sTmpFunc+=oExpr.quotID?"var oEl = GEBID(oBase,"+oExpr.quotID+",oDocument_dontShrink);var oPrev;for (oPrev = oEl.previousSibling; oPrev; oPrev = oPrev.previousSibling) { if (oPrev.nodeType == 1) break; }if (!oPrev || oPrev != oBase || "+sCheckTag+") return aRet;"+sPush:"for (var oEl = oBase.nextSibling; oEl; oEl = oEl.nextSibling) { if (oEl.nodeType == 1) break; }if (!oEl || "+sCheckTag+") { return aRet; }"+sPush;
break;
case"~":sTmpFunc+=oExpr.quotID?"var oEl = GEBID(oBase,"+oExpr.quotID+",oDocument_dontShrink);var oCandi = oEl;for (; oCandi; oCandi = oCandi.previousSibling) { if (oCandi == oBase) break; }if (!oCandi || "+sCheckTag+") return aRet;"+sPush:"for (var oEl = oBase.nextSibling; oEl; oEl = oEl.nextSibling) {if ("+sCheckTag+") { continue; }if (!markElement_dontShrink(oEl, "+i+")) { break; }"+sPush+"}";
break;
case"!":sTmpFunc+=oExpr.quotID?"var oEl = GEBID(oBase,"+oExpr.quotID+",oDocument_dontShrink);for (; oBase; oBase = (oBase.parentNode || oBase._IE5_parentNode)) { if (oBase == oEl) break; }if (!oBase || "+sCheckTag+") return aRet;"+sPush:"for (var oEl = (oBase.parentNode || oBase._IE5_parentNode); oEl; oEl = oEl && (oEl.parentNode || oEl._IE5_parentNode)) {if ("+sCheckTag+") { continue; }"+sPush+"}";
break;
case"!>":sTmpFunc+=oExpr.quotID?"var oEl = GEBID(oBase,"+oExpr.quotID+",oDocument_dontShrink);var oRel = (oBase.parentNode || oBase._IE5_parentNode);if (!oRel || oEl != oRel || ("+sCheckTag+")) return aRet;"+sPush:"var oEl = (oBase.parentNode || oBase._IE5_parentNode);if (!oEl || "+sCheckTag+") { return aRet; }"+sPush;
break;
case"!+":sTmpFunc+=oExpr.quotID?"var oEl = GEBID(oBase,"+oExpr.quotID+",oDocument_dontShrink);var oRel;for (oRel = oBase.previousSibling; oRel; oRel = oRel.previousSibling) { if (oRel.nodeType == 1) break; }if (!oRel || oEl != oRel || ("+sCheckTag+")) return aRet;"+sPush:"for (oEl = oBase.previousSibling; oEl; oEl = oEl.previousSibling) { if (oEl.nodeType == 1) break; }if (!oEl || "+sCheckTag+") { return aRet; }"+sPush;
break;
case"!~":sTmpFunc+=oExpr.quotID?"var oEl = GEBID(oBase,"+oExpr.quotID+",oDocument_dontShrink);var oRel;for (oRel = oBase.previousSibling; oRel; oRel = oRel.previousSibling) { if (oRel.nodeType != 1) { continue; }if (oRel == oEl) { break; }}if (!oRel || ("+sCheckTag+")) return aRet;"+sPush:"for (oEl = oBase.previousSibling; oEl; oEl = oEl.previousSibling) {if ("+sCheckTag+") { continue; }if (!markElement_dontShrink(oEl, "+i+")) { break; }"+sPush+"}"
}sTmpFunc+=(0==i?"return aRet;":"")+"})",sFunc=sTmpFunc
}return eval("var fpCompiled = "+sFunc+";"),fpCompiled
},parseQuery=function(t){var e=t,n=arguments.callee,i=n._cache[e];
if(!i){t=backupKeys(t);
var o=splitToParts(t);
i=n._cache[e]=compileParts(o),i.depth=o.length
}return i
};
parseQuery._cache={};
var parseTestQuery=function(sQuery){for(var fpSelf=arguments.callee,aSplitQuery=backupKeys(sQuery).split(/\s*,\s*/),aResult=[],nLen=aSplitQuery.length,aFunc=[],i=0;
nLen>i;
i++){aFunc.push(function(sQuery){var sCacheKey=sQuery,fpFunction=fpSelf._cache[sCacheKey];
if(!fpFunction){sQuery=backupKeys(sQuery);
var oExpr=getExpression(sQuery);
eval("fpFunction = function(oEl) { "+oExpr.defines+"return ("+oExpr.returnsID+oExpr.returnsTAG+oExpr.returns+"); };")
}return fpFunction
}(restoreKeys(aSplitQuery[i])))
}return aFunc
};
parseTestQuery._cache={};
var distinct=function(t){for(var e,n=[],i={},o=0;
e=t[o];
o++){var r=getUID(e);
i[r]||(n.push(e),i[r]=!0)
}return n
},markElement_dontShrink=function(t,e){var n=getUID(t);
return cssquery._marked[e][n]?!1:(cssquery._marked[e][n]=!0,!0)
},getParentElement=function(t){if(!t){return document
}var e;
if(t=t.$value?t.$value():t,dttjindo.$Jindo.isString(t)){try{t=document.getElementById(t)
}catch(n){t=document
}}return e=t.nodeType,1!=e&&9!=e&&10!=e&&11!=e&&(t=t.ownerDocument||t.document),t||t.ownerDocument||t.document
},oResultCache=null,bUseResultCache=!1,bExtremeMode=!1,old_cssquery=function(t,e,n){if(g_checkVarType(arguments,{"4str":["sQuery:String+"],"4var":["sQuery:String+","oParent:Variant"],"4var2":["sQuery:String+","oParent:Variant","oOptions:Variant"]},"cssquery"),e=getParentElement(e),n=n&&n.$value?n.$value():n,"object"==typeof t){var i={};
for(var o in t){t.hasOwnProperty(o)&&(i[o]=arguments.callee(t[o],e,n))
}return i
}cost=0;
for(var r,s=(new Date).getTime(),a=0,l=debugOption.repeat;
l>a;
a++){r=function(t,e,n){if(n?n.oneTimeOffCache||(n.oneTimeOffCache=!1):n={oneTimeOffCache:!1},cssquery.safeHTML(n.oneTimeOffCache),e||(e=document),oDocument_dontShrink=e.ownerDocument||e.document||e,/\bMSIE\s([0-9]+(\.[0-9]+)*);/.test(dttjindo._p_._j_ag)&&parseFloat(RegExp.$1)<6){try{oDocument_dontShrink.location
}catch(i){oDocument_dontShrink=document
}oDocument_dontShrink.firstChild=oDocument_dontShrink.getElementsByTagName("html")[0],oDocument_dontShrink.firstChild._IE5_parentNode=oDocument_dontShrink
}bXMLDocument="undefined"!=typeof XMLDocument?oDocument_dontShrink.constructor===XMLDocument:!oDocument_dontShrink.location,getUID=bXMLDocument?getUID4XML:getUID4HTML,clearKeys();
for(var o=backupKeys(t).split(/\s*,\s*/),r=[],s=o.length,a=0;
s>a;
a++){o[a]=restoreKeys(o[a])
}for(var a=0;
s>a;
a++){var l=o[a],d=null,h=l+(n.single?"_single":""),c=bUseResultCache?oResultCache[h]:null;
if(c){for(var u,p=0;
u=c[p];
p++){if(u.parent==e){d=u.result;
break
}}}if(!d){var f=parseQuery(l);
cssquery._marked=[];
for(var p=0,_=f.depth;
_>p;
p++){cssquery._marked.push({})
}d=distinct(f(e,n)),bUseResultCache&&!n.oneTimeOffCache&&(oResultCache[h] instanceof Array||(oResultCache[h]=[]),oResultCache[h].push({parent:e,result:d}))
}r=r.concat(d)
}return unsetNodeIndexes(),r
}(t,e,n)
}return s=(new Date).getTime()-s,debugOption.callback&&debugOption.callback(t,cost,s),r
},cssquery;
if(document.querySelectorAll){var _div=document.createElement("div");
cssquery=function(t,e,n){var i,o,r,s,a,l,d,h,c=(g_checkVarType(arguments,{"4str":["sQuery:String+"],"4var":["sQuery:String+","oParent:Variant"],"4var2":["sQuery:String+","oParent:Variant","oOptions:Variant"]},"cssquery"),"queryid");
e=getParentElement(e),n=n&&n.$value?n.$value():n;
var u=/\[(.*?)=([\w\d]*)\]/g;
u.test(t)&&(t=t.replace(u,"[$1='$2']")),o=e.nodeType;
try{if(_isNonStandardQueryButNotException(t)){return old_cssquery(t,e,n)
}if(d=(e.tagName||"").toUpperCase(),h=_getSelectorMethod(t,9==o),h.query&&(t=h.query),h=h.method,9!==o&&"HTML"!=d){11===o&&(e=e.cloneNode(!0),l=_div.cloneNode(!0),l.appendChild(e),e=l,l=null),h||(r=!0,a=_addQueryId(e,c),t=_commaRevise(a+" "+t,", "+a+" ")),(_parent=e.parentNode)||"BODY"===d||dttjindo.$Element._contain((e.ownerDocument||e.document).body,e)?h||(s=e,e=_parent):h||(l=_div.cloneNode(!0),s=e,l.appendChild(s),e=l)
}else{if(e=e.ownerDocument||e.document||e,_startCombinator(t)){return[]
}}n&&n.single?h?(i=e[h](t),i=["getElementById"==h?i:i[0]]):i=[e.querySelector(t)]:(h?(i=e[h](t),"getElementById"==h&&(i=i?[i]:[])):i=e.querySelectorAll(t),i=dttjindo._p_._toArray(i))
}catch(p){i=old_cssquery(t,e,n)
}return r&&(s.removeAttribute(c),l=null),i
}
}else{cssquery=old_cssquery
}return cssquery.test=function(t,e){clearKeys();
try{var n=g_checkVarType(arguments,{"4ele":["oEl:Element+","sQuery:String+"],"4doc":["oEl:Document+","sQuery:String+"]},"<static> cssquery#test");
eEl=n.oEl,e=n.sQuery
}catch(i){return !1
}for(var o=parseTestQuery(e),r=0,s=o.length;
s>r;
r++){if(o[r](t)){return !0
}}return !1
},cssquery.useCache=function(t){return void 0!==t&&(bUseResultCache=t,cssquery.clearCache()),bUseResultCache
},cssquery.clearCache=function(){oResultCache={}
},cssquery.getSingle=function(t,e,n){return n=n&&n.$value?n.$value():n,cssquery(t,e,{single:!0,oneTimeOffCache:n?!!n.oneTimeOffCache:!1})[0]||null
},cssquery.xpath=function(t,e){return t=t&&t.$value?t.$value():t,t=t.replace(/\/(\w+)(\[([0-9]+)\])?/g,function(t,e,n,i){return i=i||"1",">"+e+":nth-of-type("+i+")"
}),old_cssquery(t,e)
},cssquery.debug=function(){var t=g_checkVarType(arguments,{"4fun":["fpCallback:Function+"],"4fun2":["fpCallback:Function+","nRepeat:Numeric"]},"<static> cssquery#debug");
debugOption.callback=t.fpCallback,debugOption.repeat=t.nRepeat||1
},cssquery.safeHTML=function(t){return arguments.length>0&&(safeHTML=t&&dttjindo._p_._JINDO_IS_IE),safeHTML||!dttjindo._p_._JINDO_IS_IE
},cssquery.version=sVersion,cssquery.release=function(){dttjindo._p_._JINDO_IS_IE&&(delete validUID,validUID={},bUseResultCache&&cssquery.clearCache())
},cssquery._getCacheInfo=function(){return{uidCache:validUID,eleCache:oResultCache}
},cssquery._resetUID=function(){UID=0
},cssquery.extreme=function(t){0==arguments.length&&(t=!0),bExtremeMode=t
},cssquery
}(),dttjindo.$Agent=function(){var t=arguments.callee,e=t._cached;
return e?e:this instanceof t?(e||(t._cached=this),this._navigator=navigator,void (this._dm=document.documentMode)):new t
},dttjindo.$Agent.prototype.navigator=function(){function t(t,e){return(e||"").indexOf(t)>-1
}var e={},n=-1,i=-1,o=this._navigator.userAgent,r=this._navigator.vendor||"",s=this._dm;
e.getName=function(){var t="";
for(var n in e){"mobile"!==n&&"boolean"==typeof e[n]&&e[n]&&e.hasOwnProperty(n)&&(t=n)
}return t
},e.webkit=t("WebKit",o),e.opera=void 0!==window.opera||t("Opera",o)||t("OPR",o),e.ie=!e.opera&&(t("MSIE",o)||t("Trident",o)),e.chrome=e.webkit&&!e.opera&&t("Chrome",o)||t("CriOS",o),e.safari=e.webkit&&!e.chrome&&!e.opera&&t("Apple",r),e.firefox=t("Firefox",o),e.mozilla=t("Gecko",o)&&!e.safari&&!e.chrome&&!e.firefox&&!e.ie,e.camino=t("Camino",r),e.netscape=t("Netscape",o),e.omniweb=t("OmniWeb",o),e.icab=t("iCab",r),e.konqueror=t("KDE",r),e.mobile=(t("Mobile",o)||t("Android",o)||t("Nokia",o)||t("webOS",o)||t("Opera Mini",o)||t("BlackBerry",o)||t("Windows",o)&&t("PPC",o)||t("Smartphone",o)||t("IEMobile",o))&&!t("iPad",o),e.msafari=(!t("IEMobile",o)&&t("Mobile",o)||t("iPad",o)&&t("Safari",o))&&!e.chrome&&!e.opera&&!e.firefox,e.mopera=t("Opera Mini",o),e.mie=t("PPC",o)||t("Smartphone",o)||t("IEMobile",o);
try{if(e.ie){if(s>0){if(n=s,o.match(/(?:Trident)\/([\d.]+)/)){var a=parseFloat(RegExp.$1,10);
a>3&&(i=a+4)
}else{i=n
}}else{i=n=o.match(/(?:MSIE) ([\d.]+)/)[1]
}}else{e.safari||e.msafari?(n=parseFloat(o.match(/Safari\/([\d.]+)/)[1]),n=100==n?1.1:o.match(/Version\/([\d.]+)/)?RegExp.$1:[1,1.2,-1,1.3,2,3][Math.floor(n/100)]):e.mopera?n=o.match(/(?:Opera\sMini)\/([\d.]+)/)[1]:e.opera?n=o.match(/(?:Version|OPR|Opera)[\/\s]?([\d.]+)(?!.*Version)/)[1]:e.firefox||e.omniweb?n=o.match(/(?:Firefox|OmniWeb)\/([\d.]+)/)[1]:e.mozilla?n=o.match(/rv:([\d.]+)/)[1]:e.icab?n=o.match(/iCab[ \/]([\d.]+)/)[1]:e.chrome&&(n=o.match(/(?:Chrome|CriOS)[ \/]([\d.]+)/)[1])
}e.version=parseFloat(n),e.nativeVersion=parseFloat(i),isNaN(e.version)&&(e.version=-1)
}catch(l){e.version=-1
}return this.navigator=function(){return e
},e
},dttjindo.$Agent.prototype.os=function(){var t={},e=this._navigator.userAgent,n=this._navigator.platform,i=function(t,e){return e.indexOf(t)>-1
},o=null;
return t.getName=function(){var e="";
for(x in t){t[x]===!0&&t.hasOwnProperty(x)&&(e=x)
}return e
},t.win=i("Win",n),t.mac=i("Mac",n),t.linux=i("Linux",n),t.win2000=t.win&&(i("NT 5.0",e)||i("Windows 2000",e)),t.winxp=t.win&&i("NT 5.1",e),t.xpsp2=t.winxp&&i("SV1",e),t.vista=t.win&&i("NT 6.0",e),t.win7=t.win&&i("NT 6.1",e),t.win8=t.win&&i("NT 6.2",e),t.ipad=i("iPad",e),t.iphone=i("iPhone",e)&&!t.ipad,t.android=i("Android",e),t.nokia=i("Nokia",e),t.webos=i("webOS",e),t.blackberry=i("BlackBerry",e),t.mwin=i("PPC",e)||i("Smartphone",e)||i("IEMobile",e)||i("Windows Phone",e),t.ios=t.ipad||t.iphone,t.symbianos=i("SymbianOS",e),t.version=null,t.win?(o=e.match(/Windows NT ([\d|\.]+)/),null!=o&&void 0!=o[1]&&(t.version=o[1])):t.mac?(o=e.match(/Mac OS X ([\d|_]+)/),null!=o&&void 0!=o[1]&&(t.version=String(o[1]).split("_").join("."))):t.android?(o=e.match(/Android ([\d|\.]+)/),null!=o&&void 0!=o[1]&&(t.version=o[1])):t.ios?(o=e.match(/(iPhone )?OS ([\d|_]+)/),null!=o&&void 0!=o[2]&&(t.version=String(o[2]).split("_").join("."))):t.blackberry?(o=e.match(/Version\/([\d|\.]+)/),null==o&&(o=e.match(/BlackBerry\s?\d{4}\/([\d|\.]+)/)),null!=o&&void 0!=o[1]&&(t.version=o[1])):t.symbianos?(o=e.match(/SymbianOS\/(\d+.\w+)/),null!=o&&void 0!=o[1]&&(t.version=o[1])):t.webos?(o=e.match(/webOS\/([\d|\.]+)/),null!=o&&void 0!=o[1]&&(t.version=o[1])):t.mwin&&(o=e.match(/Windows CE ([\d|\.]+)/),null!=o&&void 0!=o[1]&&(t.version=o[1]),!t.version&&(o=e.match(/Windows Phone (OS )?([\d|\.]+)/))&&(t.version=o[2])),this.os=function(){return t
},t
},dttjindo.$Agent.prototype.flash=function(){var t={},e=this._navigator.plugins,n=this._navigator.mimeTypes,i=null;
if(t.installed=!1,t.version=-1,!dttjindo.$Jindo.isUndefined(e)&&e.length){i=e["Shockwave Flash"],i&&(t.installed=!0,i.description&&(t.version=parseFloat(i.description.match(/[0-9.]+/)[0]))),e["Shockwave Flash 2.0"]&&(t.installed=!0,t.version=2)
}else{if(!dttjindo.$Jindo.isUndefined(n)&&n.length){i=n["application/x-shockwave-flash"],t.installed=i&&i.enabledPlugin
}else{try{t.version=parseFloat(new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").match(/(.\d?),/)[1]),t.installed=!0
}catch(o){}}}return this.flash=function(){return t
},this.info=this.flash,t
},dttjindo.$Agent.prototype.silverlight=function(){var t=new Object,e=this._navigator.plugins,n=null;
if(t.installed=!1,t.version=-1,!dttjindo.$Jindo.isUndefined(e)&&e.length){n=e["Silverlight Plug-In"],n&&(t.installed=!0,t.version=parseInt(n.description.split(".")[0],10),"1.0.30226.2"==n.description&&(t.version=2))
}else{try{n=new ActiveXObject("AgControl.AgControl"),t.installed=!0,n.isVersionSupported("3.0")?t.version=3:n.isVersionSupported("2.0")?t.version=2:n.isVersionSupported("1.0")&&(t.version=1)
}catch(i){}}return this.silverlight=function(){return t
},t
},dttjindo.$A=function(t){var e=arguments.callee;
if(t instanceof e){return t
}if(!(this instanceof e)){try{return dttjindo.$Jindo._maxWarn(arguments.length,1,"$A"),new e(t)
}catch(n){if(n instanceof TypeError){return null
}throw n
}}var i=g_checkVarType(arguments,{"4voi":[],"4arr":["aPram:Array+"],"4nul":["oNull:Null"],"4und":["oUndefined:Undefined"],arrt:["aPram:ArrayStyle"]},"$A");
switch(null==i&&(t=[]),i+""){case"arrt":case"4arr":t=i.aPram;
break;
case"4nul":case"4und":case"4voi":t=[]
}this._array=[];
for(var o=0;
o<t.length;
o++){this._array[this._array.length]=t[o]
}},dttjindo.$A.checkVarTypeObj={"4fun":["fCallback:Function+"],"4thi":["fCallback:Function+","oThis:Variant"]},dttjindo.$A.prototype.toString=function(){return this._array.toString()
},dttjindo.$A.prototype.get=function(t){return g_checkVarType(arguments,{"4num":["nIndex:Numeric"]},"$A#get"),this._array[t]
},dttjindo.$A.prototype.set=function(t,e){return g_checkVarType(arguments,{"4num":["nIndex:Numeric","vValue:Variant"]},"$A#set"),this._array[t]=e,this
},dttjindo.$A.prototype.length=function(t){var e=g_checkVarType(arguments,{"4num":[dttjindo.$Jindo._F("nLen:Numeric")],sv:["nLen:Numeric","vValue:Variant"],"4voi":[]},"$A#length");
switch(e+""){case"4num":return this._array.length=e.nLen,this;
case"sv":var n=this._array.length;
this._array.length=e.nLen;
for(var i=n;
t>i;
i++){this._array[i]=e.vValue
}return this;
case"4voi":return this._array.length
}},dttjindo.$A.prototype.has=function(t){return this.indexOf(t)>-1
},dttjindo.$A.prototype.indexOf=function(t){return dttjindo.$A.prototype.indexOf=this._array.indexOf?function(t){return this._array.indexOf(t)
}:function(t){for(var e=0;
e<this._array.length;
e++){if(this._array[e]==t){return e
}}return -1
},this.indexOf(t)
},dttjindo.$A.prototype.$value=function(){return this._array
},dttjindo.$A.prototype.push=function(){return this._array.push.apply(this._array,dttjindo._p_._toArray(arguments))
},dttjindo.$A.prototype.pop=function(){return this._array.pop()
},dttjindo.$A.prototype.shift=function(){return this._array.shift()
},dttjindo.$A.prototype.unshift=function(){return this._array.unshift.apply(this._array,dttjindo._p_._toArray(arguments)),this._array.length
},dttjindo.$A.prototype.forEach=function(){function t(t){return function(e,n){function i(){try{e.apply(n||o,dttjindo._p_._toArray(arguments))
}catch(t){if(!(t instanceof o.constructor.Continue)){throw t
}}}var o=(g_checkVarType(arguments,dttjindo.$A.checkVarTypeObj,"$A#forEach"),this);
return t(this,i),this
}
}return dttjindo.$A.prototype.forEach=t(this._array.forEach?function(t,e){try{t._array.forEach(e)
}catch(n){if(!(n instanceof t.constructor.Break)){throw n
}}}:function(t,e){for(var n=t._array,i=0,o=n.length;
o>i;
i++){try{e(n[i],i,n)
}catch(r){if(r instanceof t.constructor.Break){break
}throw r
}}}),this.forEach.apply(this,dttjindo._p_._toArray(arguments))
},dttjindo.$A.prototype.slice=function(t,e){var n=this._array.slice.call(this._array,t,e);
return dttjindo.$A(n)
},dttjindo.$A.prototype.splice=function(){var t=this._array.splice.apply(this._array,dttjindo._p_._toArray(arguments));
return dttjindo.$A(t)
},dttjindo.$A.prototype.shuffle=function(){return this._array.sort(function(){return Math.random()>Math.random()?1:-1
}),this
},dttjindo.$A.prototype.reverse=function(){return this._array.reverse(),this
},dttjindo.$A.prototype.empty=function(){return this._array.length=0,this
},dttjindo.$A.prototype.concat=function(){var t=[];
if(arguments.length){t=this._array.concat();
for(var e,n=0;
e=arguments[n];
n++){t=t.concat(e instanceof dttjindo.$A?e._array:e)
}return dttjindo.$A(t)
}return this
},dttjindo.$A.prototype.sort=function(t){var e=g_checkVarType(arguments,{"void":[],"4fp":["fpSort:Function+"]},"$A#sort");
return t?this._array.sort(dttjindo.$Fn(e.fpSort,this).bind()):this._array.sort(),this
},dttjindo.$A.Break=dttjindo.$Jindo.Break,dttjindo.$A.Continue=dttjindo.$Jindo.Continue,dttjindo.$A.prototype.map=function(){function t(t){return function(e,n){function i(t){try{r.push(e.apply(n||s,dttjindo._p_._toArray(arguments)))
}catch(i){if(!(i instanceof s.constructor.Continue)){throw i
}r.push(t)
}}var o=g_checkVarType(arguments,dttjindo.$A.checkVarTypeObj,"$A#map");
if(null==o){return this
}var r=[],s=this;
return t(this,i),dttjindo.$A(r)
}
}return dttjindo.$A.prototype.map=t(this._array.map?function(t,e){t.forEach(e)
}:function(t,e){for(var n=t._array,i=0,o=t._array.length;
o>i;
i++){try{e(n[i],i,n)
}catch(r){if(r instanceof t.constructor.Break){break
}throw r
}}}),this.map.apply(this,dttjindo._p_._toArray(arguments))
},dttjindo.$A.prototype.filter=function(){function t(t){return function(e,n){function i(t){try{e.apply(n||s,dttjindo._p_._toArray(arguments))&&r.push(t)
}catch(i){if(!(i instanceof s.constructor.Continue)){throw i
}}}var o=g_checkVarType(arguments,dttjindo.$A.checkVarTypeObj,"$A#filter");
if(null==o){return this
}var r=[],s=this;
return t(this,i),dttjindo.$A(r)
}
}return dttjindo.$A.prototype.filter=t(this._array.filter?function(t,e){try{t.forEach(e)
}catch(n){if(!(n instanceof t.constructor.Break)){throw n
}}}:function(t,e){for(var n=t._array,i=0,o=t._array.length;
o>i;
i++){try{e(n[i],i,n)
}catch(r){if(r instanceof t.constructor.Break){break
}throw r
}}}),this.filter.apply(this,dttjindo._p_._toArray(arguments))
},dttjindo.$A.prototype.every=function(){var t=g_checkVarType,e=dttjindo.$A.checkVarTypeObj;
return dttjindo.$A.prototype.every=this._array.every?function(n,i){return t(arguments,e,"$A#every"),this._array.every(n,i||this)
}:function(n,i){t(arguments,e,"$A#every");
for(var o=!0,r=this._array,s=0,a=r.length;
a>s;
s++){if(n.call(i||this,r[s],s,r)===!1){o=!1;
break
}}return o
},this.every.apply(this,dttjindo._p_._toArray(arguments))
},dttjindo.$A.prototype.some=function(){var t=g_checkVarType,e=dttjindo.$A.checkVarTypeObj;
return dttjindo.$A.prototype.some=this._array.some?function(n,i){return t(arguments,e,"$A#some"),this._array.some(n,i||this)
}:function(n,i){t(arguments,e,"$A#some");
for(var o=!1,r=this._array,s=0,a=r.length;
a>s;
s++){if(n.call(i||this,r[s],s,r)===!0){o=!0;
break
}}return o
},this.some.apply(this,dttjindo._p_._toArray(arguments))
},dttjindo.$A.prototype.refuse=function(){var t=dttjindo.$A(dttjindo._p_._toArray(arguments));
return this.filter(function(e){return !(t.indexOf(e)>-1)
})
},dttjindo.$A.prototype.unique=function(){var t,e,n=this._array,i=[],o=n.length;
for(t=0;
o>t;
t++){for(e=0;
e<i.length&&n[t]!=i[e];
e++){}e>=i.length&&(i[e]=n[t])
}return this._array=i,this
},dttjindo.$H=function(t){var e=arguments.callee;
if(t instanceof e){return t
}if(!(this instanceof e)){try{return dttjindo.$Jindo._maxWarn(arguments.length,1,"$H"),new e(t||{})
}catch(n){if(n instanceof TypeError){return null
}throw n
}}g_checkVarType(arguments,{"4obj":["oObj:Hash+"],"4vod":[]},"$H"),this._table={};
for(var i in t){t.hasOwnProperty(i)&&(this._table[i]=t[i])
}},dttjindo.$H.prototype.$value=function(){return this._table
},dttjindo.$H.prototype.$=function(t,e){var n=g_checkVarType(arguments,{s4var:[dttjindo.$Jindo._F("key:String+"),"value:Variant"],s4var2:["key:Numeric","value:Variant"],g4str:["key:String+"],s4obj:["oObj:Hash+"],g4num:["key:Numeric"]},"$H#$");
switch(n+""){case"s4var":case"s4var2":return this._table[t]=e,this;
case"s4obj":var i=n.oObj;
for(var o in i){i.hasOwnProperty(o)&&(this._table[o]=i[o])
}return this;
default:return this._table[t]
}},dttjindo.$H.prototype.length=function(){var t=0,e=this.__dttjindo_sorted_index;
if(e){return e.length
}for(var n in this._table){if(this._table.hasOwnProperty(n)){if(void 0!==Object.prototype[n]&&Object.prototype[n]===this._table[n]){continue
}t++
}}return t
},dttjindo.$H.prototype.forEach=function(t,e){var n=(g_checkVarType(arguments,{"4fun":["callback:Function+"],"4obj":["callback:Function+","thisObject:Variant"]},"$H#forEach"),this._table),i=this.constructor,o=this.__dttjindo_sorted_index;
if(o){for(var r=0,s=o.length;
s>r;
r++){try{var a=o[r];
t.call(e||this,n[a],a,n)
}catch(l){if(l instanceof i.Break){break
}if(l instanceof i.Continue){continue
}throw l
}}}else{for(var a in n){if(n.hasOwnProperty(a)){if(!n.propertyIsEnumerable(a)){continue
}try{t.call(e||this,n[a],a,n)
}catch(l){if(l instanceof i.Break){break
}if(l instanceof i.Continue){continue
}throw l
}}}}return this
},dttjindo.$H.prototype.filter=function(t,e){var n=(g_checkVarType(arguments,{"4fun":["callback:Function+"],"4obj":["callback:Function+","thisObject:Variant"]},"$H#filter"),dttjindo.$H()),i=this._table,o=this.constructor;
for(var r in i){if(i.hasOwnProperty(r)){if(!i.propertyIsEnumerable(r)){continue
}try{t.call(e||this,i[r],r,i)&&n.add(r,i[r])
}catch(s){if(s instanceof o.Break){break
}if(s instanceof o.Continue){continue
}throw s
}}}return n
},dttjindo.$H.prototype.map=function(t,e){var n=(g_checkVarType(arguments,{"4fun":["callback:Function+"],"4obj":["callback:Function+","thisObject:Variant"]},"$H#map"),dttjindo.$H()),i=this._table,o=this.constructor;
for(var r in i){if(i.hasOwnProperty(r)){if(!i.propertyIsEnumerable(r)){continue
}try{n.add(r,t.call(e||this,i[r],r,i))
}catch(s){if(s instanceof o.Break){break
}if(!(s instanceof o.Continue)){throw s
}n.add(r,i[r])
}}}return n
},dttjindo.$H.prototype.add=function(t,e){var n=(g_checkVarType(arguments,{"4str":["key:String+","value:Variant"],"4num":["key:Numeric","value:Variant"]},"$H#add"),this.__dttjindo_sorted_index);
return n&&void 0==this._table[t]&&this.__dttjindo_sorted_index.push(t),this._table[t]=e,this
},dttjindo.$H.prototype.remove=function(t){if(g_checkVarType(arguments,{"4str":["key:String+"],"4num":["key:Numeric"]},"$H#remove"),void 0===this._table[t]){return null
}var e=this._table[t];
delete this._table[t];
var n=this.__dttjindo_sorted_index;
if(n){for(var i=[],o=0,r=n.length;
r>o;
o++){n[o]!=t&&i.push(n[o])
}this.__dttjindo_sorted_index=i
}return e
},dttjindo.$H.prototype.search=function(t){var e=(g_checkVarType(arguments,{"4str":["value:Variant"]},"$H#search"),!1),n=this._table;
for(var i in n){if(n.hasOwnProperty(i)){if(!n.propertyIsEnumerable(i)){continue
}var o=n[i];
if(o===t){e=i;
break
}}}return e
},dttjindo.$H.prototype.hasKey=function(t){return g_checkVarType(arguments,{"4str":["key:String+"],"4num":["key:Numeric"]},"$H#hasKey"),void 0!==this._table[t]
},dttjindo.$H.prototype.hasValue=function(t){return g_checkVarType(arguments,{"4str":["value:Variant"]},"$H#hasValue"),this.search(t)!==!1
},dttjindo._p_.defaultSort=function(t,e,n){var i=[],o=t.fpSort;
for(var r in e._table){e._table.hasOwnProperty(r)&&!function(t,e){i.push({key:t,val:e})
}(r,e._table[r])
}t+""=="vo"&&(o=function(t,e){return t===e?0:t>e?1:-1
}),i.sort(function(t,i){return o.call(e,t[n],i[n])
});
for(var s=[],a=0,l=i.length;
l>a;
a++){s.push(i[a].key)
}return s
},dttjindo.$H.prototype.sort=function(){var t=g_checkVarType(arguments,{vo:[],"4fp":["fpSort:Function+"]},"$H#sort");
return this.__dttjindo_sorted_index=dttjindo._p_.defaultSort(t,this,"val"),this
},dttjindo.$H.prototype.ksort=function(){var t=g_checkVarType(arguments,{vo:[],"4fp":["fpSort:Function+"]},"$H#ksort");
return this.__dttjindo_sorted_index=dttjindo._p_.defaultSort(t,this,"key"),this
},dttjindo.$H.prototype.keys=function(){var t=this.__dttjindo_sorted_index;
if(!t){t=[];
for(var e in this._table){this._table.hasOwnProperty(e)&&t.push(e)
}}return t
},dttjindo.$H.prototype.values=function(){var t=[];
for(var e in this._table){this._table.hasOwnProperty(e)&&(t[t.length]=this._table[e])
}return t
},dttjindo.$H.prototype.toQueryString=function(){var t=[],e=null;
for(var n in this._table){if(this._table.hasOwnProperty(n)){if(e=this._table[n],dttjindo.$Jindo.isArray(e)){for(i=0;
i<e.length;
i++){t[t.length]=encodeURIComponent(n)+"[]="+encodeURIComponent(e[i]+"")
}}else{t[t.length]=encodeURIComponent(n)+"="+encodeURIComponent(this._table[n]+"")
}}}return t.join("&")
},dttjindo.$H.prototype.empty=function(){return this._table={},delete this.__dttjindo_sorted_index,this
},dttjindo.$H.Break=dttjindo.$Jindo.Break,dttjindo.$H.Continue=dttjindo.$Jindo.Continue,dttjindo.$Fn=function(func,thisObject){var cl=arguments.callee;
if(func instanceof cl){return func
}if(!(this instanceof cl)){try{return dttjindo.$Jindo._maxWarn(arguments.length,2,"$Fn"),new cl(func,thisObject)
}catch(e){if(e instanceof TypeError){return null
}throw e
}}var oArgs=g_checkVarType(arguments,{"4fun":["func:Function+"],"4fun2":["func:Function+","thisObject:Variant"],"4str":["func:String+","thisObject:String+"]},"$Fn");
switch(this._tmpElm=null,this._key=null,oArgs+""){case"4str":this._func=eval("false||function("+func+"){"+thisObject+"}");
break;
case"4fun":case"4fun2":this._func=func,this._this=thisObject
}},dttjindo.$Fn._commonPram=function(t,e){return g_checkVarType(t,{"4ele":["eElement:Element+","sEvent:String+"],"4ele2":["eElement:Element+","sEvent:String+","bUseCapture:Boolean"],"4str":["eElement:String+","sEvent:String+"],"4str2":["eElement:String+","sEvent:String+","bUseCapture:Boolean"],"4arr":["aElement:Array+","sEvent:String+"],"4arr2":["aElement:Array+","sEvent:String+","bUseCapture:Boolean"],"4doc":["eElement:Document+","sEvent:String+"],"4win":["eElement:Window+","sEvent:String+"],"4doc2":["eElement:Document+","sEvent:String+","bUseCapture:Boolean"],"4win2":["eElement:Window+","sEvent:String+","bUseCapture:Boolean"],"4nod":["eElement:Node","sEvent:String+"],"4nod2":["eElement:Node","sEvent:String+","bUseCapture:Boolean"]},e)
},dttjindo.$Fn.prototype.$value=function(){return this._func
},dttjindo.$Fn.prototype.bind=function(){var t,e=dttjindo._p_._toArray(arguments),n=this._func,i=this._this||this;
return n.bind?(e.unshift(i),t=Function.prototype.bind.apply(n,e)):t=function(){var t=dttjindo._p_._toArray(arguments);
return e.length&&(t=e.concat(t)),n.apply(i,t)
},t
},dttjindo.$Fn.prototype.attach=function(t,e,n){var i,o=dttjindo.$Fn._commonPram(arguments,"$Fn#attach"),r=null,s=e,a=t;
switch(dttjindo._p_._j_ag,n!==!0&&(n=!1),this._bUseCapture=n,o+""){case"4arr":case"4arr2":for(var a=o.aElement,s=o.sEvent,l=0,i=a.length;
i>l;
l++){this.attach(a[l],s,!!n)
}return this
}return r=this._bind=this._bind?this._bind:this.bind(),dttjindo.$Element(a).attach(s,r),this
},dttjindo.$Fn.prototype.detach=function(t,e,n){var i,o=dttjindo.$Fn._commonPram(arguments,"$Fn#detach"),r=null,s=t,a=e;
switch(dttjindo._p_._j_ag,o+""){case"4arr":case"4arr2":for(var s=o.aElement,a=o.sEvent,l=0,i=s.length;
i>l;
l++){this.detach(s[l],a,!!n)
}return this
}return r=this._bind=this._bind?this._bind:this.bind(),dttjindo.$Element(o.eElement).detach(o.sEvent,r),this
},dttjindo.$Fn.prototype.delay=function(t,e){var n=g_checkVarType(arguments,{"4num":["nSec:Numeric"],"4arr":["nSec:Numeric","args:Array+"]},"$Fn#delay");
switch(n+""){case"4num":e=e||[];
break;
case"4arr":e=n.args
}return this._delayKey=setTimeout(this.bind.apply(this,e),1000*t),this
},dttjindo.$Fn.prototype.setInterval=function(t,e){var n=g_checkVarType(arguments,{"4num":["nSec:Numeric"],"4arr":["nSec:Numeric","args:Array+"]},"$Fn#setInterval");
switch(n+""){case"4num":e=e||[];
break;
case"4arr":e=n.args
}return this._repeatKey=setInterval(this.bind.apply(this,e),1000*t),this
},dttjindo.$Fn.prototype.repeat=dttjindo.$Fn.prototype.setInterval,dttjindo.$Fn.prototype.stopDelay=function(){return void 0!==this._delayKey&&(window.clearTimeout(this._delayKey),delete this._delayKey),this
},dttjindo.$Fn.prototype.stopRepeat=function(){return void 0!==this._repeatKey&&(window.clearInterval(this._repeatKey),delete this._repeatKey),this
},dttjindo.$Event=function(t){return t?function(t){var e=arguments.callee;
return t instanceof e?t:this instanceof e?(this._event=this._posEvent=t,this._globalEvent=window.event,this.type=t.type.toLowerCase(),"dommousescroll"==this.type?this.type="mousewheel":"domcontentloaded"==this.type&&(this.type="domready"),this.realType=this.type,this.isTouch=!1,this.type.indexOf("touch")>-1&&(this._posEvent=t.changedTouches[0],this.isTouch=!0),this.canceled=!1,this.element=t.target||t.srcElement,this.srcElement=this.element,this.currentElement=t.currentTarget,this.relatedElement=null,this.delegatedElement=null,void (dttjindo.$Jindo.isUndefined(t.relatedTarget)?t.fromElement&&t.toElement&&(this.relatedElement=t["mouseout"==this.type?"toElement":"fromElement"]):this.relatedElement=t.relatedTarget)):new e(t)
}:function(t){var e=arguments.callee;
return t instanceof e?t:this instanceof e?(void 0===t&&(t=window.event),t===window.event&&document.createEventObject&&(t=document.createEventObject(t)),this.isTouch=!1,this._event=this._posEvent=t,this._globalEvent=window.event,this.type=t.type.toLowerCase(),"dommousescroll"==this.type?this.type="mousewheel":"domcontentloaded"==this.type&&(this.type="domready"),this.realType=this.type,this.canceled=!1,this.element=t.target||t.srcElement,this.srcElement=this.element,this.currentElement=t.currentTarget,this.relatedElement=null,this.delegatedElement=null,void (void 0!==t.relatedTarget?this.relatedElement=t.relatedTarget:t.fromElement&&t.toElement&&(this.relatedElement=t["mouseout"==this.type?"toElement":"fromElement"]))):new e(t)
}
}(dttjindo._p_._JINDO_IS_MO),dttjindo._p_.customEvent={},dttjindo._p_.customEventStore={},dttjindo._p_.normalCustomEvent={},dttjindo._p_.hasCustomEvent=function(t){return !(!dttjindo._p_.getCustomEvent(t)&&!dttjindo._p_.normalCustomEvent[t])
},dttjindo._p_.getCustomEvent=function(t){return dttjindo._p_.customEvent[t]
},dttjindo._p_.addCustomEventListener=function(t,e,n,i,o){dttjindo._p_.customEventStore[e]||(dttjindo._p_.customEventStore[e]={},dttjindo._p_.customEventStore[e].ele=t),dttjindo._p_.customEventStore[e][n]||(dttjindo._p_.customEventStore[e][n]={}),dttjindo._p_.customEventStore[e][n][i]||(dttjindo._p_.customEventStore[e][n][i]={custom:o})
},dttjindo._p_.setCustomEventListener=function(t,e,n,i,o){dttjindo._p_.customEventStore[t][e][n].real_listener=i,dttjindo._p_.customEventStore[t][e][n].wrap_listener=o
},dttjindo._p_.getCustomEventListener=function(t,e,n){var i=dttjindo._p_.customEventStore[t];
return i&&i[e]&&i[e][n]?i[e][n]:{}
},dttjindo._p_.getNormalEventListener=function(t,e,n){var i=dttjindo._p_.normalCustomEvent[e];
return i&&i[t]&&i[t][n]?i[t][n]:{}
},dttjindo._p_.hasCustomEventListener=function(t,e,n){var i=dttjindo._p_.customEventStore[t];
return i&&i[e]&&i[e][n]?!0:!1
},dttjindo.$Event.customEvent=function(t,e){var n=g_checkVarType(arguments,{s4str:["sName:String+"],s4obj:["sName:String+","oEvent:Hash+"]},"$Event.customEvent");
switch(n+""){case"s4str":if(dttjindo._p_.hasCustomEvent(t)){throw new dttjindo.$Error("The Custom Event Name have to unique.")
}return dttjindo._p_.normalCustomEvent[t]={},this;
case"s4obj":if(dttjindo._p_.hasCustomEvent(t)){throw new dttjindo.$Error("The Custom Event Name have to unique.")
}dttjindo._p_.normalCustomEvent[t]={},dttjindo._p_.customEvent[t]=function(){this.name=t,this.real_listener=[],this.wrap_listener=[]
};
var i=dttjindo._p_.customEvent[t].prototype;
i.events=[];
for(var o in e){i[o]=e[o],i.events.push(o)
}return dttjindo._p_.customEvent[t].prototype.fireEvent=function(t){for(var e=0,n=this.wrap_listener.length;
n>e;
e++){this.wrap_listener[e](t)
}},this
}},dttjindo.$Event.prototype.mouse=function(t){g_checkVarType(arguments,{voi:[],bol:["bIsScrollbar:Boolean"]});
var e=this._event,n=this.element,i=0,o=!1,r=!1,s=!1,o=e.which?0==e.button:!!(1&e.button),r=e.which?1==e.button:!!(4&e.button),s=e.which?2==e.button:!!(2&e.button),a={};
e.wheelDelta?i=e.wheelDelta/120:e.detail&&(i=-e.detail/3);
var l;
return t&&(l=_event_isScroll(n,e)),a={delta:i,left:o,middle:r,right:s,scrollbar:l},this.mouse=function(t){return t&&(a.scrollbar=_event_isScroll(this.element,this._event),this.mouse=function(){return a
}),a
},a
},dttjindo.$Event.prototype.key=function(){var t=this._event,e=t.keyCode||t.charCode,n={keyCode:e,alt:t.altKey,ctrl:t.ctrlKey,meta:t.metaKey,shift:t.shiftKey,up:38==e,down:40==e,left:37==e,right:39==e,enter:13==e,esc:27==e};
return this.key=function(){return n
},n
},dttjindo.$Event.prototype.pos=function(t){g_checkVarType(arguments,{voi:[],bol:["bGetOffset:Boolean"]});
var e=this._posEvent,n=this.element.ownerDocument||document,i=n.body,o=n.documentElement,r=[i.scrollLeft||o.scrollLeft,i.scrollTop||o.scrollTop],s={clientX:e.clientX,clientY:e.clientY,pageX:"pageX" in e?e.pageX:e.clientX+r[0]-i.clientLeft,pageY:"pageY" in e?e.pageY:e.clientY+r[1]-i.clientTop,layerX:"offsetX" in e?e.offsetX:e.layerX-1,layerY:"offsetY" in e?e.offsetY:e.layerY-1};
if(t&&dttjindo.$Element){var a=dttjindo.$Element(this.element).offset();
s.offsetX=s.pageX-a.left,s.offsetY=s.pageY-a.top
}return s
},dttjindo.$Event.prototype.stop=function(t){g_checkVarType(arguments,{voi:[],num:["nCancel:Numeric"]}),t=t||dttjindo.$Event.CANCEL_ALL;
var e=window.event&&window.event==this._globalEvent?this._globalEvent:this._event,n=!!(t&dttjindo.$Event.CANCEL_BUBBLE),i=!!(t&dttjindo.$Event.CANCEL_DEFAULT),o=this.realType;
return !n||"focusin"!==o&&"focusout"!==o||dttjindo.$Jindo._warn("The "+o+" event can't stop bubble."),this.canceled=!0,i&&(void 0!==e.preventDefault?e.preventDefault():e.returnValue=!1),n&&(void 0!==e.stopPropagation?e.stopPropagation():e.cancelBubble=!0),this
},dttjindo.$Event.prototype.stopDefault=function(){return this.stop(dttjindo.$Event.CANCEL_DEFAULT)
},dttjindo.$Event.prototype.stopBubble=function(){return this.stop(dttjindo.$Event.CANCEL_BUBBLE)
},dttjindo.$Event.CANCEL_BUBBLE=1,dttjindo.$Event.CANCEL_DEFAULT=2,dttjindo.$Event.CANCEL_ALL=3,dttjindo.$Event.prototype.$value=function(){return this._event
},function(t){for(var e="Touch",n=0,i=t.length;
i>n;
n++){dttjindo.$Event.prototype[t[n]+e]=function(t){return function(){if(this.isTouch){for(var e,n=[],i=this._event[t+"es"],o=i.length,r=0;
o>r;
r++){e=i[r],n.push({id:e.identifier,event:this,element:e.target,_posEvent:e,pos:dttjindo.$Event.prototype.pos})
}this[t]=function(e){var i=g_checkVarType(arguments,{"void":[],"4num":["nIndex:Numeric"]},"$Event#"+t);
return i+""=="void"?n:n[e]
}
}else{this[t]=function(){throw new dttjindo.$Error(dttjindo.$Except.NOT_SUPPORT_METHOD,"$Event#"+t)
}
}return this[t].apply(this,dttjindo._p_._toArray(arguments))
}
}(t[0]+e)
}}(["changed","target"]),dttjindo.$Element=function(t){var e=arguments.callee;
if(t&&t instanceof e){return t
}if(!(this instanceof e)){try{return dttjindo.$Jindo._maxWarn(arguments.length,1,"$Element"),new e(t)
}catch(n){if(n instanceof TypeError){return null
}throw n
}}var i=dttjindo.$Jindo,o=i.checkVarType(arguments,{"4str":["sID:String+"],"4nod":["oEle:Node"],"4doc":["oEle:Document+"],"4win":["oEle:Window+"]},"$Element");
switch(o+""){case"4str":t=dttjindo.$(t);
break;
default:t=o.oEle
}if(this._element=t,null==this._element){throw new TypeError("{not_found_element}")
}if(this._element.__dttjindo__id){this._key=this._element.__dttjindo__id
}else{try{this._element.__dttjindo__id=this._key=dttjindo._p_._makeRandom()
}catch(n){}}this.tag=(this._element.tagName||"").toLowerCase()
},dttjindo._p_.NONE_GROUP="_dttjindo_event_none",dttjindo._p_.splitEventSelector=function(t){var e=t.match(/^([a-z_]*)(.*)/i),n=dttjindo._p_.trim(e[1]),i=dttjindo._p_.trim(e[2].replace("@",""));
return{type:i?"delegate":"normal",event:n,selector:i}
},dttjindo._p_._makeRandom=function(){return"e"+(new Date).getTime()+parseInt(100000000*Math.random(),10)
},dttjindo._p_.releaseEventHandlerForAllChildren=function(t){var e,n=t._element.all||t._element.getElementsByTagName("*"),i=n.length,o=null;
for(e=0;
i>e;
e++){o=n[e],1==o.nodeType&&o.__dttjindo__id&&dttjindo.$Element.eventManager.cleanUpUsingKey(o.__dttjindo__id,!0)
}n=o=null
},dttjindo._p_.canUseClassList=function(){var t="classList" in document.body&&"classList" in document.createElementNS("http://www.w3.org/2000/svg","g");
return dttjindo._p_.canUseClassList=function(){return t
},dttjindo._p_.canUseClassList()
},dttjindo._p_.vendorPrefixObj={"-moz":"Moz","-ms":"ms","-o":"O","-webkit":"webkit"},dttjindo._p_.cssNameToJavaScriptName=function(t){if(/^(\-(?:moz|ms|o|webkit))/.test(t)){var e=RegExp.$1;
t=t.replace(e,dttjindo._p_.vendorPrefixObj[e])
}return t.replace(/(:?-(\w))/g,function(t,t,e){return e.toUpperCase()
})
},dttjindo._p_.getStyleIncludeVendorPrefix=function(t){for(var e=["Transition","Transform","Animation","Perspective"],n=["webkit","-","Moz","O","ms"],i="",o="",r="",s={},a=t||document.body.style,l=0,d=e.length;
d>l;
l++){i=e[l];
for(var h=0,c=n.length;
c>h;
h++){if(o=n[h],r="-"!=o?o+i:i.toLowerCase(),"undefined"!=typeof a[r]){s[i.toLowerCase()]=r;
break
}s[i.toLowerCase()]=!1
}}return t?s:(dttjindo._p_.getStyleIncludeVendorPrefix=function(){return s
},dttjindo._p_.getStyleIncludeVendorPrefix())
},dttjindo._p_.getTransformStringForValue=function(t){var e=dttjindo._p_.getStyleIncludeVendorPrefix(t),n=e.transform;
return"MozTransform"===e.transform?n="-moz-transform":"webkitTransform"===e.transform?n="-webkit-transform":"OTransform"===e.transform?n="-o-transform":"msTransform"===e.transform&&(n="-ms-transform"),t?n:(dttjindo._p_.getTransformStringForValue=function(){return n
},dttjindo._p_.getTransformStringForValue())
},dttjindo._p_.setOpacity=function(t,e){t.offsetHeight,t.style.opacity=e
},dttjindo.$Element._eventBind=function(t,e,n,i){dttjindo.$Element._eventBind=t.addEventListener?9==document.documentMode?function(t,e,n,i){/resize/.test(e)?t.attachEvent("on"+e,n):t.addEventListener(e,n,!!i)
}:function(t,e,n,i){t.addEventListener(e,n,!!i)
}:function(t,e,n){t.attachEvent("on"+e,n)
},dttjindo.$Element._eventBind(t,e,n,i)
},dttjindo.$Element._unEventBind=function(t,e,n){dttjindo.$Element._unEventBind=t.removeEventListener?9==document.documentMode?function(t,e,n){/resize/.test(e)?t.detachEvent("on"+e,n):t.removeEventListener(e,n,!1)
}:function(t,e,n){t.removeEventListener(e,n,!1)
}:function(t,e,n){t.detachEvent("on"+e,n)
},dttjindo.$Element._unEventBind(t,e,n)
},dttjindo.$Element.prototype.$value=function(){return this._element
},dttjindo.$Element.prototype.visible=function(t,e){var n=g_checkVarType(arguments,{g:[],s4bln:[dttjindo.$Jindo._F("bVisible:Boolean")],s4str:["bVisible:Boolean","sDisplay:String+"]},"$Element#visible");
switch(n+""){case"g":return"none"!=this._getCss(this._element,"display");
case"s4bln":return this[t?"show":"hide"](),this;
case"s4str":return this[t?"show":"hide"](e),this
}},dttjindo.$Element.prototype.show=function(t){var e=g_checkVarType(arguments,{"4voi":[],"4str":["sDisplay:String+"]},"$Element#show"),n=this._element.style,i="block",o={p:i,div:i,form:i,h1:i,h2:i,h3:i,h4:i,ol:i,ul:i,fieldset:i,td:"table-cell",th:"table-cell",li:"list-item",table:"table",thead:"table-header-group",tbody:"table-row-group",tfoot:"table-footer-group",tr:"table-row",col:"table-column",colgroup:"table-column-group",caption:"table-caption",dl:i,dt:i,dd:i};
try{switch(e+""){case"4voi":var r=o[this.tag];
n.display=r||"inline";
break;
case"4str":n.display=t
}}catch(s){n.display="block"
}return this
},dttjindo.$Element.prototype.hide=function(){return this._element.style.display="none",this
},dttjindo.$Element.prototype.toggle=function(){return g_checkVarType(arguments,{"4voi":[],"4str":["sDisplay:String+"]},"$Element#toggle"),this["none"==this._getCss(this._element,"display")?"show":"hide"].apply(this,arguments),this
},dttjindo.$Element.prototype.opacity=function(t){var e,n=g_checkVarType(arguments,{g:[],s:["nOpacity:Numeric"],str:["sOpacity:String"]},"$Element#opacity"),i=this._element,o="none"!=this._getCss(i,"display");
switch(n+""){case"g":return"undefined"!=typeof i.style.opacity&&(e=i.style.opacity).length||(e=this._getCss(i,"opacity"))?(e=parseFloat(e),isNaN(e)&&(e=o?1:0)):(e="undefined"==typeof i.filters.alpha?o?100:0:i.filters.alpha.opacity,e/=100),e;
case"s":return t=n.nOpacity,i.style.zoom=1,t=Math.max(Math.min(t,1),0),"undefined"!=typeof i.style.opacity?i.style.opacity=t:(t=Math.ceil(100*t),"unknown"!=typeof i.filters&&"undefined"!=typeof i.filters.alpha?i.filters.alpha.opacity=t:i.style.filter=i.style.filter+" alpha(opacity="+t+")"),this;
case"str":return""===t&&(i.style.zoom=i.style.opacity=""),this
}},dttjindo._p_._revisionCSSAttr=function(t,e){var n=dttjindo.$Element.hook(t);
return t=n?n:dttjindo._p_.cssNameToJavaScriptName(t).replace(/^(animation|perspective|transform|transition)/i,function(t){return e[t.toLowerCase()]
})
},dttjindo._p_.changeTransformValue=function(t,e){return(t+"").replace(/([\s|-]*)(?:transform)/,function(t,n){return dttjindo._p_.trim(n).length>0?t:n+dttjindo._p_.getTransformStringForValue(e)
})
},dttjindo.$Element.prototype.css=function(t,e){var n=g_checkVarType(arguments,{g:["sName:String+"],s4str:[dttjindo.$Jindo._F("sName:String+"),dttjindo.$Jindo._F("vValue:String+")],s4num:["sName:String+","vValue:Numeric"],s4obj:["oObj:Hash+"]},"$Element#css"),o=this._element;
switch(n+""){case"s4str":case"s4num":var r={};
t=dttjindo._p_._revisionCSSAttr(t,dttjindo._p_.getStyleIncludeVendorPrefix()),r[t]=e,t=r;
break;
case"s4obj":t=n.oObj;
var r={},s=dttjindo._p_.getStyleIncludeVendorPrefix();
for(i in t){t.hasOwnProperty(i)&&(r[dttjindo._p_._revisionCSSAttr(i,s)]=t[i])
}t=r;
break;
case"g":var s=dttjindo._p_.getStyleIncludeVendorPrefix();
t=dttjindo._p_._revisionCSSAttr(t,s);
var a=this._getCss;
if("opacity"==t){return this.opacity()
}if((dttjindo._p_._JINDO_IS_FF||dttjindo._p_._JINDO_IS_OP)&&("backgroundPositionX"==t||"backgroundPositionY"==t)){var l=a(o,"backgroundPosition").split(/\s+/);
return"backgroundPositionX"==t?l[0]:l[1]
}if(!window.getComputedStyle&&"backgroundPosition"==t){return a(o,"backgroundPositionX")+" "+a(o,"backgroundPositionY")
}if(!dttjindo._p_._JINDO_IS_OP&&window.getComputedStyle&&("padding"==t||"margin"==t)){var d=a(o,t+"Top"),h=a(o,t+"Right"),c=a(o,t+"Bottom"),u=a(o,t+"Left");
return d==h&&c==u?d:d==c&&h==u?d+" "+h:d+" "+h+" "+c+" "+u
}return a(o,t)
}var p;
for(var f in t){if(t.hasOwnProperty(f)){if(p=t[f],!dttjindo.$Jindo.isString(p)&&!dttjindo.$Jindo.isNumeric(p)){continue
}if("opacity"==f){this.opacity(p);
continue
}if("cssFloat"==f&&dttjindo._p_._JINDO_IS_IE&&(f="styleFloat"),!dttjindo._p_._JINDO_IS_FF&&!dttjindo._p_._JINDO_IS_OP||"backgroundPositionX"!=f&&"backgroundPositionY"!=f){this._setCss(o,f,/transition/i.test(f)?dttjindo._p_.changeTransformValue(p):p)
}else{var l=this.css("backgroundPosition").split(/\s+/);
p="backgroundPositionX"==f?p+" "+l[1]:l[0]+" "+p,this._setCss(o,"backgroundPosition",p)
}}}return this
},dttjindo.$Element.prototype._getCss=function(t,e){var n;
return n=window.getComputedStyle?function(t,e){try{"cssFloat"==e&&(e="float");
var n=t.ownerDocument||t.document||document,i=t.style[e];
if(!t.style[e]){var o=n.defaultView.getComputedStyle(t,null);
e=e.replace(/([A-Z])/g,"-$1").replace(/^(webkit|ms)/g,"-$1").toLowerCase(),i=o.getPropertyValue(e),i=void 0===i?o[e]:i
}return"textDecoration"==e&&(i=i.replace(",","")),i
}catch(r){throw new dttjindo.$Error((t.tagName||"document")+dttjindo.$Except.NOT_USE_CSS,"$Element#css")
}}:t.currentStyle?function(t,e){try{"cssFloat"==e&&(e="styleFloat");
var n=t.style[e];
if(n){return n
}var i=t.currentStyle;
return i?i[e]:n
}catch(o){throw new dttjindo.$Error((t.tagName||"document")+dttjindo.$Except.NOT_USE_CSS,"$Element#css")
}}:function(t,e){try{return"cssFloat"==e&&dttjindo._p_._JINDO_IS_IE&&(e="styleFloat"),t.style[e]
}catch(n){throw new dttjindo.$Error((t.tagName||"document")+dttjindo.$Except.NOT_USE_CSS,"$Element#css")
}},dttjindo.$Element.prototype._getCss=n,n(t,e)
},dttjindo.$Element.prototype._setCss=function(t,e,n){t.style[e]="#top#left#right#bottom#".indexOf(e+"#")>0&&("number"==typeof n||/\d$/.test(n))?parseInt(n,10)+"px":n
},dttjindo.$Element.prototype.attr=function(t,e){var n,i,o,r,s,a=g_checkVarType(arguments,{g:["sName:String+"],s4str:["sName:String+","vValue:String+"],s4num:["sName:String+","vValue:Numeric"],s4nul:["sName:String+","vValue:Null"],s4bln:["sName:String+","vValue:Boolean"],s4arr:["sName:String+","vValue:Array+"],s4obj:[dttjindo.$Jindo._F("oObj:Hash+")]},"$Element#attr"),l=this._element,d=null;
switch(a+""){case"s4str":case"s4nul":case"s4num":case"s4bln":case"s4arr":var h={};
h[t]=e,t=h;
break;
case"s4obj":t=a.oObj;
break;
case"g":if("class"==t||"className"==t){return l.className
}if("style"==t){return l.style.cssText
}if("checked"==t||"disabled"==t){return !!l[t]
}if("value"==t){if("button"==this.tag){return l.getAttributeNode("value").value
}if("select"==this.tag){if(l.multiple){for(n=0,i=l.options.length;
i>n;
n++){r=l.options[n],r.selected&&(d||(d=[]),e=r.value,""==e&&(e=r.text),d.push(e))
}return d
}return l.selectedIndex<0?null:(e=l.options[l.selectedIndex].value,""==e?l.options[l.selectedIndex].text:e)
}return l.value
}return"href"==t?l.getAttribute(t,2):l.getAttribute(t)
}o=function(t,e){var n,i,o,r=-1;
for(n=0,i=t.length;
i>n;
n++){if(o=t[n],o.value===e||o.text===e){r=n;
break
}}return r
};
for(var c in t){if(t.hasOwnProperty(c)){var u=t[c];
if(dttjindo.$Jindo.isNull(u)){if("select"==this.tag){if(l.multiple){for(n=0,i=l.options.length;
i>n;
n++){l.options[n].selected=!1
}}else{l.selectedIndex=-1
}}else{l.removeAttribute(c)
}}else{if("class"==c||"className"==c){l.className=u
}else{if("style"==c){l.style.cssText=u
}else{if("checked"==c||"disabled"==c){l[c]=u
}else{if("value"==c){if("select"==this.tag){if(l.multiple){if(dttjindo.$Jindo.isArray(u)){for(s=dttjindo.$A(u),n=0,i=l.options.length;
i>n;
n++){r=l.options[n],r.selected=s.has(r.value)||s.has(r.text)
}}else{l.selectedIndex=o(l.options,u)
}}else{l.selectedIndex=o(l.options,u)
}}else{l.value=u
}}else{l.setAttribute(c,u)
}}}}}}}return this
},dttjindo.$Element.prototype.width=function(t){var e=g_checkVarType(arguments,{g:[],s:["nWidth:Numeric"]},"$Element#width");
switch(e+""){case"g":return this._element.offsetWidth;
case"s":t=e.nWidth;
var n=this._element;
n.style.width=t+"px";
var i=n.offsetWidth;
if(i!=t&&0!==i){var o=2*t-i;
o>0&&(n.style.width=o+"px")
}return this
}},dttjindo.$Element.prototype.height=function(t){var e=g_checkVarType(arguments,{g:[],s:["nHeight:Numeric"]},"$Element#height");
switch(e+""){case"g":return this._element.offsetHeight;
case"s":t=e.nHeight;
var n=this._element;
n.style.height=t+"px";
var i=n.offsetHeight;
if(i!=t&&0!==i){var t=2*t-i;
t>0&&(n.style.height=t+"px")
}return this
}},dttjindo.$Element.prototype.className=function(t){var e=g_checkVarType(arguments,{g:[],s:[dttjindo.$Jindo._F("sClass:String+")]},"$Element#className"),n=this._element;
switch(e+""){case"g":return n.className;
case"s":return n.className=t,this
}},dttjindo.$Element.prototype.hasClass=function(){var t=g_checkVarType;
return dttjindo.$Element.prototype.hasClass=dttjindo._p_.canUseClassList()?function(e){return t(arguments,{"4str":["sClass:String+"]},"$Element#hasClass"),this._element.classList.contains(e)
}:function(e){return t(arguments,{"4str":["sClass:String+"]},"$Element#hasClass"),(" "+this._element.className+" ").indexOf(" "+e+" ")>-1
},this.hasClass.apply(this,arguments)
},dttjindo.$Element.prototype.addClass=function(){return dttjindo.$Element.prototype.addClass=this._element.classList?function(t){if(null==this._element){return this
}for(var e=(g_checkVarType(arguments,{"4str":["sClass:String+"]},"$Element#addClass"),(t+"").split(/\s+/)),n=this._element.classList,i=e.length;
i--;
){""!=e[i]&&n.add(e[i])
}return this
}:function(t){for(var e,n=(g_checkVarType(arguments,{"4str":["sClass:String+"]},"$Element#addClass"),this._element),i=n.className,o=(t+"").split(" "),r=o.length-1;
r>=0;
r--){e=o[r],-1==(" "+i+" ").indexOf(" "+e+" ")&&(i=i+" "+e)
}return n.className=i.replace(/\s+$/,"").replace(/^\s+/,""),this
},this.addClass.apply(this,arguments)
},dttjindo.$Element.prototype.removeClass=function(){return dttjindo.$Element.prototype.removeClass=this._element.classList?function(t){if(g_checkVarType(arguments,{"4str":["sClass:String+"]},"$Element#removeClass"),null==this._element){return this
}for(var e=this._element.classList,n=(t+"").split(" "),i=n.length;
i--;
){""!=n[i]&&e.remove(n[i])
}return this
}:function(t){for(var e=(g_checkVarType(arguments,{"4str":["sClass:String+"]},"$Element#removeClass"),this._element),n=e.className,i=(t+"").split(" "),o=i.length-1;
o>=0;
o--){/\W/g.test(i[o])&&(i[o]=i[o].replace(/(\W)/g,"\\$1")),n=(" "+n+" ").replace(new RegExp("\\s+"+i[o]+"(?=\\s+)","g")," ")
}return e.className=n.replace(/\s+$/,"").replace(/^\s+/,""),this
},this.removeClass.apply(this,arguments)
},dttjindo.$Element.prototype.toggleClass=function(){var t=g_checkVarType;
return dttjindo.$Element.prototype.toggleClass=dttjindo._p_.canUseClassList()?function(e,n){var i=t(arguments,{"4str":["sClass:String+"],"4str2":["sClass:String+","sClass2:String+"]},"$Element#toggleClass");
switch(i+""){case"4str":this._element.classList.toggle(e+"");
break;
case"4str2":e+="",n+="",this.hasClass(e)?(this.removeClass(e),this.addClass(n)):(this.addClass(e),this.removeClass(n))
}return this
}:function(e,n){return t(arguments,{"4str":["sClass:String+"],"4str2":["sClass:String+","sClass2:String+"]},"$Element#toggleClass"),n=n||"",this.hasClass(e)?(this.removeClass(e),n&&this.addClass(n)):(this.addClass(e),n&&this.removeClass(n)),this
},this.toggleClass.apply(this,arguments)
},dttjindo.$Element.prototype.cssClass=function(t){var e=g_checkVarType(arguments,{g:["sClass:String+"],s4bln:["sClass:String+","bCondition:Boolean"],s4obj:["oObj:Hash+"]},"$Element#cssClass");
switch(e+""){case"g":return this.hasClass(e.sClass);
case"s4bln":return e.bCondition?this.addClass(e.sClass):this.removeClass(e.sClass),this;
case"s4obj":var n=this._element;
t=e.oObj;
var i=n.className;
for(var o in t){t.hasOwnProperty(o)&&(t[o]?-1==(" "+i+" ").indexOf(" "+o+" ")&&(i=(i+" "+o).replace(/^\s+/,"")):(" "+i+" ").indexOf(" "+o+" ")>-1&&(i=(" "+i+" ").replace(" "+o+" "," ").replace(/\s+$/,"").replace(/^\s+/,"")))
}return n.className=i,this
}},dttjindo.$Element.prototype.text=function(t){var e,n,i=g_checkVarType(arguments,{g:[],s4str:["sText:String+"],s4num:[dttjindo.$Jindo._F("sText:Numeric")],s4bln:["sText:Boolean"]},"$Element#text"),o=this._element,r=this.tag;
switch(i+""){case"g":return e=void 0!==o.textContent?"textContent":"innerText",("textarea"==r||"input"==r)&&(e="value"),o[e];
case"s4str":case"s4num":case"s4bln":try{if("textarea"==r||"input"==r){o.value=t+""
}else{var n=o.ownerDocument||o.document||document;
this.empty(),o.appendChild(n.createTextNode(t))
}}catch(s){return o.innerHTML=(t+"").replace(/&/g,"&amp;").replace(/</g,"&lt;")
}return this
}},dttjindo.$Element.prototype.html=function(){var t=dttjindo._p_._JINDO_IS_IE,e=dttjindo._p_._JINDO_IS_FF,n={g:[],s4str:[dttjindo.$Jindo._F("sText:String+")],s4num:["sText:Numeric"],s4bln:["sText:Boolean"]},i=g_checkVarType;
return dttjindo.$Element.prototype.html=t?function(t){var e=i(arguments,n,"$Element#html");
switch(e+""){case"g":return this._element.innerHTML;
case"s4str":case"s4num":case"s4bln":t+="",dttjindo.cssquery&&dttjindo.cssquery.release();
for(var o=this._element;
o.firstChild;
){o.removeChild(o.firstChild)
}var r,s="R"+(new Date).getTime()+parseInt(100000*Math.random(),10),a=o.ownerDocument||o.document||document,l=o.tagName.toLowerCase();
switch(l){case"select":case"table":r=a.createElement("div"),r.innerHTML="<"+l+' class="'+s+'">'+t+"</"+l+">";
break;
case"tr":case"thead":case"tbody":case"colgroup":r=a.createElement("div"),r.innerHTML="<table><"+l+' class="'+s+'">'+t+"</"+l+"></table>";
break;
default:o.innerHTML=t
}if(r){var d;
for(d=r.firstChild;
d&&d.className!=s;
d=d.firstChild){}if(d){for(var h,c=!0;
h=o.firstChild;
){h.removeNode(!0)
}for(var h=d.firstChild;
h;
h=d.firstChild){if("select"==l){var u=h.cloneNode(!0);
h.selected&&c&&(c=!1,u.selected=!0),o.appendChild(u),h.removeNode(!0)
}else{o.appendChild(h)
}}r.removeNode&&r.removeNode(!0)
}r=null
}return this
}}:e?function(t){var e=i(arguments,n,"$Element#html");
switch(e+""){case"g":return this._element.innerHTML;
case"s4str":case"s4num":case"s4bln":t+="";
var o=this._element;
if(o.parentNode){o.innerHTML=t
}else{var r,s="R"+(new Date).getTime()+parseInt(100000*Math.random(),10),a=o.ownerDocument||o.document||document,l=o.tagName.toLowerCase();
switch(l){case"select":case"table":r=a.createElement("div"),r.innerHTML="<"+l+' class="'+s+'">'+t+"</"+l+">";
break;
case"tr":case"thead":case"tbody":case"colgroup":r=a.createElement("div"),r.innerHTML="<table><"+l+' class="'+s+'">'+t+"</"+l+"></table>";
break;
default:o.innerHTML=t
}if(r){var d;
for(d=r.firstChild;
d&&d.className!=s;
d=d.firstChild){}if(d){for(var h;
h=o.firstChild;
){h.removeNode(!0)
}for(var h=d.firstChild;
h;
h=d.firstChild){o.appendChild(h)
}r.removeNode&&r.removeNode(!0)
}r=null
}}return this
}}:function(t){var e=i(arguments,n,"$Element#html");
switch(e+""){case"g":return this._element.innerHTML;
case"s4str":case"s4num":case"s4bln":t+="";
var o=this._element;
return o.innerHTML=t,this
}},this.html.apply(this,arguments)
},dttjindo.$Element.prototype.outerHTML=function(){var t=this._element;
if(t=dttjindo.$Jindo.isDocument(t)?t.documentElement:t,void 0!==t.outerHTML){return t.outerHTML
}var e=t.ownerDocument||t.document||document,n=e.createElement("div"),i=t.parentNode;
if(!i){return t.innerHTML
}i.insertBefore(n,t),n.style.display="none",n.appendChild(t);
var o=n.innerHTML;
return i.insertBefore(t,n),i.removeChild(n),o
},dttjindo.$Element.prototype.toString=function(){return this.outerHTML()||"[object $Element]"
},dttjindo.$Element.prototype.attach=function(t,e){var n,i,o=g_checkVarType(arguments,{"4str":["sEvent:String+","fpCallback:Function+"],"4obj":["hListener:Hash+"]},"$Element#attach");
switch(o+""){case"4str":n=dttjindo._p_.splitEventSelector(o.sEvent),this._add(n.type,n.event,n.selector,e);
break;
case"4obj":i=o.hListener;
for(var r in i){this.attach(r,i[r])
}}return this
},dttjindo.$Element.prototype.detach=function(t,e){var n,i,o=g_checkVarType(arguments,{"4str":["sEvent:String+","fpCallback:Function+"],"4obj":["hListener:Hash+"]},"$Element#detach");
switch(o+""){case"4str":n=dttjindo._p_.splitEventSelector(o.sEvent),this._del(n.type,n.event,n.selector,e);
break;
case"4obj":i=o.hListener;
for(var r in i){this.detach(r,i[r])
}}return this
},dttjindo.$Element.prototype.delegate=function(t,e,n){return g_checkVarType(arguments,{"4str":["sEvent:String+","vFilter:String+","fpCallback:Function+"],"4fun":["sEvent:String+","vFilter:Function+","fpCallback:Function+"]},"$Element#delegate"),this._add("delegate",t,e,n)
},dttjindo.$Element.prototype.undelegate=function(t,e,n){return g_checkVarType(arguments,{"4str":["sEvent:String+","vFilter:String+","fpCallback:Function+"],"4fun":["sEvent:String+","vFilter:Function+","fpCallback:Function+"],group_for_string:["sEvent:String+","vFilter:String+"],group_for_function:["sEvent:String+","vFilter:Function+"]},"$Element#undelegate"),this._del("delegate",t,e,n)
},dttjindo._p_.customEventAttach=function(t,e,n,i,o,r,s){if(dttjindo._p_.hasCustomEventListener(r.__dttjindo__id,e,n)){var a=dttjindo._p_.getCustomEventListener(r.__dttjindo__id,e,n).custom;
a.real_listener&&(a.real_listener.push(i),a.wrap_listener.push(o))
}else{var l=dttjindo._p_.getCustomEvent(e),a=new l,d=a.events;
a.real_listener.push(i),a.wrap_listener.push(o);
for(var h=0,c=d.length;
c>h;
h++){a["_fp"+d[h]]=dttjindo.$Fn(a[d[h]],a).bind(),s(t,d[h],n,a["_fp"+d[h]])
}dttjindo._p_.addCustomEventListener(r,r.__dttjindo__id,e,n,a)
}},dttjindo._p_.normalCustomEventAttach=function(t,e,n,i,o,r){dttjindo._p_.normalCustomEvent[e][n]||(dttjindo._p_.normalCustomEvent[e][n]={},dttjindo._p_.normalCustomEvent[e][n].ele=t,dttjindo._p_.normalCustomEvent[e][n][i]={},dttjindo._p_.normalCustomEvent[e][n][i].real_listener=[],dttjindo._p_.normalCustomEvent[e][n][i].wrap_listener=[]),dttjindo._p_.normalCustomEvent[e][n][i].real_listener.push(o),dttjindo._p_.normalCustomEvent[e][n][i].wrap_listener.push(r)
},dttjindo.$Element.prototype._add=function(t,e,n,i){var o=dttjindo.$Element.eventManager,r=e;
e=e.toLowerCase();
var s=o.splitGroup(e);
e=s.event;
var a=s.group,l=this._element,d=l.__dttjindo__id,h=l.ownerDocument||l.document||document;
if(dttjindo._p_.hasCustomEvent(e)){n=n||"_NONE_";
var c=dttjindo.$Fn(i,this).bind();
dttjindo._p_.normalCustomEventAttach(l,e,d,n,i,c),dttjindo._p_.getCustomEvent(e)&&dttjindo._p_.customEventAttach(t,e,n,i,c,l,dttjindo.$Fn(this._add,this).bind())
}else{if("domready"==e&&dttjindo.$Jindo.isWindow(l)){return dttjindo.$Element(h).attach(e,i),this
}if("load"==e&&l===h){return dttjindo.$Element(window).attach(e,i),this
}if(!document.addEventListener&&"domready"==e){if(window.top!=window){throw dttjindo.$Error(dttjindo.$Except.NOT_WORK_DOMREADY,"$Element#attach")
}return dttjindo.$Element._domready(l,i),this
}e=o.revisionEvent(t,e,r),i=o.revisionCallback(t,e,r,i),o.isInit(this._key)||o.init(this._key,l),o.hasEvent(this._key,e,r)||o.initEvent(this,e,r,a),o.hasGroup(this._key,e,a)||o.initGroup(this._key,e,a),o.addEventListener(this._key,e,a,t,n,i)
}return this
},dttjindo._p_.customEventDetach=function(t,e,n,i,o,r){for(var s=dttjindo._p_.getCustomEventListener(o.__dttjindo__id,e,n),a=s.custom,l=a.events,d=0,h=l.length;
h>d;
d++){r(t,l[d],n,a["_fp"+l[d]])
}},dttjindo.$Element.prototype._del=function(t,e,n,i){var o=dttjindo.$Element.eventManager,r=e;
e=e.toLowerCase();
var s=o.splitGroup(e);
e=s.event;
var a=s.group,l=this._element.ownerDocument||this._element.document||document;
if(dttjindo._p_.hasCustomEvent(e)){var d=this._element.__dttjindo__id;
n=n||"_NONE_";
for(var h=dttjindo._p_.getNormalEventListener(d,e,n),c=h.wrap_listener,u=h.real_listener,p=[],f=[],_=0,m=u.length;
m>_;
_++){u[_]!=i&&(p.push(c[_]),f.push(u[_]))
}if(0==f.length){var g=dttjindo._p_.normalCustomEvent[e][d],v=0;
for(var _ in g){if("ele"!==_){v++;
break
}}0===v?delete dttjindo._p_.normalCustomEvent[e][d]:delete dttjindo._p_.normalCustomEvent[e][d][n]
}dttjindo._p_.customEvent[e]&&(dttjindo._p_.setCustomEventListener(d,e,n,f,p),0==f.length&&(dttjindo._p_.customEventDetach(t,e,n,i,this._element,dttjindo.$Fn(this._del,this).bind()),delete dttjindo._p_.customEventStore[d][e][n]))
}else{if("domready"==e&&dttjindo.$Jindo.isWindow(this._element)){return dttjindo.$Element(l).detach(e,i),this
}if("load"==e&&this._element===l){return dttjindo.$Element(window).detach(e,i),this
}if(e=o.revisionEvent(t,e,r),!document.addEventListener&&"domready"==e){for(var y=[],E=dttjindo.$Element._domready.list,_=0,m=E.length;
m>_;
_++){E[_]!=i&&y.push(E[_])
}return dttjindo.$Element._domready.list=y,this
}if(a===dttjindo._p_.NONE_GROUP&&!dttjindo.$Jindo.isFunction(i)&&!n){throw new dttjindo.$Error(dttjindo.$Except.HAS_FUNCTION_FOR_GROUP,"$Element#"+("normal"==t?"detach":"delegate"))
}o.removeEventListener(this._key,e,a,t,n,i)
}return this
},dttjindo._p_.mouseTouchPointerEvent=function(t){var e={};
return window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>0?e={mousedown:"MSPointerDown",mouseup:"MSPointerUp",mousemove:"MSPointerMove",mouseover:"MSPointerOver",mouseout:"MSPointerOut",touchstart:"MSPointerDown",touchend:"MSPointerUp",touchmove:"MSPointerMove",pointerdown:"MSPointerDown",pointerup:"MSPointerUp",pointermove:"MSPointerMove",pointerover:"MSPointerOver",pointerout:"MSPointerOut",pointercancel:"MSPointerCancel"}:dttjindo._p_._JINDO_IS_MO&&(e={mousedown:"touchstart",mouseup:"touchend",mousemove:"touchmove",pointerdown:"touchstart",pointerup:"touchend",pointermove:"touchmove"}),dttjindo._p_.mouseTouchPointerEvent=function(t){return e[t]?e[t]:t
},dttjindo._p_.mouseTouchPointerEvent(t)
},dttjindo.$Element.eventManager=function(){function t(t,e,n){return function(){var i=dttjindo._p_._toArray(arguments,0);
return n.length&&(i=n.concat(i)),t.apply(e,i)
}
}var e={};
return{revisionCallback:function(t,e,n,i){if((document.addEventListener||dttjindo._p_._JINDO_IS_IE&&"delegate"==t)&&("mouseenter"==n||"mouseleave"==n)){var o=dttjindo.$Element.eventManager._fireWhenElementBoundary(t,i);
o._origin_=i,i=o
}return i
},_fireWhenElementBoundary:function(t,e){return function(n){var i=n.relatedElement?dttjindo.$Element(n.relatedElement):null,o=n.currentElement;
"delegate"==t&&(o=n.element),i&&(i.isEqual(o)||i.isChildOf(o))||e(n)
}
},revisionEvent:function(t,e,n){return this.revisionEvent=void 0!==document.addEventListener?function(t,e,n){if(/^ms/i.test(n)){return n
}var i=dttjindo.$Event.hook(e);
if(i){return dttjindo.$Jindo.isFunction(i)?i():i
}if(e=e.toLowerCase(),"domready"==e||"domcontentloaded"==e){e="DOMContentLoaded"
}else{if("mousewheel"!=e||dttjindo._p_._JINDO_IS_WK||dttjindo._p_._JINDO_IS_OP||dttjindo._p_._JINDO_IS_IE){if("mouseenter"!=e||dttjindo._p_._JINDO_IS_IE&&"delegate"!=t){if("mouseleave"!=e||dttjindo._p_._JINDO_IS_IE&&"delegate"!=t){if("transitionend"==e||"transitionstart"==e){var o=e.replace("transition",""),r=dttjindo._p_.getStyleIncludeVendorPrefix();
"transition"!=r.transition&&(o=o.substr(0,1).toUpperCase()+o.substr(1)),e=r.transition+o
}else{if("animationstart"==e||"animationend"==e||"animationiteration"==e){var o=e.replace("animation",""),r=dttjindo._p_.getStyleIncludeVendorPrefix();
"animation"!=r.animation&&(o=o.substr(0,1).toUpperCase()+o.substr(1)),e=r.animation+o
}else{("focusin"===e||"focusout"===e)&&(e="focusin"===e?"focus":"blur")
}}}else{e="mouseout"
}}else{e="mouseover"
}}else{e="DOMMouseScroll"
}}return dttjindo._p_.mouseTouchPointerEvent(e)
}:function(t,e,n){if(/^ms/i.test(n)){return n
}var i=dttjindo.$Event.hook(e);
return i?dttjindo.$Jindo.isFunction(i)?i():i:("delegate"==t&&"mouseenter"==e?e="mouseover":"delegate"==t&&"mouseleave"==e&&(e="mouseout"),dttjindo._p_.mouseTouchPointerEvent(e))
},this.revisionEvent(t,e,n)
},test:function(){return e
},isInit:function(t){return !!e[t]
},init:function(t,n){e[t]={ele:n,event:{}}
},getEventConfig:function(t){return e[t]
},hasEvent:function(t,n){if(!document.addEventListener&&"domready"==n.toLowerCase()){return dttjindo.$Element._domready.list&&dttjindo.$Element._domready.list.length>0?!0:!1
}try{return !!e[t].event[n]
}catch(i){return !1
}},hasGroup:function(t,n,i){return !!e[t].event[n].type[i]
},createEvent:function(t,e,n,i){void 0===t.currentTarget&&(t.currentTarget=n);
var o=dttjindo.$Event(t);
return o.currentElement||(o.currentElement=n),o.realType=e,o.delegatedElement=i,o
},initEvent:function(n,i,o){var r=n._key,s=e[r].event,a=t(function(t,e,n,i){i=i||window.event;
var o=i.target||i.srcElement,r=dttjindo.$Element.eventManager,s=r.getEventConfig((i.currentTarget||this._element).__dttjindo__id),a=s.event[t].type;
for(var l in a){if(a.hasOwnProperty(l)){for(var d=a[l].normal,h=0,c=d.length;
c>h;
h++){d[h].call(this,n.createEvent(i,e,this._element,null))
}var u,p,f=a[l].delegate;
for(var _ in f){if(f.hasOwnProperty(_)&&(u=f[_].checker(o),u[0])){p=f[_].callback;
for(var m,g=0,v=p.length;
v>g;
g++){m=n.createEvent(i,e,this._element,u[1]),m.element=u[1],p[g].call(this,m)
}}}}}},n,[i,o,this]);
s[i]={listener:a,type:{}},dttjindo.$Element._eventBind(n._element,i,a,"focusin"===o||"focusout"===o)
},initGroup:function(t,n,i){var o=e[t].event[n].type;
o[i]={normal:[],delegate:{}}
},addEventListener:function(t,n,i,o,r,s){var a=e[t].event[n].type[i];
"normal"===o?a.normal.push(s):"delegate"===o&&(this.hasDelegate(a,r)||this.initDelegate(e[t].ele,a,r),this.addDelegate(a,r,s))
},hasDelegate:function(t,e){return !!t.delegate[e]
},containsElement:function(t,e,n,i){if(t==e&&i){return dttjindo.$$.test(e,n)
}for(var o=dttjindo.$$(n,t),r=0,s=o.length;
s>r;
r++){if(o[r]==e){return !0
}}return !1
},initDelegate:function(e,n,i){var o;
o=dttjindo.$Jindo.isString(i)?t(function(t,e,n){var i=n,o=this.containsElement(t,n,e,!0);
if(!o){for(var r=this._getParent(t,n),s=0,a=r.length;
a>s;
s++){if(i=r[s],this.containsElement(t,i,e)){o=!0;
break
}}}return[o,i]
},this,[e,i]):t(function(t,e,n){var i=n,o=e(t,n);
if(!o){for(var r=this._getParent(t,n),s=0,a=r.length;
a>s;
s++){if(i=r[s],e(t,i)){o=!0;
break
}}}return[o,i]
},this,[e,i]),n.delegate[i]={checker:o,callback:[]}
},addDelegate:function(t,e,n){t.delegate[e].callback.push(n)
},removeEventListener:function(t,n,i,o,r,s){var a;
try{a=e[t].event[n].type[i]
}catch(l){return
}var d,h=[];
if(d="normal"===o?a.normal:a.delegate[r].callback,n==dttjindo._p_.NONE_GROUP||dttjindo.$Jindo.isFunction(s)){for(var c=0,u=d.length;
u>c;
c++){(d[c]._origin_||d[c])!=s&&h.push(d[c])
}}"normal"===o?(delete a.normal,a.normal=h):"delegate"===o&&(delete a.delegate[r].callback,a.delegate[r].callback=h),this.cleanUp(t,n)
},cleanUpAll:function(){for(var t in e){e.hasOwnProperty(t)&&this.cleanUpUsingKey(t,!0)
}},cleanUpUsingKey:function(t,n){var i;
if(e[t]&&e[t].event){i=e[t].event;
for(var o in i){i.hasOwnProperty(o)&&this.cleanUp(t,o,n)
}}},cleanUp:function(t,n,i){var o;
try{o=e[t].event[n].type
}catch(r){return
}var s,a=!1;
if(!i){for(var l in o){if(o.hasOwnProperty(l)){if(s=o[l],s.normal.length){a=!0;
break
}var d=s.delegate;
for(var h in d){if(d.hasOwnProperty(h)&&d[h].callback.length){a=!0;
break
}}if(a){break
}}}}if(!a){dttjindo.$Element._unEventBind(e[t].ele,n,e[t].event[n].listener),delete e[t].event[n];
var c=!0,u=e[t].event;
for(var p in u){if(u.hasOwnProperty(p)){c=!1;
break
}}c&&delete e[t]
}},splitGroup:function(t){var e=/\s*(.+?)\s*\(\s*(.*?)\s*\)/.exec(t);
return e?{event:e[1].toLowerCase(),group:e[2].toLowerCase()}:{event:t.toLowerCase(),group:dttjindo._p_.NONE_GROUP}
},_getParent:function(t,e){for(var n=t,i=[],o=null,r=e.ownerDocument||e.document||document;
e.parentNode&&o!=n&&(o=e.parentNode,o!=r.documentElement);
){i[i.length]=o,e=o
}return i
}}
}(),dttjindo.$Element._domready=function(t,e){if(void 0===dttjindo.$Element._domready.list){var n=null;
dttjindo.$Element._domready.list=[e];
var i=!1,o=function(){if(!i){i=!0;
for(var e=dttjindo.$Element._domready.list.concat(),o={type:"domready",target:t,currentTarget:t};
n=e.shift();
){n(o)
}}};
!function(){try{t.documentElement.doScroll("left")
}catch(e){return void setTimeout(arguments.callee,50)
}o()
}(),t.onreadystatechange=function(){"complete"==t.readyState&&(t.onreadystatechange=null,o())
}
}else{dttjindo.$Element._domready.list.push(e)
}},dttjindo.$Element.prototype.appear=function(t,e){function n(){var n=g_checkVarType(arguments,{"4voi":[],"4num":["nDuration:Numeric"],"4fun":["nDuration:Numeric","fpCallback:Function+"]},"$Element#appear");
switch(n+""){case"4voi":t=0.3,e=function(){};
break;
case"4num":t=n.nDuration,e=function(){};
break;
case"4fun":t=n.nDuration,e=n.fpCallback
}return[t,e]
}var i,o=dttjindo._p_.getStyleIncludeVendorPrefix(),r=o.transition;
return i="transition"==r?"end":"End",dttjindo.$Element.prototype.appear=o.transition?function(t,e){var r=n.apply(this,dttjindo._p_._toArray(arguments));
t=r[0],e=r[1];
var s=this;
if(this.visible()){return setTimeout(function(){e.call(s,s)
},16),this
}var a=this._element,l=o.transition,d=function(){s.show(),a.style[l+"Property"]="",a.style[l+"Duration"]="",a.style[l+"TimingFunction"]="",a.style.opacity="",e.call(s,s),a.removeEventListener(l+i,arguments.callee,!1)
};
return this.visible()||(a.style.opacity=a.style.opacity||0,s.show()),a.addEventListener(l+i,d,!1),a.style[l+"Property"]="opacity",a.style[l+"Duration"]=t+"s",a.style[l+"TimingFunction"]="linear",dttjindo._p_.setOpacity(a,"1"),this
}:function(t,e){var i=n.apply(this,dttjindo._p_._toArray(arguments));
t=i[0],e=i[1];
var o=this,r=this.opacity();
if("none"==this._getCss(this._element,"display")&&(r=0),1==r){return this
}try{clearTimeout(this._fade_timer)
}catch(s){}var a=(1-r)/(100*(t||0.3)),l=function(){r+=a,o.opacity(r),r>=1?(o._element.style.filter="",e.call(o,o)):o._fade_timer=setTimeout(l,10)
};
return this.show(),l(),this
},this.appear.apply(this,arguments)
},dttjindo.$Element.prototype.disappear=function(t,e){function n(){var n=g_checkVarType(arguments,{"4voi":[],"4num":["nDuration:Numeric"],"4fun":["nDuration:Numeric","fpCallback:Function+"]},"$Element#disappear");
switch(n+""){case"4voi":t=0.3,e=function(){};
break;
case"4num":t=n.nDuration,e=function(){};
break;
case"4fun":t=n.nDuration,e=n.fpCallback
}return[t,e]
}var i,o=dttjindo._p_.getStyleIncludeVendorPrefix(),r=o.transition;
return i="transition"==r?"end":"End",dttjindo.$Element.prototype.disappear=o.transition?function(t,e){var r=n.apply(this,dttjindo._p_._toArray(arguments));
t=r[0],e=r[1];
var s=this;
if(!this.visible()){return setTimeout(function(){e.call(s,s)
},16),this
}var a=o.transition,l=this._element,d=function(){s.hide(),l.style[a+"Property"]="",l.style[a+"Duration"]="",l.style[a+"TimingFunction"]="",l.style.opacity="",e.call(s,s),l.removeEventListener(a+i,arguments.callee,!1)
};
return l.addEventListener(a+i,d,!1),l.style[a+"Property"]="opacity",l.style[a+"Duration"]=t+"s",l.style[a+"TimingFunction"]="linear",dttjindo._p_.setOpacity(l,"0"),this
}:function(t,e){var i=n.apply(this,dttjindo._p_._toArray(arguments));
t=i[0],e=i[1];
var o=this,r=this.opacity();
if(0==r){return this
}try{clearTimeout(this._fade_timer)
}catch(s){}var a=r/(100*(t||0.3)),l=function(){r-=a,o.opacity(r),0>=r?(o._element.style.display="none",o.opacity(1),e.call(o,o)):o._fade_timer=setTimeout(l,10)
};
return l(),this
},this.disappear.apply(this,arguments)
},dttjindo.$Element.prototype.offset=function(){var t=g_checkVarType(arguments,{g:[],s:["nTop:Numeric","nLeft:Numeric"]},"$Element#offset");
switch(t+""){case"g":return this.offset_get();
case"s":return this.offset_set(t.nTop,t.nLeft)
}},dttjindo.$Element.prototype.offset_set=function(t,e){var n=this._element;
isNaN(parseFloat(this._getCss(n,"top")))&&(n.style.top="0px"),isNaN(parseFloat(this._getCss(n,"left")))&&(n.style.left="0px");
var i=this.offset_get(),o={top:t-i.top,left:e-i.left};
return n.style.top=parseFloat(this._getCss(n,"top"))+o.top+"px",n.style.left=parseFloat(this._getCss(n,"left"))+o.left+"px",this
},dttjindo.$Element.prototype.offset_get=function(){var t=this._element,e=null,n=dttjindo._p_._JINDO_IS_SP&&!dttjindo._p_._JINDO_IS_CH,i=dttjindo._p_._JINDO_IS_IE,o=0;
i&&(o=document.documentMode?document.documentMode:dttjindo.$Agent().navigator().version);
var r=function(t){for(var e={left:0,top:0},n=t,i=n.offsetParent;
n=n.parentNode;
){n.offsetParent&&(e.left-=n.scrollLeft,e.top-=n.scrollTop),n==i&&(e.left+=t.offsetLeft+n.clientLeft,e.top+=t.offsetTop+n.clientTop,n.offsetParent||(e.left+=n.offsetLeft,e.top+=n.offsetTop),i=n.offsetParent,t=n)
}return e
},s=function(t){var n={left:0,top:0},r=t.ownerDocument||t.document||document,s=r.documentElement,a=r.body;
if(t.getBoundingClientRect){if(!e){var l=window==top;
if(!l){try{l=window.frameElement&&1==window.frameElement.frameBorder
}catch(d){}}i&&8>o&&window.external&&l&&document.body.contains(t)?(e={left:2,top:2},oBase=null):e={left:0,top:0}
}var h;
try{h=t.getBoundingClientRect()
}catch(d){h={left:0,top:0}
}t!==s&&t!==a&&(n.left=h.left-e.left,n.top=h.top-e.top,n.left+=s.scrollLeft||a.scrollLeft,n.top+=s.scrollTop||a.scrollTop)
}else{if(r.getBoxObjectFor){var h=r.getBoxObjectFor(t),c=r.getBoxObjectFor(s||a);
n.left=h.screenX-c.screenX,n.top=h.screenY-c.screenY
}else{for(var u=t;
u;
u=u.offsetParent){n.left+=u.offsetLeft,n.top+=u.offsetTop
}for(var u=t.parentNode;
u&&"BODY"!=u.tagName;
u=u.parentNode){"TR"==u.tagName&&(n.top+=2),n.left-=u.scrollLeft,n.top-=u.scrollTop
}}}return n
};
return(n?r:s)(t)
},dttjindo.$Element.prototype.evalScripts=function(sHTML){var oArgs=g_checkVarType(arguments,{"4str":["sHTML:String+"]},"$Element#evalScripts"),aJS=[],leftScript="<script(\\s[^>]+)*>(.*?)</",rightScript="script>";
return sHTML=sHTML.replace(new RegExp(leftScript+rightScript,"gi"),function(t,e,n){return aJS.push(n),""
}),eval(aJS.join("\n")),this
},dttjindo.$Element.prototype.clone=function(t){var e=g_checkVarType(arguments,{"default":[],set:["bDeep:Boolean"]},"$Element#clone");
return e+""=="default"&&(t=!0),dttjindo.$Element(this._element.cloneNode(t))
},dttjindo.$Element._common=function(t,e){try{return dttjindo.$Element(t)._element
}catch(n){throw TypeError(n.message.replace(/\$Element/g,"$Element#"+e).replace(/Element\.html/g,"Element.html#"+e))
}},dttjindo.$Element._prepend=function(t,e){var n=t.childNodes;
n.length>0?t.insertBefore(e,n[0]):t.appendChild(e)
},dttjindo.$Element.prototype.append=function(t){return this._element.appendChild(dttjindo.$Element._common(t,"append")),this
},dttjindo.$Element.prototype.prepend=function(t){return dttjindo.$Element._prepend(this._element,dttjindo.$Element._common(t,"prepend")),this
},dttjindo.$Element.prototype.replace=function(t){t=dttjindo.$Element._common(t,"replace"),dttjindo.cssquery&&dttjindo.cssquery.release();
var e=this._element,n=e.parentNode;
if(n&&n.replaceChild){return n.replaceChild(t,e),this
}var i=t;
return n.insertBefore(i,e),n.removeChild(e),this
},dttjindo.$Element.prototype.appendTo=function(t){return dttjindo.$Element._common(t,"appendTo").appendChild(this._element),this
},dttjindo.$Element.prototype.prependTo=function(t){return dttjindo.$Element._prepend(dttjindo.$Element._common(t,"prependTo"),this._element),this
},dttjindo.$Element.prototype.before=function(t){var e=dttjindo.$Element._common(t,"before");
return this._element.parentNode.insertBefore(e,this._element),this
},dttjindo.$Element.prototype.after=function(t){return t=dttjindo.$Element._common(t,"after"),this.before(t),dttjindo.$Element(t).before(this),this
},dttjindo.$Element.prototype.parent=function(t,e){var n=g_checkVarType(arguments,{"4voi":[],"4fun":["fpFunc:Function+"],"4nul":["fpFunc:Null"],for_function_number:["fpFunc:Function+","nLimit:Numeric"],for_null_number:["fpFunc:Null","nLimit:Numeric"]},"$Element#parent"),i=this._element;
switch(n+""){case"4voi":return i.parentNode?dttjindo.$Element(i.parentNode):null;
case"4fun":case"4nul":e=-1;
break;
case"for_function_number":case"for_null_number":0==n.nLimit&&(e=-1)
}for(var o=[],r=null;
i.parentNode&&0!=e--;
){try{r=dttjindo.$Element(i.parentNode)
}catch(i){r=null
}if(i.parentNode==document.documentElement){break
}(!t||t&&t.call(this,r))&&(o[o.length]=r),i=i.parentNode
}return o
},dttjindo.$Element.prototype.child=function(t,e){var n=g_checkVarType(arguments,{"4voi":[],"4fun":["fpFunc:Function+"],"4nul":["fpFunc:Null"],for_function_number:["fpFunc:Function+","nLimit:Numeric"],for_null_number:["fpFunc:Null","nLimit:Numeric"]},"$Element#child"),i=this._element,o=[],r=null;
switch(n+""){case"4voi":for(var s=i.childNodes,a=[],l=0,d=s.length;
d>l;
l++){if(1==s[l].nodeType){try{a.push(dttjindo.$Element(s[l]))
}catch(i){a.push(null)
}}}return a;
case"4fun":case"4nul":e=-1;
break;
case"for_function_number":case"for_null_number":0==n.nLimit&&(e=-1)
}return(r=function(e,n,i){for(var s=null,a=null,l=0;
l<e.childNodes.length;
l++){if(s=e.childNodes[l],1==s.nodeType){try{a=dttjindo.$Element(e.childNodes[l])
}catch(d){a=null
}(!t||t&&t.call(i,a))&&(o[o.length]=a),0!=n&&r(e.childNodes[l],n-1)
}}})(i,e-1,this),o
},dttjindo.$Element.prototype.prev=function(t){var e=g_checkVarType(arguments,{"4voi":[],"4fun":["fpFunc:Function+"],"4nul":["fpFunc:Null"]},"$Element#prev"),n=this._element,i=[];
switch(e+""){case"4voi":if(!n){return null
}do{if(n=n.previousSibling,n&&1==n.nodeType){try{return null==n?null:dttjindo.$Element(n)
}catch(n){return null
}}}while(n);
try{return null==n?null:dttjindo.$Element(n)
}catch(n){return null
}case"4fun":case"4nul":if(!n){return i
}do{if(n=n.previousSibling,n&&1==n.nodeType&&(!t||t.call(this,n))){try{i[i.length]=null==n?null:dttjindo.$Element(n)
}catch(n){i[i.length]=null
}}}while(n);
try{return i
}catch(n){return null
}}},dttjindo.$Element.prototype.next=function(t){var e=g_checkVarType(arguments,{"4voi":[],"4fun":["fpFunc:Function+"],"4nul":["fpFunc:Null"]},"$Element#next"),n=this._element,i=[];
switch(e+""){case"4voi":if(!n){return null
}do{if(n=n.nextSibling,n&&1==n.nodeType){try{return null==n?null:dttjindo.$Element(n)
}catch(n){return null
}}}while(n);
try{return null==n?null:dttjindo.$Element(n)
}catch(n){return null
}case"4fun":case"4nul":if(!n){return i
}do{if(n=n.nextSibling,n&&1==n.nodeType&&(!t||t.call(this,n))){try{i[i.length]=null==n?null:dttjindo.$Element(n)
}catch(n){i[i.length]=null
}}}while(n);
try{return i
}catch(n){return null
}}},dttjindo.$Element.prototype.first=function(){var t=this._element.firstElementChild||this._element.firstChild;
if(!t){return null
}for(;
t&&1!=t.nodeType;
){t=t.nextSibling
}try{return t?dttjindo.$Element(t):null
}catch(e){return null
}},dttjindo.$Element.prototype.last=function(){var t=this._element.lastElementChild||this._element.lastChild;
if(!t){return null
}for(;
t&&1!=t.nodeType;
){t=t.previousSibling
}try{return t?dttjindo.$Element(t):null
}catch(e){return null
}},dttjindo.$Element._contain=function(t,e){if(document.compareDocumentPosition){return !!(16&t.compareDocumentPosition(e))
}if(t.contains){return t!==e&&(t.contains?t.contains(e):!0)
}if(!document.body.contains){for(var n=t,i=e;
n&&n.parentNode;
){if(n=n.parentNode,n==i){return !0
}}return !1
}if(t===(e.ownerDocument||e.document)&&e.tagName&&"BODY"===e.tagName.toUpperCase()){return !0
}9===t.nodeType&&t!==e&&(t=t.body);
try{return t!==e&&(t.contains?t.contains(e):!0)
}catch(n){return !1
}},dttjindo.$Element.prototype.isChildOf=function(t){try{return dttjindo.$Element._contain(dttjindo.$Element(t)._element,this._element)
}catch(e){return !1
}},dttjindo.$Element.prototype.isParentOf=function(t){try{return dttjindo.$Element._contain(this._element,dttjindo.$Element(t)._element)
}catch(e){return !1
}},dttjindo.$Element.prototype.isEqual=function(t){try{return this._element===dttjindo.$Element(t)._element
}catch(e){return !1
}},dttjindo.$Element.prototype.fireEvent=function(){function t(t,e){var i=g_checkVarType(arguments,n,"$Element#fireEvent"),o=this._element;
if(dttjindo._p_.normalCustomEvent[t]){return dttjindo._p_.fireCustomEvent(o,t,this,!!dttjindo._p_.normalCustomEvent[t]),this
}t=(t+"").toLowerCase();
var r=document.createEventObject();
switch(i+""){case"4obj":e=i.oProps;
for(k in e){e.hasOwnProperty(k)&&(r[k]=e[k])
}r.button=(e.left?1:0)+(e.middle?4:0)+(e.right?2:0),r.relatedTarget=e.relatedElement||null
}return"input"==this.tag&&"click"==t&&("checkbox"==o.type?o.checked=!o.checked:"radio"==o.type&&(o.checked=!0)),this._element.fireEvent("on"+t,r),this
}function e(t,e){var i=g_checkVarType(arguments,n,"$Element#fireEvent"),o=this._element,r=t;
if(t=dttjindo.$Element.eventManager.revisionEvent("",t,t),dttjindo._p_.normalCustomEvent[t]){return dttjindo._p_.fireCustomEvent(o,t,this,!!dttjindo._p_.normalCustomEvent[t]),this
}var s="HTMLEvents";
t=(t+"").toLowerCase(),"click"==t||0==t.indexOf("mouse")?s="MouseEvent":r.indexOf("wheel")>0?(t="DOMMouseScroll",s=dttjindo._p_._JINDO_IS_FF?"MouseEvent":"MouseWheelEvent"):0==t.indexOf("key")?s="KeyboardEvent":t.indexOf("pointer")>0&&(s="MouseEvent",t=r);
var a;
switch(i+""){case"4obj":switch(e=i.oProps,e.button=0+(e.middle?1:0)+(e.right?2:0),e.ctrl=e.ctrl||!1,e.alt=e.alt||!1,e.shift=e.shift||!1,e.meta=e.meta||!1,s){case"MouseEvent":a=document.createEvent(s),a.initMouseEvent(t,!0,!0,null,e.detail||0,e.screenX||0,e.screenY||0,e.clientX||0,e.clientY||0,e.ctrl,e.alt,e.shift,e.meta,e.button,e.relatedElement||null);
break;
case"KeyboardEvent":if(window.KeyEvent){a=document.createEvent("KeyEvents"),a.initKeyEvent(t,!0,!0,window,e.ctrl,e.alt,e.shift,e.meta,e.keyCode,e.keyCode)
}else{try{a=document.createEvent("Events")
}catch(l){a=document.createEvent("UIEvents")
}finally{a.initEvent(t,!0,!0),a.ctrlKey=e.ctrl,a.altKey=e.alt,a.shiftKey=e.shift,a.metaKey=e.meta,a.keyCode=e.keyCode,a.which=e.keyCode
}}break;
default:a=document.createEvent(s),a.initEvent(t,!0,!0)
}break;
case"4str":a=document.createEvent(s),a.initEvent(t,!0,!0)
}return o.dispatchEvent(a),this
}var n={"4str":[dttjindo.$Jindo._F("sEvent:String+")],"4obj":["sEvent:String+","oProps:Hash+"]};
return dttjindo._p_.fireCustomEvent=function(t,e,n){var i,o,r=dttjindo._p_.normalCustomEvent[e];
for(var s in r){o=r[s],i=o.ele;
var a;
for(var l in o){if("_NONE_"===l){if(i==t||n.isChildOf(i)){a=o[l].wrap_listener;
for(var d=0,h=a.length;
h>d;
d++){a[d]()
}}}else{if(dttjindo.$Element.eventManager.containsElement(i,t,l,!1)){a=o[l].wrap_listener;
for(var d=0,h=a.length;
h>d;
d++){a[d]()
}}}}}},dttjindo.$Element.prototype.fireEvent=void 0!==document.dispatchEvent?e:t,this.fireEvent.apply(this,dttjindo._p_._toArray(arguments))
},dttjindo.$Element.prototype.empty=function(){return dttjindo.cssquery&&dttjindo.cssquery.release(),this.html(""),this
},dttjindo.$Element.prototype.remove=function(t){dttjindo.cssquery&&dttjindo.cssquery.release();
var e=dttjindo.$Element;
return e(e._common(t,"remove")).leave(),this
},dttjindo.$Element.prototype.leave=function(){var t=this._element;
return t.parentNode&&(dttjindo.cssquery&&dttjindo.cssquery.release(),t.parentNode.removeChild(t)),this
},dttjindo.$Element.prototype.wrap=function(t){var e=this._element;
return t=dttjindo.$Element._common(t,"wrap"),e.parentNode&&e.parentNode.insertBefore(t,e),t.appendChild(e),this
},dttjindo.$Element.prototype.ellipsis=function(t){g_checkVarType(arguments,{"4voi":[],"4str":["stringTail:String+"]},"$Element#ellipsis"),t=t||"...";
var e=this.text(),n=e.length,i=parseInt(this._getCss(this._element,"paddingTop"),10)+parseInt(this._getCss(this._element,"paddingBottom"),10),o=this._element.offsetHeight-i,r=0,s=this.text("A")._element.offsetHeight-i;
if(1.5*s>o){return this.text(e),this
}for(o=s;
1.5*s>o;
){r+=Math.max(Math.ceil((n-r)/2),1),o=this.text(e.substring(0,r)+t)._element.offsetHeight-i
}for(;
o>1.5*s;
){r--,o=this.text(e.substring(0,r)+t)._element.offsetHeight-i
}return this
},dttjindo.$Element.prototype.indexOf=function(t){try{for(var e=dttjindo.$Element(t)._element,n=this._element.childNodes,i=0,o=n.length,r=0;
o>r;
r++){if(1==n[r].nodeType){if(n[r]===e){return i
}i++
}}}catch(e){}return -1
},dttjindo.$Element.prototype.queryAll=function(t){for(var e=(g_checkVarType(arguments,{"4str":["sSelector:String+"]},"$Element#queryAll"),dttjindo.cssquery(t,this._element)),n=[],i=0,o=e.length;
o>i;
i++){n.push(dttjindo.$Element(e[i]))
}return n
},dttjindo.$Element.prototype.query=function(t){var e=(g_checkVarType(arguments,{"4str":["sSelector:String+"]},"$Element#query"),dttjindo.cssquery.getSingle(t,this._element));
return null===e?e:dttjindo.$Element(e)
},dttjindo.$Element.prototype.test=function(t){return g_checkVarType(arguments,{"4str":["sSelector:String+"]},"$Element#test"),dttjindo.cssquery.test(this._element,t)
},dttjindo.$Element.prototype.xpathAll=function(t){for(var e=(g_checkVarType(arguments,{"4str":["sXPath:String+"]},"$Element#xpathAll"),dttjindo.cssquery.xpath(t,this._element)),n=[],i=0,o=e.length;
o>i;
i++){n.push(dttjindo.$Element(e[i]))
}return n
},dttjindo.$Element.insertAdjacentHTML=function(t,e,n,i,o,r){var s=[e];
s.callee=arguments.callee;
var a=(g_checkVarType(s,{"4str":["sHTML:String+"]},"$Element#"+r),t._element);
if(e+="",a.insertAdjacentHTML&&!/^<(option|tr|td|th|col)(?:.*?)>/.test(dttjindo._p_.trim(e).toLowerCase())){a.insertAdjacentHTML(n,e)
}else{var l,d=a.ownerDocument||a.document||document,h=d.createDocumentFragment(),c=dttjindo._p_.trim(e),u={option:"select",tr:"tbody",thead:"table",tbody:"table",col:"table",td:"tr",th:"tr",div:"div"},p=/^\<(option|tr|thead|tbody|td|th|col)(?:.*?)\>/i.exec(c),f=null===p?"div":p[1].toLowerCase(),_=u[f];
l=dttjindo._p_._createEle(_,c,d,!0);
for(var m=l.getElementsByTagName("script"),g=0,v=m.length;
v>g;
g++){m[g].parentNode.removeChild(m[g])
}if("table"==a.tagName.toLowerCase()&&!a.getElementsByTagName("tbody").length&&!c.match(/<tbody[^>]*>/i)){var y=d.createElement("tbody"),E=c.match(/^<t(head|foot)[^>]*>/i);
E||(h.appendChild(y),h=y)
}for(;
l[i];
){h.appendChild(l[i])
}E&&h.appendChild(y),o(h.cloneNode(!0))
}return t
},dttjindo.$Element.prototype.appendHTML=function(t){return dttjindo.$Element.insertAdjacentHTML(this,t,"beforeEnd","firstChild",dttjindo.$Fn(function(t){var e=this._element;
if("table"===e.tagName.toLowerCase()){for(var n=e.childNodes,i=0,o=n.length;
o>i;
i++){if(1==n[i].nodeType){e=n[i];
break
}}}e.appendChild(t)
},this).bind(),"appendHTML")
},dttjindo.$Element.prototype.prependHTML=function(t){var e=dttjindo.$Element;
return e.insertAdjacentHTML(this,t,"afterBegin","firstChild",dttjindo.$Fn(function(t){var n=this._element;
if("table"===n.tagName.toLowerCase()){for(var i=n.childNodes,o=0,r=i.length;
r>o;
o++){if(1==i[o].nodeType){n=i[o];
break
}}}e._prepend(n,t)
},this).bind(),"prependHTML")
},dttjindo.$Element.prototype.beforeHTML=function(t){return dttjindo.$Element.insertAdjacentHTML(this,t,"beforeBegin","firstChild",dttjindo.$Fn(function(t){this._element.parentNode.insertBefore(t,this._element)
},this).bind(),"beforeHTML")
},dttjindo.$Element.prototype.afterHTML=function(t){return dttjindo.$Element.insertAdjacentHTML(this,t,"afterEnd","firstChild",dttjindo.$Fn(function(t){this._element.parentNode.insertBefore(t,this._element.nextSibling)
},this).bind(),"afterHTML")
},dttjindo.$Element.prototype.hasEventListener=function(t){var e,n=g_checkVarType(arguments,{"4str":["sEvent:String+"]},"$Element#hasEventListener"),i=!1,o=n.sEvent.toLowerCase();
if(this._key){if(e=this._element.ownerDocument||this._element.document||document,"load"==o&&this._element===e){i=dttjindo.$Element(window).hasEventListener(n.sEvent)
}else{if("domready"==o&&dttjindo.$Jindo.isWindow(this._element)){i=dttjindo.$Element(e).hasEventListener(n.sEvent)
}else{var r=dttjindo.$Element.eventManager.revisionEvent("",t);
i=!!dttjindo.$Element.eventManager.hasEvent(this._key,r,n.sEvent)
}}return i
}return !1
},dttjindo.$Element.prototype.preventTapHighlight=function(){if(dttjindo._p_._JINDO_IS_MO){var t="no_tap_highlight"+(new Date).getTime(),e=document.createElement("style"),n=document.getElementsByTagName("html")[0];
e.type="text/css",n.insertBefore(e,n.firstChild);
var i=e.sheet||e.styleSheet;
i.insertRule("."+t+" { -webkit-tap-highlight-color: rgba(0,0,0,0); }",0),i.insertRule("."+t+" * { -webkit-tap-highlight-color: rgba(0,0,0,.25); }",0),dttjindo.$Element.prototype.preventTapHighlight=function(e){return this[e?"addClass":"removeClass"](t)
}
}else{dttjindo.$Element.prototype.preventTapHighlight=function(){return this
}
}return this.preventTapHighlight.apply(this,dttjindo._p_._toArray(arguments))
},dttjindo.$Element.prototype.data=function(sKey,vValue){function toCamelCase(t){return t.replace(/\-(.)/g,function(t,e){return e.toUpperCase()
})
}function toDash(t){return t.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()
})
}var oType={g:["sKey:String+"],s4var:["sKey:String+","vValue:Variant"],s4obj:["oObj:Hash+"]},dttjindoKey="_dttjindo";
return dttjindo.$Element.prototype.data=document.body.dataset?function(t,e){var n,i=g_checkVarType(arguments,oType,"$Element#data"),o=dttjindo.$Jindo.isNull;
switch(i+""){case"g":t=toCamelCase(t);
var r=this._element.dataset[t+dttjindoKey],s=this._element.dataset[t];
return s?r?window.JSON.parse(s):s:null;
case"s4var":var a;
if(o(e)){return t=toCamelCase(t),delete this._element.dataset[t],delete this._element.dataset[t+dttjindoKey],this
}a={},a[t]=e,t=a;
case"s4obj":var l;
for(var d in t){l=toCamelCase(d),o(t[d])?(delete this._element.dataset[l],delete this._element.dataset[l+dttjindoKey]):(n=dttjindo.$Json._oldToString(t[d]),null!=n&&(this._element.dataset[l]=n,this._element.dataset[l+dttjindoKey]="dttjindo"))
}return this
}}:function(sKey,vValue){var sToStr,oArgs=g_checkVarType(arguments,oType,"$Element#data"),isNull=dttjindo.$Jindo.isNull;
switch(oArgs+""){case"g":sKey=toDash(sKey);
var isMakeFromJindo=this._element.getAttribute("data-"+sKey+dttjindoKey),sVal=this._element.getAttribute("data-"+sKey);
return isMakeFromJindo?null!=sVal?eval("("+sVal+")"):null:sVal;
case"s4var":var oData;
if(isNull(vValue)){return sKey=toDash(sKey),this._element.removeAttribute("data-"+sKey),this._element.removeAttribute("data-"+sKey+dttjindoKey),this
}oData={},oData[sKey]=vValue,sKey=oData;
case"s4obj":var sChange;
for(var i in sKey){sChange=toDash(i),isNull(sKey[i])?(this._element.removeAttribute("data-"+sChange),this._element.removeAttribute("data-"+sChange+dttjindoKey)):(sToStr=dttjindo.$Json._oldToString(sKey[i]),null!=sToStr&&(this._element.setAttribute("data-"+sChange,sToStr),this._element.setAttribute("data-"+sChange+dttjindoKey,"dttjindo")))
}return this
}},this.data.apply(this,dttjindo._p_._toArray(arguments))
},dttjindo.$ElementList=function(t){var e=arguments.callee;
if(t instanceof e){return t
}if(!(this instanceof e)){try{return new e(t)
}catch(n){if(n instanceof TypeError){return null
}throw n
}}var i=g_checkVarType(arguments,{"4arr":["aEle:Array+"],"4str":["sCssQuery:String+"],"4nul":["oEle:Null"],"4und":["oEle:Undefined"]},"$ElementList");
switch(i+""){case"4arr":t=i.aEle;
break;
case"4str":t=dttjindo.cssquery(i.sCssQuery);
break;
case"4nul":case"4und":t=[]
}this._elements=[];
for(var o=0,r=t.length;
r>o;
o++){this._elements.push(dttjindo.$Element(t[o]))
}},function(t){for(var e=["show","hide","toggle","addClass","removeClass","toggleClass","fireEvent","leave","empty","className","width","height","text","html","css","attr"],n=0,i=e.length;
i>n;
n++){var o=e[n];
dttjindo.$Element.prototype[o]&&(t[e[n]]=function(t){return function(){try{for(var e=[],n=0,i=arguments.length;
i>n;
n++){e.push(arguments[n])
}for(var o=0,r=this._elements.length;
r>o;
o++){this._elements[o][t].apply(this._elements[o],e)
}return this
}catch(s){throw TypeError(s.message.replace(/\$Element/g,"$Elementlist#"+t).replace(/Element\.html/g,"Elementlist.html#"+t))
}}
}(e[n]))
}for(var r=["appear","disappear"],n=0,i=r.length;
i>n;
n++){dttjindo.$Element.prototype[o]&&(t[r[n]]=function(t){return function(e,n){try{for(var i=this,o=0,r=this._elements.length;
r>o;
o++){o==r-1?this._elements[o][t](e,function(){n&&n(i)
}):this._elements[o][t](e)
}return this
}catch(s){throw TypeError(s.message.replace(/\$Element/g,"$Elementlist#"+t).replace(/Element\.html/g,"Elementlist.html#"+t))
}}
}(r[n]))
}}(dttjindo.$ElementList.prototype),dttjindo.$ElementList.prototype.get=function(t){return g_checkVarType(arguments,{"4num":["nIdx:Numeric"]},"$ElementList#get"),this._elements[t]
},dttjindo.$ElementList.prototype.getFirst=function(){return this._elements[0]
},dttjindo.$ElementList.prototype.getLast=function(){return this._elements[Math.max(this._elements.length-1,0)]
},dttjindo.$ElementList.prototype.length=function(){var t=(g_checkVarType(arguments,{"4voi":[],"4num":[dttjindo.$Jindo._F("nLen:Numeric")],"4var":["nLen:Numeric","oValue:Variant"]},"$ElementList#length"),dttjindo.$A(this._elements));
try{return t.length.apply(t,dttjindo._p_._toArray(arguments))
}catch(e){throw TypeError(e.message.replace(/\$A/g,"$Elementlist#length").replace(/A\.html/g,"Elementlist.html#length"))
}},dttjindo.$ElementList.prototype.$value=function(){return this._elements
},dttjindo.$Form=function(t){var e=arguments.callee;
if(t instanceof e){return t
}if(!(this instanceof e)){try{return dttjindo.$Jindo._maxWarn(arguments.length,1,"$Form"),new e(t)
}catch(n){if(n instanceof TypeError){return null
}throw n
}}var i=g_checkVarType(arguments,{"4str":["oForm:String+"],"4ele":["oForm:Element+"]},"$Form");
switch(i+""){case"4str":t=dttjindo.$(t)
}if(!t.tagName||"FORM"!=t.tagName.toUpperCase()){throw TypeError("only form")
}this._form=t
},dttjindo.$Form.prototype.$value=function(){return this._form
},dttjindo.$Form.prototype.serialize=function(){var t=this,e={},n=arguments.length,i=function(n,i){if(!n.disabled){var o=t.value(i);
void 0!==o&&(e[i]=o)
}};
if(0==n){for(var o=this._form.elements.length,r=0;
o>r;
r++){var s=this._form.elements[r];
s.name&&i(s,s.name)
}}else{for(var r=0;
n>r;
r++){i(this.element(arguments[r]),arguments[r])
}}return dttjindo.$H(e).toQueryString()
},dttjindo.$Form.prototype.element=function(t){var e=g_checkVarType(arguments,{"4voi":[],"4str":[dttjindo.$Jindo._F("sKey:String+")]},"$Form#element");
switch(e+""){case"4voi":return dttjindo._p_._toArray(this._form.elements);
case"4str":return this._form.elements[t+""]
}},dttjindo.$Form.prototype.enable=function(t){var e=g_checkVarType(arguments,{s4bln:["sName:String+","bEnable:Boolean"],s4obj:["oObj:Hash+"],g:[dttjindo.$Jindo._F("sName:String+")]},"$Form#enable");
switch(e+""){case"s4bln":var n=this._form[t];
if(!n){return this
}n=1==n.nodeType?[n]:n;
for(var i=e.bEnable,o=0;
o<n.length;
o++){n[o].disabled=!i
}return this;
case"s4obj":t=e.oObj;
var r=this;
for(var s in t){t.hasOwnProperty(s)&&r.enable(s,t[s])
}return this;
case"g":var n=this._form[t];
if(!n){return this
}n=1==n.nodeType?[n]:n;
for(var a=!0,o=0;
o<n.length;
o++){if(n[o].disabled){a=!1;
break
}}return a
}},dttjindo.$Form.prototype.value=function(t){var e,n,i=g_checkVarType(arguments,{s4str:["sKey:String+","vValue:Variant"],s4obj:[dttjindo.$Jindo._F("oObj:Hash+")],g:["sKey:String+"]},"$Form#value");
if(i+""=="s4obj"){var o=this;
t=i.oObj;
for(var r in t){t.hasOwnProperty(r)&&o.value(r,t[r])
}return this
}var s=this._form[t];
if(!s){throw new dttjindo.$Error(t+dttjindo.$Except.NONE_ELEMENT,"$Form#value")
}switch(s=1==s.nodeType?[s]:s,i+""){case"s4str":for(var a=i.vValue,l=s.length,d=0;
l>d;
d++){var h=s[d];
switch(h.type){case"radio":h.checked=h.value==a;
break;
case"checkbox":h.checked=a.constructor==Array?dttjindo.$A(a).has(h.value):h.value==a;
break;
case"select-one":for(var c=-1,d=0,u=h.options.length;
u>d;
d++){e=h.options[d],e.value!=a&&e.text!=a||(c=d)
}h.selectedIndex=c;
break;
case"select-multiple":var c=-1;
if(dttjindo.$Jindo.isArray(a)){for(var p=dttjindo.$A(a),d=0,u=h.options.length;
u>d;
d++){e=h.options[d],h.options[d].selected=p.has(e.value)||p.has(e.text)
}}else{for(var d=0,u=h.options.length;
u>d;
d++){e=h.options[d],e.value!=a&&e.text!=a||(c=d)
}h.selectedIndex=c
}break;
default:h.value=a
}}return this;
case"g":for(var f=[],l=s.length,d=0;
l>d;
d++){var h=s[d];
switch(h.type){case"radio":case"checkbox":h.checked&&f.push(h.value);
break;
case"select-one":-1!=h.selectedIndex&&(e=h.options[h.selectedIndex],n=""==e.value?e.text:e.value,f.push(n));
break;
case"select-multiple":if(-1!=h.selectedIndex){for(var d=0,u=h.options.length;
u>d;
d++){e=h.options[d],e.selected&&(n=""==e.value?e.text:e.value,f.push(n))
}}break;
default:f.push(h.value)
}}return f.length>1?f:f[0]
}},dttjindo.$Form.prototype.submit=function(){var t=g_checkVarType(arguments,{voi:[],"4str":["sTargetName:String+"],"4fun":["fValidation:Function+"],"4fun2":["sTargetName:String+","fValidation:Function+"]},"$Form#submit"),e=null;
switch(t+""){case"4str":e=this._form.target,this._form.target=t.sTargetName;
break;
case"4fun":case"4fun2":if(!t.fValidation.call(this,this._form)){return this
}t+""=="4fun2"&&(e=this._form.target,this._form.target=t.sTargetName)
}return this._form.submit(),dttjindo.$Jindo.isNull(e)||(this._form.target=e),this
},dttjindo.$Form.prototype.reset=function(t){var e=g_checkVarType(arguments,{"4voi":[],"4fun":["fValidation:Function+"]},"$Form#reset");
return e+""!="4fun"||t.call(this,this._form)?(this._form.reset(),this):this
},dttjindo.$Document=function(t){var e=arguments.callee;
if(t instanceof e){return t
}if(!(this instanceof e)){try{return dttjindo.$Jindo._maxWarn(arguments.length,1,"$Document"),new e(t||document)
}catch(n){if(n instanceof TypeError){return null
}throw n
}}var i=g_checkVarType(arguments,{"4doc":["oDocument:Document+"]},"$Document");
this._doc=null==i?document:t,this._docKey="Standards"==this.renderingMode()?"documentElement":"body"
},function(){var t=dttjindo.cssquery,e={query:t.getSingle,queryAll:t,xpathAll:t.xpath};
for(var n in e){dttjindo.$Document.prototype[n]=function(t,e){return function(n){return g_checkVarType(arguments,{"4str":["sQuery:String+"]},"$Document#"+t),e(n,this._doc)
}
}(n,e[n])
}}(),dttjindo.$Document.prototype.$value=function(){return this._doc
},dttjindo.$Document.prototype.scrollSize=function(){var t=this._doc[dttjindo._p_._JINDO_IS_WK?"body":this._docKey];
return{width:Math.max(t.scrollWidth,t.clientWidth),height:Math.max(t.scrollHeight,t.clientHeight)}
},dttjindo.$Document.prototype.scrollPosition=function(){var t=this._doc[dttjindo._p_._JINDO_IS_WK?"body":this._docKey];
return{left:t.scrollLeft||window.pageXOffset||window.scrollX||0,top:t.scrollTop||window.pageYOffset||window.scrollY||0}
},dttjindo.$Document.prototype.clientSize=function(){var t=this._doc[this._docKey],e=dttjindo._p_._JINDO_IS_SP&&!dttjindo._p_._JINDO_IS_CH;
return e?{width:window.innerWidth,height:window.innerHeight}:{width:t.clientWidth,height:t.clientHeight}
},dttjindo.$Document.prototype.renderingMode=function(){var t,e=(dttjindo._p_._j_ag,dttjindo._p_._JINDO_IS_IE),n=dttjindo._p_._JINDO_IS_WK&&!dttjindo._p_._JINDO_IS_CH&&navigator.vendor.indexOf("Apple")>-1;
return t="compatMode" in this._doc?"CSS1Compat"==this._doc.compatMode?"Standards":e?"Quirks":"Almost":n?"Standards":"Quirks"
},dttjindo.$Window=function(t){var e=arguments.callee;
if(t instanceof e){return t
}if(!(this instanceof e)){try{return dttjindo.$Jindo._maxWarn(arguments.length,1,"$Window"),new e(t||window)
}catch(n){if(n instanceof TypeError){return null
}throw n
}}g_checkVarType(arguments,{"4win":["el:Window+"]},"$Window"),this._win=t
},dttjindo.$Window.prototype.$value=function(){return this._win
},dttjindo.$Window.prototype.resizeTo=function(t,e){return g_checkVarType(arguments,{"4num":["nWidth:Numeric","nHeight:Numeric"]},"$Window#resizeTo"),this._win.resizeTo(t,e),this
},dttjindo.$Window.prototype.resizeBy=function(t,e){return g_checkVarType(arguments,{"4num":["nWidth:Numeric","nHeight:Numeric"]},"$Window#resizeBy"),this._win.resizeBy(t,e),this
},dttjindo.$Window.prototype.moveTo=function(t,e){return g_checkVarType(arguments,{"4num":["nLeft:Numeric","nTop:Numeric"]},"$Window#moveTo"),this._win.moveTo(t,e),this
},dttjindo.$Window.prototype.moveBy=function(t,e){return g_checkVarType(arguments,{"4num":["nLeft:Numeric","nTop:Numeric"]},"$Window#moveBy"),this._win.moveBy(t,e),this
},dttjindo.$Window.prototype.sizeToContent=function(t,e){if(g_checkVarType(arguments,{"4num":["nWidth:Numeric","nHeight:Numeric"],"4voi":[]},"$Window#sizeToContent"),this._win.sizeToContent){this._win.sizeToContent()
}else{if(2!=arguments.length){var n,i,o=this._win,r=this._win.document;
o.innerHeight?(n=o.innerWidth,i=o.innerHeight):r.documentElement&&r.documentElement.clientHeight?(n=r.documentElement.clientWidth,i=r.documentElement.clientHeight):r.body&&(n=r.body.clientWidth,i=r.body.clientHeight);
var s,a,l=r.body.scrollHeight,d=r.body.offsetHeight;
l>d?(s=r.body.scrollWidth,a=r.body.scrollHeight):(s=r.body.offsetWidth,a=r.body.offsetHeight),t=s-n,e=a-i
}this._win.resizeBy(t,e)
}return this
},dttjindo.$S=function(t){var e=arguments.callee;
if(t instanceof e){return t
}if(!(this instanceof e)){try{return dttjindo.$Jindo._maxWarn(arguments.length,1,"$Json"),new e(t||"")
}catch(n){if(n instanceof TypeError){return null
}throw n
}}var i=g_checkVarType(arguments,{nul:["nul:Null"],unde:["unde:Undefined"],"4var":["str:Variant"]},"$S");
switch(i+""){case"nul":case"unde":this._str="";
break;
case"4var":this._str=i.str.toString()
}},dttjindo.$S.prototype.$value=function(){return this._str
},dttjindo.$S.prototype.toString=dttjindo.$S.prototype.$value,dttjindo.$S.prototype.trim=function(){return dttjindo.$S.prototype.trim="a".trim?function(){return dttjindo.$S(this._str.trim())
}:function(){return dttjindo.$S(dttjindo._p_.trim(this._str))
},this.trim()
},dttjindo.$S.prototype.escapeHTML=function(){var t={'"':"quot","&":"amp","<":"lt",">":"gt","'":"#39"},e=this._str.replace(/[<>&"']/g,function(e){return t[e]?"&"+t[e]+";":e
});
return dttjindo.$S(e)
},dttjindo.$S.prototype.stripTags=function(){return dttjindo.$S(this._str.replace(/<\/?(?:h[1-5]|[a-z]+(?:\:[a-z]+)?)[^>]*>/gi,""))
},dttjindo.$S.prototype.times=function(){var t=g_checkVarType(arguments,{"4str":["nTimes:Numeric"]},"$S#times");
return t?dttjindo.$S(Array(t.nTimes+1).join(this._str)):this
},dttjindo.$S.prototype.unescapeHTML=function(){var t={quot:'"',amp:"&",lt:"<",gt:">","#39":"'"},e=this._str.replace(/&([a-z]+|#[0-9]+);/g,function(e,n){return t[n]?t[n]:e
});
return dttjindo.$S(e)
},dttjindo.$S.prototype.escape=function(){var t=this._str.replace(/([\u0080-\uFFFF]+)|[\n\r\t"'\\]/g,function(t,e,n){return e?escape(e).replace(/%/g,"\\"):(n={"\n":"\\n","\r":"\\r","	":"\\t"})[t]?n[t]:"\\"+t
});
return dttjindo.$S(t)
},dttjindo.$S.prototype.bytes=function(t){var e,n,i=g_checkVarType(arguments,{"4voi":[],"4num":["nConfig:Numeric"],"4obj":["nConfig:Hash+"]},"$S#bytes"),o=0,r=0,s=0,a=this._str.length,l=(document.charset||document.characterSet||document.defaultCharset)+"";
switch(i+""){case"4voi":e=!1;
break;
case"4num":e=!0,n=t;
break;
case"4obj":l=t.charset||l,n=t.size||!1,e=!!n
}if("utf-8"==l.toLowerCase()){for(s=0;
a>s;
s++){if(o=this._str.charCodeAt(s),r+=128>o?1:2048>o?2:65536>o?3:4,e&&r>n){this._str=this._str.substr(0,s);
break
}}}else{for(s=0;
a>s;
s++){if(r+=this._str.charCodeAt(s)>128?2:1,e&&r>n){this._str=this._str.substr(0,s);
break
}}}return e?this:r
},dttjindo.$S.prototype.parseString=function(){if(""==this._str){return{}
}for(var t,e,n,i=this._str.split(/&/g),o={},r=!1,s=0;
s<i.length;
s++){e=i[s].substring(0,t=i[s].indexOf("=")),r=!1;
try{n=decodeURIComponent(i[s].substring(t+1))
}catch(a){r=!0,n=decodeURIComponent(unescape(i[s].substring(t+1)))
}"[]"==e.substr(e.length-2,2)?(e=e.substring(0,e.length-2),dttjindo.$Jindo.isUndefined(o[e])&&(o[e]=[]),o[e][o[e].length]=r?escape(n):n):o[e]=r?escape(n):n
}return o
},dttjindo.$S.prototype.escapeRegex=function(){var t=this._str,e=/([\?\.\*\+\-\/\(\)\{\}\[\]\:\!\^\$\\\|])/g;
return dttjindo.$S(t.replace(e,"\\$1"))
},dttjindo.$S.prototype.format=function(){var t=arguments,e=0,n=this._str.replace(/%([ 0])?(-)?([1-9][0-9]*)?([bcdsoxX])/g,function(n,i,o,r,s){var a=t[e++],l="",d="";
if(r=r?+r:0,"s"==s){l=a+""
}else{if(" bcdoxX".indexOf(s)>0){if(!dttjindo.$Jindo.isNumeric(a)){return""
}l="c"==s?String.fromCharCode(a):a.toString({b:2,d:10,o:8,x:16,X:16}[s])," X".indexOf(s)>0&&(l=l.toUpperCase())
}}return l.length<r&&(d=dttjindo.$S(i||" ").times(r-l.length)._str),"-"==o?l+=d:l=d+l,l
});
return dttjindo.$S(n)
},dttjindo.$Json=function(t){var e=arguments.callee;
if(t instanceof e){return t
}if(!(this instanceof e)){try{return dttjindo.$Jindo._maxWarn(arguments.length,1,"$Json"),new e(arguments.length?t:{})
}catch(n){if(n instanceof TypeError){return null
}throw n
}}g_checkVarType(arguments,{"4var":["oObject:Variant"]},"$Json"),this._object=t
},dttjindo.$Json._oldMakeJSON=function(sObject,sType){try{if(!dttjindo.$Jindo.isString(sObject)||!/^(?:\s*)[\{\[]/.test(sObject)){return sObject
}sObject=eval("("+sObject+")")
}catch(e){throw new dttjindo.$Error(dttjindo.$Except.PARSE_ERROR,sType)
}return sObject
},dttjindo.$Json.fromXML=function(t){var e=dttjindo.$Jindo,n=(e.checkVarType(arguments,{"4str":["sXML:String+"]},"<static> $Json#fromXML"),{}),i=/\s*<(\/?[\w:\-]+)((?:\s+[\w:\-]+\s*=\s*(?:"(?:\\"|[^"])*"|'(?:\\'|[^'])*'))*)\s*((?:\/>)|(?:><\/\1>|\s*))|\s*<!\[CDATA\[([\w\W]*?)\]\]>\s*|\s*>?([^<]*)/gi,o=/^[0-9]+(?:\.[0-9]+)?$/,r={"&amp;":"&","&nbsp;":" ","&quot;":'"',"&lt;":"<","&gt;":">"},s={tags:["/"],stack:[n]},a=function(t){return e.isUndefined(t)?"":t.replace(/&[a-z]+;/g,function(t){return e.isString(r[t])?r[t]:t
})
},l=function(t,e){t.replace(/([\w\:\-]+)\s*=\s*(?:"((?:\\"|[^"])*)"|'((?:\\'|[^'])*)')/g,function(t,n,i,o){e[n]=a((i?i.replace(/\\"/g,'"'):void 0)||(o?o.replace(/\\'/g,"'"):void 0))
})
},d=function(t){for(var e in t){if(t.hasOwnProperty(e)){if(Object.prototype[e]){continue
}return !1
}}return !0
},h=function(t,n,i,r,h,c){var u,p="",f=s.stack.length-1;
if(e.isString(n)&&n){if("/"!=n.substr(0,1)){var _="string"==typeof i&&i,m="string"==typeof r&&r,g=!_&&m?"":{};
if(u=s.stack[f],e.isUndefined(u[n])){u[n]=g,u=s.stack[f+1]=u[n]
}else{if(u[n] instanceof Array){var v=u[n].length;
u[n][v]=g,u=s.stack[f+1]=u[n][v]
}else{u[n]=[u[n],g],u=s.stack[f+1]=u[n][1]
}}_&&l(i,u),s.tags[f+1]=n,m&&(s.tags.length--,s.stack.length--)
}else{s.tags.length--,s.stack.length--
}}else{e.isString(h)&&h?p=h:e.isString(c)&&c&&(p=a(c))
}if(p.replace(/^\s+/g,"").length>0){var y=s.stack[f-1],E=s.tags[f];
if(o.test(p)?p=parseFloat(p):"true"==p?p=!0:"false"==p&&(p=!1),e.isUndefined(y)){return
}if(y[E] instanceof Array){var j=y[E];
e.isHash(j[j.length-1])&&!d(j[j.length-1])?(j[j.length-1].$cdata=p,j[j.length-1].toString=function(){return p
}):j[j.length-1]=p
}else{e.isHash(y[E])&&!d(y[E])?(y[E].$cdata=p,y[E].toString=function(){return p
}):y[E]=p
}}};
return t=t.replace(/<(\?|\!-)[^>]*>/g,""),t.replace(i,h),dttjindo.$Json(n)
},dttjindo.$Json.prototype.get=function(t){var e=dttjindo.$Jindo,n=(e.checkVarType(arguments,{"4str":["sPath:String+"]},"$Json#get"),dttjindo.$Json._oldMakeJSON(this._object,"$Json#get"));
if(!e.isHash(n)&&!e.isArray(n)){throw new dttjindo.$Error(dttjindo.$Except.JSON_MUST_HAVE_ARRAY_HASH,"$Json#get")
}for(var i,o,r,s,a,l=t.split("/"),d=/^([\w:\-]+)\[([0-9]+)\]$/,h=[[n]],c=h[0],u=l.length,p=0;
u>p;
p++){if("."!=l[p]&&""!=l[p]){if(".."==l[p]){h.length--
}else{if(r=[],o=-1,i=c.length,0==i){return[]
}for(d.test(l[p])&&(o=+RegExp.$2),s=0;
i>s;
s++){a=c[s][l[p]],e.isUndefined(a)||(e.isArray(a)?o>-1?o<a.length&&(r[r.length]=a[o]):r=r.concat(a):-1==o&&(r[r.length]=a))
}h[h.length]=r
}c=h[h.length-1]
}}return c
},dttjindo.$Json.prototype.toString=function(){return dttjindo.$Json._oldToString(this._object)
},dttjindo.$Json._oldToString=function(t){var e=dttjindo.$Jindo,n={$:function(t){return e.isNull(t)||!e.isString(t)&&1/0==t?"null":e.isFunction(t)?void 0:e.isUndefined(t)?void 0:e.isBoolean(t)?t?"true":"false":e.isString(t)?this.s(t):e.isNumeric(t)?t:e.isArray(t)?this.a(t):e.isHash(t)?this.o(t):e.isDate(t)?t+"":"object"==typeof t||e.isRegExp(t)?"{}":isNaN(t)?"null":void 0
},s:function(t){var e={'"':'\\"',"\\":"\\\\","\n":"\\n","\r":"\\r","	":"\\t"},n=function(t){return void 0!==e[t]?e[t]:t
};
return'"'+t.replace(/[\\"'\n\r\t]/g,n)+'"'
},a:function(t){for(var n="[",i="",o=t.length,r=0;
o>r;
r++){e.isFunction(t[r])||(n+=i+this.$(t[r]),i||(i=","))
}return n+"]"
},o:function(t){t=dttjindo.$H(t).ksort().$value();
var n="{",i="";
for(var o in t){if(t.hasOwnProperty(o)){if(e.isUndefined(t[o])||e.isFunction(t[o])){continue
}n+=i+this.s(o)+":"+this.$(t[o]),i||(i=",")
}}return n+"}"
}};
return n.$(t)
},dttjindo.$Json.prototype.toXML=function(){var t=function(e,n){var i=function(t,e){return"<"+n+(e||"")+">"+t+"</"+n+">"
};
switch(typeof e){case"undefined":case"null":return i("");
case"number":return i(e);
case"string":return i(e.indexOf("<")<0?e.replace(/&/g,"&amp;"):"<![CDATA["+e+"]]>");
case"boolean":return i(String(e));
case"object":var o="";
if(e instanceof Array){for(var r=e.length,s=0;
r>s;
s++){o+=t(e[s],n)
}}else{var a="";
for(var l in e){if(e.hasOwnProperty(l)){if("$cdata"==l||"function"==typeof e[l]){continue
}o+=t(e[l],l)
}}n&&(o=i(o,a))
}return o
}};
return t(dttjindo.$Json._oldMakeJSON(this._object,"$Json#toXML"),"")
},dttjindo.$Json.prototype.toObject=function(){return dttjindo.$Json._oldMakeJSON(this._object,"$Json#toObject")
},dttjindo.$Json.prototype.compare=function(t){function e(t,e){if(n.isArray(t)){if(t.length!==e.length){return !1
}for(var i=0,o=t.length;
o>i;
i++){if(!arguments.callee(t[i],e[i])){return !1
}}return !0
}if(n.isRegExp(t)||n.isFunction(t)||n.isDate(t)){return String(t)===String(e)
}if("number"==typeof t&&isNaN(t)){return isNaN(e)
}if(n.isHash(t)){var o=0;
for(var r in t){o++
}for(var r in e){o--
}if(0!==o){return !1
}for(var r in t){if(r in e==0||!arguments.callee(t[r],e[r])){return !1
}}return !0
}return t===e
}var n=dttjindo.$Jindo;
n.checkVarType(arguments,{"4obj":["oData:Hash+"],"4arr":["oData:Array+"]},"$Json#compare");
try{return e(dttjindo.$Json._oldMakeJSON(this._object,"$Json#compare"),t)
}catch(i){return !1
}},dttjindo.$Json.prototype.$value=dttjindo.$Json.prototype.toObject,dttjindo.$Ajax=function(t,e){function n(){var t=window.XMLHttpRequest&&new XMLHttpRequest;
if(this._checkCORSUrl(this._url)){if(t&&"withCredentials" in t){return t
}if(window.XDomainRequest){return this._bXDomainRequest=!0,new XDomainRequest
}}else{if(t){return t
}if(window.ActiveXObject){try{return new ActiveXObject("MSXML2.XMLHTTP")
}catch(e){return new ActiveXObject("Microsoft.XMLHTTP")
}}}return null
}var i=arguments.callee;
if(!(this instanceof i)){try{return dttjindo.$Jindo._maxWarn(arguments.length,2,"$Ajax"),new i(t,e||{})
}catch(o){if(o instanceof TypeError){return null
}throw o
}}var r=dttjindo.$Ajax,s=dttjindo.$Error,a=dttjindo.$Except,l=g_checkVarType(arguments,{"4str":["sURL:String+"],"4obj":["sURL:String+","oOption:Hash+"]},"$Ajax");
l+""=="for_string"&&(l.oOption={});
var d=location.toString(),h="";
try{h=d.match(/^https?:\/\/([a-z0-9_\-\.]+)/i)[1]
}catch(o){}this._status=0,this._url=l.sURL,this._headers={},this._options={type:"xhr",method:"post",proxy:"",timeout:0,onload:function(){},onerror:null,ontimeout:function(){},jsonp_charset:"utf-8",callbackid:"",callbackname:"",sendheader:!0,async:!0,decode:!0,postBody:!1,withCredentials:!1},this._options=r._setProperties(l.oOption,this),r._validationOption(this._options,"$Ajax"),r.CONFIG&&this.option(r.CONFIG);
var c=this._options;
c.type=c.type.toLowerCase(),c.method=c.method.toLowerCase(),void 0===window["__"+dttjindo._p_.dttjindoName+"_callback"]&&(window["__"+dttjindo._p_.dttjindoName+"_callback"]=[],window["__"+dttjindo._p_.dttjindoName+"2_callback"]=[]);
var u=this;
switch(c.type){case"put":case"delete":case"get":case"post":c.method=c.type;
case"xhr":this._request=n.call(this),this._checkCORS(this._url,c.type,"");
break;
case"flash":if(!r.SWFRequest){throw new s(dttjindo._p_.dttjindoName+".$Ajax.SWFRequest"+a.REQUIRE_AJAX,"$Ajax")
}this._request=new r.SWFRequest(function(){return u.option.apply(u,arguments)
});
break;
case"jsonp":if(!r.JSONPRequest){throw new s(dttjindo._p_.dttjindoName+".$Ajax.JSONPRequest"+a.REQUIRE_AJAX,"$Ajax")
}this._request=new r.JSONPRequest(function(){return u.option.apply(u,arguments)
});
break;
case"iframe":if(!r.FrameRequest){throw new s(dttjindo._p_.dttjindoName+".$Ajax.FrameRequest"+a.REQUIRE_AJAX,"$Ajax")
}this._request=new r.FrameRequest(function(){return u.option.apply(u,arguments)
})
}},dttjindo.$Ajax.prototype._checkCORSUrl=function(t){return/^http/.test(t)&&!new RegExp("^http://"+window.location.host,"i").test(t)
},dttjindo.$Ajax.prototype._checkCORS=function(t,e,n){if(this._bCORS=!1,this._checkCORSUrl(t)&&"xhr"===e){if(!this._request||!(this._bXDomainRequest||"withCredentials" in this._request)){throw new dttjindo.$Error(dttjindo.$Except.NOT_SUPPORT_CORS,"$Ajax"+n)
}this._bCORS=!0
}},dttjindo.$Ajax._setProperties=function(t,e){t=t||{};
var n;
return"put"!=t.type&&"delete"!=t.type&&"get"!=t.type&&"post"!=t.type||t.method||(t.method=t.type,n=t.type="xhr"),n=t.type=t.type||"xhr",t.onload=dttjindo.$Fn(t.onload||function(){},e).bind(),t.method=t.method||"post","iframe"!=n&&(t.timeout=t.timeout||0,t.ontimeout=dttjindo.$Fn(t.ontimeout||function(){},e).bind(),t.onerror=dttjindo.$Fn(t.onerror||function(){},e).bind()),"xhr"==n?(t.async=void 0===t.async?!0:t.async,t.postBody=void 0===t.postBody?!1:t.postBody,t.withCredentials=void 0===t.withCredentials?!1:t.withCredentials):"jsonp"==n?(t.method="get",t.jsonp_charset=t.jsonp_charset||"utf-8",t.callbackid=t.callbackid||"",t.callbackname=t.callbackname||""):"flash"==n?(t.sendheader=void 0===t.sendheader?!0:t.sendheader,t.decode=void 0===t.decode?!0:t.decode):"iframe"==n&&(t.proxy=t.proxy||""),t
},dttjindo.$Ajax._validationOption=function(t,e){var n=dttjindo.$Except,i=t.type;
"jsonp"===i?"get"!==t.method&&dttjindo.$Jindo._warn(n.CANNOT_USE_OPTION+"\n	"+e+"-method="+t.method):"flash"===i&&"get"!==t.method&&"post"!==t.method&&dttjindo.$Jindo._warn(n.CANNOT_USE_OPTION+"\n	"+e+"-method="+t.method),t.postBody&&("xhr"!==i||"get"===t.method)&&dttjindo.$Jindo._warn(n.CANNOT_USE_OPTION+"\n	"+t.method+"-postBody="+t.postBody);
var o={xhr:"onload|timeout|ontimeout|onerror|async|method|postBody|type|withCredentials",jsonp:"onload|timeout|ontimeout|onerror|jsonp_charset|callbackid|callbackname|method|type",flash:"onload|timeout|ontimeout|onerror|sendheader|decode|method|type",iframe:"onload|proxy|method|type"},r=[],s=0;
for(r[s++] in t){}for(var a=o[i]||"",s=0,l=r.length;
l>s;
s++){-1==a.indexOf(r[s])&&dttjindo.$Jindo._warn(n.CANNOT_USE_OPTION+"\n	"+i+"-"+r[s])
}},dttjindo.$Ajax.prototype._onload=function(t){var e=dttjindo.$Ajax,n=dttjindo.$Jindo;
return t?function(){var t,i=this._request.status,o=4==this._request.readyState&&(200==i||0==i)||this._bXDomainRequest&&!!this._request.responseText;
if(4==this._request.readyState||this._bXDomainRequest){try{!o&&n.isFunction(this._options.onerror)?this._options.onerror(new e.Response(this._request)):this._is_abort||(t=this._options.onload(new e.Response(this._request)))
}catch(r){throw r
}finally{if(n.isFunction(this._oncompleted)&&this._oncompleted(o,t),"xhr"==this._options.type){this.abort();
try{delete this._request.onload
}catch(r){this._request.onload=void 0
}}this._request.onreadystatechange&&delete this._request.onreadystatechange
}}}:function(){var t,i=this._request.status,o=4==this._request.readyState&&(200==i||0==i);
if(4==this._request.readyState){try{!o&&n.isFunction(this._options.onerror)?this._options.onerror(new e.Response(this._request)):t=this._options.onload(new e.Response(this._request))
}catch(r){throw r
}finally{this._status--,n.isFunction(this._oncompleted)&&this._oncompleted(o,t)
}}}
}(dttjindo._p_._JINDO_IS_IE),dttjindo.$Ajax.prototype.request=function(t){var e=dttjindo.$Jindo,n=e.checkVarType(arguments,{"4voi":[],"4obj":[e._F("oData:Hash+")],"4str":["sData:String+"]},"$Ajax#request");
this._status++;
var i,o,r=this,s=this._request,a=this._options,l=[],i="",d=null,h=this._url;
this._is_abort=!1;
var c=a.type.toUpperCase(),u=a.method.toUpperCase();
if(a.postBody&&"XHR"==c&&"GET"!=u){i=n+""=="4str"?n.sData:n+""=="4obj"?dttjindo.$Json(n.oData).toString():null
}else{switch(n+""){case"4voi":i=null;
break;
case"4obj":var t=n.oData;
for(var p in t){if(t.hasOwnProperty(p)){if(o=t[p],e.isFunction(o)&&(o=o()),e.isArray(o)||dttjindo.$A&&o instanceof dttjindo.$A){o instanceof dttjindo.$A&&(o=o._array);
for(var f=0;
f<o.length;
f++){l[l.length]=p+"="+encodeURIComponent(o[f])
}}else{l[l.length]=p+"="+encodeURIComponent(o)
}}}i=l.join("&")
}}if(i&&"XHR"==c&&"GET"==u&&(h+=-1==h.indexOf("?")?"?":"&",h+=i,i=null),"XHR"==c?s.open(u,h,!!a.async):s.open(u,h),a.withCredentials&&(s.withCredentials=!0),"XHR"==c&&"POST"==u&&s.setRequestHeader&&s.setRequestHeader("If-Modified-Since","Thu, 1 Jan 1970 00:00:00 GMT"),("XHR"==c||"IFRAME"==c||"FLASH"==c&&a.sendheader)&&s.setRequestHeader){this._headers["Content-Type"]||s.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"),s.setRequestHeader("charset","utf-8"),this._bCORS||this._headers["X-Requested-With"]||s.setRequestHeader("X-Requested-With","XMLHttpRequest");
for(var _ in this._headers){if(this._headers.hasOwnProperty(_)){if("function"==typeof this._headers[_]){continue
}s.setRequestHeader(_,String(this._headers[_]))
}}}if(!s.addEventListener||dttjindo._p_._JINDO_IS_OP||dttjindo._p_._JINDO_IS_IE){if(void 0!==s.onload){s.onload=function(t){4!=s.readyState&&!r._bXDomainRequest||r._is_abort||(clearTimeout(d),d=void 0,r._onload(t))
}
}else{var m=dttjindo._p_._j_ag.match(/(?:MSIE) ([0-9.]+)/);
if(m&&6==m[1]&&a.async){var g=function(t){4!=s.readyState||r._is_abort||(d&&(clearTimeout(d),d=void 0),r._onload(t),clearInterval(r._interval),r._interval=void 0)
};
this._interval=setInterval(g,300)
}else{s.onreadystatechange=function(t){4==s.readyState&&(clearTimeout(d),d=void 0,r._onload(t))
}
}}}else{this._loadFunc&&s.removeEventListener("load",this._loadFunc,!1),this._loadFunc=function(t){clearTimeout(d),d=void 0,r._onload(t)
},s.addEventListener("load",this._loadFunc,!1)
}return a.timeout>0&&(this._timer&&clearTimeout(this._timer),d=setTimeout(function(){r._is_abort=!0,r._interval&&(clearInterval(r._interval),r._interval=void 0);
try{s.abort()
}catch(t){}a.ontimeout(s),e.isFunction(r._oncompleted)&&r._oncompleted(!1)
},1000*a.timeout),this._timer=d),this._test_url=h,s.send(i),this
},dttjindo.$Ajax.prototype.isIdle=function(){return 0==this._status
},dttjindo.$Ajax.prototype.abort=function(){try{this._interval&&clearInterval(this._interval),this._timer&&clearTimeout(this._timer),this._interval=void 0,this._timer=void 0,this._is_abort=!0,this._request.abort()
}finally{this._status--
}return this
},dttjindo.$Ajax.prototype.url=function(){var t=g_checkVarType(arguments,{g:[],s:["sURL:String+"]},"$Ajax#url");
switch(t+""){case"g":return this._url;
case"s":return this._checkCORS(t.sURL,this._options.type,"#url"),this._url=t.sURL,this
}},dttjindo.$Ajax.prototype.option=function(){var t=g_checkVarType(arguments,{s4var:["sKey:String+","vValue:Variant"],s4obj:["oOption:Hash+"],g:["sKey:String+"]},"$Ajax#option");
switch(t+""){case"s4var":t.oOption={},t.oOption[t.sKey]=t.vValue;
case"s4obj":var e=t.oOption;
try{for(var n in e){e.hasOwnProperty(n)&&(this._options[n]="onload"===n||"ontimeout"===n||"onerror"===n?dttjindo.$Fn(e[n],this).bind():e[n])
}}catch(i){}break;
case"g":return this._options[t.sKey]
}return this._checkCORS(this._url,this._options.type,"#option"),dttjindo.$Ajax._validationOption(this._options,"$Ajax#option"),this
},dttjindo.$Ajax.prototype.header=function(){("jsonp"===this._options.type||this._bXDomainRequest)&&dttjindo.$Jindo._warn(dttjindo.$Except.CANNOT_USE_HEADER);
var t=g_checkVarType(arguments,{s4str:["sKey:String+","sValue:String+"],s4obj:["oOption:Hash+"],g:["sKey:String+"]},"$Ajax#option");
switch(t+""){case"s4str":this._headers[t.sKey]=t.sValue;
break;
case"s4obj":var e=t.oOption;
try{for(var n in e){e.hasOwnProperty(n)&&(this._headers[n]=e[n])
}}catch(i){}break;
case"g":return this._headers[t.sKey]
}return this
},dttjindo.$Ajax.Response=function(t){this._response=t,this._regSheild=/^for\(;;\);/
},dttjindo.$Ajax.Response.prototype.xml=function(){return this._response.responseXML
},dttjindo.$Ajax.Response.prototype.text=function(){return this._response.responseText.replace(this._regSheild,"")
},dttjindo.$Ajax.Response.prototype.status=function(){var t=this._response.status;
return 0==t?200:t
},dttjindo.$Ajax.Response.prototype.readyState=function(){return this._response.readyState
},dttjindo.$Ajax.Response.prototype.json=function(){if(this._response.responseJSON){return this._response.responseJSON
}if(this._response.responseText){try{return eval("("+this.text()+")")
}catch(e){throw new dttjindo.$Error(dttjindo.$Except.PARSE_ERROR,"$Ajax#json")
}}return{}
},dttjindo.$Ajax.Response.prototype.header=function(t){var e=g_checkVarType(arguments,{"4str":["name:String+"],"4voi":[]},"$Ajax.Response#header");
switch(e+""){case"4str":return this._response.getResponseHeader(t);
case"4voi":return this._response.getAllResponseHeaders()
}};
var klass=dttjindo.$Class;
dttjindo.$Ajax.RequestBase=klass({_respHeaderString:"",callbackid:"",callbackname:"",responseXML:null,responseJSON:null,responseText:"",status:404,readyState:0,$init:function(){},onload:function(){},abort:function(){},open:function(){},send:function(){},setRequestHeader:function(t,e){g_checkVarType(arguments,{"4str":["sName:String+","sValue:String+"]},"$Ajax.RequestBase#setRequestHeader"),this._headers[t]=e
},getResponseHeader:function(t){return g_checkVarType(arguments,{"4str":["sName:String+"]},"$Ajax.RequestBase#getResponseHeader"),this._respHeaders[t]||""
},getAllResponseHeaders:function(){return this._respHeaderString
},_getCallbackInfo:function(){var t="";
if(""!=this.option("callbackid")){var e=0;
do{t="_"+this.option("callbackid")+"_"+e,e++
}while(window["__"+dttjindo._p_.dttjindoName+"_callback"][t])
}else{do{t="_"+Math.floor(10000*Math.random())
}while(window["__"+dttjindo._p_.dttjindoName+"_callback"][t])
}return""==this.option("callbackname")&&this.option("callbackname","_callback"),{callbackname:this.option("callbackname"),id:t,name:"window.__"+dttjindo._p_.dttjindoName+"_callback."+t}
}}),dttjindo.$Ajax.JSONPRequest=klass({_headers:{},_respHeaders:{},_script:null,_onerror:null,$init:function(t){this.option=t
},_callback:function(t){this._onerror&&(clearTimeout(this._onerror),this._onerror=null);
var e=this;
this.responseJSON=t,this.onload(this),setTimeout(function(){e.abort()
},10)
},abort:function(){if(this._script){try{this._script.parentNode.removeChild(this._script)
}catch(t){}}},open:function(t,e){g_checkVarType(arguments,{"4str":["method:String+","url:String+"]},"$Ajax.JSONPRequest#open"),this.responseJSON=null,this._url=e
},send:function(t){var e=g_checkVarType(arguments,{"4voi":[],"4nul":["data:Null"],"4str":["data:String+"]},"$Ajax.JSONPRequest#send"),n=this,i=this._getCallbackInfo(),o=document.getElementsByTagName("head")[0];
this._script=document.createElement("script"),this._script.type="text/javascript",this._script.charset=this.option("jsonp_charset"),o?o.appendChild(this._script):document.body&&document.body.appendChild(this._script),window["__"+dttjindo._p_.dttjindoName+"_callback"][i.id]=function(t){try{n.readyState=4,n.status=200,n._callback(t)
}finally{delete window["__"+dttjindo._p_.dttjindoName+"_callback"][i.id],delete window["__"+dttjindo._p_.dttjindoName+"2_callback"][i.id]
}},window["__"+dttjindo._p_.dttjindoName+"2_callback"][i.id]=function(t){window["__"+dttjindo._p_.dttjindoName+"_callback"][i.id](t)
};
var r=dttjindo.$Agent(navigator),s=function(){n.responseJSON||(n.readyState=4,n.status=500,n._onerror=setTimeout(function(){n._callback(null)
},200))
};
r.navigator().ie&&this._script.readyState?this._script.onreadystatechange=function(){"loaded"==this.readyState&&(s(),this.onreadystatechange=null)
}:this._script.onload=this._script.onerror=function(){s(),this.onerror=null,this.onload=null
};
var a="&";
switch(-1==this._url.indexOf("?")&&(a="?"),e+""){case"4voi":case"4nul":t="";
break;
case"4str":t="&"+t
}this._test_url=this._script.src=this._url+a+i.callbackname+"="+i.name+t
}}).extend(dttjindo.$Ajax.RequestBase),dttjindo.$Ajax.SWFRequest=klass({$init:function(t){this.option=t
},_headers:{},_respHeaders:{},_getFlashObj:function(){var t,e=dttjindo.$Ajax.SWFRequest._tmpId,n=dttjindo.$Agent(window.navigator).navigator();
return t=n.ie&&9==n.version?_getElementById(document,e):window.document[e],(this._getFlashObj=function(){return t
})()
},_callback:function(t,e,n){if(this.readyState=4,dttjindo.$Jindo.isNumeric(t)?this.status=t:1==t&&(this.status=200),200==this.status){if(dttjindo.$Jindo.isString(e)){try{this.responseText=this.option("decode")?decodeURIComponent(e):e,this.responseText&&""!=this.responseText||(this.responseText=e)
}catch(i){"URIError"==i.name&&(this.responseText=e,this.responseText&&""!=this.responseText||(this.responseText=e))
}}dttjindo.$Jindo.isHash(n)&&(this._respHeaders=n)
}this.onload(this)
},open:function(t,e){g_checkVarType(arguments,{"4str":["method:String+","url:String+"]},"$Ajax.SWFRequest#open"),this._url=e,this._method=t
},send:function(t){function e(t){switch(typeof t){case"string":return'"'+t.replace(/\"/g,'\\"')+'"';
case"number":return t;
case"object":var i="",o=[];
if(n.isArray(t)){for(var r=0;
r<t.length;
r++){o[r]=e(t[r])
}i="["+o.join(",")+"]"
}else{for(var s in t){t.hasOwnProperty(s)&&(o[o.length]=e(s)+":"+e(t[s]))
}i="{"+o.join(",")+"}"
}return i;
default:return'""'
}}var n=dttjindo.$Jindo;
n.checkVarType(arguments,{"4voi":[],"4nul":["data:Null"],"4str":["data:String+"]},"$Ajax.SWFRequest#send"),this.responseXML=!1,this.responseText="";
var i=this,o={},r=this._getCallbackInfo(),s=this._getFlashObj();
t=t?t.split("&"):[];
for(var a,l=0;
l<t.length;
l++){a=t[l],pos=a.indexOf("="),key=a.substring(0,pos),val=a.substring(pos+1),o[key]=decodeURIComponent(val)
}this._current_callback_id=r.id,window["__"+dttjindo._p_.dttjindoName+"_callback"][r.id]=function(t,e){try{i._callback(t,e)
}finally{delete window["__"+dttjindo._p_.dttjindoName+"_callback"][r.id]
}},window["__"+dttjindo._p_.dttjindoName+"2_callback"][r.id]=function(t){window["__"+dttjindo._p_.dttjindoName+"_callback"][r.id](t)
};
var d={url:this._url,type:this._method,data:o,charset:"UTF-8",callback:r.name,header_json:this._headers};
s.requestViaFlash(e(d))
},abort:function(){this._current_callback_id&&(window["__"+dttjindo._p_.dttjindoName+"_callback"][this._current_callback_id]=function(){delete window["__"+dttjindo._p_.dttjindoName+"_callback"][info.id],delete window["__"+dttjindo._p_.dttjindoName+"2_callback"][info.id]
},window["__"+dttjindo._p_.dttjindoName+"2_callback"][this._current_callback_id]=function(t){window["__"+dttjindo._p_.dttjindoName+"_callback"][this._current_callback_id](t)
})
}}).extend(dttjindo.$Ajax.RequestBase),dttjindo.$Ajax.SWFRequest.write=function(t){var e=dttjindo.$Jindo.checkVarType(arguments,{"4voi":[],"4str":["data:String+"]},"<static> $Ajax.SWFRequest#write");
switch(e+""){case"4voi":t="./ajax.swf"
}var n=dttjindo.$Ajax;
n.SWFRequest._tmpId="tmpSwf"+(new Date).getMilliseconds()+Math.floor(100000*Math.random());
var i="dttjindo.$Ajax.SWFRequest.loaded",o="https:"==location.protocol?"https:":"http:",r=dttjindo._p_._JINDO_IS_IE?'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"':"";
n._checkFlashLoad();
var s=document.body,a=s.childNodes,l=dttjindo.$("<div style='position:absolute;top:-1000px;left:-1000px' tabindex='-1'>/<div>");
l.innerHTML='<object tabindex="-1" id="'+n.SWFRequest._tmpId+'" width="1" height="1" '+r+' codebase="'+o+'//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0"><param name="movie" value="'+t+'"><param name = "FlashVars" value = "activeCallback='+i+'" /><param name = "allowScriptAccess" value = "always" /><embed tabindex="-1" name="'+n.SWFRequest._tmpId+'" src="'+t+'" type="application/x-shockwave-flash" pluginspage="'+o+'://www.macromedia.com/go/getflashplayer" width="1" height="1" allowScriptAccess="always" swLiveConnect="true" FlashVars="activeCallback='+i+'"></embed></object>',a.length>0?s.insertBefore(l,a[0]):s.appendChild(l)
},dttjindo.$Ajax._checkFlashLoad=function(){dttjindo.$Ajax._checkFlashKey=setTimeout(function(){dttjindo.$Ajax.SWFRequest.onerror()
},5000),dttjindo.$Ajax._checkFlashLoad=function(){}
},dttjindo.$Ajax.SWFRequest.activeFlash=!1,dttjindo.$Ajax.SWFRequest.onload=function(){},dttjindo.$Ajax.SWFRequest.onerror=function(){},dttjindo.$Ajax.SWFRequest.loaded=function(){clearTimeout(dttjindo.$Ajax._checkFlashKey),dttjindo.$Ajax.SWFRequest.activeFlash=!0,dttjindo.$Ajax.SWFRequest.onload()
},dttjindo.$Ajax.FrameRequest=klass({_headers:{},_respHeaders:{},_frame:null,_domain:"",$init:function(t){this.option=t
},_callback:function(t,e,n){var i=this;
this.readyState=4,this.status=200,this.responseText=e,this._respHeaderString=n,n.replace(/^([\w\-]+)\s*:\s*(.+)$/m,function(t,e,n){i._respHeaders[e]=n
}),this.onload(this),setTimeout(function(){i.abort()
},10)
},abort:function(){if(this._frame){try{this._frame.parentNode.removeChild(this._frame)
}catch(t){}}},open:function(t,e){g_checkVarType(arguments,{"4str":["method:String+","url:String+"]},"$Ajax.FrameRequest#open");
var n=/https?:\/\/([a-z0-9_\-\.]+)/i,i=document.location.toString().match(n);
this._method=t,this._url=e,this._remote=String(e).match(/(https?:\/\/[a-z0-9_\-\.]+)(:[0-9]+)?/i)[0],this._frame=null,this._domain=null!=i&&i[1]!=document.domain?document.domain:""
},send:function(t){g_checkVarType(arguments,{"4voi":[],"4nul":["data:Null"],"4str":["data:String+"]},"$Ajax.FrameRequest#send"),this.responseXML="",this.responseText="";
var e=this,n=/https?:\/\/([a-z0-9_\-\.]+)/i,i=this._getCallbackInfo(),o=[];
o.push(this._remote+"/ajax_remote_callback.html?method="+this._method);
var r=[];
window["__"+dttjindo._p_.dttjindoName+"_callback"][i.id]=function(t,n,o){try{e._callback(t,n,o)
}finally{delete window["__"+dttjindo._p_.dttjindoName+"_callback"][i.id],delete window["__"+dttjindo._p_.dttjindoName+"2_callback"][i.id]
}},window["__"+dttjindo._p_.dttjindoName+"2_callback"][i.id]=function(t,e,n){window["__"+dttjindo._p_.dttjindoName+"_callback"][i.id](t,e,n)
};
for(var s in this._headers){this._headers.hasOwnProperty(s)&&(r[r.length]="'"+s+"':'"+this._headers[s]+"'")
}r="{"+r.join(",")+"}",o.push("&id="+i.id),o.push("&header="+encodeURIComponent(r)),o.push("&proxy="+encodeURIComponent(this.option("proxy"))),o.push("&domain="+this._domain),o.push("&url="+encodeURIComponent(this._url.replace(n,""))),o.push("#"+encodeURIComponent(t));
var a=this._frame=document.createElement("iframe"),l=a.style;
l.position="absolute",l.visibility="hidden",l.width="1px",l.height="1px";
var d=document.body||document.documentElement;
d.firstChild?d.insertBefore(a,d.firstChild):d.appendChild(a),"undefined"!=typeof MSApp&&MSApp.addPublicLocalApplicationUri(this.option("proxy")),a.src=o.join("")
}}).extend(dttjindo.$Ajax.RequestBase),dttjindo.$Ajax.Queue=function(t){var e=arguments.callee;
if(!(this instanceof e)){return new e(t||{})
}var n=g_checkVarType(arguments,{"4voi":[],"4obj":["option:Hash+"]},"$Ajax.Queue");
t=n.option,this._options={async:!1,useResultAsParam:!1,stopOnFailure:!1},this.option(t),this._queue=[]
},dttjindo.$Ajax.Queue.prototype.option=function(){var t=g_checkVarType(arguments,{s4str:["sKey:String+","sValue:Variant"],s4obj:["oOption:Hash+"],g:["sKey:String+"]},"$Ajax.Queue#option");
switch(t+""){case"s4str":this._options[t.sKey]=t.sValue;
break;
case"s4obj":var e=t.oOption;
try{for(var n in e){e.hasOwnProperty(n)&&(this._options[n]=e[n])
}}catch(i){}break;
case"g":return this._options[t.sKey]
}return this
},dttjindo.$Ajax.Queue.prototype.add=function(t,e){var n=g_checkVarType(arguments,{"4obj":["oAjax:Hash+"],"4obj2":["oAjax:Hash+","oPram:Hash+"]},"$Ajax.Queue");
switch(n+""){case"4obj2":e=n.oPram
}return this._queue.push({obj:t,param:e}),this
},dttjindo.$Ajax.Queue.prototype.request=function(){return this._requestAsync.apply(this,this.option("async")?[]:[0]),this
},dttjindo.$Ajax.Queue.prototype._requestSync=function(t,e){var n=this,i=this._queue;
i.length>t+1&&(i[t].obj._oncompleted=function(e,i){(!n.option("stopOnFailure")||e)&&n._requestSync(t+1,i)
});
var o=i[t].param||{};
if(this.option("useResultAsParam")&&e){try{for(var r in e){void 0===o[r]&&e.hasOwnProperty(r)&&(o[r]=e[r])
}}catch(s){}}i[t].obj.request(o)
},dttjindo.$Ajax.Queue.prototype._requestAsync=function(){for(var t=0;
t<this._queue.length;
t++){this._queue[t].obj.request(this._queue[t].param||{})
}},dttjindo.$Date=function(t){var e=arguments,n=arguments.callee;
if(t&&t instanceof n){return t
}if(!(this instanceof n)){for(var i="",o=0,r=e.length;
r>o;
o++){i+="a["+o+"],"
}var s=new Function("cl","a","return new cl("+i.replace(/,$/,"")+");");
try{return dttjindo.$Jindo._maxWarn(arguments.length,7,"$Date"),s(n,e)
}catch(a){if(a instanceof TypeError){return null
}throw a
}}var l=g_checkVarType(arguments,{"4voi":[],"4str":["src:String+"],"4num":["src:Numeric"],"4dat":["src:Date+"],"4num2":["src:Numeric","src:Numeric"],"4num3":["src:Numeric","src:Numeric","src:Numeric"],"4num4":["src:Numeric","src:Numeric","src:Numeric","src:Numeric"],"4num5":["src:Numeric","src:Numeric","src:Numeric","src:Numeric","src:Numeric"],"4num6":["src:Numeric","src:Numeric","src:Numeric","src:Numeric","src:Numeric","src:Numeric"],"4num7":["src:Numeric","src:Numeric","src:Numeric","src:Numeric","src:Numeric","src:Numeric","src:Numeric"]},"$Date");
switch(l+""){case"4voi":this._date=new Date;
break;
case"4num":this._date=new Date(1*t);
break;
case"4str":this._date=/(\d\d\d\d)(?:-?(\d\d)(?:-?(\d\d)))/.test(t)?dttjindo.$Date._makeISO(t):n.parse(t);
break;
case"4dat":(this._date=new Date).setTime(t.getTime()),this._date.setMilliseconds(t.getMilliseconds());
break;
case"4num2":case"4num3":case"4num4":case"4num5":case"4num6":case"4num7":for(var o=0;
7>o;
o++){dttjindo.$Jindo.isNumeric(e[o])||(e[o]=1)
}this._date=new Date(e[0],e[1],e[2],e[3],e[4],e[5],e[6])
}this._names={};
for(var o in dttjindo.$Date.names){dttjindo.$Date.names.hasOwnProperty(o)&&(this._names[o]=dttjindo.$Date.names[o])
}},dttjindo.$Date._makeISO=function(t){var e=t.match(/(\d{4})(?:-?(\d\d)(?:-?(\d\d)(?:[T ](\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|(?:([-+])(\d\d)(?::?(\d\d))?)?)?)?)?)?/),n=parseInt(e[4]||0,10),i=parseInt(e[5]||0,10);
return"Z"==e[8]?n+=dttjindo.$Date.utc:("+"==e[9]||"-"==e[9])&&(n+=dttjindo.$Date.utc-parseInt(e[9]+e[10],10),i+=parseInt(e[9]+e[11],10)),new Date(e[1]||0,parseInt(e[2]||0,10)-1,e[3]||0,n,i,e[6]||0,e[7]||0)
},dttjindo.$Date._paramCheck=function(t,e){return g_checkVarType(t,{s:["nParm:Numeric"],g:[]},"$Date#"+e)
},dttjindo.$Date.names={month:["January","Febrary","March","April","May","June","July","August","September","October","Novermber","December"],s_month:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],day:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],s_day:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],ampm:["AM","PM"]},dttjindo.$Date.utc=9,dttjindo.$Date.now=function(){return this.now=Date.now?function(){return Date.now()
}:function(){return +new Date
},this.now()
},dttjindo.$Date.prototype.name=function(t,e){var n=g_checkVarType(arguments,{s4str:["sKey:String+","aValue:Array+"],s4obj:["oObject:Hash+"],g:["sKey:String+"]},"$Date#name");
switch(n+""){case"s4str":this._names[t]=e;
break;
case"s4obj":t=n.oObject;
for(var i in t){t.hasOwnProperty(i)&&(this._names[i]=t[i])
}break;
case"g":return this._names[t]
}return this
},dttjindo.$Date.parse=function(t){var e=(g_checkVarType(arguments,{"4str":["sKey:String+"]},"$Date#parse"),new Date(Date.parse(t)));
if(isNaN(e)||"Invalid Date"==e){throw new dttjindo.$Error(dttjindo.$Except.INVALID_DATE,"$Date#parse")
}return e
},dttjindo.$Date.prototype.$value=function(){return this._date
},dttjindo.$Date.prototype.format=function(t){var e=g_checkVarType(arguments,{"4str":["sFormat:String+"]},"$Date#format");
t=e.sFormat;
var n={},i=this._date,o=this._names,r=this;
return(t||"").replace(/[a-z]/gi,function(t){if(void 0!==n[t]){return n[t]
}switch(t){case"d":case"j":return n.j=i.getDate(),n.d=(n.j>9?"":"0")+n.j,n[t];
case"l":case"D":case"w":case"N":return n.w=i.getDay(),n.N=n.w?n.w:7,n.D=o.s_day[n.w],n.l=o.day[n.w],n[t];
case"S":return(n.S=["st","nd","rd"][i.getDate()])?n.S:n.S="th";
case"z":return n.z=Math.floor((i.getTime()-new Date(i.getFullYear(),0,1).getTime())/86400000),n.z;
case"m":case"n":return n.n=i.getMonth()+1,n.m=(n.n>9?"":"0")+n.n,n[t];
case"L":return n.L=r.isLeapYear(),n.L;
case"o":case"Y":case"y":return n.o=n.Y=i.getFullYear(),n.y=(n.o+"").substr(2),n[t];
case"a":case"A":case"g":case"G":case"h":case"H":return n.G=i.getHours(),n.g=(n.g=n.G%12)?n.g:12,n.A=n.G<12?o.ampm[0]:o.ampm[1],n.a=n.A.toLowerCase(),n.H=(n.G>9?"":"0")+n.G,n.h=(n.g>9?"":"0")+n.g,n[t];
case"i":return n.i=((n.i=i.getMinutes())>9?"":"0")+n.i,n.i;
case"s":return n.s=((n.s=i.getSeconds())>9?"":"0")+n.s,n.s;
case"u":return n.u=i.getMilliseconds(),n.u;
case"U":return n.U=r.time(),n.U;
default:return t
}})
},dttjindo.$Date.prototype.time=function(t){var e=dttjindo.$Date._paramCheck(arguments,"time");
switch(t=e.nParm,e+""){case"s":return this._date.setTime(t),this;
case"g":return this._date.getTime()
}},dttjindo.$Date.prototype.year=function(t){var e=dttjindo.$Date._paramCheck(arguments,"year");
switch(t=e.nParm,e+""){case"s":return this._date.setFullYear(t),this;
case"g":return this._date.getFullYear()
}},dttjindo.$Date.prototype.month=function(t){var e=dttjindo.$Date._paramCheck(arguments,"month");
switch(t=e.nParm,e+""){case"s":return this._date.setMonth(t),this;
case"g":return this._date.getMonth()
}},dttjindo.$Date.prototype.date=function(t){var e=dttjindo.$Date._paramCheck(arguments,"date");
switch(t=e.nParm,e+""){case"s":return this._date.setDate(t),this;
case"g":return this._date.getDate()
}},dttjindo.$Date.prototype.day=function(){return this._date.getDay()
},dttjindo.$Date.prototype.hours=function(t){var e=dttjindo.$Date._paramCheck(arguments,"hours");
switch(t=e.nParm,e+""){case"s":return this._date.setHours(t),this;
case"g":return this._date.getHours()
}},dttjindo.$Date.prototype.minutes=function(t){var e=dttjindo.$Date._paramCheck(arguments,"minutes");
switch(t=e.nParm,e+""){case"s":return this._date.setMinutes(t),this;
case"g":return this._date.getMinutes()
}},dttjindo.$Date.prototype.seconds=function(t){var e=dttjindo.$Date._paramCheck(arguments,"seconds");
switch(t=e.nParm,e+""){case"s":return this._date.setSeconds(t),this;
case"g":return this._date.getSeconds()
}},dttjindo.$Date.prototype.isLeapYear=function(){var t=this._date.getFullYear();
return !((t%4||!(t%100))&&t%400)
},dttjindo.$Date.prototype.compare=function(t,e){var n=g_checkVarType(arguments,{"4dat":["oDate:Date+"],"4str":["oDate:Date+","sType:String+"]},"$Date#compare");
return t=n.oDate,e=n.sType,e?"s"===e?Math.floor(t/1000)-Math.floor(this._date/1000):"i"===e?Math.floor(Math.floor(t/1000)/60)-Math.floor(Math.floor(this._date/1000)/60):"h"===e?Math.floor(Math.floor(Math.floor(t/1000)/60)/60)-Math.floor(Math.floor(Math.floor(this._date/1000)/60)/60):"d"===e?Math.floor(Math.floor(Math.floor(Math.floor(t/1000)/60)/60)/24)-Math.floor(Math.floor(Math.floor(Math.floor(this._date/1000)/60)/60)/24):"m"===e?t.getMonth()-this._date.getMonth():"y"===e?t.getFullYear()-this._date.getFullYear():void 0:t-this._date
},dttjindo.$Cookie=function(){var t=arguments.callee;
if(t._cached,t._cached){return t._cached
}if(!(this instanceof t)){try{return dttjindo.$Jindo._maxWarn(arguments.length,1,"$Cookie"),arguments.length>0?new t(arguments[0]):new t
}catch(e){if(e instanceof TypeError){return null
}throw e
}}t._cached=this;
var n=g_checkVarType(arguments,{"4voi":[],"4bln":["bURIComponent:Boolean"]},"$Cookie");
switch(n+""){case"4voi":this._bURIComponent=!1;
break;
case"4bln":this._bURIComponent=n.bURIComponent
}},dttjindo.$Cookie.prototype.keys=function(){for(var t=document.cookie.split(";"),e=/^\s+|\s+$/g,n=new Array,i=0;
i<t.length;
i++){n[n.length]=t[i].substr(0,t[i].indexOf("=")).replace(e,"")
}return n
},dttjindo.$Cookie.prototype.get=function(t){for(var e,n,i=(g_checkVarType(arguments,{"4str":["sName:String+"]},"$Cookie#get"),document.cookie.split(/\s*;\s*/)),o=new RegExp("^(\\s*"+t+"\\s*=)"),r=0;
r<i.length;
r++){if(o.test(i[r])){return e=i[r].substr(RegExp.$1.length),n=this._bURIComponent&&dttjindo.$Jindo.isNull(e.match(/%u\w{4}/))?decodeURIComponent(e):unescape(e)
}}return null
},dttjindo.$Cookie.prototype.set=function(t,e,n,i,o){var r,s=dttjindo.$Jindo,a=s.checkVarType(arguments,{"4str":["sName:String+","sValue:String+"],day_for_string:["sName:String+","sValue:String+","nDays:Numeric"],domain_for_string:["sName:String+","sValue:String+","nDays:Numeric","sDomain:String+"],path_for_string:["sName:String+","sValue:String+","nDays:Numeric","sDomain:String+","sPath:String+"],"4num":["sName:String+","sValue:Numeric"],day_for_num:["sName:String+","sValue:Numeric","nDays:Numeric"],domain_for_num:["sName:String+","sValue:Numeric","nDays:Numeric","sDomain:String+"],path_for_num:["sName:String+","sValue:Numeric","nDays:Numeric","sDomain:String+","sPath:String+"]},"$Cookie#set"),l="";
return a+""!="4str"&&0!==n&&(l=";expires="+new Date((new Date).getTime()+1000*n*60*60*24).toGMTString()),s.isUndefined(i)&&(i=""),s.isUndefined(o)&&(o="/"),r=this._bURIComponent?encodeURIComponent(e):escape(e),document.cookie=t+"="+r+l+"; path="+o+(i?"; domain="+i:""),this
},dttjindo.$Cookie.prototype.remove=function(t){for(var e=dttjindo.$Jindo,n=(e.checkVarType(arguments,{"4str":["sName:String+"],domain_for_string:["sName:String+","sDomain:String+"],path_for_string:["sName:String+","sDomain:String+","sPath:String+"]},"$Cookie#remove"),dttjindo._p_._toArray(arguments)),i=[],o=0,r=n.length;
r>o;
o++){i.push(n[o]),0==o&&(i.push(""),i.push(-1))
}return e.isNull(this.get(t))||this.set.apply(this,i),this
},dttjindo.$Template=function(t,e){var n,i=null,o="",r=arguments.callee;
if(t instanceof r){return t
}if(!(this instanceof r)){try{return dttjindo.$Jindo._maxWarn(arguments.length,2,"$Template"),new r(t||"",e||"default")
}catch(s){if(s instanceof TypeError){return null
}throw s
}}var a=g_checkVarType(arguments,{"4str":["str:String+"],"4ele":["ele:Element+"],"4str3":["str:String+","sEngineName:String+"],"4ele3":["ele:Element+","sEngineName:String+"]},"$Template");
switch((i=_getElementById(document,t)||t)&&i.tagName&&(o=i.tagName.toUpperCase())&&("TEXTAREA"==o||"SCRIPT"==o&&"text/template"==i.getAttribute("type"))&&(t=(i.value||i.innerHTML).replace(/^\s+|\s+$/g,"")),this._str=t+"",n="default",a+""){case"4str3":case"4ele3":n=a.sEngineName
}this._compiler=dttjindo.$Template.getEngine(n)
},dttjindo.$Template._aEngines={},dttjindo.$Template._cache={},dttjindo.$Template.splitter=/(?!\\)[\{\}]/g,dttjindo.$Template.pattern=/^(?:if (.+)|elseif (.+)|for (?:(.+)\:)?(.+) in (.+)|(else)|\/(if|for)|=(.+)|js (.+)|set (.+)|gset (.+))$/,dttjindo.$Template.addEngine=function(){var t=g_checkVarType(arguments,{"4fun":["sEngineName:String+","fEngine:Function+"]},"$Template#addEngine");
dttjindo.$Template._aEngines[t.sEngineName]=t.fEngine
},dttjindo.$Template.getEngine=function(){var t=g_checkVarType(arguments,{"4str":["sEngineName:String+"]},"$Template#getEngine");
return dttjindo.$Template._aEngines[t.sEngineName]
},dttjindo.$Template.prototype.process=function(){var t,e=g_checkVarType(arguments,{"4obj":["data:Hash+"],"4voi":[]},"$Template#process");
return dttjindo.$Template._cache&&dttjindo.$Template._cache[this._str]?(t=dttjindo.$Template._cache[this._str])(e+""=="for_void"?"":e.data):(dttjindo.$Template._cache[this._str]=t=this._compiler(this._str),t(e+""=="for_void"?"":e.data))
},dttjindo.$Template.addEngine("default",function(t){function e(t){return t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n")
}var n=[],i=!1;
n.push("var $RET$ = [];"),n.push('var $SCOPE$ = $ARG$ && typeof $ARG$ === "object" ? $ARG$ : {};'),n.push("with ($SCOPE$) {");
var o=0;
do{i=!1,t=t.replace(/^[^{]+/,function(t){return i=n.push('$RET$.push("'+e(t)+'");'),""
}),t=t.replace(/^{=([^}]+)}/,function(t,e){return i=n.push("$RET$.push("+e+");"),""
}),t=t.replace(/^{js\s+([^}]+)}/,function(t,e){return e=e.replace(/(=(?:[a-zA-Z_][\w\.]*)+)/g,function(t){return t.replace("=","")
}),i=n.push("$RET$.push("+e+");"),""
}),t=t.replace(/^{(g)?set\s+([^=]+)=([^}]+)}/,function(t,e,o,r){return i=n.push((e?"var ":"$SCOPE$.")+o+"="+r.replace(/\(=/g,"(")+";"),""
}),t=t.replace(/^{for\s+([^:}]+)(:([^\s]+))?\s+in\s+([^}]+)}/,function(t,e,t,r,s){r||(r=e,e="$NULL$"+o);
var a="$I$"+o,l="$CB$"+o;
return o++,n.push("(function("+l+") {"),n.push("if (dttjindo.$Jindo.isArray("+s+")) {"),n.push("for (var "+a+" = 0; "+a+" < "+s+".length; "+a+"++) {"),n.push(l+"("+a+", "+s+"["+a+"]);"),n.push("}"),n.push("} else {"),n.push("for (var "+a+" in "+s+") if ("+s+".hasOwnProperty("+a+")) { "),n.push(l+"("+a+", "+s+"["+a+"]);"),n.push("}"),n.push("}"),n.push("})(function("+e+", "+r+") {"),i=!0,""
}),t=t.replace(/^{\/for}/,function(){return i=n.push("});"),""
}),t=t.replace(/^{(else)?if\s+([^}]+)}/,function(t,e,o){return i=n.push((e?"} else ":"")+"if ("+o+") {"),""
}),t=t.replace(/^{else}/,function(){return i=n.push("} else {"),""
}),t=t.replace(/^{\/if}/,function(){return i=n.push("}"),""
})
}while(i);
n.push("}"),n.push('return $RET$.join("");');
var r=new Function("$ARG$",n.join("\n").replace(/\r/g,""));
return r
}),dttjindo.$Template.addEngine("micro",function(t){return new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+t.replace(/[\r\t\n]/g," ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');")
}),dttjindo.$Template.addEngine("handlebars",function(t){if("undefined"==typeof Handlebars){throw new dttjindo.$Error(dttjindo.$Except.NOT_FOUND_HANDLEBARS,"$Template#process")
}return Handlebars.compile(t)
}),dttjindo.$Template.addEngine("simple",function(t){return function(e){return t.replace(/\{\{([^{}]*)\}\}/g,function(t,n){return"undefined"==typeof e[n]?"":e[n]
})
}
});
for(var aClass=["$Agent","$Ajax","$A","$Cookie","$Date","$Document","$Element","$ElementList","$Event","$Form","$Fn","$H","$Json","$S","$Template","$Window"],sClass,oClass,i=0,l=aClass.length;
l>i;
i++){sClass=aClass[i],oClass=dttjindo[sClass],oClass&&(oClass.addExtension=function(t){return function(e,n){return dttjindo._p_.addExtension(t,e,n),this
}
}(sClass))
}for(var hooks=["$Element","$Event"],i=0,l=hooks.length;
l>i;
i++){var _className=hooks[i];
dttjindo[_className]&&(dttjindo[_className].hook=function(t){var e={};
return function(n,i){var o=dttjindo.$Jindo.checkVarType(arguments,{g:["sName:String+"],s4var:["sName:String+","vRevisionKey:Variant"],s4obj:["oObj:Hash+"]},"dttjindo."+t+".hook");
switch(o+""){case"g":return e[o.sName.toLowerCase()];
case"s4var":return null==i?delete e[o.sName.toLowerCase()]:e[o.sName.toLowerCase()]=i,this;
case"s4obj":var r=o.oObj;
for(var s in r){e[s.toLowerCase()]=r[s]
}return this
}}
}(_className))
}if(dttjindo.$Jindo.isUndefined(window)||-1==dttjindo._p_._j_ag.indexOf("IEMobile")&&dttjindo._p_._j_ag.indexOf("Mobile")>-1&&dttjindo._p_._JINDO_IS_SP||new dttjindo.$Element(window).attach("unload",function(){dttjindo.$Element.eventManager.cleanUpAll()
}),"function"==typeof define&&define.amd&&define.amd.dttjindo&&define("dttjindo",[],function(){return dttjindo
}),"undefined"!=typeof window){for(prop in dttjindo){dttjindo.hasOwnProperty(prop)&&(window[prop]=dttjindo[prop])
}}dttjindo.Component=dttjindo.$Class({_htEventHandler:null,_htOption:null,$init:function(){this._htEventHandler={},this._htOption={},this._htOption._htSetter={},this.constructor.$count=(this.constructor.$count||0)+1
},option:function(t,e){switch(typeof t){case"undefined":var n={};
for(var i in this._htOption){"htCustomEventHandler"!=i&&"_htSetter"!=i&&(n[i]=this._htOption[i])
}return n;
case"string":if("undefined"==typeof e){return this._htOption[t]
}if("htCustomEventHandler"==t){if("undefined"!=typeof this._htOption[t]){return this
}this.attach(e)
}this._htOption[t]=e,"function"==typeof this._htOption._htSetter[t]&&this._htOption._htSetter[t](e);
break;
case"object":for(var o in t){if("htCustomEventHandler"==o){if("undefined"!=typeof this._htOption[o]){continue
}this.attach(t[o])
}"_htSetter"!==o&&(this._htOption[o]=t[o]),"function"==typeof this._htOption._htSetter[o]&&this._htOption._htSetter[o](t[o])
}}return this
},optionSetter:function(t,e){switch(typeof t){case"undefined":return this._htOption._htSetter;
case"string":if("undefined"==typeof e){return this._htOption._htSetter[t]
}this._htOption._htSetter[t]=dttjindo.$Fn(e,this).bind();
break;
case"object":for(var n in t){this._htOption._htSetter[n]=dttjindo.$Fn(t[n],this).bind()
}}return this
},fireEvent:function(t,e){e=e||{};
var n=this["on"+t],i=this._htEventHandler[t]||[],o="function"==typeof n,r=i.length>0;
if(!o&&!r){return !0
}i=i.concat(),e.sType=t,"undefined"==typeof e._aExtend&&(e._aExtend=[],e.stop=function(){e._aExtend.length>0&&(e._aExtend[e._aExtend.length-1].bCanceled=!0)
}),e._aExtend.push({sType:t,bCanceled:!1});
var s,a,l=[e];
for(s=2,a=arguments.length;
a>s;
s++){l.push(arguments[s])
}if(o&&n.apply(this,l),r){var d;
for(s=0,d;
d=i[s];
s++){d.apply(this,l)
}}return !e._aExtend.pop().bCanceled
},attach:function(t,e){if(1==arguments.length){return dttjindo.$H(arguments[0]).forEach(dttjindo.$Fn(function(t,e){this.attach(e,t)
},this).bind()),this
}var n=this._htEventHandler[t];
return"undefined"==typeof n&&(n=this._htEventHandler[t]=[]),n.push(e),this
},detach:function(t,e){if(1==arguments.length){return dttjindo.$H(arguments[0]).forEach(dttjindo.$Fn(function(t,e){this.detach(e,t)
},this).bind()),this
}var n=this._htEventHandler[t];
if(n){for(var i,o=0;
i=n[o];
o++){if(i===e){n=n.splice(o,1);
break
}}}return this
},detachAll:function(t){var e=this._htEventHandler;
if(arguments.length){return"undefined"==typeof e[t]?this:(delete e[t],this)
}for(var n in e){delete e[n]
}return this
}}),dttjindo.Component.factory=function(t,e){var n,i=[];
"undefined"==typeof e&&(e={});
for(var o,r=0;
o=t[r];
r++){n=new this(o,e),i[i.length]=n
}return i
},dttjindo.Component.getInstance=function(){throw new Error("JC 1.11.0 or JMC 1.13.0 later, getInstance method of Component is not longer supported.")
},dttjindo.Component.VERSION="1.13.0";
var raf=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame,caf=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.msCancelAnimationFrame;
if(raf&&!caf){var keyInfo={},oldraf=raf;
raf=function(t){function e(){keyInfo[n]&&t()
}var n=oldraf(e);
return keyInfo[n]=!0,n
},caf=function(t){delete keyInfo[t]
}
}else{raf&&caf||(raf=function(t){return window.setTimeout(t,16)
},caf=window.clearTimeout)
}window.requestAnimationFrame=raf,window.cancelAnimationFrame=caf,dttjindo.m=function(){function _initTouchEventName(){"ontouchstart" in window?(_htTouchEventName.start="touchstart",_htTouchEventName.move="touchmove",_htTouchEventName.end="touchend",_htTouchEventName.cancel="touchcancel"):window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>0&&(_htTouchEventName.start="MSPointerDown",_htTouchEventName.move="MSPointerMove",_htTouchEventName.end="MSPointerUp",_htTouchEventName.cancel="MSPointerCancel")
}function _getOrientationChangeEvt(){var t="onorientationchange" in window?"orientationchange":"resize";
return _htOsInfo.android&&"2.1"===_htOsInfo.version&&(t="resize"),t
}function _getVertical(){var t=null,e=_getOrientationChangeEvt();
if("resize"===e){var n=document.documentElement.clientWidth;
t=-1==_nPreWidth?n<document.documentElement.clientHeight:_nPreWidth>n?!0:n==_nPreWidth?_isVertical:!1,_nPreWidth=n
}else{var i=window.orientation;
0===i||180==i?t=!0:(90==i||-90==i)&&(t=!1)
}return t
}function _attachEvent(){dttjindo.$Fn(_onOrientationChange,this).attach(window,_getOrientationChangeEvt()).attach(window,"load"),dttjindo.$Fn(_onPageshow,this).attach(window,"pageshow")
}function _initDeviceInfo(){function t(t,e){return(e||"").indexOf(t)>-1
}_setOsInfo(),_setBrowserInfo();
var e=navigator.userAgent;
_htDeviceInfo={iphone:_htOsInfo.iphone,ipad:_htOsInfo.ipad,android:_htOsInfo.android,win:t("Windows Phone",e),galaxyTab:/SHW-M180/.test(e),galaxyTab2:/SHW-M380/.test(e),galaxyS:/SHW-M110/.test(e),galaxyS2:/SHW-M250|GT-I9100/.test(e),galaxyS2LTE:/SHV-E110/.test(e),galaxyS3:/SHV-E210|SHW-M440|GT-I9300/.test(e),galaxyNote:/SHV-E160/.test(e),galaxyNote2:/SHV-E250/.test(e),galaxyNexus:/Galaxy Nexus/.test(e),optimusLte2:/LG-F160/.test(e),optimusVu:/LG-F100/.test(e),optimusLte:/LG-LU6200|LG-SU640|LG-F120K'/.test(e),galaxyS4:/SHV-E300|GT-I9500|GT-I9505|SGH-M919|SPH-L720|SGH-I337|SCH-I545/.test(e),bChrome:_htBrowserInfo.chrome,bSBrowser:_htBrowserInfo.bSBrowser,bInapp:!1,version:_htOsInfo.version,browserVersion:_htBrowserInfo.version};
for(var n in _htDeviceInfo){"boolean"==typeof _htDeviceInfo[n]&&_htDeviceInfo[n]&&_htDeviceInfo.hasOwnProperty(n)&&"b"!==n[0]&&(_htDeviceInfo.name=n)
}_htDeviceInfo.samsung=/GT-|SCH-|SHV-|SHW-|SPH|SWT-|SGH-|EK-|Galaxy Nexus|SAMSUNG/.test(e),_htDeviceInfo.lg=/LG-/.test(e),_htDeviceInfo.pantech=/IM-/.test(e),_htDeviceInfo.iphone||_htDeviceInfo.ipad?t("Safari",e)||(_htDeviceInfo.bInapp=!0):_htDeviceInfo.android&&(e=e.toLowerCase(),(t("inapp",e)||t("app",e.replace("applewebkit","")))&&(_htDeviceInfo.bInapp=!0))
}function _setOsInfo(){_htOsInfo=dttjindo.$Agent().os(),_isInapp(),_htOsInfo.version=_htOsInfo.version||_getOsVersion(),_htOsInfo.ios="undefined"==typeof _htOsInfo.ios?_htOsInfo.ipad||_htOsInfo.iphone:_htOsInfo.ios
}function _setBrowserInfo(){_htBrowserInfo=dttjindo.$Agent().navigator(),_htOsInfo.ios&&/CriOS/.test(navigator.userAgent)&&(_htBrowserInfo.chrome=!0),"undefined"==typeof _htBrowserInfo.firefox&&(_htBrowserInfo.firefox=/Firefox/.test(navigator.userAgent)),_isSBrowser(),_updateUnderVersion()
}function _updateUnderVersion(){_htBrowserInfo.msafari&&_htBrowserInfo.chrome?_htBrowserInfo.version=parseFloat(_htOsInfo.ios?navigator.userAgent.match(/CriOS[ \/]([0-9.]+)/)[1]:navigator.userAgent.match(/Chrome[ \/]([0-9.]+)/)[1]):_htBrowserInfo.firefox&&(_htBrowserInfo.version=parseFloat(navigator.userAgent.match(/Firefox[ \/]([0-9.]+)/)[1]))
}function _isInapp(){var t=navigator.userAgent;
_htOsInfo.bInapp=!1,_htOsInfo.ios?-1==t.indexOf("Safari")&&(_htOsInfo.bInapp=!0):_htOsInfo.android&&(t=t.toLowerCase(),(-1!=t.indexOf("inapp")||-1!=t.replace("applewebkit","").indexOf("app"))&&(_htOsInfo.bInapp=!0))
}function _isSBrowser(){_htBrowserInfo.bSBrowser=!1;
var t=navigator.userAgent,e=t.match(/(SAMSUNG|Chrome)/gi)||"";
e.length>1&&(_htBrowserInfo.bSBrowser=!0)
}function _getOsVersion(){if(!_htOsInfo.version){var t,e=navigator.userAgent,n="";
return _htOsInfo.iphone||_htOsInfo.ipad?(t=e.match(/OS\s([\d|\_]+\s)/i),null!==t&&t.length>1&&(n=t[1])):_htOsInfo.android?(t=e.match(/Android\s([^\;]*)/i),null!==t&&t.length>1&&(n=t[1])):_htOsInfo.mwin&&(t=e.match(/Windows Phone\s([^\;]*)/i),null!==t&&t.length>1&&(n=t[1])),n.replace(/\_/g,".").replace(/\s/g,"")
}}function _onOrientationChange(t){if("load"===t.type){return _nPreWidth=document.documentElement.clientWidth,void (_isVertical=_htOsInfo.bInapp||!_htOsInfo.iphone&&!_htOsInfo.ipad&&"resize"===_getOrientationChangeEvt()?_nPreWidth>document.documentElement.clientHeight?!1:!0:_getVertical())
}if("resize"===_getOrientationChangeEvt()){setTimeout(function(){_orientationChange(t)
},0)
}else{var e=dttjindo.$Document().clientSize().width,n=300;
if(_htDeviceInfo.android){if("orientationchange"==t.type&&e==_nPreWidth){return setTimeout(function(){_onOrientationChange(t)
},500),!1
}_nPreWidth=e
}clearTimeout(_nRotateTimer),_nRotateTimer=setTimeout(function(){_orientationChange(t)
},n)
}}function _orientationChange(t){var e=_isVertical;
_isVertical=_getVertical(),(dttjindo.$Agent().navigator().mobile||dttjindo.$Agent().os().ipad)&&e!==_isVertical&&(t.sType="rotate",t.isVertical=_isVertical,_fireEvent("mobilerotate",t))
}function _onPageshow(t){_isVertical=_getVertical(),t.sType="pageShow",setTimeout(function(){_fireEvent("mobilePageshow",t)
},300)
}function _getTranslateOffsetFromCSSMatrix(t){var e=new WebKitCSSMatrix(window.getComputedStyle(t).webkitTransform);
return{top:e.m42,left:e.m41}
}function _fireEvent(t,e){if(_htHandler[t]){for(var n=_htHandler[t].concat(),i=0,o=n.length;
o>i;
i++){n[i].call(this,e)
}}}function _getTranslateOffsetFromStyle(t){var e=0,n=0,i=[],o=[],r=t.style[""==dttjindo.m.getCssPrefix()?"transform":dttjindo.m.getCssPrefix()+"Transform"];
if(r&&r.length>0){if(/translate[XY]/.test(r)){var s=r.match(/translateX\(([-0-9px]*)\)/),a=r.match(/translateY\(([-0-9px]*)\)/);
o.push(s&&s.length>1?s[1]:"0px"),o.push(a&&a.length>1?a[1]:"0px"),i[1]=o.join(",")
}else{i=r.match(/translate.{0,2}\((.*)\)/)
}if(i&&i.length>1){var l=i[1].split(",");
l&&l.length>1&&(e=parseInt(l[1],10),n=parseInt(l[0],10))
}}return{top:e,left:n}
}var _isVertical=null,_nPreWidth=-1,_nRotateTimer=null,_htHandler={},_htDeviceInfo={},_htAddPatch={},_htOsInfo={},_htBrowserInfo={},_htTouchEventName={start:"mousedown",move:"mousemove",end:"mouseup",cancel:null},_htDeviceList={galaxyTab:["SHW-M180"],galaxyTab2:["SHW-M380"],galaxyS:["SHW-M110"],galaxyS2:["SHW-M250","GT-I9100"],galaxyS2LTE:["SHV-E110"],galaxyS3:["SHV-E210","SHW-M440","GT-I9300"],galaxyNote:["SHV-E160"],galaxyNote2:["SHV-E250"],galaxyNexus:["Galaxy Nexus"],optimusLte2:["LG-F160"],optimusVu:["LG-F100"],optimusLte:["LG-LU6200","LG-SU640","LG-F120K"]},__M__={MOVETYPE:{0:"hScroll",1:"vScroll",2:"dScroll",3:"tap",4:"longTap",5:"doubleTap",6:"pinch",7:"rotate",8:"pinch-rotate"},KITKAT_HIGHLIGHT_CLASS:"_jmc_no_tap_highlight_",KITKAT_HIGHLIGHT_ID:"_jmc_no_tap_highlight_tag_",sVersion:"unknown",$init:function(){_initDeviceInfo(),_initTouchEventName(),_attachEvent();
var t=dttjindo.$(this.KITKAT_HIGHLIGHT_ID);
if(!t){t=document.createElement("style");
var e=document.getElementsByTagName("html")[0];
t.type="text/css",t.id=this.KITKAT_HIGHLIGHT_ID,e.insertBefore(t,e.firstChild);
var n=t.sheet||t.styleSheet;
n.insertRule&&(n.insertRule("."+this.KITKAT_HIGHLIGHT_CLASS+" { -webkit-tap-highlight-color: rgba(0,0,0,0); }",0),n.insertRule("."+this.KITKAT_HIGHLIGHT_CLASS+" * { -webkit-tap-highlight-color: rgba(0,0,0,0); }",0))
}},bindRotate:function(t){var e=_htHandler.mobilerotate;
"undefined"==typeof e&&(e=_htHandler.mobilerotate=[]),e.push(t)
},unbindRotate:function(t){var e=_htHandler.mobilerotate;
if(e){for(var n,i=0;
n=e[i];
i++){if(n===t){e.splice(i,1);
break
}}}},bindPageshow:function(t){var e=_htHandler.mobilePageshow;
"undefined"==typeof e&&(e=_htHandler.mobilePageshow=[]),e.push(t)
},unbindPageshow:function(t){var e=_htHandler.mobilePageshow;
if(e){for(var n,i=0;
n=e[i];
i++){if(n===t){e.splice(i,1);
break
}}}},getDeviceInfo:function(){return _htDeviceInfo
},getOsInfo:function(){return _htOsInfo
},getBrowserInfo:function(){return _htBrowserInfo
},isVertical:function(){return null===_isVertical?_isVertical=_getVertical():_isVertical
},getNodeElement:function(t){for(;
1!=t.nodeType;
){t=t.parentNode
}return t
},getTranslateOffset:function(t){t=dttjindo.$Element(t);
var e,n=t.$value();
return e=_htOsInfo.android&&3===parseInt(_htOsInfo.version,10)?_getTranslateOffsetFromStyle(n):"WebKitCSSMatrix" in window&&"m11" in new WebKitCSSMatrix?_getTranslateOffsetFromCSSMatrix(n):_getTranslateOffsetFromStyle(n)
},getStyleOffset:function(t){var e=parseInt(t.css("left"),10),n=parseInt(t.css("top"),10);
return e=isNaN(e)?0:e,n=isNaN(n)?0:n,{left:e,top:n}
},attachTransitionEnd:function(t,e){var n=(dttjindo.$Jindo.VERSION||dttjindo.$Jindo().version||dttjindo.VERSION).replace(/[a-z.]/gi,"");
if(n>230){t._jindo_fn_=dttjindo.$Fn(e,this).attach(t,"transitionend")
}else{var i=("ms"===this.getCssPrefix()?"MS":this.getCssPrefix())+"TransitionEnd";
t.addEventListener(i,e,!1)
}},detachTransitionEnd:function(t,e){var n=(dttjindo.$Jindo.VERSION||dttjindo.$Jindo().version||dttjindo.VERSION).replace(/[a-z.]/gi,"");
if(n>230){t._jindo_fn_&&(t._jindo_fn_.detach(t,"transitionend"),delete t._jindo_fn_)
}else{var i=("ms"===this.getCssPrefix()?"MS":this.getCssPrefix())+"TransitionEnd";
t.removeEventListener(i,e,!1)
}},_attachFakeJindo:function(t,e,n){var i=(dttjindo.$Jindo.VERSION||dttjindo.$Jindo().version||dttjindo.VERSION).replace(/[a-z.]/gi,""),o=null;
return o=230>i&&"undefined"!=typeof _notSupport?_notSupport.$Fn(e).attach(t,n):dttjindo.$Fn(e).attach(t,n)
},_getTouchEventName:function(){return _htTouchEventName
},getCssPrefix:function(){var t="";
return"undefined"!=typeof document.body.style.webkitTransition?t="webkit":"undefined"!=typeof document.body.style.transition||("undefined"!=typeof document.body.style.MozTransition?t="Moz":"undefined"!=typeof document.body.style.OTransition?t="O":"undefined"!=typeof document.body.style.msTransition&&(t="ms")),dttjindo.m.getCssPrefix=function(){return t
},t
},getClosest:function(t,e){var n,i=dttjindo.$Element(e),o=/<\/?(?:h[1-5]|[a-z]+(?:\:[a-z]+)?)[^>]*>/gi;
return o.test(t)?"<"+e.tagName.toUpperCase()+">"==t.toUpperCase()?n=e:(n=i.parent(function(e){return"<"+e.$value().tagName.toUpperCase()+">"==t.toUpperCase()?e:void 0
}),n=n.length?n[0].$value():!1):(0==t.indexOf(".")&&(t=t.substring(1,t.length)),i.hasClass(t)?n=e:(n=i.parent(function(e){return e.hasClass(t)?e:void 0
}),n=n.length?n[0].$value():!1)),n
},useCss3d:function(){if(_htAddPatch.useCss3d&&"function"==typeof _htAddPatch.useCss3d){switch(_htAddPatch.useCss3d()){case -1:return !1;
case 1:return !0
}}var t=!1;
if(_htBrowserInfo.chrome&&_htBrowserInfo.version<"25"&&!_htBrowserInfo.bSBrowser){return t
}if(_htOsInfo.ios){t=!0
}else{if(_htBrowserInfo.firefox){t=!0
}else{if(_htOsInfo.android){var e=navigator.userAgent.match(/\(.*\)/);
e instanceof Array&&e.length>0&&(e=e[0]),_htOsInfo.version>="4.1.0"?t=/EK-GN120|SM-G386F/.test(e)?!1:!0:(_htOsInfo.version>="4.0"&&(t=!0),_htOsInfo.version>="4.0.3"&&/SHW-|SHV-|GT-|SCH-|SGH-|SPH-|LG-F160|LG-F100|LG-F180|LG-F200|EK-|IM-A|LG-F240|LG-F260/.test(e)&&!/SHW-M420|SHW-M200|GT-S7562/.test(e)&&(t=!0))
}}}return t
},patch:function(t){return _htAddPatch.ver=t,this
},_checkPatchVersion:function(){var t=dttjindo.m.Component.VERSION.split("."),e=t.slice(0,3).join(".");
return _htAddPatch.ver>=e?!0:!1
},add:function(t){if(this._checkPatchVersion()){for(var e in t){_htAddPatch[e]=t[e]
}}return this
},getDeviceName:function(){if(_htAddPatch.getDeviceName&&"function"==typeof _htAddPatch.getDeviceName&&_htAddPatch.getDeviceName()){return _htAddPatch.getDeviceName()
}var sUserAgent=navigator.userAgent;
for(var i in _htDeviceList){if(eval("/"+_htDeviceList[i].join("|")+"/").test(sUserAgent)){return i
}}var htInfo=dttjindo.$Agent().os();
for(var x in htInfo){if(htInfo[x]===!0&&htInfo.hasOwnProperty(x)){return x
}}},useFixed:function(){if(_htAddPatch.useFixed&&"function"==typeof _htAddPatch.useFixed){switch(_htAddPatch.useFixed()){case -1:return !1;
case 1:return !0
}}var t=!1;
return(_htBrowserInfo.chrome||_htBrowserInfo.firefox||_htOsInfo.android&&parseInt(_htOsInfo.version,10)>=3||_htOsInfo.ios&&parseInt(_htOsInfo.version,10)>=5||_htOsInfo.mwin&&parseInt(_htOsInfo.version,10)>=8)&&(t=!0),t
},useTimingFunction:function(){if(_htAddPatch.useTimingFunction&&"function"==typeof _htAddPatch.useTimingFunction&&_htAddPatch.useTimingFunction()){switch(_htAddPatch.useTimingFunction()){case -1:return !1;
case 1:return !0
}}var t=this.useCss3d();
return _htOsInfo.android?t=!1:_htOsInfo.ios&&parseInt(_htOsInfo.version,10)>=6&&(t=!1),t
},_cacheMaxClientSize:{},_fullSizeCheckElement:null,_allEventStop:function(t,e){this._htEvent||(this._htEvent={}),"detach"==e?(this._htEvent.touchstart.detach(document.body,"touchstart").detach(document.body,"touchmove"),this._htEvent={}):this._htEvent.touchstart||"attach"!=e||(this._htEvent.touchstart=dttjindo.$Fn(t,this).attach(document.body,"touchstart").attach(document.body,"touchmove"))
},_stopDefault:function(t){t.stop()
},_hasOrientation:void 0!==window.orientation,_maxClientSize:function(t,e){var n=this.getOsInfo();
this._allEventStop(this._stopDefault,"attach"),this._fullSizeCheckElement||(this._fullSizeCheckElement=document.createElement("div"));
var i=n.android?500:100;
i=e?1:i;
var o;
this._hasOrientation&&(o=Math.abs(window.orientation/90)%2,i=void 0!==this._cacheMaxClientSize[o]?0:i);
var r=this;
document.body.scrollTop<=1?(document.body.appendChild(r._fullSizeCheckElement),r._fullSizeCheckElement.style.cssText="position:absolute; top: 0px; width:100%;height:"+parseInt(window.innerHeight+200,10)+"px;",window.scrollTo(0,1),setTimeout(function(){r._checkSize(r._hasOrientation,r._cacheMaxClientSize,o,t,r,i)
},i)):(this._fullSizeCheckElement.style.height=window.innerHeight+"px",this._checkSize(this._hasOrientation,this._cacheMaxClientSize,o,t,r,i))
},_checkSize:function(t,e,n,i,o,r){var s=this.getOsInfo(),a=this.getBrowserInfo();
this._allEventStop(this._stopDefault,"attach");
var l;
t&&e[n]?l=e[n]:(o._fullSizeCheckElement.style.cssText="position:absolute; top: 0px; width:100%;height:"+window.innerHeight+"px;overflow:hidden",l=a.mobile||s.ipad?{width:window.innerWidth,height:window.innerHeight}:{width:document.documentElement.clientWidth,height:document.documentElement.clientHeight},t&&(e[n]=l)),i.call(o,l);
var d=this;
this._allEventStop(this._stopDefault,"detach"),0===r?this._fullSizeCheckElement.style.height="0px":setTimeout(function(){d._fullSizeCheckElement.style.height="0px"
},r)
},hasOffsetBug:function(){if(_htAddPatch.hasOffsetBug&&"function"==typeof _htAddPatch.hasOffsetBug){switch(_htAddPatch.hasOffsetBug()){case -1:return !1;
case 1:return !0
}}var t=!1;
return t=_htOsInfo.android?_htBrowserInfo.chrome||_htBrowserInfo.firefox?!1:_htOsInfo.version<"4"?!0:!1:!1
},hasClickBug:function(){if(_htAddPatch.hasClickBug&&"function"==typeof _htAddPatch.hasClickBug){switch(_htAddPatch.hasClickBug()){case -1:return !1;
case 1:return !0
}}return _htOsInfo.ios||window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>0||!1
},_getTranslate:function(t,e,n){return n="undefined"==typeof n?!0:n,"translate"+(n?"3d(":"(")+t+","+e+(n?",0)":")")
},_toPrefixStr:function(t){return t.length<=0?t:(t=""==this.getCssPrefix()?t.charAt(0).toLowerCase()+t.substr(1):t.charAt(0).toUpperCase()+t.substr(1),this.getCssPrefix()+t)
},_hasJindoOffsetBug:function(){return !(dttjindo.$Element.prototype.offset_get&&-1==dttjindo.$Element.prototype.offset_get.toString().indexOf("fpSafari"))
},_hasKitkatHighlightBug:function(){if(_htAddPatch._hasKitkatHighlightBug&&"function"==typeof _htAddPatch._hasKitkatHighlightBug){switch(_htAddPatch._hasKitkatHighlightBug()){case -1:return !1;
case 1:return !0
}}return _htBrowserInfo.chrome&&!_htBrowserInfo.bSBrowser&&_htBrowserInfo.version<35
}};
return __M__._isUseFixed=__M__.useFixed,__M__._isUseTimingFunction=__M__.useTimingFunction,__M__._isUseCss3d=__M__.useCss3d,__M__.getCssOffset=__M__.getTranslateOffset,__M__.$init(),__M__
}(),"mixin" in dttjindo.$Jindo||(dttjindo.$Jindo.mixin=function(t,e){var n={};
for(var i in t){n[i]=t[i]
}for(i in e){e.hasOwnProperty(i)&&"undefined"!=typeof e[i]&&(n[i]=e[i])
}return n
}),dttjindo.m.Component=dttjindo.$Class({_htEventHandler:null,_htOption:null,$init:function(){this._htEventHandler={},this._htOption={},this._htOption._htSetter={},this.constructor.$count=(this.constructor.$count||0)+1
},option:function(t,e){switch(typeof t){case"undefined":var n={};
for(var i in this._htOption){"htCustomEventHandler"!=i&&"_htSetter"!=i&&(n[i]=this._htOption[i])
}return n;
case"string":if("undefined"==typeof e){return this._htOption[t]
}if("htCustomEventHandler"==t){if("undefined"!=typeof this._htOption[t]){return this
}this.attach(e)
}this._htOption[t]=e,"function"==typeof this._htOption._htSetter[t]&&this._htOption._htSetter[t](e);
break;
case"object":for(var o in t){if("htCustomEventHandler"==o){if("undefined"!=typeof this._htOption[o]){continue
}this.attach(t[o])
}"_htSetter"!==o&&(this._htOption[o]=t[o]),"function"==typeof this._htOption._htSetter[o]&&this._htOption._htSetter[o](t[o])
}}return this
},optionSetter:function(t,e){switch(typeof t){case"undefined":return this._htOption._htSetter;
case"string":if("undefined"==typeof e){return this._htOption._htSetter[t]
}this._htOption._htSetter[t]=dttjindo.$Fn(e,this).bind();
break;
case"object":for(var n in t){this._htOption._htSetter[n]=dttjindo.$Fn(t[n],this).bind()
}}return this
},fireEvent:function(t,e){e=e||{};
var n=this["on"+t],i=this._htEventHandler[t]||[],o="function"==typeof n,r=i.length>0;
if(!o&&!r){return !0
}i=i.concat(),e.sType=t,"undefined"==typeof e._aExtend&&(e._aExtend=[],e.stop=function(){e._aExtend.length>0&&(e._aExtend[e._aExtend.length-1].bCanceled=!0)
}),e._aExtend.push({sType:t,bCanceled:!1});
var s,a,l=[e];
for(s=2,a=arguments.length;
a>s;
s++){l.push(arguments[s])
}if(o&&n.apply(this,l),r){var d;
for(s=0,d;
d=i[s];
s++){d.apply(this,l)
}}return !e._aExtend.pop().bCanceled
},attach:function(t,e){if(1==arguments.length){return dttjindo.$H(arguments[0]).forEach(dttjindo.$Fn(function(t,e){this.attach(e,t)
},this).bind()),this
}var n=this._htEventHandler[t];
return"undefined"==typeof n&&(n=this._htEventHandler[t]=[]),n.push(e),this
},detach:function(t,e){if(1==arguments.length){return dttjindo.$H(arguments[0]).forEach(dttjindo.$Fn(function(t,e){this.detach(e,t)
},this).bind()),this
}var n=this._htEventHandler[t];
if(n){for(var i,o=0;
i=n[o];
o++){if(i===e){n=n.splice(o,1);
break
}}}return this
},detachAll:function(t){var e=this._htEventHandler;
if(arguments.length){return"undefined"==typeof e[t]?this:(delete e[t],this)
}for(var n in e){delete e[n]
}return this
}}),dttjindo.m.Component.factory=function(t,e){var n,i=[];
"undefined"==typeof e&&(e={});
for(var o,r=0;
o=t[r];
r++){n=new this(o,e),i[i.length]=n
}return i
},dttjindo.m.Component.getInstance=function(){throw new Error("JC 1.11.0 or JMC 1.13.0 later, getInstance method of Component is not longer supported.")
},dttjindo.m.Component.VERSION="1.16.0",dttjindo.m.Effect=function(t){if(this instanceof arguments.callee){throw new Error("You can't create a instance of this")
}var e=/^(\-?[0-9\.]+)(%|\w+)?$/,n=/^rgb\(([0-9]+)\s?,\s?([0-9]+)\s?,\s?([0-9]+)\)$/i,i=/^rgba\(([0-9]+)\s?,\s?([0-9]+)\s?,\s?([0-9]+),\s?([0-9\.]+)\)$/i,o=/^hsl\(([0-9\.]+)\s?,\s?([0-9\.]+)%\s?,\s?([0-9\.]+)%\)$/i,r=/^hsla\(([0-9\.]+)\s?,\s?([0-9\.]+)%\s?,\s?([0-9\.]+)%,\s?([0-9\.]+)\)$/i,s=/^#([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})$/i,a=/^#([0-9A-F])([0-9A-F])([0-9A-F])$/i,l=function(t){var l,d=t;
if(e.test(t)){d=parseFloat(t),l=RegExp.$2||""
}else{if(n.test(t)){d={rgb:[parseInt(RegExp.$1,10),parseInt(RegExp.$2,10),parseInt(RegExp.$3,10),1]},l="color"
}else{if(i.test(t)){d={rgb:[parseInt(RegExp.$1,10),parseInt(RegExp.$2,10),parseInt(RegExp.$3,10),parseFloat(RegExp.$4)]},l="color"
}else{if(o.test(t)){d={hsl:[parseFloat(RegExp.$1),parseFloat(RegExp.$2)/100,parseFloat(RegExp.$3)/100,1]},d.rgb=u.apply(this,d.hsl),l="color"
}else{if(r.test(t)){d={hsl:[parseFloat(RegExp.$1),parseFloat(RegExp.$2)/100,parseFloat(RegExp.$3)/100,parseFloat(RegExp.$4)]},d.rgb=u.apply(this,d.hsl),l="color"
}else{if(!s.test(t=t.replace(a,"#$1$1$2$2$3$3"))){throw new Error("unit error ("+t+")")
}d={rgb:[parseInt(RegExp.$1,16),parseInt(RegExp.$2,16),parseInt(RegExp.$3,16),1]},l="color"
}}}}}return{nValue:d,sUnit:l}
},d=function(t){var e=[];
return t.replace(/([^\s]+\([^\)]*\)|[^\s]+)\s?/g,function(t,n){e.push(n)
}),e
},h=function(t){for(var e=d(t?t+"":"0"),n=[],i=0,o=e.length;
o>i;
i++){n.push(l(e[i]))
}return n
},c=function(t){return"object"==typeof t?{nValue:t.nValue,sUnit:t.sUnit}:t
},u=function(t,e,n,i){t=t%360/60;
var o=(1-Math.abs(2*n-1))*e,r=o*(1-Math.abs(t%2-1)),s=0,a=0,l=0;
t>=5||1>t?(s=o,l=r):t>=4?(s=r,l=o):t>=3?(a=r,l=o):t>=2?(a=o,l=r):t>=1&&(s=r,a=o);
var d=n-o/2;
return[Math.round(255*(s+d)),Math.round(255*(a+d)),Math.round(255*(l+d)),i]
};
return function(e,n){var i,o,r=function(){var t=!1;
if(s.start!==e&&(i=h(s.start),e=s.start,t=!0),s.end!==n&&(o=h(s.end),n=s.end,t=!0),t){var r,a,l=Math.max(i.length,o.length);
if(i.length!==o.length&&l>1){switch(i.length){case 1:i[1]=c(i[0]);
case 2:i[2]=c(i[0]);
case 3:i[3]=c(i[1])
}switch(o.length){case 1:o[1]=c(o[0]);
case 2:o[2]=c(o[0]);
case 3:o[3]=c(o[1])
}}for(var d=0;
l>d;
d++){if(r=i[d],a=o[d],0===r.nValue?r.sUnit=a.sUnit:0===a.nValue&&(a.sUnit=r.sUnit),r.sUnit!=a.sUnit){throw new Error("unit error ("+e+" ~ "+n+")")
}}}},s=function(e){var n=[];
r();
for(var s,a,l,d,h,c,u=0,p=Math.max(i.length,o.length);
p>u;
u++){s=i[u],a=o[u],l=s.nValue,d=a.nValue,h=s.sUnit;
var f=t(e),_=function(t,e,n){return Math.round(1000000*((e-t)*f+t))/1000000+(n||0)
};
if("color"===h){if(l.hsl&&d.hsl){l=l.hsl,d=d.hsl;
var m=Math.round(_(l[0],d[0])),g=100*Math.max(0,Math.min(1,_(l[1],d[1]))),v=100*Math.max(0,Math.min(1,_(l[2],d[2])));
c=_(l[3],d[3]),n.push(1===c?"hsl("+[m,g+"%",v+"%"].join(",")+")":"hsla("+[m,g+"%",v+"%",c].join(",")+")")
}else{l=l.rgb,d=d.rgb;
var y=Math.max(0,Math.min(255,Math.round(_(l[0],d[0])))),E=Math.max(0,Math.min(255,Math.round(_(l[1],d[1])))),j=Math.max(0,Math.min(255,Math.round(_(l[2],d[2]))));
if(c=_(l[3],d[3]),1===c){var T=(y<<16|E<<8|j).toString(16).toUpperCase();
n.push("#"+Array(7-T.length).join("0")+T)
}else{n.push("rgba("+[y,E,j,c].join(",")+")")
}}}else{n.push(_(l,d,h))
}}return n.join(" ")
};
switch(arguments.length){case 0:break;
case 1:n=e||"0",e="0",s.setStart=function(t){this.start=t
}
}return s.start=e,s.end=n,s.effectConstructor=arguments.callee,e=n=null,arguments.length>1&&r(),s
}
},dttjindo.m.Effect.linear=dttjindo.m.Effect(function(t){return t
}),dttjindo.m.Effect.linear.toString=function(){return"linear"
},dttjindo.m.Effect.easeInSine=dttjindo.m.Effect(function(t){return 1==t?1:-Math.cos(t*(Math.PI/2))+1
}),dttjindo.m.Effect.easeOutSine=dttjindo.m.Effect(function(t){return Math.sin(t*(Math.PI/2))
}),dttjindo.m.Effect.easeInOutSine=dttjindo.m.Effect(function(t){return 0.5>t?0.5*dttjindo.m.Effect.easeInSine(0,1)(2*t):0.5*dttjindo.m.Effect.easeOutSine(0,1)(2*t-1)+0.5
}),dttjindo.m.Effect.easeOutInSine=dttjindo.m.Effect(function(t){return 0.5>t?0.5*dttjindo.m.Effect.easeOutSine(0,1)(2*t):0.5*dttjindo.m.Effect.easeInSine(0,1)(2*t-1)+0.5
}),dttjindo.m.Effect.easeInQuad=dttjindo.m.Effect(function(t){return t*t
}),dttjindo.m.Effect.easeOutQuad=dttjindo.m.Effect(function(t){return -(t*(t-2))
}),dttjindo.m.Effect.easeInOutQuad=dttjindo.m.Effect(function(t){return 0.5>t?0.5*dttjindo.m.Effect.easeInQuad(0,1)(2*t):0.5*dttjindo.m.Effect.easeOutQuad(0,1)(2*t-1)+0.5
}),dttjindo.m.Effect.easeOutInQuad=dttjindo.m.Effect(function(t){return 0.5>t?0.5*dttjindo.m.Effect.easeOutQuad(0,1)(2*t):0.5*dttjindo.m.Effect.easeInQuad(0,1)(2*t-1)+0.5
}),dttjindo.m.Effect.easeInCubic=dttjindo.m.Effect(function(t){return Math.pow(t,3)
}),dttjindo.m.Effect.easeOutCubic=dttjindo.m.Effect(function(t){return Math.pow(t-1,3)+1
}),dttjindo.m.Effect.easeInOutCubic=dttjindo.m.Effect(function(t){return 0.5>t?0.5*dttjindo.m.Effect.easeIn(0,1)(2*t):0.5*dttjindo.m.Effect.easeOut(0,1)(2*t-1)+0.5
}),dttjindo.m.Effect.easeOutInCubic=dttjindo.m.Effect(function(t){return 0.5>t?0.5*dttjindo.m.Effect.easeOut(0,1)(2*t):0.5*dttjindo.m.Effect.easeIn(0,1)(2*t-1)+0.5
}),dttjindo.m.Effect.easeInQuart=dttjindo.m.Effect(function(t){return Math.pow(t,4)
}),dttjindo.m.Effect.easeOutQuart=dttjindo.m.Effect(function(t){return -(Math.pow(t-1,4)-1)
}),dttjindo.m.Effect.easeInOutQuart=dttjindo.m.Effect(function(t){return 0.5>t?0.5*dttjindo.m.Effect.easeInQuart(0,1)(2*t):0.5*dttjindo.m.Effect.easeOutQuart(0,1)(2*t-1)+0.5
}),dttjindo.m.Effect.easeOutInQuart=dttjindo.m.Effect(function(t){return 0.5>t?0.5*dttjindo.m.Effect.easeOutQuart(0,1)(2*t):0.5*dttjindo.m.Effect.easeInQuart(0,1)(2*t-1)+0.5
}),dttjindo.m.Effect.easeInQuint=dttjindo.m.Effect(function(t){return Math.pow(t,5)
}),dttjindo.m.Effect.easeOutQuint=dttjindo.m.Effect(function(t){return Math.pow(t-1,5)+1
}),dttjindo.m.Effect.easeInOutQuint=dttjindo.m.Effect(function(t){return 0.5>t?0.5*dttjindo.m.Effect.easeInQuint(0,1)(2*t):0.5*dttjindo.m.Effect.easeOutQuint(0,1)(2*t-1)+0.5
}),dttjindo.m.Effect.easeOutInQuint=dttjindo.m.Effect(function(t){return 0.5>t?0.5*dttjindo.m.Effect.easeOutQuint(0,1)(2*t):0.5*dttjindo.m.Effect.easeInQuint(0,1)(2*t-1)+0.5
}),dttjindo.m.Effect.easeInCircle=dttjindo.m.Effect(function(t){return -(Math.sqrt(1-t*t)-1)
}),dttjindo.m.Effect.easeOutCircle=dttjindo.m.Effect(function(t){return Math.sqrt(1-(t-1)*(t-1))
}),dttjindo.m.Effect.easeInOutCircle=dttjindo.m.Effect(function(t){return 0.5>t?0.5*dttjindo.m.Effect.easeInCircle(0,1)(2*t):0.5*dttjindo.m.Effect.easeOutCircle(0,1)(2*t-1)+0.5
}),dttjindo.m.Effect.easeOutInCircle=dttjindo.m.Effect(function(t){return 0.5>t?0.5*dttjindo.m.Effect.easeOutCircle(0,1)(2*t):0.5*dttjindo.m.Effect.easeInCircle(0,1)(2*t-1)+0.5
}),dttjindo.m.Effect.easeInBack=dttjindo.m.Effect(function(t){var e=1.70158;
return 1==t?1:t/1*(t/1)*((1+e)*t-e)
}),dttjindo.m.Effect.easeOutBack=dttjindo.m.Effect(function(t){var e=1.70158;
return 0===t?0:(t=t/1-1)*t*((e+1)*t+e)+1
}),dttjindo.m.Effect.easeInOutBack=dttjindo.m.Effect(function(t){return 0.5>t?0.5*dttjindo.m.Effect.easeInBack(0,1)(2*t):0.5*dttjindo.m.Effect.easeOutBack(0,1)(2*t-1)+0.5
}),dttjindo.m.Effect.easeInElastic=dttjindo.m.Effect(function(t){var e,n=0,i=0;
return 0===t?0:1==(t/=1)?1:(n||(n=0.3),!i||1>i?(i=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/i),-(i*Math.pow(2,10*(t-=1))*Math.sin(2*(t-1)*Math.PI/n)))
}),dttjindo.m.Effect.easeOutElastic=dttjindo.m.Effect(function(t){var e,n=0,i=0;
return 0===t?0:1==(t/=1)?1:(n||(n=0.3),!i||1>i?(i=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/i),i*Math.pow(2,-10*t)*Math.sin(2*(t-e)*Math.PI/n)+1)
}),dttjindo.m.Effect.easeInOutElastic=dttjindo.m.Effect(function(t){var e,n=0,i=0;
return 0===t?0:2==(t/=0.5)?1:(n||(n=0.3*1.5),!i||1>i?(i=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/i),1>t?-0.5*i*Math.pow(2,10*(t-=1))*Math.sin(2*(t-e)*Math.PI/n):i*Math.pow(2,-10*(t-=1))*Math.sin(2*(t-e)*Math.PI/n)*0.5+1)
}),dttjindo.m.Effect.easeOutBounce=dttjindo.m.Effect(function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+0.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+0.9375:7.5625*(t-=2.625/2.75)*t+0.984375
}),dttjindo.m.Effect.easeInBounce=dttjindo.m.Effect(function(t){return 1-dttjindo.m.Effect.easeOutBounce(0,1)(1-t)
}),dttjindo.m.Effect.easeInOutBounce=dttjindo.m.Effect(function(t){return 0.5>t?0.5*dttjindo.m.Effect.easeInBounce(0,1)(2*t):0.5*dttjindo.m.Effect.easeOutBounce(0,1)(2*t-1)+0.5
}),dttjindo.m.Effect.easeInExpo=dttjindo.m.Effect(function(t){return 0===t?0:Math.pow(2,10*(t-1))
}),dttjindo.m.Effect.easeOutExpo=dttjindo.m.Effect(function(t){return 1==t?1:-Math.pow(2,-10*t/1)+1
}),dttjindo.m.Effect.easeInOutExpo=dttjindo.m.Effect(function(t){return 0.5>t?0.5*dttjindo.m.Effect.easeInExpo(0,1)(2*t):0.5*dttjindo.m.Effect.easeOutExpo(0,1)(2*t-1)+0.5
}),dttjindo.m.Effect.easeOutInExpo=dttjindo.m.Effect(function(t){return 0.5>t?0.5*dttjindo.m.Effect.easeOutExpo(0,1)(2*t):0.5*dttjindo.m.Effect.easeInExpo(0,1)(2*t-1)+0.5
}),dttjindo.m.Effect._cubicBezier=function(t,e,n,i){return function(o){function r(t){return((c*t+h)*t+d)*t
}function s(t){return((f*t+p)*t+u)*t
}function a(t){return(3*c*t+2*h)*t+d
}function l(t,e){var n,i,o,s,l,d;
for(o=t,d=0;
8>d;
d++){if(s=r(o)-t,Math.abs(s)<e){return o
}if(l=a(o),Math.abs(l)<0.000001){break
}o-=s/l
}if(n=0,i=1,o=t,n>o){return n
}if(o>i){return i
}for(;
i>n;
){if(s=r(o),Math.abs(s-t)<e){return o
}t>s?n=o:i=o,o=0.5*(i-n)+n
}return o
}var d=3*t,h=3*(n-t)-d,c=1-d-h,u=3*e,p=3*(i-e)-u,f=1-u-p;
return s(l(o,0.005))
}
},dttjindo.m.Effect.cubicBezier=function(t,e,n,i){var o=dttjindo.m.Effect(dttjindo.m.Effect._cubicBezier(t,e,n,i)),r="cubic-bezier("+[t,e,n,i].join(",")+")";
return o.toString=function(){return r
},o
},dttjindo.m.Effect.cubicEase=dttjindo.m.Effect.cubicBezier(0.25,0.1,0.25,1),dttjindo.m.Effect.cubicEase.toString=function(){return"ease"
},dttjindo.m.Effect.cubicEaseIn=dttjindo.m.Effect.cubicBezier(0.42,0,1,1),dttjindo.m.Effect.cubicEaseIn.toString=function(){return"ease-in"
},dttjindo.m.Effect.cubicEaseOut=dttjindo.m.Effect.cubicBezier(0,0,0.58,1),dttjindo.m.Effect.cubicEaseOut.toString=function(){return"ease-out"
},dttjindo.m.Effect.cubicEaseInOut=dttjindo.m.Effect.cubicBezier(0.42,0,0.58,1),dttjindo.m.Effect.cubicEaseInOut.toString=function(){return"ease-in-out"
},dttjindo.m.Effect.cubicEaseOutIn=dttjindo.m.Effect.cubicBezier(0,0.42,1,0.58),dttjindo.m.Effect.overphase=dttjindo.m.Effect(function(t){return t/=0.652785,(Math.sqrt((2-t)*t)+0.1*t).toFixed(5)
}),dttjindo.m.Effect.sinusoidal=dttjindo.m.Effect(function(t){return -Math.cos(t*Math.PI)/2+0.5
}),dttjindo.m.Effect.mirror=dttjindo.m.Effect(function(t){return dttjindo.m.Effect.sinusoidal(0,1)(0.5>t?2*t:1-2*(t-0.5))
}),dttjindo.m.Effect.pulse=function(t){return dttjindo.m.Effect(function(e){return -Math.cos(e*(t-0.5)*2*Math.PI)/2+0.5
})
},dttjindo.m.Effect.wave=function(t,e){return dttjindo.m.Effect(function(n){return(e||1)*Math.sin(360*t*n*Math.PI/180).toFixed(5)
})
},dttjindo.m.Effect.stepStart=dttjindo.m.Effect(function(t){return 0===t?0:1
}),dttjindo.m.Effect.stepEnd=dttjindo.m.Effect(function(t){return 1===t?1:0
}),dttjindo.m.Effect.easeIn=dttjindo.m.Effect.easeInCubic,dttjindo.m.Effect.easeOut=dttjindo.m.Effect.easeOutCubic,dttjindo.m.Effect.easeInOut=dttjindo.m.Effect.easeInOutCubic,dttjindo.m.Effect.easeOutIn=dttjindo.m.Effect.easeOutInCubic,dttjindo.m.Effect.bounce=dttjindo.m.Effect.easeOutBounce,dttjindo.m.Effect.elastic=dttjindo.m.Effect.easeInElastic,dttjindo.m.UIComponent=dttjindo.$Class({$init:function(){this._bIsActivating=!1
},isActivating:function(){return this._bIsActivating
},activate:function(){return this.isActivating()?this:(this._bIsActivating=!0,arguments.length>0?this._onActivate.apply(this,arguments):this._onActivate(),this)
},deactivate:function(){return this.isActivating()?(this._bIsActivating=!1,arguments.length>0?this._onDeactivate.apply(this,arguments):this._onDeactivate(),this):this
}}).extend(dttjindo.m.Component),dttjindo.m.Touch=dttjindo.$Class({$init:function(t,e){this._el=dttjindo.$Element(t).$value();
var n={nMomentumDuration:350,nMoveThreshold:7,nSlopeThreshold:25,nLongTapDuration:1000,nDoubleTapDuration:400,nTapThreshold:6,nPinchThreshold:0.1,nRotateThreshold:5,bActivateOnload:!0,bUseAutoDirection:!1,nUseDiagonal:0,bVertical:!0,bHorizental:!1};
this.option(n),this.option(e||{}),this.option("nUseDiagonal")>0&&this.option({bVertical:!0,bHorizental:!0}),this._initVariable(),this._initTouchEventName(),this._initPreventSystemEvent(),this._setSlope(),this.option("bActivateOnload")&&this.activate()
},$static:{MOVETYPE:{0:"hScroll",1:"vScroll",2:"dScroll",3:"tap",4:"longTap",5:"doubleTap",6:"pinch",7:"rotate",8:"pinch-rotate"}},_initTouchEventName:function(){"ontouchstart" in window?(this._htEventName.start="touchstart",this._htEventName.move="touchmove",this._htEventName.end="touchend",this._htEventName.cancel="touchcancel",this._hasTouchEvent=!0):window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>0&&(this._htEventName.start="MSPointerDown",this._htEventName.move="MSPointerMove",this._htEventName.end="MSPointerUp",this._htEventName.cancel="MSPointerCancel",this._hasTouchEvent=!1)
},_initPreventSystemEvent:function(){if(this._el.style&&"undefined"!=typeof this._el.style.msTouchAction){var t="none";
this.option("bHorizental")&&!this.option("bVertical")&&(t="pan-x"),this.option("bVertical")&&!this.option("bHorizental")&&(t="pan-y"),this._el.style.msTouchAction=t
}},_preventSystemEvent:function(){var t=this.nMoveType;
switch(t){case 0:this.option("bHorizental")||this.option("bUseAutoDirection");
break;
case 1:this.option("bVertical")||this.option("bUseAutoDirection");
break;
case 2:this.option("bUseAutoDirection")||this.option("bVertical")||this.option("bHorizental")
}return !0
},_initVariable:function(){this._htEventName={start:"mousedown",move:"mousemove",end:"mouseup",cancel:null},this._hasTouchEvent=!1,this._radianToDegree=180/Math.PI,this._htMoveInfo={nStartX:0,nStartY:0,nBeforeX:0,nBeforeY:0,nStartTime:0,nBeforeTime:0,nStartDistance:0,nBeforeDistance:0,nStartAngle:0,nLastAngle:0,aPos:[]},this.htEndInfo={nX:0,nY:0},this.bStart=!1,this.bMove=!1,this.nMoveType=-1,this._nStartMoveType=-1,this._nVSlope=0,this._nHSlope=0,this.bSetSlope=!1
},_attachEvents:function(){this._htEvent={},this._hasTouchEvent,this._htEvent[this._htEventName.start]={fn:dttjindo.$Fn(this._onStart,this).bind(),el:this._el},this._htEvent[this._htEventName.move]={fn:dttjindo.$Fn(this._onMove,this).bind(),el:this._el},this._htEvent[this._htEventName.end]={fn:dttjindo.$Fn(this._onEnd,this).bind(),el:this._el},this._htEvent.rotate=dttjindo.$Fn(this._onResize,this).bind(),dttjindo.m.bindRotate(this._htEvent.rotate),this._htEventName.cancel&&(this._htEvent[this._htEventName.cancel]={fn:dttjindo.$Fn(this._onCancel,this).bind(),el:this._el});
for(var t in this._htEvent){this._htEvent[t].fn&&(this._htEvent[t].ref=this._attachFakeJindo(this._htEvent[t].el,this._htEvent[t].fn,t))
}},_attachFakeJindo:function(t,e,n){var i=(dttjindo.$Jindo.VERSION||dttjindo.$Jindo().version||dttjindo.VERSION).replace(/[a-z.]/gi,""),o=null;
return o=230>i&&"undefined"!=typeof _notSupport?_notSupport.$Fn(e).attach(t,n):dttjindo.$Fn(e).attach(t,n)
},_detachEvents:function(){for(var t in this._htEvent){var e=this._htEvent[t];
e.ref&&e.ref.detach(e.el,t)
}dttjindo.m.unbindRotate(this._htEvent.rotate),this._htEvent=null
},_onCancel:function(t){this._onEnd(t)
},_onStart:function(t){this._resetTouchInfo();
var e=this._getTouchInfo(t),n={element:e[0].el,nX:e[0].nX,nY:e[0].nY,oEvent:t};
this._fireCustomEvent("touchStart",n)&&(this.bStart=!0,this._updateTouchInfo(e,"start"),this._startLongTapTimer(e,t))
},_onMove:function(t){if(this.bStart){this.bMove=!0;
var e=this._getTouchInfo(t);
if(1===e.length){if(this.nMoveType<0||3==this.nMoveType||4==this.nMoveType){var n=this._getMoveType(e);
(4!=this.nMoveType||3!=n)&&(2!=this.option("nUseDiagonal")||0!=n&&1!=n?this.nMoveType=this._nStartMoveType=n:(this._nStartMoveType=n,this.nMoveType=2))
}}else{8!==this.nMoveType&&(this.nMoveType=this._nStartMoveType=this._getMoveType(e))
}var i=this._getCustomEventParam(e,!1,t);
3!=this.nMoveType&&this._deleteLongTapTimer();
var o=0;
if(o=Math.abs(0==this.nMoveType?i.nDistanceX:1==this.nMoveType?i.nDistanceY:Math.sqrt(Math.pow(i.nDistanceX,2)+Math.pow(i.nDistanceY,2))),!(o<this.option("nMoveThreshold")||o<this.option("nSlopeThreshold"))||!(this.nMoveType<0||this.nMoveType>2)){this._updateTouchInfo(e,"move"),i.sMoveTypeAgree=!1;
var r=i.sMoveType,s=(Math.abs(i.nVectorX),this.option("bHorizental")&&r==dttjindo.m.Touch.MOVETYPE[0]),a=this.option("bVertical")&&r==dttjindo.m.Touch.MOVETYPE[1],l=1==this.option("nUseDiagonal")&&r==dttjindo.m.Touch.MOVETYPE[2],d=2==this.option("nUseDiagonal");
return(s||a||l||d)&&(i.sMoveTypeAgree=!0),this.fireEvent("touchMove",i)?void 0:void (this.bStart=!1)
}}},_onEnd:function(t){if(this.bStart){var e=this;
if(this._deleteLongTapTimer(),this.bMove||4==this.nMoveType||(this.nMoveType=3),!(this.nMoveType<0)){var n=this._getTouchInfo(t);
this._isDblTap(n[0].nX,n[0].nY,n[0].nTime)&&(clearTimeout(this._nTapTimer),this._nTapTimer=-1,this.nMoveType=5),this._updateTouchInfo(n,"end");
var i=this._getCustomEventParam(n,!0,t),o=i.sMoveType;
"undefined"!=typeof this._htEventHandler[dttjindo.m.Touch.MOVETYPE[5]]&&this._htEventHandler[dttjindo.m.Touch.MOVETYPE[5]].length>0&&3==this.nMoveType?this._nTapTimer=setTimeout(function(){e._fireCustomEvent(o,i),e.fireEvent("touchEnd",i),delete e._nTapTimer
},this.option("nDoubleTapDuration")):(this.fireEvent("touchEnd",i),4!=this.nMoveType&&(8===this.nMoveType?(i.sMoveType=dttjindo.m.Touch.MOVETYPE[6],this._fireCustomEvent(dttjindo.m.Touch.MOVETYPE[6],i),i.sMoveType=dttjindo.m.Touch.MOVETYPE[7],this._fireCustomEvent(dttjindo.m.Touch.MOVETYPE[7],i)):setTimeout(function(){e._fireCustomEvent(o,i)
},0))),this._updateTouchEndInfo(n),this._resetTouchInfo()
}}},_fireCustomEvent:function(t,e){return this.fireEvent(t,e)
},_getCustomEventParam:function(t,e,n){var i=this._htMoveInfo.aPos[this._htMoveInfo.aPos.length>0&&!e?this._htMoveInfo.aPos.length-1:0],o=dttjindo.m.Touch.MOVETYPE[this.nMoveType],r=dttjindo.m.Touch.MOVETYPE[this._nStartMoveType],s=t[0].nTime-this._htMoveInfo.nStartTime,a=0,l=0,d=0,h=0,c=0,u=0,p=0,f=0,_=1===this.nMoveType?0:t[0].nX-this._htMoveInfo.nStartX,m=0===this.nMoveType?0:t[0].nY-this._htMoveInfo.nStartY,g=1===this.nMoveType?0:t[0].nX-i.nX,v=0===this.nMoveType?0:t[0].nY-i.nY,y=t[0].nTime-i.nTime,E={element:t[0].el,nX:t[0].nX,nY:t[0].nY,nVectorX:t[0].nX-this._htMoveInfo.nBeforeX,nVectorY:t[0].nY-this._htMoveInfo.nBeforeY,nDistanceX:_,nDistanceY:m,sMoveType:o,sStartMoveType:r,nStartX:this._htMoveInfo.nStartX,nStartY:this._htMoveInfo.nStartY,nStartTimeStamp:this._htMoveInfo.nStartTime,htMomentum:{nDistanceX:g,nDistanceY:v,nDuration:y},oEvent:n||{}};
if((t.length>1||this.nMoveType>=6)&&(E.nScale=this._getScale(t),E.nRotation=this._getRotation(t),null===E.nScale&&(E.nScale=this._htMoveInfo.nBeforeScale),null===E.nRotation&&(E.nRotation=this._htMoveInfo.nBeforeRotation)),t.length>=1){E.aX=[],E.aY=[],E.aElement=[];
for(var j=0,T=t.length;
T>j;
j++){E.aX.push(t[j].nX),E.aY.push(t[j].nY),E.aElement.push(t[j].el)
}}return e&&((0==this.nMoveType||1==this.nMoveType||2==this.nMoveType)&&(s<=this.option("nMomentumDuration"),s<=this.option("nMomentumDuration")&&(d=Math.abs(_)/s,a=d*d/2,h=Math.abs(m)/s,l=h*h/2),y<=this.option("nMomentumDuration")&&(p=Math.abs(g)/y,c=p*p/2,f=Math.abs(v)/y,u=f*f/2)),E.nMomentumX=a,E.nMomentumY=l,E.nSpeedX=d,E.nSpeedY=h,E.nDuration=s,E.htMomentum.nMomentumX=c,E.htMomentum.nMomentumY=u,E.htMomentum.nSpeedX=p,E.htMomentum.nSpeedY=f),E
},_updateTouchEndInfo:function(t){this.htEndInfo={element:t[0].el,time:t[0].nTime,movetype:this.nMoveType,nX:t[0].nX,nY:t[0].nY}
},_deleteLongTapTimer:function(){"undefined"!=typeof this._nLongTapTimer&&(clearTimeout(this._nLongTapTimer),delete this._nLongTapTimer)
},_startLongTapTimer:function(t,e){var n=this;
"undefined"!=typeof this._htEventHandler[dttjindo.m.Touch.MOVETYPE[4]]&&this._htEventHandler[dttjindo.m.Touch.MOVETYPE[4]].length>0&&(n._nLongTapTimer=setTimeout(function(){n.fireEvent("longTap",{element:t[0].el,oEvent:e,nX:t[0].nX,nY:t[0].nY}),n.nMoveType=4
},n.option("nLongTapDuration")))
},_onResize:function(){this._setSlope()
},_isDblTap:function(t,e){if("undefined"!=typeof this._nTapTimer&&3==this.nMoveType){var n=this.option("nTapThreshold");
if(Math.abs(this.htEndInfo.nX-t)<=n&&Math.abs(this.htEndInfo.nY-e)<=n){return !0
}}return !1
},_setSlope:function(){this.bSetSlope||(this._nHSlope=1*(window.innerHeight/2/window.innerWidth).toFixed(2),this._nVSlope=1*(window.innerHeight/(window.innerWidth/2)).toFixed(2))
},setSlope:function(t,e){this._nHSlope=e,this._nVSlope=t,this.bSetSlope=!0
},getSlope:function(){return{nVSlope:this._nVSlope,nHSlope:this._nHSlope}
},_resetTouchInfo:function(){for(var t in this._htMoveInfo){"aPos"!=t?this._htMoveInfo[t]=0:this._htMoveInfo.aPos.length=0
}this._deleteLongTapTimer(),this.bStart=!1,this.bMove=!1,this.nMoveType=-1,this._nStartMoveType=-1
},_updateTouchInfo:function(t,e){"end"==e?(this.htEndInfo={nX:t[0].nX,nY:t[0].nY},this._htMoveInfo.aPos.length>3&&this._htMoveInfo.aPos.pop()):("start"==e?(this._htMoveInfo.nStartX=t[0].nX,this._htMoveInfo.nStartY=t[0].nY,this._htMoveInfo.nStartTime=t[0].nTime):this._htMoveInfo.nBeforeTime=t[0].nTime,this._htMoveInfo.nBeforeX=t[0].nX,this._htMoveInfo.nBeforeY=t[0].nY,this._htMoveInfo.aPos.push({nX:t[0].nX,nY:t[0].nY,nTime:t[0].nTime}),this._htMoveInfo.aPos.length>5&&this._htMoveInfo.aPos.shift())
},_getMoveTypeBySingle:function(t,e){var n=this.nMoveType,i=Math.abs(this._htMoveInfo.nStartX-t),o=Math.abs(this._htMoveInfo.nStartY-e),r=i+o,s=this.option("nTapThreshold");
if(n=s>=i&&s>=o?3:-1,this.option("nSlopeThreshold")<=r){var a=parseFloat((o/i).toFixed(2),10);
n=-1===this._nHSlope&&-1===this._nVSlope&&this.option("nUseDiagonal")>0?2:a<=this._nHSlope?0:a>=this._nVSlope?1:(this.option("nUseDiagonal")>1,2)
}return n
},_getMoveTypeByMulti:function(){var t=-1;
return(6===this.nMoveType||Math.abs(1-this._htMoveInfo.nBeforeScale)>=this.option("nPinchThreshold"))&&(t=6),(7===this.nMoveType||Math.abs(0-this._htMoveInfo.nBeforeRotation)>=this.option("nRotateThreshold"))&&(t=6===t?8:7),-1===t?this.nMoveType:t
},_getScale:function(t){var e=-1,n=this._getDistance(t);
return 0>=n?null:(0===this._htMoveInfo.nStartDistance?(e=1,this._htMoveInfo.nStartDistance=n):e=n/this._htMoveInfo.nStartDistance,this._htMoveInfo.nBeforeScale=e,e)
},_getRotation:function(t){var e=-1,n=this._getAngle(t);
return null===n?null:(0===this._htMoveInfo.nStartAngle?(this._htMoveInfo.nStartAngle=n,e=0):e=n-this._htMoveInfo.nStartAngle,this._htMoveInfo.nLastAngle=n,this._htMoveInfo.nBeforeRotation=e,e)
},_getMoveType:function(t){var e=this.nMoveType;
return 1===t.length?e=this._getMoveTypeBySingle(t[0].nX,t[0].nY):2===t.length&&(e=this._getMoveTypeByMulti(t)),e
},_getDistance:function(t){return 1===t.length?-1:Math.sqrt(Math.pow(Math.abs(t[0].nX-t[1].nX),2)+Math.pow(Math.abs(t[0].nY-t[1].nY),2))
},_getAngle:function(t){if(1===t.length){return null
}var e=t[0].nX-t[1].nX,n=t[0].nY-t[1].nY,i=Math.atan2(n,e)*this._radianToDegree;
if(null!==this._htMoveInfo.nLastAngle){var o=Math.abs(this._htMoveInfo.nLastAngle-i),r=i+360,s=i-360;
Math.abs(r-this._htMoveInfo.nLastAngle)<o?i=r:Math.abs(s-this._htMoveInfo.nLastAngle)<o&&(i=s)
}return i
},_getTouchInfo:function(t){var e=[],n=t.$value().timeStamp,i=null;
if(this._hasTouchEvent){i="touchend"===t.type||"touchcancel"===t.type?t.$value().changedTouches:t.$value().targetTouches||t.$value().changedTouches;
for(var o=0,r=i.length;
r>o;
o++){e.push({el:dttjindo.m.getNodeElement(i[o].target),nX:i[o].pageX,nY:i[o].pageY,nTime:n})
}}else{e.push({el:t.element,nX:t.pos().pageX,nY:t.pos().pageY,nTime:n})
}return e
},getBaseElement:function(){return this._el
},_onDeactivate:function(){this._detachEvents()
},_onActivate:function(){this._attachEvents()
},destroy:function(){var t;
this.deactivate(),this._el=null;
for(t in this._htMoveInfo){this._htMoveInfo[t]=null
}this._htMoveInfo=null;
for(t in this.htEndInfo){this.htEndInfo[t]=null
}this.htEndInfo=null,this.bStart=null,this.bMove=null,this.nMoveType=null,this._nStartMoveType=null,this._nVSlope=null,this._nHSlope=null,this.bSetSlope=null
}}).extend(dttjindo.m.UIComponent),dttjindo.m.Scroll=dttjindo.$Class({$init:function(t,e){this.option({bActivateOnload:!0,bUseHScroll:!1,bUseVScroll:!0,bUseMomentum:!0,nDeceleration:0.0006,nOffsetTop:0,nOffsetBottom:0,nHeight:0,nWidth:0,bUseBounce:!0,bUseHighlight:!0,sClassPrefix:"scroll_",bUseCss3d:dttjindo.m.useCss3d(!0),bUseTimingFunction:dttjindo.m.useTimingFunction(!0),bAutoResize:!1,bUseDiagonalTouch:!0,fEffect:dttjindo.m.Effect.cubicBezier(0.18,0.35,0.56,1),nZIndex:2000,sListElement:"",nRatio:1.5,bUseScrollbar:!0,nScrollbarHideThreshold:0,bUseFixedScrollbar:!1,sScrollbarBorder:"1px solid white",sScrollbarColor:"#8e8e8e",bUseScrollBarRadius:!0,bUsePullDown:!1,bUsePullUp:!1,fnPullDownIdle:null,fnPullDownBeforeUpdate:null,fnPullDownUpdating:null,fnPullUpIdle:null,fnPullUpBeforeUpdate:null,fnPullUpUpdating:null}),this.option(e||{}),this._initVar(),this._setWrapperElement(t),this.option("bActivateOnload")&&this.activate()
},$static:{SCROLLBAR_CLASS:"__scroll_for_scrollbar__"},_initVar:function(){this.isPositionBug=dttjindo.m.hasOffsetBug(),this.isClickBug=dttjindo.m.hasClickBug(),this.nVersion=parseFloat(dttjindo.m.getDeviceInfo().version.substr(0,3)),this.sCssPrefix=dttjindo.m.getCssPrefix(),this._bUseCss3d=this.option("bUseCss3d"),this.nWrapperW=null,this.nWrapperH=null,this.nScrollW=null,this.nScrollH=null,this.nMaxScrollLeft=null,this.nMaxScrollTop=null,this.nMinScrollTop=0,this.bUseHScroll=null,this.bUseVScroll=null,this.bUseHighlight=this.option("bUseHighlight"),this._nPropHScroll=null,this._nPropVScroll=null,this._nLeft=0,this._nTop=0,this._aAni=[],this._htTimer={ani:-1,fixed:-1,touch:-1,scrollbar:-1},this._htPlugin={dynamic:{},pull:{}},this._oTouch=null,this._isAnimating=!1,this._isControling=!1,this._isStop=!1,this._hasJindoOffsetBug=dttjindo.m._hasJindoOffsetBug(),this.option("sListElement")&&this.option("bUseTimingFunction",!1),this.bUseHighlight&&(this._hasKitkatHighlightBug=dttjindo.m._hasKitkatHighlightBug(),this._nHightlightBug=-1,this.isPositionBug&&(this._elDummyTag=null)),this._nUpdater=-1,this._oMoveData={nLeft:0,nTop:0}
},getCurrentPos:function(){return{nTop:this._nTop,nLeft:this._nLeft}
},setLayer:function(t){this._htWElement.wrapper=dttjindo.$Element(t),this._htWElement.wrapper.css({overflow:"hidden",zIndex:this.option("nZIndex")}),"static"==this._htWElement.wrapper.css("position")&&this._htWElement.wrapper.css("position","relative"),this.bUseHighlight||this._htWElement.wrapper.css(dttjindo.m._toPrefixStr("TapHighlightColor"),"rgba(0,0,0,0)"),this.setScroller()
},setScroller:function(){this._htWElement.scroller=this._htWElement.wrapper.first(),this._htWElement.scroller.css({position:"absolute",zIndex:1,left:0,top:0}),this._htWElement.scroller.css(dttjindo.m._toPrefixStr("TransitionProperty"),""==this.sCssPrefix?"transform":"-"+this.sCssPrefix+"-transform").css(this.sCssPrefix+"Transform",dttjindo.m._getTranslate(0,0,this._bUseCss3d)),this.option("bUseTimingFunction")&&this._htWElement.scroller.css(dttjindo.m._toPrefixStr("TransitionTimingFunction"),this.option("fEffect").toString()),this.isPositionBug&&this.bUseHighlight&&this.nVersion<3&&(this._elDummyTag=this._htWElement.scroller.query("._scroller_dummy_atag_"),this._elDummyTag?this._elDummyTag=this._elDummyTag.$value():(this._elDummyTag=dttjindo.$("<a href='javascript:void(0);' style='position:absolute;height:0px;width:0px;' class='_scroller_dummy_atag_'></a>"),this._htWElement.scroller.append(this._elDummyTag)))
},width:function(t){return t?(this.option("nWidth",t),void this.refresh()):this.option("nWidth")?parseInt(this.option("nWidth"),10):this._htWElement.wrapper.width()
},height:function(t){return t?(this.option("nHeight",t),void this.refresh()):this.option("nHeight")?parseInt(this.option("nHeight"),10):this._htWElement.wrapper.height()
},_setWrapperElement:function(t){this._htWElement={},this.setLayer(t)
},hasHScroll:function(){return this.bUseHScroll
},hasVScroll:function(){return this.bUseVScroll
},_createDynamicPlugin:function(t){var e={nRatio:this.option("nRatio"),sListElement:this.option("sListElement"),sDirection:t};
this._inst("dynamic")?this._inst("dynamic").option(e):this._htPlugin.dynamic.o=new dttjindo.m.DynamicPlugin(this._htWElement.wrapper,e),this._inst("dynamic").refresh("V"==t?this._nTop:this._nLeft),this.option("bUseTimingFunction",!1),this._htPlugin.dynamic.bUse=!0
},_refreshDynamicPlugin:function(){if(this._htPlugin.dynamic.bUse=!1,this.option("sListElement")&&(!this.bUseVScroll||!this.bUseHScroll)){var t=2*this.option("nRatio");
this.bUseVScroll&&this.nScrollH>this.nWrapperH*t?this._createDynamicPlugin("V"):this.bUseHScroll&&this.nScrollW>this.nWrapperW*t&&this._createDynamicPlugin("H")
}},_refreshPullPlugin:function(){return this._htPlugin.pull.bUse=this.option("bUsePullDown")||this.option("bUsePullUp"),this._isUse("pull")?(this._inst("pull")||(this._htPlugin.pull.o=new dttjindo.m.PullPlugin(this)),this._inst("pull").refresh(),!0):!1
},refresh:function(t){if(this.isActivating()){this._hasKitkatHighlightBug&&this._htWElement.wrapper.addClass(dttjindo.m.KITKAT_HIGHLIGHT_CLASS),this.option("nWidth")&&this._htWElement.wrapper.width(parseInt(this.option("nWidth"),10)),this.option("nHeight")&&this._htWElement.wrapper.height(parseInt(this.option("nHeight"),10));
var e=parseInt(this._htWElement.wrapper.css("border-left-width"),10),n=parseInt(this._htWElement.wrapper.css("border-right-width"),10),i=parseInt(this._htWElement.wrapper.css("border-top-width"),10),o=parseInt(this._htWElement.wrapper.css("border-bottom-width"),10);
e=isNaN(e)?0:e,n=isNaN(n)?0:n,i=isNaN(i)?0:i,o=isNaN(o)?0:o,this.nWrapperW=this._htWElement.wrapper.width()-e-n,this.nWrapperH=this._htWElement.wrapper.height()-i-o,this._refreshPullPlugin()||(this.nScrollW=this._htWElement.scroller.width(),this.nScrollH=this._htWElement.scroller.height()-this.option("nOffsetBottom"),this.nMinScrollTop=-this.option("nOffsetTop"),this.nMaxScrollTop=this.nWrapperH-this.nScrollH),this.nMaxScrollLeft=this.nWrapperW-this.nScrollW,this.bUseHScroll=this.option("bUseHScroll")&&this.nWrapperW<=this.nScrollW,this.bUseVScroll=this.option("bUseVScroll")&&this.nWrapperH<=this.nScrollH,this.bUseHScroll&&!this.bUseVScroll&&(this._htWElement.scroller.$value().style.height="100%"),!this.bUseHScroll&&this.bUseVScroll&&(this._htWElement.scroller.$value().style.width="100%"),this._refreshDynamicPlugin(),this.option("bUseScrollbar")&&(this._refreshScroll("V"),this._refreshScroll("H")),!this.bUseHScroll&&!this.bUseVScroll&&this._fixPositionBug(),!t&&this.restorePos(0)
}},_setPos:function(t,e){var n;
t=this.bUseHScroll?parseInt(t,10):0,e=this.bUseVScroll?parseInt(e,10):0,this._isUse("dynamic")&&(n=this._checkDirection(t,e));
var i={nLeft:this._nLeft,nTop:this._nTop,nNextLeft:t,nNextTop:e,nVectorX:t-this._nLeft,nVectorY:e-this._nTop,nMaxScrollLeft:this.nMaxScrollLeft,nMaxScrollTop:this.nMaxScrollTop};
if(this.fireEvent("beforePosition",i)){if(this._isControling=!0,this._nLeft=t=i.nNextLeft,this._nTop=e=i.nNextTop,this._isUse("dynamic")&&this._inst("dynamic").updateListStatus(n,this.bUseVScroll?this._nTop:this._nLeft),this.bUseHighlight&&this.isPositionBug){var o=this.getStyleOffset(this._htWElement.scroller);
t-=o.left,e-=o.top
}this._htWElement.scroller.css(dttjindo.m._toPrefixStr("Transform"),dttjindo.m._getTranslate(t+"px",e+"px",this._bUseCss3d)),this.option("bUseScrollbar")&&(this._setScrollBarPos("V",this._nTop),this._setScrollBarPos("H",this._nLeft)),this._oMoveData={nLeft:this._nLeft,nTop:this._nTop},this.fireEvent("position",{nLeft:this._nLeft,nTop:this._nTop,nMaxScrollLeft:this.nMaxScrollLeft,nMaxScrollTop:this.nMaxScrollTop})
}else{this._isAnimating=!1
}},_isUse:function(t){return this._htPlugin[t].bUse
},_inst:function(t){return this._htPlugin[t].o
},_checkDirection:function(t,e){var n,i=this.bUseVScroll?this._nTop:this._nLeft,o=this.bUseVScroll?e:t;
return n=i>o?"forward":"backward"
},restorePos:function(t){var e=this.getPosLeft(this._nLeft),n=this.getPosTop(this._nTop);
return e===this._nLeft&&n===this._nTop?(this._isControling=!1,this._isStop=!1,this._fireAfterScroll(),void this._fixPositionBug()):void this._scrollTo(e,n,t)
},_getMomentum:function(t,e,n,i,o,r){var s=this.option("nDeceleration"),a=n/s,l=0,d=0;
return 0>t&&a>o?(d=i/(6/(a/e*s)),o+=d,e=e*o/a,a=o):t>0&&a>r&&(d=i/(6/(a/e*s)),r+=d,e=e*r/a,a=r),a*=t>0?-1:1,l=e/s,{nDist:a,nTime:Math.round(l)}
},_stop:function(){this.option("bUseTimingFunction")?(dttjindo.m.detachTransitionEnd(this._htWElement.scroller.$value(),this._htEvent.TransitionEnd),this._transitionTime(0)):(cancelAnimationFrame(this._htTimer.ani),this._stopUpdater()),this._isAnimating&&this._setPos(this._nLeft,this._nTop),this._aAni=[],this._isAnimating=!1,this._isStop=!0
},_scrollTo:function(t,e,n){this._stop(),t=this.bUseHScroll?t:0,e=this.bUseVScroll?e:0,this._aAni.push({nLeft:t,nTop:e,nDuration:n||0}),this._animate()
},scrollTo:function(t,e,n){n=n||0,t=-Math.abs(t),e=-Math.abs(e),e+=this.getTop(),this._scrollTo(t>=this.getLeft()?this.getLeft():t<=this.getRight()?this.getRight():t,e>=this.getTop()?this.getTop():e<=this.getBottom()?this.getBottom():e,n)
},getRight:function(){return this.nMaxScrollLeft
},getLeft:function(){return 0
},getBottom:function(){return this.nMaxScrollTop
},getTop:function(){return this.nMinScrollTop
},isMoving:function(){return this._isControling
},_animate:function(){var t,e=this;
if(!this._isAnimating){if(!this._aAni.length){return void this.restorePos(300)
}do{if(t=this._aAni.shift(),!t){return
}}while(t.nLeft==this._nLeft&&t.nTop==this._nTop);
if(0==t.nDuration){this.option("bUseTimingFunction")&&this._transitionTime(0),this._setPos(t.nLeft,t.nTop),this._animate()
}else{if(this._isAnimating=!0,this.option("bUseTimingFunction")){this._transitionTime(t.nDuration),this._setPos(t.nLeft,t.nTop),this._isAnimating=!1,dttjindo.m.attachTransitionEnd(this._htWElement.scroller.$value(),this._htEvent.TransitionEnd)
}else{e._startUpdater();
var n,i=(new Date).getTime(),o=this.bUseHScroll?this.option("fEffect")(this._nLeft,t.nLeft):null,r=this.bUseVScroll?this.option("fEffect")(this._nTop,t.nTop):null;
!function s(){return n=(new Date).getTime(),n>=i+t.nDuration?(e._stopUpdater(),e._setPos(t.nLeft,t.nTop),e._isAnimating=!1,void e._animate()):(n=(n-i)/t.nDuration,e._oMoveData={nLeft:o&&o(n),nTop:r&&r(n)},void (e._isAnimating?e._htTimer.ani=requestAnimationFrame(s):e._stopUpdater()))
}()
}}}},_onRotate:function(t){this.fireEvent("rotate",{isVertical:t.isVertical})&&this.refresh()
},_transitionTime:function(t){t+="ms",this._htWElement.scroller.css(dttjindo.m._toPrefixStr("TransitionDuration"),t),this.option("bUseScrollbar")&&this._setScrollbarDuration(t)
},_setScrollbarDuration:function(t){this.bUseHScroll&&this._htWElement.HscrollbarIndicator&&this._htWElement.HscrollbarIndicator.css(dttjindo.m._toPrefixStr("TransitionDuration"),t),this.bUseVScroll&&this._htWElement.VscrollbarIndicator&&this._htWElement.VscrollbarIndicator.css(dttjindo.m._toPrefixStr("TransitionDuration"),t)
},_stopScroll:function(){var t,e,n=dttjindo.m.getTranslateOffset(this._htWElement.scroller.$value()),i={left:0,top:0};
this.isPositionBug&&this.bUseHighlight&&(i=this.getStyleOffset(this._htWElement.scroller)),e=n.left+i.left,t=n.top+i.top,this.option("bUseFixedScrollbar")||(this._hideScrollBar("V"),this._hideScrollBar("H")),this._stopUpdater(),this._stop(),this._setPos(this.getPosLeft(e),this.getPosTop(t)),this._isControling=!1,this._fireAfterScroll(),this._fixPositionBug()
},getStyleOffset:function(t){var e=parseInt(t.css("left"),10),n=parseInt(t.css("top"),10);
return e=isNaN(e)?0:e,n=isNaN(n)?0:n,{left:e,top:n}
},getPosLeft:function(t){return this.bUseHScroll?t>=0?0:t<=this.nMaxScrollLeft?this.nMaxScrollLeft:t:0
},getPosTop:function(t){return this.bUseVScroll?t>=this.nMinScrollTop?this.nMinScrollTop:t<=this.nMaxScrollTop?this.nMaxScrollTop:t:0
},_hideScrollBar:function(t){if(this._htWElement){var e=this._htWElement[t+"scrollbar"],n="H"===t?this.bUseHScroll:this.bUseVScroll;
n&&e&&(e.hide(),e.$value().offsetHeight,this.isPositionBug&&this.bUseHighlight&&this.makeStylePos(this._htWElement[t+"scrollbarIndicator"]))
}},_fireAfterScroll:function(){if(this.option("bUseScrollbar")){var t=this;
this._htTimer.scrollbar=setTimeout(function(){t.option("bUseFixedScrollbar")||(t._hideScrollBar("V"),t._hideScrollBar("H"))
},this.option("nScrollbarHideThreshold"))
}this._fireEvent("afterScroll")
},_fireEvent:function(t){return this.fireEvent(t,this._getNowPosition())
},_fireTouchEvent:function(t,e){return this.fireEvent(t,this._getNowPosition(e))
},_getNowPosition:function(t){return{nLeft:this._nLeft,nTop:this._nTop,nMaxScrollLeft:this.nMaxScrollLeft,nMaxScrollTop:this.nMaxScrollTop,oEvent:t||{}}
},setUsePullDown:function(t){this._isUse("pull")&&(this.option("bUsePullDown",t),this.refresh())
},setUsePullUp:function(t){this._isUse("pull")&&(this.option("bUsePullUp",t),this.refresh())
},_onUpdater:function(){(this._oMoveData.nLeft!=this._nLeft||this._oMoveData.nTop!=this._nTop)&&this._setPos(this._oMoveData.nLeft,this._oMoveData.nTop),this._startUpdater()
},_startUpdater:function(){this._stopUpdater(),this._nUpdater=window.requestAnimationFrame(this._htEvent.updater)
},_stopUpdater:function(){window.cancelAnimationFrame(this._nUpdater),this._nUpdater=-1
},_onStart:function(t){this._clearPositionBug(),this._isStop=!1,this._fireTouchEvent("beforeTouchStart",t)?(this.option("bUseTimingFunction")&&this._transitionTime(0),this._isAnimating&&this._stopScroll()&&(this._isAnimating=!1),this._isControling=!0,this._fireTouchEvent("touchStart",t)||t.stop()):t.stop()
},_onMove:function(t){var e=0,n=0;
if(this._clearTouchEnd(),this._clearPositionBug(),this.isClickBug&&this._htWElement.scroller.css("pointerEvents","none"),this._fireTouchEvent("beforeTouchMove",t)){this._isUse("pull")&&this._inst("pull").touchMoveForUpdate(t,this.nMaxScrollTop);
var i=t.oEvent;
if(t.sMoveType===dttjindo.m.MOVETYPE[0]){if(!this.bUseHScroll){return !0
}if(!this.option("bUseBounce")&&(this._nLeft>=0&&t.nVectorX>0||this._nLeft<=this.nMaxScrollLeft&&t.nVectorX<0)){return void this._forceRestore(t)
}i.stop(dttjindo.$Event.CANCEL_ALL)
}else{if(t.sMoveType===dttjindo.m.MOVETYPE[1]){if(!this.bUseVScroll){return !0
}if(!this.option("bUseBounce")&&(this._nTop>=this.nMinScrollTop&&t.nVectorY>0||this._nTop<=this.nMaxScrollTop&&t.nVectorY<0)){return void this._forceRestore(t)
}i.stop(dttjindo.$Event.CANCEL_ALL)
}else{if(t.sMoveType!==dttjindo.m.MOVETYPE[2]){return i.stop(dttjindo.$Event.CANCEL_ALL),!0
}if(!this.option("bUseDiagonalTouch")){return
}i.stop(dttjindo.$Event.CANCEL_ALL)
}}if(this.option("bUseBounce")){this.bUseHScroll&&(e=this._nLeft+(this._nLeft>=0||this._nLeft<=this.nMaxScrollLeft?t.nVectorX/2:t.nVectorX)),this.bUseVScroll&&(n=this._nTop+(this._nTop>=this.nMinScrollTop||this._nTop<=this.nMaxScrollTop?t.nVectorY/2:t.nVectorY));
var o=this;
this._htTimer.touch=setTimeout(function(){o._forceRestore(t)
},500)
}else{e=this.getPosLeft(this._nLeft+t.nVectorX),n=this.getPosTop(this._nTop+t.nVectorY)
}this._setPos(e,n),this._fireTouchEvent("touchMove",t)||t.stop()
}else{t.stop()
}},_onEnd:function(t){this._isUse("pull")&&this._inst("pull").pullUploading(),this._fireTouchEvent("beforeTouchEnd",t)?(this._clearPositionBug(),this._clearTouchEnd(),t.sMoveType===dttjindo.m.MOVETYPE[0]||t.sMoveType===dttjindo.m.MOVETYPE[1]||t.sMoveType===dttjindo.m.MOVETYPE[2]?(this._endForScroll(t),this.nVersion<4.1&&t.oEvent.stop(dttjindo.$Event.CANCEL_DEFAULT)):(this._isControling=!1,this._isStop||this._tapHighlight()),this._fireTouchEvent("touchEnd",t)||t.stop()):t.stop(),this.isClickBug&&this._htWElement.scroller.css("pointerEvents","auto")
},_tapHighlight:function(){if(this._hasKitkatHighlightBug){this._htWElement.wrapper.removeClass(dttjindo.m.KITKAT_HIGHLIGHT_CLASS),this._htWElement.wrapper._element.clientHeight;
var t=this;
clearTimeout(this._nHightlightBug),this._nHightlightBug=setTimeout(function(){t._htWElement.wrapper.addClass(dttjindo.m.KITKAT_HIGHLIGHT_CLASS)
},200)
}},_forceRestore:function(t){t.nMomentumX=t.nMomentumY=null,this._endForScroll(t),this._clearPositionBug(),this._clearTouchEnd()
},_endForScroll:function(t){clearTimeout(this._nFixedDubbleEndBugTimer);
var e={nDist:0,nTime:0},n={nDist:0,nTime:0},i={nMomentumX:t.nMomentumX,nMomentumY:t.nMomentumY,nDistanceX:t.nDistanceX,nDistanceY:t.nDistanceY,nLeft:this._nLeft,nTop:this._nTop,nMaxScrollLeft:this.nMaxScrollLeft,nMaxScrollTop:this.nMaxScrollTop};
this.option("bUseMomentum")&&(t.nMomentumX||t.nMomentumY)?(this.bUseHScroll&&(e=this._getMomentum(-t.nDistanceX,t.nSpeedX,t.nMomentumX,this.nWrapperW,-this._nLeft,-this.nMaxScrollLeft+this._nLeft)),this.bUseVScroll&&(n=this._getMomentum(-t.nDistanceY,t.nSpeedY,t.nMomentumY,this.nWrapperH,-this._nTop,-this.nMaxScrollTop+this._nTop)),i.nNextLeft=this._nLeft+e.nDist,i.nNextTop=this._nTop+n.nDist,i.nTime=Math.max(Math.max(e.nTime,n.nTime),10),this.fireEvent("beforeScroll",i)&&(this.option("bUseBounce")?this._scrollTo(i.nNextLeft,i.nNextTop,i.nTime):this._scrollTo(this.getPosLeft(i.nNextLeft),this.getPosTop(i.nNextTop),i.nTime))):(i.nNextLeft=this._nLeft,i.nNextTop=this._nTop,i.nTime=0,this.fireEvent("beforeScroll",i)&&(this._nLeft!==i.nNextLeft||this._nTop!==i.nNextTop?this._scrollTo(i.nNextLeft,i.nNextTop,i.nTime):this.restorePos(300)))
},_onTransitionEnd:function(){dttjindo.m.detachTransitionEnd(this._htWElement.scroller.$value(),this._htEvent.TransitionEnd),this._animate()
},_onDocumentStart:function(t){if(this._htWElement.wrapper.visible()){if(this._htWElement.wrapper.isChildOf(t.element)){return !0
}this._isAnimating&&this._isControling&&this._stopScroll()
}},_onActivate:function(){this._oTouch?this._oTouch.activate():this._oTouch=new dttjindo.m.Touch(this._htWElement.wrapper.$value(),{nMoveThreshold:0,nMomentumDuration:dttjindo.m.getDeviceInfo().android?500:200,nUseDiagonal:0,nTapThreshold:1,nSlopeThreshold:5,nEndEventThreshold:dttjindo.m.getDeviceInfo().win8?100:0,bHorizental:this.option("bUseHScroll"),bVertical:this.option("bUseVScroll")}),this._attachEvent(),this.refresh()
},_onDeactivate:function(){this._detachEvent(),this._oTouch.deactivate()
},_attachEvent:function(){this._htEvent={},this._htEvent.touchStart=dttjindo.$Fn(this._onStart,this).bind(),this._htEvent.touchMove=dttjindo.$Fn(this._onMove,this).bind(),this._htEvent.touchEnd=dttjindo.$Fn(this._onEnd,this).bind(),this._htEvent.TransitionEnd=dttjindo.$Fn(this._onTransitionEnd,this).bind(),this._htEvent.document=dttjindo.$Fn(this._onDocumentStart,this).attach(document,"touchstart"),this._oTouch.attach({touchStart:this._htEvent.touchStart,touchMove:this._htEvent.touchMove,touchEnd:this._htEvent.touchEnd}),this.option("bAutoResize")&&(this._htEvent.rotate=dttjindo.$Fn(this._onRotate,this).bind(),dttjindo.m.bindRotate(this._htEvent.rotate)),this.option("bUseTimingFunction")||(this._htEvent.updater=dttjindo.$Fn(this._onUpdater,this).bind())
},_fixPositionBug:function(){if(this.isPositionBug&&this.bUseHighlight){var t=this;
this._clearPositionBug(),this._htTimer.fixed=setTimeout(function(){t._htWElement&&t._htWElement.scroller&&(t.makeStylePos(t._htWElement.scroller),t.nVersion<=3&&t._elDummyTag.focus())
},200)
}},makeStylePos:function(t){var e=t.$value(),n=dttjindo.m.getTranslateOffset(e),i=t.offset();
e.style[dttjindo.m._toPrefixStr("Transform")]=this.nVersion>=4?dttjindo.m._getTranslate(0,0,this._bUseCss3d):null,e.style[dttjindo.m._toPrefixStr("TransitionDuration")]=null,this._hasJindoOffsetBug?t.offset(n.top+i.top,n.left+i.left):t.offset(i.top,i.left)
},_clearPositionBug:function(){this.isPositionBug&&this.bUseHighlight&&(clearTimeout(this._htTimer.fixed),this._htTimer.fixed=-1)
},_clearTouchEnd:function(){clearTimeout(this._htTimer.touch),this._htTimer.touch=-1
},_detachEvent:function(){dttjindo.m.detachTransitionEnd(this._htWElement.scroller.$value(),this._htEvent.TransitionEnd),this._htEvent.document.detach(document,"touchstart"),this.option("bAutoResize")&&dttjindo.m.unbindRotate(this._htEvent.rotate),this._oTouch.detachAll(),this._elDummyTag&&this._htWElement.scroller.remove(this._elDummyTag),this.option("bUseTimingFunction")||this._stopUpdater()
},_createScroll:function(t){if("H"===t?this.bUseHScroll:this.bUseVScroll){var e,n=this._htWElement.wrapper,i=dttjindo.$Element(n.query("div."+dttjindo.m.Scroll.SCROLLBAR_CLASS));
i&&(n.remove(i),i=this._htWElement[t+"scrollbar"]=this._htWElement[t+"scrollbarIndicator"]=null),i=this._createScrollbar(t),e=this._createScrollbarIndicator(t),this._htWElement[t+"scrollbar"]=i,this._htWElement[t+"scrollbarIndicator"]=e,i.append(e),n.append(i)
}},_createScrollbar:function(t){var e=dttjindo.$Element("<div class='"+dttjindo.m.Scroll.SCROLLBAR_CLASS+"'>");
return e.css({position:"absolute",zIndex:100,bottom:"H"===t?"1px":(this.bUseHScroll?"7":"2")+"px",right:"H"===t?(this.bUseVScroll?"7":"2")+"px":"1px",pointerEvents:"none"}),this.option("bUseFixedScrollbar")?e.show():e.hide(),e.css("H"===t?{height:"5px",left:"2px"}:{width:"5px",top:"2px"}),e
},_createScrollbarIndicator:function(t){var e=dttjindo.$Element("<div>").css({position:"absolute",zIndex:100,border:this.option("sScrollbarBorder"),pointerEvents:"none",left:0,top:0,backgroundColor:this.option("sScrollbarColor")});
return dttjindo.m.getOsInfo().ios&&this.option("bUseScrollBarRadius")&&e.css(dttjindo.m._toPrefixStr("BorderRadius"),"12px"),e.css(dttjindo.m._toPrefixStr("TransitionProperty"),""==this.sCssPrefix?"transform":"-"+this.sCssPrefix+"-transform").css(dttjindo.m._toPrefixStr("Transform"),dttjindo.m._getTranslate(0,0,this._bUseCss3d)),this.option("bUseTimingFunction")&&e.css(dttjindo.m._toPrefixStr("TransitionTimingFunction"),this.option("fEffect").toString()),"H"===t?e.height(5):e.width(5),e
},_refreshScroll:function(t){if("H"===t){if(!this.bUseHScroll||this.nWrapperW==this.nScrollW){return
}}else{if(!this.bUseVScroll||this.nWrapperH==this.nScrollH){return
}}this._htWElement[t+"scrollbar"]||this._createScroll(t);
var e=this._htWElement[t+"scrollbar"],n=this._htWElement[t+"scrollbarIndicator"],i=0;
"H"===t?(i=Math.max(Math.round(Math.pow(this.nWrapperW,2)/this.nScrollW),8),this._nPropHScroll=(this.nWrapperW-i)/this.nMaxScrollLeft,e.width(this.nWrapperW),n.width(isNaN(i)?0:i)):(i=Math.max(Math.round(Math.pow(this.nWrapperH,2)/this.nScrollH),8),this._nPropVScroll=(this.nWrapperH-i)/this.nMaxScrollTop,e.height(this.nWrapperH),n.height(isNaN(i)?0:i))
},_setScrollBarPos:function(t,e){if("H"===t?this.bUseHScroll:this.bUseVScroll){var n=this._htWElement[t+"scrollbarIndicator"],i=this._htWElement[t+"scrollbar"];
if(n&&i&&(e=this["_nProp"+t+"Scroll"]*e,this.option("bUseFixedScrollbar")||!i||i.visible()||(i.show(),this.option("bUseTimingFunction")&&i.$value().clientHeight),n)){if(this.isPositionBug&&this.bUseHighlight){var o=parseInt(n.css("H"===t?"left":"top"),10);
e-=isNaN(o)?0:o
}n.css(dttjindo.m._toPrefixStr("Transform"),dttjindo.m._getTranslate("H"==t?e+"px":0,"H"==t?0:e+"px",this._bUseCss3d))
}}},destroy:function(){this.deactivate(),this.detachAll();
for(var t in this._htWElement){this._htWElement[t]=null
}this._htWElement=null,this._oTouch.destroy(),delete this._oTouch
}}).extend(dttjindo.m.UIComponent),window.naver=window.naver||{},window.naver.dic=window.naver.dic||{},window.naver.dic.tooltip=window.naver.dic.tooltip||{},window.naver.dic.tooltip.main={TOOLTIP_VERSION:"1.3",init:function(t,e){if(this.option={contentsSelector:t,dic:[{name:"english"}],apiDomain:"http://dict.tooltip.naver.com",prCode:"dic.100",setAttachEvent:function(t){t._attachTargetEvent()
},eventBeforeShow:null,eventAfterShow:null,eventBeforeClose:null,eventAfterClose:null,eventBeforePlaySound:null,eventAfterPlaySound:null,isPC:!0},e){for(var n in e){e.hasOwnProperty(n)&&(this.option[n]=e[n])
}}this._needCombineEvent()&&(this.option.setAttachEvent=function(t){t._attachTargetCombineEvent()
});
var i=new naver.dic.tooltip.Converter;
i.init(this.option),i.convert(this.option),this.oLayerActionFactory=new naver.dic.tooltip.LayerActionFactory,this.oLayerActionFactory.init(this.option)
},load:function(t){if("object"==typeof t){var e=new naver.dic.tooltip.Converter;
e.init(this.option),e.convertByObject(t)
}else{this.option.contentsSelector=t;
var e=new naver.dic.tooltip.Converter;
e.init(this.option),e.convert(this.option)
}this.oLayerActionFactory=new naver.dic.tooltip.LayerActionFactory,this.oLayerActionFactory.init(this.option)
},_needCombineEvent:function(){return this._isIOS()||this._isAndroid()
},_isIE10:function(){var t=navigator.userAgent.toLowerCase();
if(t.indexOf("msie")>-1){var e=t.match(/msie\s([^\;]*)/i);
if(null!==e&&e.length>1&&10==Number(e[1])){return !0
}}return !1
},_isSafari:function(){var t=navigator.userAgent.toLowerCase();
return t.indexOf("safari")>-1&&document.createElement("audio").canPlayType?!0:!1
},_isIOS:function(){return dttjindo.$Agent().os().ios
},_isAndroid:function(){return dttjindo.$Agent().os().android
},on:function(){this._USE_TOOLTIP=!0
},off:function(){this._USE_TOOLTIP=!1
},close:function(){this.oLayerActionFactory.closeLayer()
},isOpen:function(){return this.oLayerActionFactory.isLayerOpen()
},_USE_TOOLTIP:!0,TEMPLATE_MARKING_ENGLISH:'<span class="word_dic en">{=title}</span>',TEMPLATE_LAYER_ENGLISH:'<div id="tooltipLayer_english" class="tlp_endic tlp_dic_wp">	<iframe width="100%" height="100%" frameborder="0" title="버그픽스용" class="tlp_bug_fix"></iframe>	<div class="tlp_ly_dic">		<div id="tooltipLayer_english_inner_area" class="tlp_dic_area"></div>		<div class="tlp_notice">영어사전 검색결과를 자동으로 연결한 것으로, 맥락에 맞지 않는 결과가 노출 될 수 있습니다.</div>		<a href="#" id="tooltipLayer_english_btn_close" class="tlp_btn_close">레이어 닫기</a>	</div></div>',TEMPLATE_CONTENT_ENGLISH:'{for resultIndex:item in result.items}	<dl class="dic_inner">		<dt>			<a href="{=item.destinationLink}" id="tooltip_content_entry{=resultIndex}" class="tlp_headword tooltipLayer_english_entry" target="_blank">{=item.query}</a><br><p>{if item.partOfSpeech}<span class="txtlang">{=item.partOfSpeech}</span>{/if}{if item.sign}<span class="tlp_voice">[{=item.sign}]</span>{/if}{if item.pronunceUrl}<audio id="soundT{=resultIndex}" src="{=item.pronunceUrl}" style="width:0px;height:0px;"></audio><a id="sound_playT{=resultIndex}" class="tlp_sound" data-url="{=item.pronunceUrl}" ><em id="toolTipSound{=resultIndex}"></em></a>{/if}</p><p>{if item.ukPartOfSpeech}<span class="txtlang">{=item.ukPartOfSpeech}</span>{/if}{if item.ukSign}<span class="tlp_voice">[{=item.ukSign}]</span>{/if}{if item.ukPronunceUrl}<audio id="soundT{=resultIndex + 2}" src="{=item.ukPronunceUrl}" style="width:0px;height:0px;"></audio><a id="sound_playT{=resultIndex + 2}" class="tlp_sound" data-url="{=item.ukPronunceUrl}" ><em id="toolTipSound{=resultIndex + 2}"></em></a>{/if}</p>		</dt>		<dd>			{for meanIndex:mean in item.means}				{if meanIndex == 0}					{if mean.posp}						<span class="tlp_tit">[{=mean.posp}]</span>					{/if}					<ol>				{/if}				{if meanIndex < 2}					<li><span class="tlp_num">{=meanIndex+1}</span>. {if mean.label}[{=mean.label}]{/if}						{=mean.desciption}</li>				{/if}			{/for}			</ol>		</dd>	</dl>{/for}<a href="http://endic.naver.com/search.nhn?searchOption=all&query={=result.query}" id="tooltipLayer_english_more" class="tlp_more" target="_blank">더보기</a>',TEMPLATE_MARKING_HANJA:'<span class="word_dic hj">{=title}</span>',TEMPLATE_EXPANTION_LAYER_HANJA:'<div id="tooltipLayer_hanja_expansion_area" class="tlp_hanjadic tlp_dic_wp"></div>',TEMPLATE_EXPANSION_CONTENT_HANJA:'    <ul class="fd_lst flick-container">		{for item in items}        <li class="flick-ct" >                <span class="word_dic exp">{=item}</span>        </li>		{/for}    </ul>',TEMPLATE_LAYER_HANJA:'<div id="tooltipLayer_hanja" class="tlp_hanjadic tlp_dic_wp">	<iframe width="100%" height="100%" frameborder="0" title="버그픽스용" class="tlp_bug_fix"></iframe>	<div class="tlp_ly_dic">		<div id="tooltipLayer_hanja_inner_area" class="tlp_dic_area">		</div>		<div class="tlp_notice">한자사전 검색결과를 자동으로 연결한 것으로, 맥락에 맞지 않는 결과가 노출 될 수 있습니다.</div>		<a href="#" id="tooltipLayer_hanja_btn_close" class="tlp_btn_close">레이어 닫기</a>	</div></div>',TEMPLATE_CONTENT_HANJA:'{for resultIndex:item in result.items}    <dl class="dic_inner">		<dt class="tlp_dt">			<a href="http://hanja.naver.com/hanja?q={=item.hanja}" class="tlp_headword">{=item.hanja}</a>			<span class="tlp_tit">{=item.read}</span>			<span class="tlp_radical">부수 				<span class="tlp_hanja">{=item.busuHanja}</span>				<em class="tlp_bar">|</em> 총획 {=item.totalStrokeCount} 획			</span>		</dt>        <dd class="tlp_dd">            <ul class="tlp_lst">				 {for meanIndex:mean in item.meaningList}                	<li><span class="tlp_num">{=meanIndex+1}</span>. {=mean}</li>				 {/for}            </ul>        </dd>    </dl>{/for}<a href="http://hanja.naver.com/search/?query={=result.query}" id="tooltipLayer_hanja_more" class="tlp_more">더보기</a>'},window.naver=window.naver||{},window.naver.dic=window.naver.dic||{},window.naver.dic.tooltip=window.naver.dic.tooltip||{},naver.dic.tooltip.Converter=dttjindo.$Class({init:function(t){this.option(t),this._initVar(),this._registerMarker(),this._initMarker()
},_initVar:function(){this._htMatcher={}
},_registerMarker:function(){var t=this.option("dic");
for(p in t){var e=t[p];
switch(e.name){case"english":this._htMatcher.english=new naver.dic.tooltip.marker.English,this._htMatcher.english.config=e;
break;
case"hanja":this._htMatcher.hanja=new naver.dic.tooltip.marker.Hanja,this._htMatcher.hanja.config=e
}}},_initMarker:function(){for(p in this._htMatcher){var t=this._htMatcher[p];
t.init(t.config)
}},escapeHtmlAttributes:function(t){for(var e=dttjindo.$$("*",t),n=e.length,i=0;
n>i;
i++){for(var o=e[i].attributes,r=o.length,s=0;
r>s;
s++){o[s].nodeValue=o[s].nodeValue.replace(/>/g,"&gt;").replace(/</g,"&lt;")
}}},convert:function(){for(var t=dttjindo.$Element(window.document.body).queryAll(this.option("contentsSelector")),e=0,n=t.length;
n>e;
e++){t[e].attr("style",t[e].attr("style")+";-webkit-tap-highlight-color: rgba(0,0,0,0)"),this.escapeHtmlAttributes(t[e]);
var i=t[e].html();
for(p in this._htMatcher){i=this._htMatcher[p].mark(i,e)
}try{t[e].html(i)
}catch(o){this.option("debugingMode")&&console.error(o.message+"\n툴팁 대상에 오류가 있습니다. 아래 툴팁 대상이 올바른지 확인해보시기 바랍니다. \nerror convert target:"+t[e])
}}},convertByObject:function(t){t.attr("style",t.attr("style")+";-webkit-tap-highlight-color: rgba(0,0,0,0)");
var e=t.html();
for(p in this._htMatcher){e=this._htMatcher[p].mark(e)
}t.html(e)
}}).extend(dttjindo.Component),window.naver=window.naver||{},window.naver.dic=window.naver.dic||{},window.naver.dic.tooltip=window.naver.dic.tooltip||{},naver.dic.tooltip.FlashObject=function(){var t={},e="F"+(new Date).getTime()+parseInt(1000000*Math.random()),n=(/MSIE/i.test(navigator.userAgent),/FireFox/i.test(navigator.userAgent)),i=/Chrome/i.test(navigator.userAgent),o=function(t,e,n){"undefined"!=typeof t.attachEvent?t.attachEvent("on"+e,n):t.addEventListener(e,n,!0)
},r=function(t,e){var n,i="",o=!0;
for(var r in t){switch(o?o=!1:i+=e,n=t[r],typeof n){case"string":i+=r+"="+encodeURIComponent(n);
break;
case"number":i+=r+"="+encodeURIComponent(n.toString());
break;
case"boolean":i+=r+"="+(n?"true":"false")
}}return i
},s=function(){obj=document.getElementsByTagName("OBJECT");
for(var t,e=0;
t=obj[e];
e++){t.style.display="none";
for(var n in t){if("function"==typeof t[n]){try{t.hasOwnProperty(n)&&(t[n]=null)
}catch(i){}}}}},a=function(t){t=t||window.event;
var n=t.wheelDelta/(i?360:120);
n||(n=-t.detail/3);
var o=t.target||t.srcElement;
if(new RegExp("(^|\b)"+e+"_([a-z0-9_$]+)(\b|$)","i").test(o.className)){var r=RegExp.$2,s="layerX" in t?t.layerX:t.offsetX,a="layerY" in t?t.layerY:t.offsetY;
try{o[r](n,s,a)||(t.preventDefault?t.preventDefault():t.returnValue=!1)
}catch(l){}}},l=function(t){var e=/Safari/.test(navigator.userAgent),n=(/MSIE/.test(navigator.userAgent),function(t){var e={left:0,top:0};
"object"==t.parentNode.tagName.toLowerCase()&&(t=t.parentNode);
for(var n=t,i=n.offsetParent;
n=n.parentNode;
){n.offsetParent&&(e.left-=n.scrollLeft,e.top-=n.scrollTop),n==i&&(e.left+=t.offsetLeft+n.clientLeft,e.top+=t.offsetTop+n.clientTop,n.offsetParent||(e.left+=n.offsetLeft,e.top+=n.offsetTop),i=n.offsetParent,t=n)
}return e
}),i=function(t){for(var e={left:0,top:0},n=t;
n;
n=n.offsetParent){e.left+=n.offsetLeft,e.top+=n.offsetTop
}for(var n=t.parentNode;
n&&"BODY"!=n.tagName;
n=n.parentNode){"TR"==n.tagName&&(e.top+=2),e.left-=n.scrollLeft,e.top-=n.scrollTop
}return e
};
return(e?n:i)(t)
},d=function(){var t=/MSIE/.test(navigator.userAgent);
if(t){var e=document.documentElement.scrollLeft||document.body.scrollLeft,n=document.documentElement.scrollTop||document.body.scrollTop;
return{scrollX:e,scrollY:n}
}return{scrollX:window.pageXOffset,scrollY:window.pageYOffset}
},h=function(){var t=/MSIE/.test(navigator.userAgent),e={};
return t?(e.nInnerWidth=document.documentElement.clientWidth||document.body.clientWidth,e.nInnerHeight=document.documentElement.clientHeight||document.body.clientHeight):(e.nInnerWidth=window.innerWidth,e.nInnerHeight=window.innerHeight),e
};
return t.showAt=function(t,e){document.getElementById(t).innerHTML=e
},t.show=function(e,n,i,o,r,s,a){document.write(t.generateTag(e,n,i,o,r,s,a))
},t.generateTag=function(i,l,d,h,c,u,p){d=d||"100%",h=h||"100%",p=p||"10,0,0,0",u=u||"middle";
var f=t.getDefaultOption();
if(c){c.flashVars?("object"==typeof c.flashVars&&(c.flashVars=r(c.flashVars,"&")),c.flashVars+="&"):c.flashVars="",c.flashVars+="__flashID="+l;
for(var _ in c){f[_]=c[_]
}}var m="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000",g="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version="+p,v="",y=e+"_"+f.wheelHandler,E=[],j=[];
E.push('<object classid="'+m+'" codebase="'+g+'" class="'+y+'" width="'+d+'" height="'+h+'" id="'+l+'" align="'+u+'">'),E.push('<param name="movie" value="'+i+'" />'),j.push('<embed width="'+d+'" height="'+h+'" name="'+l+'" class="'+y+'" style="'+v+'" " src="'+i+'" align="'+u+'" ');
for(var T in f){E.push('<param name="'+T+'" value="'+f[T]+'" />'),j.push(T+'="'+f[T]+'" ')
}return j.push('type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />'),E.push(j.join("")),E.push("</object>"),o&&(o(window,"unload",s),o(document,n?"DOMMouseScroll":"mousewheel",a),o=null),E.join("")
},t.getDefaultOption=function(){return{quality:"high",bgColor:"#FFFFFF",allowScriptAccess:"always",wmode:"window",menu:"false",allowFullScreen:"true"}
},t.find=function(t,e){return e=e||document,e[t]||e.all[t]
},t.setWidth=function(e,n){t.find(e).width=n
},t.setHeight=function(e,n){t.find(e).height=n
},t.setSize=function(e,n,i){t.find(e).height=i,t.find(e).width=n
},t.getPositionObj=function(e){var n=t.find(e);
if(null==n){return null
}var i=l(n),o=d(),r={};
return r.absoluteX=i.left,r.absoluteY=i.top,r.scrolledX=r.absoluteX-o.scrollX,r.scrolledY=r.absoluteY-o.scrollY,r.browserWidth=h().nInnerWidth,r
},t
}(),window.naver=window.naver||{},window.naver.dic=window.naver.dic||{},window.naver.dic.tooltip=window.naver.dic.tooltip||{},naver.dic.tooltip.LayerActionFactory=dttjindo.$Class({init:function(t){this.option(t),this._initVar(),this._registerLayerPopuper(),this._initLayerPopuper(),this._attachTemplateLayer()
},_initVar:function(){this._htLayerPopuper={}
},_registerLayerPopuper:function(){var t=this.option("dic");
for(p in t){var e=t[p];
switch(e.name){case"english":this._htLayerPopuper.english=new naver.dic.tooltip.layerpopuper.English,this._htLayerPopuper.english.attach({beforeShow:function(t){this.option("eventBeforeShow")&&this.option("eventBeforeShow")(t)
},afterShow:function(t){this.option("eventAfterShow")&&this.option("eventAfterShow")(t)
},beforeClose:function(t){this.option("eventBeforeClose")&&this.option("eventBeforeClose")(t)
},afterClose:function(t){this.option("eventAfterClose")&&this.option("eventAfterClose")(t)
},beforePlaySound:function(t){this.option("eventBeforePlaySound")&&this.option("eventBeforePlaySound")(t)
},afterPlaySound:function(t){this.option("eventAfterPlaySound")&&this.option("eventAfterPlaySound")(t)
}});
break;
case"hanja":this._htLayerPopuper.hanja=new naver.dic.tooltip.layerpopuper.Hanja,this._htLayerPopuper.hanja.attach({beforeShow:function(t){this.option("eventBeforeShow")&&this.option("eventBeforeShow")(t)
},afterShow:function(t){this.option("eventAfterShow")&&this.option("eventAfterShow")(t)
},beforeClose:function(t){this.option("eventBeforeClose")&&this.option("eventBeforeClose")(t)
},afterClose:function(t){this.option("eventAfterClose")&&this.option("eventAfterClose")(t)
}})
}}},_initLayerPopuper:function(){for(p in this._htLayerPopuper){var t=this._htLayerPopuper[p];
t.init(this.option())
}},_attachTemplateLayer:function(){for(p in this._htLayerPopuper){var t=this._htLayerPopuper[p];
t.attachTemplateLayer(),t.attachEvent()
}},closeLayer:function(){for(p in this._htLayerPopuper){var t=this._htLayerPopuper[p];
t.closeLayerAll(null)
}},isLayerOpen:function(){for(p in this._htLayerPopuper){var t=this._htLayerPopuper[p];
if(t.isLayerOpen()){return !0
}}return !1
}}).extend(dttjindo.Component),window.naver=window.naver||{},window.naver.dic=window.naver.dic||{},window.naver.dic.tooltip=window.naver.dic.tooltip||{},window.naver.dic.tooltip.layerpopuper=window.naver.dic.tooltip.layerpopuper||{},naver.dic.tooltip.layerpopuper.English=dttjindo.$Class({init:function(t){this._setDefaultOption(),this.option(t),this._initVar(),this._setTemplate(),this._setWrapperElement()
},_setDefaultOption:function(){this.option("sTargetClass","span.word_dic.en"),this.option("sToolTipDivID","tooltipLayer_english"),this.option("sToolTipDivIDs","#tooltipLayer_english, #tooltipLayer_hanja"),this.option("sToolTipInnerDivID","tooltipLayer_english_inner_area"),this.option("sCloseButtonClass","tooltipLayer_english_btn_close"),this.option("sMoreLinkID","tooltipLayer_english_more"),this.option("sEntryLinkClass",".tooltipLayer_english_entry"),this.option("sHighLightingClass","tlp_dic_hover"),this.option("sPointerId","tooltipLayer_english_pointer")
},_initVar:function(){this._oTemplate={},this._htWElement={},this._htWElementList={},this._nowPlayingIndex=-1,this._templateEngine=new dttjindo.$Template(naver.dic.tooltip.main.TEMPLATE_CONTENT_ENGLISH),this._APIResultData=null,this._wElMouseoverWord=null
},_setTemplate:function(){this._oTemplate.templateLayer=new dttjindo.$Template(naver.dic.tooltip.main.TEMPLATE_LAYER_ENGLISH)
},_setWrapperElement:function(){this._htWElementList.tooltipTarget=dttjindo.$ElementList(this.option("contentsSelector"))
},attachTemplateLayer:function(){var t=dttjindo.$Element(this._oTemplate.templateLayer.process());
this.option("useSmallMobileLayer")?t.css("max-width","360px"):this.option("fnSetPointerPosition")&&(t.css("left","0"),t.css("right","0")),dttjindo.$Element(document.body).appendHTML(t.outerHTML()),this._setLayoutWrapperElement()
},_setLayoutWrapperElement:function(){this._htWElement.tooltipLayer=dttjindo.$Element(this.option("sToolTipDivID")),this._htWElementList.tooltipLayerAll=dttjindo.$ElementList(this.option("sToolTipDivIDs")),this._htWElement.tooltipInnerLayer=dttjindo.$Element(this.option("sToolTipInnerDivID")),this._htWElement.closeButton=dttjindo.$Element(this.option("sCloseButtonClass"))
},attachEvent:function(){this.option("setAttachEvent")(this),dttjindo.$Element(document).attach("click",dttjindo.$Fn(function(t){this._closeLayer(t)
},this).bind()),this.option("isPC")&&dttjindo.$Element(window).attach("resize",dttjindo.$Fn(function(t){this._closeLayer(t)
},this).bind()),dttjindo.m.bindRotate(dttjindo.$Fn(function(t){this._closeLayer(t)
},this).bind())
},_attachTargetEvent:function(t){for(var e=0,n=this._htWElementList.tooltipTarget.length();
n>e;
e++){this._htWElementList.tooltipTarget.get(e).delegate("mouseover",this.option("sTargetClass"),dttjindo.$Fn(function(t){this._doHightlight(t,null)
},this).bind()),this._htWElementList.tooltipTarget.get(e).delegate("mouseout",this.option("sTargetClass"),dttjindo.$Fn(function(t){this._doHighlightOff(t)
},this).bind()),this._htWElementList.tooltipTarget.get(e).delegate("click",this.option("sTargetClass"),dttjindo.$Fn(function(t){this._show(t)
},this).bind())
}},_attachTargetCombineEvent:function(t){for(var e=dttjindo.$Fn(this._show,this).bind(),n=0,i=this._htWElementList.tooltipTarget.length();
i>n;
n++){this._htWElementList.tooltipTarget.get(n).delegate("click",this.option("sTargetClass"),dttjindo.$Fn(function(t){this._doHightlight(t,e)
},this).bind())
}},_doHightlight:function(t,e){if(naver.dic.tooltip.main._USE_TOOLTIP){var n=dttjindo.$Element(t.delegatedElement),i=n.text();
this._existResult(i,n,e,t)
}},_existResult:function(t,e,n,i){this._wElMouseoverWord=e,this._getAPIResult(t,e,n,i)
},_highlightOn:function(t){this._wElMouseoverWord&&this._wElMouseoverWord.isEqual(t)&&t.addClass(this.option("sHighLightingClass"))
},_doHighlightOff:function(t){this.isLayerOpen()&&dttjindo.$Element(t.delegatedElement).isEqual(this._wElCurrentTargetWord)||this._highlightOff(t)
},_highlightOff:function(t){if(t){this._wElMouseoverWord=null;
var e=dttjindo.$Element(t.delegatedElement);
e&&e.removeClass(this.option("sHighLightingClass"))
}else{this._wElCurrentTargetWord&&this._wElCurrentTargetWord.removeClass(this.option("sHighLightingClass"))
}},_highlightOffAll:function(){for(var t=dttjindo.$ElementList("."+this.option("sHighLightingClass")),e=0,n=t.length();
n>e;
e++){t.get(e).removeClass(this.option("sHighLightingClass"))
}this._wElCurrentTargetWord=null
},_setContentClickCode:function(t){this._setClickCodeWrapperElement(),dttjindo.$Fn(function(t){this._morelinkClickCode(t)
},this).attach(this._htWElement.tooltipLayerMoreLink,"click");
for(var e=0,n=this._htWElementList.tooltipLayerEntryLink.length();
n>e;
e++){dttjindo.$Fn(function(t){this._entrylinkClickCode(t)
},this).attach(this._htWElementList.tooltipLayerEntryLink.get(e),"click")
}},_setClickCodeWrapperElement:function(){this._htWElement.tooltipLayerMoreLink=dttjindo.$Element(this.option("sMoreLinkID")),this._htWElementList.tooltipLayerEntryLink=dttjindo.$ElementList(this.option("sEntryLinkClass"))
},_morelinkClickCode:function(t){this.option("nclicker")&&this.option("nclicker")(this,"smd.more","","",t.$value())
},_entrylinkClickCode:function(t){this.option("nclicker")&&this.option("nclicker")(this,"smd.entry","","",t.$value())
},_setAPIResultData:function(t){this._APIResultData=t
},_getAPIResult:function(t,e,n,i){var o=dttjindo.$Fn(this._highlightOn,this).bind(e),r=dttjindo.$Fn(this._setAPIResultData,this).bind(),s=i,a=this.option("apiDomain")+"/tooltipData.nhn?dicType=english";
dttjindo.$Ajax(a,{type:"jsonp",method:"get",timeout:1,onload:function(t){var e=t.json();
""!=e.result.items?(r(e),o()):r(null),n&&n(s)
}}).request({query:t,prCode:this.option("prCode")})
},_show:function(t){naver.dic.tooltip.main._USE_TOOLTIP&&(this.closeLayerAll(t),this._APIResultData&&(this._wElCurrentTargetWord=dttjindo.$Element(t.delegatedElement),this._highlightOn(this._wElCurrentTargetWord),this.fireEvent("beforeShow",{oEvent:t}),this._htWElement.tooltipInnerLayer.html(this._templateEngine.process(this._APIResultData)),this._htWElement.tooltipLayer.show(),this._setPosition(dttjindo.$Element(t.delegatedElement)),this._setContentClickCode(),this.fireEvent("afterShow",{oEvent:t})),this.option("nclicker")&&this.option("nclicker")(this,"smd.open","","",t.$value()),this.setSoundPlayer(),t.stop(dttjindo.$Event.CANCEL_BUBBLE))
},setSoundPlayer:function(){document.createElement("audio").canPlayType?(this._html5SoundEventAdd(0),this._html5SoundEventAdd(1),this._html5SoundEventAdd(2),this._html5SoundEventAdd(3)):(this._flashPlayerAdd(0),this._flashPlayerAdd(1),this._flashPlayerAdd(2),this._flashPlayerAdd(3))
},_setPosition:function(t){var e=t.offset().top,n=t.offset().left;
this.option("fngetDefaultLeft")&&!this.option("useSmallMobileLayer")&&(n-=this.option("fngetDefaultLeft")());
var i=t.height(),o=t.width(),r=document.documentElement.clientWidth?document.documentElement.clientWidth:document.body.clientWidth,s=document.documentElement.clientHeight?document.documentElement.clientHeight:document.body.clientHeight,a=this._htWElement.tooltipLayer.height(),l=this._htWElement.tooltipLayer.width(),d=document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop,h=s+d>=e+a||a>e-d;
if(this.option("layerPositionFix")&&(h=!0),h){var c=e+i+5
}else{var c=e-a-5
}if(n+l>r){var u=r-l
}else{var u=n
}if(this.option("fnSetPointerPosition")){var p=o>320?n:n-5+o/2;
this.option("fnSetPointerPosition")(this.option("sPointerId"),this.option("useSmallMobileLayer")?n-u+(o/2-5):p,h,this.option("useSmallMobileLayer"))
}this._htWElement.tooltipLayer.css({top:c,left:u})
},isLayerOpen:function(){return this._htWElement.tooltipLayer.visible()
},closeLayerAll:function(t){this._htWElementList.tooltipLayerAll=dttjindo.$ElementList(this.option("sToolTipDivIDs"));
for(var e=!1,n=0,i=this._htWElementList.tooltipLayerAll.length();
i>n;
n++){!e&&this._htWElementList.tooltipLayerAll.get(n).visible()&&(this.fireEvent("beforeClose",{oEvent:t}),e=!0),this._htWElementList.tooltipLayerAll.get(n).hide()
}this._highlightOffAll(),e&&this.fireEvent("afterClose",{oEvent:t})
},_closeLayer:function(t){if(!this._htWElement.tooltipLayer.isParentOf(t.element)||dttjindo.$Element(t.element)&&dttjindo.$Element(t.element).isEqual(this._htWElement.closeButton)){var e=!1;
this._htWElement.tooltipLayer.visible()&&(this.fireEvent("beforeClose",{oEvent:t}),e=!0),this._htWElement.tooltipLayer.hide(),this._nowPlayingIndex>-1&&this.stop(this._nowPlayingIndex),dttjindo.$Element(t.element)&&dttjindo.$Element(t.element).isEqual(this._htWElement.closeButton)&&(this.option("nclicker")&&this.option("nclicker")(this,"smd.close","","",t.$value()),t.stop(dttjindo.$Event.CANCEL_DEFAULT)),this._highlightOff(),e&&this.fireEvent("afterClose",{oEvent:t})
}},_flashPlayerAdd:function(t){var e=dttjindo.$Element("sound_playT"+t),n=document.getElementsByName("MP3PlayerT"+t)[0],i=this;
if(naver.dic.tooltip.FlashObject&&e){var o="playerType=2&url="+e.attr("data-url"),r={};
r.wheelHandler="tooltip",r.flashVars=o,r.wmode="window",r.allowScriptAccess="always",naver.dic.tooltip.FlashObject.showAt("sound_playT"+t,naver.dic.tooltip.FlashObject.generateTag("https://ssl.pstatic.net/static/terms/Pronunciation.swf","MP3PlayerT"+t,"34","17",r));
var n=document.getElementsByName("MP3PlayerT"+t)[0];
n&&n.setSoundTarget||this._htWElement.tooltipLayer.remove("sound_playT"+t),e.delegate("click",function(t,e){return !0
},function(n){i.option("nclicker")&&i.option("nclicker")(this,"smd.sound","","",oEvent.$value());
var o=document.getElementsByName("MP3PlayerT"+t)[0];
return i._nowPlayingIndex>-1?(i._nowPlayingIndex=-1,o&&o.callSoundStop&&o.callSoundStop(),e&&e.removeClass("on"),i.fireEvent("afterPlaySound",{nIndex:t})):(i._nowPlayingIndex=t,setTimeout(function(){i._nowPlayingIndex=-1,dttjindo.$Element("sound_playT"+t)&&dttjindo.$Element("sound_playT"+t).hasClass("on")&&(dttjindo.$Element("sound_playT"+t).removeClass("on"),i.fireEvent("afterPlaySound",{nIndex:t}))
},4000),i.fireEvent("beforePlaySound",{nIndex:t}),o.setSoundTarget(e.attr("data-url"),1),e.addClass("on")),n.stopBubble(),!1
})
}},_html5SoundEventAdd:function(t){var e="sound_playT"+t;
if(!document.createElement("audio").canPlayType){return void (this._htWElement.tooltipLayer.isParentOf(e)&&this._htWElement.tooltipLayer.remove(e))
}this.existingSoundPlayer=window.soundPlayer||!1;
var n=this,i=dttjindo.$Element("soundT"+t);
null!=i&&(dttjindo.$Element(e).delegate("click",function(t,e){return"A"==e.tagName||"BUTTON"==e.tagName
},function(o){return n._nowPlayingIndex>-1?(n.stop(n._nowPlayingIndex),n.play(t)):n.play(t),setTimeout(function(){n._nowPlayingIndex>-1&&i.isEqual(dttjindo.$Element("soundT"+t))&&(dttjindo.$Element(e).removeClass("on"),i.removeClass("on"),n.fireEvent("afterPlaySound",{nIndex:t}))
},4000),o.stopBubble(),!1
}),dttjindo.$Element("soundT"+t).delegate("ended",function(){return !0
},function(e){n.stop(t),n._nowPlayingIndex=-1
}))
},play:function(t){this.option("nclicker")&&this.option("nclicker")(this,"smd.sound","","",null),this._nowPlayingIndex=t,this.existingSoundPlayer&&this.existingSoundPlayer.nowPlaying>=0&&this.existingSoundPlayer.stop(this.existingSoundPlayer.nowPlaying),this.fireEvent("beforePlaySound",{nIndex:t}),dttjindo.$("soundT"+t).load(),dttjindo.$("soundT"+t).play();
var e=dttjindo.$Element("sound_playT"+t);
return e.addClass("on"),!1
},stop:function(t){if(-1!=this._nowPlayingIndex){this._nowPlayingIndex=-1;
var e=dttjindo.$Element("sound_playT"+t);
e&&e.removeClass("on");
var n=document.getElementsByName("MP3PlayerT"+t)[0];
if(n&&n.callSoundStop){n.callSoundStop()
}else{var i=dttjindo.$("soundT"+t);
i&&i.pause&&i.pause(),i.currentTime=0
}this.fireEvent("afterPlaySound",{nIndex:t})
}}}).extend(dttjindo.Component),window.naver=window.naver||{},window.naver.dic=window.naver.dic||{},window.naver.dic.tooltip=window.naver.dic.tooltip||{},window.naver.dic.tooltip.layerpopuper=window.naver.dic.tooltip.layerpopuper||{},naver.dic.tooltip.layerpopuper.Hanja=dttjindo.$Class({init:function(t){this._setDefaultOption(),this.option(t),this._initVar(),this._setTemplate(),this._setWrapperElement()
},_setDefaultOption:function(){this.option("sTargetClass","span.word_dic.hj"),this.option("sOtherTargetClass","span.word_dic.en"),this.option("sExpantionTargetClass","span.word_dic._exp"),this.option("sToolTipDivID","tooltipLayer_hanja"),this.option("sToolTipEnglishDivID","tooltipLayer_english"),this.option("sToolTipDivIDs","#tooltipLayer_english, #tooltipLayer_hanja, #tooltipLayer_hanja_expansion_area"),this.option("sToolTipOtherDivIDs","#tooltipLayer_english"),this.option("sToolTipInnerDivID","tooltipLayer_hanja_inner_area"),this.option("sToolTipExpansionDivID","tooltipLayer_hanja_expansion_area"),this.option("sToolTipExpansionScrollDivID","tooltipLayer_hanja_scroll_content_area"),this.option("sCloseButtonClass","tooltipLayer_hanja_btn_close"),this.option("sMoreLinkID","tooltipLayer_hanja_more"),this.option("sEntryLinkClass",".tooltipLayer_hanja_entry"),this.option("sHighLightingClass","tlp_dic_hover"),this.option("sPointerId","tooltipLayer_hanja_pointer")
},_initVar:function(){this._oTemplate={},this._htWElement={},this._htWElementList={},this._templateEngine=new dttjindo.$Template(naver.dic.tooltip.main.TEMPLATE_CONTENT_HANJA),this._expansionTemplateEngine=new dttjindo.$Template(naver.dic.tooltip.main.TEMPLATE_EXPANSION_CONTENT_HANJA),this._APIResultData=null,this._wElMouseoverWord=null,this._wElCurrentTargetWord=null,this._wElExpansionWord=null
},_setTemplate:function(){this._oTemplate.templateLayer=new dttjindo.$Template(naver.dic.tooltip.main.TEMPLATE_LAYER_HANJA),this._oTemplate.templateExpansionLayer=new dttjindo.$Template(naver.dic.tooltip.main.TEMPLATE_EXPANTION_LAYER_HANJA)
},_setWrapperElement:function(){this._htWElementList.tooltipTarget=dttjindo.$ElementList(this.option("contentsSelector"))
},attachTemplateLayer:function(){var t=dttjindo.$Element(this._oTemplate.templateLayer.process());
this.option("useSmallMobileLayer")||this.option("fnSetPointerPosition")&&(t.css("left","0"),t.css("right","0")),dttjindo.$Element(document.body).appendHTML(t.outerHTML());
var e=dttjindo.$Element(this._oTemplate.templateExpansionLayer.process());
dttjindo.$Element(document.body).appendHTML(e.outerHTML()),this._setLayoutWrapperElement()
},_setLayoutWrapperElement:function(){this._htWElement.tooltipLayer=dttjindo.$Element(this.option("sToolTipDivID")),this._htWElement.tooltipEnglishLayer=dttjindo.$Element(this.option("sToolTipEnglishDivID")),this._htWElement.tooltipExpansionLayer=dttjindo.$Element(this.option("sToolTipExpansionDivID")),this._htWElementList.tooltipLayerAll=dttjindo.$ElementList(this.option("sToolTipDivIDs")),this._htWElementList.tooltipOtherLayers=dttjindo.$ElementList(this.option("sToolTipOtherDivIDs")),this._htWElement.tooltipInnerLayer=dttjindo.$Element(this.option("sToolTipInnerDivID")),this._htWElement.closeButton=dttjindo.$Element(this.option("sCloseButtonClass"))
},attachEvent:function(){this.option("setAttachEvent")(this),dttjindo.$Element(document).attach("click",dttjindo.$Fn(function(t){this.closeLayerAll(t)
},this).bind()),this.option("isPC")&&dttjindo.$Element(window).attach("resize",dttjindo.$Fn(function(t){this.closeLayerAll(t)
},this).bind()),dttjindo.m.bindRotate(dttjindo.$Fn(function(t){this.closeLayerAll(t)
},this).bind())
},_attachTargetEvent:function(t){for(var e=0,n=this._htWElementList.tooltipTarget.length();
n>e;
e++){this._htWElementList.tooltipTarget.get(e).delegate("mouseover",this.option("sTargetClass"),dttjindo.$Fn(function(t){this._doHighlight(t,null)
},this).bind()),this._htWElementList.tooltipTarget.get(e).delegate("mouseout",this.option("sTargetClass"),dttjindo.$Fn(function(t){this._doHighlightOff(t)
},this).bind()),this._htWElementList.tooltipTarget.get(e).delegate("click",this.option("sTargetClass"),dttjindo.$Fn(function(t){this._show(t)
},this).bind())
}},_attachTargetCombineEvent:function(t){for(var e=dttjindo.$Fn(this._show,this).bind(),n=0,i=this._htWElementList.tooltipTarget.length();
i>n;
n++){this._htWElementList.tooltipTarget.get(n).delegate("click",this.option("sTargetClass"),dttjindo.$Fn(function(t){this._isUseExtensionHanjaLayer()?this._expansionLayerShow(t):this._doHighlight(t,e)
},this).bind())
}},_isUseExtensionHanjaLayer:function(){var t=this.option("dic");
for(p in t){var e=t[p];
if(e.useExtensionHanjaLayer){return !0
}}return !1
},_doHighlight:function(t,e){if(naver.dic.tooltip.main._USE_TOOLTIP){var n=dttjindo.$Element(t.delegatedElement),i=n.text();
this._existResult(i,n,e,t)
}},_existResult:function(t,e,n,i){this._wElMouseoverWord=e,this._getAPIResult(t,e,n,i)
},_highlightOn:function(t){this._wElMouseoverWord&&this._wElMouseoverWord.isEqual(t)&&t.addClass(this.option("sHighLightingClass"))
},_doHighlightOff:function(t){this.isLayerOpen()&&dttjindo.$Element(t.delegatedElement).isEqual(this._wElCurrentTargetWord)||this._highlightOff(t)
},_highlightOff:function(t){if(t){this._wElMouseoverWord=null;
var e=dttjindo.$Element(t.delegatedElement);
e&&e.removeClass(this.option("sHighLightingClass"))
}else{this._wElCurrentTargetWord&&this._wElCurrentTargetWord.removeClass(this.option("sHighLightingClass"))
}},_highlightOffAll:function(){for(var t=dttjindo.$ElementList("."+this.option("sHighLightingClass")),e=0,n=t.length();
n>e;
e++){t.get(e).removeClass(this.option("sHighLightingClass"))
}this._htWElement.tooltipLayer.visible()&&this._wElCurrentTargetWord.addClass(this.option("sHighLightingClass")),this._htWElement.tooltipExpansionLayer.visible()&&this._wElExpansionWord.addClass(this.option("sHighLightingClass"))
},_setContentClickCode:function(t){this._setClickCodeWrapperElement(),dttjindo.$Fn(function(t){this._morelinkClickCode(t)
},this).attach(this._htWElement.tooltipLayerMoreLink,"click");
for(var e=0,n=this._htWElementList.tooltipLayerEntryLink.length();
n>e;
e++){dttjindo.$Fn(function(t){this._entrylinkClickCode(t)
},this).attach(this._htWElementList.tooltipLayerEntryLink.get(e),"click")
}},_setClickCodeWrapperElement:function(){this._htWElement.tooltipLayerMoreLink=dttjindo.$Element(this.option("sMoreLinkID")),this._htWElementList.tooltipLayerEntryLink=dttjindo.$ElementList(this.option("sEntryLinkClass"))
},_morelinkClickCode:function(t){this.option("nclicker")&&this.option("nclicker")(this,"hsd.more","","",event)
},_entrylinkClickCode:function(t){this.option("nclicker")&&this.option("nclicker")(this,"hsd.entry","","",event)
},_setAPIResultData:function(t){this._APIResultData=t
},_getAPIResult:function(t,e,n,i){var o=dttjindo.$Fn(this._highlightOn,this).bind(e),r=dttjindo.$Fn(this._setAPIResultData,this).bind(),s=i,a=this.option("apiDomain")+"/tooltipData.nhn?dicType=hanja";
dttjindo.$Ajax(a,{type:"jsonp",method:"get",timeout:1,onload:function(t){var e=t.json();
""!=e.result.items?(r(e),o()):r(null),n&&n(s)
}}).request({query:t,prCode:this.option("prCode")})
},_show:function(t){naver.dic.tooltip.main._USE_TOOLTIP&&(this._closeOtherLayer(t),this._isUseExtensionHanjaLayer()&&this._closeLayer(t),this._highlightOff(),this._APIResultData&&(this.fireEvent("beforeShow",{oEvent:t}),this._htWElement.tooltipInnerLayer.html(this._templateEngine.process(this._APIResultData)),this._htWElement.tooltipLayer.show(),this._setPosition(dttjindo.$Element(t.delegatedElement),"tooltipLayer"),this._setContentClickCode(),this._wElCurrentTargetWord=dttjindo.$Element(t.delegatedElement),this._highlightOn(this._wElCurrentTargetWord),this.fireEvent("afterShow",{oEvent:t})),this.option("nclicker")&&this.option("nclicker")(this,"hsd.open","","",event),t.stop(dttjindo.$Event.CANCEL_BUBBLE))
},_setPosition:function(t,e){var n=t.offset().top,i=t.offset().left;
this.option("fngetDefaultLeft")&&!this.option("useSmallMobileLayer")&&(i-=this.option("fngetDefaultLeft")());
var o=t.height(),r=t.width(),s=document.documentElement.clientWidth?document.documentElement.clientWidth:document.body.clientWidth,a=document.documentElement.clientHeight?document.documentElement.clientHeight:document.body.clientHeight,l=this._htWElement[e].height(),d=this._htWElement[e].width(),h=document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop,c=0;
if(this._isUseExtensionHanjaLayer()&&"tooltipExpansionLayer"==e){this._htWElement[e].css("max-width","1000px");
var u=t.text().length,p=s-2*c;
c=this._getMargin(),d=u*this._htWElementList.tooltipExpansionTarget.get(0).width(),l=35,d>p&&this._htWElement.tooltipExpansionLayer.css("max-width",p+"px")
}var f=a+h>=n+o+l||l>n-h;
if(f){var _=n+o+5
}else{var _=n-l-5
}if(i+d>s-c){var m=s-c-d;
c>m&&(m=c,dttjindo.$Element(this.option("sToolTipExpansionScrollDivID")).width(d),this.oScroll=new dttjindo.m.Scroll("tooltipLayer_hanja_scroll_area",{bUseHScroll:!0,bUseVScroll:!1,bUseScrollbar:!1,bUseMomentum:!1,nHeight:30,nWidth:s-2*c}))
}else{var m=i
}if(this.option("fnSetPointerPosition")){this.oScroll&&(c=s>682?109:20,i=t.$value().offsetLeft+c+this.oScroll._nLeft);
var g=r>360?i:i-5+r/2;
this.option("fnSetPointerPosition")(this.option("sPointerId"),this.option("useSmallMobileLayer")?i-m+(r/2-5):g,f,this.option("useSmallMobileLayer"))
}this._htWElement[e].css({top:_,left:m})
},_getMargin:function(t){var e=dttjindo.$$(".naml_wrap .hview-page"),n=dttjindo.$$(".naml_wrap .atomic-block");
if(e&&0!=e.length){var i=dttjindo.$Element(e[0]).css("margin").split(" ");
if(i.length>1){return i[1].replace("px","")
}}else{if(n&&0!=n.length){var i=dttjindo.$Element(n[0]).css("margin").split(" ");
if(i.length>1){return i[1].replace("px","")
}}}return t>682?109:20
},isLayerOpen:function(){return this._htWElement.tooltipLayer.visible()
},getScroll:function(){return this.oScroll
},closeLayerAll:function(t){if(!t){var e=!1;
return this._htWElement.tooltipLayer.visible()&&(this.fireEvent("beforeClose",{oEvent:t}),e=!0),this._htWElement.tooltipLayer.hide(),this._htWElement.tooltipExpansionLayer.hide(),this._highlightOff(),this.oScroll=!1,void (e&&this.fireEvent("afterClose",{oEvent:t}))
}if(!this._htWElement.tooltipLayer.isParentOf(t.element)&&!this._htWElement.tooltipExpansionLayer.isParentOf(t.element)||dttjindo.$Element(t.element)&&dttjindo.$Element(t.element).isEqual(this._htWElement.closeButton)){if(this._htWElement.tooltipEnglishLayer&&this._htWElement.tooltipEnglishLayer.isParentOf(t.element)){return
}if(dttjindo.$Element(t.element)&&dttjindo.$Element(t.element).isEqual(this._htWElement.closeButton)){this._closeLayer(t)
}else{this._htWElementList.tooltipLayerAll=dttjindo.$ElementList(this.option("sToolTipDivIDs"));
for(var e=!1,n=0,i=this._htWElementList.tooltipLayerAll.length();
i>n;
n++){!e&&this._htWElementList.tooltipLayerAll.get(n).visible()&&(this.fireEvent("beforeClose",{oEvent:t}),e=!0),this._htWElementList.tooltipLayerAll.get(n).hide()
}this._highlightOffAll(),this.oScroll=!1,e&&this.fireEvent("afterClose",{oEvent:t})
}}},_closeOtherLayer:function(t){for(var e=0,n=this._htWElementList.tooltipOtherLayers.length();
n>e;
e++){this._htWElementList.tooltipOtherLayers.get(e).hide()
}this._highlightOffAll()
},_closeLayer:function(t){if(!this._htWElement.tooltipLayer.isParentOf(t.element)&&!this._htWElement.tooltipExpansionLayer.isParentOf(t.element)||dttjindo.$Element(t.element)&&dttjindo.$Element(t.element).isEqual(this._htWElement.closeButton)){var e=!1;
this._htWElement.tooltipLayer.visible()&&(this.fireEvent("beforeClose",{oEvent:t}),e=!0),this._htWElement.tooltipLayer.hide(),dttjindo.$Element(t.element)&&dttjindo.$Element(t.element).isEqual(this._htWElement.closeButton)?(this.option("nclicker")&&this.option("nclicker")(this,"hsd.close","","",event),t.stop(dttjindo.$Event.CANCEL_DEFAULT)):this._htWElement.tooltipExpansionLayer.hide(),this._highlightOff(),this.oScroll=!1,e&&this.fireEvent("afterClose",{oEvent:t})
}},_expansionLayerShow:function(t){if(naver.dic.tooltip.main._USE_TOOLTIP){this.closeLayerAll(t);
var e=dttjindo.$Element(t.delegatedElement);
this._wElMouseoverWord=e,this._wElExpansionWord=e,this._highlightOn(e);
var n={items:e.text()};
e.text().length;
this._htWElement.tooltipExpansionLayer.show(),this._htWElement.tooltipExpansionLayer.html(this._expansionTemplateEngine.process(n)),this._setWrapperExpansionElement(),this._setPosition(dttjindo.$Element(t.delegatedElement),"tooltipExpansionLayer"),this._attachExpansionLayerEvent();
var i=this._findClickWord(e,t);
this._htWElementList.tooltipExpansionTarget.get(i).fireEvent("click"),t.stop(dttjindo.$Event.CANCEL_BUBBLE)
}},_findClickWord:function(t,e){var n=(t.offset().top,t.offset().left);
this.option("fngetDefaultLeft")&&(n-=this.option("fngetDefaultLeft")());
var i=t.height(),o=e.pos(),r=(t.width(),t.text().length),s=parseInt((o.pageX-n)/i);
return s>=r&&(s=0),s
},_setWrapperExpansionElement:function(){this._htWElementList.tooltipExpansionTarget=dttjindo.$ElementList(this.option("sExpantionTargetClass"))
},_attachExpansionLayerEvent:function(t){for(var e=dttjindo.$Fn(this._show,this).bind(),n=0,i=this._htWElementList.tooltipExpansionTarget.length();
i>n;
n++){this._htWElementList.tooltipExpansionTarget.get(n).delegate("click",this.option("sExpantionTargetClass"),dttjindo.$Fn(function(t){this._doHighlight(t,e)
},this).bind())
}}}).extend(dttjindo.Component),window.naver=window.naver||{},window.naver.dic=window.naver.dic||{},window.naver.dic.tooltip=window.naver.dic.tooltip||{},window.naver.dic.tooltip.marker=window.naver.dic.tooltip.marker||{},naver.dic.tooltip.marker.English=dttjindo.$Class({init:function(t){this.option(t),this._initVar(),this._createPattern()
},_initVar:function(){this.option("minWordLength")||this.option("minWordLength",2),this._sPattern=""
},_createPattern:function(){var t=this.option("addRule")||[],e="ÁÉÍÓÚÜáéíóúüÀ-ÿ",n="{"+this.option("minWordLength")+",}",i="[a-z"+e+t.join("")+"]";
this._sPattern='(<a [^>]+>([\\s\\S]*?)</a>|<span class="word_dic[^>]+>([\\s\\S]*?)</span>|<script[^>]*>([\\s\\S]*?)<\/script>|<style[^>]*>([\\s\\S]*?)</style>|<[^>]+>|&'+i+n+";|"+i+n+")"
},mark:function(t,e){var n=this,i=new RegExp(this._sPattern,"ig"),o=function(t){var e=t;
return"<"==e.charAt(0)&&">"==e.charAt(e.length-1)?e:"&"==e.charAt(0)&&";"==e.charAt(e.length-1)&&(n.BASIC_ESCAPE.indexOf(e)>-1||n.ISO8859_1_ESCAPE.indexOf(e)>-1||n.HTML40_EXTENDED_ESCAPE.indexOf(e)>-1)?e:naver.dic.tooltip.main.TEMPLATE_MARKING_ENGLISH.replace(/{=title\}/g,e)
},r=this.option("replaceItemList");
if(r){for(var s=0,a=r.length;
a>s;
s++){var l=r[s].search.replace(/\\/g,"\\\\"),d=r[s].replacement.replace(/\\/g,"\\\\");
t=t.replace(new RegExp(l,"g"),d)
}}var h=this.option("ignoreItemList"),c=this.option("debugingMode"),u=this.option("ignoreCase"),p="g"+(u?"i":""),f=[],_=this.option("unUseBackSlashReplace");
if(h){for(var m=0,s=0,a=h.length;
a>s;
s++){var g="";
_?(g=h[s],c&&console.log("UnUse BackSlash Replace!")):g=h[s].replace(/\\/+p,"\\\\");
var v=function(t){return m++,f[f.length]=t,c&&console.log("ignore target["+e+"-"+m+"]: "+t),"!@#"+m+"#@!"
};
t=t.replace(new RegExp(g,p),v)
}}if(t=t.replace(i,o),h){for(var s=f.length-1;
s>=0;
s--){var g="";
g=_?f[s]:f[s].replace(/\\\\/+p,"\\"),t=t.replace("!@#"+(s+1)+"#@!",g)
}}return t
},BASIC_ESCAPE:dttjindo.$A(["&quot;","&amp;","&lt;","&gt;","&apos;"]),ISO8859_1_ESCAPE:dttjindo.$A(["&nbsp;","&iexcl;","&cent;","&pound;","&curren;","&yen;","&brvbar;","&sect;","&uml;","&copy;","&ordf;","&laquo;","&not;","&shy;","&reg;","&macr;","&deg;","&plusmn;","&sup2;","&sup3;","&acute;","&micro;","&para;","&middot;","&cedil;","&sup1;","&ordm;","&raquo;","&frac14;","&frac12;","&frac34;","&iquest;","&Agrave;","&Aacute;","&Acirc;","&Atilde;","&Auml;","&Aring;","&AElig;","&Ccedil;","&Egrave;","&Eacute;","&Ecirc;","&Euml;","&Igrave;","&Iacute;","&Icirc;","&Iuml;","&ETH;","&Ntilde;","&Ograve;","&Oacute;","&Ocirc;","&Otilde;","&Ouml;","&times;","&Oslash;","&Ugrave;","&Uacute;","&Ucirc;","&Uuml;","&Yacute;","&THORN;","&szlig;","&agrave;","&aacute;","&acirc;","&atilde;","&auml;","&aring;","&aelig;","&ccedil;","&egrave;","&eacute;","&ecirc;","&euml;","&igrave;","&iacute;","&icirc;","&iuml;","&eth;","&ntilde;","&ograve;","&oacute;","&ocirc;","&otilde;","&ouml;","&divide;","&oslash;","&ugrave;","&uacute;","&ucirc;","&uuml;","&yacute;","&thorn;","&yuml;"]),HTML40_EXTENDED_ESCAPE:dttjindo.$A(["&fnof;","&Alpha;","&Beta;","&Gamma;","&Delta;","&Epsilon;","&Zeta;","&Eta;","&Theta;","&Iota;","&Kappa;","&Lambda;","&Mu;","&Nu;","&Xi;","&Omicron;","&Pi;","&Rho;","&Sigma;","&Tau;","&Upsilon;","&Phi;","&Chi;","&Psi;","&Omega;","&alpha;","&beta;","&gamma;","&delta;","&epsilon;","&zeta;","&eta;","&theta;","&iota;","&kappa;","&lambda;","&mu;","&nu;","&xi;","&omicron;","&pi;","&rho;","&sigmaf;","&sigma;","&tau;","&upsilon;","&phi;","&chi;","&psi;","&omega;","&thetasym;","&upsih;","&piv;","&bull;","&hellip;","&prime;","&Prime;","&oline;","&frasl;","&weierp;","&image;","&real;","&trade;","&alefsym;","&larr;","&uarr;","&rarr;","&darr;","&harr;","&crarr;","&lArr;","&uArr;","&rArr;","&dArr;","&hArr;","&forall;","&part;","&exist;","&empty;","&nabla;","&isin;","&notin;","&ni;","&prod;","&sum;","&minus;","&lowast;","&radic;","&prop;","&infin;","&ang;","&and;","&or;","&cap;","&cup;","&int;","&there4;","&sim;","&cong;","&asymp;","&ne;","&equiv;","&le;","&ge;","&sub;","&sup;","&sube;","&supe;","&oplus;","&otimes;","&perp;","&sdot;","&lceil;","&rceil;","&lfloor;","&rfloor;","&lang;","&rang;","&loz;","&spades;","&clubs;","&hearts;","&diams;","&OElig;","&oelig;","&Scaron;","&scaron;","&Yuml;","&circ;","&tilde;","&ensp;","&emsp;","&thinsp;","&zwnj;","&zwj;","&lrm;","&rlm;","&ndash;","&mdash;","&lsquo;","&rsquo;","&sbquo;","&ldquo;","&rdquo;","&bdquo;","&dagger;","&Dagger;","&permil;","&lsaquo;","&rsaquo;","&euro;"])}).extend(dttjindo.Component),window.naver=window.naver||{},window.naver.dic=window.naver.dic||{},window.naver.dic.tooltip=window.naver.dic.tooltip||{},window.naver.dic.tooltip.marker=window.naver.dic.tooltip.marker||{},naver.dic.tooltip.marker.Hanja=dttjindo.$Class({init:function(t){this.option(t),this._initVar(),this._createPattern()
},_initVar:function(){this.option("minWordLength")||this.option("minWordLength","1"),this.option("useExtensionHanjaLayer")&&this.option("minWordLength","1,"),this._sPattern=""
},_createPattern:function(){var t=this.option("addRule")||[],e="{"+this.option("minWordLength")+"}",n="⺀-⻿",i="⼀-⿟",o="㐀-䶿",r="一-鿿",s="豈-﫿",a="["+n+i+o+r+s+t.join("")+"]";
this._sPattern="(<a [^>]+>([\\s\\S]*?)</a>|<script[^>]*>([\\s\\S]*?)<\/script>|<style[^>]*>([\\s\\S]*?)</style>|<[^>]+>|"+a+e+")"
},mark:function(t,e){var n=new RegExp(this._sPattern,"ig"),i=function(t){var e=t;
return"<"==e.charAt(0)&&">"==e.charAt(e.length-1)?e:naver.dic.tooltip.main.TEMPLATE_MARKING_HANJA.replace(/{=title\}/g,e)
},o=this.option("replaceItemList");
if(o){for(var r=0,s=o.length;
s>r;
r++){var a=o[r].search.replace(/\\/g,"\\\\"),l=o[r].replacement.replace(/\\/g,"\\\\");
t=t.replace(new RegExp(a,"g"),l)
}}var d=this.option("ignoreItemList"),h=this.option("debugingMode"),c=(this.option("ignoreCase"),[]);
if(d){for(var u=0,r=0,s=d.length;
s>r;
r++){var p=d[r].replace(/\\/g,"\\\\"),f=function(t){return u++,c[c.length]=t,h&&console.log("ignore target["+e+"-"+u+"]: "+t),"!@#"+u+"#@!"
};
t=t.replace(new RegExp(p,"g"),f)
}}if(t=t.replace(n,i),d){for(var r=c.length-1;
r>=0;
r--){var p=c[r].replace(/\\\\/g,"\\");
t=t.replace("!@#"+(r+1)+"#@!",p)
}}return t
}}).extend(dttjindo.Component);
