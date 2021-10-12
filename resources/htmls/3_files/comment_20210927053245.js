(function(jindoName,undefined){function trim(a){return a.replace(/^(\s|　)+/g,"").replace(/(\s|　)+$/g,"")
}function addExtension(a,b,c){jindo[a][b]?jindo.$Jindo._warn(a+"."+b+" was overwrite."):/^x/.test(b)?jindo[a][b]=c:jindo.$Jindo._warn("The Extension Method("+a+"."+b+") must be used with x prefix.")
}function _toArray(a){return _slice.apply(a)
}function _createEle(a,b,c,d){var e="R"+(new Date).getTime()+parseInt(Math.random()*100000,10),f=c.createElement("div");
switch(a){case"select":case"table":case"dl":case"ul":case"fieldset":case"audio":f.innerHTML="<"+a+' class="'+e+'">'+b+"</"+a+">";
break;
case"thead":case"tbody":case"col":f.innerHTML="<table><"+a+' class="'+e+'">'+b+"</"+a+"></table>";
break;
case"tr":f.innerHTML='<table><tbody><tr class="'+e+'">'+b+"</tr></tbody></table>";
break;
default:f.innerHTML='<div class="'+e+'">'+b+"</div>"
}var g;
for(g=f.firstChild;
g;
g=g.firstChild){if(g.className==e){break
}}return d?g:g.childNodes
}function _kindOf(a,b){return a!=b?a._$superClass?_kindOf(a._$superClass.prototype,b):!1:!0
}function defaultSort(a,b,c){var d=[],e=a.fpSort;
for(var f in b._table){b._table.hasOwnProperty(f)&&function(a,b){d.push({key:a,val:b})
}(f,b._table[f])
}a+""=="vo"&&(e=function(a,b){return a===b?0:a>b?1:-1
}),d.sort(function(a,d){return e.call(b,a[c],d[c])
});
var g=[];
for(var h=0,i=d.length;
h<i;
h++){g.push(d[h].key)
}return g
}function hasCustomEvent(a){return !!getCustomEvent(a)||!!normalCustomEvent[a]
}function getCustomEvent(a){return customEvent[a]
}function addCustomEventListener(a,b,c,d,e){customEventStore[b]||(customEventStore[b]={},customEventStore[b].ele=a),customEventStore[b][c]||(customEventStore[b][c]={}),customEventStore[b][c][d]||(customEventStore[b][c][d]={custom:e})
}function setCustomEventListener(a,b,c,d,e){customEventStore[a][b][c].real_listener=d,customEventStore[a][b][c].wrap_listener=e
}function getCustomEventListener(a,b,c){var d=customEventStore[a];
return d&&d[b]&&d[b][c]?d[b][c]:{}
}function getNormalEventListener(a,b,c){var d=normalCustomEvent[b];
return d&&d[a]&&d[a][c]?d[a][c]:{}
}function hasCustomEventListener(a,b,c){var d=customEventStore[a];
return d&&d[b]&&d[b][c]?!0:!1
}function _event_getScrollbarSize(){var a={x:0,y:0},b=jindo.$(['<div style="',["overflow:scroll","width:100px","height:100px","position:absolute","left:-1000px","border:0","margin:0","padding:0"].join(" !important;"),' !important;">'].join(""));
return document.body.insertBefore(b,document.body.firstChild),a={x:b.offsetWidth-b.scrollWidth,y:b.offsetHeight-b.scrollHeight},document.body.removeChild(b),b=null,_event_getScrollbarSize=function(){return a
},a
}function _ie_check_scroll(a,b){return document.body.componentFromPoint&&parseInt(_j_ag.match(/(?:MSIE) ([0-9.]+)/)[1],10)==8?_ie_check_scroll=function(a,b){return !/HTMLGenericElement/.test(a+"")&&/(scrollbar|outside)/.test(a.componentFromPoint(b.clientX,b.clientY))
}:_ie_check_scroll=function(a,b){return/(scrollbar|outside)/.test(a.componentFromPoint(b.clientX,b.clientY))
},_ie_check_scroll(a,b)
}function _event_isScroll(a,b){if(a.componentFromPoint){return _ie_check_scroll(a,b)
}if(_JINDO_IS_FF){try{var c=b.originalTarget.localName;
return c==="thumb"||c==="slider"||c==="scrollcorner"||c==="scrollbarbutton"
}catch(d){return !0
}}var e=jindo.$Element(a).css("display");
if(e==="inline"){return !1
}var f={x:b.offsetX||b.layerX||0,y:b.offsetY||b.layerY||0};
_JINDO_IS_WK&&(f.x-=a.clientLeft,f.y-=a.clientTop);
var g=_event_getScrollbarSize(),h={x:[a.clientWidth,a.clientWidth+g.x],y:[a.clientHeight,a.clientHeight+g.y]};
return h.x[0]<=f.x&&f.x<=h.x[1]||h.y[0]<=f.y&&f.y<=h.y[1]
}function splitEventSelector(a){var b=a.match(/^([a-z_]*)(.*)/i),c=trim(b[1]),d=trim(b[2].replace("@",""));
return{type:d?"delegate":"normal",event:c,selector:d}
}function _makeRandom(){return"e"+(new Date).getTime()+parseInt(Math.random()*100000000,10)
}function releaseEventHandlerForAllChildren(a){var b=a._element.all||a._element.getElementsByTagName("*"),c=b.length,d=null,e;
for(e=0;
e<c;
e++){d=b[e],d.nodeType==1&&d.__jindo__id&&jindo.$Element.eventManager.cleanUpUsingKey(d.__jindo__id,!0)
}b=d=null
}function canUseClassList(){var a="classList" in document.body&&"classList" in document.createElementNS("http://www.w3.org/2000/svg","g");
return canUseClassList=function(){return a
},canUseClassList()
}function cssNameToJavaScriptName(a){if(/^(\-(?:moz|ms|o|webkit))/.test(a)){var b=RegExp.$1;
a=a.replace(b,vendorPrefixObj[b])
}return a.replace(/(:?-(\w))/g,function(a,a,b){return b.toUpperCase()
})
}function getStyleIncludeVendorPrefix(a){var b=["Transition","Transform","Animation","Perspective"],c=["webkit","-","Moz","O","ms"],d="",e="",f="",g={},h=a||document.body.style;
for(var i=0,j=b.length;
i<j;
i++){d=b[i];
for(var k=0,l=c.length;
k<l;
k++){e=c[k],f=e!="-"?e+d:d.toLowerCase();
if(typeof h[f]!="undefined"){g[d.toLowerCase()]=f;
break
}g[d.toLowerCase()]=!1
}}return a?g:(getStyleIncludeVendorPrefix=function(){return g
},getStyleIncludeVendorPrefix())
}function getTransformStringForValue(a){var b=getStyleIncludeVendorPrefix(a),c=b.transform;
return b.transform==="MozTransform"?c="-moz-transform":b.transform==="webkitTransform"?c="-webkit-transform":b.transform==="OTransform"?c="-o-transform":b.transform==="msTransform"&&(c="-ms-transform"),a?c:(getTransformStringForValue=function(){return c
},getTransformStringForValue())
}function setOpacity(a,b){typeof document.body.style.webkitTransition!="undefined"?setOpacity=function(a,b){a.style.opacity=b
}:setOpacity=function(a,b){setTimeout(function(){a.style.opacity=b
},50)
},setOpacity(a,b)
}function _revisionCSSAttr(a,b){var c=jindo.$Element.hook(a);
return c?a=c:a=cssNameToJavaScriptName(a).replace(/^(animation|perspective|transform|transition)/i,function(a){return b[a.toLowerCase()]
}),a
}function changeTransformValue(a,b){return(a+"").replace(/([\s|-]*)(?:transform)/,function(a,c){return trim(c).length>0?a:c+getTransformStringForValue(b)
})
}function customEventAttach(a,b,c,d,e,f,g){if(!hasCustomEventListener(f.__jindo__id,b,c)){var h=getCustomEvent(b),i=new h,j=i.events;
i.real_listener.push(d),i.wrap_listener.push(e);
for(var k=0,l=j.length;
k<l;
k++){i["_fp"+j[k]]=jindo.$Fn(i[j[k]],i).bind(),g(a,j[k],c,i["_fp"+j[k]])
}addCustomEventListener(f,f.__jindo__id,b,c,i)
}else{var i=getCustomEventListener(f.__jindo__id,b,c).custom;
i.real_listener&&(i.real_listener.push(d),i.wrap_listener.push(e))
}}function normalCustomEventAttach(a,b,c,d,e,f){normalCustomEvent[b][c]||(normalCustomEvent[b][c]={},normalCustomEvent[b][c].ele=a,normalCustomEvent[b][c][d]={},normalCustomEvent[b][c][d].real_listener=[],normalCustomEvent[b][c][d].wrap_listener=[]),normalCustomEvent[b][c][d].real_listener.push(e),normalCustomEvent[b][c][d].wrap_listener.push(f)
}function customEventDetach(a,b,c,d,e,f){var g=getCustomEventListener(e.__jindo__id,b,c),h=g.custom,i=h.events;
for(var j=0,k=i.length;
j<k;
j++){f(a,i[j],c,h["_fp"+i[j]])
}}var jindo={};
if(window[jindoName]){var __old_jindo=window[jindoName];
for(var i in __old_jindo){jindo[i]=__old_jindo[i]
}}window[jindoName]=jindo;
var _j_ag=navigator.userAgent,_JINDO_IS_IE=_j_ag.indexOf("MSIE")>-1,_JINDO_IS_FF=_j_ag.indexOf("Firefox")>-1,_JINDO_IS_OP=_j_ag.indexOf("Opera")>-1,_JINDO_IS_SP=_j_ag.indexOf("Safari")>-1,_JINDO_IS_SF=_j_ag.indexOf("Apple")>-1,_JINDO_IS_CH=_j_ag.indexOf("Chrome")>-1,_JINDO_IS_WK=_j_ag.indexOf("WebKit")>-1,_JINDO_IS_MO=/(iPad|Mobile|Android|Nokia|webOS|BlackBerry|Opera Mini)/.test(_j_ag),tNumeric="Numeric",tElement="Element+",tDocument="Document+",tFunction="Function+",tArray="Array+",tString="String+",tBoolean="Boolean",tDate="Date+",tRegExp="RegExp",tNode="Node",tHash="Hash+",tNull="Null",tUndefined="Undefined",tWindow="Window+",t$Class="$Class",tArrayStyle="ArrayStyle",tForm="Form+",tVariant="Variant";
jindo.$Jindo=function(){var a=arguments.callee,b=a._cached;
if(b){return b
}if(!(this instanceof a)){return new a
}b||(a._cached=this),this.version="2.8.0"
},jindo.$Jindo.VERSION="2.8.0",jindo.$Jindo.compatible=function(){return !1
},jindo.$Jindo.mixin=function(a,b){g_checkVarType(arguments,{obj:["oDestination:"+tHash,"oSource:"+tHash]},"<static> $Jindo#mixin");
var c={};
for(var d in a){c[d]=a[d]
}for(d in b){b.hasOwnProperty(d)&&!jindo.$Jindo.isHash(b[d])&&(c[d]=b[d])
}return c
};
var _objToString=Object.prototype.toString,_slice=Array.prototype.slice;
jindo.$Error=function(a,b){this.message="\tmethod : "+b+"\n\tmessage : "+a,this.type="Jindo Custom Error",this.toString=function(){return this.message+"\n\t"+this.type
}
},jindo.$Except={CANNOT_USE_OPTION:"해당 옵션은 사용할 수 없습니다.",CANNOT_USE_HEADER:"type이 jsonp일때 header메서드는 사용할 수 없습니다.",PARSE_ERROR:"파싱중 에러가 발생했습니다.",NOT_FOUND_ARGUMENT:"파라미터가 없습니다.",NOT_STANDARD_QUERY:"css셀렉터가 정상적이지 않습니다.",INVALID_DATE:"날짜 포멧이 아닙니다.",REQUIRE_AJAX:"가 없습니다.",NOT_FOUND_ELEMENT:"엘리먼트가 없습니다.",HAS_FUNCTION_FOR_GROUP:"그룹으로 지우지 않는 경우 detach할 함수가 있어야 합니다.",NONE_ELEMENT:"에 해당하는 엘리먼트가 없습니다.",NOT_SUPPORT_SELECTOR:"는 지원하지 않는 selector입니다.",NOT_SUPPORT_METHOD:"desktop에서 지원하지 않는 메서드 입니다.",JSON_MUST_HAVE_ARRAY_HASH:"get메서드는 json타입이 hash나 array타입만 가능합니다.",MUST_APPEND_DOM:"document에 붙지 않은 엘리먼트를 기준 엘리먼트로 사용할 수 없습니다.",NOT_USE_CSS:"는 css를 사용 할수 없습니다.",NOT_WORK_DOMREADY:"domready이벤트는 iframe안에서 사용할 수 없습니다.",CANNOT_SET_OBJ_PROPERTY:"속성은 오브젝트입니다.\n클래스 속성이 오브젝트이면 모든 인스턴스가 공유하기 때문에 위험합니다.",NOT_FOUND_HANDLEBARS:"",INVALID_MEDIA_QUERY:""};
try{_slice.apply(document.documentElement.childNodes)
}catch(e){_toArray=function(a){var b=[],c=a.length;
for(var d=0;
d<c;
d++){b.push(a[d])
}return b
}
}jindo.$Jindo.isNumeric=function(a){return !isNaN(parseFloat(a))&&!jindo.$Jindo.isArray(a)&&isFinite(a)
},function(){var a={Element:1,Document:9};
for(var b in a){jindo.$Jindo["is"+b]=function(a,b){return function(c){return(new RegExp(a)).test(_objToString.call(c))?!0:_objToString.call(c)=="[object Object]"&&c!==null&&c!==undefined&&c.nodeType==b?!0:!1
}
}(b,a[b])
}var c=["Function","Array","String","Boolean","Date","RegExp"];
for(var b=0,d=c.length;
b<d;
b++){jindo.$Jindo["is"+c[b]]=function(a){return function(b){return _objToString.call(b)=="[object "+a+"]"
}
}(c[b])
}}(),jindo.$Jindo.isNode=function(a){try{return !!a&&!!a.nodeType
}catch(b){return !1
}},jindo.$Jindo.isHash=function(a){return _objToString.call(a)=="[object Object]"&&a!==null&&a!==undefined&&!a.nodeType&&!jindo.$Jindo.isWindow(a)
},jindo.$Jindo.isNull=function(a){return a===null
},jindo.$Jindo.isUndefined=function(a){return a===undefined
},jindo.$Jindo.isWindow=function(a){return a&&(a==window.top||a==a.window)
},jindo.$Jindo.Break=function(){if(!(this instanceof arguments.callee)){throw new arguments.callee
}},jindo.$Jindo.Continue=function(){if(!(this instanceof arguments.callee)){throw new arguments.callee
}},jindo.$Jindo._F=function(a){return a
},jindo.$Jindo._warn=function(a){window.console&&((console.warn&&console.warn(a),!0)||(console.log&&console.log(a),!0))
},jindo.$Jindo._maxWarn=function(a,b,c){a>b&&jindo.$Jindo._warn("추가적인 파라미터가 있습니다. : "+c)
},jindo.$Jindo.checkVarType=function(a,b,c){var c=c||a.callee.name||"anonymous",d=jindo.$Jindo,e=d.compatible(),f=a.callee["_checkVarType_"+e];
if(f){return f(a,b,c)
}var g=[];
g.push("var nArgsLen = aArgs.length;"),g.push("var $Jindo = "+jindoName+".$Jindo;"),e&&(g.push("var nMatchScore;"),g.push("var nMaxMatchScore = -1;"),g.push("var oFinalRet = null;"));
var h=[],i=0;
for(var j in b){b.hasOwnProperty(j)&&(i=Math.max(b[j].length,i))
}for(var j in b){if(b.hasOwnProperty(j)){var k=b[j],l=k.length,m=[],n=[],o=[];
e||(l<i?n.push("nArgsLen === "+l):n.push("nArgsLen >= "+l)),o.push("var oRet = new $Jindo._varTypeRetObj();");
var p=l;
for(var q=0;
q<l;
++q){/^([^:]+):([^\+]*)(\+?)$/.test(k[q]);
var r=RegExp.$1,s=RegExp.$2,t=RegExp.$3?!0:!1;
if(s==="Variant"){e&&n.push(q+" in aArgs"),o.push('oRet["'+r+'"] = aArgs['+q+"];"),p--
}else{if(d._varTypeList[s]){var u="tmp"+s+"_"+q;
m.push("var "+u+" = $Jindo._varTypeList."+s+"(aArgs["+q+"], "+t+");"),n.push(u+" !== "+jindoName+".$Jindo.VARTYPE_NOT_MATCHED"),o.push('oRet["'+r+'"] = '+u+";")
}else{if(/^\$/.test(s)&&jindo[s]){var v="",w;
t&&(w={$Fn:"Function",$S:"String",$A:"Array",$H:"Hash",$ElementList:"Array"}[s]||s.replace(/^\$/,""),jindo.$Jindo["is"+w]&&(v=" || $Jindo.is"+w+"(vNativeArg_"+q+")")),n.push("(aArgs["+q+"] instanceof "+jindoName+"."+s+v+")"),o.push('oRet["'+r+'"] = '+jindoName+"."+s+"(aArgs["+q+"]);")
}else{if(!jindo.$Jindo["is"+s]){throw new Error("VarType("+s+") Not Found")
}var v="",x;
t&&(x={Function:"$Fn",String:"$S",Array:"$A",Hash:"$H"}[s]||"$"+s,jindo[x]&&(v=" || aArgs["+q+"] instanceof "+jindoName+"."+x)),n.push("($Jindo.is"+s+"(aArgs["+q+"])"+v+")"),o.push('oRet["'+r+'"] = vNativeArg_'+q+";")
}}}}o.push('oRet.__type = "'+j+'";'),e?(o.push("nMatchScore = "+(l*1000+p*10)+" + (nArgsLen === "+l+" ? 1 : 0);"),o.push("if (nMatchScore > nMaxMatchScore) {"),o.push("    nMaxMatchScore = nMatchScore;"),o.push("    oFinalRet = oRet;"),o.push("}")):o.push("return oRet;"),h.push(m.join("\n")),n.length&&h.push("if ("+n.join(" && ")+") {"),h.push(o.join("\n")),n.length&&h.push("}")
}}g.push(" $Jindo._maxWarn(nArgsLen,"+i+',"'+c+'");');
for(var q=0;
q<i;
++q){var y="aArgs["+q+"]";
g.push(["var vNativeArg_",q," = ",y," && ",y,".$value ? ",y,".$value() : ",y+";"].join(""))
}return e||h.push("$Jindo.checkVarType._throwException(aArgs, oRules, sFuncName);"),h.push("return oFinalRet;"),a.callee["_checkVarType_"+e]=f=new Function("aArgs,oRules,sFuncName",g.join("\n")+h.join("\n")),f(a,b,c)
};
var g_checkVarType=jindo.$Jindo.checkVarType;
jindo.$Jindo._varTypeRetObj=function(){},jindo.$Jindo._varTypeRetObj.prototype.toString=function(){return this.__type
},jindo.$Jindo.checkVarType._throwException=function(a,b,c){var d=function(a){for(var b in jindo){if(jindo.hasOwnProperty(b)){var c=jindo[b];
if(typeof c!="function"){continue
}if(a instanceof c){return b
}}}var d=jindo.$Jindo;
for(var b in d){if(d.hasOwnProperty(b)){if(!/^is(.+)$/.test(b)){continue
}var e=RegExp.$1,f=d[b];
if(f(a)){return e
}}}return"Unknown"
},e=function(a,b,c){var d=["잘못된 파라미터입니다.",""];
a&&(d.push("호출한 형태 :"),d.push("\t"+a),d.push(""));
if(b.length){d.push("사용 가능한 형태 :");
for(var e=0,f=b.length;
e<f;
e++){d.push("\t"+b[e])
}d.push("")
}return c&&(d.push("매뉴얼 페이지 :"),d.push("\t"+c),d.push("")),d.unshift(),d.join("\n")
},f=[];
for(var g=0,h=a.length;
g<h;
++g){try{f.push(d(a[g]))
}catch(i){f.push("Unknown")
}}var j=c+"("+f.join(", ")+")",k=[];
for(var l in b){if(b.hasOwnProperty(l)){var m=b[l];
k.push(""+c+"("+m.join(", ").replace(/(^|,\s)[^:]+:/g,"$1")+")")
}}var n;
throw /(\$\w+)#(\w+)?/.test(c)&&(n="http://jindo.dev.naver.com/docs/jindo/archive/Jindo2-2.8.0/desktop/ko/classes/"+encodeURIComponent(RegExp.$1)+".html#method_"+RegExp.$2),new TypeError(e(j,k,n))
};
var _getElementById=function(a,b){docEle=a.documentElement;
var c="jindo"+(new Date).getTime(),d=a.createElement("div");
return d.style.display="none",typeof MSApp!="undefined"?MSApp.execUnsafeLocalFunction(function(){d.innerHTML="<input type='hidden' name='"+c+"'/>"
}):d.innerHTML="<input type='hidden' name='"+c+"'/>",docEle.insertBefore(d,docEle.firstChild),a.getElementById(c)?_getElementById=function(a,b){var c=a.getElementById(b);
if(c==null){return c
}if(c.attributes.id&&c.attributes.id.value==b){return c
}var d=a.all[b];
for(var e=1;
e<d.length;
e++){if(d[e].attributes.id&&d[e].attributes.id.value==b){return d[e]
}}}:_getElementById=function(a,b){return a.getElementById(b)
},docEle.removeChild(d),_getElementById(a,b)
};
jindo.$Jindo.varType=function(){var a=this.checkVarType(arguments,{s4str:["sTypeName:"+tString,"fpFunc:"+tFunction],s4obj:["oTypeLists:"+tHash],g:["sTypeName:"+tString]}),b=jindo.$Jindo._denyTypeListComma;
switch(a+""){case"s4str":var c=","+a.sTypeName.replace(/\+$/,"")+",";
if(b.indexOf(c)>-1){throw new Error("Not allowed Variable Type")
}return this._varTypeList[a.sTypeName]=a.fpFunc,this;
case"s4obj":var d=a.oTypeLists;
for(var e in d){d.hasOwnProperty(e)&&(fpFunc=d[e],arguments.callee.call(this,e,fpFunc))
}return this;
case"g":return this._varTypeList[a.sTypeName]
}},jindo.$Jindo.VARTYPE_NOT_MATCHED={},function(){var a=jindo.$Jindo._varTypeList={},b=jindo.$Jindo,c=b.VARTYPE_NOT_MATCHED;
a.Numeric=function(a){return b.isNumeric(a)?a*1:c
},a.Hash=function(a,d){return d&&jindo.$H&&a instanceof jindo.$H?a.$value():b.isHash(a)?a:c
},a.$Class=function(a,d){return !b.isFunction(a)||!a.extend?c:a
};
var d=[];
for(var e in b){b.hasOwnProperty(e)&&/^is(.+)$/.test(e)&&d.push(RegExp.$1)
}b._denyTypeListComma=d.join(","),b.varType("ArrayStyle",function(a,d){return a?/(Arguments|NodeList|HTMLCollection|global|Window)/.test(_objToString.call(a))||/Object/.test(_objToString.call(a))&&b.isNumeric(a.length)?_toArray(a):c:c
}),b.varType("Form",function(a,b){return a?(b&&a.$value&&(a=a.$value()),a.tagName&&a.tagName.toUpperCase()=="FORM"?a:c):c
})
}(),jindo.$=function(a){if(!arguments.length){throw new jindo.$Error(jindo.$Except.NOT_FOUND_ARGUMENT,"$")
}var b=[],c=arguments,d=c.length,e=c[d-1],f=document,g=null,h=/^<([a-z]+|h[1-5])>$/i,i=/^<([a-z]+|h[1-5])(\s+[^>]+)?>/i;
d>1&&typeof e!="string"&&e.body&&(c=Array.prototype.slice.apply(c,[0,d-1]),f=e);
for(var j=0;
j<d;
j++){g=c[j]&&c[j].$value?c[j].$value():c[j];
if(jindo.$Jindo.isString(g)||jindo.$Jindo.isNumeric(g)){g+="",g=g.replace(/^\s+|\s+$/g,""),g=g.replace(/<!--(.|\n)*?-->/g,"");
if(g.indexOf("<")>-1){if(h.test(g)){g=f.createElement(RegExp.$1)
}else{if(i.test(g)){var k={thead:"table",tbody:"table",tr:"tbody",td:"tr",dt:"dl",dd:"dl",li:"ul",legend:"fieldset",option:"select",source:"audio"},l=RegExp.$1.toLowerCase(),m=_createEle(k[l],g,f);
for(var j=0,n=m.length;
j<n;
j++){b.push(m[j])
}g=null
}}}else{g=_getElementById(f,g)
}}g&&g.nodeType&&(b[b.length]=g)
}return b.length>1?b:b[0]||null
},jindo.$Class=function(oDef){function typeClass(){var t=this,a=[],superFunc=function(m,superClass,func){if(m!="constructor"&&func.toString().indexOf("$super")>-1){var funcArg=func.toString().replace(/function\s*\(([^\)]*)[\w\W]*/g,"$1").split(","),funcStr=func.toString().replace(/function[^{]*{/,"").replace(/(\w|\.?)(this\.\$super|this)/g,function(a,b,c){return b?a:c+".$super"
});
funcStr=funcStr.substr(0,funcStr.length-1),func=superClass[m]=eval("false||function("+funcArg.join(",")+"){"+funcStr+"}")
}return function(){var a=this.$this[m],b=this.$this,c=(b[m]=func).apply(b,arguments);
return b[m]=a,c
}
};
while(t._$superClass!==undefined){t.$super=new Object,t.$super.$this=this;
for(var x in t._$superClass.prototype){t._$superClass.prototype.hasOwnProperty(x)&&(this[x]===undefined&&x!="$init"&&(this[x]=t._$superClass.prototype[x]),x!="constructor"&&x!="_$superClass"&&typeof t._$superClass.prototype[x]=="function"?t.$super[x]=superFunc(x,t._$superClass,t._$superClass.prototype[x]):t.$super[x]=t._$superClass.prototype[x])
}typeof t.$super.$init=="function"&&(a[a.length]=t),t=t.$super
}for(var i=a.length-1;
i>-1;
i--){a[i].$super.$init.apply(a[i].$super,arguments)
}if(this.$autoBind){for(var i in this){/^\_/.test(i)&&(this[i]=jindo.$Fn(this[i],this).bind())
}}typeof this.$init=="function"&&this.$init.apply(this,arguments)
}var oArgs=g_checkVarType(arguments,{"4obj":["oDef:"+tHash]},""+t$Class);
if(oDef.$static!==undefined){var i=0,x;
for(x in oDef){oDef.hasOwnProperty(x)&&(x=="$static"||i++)
}for(x in oDef.$static){oDef.$static.hasOwnProperty(x)&&(typeClass[x]=oDef.$static[x])
}if(!i){return oDef.$static
}delete oDef.$static
}return typeClass.prototype=oDef,typeClass.prototype.constructor=typeClass,typeClass.prototype.kindOf=function(a){return _kindOf(this.constructor.prototype,a.prototype)
},typeClass.extend=jindo.$Class.extend,typeClass
},jindo.$Class.extend=function(a){var b=g_checkVarType(arguments,{"4obj":["oDef:"+t$Class]},"<static> $Class#extend");
this.prototype._$superClass=a;
var c=a.prototype;
for(var d in c){jindo.$Jindo.isHash(c[d])&&jindo.$Jindo._warn(jindo.$Except.CANNOT_SET_OBJ_PROPERTY)
}for(var e in a){if(a.hasOwnProperty(e)){if(e=="prototype"){continue
}this[e]=a[e]
}}return this
},jindo.$$=jindo.cssquery=function(){function GEBID(a,b,c){if(a.nodeType===9||a.parentNode&&a.parentNode.tagName){return _getElementById(c,b)
}var d=a.getElementsByTagName("*");
for(var e=0,f=d.length;
e<f;
e++){if(d[e].id===b){return d[e]
}}}function getElementsByClass(a,b,c){var d=new Array;
b==null&&(b=document),c==null&&(c="*");
var e=b.getElementsByTagName(c),f=e.length,g=new RegExp("(^|\\s)"+a+"(\\s|$)");
for(i=0,j=0;
i<f;
i++){g.test(e[i].className)&&(d[j]=e[i],j++)
}return d
}var sVersion="3.0",debugOption={repeat:1},UID=1,cost=0,validUID={},bSupportByClassName=document.getElementsByClassName?!0:!1,safeHTML=!1,getUID4HTML=function(a){var b=safeHTML?a._cssquery_UID&&a._cssquery_UID[0]:a._cssquery_UID;
return b&&validUID[b]==a?b:(b=UID++,a._cssquery_UID=safeHTML?[b]:b,validUID[b]=a,b)
},getUID4XML=function(a){var b=a.getAttribute("_cssquery_UID"),c=safeHTML?b&&b[0]:b;
return c||(c=UID++,a.setAttribute("_cssquery_UID",safeHTML?[c]:c)),c
},getUID=getUID4HTML,uniqid=function(a){return(a||"")+(new Date).getTime()+parseInt(Math.random()*100000000,10)
},getChilds_dontShrink=function(a,b,c){return bSupportByClassName&&c?a.getElementsByClassName?a.getElementsByClassName(c):a.querySelectorAll?a.querySelectorAll(c):getElementsByClass(c,a,b):b=="*"?a.all||a.getElementsByTagName(b):a.getElementsByTagName(b)
},clearKeys=function(){backupKeys._keys={}
},oDocument_dontShrink=document,bXMLDocument=!1,backupKeys=function(a){var b=backupKeys._keys;
a=a.replace(/'(\\'|[^'])*'/g,function(a){var c=uniqid("QUOT");
return b[c]=a,c
}),a=a.replace(/"(\\"|[^"])*"/g,function(a){var c=uniqid("QUOT");
return b[c]=a,c
}),a=a.replace(/\[(.*?)\]/g,function(a,c){if(c.indexOf("ATTR")==0){return a
}var d="["+uniqid("ATTR")+"]";
return b[d]=a,d
});
var c;
do{c=!1,a=a.replace(/\(((\\\)|[^)|^(])*)\)/g,function(a,d){if(d.indexOf("BRCE")==0){return a
}var e="_"+uniqid("BRCE");
return b[e]=a,c=!0,e
})
}while(c);
return a
},restoreKeys=function(a,b){var c=backupKeys._keys,d,e=b?/(\[ATTR[0-9]+\])/g:/(QUOT[0-9]+|\[ATTR[0-9]+\])/g;
do{d=!1,a=a.replace(e,function(a){return c[a]?(d=!0,c[a]):a
})
}while(d);
return a=a.replace(/_BRCE[0-9]+/g,function(a){return c[a]?c[a]:a
}),a
},restoreString=function(sKey){var oKeys=backupKeys._keys,sOrg=oKeys[sKey];
return sOrg?eval(sOrg):sKey
},wrapQuot=function(a){return'"'+a.replace(/"/g,'\\"')+'"'
},getStyleKey=function(a){return/^@/.test(a)?a.substr(1):null
},getCSS=function(a,b){return a.currentStyle?(b=="float"&&(b="styleFloat"),a.currentStyle[b]||a.style[b]):window.getComputedStyle?oDocument_dontShrink.defaultView.getComputedStyle(a,null).getPropertyValue(b.replace(/([A-Z])/g,"-$1").toLowerCase())||a.style[b]:(b=="float"&&_JINDO_IS_IE&&(b="styleFloat"),a.style[b])
},oCamels={accesskey:"accessKey",cellspacing:"cellSpacing",cellpadding:"cellPadding","class":"className",colspan:"colSpan","for":"htmlFor",maxlength:"maxLength",readonly:"readOnly",rowspan:"rowSpan",tabindex:"tabIndex",valign:"vAlign"},getDefineCode=function(a){var b,c;
if(bXMLDocument){b='oEl.getAttribute("'+a+'",2)'
}else{if(c=getStyleKey(a)){a="$$"+c,b='getCSS(oEl, "'+c+'")'
}else{switch(a){case"checked":b='oEl.checked + ""';
break;
case"disabled":b='oEl.disabled + ""';
break;
case"enabled":b='!oEl.disabled + ""';
break;
case"readonly":b='oEl.readOnly + ""';
break;
case"selected":b='oEl.selected + ""';
break;
default:oCamels[a]?b="oEl."+oCamels[a]:b='oEl.getAttribute("'+a+'",2)'
}}}return"_"+a.replace(/\-/g,"_")+" = "+b
},getReturnCode=function(a){var b=getStyleKey(a.key),c="_"+(b?"$$"+b:a.key);
c=c.replace(/\-/g,"_");
var d=a.val?wrapQuot(a.val):"";
switch(a.op){case"~=":return"("+c+' && (" " + '+c+' + " ").indexOf(" " + '+d+' + " ") > -1)';
case"^=":return"("+c+" && "+c+".indexOf("+d+") == 0)";
case"$=":return"("+c+" && "+c+".substr("+c+".length - "+a.val.length+") == "+d+")";
case"*=":return"("+c+" && "+c+".indexOf("+d+") > -1)";
case"!=":return"("+c+" != "+d+")";
case"=":return"("+c+" == "+d+")"
}return"("+c+")"
},getNodeIndex=function(a){var b=getUID(a),c=oNodeIndexes[b]||0;
if(c==0){for(var d=(a.parentNode||a._IE5_parentNode).firstChild;
d;
d=d.nextSibling){if(d.nodeType!=1){continue
}c++,setNodeIndex(d,c)
}c=oNodeIndexes[b]
}return c
},oNodeIndexes={},setNodeIndex=function(a,b){var c=getUID(a);
oNodeIndexes[c]=b
},unsetNodeIndexes=function(){setTimeout(function(){oNodeIndexes={}
},0)
},oPseudoes_dontShrink={contains:function(a,b){return(a.innerText||a.textContent||"").indexOf(b)>-1
},"last-child":function(a,b){for(a=a.nextSibling;
a;
a=a.nextSibling){if(a.nodeType==1){return !1
}}return !0
},"first-child":function(a,b){for(a=a.previousSibling;
a;
a=a.previousSibling){if(a.nodeType==1){return !1
}}return !0
},"only-child":function(a,b){var c=0;
for(var d=(a.parentNode||a._IE5_parentNode).firstChild;
d;
d=d.nextSibling){d.nodeType==1&&c++;
if(c>1){return !1
}}return c?!0:!1
},empty:function(a,b){return a.firstChild?!1:!0
},"nth-child":function(a,b,c){var d=getNodeIndex(a);
return d%b==c
},"nth-last-child":function(a,b,c){var d=(a.parentNode||a._IE5_parentNode).lastChild;
for(;
d;
d=d.previousSibling){if(d.nodeType==1){break
}}var e=getNodeIndex(d),f=getNodeIndex(a),g=e-f+1;
return g%b==c
},checked:function(a){return !!a.checked
},selected:function(a){return !!a.selected
},enabled:function(a){return !a.disabled
},disabled:function(a){return !!a.disabled
}},getExpression=function(a){var b={defines:"",returns:"true"},a=restoreKeys(a,!0),c=[],d=[],e=[],f,g,a=a.replace(/:([\w-]+)(\(([^)]*)\))?/g,function(a,c,d,f){switch(c){case"not":var g=getExpression(f),h=g.defines,i=g.returnsID+g.returnsTAG+g.returns;
e.push("!(function() { "+h+" return "+i+" })()");
break;
case"nth-child":case"nth-last-child":f=restoreString(f),f=="even"?f="2n":f=="odd"&&(f="2n+1");
var j,k,l=f.match(/([0-9]*)n([+-][0-9]+)*/);
l?(j=l[1]||1,k=l[2]||0):(j=Infinity,k=parseInt(f,10)),e.push("oPseudoes_dontShrink["+wrapQuot(c)+"](oEl, "+j+", "+k+")");
break;
case"first-of-type":case"last-of-type":c=c=="first-of-type"?"nth-of-type":"nth-last-of-type",f=1;
case"nth-of-type":case"nth-last-of-type":f=restoreString(f),f=="even"?f="2n":f=="odd"&&(f="2n+1");
var j,k;
/([0-9]*)n([+-][0-9]+)*/.test(f)?(j=parseInt(RegExp.$1,10)||1,k=parseInt(RegExp.$2,20)||0):(j=Infinity,k=parseInt(f,10)),b.nth=[j,k,c];
break;
default:f=f?restoreString(f):"",e.push("oPseudoes_dontShrink["+wrapQuot(c)+"](oEl, "+wrapQuot(f)+")")
}return""
}),a=a.replace(/\[(@?[\w-]+)(([!^~$*]?=)([^\]]*))?\]/g,function(a,b,d,e,f){b=restoreString(b),f=restoreString(f);
if(b=="checked"||b=="disabled"||b=="enabled"||b=="readonly"||b=="selected"){f||(e="=",f="true")
}return c.push({key:b,op:e,val:f}),""
}),h=null,a=a.replace(/\.([\w-]+)/g,function(a,b){return c.push({key:"class",op:"~=",val:b}),h||(h=b),""
}),a=a.replace(/#([\w-]+)/g,function(a,b){return bXMLDocument?c.push({key:"id",op:"=",val:b}):f=b,""
});
g=a=="*"?"":a;
var i={};
for(var j=0,k;
k=c[j];
j++){var l=k.key;
i[l]||d.push(getDefineCode(l)),e.unshift(getReturnCode(k)),i[l]=!0
}return d.length&&(b.defines="var "+d.join(",")+";"),e.length&&(b.returns=e.join("&&")),b.quotID=f?wrapQuot(f):"",b.quotTAG=g?wrapQuot(bXMLDocument?g:g.toUpperCase()):"",bSupportByClassName&&(b.quotCLASS=h?wrapQuot(h):""),b.returnsID=f?"oEl.id == "+b.quotID+" && ":"",b.returnsTAG=g&&g!="*"?"oEl.tagName == "+b.quotTAG+" && ":"",b
},splitToParts=function(a){var b=[],c=" ",d=a.replace(/(.*?)\s*(!?[+>~ ]|!)\s*/g,function(a,d,e){return d&&b.push({rel:c,body:d}),c=e.replace(/\s+$/g,"")||" ",""
});
return d&&b.push({rel:c,body:d}),b
},isNth_dontShrink=function(a,b,c,d,e){var f=0;
for(var g=a;
g;
g=g[e]){g.nodeType==1&&(!b||b==g.tagName)&&f++
}return f%c==d
},compileParts=function(aParts){var aPartExprs=[];
for(var i=0,oPart;
oPart=aParts[i];
i++){aPartExprs.push(getExpression(oPart.body))
}var sFunc="",sPushCode="aRet.push(oEl); if (oOptions.single) { bStop = true; }";
for(var i=aParts.length-1,oPart;
oPart=aParts[i];
i--){var oExpr=aPartExprs[i],sPush=(debugOption.callback?"cost++;":"")+oExpr.defines,sReturn="if (bStop) {"+(i==0?"return aRet;":"return;")+"}";
oExpr.returns=="true"?sPush+=(sFunc?sFunc+"(oEl);":sPushCode)+sReturn:sPush+="if ("+oExpr.returns+") {"+(sFunc?sFunc+"(oEl);":sPushCode)+sReturn+"}";
var sCheckTag="oEl.nodeType != 1";
oExpr.quotTAG&&(sCheckTag="oEl.tagName != "+oExpr.quotTAG);
var sTmpFunc="(function(oBase"+(i==0?", oOptions) { var bStop = false; var aRet = [];":") {");
oExpr.nth&&(sPush="if (isNth_dontShrink(oEl, "+(oExpr.quotTAG?oExpr.quotTAG:"false")+","+oExpr.nth[0]+","+oExpr.nth[1]+',"'+(oExpr.nth[2]=="nth-of-type"?"previousSibling":"nextSibling")+'")) {'+sPush+"}");
switch(oPart.rel){case" ":oExpr.quotID?sTmpFunc+="var oEl = GEBID(oBase,"+oExpr.quotID+",oDocument_dontShrink);var oCandi = oEl;for (; oCandi; oCandi = (oCandi.parentNode || oCandi._IE5_parentNode)) {if (oCandi == oBase) break;}if (!oCandi || "+sCheckTag+") return aRet;"+sPush:sTmpFunc+="var aCandi = getChilds_dontShrink(oBase, "+(oExpr.quotTAG||'"*"')+", "+(oExpr.quotCLASS||"null")+");for (var i = 0, oEl; oEl = aCandi[i]; i++) {"+(oExpr.quotCLASS?"if ("+sCheckTag+") continue;":"")+sPush+"}";
break;
case">":oExpr.quotID?sTmpFunc+="var oEl = GEBID(oBase,"+oExpr.quotID+",oDocument_dontShrink);if ((oEl.parentNode || oEl._IE5_parentNode) != oBase || "+sCheckTag+") return aRet;"+sPush:sTmpFunc+="for (var oEl = oBase.firstChild; oEl; oEl = oEl.nextSibling) {if ("+sCheckTag+") { continue; }"+sPush+"}";
break;
case"+":oExpr.quotID?sTmpFunc+="var oEl = GEBID(oBase,"+oExpr.quotID+",oDocument_dontShrink);var oPrev;for (oPrev = oEl.previousSibling; oPrev; oPrev = oPrev.previousSibling) { if (oPrev.nodeType == 1) break; }if (!oPrev || oPrev != oBase || "+sCheckTag+") return aRet;"+sPush:sTmpFunc+="for (var oEl = oBase.nextSibling; oEl; oEl = oEl.nextSibling) { if (oEl.nodeType == 1) break; }if (!oEl || "+sCheckTag+") { return aRet; }"+sPush;
break;
case"~":oExpr.quotID?sTmpFunc+="var oEl = GEBID(oBase,"+oExpr.quotID+",oDocument_dontShrink);var oCandi = oEl;for (; oCandi; oCandi = oCandi.previousSibling) { if (oCandi == oBase) break; }if (!oCandi || "+sCheckTag+") return aRet;"+sPush:sTmpFunc+="for (var oEl = oBase.nextSibling; oEl; oEl = oEl.nextSibling) {if ("+sCheckTag+") { continue; }if (!markElement_dontShrink(oEl, "+i+")) { break; }"+sPush+"}";
break;
case"!":oExpr.quotID?sTmpFunc+="var oEl = GEBID(oBase,"+oExpr.quotID+",oDocument_dontShrink);for (; oBase; oBase = (oBase.parentNode || oBase._IE5_parentNode)) { if (oBase == oEl) break; }if (!oBase || "+sCheckTag+") return aRet;"+sPush:sTmpFunc+="for (var oEl = (oBase.parentNode || oBase._IE5_parentNode); oEl; oEl = (oEl.parentNode || oEl._IE5_parentNode)) {if ("+sCheckTag+") { continue; }"+sPush+"}";
break;
case"!>":oExpr.quotID?sTmpFunc+="var oEl = GEBID(oBase,"+oExpr.quotID+",oDocument_dontShrink);var oRel = (oBase.parentNode || oBase._IE5_parentNode);if (!oRel || oEl != oRel || ("+sCheckTag+")) return aRet;"+sPush:sTmpFunc+="var oEl = (oBase.parentNode || oBase._IE5_parentNode);if (!oEl || "+sCheckTag+") { return aRet; }"+sPush;
break;
case"!+":oExpr.quotID?sTmpFunc+="var oEl = GEBID(oBase,"+oExpr.quotID+",oDocument_dontShrink);var oRel;for (oRel = oBase.previousSibling; oRel; oRel = oRel.previousSibling) { if (oRel.nodeType == 1) break; }if (!oRel || oEl != oRel || ("+sCheckTag+")) return aRet;"+sPush:sTmpFunc+="for (oEl = oBase.previousSibling; oEl; oEl = oEl.previousSibling) { if (oEl.nodeType == 1) break; }if (!oEl || "+sCheckTag+") { return aRet; }"+sPush;
break;
case"!~":oExpr.quotID?sTmpFunc+="var oEl = GEBID(oBase,"+oExpr.quotID+",oDocument_dontShrink);var oRel;for (oRel = oBase.previousSibling; oRel; oRel = oRel.previousSibling) { if (oRel.nodeType != 1) { continue; }if (oRel == oEl) { break; }}if (!oRel || ("+sCheckTag+")) return aRet;"+sPush:sTmpFunc+="for (oEl = oBase.previousSibling; oEl; oEl = oEl.previousSibling) {if ("+sCheckTag+") { continue; }if (!markElement_dontShrink(oEl, "+i+")) { break; }"+sPush+"}"
}sTmpFunc+=(i==0?"return aRet;":"")+"})",sFunc=sTmpFunc
}return eval("var fpCompiled = "+sFunc+";"),fpCompiled
},parseQuery=function(a){var b=a,c=arguments.callee,d=c._cache[b];
if(!d){a=backupKeys(a);
var e=splitToParts(a);
d=c._cache[b]=compileParts(e),d.depth=e.length
}return d
};
parseQuery._cache={};
var parseTestQuery=function(sQuery){var fpSelf=arguments.callee,aSplitQuery=backupKeys(sQuery).split(/\s*,\s*/),aResult=[],nLen=aSplitQuery.length,aFunc=[];
for(var i=0;
i<nLen;
i++){aFunc.push(function(sQuery){var sCacheKey=sQuery,fpFunction=fpSelf._cache[sCacheKey];
if(!fpFunction){sQuery=backupKeys(sQuery);
var oExpr=getExpression(sQuery);
eval("fpFunction = function(oEl) { "+oExpr.defines+"return ("+oExpr.returnsID+oExpr.returnsTAG+oExpr.returns+"); };")
}return fpFunction
}(restoreKeys(aSplitQuery[i])))
}return aFunc
};
parseTestQuery._cache={};
var distinct=function(a){var b=[],c={};
for(var d=0,e;
e=a[d];
d++){var f=getUID(e);
if(c[f]){continue
}b.push(e),c[f]=!0
}return b
},markElement_dontShrink=function(a,b){var c=getUID(a);
return cssquery._marked[b][c]?!1:(cssquery._marked[b][c]=!0,!0)
},getParentElement=function(a){var b;
a=a&&a.$value?a.$value():a;
if(jindo.$Jindo.isString(a)){try{a=document.getElementById(a)
}catch(c){a=document
}}return a||(a=document),b=a.nodeType,b!=1&&b!=9&&b!=10&&b!=11&&(a=a.ownerDocument||a.document),a||a.ownerDocument||a.document
},oResultCache=null,bUseResultCache=!1,bExtremeMode=!1,old_cssquery=function(a,b,c){var d=g_checkVarType(arguments,{"4str":["sQuery:"+tString],"4var":["sQuery:"+tString,"oParent:"+tVariant],"4var2":["sQuery:"+tString,"oParent:"+tVariant,"oOptions:"+tVariant]},"cssquery");
b=getParentElement(b),c=c&&c.$value?c.$value():c;
if(typeof a=="object"){var e={};
for(var f in a){a.hasOwnProperty(f)&&(e[f]=arguments.callee(a[f],b,c))
}return e
}cost=0;
var g=(new Date).getTime(),h;
for(var i=0,j=debugOption.repeat;
i<j;
i++){h=function(a,b,c){c?c.oneTimeOffCache||(c.oneTimeOffCache=!1):c={oneTimeOffCache:!1},cssquery.safeHTML(c.oneTimeOffCache),b||(b=document),oDocument_dontShrink=b.ownerDocument||b.document||b;
if(/\bMSIE\s([0-9]+(\.[0-9]+)*);/.test(_j_ag)&&parseFloat(RegExp.$1)<6){try{oDocument_dontShrink.location
}catch(d){oDocument_dontShrink=document
}oDocument_dontShrink.firstChild=oDocument_dontShrink.getElementsByTagName("html")[0],oDocument_dontShrink.firstChild._IE5_parentNode=oDocument_dontShrink
}bXMLDocument=typeof XMLDocument!="undefined"?oDocument_dontShrink.constructor===XMLDocument:!oDocument_dontShrink.location,getUID=bXMLDocument?getUID4XML:getUID4HTML,clearKeys();
var e=backupKeys(a).split(/\s*,\s*/),f=[],g=e.length;
for(var h=0;
h<g;
h++){e[h]=restoreKeys(e[h])
}for(var h=0;
h<g;
h++){var i=e[h],j=null,k=i+(c.single?"_single":""),l=bUseResultCache?oResultCache[k]:null;
if(l){for(var m=0,n;
n=l[m];
m++){if(n.parent==b){j=n.result;
break
}}}if(!j){var o=parseQuery(i);
cssquery._marked=[];
for(var m=0,p=o.depth;
m<p;
m++){cssquery._marked.push({})
}j=distinct(o(b,c)),bUseResultCache&&!c.oneTimeOffCache&&(oResultCache[k] instanceof Array||(oResultCache[k]=[]),oResultCache[k].push({parent:b,result:j}))
}f=f.concat(j)
}return unsetNodeIndexes(),f
}(a,b,c)
}return g=(new Date).getTime()-g,debugOption.callback&&debugOption.callback(a,cost,g),h
},cssquery;
if(document.querySelectorAll){function _isNonStandardQueryButNotException(a){return/\[\s*(?:checked|selected|disabled)/.test(a)
}function _commaRevise(a,b){return a.replace(/\,/gi,b)
}function _startCombinator(a){return/^[~>+]/.test(a)
}function _addQueryId(a,b){var c,d;
return a.id?c="#"+a.id:(d="C"+(new Date).getTime()+Math.floor(Math.random()*1000000),a.setAttribute(b,d),c="["+b+"="+d+"]"),c
}var _div=document.createElement("div");
cssquery=function(a,b,c){var d=g_checkVarType(arguments,{"4str":["sQuery:"+tString],"4var":["sQuery:"+tString,"oParent:"+tVariant],"4var2":["sQuery:"+tString,"oParent:"+tVariant,"oOptions:"+tVariant]},"cssquery"),e,f,g,h,i,j,k,l;
b=getParentElement(b),c=c&&c.$value?c.$value():c,a=a.replace(/\[(.*?)\=(\d*)\]/g,function(a,b,c){return"["+b+"='"+c+"']"
}),g=b.nodeType;
try{if(_isNonStandardQueryButNotException(a)){return old_cssquery(a,b,c)
}l=(b.tagName||"").toUpperCase();
if(g!==9&&l!="HTML"){g===11&&(b=b.cloneNode(!0),k=_div.cloneNode(!0),k.appendChild(b),b=k,k=null),j=_addQueryId(b,"queryid"),h=!0,(_parent=b.parentNode)||l==="BODY"||jindo.$Element._contain((b.ownerDocument||b.document).body,b)?(i=b,b=_parent):(k=_div.cloneNode(!0),i=b,k.appendChild(i),b=k),a=_commaRevise(j+" "+a,", "+j+" ")
}else{b=b.ownerDocument||b.document||b;
if(_startCombinator(a)){return[]
}}c&&c.single?f=[b.querySelector(a)]:f=_toArray(b.querySelectorAll(a))
}catch(m){f=old_cssquery(a,b,c)
}return h&&(i.removeAttribute("queryid"),k=null),f
}
}else{cssquery=old_cssquery
}return cssquery.test=function(a,b){clearKeys();
try{var c=g_checkVarType(arguments,{"4ele":["oEl:"+tElement,"sQuery:"+tString],"4doc":["oEl:"+tDocument,"sQuery:"+tString]},"<static> cssquery#test");
eEl=c.oEl,b=c.sQuery
}catch(d){return !1
}var e=parseTestQuery(b);
for(var f=0,g=e.length;
f<g;
f++){if(e[f](a)){return !0
}}return !1
},cssquery.useCache=function(a){return a!==undefined&&(bUseResultCache=a,cssquery.clearCache()),bUseResultCache
},cssquery.clearCache=function(){oResultCache={}
},cssquery.getSingle=function(a,b,c){return c=c&&c.$value?c.$value():c,cssquery(a,b,{single:!0,oneTimeOffCache:c?!!c.oneTimeOffCache:!1})[0]||null
},cssquery.xpath=function(a,b){return a=a&&a.$value?a.$value():a,a=a.replace(/\/(\w+)(\[([0-9]+)\])?/g,function(a,b,c,d){return d=d||"1",">"+b+":nth-of-type("+d+")"
}),old_cssquery(a,b)
},cssquery.debug=function(a,b){var c=g_checkVarType(arguments,{"4fun":["fpCallback:"+tFunction],"4fun2":["fpCallback:"+tFunction,"nRepeat:"+tNumeric]},"<static> cssquery#debug");
debugOption.callback=c.fpCallback,debugOption.repeat=c.nRepeat||1
},cssquery.safeHTML=function(a){return arguments.length>0&&(safeHTML=a&&_JINDO_IS_IE),safeHTML||!_JINDO_IS_IE
},cssquery.version=sVersion,cssquery.release=function(){_JINDO_IS_IE&&(delete validUID,validUID={},bUseResultCache&&cssquery.clearCache())
},cssquery._getCacheInfo=function(){return{uidCache:validUID,eleCache:oResultCache}
},cssquery._resetUID=function(){UID=0
},cssquery.extreme=function(a){arguments.length==0&&(a=!0),bExtremeMode=a
},cssquery
}(),jindo.$Agent=function(){var a=arguments.callee,b=a._cached;
if(b){return b
}if(!(this instanceof a)){return new a
}b||(a._cached=this),this._navigator=navigator,this._dm=document.documentMode
},jindo.$Agent.prototype.navigator=function(){function g(a,b){return(b||"").indexOf(a)>-1
}var a={},b=-1,c=-1,d=this._navigator.userAgent,e=this._navigator.vendor||"",f=this._dm;
a.getName=function(){var b="";
for(x in a){typeof a[x]=="boolean"&&a[x]&&a.hasOwnProperty(x)&&(b=x)
}return b
},a.webkit=g("WebKit",d),a.opera=window.opera!==undefined||g("Opera",d),a.ie=!a.opera&&g("MSIE",d),a.chrome=a.webkit&&g("Chrome",d),a.safari=a.webkit&&!a.chrome&&g("Apple",e),a.firefox=g("Firefox",d),a.mozilla=g("Gecko",d)&&!a.safari&&!a.chrome&&!a.firefox,a.camino=g("Camino",e),a.netscape=g("Netscape",d),a.omniweb=g("OmniWeb",d),a.icab=g("iCab",e),a.konqueror=g("KDE",e),a.mobile=(g("Mobile",d)||g("Android",d)||g("Nokia",d)||g("webOS",d)||g("Opera Mini",d)||g("BlackBerry",d)||g("Windows",d)&&g("PPC",d)||g("Smartphone",d)||g("IEMobile",d))&&!g("iPad",d),a.msafari=!g("IEMobile",d)&&g("Mobile",d)||g("iPad",d)&&g("Safari",d),a.mopera=g("Opera Mini",d),a.mie=g("PPC",d)||g("Smartphone",d)||g("IEMobile",d);
try{if(a.ie){if(f>0){b=f;
if(d.match(/(?:Trident)\/([0-9.]+)/)){var h=parseInt(RegExp.$1,10);
h>3&&(c=h+4)
}else{c=b
}}else{c=b=d.match(/(?:MSIE) ([0-9.]+)/)[1]
}}else{a.safari||a.msafari?(b=parseFloat(d.match(/Safari\/([0-9.]+)/)[1]),b==100?b=1.1:d.match(/Version\/([0-9.]+)/)?b=RegExp.$1:b=[1,1.2,-1,1.3,2,3][Math.floor(b/100)]):a.mopera?b=d.match(/(?:Opera\sMini)\/([0-9.]+)/)[1]:a.firefox||a.opera||a.omniweb?b=d.match(/(?:Firefox|Opera|OmniWeb)\/([0-9.]+)/)[1]:a.mozilla?b=d.match(/rv:([0-9.]+)/)[1]:a.icab?b=d.match(/iCab[ \/]([0-9.]+)/)[1]:a.chrome&&(b=d.match(/Chrome[ \/]([0-9.]+)/)[1])
}a.version=parseFloat(b),a.nativeVersion=parseFloat(c),isNaN(a.version)&&(a.version=-1)
}catch(i){a.version=-1
}return this.navigator=function(){return a
},a
},jindo.$Agent.prototype.os=function(){var a={};
return u=this._navigator.userAgent,p=this._navigator.platform,f=function(a,b){return b.indexOf(a)>-1
},aMatchResult=null,a.getName=function(){var b="";
for(x in a){a[x]===!0&&a.hasOwnProperty(x)&&(b=x)
}return b
},a.win=f("Win",p),a.mac=f("Mac",p),a.linux=f("Linux",p),a.win2000=a.win&&(f("NT 5.0",u)||f("Windows 2000",u)),a.winxp=a.win&&f("NT 5.1",u),a.xpsp2=a.winxp&&f("SV1",u),a.vista=a.win&&f("NT 6.0",u),a.win7=a.win&&f("NT 6.1",u),a.win8=a.win&&f("NT 6.2",u),a.ipad=f("iPad",u),a.iphone=f("iPhone",u)&&!a.ipad,a.android=f("Android",u),a.nokia=f("Nokia",u),a.webos=f("webOS",u),a.blackberry=f("BlackBerry",u),a.mwin=f("PPC",u)||f("Smartphone",u)||f("IEMobile",u)||f("Windows Phone",u),a.ios=a.ipad||a.iphone,a.symbianos=f("SymbianOS",u),a.version=null,a.win?(aMatchResult=u.match(/Windows NT ([\d|\.]+)/),aMatchResult!=null&&aMatchResult[1]!=undefined&&(a.version=aMatchResult[1])):a.mac?(aMatchResult=u.match(/Mac OS X ([\d|_]+)/),aMatchResult!=null&&aMatchResult[1]!=undefined&&(a.version=String(aMatchResult[1]).split("_").join("."))):a.linux||(a.android?(aMatchResult=u.match(/Android ([\d|\.]+)/),aMatchResult!=null&&aMatchResult[1]!=undefined&&(a.version=aMatchResult[1])):a.ios?(aMatchResult=u.match(/(iPhone )?OS ([\d|_]+)/),aMatchResult!=null&&aMatchResult[2]!=undefined&&(a.version=String(aMatchResult[2]).split("_").join("."))):a.blackberry?(aMatchResult=u.match(/Version\/([\d|\.]+)/),aMatchResult==null&&(aMatchResult=u.match(/BlackBerry\s?\d{4}\/([\d|\.]+)/)),aMatchResult!=null&&aMatchResult[1]!=undefined&&(a.version=aMatchResult[1])):a.symbianos?(aMatchResult=u.match(/SymbianOS\/(\d+.\w+)/),aMatchResult!=null&&aMatchResult[1]!=undefined&&(a.version=aMatchResult[1])):a.webos?(aMatchResult=u.match(/webOS\/([\d|\.]+)/),aMatchResult!=null&&aMatchResult[1]!=undefined&&(a.version=aMatchResult[1])):a.mwin&&(aMatchResult=u.match(/Windows CE ([\d|\.]+)/),aMatchResult!=null&&aMatchResult[1]!=undefined&&(a.version=aMatchResult[1]),!a.version&&(aMatchResult=u.match(/Windows Phone (OS )?([\d|\.]+)/))&&(a.version=aMatchResult[2]))),this.os=function(){return a
},a
},jindo.$Agent.prototype.flash=function(){var a={},b=this._navigator.plugins,c=this._navigator.mimeTypes,d=null;
a.installed=!1,a.version=-1;
if(!jindo.$Jindo.isUndefined(b)&&b.length){d=b["Shockwave Flash"],d&&(a.installed=!0,d.description&&(a.version=parseFloat(d.description.match(/[0-9.]+/)[0]))),b["Shockwave Flash 2.0"]&&(a.installed=!0,a.version=2)
}else{if(!jindo.$Jindo.isUndefined(c)&&c.length){d=c["application/x-shockwave-flash"],a.installed=d&&d.enabledPlugin
}else{try{a.version=parseFloat((new ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version").match(/(.\d?),/)[1]),a.installed=!0
}catch(e){}}}return this.flash=function(){return a
},this.info=this.flash,a
},jindo.$Agent.prototype.silverlight=function(){var a=new Object,b=this._navigator.plugins,c=null;
a.installed=!1,a.version=-1;
if(!jindo.$Jindo.isUndefined(b)&&b.length){c=b["Silverlight Plug-In"],c&&(a.installed=!0,a.version=parseInt(c.description.split(".")[0],10),c.description=="1.0.30226.2"&&(a.version=2))
}else{try{c=new ActiveXObject("AgControl.AgControl"),a.installed=!0,c.isVersionSupported("3.0")?a.version=3:c.isVersionSupported("2.0")?a.version=2:c.isVersionSupported("1.0")&&(a.version=1)
}catch(d){}}return this.silverlight=function(){return a
},a
},jindo.$A=function(a){var b=arguments.callee;
if(a instanceof b){return a
}if(!(this instanceof b)){try{return jindo.$Jindo._maxWarn(arguments.length,1,"$A"),new b(a)
}catch(c){if(c instanceof TypeError){return null
}throw c
}}var d=g_checkVarType(arguments,{"4voi":[],"4arr":["aPram:"+tArray],"4nul":["oNull:"+tNull],"4und":["oUndefined:"+tUndefined],arrt:["aPram:"+tArrayStyle]},"$A");
d==null&&(a=[]);
switch(d+""){case"arrt":case"4arr":a=d.aPram;
break;
case"4nul":case"4und":case"4voi":a=[]
}this._array=[];
for(var e=0;
e<a.length;
e++){this._array[this._array.length]=a[e]
}},jindo.$A.checkVarTypeObj={"4fun":["fCallback:"+tFunction],"4thi":["fCallback:"+tFunction,"oThis:"+tVariant]},jindo.$A.prototype.toString=function(){return this._array.toString()
},jindo.$A.prototype.get=function(a){return g_checkVarType(arguments,{"4num":["nIndex:"+tNumeric]},"$A#get"),this._array[a]
},jindo.$A.prototype.set=function(a,b){return g_checkVarType(arguments,{"4num":["nIndex:"+tNumeric,"vValue:"+tVariant]},"$A#set"),this._array[a]=b,this
},jindo.$A.prototype.length=function(a,b){var c=g_checkVarType(arguments,{"4num":[jindo.$Jindo._F("nLen:"+tNumeric)],sv:["nLen:"+tNumeric,"vValue:"+tVariant],"4voi":[]},"$A#length");
switch(c+""){case"4num":return this._array.length=c.nLen,this;
case"sv":var d=this._array.length;
this._array.length=c.nLen;
for(var e=d;
e<a;
e++){this._array[e]=c.vValue
}return this;
case"4voi":return this._array.length
}},jindo.$A.prototype.has=function(a){return this.indexOf(a)>-1
},jindo.$A.prototype.indexOf=function(a){return this._array.indexOf?jindo.$A.prototype.indexOf=function(a){return this._array.indexOf(a)
}:jindo.$A.prototype.indexOf=function(a){for(var b=0;
b<this._array.length;
b++){if(this._array[b]==a){return b
}}return -1
},this.indexOf(a)
},jindo.$A.prototype.$value=function(){return this._array
},jindo.$A.prototype.push=function(a){return this._array.push.apply(this._array,_toArray(arguments))
},jindo.$A.prototype.pop=function(){return this._array.pop()
},jindo.$A.prototype.shift=function(){return this._array.shift()
},jindo.$A.prototype.unshift=function(a){return this._array.unshift.apply(this._array,_toArray(arguments)),this._array.length
},jindo.$A.prototype.forEach=function(a,b){function c(a){return function(b,c){function f(a,d,f){try{b.apply(c||e,_slice.call(arguments))
}catch(g){if(!(g instanceof e.constructor.Continue)){throw g
}}}var d=g_checkVarType(arguments,jindo.$A.checkVarTypeObj,"$A#forEach"),e=this;
return a(this,f),this
}
}return this._array.forEach?jindo.$A.prototype.forEach=c(function(a,b){try{a._array.forEach(b)
}catch(c){if(!(c instanceof a.constructor.Break)){throw c
}}}):jindo.$A.prototype.forEach=c(function(a,b){var c=a._array;
for(var d=0,e=c.length;
d<e;
d++){try{b(c[d],d,c)
}catch(f){if(f instanceof a.constructor.Break){break
}throw f
}}}),this.forEach.apply(this,_slice.call(arguments))
},jindo.$A.prototype.slice=function(a,b){var c=this._array.slice.call(this._array,a,b);
return jindo.$A(c)
},jindo.$A.prototype.splice=function(a,b){var c=this._array.splice.apply(this._array,_toArray(arguments));
return jindo.$A(c)
},jindo.$A.prototype.shuffle=function(){return this._array.sort(function(a,b){return Math.random()>Math.random()?1:-1
}),this
},jindo.$A.prototype.reverse=function(){return this._array.reverse(),this
},jindo.$A.prototype.empty=function(){return this._array.length=0,this
},jindo.$A.prototype.sort=function(a){var b=g_checkVarType(arguments,{"void":[],"4fp":["fpSort:"+tFunction]},"$A#sort");
return a?this._array.sort(jindo.$Fn(b.fpSort,this).bind()):this._array.sort(),this
},jindo.$A.Break=jindo.$Jindo.Break,jindo.$A.Continue=jindo.$Jindo.Continue,jindo.$A.prototype.map=function(a,b){function c(a){return function(b,c){function g(a,d,g){try{e.push(b.apply(c||f,_toArray(arguments)))
}catch(h){if(!(h instanceof f.constructor.Continue)){throw h
}e.push(a)
}}var d=g_checkVarType(arguments,jindo.$A.checkVarTypeObj,"$A#map");
if(d==null){return this
}var e=[],f=this;
return a(this,g),jindo.$A(e)
}
}return this._array.map?jindo.$A.prototype.map=c(function(a,b){a.forEach(b)
}):jindo.$A.prototype.map=c(function(a,b){var c=a._array;
for(var d=0,e=a._array.length;
d<e;
d++){try{b(c[d],d,c)
}catch(f){if(f instanceof a.constructor.Break){break
}throw f
}}}),this.map.apply(this,_toArray(arguments))
},jindo.$A.prototype.filter=function(a,b){function c(a){return function(b,c){function g(a,d,g){try{b.apply(c||f,_toArray(arguments))&&e.push(a)
}catch(h){if(!(h instanceof f.constructor.Continue)){throw h
}}}var d=g_checkVarType(arguments,jindo.$A.checkVarTypeObj,"$A#filter");
if(d==null){return this
}var e=[],f=this;
return a(this,g),jindo.$A(e)
}
}return this._array.filter?jindo.$A.prototype.filter=c(function(a,b){try{a.forEach(b)
}catch(c){if(!(c instanceof a.constructor.Break)){throw c
}}}):jindo.$A.prototype.filter=c(function(a,b){var c=a._array;
for(var d=0,e=a._array.length;
d<e;
d++){try{b(c[d],d,c)
}catch(f){if(f instanceof a.constructor.Break){break
}throw f
}}}),this.filter.apply(this,_toArray(arguments))
},jindo.$A.prototype.every=function(a,b){var c=g_checkVarType,d=jindo.$A.checkVarTypeObj;
return this._array.every?jindo.$A.prototype.every=function(a,b){return c(arguments,d,"$A#every"),this._array.every(a,b||this)
}:jindo.$A.prototype.every=function(a,b){c(arguments,d,"$A#every");
var e=!0,f=this._array;
for(var g=0,h=f.length;
g<h;
g++){if(a.call(b||this,f[g],g,f)===!1){e=!1;
break
}}return e
},this.every.apply(this,_toArray(arguments))
},jindo.$A.prototype.some=function(a,b){var c=g_checkVarType,d=jindo.$A.checkVarTypeObj;
return this._array.some?jindo.$A.prototype.some=function(a,b){return c(arguments,d,"$A#some"),this._array.some(a,b||this)
}:jindo.$A.prototype.some=function(a,b){c(arguments,d,"$A#some");
var e=!1,f=this._array;
for(var g=0,h=f.length;
g<h;
g++){if(a.call(b||this,f[g],g,f)===!0){e=!0;
break
}}return e
},this.some.apply(this,_toArray(arguments))
},jindo.$A.prototype.refuse=function(a){var b=jindo.$A(_slice.apply(arguments));
return this.filter(function(a,c){return !(b.indexOf(a)>-1)
})
},jindo.$A.prototype.unique=function(){var a=this._array,b=[],c=a.length,d,e;
for(d=0;
d<c;
d++){for(e=0;
e<b.length;
e++){if(a[d]==b[e]){break
}}e>=b.length&&(b[e]=a[d])
}return this._array=b,this
},jindo.$Ajax=function(a,b){function i(){if(window.XMLHttpRequest){return new XMLHttpRequest
}if(ActiveXObject){try{return new ActiveXObject("MSXML2.XMLHTTP")
}catch(a){return new ActiveXObject("Microsoft.XMLHTTP")
}return null
}}var c=arguments.callee;
if(!(this instanceof c)){try{return jindo.$Jindo._maxWarn(arguments.length,2,"$Ajax"),new c(a,b||{})
}catch(d){if(d instanceof TypeError){return null
}throw d
}}var e=jindo.$Ajax,f=jindo.$Error,g=jindo.$Except,h=g_checkVarType(arguments,{"4str":["sURL:"+tString],"4obj":["sURL:"+tString,"oOption:"+tHash]},"$Ajax");
h+""=="for_string"&&(h.oOption={});
var j=location.toString(),k="";
try{k=j.match(/^https?:\/\/([a-z0-9_\-\.]+)/i)[1]
}catch(d){}this._status=0,this._url=h.sURL,this._headers={},this._options={type:"xhr",method:"post",proxy:"",timeout:0,onload:function(a){},onerror:null,ontimeout:function(a){},jsonp_charset:"utf-8",callbackid:"",callbackname:"",sendheader:!0,async:!0,decode:!0,postBody:!1},this._options=e._setProperties(h.oOption,this),e._validationOption(this._options,"$Ajax"),e.CONFIG&&this.option(e.CONFIG);
var l=this._options;
l.type=l.type.toLowerCase(),l.method=l.method.toLowerCase(),window["__"+jindoName+"_callback"]===undefined&&(window["__"+jindoName+"_callback"]=[],window["__"+jindoName+"2_callback"]=[]);
var m=this;
switch(l.type){case"put":case"delete":case"get":case"post":l.method=l.type;
case"xhr":this._request=i();
break;
case"flash":if(!e.SWFRequest){throw new f(jindoName+".$Ajax.SWFRequest"+g.REQUIRE_AJAX,"$Ajax")
}this._request=new e.SWFRequest(function(a,b){return m.option.apply(m,arguments)
});
break;
case"jsonp":if(!e.JSONPRequest){throw new f(jindoName+".$Ajax.JSONPRequest"+g.REQUIRE_AJAX,"$Ajax")
}this._request=new e.JSONPRequest(function(a,b){return m.option.apply(m,arguments)
});
break;
case"iframe":if(!e.FrameRequest){throw new f(jindoName+".$Ajax.FrameRequest"+g.REQUIRE_AJAX,"$Ajax")
}this._request=new e.FrameRequest(function(a,b){return m.option.apply(m,arguments)
})
}},jindo.$Ajax._setProperties=function(a,b){a=a||{};
var c;
return c=a.type=a.type||"xhr",a.onload=jindo.$Fn(a.onload||function(){},b).bind(),a.method=a.method||"post",c!="iframe"&&(a.timeout=a.timeout||0,a.ontimeout=jindo.$Fn(a.ontimeout||function(){},b).bind(),a.onerror=jindo.$Fn(a.onerror||function(){},b).bind()),c=="xhr"?(a.async=a.async===undefined?!0:a.async,a.postBody=a.postBody===undefined?!1:a.postBody):c=="jsonp"?(a.method="get",a.jsonp_charset=a.jsonp_charset||"utf-8",a.callbackid=a.callbackid||"",a.callbackname=a.callbackname||""):c=="flash"?(a.sendheader=a.sendheader===undefined?!0:a.sendheader,a.decode=a.decode===undefined?!0:a.decode):c=="iframe"&&(a.proxy=a.proxy||""),a
},jindo.$Ajax._validationOption=function(a,b){var c=jindo.$Except,d=a.type;
d==="jsonp"?a.method!=="get"&&jindo.$Jindo._warn(c.CANNOT_USE_OPTION+"\n\t"+b+"-method="+a.method):d==="flash"&&a.method!=="get"&&a.method!=="post"&&jindo.$Jindo._warn(c.CANNOT_USE_OPTION+"\n\t"+b+"-method="+a.method),a.postBody&&(d!=="xhr"||a.method==="get")&&jindo.$Jindo._warn(c.CANNOT_USE_OPTION+"\n\t"+a.method+"-postBody="+a.postBody);
var e={xhr:"onload|timeout|ontimeout|onerror|async|method|postBody|type",jsonp:"onload|timeout|ontimeout|onerror|jsonp_charset|callbackid|callbackname|method|type",flash:"onload|timeout|ontimeout|onerror|sendheader|decode|method|type",iframe:"onload|proxy|method|type"},f=[],g=0;
for(f[g++] in a){}var h=e[d];
for(var g=0,i=f.length;
g<i;
g++){h.indexOf(f[g])==-1&&jindo.$Jindo._warn(c.CANNOT_USE_OPTION+"\n\t"+d+"-"+f[g])
}},jindo.$Ajax.prototype._onload=function(a){var b=jindo.$Ajax,c=jindo.$Jindo;
return a?function(){var a=this._request.status,d=this._request.readyState==4&&(a==200||a==0),e;
if(this._request.readyState==4){try{!d&&c.isFunction(this._options.onerror)?this._options.onerror(new b.Response(this._request)):this._is_abort||(e=this._options.onload(new b.Response(this._request)))
}catch(f){throw f
}finally{c.isFunction(this._oncompleted)&&this._oncompleted(d,e);
if(this._options.type=="xhr"){this.abort();
try{delete this._request.onload
}catch(f){this._request.onload=undefined
}}delete this._request.onreadystatechange
}}}:function(){var a=this._request.status,d=this._request.readyState==4&&(a==200||a==0),e;
if(this._request.readyState==4){try{!d&&c.isFunction(this._options.onerror)?this._options.onerror(new b.Response(this._request)):e=this._options.onload(new b.Response(this._request))
}catch(f){throw f
}finally{this._status--,c.isFunction(this._oncompleted)&&this._oncompleted(d,e)
}}}
}(_JINDO_IS_IE),jindo.$Ajax.prototype.request=function(a){var b=jindo.$Jindo,c=b.checkVarType(arguments,{"4voi":[],"4obj":[b._F("oData:"+tHash)],"4str":["sData:"+tString]},"$Ajax#request");
this._status++;
var d=this,e=this._request,f=this._options,g,h,i=[],g="",j=null,k=this._url;
this._is_abort=!1;
var l=f.type.toUpperCase(),m=f.method.toUpperCase();
if(f.postBody&&l=="XHR"&&m!="GET"){c+""=="4str"?g=c.sData:c+""=="4obj"?g=jindo.$Json(c.oData).toString():g=null
}else{switch(c+""){case"4voi":g=null;
break;
case"4obj":var a=c.oData;
for(var n in a){if(a.hasOwnProperty(n)){h=a[n],b.isFunction(h)&&(h=h());
if(b.isArray(h)||jindo.$A&&h instanceof jindo.$A){h instanceof jindo.$A&&(h=h._array);
for(var o=0;
o<h.length;
o++){i[i.length]=n+"="+encodeURIComponent(h[o])
}}else{i[i.length]=n+"="+encodeURIComponent(h)
}}}g=i.join("&")
}}g&&l=="XHR"&&m=="GET"&&(k.indexOf("?")==-1?k+="?":k+="&",k+=g,g=null),l=="XHR"&&f.async?e.open(m,k,f.async):l=="XHR"?e.open(m,k,!1):e.open(m,k),l=="XHR"&&m=="POST"&&e.setRequestHeader("If-Modified-Since","Thu, 1 Jan 1970 00:00:00 GMT");
if(l=="XHR"||l=="IFRAME"||l=="FLASH"&&f.sendheader){this._headers["Content-Type"]||e.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"),e.setRequestHeader("charset","utf-8"),this._headers["X-Requested-With"]||e.setRequestHeader("X-Requested-With","XMLHttpRequest");
for(var p in this._headers){if(this._headers.hasOwnProperty(p)){if(typeof this._headers[p]=="function"){continue
}e.setRequestHeader(p,String(this._headers[p]))
}}}if(e.addEventListener&&!_JINDO_IS_OP&&!_JINDO_IS_IE){this._loadFunc&&e.removeEventListener("load",this._loadFunc,!1),this._loadFunc=function(a){clearTimeout(j),j=undefined,d._onload(a)
},e.addEventListener("load",this._loadFunc,!1)
}else{if(e.onload!==undefined){e.onload=function(a){e.readyState==4&&!d._is_abort&&(clearTimeout(j),j=undefined,d._onload(a))
}
}else{if(_j_ag.match(/(?:MSIE) ([0-9.]+)/)[1]==6&&f.async){var q=function(a){e.readyState==4&&!d._is_abort&&(j&&(clearTimeout(j),j=undefined),d._onload(a),clearInterval(d._interval),d._interval=undefined)
};
this._interval=setInterval(q,300)
}else{e.onreadystatechange=function(a){e.readyState==4&&(clearTimeout(j),j=undefined,d._onload(a))
}
}}}return f.timeout>0&&(this._timer&&clearTimeout(this._timer),j=setTimeout(function(){d._is_abort=!0,d._interval&&(clearInterval(d._interval),d._interval=undefined);
try{e.abort()
}catch(a){}f.ontimeout(e),b.isFunction(d._oncompleted)&&d._oncompleted(!1)
},f.timeout*1000),this._timer=j),this._test_url=k,e.send(g),this
},jindo.$Ajax.prototype.isIdle=function(){return this._status==0
},jindo.$Ajax.prototype.abort=function(){try{this._interval&&clearInterval(this._interval),this._timer&&clearTimeout(this._timer),this._interval=undefined,this._timer=undefined,this._is_abort=!0,this._request.abort()
}finally{this._status--
}return this
},jindo.$Ajax.prototype.url=function(a){var b=g_checkVarType(arguments,{g:[],s:["sURL:"+tString]},"$Ajax#url");
switch(b+""){case"g":return this._url;
case"s":return this._url=b.sURL,this
}},jindo.$Ajax.prototype.option=function(a,b){var c=g_checkVarType(arguments,{s4var:["sKey:"+tString,"vValue:"+tVariant],s4obj:["oOption:"+tHash],g:["sKey:"+tString]},"$Ajax#option");
switch(c+""){case"s4var":c.oOption={},c.oOption[c.sKey]=c.vValue;
case"s4obj":var d=c.oOption;
try{for(var e in d){d.hasOwnProperty(e)&&(e==="onload"||e==="ontimeout"||e==="onerror"?this._options[e]=jindo.$Fn(d[e],this).bind():this._options[e]=d[e])
}}catch(f){}break;
case"g":return this._options[c.sKey]
}return jindo.$Ajax._validationOption(this._options,"$Ajax#option"),this
},jindo,jindo.$Ajax.prototype.header=function(a,b){this._options.type==="jsonp"&&jindo.$Jindo._warn("");
var c=g_checkVarType(arguments,{s4str:["sKey:"+tString,"sValue:"+tString],s4obj:["oOption:"+tHash],g:["sKey:"+tString]},"$Ajax#option");
switch(c+""){case"s4str":this._headers[c.sKey]=c.sValue;
break;
case"s4obj":var d=c.oOption;
try{for(var e in d){d.hasOwnProperty(e)&&(this._headers[e]=d[e])
}}catch(f){}break;
case"g":return this._headers[c.sKey]
}return this
},jindo.$Ajax.Response=function(a){this._response=a,this._regSheild=/^for\(;;\);/
},jindo.$Ajax.Response.prototype.xml=function(){return this._response.responseXML
},jindo.$Ajax.Response.prototype.text=function(){return this._response.responseText.replace(this._regSheild,"")
},jindo.$Ajax.Response.prototype.status=function(){var a=this._response.status;
return a==0?200:a
},jindo.$Ajax.Response.prototype.readyState=function(){return this._response.readyState
},jindo.$Ajax.Response.prototype.json=function(){if(this._response.responseJSON){return this._response.responseJSON
}if(this._response.responseText){try{return eval("("+this.text()+")")
}catch(e){throw new jindo.$Error(jindo.$Except.PARSE_ERROR,"$Ajax#json")
}}return{}
},jindo.$Ajax.Response.prototype.header=function(a){var b=g_checkVarType(arguments,{"4str":["name:"+tString],"4voi":[]},"$Ajax.Response#header");
switch(b+""){case"4str":return this._response.getResponseHeader(a);
case"4voi":return this._response.getAllResponseHeaders()
}};
var klass=jindo.$Class;
jindo.$Ajax.RequestBase=klass({_respHeaderString:"",callbackid:"",callbackname:"",responseXML:null,responseJSON:null,responseText:"",status:404,readyState:0,$init:function(a){},onload:function(){},abort:function(){},open:function(){},send:function(){},setRequestHeader:function(a,b){g_checkVarType(arguments,{"4str":["sName:"+tString,"sValue:"+tString]},"$Ajax.RequestBase#setRequestHeader"),this._headers[a]=b
},getResponseHeader:function(a){return g_checkVarType(arguments,{"4str":["sName:"+tString]},"$Ajax.RequestBase#getResponseHeader"),this._respHeaders[a]||""
},getAllResponseHeaders:function(){return this._respHeaderString
},_getCallbackInfo:function(){var a="";
if(this.option("callbackid")!=""){var b=0;
do{a="_"+this.option("callbackid")+"_"+b,b++
}while(window["__"+jindoName+"_callback"][a])
}else{do{a="_"+Math.floor(Math.random()*10000)
}while(window["__"+jindoName+"_callback"][a])
}return this.option("callbackname")==""&&this.option("callbackname","_callback"),{callbackname:this.option("callbackname"),id:a,name:"window.__"+jindoName+"_callback."+a}
}}),jindo.$Ajax.JSONPRequest=klass({_headers:{},_respHeaders:{},_script:null,_onerror:null,$init:function(a){this.option=a
},_callback:function(a){this._onerror&&(clearTimeout(this._onerror),this._onerror=null);
var b=this;
this.responseJSON=a,this.onload(this),setTimeout(function(){b.abort()
},10)
},abort:function(){if(this._script){try{this._script.parentNode.removeChild(this._script)
}catch(a){}}},open:function(a,b){g_checkVarType(arguments,{"4str":["method:"+tString,"url:"+tString]},"$Ajax.JSONPRequest#open"),this.responseJSON=null,this._url=b
},send:function(a){var b=g_checkVarType(arguments,{"4voi":[],"4nul":["data:"+tNull],"4str":["data:"+tString]},"$Ajax.JSONPRequest#send"),c=this,d=this._getCallbackInfo(),e=document.getElementsByTagName("head")[0];
this._script=document.createElement("script"),this._script.type="text/javascript",this._script.charset=this.option("jsonp_charset"),e?e.appendChild(this._script):document.body&&document.body.appendChild(this._script),window["__"+jindoName+"_callback"][d.id]=function(a){try{c.readyState=4,c.status=200,c._callback(a)
}finally{delete window["__"+jindoName+"_callback"][d.id],delete window["__"+jindoName+"2_callback"][d.id]
}},window["__"+jindoName+"2_callback"][d.id]=function(a){window["__"+jindoName+"_callback"][d.id](a)
};
var f=jindo.$Agent(navigator),g=function(){c.responseJSON||(c.readyState=4,c.status=500,c._onerror=setTimeout(function(){c._callback(null)
},200))
};
f.navigator().ie?this._script.onreadystatechange=function(){this.readyState=="loaded"&&(g(),this.onreadystatechange=null)
}:this._script.onload=this._script.onerror=function(){g(),this.onerror=null,this.onload=null
};
var h="&";
this._url.indexOf("?")==-1&&(h="?");
switch(b+""){case"4voi":case"4nul":a="";
break;
case"4str":a="&"+a
}this._test_url=this._script.src=this._url+h+d.callbackname+"="+d.name+a
}}).extend(jindo.$Ajax.RequestBase),jindo.$Ajax.SWFRequest=klass({$init:function(a){this.option=a
},_headers:{},_respHeaders:{},_getFlashObj:function(){var a=jindo.$Ajax.SWFRequest._tmpId,b=jindo.$Agent(window.navigator).navigator(),c;
return b.ie&&b.version==9?c=_getElementById(document,a):c=window.document[a],(this._getFlashObj=function(){return c
})()
},_callback:function(a,b,c){this.readyState=4,jindo.$Jindo.isNumeric(a)?this.status=a:a==1&&(this.status=200);
if(this.status==200){if(jindo.$Jindo.isString(b)){try{this.responseText=this.option("decode")?decodeURIComponent(b):b;
if(!this.responseText||this.responseText==""){this.responseText=b
}}catch(d){if(d.name=="URIError"){this.responseText=b;
if(!this.responseText||this.responseText==""){this.responseText=b
}}}}jindo.$Jindo.isHash(c)&&(this._respHeaders=c)
}this.onload(this)
},open:function(a,b){g_checkVarType(arguments,{"4str":["method:"+tString,"url:"+tString]},"$Ajax.SWFRequest#open");
var c=/https?:\/\/([a-z0-9_\-\.]+)/i;
this._url=b,this._method=a
},send:function(a){function h(a){switch(typeof a){case"string":return'"'+a.replace(/\"/g,'\\"')+'"';
case"number":return a;
case"object":var c="",d=[];
if(b.isArray(a)){for(var e=0;
e<a.length;
e++){d[e]=h(a[e])
}c="["+d.join(",")+"]"
}else{for(var f in a){a.hasOwnProperty(f)&&(d[d.length]=h(f)+":"+h(a[f]))
}c="{"+d.join(",")+"}"
}return c;
default:return'""'
}}var b=jindo.$Jindo,c=b.checkVarType(arguments,{"4voi":[],"4nul":["data:"+tNull],"4str":["data:"+tString]},"$Ajax.SWFRequest#send");
this.responseXML=!1,this.responseText="";
var d=this,e={},f=this._getCallbackInfo(),g=this._getFlashObj();
a=(a||"").split("&");
var i;
for(var j=0;
j<a.length;
j++){i=a[j],pos=i.indexOf("="),key=i.substring(0,pos),val=i.substring(pos+1),e[key]=decodeURIComponent(val)
}this._current_callback_id=f.id,window["__"+jindoName+"_callback"][f.id]=function(a,b){try{d._callback(a,b)
}finally{delete window["__"+jindoName+"_callback"][f.id]
}},window["__"+jindoName+"2_callback"][f.id]=function(a){window["__"+jindoName+"_callback"][f.id](a)
};
var k={url:this._url,type:this._method,data:e,charset:"UTF-8",callback:f.name,header_json:this._headers};
g.requestViaFlash(h(k))
},abort:function(){this._current_callback_id&&(window["__"+jindoName+"_callback"][this._current_callback_id]=function(){delete window["__"+jindoName+"_callback"][info.id],delete window["__"+jindoName+"2_callback"][info.id]
},window["__"+jindoName+"2_callback"][this._current_callback_id]=function(a){window["__"+jindoName+"_callback"][this._current_callback_id](a)
})
}}).extend(jindo.$Ajax.RequestBase),jindo.$Ajax.SWFRequest.write=function(a){var b=jindo.$Jindo.checkVarType(arguments,{"4voi":[],"4str":["data:String+"]},"<static> $Ajax.SWFRequest#write");
switch(b+""){case"4voi":a="./ajax.swf"
}var c=jindo.$Ajax;
c.SWFRequest._tmpId="tmpSwf"+(new Date).getMilliseconds()+Math.floor(Math.random()*100000);
var d="jindo.$Ajax.SWFRequest.loaded",e=location.protocol=="https:"?"https:":"http:",f=_JINDO_IS_IE?'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"':"";
c._checkFlashLoad();
var g=document.body,h=g.childNodes,i=jindo.$("<div style='position:absolute;top:-1000px;left:-1000px' tabindex='-1'>/<div>");
i.innerHTML='<object tabindex="-1" id="'+c.SWFRequest._tmpId+'" width="1" height="1" '+f+' codebase="'+e+'//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0"><param name="movie" value="'+a+'"><param name = "FlashVars" value = "activeCallback='+d+'" /><param name = "allowScriptAccess" value = "always" /><embed tabindex="-1" name="'+c.SWFRequest._tmpId+'" src="'+a+'" type="application/x-shockwave-flash" pluginspage="'+e+'://www.macromedia.com/go/getflashplayer" width="1" height="1" allowScriptAccess="always" swLiveConnect="true" FlashVars="activeCallback='+d+'"></embed></object>',h.length>0?g.insertBefore(i,h[0]):g.appendChild(i)
},jindo.$Ajax._checkFlashLoad=function(){jindo.$Ajax._checkFlashKey=setTimeout(function(){jindo.$Ajax.SWFRequest.onerror()
},5000),jindo.$Ajax._checkFlashLoad=function(){}
},jindo.$Ajax.SWFRequest.activeFlash=!1,jindo.$Ajax.SWFRequest.onload=function(){},jindo.$Ajax.SWFRequest.onerror=function(){},jindo.$Ajax.SWFRequest.loaded=function(){clearTimeout(jindo.$Ajax._checkFlashKey),jindo.$Ajax.SWFRequest.activeFlash=!0,jindo.$Ajax.SWFRequest.onload()
},jindo.$Ajax.FrameRequest=klass({_headers:{},_respHeaders:{},_frame:null,_domain:"",$init:function(a){this.option=a
},_callback:function(a,b,c){var d=this;
this.readyState=4,this.status=200,this.responseText=b,this._respHeaderString=c,c.replace(/^([\w\-]+)\s*:\s*(.+)$/m,function(a,b,c){d._respHeaders[b]=c
}),this.onload(this),setTimeout(function(){d.abort()
},10)
},abort:function(){if(this._frame){try{this._frame.parentNode.removeChild(this._frame)
}catch(a){}}},open:function(a,b){g_checkVarType(arguments,{"4str":["method:"+tString,"url:"+tString]},"$Ajax.FrameRequest#open");
var c=/https?:\/\/([a-z0-9_\-\.]+)/i,d=document.location.toString().match(c);
this._method=a,this._url=b,this._remote=String(b).match(/(https?:\/\/[a-z0-9_\-\.]+)(:[0-9]+)?/i)[0],this._frame=null,this._domain=d!=null&&d[1]!=document.domain?document.domain:""
},send:function(a){var b=g_checkVarType(arguments,{"4voi":[],"4nul":["data:"+tNull],"4str":["data:"+tString]},"$Ajax.FrameRequest#send");
this.responseXML="",this.responseText="";
var c=this,d=/https?:\/\/([a-z0-9_\-\.]+)/i,e=this._getCallbackInfo(),f,g=[];
g.push(this._remote+"/ajax_remote_callback.html?method="+this._method);
var h=[];
window["__"+jindoName+"_callback"][e.id]=function(a,b,d){try{c._callback(a,b,d)
}finally{delete window["__"+jindoName+"_callback"][e.id],delete window["__"+jindoName+"2_callback"][e.id]
}},window["__"+jindoName+"2_callback"][e.id]=function(a,b,c){window["__"+jindoName+"_callback"][e.id](a,b,c)
};
for(var i in this._headers){this._headers.hasOwnProperty(i)&&(h[h.length]="'"+i+"':'"+this._headers[i]+"'")
}h="{"+h.join(",")+"}",g.push("&id="+e.id),g.push("&header="+encodeURIComponent(h)),g.push("&proxy="+encodeURIComponent(this.option("proxy"))),g.push("&domain="+this._domain),g.push("&url="+encodeURIComponent(this._url.replace(d,""))),g.push("#"+encodeURIComponent(a));
var j=this._frame=document.createElement("iframe"),k=j.style;
k.position="absolute",k.visibility="hidden",k.width="1px",k.height="1px";
var l=document.body||document.documentElement;
l.firstChild?l.insertBefore(j,l.firstChild):l.appendChild(j),typeof MSApp!="undefined"&&MSApp.addPublicLocalApplicationUri(this.option("proxy")),j.src=g.join("")
}}).extend(jindo.$Ajax.RequestBase),jindo.$Ajax.Queue=function(a){var b=arguments.callee;
if(!(this instanceof b)){return new b(a||{})
}var c=g_checkVarType(arguments,{"4voi":[],"4obj":["option:"+tHash]},"$Ajax.Queue");
a=c.option,this._options={async:!1,useResultAsParam:!1,stopOnFailure:!1},this.option(a),this._queue=[]
},jindo.$Ajax.Queue.prototype.option=function(a,b){var c=g_checkVarType(arguments,{s4str:["sKey:"+tString,"sValue:"+tVariant],s4obj:["oOption:"+tHash],g:["sKey:"+tString]},"$Ajax.Queue#option");
switch(c+""){case"s4str":this._options[c.sKey]=c.sValue;
break;
case"s4obj":var d=c.oOption;
try{for(var e in d){d.hasOwnProperty(e)&&(this._options[e]=d[e])
}}catch(f){}break;
case"g":return this._options[c.sKey]
}return this
},jindo.$Ajax.Queue.prototype.add=function(a,b){var c=g_checkVarType(arguments,{"4obj":["oAjax:"+tHash],"4obj2":["oAjax:"+tHash,"oPram:"+tHash]},"$Ajax.Queue");
switch(c+""){case"4obj2":b=c.oPram
}return this._queue.push({obj:a,param:b}),this
},jindo.$Ajax.Queue.prototype.request=function(){return this._requestAsync.apply(this,this.option("async")?[]:[0]),this
},jindo.$Ajax.Queue.prototype._requestSync=function(a,b){var c=this,d=this._queue;
d.length>a+1&&(d[a].obj._oncompleted=function(b,d){(!c.option("stopOnFailure")||b)&&c._requestSync(a+1,d)
});
var e=d[a].param||{};
if(this.option("useResultAsParam")&&b){try{for(var f in b){e[f]===undefined&&b.hasOwnProperty(f)&&(e[f]=b[f])
}}catch(g){}}d[a].obj.request(e)
},jindo.$Ajax.Queue.prototype._requestAsync=function(){for(var a=0;
a<this._queue.length;
a++){this._queue[a].obj.request(this._queue[a].param||{})
}},jindo.$H=function(a){var b=arguments.callee;
if(a instanceof b){return a
}if(!(this instanceof b)){try{return jindo.$Jindo._maxWarn(arguments.length,1,"$H"),new b(a||{})
}catch(c){if(c instanceof TypeError){return null
}throw c
}}var d=g_checkVarType(arguments,{"4obj":["oObj:"+tHash],"4vod":[]},"$H");
this._table={};
for(var e in a){a.hasOwnProperty(e)&&(this._table[e]=a[e])
}},jindo.$H.prototype.$value=function(){return this._table
},jindo.$H.prototype.$=function(a,b){var c=g_checkVarType(arguments,{s4var:[jindo.$Jindo._F("key:"+tString),"value:"+tVariant],s4var2:["key:"+tNumeric,"value:"+tVariant],g4str:["key:"+tString],s4obj:["oObj:"+tHash],g4num:["key:"+tNumeric]},"$H#$");
switch(c+""){case"s4var":case"s4var2":return this._table[a]=b,this;
case"s4obj":var d=c.oObj;
for(var e in d){d.hasOwnProperty(e)&&(this._table[e]=d[e])
}return this;
default:return this._table[a]
}},jindo.$H.prototype.length=function(){var a=0,b=this.__jindo_sorted_index;
if(b){return b.length
}for(var c in this._table){if(this._table.hasOwnProperty(c)){if(Object.prototype[c]!==undefined&&Object.prototype[c]===this._table[c]){continue
}a++
}}return a
},jindo.$H.prototype.forEach=function(a,b){var c=g_checkVarType(arguments,{"4fun":["callback:"+tFunction],"4obj":["callback:"+tFunction,"thisObject:"+tVariant]},"$H#forEach"),d=this._table,e=this.constructor,f=this.__jindo_sorted_index;
if(f){for(var g=0,h=f.length;
g<h;
g++){try{var i=f[g];
a.call(b||this,d[i],i,d)
}catch(j){if(j instanceof e.Break){break
}if(j instanceof e.Continue){continue
}throw j
}}}else{for(var i in d){if(d.hasOwnProperty(i)){if(!d.propertyIsEnumerable(i)){continue
}try{a.call(b||this,d[i],i,d)
}catch(j){if(j instanceof e.Break){break
}if(j instanceof e.Continue){continue
}throw j
}}}}return this
},jindo.$H.prototype.filter=function(a,b){var c=g_checkVarType(arguments,{"4fun":["callback:"+tFunction],"4obj":["callback:"+tFunction,"thisObject:"+tVariant]},"$H#filter"),d=jindo.$H(),e=this._table,f=this.constructor;
for(var g in e){if(e.hasOwnProperty(g)){if(!e.propertyIsEnumerable(g)){continue
}try{a.call(b||this,e[g],g,e)&&d.add(g,e[g])
}catch(h){if(h instanceof f.Break){break
}if(h instanceof f.Continue){continue
}throw h
}}}return d
},jindo.$H.prototype.map=function(a,b){var c=g_checkVarType(arguments,{"4fun":["callback:"+tFunction],"4obj":["callback:"+tFunction,"thisObject:"+tVariant]},"$H#map"),d=jindo.$H(),e=this._table,f=this.constructor;
for(var g in e){if(e.hasOwnProperty(g)){if(!e.propertyIsEnumerable(g)){continue
}try{d.add(g,a.call(b||this,e[g],g,e))
}catch(h){if(h instanceof f.Break){break
}if(!(h instanceof f.Continue)){throw h
}d.add(g,e[g])
}}}return d
},jindo.$H.prototype.add=function(a,b){var c=g_checkVarType(arguments,{"4str":["key:"+tString,"value:"+tVariant],"4num":["key:"+tNumeric,"value:"+tVariant]},"$H#add"),d=this.__jindo_sorted_index;
return d&&this._table[a]==undefined&&this.__jindo_sorted_index.push(a),this._table[a]=b,this
},jindo.$H.prototype.remove=function(a){var b=g_checkVarType(arguments,{"4str":["key:"+tString],"4num":["key:"+tNumeric]},"$H#remove");
if(this._table[a]===undefined){return null
}var c=this._table[a];
delete this._table[a];
var d=this.__jindo_sorted_index;
if(d){var e=[];
for(var f=0,g=d.length;
f<g;
f++){d[f]!=a&&e.push(d[f])
}this.__jindo_sorted_index=e
}return c
},jindo.$H.prototype.search=function(a){var b=g_checkVarType(arguments,{"4str":["value:"+tVariant]},"$H#search"),c=!1,d=this._table;
for(var e in d){if(d.hasOwnProperty(e)){if(!d.propertyIsEnumerable(e)){continue
}var f=d[e];
if(f===a){c=e;
break
}}}return c
},jindo.$H.prototype.hasKey=function(a){var b=g_checkVarType(arguments,{"4str":["key:"+tString],"4num":["key:"+tNumeric]},"$H#hasKey");
return this._table[a]!==undefined
},jindo.$H.prototype.hasValue=function(a){var b=g_checkVarType(arguments,{"4str":["value:"+tVariant]},"$H#hasValue");
return this.search(a)!==!1
},jindo.$H.prototype.sort=function(a){var b=g_checkVarType(arguments,{vo:[],"4fp":["fpSort:"+tFunction]},"$H#sort");
return this.__jindo_sorted_index=defaultSort(b,this,"val"),this
},jindo.$H.prototype.ksort=function(a){var b=g_checkVarType(arguments,{vo:[],"4fp":["fpSort:"+tFunction]},"$H#ksort");
return this.__jindo_sorted_index=defaultSort(b,this,"key"),this
},jindo.$H.prototype.keys=function(){var a=this.__jindo_sorted_index;
if(!a){a=[];
for(var b in this._table){this._table.hasOwnProperty(b)&&a.push(b)
}}return a
},jindo.$H.prototype.values=function(){var a=[];
for(var b in this._table){this._table.hasOwnProperty(b)&&(a[a.length]=this._table[b])
}return a
},jindo.$H.prototype.toQueryString=function(){var a=[],b=null,c=0;
for(var d in this._table){if(this._table.hasOwnProperty(d)){b=this._table[d];
if(jindo.$Jindo.isArray(b)){for(i=0;
i<b.length;
i++){a[a.length]=encodeURIComponent(d)+"[]="+encodeURIComponent(b[i]+"")
}}else{a[a.length]=encodeURIComponent(d)+"="+encodeURIComponent(this._table[d]+"")
}}}return a.join("&")
},jindo.$H.prototype.empty=function(){return this._table={},delete this.__jindo_sorted_index,this
},jindo.$H.Break=jindo.$Jindo.Break,jindo.$H.Continue=jindo.$Jindo.Continue,jindo.$Json=function(a){var b=arguments.callee;
if(a instanceof b){return a
}if(!(this instanceof b)){try{return jindo.$Jindo._maxWarn(arguments.length,1,"$Json"),new b(arguments.length?a:{})
}catch(c){if(c instanceof TypeError){return null
}throw c
}}g_checkVarType(arguments,{"4var":["oObject:"+tVariant]},"$Json"),this._object=a
},jindo.$Json._oldMakeJSON=function(sObject,sType){try{if(!jindo.$Jindo.isString(sObject)||!/^(?:\s*)[\{\[]/.test(sObject)){return sObject
}sObject=eval("("+sObject+")")
}catch(e){throw new jindo.$Error(jindo.$Except.PARSE_ERROR,sType)
}return sObject
},jindo.$Json.fromXML=function(a){var b=jindo.$Jindo,c=b.checkVarType(arguments,{"4str":["sXML:"+tString]},"<static> $Json#fromXML"),d={},e=/\s*<(\/?[\w:\-]+)((?:\s+[\w:\-]+\s*=\s*(?:"(?:\\"|[^"])*"|'(?:\\'|[^'])*'))*)\s*((?:\/>)|(?:><\/\1>|\s*))|\s*<!\[CDATA\[([\w\W]*?)\]\]>\s*|\s*>?([^<]*)/ig,f=/^[0-9]+(?:\.[0-9]+)?$/,g={"&amp;":"&","&nbsp;":" ","&quot;":'"',"&lt;":"<","&gt;":">"},h={tags:["/"],stack:[d]},i=function(a){return b.isUndefined(a)?"":a.replace(/&[a-z]+;/g,function(a){return b.isString(g[a])?g[a]:a
})
},j=function(a,b){a.replace(/([\w\:\-]+)\s*=\s*(?:"((?:\\"|[^"])*)"|'((?:\\'|[^'])*)')/g,function(a,c,d,e){b[c]=i((d?d.replace(/\\"/g,'"'):undefined)||(e?e.replace(/\\'/g,"'"):undefined))
})
},k=function(a){for(var b in a){if(a.hasOwnProperty(b)){if(Object.prototype[b]){continue
}return !1
}}return !0
},l=function(a,c,d,e,g,l){var m,n="",o=h.stack.length-1;
if(b.isString(c)&&c){if(c.substr(0,1)!="/"){var p=typeof d=="string"&&d,q=typeof e=="string"&&e,r=!p&&q?"":{};
m=h.stack[o];
if(b.isUndefined(m[c])){m[c]=r,m=h.stack[o+1]=m[c]
}else{if(m[c] instanceof Array){var s=m[c].length;
m[c][s]=r,m=h.stack[o+1]=m[c][s]
}else{m[c]=[m[c],r],m=h.stack[o+1]=m[c][1]
}}p&&j(d,m),h.tags[o+1]=c,q&&(h.tags.length--,h.stack.length--)
}else{h.tags.length--,h.stack.length--
}}else{b.isString(g)&&g?n=g:b.isString(l)&&l&&(n=i(l))
}if(n.replace(/^\s+/g,"").length>0){var t=h.stack[o-1],u=h.tags[o];
f.test(n)?n=parseFloat(n):n=="true"?n=!0:n=="false"&&(n=!1);
if(b.isUndefined(t)){return
}if(t[u] instanceof Array){var v=t[u];
b.isHash(v[v.length-1])&&!k(v[v.length-1])?(v[v.length-1].$cdata=n,v[v.length-1].toString=function(){return n
}):v[v.length-1]=n
}else{b.isHash(t[u])&&!k(t[u])?(t[u].$cdata=n,t[u].toString=function(){return n
}):t[u]=n
}}};
return a=a.replace(/<(\?|\!-)[^>]*>/g,""),a.replace(e,l),jindo.$Json(d)
},jindo.$Json.prototype.get=function(a){var b=jindo.$Jindo,c=b.checkVarType(arguments,{"4str":["sPath:"+tString]},"$Json#get"),d=jindo.$Json._oldMakeJSON(this._object,"$Json#get");
if(!b.isHash(d)&&!b.isArray(d)){throw new jindo.$Error(jindo.$Except.JSON_MUST_HAVE_ARRAY_HASH,"$Json#get")
}var e=a.split("/"),f=/^([\w:\-]+)\[([0-9]+)\]$/,g=[[d]],h=g[0],i=e.length,j,k,l,m,n;
for(var o=0;
o<i;
o++){if(e[o]=="."||e[o]==""){continue
}if(e[o]==".."){g.length--
}else{l=[],k=-1,j=h.length;
if(j==0){return[]
}f.test(e[o])&&(k=+RegExp.$2);
for(m=0;
m<j;
m++){n=h[m][e[o]];
if(b.isUndefined(n)){continue
}b.isArray(n)?k>-1?k<n.length&&(l[l.length]=n[k]):l=l.concat(n):k==-1&&(l[l.length]=n)
}g[g.length]=l
}h=g[g.length-1]
}return h
},jindo.$Json.prototype.toString=function(){return jindo.$Json._oldToString(this._object)
},jindo.$Json._oldToString=function(a){var b=jindo.$Jindo,c={$:function(a){if(b.isNull(a)||a==Infinity){return"null"
}if(b.isFunction(a)){return undefined
}if(b.isUndefined(a)){return undefined
}if(b.isBoolean(a)){return a?"true":"false"
}if(b.isString(a)){return this.s(a)
}if(b.isNumeric(a)){return a
}if(b.isArray(a)){return this.a(a)
}if(b.isHash(a)){return this.o(a)
}if(b.isDate(a)){return a+""
}if(typeof a=="object"||b.isRegExp(a)){return"{}"
}if(isNaN(a)){return"null"
}},s:function(a){var b={'"':'\\"',"\\":"\\\\","\n":"\\n","\r":"\\r","\t":"\\t"},c=function(a){return b[a]!==undefined?b[a]:a
};
return'"'+a.replace(/[\\"'\n\r\t]/g,c)+'"'
},a:function(a){var c="[",d="",e=a.length;
for(var f=0;
f<e;
f++){if(b.isFunction(a[f])){continue
}c+=d+this.$(a[f]),d||(d=",")
}return c+"]"
},o:function(a){a=jindo.$H(a).ksort().$value();
var c="{",d="";
for(var e in a){if(a.hasOwnProperty(e)){if(b.isUndefined(a[e])||b.isFunction(a[e])){continue
}c+=d+this.s(e)+":"+this.$(a[e]),d||(d=",")
}}return c+"}"
}};
return c.$(a)
},jindo.$Json.prototype.toXML=function(){var a=function(b,c){var d=function(a,b){return"<"+c+(b||"")+">"+a+"</"+c+">"
};
switch(typeof b){case"undefined":case"null":return d("");
case"number":return d(b);
case"string":return b.indexOf("<")<0?d(b.replace(/&/g,"&amp;")):d("<![CDATA["+b+"]]>");
case"boolean":return d(String(b));
case"object":var e="";
if(b instanceof Array){var g=b.length;
for(var h=0;
h<g;
h++){e+=a(b[h],c)
}}else{var i="";
for(var j in b){if(b.hasOwnProperty(j)){if(j=="$cdata"||typeof b[j]=="function"){continue
}e+=a(b[j],j)
}}c&&(e=d(e,i))
}return e
}};
return a(jindo.$Json._oldMakeJSON(this._object,"$Json#toXML"),"")
},jindo.$Json.prototype.toObject=function(){return jindo.$Json._oldMakeJSON(this._object,"$Json#toObject")
},jindo.$Json.prototype.compare=function(a){function d(a,c){if(b.isArray(a)){if(a.length!==c.length){return !1
}for(var d=0,e=a.length;
d<e;
d++){if(!arguments.callee(a[d],c[d])){return !1
}}return !0
}if(b.isRegExp(a)||b.isFunction(a)||b.isDate(a)){return String(a)===String(c)
}if(typeof a=="number"&&isNaN(a)){return isNaN(c)
}if(b.isHash(a)){var e=0;
for(var f in a){e++
}for(var f in c){e--
}if(e!==0){return !1
}for(var f in a){if(f in c==0||!arguments.callee(a[f],c[f])){return !1
}}return !0
}return a===c
}var b=jindo.$Jindo,c=b.checkVarType(arguments,{"4obj":["oData:"+tHash],"4arr":["oData:"+tArray]},"$Json#compare");
try{return d(jindo.$Json._oldMakeJSON(this._object,"$Json#compare"),a)
}catch(e){return !1
}},jindo.$Json.prototype.$value=jindo.$Json.prototype.toObject,jindo.$Cookie=function(){var a=arguments.callee,b=a._cached;
if(a._cached){return a._cached
}if(!(this instanceof a)){try{return jindo.$Jindo._maxWarn(arguments.length,1,"$Cookie"),arguments.length>0?new a(arguments[0]):new a
}catch(c){if(c instanceof TypeError){return null
}throw c
}}typeof jindo.$Jindo.isUndefined(a._cached)&&(a._cached=this);
var d=g_checkVarType(arguments,{"4voi":[],"4bln":["bURIComponent:"+tBoolean]},"$Cookie");
switch(d+""){case"4voi":this._bURIComponent=!1;
break;
case"4bln":this._bURIComponent=d.bURIComponent
}},jindo.$Cookie.prototype.keys=function(){var a=document.cookie.split(";"),b=/^\s+|\s+$/g,c=new Array;
for(var d=0;
d<a.length;
d++){c[c.length]=a[d].substr(0,a[d].indexOf("=")).replace(b,"")
}return c
},jindo.$Cookie.prototype.get=function(a){var b=g_checkVarType(arguments,{"4str":["sName:"+tString]},"$Cookie#get"),c=document.cookie.split(/\s*;\s*/),d=new RegExp("^(\\s*"+a+"\\s*=)"),e,f;
for(var g=0;
g<c.length;
g++){if(d.test(c[g])){return e=c[g].substr(RegExp.$1.length),this._bURIComponent&&jindo.$Jindo.isNull(e.match(/%u\w{4}/))?f=decodeURIComponent(e):f=unescape(e),f
}}return null
},jindo.$Cookie.prototype.set=function(a,b,c,d,e){var f=jindo.$Jindo,g=f.checkVarType(arguments,{"4str":["sName:"+tString,"sValue:"+tString],day_for_string:["sName:"+tString,"sValue:"+tString,"nDays:"+tNumeric],domain_for_string:["sName:"+tString,"sValue:"+tString,"nDays:"+tNumeric,"sDomain:"+tString],path_for_string:["sName:"+tString,"sValue:"+tString,"nDays:"+tNumeric,"sDomain:"+tString,"sPath:"+tString]},"$Cookie#set"),h="",i;
return g+""!="4str"&&c!==0&&(h=";expires="+(new Date((new Date).getTime()+c*1000*60*60*24)).toGMTString()),f.isUndefined(d)&&(d=""),f.isUndefined(e)&&(e="/"),this._bURIComponent?i=encodeURIComponent(b):i=escape(b),document.cookie=a+"="+i+h+"; path="+e+(d?"; domain="+d:""),this
},jindo.$Cookie.prototype.remove=function(a,b,c){var d=jindo.$Jindo,e=d.checkVarType(arguments,{"4str":["sName:"+tString],domain_for_string:["sName:"+tString,"sDomain:"+tString],path_for_string:["sName:"+tString,"sDomain:"+tString,"sPath:"+tString]},"$Cookie#remove"),f=_toArray(arguments),g=[];
for(var h=0,i=f.length;
h<i;
h++){g.push(f[h]),h==0&&(g.push(""),g.push(-1))
}return d.isNull(this.get(a))||this.set.apply(this,g),this
},jindo.$Event=function(a){return a?function(a){var b=arguments.callee;
if(a instanceof b){return a
}if(!(this instanceof b)){return new b(a)
}this._event=this._posEvent=a,this._globalEvent=window.event,this.type=a.type.toLowerCase(),this.type=="dommousescroll"?this.type="mousewheel":this.type=="domcontentloaded"&&(this.type="domready"),this.isTouch=!1,this.type.indexOf("touch")>-1&&(this._posEvent=a.changedTouches[0],this.isTouch=!0),this.canceled=!1,this.element=a.target||a.srcElement,this.currentElement=a.currentTarget,this.relatedElement=null,jindo.$Jindo.isUndefined(a.relatedTarget)?a.fromElement&&a.toElement&&(this.relatedElement=a[this.type=="mouseout"?"toElement":"fromElement"]):this.relatedElement=a.relatedTarget
}:function(a){var b=arguments.callee;
if(a instanceof b){return a
}if(!(this instanceof b)){return new b(a)
}a===undefined&&(a=window.event),a===window.event&&document.createEventObject&&(a=document.createEventObject(a)),this.isTouch=!1,this._event=this._posEvent=a,this._globalEvent=window.event,this.type=a.type.toLowerCase(),this.type=="dommousescroll"?this.type="mousewheel":this.type=="domcontentloaded"&&(this.type="domready"),this.canceled=!1,this.element=a.target||a.srcElement,this.currentElement=a.currentTarget,this.relatedElement=null,a.relatedTarget!==undefined?this.relatedElement=a.relatedTarget:a.fromElement&&a.toElement&&(this.relatedElement=a[this.type=="mouseout"?"toElement":"fromElement"])
}
}(_JINDO_IS_MO);
var customEvent={};
window.customEventStore={},window.normalCustomEvent={},jindo.$Event.customEvent=function(a,b){var c=g_checkVarType(arguments,{s4str:["sName:"+tString],s4obj:["sName:"+tString,"oEvent:"+tHash]},"$Event.customEvent");
switch(c+""){case"s4str":if(hasCustomEvent(a)){throw new jindo.$Error("The Custom Event Name have to unique.")
}return normalCustomEvent[a]={},this;
case"s4obj":if(hasCustomEvent(a)){throw new jindo.$Error("The Custom Event Name have to unique.")
}normalCustomEvent[a]={},customEvent[a]=function(){this.name=a,this.real_listener=[],this.wrap_listener=[]
};
var d=customEvent[a].prototype;
d.events=[];
for(var e in b){d[e]=b[e],d.events.push(e)
}return customEvent[a].prototype.fireEvent=function(a){for(var b=0,c=this.wrap_listener.length;
b<c;
b++){this.wrap_listener[b](a)
}},this
}},jindo.$Event.prototype.mouse=function(a){g_checkVarType(arguments,{voi:[],bol:["bIsScrollbar:"+tBoolean]});
var b=this._event,c=this.element,d=0,e=!1,f=!1,g=!1,e=b.which?b.button==0:!!(b.button&1),f=b.which?b.button==1:!!(b.button&4),g=b.which?b.button==2:!!(b.button&2),h={};
b.wheelDelta?d=b.wheelDelta/120:b.detail&&(d=-b.detail/3);
var i;
return a&&(i=_event_isScroll(c,b)),h={delta:d,left:e,middle:f,right:g,scrollbar:i},this.mouse=function(a){return a&&(h.scrollbar=_event_isScroll(this.element,this._event),this.mouse=function(){return h
}),h
},h
},jindo.$Event.prototype.key=function(){var a=this._event,b=a.keyCode||a.charCode,c={keyCode:b,alt:a.altKey,ctrl:a.ctrlKey,meta:a.metaKey,shift:a.shiftKey,up:b==38,down:b==40,left:b==37,right:b==39,enter:b==13,esc:b==27};
return this.key=function(){return c
},c
},jindo.$Event.prototype.pos=function(a){g_checkVarType(arguments,{voi:[],bol:["bGetOffset:"+tBoolean]});
var b=this._posEvent,c=this.element.ownerDocument||document,d=c.body,e=c.documentElement,f=[d.scrollLeft||e.scrollLeft,d.scrollTop||e.scrollTop],g={clientX:b.clientX,clientY:b.clientY,pageX:"pageX" in b?b.pageX:b.clientX+f[0]-d.clientLeft,pageY:"pageY" in b?b.pageY:b.clientY+f[1]-d.clientTop,layerX:"offsetX" in b?b.offsetX:b.layerX-1,layerY:"offsetY" in b?b.offsetY:b.layerY-1};
if(a&&jindo.$Element){var h=jindo.$Element(this.element).offset();
g.offsetX=g.pageX-h.left,g.offsetY=g.pageY-h.top
}return g
},jindo.$Event.prototype.stop=function(a){g_checkVarType(arguments,{voi:[],num:["nCancel:"+tNumeric]}),a=a||jindo.$Event.CANCEL_ALL;
var b=window.event&&window.event==this._globalEvent?this._globalEvent:this._event,c=!!(a&jindo.$Event.CANCEL_BUBBLE),d=!!(a&jindo.$Event.CANCEL_DEFAULT),e=this.realType;
return c&&(e==="focusin"||e==="focusout")&&jindo.$Jindo._warn("The "+e+" event can't stop bubble."),this.canceled=!0,b.preventDefault!==undefined&&d&&b.preventDefault(),b.stopPropagation!==undefined&&c&&b.stopPropagation(),d&&(b.returnValue=!1),c&&(b.cancelBubble=!0),this
},jindo.$Event.prototype.stopDefault=function(){return this.stop(jindo.$Event.CANCEL_DEFAULT)
},jindo.$Event.prototype.stopBubble=function(){return this.stop(jindo.$Event.CANCEL_BUBBLE)
},jindo.$Event.CANCEL_BUBBLE=1,jindo.$Event.CANCEL_DEFAULT=2,jindo.$Event.CANCEL_ALL=3,jindo.$Event.prototype.$value=function(){return this._event
},function(a){var b="Touch";
for(var c=0,d=a.length;
c<d;
c++){jindo.$Event.prototype[a[c]+b]=function(a){return function(b){if(this.isTouch){var c=[],d=this._event[a+"es"],e=d.length,f;
for(var g=0;
g<e;
g++){f=d[g],c.push({id:f.identifier,event:this,element:f.target,_posEvent:f,pos:jindo.$Event.prototype.pos})
}this[a]=function(b){var d=g_checkVarType(arguments,{"void":[],"4num":["nIndex:"+tNumeric]},"$Event#"+a);
return d+""=="void"?c:c[b]
}
}else{this[a]=function(b){throw new jindo.$Error(jindo.$Except.NOT_SUPPORT_METHOD,"$Event#"+a)
}
}return this[a].apply(this,_toArray(arguments))
}
}(a[0]+b)
}}(["changed","target"]),jindo.$Element=function(a){var b=arguments.callee;
if(a&&a instanceof b){return a
}if(!(this instanceof b)){try{return jindo.$Jindo._maxWarn(arguments.length,1,"$"+tElement),new b(a)
}catch(c){if(c instanceof TypeError){return null
}throw c
}}var d=jindo.$Jindo,e=d.checkVarType(arguments,{"4str":["sID:"+tString],"4nod":["oEle:"+tNode],"4doc":["oEle:"+tDocument],"4win":["oEle:"+tWindow]},"$"+tElement);
switch(e+""){case"4str":a=jindo.$(a);
break;
default:a=e.oEle
}this._element=a;
if(this._element==null){throw new TypeError("{not_found_element}")
}if(this._element.__jindo__id){this._key=this._element.__jindo__id
}else{try{this._element.__jindo__id=this._key=_makeRandom()
}catch(c){}}this.tag=(this._element.tagName||"").toLowerCase()
};
var NONE_GROUP="_jindo_event_none",vendorPrefixObj={"-moz":"Moz","-ms":"ms","-o":"O","-webkit":"webkit"};
jindo.$Element._eventBind=function(a,b,c,d){a.addEventListener?document.documentMode==9?jindo.$Element._eventBind=function(a,b,c,d){/resize/.test(b)?a.attachEvent("on"+b,c):a.addEventListener(b,c,!!d)
}:jindo.$Element._eventBind=function(a,b,c,d){a.addEventListener(b,c,!!d)
}:jindo.$Element._eventBind=function(a,b,c){a.attachEvent("on"+b,c)
},jindo.$Element._eventBind(a,b,c,d)
},jindo.$Element._unEventBind=function(a,b,c){a.removeEventListener?document.documentMode==9?jindo.$Element._unEventBind=function(a,b,c){/resize/.test(b)?a.detachEvent("on"+b,c):a.removeEventListener(b,c,!1)
}:jindo.$Element._unEventBind=function(a,b,c){a.removeEventListener(b,c,!1)
}:jindo.$Element._unEventBind=function(a,b,c){a.detachEvent("on"+b,c)
},jindo.$Element._unEventBind(a,b,c)
},jindo.$Element.prototype.$value=function(){return this._element
},jindo.$Element.prototype.visible=function(a,b){var c=g_checkVarType(arguments,{g:[],s4bln:[jindo.$Jindo._F("bVisible:"+tBoolean)],s4str:["bVisible:"+tBoolean,"sDisplay:"+tString]},"$Element#visible");
switch(c+""){case"g":return this._getCss(this._element,"display")!="none";
case"s4bln":return this[a?"show":"hide"](),this;
case"s4str":return this[a?"show":"hide"](b),this
}},jindo.$Element.prototype.show=function(a){var b=g_checkVarType(arguments,{"4voi":[],"4str":["sDisplay:"+tString]},"$Element#show"),c=this._element.style,d="block",e={p:d,div:d,form:d,h1:d,h2:d,h3:d,h4:d,ol:d,ul:d,fieldset:d,td:"table-cell",th:"table-cell",li:"list-item",table:"table",thead:"table-header-group",tbody:"table-row-group",tfoot:"table-footer-group",tr:"table-row",col:"table-column",colgroup:"table-column-group",caption:"table-caption",dl:d,dt:d,dd:d};
try{switch(b+""){case"4voi":var f=e[this.tag];
c.display=f||"inline";
break;
case"4str":c.display=a
}}catch(g){c.display="block"
}return this
},jindo.$Element.prototype.hide=function(){return this._element.style.display="none",this
},jindo.$Element.prototype.toggle=function(a){var b=g_checkVarType(arguments,{"4voi":[],"4str":["sDisplay:"+tString]},"$Element#toggle");
return this[this._getCss(this._element,"display")=="none"?"show":"hide"].apply(this,arguments),this
},jindo.$Element.prototype.opacity=function(a){var b=g_checkVarType(arguments,{g:[],s:["nOpacity:"+tNumeric]},"$Element#opacity"),c,d=this._element,e;
switch(b+""){case"g":return e=this._getCss(d,"display")!="none",typeof d.style.opacity!="undefined"?(c=parseFloat(d.style.opacity),isNaN(c)&&(c=e?1:0)):(c=typeof d.filters.alpha=="undefined"?e?100:0:d.filters.alpha.opacity,c/=100),c;
case"s":return e=this._getCss(d,"display")!="none",a=b.nOpacity,d.style.zoom=1,a=Math.max(Math.min(a,1),0),typeof d.style.opacity!="undefined"?d.style.opacity=a:(a=Math.ceil(a*100),typeof d.filters!="unknown"&&typeof d.filters.alpha!="undefined"?d.filters.alpha.opacity=a:d.style.filter=d.style.filter+" alpha(opacity="+a+")"),this
}},jindo.$Element.prototype.css=function(a,b){var c=g_checkVarType(arguments,{g:["sName:"+tString],s4str:[jindo.$Jindo._F("sName:"+tString),jindo.$Jindo._F("vValue:"+tString)],s4num:["sName:"+tString,"vValue:"+tNumeric],s4obj:["oObj:"+tHash]},"$Element#css"),d=this._element;
switch(c+""){case"s4str":case"s4num":var e={};
a=_revisionCSSAttr(a,getStyleIncludeVendorPrefix()),e[a]=b,a=e;
break;
case"s4obj":a=c.oObj;
var e={},f=getStyleIncludeVendorPrefix();
for(i in a){a.hasOwnProperty(i)&&(e[_revisionCSSAttr(i,f)]=a[i])
}a=e;
break;
case"g":var f=getStyleIncludeVendorPrefix();
a=_revisionCSSAttr(a,f);
var g=this._getCss;
if(a=="opacity"){return this.opacity()
}if((_JINDO_IS_FF||_JINDO_IS_OP)&&(a=="backgroundPositionX"||a=="backgroundPositionY")){var h=g(d,"backgroundPosition").split(/\s+/);
return a=="backgroundPositionX"?h[0]:h[1]
}if(!window.getComputedStyle&&a=="backgroundPosition"){return g(d,"backgroundPositionX")+" "+g(d,"backgroundPositionY")
}if(!_JINDO_IS_OP&&window.getComputedStyle&&(a=="padding"||a=="margin")){var j=g(d,a+"Top"),k=g(d,a+"Right"),l=g(d,a+"Bottom"),m=g(d,a+"Left");
return j==k&&l==m?j:j==l?k==m?j+" "+k:j+" "+k+" "+l+" "+m:j+" "+k+" "+l+" "+m
}return g(d,a)
}var n,o;
for(var p in a){if(a.hasOwnProperty(p)){n=a[p];
if(!jindo.$Jindo.isString(n)&&!jindo.$Jindo.isNumeric(n)){continue
}if(p=="opacity"){this.opacity(n);
continue
}p=="cssFloat"&&_JINDO_IS_IE&&(p="styleFloat");
if(!_JINDO_IS_FF&&!_JINDO_IS_OP||p!="backgroundPositionX"&&p!="backgroundPositionY"){this._setCss(d,p,/transition/i.test(p)?changeTransformValue(n):n)
}else{var h=this.css("backgroundPosition").split(/\s+/);
n=p=="backgroundPositionX"?n+" "+h[1]:h[0]+" "+n,this._setCss(d,"backgroundPosition",n)
}}}return this
},jindo.$Element.prototype._getCss=function(a,b){var c;
return window.getComputedStyle?c=function(a,b){try{b=="cssFloat"&&(b="float");
var c=a.ownerDocument||a.document||document,d=a.style[b]||c.defaultView.getComputedStyle(a,null).getPropertyValue(b.replace(/([A-Z])/g,"-$1").toLowerCase());
return b=="textDecoration"&&(d=d.replace(",","")),d
}catch(e){throw new jindo.$Error((a.tagName||"document")+jindo.$Except.NOT_USE_CSS,"$Element#css")
}}:a.currentStyle?c=function(a,b){try{b=="cssFloat"&&(b="styleFloat");
var c=a.style[b];
if(c){return c
}var d=a.currentStyle;
return d?d[b]:c
}catch(e){throw new jindo.$Error((a.tagName||"document")+jindo.$Except.NOT_USE_CSS,"$Element#css")
}}:c=function(a,b){try{return b=="cssFloat"&&_JINDO_IS_IE&&(b="styleFloat"),a.style[b]
}catch(c){throw new jindo.$Error((a.tagName||"document")+jindo.$Except.NOT_USE_CSS,"$Element#css")
}},jindo.$Element.prototype._getCss=c,c(a,b)
},jindo.$Element.prototype._setCss=function(a,b,c){"#top#left#right#bottom#".indexOf(b+"#")>0&&(typeof c=="number"||/\d$/.test(c))?a.style[b]=parseInt(c,10)+"px":a.style[b]=c
},jindo.$Element.prototype.attr=function(a,b){var c=g_checkVarType(arguments,{g:["sName:"+tString],s4str:["sName:"+tString,"vValue:"+tString],s4num:["sName:"+tString,"vValue:"+tNumeric],s4nul:["sName:"+tString,"vValue:"+tNull],s4bln:["sName:"+tString,"vValue:"+tBoolean],s4arr:["sName:"+tString,"vValue:"+tArray],s4obj:[jindo.$Jindo._F("oObj:"+tHash)]},"$Element#attr"),d=this._element,e=null,f,g,h,i,j,k;
switch(c+""){case"s4str":case"s4nul":case"s4num":case"s4bln":case"s4arr":var l={};
l[a]=b,a=l;
break;
case"s4obj":a=c.oObj;
break;
case"g":if(a=="class"||a=="className"){return d.className
}if(a=="style"){return d.style.cssText
}if(a=="checked"||a=="disabled"){return !!d[a]
}if(a=="value"){if(this.tag=="button"){return d.getAttributeNode("value").value
}if(this.tag=="select"){if(d.multiple){for(f=0,g=d.options.length;
f<g;
f++){j=d.options[f],j.selected&&(e||(e=[]),b=j.value,b==""&&(b=j.text),e.push(b))
}return e
}return d.selectedIndex<0?null:(b=d.options[d.selectedIndex].value,b==""?d.options[d.selectedIndex].text:b)
}return d.value
}if(a=="href"){return d.getAttribute(a,2)
}return d.getAttribute(a)
}i=function(a,b){var c=-1,d,e,f;
for(d=0,e=a.length;
d<e;
d++){f=a[d];
if(f.value===b||f.text===b){c=d;
break
}}return c
};
for(var m in a){if(a.hasOwnProperty(m)){var n=a[m];
if(jindo.$Jindo.isNull(n)){if(this.tag=="select"){if(d.multiple){for(f=0,g=d.options.length;
f<g;
f++){d.options[f].selected=!1
}}else{d.selectedIndex=-1
}}else{d.removeAttribute(m)
}}else{if(m=="class"||m=="className"){d.className=n
}else{if(m=="style"){d.style.cssText=n
}else{if(m=="checked"||m=="disabled"){d[m]=n
}else{if(m=="value"){if(this.tag=="select"){if(d.multiple){if(jindo.$Jindo.isArray(n)){k=jindo.$A(n);
for(f=0,g=d.options.length;
f<g;
f++){j=d.options[f],j.selected=k.has(j.value)||k.has(j.text)
}}else{d.selectedIndex=i(d.options,n)
}}else{d.selectedIndex=i(d.options,n)
}}else{d.value=n
}}else{d.setAttribute(m,n)
}}}}}}}return this
},jindo.$Element.prototype.width=function(a){var b=g_checkVarType(arguments,{g:[],s:["nWidth:"+tNumeric]},"$Element#width");
switch(b+""){case"g":return this._element.offsetWidth;
case"s":a=b.nWidth;
var c=this._element;
c.style.width=a+"px";
var d=c.offsetWidth;
if(d!=a&&d!==0){var e=a*2-d;
e>0&&(c.style.width=e+"px")
}return this
}},jindo.$Element.prototype.height=function(a){var b=g_checkVarType(arguments,{g:[],s:["nHeight:"+tNumeric]},"$Element#height");
switch(b+""){case"g":return this._element.offsetHeight;
case"s":a=b.nHeight;
var c=this._element;
c.style.height=a+"px";
var d=c.offsetHeight;
if(d!=a&&d!==0){var a=a*2-d;
a>0&&(c.style.height=a+"px")
}return this
}},jindo.$Element.prototype.className=function(a){var b=g_checkVarType(arguments,{g:[],s:[jindo.$Jindo._F("sClass:"+tString)]},"$Element#className"),c=this._element;
switch(b+""){case"g":return c.className;
case"s":return c.className=a,this
}},jindo.$Element.prototype.hasClass=function(a){var b=g_checkVarType;
return canUseClassList()?jindo.$Element.prototype.hasClass=function(a){var c=b(arguments,{"4str":["sClass:"+tString]},"$Element#hasClass");
return this._element.classList.contains(a)
}:jindo.$Element.prototype.hasClass=function(a){var c=b(arguments,{"4str":["sClass:"+tString]},"$Element#hasClass");
return(" "+this._element.className+" ").indexOf(" "+a+" ")>-1
},this.hasClass.apply(this,arguments)
},jindo.$Element.prototype.addClass=function(a){var b=g_checkVarType(arguments,{"4str":["sClass:"+tString]},"$Element#addClass"),c=this._element,d=c.className,e=(a+"").split(" "),f;
for(var g=e.length-1;
g>=0;
g--){f=e[g],(" "+d+" ").indexOf(" "+f+" ")==-1&&(d=d+" "+f)
}return c.className=d.replace(/\s+$/,"").replace(/^\s+/,""),this
},jindo.$Element.prototype.removeClass=function(a){var b=g_checkVarType(arguments,{"4str":["sClass:"+tString]},"$Element#removeClass"),c=this._element,d=c.className,e=(a+"").split(" "),f;
for(var g=e.length-1;
g>=0;
g--){d=(" "+d+" ").replace(new RegExp("\\b"+e[g]+"\\s+","g")," ")
}return c.className=d.replace(/\s+$/,"").replace(/^\s+/,""),this
},jindo.$Element.prototype.toggleClass=function(a,b){var c=g_checkVarType;
return canUseClassList()?jindo.$Element.prototype.toggleClass=function(a,b){var d=c(arguments,{"4str":["sClass:"+tString],"4str2":["sClass:"+tString,"sClass2:"+tString]},"$Element#toggleClass");
switch(d+""){case"4str":this._element.classList.toggle(a+"");
break;
case"4str2":a+="",b+="",this.hasClass(a)?(this.removeClass(a),this.addClass(b)):(this.addClass(a),this.removeClass(b))
}return this
}:jindo.$Element.prototype.toggleClass=function(a,b){var d=c(arguments,{"4str":["sClass:"+tString],"4str2":["sClass:"+tString,"sClass2:"+tString]},"$Element#toggleClass");
return b=b||"",this.hasClass(a)?(this.removeClass(a),b&&this.addClass(b)):(this.addClass(a),b&&this.removeClass(b)),this
},this.toggleClass.apply(this,arguments)
},jindo.$Element.prototype.cssClass=function(a,b){var c=g_checkVarType(arguments,{g:["sClass:"+tString],s4bln:["sClass:"+tString,"bCondition:"+tBoolean],s4obj:["oObj:"+tHash]},"$Element#cssClass");
switch(c+""){case"g":return this.hasClass(c.sClass);
case"s4bln":return c.bCondition?this.addClass(c.sClass):this.removeClass(c.sClass),this;
case"s4obj":var d=this._element;
a=c.oObj;
var e=d.className;
for(var f in a){a.hasOwnProperty(f)&&(a[f]?(" "+e+" ").indexOf(" "+f+" ")==-1&&(e=(e+" "+f).replace(/^\s+/,"")):(" "+e+" ").indexOf(" "+f+" ")>-1&&(e=(" "+e+" ").replace(" "+f+" "," ").replace(/\s+$/,"").replace(/^\s+/,"")))
}return d.className=e,this
}},jindo.$Element.prototype.text=function(a){var b=g_checkVarType(arguments,{g:[],s4str:["sText:"+tString],s4num:[jindo.$Jindo._F("sText:"+tNumeric)],s4bln:["sText:"+tBoolean]},"$Element#text"),c=this._element,d=this.tag,e,f;
switch(b+""){case"g":e=c.textContent!==undefined?"textContent":"innerText";
if(d=="textarea"||d=="input"){e="value"
}return c[e];
case"s4str":case"s4num":case"s4bln":try{if(d=="textarea"||d=="input"){c.value=a+""
}else{var f=c.ownerDocument||c.document||document;
this.empty(),c.appendChild(f.createTextNode(a))
}}catch(g){return c.innerHTML=(a+"").replace(/&/g,"&amp;").replace(/</g,"&lt;")
}return this
}},jindo.$Element.prototype.html=function(a){var b=_JINDO_IS_IE,c=_JINDO_IS_FF,d={g:[],s4str:[jindo.$Jindo._F("sText:"+tString)],s4num:["sText:"+tNumeric],s4bln:["sText:"+tBoolean]},e=g_checkVarType;
return b?jindo.$Element.prototype.html=function(a){var b=e(arguments,d,"$Element#html");
switch(b+""){case"g":return this._element.innerHTML;
case"s4str":case"s4num":case"s4bln":a+="",jindo.cssquery&&jindo.cssquery.release();
var c=this._element;
while(c.firstChild){c.removeChild(c.firstChild)
}var f="R"+(new Date).getTime()+parseInt(Math.random()*100000,10),g=c.ownerDocument||c.document||document,h,i=c.tagName.toLowerCase();
switch(i){case"select":case"table":h=g.createElement("div"),h.innerHTML="<"+i+' class="'+f+'">'+a+"</"+i+">";
break;
case"tr":case"thead":case"tbody":case"colgroup":h=g.createElement("div"),h.innerHTML="<table><"+i+' class="'+f+'">'+a+"</"+i+"></table>";
break;
default:c.innerHTML=a
}if(h){var j;
for(j=h.firstChild;
j;
j=j.firstChild){if(j.className==f){break
}}if(j){var k=!0;
for(var l;
l=c.firstChild;
){l.removeNode(!0)
}for(var l=j.firstChild;
l;
l=j.firstChild){if(i=="select"){var m=l.cloneNode(!0);
l.selected&&k&&(k=!1,m.selected=!0),c.appendChild(m),l.removeNode(!0)
}else{c.appendChild(l)
}}h.removeNode&&h.removeNode(!0)
}h=null
}return this
}}:c?jindo.$Element.prototype.html=function(a){var b=e(arguments,d,"$Element#html");
switch(b+""){case"g":return this._element.innerHTML;
case"s4str":case"s4num":case"s4bln":a+="";
var c=this._element;
if(!c.parentNode){var f="R"+(new Date).getTime()+parseInt(Math.random()*100000,10),g=c.ownerDocument||c.document||document,h,i=c.tagName.toLowerCase();
switch(i){case"select":case"table":h=g.createElement("div"),h.innerHTML="<"+i+' class="'+f+'">'+a+"</"+i+">";
break;
case"tr":case"thead":case"tbody":case"colgroup":h=g.createElement("div"),h.innerHTML="<table><"+i+' class="'+f+'">'+a+"</"+i+"></table>";
break;
default:c.innerHTML=a
}if(h){var j;
for(j=h.firstChild;
j;
j=j.firstChild){if(j.className==f){break
}}if(j){for(var k;
k=c.firstChild;
){k.removeNode(!0)
}for(var k=j.firstChild;
k;
k=j.firstChild){c.appendChild(k)
}h.removeNode&&h.removeNode(!0)
}h=null
}}else{c.innerHTML=a
}return this
}}:jindo.$Element.prototype.html=function(a){var b=e(arguments,d,"$Element#html");
switch(b+""){case"g":return this._element.innerHTML;
case"s4str":case"s4num":case"s4bln":a+="";
var c=this._element;
return c.innerHTML=a,this
}},this.html.apply(this,arguments)
},jindo.$Element.prototype.outerHTML=function(){var a=this._element;
a=jindo.$Jindo.isDocument(a)?a.documentElement:a;
if(a.outerHTML!==undefined){return a.outerHTML
}var b=a.ownerDocument||a.document||document,c=b.createElement("div"),d=a.parentNode;
if(!d){return a.innerHTML
}d.insertBefore(c,a),c.style.display="none",c.appendChild(a);
var e=c.innerHTML;
return d.insertBefore(a,c),d.removeChild(c),e
},jindo.$Element.prototype.toString=function(){return this.outerHTML()||"[object $Element]"
},jindo.$Element.prototype.attach=function(a,b){var c=g_checkVarType(arguments,{"4str":["sEvent:"+tString,"fpCallback:"+tFunction],"4obj":["hListener:"+tHash]},"$Element#attach"),d,e;
switch(c+""){case"4str":d=splitEventSelector(c.sEvent),this._add(d.type,d.event,d.selector,b);
break;
case"4obj":e=c.hListener;
for(var f in e){this.attach(f,e[f])
}}return this
},jindo.$Element.prototype.detach=function(a,b){var c=g_checkVarType(arguments,{"4str":["sEvent:"+tString,"fpCallback:"+tFunction],"4obj":["hListener:"+tHash]},"$Element#detach"),d,e;
switch(c+""){case"4str":d=splitEventSelector(c.sEvent),this._del(d.type,d.event,d.selector,b);
break;
case"4obj":e=c.hListener;
for(var f in e){this.detach(f,e[f])
}}return this
},jindo.$Element.prototype.delegate=function(a,b,c){var d=g_checkVarType(arguments,{"4str":["sEvent:"+tString,"vFilter:"+tString,"fpCallback:"+tFunction],"4fun":["sEvent:"+tString,"vFilter:"+tFunction,"fpCallback:"+tFunction]},"$Element#delegate");
return this._add("delegate",a,b,c)
},jindo.$Element.prototype.undelegate=function(a,b,c){var d=g_checkVarType(arguments,{"4str":["sEvent:"+tString,"vFilter:"+tString,"fpCallback:"+tFunction],"4fun":["sEvent:"+tString,"vFilter:"+tFunction,"fpCallback:"+tFunction],group_for_string:["sEvent:"+tString,"vFilter:"+tString],group_for_function:["sEvent:"+tString,"vFilter:"+tFunction]},"$Element#undelegate");
return this._del("delegate",a,b,c)
},jindo.$Element.prototype._add=function(a,b,c,d){var e=jindo.$Element.eventManager,f=b;
b=b.toLowerCase();
var g=e.splitGroup(b);
b=g.event;
var h=g.group,i=this._element,j=i.__jindo__id,k=i.ownerDocument||i.document||document;
if(hasCustomEvent(b)){c=c||"_NONE_";
var l=jindo.$Fn(d,this).bind();
normalCustomEventAttach(i,b,j,c,d,l),getCustomEvent(b)&&customEventAttach(a,b,c,d,l,i,jindo.$Fn(this._add,this).bind())
}else{if(b=="domready"&&jindo.$Jindo.isWindow(i)){return jindo.$Element(k).attach(b,d),this
}if(b=="load"&&i===k){return jindo.$Element(window).attach(b,d),this
}if(!document.addEventListener&&"domready"==b){if(window.top!=window){throw jindo.$Error(jindo.$Except.NOT_WORK_DOMREADY,"$Element#attach")
}return jindo.$Element._domready(i,d),this
}b=e.revisionEvent(a,b,f),d=e.revisionCallback(a,b,f,d),e.isInit(this._key)||e.init(this._key,i),e.hasEvent(this._key,b,f)||e.initEvent(this,b,f,h),e.hasGroup(this._key,b,h)||e.initGroup(this._key,b,h),e.addEventListener(this._key,b,h,a,c,d)
}return this
},jindo.$Element.prototype._del=function(a,b,c,d){var e=jindo.$Element.eventManager,f=b;
b=b.toLowerCase();
var g=e.splitGroup(b);
b=g.event;
var h=g.group,i=this._element.ownerDocument||this._element.document||document;
if(hasCustomEvent(b)){var j=this._element.__jindo__id;
c=c||"_NONE_";
var k=getNormalEventListener(j,b,c),l=k.wrap_listener,m=k.real_listener,n=[],o=[];
for(var p=0,q=m.length;
p<q;
p++){m[p]!=d&&(n.push(l[p]),o.push(m[p]))
}if(o.length==0){var r=normalCustomEvent[b][j],s=0;
for(var p in r){if(p!=="ele"){s++;
break
}}s===0?delete normalCustomEvent[b][j]:delete normalCustomEvent[b][j][c]
}customEvent[b]&&(setCustomEventListener(j,b,c,o,n),o.length==0&&(customEventDetach(a,b,c,d,this._element,jindo.$Fn(this._del,this).bind()),delete customEventStore[j][b][c]))
}else{if(b=="domready"&&jindo.$Jindo.isWindow(this._element)){return jindo.$Element(i).detach(b,d),this
}if(b=="load"&&this._element===i){return jindo.$Element(window).detach(b,d),this
}b=e.revisionEvent(a,b,f);
if(!document.addEventListener&&"domready"==b){var t=[],u=jindo.$Element._domready.list;
for(var p=0,q=u.length;
p<q;
p++){u[p]!=d&&t.push(u[p])
}return jindo.$Element._domready.list=t,this
}if(h===NONE_GROUP&&!jindo.$Jindo.isFunction(d)&&!c){throw new jindo.$Error(jindo.$Except.HAS_FUNCTION_FOR_GROUP,"$Element#"+(a=="normal"?"detach":"delegate"))
}e.removeEventListener(this._key,b,h,a,c,d)
}return this
};
var mouseTouchPointerEvent=function(a){var b={};
return window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>0?b={mousedown:"MSPointerDown",mouseup:"MSPointerUp",mousemove:"MSPointerMove",mouseover:"MSPointerOver",mouseout:"MSPointerOut",touchstart:"MSPointerDown",touchend:"MSPointerUp",touchmove:"MSPointerMove",pointerdown:"MSPointerDown",pointerup:"MSPointerUp",pointermove:"MSPointerMove",pointerover:"MSPointerOver",pointerout:"MSPointerOut",pointercancel:"MSPointerCancel"}:_JINDO_IS_MO&&(b={mousedown:"touchstart",mouseup:"touchend",mousemove:"touchmove",pointerdown:"touchstart",pointerup:"touchend",pointermove:"touchmove"}),mouseTouchPointerEvent=function(a){return b[a]?b[a]:a
},mouseTouchPointerEvent(a)
};
jindo.$Element.eventManager=function(){function b(a,b,c){return function(){var d=_slice.call(arguments,0);
return c.length&&(d=c.concat(d)),a.apply(b,d)
}
}var a={};
return{revisionCallback:function(a,b,c,d){if((document.addEventListener||_JINDO_IS_IE&&a=="delegate")&&(c=="mouseenter"||c=="mouseleave")){var e=jindo.$Element.eventManager._fireWhenElementBoundary(a,d);
e._origin_=d,d=e
}return d
},_fireWhenElementBoundary:function(a,b){return function(c){var d=c.relatedElement?jindo.$Element(c.relatedElement):null,e=c.currentElement;
a=="delegate"&&(e=c.element);
if(d&&(d.isEqual(e)||d.isChildOf(e))){return
}b(c)
}
},revisionEvent:function(a,b,c){return document.addEventListener!==undefined?this.revisionEvent=function(a,b,c){if(/^ms/i.test(c)){return c
}var d=jindo.$Event.hook(b);
if(d){return jindo.$Jindo.isFunction(d)?d():d
}b=b.toLowerCase();
if(b=="domready"||b=="domcontentloaded"){b="DOMContentLoaded"
}else{if(b=="mousewheel"&&!_JINDO_IS_WK&&!_JINDO_IS_OP&&!_JINDO_IS_IE){b="DOMMouseScroll"
}else{if(b!="mouseenter"||!!_JINDO_IS_IE&&a!="delegate"){if(b!="mouseleave"||!!_JINDO_IS_IE&&a!="delegate"){if(b=="transitionend"||b=="transitionstart"){var e=b.replace("transition",""),f=getStyleIncludeVendorPrefix();
f.transition!="transition"&&(e=e.substr(0,1).toUpperCase()+e.substr(1)),b=f.transition+e
}else{if(b=="animationstart"||b=="animationend"||b=="animationiteration"){var e=b.replace("animation",""),f=getStyleIncludeVendorPrefix();
f.animation!="animation"&&(e=e.substr(0,1).toUpperCase()+e.substr(1)),b=f.animation+e
}else{if(b==="focusin"||b==="focusout"){b=b==="focusin"?"focus":"blur"
}}}}else{b="mouseout"
}}else{b="mouseover"
}}}return mouseTouchPointerEvent(b)
}:this.revisionEvent=function(a,b,c){if(/^ms/i.test(c)){return c
}var d=jindo.$Event.hook(b);
return d?jindo.$Jindo.isFunction(d)?d():d:(a=="delegate"&&b=="mouseenter"?b="mouseover":a=="delegate"&&b=="mouseleave"&&(b="mouseout"),mouseTouchPointerEvent(b))
},this.revisionEvent(a,b,c)
},test:function(){return a
},isInit:function(b){return !!a[b]
},init:function(b,c){a[b]={ele:c,event:{}}
},getEventConfig:function(b){return a[b]
},hasEvent:function(b,c,d){if(!document.addEventListener&&c.toLowerCase()=="domready"){return jindo.$Element._domready.list?jindo.$Element._domready.list.length>0?!0:!1:!1
}c=jindo.$Element.eventManager.revisionEvent("",c,d);
try{return !!a[b].event[c]
}catch(e){return !1
}},hasGroup:function(b,c,d){return !!a[b].event[c].type[d]
},initEvent:function(c,d,e,f){var g=c._key,h=a[g].event,i=b(function(a,b,c){c=c||window.event,c.currentTarget===undefined&&(c.currentTarget=this._element);
var d=jindo.$Event(c);
d.currentElement||(d.currentElement=this._element),d.realType=b;
var e=d.element,f=jindo.$Element.eventManager,g=f.getEventConfig(d.currentElement.__jindo__id),h=g.event[a].type;
for(var i in h){if(h.hasOwnProperty(i)){var j=h[i].normal;
for(var k=0,l=j.length;
k<l;
k++){j[k].call(this,d)
}var m=h[i].delegate,n,o;
for(var p in m){if(m.hasOwnProperty(p)){n=m[p].checker(e);
if(n[0]){o=m[p].callback,d.element=n[1];
for(var q=0,r=o.length;
q<r;
q++){o[q].call(this,d)
}}}}}}},c,[d,e]);
h[d]={listener:i,type:{}},jindo.$Element._eventBind(c._element,d,i,e==="focusin"||e==="focusout")
},initGroup:function(b,c,d){var e=a[b].event[c].type;
e[d]={normal:[],delegate:{}}
},addEventListener:function(b,c,d,e,f,g){var h=a[b].event[c].type[d];
e==="normal"?h.normal.push(g):e==="delegate"&&(this.hasDelegate(h,f)||this.initDelegate(a[b].ele,h,f),this.addDelegate(h,f,g))
},hasDelegate:function(a,b){return !!a.delegate[b]
},containsElement:function(a,b,c,d){if(a==b&&d){return jindo.$$.test(b,c)
}var e=jindo.$$(c,a);
for(var f=0,g=e.length;
f<g;
f++){if(e[f]==b){return !0
}}return !1
},initDelegate:function(a,c,d){var e;
jindo.$Jindo.isString(d)?e=b(function(a,b,c){var d=c,e=this.containsElement(a,c,b,!0);
if(!e){var f=this._getParent(a,c);
for(var g=0,h=f.length;
g<h;
g++){d=f[g];
if(this.containsElement(a,d,b)){e=!0;
break
}}}return[e,d]
},this,[a,d]):e=b(function(a,b,c){var d=c,e=b(a,c);
if(!e){var f=this._getParent(a,c);
for(var g=0,h=f.length;
g<h;
g++){d=f[g];
if(b(a,d)){e=!0;
break
}}}return[e,d]
},this,[a,d]),c.delegate[d]={checker:e,callback:[]}
},addDelegate:function(a,b,c){a.delegate[b].callback.push(c)
},removeEventListener:function(b,c,d,e,f,g){var h;
try{h=a[b].event[c].type[d]
}catch(i){return
}var j=[],k;
e==="normal"?k=h.normal:k=h.delegate[f].callback;
if(c==NONE_GROUP||jindo.$Jindo.isFunction(g)){for(var l=0,m=k.length;
l<m;
l++){(k[l]._origin_||k[l])!=g&&j.push(k[l])
}}e==="normal"?(delete h.normal,h.normal=j):e==="delegate"&&(delete h.delegate[f].callback,h.delegate[f].callback=j),this.cleanUp(b,c)
},cleanUpAll:function(){var b;
for(var c in a){a.hasOwnProperty(c)&&this.cleanUpUsingKey(c,!0)
}},cleanUpUsingKey:function(b,c){var d;
if(!a[b]||!a[b].event){return
}d=a[b].event;
for(var e in d){d.hasOwnProperty(e)&&this.cleanUp(b,e,c)
}},cleanUp:function(b,c,d){var e;
try{e=a[b].event[c].type
}catch(f){return
}var g,h=!1;
if(!d){for(var i in e){if(e.hasOwnProperty(i)){g=e[i];
if(g.normal.length){h=!0;
break
}var j=g.delegate;
for(var k in j){if(j.hasOwnProperty(k)&&j[k].callback.length){h=!0;
break
}}if(h){break
}}}}if(!h){jindo.$Element._unEventBind(a[b].ele,c,a[b].event[c].listener),delete a[b].event[c];
var l=!0,m=a[b].event;
for(var n in m){if(m.hasOwnProperty(n)){l=!1;
break
}}l&&delete a[b]
}},splitGroup:function(a){var b=/\s*(.+?)\s*\(\s*(.*?)\s*\)/.exec(a);
return b?{event:b[1].toLowerCase(),group:b[2].toLowerCase()}:{event:a.toLowerCase(),group:NONE_GROUP}
},_getParent:function(a,b){var c=a,d=[],e=null,f=b.ownerDocument||b.document||document;
while(b.parentNode&&e!=c){e=b.parentNode;
if(e==f.documentElement){break
}d[d.length]=e,b=e
}return d
}}
}(),jindo.$Element._domready=function(a,b){if(jindo.$Element._domready.list===undefined){var c=null;
jindo.$Element._domready.list=[b];
var d=!1,e=function(){if(!d){d=!0;
var b=jindo.$Element._domready.list.concat(),e={type:"domready",target:a,currentTarget:a};
while(c=b.shift()){c(e)
}}};
(function(){try{a.documentElement.doScroll("left")
}catch(b){setTimeout(arguments.callee,50);
return
}e()
})(),a.onreadystatechange=function(){a.readyState=="complete"&&(a.onreadystatechange=null,e())
}
}else{jindo.$Element._domready.list.push(b)
}},jindo.$Element.prototype.appear=function(a,b){function f(){var c=g_checkVarType(arguments,{"4voi":[],"4num":["nDuration:"+tNumeric],"4fun":["nDuration:"+tNumeric,"fpCallback:"+tFunction]},"$Element#appear");
switch(c+""){case"4voi":a=0.3,b=function(){};
break;
case"4num":a=c.nDuration,b=function(){};
break;
case"4fun":a=c.nDuration,b=c.fpCallback
}return[a,b]
}var c=getStyleIncludeVendorPrefix(),d=c.transition,e;
return d=="transition"?e="end":e="End",c.transition?jindo.$Element.prototype.appear=function(a,b){var d=f.apply(this,_toArray(arguments));
a=d[0],b=d[1];
var g=this,h=this._element,i=c.transition,j=function(){g.show(),h.style[i+"Property"]="",h.style[i+"Duration"]="",h.style[i+"TimingFunction"]="",h.style.opacity="",b.call(g,g),h.removeEventListener(i+e,arguments.callee,!1)
};
return this.visible()||(h.style.opacity=h.style.opacity||0,g.show()),h.addEventListener(i+e,j,!1),h.style[i+"Property"]="opacity",h.style[i+"Duration"]=a+"s",h.style[i+"TimingFunction"]="linear",setOpacity(h,"1"),this
}:jindo.$Element.prototype.appear=function(a,b){var c=f.apply(this,_toArray(arguments));
a=c[0],b=c[1];
var d=this,e=this.opacity();
this._getCss(this._element,"display")=="none"&&(e=0);
if(e==1){return this
}try{clearTimeout(this._fade_timer)
}catch(g){}var h=(1-e)/((a||0.3)*100),i=function(){e+=h,d.opacity(e),e>=1?(d._element.style.filter="",b.call(d,d)):d._fade_timer=setTimeout(i,10)
};
return this.show(),i(),this
},this.appear.apply(this,arguments)
},jindo.$Element.prototype.disappear=function(a,b){function f(){var c=g_checkVarType(arguments,{"4voi":[],"4num":["nDuration:"+tNumeric],"4fun":["nDuration:"+tNumeric,"fpCallback:"+tFunction]},"$Element#disappear");
switch(c+""){case"4voi":a=0.3,b=function(){};
break;
case"4num":a=c.nDuration,b=function(){};
break;
case"4fun":a=c.nDuration,b=c.fpCallback
}return[a,b]
}var c=getStyleIncludeVendorPrefix(),d=c.transition,e;
return d=="transition"?e="end":e="End",c.transition?jindo.$Element.prototype.disappear=function(a,b){var d=f.apply(this,_toArray(arguments));
a=d[0],b=d[1];
var g=this,h=c.transition,i=this._element,j=function(){g.hide(),i.style[h+"Property"]="",i.style[h+"Duration"]="",i.style[h+"TimingFunction"]="",i.style.opacity="",b.call(g,g),i.removeEventListener(h+e,arguments.callee,!1)
};
return i.addEventListener(h+e,j,!1),i.style[h+"Property"]="opacity",i.style[h+"Duration"]=a+"s",i.style[h+"TimingFunction"]="linear",setOpacity(i,"0"),this
}:jindo.$Element.prototype.disappear=function(a,b){var c=f.apply(this,_toArray(arguments));
a=c[0],b=c[1];
var d=this,e=this.opacity();
if(e==0){return this
}try{clearTimeout(this._fade_timer)
}catch(g){}var h=e/((a||0.3)*100),i=function(){e-=h,d.opacity(e),e<=0?(d._element.style.display="none",d.opacity(1),b.call(d,d)):d._fade_timer=setTimeout(i,10)
};
return i(),this
},this.disappear.apply(this,arguments)
},jindo.$Element.prototype.offset=function(a,b){var c=g_checkVarType(arguments,{g:[],s:["nTop:"+tNumeric,"nLeft:"+tNumeric]},"$Element#offset");
switch(c+""){case"g":return this.offset_get();
case"s":return this.offset_set(c.nTop,c.nLeft)
}},jindo.$Element.prototype.offset_set=function(a,b){var c=this._element,d=null;
isNaN(parseFloat(this._getCss(c,"top")))&&(c.style.top="0px"),isNaN(parseFloat(this._getCss(c,"left")))&&(c.style.left="0px");
var e=this.offset_get(),f={top:a-e.top,left:b-e.left};
return c.style.top=parseFloat(this._getCss(c,"top"))+f.top+"px",c.style.left=parseFloat(this._getCss(c,"left"))+f.left+"px",this
},jindo.$Element.prototype.offset_get=function(a,b){var c=this._element,d=null,e=_JINDO_IS_SP&&!_JINDO_IS_CH,f=_JINDO_IS_IE,g=0;
f&&(document.documentMode?g=document.documentMode:g=navigator.userAgent.match(/(?:MSIE) ([0-9.]+)/)[1]);
var h=function(a){var b={left:0,top:0};
for(var c=a,d=c.offsetParent;
c=c.parentNode;
){c.offsetParent&&(b.left-=c.scrollLeft,b.top-=c.scrollTop),c==d&&(b.left+=a.offsetLeft+c.clientLeft,b.top+=a.offsetTop+c.clientTop,c.offsetParent||(b.left+=c.offsetLeft,b.top+=c.offsetTop),d=c.offsetParent,a=c)
}return b
},i=function(a){var b={left:0,top:0},c=a.ownerDocument||a.document||document,e=c.documentElement,h=c.body;
if(a.getBoundingClientRect){if(!d){var i=window==top;
if(!i){try{i=window.frameElement&&window.frameElement.frameBorder==1
}catch(j){}}f&&g<8&&window.external&&i&&document.body.contains(a)?(d={left:2,top:2},oBase=null):d={left:0,top:0}
}var k;
try{k=a.getBoundingClientRect()
}catch(j){k={left:0,top:0}
}a!==e&&a!==h&&(b.left=k.left-d.left,b.top=k.top-d.top,b.left+=e.scrollLeft||h.scrollLeft,b.top+=e.scrollTop||h.scrollTop)
}else{if(c.getBoxObjectFor){var k=c.getBoxObjectFor(a),l=c.getBoxObjectFor(e||h);
b.left=k.screenX-l.screenX,b.top=k.screenY-l.screenY
}else{for(var m=a;
m;
m=m.offsetParent){b.left+=m.offsetLeft,b.top+=m.offsetTop
}for(var m=a.parentNode;
m;
m=m.parentNode){if(m.tagName=="BODY"){break
}m.tagName=="TR"&&(b.top+=2),b.left-=m.scrollLeft,b.top-=m.scrollTop
}}}return b
};
return(e?h:i)(c)
},jindo.$Element.prototype.evalScripts=function(sHTML){var oArgs=g_checkVarType(arguments,{"4str":["sHTML:"+tString]},"$Element#evalScripts"),aJS=[];
return sHTML=sHTML.replace(new RegExp("<script(\\s[^>]+)*>(.*?)<\/script>","gi"),function(a,b,c){return aJS.push(c),""
}),eval(aJS.join("\n")),this
},jindo.$Element.prototype.clone=function(a){var b=g_checkVarType(arguments,{"default":[],set:["bDeep:"+tBoolean]},"$Element#clone");
return b+""=="default"&&(a=!0),jindo.$Element(this._element.cloneNode(a))
},jindo.$Element._common=function(a,b){try{return jindo.$Element(a)._element
}catch(c){throw TypeError(c.message.replace(/\$Element/g,"$Element#"+b).replace(/Element\.html/g,"Element.html#"+b))
}},jindo.$Element._prepend=function(a,b){var c=a.childNodes;
c.length>0?a.insertBefore(b,c[0]):a.appendChild(b)
},jindo.$Element.prototype.append=function(a){return this._element.appendChild(jindo.$Element._common(a,"append")),this
},jindo.$Element.prototype.prepend=function(a){return jindo.$Element._prepend(this._element,jindo.$Element._common(a,"prepend")),this
},jindo.$Element.prototype.replace=function(a){a=jindo.$Element._common(a,"replace"),jindo.cssquery&&jindo.cssquery.release();
var b=this._element,c=b.parentNode;
if(c&&c.replaceChild){return c.replaceChild(a,b),this
}var d=a;
return c.insertBefore(d,b),c.removeChild(b),this
},jindo.$Element.prototype.appendTo=function(a){return jindo.$Element._common(a,"appendTo").appendChild(this._element),this
},jindo.$Element.prototype.prependTo=function(a){return jindo.$Element._prepend(jindo.$Element._common(a,"prependTo"),this._element),this
},jindo.$Element.prototype.before=function(a){var b=jindo.$Element._common(a,"before");
return this._element.parentNode.insertBefore(b,this._element),this
},jindo.$Element.prototype.after=function(a){return a=jindo.$Element._common(a,"after"),this.before(a),jindo.$Element(a).before(this),this
},jindo.$Element.prototype.parent=function(a,b){var c=g_checkVarType(arguments,{"4voi":[],"4fun":["fpFunc:"+tFunction],"4nul":["fpFunc:"+tNull],for_function_number:["fpFunc:"+tFunction,"nLimit:"+tNumeric],for_null_number:["fpFunc:"+tNull,"nLimit:"+tNumeric]},"$Element#parent"),d=this._element;
switch(c+""){case"4voi":return d.parentNode?jindo.$Element(d.parentNode):null;
case"4fun":case"4nul":b=-1;
break;
case"for_function_number":case"for_null_number":c.nLimit==0&&(b=-1)
}var e=[],f=null;
while(d.parentNode&&b--!=0){try{f=jindo.$Element(d.parentNode)
}catch(d){f=null
}if(d.parentNode==document.documentElement){break
}if(!a||a&&a.call(this,f)){e[e.length]=f
}d=d.parentNode
}return e
},jindo.$Element.prototype.child=function(a,b){var c=g_checkVarType(arguments,{"4voi":[],"4fun":["fpFunc:"+tFunction],"4nul":["fpFunc:"+tNull],for_function_number:["fpFunc:"+tFunction,"nLimit:"+tNumeric],for_null_number:["fpFunc:"+tNull,"nLimit:"+tNumeric]},"$Element#child"),d=this._element,e=[],f=null,g=null;
switch(c+""){case"4voi":var h=d.childNodes,i=[];
for(var j=0,k=h.length;
j<k;
j++){if(h[j].nodeType==1){try{i.push(jindo.$Element(h[j]))
}catch(d){i.push(null)
}}}return i;
case"4fun":case"4nul":b=-1;
break;
case"for_function_number":case"for_null_number":c.nLimit==0&&(b=-1)
}return(g=function(b,c,d){var f=null,h=null;
for(var i=0;
i<b.childNodes.length;
i++){f=b.childNodes[i];
if(f.nodeType!=1){continue
}try{h=jindo.$Element(b.childNodes[i])
}catch(j){h=null
}if(!a||a&&a.call(d,h)){e[e.length]=h
}c!=0&&g(b.childNodes[i],c-1)
}})(d,b-1,this),e
},jindo.$Element.prototype.prev=function(a){var b=g_checkVarType(arguments,{"4voi":[],"4fun":["fpFunc:"+tFunction],"4nul":["fpFunc:"+tNull]},"$Element#prev"),c=this._element,d=[];
switch(b+""){case"4voi":if(!c){return null
}do{c=c.previousSibling;
if(!c||c.nodeType!=1){continue
}try{return c==null?null:jindo.$Element(c)
}catch(c){return null
}}while(c);
try{return c==null?null:jindo.$Element(c)
}catch(c){return null
}case"4fun":case"4nul":if(!c){return d
}do{c=c.previousSibling;
if(!c||c.nodeType!=1){continue
}if(!a||a.call(this,c)){try{c==null?d[d.length]=null:d[d.length]=jindo.$Element(c)
}catch(c){d[d.length]=null
}}}while(c);
try{return d
}catch(c){return null
}}},jindo.$Element.prototype.next=function(a){var b=g_checkVarType(arguments,{"4voi":[],"4fun":["fpFunc:"+tFunction],"4nul":["fpFunc:"+tNull]},"$Element#next"),c=this._element,d=[];
switch(b+""){case"4voi":if(!c){return null
}do{c=c.nextSibling;
if(!c||c.nodeType!=1){continue
}try{return c==null?null:jindo.$Element(c)
}catch(c){return null
}}while(c);
try{return c==null?null:jindo.$Element(c)
}catch(c){return null
}case"4fun":case"4nul":if(!c){return d
}do{c=c.nextSibling;
if(!c||c.nodeType!=1){continue
}if(!a||a.call(this,c)){try{c==null?d[d.length]=null:d[d.length]=jindo.$Element(c)
}catch(c){d[d.length]=null
}}}while(c);
try{return d
}catch(c){return null
}}},jindo.$Element.prototype.first=function(){var a=this._element.firstElementChild||this._element.firstChild;
if(!a){return null
}while(a&&a.nodeType!=1){a=a.nextSibling
}try{return a?jindo.$Element(a):null
}catch(b){return null
}},jindo.$Element.prototype.last=function(){var a=this._element.lastElementChild||this._element.lastChild;
if(!a){return null
}while(a&&a.nodeType!=1){a=a.previousSibling
}try{return a?jindo.$Element(a):null
}catch(b){return null
}},jindo.$Element._contain=function(a,b){if(document.compareDocumentPosition){return !!(a.compareDocumentPosition(b)&16)
}if(a.contains){return a!==b&&(a.contains?a.contains(b):!0)
}if(!document.body.contains){var c=a,d=b;
while(c&&c.parentNode){c=c.parentNode;
if(c==d){return !0
}}return !1
}if(a===(b.ownerDocument||b.document)&&b.tagName&&b.tagName.toUpperCase()==="BODY"){return !0
}a.nodeType===9&&a!==b&&(a=a.body);
try{return a!==b&&(a.contains?a.contains(b):!0)
}catch(c){return !1
}},jindo.$Element.prototype.isChildOf=function(a){try{return jindo.$Element._contain(jindo.$Element(a)._element,this._element)
}catch(b){return !1
}},jindo.$Element.prototype.isParentOf=function(a){try{return jindo.$Element._contain(this._element,jindo.$Element(a)._element)
}catch(b){return !1
}},jindo.$Element.prototype.isEqual=function(a){try{return this._element===jindo.$Element(a)._element
}catch(b){return !1
}},jindo.$Element.prototype.fireEvent=function(a,b){function d(a,b,c,d){var e=normalCustomEvent[b],f,g;
for(var h in e){g=e[h],f=g.ele;
var i;
for(var j in g){if(j==="_NONE_"){if(f==a||c.isChildOf(f)){i=g[j].wrap_listener;
for(var k=0,l=i.length;
k<l;
k++){i[k]()
}}}else{if(jindo.$Element.eventManager.containsElement(f,a,j,!1)){i=g[j].wrap_listener;
for(var k=0,l=i.length;
k<l;
k++){i[k]()
}}}}}}function e(a,b){var e=g_checkVarType(arguments,c,"$Element#fireEvent"),f=this._element;
if(normalCustomEvent[a]){return d(f,a,this,!!normalCustomEvent[a]),this
}a=(a+"").toLowerCase();
var g=document.createEventObject();
switch(e+""){case"4obj":b=e.oProps;
for(k in b){b.hasOwnProperty(k)&&(g[k]=b[k])
}g.button=(b.left?1:0)+(b.middle?4:0)+(b.right?2:0),g.relatedTarget=b.relatedElement||null
}return this.tag=="input"&&a=="click"&&(f.type=="checkbox"?f.checked=!f.checked:f.type=="radio"&&(f.checked=!0)),this._element.fireEvent("on"+a,g),this
}function f(a,b){var e=g_checkVarType(arguments,c,"$Element#fireEvent"),f=this._element;
if(normalCustomEvent[a]){return d(f,a,this,!!normalCustomEvent[a]),this
}var g="HTMLEvents";
a=(a+"").toLowerCase(),a=="click"||a.indexOf("mouse")==0?(g="MouseEvent",a=="mousewheel"&&(a="dommousescroll")):a.indexOf("key")==0&&(g="KeyboardEvent");
var h;
switch(e+""){case"4obj":b=e.oProps,b.button=0+(b.middle?1:0)+(b.right?2:0),b.ctrl=b.ctrl||!1,b.alt=b.alt||!1,b.shift=b.shift||!1,b.meta=b.meta||!1;
switch(g){case"MouseEvent":h=document.createEvent(g),h.initMouseEvent(a,!0,!0,null,b.detail||0,b.screenX||0,b.screenY||0,b.clientX||0,b.clientY||0,b.ctrl,b.alt,b.shift,b.meta,b.button,b.relatedElement||null);
break;
case"KeyboardEvent":if(window.KeyEvent){h=document.createEvent("KeyEvents"),h.initKeyEvent(a,!0,!0,window,b.ctrl,b.alt,b.shift,b.meta,b.keyCode,b.keyCode)
}else{try{h=document.createEvent("Events")
}catch(i){h=document.createEvent("UIEvents")
}finally{h.initEvent(a,!0,!0),h.ctrlKey=b.ctrl,h.altKey=b.alt,h.shiftKey=b.shift,h.metaKey=b.meta,h.keyCode=b.keyCode,h.which=b.keyCode
}}break;
default:h=document.createEvent(g),h.initEvent(a,!0,!0)
}break;
case"4str":h=document.createEvent(g),h.initEvent(a,!0,!0)
}return f.dispatchEvent(h),this
}var c={"4str":[jindo.$Jindo._F("sEvent:"+tString)],"4obj":["sEvent:"+tString,"oProps:"+tHash]};
return jindo.$Element.prototype.fireEvent=document.dispatchEvent!==undefined?f:e,this.fireEvent.apply(this,_toArray(arguments))
},jindo.$Element.prototype.empty=function(){return jindo.cssquery&&jindo.cssquery.release(),this.html(""),this
},jindo.$Element.prototype.remove=function(a){jindo.cssquery&&jindo.cssquery.release();
var b=jindo.$Element;
return b(b._common(a,"remove")).leave(),this
},jindo.$Element.prototype.leave=function(){var a=this._element;
return a.parentNode&&(jindo.cssquery&&jindo.cssquery.release(),a.parentNode.removeChild(a)),this
},jindo.$Element.prototype.wrap=function(a){var b=this._element;
return a=jindo.$Element._common(a,"wrap"),b.parentNode&&b.parentNode.insertBefore(a,b),a.appendChild(b),this
},jindo.$Element.prototype.ellipsis=function(a){var b=g_checkVarType(arguments,{"4voi":[],"4str":["stringTail:"+tString]},"$Element#ellipsis");
a=a||"...";
var c=this.text(),d=c.length,e=parseInt(this._getCss(this._element,"paddingTop"),10)+parseInt(this._getCss(this._element,"paddingBottom"),10),f=this._element.offsetHeight-e,g=0,h=this.text("A")._element.offsetHeight-e;
if(f<h*1.5){return this.text(c),this
}f=h;
while(f<h*1.5){g+=Math.max(Math.ceil((d-g)/2),1),f=this.text(c.substring(0,g)+a)._element.offsetHeight-e
}while(f>h*1.5){g--,f=this.text(c.substring(0,g)+a)._element.offsetHeight-e
}return this
},jindo.$Element.prototype.indexOf=function(a){try{var b=jindo.$Element(a)._element,c=this._element.childNodes,d=0,e=c.length;
for(var f=0;
f<e;
f++){if(c[f].nodeType!=1){continue
}if(c[f]===b){return d
}d++
}}catch(b){}return -1
},jindo.$Element.prototype.queryAll=function(a){var b=g_checkVarType(arguments,{"4str":["sSelector:"+tString]},"$Element#queryAll"),c=jindo.cssquery(a,this._element),d=[];
for(var e=0,f=c.length;
e<f;
e++){d.push(jindo.$Element(c[e]))
}return d
},jindo.$Element.prototype.query=function(a){var b=g_checkVarType(arguments,{"4str":["sSelector:"+tString]},"$Element#query"),c=jindo.cssquery.getSingle(a,this._element);
return c===null?c:jindo.$Element(c)
},jindo.$Element.prototype.test=function(a){var b=g_checkVarType(arguments,{"4str":["sSelector:"+tString]},"$Element#test");
return jindo.cssquery.test(this._element,a)
},jindo.$Element.prototype.xpathAll=function(a){var b=g_checkVarType(arguments,{"4str":["sXPath:"+tString]},"$Element#xpathAll"),c=jindo.cssquery.xpath(a,this._element),d=[];
for(var e=0,f=c.length;
e<f;
e++){d.push(jindo.$Element(c[e]))
}return d
},jindo.$Element.insertAdjacentHTML=function(a,b,c,d,e,f){var g=[b];
g.callee=arguments.callee;
var h=g_checkVarType(g,{"4str":["sHTML:"+tString]},"$Element#"+f),i=a._element;
b+="";
if(i.insertAdjacentHTML&&!/^<(option|tr|td|th|col)(?:.*?)>/.test(b.replace(/^(\s|　)+|(\s|　)+$/g,"").toLowerCase())){i.insertAdjacentHTML(c,b)
}else{var j=i.ownerDocument||i.document||document,k=j.createDocumentFragment(),l,m=b.replace(/^(\s|　)+|(\s|　)+$/g,""),n={option:"select",tr:"tbody",thead:"table",tbody:"table",col:"table",td:"tr",th:"tr",div:"div"},o=/^\<(option|tr|thead|tbody|td|th|col)(?:.*?)\>/i.exec(m),p=o===null?"div":o[1].toLowerCase(),q=n[p];
l=_createEle(q,m,j,!0);
var r=l.getElementsByTagName("script");
for(var s=0,t=r.length;
s<t;
s++){r[s].parentNode.removeChild(r[s])
}while(l[d]){k.appendChild(l[d])
}e(k.cloneNode(!0))
}return a
},jindo.$Element.prototype.appendHTML=function(a){return jindo.$Element.insertAdjacentHTML(this,a,"beforeEnd","firstChild",jindo.$Fn(function(a){var b=this._element;
if(b.tagName.toLowerCase()==="table"){var c=b.childNodes;
for(var d=0,e=c.length;
d<e;
d++){if(c[d].nodeType==1){b=c[d];
break
}}}b.appendChild(a)
},this).bind(),"appendHTML")
},jindo.$Element.prototype.prependHTML=function(a){var b=jindo.$Element;
return b.insertAdjacentHTML(this,a,"afterBegin","firstChild",jindo.$Fn(function(a){var c=this._element;
if(c.tagName.toLowerCase()==="table"){var d=c.childNodes;
for(var e=0,f=d.length;
e<f;
e++){if(d[e].nodeType==1){c=d[e];
break
}}}b._prepend(c,a)
},this).bind(),"prependHTML")
},jindo.$Element.prototype.beforeHTML=function(a){return jindo.$Element.insertAdjacentHTML(this,a,"beforeBegin","firstChild",jindo.$Fn(function(a){this._element.parentNode.insertBefore(a,this._element)
},this).bind(),"beforeHTML")
},jindo.$Element.prototype.afterHTML=function(a){return jindo.$Element.insertAdjacentHTML(this,a,"afterEnd","firstChild",jindo.$Fn(function(a){this._element.parentNode.insertBefore(a,this._element.nextSibling)
},this).bind(),"afterHTML")
},jindo.$Element.prototype.hasEventListener=function(a){var b=g_checkVarType(arguments,{"4str":["sEvent:"+tString]},"$Element#hasEventListener"),c,d=!1,e=b.sEvent.toLowerCase();
return this._key?(c=this._element.ownerDocument||this._element.document||document,e=="load"&&this._element===c?d=jindo.$Element(window).hasEventListener(b.sEvent):e=="domready"&&jindo.$Jindo.isWindow(this._element)?d=jindo.$Element(c).hasEventListener(b.sEvent):d=!!jindo.$Element.eventManager.hasEvent(this._key,b.sEvent),d):!1
},jindo.$Element.prototype.preventTapHighlight=function(a){if(_JINDO_IS_MO){var b="no_tap_highlight"+(new Date).getTime(),c=document.createElement("style"),d=document.getElementsByTagName("html")[0];
c.type="text/css",d.insertBefore(c,d.firstChild);
var e=c.sheet||c.styleSheet;
e.insertRule("."+b+" { -webkit-tap-highlight-color: rgba(0,0,0,0); }",0),e.insertRule("."+b+" * { -webkit-tap-highlight-color: rgba(0,0,0,.25); }",0),jindo.$Element.prototype.preventTapHighlight=function(a){return this[a?"addClass":"removeClass"](b)
}
}else{jindo.$Element.prototype.preventTapHighlight=function(a){return this
}
}return this.preventTapHighlight.apply(this,_toArray(arguments))
},jindo.$Element.prototype.data=function(sKey,vValue){function toCamelCase(a){return a.replace(/\-(.)/g,function(a,b){return b.toUpperCase()
})
}function toDash(a){return a.replace(/[A-Z]/g,function(a){return"-"+a.toLowerCase()
})
}var oType={g:["sKey:"+tString],s4var:["sKey:"+tString,"vValue:"+tVariant],s4obj:["oObj:"+tHash]},jindoKey="_jindo";
return document.body.dataset?jindo.$Element.prototype.data=function(a,b){var c,d=g_checkVarType(arguments,oType,"$Element#data"),e=jindo.$Jindo.isNull;
switch(d+""){case"g":a=toCamelCase(a);
var f=this._element.dataset[a+jindoKey],g=this._element.dataset[a];
if(g){return f?window.JSON.parse(g):g
}return null;
case"s4var":var h;
if(e(b)){return a=toCamelCase(a),delete this._element.dataset[a],delete this._element.dataset[a+jindoKey],this
}h={},h[a]=b,a=h;
case"s4obj":var i;
for(var j in a){i=toCamelCase(j),e(a[j])?(delete this._element.dataset[i],delete this._element.dataset[i+jindoKey]):(c=jindo.$Json._oldToString(a[j]),c!=null&&(this._element.dataset[i]=c,this._element.dataset[i+jindoKey]="jindo"))
}return this
}}:jindo.$Element.prototype.data=function(sKey,vValue){var sToStr,oArgs=g_checkVarType(arguments,oType,"$Element#data"),isNull=jindo.$Jindo.isNull;
switch(oArgs+""){case"g":sKey=toDash(sKey);
var isMakeFromJindo=this._element.getAttribute("data-"+sKey+jindoKey),sVal=this._element.getAttribute("data-"+sKey);
return isMakeFromJindo?sVal!=null?eval("("+sVal+")"):null:sVal;
case"s4var":var oData;
if(isNull(vValue)){return sKey=toDash(sKey),this._element.removeAttribute("data-"+sKey),this._element.removeAttribute("data-"+sKey+jindoKey),this
}oData={},oData[sKey]=vValue,sKey=oData;
case"s4obj":var sChange;
for(var i in sKey){sChange=toDash(i),isNull(sKey[i])?(this._element.removeAttribute("data-"+sChange),this._element.removeAttribute("data-"+sChange+jindoKey)):(sToStr=jindo.$Json._oldToString(sKey[i]),sToStr!=null&&(this._element.setAttribute("data-"+sChange,sToStr),this._element.setAttribute("data-"+sChange+jindoKey,"jindo")))
}return this
}},this.data.apply(this,_toArray(arguments))
},jindo.$Fn=function(func,thisObject){var cl=arguments.callee;
if(func instanceof cl){return func
}if(!(this instanceof cl)){try{return jindo.$Jindo._maxWarn(arguments.length,2,"$Fn"),new cl(func,thisObject)
}catch(e){if(e instanceof TypeError){return null
}throw e
}}var oArgs=g_checkVarType(arguments,{"4fun":["func:"+tFunction],"4fun2":["func:"+tFunction,"thisObject:"+tVariant],"4str":["func:"+tString,"thisObject:"+tString]},"$Fn");
this._tmpElm=null,this._key=null;
switch(oArgs+""){case"4str":this._func=eval("false||function("+func+"){"+thisObject+"}");
break;
case"4fun":case"4fun2":this._func=func,this._this=thisObject
}},jindo.$Fn._commonPram=function(a,b){return g_checkVarType(a,{"4ele":["eElement:"+tElement,"sEvent:"+tString],"4ele2":["eElement:"+tElement,"sEvent:"+tString,"bUseCapture:"+tBoolean],"4str":["eElement:"+tString,"sEvent:"+tString],"4str2":["eElement:"+tString,"sEvent:"+tString,"bUseCapture:"+tBoolean],"4arr":["aElement:"+tArray,"sEvent:"+tString],"4arr2":["aElement:"+tArray,"sEvent:"+tString,"bUseCapture:"+tBoolean],"4doc":["eElement:"+tDocument,"sEvent:"+tString],"4win":["eElement:"+tWindow,"sEvent:"+tString],"4doc2":["eElement:"+tDocument,"sEvent:"+tString,"bUseCapture:"+tBoolean],"4win2":["eElement:"+tWindow,"sEvent:"+tString,"bUseCapture:"+tBoolean]},b)
},jindo.$Fn.prototype.$value=function(){return this._func
},jindo.$Fn.prototype.bind=function(){var a=_slice.call(arguments,0),b=this._func,c=this._this||this,d;
return b.bind?(a.unshift(c),d=Function.prototype.bind.apply(b,a)):d=function(){var d=_slice.call(arguments,0);
return a.length&&(d=a.concat(d)),b.apply(c,d)
},d
},jindo.$Fn.prototype.attach=function(a,b,c){var d=jindo.$Fn._commonPram(arguments,"$Fn#attach"),e=null,f,g=b,h=a,i=_j_ag;
c!==!0&&(c=!1),this._bUseCapture=c;
switch(d+""){case"4arr":case"4arr2":var h=d.aElement,g=d.sEvent;
for(var j=0,f=h.length;
j<f;
j++){this.attach(h[j],g,!!c)
}return this
}return e=this._bind=this._bind?this._bind:this.bind(),jindo.$Element(h).attach(g,e),this
},jindo.$Fn.prototype.detach=function(a,b,c){var d=jindo.$Fn._commonPram(arguments,"$Fn#detach"),e=null,f,g=a,h=b,i=_j_ag;
switch(d+""){case"4arr":case"4arr2":var g=d.aElement,h=d.sEvent;
for(var j=0,f=g.length;
j<f;
j++){this.detach(g[j],h,!!c)
}return this
}return e=this._bind=this._bind?this._bind:this.bind(),jindo.$Element(d.eElement).detach(d.sEvent,e),this
},jindo.$Fn.prototype.delay=function(a,b){var c=g_checkVarType(arguments,{"4num":["nSec:"+tNumeric],"4arr":["nSec:"+tNumeric,"args:"+tArray]},"$Fn#delay");
switch(c+""){case"4num":b=b||[];
break;
case"4arr":b=c.args
}return this._delayKey=setTimeout(this.bind.apply(this,b),a*1000),this
},jindo.$Fn.prototype.setInterval=function(a,b){var c=g_checkVarType(arguments,{"4num":["nSec:"+tNumeric],"4arr":["nSec:"+tNumeric,"args:"+tArray]},"$Fn#setInterval");
switch(c+""){case"4num":b=b||[];
break;
case"4arr":b=c.args
}return this._repeatKey=setInterval(this.bind.apply(this,b),a*1000),this
},jindo.$Fn.prototype.repeat=jindo.$Fn.prototype.setInterval,jindo.$Fn.prototype.stopDelay=function(){return this._delayKey!==undefined&&(window.clearTimeout(this._delayKey),delete this._delayKey),this
},jindo.$Fn.prototype.stopRepeat=function(){return this._repeatKey!==undefined&&(window.clearInterval(this._repeatKey),delete this._repeatKey),this
},jindo.$ElementList=function(a){var b=arguments.callee;
if(a instanceof b){return a
}if(!(this instanceof b)){try{return new b(a)
}catch(c){if(c instanceof TypeError){return null
}throw c
}}var d=g_checkVarType(arguments,{"4arr":["aEle:"+tArray],"4str":["sCssQuery:"+tString],"4nul":["oEle:"+tNull],"4und":["oEle:"+tUndefined]},"$ElementList");
switch(d+""){case"4arr":a=d.aEle;
break;
case"4str":a=jindo.cssquery(d.sCssQuery);
break;
case"4nul":case"4und":a=[]
}this._elements=[];
for(var e=0,f=a.length;
e<f;
e++){this._elements.push(jindo.$Element(a[e]))
}},function(a){var b=["show","hide","toggle","addClass","removeClass","toggleClass","fireEvent","leave","empty","className","width","height","text","html","css","attr"];
for(var c=0,d=b.length;
c<d;
c++){var e=b[c];
jindo.$Element.prototype[e]&&(a[b[c]]=function(a){return function(){try{var b=[];
for(var c=0,d=arguments.length;
c<d;
c++){b.push(arguments[c])
}for(var e=0,f=this._elements.length;
e<f;
e++){this._elements[e][a].apply(this._elements[e],b)
}return this
}catch(g){throw TypeError(g.message.replace(/\$Element/g,"$Elementlist#"+a).replace(/Element\.html/g,"Elementlist.html#"+a))
}}
}(b[c]))
}var f=["appear","disappear"];
for(var c=0,d=f.length;
c<d;
c++){jindo.$Element.prototype[e]&&(a[f[c]]=function(a){return function(b,c){try{var d=this;
for(var e=0,f=this._elements.length;
e<f;
e++){e==f-1?this._elements[e][a](b,function(){c&&c(d)
}):this._elements[e][a](b)
}return this
}catch(g){throw TypeError(g.message.replace(/\$Element/g,"$Elementlist#"+a).replace(/Element\.html/g,"Elementlist.html#"+a))
}}
}(f[c]))
}}(jindo.$ElementList.prototype),jindo.$ElementList.prototype.get=function(a){var b=g_checkVarType(arguments,{"4num":["nIdx:"+tNumeric]},"$ElementList#get");
return this._elements[a]
},jindo.$ElementList.prototype.getFirst=function(){return this._elements[0]
},jindo.$ElementList.prototype.getLast=function(){return this._elements[Math.max(this._elements.length-1,0)]
},jindo.$ElementList.prototype.length=function(a,b){var c=g_checkVarType(arguments,{"4voi":[],"4num":[jindo.$Jindo._F("nLen:"+tNumeric)],"4var":["nLen:"+tNumeric,"oValue:"+tVariant]},"$ElementList#length"),d=jindo.$A(this._elements);
try{return d.length.apply(d,_toArray(arguments))
}catch(e){throw TypeError(e.message.replace(/\$A/g,"$Elementlist#length").replace(/A\.html/g,"Elementlist.html#length"))
}},jindo.$ElementList.prototype.$value=function(){return this._elements
},jindo.$S=function(a){var b=arguments.callee;
if(a instanceof b){return a
}if(!(this instanceof b)){try{return jindo.$Jindo._maxWarn(arguments.length,1,"$Json"),new b(a||"")
}catch(c){if(c instanceof TypeError){return null
}throw c
}}var d=g_checkVarType(arguments,{"4str":["str:"+tString]},"$S");
this._str=a+""
},jindo.$S.prototype.$value=function(){return this._str
},jindo.$S.prototype.toString=jindo.$S.prototype.$value,jindo.$S.prototype.trim=function(){return"a".trim?jindo.$S.prototype.trim=function(){return jindo.$S(this._str.trim())
}:jindo.$S.prototype.trim=function(){return jindo.$S(trim(this._str))
},this.trim()
},jindo.$S.prototype.escapeHTML=function(){var a={'"':"quot","&":"amp","<":"lt",">":"gt","'":"#39"},b=this._str.replace(/[<>&"']/g,function(b){return a[b]?"&"+a[b]+";":b
});
return jindo.$S(b)
},jindo.$S.prototype.stripTags=function(){return jindo.$S(this._str.replace(/<\/?(?:h[1-5]|[a-z]+(?:\:[a-z]+)?)[^>]*>/ig,""))
},jindo.$S.prototype.times=function(a){var b=g_checkVarType(arguments,{"4str":["nTimes:"+tNumeric]},"$S#times");
return b?jindo.$S(Array(b.nTimes+1).join(this._str)):this
},jindo.$S.prototype.unescapeHTML=function(){var a={quot:'"',amp:"&",lt:"<",gt:">","#39":"'"},b=this._str.replace(/&([a-z]+|#[0-9]+);/g,function(b,c){return a[c]?a[c]:b
});
return jindo.$S(b)
},jindo.$S.prototype.escape=function(){var a=this._str.replace(/([\u0080-\uFFFF]+)|[\n\r\t"'\\]/g,function(a,b,c){return b?escape(b).replace(/%/g,"\\"):(c={"\n":"\\n","\r":"\\r","\t":"\\t"})[a]?c[a]:"\\"+a
});
return jindo.$S(a)
},jindo.$S.prototype.bytes=function(a){var b=g_checkVarType(arguments,{"4voi":[],"4num":["nConfig:"+tNumeric],"4obj":["nConfig:"+tHash]},"$S#bytes"),c=0,d=0,e=0,f=this._str.length,g=(document.charset||document.characterSet||document.defaultCharset)+"",h,i;
switch(b+""){case"4voi":h=!1;
break;
case"4num":h=!0,i=a;
break;
case"4obj":g=a.charset||g,i=a.size||!1,h=!!i
}if(g.toLowerCase()=="utf-8"){for(e=0;
e<f;
e++){c=this._str.charCodeAt(e),c<128?d+=1:c<2048?d+=2:c<65536?d+=3:d+=4;
if(h&&d>i){this._str=this._str.substr(0,e);
break
}}}else{for(e=0;
e<f;
e++){d+=this._str.charCodeAt(e)>128?2:1;
if(h&&d>i){this._str=this._str.substr(0,e);
break
}}}return h?this:d
},jindo.$S.prototype.parseString=function(){if(this._str==""){return{}
}var a=this._str.split(/&/g),b,c,d,e={},f=!1;
for(var g=0;
g<a.length;
g++){c=a[g].substring(0,b=a[g].indexOf("=")),f=!1;
try{d=decodeURIComponent(a[g].substring(b+1))
}catch(h){f=!0,d=decodeURIComponent(unescape(a[g].substring(b+1)))
}c.substr(c.length-2,2)=="[]"?(c=c.substring(0,c.length-2),jindo.$Jindo.isUndefined(e[c])&&(e[c]=[]),e[c][e[c].length]=f?escape(d):d):e[c]=f?escape(d):d
}return e
},jindo.$S.prototype.escapeRegex=function(){var a=this._str,b=/([\?\.\*\+\-\/\(\)\{\}\[\]\:\!\^\$\\\|])/g;
return jindo.$S(a.replace(b,"\\$1"))
},jindo.$S.prototype.format=function(){var a=arguments,b=0,c=this._str.replace(/%([ 0])?(-)?([1-9][0-9]*)?([bcdsoxX])/g,function(c,d,e,f,g){var h=a[b++],i="",j="";
f=f?+f:0;
if(g=="s"){i=h+""
}else{if(" bcdoxX".indexOf(g)>0){if(!jindo.$Jindo.isNumeric(h)){return""
}i=g=="c"?String.fromCharCode(h):h.toString({b:2,d:10,o:8,x:16,X:16}[g])," X".indexOf(g)>0&&(i=i.toUpperCase())
}}return i.length<f&&(j=jindo.$S(d||" ").times(f-i.length)._str),e=="-"?i+=j:i=j+i,i
});
return jindo.$S(c)
},jindo.$Document=function(a){var b=arguments.callee;
if(a instanceof b){return a
}if(!(this instanceof b)){try{return jindo.$Jindo._maxWarn(arguments.length,1,"$Document"),new b(a||document)
}catch(c){if(c instanceof TypeError){return null
}throw c
}}var d=g_checkVarType(arguments,{"4doc":["oDocument:"+tDocument]},"$Document");
d==null?this._doc=document:this._doc=a,this._docKey=this.renderingMode()=="Standards"?"documentElement":"body"
},function(){var a=jindo.cssquery,b={query:a.getSingle,queryAll:a,xpathAll:a.xpath};
for(var c in b){jindo.$Document.prototype[c]=function(a,b){return function(c){var d=g_checkVarType(arguments,{"4str":["sQuery:"+tString]},"$Document#"+a);
return b(c,this._doc)
}
}(c,b[c])
}}(),jindo.$Document.prototype.$value=function(){return this._doc
},jindo.$Document.prototype.scrollSize=function(){var a=this._doc[_JINDO_IS_WK?"body":this._docKey];
return{width:Math.max(a.scrollWidth,a.clientWidth),height:Math.max(a.scrollHeight,a.clientHeight)}
},jindo.$Document.prototype.scrollPosition=function(){var a=this._doc[_JINDO_IS_WK?"body":this._docKey];
return{left:a.scrollLeft||window.pageXOffset||window.scrollX||0,top:a.scrollTop||window.pageYOffset||window.scrollY||0}
},jindo.$Document.prototype.clientSize=function(){var a=this._doc[this._docKey],b=_JINDO_IS_SP&&!_JINDO_IS_CH;
return b?{width:window.innerWidth,height:window.innerHeight}:{width:a.clientWidth,height:a.clientHeight}
},jindo.$Document.prototype.renderingMode=function(){var a=navigator.userAgent,b=_JINDO_IS_IE,c=_JINDO_IS_WK&&!_JINDO_IS_CH&&navigator.vendor.indexOf("Apple")>-1,d;
return"compatMode" in this._doc?d=this._doc.compatMode=="CSS1Compat"?"Standards":b?"Quirks":"Almost":d=c?"Standards":"Quirks",d
},jindo.$Form=function(a){var b=arguments.callee;
if(a instanceof b){return a
}if(!(this instanceof b)){try{return jindo.$Jindo._maxWarn(arguments.length,1,"$"+tForm),new b(a)
}catch(c){if(c instanceof TypeError){return null
}throw c
}}var d=g_checkVarType(arguments,{"4str":["oForm:"+tString],"4ele":["oForm:"+tElement]},"$"+tForm);
switch(d+""){case"4str":a=jindo.$(a)
}if(!a.tagName||a.tagName.toUpperCase()!="FORM"){throw TypeError("only form")
}this._form=a
},jindo.$Form.prototype.$value=function(){return this._form
},jindo.$Form.prototype.serialize=function(){var a=this,b={},c=arguments.length,d=function(c,d){if(!c.disabled){var e=a.value(d);
e!==undefined&&(b[d]=e)
}};
if(c==0){var e=this._form.elements.length;
for(var f=0;
f<e;
f++){var g=this._form.elements[f];
g.name&&d(g,g.name)
}}else{for(var f=0;
f<c;
f++){d(this.element(arguments[f]),arguments[f])
}}return jindo.$H(b).toQueryString()
},jindo.$Form.prototype.element=function(a){var b=g_checkVarType(arguments,{"4voi":[],"4str":[jindo.$Jindo._F("sKey:"+tString)]},"$Form#element");
switch(b+""){case"4voi":return _toArray(this._form.elements);
case"4str":return this._form.elements[a+""]
}},jindo.$Form.prototype.enable=function(a){var b=g_checkVarType(arguments,{s4bln:["sName:"+tString,"bEnable:"+tBoolean],s4obj:["oObj:"+tHash],g:[jindo.$Jindo._F("sName:"+tString)]},"$Form#enable");
switch(b+""){case"s4bln":var c=this._form[a];
if(!c){return this
}c=c.nodeType==1?[c]:c;
var d=b.bEnable;
for(var e=0;
e<c.length;
e++){c[e].disabled=!d
}return this;
case"s4obj":a=b.oObj;
var f=this;
for(var g in a){a.hasOwnProperty(g)&&f.enable(g,a[g])
}return this;
case"g":var c=this._form[a];
if(!c){return this
}c=c.nodeType==1?[c]:c;
var h=!0;
for(var e=0;
e<c.length;
e++){if(c[e].disabled){h=!1;
break
}}return h
}},jindo.$Form.prototype.value=function(a){var b=g_checkVarType(arguments,{s4str:["sKey:"+tString,"vValue:"+tVariant],s4obj:[jindo.$Jindo._F("oObj:"+tHash)],g:["sKey:"+tString]},"$Form#value"),c,d;
if(b+""=="s4obj"){var e=this;
a=b.oObj;
for(var f in a){a.hasOwnProperty(f)&&e.value(f,a[f])
}return this
}var g=this._form[a];
if(!g){throw new jindo.$Error(a+jindo.$Except.NONE_ELEMENT,"$Form#value")
}g=g.nodeType==1?[g]:g;
switch(b+""){case"s4str":var h=b.vValue,i=g.length;
for(var j=0;
j<i;
j++){var k=g[j];
switch(k.type){case"radio":k.checked=k.value==h;
break;
case"checkbox":h.constructor==Array?k.checked=jindo.$A(h).has(k.value):k.checked=k.value==h;
break;
case"select-one":var l=-1;
for(var j=0,m=k.options.length;
j<m;
j++){c=k.options[j];
if(c.value==h||c.text==h){l=j;
continue
}}k.selectedIndex=l;
break;
case"select-multiple":var l=-1;
if(jindo.$Jindo.isArray(h)){var n=jindo.$A(h);
for(var j=0,m=k.options.length;
j<m;
j++){c=k.options[j],k.options[j].selected=n.has(c.value)||n.has(c.text)
}}else{for(var j=0,m=k.options.length;
j<m;
j++){c=k.options[j];
if(c.value==h||c.text==h){l=j;
continue
}}k.selectedIndex=l
}break;
default:k.value=h
}}return this;
case"g":var o=[],i=g.length;
for(var j=0;
j<i;
j++){var k=g[j];
switch(k.type){case"radio":case"checkbox":k.checked&&o.push(k.value);
break;
case"select-one":k.selectedIndex!=-1&&(c=k.options[k.selectedIndex],d=c.value==""?c.text:c.value,o.push(d));
break;
case"select-multiple":if(k.selectedIndex!=-1){for(var j=0,m=k.options.length;
j<m;
j++){c=k.options[j],c.selected&&(d=c.value==""?c.text:c.value,o.push(d))
}}break;
default:o.push(k.value)
}}return o.length>1?o:o[0]
}},jindo.$Form.prototype.submit=function(a,b){var c=g_checkVarType(arguments,{voi:[],"4str":["sTargetName:"+tString],"4fun":["fValidation:"+tFunction],"4fun2":["sTargetName:"+tString,"fValidation:"+tFunction]},"$Form#submit"),d=null;
switch(c+""){case"4str":d=this._form.target,this._form.target=c.sTargetName;
break;
case"4fun":case"4fun2":if(!c.fValidation.call(this,this._form)){return this
}c+""=="4fun2"&&(d=this._form.target,this._form.target=c.sTargetName)
}return this._form.submit(),jindo.$Jindo.isNull(d)||(this._form.target=d),this
},jindo.$Form.prototype.reset=function(a){var b=g_checkVarType(arguments,{"4voi":[],"4fun":["fValidation:"+tFunction]},"$Form#reset");
return b+""=="4fun"&&!a.call(this,this._form)?this:(this._form.reset(),this)
},jindo.$Template=function(a,b){var c=null,d="",e=arguments.callee,f;
if(a instanceof e){return a
}if(!(this instanceof e)){try{return jindo.$Jindo._maxWarn(arguments.length,2,"$Template"),new e(a||"",b||"default")
}catch(g){if(g instanceof TypeError){return null
}throw g
}}var h=g_checkVarType(arguments,{"4str":["str:"+tString],"4ele":["ele:"+tElement],"4str3":["str:"+tString,"sEngineName:"+tString],"4ele3":["ele:"+tElement,"sEngineName:"+tString]},"$Template");
(c=_getElementById(document,a)||a)&&c.tagName&&(d=c.tagName.toUpperCase())&&(d=="TEXTAREA"||d=="SCRIPT"&&c.getAttribute("type")=="text/template")&&(a=(c.value||c.innerHTML).replace(/^\s+|\s+$/g,"")),this._str=a+"",f="default";
switch(h+""){case"4str3":case"4ele3":f=h.sEngineName
}this._compiler=jindo.$Template.getEngine(f)
},jindo.$Template._aEngines={},jindo.$Template._cache={},jindo.$Template.splitter=/(?!\\)[\{\}]/g,jindo.$Template.pattern=/^(?:if (.+)|elseif (.+)|for (?:(.+)\:)?(.+) in (.+)|(else)|\/(if|for)|=(.+)|js (.+)|set (.+)|gset (.+))$/,jindo.$Template.addEngine=function(a,b){var c=g_checkVarType(arguments,{"4fun":["sEngineName:"+tString,"fEngine:"+tFunction]},"$Template#addEngine");
jindo.$Template._aEngines[c.sEngineName]=c.fEngine
},jindo.$Template.getEngine=function(a){var b=g_checkVarType(arguments,{"4str":["sEngineName:"+tString]},"$Template#getEngine");
return jindo.$Template._aEngines[b.sEngineName]
},jindo.$Template.prototype.process=function(a){var b=g_checkVarType(arguments,{"4obj":["data:"+tHash],"4voi":[]},"$Template#process"),c;
return jindo.$Template._cache&&jindo.$Template._cache[this._str]?(c=jindo.$Template._cache[this._str],c(b+""=="for_void"?"":b.data)):(jindo.$Template._cache[this._str]=c=this._compiler(this._str),c(b+""=="for_void"?"":b.data))
},jindo.$Template.addEngine("default",function(a){var b="",c="",d="",e=(" "+a+" ").replace(/\\{/g,c).replace(/\\}/g,d).replace(/(?!\\)\}\{/g,"}"+b+"{").split(jindo.$Template.splitter),f=e.length,g={'"':'\\"',"\\":"\\\\","\n":"\\n","\r":"\\r","\t":"\\t","\f":"\\f"},h=[/(["'](?:(?:\\.)+|[^\\["']+)*["']|[a-zA-Z_](?:[\w\.]|\[(?:.*?)\])*)/g,/[\n\r\t\f"\\]/g,/^\s+/,/\s+$/,/#/g],i=[function(a){return a.substring(0,1)=='"'||a.substring(0,1)=="'"||a=="null"||a=="false"||a=="true"?a:"d."+a
},function(a){return g[a]||a
},"",""],j=[],k=0,l;
e[0]=e[0].substr(1),e[f-1]=e[f-1].substr(0,e[f-1].length-1);
if(f<2){return function(a){return function(){return a
}
}(e[0])
}e=e.reverse();
while(f--){f%2?e[f]=e[f].replace(jindo.$Template.pattern,function(){var a=arguments;
if(a[11]){return a[11].replace(/(\w+)(?:\s*)=(?:\s*)(?:([a-zA-Z0-9_]+)|(.+))$/g,function(){var a=arguments,b="var "+a[1]+"=";
return a[2]?b+=a[2]:b+=a[3].replace(/(=(?:[a-zA-Z_][\w\.]*)+)/g,function(a){return a.substring(0,1)=="="?"d."+a.replace("=",""):a
}),b
})+";"
}if(a[10]){return a[10].replace(/(\w+)(?:\s*)=(?:\s*)(?:([a-zA-Z0-9_]+)|(.+))$/g,function(){var a=arguments,b="d."+a[1]+"=";
return a[2]?b+="d."+a[2]:b+=a[3].replace(/(=(?:[a-zA-Z_][\w\.]*)+)/g,function(a){return a.substring(0,1)=="="?"d."+a.replace("=",""):a
}),b
})+";"
}if(a[9]){return"s[i++] = "+a[9].replace(/(=(?:[a-zA-Z_][\w\.]*)+)/g,function(a){return a.substring(0,1)=="="?"d."+a.replace("=",""):a
})+";"
}if(a[8]){return"s[i++] = d."+a[8]+";"
}if(a[1]){return"if("+a[1].replace(h[0],i[0]).replace(/d\.(typeof) /,"$1 ").replace(/ d\.(instanceof) d\./," $1 ")+"){"
}if(a[2]){return"}else if("+a[2].replace(h[0],i[0]).replace(/d\.(typeof) /,"$1 ").replace(/ d\.(instanceof) d\./," $1 ")+"){"
}if(a[5]){l=a[4];
var b=[];
return b.push("var t# = d."+a[5]+" || {},"),b.push("p# = "+jindoName+".$Jindo.isArray(t#),"),b.push("i# = 0,"),b.push("j#,"),b.push("leng#,"),b.push("aProp# = [],"),b.push("sProp#;"),b.push("if(p#){"),b.push("\tleng# = t#.length;"),b.push("\tfor(j# = 0; j# < leng#; j#++){aProp#.push(j#);}"),b.push("}else{"),b.push("\tfor(j# in t#){aProp#.push(j#);}"),b.push("}"),b.push("leng# = aProp#.length;"),b.push("for(var x# = 0; x# < leng#; x#++){"),b.push("\tsProp# = aProp#[x#];"),b.push("\tif(!p# && !t#.hasOwnProperty(sProp#)){"),b.push("\t\tcontinue;"),b.push("\t}"),b.push("\tif((p# && isNaN(i# = parseInt(sProp#, 10))) || (!p# && !t#.propertyIsEnumerable(sProp#))){"),b.push("\t\tcontinue;"),b.push("\t}"),b.push("\td."+a[4]+" = t#[sProp#];"),b.push(a[3]?"d."+a[3]+" = sProp#;":""),b.join("").replace(h[4],k++)
}return a[6]?"}else{":a[7]?a[7]=="for"?"delete d."+l+"; };":"};":a[0]
}):e[f]==b?e[f]="":e[f]&&(e[f]='s[i++] = "'+e[f].replace(h[1],i[1])+'";')
}e=e.reverse().join("").replace(new RegExp(c,"g"),"{").replace(new RegExp(d,"g"),"}");
var m=[];
return m.push("d = d || {};"),m.push("var s = [], i = 0;"),m.push(e),m.push('return s.join("");'),e=new Function("d",""+m.join("")),e
}),jindo.$Template.addEngine("micro",function(a){return new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+a.replace(/[\r\t\n]/g," ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');")
}),jindo.$Template.addEngine("handlebars",function(a){if(typeof Handlebars=="undefined"){throw new jindo.$Error(jindo.$Except.NOT_FOUND_HANDLEBARS,"$Template#process")
}return Handlebars.compile(a)
}),jindo.$Template.addEngine("simple",function(a){return function(b){return a.replace(/\{\{([^{}]*)\}\}/g,function(a,c){return typeof b[c]=="undefined"?"":b[c]
})
}
}),jindo.$Date=function(a){var b=arguments,c="",d=arguments.callee;
if(a&&a instanceof d){return a
}if(!(this instanceof d)){var e="";
for(var f=0,g=b.length;
f<g;
f++){e+="a["+f+"],"
}var h=new Function("cl","a","return new cl("+e.replace(/,$/,"")+");");
try{return jindo.$Jindo._maxWarn(arguments.length,7,"$"+tDate),h(d,b)
}catch(i){if(i instanceof TypeError){return null
}throw i
}}var j=g_checkVarType(arguments,{"4voi":[],"4str":["src:"+tString],"4num":["src:"+tNumeric],"4dat":["src:"+tDate],"4num2":["src:"+tNumeric,"src:"+tNumeric],"4num3":["src:"+tNumeric,"src:"+tNumeric,"src:"+tNumeric],"4num4":["src:"+tNumeric,"src:"+tNumeric,"src:"+tNumeric,"src:"+tNumeric],"4num5":["src:"+tNumeric,"src:"+tNumeric,"src:"+tNumeric,"src:"+tNumeric,"src:"+tNumeric],"4num6":["src:"+tNumeric,"src:"+tNumeric,"src:"+tNumeric,"src:"+tNumeric,"src:"+tNumeric,"src:"+tNumeric],"4num7":["src:"+tNumeric,"src:"+tNumeric,"src:"+tNumeric,"src:"+tNumeric,"src:"+tNumeric,"src:"+tNumeric,"src:"+tNumeric]},"$"+tDate);
switch(j+""){case"4voi":this._date=new Date;
break;
case"4num":this._date=new Date(a*1);
break;
case"4str":/(\d\d\d\d)(?:-?(\d\d)(?:-?(\d\d)))/.test(a)?this._date=jindo.$Date._makeISO(a):this._date=d.parse(a);
break;
case"4dat":(this._date=new Date).setTime(a.getTime()),this._date.setMilliseconds(a.getMilliseconds());
break;
case"4num2":case"4num3":case"4num4":case"4num5":case"4num6":case"4num7":for(var f=0;
f<7;
f++){jindo.$Jindo.isNumeric(b[f])||(b[f]=1)
}this._date=new Date(b[0],b[1],b[2],b[3],b[4],b[5],b[6])
}this._names={};
for(var f in jindo.$Date.names){jindo.$Date.names.hasOwnProperty(f)&&(this._names[f]=jindo.$Date.names[f])
}},jindo.$Date._makeISO=function(a){var b=a.match(/(\d{4})(?:-?(\d\d)(?:-?(\d\d)(?:[T ](\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|(?:([-+])(\d\d)(?::?(\d\d))?)?)?)?)?)?/),c=parseInt(b[4]||0,10),d=parseInt(b[5]||0,10);
if(b[8]=="Z"){c+=jindo.$Date.utc
}else{if(b[9]=="+"||b[9]=="-"){c+=jindo.$Date.utc-parseInt(b[9]+b[10],10),d+=parseInt(b[9]+b[11],10)
}}return new Date(b[1]||0,parseInt(b[2]||0,10)-1,b[3]||0,c,d,b[6]||0,b[7]||0)
},jindo.$Date._paramCheck=function(a,b){return g_checkVarType(a,{s:["nParm:"+tNumeric],g:[]},"$Date#"+b)
},jindo.$Date.names={month:["January","Febrary","March","April","May","June","July","August","September","October","Novermber","December"],s_month:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],day:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],s_day:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],ampm:["AM","PM"]},jindo.$Date.utc=9,jindo.$Date.now=function(){return Date.now?this.now=function(){return Date.now()
}:this.now=function(){return +(new Date)
},this.now()
},jindo.$Date.prototype.name=function(a,b){var c=g_checkVarType(arguments,{s4str:["sKey:"+tString,"aValue:"+tArray],s4obj:["oObject:"+tHash],g:["sKey:"+tString]},"$Date#name");
switch(c+""){case"s4str":this._names[a]=b;
break;
case"s4obj":a=c.oObject;
for(var d in a){a.hasOwnProperty(d)&&(this._names[d]=a[d])
}break;
case"g":return this._names[a]
}return this
},jindo.$Date.parse=function(a){var b=g_checkVarType(arguments,{"4str":["sKey:"+tString]},"$Date#parse"),c=new Date(Date.parse(a));
if(isNaN(c)||c=="Invalid "+tDate){throw new jindo.$Error(jindo.$Except.INVALID_DATE,"$Date#parse")
}return c
},jindo.$Date.prototype.$value=function(){return this._date
},jindo.$Date.prototype.format=function(a){var b=g_checkVarType(arguments,{"4str":["sFormat:"+tString]},"$Date#format");
a=b.sFormat;
var c={},d=this._date,e=this._names,f=this;
return(a||"").replace(/[a-z]/ig,function(b){if(c[b]!==undefined){return c[b]
}switch(b){case"d":case"j":return c.j=d.getDate(),c.d=(c.j>9?"":"0")+c.j,c[b];
case"l":case"D":case"w":case"N":return c.w=d.getDay(),c.N=c.w?c.w:7,c.D=e.s_day[c.w],c.l=e.day[c.w],c[b];
case"S":return(c.S=["st","nd","rd"][d.getDate()])?c.S:c.S="th";
case"z":return c.z=Math.floor((d.getTime()-(new Date(d.getFullYear(),0,1)).getTime())/86400000),c.z;
case"m":case"n":return c.n=d.getMonth()+1,c.m=(c.n>9?"":"0")+c.n,c[b];
case"L":return c.L=f.isLeapYear(),c.L;
case"o":case"Y":case"y":return c.o=c.Y=d.getFullYear(),c.y=(c.o+"").substr(2),c[b];
case"a":case"A":case"g":case"G":case"h":case"H":return c.G=d.getHours(),c.g=(c.g=c.G%12)?c.g:12,c.A=c.G<12?e.ampm[0]:e.ampm[1],c.a=c.A.toLowerCase(),c.H=(c.G>9?"":"0")+c.G,c.h=(c.g>9?"":"0")+c.g,c[b];
case"i":return c.i=((c.i=d.getMinutes())>9?"":"0")+c.i,c.i;
case"s":return c.s=((c.s=d.getSeconds())>9?"":"0")+c.s,c.s;
case"u":return c.u=d.getMilliseconds(),c.u;
case"U":return c.U=f.time(),c.U;
default:return b
}})
},jindo.$Date.prototype.time=function(a){var b=jindo.$Date._paramCheck(arguments,"time");
a=b.nParm;
switch(b+""){case"s":return this._date.setTime(a),this;
case"g":return this._date.getTime()
}},jindo.$Date.prototype.year=function(a){var b=jindo.$Date._paramCheck(arguments,"year");
a=b.nParm;
switch(b+""){case"s":return this._date.setFullYear(a),this;
case"g":return this._date.getFullYear()
}},jindo.$Date.prototype.month=function(a){var b=jindo.$Date._paramCheck(arguments,"month");
a=b.nParm;
switch(b+""){case"s":return this._date.setMonth(a),this;
case"g":return this._date.getMonth()
}},jindo.$Date.prototype.date=function(a){var b=jindo.$Date._paramCheck(arguments,"date");
a=b.nParm;
switch(b+""){case"s":return this._date.setDate(a),this;
case"g":return this._date.getDate()
}},jindo.$Date.prototype.day=function(){return this._date.getDay()
},jindo.$Date.prototype.hours=function(a){var b=jindo.$Date._paramCheck(arguments,"hours");
a=b.nParm;
switch(b+""){case"s":return this._date.setHours(a),this;
case"g":return this._date.getHours()
}},jindo.$Date.prototype.minutes=function(a){var b=jindo.$Date._paramCheck(arguments,"minutes");
a=b.nParm;
switch(b+""){case"s":return this._date.setMinutes(a),this;
case"g":return this._date.getMinutes()
}},jindo.$Date.prototype.seconds=function(a){var b=jindo.$Date._paramCheck(arguments,"seconds");
a=b.nParm;
switch(b+""){case"s":return this._date.setSeconds(a),this;
case"g":return this._date.getSeconds()
}},jindo.$Date.prototype.isLeapYear=function(){var a=this._date.getFullYear();
return !(a%4)&&!!(a%100)||!(a%400)
},jindo.$Date.prototype.compare=function(a,b){var c=g_checkVarType(arguments,{"4dat":["oDate:"+tDate],"4str":["oDate:"+tDate,"sType:"+tString]},"$Date#compare");
a=c.oDate,b=c.sType;
if(!b){return a-this._date
}if(b==="s"){return Math.floor(a/1000)-Math.floor(this._date/1000)
}if(b==="i"){return Math.floor(Math.floor(a/1000)/60)-Math.floor(Math.floor(this._date/1000)/60)
}if(b==="h"){return Math.floor(Math.floor(Math.floor(a/1000)/60)/60)-Math.floor(Math.floor(Math.floor(this._date/1000)/60)/60)
}if(b==="d"){return Math.floor(Math.floor(Math.floor(Math.floor(a/1000)/60)/60)/24)-Math.floor(Math.floor(Math.floor(Math.floor(this._date/1000)/60)/60)/24)
}if(b==="m"){return a.getMonth()-this._date.getMonth()
}if(b==="y"){return a.getFullYear()-this._date.getFullYear()
}},jindo.$Window=function(a){var b=arguments.callee;
if(a instanceof b){return a
}if(!(this instanceof b)){try{return jindo.$Jindo._maxWarn(arguments.length,1,"$"+tWindow),new b(a||window)
}catch(c){if(c instanceof TypeError){return null
}throw c
}}var d=g_checkVarType(arguments,{"4win":["el:"+tWindow]},"$"+tWindow);
this._win=a
},jindo.$Window.prototype.$value=function(){return this._win
},jindo.$Window.prototype.resizeTo=function(a,b){var c=g_checkVarType(arguments,{"4num":["nWidth:"+tNumeric,"nHeight:"+tNumeric]},"$Window#resizeTo");
return this._win.resizeTo(a,b),this
},jindo.$Window.prototype.resizeBy=function(a,b){var c=g_checkVarType(arguments,{"4num":["nWidth:"+tNumeric,"nHeight:"+tNumeric]},"$Window#resizeBy");
return this._win.resizeBy(a,b),this
},jindo.$Window.prototype.moveTo=function(a,b){var c=g_checkVarType(arguments,{"4num":["nLeft:"+tNumeric,"nTop:"+tNumeric]},"$Window#moveTo");
return this._win.moveTo(a,b),this
},jindo.$Window.prototype.moveBy=function(a,b){var c=g_checkVarType(arguments,{"4num":["nLeft:"+tNumeric,"nTop:"+tNumeric]},"$Window#moveBy");
return this._win.moveBy(a,b),this
},jindo.$Window.prototype.sizeToContent=function(a,b){var c=g_checkVarType(arguments,{"4num":["nWidth:"+tNumeric,"nHeight:"+tNumeric],"4voi":[]},"$Window#sizeToContent");
if(this._win.sizeToContent){this._win.sizeToContent()
}else{if(arguments.length!=2){var d,e,f=this._win,g=this._win.document;
f.innerHeight?(d=f.innerWidth,e=f.innerHeight):g.documentElement&&g.documentElement.clientHeight?(d=g.documentElement.clientWidth,e=g.documentElement.clientHeight):g.body&&(d=g.body.clientWidth,e=g.body.clientHeight);
var h,i,j=g.body.scrollHeight,k=g.body.offsetHeight;
j>k?(h=g.body.scrollWidth,i=g.body.scrollHeight):(h=g.body.offsetWidth,i=g.body.offsetHeight),a=h-d,b=i-e
}this._win.resizeBy(a,b)
}return this
};
var aClass=["$Agent","$Ajax","$A","$Cookie","$Date","$Document","$Element","$ElementList","$Event","$Form","$Fn","$H","$Json","$S","$Template","$Window"],sClass,oClass;
for(var i=0,l=aClass.length;
i<l;
i++){sClass=aClass[i],oClass=jindo[sClass],oClass&&(oClass.addExtension=function(a){return function(b,c){return addExtension(a,b,c),this
}
}(sClass))
}var hooks=["$Element","$Event"];
for(var i=0,l=hooks.length;
i<l;
i++){var _className=hooks[i];
jindo[_className]&&(jindo[_className].hook=function(a){var b={};
return function(c,d){var e=g_checkVarType(arguments,{g:["sName:"+tString],s4var:["sName:"+tString,"vRevisionKey:"+tVariant],s4obj:["oObj:"+tHash]},"jindo."+a+".hook");
switch(e+""){case"g":return b[e.sName.toLowerCase()];
case"s4var":return d==null?delete b[e.sName.toLowerCase()]:b[e.sName.toLowerCase()]=d,this;
case"s4obj":var f=e.oObj;
for(var g in f){b[g.toLowerCase()]=f[g]
}return this
}}
}(_className))
}!jindo.$Jindo.isUndefined(window)&&!(_j_ag.indexOf("IEMobile")==-1&&_j_ag.indexOf("Mobile")>-1&&_JINDO_IS_SP)&&(new jindo.$Element(window)).attach("unload",function(a){jindo.$Element.eventManager.cleanUpAll()
}),typeof define=="function"&&define.amd&&define.amd.jindo&&define("jindo",[],function(){return jindo
})
})(function(){var a=document.getElementsByTagName("script");
return a[a.length-1].src.match(/[\?\&]jindo=(.*?)\&?$/)&&RegExp.$1?RegExp.$1.replace(/(\&.*)/,""):"commentJ"
}());
(function(_namespace){var jsTags=document.getElementsByTagName("script");
var jsTag=jsTags[jsTags.length-1];
if(jsTag&&/[\?&]jindo=([^&]+)/.test(jsTag.src)){_namespace=RegExp.$1
}var jindo=window[_namespace];
jindo.Component=jindo.$Class({_htEventHandler:null,_htOption:null,$init:function(){var a=this.constructor.getInstance();
a.push(this),this._htEventHandler={},this._htOption={},this._htOption._htSetter={}
},option:function(a,b){switch(typeof a){case"undefined":var c={};
for(var d in this._htOption){d!="htCustomEventHandler"&&d!="_htSetter"&&(c[d]=this._htOption[d])
}return c;
case"string":if(typeof b=="undefined"){return this._htOption[a]
}if(a=="htCustomEventHandler"){if(typeof this._htOption[a]=="undefined"){this.attach(b)
}else{return this
}}this._htOption[a]=b,typeof this._htOption._htSetter[a]=="function"&&this._htOption._htSetter[a](b);
break;
case"object":for(var e in a){if(e=="htCustomEventHandler"){if(typeof this._htOption[e]=="undefined"){this.attach(a[e])
}else{continue
}}e!=="_htSetter"&&(this._htOption[e]=a[e]),typeof this._htOption._htSetter[e]=="function"&&this._htOption._htSetter[e](a[e])
}}return this
},optionSetter:function(a,b){switch(typeof a){case"undefined":return this._htOption._htSetter;
case"string":if(typeof b!="undefined"){this._htOption._htSetter[a]=jindo.$Fn(b,this).bind()
}else{return this._htOption._htSetter[a]
}break;
case"object":for(var c in a){this._htOption._htSetter[c]=jindo.$Fn(a[c],this).bind()
}}return this
},fireEvent:function(a,b){b=b||{};
var c=this["on"+a],d=this._htEventHandler[a]||[],e=typeof c=="function",f=d.length>0;
if(!e&&!f){return !0
}d=d.concat(),b.sType=a,typeof b._aExtend=="undefined"&&(b._aExtend=[],b.stop=function(){b._aExtend.length>0&&(b._aExtend[b._aExtend.length-1].bCanceled=!0)
}),b._aExtend.push({sType:a,bCanceled:!1});
var g=[b],h,i;
for(h=2,i=arguments.length;
h<i;
h++){g.push(arguments[h])
}e&&c.apply(this,g);
if(f){var j;
for(h=0,j;
j=d[h];
h++){j.apply(this,g)
}}return !b._aExtend.pop().bCanceled
},attach:function(a,b){if(arguments.length==1){return jindo.$H(arguments[0]).forEach(jindo.$Fn(function(a,b){this.attach(b,a)
},this).bind()),this
}var c=this._htEventHandler[a];
return typeof c=="undefined"&&(c=this._htEventHandler[a]=[]),c.push(b),this
},detach:function(a,b){if(arguments.length==1){return jindo.$H(arguments[0]).forEach(jindo.$Fn(function(a,b){this.detach(b,a)
},this).bind()),this
}var c=this._htEventHandler[a];
if(c){for(var d=0,e;
e=c[d];
d++){if(e===b){c=c.splice(d,1);
break
}}}return this
},detachAll:function(a){var b=this._htEventHandler;
if(arguments.length){return typeof b[a]=="undefined"?this:(delete b[a],this)
}for(var c in b){delete b[c]
}return this
}}),jindo.Component.factory=function(a,b){var c=[],d;
typeof b=="undefined"&&(b={});
for(var e=0,f;
f=a[e];
e++){d=new this(f,b),c[c.length]=d
}return c
},jindo.Component.getInstance=function(){return typeof this._aInstance=="undefined"&&(this._aInstance=[]),this._aInstance
},jindo.Component.VERSION="1.7.0",jindo.Effect=function(a){if(this instanceof arguments.callee){throw new Error("You can't create a instance of this")
}var b=/^(\-?[0-9\.]+)(%|\w+)?$/,c=/^rgb\(([0-9]+)\s?,\s?([0-9]+)\s?,\s?([0-9]+)\)$/i,d=/^#([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})$/i,e=/^#([0-9A-F])([0-9A-F])([0-9A-F])$/i,f=function(a){var f=a,g;
if(b.test(a)){f=parseFloat(a),g=RegExp.$2||""
}else{if(c.test(a)){f=[parseInt(RegExp.$1,10),parseInt(RegExp.$2,10),parseInt(RegExp.$3,10)],g="color"
}else{if(d.test(a=a.replace(e,"#$1$1$2$2$3$3"))){f=[parseInt(RegExp.$1,16),parseInt(RegExp.$2,16),parseInt(RegExp.$3,16)],g="color"
}else{throw new Error("unit error")
}}}return{nValue:f,sUnit:g}
};
return function(b,c){var d;
arguments.length>1?(b=f(b),c=f(c),d=c.sUnit):(c=f(b),b=null,d=c.sUnit),b&&b.nValue===0&&!b.sUnit?d=b.sUnit=c.sUnit:b&&c.nValue===0&&!c.sUnit&&(d=c.sUnit=b.sUnit);
if(b&&c&&b.sUnit!=c.sUnit){throw new Error("unit error")
}b=b&&b.nValue,c=c&&c.nValue;
var e=function(e){var f=a(e),g=function(a,b){return(b-a)*f+a+d
};
if(d=="color"){var h=Math.max(0,Math.min(255,parseInt(g(b[0],c[0]),10)))<<16;
h|=Math.max(0,Math.min(255,parseInt(g(b[1],c[1]),10)))<<8,h|=Math.max(0,Math.min(255,parseInt(g(b[2],c[2]),10))),h=h.toString(16).toUpperCase();
for(var i=0;
6-h.length;
i++){h="0"+h
}return"#"+h
}return g(b,c)
};
return b===null&&(e.setStart=function(a){a=f(a);
if(a.nValue!==0&&a.sUnit!=d){throw new Error("unit error")
}b=a.nValue
}),e
}
},jindo.Effect.linear=jindo.Effect(function(a){return a
}),jindo.Effect.easeInSine=jindo.Effect(function(a){return a==1?1:-Math.cos(a*(Math.PI/2))+1
}),jindo.Effect.easeOutSine=jindo.Effect(function(a){return Math.sin(a*(Math.PI/2))
}),jindo.Effect.easeInOutSine=jindo.Effect(function(a){return a<0.5?jindo.Effect.easeInSine(0,1)(2*a)*0.5:jindo.Effect.easeOutSine(0,1)(2*a-1)*0.5+0.5
}),jindo.Effect.easeOutInSine=jindo.Effect(function(a){return a<0.5?jindo.Effect.easeOutSine(0,1)(2*a)*0.5:jindo.Effect.easeInSine(0,1)(2*a-1)*0.5+0.5
}),jindo.Effect.easeInQuad=jindo.Effect(function(a){return a*a
}),jindo.Effect.easeOutQuad=jindo.Effect(function(a){return -(a*(a-2))
}),jindo.Effect.easeInOutQuad=jindo.Effect(function(a){return a<0.5?jindo.Effect.easeInQuad(0,1)(2*a)*0.5:jindo.Effect.easeOutQuad(0,1)(2*a-1)*0.5+0.5
}),jindo.Effect.easeOutInQuad=jindo.Effect(function(a){return a<0.5?jindo.Effect.easeOutQuad(0,1)(2*a)*0.5:jindo.Effect.easeInQuad(0,1)(2*a-1)*0.5+0.5
}),jindo.Effect.easeInCubic=jindo.Effect(function(a){return Math.pow(a,3)
}),jindo.Effect.easeOutCubic=jindo.Effect(function(a){return Math.pow(a-1,3)+1
}),jindo.Effect.easeInOutCubic=jindo.Effect(function(a){return a<0.5?jindo.Effect.easeIn(0,1)(2*a)*0.5:jindo.Effect.easeOut(0,1)(2*a-1)*0.5+0.5
}),jindo.Effect.easeOutInCubic=jindo.Effect(function(a){return a<0.5?jindo.Effect.easeOut(0,1)(2*a)*0.5:jindo.Effect.easeIn(0,1)(2*a-1)*0.5+0.5
}),jindo.Effect.easeInQuart=jindo.Effect(function(a){return Math.pow(a,4)
}),jindo.Effect.easeOutQuart=jindo.Effect(function(a){return -(Math.pow(a-1,4)-1)
}),jindo.Effect.easeInOutQuart=jindo.Effect(function(a){return a<0.5?jindo.Effect.easeInQuart(0,1)(2*a)*0.5:jindo.Effect.easeOutQuart(0,1)(2*a-1)*0.5+0.5
}),jindo.Effect.easeOutInQuart=jindo.Effect(function(a){return a<0.5?jindo.Effect.easeOutQuart(0,1)(2*a)*0.5:jindo.Effect.easeInQuart(0,1)(2*a-1)*0.5+0.5
}),jindo.Effect.easeInQuint=jindo.Effect(function(a){return Math.pow(a,5)
}),jindo.Effect.easeOutQuint=jindo.Effect(function(a){return Math.pow(a-1,5)+1
}),jindo.Effect.easeInOutQuint=jindo.Effect(function(a){return a<0.5?jindo.Effect.easeInQuint(0,1)(2*a)*0.5:jindo.Effect.easeOutQuint(0,1)(2*a-1)*0.5+0.5
}),jindo.Effect.easeOutInQuint=jindo.Effect(function(a){return a<0.5?jindo.Effect.easeOutQuint(0,1)(2*a)*0.5:jindo.Effect.easeInQuint(0,1)(2*a-1)*0.5+0.5
}),jindo.Effect.easeInCircle=jindo.Effect(function(a){return -(Math.sqrt(1-a*a)-1)
}),jindo.Effect.easeOutCircle=jindo.Effect(function(a){return Math.sqrt(1-(a-1)*(a-1))
}),jindo.Effect.easeInOutCircle=jindo.Effect(function(a){return a<0.5?jindo.Effect.easeInCircle(0,1)(2*a)*0.5:jindo.Effect.easeOutCircle(0,1)(2*a-1)*0.5+0.5
}),jindo.Effect.easeOutInCircle=jindo.Effect(function(a){return a<0.5?jindo.Effect.easeOutCircle(0,1)(2*a)*0.5:jindo.Effect.easeInCircle(0,1)(2*a-1)*0.5+0.5
}),jindo.Effect.easeInBack=jindo.Effect(function(a){var b=1.70158;
return a==1?1:a/1*(a/1)*((1+b)*a-b)
}),jindo.Effect.easeOutBack=jindo.Effect(function(a){var b=1.70158;
return a===0?0:(a=a/1-1)*a*((b+1)*a+b)+1
}),jindo.Effect.easeInOutBack=jindo.Effect(function(a){return a<0.5?jindo.Effect.easeInBack(0,1)(2*a)*0.5:jindo.Effect.easeOutBack(0,1)(2*a-1)*0.5+0.5
}),jindo.Effect.easeInElastic=jindo.Effect(function(a){var b=0,c=0,d;
return a===0?0:(a/=1)==1?1:(b||(b=0.3),!c||c<1?(c=1,d=b/4):d=b/(2*Math.PI)*Math.asin(1/c),-(c*Math.pow(2,10*(a-=1))*Math.sin((a-1)*2*Math.PI/b)))
}),jindo.Effect.easeOutElastic=jindo.Effect(function(a){var b=0,c=0,d;
return a===0?0:(a/=1)==1?1:(b||(b=0.3),!c||c<1?(c=1,d=b/4):d=b/(2*Math.PI)*Math.asin(1/c),c*Math.pow(2,-10*a)*Math.sin((a-d)*2*Math.PI/b)+1)
}),jindo.Effect.easeInOutElastic=jindo.Effect(function(a){var b=0,c=0,d;
return a===0?0:(a=a/(1/2))==2?1:(b||(b=0.3*1.5),!c||c<1?(c=1,d=b/4):d=b/(2*Math.PI)*Math.asin(1/c),a<1?-0.5*c*Math.pow(2,10*(a-=1))*Math.sin((a-d)*2*Math.PI/b):c*Math.pow(2,-10*(a-=1))*Math.sin((a-d)*2*Math.PI/b)*0.5+1)
}),jindo.Effect.easeOutBounce=jindo.Effect(function(a){return a<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+0.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+0.9375:7.5625*(a-=2.625/2.75)*a+0.984375
}),jindo.Effect.easeInBounce=jindo.Effect(function(a){return 1-jindo.Effect.easeOutBounce(0,1)(1-a)
}),jindo.Effect.easeInOutBounce=jindo.Effect(function(a){return a<0.5?jindo.Effect.easeInBounce(0,1)(2*a)*0.5:jindo.Effect.easeOutBounce(0,1)(2*a-1)*0.5+0.5
}),jindo.Effect.easeInExpo=jindo.Effect(function(a){return a===0?0:Math.pow(2,10*(a-1))
}),jindo.Effect.easeOutExpo=jindo.Effect(function(a){return a==1?1:-Math.pow(2,-10*a/1)+1
}),jindo.Effect.easeInOutExpo=jindo.Effect(function(a){return a<0.5?jindo.Effect.easeInExpo(0,1)(2*a)*0.5:jindo.Effect.easeOutExpo(0,1)(2*a-1)*0.5+0.5
}),jindo.Effect.easeOutInExpo=jindo.Effect(function(a){return a<0.5?jindo.Effect.easeOutExpo(0,1)(2*a)*0.5:jindo.Effect.easeInExpo(0,1)(2*a-1)*0.5+0.5
}),jindo.Effect._cubicBezier=function(a,b,c,d){return function(e){function l(a){return((h*a+g)*a+f)*a
}function m(a){return((k*a+j)*a+i)*a
}function n(a){return(3*h*a+2*g)*a+f
}function o(a,b){var c,d,e,f,g,h;
for(e=a,h=0;
h<8;
h++){f=l(e)-a;
if(Math.abs(f)<b){return e
}g=n(e);
if(Math.abs(g)<0.000001){break
}e-=f/g
}c=0,d=1,e=a;
if(e<c){return c
}if(e>d){return d
}while(c<d){f=l(e);
if(Math.abs(f-a)<b){return e
}a>f?c=e:d=e,e=(d-c)*0.5+c
}return e
}var f=3*a,g=3*(c-a)-f,h=1-f-g,i=3*b,j=3*(d-b)-i,k=1-i-j;
return m(o(e,0.005))
}
},jindo.Effect.cubicBezier=function(a,b,c,d){var e=jindo.Effect(jindo.Effect._cubicBezier(a,b,c,d));
return e.cubicBezier=[a,b,c,d],e
},jindo.Effect.cubicEase=jindo.Effect.cubicBezier(0.25,0.1,0.25,1),jindo.Effect.cubicEaseIn=jindo.Effect.cubicBezier(0.42,0,1,1),jindo.Effect.cubicEaseOut=jindo.Effect.cubicBezier(0,0,0.58,1),jindo.Effect.cubicEaseInOut=jindo.Effect.cubicBezier(0.42,0,0.58,1),jindo.Effect.cubicEaseOutIn=jindo.Effect.cubicBezier(0,0.42,1,0.58),jindo.Effect.overphase=jindo.Effect(function(a){return a/=0.652785,(Math.sqrt((2-a)*a)+0.1*a).toFixed(5)
}),jindo.Effect.sinusoidal=jindo.Effect(function(a){return -Math.cos(a*Math.PI)/2+0.5
}),jindo.Effect.mirror=jindo.Effect(function(a){return a<0.5?jindo.Effect.sinusoidal(0,1)(a*2):jindo.Effect.sinusoidal(0,1)(1-(a-0.5)*2)
}),jindo.Effect.pulse=function(a){return jindo.Effect(function(b){return -Math.cos(b*(a-0.5)*2*Math.PI)/2+0.5
})
},jindo.Effect.wave=function(a,b){return jindo.Effect(function(c){return(b||1)*Math.sin(a*c*360*Math.PI/180).toFixed(5)
})
},jindo.Effect.easeIn=jindo.Effect.easeInCubic,jindo.Effect.easeOut=jindo.Effect.easeOutCubic,jindo.Effect.easeInOut=jindo.Effect.easeInOutCubic,jindo.Effect.easeOutIn=jindo.Effect.easeOutInCubic,jindo.Effect.bounce=jindo.Effect.easeOutBounce,jindo.Effect.elastic=jindo.Effect.easeInElastic,jindo.UIComponent=jindo.$Class({$init:function(){this._bIsActivating=!1
},isActivating:function(){return this._bIsActivating
},activate:function(){return this.isActivating()?this:(this._bIsActivating=!0,arguments.length>0?this._onActivate.apply(this,arguments):this._onActivate(),this)
},deactivate:function(){return this.isActivating()?(this._bIsActivating=!1,arguments.length>0?this._onDeactivate.apply(this,arguments):this._onDeactivate(),this):this
}}).extend(jindo.Component),jindo.HTMLComponent=jindo.$Class({sTagName:"",$init:function(){},paint:function(){return this._onPaint(),this
},_onActivate:function(){(this.constructor._aInstances=this.constructor._aInstances||[]).push(this)
},_onDeactivate:function(){var a=this.constructor._aInstances||[],b=jindo.$A(a).indexOf(this);
b>-1&&a.splice(b,1)
}}).extend(jindo.UIComponent),jindo.HTMLComponent.paint=function(){var a=this._aInstances||[];
for(var b=0,c;
c=a[b];
b++){c.paint()
}},jindo.Timer=jindo.$Class({$init:function(){this._nTimer=null,this._nLatest=null,this._nRemained=0,this._nDelay=null,this._fRun=null,this._bIsRunning=!1
},start:function(a,b){return this.abort(),this._nRemained=0,this._nDelay=b,this._fRun=a,this._bIsRunning=!0,this._nLatest=this._getTime(),this.fireEvent("wait"),this._excute(this._nDelay,!1),!0
},isRunning:function(){return this._bIsRunning
},_getTime:function(){return(new Date).getTime()
},_clearTimer:function(){var a=!1;
return this._nTimer&&(clearTimeout(this._nTimer),this._bIsRunning=!1,a=!0),this._nTimer=null,a
},abort:function(){return this._clearTimer(),this._fRun?(this.fireEvent("abort"),this._fRun=null,!0):!1
},pause:function(){var a=this._getTime()-this._nLatest;
return this._nRemained=Math.max(this._nDelay-a,0),this._clearTimer()
},_excute:function(a,b){var c=this;
this._clearTimer(),this._bIsRunning=!0;
var d=function(a){if(!c._fRun){return
}if(c._nTimer||a){c.fireEvent("run");
var b=c._fRun();
c._nLatest=c._getTime();
if(!b){a||clearTimeout(c._nTimer),c._nTimer=null,c._bIsRunning=!1,c.fireEvent("end");
return
}c.fireEvent("wait"),c._excute(c._nDelay,!1)
}};
a>-1?this._nTimer=setTimeout(d,a):d(!0)
},resume:function(){return !this._fRun||this.isRunning()?!1:(this._bIsRunning=!0,this.fireEvent("wait"),this._excute(this._nRemained,!0),this._nRemained=0,!0)
}}).extend(jindo.Component),jindo.Transition=jindo.$Class({_nFPS:30,_aTaskQueue:null,_oTimer:null,_bIsWaiting:!0,_bIsPlaying:!1,$init:function(a){this._aTaskQueue=[],this._oTimer=new jindo.Timer,this._oSleepTimer=new jindo.Timer,this.option({fEffect:jindo.Effect.linear,bCorrection:!1}),this.option(a||{})
},fps:function(a){return arguments.length>0?(this._nFPS=a,this):this._nFPS
},isPlaying:function(){return this._bIsPlaying
},abort:function(){return this._aTaskQueue=[],this._oTimer.abort(),this._oSleepTimer.abort(),this._bIsPlaying&&this.fireEvent("abort"),this._bIsWaiting=!0,this._bIsPlaying=!1,this._htTaskToDo=null,this
},start:function(a,b,c){return arguments.length>0&&this.queue.apply(this,arguments),this._prepareNextTask(),this
},queue:function(a,b){var c;
if(typeof arguments[0]=="function"){c={sType:"function",fTask:arguments[0]}
}else{var d=[];
if(arguments[1] instanceof Array){d=arguments[1]
}else{var e=[];
jindo.$A(arguments).forEach(function(a,b){b>0&&(e.push(a),b%2===0&&(d.push(e.concat()),e=[]))
})
}c={sType:"task",nDuration:a,aList:[]};
for(var f=0,g=d.length;
f<g;
f++){var h=[],i=d[f][1],j;
for(var k in i){j=i[k],/^(@|style\.)(\w+)/i.test(k)?h.push(["style",RegExp.$2,j]):h.push(["attr",k,j])
}c.aList.push({elTarget:d[f][0],aValue:h})
}}return this._queueTask(c),this
},pause:function(){return this._oTimer.abort()&&this.fireEvent("pause"),this
},resume:function(){if(this._htTaskToDo){this._bIsWaiting===!1&&this._bIsPlaying===!0&&this.fireEvent("resume"),this._doTask(),this._bIsWaiting=!1,this._bIsPlaying=!0;
var a=this;
this._oTimer.start(function(){var b=!a._doTask();
return b&&(a._bIsWaiting=!0,setTimeout(function(){a._prepareNextTask()
},0)),!b
},this._htTaskToDo.nInterval)
}return this
},precede:function(a,b,c){return this.start.apply(this,arguments),this
},sleep:function(a,b){return typeof b=="undefined"&&(b=function(){}),this._queueTask({sType:"sleep",nDuration:a,fCallback:b}),this._prepareNextTask(),this
},_queueTask:function(a){this._aTaskQueue.push(a)
},_dequeueTask:function(){var a=this._aTaskQueue.shift();
if(a){if(a.sType=="task"){var b=a.aList;
for(var c=0,d=b.length;
c<d;
c++){var e=b[c].elTarget,f=null;
for(var g=0,h=b[c].aValue,i=h.length;
g<i;
g++){var j=h[g][0],k=h[g][1],l=h[g][2];
if(typeof l!="function"){var m=this.option("fEffect");
l instanceof Array?l=m(l[0],l[1]):l=m(l),h[g][2]=l
}if(l.setStart){if(this._isHTMLElement(e)){f=f||jindo.$Element(e);
switch(j){case"style":l.setStart(f.css(k));
break;
case"attr":l.setStart(f.$value()[k])
}}else{l.setStart(e.getter(k))
}}}}}return a
}return null
},_prepareNextTask:function(){if(this._bIsWaiting){var a=this._dequeueTask();
if(a){switch(a.sType){case"task":this._bIsPlaying||this.fireEvent("start");
var b=1000/this._nFPS,c=b/a.nDuration;
this._htTaskToDo={aList:a.aList,nRatio:0,nInterval:b,nGap:c,nStep:0,nTotalStep:Math.ceil(a.nDuration/b)},this.resume();
break;
case"function":this._bIsPlaying||this.fireEvent("start"),a.fTask(),this._prepareNextTask();
break;
case"sleep":this._bIsPlaying&&(this.fireEvent("sleep",{nDuration:a.nDuration}),a.fCallback());
var d=this;
this._oSleepTimer.start(function(){d.fireEvent("awake"),d._prepareNextTask()
},a.nDuration)
}}else{this._bIsPlaying&&(this._bIsPlaying=!1,this.abort(),this.fireEvent("end"))
}}},_isHTMLElement:function(a){return"tagName" in a
},_doTask:function(){var a=this._htTaskToDo,b=parseFloat(a.nRatio.toFixed(5),1),c=a.nStep,d=a.nTotalStep,e=a.aList,f={},g=this.option("bCorrection");
for(var h=0,i=e.length;
h<i;
h++){var j=e[h].elTarget,k=null;
for(var l=0,m=e[h].aValue,n=m.length;
l<n;
l++){var o=m[l][0],p=m[l][1],q=m[l][2](b);
if(this._isHTMLElement(j)){if(g){var r=/^\-?[0-9\.]+(%|[\w]+)?$/.test(q)&&RegExp.$1||"";
if(r){var s=parseFloat(q);
s+=f[p]||0,s=parseFloat(s.toFixed(5)),h==i-1?q=Math.round(s)+r:(f[p]=s-Math.floor(s),q=parseInt(s,10)+r)
}}k=k||jindo.$Element(j);
switch(o){case"style":k.css(p,q);
break;
case"attr":k.$value()[p]=q
}}else{j.setter(p,q)
}this._bIsPlaying&&this.fireEvent("playing",{element:j,sKey:p,sValue:q,nStep:c,nTotalStep:d})
}}return a.nRatio=Math.min(a.nRatio+a.nGap,1),a.nStep+=1,b!=1
}}).extend(jindo.Component),function(){var a=jindo.$Element.prototype.css;
jindo.$Element.prototype.css=function(c,d){return c=="opacity"?typeof d!="undefined"?this.opacity(parseFloat(d)):this.opacity():typeof d!="undefined"?a.call(this,c,d):a.call(this,c)
}
}()
})("commentJ");
var sps;
document.domain="naver.com";
if(typeof sps=="undefined"){sps={CommentBox:{},config:{}}
}else{if(typeof sps.CommentBox=="undefined"){sps.CommentBox={}
}}sps.CommentBox.NAME="sps.CommentBox";
sps.CommentBox.VERSION="1.0.1.6824";
sps.CommentBox.Config=commentJ.$Class({name:"unknown",version:"unknown",message:{},$init:function(htOptions){this.name=sps.CommentBox.Config.NAME;
this.version=sps.CommentBox.Config.VERSION;
this.instance={};
this._initDefaultConfiguration();
this._initConvertConvention();
if(typeof htOptions=="object"){this.option(htOptions)
}var serviceAddress=document.location.protocol+"//";
serviceAddress+=document.location.host+"/";
serviceAddress+=this.option("servicePath")+"/";
this.option("serviceAddress",serviceAddress);
var booleans=this.option("booleans");
booleans.isMine=true;
booleans.isAdmin=true;
booleans.isReply=true;
booleans.isDeleted=true;
booleans.isVisible=true;
booleans.isAuthor=true;
booleans.isAuthorComment=true;
booleans.isUserRecommend=true;
booleans.isAuthorRecommend=true;
booleans.isRecommendArea=true;
booleans.isMobile=true;
var comment=this.option("comment");
comment.push("parentCommentNo");
comment.push("commentNo");
comment.push("writerNickName");
comment.push("writerId");
comment.push("writerIp");
comment.push("isMine");
comment.push("isAdmin");
comment.push("contents");
comment.push("registeredDate");
comment.push("modifiedDate");
comment.push("replyLevel");
comment.push("isReply");
comment.push("isDeleted");
comment.push("isVisible");
comment.push("writerProfileUrl");
comment.push("writerProfileType");
comment.push("isMe2DayPosted");
comment.push("upCount");
comment.push("downCount");
comment.push("isUserRecommend");
comment.push("isAuthorRecommend");
comment.push("isRecommendArea");
comment.push("isAuthor");
comment.push("isAuthorComment");
comment.push("replyCount");
comment.push("objectScore");
comment.push("status");
comment.push("isMobile");
comment.push("personacon");
comment.push("isMe2day");
comment.push("isFacebook");
comment.push("isTwitter");
comment.push("isSocialLinkOpen");
comment.push("isSocialReplyActive");
comment.push("ticket");
comment.push("categoryId")
},_initConvertConvention:function(){var convention=this.option("convention");
convention={parentCommentNo:"parent_comment_no",commentNo:"comment_no",groupNo:"group_no",writerNickName:"writer_nickname",writerId:"writer_id",encodedWriterId:"enc_writer_id",writerIp:"writer_ip",registeredDate:"registered_ymdt",modifiedDate:"modified_ymdt",replyLevel:"reply_level",typeCode:"comment_type_code",isMine:"is_mine",isAdmin:"is_admin",isReply:"is_reply",isDeleted:"deleted_yn",isVisible:"visible_yn",isMe2DayPosted:"is_me2day_posted",ticket:"ticket",objectId:"object_id",objectUrl:"object_url",replyCount:"reply_count",writerProfileUrl:"writer_profile_url",writerProfileType:"writer_profile_type",upCount:"up_count",downCount:"down_count",isUserRecommend:"user_recommend_yn",isAuthorRecommend:"author_recommend_yn",isRecommendArea:"is_recommend_area",isAuthor:"is_author",isAuthorComment:"is_author_comment",replyCount:"reply_count",objectScore:"object_score",status:"status",isMobile:"mobile_yn",personacon:"personacon",isMe2day:"is_me2day",isFacebook:"is_facebook",isTwitter:"is_twitter",categoryId:"category_id"};
this.option("convention",convention)
},_initDefaultConfiguration:function(){this.option("useCategory",false);
this.option("categoryId","default");
this.option("viewCategoryId",undefined);
this.option("useProfile",false);
this.option("useScore",false);
this.option("useMe2Day",false);
this.option("useSpan",false);
this.option("useMemorial",false);
this.option("useDummyThumb",false);
this.option("useCountUnderBar",false);
this.option("useRecommendArea",false);
this.option("useRecommendResult",false);
this.option("useReplyArea",false);
this.option("useSocialComment",false);
this.option("nidManageSocialAuthUrl","https://nid.naver.com/user/help.nhn?a=privateInfo&m=certBeginForExternalAuthInfo&menu=nid2_sub_m3");
this.option("socialAuthUrl","https://nid.naver.com/oauth/idLink.nhn?");
this.option("method","post");
this.option("pageSize",10);
this.option("replyPageSize",10);
this.option("isLogin",false);
this.option("objectUrl",""+document.location);
this.option("servicePath","comments");
this.option("dateFormat","Y-m-d H:i");
this.option("centerPaginate",false);
this.option("paginateSize",10);
this.option("commands",["reply","report","delete"]);
this.option("allowCommandsAtReplyArea",["report","delete"]);
this.option("nobarInCommandGroup",["reply","delete","report"]);
this.option("formation",["count","list","page","write"]);
this.option("me2desc",["me2check","me2guide","me2certify"]);
this.option("layers",["me2guide","profile","me2Help","naverHelp","bestInfo","sortOldInfo"]);
this.option("descs",["policy"]);
this.option("maxDepth",2);
this.option("maxReplyAreaDepth",1);
this.option("maxScoreDepth",1);
this.option("maxScore",10);
this.option("enableMultiLine",false);
this.option("enableSpotLight",true);
this.option("maximumCommentLength",500);
this.option("useBlockCopyAndPaste",false);
this.option("defaultProfileUrl","https://ssl.pstatic.net/static/common/comment/img_default_profile.gif");
this.option("me2dayDefaultImageUrl","http://static1.me2day.net/images/profile.png");
this.option("memorialDefaultImageUrl","https://ssl.pstatic.net/static/common/comment/ico_cherish.gif");
this.option("pwBlockUrl","not_available.nhn");
this.option("pwReportUrl","report.nhn");
this.option("profileHome","redirect.nhn");
this.option("browser",commentJ.$Agent().navigator().getName());
this.option("onTextboxBackground","#FFFFFF");
this.option("onTextboxFontColor","#666666");
this.option("offTextboxBackground","#FFFFFF");
this.option("offTextboxFontColor","#666666");
this.option("replaceErrorFontFamily","돋움, Dotum");
this.option("thumbSizeInComment","medium");
this.option("replyThumbSizeInWritebox","medium");
this.option("isDescInOnlyRoot",false);
this.option("isReplyWriteBoxPositionOnBottom",true);
this.option("useSpareButtonInReplyWriteBox",false);
this.option("useProfileThumbLink",true);
this.option("useNameLink",true);
this.option("useWriteDummyThumb",false);
this.option("useLineBreaking8203",true);
this.option("useEscapeHtml",true);
this.option("useProfileNameLink",true);
this.option("useMobile",false);
this.option("usePersonacon",false);
this.option("useLoginPopup",false);
this.option("loginCallbackUrl","http://commentbox.naver.com/loginSuccess.nhn");
this.option("snsAuthStatus",{});
this.option("urlList",{});
this.option("currentSortOption",undefined);
this.option("sortOptionList",["newest","oldest"]);
this.option("useSortArea",false);
this.option("useInfoArea",false);
this.option("useInnerSvcList",false);
this.option("innerSvcListSize",3);
this.option("useInnerSvcShowReply",false);
this.option("useFocus",true);
this.option("landingCommentNo",null);
this.option("social",{active:false,link_open:false,reply_active:false});
this.option("comment",[]);
this.option("convention",{});
this.option("initialized",false);
this.option("booleans",{});
this.option({elements:{list:".cbox_list_comment",countArea:".cbox_list_info",writeboxRoot:".writebox_root_area",writebox:".cbox_write",textarea:"textarea",userArea:".cbox_user_area",mainPartInWritebox:".cbox_txt_area",writeButton:'input[type="image"]',closeButton:".cbox_close",layer:".cbox_layer_popup",commentNameArea:".cbox_section",commands:".cbox_section2",descs:".cbox_desc_area",paginate:".cbox_paginate",body:"#cbox_module",focusTarget:"comment_focus",me2dayCheck:"input[name=chk_submit_m2day]",me2dayLink:"span a",helpButton:".cbox_help",commentBody:".cbox_comment_area",firstOfCommentBody:".cbox_info_area",secondOfCommentBody:".cbox_info_area2",commentText:".cbox_desc",recommendCount:"span",profileButtonArea:".cbox_btn_area2",profileRadio:"input[name=rdo_profile][checked]",scoreArea:".cbox_select_area",scoreDiv:".selectbox-noscript",scoreSelector:".selectbox-source",starGrade:".cbox_star_grade",replyNum:".reply_num",replyAreaPageLeft:".cbox_best_pre",replyAreaPageRight:".cbox_best_next",recommend:".cbox_activate_up",discommend:".cbox_activate_down",mobileIcon:".ico_mobile",mobileLayer:".ly_mobile",personacon:".personacon",personaconButtonArea:".cbox_btn_area2",personaconThumbImg:".cbox_personacon_thumb",snsCheckboxArea:".cbox_sns",cboxSnsShare:".cbox_sns_share"}});
this.option({css:{firstCommand:"cbox_first",spotLight:"cbox_focus",basicWriteBoxType:"cbox_write_default",profileWriteBoxType:"cbox_profile",personaconWriteBoxType:"cbox_profile",thumbOn:"cbox_thumb_on",thumbOff:"cbox_thumb_off",closeButtonOver:"cbox_over",countUnderBar:"cbox_h_type2",noBarOnCommend:"cbox_nobar",recommendCountOn:"on",cboxOn:"cbox_on",thumbs:"cbox_thumbs",thumb:"cbox_thumb",writeboxProfile:"cbox_profile",writeboxPersonacon:"cbox_profile",writeboxProfileArea:"cbox_profile_area",writeboxPersonaconArea:"cbox_profile_area",nickName:"cbox_nick_name",userId:"cbox_user_id",noProfileThumbArea:"cbox_li_type",bodySpan:"cbox_fluid",spanThumbs:"cbox_thumbs_box",scoreList:"cbox_list_comment_vari",replyCountOn:"on",replyAreaUnfold:"unfold",cboxPagination:"cbox_pagination"}});
this.option({templates:{comment:'<li class="cbox_thumb_off comment_no_{=commentNo}" >{if replyLevel > 1} <span class="cbox_bu_subnode">ㄴ</span> {/if}<div class="cbox_comment_area"><div class="cbox_info_area"><div class="cbox_section">{if config.option(\'usePersonacon\') && personacon}<img class="cbox_personacon sticker" src="{=personacon}"/>{/if}{if writerNickName != null}<span class="cbox_nick_name">{=writerNickName}</span> {/if}<span class="cbox_user_id">({=writerId})</span> <span class="cbox_date">{=registeredDate}</span> {if config.option(\'useSocialComment\') && isMine && (isMe2day || isFacebook || isTwitter)}{if !(replyLevel > 1 && !isSocialReplyActive)}<span class="cbox_sns_share">{if \'true\'== isMe2day}<a href="{js commentJ.$S((=config.option(\'urlList\').social.redirectSns)).format((=ticket),(=commentNo),\'ME2DAY\')}" {if !isSocialLinkOpen}onclick="return false;"{/if} class="me2 N=a:CML.me2" target="_blank">미투데이</a>{/if}{if \'true\'== isFacebook}<a href="{js commentJ.$S((=config.option(\'urlList\').social.redirectSns)).format((=ticket),(=commentNo),\'FACEBOOK\')}" {if !isSocialLinkOpen}onclick="return false;"{/if} class="facebook N=a:CML.fb" target="_blank">페이스북</a>{/if}{if \'true\'== isTwitter}<a href="{js commentJ.$S((=config.option(\'urlList\').social.redirectSns)).format((=ticket),(=commentNo),\'TWITTER\')}" {if !isSocialLinkOpen}onclick="return false;"{/if} class="twitter N=a:CML.tw" target="_blank">트위터</a>{/if}</span>{/if}{/if}</div><div class="cbox_section2"></div></div><div class="cbox_desc_comment"><p class="cbox_desc" style="word-break:break-all;line-break: all;word-wrap:break-word;">{=contents}</p></div></div><ul></ul></li>',deleteComment:'<li class="cbox_thumb_off comment_no_{=commentNo}" >{if replyLevel > 1} <span class="cbox_bu_subnode">ㄴ</span> {/if}<div class="cbox_comment_area"><div class="cbox_info_area"></div><div class="cbox_desc_comment"><p class="cbox_desc" style="word-break:break-all;line-break: all;word-wrap:break-word;">댓글이 삭제되었습니다.</p></div></div><ul></ul></li>',blockComment:'<li class="cbox_thumb_off comment_no_{=commentNo}" >{if replyLevel > 1} <span class="cbox_bu_subnode">ㄴ</span> {/if}<div class="cbox_comment_area"><div class="cbox_info_area"><div class="cbox_section2"></div></div><div class="cbox_desc_comment"><p class="cbox_desc" style="word-break:break-all;line-break: all;word-wrap:break-word;">{if status == 7 }본 게시물은 저작권법 제103조에 의거하여 저작권자의 요청으로 임시 게시중단 되었습니다.{elseif status == 8 || status == 9}본 게시물은 정보통신망이용촉진및정보보호등에 관한 법률 제44조의2를 준수하기 위해 다른 이용자의 요청으로 임시 게시중단 되었습니다.{/if}</p></div></div><ul></ul></li>',countArea:'<div class="cbox_list_info"></div>',countSimple:'<h5 class="cbox_h_type">댓글 <span>(<strong>{=count}</strong>)</span></h5>',countDetail:'<h5 class="cbox_h_type">사용자평 <span>(<strong>{=score.count}</strong>)</span></h5>',rootWriteBoxArea:'<div class="writebox_root_area"></div>',sortArea:'<div class="cbox_sort_area"></div>',sortList:'<span class="cbox_list_sort"></span>',sortButton:'<a href="#" id="{=sortId}">{=sortName}</a>',sortButtonBlind:'<span class="cbox_blind"> 선택됨</span>',bestInfo:'<span class="cbox_best_info" style="display:none" id="bestInfo">BEST 댓글 운영 기준 안내 <a href="#none"><img src="https://ssl.pstatic.net/static/common/comment/btn_tip.gif" width="14" height="14" title="BEST 댓글 운영 안내 보기" alt="BEST 댓글 운영 안내 보기" border="0"></a></span>',bestInfoLayer:'<div class="cbox_layer_popup best_info_layer" tier="2" style="top:32px;right:0;display:none"><strong class="cbox_blind">BEST 댓글 운영 기준 안내 레이어</strong><button type="button" class="cbox_close" title="BEST 댓글 운영 기준 안내 레이어 닫기"><span><em>닫기</em></span></button><p>댓글에 대한 답글은 베스트 댓글 선정에서<br> 제외 됩니다.</p><p>타인에게 불쾌감을 주거나 저자의 요청을 받은<br> 경우도 베스트 댓글에서 제외될 수 있습니다.</p></div>',sortOldInfo:'<span class="cbox_best_info" style="display:none" id="oldInfo">등록순 정렬 도움말 <a href="#none"><img src="https://ssl.pstatic.net/static/common/comment/btn_tip.gif" width="14" height="14" title="등록순 정렬 도움말 보기" alt="등록순 정렬 도움말 보기" border="0"></a></span>',sortOldInfoLayer:'<div class="cbox_layer_popup best_info_layer" tier="2" style="display:none;top:32px;right:0"><strong class="cbox_blind">등록순 정렬 도움말 레이어</strong><button type="button" class="cbox_close" title="등록순 정렬 도움말 레이어 닫기"><span><em>닫기</em></span></button><p>댓글 등록일이 가장 늦은순으로 정렬 됩니다.</p><p>댓글을 중심으로 정렬되며, 댓글의 답글은<br> 영향받지 않습니다.</p></div>',list:'<div class="cbox_list_comment"><ul></ul></div>',writeBox:'<div class="cbox_write"><div class="cbox_write_box"><div class="cbox_write_box2"><form action="#" method="post"><fieldset><legend>댓글 등록 폼</legend><div class="cbox_user_area"><div class="cbox_txt_area"><!-- 유동형 덧글 입력상자 --><div class="cbox_section"><textarea class="cbox_txt_focus_area" name="" title="댓글 입력창"></textarea><div class="cbox_btn_area N=a:CMW.ok"><input type="image" src="https://ssl.pstatic.net/static/common/comment/btn_registry.gif" alt="등록"onMouseDown="this.src=\'https://ssl.pstatic.net/static/common/comment/btn_registry_down.gif\'" onMouseOut="this.src=\'https://ssl.pstatic.net/static/common/comment/btn_registry.gif\'"></div></div><div class="cbox_desc_area"></div><!-- //유동형 덧글 입력상자 --></div></div></fieldset></form></div></div></div>',spareWriteButton:'<input type="image" src="https://ssl.pstatic.net/static/common/comment/btn_registry.gif" alt="등록"onMouseDown="this.src=\'https://ssl.pstatic.net/static/common/comment/btn_registry_down.gif\'" onMouseOut="this.src=\'https://ssl.pstatic.net/static/common/comment/btn_registry.gif\'">',subNode:'<span class="cbox_bu_subnode">ㄴ</span>',recommendImgArea:'<span class="cbox_desc_img"></span> ',extra1:"<div></div>",extra2:"<div></div>",extra3:"<div></div>",extra4:"<div></div>",extra5:"<div></div>",deleteCommand:'{if isMine}<span><a href="#" class="N=a:CML.del">삭제</a></span>{/if}',reportCommand:'{if !isMine}<span><a href="#" class="N=a:CML.report" title="새 창">신고</a></span>{/if}',replyCommand:'<span><a href="#" class="N=a:CML.reply">답글</a></span>',replyCancelCommand:'<span><a href="#" class="N=a:CML.rpcancel">답글취소</a></span>',recommendCommand:'<span class="cbox_activate_up"><a href="#" title="이 댓글을 공감합니다" class="N=a:CML.like"><em>공감</em>: </a><span>0</span></span>',discommendCommand:'<span class="cbox_activate_down"><a href="#" title="이 댓글을 비공감합니다" class="N=a:CML.dlike"><em>비공감</em>: </a><span>0</span></span>',authorCommand:'{if isAuthor}<span class="cbox_activate_up"><a href="#" title="좋은 댓글로 공감하시면, 이 댓글이 공감 댓글 목록에 추가됩니다."><em>필자공감</em></a></span>{/if}',authorCancelCommand:'{if isAuthor}<span class="cbox_activate_cancel"><a href="#" title="공감을 취소하시면, 이 댓글은 공감 댓글 목록에서 지워지고 원래의 위치에 나타납니다."><em>공감취소</em></a></span>{/if}',pageArea:'<div class="cbox_paginate"></div>',pageInfoText:'<strong class="cbox_htitle">페이지 이동하기</strong>',page:'<a href="#" class="N=a:CML.page,r:{=page}">{=page}</a>',currentPage:"<strong>{=page}<span> 현재 선택된 페이지</span></strong>",firstPage:'<a class="cbox_pre_end" href="#">맨앞</a>',prevPage:'<a class="cbox_pre N=a:CML.prev" href="#">이전<span> 페이지 목록으로 이동하기</span></a>',nextPage:'<a class="cbox_next N=a:CML.next" href="#">다음<span> 페이지 목록으로 이동하기</span></a>',lastPage:'<a class="cbox_next_end" href="#">맨뒤</a>',arthorRecommendImgTag:'<img src="https://ssl.pstatic.net/static/common/comment/ico_writer_recommend.gif" width="33" height="15" title="필자가 좋은 댓글로 공감한 글입니다." alt="필자가 좋은 댓글로 공감한 글입니다." class="recommend">',userRecommendImgTag:'<img src="https://ssl.pstatic.net/static/common/comment/ico_best_comment.png" width="33" height="15" title="네이버 이용자들이 공감한 댓글입니다." alt="네이버 이용자들이 공감한 댓글입니다." class="recommend2">',recommendReply:'<div class="cbox_info_area2"><span>0</span>개의 답글이 있습니다. <a href="#" class="N=a:CML.best">답글 작성하러 가기</a></div>',socialCommentDesc:'<div class="cbox_sns"><input type="checkbox" class="_me2day N=a:CMW.me2" id="me2day_{=level}"><label for="me2day_{=level}" class="me2 {if !isMe2day}off{/if}">미투데이</label><input type="checkbox" class="_facebook N=a:CMW.fb" id="facebook_{=level}"><label for="facebook_{=level}" class="facebook {if !isFacebook}off{/if}">페이스북</label><input type="checkbox" class="_twitter N=a:CMW.tw" id="twitter_{=level}"><label for="twitter_{=level}" class="twitter {if !isTwitter}off{/if}">트위터</label><span>에 함께 등록 <a href="#" class="set N=a:CMW.snsset">설정</a></span></div>',policyDesc:'<div class="cbox_desc2"><p><span>주제와 무관한 댓글, 악플은 삭제될 수 있습니다.</span><a href="#" target="_blank">댓글 운영정책</a></p></div>',textCountDesc:'<div class="cbox_desc2"><em class="cbox_text_length">현재 입력한 글자수 </em><span class="cbox_present_text_length">0</span>/ <em class="cbox_text_length">전체 입력 가능한 글자수 </em><span class="cbox_total_text_length">0</span> </div>',me2checkDesc:'<p class="cbox_desc"><input type="checkbox" name="chk_submit_m2day" id="chk_submit_m2day4" class="cbox_input_chk"><span><a href="#" target="_blank">나의 미투데이</a>에 글을 등록합니다.</span></p>',me2guideDesc:'<div class="cbox_btn_area3"><button type="button" class="cbox_help"><span>도움말</span></button></div>',me2certifyDesc:'<p class="cbox_desc3"><a href="#" target="_blank">미투데이 시작하기</a></p>',me2decertifyButtonInDesc:'<a href="#" target="_blank">인증해제</a>',me2guideLayer:'<div class="cbox_layer_popup" tier="1" style="width:278px; left:0; top:0;"><button type="button" class="cbox_close N=a:CMW.close"><span><em>닫기</em></span></button><p class="cbox_desc6">체크박스를 선택하여 <a href="http://me2day.net" target="_blank">미투데이</a>에 글을<br>동시에 등록할 수 있습니다.</p></div>',profileLayer:'<div class="cbox_layer_popup" tier="1" style="width:298px; left:54px; top:-12px;"><form action="#" method="post"><button type="button" class="cbox_close N=a:CMW.close"><span><em>닫기</em></span></button><dl class="cbox_list_profile"><dt>프로필 선택</dt><dd>내 댓글 작성자명에 해당 블로그 / 미투데이 링크가 걸립니다.</dd></dl><ul></ul><div class="cbox_btn_area2"><input type="image" class="N=a:CMW.ok"src="https://ssl.pstatic.net/static/common/comment/btn_confirm.gif" alt="확인" onMouseOver="this.src=\'https://ssl.pstatic.net/static/common/comment/btn_confirm_over.gif\'" onMouseOut="this.src=\'https://ssl.pstatic.net/static/common/comment/btn_confirm.gif\'"><a href="#" class="N=a:CMW.cancel"><img src="https://ssl.pstatic.net/static/common/comment/btn_cancel.gif" width="45" height="25" alt="취소" onMouseOver="this.src=\'https://ssl.pstatic.net/static/common/comment/btn_cancel_over.gif\'" onMouseOut="this.src=\'https://ssl.pstatic.net/static/common/comment/btn_cancel.gif\'" ></a></div></form></div>',personaconLayer:'<div class="cbox_layer_popup" tier="1" style="width:298px; left:54px; top:-12px;"><button type="button" class="cbox_close"><span><em>닫기</em></span></button><ul></ul><div class="cbox_btn_area2"><a href="#"><img src="https://ssl.pstatic.net/static/common/comment/btn_cancel.gif" width="45" height="25" alt="취소" onMouseOver="this.src=\'https://ssl.pstatic.net/static/common/comment/btn_cancel_over.gif\'" onMouseOut="this.src=\'https://ssl.pstatic.net/static/common/comment/btn_cancel.gif\'" ></a></div></div>',me2HelpLayer:'<span class="cbox_layer_popup" tier="2" style=" width:278px; left:0; top:0;"><a href="#" class="cbox_close"><span><em>닫기</em></span></a><span class="cbox_desc6">내 미투데이에 등록한 사진, 별명을 사용합니다.</span></span>',naverHelpLayer:'<span class="cbox_layer_popup" tier="2" style="width:278px; left:0; top:0;"><a href="#" class="cbox_close"><span><em>닫기</em></span></a><span class="cbox_desc6">네이버 회원정보에 등록한 별명을 사용합니다.</span></span>',thumbMediumProfileImg:'<img alt="썸네일" class="cbox_user_thumb" width="40" height="40" >',thumbSmallProfileImg:'<img alt="썸네일" class="cbox_user_thumb" width="22" height="22" >',thumbProfileBorder:'<span class="cbox_tmp_border"></span>',profileButton:'<button type="button" class="N=a:CMW.prof"><span>변경</span></button>',thumbPersonaconImg:'<img alt="썸네일" class="cbox_personacon_thumb" width="50" height="50" >',personaconButton:'<button type="button"><span>스티커</span></button>',profileRadio:'<input type="radio" name="rdo_profile" class="cbox_input_rdo">',blogLabel:"<label>네이버 블로그 프로필</label>",me2Label:"<label>미투데이 프로필</label>",naverLabel:"<label>네이버 별명</label>",baseball9Label:"<label>야구9단 프로필</label>",aBlank:'<a href="#" target="_blank"></a>',helpButton:'<span class="cbox_btn_area4"><button type="button" class="cbox_help"><span>도움말</span></button></a>',decertifyButton:'<a href="#" class="cbox_option" target="_blank"><span>인증해제</span></a>',certifyButton:'<a href="#" class="cbox_option" >가져오기</a>',authorImg:'<img width="40" height="12" class="cbox_admin" alt="" src="https://ssl.pstatic.net/static/common/comment/blank.gif">',authorText:"<span>필자</span>",spanWriteBox:'<div class="cbox_txt_area"><table cellspacing="0" class="cbox_section"><caption>덧글 입력박스</caption><tbody><tr><td></td><td><textarea class="cbox_txt_focus_area" cols="80" rows="20" name="" title="댓글 입력창"></textarea></td><td class="cbox_btn_area N=a:CMW.ok"><input type="image" src="https://ssl.pstatic.net/static/common/comment/btn_registry.gif" alt="등록" onMouseDown="this.src=\'https://ssl.pstatic.net/static/common/comment/btn_registry_down.gif\'" onMouseOut="this.src=\'https://ssl.pstatic.net/static/common/comment/btn_registry.gif\'"></td></tr><tr><td></td><td><div class="cbox_desc_area"></div></td><td></td></tr></tbody></table></div>',scoreArea:'<div class="cbox_select_area"><div id="s2" class="selectbox-noscript"><label for="select_grade">평점 선택 옵션</label><select id="select_grade" name="" class="selectbox-source N=a:CMW.star"><option class="selectbox-default">평점선택</option><option value="10">10점</option><option value="9">9점</option><option value="8">8점</option><option value="7">7점</option><option value="6">6점</option><option value="5">5점</option><option value="4">4점</option><option value="3">3점</option><option value="2">2점</option><option value="1">1점</option></select><div class="selectbox-box"><div class="selectbox-label">평점선택</div></div><div class="selectbox-layer"><div class="selectbox-list"></div></div></div></div>',scoreItem:'<separator/><span class="cbox_star_grade"><span style="width:100%;"><em>10점</em></span></span><separator/><span class="cbox_star_grade"><span style="width:90%;"><em>9점</em></span></span<separator/><span class="cbox_star_grade"><span style="width:80%;"><em>8점</em></span></span><separator/><span class="cbox_star_grade"><span style="width:70%;"><em>7점</em></span></span><separator/><span class="cbox_star_grade"><span style="width:60%;"><em>6점</em></span></span><separator/><span class="cbox_star_grade"><span style="width:50%;"><em>5점</em></span></span><separator/><span class="cbox_star_grade"><span style="width:40%;"><em>4점</em></span></span><separator/><span class="cbox_star_grade"><span style="width:30%;"><em>3점</em></span></span><separator/><span class="cbox_star_grade"><span style="width:20%;"><em>2점</em></span></span><separator/><span class="cbox_star_grade"><span style="width:10%;"><em>1점</em></span></span>',thirdOfCommentBody:'<div class="cbox_info_area3"></div>',fourthOfCommentBody:'<div class="cbox_info_area2"><a href="#"><strong>답글</strong> <span class="reply_num"></span></a></div>',scoreBoard:'<div class="cbox_section"><span class="cbox_star_grade"></span></div>',replyAreaPage:'<li class="cbox_thumb_off cbox_pagination"><p class="cbox_best_paginate"><a href="#" class="cbox_best_pre">이전 답글</a><span class="cbox_best_page"><em><span class="cbox_blind">현재 선택된 페이지 </span> {=curPage}</em>/<em><span class="cbox_blind">전체 페이지 수 </span>{=totalPage}</em></span><a href="#" class="cbox_best_next">다음 답글</a></p></li>',mobileIcon:'<img src="https://ssl.pstatic.net/static/common/comment/ico_mobile.gif" width="9" height="12" alt="모바일" class="ico_mobile"> ',mobileLayer:'<div style="top:26px; left:159px; z-index:30" class="ly_mobile">모바일에서 작성한 댓글입니다.<em></em></div>'}})
},element:function(oName,sElement){var elements=this.option("elements");
if(typeof elements=="undefined"||elements==null){elements={};
this.option("elements",elements)
}if(typeof oName=="object"){for(var i=0;
i<oName.length;
i++){elements[i]=oName[i]
}}else{if(typeof oName=="string"){if(typeof sElement=="string"){elements[oName]=sElement
}else{return elements[oName]
}}else{return null
}}},template:function(oName,sTemplate){var templates=this.option("templates");
if(typeof templates=="undefined"||templates==null){templates={};
this.option("templates",templates)
}if(typeof oName=="object"){for(var i=0;
i<oName.length;
i++){templates[i]=oName[i]
}}else{if(typeof oName=="string"){if(typeof sTemplate=="string"){templates[oName]=sTemplate
}else{return commentJ.$Template(templates[oName])
}}else{return null
}}},css:function(oName,sStyle){var styles=this.option("css");
if(typeof styles=="undefined"||styles==null){styles={};
this.option("css",styles)
}if(typeof oName=="object"){for(var i=0;
i<oName.length;
i++){styles[i]=oName[i]
}}else{if(typeof oName=="string"){if(typeof sStyle=="string"){styles[oName]=sStyle
}else{return styles[oName]
}}else{return null
}}}}).extend(commentJ.Component);
sps.CommentBox.Config.prototype.message.UNAVAILABLE_OPERATION="요청한 동작을 수행할 수 없습니다.";
sps.CommentBox.Config.prototype.message.ALREADY_REPORT="이미 신고된 글입니다.";
sps.CommentBox.Config.prototype.message.NO_CONTENTS="댓글 내용을 입력해주세요.";
sps.CommentBox.Config.prototype.message.NOT_LOGIN="로그인을 하신 후 이용해 주시기 바랍니다.";
sps.CommentBox.Config.prototype.message.NEED_LOGIN="로그인이 필요한 기능입니다.";
sps.CommentBox.Config.prototype.message.EXCEED_MAX_LENGTH="{=max}자까지 입력할 수 있습니다.";
sps.CommentBox.Config.prototype.message.BLOCK_COPY="복사 기능은 사용하실 수 없습니다.";
sps.CommentBox.Config.prototype.message.BLOCK_PASTE="붙여넣기 기능은 사용하실 수 없습니다.";
sps.CommentBox.Config.prototype.message.REPORT_COMPLETE="신고 완료 처리 되었습니다.";
sps.CommentBox.Config.prototype.message.DELETE_CONFIRM="정말 삭제하시겠습니까?";
sps.CommentBox.Config.prototype.message.RECOMMEND_COMPLETE="공감했습니다.";
sps.CommentBox.Config.prototype.message.RECOMMEND_CANCEL="공감을 취소 했습니다.";
sps.CommentBox.Config.prototype.message.DISCOMMEND_COMPLETE="비공감했습니다.";
sps.CommentBox.Config.prototype.message.DISCOMMEND_CANCEL="비공감을 취소 했습니다.";
sps.CommentBox.Config.prototype.message.AUTHOR_RECOMMEND_COMPLETE="필자공감 했습니다.";
sps.CommentBox.Config.prototype.message.AUTHOR_DISCOMMEND_COMPLETE="필자공감이 취소되었습니다.";
sps.CommentBox.Config.prototype.message.ME2DAY_POSTED="정말 삭제하시겠습니까? \n\n이글은 미투데이에 동시 등록된 글입니다.\n미투데이의 댓글은 미투데이에 가서 삭제해주셔야 합니다.";
sps.CommentBox.Config.prototype.message.REQUIRE_SCORE="평점을 선택해야 댓글을 작성할 수 있습니다.";
sps.CommentBox.Config.prototype.message.CREATE_ERROR_PWORD_BLOCK="작성하신 내용에 금칙어가 포함되어 있습니다. [{=pwords}]";
sps.CommentBox.Config.prototype.message.CREATE_ERROR_PWORD_ABUSING="작성하신 내용에 사용이 제한된 문구가 포함되어 일시적으로 등록이 제한됩니다.";
sps.CommentBox.Config.prototype.message.DEFAULT_TEXT="";
sps.CommentBox.Config.NAME="sps.CommentBox.Config";
sps.CommentBox.Config.VERSION="1.0.0";
sps.config=new sps.CommentBox.Config();
document.domain="naver.com";
var sps;
if(typeof sps=="undefined"){sps={CommentBox:{},disableForm:function(oEvent){var event=commentJ.$Event(oEvent);
event.stopDefault();
return false
},core:{}}
}else{if(typeof sps.CommentBox=="undefined"){sps.CommentBox={}
}}if(typeof sps.disableForm=="undefined"){sps.disableForm=function(oEvent){var event=commentJ.$Event(oEvent);
event.stopDefault();
return false
}
}sps.CommentBox.Core=commentJ.$Class({name:"unknown",version:"unknown",message:{},$init:function(){this.name=sps.CommentBox.Core.NAME;
this.version=sps.CommentBox.Core.VERSION;
this.indexInstance=sps.CommentBox.Core.getInstance().length-1;
this.config=sps.CommentBox.Config.getInstance()[this.indexInstance]
},initialize:function(){this.initializeOnly();
this.list("page",1)
},initializeOnly:function(){this.saveInstanceInConfig();
this.config.option("initialized",true);
this.config.instance.util.getUrlList();
this.config.instance.util.getTicketConfig();
var elBody=commentJ.$Element(commentJ.$$.getSingle(this.config.element("body")));
if(this.config.option("useSpan")){elBody.addClass(this.config.css("bodySpan"))
}var jsonFormation={};
jsonFormation.count=this.config.instance.ui.makeCountArea();
jsonFormation.page=this.config.instance.ui.makePaginationArea();
jsonFormation.write=this.config.instance.ui.makeRootWriteBoxArea();
jsonFormation.list=this.config.instance.ui.makeListArea();
jsonFormation.extra1=this.config.instance.ui.makeExtraArea("extra1");
jsonFormation.extra2=this.config.instance.ui.makeExtraArea("extra2");
jsonFormation.extra3=this.config.instance.ui.makeExtraArea("extra3");
jsonFormation.extra4=this.config.instance.ui.makeExtraArea("extra4");
jsonFormation.extra5=this.config.instance.ui.makeExtraArea("extra5");
var formation=this.config.option("formation");
for(var i=0;
i<formation.length;
i++){var part=formation[i];
elBody.append(jsonFormation[part])
}if(typeof this.config.instance.layer=="object"){this.config.instance.layer.make()
}if(this.config.option("iframeId")){this.config.instance.util.initIframe()
}},list:function(type,no,async){var params=this.commonParam();
params.page_size=this.config.option("pageSize");
if(type=="page"&&typeof no=="number"){params.page_no=no
}if(type=="comment"&&typeof no=="number"){params.comment_no=no;
params.up_to_date_yn="Y"
}if(this.config.option("landingCommentNo")!=null){params.comment_no=this.config.option("landingCommentNo");
params.up_to_date_yn="Y";
this.config.option("landingCommentNo",null)
}if(type=="user"){if(typeof no=="number"){params.user_comment=no
}else{params.user_comment=1
}params.up_to_date_yn="Y"
}if(typeof this.config.option("viewCategoryId")!="undefined"){params.view_category_id=this.config.option("viewCategoryId")
}if(typeof this.config.option("currentSortOption")!="undefined"){params.sort=this.config.option("currentSortOption")
}if(this.config.option("useInnerSvcList")==true&&this.config.option("useInnerSvcShowReply")==false){params.depth=1
}var listAsync=false;
if(typeof async=="boolean"){listAsync=async
}else{if(typeof this.config.option("listAsync")=="boolean"){listAsync=this.config.option("listAsync")
}}this.config.instance.ajax.call({operation:"list",async:listAsync,onSuccess:commentJ.$Fn(this.config.instance.ui.list,this.config.instance.ui).bind(),param:params})
},commonParam:function(){var params={};
params.ticket=this.config.option("ticket");
params.object_id=this.config.option("objectId");
params._ts=(new Date().getTime());
if(typeof this.config.option("lkey")!="undefined"){params.lkey=this.config.option("lkey")
}return params
},saveInstanceInConfig:function(){this.config.instance.core=sps.CommentBox.Core.getInstance()[this.indexInstance];
this.config.instance.ajax=sps.CommentBox.Ajax.getInstance()[this.indexInstance];
this.config.instance.ui=sps.CommentBox.UI.getInstance()[this.indexInstance];
this.config.instance.layer=sps.CommentBox.Layer.getInstance()[this.indexInstance];
this.config.instance.writebox=sps.CommentBox.WriteBox.getInstance()[this.indexInstance];
this.config.instance.util=sps.CommentBox.Util.getInstance()[this.indexInstance];
if(typeof sps.me2day=="object"){this.config.instance.me2day=sps.CommentBox.Me2day.getInstance()[this.indexInstance]
}if(typeof sps.profile=="object"){this.config.instance.profile=sps.CommentBox.profile.getInstance()[this.indexInstance]
}if(typeof sps.score=="object"){this.config.instance.score=sps.CommentBox.score.getInstance()[this.indexInstance]
}if(typeof sps.personacon=="object"){this.config.instance.personacon=sps.CommentBox.personacon.getInstance()[this.indexInstance]
}}}).extend(commentJ.Component);
sps.CommentBox.Core.NAME="sps.CommentBox.Core";
sps.CommentBox.Core.VERSION="1.0.0";
sps.core=new sps.CommentBox.Core();
var sps;
if(typeof sps=="undefined"){sps={CommentBox:{},ajax:{}}
}else{if(typeof sps.CommentBox=="undefined"){sps.CommentBox={}
}}sps.CommentBox.Ajax=commentJ.$Class({name:"unknown",version:"unknown",message:{},defaultError:{},error:{create:{}},$init:function(){this.name=sps.CommentBox.Ajax.NAME;
this.version=sps.CommentBox.Ajax.VERSION;
this.option("handlers",{});
this.option("list","list_comment.nhn");
this.option("create","set_comment.nhn");
this.option("delete","delete_comment.nhn");
this.option("me2day","is_authenticated_me2day.nhn");
this.option("isReport","isreported_comment.nhn");
this.option("report","report_comment.nhn");
this.option("checkEnableSetComment","check_comment_settable.nhn");
this.option("profile","get_profile.nhn");
this.option("profileList","get_profile_list.nhn");
this.option("setProfileType","set_profile_type.nhn");
this.option("isLogin","is_logged_in.nhn");
this.option("vote","vote_comment.nhn");
this.option("authorRecommend","recommend_comment.nhn");
this.option("replyList","list_reply_comment.nhn");
this.option("snsAuthStatus","get_sns_auth_status.nhn");
this.option("ticketConfig","get_ticket_config.nhn");
this.option("urlList","get_url_list.nhn");
this.indexInstance=sps.CommentBox.Ajax.getInstance().length-1;
this.config=sps.CommentBox.Config.getInstance()[this.indexInstance]
},call:function(options){var handler=this.option("handlers");
delete handler[options.operation];
handler[options.operation]=options.onSuccess;
var url=this.config.option("serviceAddress")+this.option(options.operation);
var req=commentJ.$Ajax(url,{method:this.config.option("method")||"post",async:options.async?options.async:false,onload:commentJ.$Fn(this.onSuccess,this).bind(options.operation),onerror:commentJ.$Fn(this.onError,this).bind(options.errorMessage)});
req.request(options.param||{})
},onSuccess:function(type,result){var message=result.json();
if(this.errorHandler(message,this.error[type])==0){var fn=this.option("handlers")[type];
fn(message)
}},onError:function(message,result){if(message){alert(message)
}},callSync:function(operation,params){var url=this.config.option("serviceAddress")+this.option(operation);
var context={success:undefined,response:undefined};
var req=commentJ.$Ajax(url,{method:this.config.option("method")||"post",async:false,onload:commentJ.$Fn(this.onSuccessSync,this).bind(context),onerror:commentJ.$Fn(this.onErrorSync,this).bind(context)});
req.request(params);
if(context.success){var errorCode=this.errorHandler(context.response,this.error[operation]);
if(errorCode==0){return context.response
}}},onSuccessSync:function(context,response){context.success=true;
context.response=response.json()
},onErrorSync:function(context,response){context.success=false
},errorHandler:function(message,errorhandler){if(!message.error){return -1
}var error=message.error;
if(error.no&&error.no!="0"){if(error.no=="-1"){alert(this.config.message.UNAVAILABLE_OPERATION)
}else{if(errorhandler&&errorhandler[error.no]){var fnTemp=commentJ.$Fn(errorhandler[error.no],this).bind();
fnTemp(message)
}else{if(this.defaultError&&this.defaultError[error.no]){commentJ.$Fn(this.defaultError[error.no],this).bind(message)()
}else{alert(error.message)
}}}}return Number(error.no)
}}).extend(commentJ.Component);
sps.CommentBox.Ajax.prototype.error.create[409019]=function(message){var words=[];
var prohibit_words=message.error.arguments[0];
for(var i=0;
i<prohibit_words.length;
i++){words[i]=encodeURIComponent(prohibit_words[i].word)
}var pw_word=words.join(",");
var type="1";
if(prohibit_words[0].reason=="검색어뷰징/도배"){type="2"
}var params=new commentJ.$H({type:type,pw_word:pw_word}).toQueryString();
var url=this.config.option("pwBlockUrl")+"?"+params;
var popUp=this.config.instance.util.popUp(url,"abuseError",410,342);
if(!popUp){for(var i=0;
i<prohibit_words.length;
i++){words[i]=prohibit_words[i].word
}pw_words=words.join(",");
if(type=="1"){alert(commentJ.$Template(this.config.message.CREATE_ERROR_PWORD_BLOCK).process({pwords:pw_words}))
}else{alert(commentJ.$Template(this.config.message.CREATE_ERROR_PWORD_ABUSING).process({pwords:pw_words}))
}}};
sps.CommentBox.Ajax.prototype.error.create[409111]=function(message){alert(message.error.message);
this.config.instance.writebox.onCreate(message)
};
sps.CommentBox.Ajax.prototype.error.create[409112]=function(message){alert(message.error.message);
this.config.instance.writebox.onCreate(message)
};
sps.CommentBox.Ajax.prototype.error.create[409113]=function(message){alert(message.error.message);
this.config.instance.writebox.onCreate(message)
};
sps.CommentBox.Ajax.prototype.error.create[409114]=function(message){alert(message.error.message);
this.config.instance.writebox.onCreate(message)
};
sps.CommentBox.Ajax.prototype.defaultError[403101]=function(message){alert(message.error.message);
this.config.option("isLogin",false);
this.config.instance.ui.resetPage()
};
sps.CommentBox.Ajax.NAME="sps.CommentBox.Ajax";
sps.CommentBox.Ajax.VERSION="1.0";
sps.ajax=new sps.CommentBox.Ajax();
var sps;
if(typeof sps=="undefined"){sps={CommentBox:{}}
}else{if(typeof sps.CommentBox=="undefined"){sps.CommentBox={}
}}sps.CommentBox.Comment=commentJ.$Class({name:"unknown",version:"unknown",message:{},$init:function(htOptions){this.name=sps.CommentBox.Comment.NAME;
this.version=sps.CommentBox.Comment.VERSION;
this.indexInstance=htOptions.indexInstance;
this.config=sps.CommentBox.Config.getInstance()[this.indexInstance];
var values=this.config.option("comment");
var convention=this.config.option("convention");
var booleans=this.config.option("booleans");
for(var i=0;
i<values.length;
i++){var key=convention[values[i]];
if(typeof key=="undefined"){key=values[i]
}var value=htOptions[key];
if(booleans[values[i]]){value=value=="Y"
}this.option(values[i],value)
}this.option("config",this.config)
},deleteCommand:function(){var deleteConfirmMessage=this.config.message.DELETE_CONFIRM;
if(this.option("isMe2DayPosted")=="Y"){deleteConfirmMessage=this.config.message.ME2DAY_POSTED
}if(!confirm(deleteConfirmMessage)){return false
}var params={};
params.ticket=this.config.option("ticket");
params.object_id=this.config.option("objectId");
params.comment_no=this.option("commentNo");
params.page_no=this.config.instance.ui.option("currentPageNo");
params.page_size=this.config.option("pageSize");
if(typeof this.config.option("currentSortOption")!="undefined"){params.sort=this.config.option("currentSortOption")
}if(typeof this.config.option("viewCategoryId")!="undefined"){params.view_category_id=this.config.option("viewCategoryId")
}this.config.instance.ajax.call({operation:"delete",onSuccess:commentJ.$Fn(this.config.instance.ui.list,this.config.instance.ui).bind(),param:params})
},reportCommand:function(){var params={};
params.ticket=this.config.option("ticket");
params.object_id=this.config.option("objectId");
params.comment_no=this.option("commentNo");
var response=this.config.instance.ajax.callSync("isReport",params);
if(response){if(response.reported_yn===0){var url=this.config.option("pwReportUrl");
params=commentJ.$H(params);
if(params.length()>0){url+="?"+params.toQueryString()
}this.config.instance.util.popUp(url,"report",531,533)
}else{alert(this.config.message.ALREADY_REPORT)
}}},replyCommand:function(e){var elBody=commentJ.$Element(commentJ.$$.getSingle(this.config.element("body")));
var objList=elBody.query(this.config.element("list")+" ul");
var elList=commentJ.$Element(objList);
var objReplyPosition=elList.query(".comment_no_"+this.option("commentNo")+" ul");
var elReplyPosition=commentJ.$Element(objReplyPosition);
var elWriteBox=this.config.instance.writebox.createReplyWrite(elReplyPosition,this.option("commentNo"),null);
var objReplyCommand=elList.query(".comment_no_"+this.option("commentNo")+" .reply");
var elReplyCommand=commentJ.$Element(objReplyCommand);
var sReplyCancelCommand=this.config.template("replyCancelCommand").process(this.option());
var elReplyCancelCommand=commentJ.$Element(sReplyCancelCommand);
elReplyCancelCommand.addClass("reply_cancel");
commentJ.$Fn(function(oEvent){var event=commentJ.$Event(oEvent);
elWriteBox.leave();
this.replyCancelCommand(oEvent);
event.stopDefault();
return false
},this).attach(elReplyCancelCommand,"click");
elReplyCommand.before(elReplyCancelCommand);
elReplyCommand.leave();
commentJ.$Element(elReplyCancelCommand.query("a")).$value().focus()
},replyCancelCommand:function(e){var elBody=commentJ.$Element(commentJ.$$.getSingle(this.config.element("body")));
var objList=elBody.query(this.config.element("list")+" ul");
var elList=commentJ.$Element(objList);
var sReplyCancelCommand=elList.query(".comment_no_"+this.option("commentNo")+" .reply_cancel");
var elReplyCancelCommand=commentJ.$Element(sReplyCancelCommand);
var objReplyCommand=this.config.template("replyCommand").process(this.option());
var elReplyCommand=commentJ.$Element(objReplyCommand);
elReplyCommand.addClass("reply");
commentJ.$Fn(function(oEvent){var event=commentJ.$Event(oEvent);
this.replyCommand(oEvent);
event.stopDefault();
return false
},this).attach(elReplyCommand,"click");
elReplyCancelCommand.before(elReplyCommand);
elReplyCancelCommand.leave();
commentJ.$Element(elReplyCommand.query("a")).$value().focus()
},recommendCommand:function(){this.vote("recommend")
},discommendCommand:function(){this.vote("discommend")
},vote:function(operation){var params={};
params.ticket=this.config.option("ticket");
params.object_id=this.config.option("objectId");
params.comment_no=this.option("commentNo");
params.use_recommend_cancelable_api=true;
params.useRecommendResult=this.config.option("useRecommendResult");
if(operation=="recommend"){params.recommend_up_yn="Y"
}else{params.recommend_up_yn="N"
}this.config.instance.ajax.call({operation:"vote",onSuccess:commentJ.$Fn(this.processVote,this).bind(operation),param:params})
},processVote:function(operation,result){var isCancel=(result.recommend_new_yn=="N")?true:false;
if(isCancel){this._voteCancelSuccess(operation,result.comment_no)
}else{this._voteSuccess(operation,result.comment_no)
}},_voteSuccess:function(operation,commentNo){if(operation=="recommend"){alert(this.config.message.RECOMMEND_COMPLETE);
sClassName=this.config.element("recommend")
}else{alert(this.config.message.DISCOMMEND_COMPLETE);
sClassName=this.config.element("discommend")
}var el=commentJ.$$.getSingle("li.comment_no_"+commentNo+" span"+sClassName+" > span");
var elBest=commentJ.$$.getSingle("li.recommend_comment_no_"+commentNo+" span"+sClassName+" > span");
this._updateVoteCount(el,1);
this._updateVoteCount(elBest,1)
},_voteCancelSuccess:function(operation,commentNo){var sClassName;
if(operation=="recommend"){alert(this.config.message.RECOMMEND_CANCEL);
sClassName=this.config.element("recommend")
}else{alert(this.config.message.DISCOMMEND_CANCEL);
sClassName=this.config.element("discommend")
}var el=commentJ.$$.getSingle("li.comment_no_"+commentNo+" span"+sClassName+" > span");
var elBest=commentJ.$$.getSingle("li.recommend_comment_no_"+commentNo+" span"+sClassName+" > span");
this._updateVoteCount(el,-1);
this._updateVoteCount(elBest,-1)
},_updateVoteCount:function(el,countOffset){if(el!=null){var wel=commentJ.$Element(el);
var nCount=parseInt(wel.text())+countOffset;
wel.addClass("on").text(nCount)
}},authorCommand:function(){this.authorRecommend("recommend")
},authorCancelCommand:function(){this.authorRecommend("discommend")
},authorRecommend:function(operation){var params={};
params.ticket=this.config.option("ticket");
params.object_id=this.config.option("objectId");
params.comment_no=this.option("commentNo");
if(operation=="recommend"){params.recommend_yn="Y"
}else{params.recommend_yn="N"
}this.config.instance.ajax.call({operation:"authorRecommend",onSuccess:commentJ.$Fn(this.processAuthorRecommend,this).bind(operation),param:params})
},processAuthorRecommend:function(operation,result){this.config.instance.core.list("page",this.config.instance.ui.option("currentPageNo"));
if(operation=="recommend"){alert(this.config.message.AUTHOR_RECOMMEND_COMPLETE)
}else{alert(this.config.message.AUTHOR_DISCOMMEND_COMPLETE)
}},_command:function(){var commands=this.config.option("commands");
var maxDepth=this.config.option("maxDepth");
var replyLevel=this.option("replyLevel");
var elRoot=commentJ.$Element("<div></div>");
var expressedCommendCount=0;
var expressedCommend="";
for(var i=0;
i<commands.length;
i++){var operation=commands[i];
if(this.config.option("isDeleted")){continue
}if(this.option("status")>=7&&this.option("status")<=9){if(!(operation=="delete")){continue
}}if(this.config.option("useReplyArea")&&replyLevel>this.config.option("maxReplyAreaDepth")){var elAllowCommandsAtReplyArea=commentJ.$A(this.config.option("allowCommandsAtReplyArea"));
if(!elAllowCommandsAtReplyArea.has(operation)){continue
}}if(operation=="reply"){if(replyLevel>=maxDepth){continue
}if(this.option("isRecommendArea")){continue
}}if(operation=="author"){if(this.option("isAuthorRecommend")){operation="authorCancel"
}}var text=this.config.template(operation+"Command").process(this.option());
if(text==""){continue
}var elCommand=commentJ.$Element(text);
if(expressedCommendCount==0){elCommand.addClass(this.config.css("firstCommand"))
}else{if(expressedCommendCount>0){var elNobarInCommandGroup=commentJ.$A(this.config.option("nobarInCommandGroup"));
if(elNobarInCommandGroup.has(expressedCommend)){elCommand.removeClass(this.config.css("noBarOnCommend"))
}}}if((operation=="recommend"&&this.option("upCount")>0)||(operation=="discommend"&&this.option("downCount")>0)){var objRecommendCount=elCommand.query(this.config.element("recommendCount"));
var elRecommendCount=commentJ.$Element(objRecommendCount);
elRecommendCount.addClass(this.config.css("recommendCountOn"));
if(operation=="recommend"){elRecommendCount.text(this.option("upCount"))
}else{if(operation=="discommend"){elRecommendCount.text(this.option("downCount"))
}}}elCommand.addClass(operation);
var handler=this[operation+"Command"];
if(typeof handler=="function"){var oFn=commentJ.$Fn(function(op,oEvent){var event=commentJ.$Event(oEvent);
var objCurrent=event.element;
if(this.config.instance.util.redirectLogin(oEvent)){this[op+"Command"](oEvent)
}event.stopDefault();
return false
},this).bind(operation);
commentJ.$Fn(oFn).attach(elCommand,"click")
}if(elCommand!=null){elRoot.append(elCommand);
expressedCommend=operation;
expressedCommendCount++
}}return elRoot.child()
},build:function(){var tplComment="";
var isStopCommentMaking=false;
if(this.option("isDeleted")){tplComment=this.config.template("deleteComment");
isStopCommentMaking=true
}else{if(this.option("status")>=7&&this.option("status")<=9){tplComment=this.config.template("blockComment");
isStopCommentMaking=true
}else{tplComment=this.config.template("comment")
}}var sComment=tplComment.process(this.option());
var elComment=commentJ.$Element(sComment);
var objCommentText=elComment.query(this.config.element("commentText"));
var elCommentText=commentJ.$Element(objCommentText);
if(this.config.option("browser")=="safari"){elCommentText.css("font-family",this.config.option("replaceErrorFontFamily"))
}var elCommands=elComment.query(this.config.element("commands"));
var commands=this._command();
if(elCommands!=null){elCommands=commentJ.$Element(elCommands);
for(var i=0;
i<commands.length;
i++){elCommands.append(commands[i])
}}if(isStopCommentMaking){return elComment
}if(this.config.option("useScore")){elComment=this.config.instance.score.addScoreToComment(elComment,this.option())
}else{if(this.config.option("useProfile")){elComment=this.config.instance.profile.addProfileToComment(elComment,this.option())
}}if(this.option("isUserRecommend")||this.option("isAuthorRecommend")){elComment=this.config.instance.ui.addRecommendTag(elComment,this.option())
}if(this.option("isRecommendArea")){elComment=this.config.instance.ui.deckRecommendArea(elComment,this.option())
}if(this.config.option("useMobile")&&this.option("isMobile")){elComment=this.config.instance.ui.addMobileIcon(elComment,this.option())
}return elComment
}}).extend(commentJ.Component);
sps.CommentBox.Comment.NAME="sps.CommentBox.Comment";
sps.CommentBox.Comment.VERSION="1.0.0";
var sps;
if(typeof sps=="undefined"){sps={CommentBox:{}}
}else{if(typeof sps.CommentBox=="undefined"){sps.CommentBox={}
}}sps.CommentBox.Layer=commentJ.$Class({name:"unknwon",version:"unknown",$init:function(){this.name=sps.CommentBox.Layer.NAME;
this.version=sps.CommentBox.Layer.VERSION;
this.indexInstance=sps.CommentBox.Layer.getInstance().length-1;
this.config=sps.CommentBox.Config.getInstance()[this.indexInstance]
},make:function(){var elBody=commentJ.$Element(commentJ.$$.getSingle(this.config.element("body")));
this.create();
var elProfileLayer=commentJ.$Element(elBody.query(".profileLayer"));
var elBestInfoLayer=commentJ.$Element(elBody.query(".bestInfoLayer"));
var elSortOldInfoLayer=commentJ.$Element(elBody.query(".sortOldInfoLayer"));
commentJ.$Fn(function(e){if(elProfileLayer!=null&&elProfileLayer.visible()==true){this.hideLayer(1)
}if((elBestInfoLayer!=null&&elBestInfoLayer.visible()==true)||(elSortOldInfoLayer!=null&&elSortOldInfoLayer.visible()==true)){this.hideLayer(1)
}},this).attach(elBody,"click")
},create:function(){var elBody=commentJ.$Element(commentJ.$$.getSingle(this.config.element("body")));
var arrLayers=this.config.option("layers");
for(var i=0;
i<arrLayers.length;
i++){var sLayer=arrLayers[i];
var text=this.config.template(sLayer+"Layer").process();
if(text==""){continue
}var elLayer=commentJ.$Element(text);
elLayer.addClass(sLayer+"Layer");
elLayer.hide();
elLayer=this.operate(elLayer);
var handler=this[sLayer+"Layer"];
if(typeof handler=="function"){var oFn=commentJ.$Fn(handler,this).bind();
elLayer=oFn(elLayer)
}elBody.append(elLayer)
}},operate:function(elLayer){var elButton=commentJ.$Element(elLayer.query(this.config.element("closeButton")));
if(elButton==null){return elLayer
}commentJ.$Fn(function(e){var woEvent=commentJ.$Event(e);
woEvent.stop(commentJ.$Event.CANCEL_BUBBLE)
}).attach(elLayer,"click");
commentJ.$Fn(function(){this.hideLayer(elLayer.attr("tier"))
},this).attach(elButton,"click");
commentJ.$Fn(sps.disableForm).attach(elButton,"click");
commentJ.$Fn(function(){elButton.addClass(this.config.css("closeButtonOver"))
},this).attach(elButton,"mouseenter");
commentJ.$Fn(function(){elButton.removeClass(this.config.css("closeButtonOver"))
},this).attach(elButton,"mouseleave");
return elLayer
},hideLayer:function(sLayerTier){var elBody=commentJ.$Element(commentJ.$$.getSingle(this.config.element("body")));
var elLayerList=commentJ.$ElementList(elBody.queryAll(this.config.element("layer")));
for(var i=0;
i<elLayerList.length();
i++){var elTempLayer=elLayerList.get(i);
var sTempLayerTier=elTempLayer.attr("tier");
if(sTempLayerTier>=sLayerTier){elTempLayer.hide()
}}if(sLayerTier=="1"&&this.config.option("lastEvent")!=null){this.config.option("lastEvent").focus()
}},getLayer:function(layerName){var elBody=commentJ.$Element(commentJ.$$.getSingle(this.config.element("body")));
var elLayer=commentJ.$Element(elBody.query("."+layerName+"Layer"));
if(elLayer==null){return null
}this.hideLayer(elLayer.attr("tier"));
return elLayer
},adjustPosition:function(elSource,elLayer,sAnchorHorizon,sAnchorVertical){if(elLayer==null){return elLayer
}var iAnchorHorizon=0;
var iAnchorVertical=0;
elLayer.show();
if(sAnchorHorizon=="left"){iAnchorHorizon=elSource.offset().left
}else{if(sAnchorHorizon=="right"){iAnchorHorizon=elSource.offset().left-elLayer.width()+elSource.width()
}}if(sAnchorVertical=="top"){iAnchorVertical=elSource.offset().top
}else{if(sAnchorVertical=="bottom"){iAnchorVertical=elSource.offset().top-elLayer.height()+elSource.height()
}}elLayer.offset(iAnchorVertical,iAnchorHorizon);
return elLayer
},me2guideLayer:function(elLayer){return elLayer
},profileLayer:function(elLayer){if(this.config.option("isLogin")==true&&this.config.option("useProfile")&&typeof this.config.instance.profile=="object"){elLayer=this.config.instance.profile.makeProfileLayer(elLayer)
}return elLayer
},personaconLayer:function(elLayer){if(this.config.option("usePersonacon")&&typeof this.config.instance.personacon=="object"){elLayer=this.config.instance.personacon.makePersonaconLayer(elLayer)
}return elLayer
},resetLayer:function(){var elBody=commentJ.$Element(commentJ.$$.getSingle(this.config.element("body")));
var elLayerList=commentJ.$ElementList(elBody.queryAll(this.config.element("layer")));
elLayerList.leave();
this.make()
}}).extend(commentJ.Component);
sps.CommentBox.Layer.NAME="sps.CommentBox.Layer";
sps.CommentBox.Layer.VERSION="1.0.0";
sps.layer=new sps.CommentBox.Layer();
var sps;
if(typeof sps=="undefined"){sps={CommentBox:{}}
}else{if(typeof sps.CommentBox=="undefined"){sps.CommentBox={}
}}sps.CommentBox.WriteBox=commentJ.$Class({name:"unknwon",version:"unknown",message:{},$init:function(htOptions){this.name=sps.CommentBox.WriteBox.NAME;
this.version=sps.CommentBox.WriteBox.VERSION;
this.option("isKeyDownLoop",false);
this.option("isTrackingTextCount",false);
this.option("previousText","");
this.indexInstance=sps.CommentBox.WriteBox.getInstance().length-1;
this.config=sps.CommentBox.Config.getInstance()[this.indexInstance]
},create:function(obj){if(!this.config.instance.util.redirectLogin(obj)){return false
}var elForm=commentJ.$Element(obj.element.form);
var welParentCommentNo=commentJ.$Element(elForm.query("input.parentCommentNo"));
var welBestYn=commentJ.$Element(elForm.query("input.bestYn"));
var sBestYn="";
if(welBestYn!=null){sBestYn=welBestYn.$value().value
}var sParentCommentNo=welParentCommentNo==null?this.config.option("parentCommentNo"):welParentCommentNo.$value().value;
var welTextarea=commentJ.$Element(elForm.query(this.config.element("textarea")));
var sText=this.config.instance.util.cancelLineBreaking(welTextarea.$value().value);
sText=commentJ.$S(sText).trim().$value();
if(sText.length==0||this.config.instance.util.compareTextWithoutRetuneChar(sText,this.config.message.DEFAULT_TEXT)){alert(this.config.message.NO_CONTENTS);
setTimeout(function(){commentJ.$$.getSingle(".cbox_txt_focus_area").focus()
},0);
return false
}if(typeof sParentCommentNo=="undefined"){sParentCommentNo=0
}var validationResult=this.fireEvent("validate",params);
if(!validationResult){return false
}var params={};
params.ticket=this.config.option("ticket");
params.object_id=this.config.option("objectId");
params.page_size=this.config.option("pageSize");
params.object_url=this.config.option("objectUrl");
params.contents=sText;
params.parent_comment_no=sParentCommentNo;
if(typeof this.config.option("lkey")!="undefined"){params.lkey=this.config.option("lkey")
}if(this.config.option("useCategory")){params.category_id=this.config.option("categoryId");
if(typeof this.config.option("viewCategoryId")!="undefined"){params.view_category_id=this.config.option("viewCategoryId")
}}if(this.config.option("useSocialComment")){var welCheckboxArea=commentJ.$Element(elForm.query(this.config.element("snsCheckboxArea")));
if(welCheckboxArea){if(welCheckboxArea.query("input._me2day")){params.add_post_me2day=welCheckboxArea.query("input._me2day")._element.checked?"Y":"N"
}if(welCheckboxArea.query("input._facebook")){params.add_post_facebook=welCheckboxArea.query("input._facebook")._element.checked?"Y":"N"
}if(welCheckboxArea.query("input._twitter")){params.add_post_twitter=welCheckboxArea.query("input._twitter")._element.checked?"Y":"N"
}}}if(!this.config.option("useSocialComment")&&this.config.option("useMe2Day")){var objCheckbox=commentJ.$Element(elForm.query(this.config.element("me2dayCheck")));
if(objCheckbox!=null){objCheckbox=objCheckbox.$value();
if(objCheckbox.checked){params.post_to_me2day="Y"
}}}if(this.config.option("useScore")){var objSelect=commentJ.$Element(elForm.query("select"));
if(objSelect!=null){objSelect=objSelect.$value();
if(isNaN(objSelect.value)){alert(this.config.message.REQUIRE_SCORE);
return false
}params.object_score=objSelect.value
}}if(this.config.option("useReplyArea")){params.reply_page_size=this.config.option("replyPageSize")
}if(this.config.option("usePersonacon")){var objPersonacon=commentJ.$Element(elForm.query(this.config.element("personaconThumbImg")));
if(objPersonacon){objPersonacon=objPersonacon.$value();
params.personacon=objPersonacon.src
}}if(!this.config.fireEvent("beforeCreate",{text:params.contents,params:params})){return
}this.config.instance.ajax.call({operation:"create",async:false,onSuccess:commentJ.$Fn((sBestYn=="Y"?this.onCreateBest:this.onCreate),this).bind(),errorMessage:this.config.message.UNAVAILABLE_OPERATION,param:params})
},onCreate:function(result){this.resetRootWriteBox();
this.config.instance.layer.resetLayer();
this.config.option("currentSortOption","newest");
this.config.instance.ui.list(result);
this.config.fireEvent("afterCreate",{text:result})
},onCreateBest:function(result){this.resetRootWriteBox();
this.config.instance.layer.resetLayer();
this.config.instance.score.replyListBest(0,null);
this.config.fireEvent("afterCreate",{text:result})
},createWriteBox:function(elWriteBoxArea,isRoot){var sWriteBox=this.config.template("writeBox").process({isLogin:this.config.option("isLogin")});
var elWriteBox=commentJ.$Element(sWriteBox);
if(!isRoot){var sSubNode=this.config.template("subNode").process();
elWriteBox.prepend(sSubNode)
}if(this.config.option("useSpan")){var objUserArea=elWriteBox.query(this.config.element("userArea"));
var elUserArea=commentJ.$Element(objUserArea);
var sSpanWriteBox=this.config.template("spanWriteBox").process();
var elSpanWriteBox=commentJ.$Element(sSpanWriteBox);
elUserArea.empty();
elUserArea.append(elSpanWriteBox)
}elWriteBox.addClass(this.config.css("basicWriteBoxType"));
if(this.config.option("useProfile")&&typeof this.config.instance.profile=="object"){elWriteBox=this.config.instance.profile.makeProfileWriteBox(elWriteBox,isRoot)
}if(this.config.option("useScore")&&typeof this.config.instance.score=="object"){elWriteBox=this.config.instance.score.addSelectboxInWritebox(elWriteBox)
}if(this.config.option("usePersonacon")&&typeof this.config.instance.personacon=="object"){elWriteBox=this.config.instance.personacon.makePersonaconWriteBox(elWriteBox,isRoot)
}var objTextBox=elWriteBox.query(this.config.element("textarea"));
var elTextBox=commentJ.$Element(objTextBox);
this.addActionToTextArea(elTextBox);
if(this.config.option("browser")=="safari"){elTextBox.css("font-family",this.config.option("replaceErrorFontFamily"))
}elTextBox.css("background",this.config.option("offTextboxBackground"));
elTextBox.css("color",this.config.option("offTextboxFontColor"));
elTextBox.text(this.config.message.DEFAULT_TEXT);
elWriteBox=this.createDesc(elWriteBox,isRoot);
elWriteBoxArea.append(elWriteBox);
var objWriteButton=elWriteBoxArea.query(this.config.element("writeButton"));
var elWriteButton=commentJ.$Element(objWriteButton);
if(!isRoot&&this.config.option("useSpareButtonInReplyWriteBox")){var elParentWriteButton=elWriteButton.parent();
var objSpareWriteButton=this.config.template("spareWriteButton").process();
elWriteButton.leave();
elWriteButton=commentJ.$Element(objSpareWriteButton);
elParentWriteButton.append(elWriteButton)
}commentJ.$Fn(this.create,this).attach(elWriteButton,"click");
var objWriteForm=commentJ.$Element(elWriteBoxArea.query("form"));
if(objWriteForm!=null){objWriteForm=objWriteForm.$value()
}commentJ.$Fn(sps.disableForm).attach(objWriteForm,"submit");
return elWriteBoxArea
},addActionToTextArea:function(elTextBox){commentJ.$Fn(this.onKeyDownWriteArea,this).attach(elTextBox,"keydown");
commentJ.$Fn(this.onFocusWriteArea,this).attach(elTextBox,"focus");
commentJ.$Fn(this.onMouseDownWriteArea,this).attach(elTextBox,"mousedown");
commentJ.$Fn(this.onBlurWriteArea,this).attach(elTextBox,"blur");
commentJ.$Fn(this.blockContextAction,this).attach(elTextBox,"paste");
commentJ.$Fn(this.blockContextAction,this).attach(elTextBox,"copy")
},onKeyDownWriteArea:function(oEvent){if(!this.config.option("isLogin")){return false
}this.option("isKeyDownLoop",true);
this.detectOverMaxLength(oEvent);
this.blockCopyAndPasteKey(oEvent)
},onMouseDownWriteArea:function(oEvent){if(!this.config.option("isLogin")){return false
}},onFocusWriteArea:function(oEvent){if(this.config.option("isLogin")){this.defaultText(oEvent)
}else{this.config.instance.util.redirectLogin(oEvent)
}},onBlurWriteArea:function(oEvent){if(!this.config.option("isLogin")){}else{this.defaultText(oEvent)
}this.option("isKeyDownLoop",false)
},defaultText:function(oEvent){var objTextarea=oEvent.element;
var elTextarea=commentJ.$Element(objTextarea);
var text=this.config.instance.util.cancelLineBreaking(elTextarea.text());
switch(oEvent.type){case"focus":if(this.config.instance.util.compareTextWithoutRetuneChar(text,this.config.message.DEFAULT_TEXT)){elTextarea.css("background",this.config.option("onTextboxBackground"));
elTextarea.css("color",this.config.option("onTextboxFontColor"));
elTextarea.text("")
}break;
case"blur":if(commentJ.$S(text).trim().$value()==""){elTextarea.css("background",this.config.option("offTextboxBackground"));
elTextarea.css("color",this.config.option("offTextboxFontColor"));
elTextarea.text(this.config.message.DEFAULT_TEXT)
}break
}},blockCopyAndPasteKey:function(oEvent){if(!this.config.option("useBlockCopyAndPaste")){return
}var woEvent=commentJ.$Event(oEvent);
var KEYCODE={COPY:67,PASTE:86};
if(!woEvent||!woEvent.key||!(key=woEvent.key())||!key.ctrl){return
}if(KEYCODE.COPY==key.keyCode){woEvent.stop(commentJ.$Event.CANCEL_ALL);
alert(this.config.message.BLOCK_COPY)
}if(KEYCODE.PASTE==key.keyCode){woEvent.stop(commentJ.$Event.CANCEL_ALL);
alert(this.config.message.BLOCK_PASTE)
}},blockContextAction:function(oEvent){if(!this.config.option("useBlockCopyAndPaste")){return
}var woEvent=commentJ.$Event(oEvent);
if(!woEvent||!woEvent.stop){return
}woEvent.stop(commentJ.$Event.CANCEL_ALL);
if(woEvent.type=="copy"){alert(this.config.message.BLOCK_COPY)
}else{if(woEvent.type=="paste"){alert(this.config.message.BLOCK_PASTE)
}}},detectOverMaxLength:function(oEvent){if(!this.option("isKeyDownLoop")){return false
}var woEvent=commentJ.$Event(oEvent);
var objTextarea=woEvent.element;
var elTextarea=commentJ.$Element(objTextarea);
var text=this.config.instance.util.cancelLineBreaking(elTextarea.text());
var result=this.config.instance.util.validation(text,1,this.config.option("maximumCommentLength"),false,false,this.config.message.EXCEED_MAX_LENGTH);
if(!result){elTextarea.text(this.option("previousText"))
}else{this.option("previousText",elTextarea.text());
if(this.option("isTrackingTextCount")){var elForm=commentJ.$Element(woEvent.element.form);
var objPresentTextLength=elForm.query(".cbox_present_text_length");
if(objPresentTextLength!=null){var elPresentTextLength=commentJ.$Element(objPresentTextLength);
elPresentTextLength.text(text.length)
}}}setTimeout(commentJ.$Fn(this.detectOverMaxLength,this).bind(oEvent),100)
},createSubNode:function(){var elLi=commentJ.$Element("<li>");
elLi.addClass(this.config.css("thumbOff"));
return elLi
},createDesc:function(elWriteBox,isRoot){var sDescs=this.config.element("descs");
if(typeof sDescs=="undefined"){return elWriteBox
}var elDescs=commentJ.$Element(elWriteBox.query(sDescs));
if(!isRoot&&this.config.option("isDescInOnlyRoot")){elDescs.leave();
return elWriteBox
}var arrDescs=this.config.option("descs");
for(var i=0;
i<arrDescs.length;
i++){var sDesc=arrDescs[i];
var htSocialComment={};
if(sDesc=="socialComment"){if(!this.config.option("useSocialComment")){continue
}htSocialComment=this.config.instance.util.getSnsAuthStatus();
var htSocialConfig=this.config.option("social");
this.config.option("useSocialComment",htSocialConfig.active);
if(htSocialConfig.active==false){continue
}else{if(isRoot==false&&htSocialConfig.reply_active==false){continue
}}htSocialComment.level=isRoot?1:2
}var text=this.config.template(sDesc+"Desc").process(htSocialComment);
if(text==""){continue
}var elDesc=commentJ.$Element(text);
var handler=this[sDesc+"Desc"];
if(typeof handler=="function"){var oFn=commentJ.$Fn(handler,this).bind();
elDesc=oFn(elDesc)
}elDescs.append(elDesc)
}if(this.config.option("isLogin")){elDescs=this.config.instance.me2day.addMe2DayInDesc(elDescs)
}if(elDescs.child().length==0){elDescs.leave()
}return elWriteBox
},policyDesc:function(elDesc){var objPolicy=elDesc.query("a");
var elPolicy=commentJ.$Element(objPolicy);
commentJ.$Fn(function(){}).attach(elPolicy,"click");
commentJ.$Fn(sps.disableForm).attach(elPolicy,"click");
return elDesc
},socialCommentDesc:function(welDesc){var aSnsCheckbox=welDesc.queryAll("input");
commentJ.$Fn(function(oCustomEvent){if(!this.config.option("isLogin")){this.config.instance.util.redirectLogin(oCustomEvent);
oCustomEvent.stop();
return
}var wel=commentJ.$Element(oCustomEvent.element);
if(wel.tag.toLowerCase()=="input"){wel=commentJ.$Element(wel.next())
}if(wel.hasClass("off")){var sSnsName=wel.attr("for").match(/(\w+)_\d+/)[1];
if(sSnsName=="me2day"){oCustomEvent.stopDefault();
return
}var sSvcUrlTpl=this.config.option("urlList")["social"]["afterSocialAuth"];
var sSvcUrl=sSvcUrlTpl.replace(/{SOCIAL_PROVIDER}/,sSnsName);
var whtParams=commentJ.$H({servicekey:"COMMON_COMMENT",type:sSnsName,viewtype:1,svcurl:sSvcUrl});
var sPopupUrl=this.config.option("socialAuthUrl")+whtParams.toQueryString();
this.config.instance.util.popUp(sPopupUrl,"socialComment",400,350);
oCustomEvent.stopDefault()
}},this).attach(aSnsCheckbox,"click");
commentJ.$Fn(function(oCustomEvent){oCustomEvent.element.href=this.config.option("nidManageSocialAuthUrl");
oCustomEvent.element.target="_blank"
},this).attach(welDesc.query("a.set"),"click");
this.config.attach("afterSocialAuth",commentJ.$Fn(this._changeSnsCheckBoxIcon,this).bind());
return welDesc
},_changeSnsCheckBoxIcon:function(oOption){var sSnsName=oOption.sns;
var elCheckbox=commentJ.$$.getSingle(".cbox_sns > input._"+sSnsName);
var elLabel=commentJ.$Element(elCheckbox).next();
elCheckbox.checked=true;
commentJ.$Element(elLabel).removeClass("off")
},textCountDesc:function(elDesc){this.option("isTrackingTextCount",true);
var objTotalTextLength=elDesc.query(".cbox_total_text_length");
var elTotalTextLength=commentJ.$Element(objTotalTextLength);
elTotalTextLength.text(this.config.option("maximumCommentLength"));
return elDesc
},resetRootWriteBox:function(){var elBody=commentJ.$Element(commentJ.$$.getSingle(this.config.element("body")));
var objRootSelecter=elBody.query(this.config.element("writeboxRoot"));
var elRootSelecter=commentJ.$Element(objRootSelecter);
elRootSelecter.empty();
this.createWriteBox(elRootSelecter,true);
return elRootSelecter
},createReplyWrite:function(elParent,parentCommentNo,bestYn){var elLi=this.createSubNode();
elLi.addClass(this.config.css("thumbOff"));
var elWriteBox=this.createWriteBox(elLi,false);
if(this.config.option("isReplyWriteBoxPositionOnBottom")){elParent.append(elWriteBox)
}else{elParent.prepend(elWriteBox)
}if(this.config.option("useProfile")&&typeof this.config.instance.profile=="object"){this.config.instance.profile.adjustZindex()
}if(this.config.option("usePersonacon")&&typeof this.config.instance.personacon=="object"){this.config.instance.personacon.adjustZindex()
}var elWriteForm=commentJ.$Element(elWriteBox.query("form"));
var elParentCommentNo=commentJ.$Element("<input>");
elParentCommentNo.attr("type","hidden");
elParentCommentNo.addClass("parentCommentNo");
elParentCommentNo.text(parentCommentNo);
elWriteForm.append(elParentCommentNo);
if(!bestYn){bestYn=""
}var elBestYn=commentJ.$Element("<input>");
elBestYn.attr("type","hidden");
elBestYn.addClass("bestYn");
elBestYn.text(bestYn);
elWriteForm.append(elBestYn);
return elWriteBox
}}).extend(commentJ.Component);
sps.CommentBox.WriteBox.NAME="sps.CommentBox.WriteBox";
sps.CommentBox.WriteBox.VERSION="1.0.0";
sps.writebox=new sps.CommentBox.WriteBox();
var sps;
if(typeof sps=="undefined"){sps={CommentBox:{}}
}else{if(typeof sps.CommentBox=="undefined"){sps.CommentBox={}
}}sps.CommentBox.Util=commentJ.$Class({name:"unknwon",version:"unknown",$init:function(){this.name=sps.CommentBox.Util.NAME;
this.version=sps.CommentBox.Util.VERSION;
this.indexInstance=sps.CommentBox.Util.getInstance().length-1;
this.config=sps.CommentBox.Config.getInstance()[this.indexInstance]
},popUp:function(url,name,width,height){var popup=window.open(url,name,"width="+width+",height="+height+",status=no,left=0,top=0");
if(popup){popup.focus();
return popup
}},parseQueryString:function(rawString){var result={};
var string=decodeURI(rawString);
if(string){var values=string.split(/&/);
for(var i=0;
i<values.length;
i++){var pair=values[i].split(/\=/);
result[pair[0]]=pair[1]
}}return result
},multiLine:function(text){text=text.split(/\r/).join("");
if(this.config.option("enableMultiLine")){text=text.split(/\n/).join("<br/>")
}else{text=text.split(/\n/).join(" ")
}return text
},validation:function(contents,min,max,emptyError,minError,maxError){contents=commentJ.$S(contents).trim().$value();
contents=this.cancelLineBreaking(contents);
if(emptyError&&contents.length===0){alert(emptyError);
return false
}if(minError&&contents.length<min){alert(commentJ.$Template(minError).process({min:escape(min.toString())}));
return false
}if(maxError&&contents.length>max){alert(commentJ.$Template(maxError).process({max:escape(max.toString())}));
return false
}return true
},lineBreaking:function(text){if(typeof document.body.style.wordWrap!="undefined"){return text
}if(!this.config.option("useLineBreaking8203")){return text
}var result=this.cancelLineBreaking(text);
result=result.replace(/(\s)+/g,"$1");
result=result.split("").join(String.fromCharCode(8203));
return result
},cancelLineBreaking:function(text){var result=text;
result=result.split(String.fromCharCode(8203)).join("");
return result
},redirectLogin:function(oEvent){if(this.config.option("isLogin")){return true
}else{if(this.isLogin(false)){this.config.instance.ui.resetPage();
return true
}}if(oEvent!=null){var woEvent=commentJ.$Event(oEvent);
var objCurrent=woEvent.element;
objCurrent.blur()
}if(confirm(this.config.message.NOT_LOGIN)){if(this.config.option("useLoginPopup")){var url="https://nid.naver.com/nidlogin.login?svctype=64&url="+encodeURIComponent(this.config.option("loginCallbackUrl"));
var width=400;
var height=348;
var left=Math.ceil((window.screen.width-width)/2);
var top=Math.ceil((window.screen.height-height)/2);
window.open(url,"naver_login","toolbar=0,menubar=0,resizable=yes,scrollbars=no,width="+width+",height="+height+",left="+left+",top="+top)
}else{window.top.location="https://nid.naver.com/nidlogin.login?mode=form&url="+encodeURIComponent(this.config.option("objectUrl"))
}}else{setTimeout(function(){if(commentJ.$$.getSingle(".cbox_btn_area")!=null){commentJ.$$.getSingle(".cbox_btn_area").focus()
}},0)
}return false
},isLogin:function(isPopMessage){var params={};
params.ticket=this.config.option("ticket");
this.config.instance.ajax.call({operation:"isLogin",async:false,onSuccess:commentJ.$Fn(function(result){if(result.is_logged_in=="Y"){this.config.option("isLogin",true)
}else{this.config.option("isLogin",false);
if(isPopMessage){alert(this.config.message.NEED_LOGIN)
}}},this).bind(),param:params});
return this.config.option("isLogin")
},profilePopUp:function(commentNo,profileType){var params={};
params.ticket=this.config.option("ticket");
if(!commentNo==""){params.comment_no=commentNo
}else{if(!profileType==""){if(!this.isLogin(true)){this.config.instance.ui.resetPage();
return false
}params.profile_type=profileType
}}var url=this.config.option("profileHome")+"?"+commentJ.$H(params).toQueryString();
window.open(url,"_blank")
},compareTextWithoutRetuneChar:function(paramText1,paramText2){var sText1=paramText1;
var sText2=paramText2;
sText1=sText1.replace(/\r/g,"");
sText1=sText1.replace(/\n/g,"");
sText2=sText2.replace(/\r/g,"");
sText2=sText2.replace(/\n/g,"");
if(sText1==sText2){return true
}return false
},initIframe:function(){this.resizeIframe();
var fnResize=commentJ.$Fn(this.resizeIframe,this).bind();
this.config.attach("afterList",fnResize)
},resizeIframe:function(){if(!this.config.option("iframeId")){return
}var iframe=parent.document.getElementById(this.config.option("iframeId"));
if(!iframe){return
}var elBody=commentJ.$Element(commentJ.$$.getSingle("body"));
if(elBody.height()>0){iframe.style.height=elBody.height()+"px"
}},getSnsAuthStatus:function(){if(!this.config.option("isLogin")){return{}
}var whtSocialComment=commentJ.$H(this.config.option("snsAuthStatus"));
if(whtSocialComment.length()==0){var params={};
params.ticket=this.config.option("ticket");
this.config.instance.ajax.call({operation:"snsAuthStatus",async:false,onSuccess:commentJ.$Fn(function(result){if(result.sns_auth_status){this.config.option("snsAuthStatus",result.sns_auth_status)
}},this).bind(),param:params})
}return this.config.option("snsAuthStatus")
},getTicketConfig:function(){var params={};
params.ticket=this.config.option("ticket");
this.config.instance.ajax.call({operation:"ticketConfig",async:false,onSuccess:commentJ.$Fn(function(result){this.config.option("social",result.social)
},this).bind(),param:params})
},getUrlList:function(){var whtUrlList=commentJ.$H(this.config.option("urlList"));
if(whtUrlList.length()==0){this.config.instance.ajax.call({operation:"urlList",async:false,onSuccess:commentJ.$Fn(function(result){this.config.option("urlList",result.url_list)
},this).bind()})
}return this.config.option("urlList")
}}).extend(commentJ.Component);
sps.CommentBox.Util.NAME="sps.CommentBox.Util";
sps.CommentBox.Util.VERSION="1.0.0";
sps.util=new sps.CommentBox.Util();
var sps;
if(typeof sps=="undefined"){sps={CommentBox:{},ui:{}}
}else{if(typeof sps.CommentBox=="undefined"){sps.CommentBox={}
}}sps.CommentBox.UI=commentJ.$Class({name:"unknown",version:"unknown",$init:function(){this.name=sps.CommentBox.UI.NAME;
this.version=sps.CommentBox.UI.VERSION;
this.rowMessage;
this._htSortTypeNameList=commentJ.$H({newest:"최신순",oldest:"등록순",recommend:"공감순"});
this.option("list",{});
this.option("oMessage",{});
this.indexInstance=sps.CommentBox.UI.getInstance().length-1;
this.config=sps.CommentBox.Config.getInstance()[this.indexInstance]
},list:function(oMessage){this.resetSortArea(oMessage.total_count);
this.option("oMessage",oMessage);
var commentList=oMessage.comment_list;
var recommendList=oMessage.recommended_list;
var replyMessage=oMessage.reply_lists[0];
this.config.fireEvent("beforeList",{text:oMessage});
var elBody=commentJ.$Element(commentJ.$$.getSingle(this.config.element("body")));
if(this.config.option("useScore")){var objRawList=elBody.query(this.config.element("list"));
var elRawList=commentJ.$Element(objRawList);
elRawList.addClass(this.config.css("scoreList"))
}var objList=elBody.query(this.config.element("list")+" ul");
var elList=commentJ.$Element(objList);
if(this.config.option("useSortArea")!=true&&this.config.option("useFocus")==true){elList.attr("id",this.config.element("focusTarget"))
}elList.empty();
if(this.config.option("useRecommendArea")&&oMessage.page_no==1){for(var nRecommendIndex=0;
nRecommendIndex<recommendList.length;
nRecommendIndex++){var oRawRecommend=this.preprocessing(recommendList[nRecommendIndex]);
oRawRecommend.parent_comment_no=0;
oRawRecommend.reply_level=1;
oRawRecommend.is_author=oMessage.author_yn;
oRawRecommend.is_recommend_area="Y";
oRawRecommend.indexInstance=this.indexInstance;
var oRecommend=new sps.CommentBox.Comment(oRawRecommend);
var elRecommend=oRecommend.build();
elRecommend.addClass("cbox_best_comment");
elList.append(elRecommend)
}}if(this.config.option("useInnerSvcList")==true){var moreCount=Number(this.config.option("innerSvcListSize"))-oMessage.recommended_list.length;
var moreCountTemp=0;
for(var nCommentIndex=0;
nCommentIndex<commentList.length;
nCommentIndex++){if(moreCount<=moreCountTemp){break
}if(this._notExistBestComment(commentList[nCommentIndex].comment_no,commentList[nCommentIndex].parent_comment_no,oMessage.recommended_list)){var oRawComment=this.preprocessing(commentList[nCommentIndex]);
oRawComment.is_author=oMessage.author_yn;
oRawComment.isSocialLinkOpen=this.config.option("social")["link_open"];
oRawComment.isSocialReplyActive=this.config.option("social")["reply_active"];
oRawComment.indexInstance=this.indexInstance;
var oComment=new sps.CommentBox.Comment(oRawComment);
var elComment=oComment.build();
var elParent=this.seekParentElement(oRawComment);
elParent.append(elComment);
moreCountTemp++
}}}else{for(var nCommentIndex=0;
nCommentIndex<commentList.length;
nCommentIndex++){var oRawComment=this.preprocessing(commentList[nCommentIndex]);
oRawComment.is_author=oMessage.author_yn;
oRawComment.isSocialLinkOpen=this.config.option("social")["link_open"];
oRawComment.isSocialReplyActive=this.config.option("social")["reply_active"];
oRawComment.indexInstance=this.indexInstance;
var oComment=new sps.CommentBox.Comment(oRawComment);
var elComment=oComment.build();
var elParent=this.seekParentElement(oRawComment);
elParent.append(elComment)
}}if(typeof replyMessage=="object"&&typeof this.config.instance.score=="object"&&this.config.option("useReplyArea")){if(replyMessage.parent_comment_no>0){this.config.instance.score.displayReplyList(oMessage)
}}this.updateCount(oMessage);
this.spotLight(oMessage.comment_no);
this.paginate(oMessage);
this.config.fireEvent("afterList",{text:oMessage})
},setFocusList:function(){if(this.config.option("useFocus")==true){parent.scrollTo(0,commentJ.$Element(this.config.element("focusTarget")).offset().top)
}},_notExistBestComment:function(sCommentNo,sParentCommentNo,sRecommendedList){var rtrnVal=true;
for(var idx in sRecommendedList){if(sCommentNo==sRecommendedList[idx].comment_no||sParentCommentNo==sRecommendedList[idx].comment_no){rtrnVal=false;
break
}}return rtrnVal
},updateCount:function(oMessage){var totalCount=oMessage.total_count;
var score=oMessage.score;
var elBody=commentJ.$Element(commentJ.$$.getSingle(this.config.element("body")));
var objCountArea=elBody.query(this.config.element("countArea"));
var elCountArea=commentJ.$Element(objCountArea);
elCountArea.empty();
if(typeof score.average!="undefined"&&typeof score.sum!="undefined"&&typeof score.count!="undefined"){var objCountDetail=this.config.template("countDetail").process({score:oMessage.score});
var elCountDetail=commentJ.$Element(objCountDetail);
elCountArea.append(elCountDetail)
}else{var objCountSimple=this.config.template("countSimple").process({count:totalCount});
var elCountSimple=commentJ.$Element(objCountSimple);
elCountArea.append(elCountSimple)
}if(this.config.option("useCountUnderBar")){var objCountBar=elCountArea.query("h5");
if(objCountBar!=null){var elCountBar=commentJ.$Element(objCountBar);
elCountBar.addClass(this.config.css("countUnderBar"))
}}},seekParentElement:function(oOption){var elBody=commentJ.$Element(commentJ.$$.getSingle(this.config.element("body")));
var objList=elBody.query(this.config.element("list")+" ul");
var elList=commentJ.$Element(objList);
var nReplyLevel=Number(oOption.reply_level);
var nParentCommentNo=Number(oOption.parent_comment_no);
var returnElement=elList;
if(nParentCommentNo>0&&nReplyLevel>1){var objReplyPosition=elList.query(".comment_no_"+nParentCommentNo+" ul");
var elReplyPosition=commentJ.$Element(objReplyPosition);
if(elReplyPosition==null){var elDummyReplyPosition=elList.query(".dummy_comment_no_"+(nReplyLevel-1)+" ul");
var elDummyReplyPosition=commentJ.$Element(elDummyReplyPosition);
if(elDummyReplyPosition==null){var elDummy;
var elTarget;
for(var i=1;
i<nReplyLevel;
i++){var elLi=commentJ.$Element("<li>");
elLi.addClass(this.config.css("thumbOff"));
elLi.addClass("dummy_comment_no_"+(nReplyLevel-i));
var elUl=commentJ.$Element("<ul>");
if(i==1){elTarget=elUl
}else{elUl.append(elDummy)
}elLi.append(elUl);
elDummy=elLi
}elList.append(elDummy);
returnElement=elTarget
}else{returnElement=elDummyReplyPosition
}}else{returnElement=elReplyPosition
}}return returnElement
},paginate:function(oMessage){var elBody=commentJ.$Element(commentJ.$$.getSingle(this.config.element("body")));
var objPaginate=elBody.query(this.config.element("paginate"));
if(objPaginate==null){return false
}var elPaginate=commentJ.$Element(objPaginate);
elPaginate.html("");
this.option("currentPageNo",oMessage.page_no);
var nCurrent=this.option("currentPageNo");
var nStart=0;
var nEnd=0;
var nLast=Math.ceil(oMessage.total_count/this.config.option("pageSize"));
var nPageCount=this.config.option("paginateSize");
if(this.config.option("centerPaginate")){var nLeadSize=Math.floor(nPageCount/2);
nStart=Math.max(nCurrent-nLeadSize,1);
nEnd=nStart+nPageCount-1
}else{var nOffset=nCurrent%nPageCount===0?nPageCount:nCurrent%nPageCount;
var nPrevious=nCurrent-nOffset;
nStart=nPrevious+1;
nEnd=nPrevious+nPageCount
}nEnd=Math.max(nStart,nEnd);
nEnd=Math.min(nEnd,nLast);
elPaginate.append(commentJ.$Element(this.config.template("pageInfoText").process()));
if(nStart>1){var elFirstPage=this._buildPage(1,"firstPage");
var elPrevPage=this._buildPage(nStart-1,"prevPage");
if(elFirstPage!=null){elPaginate.append(elFirstPage);
elPaginate.append(document.createTextNode("\n"))
}if(elPrevPage!=null){elPaginate.append(elPrevPage);
elPaginate.append(document.createTextNode("\n"))
}}for(var nPage=nStart;
nPage<=nEnd;
nPage++){var elPage;
if(nPage==nCurrent){elPage=this._buildPage(nPage,"currentPage")
}else{elPage=this._buildPage(nPage,"page")
}if(elPage!=null){elPaginate.append(elPage);
elPaginate.append(document.createTextNode("\n"))
}}if(nEnd<nLast){var elNextPage=this._buildPage(nEnd+1,"nextPage");
if(elNextPage!=null){elPaginate.append(elNextPage);
elPaginate.append(document.createTextNode("\n"))
}var elLastPage=this._buildPage(nLast,"lastPage");
elPaginate.append(elLastPage)
}},_buildPage:function(nPage,sTplName){var tplPage=this.config.template(sTplName);
var sPage=tplPage.process({page:nPage});
var elPage=commentJ.$Element(sPage);
commentJ.$Fn(commentJ.$Fn(this.config.instance.core.list,this.config.instance.core).bind("page",nPage,null)).attach(elPage,"click");
commentJ.$Fn(sps.disableForm).attach(elPage,"click");
if(this.config.option("useFocus")){commentJ.$Fn(commentJ.$Fn(this.setFocusList,this)).attach(elPage,"click")
}return elPage
},preprocessing:function(oComment){if(!oComment.done_preprocessing){oComment.registered_ymdt=this.dateFormat(oComment.registered_ymdt);
oComment.modified_ymdt=this.dateFormat(oComment.modified_ymdt);
if(this.config.option("browser")=="firefox"||this.config.option("browser")=="opera"){oComment.contents=this.config.instance.util.lineBreaking(oComment.contents)
}if(this.config.option("useEscapeHtml")){oComment.contents=oComment.contents.replace("<!-- Not Allowed Tag Filtered -->","");
oComment.contents=commentJ.$S(oComment.contents).unescapeHTML().escapeHTML().$value()
}oComment.contents=this.config.instance.util.multiLine(oComment.contents);
oComment.done_preprocessing=true
}return oComment
},dateFormat:function(date){var datetime=date.split(/\+/);
datetime=datetime[0].split(/T/);
if(datetime.length>1){var ymd=datetime[0].split(/-/);
var his=datetime[1].split(/:/);
var year=ymd[0];
var month=ymd[1];
var dayOfMonth=ymd[2];
var time=his[0];
var minute=his[1];
var second=his[2].split(/\./);
var milli=second[1];
second=second[0];
year=Number(year);
month=Number(month)-1;
var day=Number(dayOfMonth);
time=Number(time);
minute=Number(minute);
second=Number(second);
var oDate=commentJ.$Date(year,month,day,time,minute,second,milli);
return oDate.format(this.config.option("dateFormat"))
}else{return datetime[0]
}},resetList:function(){var oMessage=this.option("oMessage");
var commentNo=oMessage.comment_no;
var pageNo=oMessage.page_no;
if(commentNo>0){commentJ.$Fn(this.config.instance.core.list,this.config.instance.core).bind("comment",commentNo,false)()
}else{commentJ.$Fn(this.config.instance.core.list,this.config.instance.core).bind("page",pageNo,false)()
}this.config.instance.layer.resetLayer()
},resetPage:function(){this.config.instance.writebox.resetRootWriteBox();
this.resetList()
},spotLight:function(commentNo){if(commentNo==0||commentNo==null){return
}if(this.config.option("enableSpotLight")==false){return
}var elBody=commentJ.$Element(commentJ.$$.getSingle(this.config.element("body")));
var objComment=elBody.query(".comment_no_"+commentNo+" "+this.config.element("commentBody"));
if(objComment==null){return
}var elComment=commentJ.$Element(objComment);
var sCssSpotLight=this.config.css("spotLight");
elComment.addClass(sCssSpotLight);
var oTransition=new commentJ.Transition().fps(30).attach({end:function(){elComment.removeClass(sCssSpotLight);
elComment.$value().style.backgroundColor=""
}});
oTransition.start(1500,elComment.$value(),{"@backgroundColor":commentJ.Effect.linear(elComment.css("backgroundColor"),"rgb(255,255,255)")})
},addRecommendTag:function(elComment,oOption){var objNameArea=elComment.query(this.config.element("commentNameArea"));
var elNameArea=commentJ.$Element(objNameArea);
var objRecommendImgArea=this.config.template("recommendImgArea").process();
var elRecommendImgArea=commentJ.$Element(objRecommendImgArea);
if(oOption.isAuthorRecommend){var objAuthorRecommendImgTag=this.config.template("arthorRecommendImgTag").process();
var elAuthorRecommendImgTag=commentJ.$Element(objAuthorRecommendImgTag);
elRecommendImgArea.append(elAuthorRecommendImgTag);
elRecommendImgArea.append(document.createTextNode("\n"))
}if(oOption.isUserRecommend){var objUserRecommendImgTag=this.config.template("userRecommendImgTag").process();
var elUserRecommendImgTag=commentJ.$Element(objUserRecommendImgTag);
elRecommendImgArea.append(elUserRecommendImgTag)
}elNameArea.prepend(elRecommendImgArea);
return elComment
},addMobileIcon:function(elComment,oOption){var objNameArea=elComment.query(this.config.element("commentNameArea"));
var elNameArea=commentJ.$Element(objNameArea);
var objMobileIcon=this.config.template("mobileIcon").process();
var elMobileIcon=commentJ.$Element(objMobileIcon);
var elMobileLayer=commentJ.$Element(commentJ.$$.getSingle(this.config.element("body")+" "+this.config.element("mobileLayer")));
if(!elMobileLayer){var objMobileLayer=this.config.template("mobileLayer").process();
elMobileLayer=commentJ.$Element(objMobileLayer);
elMobileLayer.hide();
var elBody=commentJ.$Element(commentJ.$$.getSingle(this.config.element("body")));
elBody.append(elMobileLayer)
}commentJ.$Fn(function(e){var offset=elMobileIcon.offset();
var top=offset.top+elMobileIcon.height()+5;
var left=offset.left-18;
elMobileLayer.show();
elMobileLayer.offset(top,left)
},this).attach(elMobileIcon,"mouseenter");
commentJ.$Fn(function(e){elMobileLayer.hide()
},this).attach(elMobileIcon,"mouseleave");
var objSnsArea=elComment.query(this.config.element("cboxSnsShare"));
var elSnsArea=commentJ.$Element(objSnsArea);
if(objSnsArea==null){elNameArea.append(elMobileIcon)
}else{elSnsArea.before(elMobileIcon);
elMobileIcon.after("<span> </span>")
}return elComment
},deckRecommendArea:function(elComment,oOption){elComment.toggleClass("comment_no_"+oOption.commentNo,"recommend_comment_no_"+oOption.commentNo);
if(this.config.option("useReplyArea")){return elComment
}var objCommentBody=elComment.query(this.config.element("commentBody"));
var elCommentBody=commentJ.$Element(objCommentBody);
var sFourthOfCommentBody=this.config.template("fourthOfCommentBody").process();
var elFourthOfCommentBody=commentJ.$Element(sFourthOfCommentBody);
var sReplyOpenButton=elFourthOfCommentBody.query("a");
var elReplyOpenButton=commentJ.$Element(sReplyOpenButton);
if(this.config.option("maxDepth")==1){return elComment
}var sReplyNum=elFourthOfCommentBody.query(this.config.element("replyNum"));
var elReplyNum=commentJ.$Element(sReplyNum);
var elStrong=commentJ.$Element("<strong>");
if(typeof oOption.replyCount=="undefined"){elStrong.text("0")
}else{elStrong.text(oOption.replyCount)
}elReplyNum.append(document.createTextNode("("));
elReplyNum.append(elStrong);
elReplyNum.append(document.createTextNode(")"));
if(typeof this.config.instance.score=="object"){commentJ.$Fn(function(oEvent){this.config.instance.score.option("parentCommentOption",oOption);
if(elReplyOpenButton.hasClass(this.config.css("replyAreaUnfold"))){var sReplyArea=elComment.query("ul");
var elReplyArea=commentJ.$Element(sReplyArea);
elReplyArea.empty();
elReplyNum.removeClass(this.config.css("replyCountOn"));
if(typeof oOption.replyCount=="undefined"){commentJ.$Element(elReplyNum.parent().query("strong")).text("답글");
if(commentJ.$Element(elReplyNum.query("strong"))==null||commentJ.$Element(elReplyNum.query("strong")).text()=="0"){elReplyNum.append(document.createTextNode("("));
elReplyNum.append(elStrong);
elReplyNum.append(document.createTextNode(")"))
}}}else{this.config.instance.score.replyListBest(1,null)
}elReplyOpenButton.toggleClass(this.config.css("replyAreaUnfold"))
},this).attach(elReplyOpenButton,"click");
commentJ.$Fn(sps.disableForm).attach(elReplyOpenButton,"click")
}elCommentBody.append(elFourthOfCommentBody);
return elComment
},makeCountArea:function(){var objCount=this.config.template("countArea").process();
var elCount=commentJ.$Element(objCount);
return elCount
},makePaginationArea:function(){var objPaginationArea=this.config.template("pageArea").process();
var elPaginationArea=commentJ.$Element(objPaginationArea);
return elPaginationArea
},makeListArea:function(){var objListArea=this.config.template("list").process();
var elListArea=commentJ.$Element(objListArea);
if(this.config.option("useSortArea")){this.makeSortArea(elListArea)
}return elListArea
},makeSortArea:function(elListArea){var elSortArea=commentJ.$Element(this.config.template("sortArea").process());
var elSortList=commentJ.$Element(this.config.template("sortList").process());
if(this.config.option("useFocus")==true){elSortArea.attr("id",this.config.element("focusTarget"))
}var sortOptionList=this.config.option("sortOptionList");
for(var i=0;
i<sortOptionList.length;
++i){var elSortButotn=commentJ.$Element(this.config.template("sortButton").process({sortId:sortOptionList[i],sortName:this._htSortTypeNameList.$(sortOptionList[i])}));
if(typeof this.config.option("currentSortOption")!="undefined"){if(this.config.option("currentSortOption")==sortOptionList[i]){elSortButotn.addClass("on");
elSortButotn.append(this.config.template("sortButtonBlind").process())
}}else{if(sortOptionList[i]=="newest"){elSortButotn.addClass("on");
elSortButotn.append(this.config.template("sortButtonBlind").process())
}}commentJ.$Fn(this.sortList,this).attach(elSortButotn,"click");
elSortList.append(elSortButotn)
}elSortArea.append(elSortList);
if(this.config.option("useInfoArea")){this.makeInfoArea(elSortArea)
}elListArea.prepend(elSortArea)
},makeInfoArea:function(elSortArea){var elBestInfo=commentJ.$Element(this.config.template("bestInfo").process());
var elSortOldInfo=commentJ.$Element(this.config.template("sortOldInfo").process());
if(typeof this.config.option("currentSortOption")!="undefined"||this.config.option("currentSortOption")=="newest"){elBestInfo.show("block");
elSortOldInfo.hide()
}else{if(this.config.option("currentSortOption")=="oldest"){elBestInfo.hide();
elSortOldInfo.show("block")
}else{elBestInfo.hide();
elSortOldInfo.hide()
}}elSortArea.append(elBestInfo);
elSortArea.append(elSortOldInfo);
var elBody=commentJ.$Element(commentJ.$$.getSingle(this.config.element("body")));
commentJ.$Fn(function(e){var elBestInfoLayer=commentJ.$Element(elBody.query(".bestInfoLayer"));
if(elBestInfoLayer!=null){elBestInfoLayer.toggle();
var woEvent=commentJ.$Event(e);
woEvent.stop(commentJ.$Event.CANCEL_BUBBLE);
elSortArea.append(elBestInfoLayer)
}},this).attach(commentJ.$Element(elBestInfo.query("a")),"click");
commentJ.$Fn(function(e){var elSortOldInfoLayer=commentJ.$Element(elBody.query(".sortOldInfoLayer"));
if(elSortOldInfoLayer!=null){elSortOldInfoLayer.toggle();
var woEvent=commentJ.$Event(e);
woEvent.stop(commentJ.$Event.CANCEL_BUBBLE);
elSortArea.append(elSortOldInfoLayer)
}},this).attach(commentJ.$Element(elSortOldInfo.query("a")),"click")
},sortList:function(oEvent){this.config.instance.layer.hideLayer(2);
oEvent.stop();
var elButton=commentJ.$Element(oEvent.element);
var elButtons=elButton.parent().child();
for(var idx in elButtons){if(typeof elButtons[idx]!="object"){continue
}if(elButton.isEqual(elButtons[idx])){elButtons[idx].addClass("on");
if(elButtons[idx].query("span")==null){elButtons[idx].append(this.config.template("sortButtonBlind").process())
}}else{elButtons[idx].removeClass("on");
if(elButtons[idx].query("span")!=null&&elButtons[idx].isParentOf(elButtons[idx].child()[0])){elButtons[idx].child()[0].leave()
}}}var sortId=elButton.attr("id");
this.config.option("currentSortOption",sortId);
this.config.instance.core.list("page",1);
if(this.config.option("useInfoArea")){var elSortItems=elButton.parent().parent().child();
var elBestInfo=null;
var elOldInfo=null;
for(var idx in elSortItems){if(typeof elSortItems[idx]!="object"){continue
}if(elSortItems[idx].attr("id")=="bestInfo"){elBestInfo=elSortItems[idx]
}else{if(elSortItems[idx].attr("id")=="oldInfo"){elOldInfo=elSortItems[idx]
}}}if(sortId=="newest"){elBestInfo.show("block");
elOldInfo.hide()
}else{if(sortId=="oldest"){elBestInfo.hide();
elOldInfo.show("block")
}else{elBestInfo.hide();
elOldInfo.hide()
}}}},resetSortArea:function(commentCount){var elBody=commentJ.$Element(commentJ.$$.getSingle(this.config.element("body")));
if(this.config.option("useSortArea")){var elSortArea=commentJ.$ElementList(elBody.queryAll(".cbox_sort_area"));
if(commentCount==0){elSortArea.hide();
return
}else{elSortArea.show()
}}var elSortList=commentJ.$ElementList(elBody.queryAll(".cbox_list_sort > a"));
for(var i=0;
i<elSortList.length();
i++){var elSort=elSortList.get(i);
var sortId=elSort.attr("id");
if(typeof this.config.option("currentSortOption")!="undefined"){if(this.config.option("currentSortOption")==sortId){elSort.addClass("on");
if(elSort.query("span")==null){elSort.append(this.config.template("sortButtonBlind").process())
}}else{elSort.removeClass("on");
if(elSort.query("span")!=null){commentJ.$Element(elSort.query("span")).leave()
}}}else{if(sortId=="newest"){elSort.addClass("on");
if(elSort.query("span")==null){elSort.append(this.config.template("sortButtonBlind").process())
}}else{elSort.removeClass("on");
if(elSort.query("span")!=null){commentJ.$Element(elSort.query("span")).leave()
}}}}},makeExtraArea:function(templateName){var params={config:this.config};
var objDiv=this.config.template(templateName).process(params);
var elDiv=commentJ.$Element(objDiv);
return elDiv
},makeRootWriteBoxArea:function(){var objRootWriteBoxArea=this.config.template("rootWriteBoxArea").process();
var elRootWriteBoxArea=commentJ.$Element(objRootWriteBoxArea);
this.config.instance.writebox.createWriteBox(elRootWriteBoxArea,true);
return elRootWriteBoxArea
},updateReplyNum:function(oMessage){var parent_comment_no=oMessage.parent_comment_no;
var replyCount=oMessage.reply_count;
var elBody=commentJ.$Element(commentJ.$$.getSingle(this.config.element("body")));
var sReplyNum=elBody.query(".recommend_comment_no_"+parent_comment_no+" "+this.config.element("commentBody")+" "+this.config.element("secondOfCommentBody")+" "+this.config.element("replyNum"));
var elReplyNum=commentJ.$Element(sReplyNum);
elReplyNum.empty();
var elStrong=commentJ.$Element("<strong>");
if(replyCount==0){commentJ.$Element(elReplyNum.parent().query("strong")).text("답글취소")
}else{elStrong.text(replyCount);
elReplyNum.append(document.createTextNode("("));
elReplyNum.append(elStrong);
elReplyNum.append(document.createTextNode(")"))
}elReplyNum.addClass(this.config.css("replyCountOn"))
}}).extend(commentJ.Component);
sps.CommentBox.UI.NAME="sps.CommentBox.UI";
sps.CommentBox.UI.VERSION="1.0";
sps.ui=new sps.CommentBox.UI();
sps.CommentBox.Control=commentJ.$Class({options:null,templates:null,elements:null,eventList:null,$init:function(){this.options={};
this.templates={};
this.elements={};
this.eventList={}
},setOptions:function(option,value){if(typeof option=="object"){for(var key in option){this.options[key]=option[key]
}}else{if(typeof option=="string"&&value){this.options[option]=value
}}},setTemplates:function(template,value){if(typeof template=="object"){for(var key in template){this.templates[key]=template[key]
}}else{if(typeof template=="string"&&value){this.templates[template]=value
}}},setElements:function(element,value){if(typeof element=="object"){for(var key in element){this.elements[key]=element[key]
}}else{if(typeof element=="string"&&value){this.elements[element]=value
}}},validate:function(core){var instances;
if(core&&core.name=="sps.CommentBox.Core"){instances=[core]
}else{instances=sps.CommentBox.Core.getInstance()
}for(var i=0;
i<instances.length;
i++){var instance=instances[i];
for(var key in this.options){instance.config.option(key,this.options[key])
}for(var key in this.templates){instance.config.template(key,this.templates[key])
}for(var key in this.elements){instance.config.element(key,this.elements[key])
}for(var key in this.eventList){instance.config.attach(key,this.eventList[key])
}}},create:function(target,ticket,objectId,categoryId){var core=this.createOnly(target,ticket,objectId,categoryId);
core.list("page",1);
return core
},createOnly:function(target,ticket,objectId,categoryId){var targetObject;
if(!target||!(targetObject=commentJ.$$.getSingle(target))){throw TypeError("Invalid target argument.")
}if(!ticket){throw TypeError("Invalid ticket argument.")
}if(!objectId){throw TypeError("Invalid objectId argument.")
}var instances=sps.CommentBox.Core.getInstance();
var core=instances[instances.length-1];
if(core.initialized){new sps.CommentBox.Config();
new sps.CommentBox.Core();
new sps.CommentBox.Ajax();
new sps.CommentBox.UI();
new sps.CommentBox.Layer();
new sps.CommentBox.WriteBox();
new sps.CommentBox.Util();
if(sps.CommentBox.Me2day){new sps.CommentBox.Me2day()
}if(sps.CommentBox.profile){new sps.CommentBox.profile()
}if(sps.CommentBox.score){new sps.CommentBox.score()
}core=instances[instances.length-1]
}this.validate(core);
core.config.option("ticket",ticket);
core.config.option("objectId",objectId);
if(categoryId){core.config.option("categoryId",categoryId);
core.config.option("viewCategoryId",categoryId)
}core.config.element("body",target);
var targetElement=commentJ.$Element(targetObject);
if(!targetElement.hasClass("cbox")){targetElement.addClass("cbox")
}core.initializeOnly();
core.initialized=true;
return core
},addHandler:function(eventName,handler){this.eventList[eventName]=handler
}});
if(typeof sps.Fix=="undefined"){sps.Fix={}
}sps.CommentBox.WriteBox.prototype.onFocusWriteArea=function(oEvent){if(!this.config.option("isLogin")){this.config.instance.util.redirectLogin(oEvent)
}else{if(!this.config.option("isAuth")){if(this.config.instance.util.redirectAuth(oEvent)){this.defaultText(oEvent)
}}else{this.defaultText(oEvent)
}}};
sps.Fix.create=sps.CommentBox.WriteBox.prototype.create;
sps.CommentBox.WriteBox.prototype.create=function(e){if(!this.config.instance.util.redirectLogin(e)){return false
}if(!this.config.instance.util.redirectAuth(e)){return false
}if(!commentJ.$Fn(sps.Fix.create,this).bind()(e)){return false
}};
sps.Fix.replyCommand=sps.CommentBox.Comment.prototype.replyCommand;
sps.CommentBox.Comment.prototype.replyCommand=function(e){if(!this.config.instance.util.redirectAuth(e)){return false
}commentJ.$Fn(sps.Fix.replyCommand,this).bind()(e)
};
sps.CommentBox.Util.prototype.redirectAuth=function(oEvent){if(this.config.option("isAuth")){return true
}if(!this.checkAuth()){if(oEvent!=null){var woEvent=commentJ.$Event(oEvent);
var objCurrent=woEvent.element;
objCurrent.blur()
}if(confirm(this.config.message.NOT_AUTHENTICATED)){var certUrl=this.config.option("certUrl")||"https://nid.naver.com/user/cert.nhn?todo=cert_start";
var rurl=this.config.option("certRurl")||this.config.option("objectUrl");
var surl=this.config.option("certSrul")||this.config.option("objectUrl");
var svc=this.config.option("certSvc")||"";
top.location=certUrl+"&rurl="+encodeURIComponent(rurl)+"&surl="+encodeURIComponent(surl)+"&svc="+svc
}return false
}return true
};
sps.CommentBox.Util.prototype.checkAuth=function(){this.config.instance.ajax.call({operation:"checkAuth",async:false,onSuccess:commentJ.$Fn(this.onCheckAuth,this).bind(),param:{ticket:this.config.option("ticket")}});
return this.config.option("isAuth")
};
sps.CommentBox.Util.prototype.onCheckAuth=function(message){this.config.option("isAuth",message.is_authenticated_name=="Y")
};
sps.CommentBox.Config.prototype.message.NOT_AUTHENTICATED="정보통신망법에 따라 게시판에 글 작성 시 실명확인이 필요합니다. 실명확인을 하시겠습니까?";
sps.Fix.ajax={};
sps.Fix.ajax.$init=sps.CommentBox.Ajax.prototype.$init;
sps.CommentBox.Ajax.prototype.$init=function(){commentJ.$Fn(sps.Fix.ajax.$init,this).bind()();
this.option("checkAuth","is_authenticated_name.nhn")
};
sps.ajax.option("checkAuth","is_authenticated_name.nhn");
var sps;
if(typeof sps=="undefined"){sps={CommentBox:{}}
}else{if(typeof sps.CommentBox=="undefined"){sps.CommentBox={}
}}sps.CommentBox.Me2day=commentJ.$Class({name:"unknwon",version:"unknown",$init:function(){this.name=sps.CommentBox.Me2day.NAME;
this.version=sps.CommentBox.Me2day.VERSION;
this.option("activateMe2",false);
this.indexInstance=sps.CommentBox.Me2day.getInstance().length-1;
this.config=sps.CommentBox.Config.getInstance()[this.indexInstance]
},getInformMe2Day:function(){if(this.config.option("isLogin")&&!this.config.option("useSocialComment")&&this.config.option("useMe2Day")&&!this.option("activateMe2")){this.config.instance.ajax.call({operation:"me2day",async:false,onSuccess:commentJ.$Fn(function(result){this.option("activateMe2",true);
this.option("authenticatedYn",result.authenticated_yn);
this.option("profileUserId",result.profile_user_id);
this.option("me2daySsoLkey",result.me2day_sso_lkey)
},this).bind(),param:{ticket:this.config.option("ticket")}})
}},addMe2DayInDesc:function(elDescs){this.getInformMe2Day();
if(!this.option("activateMe2")){return elDescs
}var arrDescs=this.config.option("me2desc");
for(var i=0;
i<arrDescs.length;
i++){var sDesc=arrDescs[i];
var text=this.config.template(sDesc+"Desc").process();
if(text==""){continue
}var elDesc=commentJ.$Element(text);
var handler=this[sDesc+"Desc"];
if(typeof handler=="function"){var oFn=commentJ.$Fn(handler,this).bind();
elDesc=oFn(elDesc)
}if(elDesc){elDescs.append(elDesc)
}}return elDescs
},me2checkDesc:function(elDesc){var objCheckboxMe2=elDesc.query(this.config.element("me2dayCheck"));
var elCheckboxMe2=commentJ.$Element(objCheckboxMe2);
var objLinkMe2=elDesc.query(this.config.element("me2dayLink"));
var elLinkMe2=commentJ.$Element(objLinkMe2);
if(this.option("authenticatedYn")=="Y"){commentJ.$Fn(this.openMyMe2Day,this).attach(elLinkMe2,"click");
commentJ.$Fn(sps.disableForm).attach(elLinkMe2,"click")
}else{elCheckboxMe2.attr("disabled","true");
elLinkMe2.before(document.createTextNode(elLinkMe2.text()));
elLinkMe2.leave()
}return elDesc
},me2guideDesc:function(elDesc){var elGuideMe2Button=commentJ.$Element(elDesc.query(this.config.element("helpButton")));
commentJ.$Fn(function(e){var elGuideMe2Layer=this.config.instance.layer.getLayer("me2guide");
elGuideMe2Layer=this.config.instance.layer.adjustPosition(elGuideMe2Button,elGuideMe2Layer,"left","bottom");
var woEvent=commentJ.$Event(e);
woEvent.stop(commentJ.$Event.CANCEL_BUBBLE)
},this).attach(elGuideMe2Button,"click");
commentJ.$Fn(sps.disableForm).attach(elGuideMe2Button,"click");
return elDesc
},me2certifyDesc:function(elDesc){var elCertify=commentJ.$Element(elDesc.query("a"));
if(this.option("authenticatedYn")=="Y"){return
}else{commentJ.$Fn(this.showMe2DayAuthLayer,this).attach(elCertify,"click");
commentJ.$Fn(sps.disableForm).attach(elCertify,"click")
}return elDesc
},showMe2DayAuthLayer:function(){if(!this.config.instance.util.isLogin(true)){this.config.instance.ui.resetPage();
return false
}var cookie=commentJ.$Cookie();
if(Number(cookie.get("NID_MATCH_M"))=="1"){alert("미투데이 아이디와 네이버 아이디가 성공적으로 연동되어 있는 상태입니다");
return
}var returnURL=this.config.option("objectUrl");
returnURL=returnURL.split(/\?/);
var returnPamrams=commentJ.$H(this.config.instance.util.parseQueryString(returnURL[1]));
returnPamrams.add("set_me2day",true);
returnURL=returnURL[0]+"?"+returnPamrams.toQueryString();
this.config.instance.util.popUp("http://nid.naver.com/new_me2day/new_me2day.nhn?ret_url="+escape(returnURL),"me2day",450,400);
return false
},showMe2DayReleaseLayer:function(){if(!this.config.instance.util.isLogin(true)){this.config.instance.ui.resetPage();
return false
}var returnURL=""+this.config.option("objectUrl");
returnURL=returnURL.split(/\?/);
var returnPamrams=commentJ.$H(this.config.instance.util.parseQueryString(returnURL[1]));
returnPamrams.remove("set_me2day");
returnURL=returnURL[0]+"?"+returnPamrams.toQueryString();
this.config.instance.util.popUp("https://nid.naver.com/new_me2day/match_delete.nhn?ret_url="+escape(returnURL));
return false
},openMyMe2Day:function(){this.config.instance.util.profilePopUp("","me2day")
}}).extend(commentJ.Component);
sps.CommentBox.Me2day.NAME="sps.CommentBox.Me2day";
sps.CommentBox.Me2day.VERSION="1.0.0";
sps.me2day=new sps.CommentBox.Me2day();
var sps;
if(typeof sps=="undefined"){sps={CommentBox:{}}
}else{if(typeof sps.CommentBox=="undefined"){sps.CommentBox={}
}}sps.CommentBox.profile=commentJ.$Class({name:"unknwon",version:"unknown",$init:function(){this.name=sps.CommentBox.profile.NAME;
this.version=sps.CommentBox.profile.VERSION;
this.indexInstance=sps.CommentBox.profile.getInstance().length-1;
this.config=sps.CommentBox.Config.getInstance()[this.indexInstance];
this.option("activeProfile",false);
this.option("activeProfileList",false);
this.option("profile",{});
this.option("profileList",{})
},getProfile:function(){if(!this.option("activeProfile")){this.config.instance.ajax.call({operation:"profile",async:false,onSuccess:commentJ.$Fn(function(result){this.option("activeProfile",true);
this.option("profile",result)
},this).bind(),param:{ticket:this.config.option("ticket")}})
}},getProfileList:function(){if(!this.option("activeProfileList")){this.config.instance.ajax.call({operation:"profileList",async:false,onSuccess:commentJ.$Fn(function(result){this.option("activeProfileList",true);
this.option("profileList",result)
},this).bind(),param:{ticket:this.config.option("ticket")}})
}},addProfileToComment:function(elComment,oOption){if(!oOption.writerProfileUrl&&!this.config.option("useDummyThumb")){return elComment
}elComment.removeClass(this.config.css("thumbOff"));
elComment.addClass(this.config.css("thumbOn"));
var elThumbProfile=this.assembleThumb(false,this.config.option("thumbSizeInComment"));
elThumbProfile.addClass(this.config.css("thumb"));
if(oOption.isAuthorComment){var sAuthorImg=this.config.template("authorImg").process();
var elAuthorImg=commentJ.$Element(sAuthorImg);
var sAuthorText=this.config.template("authorText").process();
var elAuthorText=commentJ.$Element(sAuthorText);
elThumbProfile.append(elAuthorImg);
elThumbProfile.append(elAuthorText)
}this.changeImage(elThumbProfile,oOption.writerProfileUrl,oOption.commentNo,oOption.writerProfileType);
elComment=this.changeNamePlate(elComment,oOption);
elComment.prepend(elThumbProfile);
return elComment
},changeNamePlate:function(elComment,oOption){if(oOption.writerProfileType=="naver"){return elComment
}var objNickNameArea=elComment.query("."+this.config.css("nickName"));
var elNickNameArea=commentJ.$Element(objNickNameArea);
var objUserIdArea=elComment.query("."+this.config.css("userId"));
var elUserIdArea=commentJ.$Element(objUserIdArea);
var elNickNameA=this.addLink(oOption.writerNickName,oOption.commentNo,oOption.writerProfileType);
var elUserIdA=this.addLink(oOption.writerId,oOption.commentNo,oOption.writerProfileType);
if(elNickNameArea!=null){elNickNameArea.empty();
elNickNameArea.append(elNickNameA)
}if(elUserIdArea!=null){elUserIdArea.empty();
elUserIdArea.append(document.createTextNode("("));
elUserIdArea.append(elUserIdA);
elUserIdArea.append(document.createTextNode(")"))
}return elComment
},addLink:function(text,commentNo,profileType){text=text||"";
if(!this.config.option("useProfileNameLink")){var elBlank=commentJ.$Element("<span>");
elBlank.text(text);
return elBlank
}var sABlank=this.config.template("aBlank").process();
var elABlank=commentJ.$Element(sABlank);
elABlank.text(text);
commentJ.$Fn(function(e){this.config.instance.util.profilePopUp(commentNo,profileType)
},this).attach(elABlank,"click");
commentJ.$Fn(sps.disableForm).attach(elABlank,"click");
return elABlank
},assembleThumb:function(useInWritebox,sizeType){var sThumbProfileImg;
var elThumbProfileImg;
if(sizeType=="medium"){sThumbProfileImg=this.config.template("thumbMediumProfileImg").process();
elThumbProfileImg=commentJ.$Element(sThumbProfileImg)
}else{if(sizeType=="small"){sThumbProfileImg=this.config.template("thumbSmallProfileImg").process();
elThumbProfileImg=commentJ.$Element(sThumbProfileImg)
}}var sThumbProfileBorder=this.config.template("thumbProfileBorder").process();
var elThumbProfileBorder=commentJ.$Element(sThumbProfileBorder);
var elDiv=commentJ.$Element("<div>");
if(this.config.option("useProfileThumbLink")){var elA=commentJ.$Element("<a>");
elA.append(elThumbProfileImg);
elA.append(elThumbProfileBorder);
elDiv.append(elA)
}else{elDiv.append(elThumbProfileImg);
elDiv.append(elThumbProfileBorder)
}if(this.config.option("useSpan")&&useInWritebox){elDiv.addClass(this.config.css("spanThumbs"));
var elSpanDiv=commentJ.$Element("<div>");
elSpanDiv.append(elDiv);
return elSpanDiv
}else{return elDiv
}},makeProfileWriteBox:function(elWriteBox,isRoot){if(!this.config.option("isLogin")&&!this.config.option("useWriteDummyThumb")){return elWriteBox
}this.getProfile();
if(!this.option("activeProfile")){return elWriteBox
}elWriteBox.toggleClass(this.config.css("basicWriteBoxType"),this.config.css("profileWriteBoxType"));
var objUserArea=elWriteBox.query(this.config.element("userArea"));
var elUserArea=commentJ.$Element(objUserArea);
var elProfile;
if(this.config.option("useSpan")){var objTd=elUserArea.query("tbody tr td");
elProfile=commentJ.$Element(objTd)
}else{elProfile=commentJ.$Element("<div>");
elUserArea.prepend(elProfile)
}elProfile.addClass(this.config.css("writeboxProfile"));
var elDivProfileArea=commentJ.$Element("<div>");
elDivProfileArea.addClass(this.config.css("writeboxProfileArea"));
elProfile.append(elDivProfileArea);
var elThumbProfile;
if(isRoot){elThumbProfile=this.assembleThumb(true,"medium")
}else{elThumbProfile=this.assembleThumb(true,this.config.option("replyThumbSizeInWritebox"))
}elThumbProfile.addClass(this.config.css("thumbs"));
elDivProfileArea.append(elThumbProfile);
if(this.config.option("isLogin")){this.changeImage(elThumbProfile,this.option("profile").profile_url,"",this.option("profile").profile_type)
}else{this.changeImage(elThumbProfile,"","","none")
}if(this.config.option("isLogin")){var sProfileButton=this.config.template("profileButton").process();
var elProfileButton=commentJ.$Element(sProfileButton);
elDivProfileArea.append(elProfileButton);
commentJ.$Fn(function(e){if(this.config.instance.util.isLogin(true)){var elProfileLayer=this.config.instance.layer.getLayer("profile");
if(elProfileLayer!=null){var offset=elProfileButton.offset();
var top=offset.top-52;
var left=offset.left+46;
elProfileLayer.show();
elProfileLayer.offset(top,left);
var elCloseButton=commentJ.$Element(elProfileLayer.query(this.config.element("closeButton")));
elCloseButton.$value().focus()
}}var woEvent=commentJ.$Event(e);
woEvent.stop(commentJ.$Event.CANCEL_BUBBLE);
this.config.option("lastEvent",e.element)
},this).attach(elProfileButton,"click")
}return elWriteBox
},adjustZindex:function(){var elBody=commentJ.$Element(commentJ.$$.getSingle(this.config.element("body")));
var objList=elBody.query(this.config.element("list")+" ul");
var elList=commentJ.$Element(objList);
var objReplyWriteBox=elList.query(this.config.element("writebox"));
var elReplyWriteBox=commentJ.$Element(objReplyWriteBox);
elReplyWriteBox.parent(commentJ.$Fn(function(p){if(p.tag=="li"){p.addClass(this.config.css("cboxOn"));
return true
}return false
},this).bind())
},changeImage:function(elThumbProfile,imgUrl,commentNo,profileType){var elImg=commentJ.$Element(elThumbProfile.query("img"));
if(typeof imgUrl=="undefined"||imgUrl==""){imgUrl=this.config.option("defaultProfileUrl")
}if(this.config.option("useMemorial")){imgUrl=this.config.option("memorialDefaultImageUrl")
}elImg.attr("src",imgUrl);
commentJ.$Fn(function(e){elImg.attr("src",this.config.option("defaultProfileUrl"))
},this).attach(elImg,"error");
var objA=elThumbProfile.query("a");
if(objA==null){return
}var elA=commentJ.$Element(objA);
elA.attr("href","#");
var elSpan=commentJ.$Element(elThumbProfile.query("a span"));
if(profileType=="none"||profileType=="naver"||this.config.option("useMemorial")){elSpan.css("cursor","default");
elA.css("cursor","default")
}else{commentJ.$Fn(function(e){this.config.instance.util.profilePopUp(commentNo,profileType)
},this).attach(elA,"click")
}commentJ.$Fn(sps.disableForm).attach(elA,"click")
},makeProfileLayer:function(elLayer){this.getProfileList();
if(!this.option("activeProfileList")){return elLayer
}commentJ.$Fn(function(e){this.config.instance.layer.hideLayer(2)
},this).attach(elLayer,"click");
var objProfileListArea=elLayer.query("ul");
var elProfileListArea=commentJ.$Element(objProfileListArea);
var objProfileButtonArea=elLayer.query(this.config.element("profileButtonArea"));
var elProfileButtonArea=commentJ.$Element(objProfileButtonArea);
var profileList=this.option("profileList");
var selectedProfileType=profileList.selected_profile_type;
var sortProfileList=new Array(10);
for(var j=0;
j<profileList.profile_list.length;
j++){var jsonProfile=profileList.profile_list[j];
var elLi=commentJ.$Element("<li>");
var sRadio=this.config.template("profileRadio").process();
var elRadio=commentJ.$Element(sRadio);
elRadio.attr("id",jsonProfile.profile_type);
var elDl=commentJ.$Element("<dl>");
var elDt=commentJ.$Element("<dt>");
var elDd=commentJ.$Element("<dd>");
var elNickNameSpan=commentJ.$Element("<span>");
elNickNameSpan.addClass(this.config.css("nickName"));
var elUserIdSpan=commentJ.$Element("<span>");
elUserIdSpan.addClass(this.config.css("userId"));
var elThumbProfile=this.assembleThumb(false,"medium");
elThumbProfile.addClass(this.config.css("thumb"));
var elNickNameA=this.addLink(jsonProfile.nickname,"",jsonProfile.profile_type);
var elUserIdA=this.addLink(jsonProfile.user_id,"",jsonProfile.profile_type);
elLi.append(elRadio);
elLi.append(elDl);
elDl.append(elDt);
elDl.append(elDd);
elDd.append(elNickNameSpan);
elDd.append(document.createTextNode(" "));
elDd.append(elUserIdSpan);
if(selectedProfileType==jsonProfile.profile_type){elRadio.attr("checked","true")
}if(jsonProfile.profile_type=="naver_blog"){var sBlogLabel=this.config.template("blogLabel").process();
var elBlogLabel=commentJ.$Element(sBlogLabel);
elBlogLabel.attr("for",jsonProfile.profile_type);
elDt.append(elBlogLabel);
elNickNameSpan.append(elNickNameA);
elUserIdSpan.append(document.createTextNode("("));
elUserIdSpan.append(elUserIdA);
elUserIdSpan.append(document.createTextNode(")"));
this.changeImage(elThumbProfile,jsonProfile.profile_url,"","naver_blog");
elRadio.after(elThumbProfile);
sortProfileList[0]=elLi
}else{if(jsonProfile.profile_type=="me2day"){var sM2Label=this.config.template("me2Label").process();
var elM2Label=commentJ.$Element(sM2Label);
elM2Label.attr("for",jsonProfile.profile_type);
elDt.append(elM2Label);
var sMe2HelpButton=this.config.template("helpButton").process();
var elMe2HelpButton=commentJ.$Element(sMe2HelpButton);
commentJ.$Fn(function(e){var elMe2HelpLayer=this.config.instance.layer.getLayer("me2Help");
elMe2HelpLayer=this.config.instance.layer.adjustPosition(elMe2HelpButton,elMe2HelpLayer,"left","top");
var woEvent=commentJ.$Event(e);
woEvent.stop(commentJ.$Event.CANCEL_BUBBLE)
},this).attach(elMe2HelpButton,"click");
elDt.append(elMe2HelpButton);
if(jsonProfile.authenticated_yn=="Y"){elNickNameSpan.append(elNickNameA);
elUserIdSpan.append(document.createTextNode("("));
elUserIdSpan.append(elUserIdA);
elUserIdSpan.append(document.createTextNode(")"));
this.changeImage(elThumbProfile,jsonProfile.profile_url,"","me2day");
elRadio.after(elThumbProfile)
}else{elRadio.attr("disabled","true");
this.changeImage(elThumbProfile,this.config.option("me2dayDefaultImageUrl"),"","none");
elRadio.after(elThumbProfile);
elDd.empty();
var sCertifyButton=this.config.template("certifyButton").process();
var elCertifyButton=commentJ.$Element(sCertifyButton);
commentJ.$Fn(this.config.instance.me2day.showMe2DayAuthLayer,this.config.instance.me2day).attach(elCertifyButton,"click");
commentJ.$Fn(sps.disableForm).attach(elCertifyButton,"click");
elDd.append(elCertifyButton)
}sortProfileList[1]=elLi
}else{if(jsonProfile.profile_type=="naver"){elLi.addClass(this.config.css("noProfileThumbArea"));
var sNaverLabel=this.config.template("naverLabel").process();
var elNaverLabel=commentJ.$Element(sNaverLabel);
elNaverLabel.attr("for",jsonProfile.profile_type);
elDt.append(elNaverLabel);
var sNaverHelpButton=this.config.template("helpButton").process();
var elNaverHelpButton=commentJ.$Element(sNaverHelpButton);
commentJ.$Fn(function(e){var elNaverHelpLayer=this.config.instance.layer.getLayer("naverHelp");
elNaverHelpLayer=this.config.instance.layer.adjustPosition(elNaverHelpButton,elNaverHelpLayer,"left","top");
var woEvent=commentJ.$Event(e);
woEvent.stop(commentJ.$Event.CANCEL_BUBBLE)
},this).attach(elNaverHelpButton,"click");
elDt.append(elNaverHelpButton);
elNickNameSpan.text(jsonProfile.nickname);
elUserIdSpan.text("("+jsonProfile.user_id+")");
sortProfileList[2]=elLi
}else{if(jsonProfile.profile_type=="baseball9"){var sBaseBall9Label=this.config.template("baseball9Label").process();
var elBaseBall9Label=commentJ.$Element(sBaseBall9Label);
elBaseBall9Label.attr("for",jsonProfile.profile_type);
elDt.append(elBaseBall9Label);
elNickNameSpan.text(jsonProfile.nickname);
elUserIdSpan.text("("+jsonProfile.user_id+")");
this.changeImage(elThumbProfile,jsonProfile.profile_url,"","none");
elRadio.after(elThumbProfile);
sortProfileList[3]=elLi
}}}}}for(var i=0;
i<sortProfileList.length;
i++){if(!(typeof sortProfileList[i]=="undefined")){elProfileListArea.append(sortProfileList[i])
}}var objConfirmButton=elProfileButtonArea.query("input");
var elConfirmButton=commentJ.$Element(objConfirmButton);
var objCancelButton=elProfileButtonArea.query("a");
var elCancelButton=commentJ.$Element(objCancelButton);
var objForm=commentJ.$Element(elLayer.query("form"));
if(objForm!=null){objForm=objForm.$value()
}commentJ.$Fn(sps.disableForm).attach(objForm,"submit");
commentJ.$Fn(function(e){var elForm=commentJ.$Element(e.element.form);
var objSelectedRadio=elForm.query(this.config.element("profileRadio"));
var elSelectedRadio=commentJ.$Element(objSelectedRadio);
this.setProfile(elSelectedRadio.attr("id"))
},this).attach(elConfirmButton,"click");
commentJ.$Fn(function(e){this.config.instance.layer.hideLayer(elLayer.attr("tier"))
},this).attach(elCancelButton,"click");
commentJ.$Fn(sps.disableForm).attach(elCancelButton,"click");
return elLayer
},setProfile:function(type){var params={};
params.ticket=this.config.option("ticket");
params.profile_type=type;
this.config.instance.ajax.call({operation:"setProfileType",async:false,onSuccess:commentJ.$Fn(this.modifyProfileType,this).bind(),param:params})
},modifyProfileType:function(result){this.option("activeProfile",false);
this.option("activeProfileList",false);
var elBody=commentJ.$Element(commentJ.$$.getSingle(this.config.element("body")));
var elThumbProfileList=commentJ.$ElementList(elBody.queryAll("."+this.config.css("thumbs")));
for(var i=0;
i<elThumbProfileList.length();
i++){var elThumbProfile=elThumbProfileList.get(i);
var elTempThumbProfile=this.assembleThumb(true,"medium");
elThumbProfile.html(elTempThumbProfile.html());
this.changeImage(elThumbProfile,result.profile_url,"",result.profile_type)
}this.config.instance.layer.hideLayer(1)
}}).extend(commentJ.Component);
sps.CommentBox.profile.NAME="sps.CommentBox.profile";
sps.CommentBox.profile.VERSION="1.0.0";
sps.profile=new sps.CommentBox.profile();
var sps;
if(typeof sps=="undefined"){sps={CommentBox:{}}
}else{if(typeof sps.CommentBox=="undefined"){sps.CommentBox={}
}}sps.CommentBox.score=commentJ.$Class({name:"unknwon",version:"unknown",$init:function(){this.name=sps.CommentBox.score.NAME;
this.version=sps.CommentBox.score.VERSION;
this.option("parentCommentOption",{});
this.indexInstance=sps.CommentBox.score.getInstance().length-1;
this.config=sps.CommentBox.Config.getInstance()[this.indexInstance]
},addSelectboxInWritebox:function(elWritebox){var sMainPartInWritebox=elWritebox.query(this.config.element("mainPartInWritebox"));
var elMainPartInWritebox=commentJ.$Element(sMainPartInWritebox);
var sScoreArea=this.config.template("scoreArea").process();
var elScoreArea=commentJ.$Element(sScoreArea);
var sSelectDiv=commentJ.$Element(elScoreArea.query(this.config.element("scoreDiv")));
if(sSelectDiv!=null){sSelectDiv=sSelectDiv.$value()
}var sScoreItem=this.config.template("scoreItem").process();
var arrScoreItem=sScoreItem.split("<separator/>");
var oSelectBox2=new commentJ.SelectBox(sSelectDiv,{bUseLayerPosition:false,aOptionHTML:arrScoreItem});
var oScore=this;
oSelectBox2.attach({open:function(oCustomEvent){if(!oScore.config.option("isLogin")){var fnRedirectLogin=commentJ.$Fn(oScore.config.instance.util.redirectLogin,oScore.config.instance.util).bind();
fnRedirectLogin(null);
fnRedirectLogin=null;
oCustomEvent.stop()
}}});
elMainPartInWritebox.prepend(elScoreArea);
return elWritebox
},detachSelectboxInWritebox:function(elWritebox){if(!this.config.option("isLogin")){return false
}var sScoreArea=elWritebox.query(this.config.element("scoreArea"));
var elScoreArea=commentJ.$Element(sScoreArea);
if(sScoreArea!=null){elScoreArea.leave()
}},addScoreToComment:function(elComment,oOption){var sCommentBody=elComment.query(this.config.element("commentBody"));
var elCommentBody=commentJ.$Element(sCommentBody);
var sFirstOfCommentBody=elComment.query(this.config.element("firstOfCommentBody"));
var elFirstOfCommentBody=commentJ.$Element(sFirstOfCommentBody);
var sThirdOfCommentBody=this.config.template("thirdOfCommentBody").process();
var elThirdOfCommentBody=commentJ.$Element(sThirdOfCommentBody);
var woChildOfFirst=commentJ.$A(elFirstOfCommentBody.child());
woChildOfFirst.forEach(function(o,i,w){elThirdOfCommentBody.append(o)
});
this.config.instance.profile.changeNamePlate(elThirdOfCommentBody,oOption);
if(!(oOption.writerProfileType=="naver"&&!this.config.option("useDummyThumb"))){var elThumbProfile=this.config.instance.profile.assembleThumb(false,"small");
elThumbProfile.addClass(this.config.css("thumb"));
this.config.instance.profile.changeImage(elThumbProfile,oOption.writerProfileUrl,oOption.commentNo,oOption.writerProfileType);
elThirdOfCommentBody.prepend(elThumbProfile)
}elCommentBody.append(elThirdOfCommentBody);
var sScoreBoard=this.config.template("scoreBoard").process(oOption);
var elScoreBoard=commentJ.$Element(sScoreBoard);
var sStarGrade=elScoreBoard.query(this.config.element("starGrade"));
var elStarGrade=commentJ.$Element(sStarGrade);
if(oOption.objectScore){if(oOption.objectScore>0){var scorePercent=oOption.objectScore/this.config.option("maxScore")*100;
var elSpan=commentJ.$Element("<span style='width:"+scorePercent+"%'>");
elStarGrade.append(elSpan)
}else{elStarGrade.leave()
}}else{elStarGrade.leave()
}elFirstOfCommentBody.append(elScoreBoard);
if(oOption.replyLevel>this.config.option("maxReplyAreaDepth")){elFirstOfCommentBody.leave()
}if(oOption.replyLevel>this.config.option("maxReplyAreaDepth")){return elComment
}if(this.config.option("maxDepth")==1){return elComment
}var sFourthOfCommentBody=this.config.template("fourthOfCommentBody").process();
var elFourthOfCommentBody=commentJ.$Element(sFourthOfCommentBody);
var sReplyOpenButton=elFourthOfCommentBody.query("a");
var elReplyOpenButton=commentJ.$Element(sReplyOpenButton);
var sReplyNum=elFourthOfCommentBody.query(this.config.element("replyNum"));
var elReplyNum=commentJ.$Element(sReplyNum);
var elStrong=commentJ.$Element("<strong>");
if(typeof oOption.replyCount=="undefined"){elStrong.text("0")
}else{elStrong.text(oOption.replyCount)
}elReplyNum.append(document.createTextNode("("));
elReplyNum.append(elStrong);
elReplyNum.append(document.createTextNode(")"));
if(oOption.replyCount>0){elReplyNum.addClass(this.config.css("replyCountOn"))
}commentJ.$Fn(function(oEvent){this.option("parentCommentOption",oOption);
if(elReplyOpenButton.hasClass(this.config.css("replyAreaUnfold"))){var sReplyArea=elComment.query("ul");
var elReplyArea=commentJ.$Element(sReplyArea);
elReplyArea.empty()
}else{this.replyList(0,null)
}elReplyOpenButton.toggleClass(this.config.css("replyAreaUnfold"))
},this).attach(elReplyOpenButton,"click");
commentJ.$Fn(sps.disableForm).attach(elReplyOpenButton,"click");
elCommentBody.append(elFourthOfCommentBody);
return elComment
},replyList:function(pageNo,parentCommentNo){var parentCommentOption=this.option("parentCommentOption");
var params=this.config.instance.core.commonParam();
params.page_size=this.config.option("replyPageSize");
params.parent_comment_no=parentCommentOption.commentNo;
if(pageNo>0){params.page_no=pageNo;
params.parent_comment_no=parentCommentNo
}this.config.instance.ajax.call({operation:"replyList",onSuccess:commentJ.$Fn(this.displayReplyList,this).bind(),param:params})
},replyListBest:function(pageNo,parentCommentNo){var parentCommentOption=this.option("parentCommentOption");
var params=this.config.instance.core.commonParam();
params.page_size=this.config.option("replyPageSize");
params.parent_comment_no=parentCommentOption.commentNo;
params.best_yn="Y";
if(pageNo>0){params.page_no=pageNo;
if(parentCommentNo!=null){params.parent_comment_no=parentCommentNo
}}this.config.instance.ajax.call({operation:"replyList",onSuccess:commentJ.$Fn(this.displayReplyList,this).bind(),param:params})
},displayReplyList:function(oMessage){var parentCommentOption=this.option("parentCommentOption");
var oReplyMessage=oMessage.reply_lists[0];
var replyList=oReplyMessage.reply_list;
var parentCommentNo=oReplyMessage.parent_comment_no;
var elBody=commentJ.$Element(commentJ.$$.getSingle(this.config.element("body")));
var sRecommend=".";
if(parentCommentOption.isRecommendArea){sRecommend=".recommend_"
}var sParent=elBody.query(sRecommend+"comment_no_"+parentCommentNo+" ul");
var elParent=commentJ.$Element(sParent);
elParent.empty();
for(var i=0;
i<replyList.length;
i++){var oRawReply=this.config.instance.ui.preprocessing(replyList[i]);
oRawReply.indexInstance=this.indexInstance;
var oComment=new sps.CommentBox.Comment(oRawReply);
var elComment=oComment.build();
elParent.append(elComment);
if(i==0){var elLi=commentJ.$Element(elParent.query("li"));
elLi.attr("tabindex","-1");
elLi.$value().focus()
}}if(replyList.length>0){var elReplyAreaPage=this.replyPaginate(oReplyMessage);
elParent.append(elReplyAreaPage)
}var elWriteBox=this.config.instance.writebox.createReplyWrite(elParent,parentCommentNo,oReplyMessage.best_yn);
if(this.config.option("maxScoreDepth")>=parentCommentOption.replyLevel){this.detachSelectboxInWritebox(elWriteBox)
}if(oReplyMessage.best_yn=="Y"){this.config.instance.ui.updateReplyNum(oReplyMessage)
}},replyPaginate:function(oReplyMessage){var totalPage=Math.ceil(Number(oReplyMessage.reply_count)/Number(oReplyMessage.page_size));
var curPage=oReplyMessage.page_no;
var sReplyAreaPage=this.config.template("replyAreaPage").process({curPage:curPage,totalPage:totalPage});
var elReplyAreaPage=commentJ.$Element(sReplyAreaPage);
var sReplyAreaPageLeft=elReplyAreaPage.query(this.config.element("replyAreaPageLeft"));
var elReplyAreaPageLeft=commentJ.$Element(sReplyAreaPageLeft);
var sReplyAreaPageRight=elReplyAreaPage.query(this.config.element("replyAreaPageRight"));
var elReplyAreaPageRight=commentJ.$Element(sReplyAreaPageRight);
if(oReplyMessage.is_have_prev_page=="Y"){elReplyAreaPageLeft.removeClass("cbox_dim");
commentJ.$Fn(function(oEvent){if(oReplyMessage.best_yn=="Y"){this.replyListBest(Number(oReplyMessage.page_no)-1,oReplyMessage.parent_comment_no)
}else{this.replyList(Number(oReplyMessage.page_no)-1,oReplyMessage.parent_comment_no)
}},this).attach(elReplyAreaPageLeft,"click")
}else{elReplyAreaPageLeft.addClass("cbox_dim")
}commentJ.$Fn(sps.disableForm).attach(elReplyAreaPageLeft,"click");
if(oReplyMessage.is_have_next_page=="Y"){elReplyAreaPageRight.removeClass("cbox_dim");
commentJ.$Fn(function(oEvent){if(oReplyMessage.best_yn=="Y"){this.replyListBest(Number(oReplyMessage.page_no)+1,oReplyMessage.parent_comment_no)
}else{this.replyList(Number(oReplyMessage.page_no)+1,oReplyMessage.parent_comment_no)
}},this).attach(elReplyAreaPageRight,"click")
}else{elReplyAreaPageRight.addClass("cbox_dim")
}commentJ.$Fn(sps.disableForm).attach(elReplyAreaPageRight,"click");
return elReplyAreaPage
}}).extend(commentJ.Component);
sps.CommentBox.score.NAME="sps.CommentBox.score";
sps.CommentBox.score.VERSION="1.0.0";
sps.score=new sps.CommentBox.score();
