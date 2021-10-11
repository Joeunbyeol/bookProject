if(typeof window!="undefined"&&typeof window.nhn=="undefined"){window.nhn=new Object
}if(typeof window!="undefined"){window.jindo={}
}else{jindo={}
}jindo.$Jindo=function(){var cl=arguments.callee;
var cc=cl._cached;
if(cc){return cc
}if(!(this instanceof cl)){return new cl()
}if(!cc){cl._cached=this
}this.version="1.3.6"
};
jindo.$=function(sID){var ret=new Array;
var el=null;
var reg=/^<([a-z]+|h[1-5])>$/i;
var reg2=/^<([a-z]+|h[1-5])(\s+[^>]+)?>/i;
for(var i=0;
i<arguments.length;
i++){el=arguments[i];
if(typeof el=="string"){el=el.replace(/^\s+|\s+$/g,"");
if(reg.test(el)){el=document.createElement(RegExp.$1)
}else{if(reg2.test(el)){var p={thead:"table",tbody:"table",tr:"tbody",td:"tr",dt:"dl",dd:"dl",li:"ul",legend:"fieldset"};
var tag=RegExp.$1.toLowerCase();
var parents=[];
for(var j=0;
tag=p[tag];
j++){var o=document.createElement(tag);
if(j){o.appendChild(parents[j-1])
}parents.push(o)
}if(!parents[0]){parents[0]=document.createElement("div")
}var first=parents[0];
jindo.$Element(first).html(el);
for(el=first.firstChild;
el;
el=el.nextSibling){if(el.nodeType==1){ret[ret.length]=el
}}}else{el=document.getElementById(el)
}}}if(el){ret[ret.length]=el
}}return ret.length>1?ret:(ret[0]||null)
};
jindo.$Class=function(oDef){function typeClass(){var t=this;
var a=[];
var superFunc=function(m,superClass,func){if(m!="constructor"&&func.toString().indexOf("$super")>-1){var funcArg=func.toString().replace(/function\s*\(([^\)]*)[\w\W]*/g,"$1").split(",");
var funcStr=func.toString().replace(/function\s*\(.*\)\s*\{/,"").replace(/this\.\$super/g,"this.$super.$super");
funcStr=funcStr.substr(0,funcStr.length-1);
func=superClass[m]=new Function(funcArg,funcStr)
}return function(){var f=this.$this[m];
var t=this.$this;
var r=(t[m]=func).apply(t,arguments);
t[m]=f;
return r
}
};
while(typeof t._$superClass!="undefined"){t.$super=new Object;
t.$super.$this=this;
for(var x in t._$superClass.prototype){if(typeof this[x]=="undefined"&&x!="$init"){this[x]=t._$superClass.prototype[x]
}if(x!="constructor"&&x!="_$superClass"&&typeof t._$superClass.prototype[x]=="function"){t.$super[x]=superFunc(x,t._$superClass,t._$superClass.prototype[x])
}else{t.$super[x]=t._$superClass.prototype[x]
}}if(typeof t.$super.$init=="function"){a[a.length]=t
}t=t.$super
}for(var i=a.length-1;
i>-1;
i--){a[i].$super.$init.apply(a[i].$super,arguments)
}if(typeof this.$init=="function"){this.$init.apply(this,arguments)
}}if(typeof oDef.$static!="undefined"){var i=0,x;
for(x in oDef){x=="$static"||i++
}for(x in oDef.$static){typeClass[x]=oDef.$static[x]
}if(!i){return oDef.$static
}delete oDef.$static
}typeClass.prototype=oDef;
typeClass.prototype.constructor=typeClass;
typeClass.extend=jindo.$Class.extend;
return typeClass
};
jindo.$Class.extend=function(superClass){this.prototype._$superClass=superClass;
for(var x in superClass){if(x=="prototype"){continue
}this[x]=superClass[x]
}return this
};
jindo.$$=jindo.cssquery=(function(){var sVersion="2.3";
var debugOption={repeat:1};
var UID=1;
var cost=0;
var validUID={};
var bSupportByClassName=jindo.$("<DIV>").getElementsByClassName?true:false;
var safeHTML=false;
var getUID4HTML=function(oEl){var nUID=safeHTML?(oEl._cssquery_UID&&oEl._cssquery_UID[0]):oEl._cssquery_UID;
if(nUID&&validUID[nUID]==oEl){return nUID
}nUID=UID++;
oEl._cssquery_UID=safeHTML?[nUID]:nUID;
validUID[nUID]=oEl;
return nUID
};
var getUID4XML=function(oEl){var oAttr=oEl.getAttribute("_cssquery_UID");
var nUID=safeHTML?(oAttr&&oAttr[0]):oAttr;
if(!nUID){nUID=UID++;
oEl.setAttribute("_cssquery_UID",safeHTML?[nUID]:nUID)
}return nUID
};
var getUID=getUID4HTML;
var uniqid=function(sPrefix){return(sPrefix||"")+new Date().getTime()+parseInt(Math.random()*100000000)
};
function getElementsByClass(searchClass,node,tag){var classElements=new Array();
if(node==null){node=document
}if(tag==null){tag="*"
}var els=node.getElementsByTagName(tag);
var elsLen=els.length;
var pattern=new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
for(i=0,j=0;
i<elsLen;
i++){if(pattern.test(els[i].className)){classElements[j]=els[i];
j++
}}return classElements
}var getChilds_dontShrink=function(oEl,sTagName,sClassName){if(bSupportByClassName&&sClassName){if(oEl.getElementsByClassName){return oEl.getElementsByClassName(sClassName)
}if(oEl.querySelectorAll){return oEl.querySelectorAll(sClassName)
}return getElementsByClass(sClassName,oEl,sTagName)
}else{if(sTagName=="*"){return oEl.all||oEl.getElementsByTagName(sTagName)
}}return oEl.getElementsByTagName(sTagName)
};
var clearKeys=function(){backupKeys._keys={}
};
var oDocument_dontShrink=document;
var bXMLDocument=false;
var backupKeys=function(sQuery){var oKeys=backupKeys._keys;
sQuery=sQuery.replace(/'(\\'|[^'])*'/g,function(sAll){var uid=uniqid("QUOT");
oKeys[uid]=sAll;
return uid
});
sQuery=sQuery.replace(/"(\\"|[^"])*"/g,function(sAll){var uid=uniqid("QUOT");
oKeys[uid]=sAll;
return uid
});
sQuery=sQuery.replace(/\[(.*?)\]/g,function(sAll,sBody){if(sBody.indexOf("ATTR")==0){return sAll
}var uid="["+uniqid("ATTR")+"]";
oKeys[uid]=sAll;
return uid
});
var bChanged;
do{bChanged=false;
sQuery=sQuery.replace(/\(((\\\)|[^)|^(])*)\)/g,function(sAll,sBody){if(sBody.indexOf("BRCE")==0){return sAll
}var uid="_"+uniqid("BRCE");
oKeys[uid]=sAll;
bChanged=true;
return uid
})
}while(bChanged);
return sQuery
};
var restoreKeys=function(sQuery,bOnlyAttrBrace){var oKeys=backupKeys._keys;
var bChanged;
var rRegex=bOnlyAttrBrace?/(\[ATTR[0-9]+\])/g:/(QUOT[0-9]+|\[ATTR[0-9]+\])/g;
do{bChanged=false;
sQuery=sQuery.replace(rRegex,function(sKey){if(oKeys[sKey]){bChanged=true;
return oKeys[sKey]
}return sKey
})
}while(bChanged);
sQuery=sQuery.replace(/_BRCE[0-9]+/g,function(sKey){return oKeys[sKey]?oKeys[sKey]:sKey
});
return sQuery
};
var restoreString=function(sKey){var oKeys=backupKeys._keys;
var sOrg=oKeys[sKey];
if(!sOrg){return sKey
}return eval(sOrg)
};
var wrapQuot=function(sStr){return'"'+sStr.replace(/"/g,'\\"')+'"'
};
var getStyleKey=function(sKey){if(/^@/.test(sKey)){return sKey.substr(1)
}return null
};
var getCSS=function(oEl,sKey){if(oEl.currentStyle){if(sKey=="float"){sKey="styleFloat"
}return oEl.currentStyle[sKey]||oEl.style[sKey]
}else{if(window.getComputedStyle){return oDocument_dontShrink.defaultView.getComputedStyle(oEl,null).getPropertyValue(sKey.replace(/([A-Z])/g,"-$1").toLowerCase())||oEl.style[sKey]
}}if(sKey=="float"&&/MSIE/.test(window.navigator.userAgent)){sKey="styleFloat"
}return oEl.style[sKey]
};
var oCamels={accesskey:"accessKey",cellspacing:"cellSpacing",cellpadding:"cellPadding","class":"className",colspan:"colSpan","for":"htmlFor",maxlength:"maxLength",readonly:"readOnly",rowspan:"rowSpan",tabindex:"tabIndex",valign:"vAlign"};
var getDefineCode=function(sKey){var sVal;
var sStyleKey;
if(bXMLDocument){sVal='oEl.getAttribute("'+sKey+'")'
}else{if(sStyleKey=getStyleKey(sKey)){sKey="$$"+sStyleKey;
sVal='getCSS(oEl, "'+sStyleKey+'")'
}else{switch(sKey){case"checked":sVal='oEl.checked + ""';
break;
case"disabled":sVal='oEl.disabled + ""';
break;
case"enabled":sVal='!oEl.disabled + ""';
break;
case"readonly":sVal='oEl.readOnly + ""';
break;
case"selected":sVal='oEl.selected + ""';
break;
default:if(oCamels[sKey]){sVal="oEl."+oCamels[sKey]
}else{sVal='oEl.getAttribute("'+sKey+'")'
}}}}return"_"+sKey+" = "+sVal
};
var getReturnCode=function(oExpr){var sStyleKey=getStyleKey(oExpr.key);
var sVar="_"+(sStyleKey?"$$"+sStyleKey:oExpr.key);
var sVal=oExpr.val?wrapQuot(oExpr.val):"";
switch(oExpr.op){case"~=":return"("+sVar+' && (" " + '+sVar+' + " ").indexOf(" " + '+sVal+' + " ") > -1)';
case"^=":return"("+sVar+" && "+sVar+".indexOf("+sVal+") == 0)";
case"$=":return"("+sVar+" && "+sVar+".substr("+sVar+".length - "+oExpr.val.length+") == "+sVal+")";
case"*=":return"("+sVar+" && "+sVar+".indexOf("+sVal+") > -1)";
case"!=":return"("+sVar+" != "+sVal+")";
case"=":return"("+sVar+" == "+sVal+")"
}return"("+sVar+")"
};
var getNodeIndex=function(oEl){var nUID=getUID(oEl);
var nIndex=oNodeIndexes[nUID]||0;
if(nIndex==0){for(var oSib=(oEl.parentNode||oEl._IE5_parentNode).firstChild;
oSib;
oSib=oSib.nextSibling){if(oSib.nodeType!=1){continue
}nIndex++;
setNodeIndex(oSib,nIndex)
}nIndex=oNodeIndexes[nUID]
}return nIndex
};
var oNodeIndexes={};
var setNodeIndex=function(oEl,nIndex){var nUID=getUID(oEl);
oNodeIndexes[nUID]=nIndex
};
var unsetNodeIndexes=function(){setTimeout(function(){oNodeIndexes={}
},0)
};
var oPseudoes_dontShrink={contains:function(oEl,sOption){return(oEl.innerText||oEl.textContent||"").indexOf(sOption)>-1
},"last-child":function(oEl,sOption){for(oEl=oEl.nextSibling;
oEl;
oEl=oEl.nextSibling){if(oEl.nodeType==1){return false
}}return true
},"first-child":function(oEl,sOption){for(oEl=oEl.previousSibling;
oEl;
oEl=oEl.previousSibling){if(oEl.nodeType==1){return false
}}return true
},"only-child":function(oEl,sOption){var nChild=0;
for(var oChild=(oEl.parentNode||oEl._IE5_parentNode).firstChild;
oChild;
oChild=oChild.nextSibling){if(oChild.nodeType==1){nChild++
}if(nChild>1){return false
}}return nChild?true:false
},empty:function(oEl,_){return oEl.firstChild?false:true
},"nth-child":function(oEl,nMul,nAdd){var nIndex=getNodeIndex(oEl);
return nIndex%nMul==nAdd
},"nth-last-child":function(oEl,nMul,nAdd){var oLast=(oEl.parentNode||oEl._IE5_parentNode).lastChild;
for(;
oLast;
oLast=oLast.previousSibling){if(oLast.nodeType==1){break
}}var nTotal=getNodeIndex(oLast);
var nIndex=getNodeIndex(oEl);
var nLastIndex=nTotal-nIndex+1;
return nLastIndex%nMul==nAdd
}};
var getExpression=function(sBody){var oRet={defines:"",returns:"true"};
var sBody=restoreKeys(sBody,true);
var aExprs=[];
var aDefineCode=[],aReturnCode=[];
var sId,sTagName;
var sBody=sBody.replace(/:([\w-]+)(\(([^)]*)\))?/g,function(_,sType,_,sOption){switch(sType){case"not":var oInner=getExpression(sOption);
var sFuncDefines=oInner.defines;
var sFuncReturns=oInner.returnsID+oInner.returnsTAG+oInner.returns;
aReturnCode.push("!(function() { "+sFuncDefines+" return "+sFuncReturns+" })()");
break;
case"nth-child":case"nth-last-child":sOption=restoreString(sOption);
if(sOption=="even"){sOption="2n"
}else{if(sOption=="odd"){sOption="2n+1"
}}var nMul,nAdd;
if(/([0-9]*)n([+-][0-9]+)*/.test(sOption)){nMul=parseInt(RegExp.$1)||1;
nAdd=parseInt(RegExp.$2)||0
}else{nMul=Infinity;
nAdd=parseInt(sOption)
}aReturnCode.push("oPseudoes_dontShrink["+wrapQuot(sType)+"](oEl, "+nMul+", "+nAdd+")");
break;
case"first-of-type":case"last-of-type":sType=(sType=="first-of-type"?"nth-of-type":"nth-last-of-type");
sOption=1;
case"nth-of-type":case"nth-last-of-type":sOption=restoreString(sOption);
if(sOption=="even"){sOption="2n"
}else{if(sOption=="odd"){sOption="2n+1"
}}var nMul,nAdd;
if(/([0-9]*)n([+-][0-9]+)*/.test(sOption)){nMul=parseInt(RegExp.$1)||1;
nAdd=parseInt(RegExp.$2)||0
}else{nMul=Infinity;
nAdd=parseInt(sOption)
}oRet.nth=[nMul,nAdd,sType];
break;
default:sOption=sOption?restoreString(sOption):"";
aReturnCode.push("oPseudoes_dontShrink["+wrapQuot(sType)+"](oEl, "+wrapQuot(sOption)+")");
break
}return""
});
var sBody=sBody.replace(/\[(@?[\w-]+)(([!^~$*]?=)([^\]]*))?\]/g,function(_,sKey,_,sOp,sVal){sKey=restoreString(sKey);
sVal=restoreString(sVal);
if(sKey=="checked"||sKey=="disabled"||sKey=="enabled"||sKey=="readonly"||sKey=="selected"){if(!sVal){sOp="=";
sVal="true"
}}aExprs.push({key:sKey,op:sOp,val:sVal});
return""
});
var sClassName=null;
var sBody=sBody.replace(/\.([\w-]+)/g,function(_,sClass){aExprs.push({key:"class",op:"~=",val:sClass});
if(!sClassName){sClassName=sClass
}return""
});
var sBody=sBody.replace(/#([\w-]+)/g,function(_,sIdValue){if(bXMLDocument){aExprs.push({key:"id",op:"=",val:sIdValue})
}else{sId=sIdValue
}return""
});
sTagName=sBody=="*"?"":sBody;
var oVars={};
for(var i=0,oExpr;
oExpr=aExprs[i];
i++){var sKey=oExpr.key;
if(!oVars[sKey]){aDefineCode.push(getDefineCode(sKey))
}aReturnCode.unshift(getReturnCode(oExpr));
oVars[sKey]=true
}if(aDefineCode.length){oRet.defines="var "+aDefineCode.join(",")+";"
}if(aReturnCode.length){oRet.returns=aReturnCode.join("&&")
}oRet.quotID=sId?wrapQuot(sId):"";
oRet.quotTAG=sTagName?wrapQuot(bXMLDocument?sTagName:sTagName.toUpperCase()):"";
if(bSupportByClassName){oRet.quotCLASS=sClassName?wrapQuot(sClassName):""
}oRet.returnsID=sId?"oEl.id == "+oRet.quotID+" && ":"";
oRet.returnsTAG=sTagName&&sTagName!="*"?"oEl.tagName == "+oRet.quotTAG+" && ":"";
return oRet
};
var splitToParts=function(sQuery){var aParts=[];
var sRel=" ";
var sBody=sQuery.replace(/(.*?)\s*(!?[+>~ ]|!)\s*/g,function(_,sBody,sRelative){if(sBody){aParts.push({rel:sRel,body:sBody})
}sRel=sRelative.replace(/\s+$/g,"")||" ";
return""
});
if(sBody){aParts.push({rel:sRel,body:sBody})
}return aParts
};
var isNth_dontShrink=function(oEl,sTagName,nMul,nAdd,sDirection){var nIndex=0;
for(var oSib=oEl;
oSib;
oSib=oSib[sDirection]){if(oSib.nodeType==1&&(!sTagName||sTagName==oSib.tagName)){nIndex++
}}return nIndex%nMul==nAdd
};
var compileParts=function(aParts){var aPartExprs=[];
for(var i=0,oPart;
oPart=aParts[i];
i++){aPartExprs.push(getExpression(oPart.body))
}var sFunc="";
var sPushCode="aRet.push(oEl); if (oOptions.single) { bStop = true; }";
for(var i=aParts.length-1,oPart;
oPart=aParts[i];
i--){var oExpr=aPartExprs[i];
var sPush=(debugOption.callback?"cost++;":"")+oExpr.defines;
var sReturn="if (bStop) {"+(i==0?"return aRet;":"return;")+"}";
if(oExpr.returns=="true"){sPush+=(sFunc?sFunc+"(oEl);":sPushCode)+sReturn
}else{sPush+="if ("+oExpr.returns+") {"+(sFunc?sFunc+"(oEl);":sPushCode)+sReturn+"}"
}var sCheckTag="oEl.nodeType != 1";
if(oExpr.quotTAG){sCheckTag="oEl.tagName != "+oExpr.quotTAG
}var sTmpFunc="(function(oBase"+(i==0?", oOptions) { var bStop = false; var aRet = [];":") {");
if(oExpr.nth){sPush="if (isNth_dontShrink(oEl, "+(oExpr.quotTAG?oExpr.quotTAG:"false")+","+oExpr.nth[0]+","+oExpr.nth[1]+',"'+(oExpr.nth[2]=="nth-of-type"?"previousSibling":"nextSibling")+'")) {'+sPush+"}"
}switch(oPart.rel){case" ":if(oExpr.quotID){sTmpFunc+="var oEl = oDocument_dontShrink.getElementById("+oExpr.quotID+");var oCandi = oEl;for (; oCandi; oCandi = (oCandi.parentNode || oCandi._IE5_parentNode)) {if (oCandi == oBase) break;}if (!oCandi || "+sCheckTag+") return aRet;"+sPush
}else{sTmpFunc+="var aCandi = getChilds_dontShrink(oBase, "+(oExpr.quotTAG||'"*"')+", "+(oExpr.quotCLASS||"null")+");for (var i = 0, oEl; oEl = aCandi[i]; i++) {"+(oExpr.quotCLASS?"if ("+sCheckTag+") continue;":"")+sPush+"}"
}break;
case">":if(oExpr.quotID){sTmpFunc+="var oEl = oDocument_dontShrink.getElementById("+oExpr.quotID+");if ((oEl.parentNode || oEl._IE5_parentNode) != oBase || "+sCheckTag+") return aRet;"+sPush
}else{sTmpFunc+="for (var oEl = oBase.firstChild; oEl; oEl = oEl.nextSibling) {if ("+sCheckTag+") { continue; }"+sPush+"}"
}break;
case"+":if(oExpr.quotID){sTmpFunc+="var oEl = oDocument_dontShrink.getElementById("+oExpr.quotID+");var oPrev;for (oPrev = oEl.previousSibling; oPrev; oPrev = oPrev.previousSibling) { if (oPrev.nodeType == 1) break; }if (!oPrev || oPrev != oBase || "+sCheckTag+") return aRet;"+sPush
}else{sTmpFunc+="for (var oEl = oBase.nextSibling; oEl; oEl = oEl.nextSibling) { if (oEl.nodeType == 1) break; }if (!oEl || "+sCheckTag+") { return aRet; }"+sPush
}break;
case"~":if(oExpr.quotID){sTmpFunc+="var oEl = oDocument_dontShrink.getElementById("+oExpr.quotID+");var oCandi = oEl;for (; oCandi; oCandi = oCandi.previousSibling) { if (oCandi == oBase) break; }if (!oCandi || "+sCheckTag+") return aRet;"+sPush
}else{sTmpFunc+="for (var oEl = oBase.nextSibling; oEl; oEl = oEl.nextSibling) {if ("+sCheckTag+") { continue; }if (!markElement_dontShrink(oEl, "+i+")) { break; }"+sPush+"}"
}break;
case"!":if(oExpr.quotID){sTmpFunc+="var oEl = oDocument_dontShrink.getElementById("+oExpr.quotID+");for (; oBase; oBase = (oBase.parentNode || oBase._IE5_parentNode)) { if (oBase == oEl) break; }if (!oBase || "+sCheckTag+") return aRet;"+sPush
}else{sTmpFunc+="for (var oEl = (oBase.parentNode || oBase._IE5_parentNode); oEl; oEl = (oEl.parentNode || oEl._IE5_parentNode)) {if ("+sCheckTag+") { continue; }"+sPush+"}"
}break;
case"!>":if(oExpr.quotID){sTmpFunc+="var oEl = oDocument_dontShrink.getElementById("+oExpr.quotID+");var oRel = (oBase.parentNode || oBase._IE5_parentNode);if (!oRel || oEl != oRel || ("+sCheckTag+")) return aRet;"+sPush
}else{sTmpFunc+="var oEl = (oBase.parentNode || oBase._IE5_parentNode);if (!oEl || "+sCheckTag+") { return aRet; }"+sPush
}break;
case"!+":if(oExpr.quotID){sTmpFunc+="var oEl = oDocument_dontShrink.getElementById("+oExpr.quotID+");var oRel;for (oRel = oBase.previousSibling; oRel; oRel = oRel.previousSibling) { if (oRel.nodeType == 1) break; }if (!oRel || oEl != oRel || ("+sCheckTag+")) return aRet;"+sPush
}else{sTmpFunc+="for (oEl = oBase.previousSibling; oEl; oEl = oEl.previousSibling) { if (oEl.nodeType == 1) break; }if (!oEl || "+sCheckTag+") { return aRet; }"+sPush
}break;
case"!~":if(oExpr.quotID){sTmpFunc+="var oEl = oDocument_dontShrink.getElementById("+oExpr.quotID+");var oRel;for (oRel = oBase.previousSibling; oRel; oRel = oRel.previousSibling) { if (oRel.nodeType != 1) { continue; }if (oRel == oEl) { break; }}if (!oRel || ("+sCheckTag+")) return aRet;"+sPush
}else{sTmpFunc+="for (oEl = oBase.previousSibling; oEl; oEl = oEl.previousSibling) {if ("+sCheckTag+") { continue; }if (!markElement_dontShrink(oEl, "+i+")) { break; }"+sPush+"}"
}break
}sTmpFunc+=(i==0?"return aRet;":"")+"})";
sFunc=sTmpFunc
}eval("var fpCompiled = "+sFunc+";");
return fpCompiled
};
var parseQuery=function(sQuery){var sCacheKey=sQuery;
var fpSelf=arguments.callee;
var fpFunction=fpSelf._cache[sCacheKey];
if(!fpFunction){sQuery=backupKeys(sQuery);
var aParts=splitToParts(sQuery);
fpFunction=fpSelf._cache[sCacheKey]=compileParts(aParts);
fpFunction.depth=aParts.length
}return fpFunction
};
parseQuery._cache={};
var parseTestQuery=function(sQuery){var fpSelf=arguments.callee;
var aSplitQuery=backupKeys(sQuery).split(/\s*,\s*/);
var aResult=[];
var nLen=aSplitQuery.length;
var aFunc=[];
for(var i=0;
i<nLen;
i++){aFunc.push((function(sQuery){var sCacheKey=sQuery;
var fpFunction=fpSelf._cache[sCacheKey];
if(!fpFunction){sQuery=backupKeys(sQuery);
var oExpr=getExpression(sQuery);
eval("fpFunction = function(oEl) { "+oExpr.defines+"return ("+oExpr.returnsID+oExpr.returnsTAG+oExpr.returns+"); };")
}return fpFunction
})(restoreKeys(aSplitQuery[i])))
}return aFunc
};
parseTestQuery._cache={};
var distinct=function(aList){var aDistinct=[];
var oDummy={};
for(var i=0,oEl;
oEl=aList[i];
i++){var nUID=getUID(oEl);
if(oDummy[nUID]){continue
}aDistinct.push(oEl);
oDummy[nUID]=true
}return aDistinct
};
var markElement_dontShrink=function(oEl,nDepth){var nUID=getUID(oEl);
if(cssquery._marked[nDepth][nUID]){return false
}cssquery._marked[nDepth][nUID]=true;
return true
};
var oResultCache=null;
var bUseResultCache=false;
var cssquery=function(sQuery,oParent,oOptions){if(typeof sQuery=="object"){var oResult={};
for(var k in sQuery){oResult[k]=arguments.callee(sQuery[k],oParent,oOptions)
}return oResult
}cost=0;
var executeTime=new Date().getTime();
var aRet;
for(var r=0,rp=debugOption.repeat;
r<rp;
r++){aRet=(function(sQuery,oParent,oOptions){oOptions=oOptions||{};
if(!oParent){oParent=document
}oDocument_dontShrink=oParent.ownerDocument||oParent.document||oParent;
if(/\bMSIE\s([0-9]+(\.[0-9]+)*);/.test(navigator.userAgent)&&parseFloat(RegExp.$1)<6){try{oDocument_dontShrink.location
}catch(e){oDocument_dontShrink=document
}oDocument_dontShrink.firstChild=oDocument_dontShrink.getElementsByTagName("html")[0];
oDocument_dontShrink.firstChild._IE5_parentNode=oDocument_dontShrink
}bXMLDocument=(typeof XMLDocument!="undefined")?(oDocument_dontShrink.constructor===XMLDocument):(!oDocument_dontShrink.location);
getUID=bXMLDocument?getUID4XML:getUID4HTML;
clearKeys();
var aSplitQuery=backupKeys(sQuery).split(/\s*,\s*/);
var aResult=[];
var nLen=aSplitQuery.length;
for(var i=0;
i<nLen;
i++){aSplitQuery[i]=restoreKeys(aSplitQuery[i])
}for(var i=0;
i<nLen;
i++){var sSingleQuery=aSplitQuery[i];
var aSingleQueryResult=null;
var sResultCacheKey=sSingleQuery+(oOptions.single?"_single":"");
var aCache=bUseResultCache?oResultCache[sResultCacheKey]:null;
if(aCache){for(var j=0,oCache;
oCache=aCache[j];
j++){if(oCache.parent==oParent){aSingleQueryResult=oCache.result;
break
}}}if(!aSingleQueryResult){var fpFunction=parseQuery(sSingleQuery);
cssquery._marked=[];
for(var j=0,nDepth=fpFunction.depth;
j<nDepth;
j++){cssquery._marked.push({})
}aSingleQueryResult=distinct(fpFunction(oParent,oOptions));
if(bUseResultCache){if(!(oResultCache[sResultCacheKey] instanceof Array)){oResultCache[sResultCacheKey]=[]
}oResultCache[sResultCacheKey].push({parent:oParent,result:aSingleQueryResult})
}}aResult=aResult.concat(aSingleQueryResult)
}unsetNodeIndexes();
return aResult
})(sQuery,oParent,oOptions)
}executeTime=new Date().getTime()-executeTime;
if(debugOption.callback){debugOption.callback(sQuery,cost,executeTime)
}return aRet
};
cssquery.test=function(oEl,sQuery){clearKeys();
var aFunc=parseTestQuery(sQuery);
for(var i=0,nLen=aFunc.length;
i<nLen;
i++){if(aFunc[i](oEl)){return true
}}return false
};
cssquery.useCache=function(bFlag){if(typeof bFlag!="undefined"){bUseResultCache=bFlag;
cssquery.clearCache()
}return bUseResultCache
};
cssquery.clearCache=function(){oResultCache={}
};
cssquery.getSingle=function(sQuery,oParent){return cssquery(sQuery,oParent,{single:true})[0]||null
};
cssquery.xpath=function(sXPath,oParent){var sXPath=sXPath.replace(/\/(\w+)(\[([0-9]+)\])?/g,function(_,sTag,_,sTh){sTh=sTh||"1";
return">"+sTag+":nth-of-type("+sTh+")"
});
return cssquery(sXPath,oParent)
};
cssquery.debug=function(fpCallback,nRepeat){debugOption.callback=fpCallback;
debugOption.repeat=nRepeat||1
};
cssquery.safeHTML=function(bFlag){var bIE=/MSIE/.test(window.navigator.userAgent);
if(arguments.length>0){safeHTML=bFlag&&bIE
}return safeHTML||!bIE
};
cssquery.version=sVersion;
return cssquery
})();
jindo.$Agent=function(){var cl=arguments.callee;
var cc=cl._cached;
if(cc){return cc
}if(!(this instanceof cl)){return new cl
}if(!cc){cl._cached=this
}};
jindo.$Agent.prototype.navigator=function(){var info=new Object;
var ver=-1;
var u=navigator.userAgent;
var v=navigator.vendor||"";
function f(s,h){return((h||"").indexOf(s)>-1)
}info.getName=function(){var name="";
for(x in info){if(typeof info[x]=="boolean"&&info[x]){name=x
}}return name
};
info.opera=(typeof window.opera!="undefined")||f("Opera",u);
info.ie=!info.opera&&f("MSIE",u);
info.chrome=f("Chrome",u);
info.safari=!info.chrome&&f("Apple",v);
info.firefox=f("Firefox",u);
info.mozilla=f("Gecko",u)&&!info.safari&&!info.chrome&&!info.firefox;
info.camino=f("Camino",v);
info.netscape=f("Netscape",u);
info.omniweb=f("OmniWeb",u);
info.icab=f("iCab",v);
info.konqueror=f("KDE",v);
try{if(info.ie){ver=u.match(/(?:MSIE) ([0-9.]+)/)[1]
}else{if(info.firefox||info.opera||info.omniweb){ver=u.match(/(?:Firefox|Opera|OmniWeb)\/([0-9.]+)/)[1]
}else{if(info.mozilla){ver=u.match(/rv:([0-9.]+)/)[1]
}else{if(info.safari){ver=parseFloat(u.match(/Safari\/([0-9.]+)/)[1]);
if(ver==100){ver=1.1
}else{ver=[1,1.2,-1,1.3,2,3][Math.floor(ver/100)]
}}else{if(info.icab){ver=u.match(/iCab[ \/]([0-9.]+)/)[1]
}else{if(info.chrome){ver=u.match(/Chrome[ \/]([0-9.]+)/)[1]
}}}}}}info.version=parseFloat(ver);
if(isNaN(info.version)){info.version=-1
}}catch(e){info.version=-1
}jindo.$Agent.prototype.navigator=function(){return info
};
return info
};
jindo.$Agent.prototype.os=function(){var info=new Object;
var u=navigator.userAgent;
var p=navigator.platform;
var f=function(s,h){return(h.indexOf(s)>-1)
};
info.getName=function(){var name="";
for(x in info){if(typeof info[x]=="boolean"&&info[x]){name=x
}}return name
};
info.win=f("Win",p);
info.mac=f("Mac",p);
info.linux=f("Linux",p);
info.win2000=info.win&&(f("NT 5.0",p)||f("2000",p));
info.winxp=info.win&&(f("NT 5.1",p)||f("Win32",p));
info.xpsp2=info.winxp&&(f("SV1",u)||f("MSIE 7",u));
info.vista=f("NT 6.0",p);
info.win7=f("NT 6.1",p);
jindo.$Agent.prototype.os=function(){return info
};
return info
};
jindo.$Agent.prototype.flash=function(){var info=new Object;
var p=navigator.plugins;
var m=navigator.mimeTypes;
var f=null;
info.installed=false;
info.version=-1;
if(typeof p!="undefined"&&p.length){f=p["Shockwave Flash"];
if(f){info.installed=true;
if(f.description){info.version=parseFloat(f.description.match(/[0-9.]+/)[0])
}}if(p["Shockwave Flash 2.0"]){info.installed=true;
info.version=2
}}else{if(typeof m!="undefined"&&m.length){f=m["application/x-shockwave-flash"];
info.installed=(f&&f.enabledPlugin)
}else{for(var i=10;
i>1;
i--){try{f=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+i);
info.installed=true;
info.version=i;
break
}catch(e){}}}}jindo.$Agent.prototype.flash=function(){return info
};
jindo.$Agent.prototype.info=jindo.$Agent.prototype.flash;
return info
};
jindo.$Agent.prototype.silverlight=function(){var info=new Object;
var p=navigator.plugins;
var s=null;
info.installed=false;
info.version=-1;
if(typeof p!="undefined"&&p.length){s=p["Silverlight Plug-In"];
if(s){info.installed=true;
info.version=parseInt(s.description.split(".")[0]);
if(s.description=="1.0.30226.2"){info.version=2
}}}else{try{s=new ActiveXObject("AgControl.AgControl");
info.installed=true;
if(s.isVersionSupported("2.0")){info.version=2
}else{if(s.isVersionSupported("1.0")){info.version=1
}}}catch(e){}}jindo.$Agent.prototype.silverlight=function(){return info
};
return info
};
jindo.$A=function(array){var cl=arguments.callee;
if(typeof array=="undefined"){array=[]
}if(array instanceof cl){return array
}if(!(this instanceof cl)){return new cl(array)
}this._array=[];
for(var i=0;
i<array.length;
i++){this._array[this._array.length]=array[i]
}};
jindo.$A.prototype.toString=function(){return this._array.toString()
};
jindo.$A.prototype.length=function(nLen,oValue){if(typeof nLen=="number"){var l=this._array.length;
this._array.length=nLen;
if(typeof oValue!="undefined"){for(var i=l;
i<nLen;
i++){this._array[i]=oValue
}}return this
}else{return this._array.length
}};
jindo.$A.prototype.has=function(oValue){return(this.indexOf(oValue)>-1)
};
jindo.$A.prototype.indexOf=function(oValue){if(typeof this._array.indexOf!="undefined"){return this._array.indexOf(oValue)
}for(var i=0;
i<this._array.length;
i++){if(this._array[i]==oValue){return i
}}return -1
};
jindo.$A.prototype.$value=function(){return this._array
};
jindo.$A.prototype.push=function(oValue1){return this._array.push.apply(this._array,jindo.$A(arguments).$value())
};
jindo.$A.prototype.pop=function(){return this._array.pop()
};
jindo.$A.prototype.shift=function(){return this._array.shift()
};
jindo.$A.prototype.unshift=function(oValue1){this._array.unshift.apply(this._array,jindo.$A(arguments).$value());
return this._array.length
};
jindo.$A.prototype.forEach=function(fCallback,oThis){var arr=this._array;
var errBreak=this.constructor.Break;
var errContinue=this.constructor.Continue;
function f(v,i,a){try{fCallback.call(oThis,v,i,a)
}catch(e){if(!(e instanceof errContinue)){throw e
}}}if(typeof this._array.forEach=="function"){try{this._array.forEach(f)
}catch(e){if(!(e instanceof errBreak)){throw e
}}return this
}for(var i=0;
i<arr.length;
i++){try{f(arr[i],i,arr)
}catch(e){if(e instanceof errBreak){break
}throw e
}}return this
};
jindo.$A.prototype.map=function(fCallback,oThis){var arr=this._array;
var errBreak=this.constructor.Break;
var errContinue=this.constructor.Continue;
function f(v,i,a){try{return fCallback.call(oThis,v,i,a)
}catch(e){if(e instanceof errContinue){return v
}else{throw e
}}}if(typeof this._array.map=="function"){try{this._array=this._array.map(f)
}catch(e){if(!(e instanceof errBreak)){throw e
}}return this
}for(var i=0;
i<this._array.length;
i++){try{arr[i]=f(arr[i],i,arr)
}catch(e){if(e instanceof errBreak){break
}throw e
}}return this
};
jindo.$A.prototype.filter=function(fCallback,oThis){var ar=new Array;
this.forEach(function(v,i,a){if(fCallback.call(oThis,v,i,a)===true){ar[ar.length]=v
}});
return jindo.$A(ar)
};
jindo.$A.prototype.every=function(fCallback,oThis){if(typeof this._array.every!="undefined"){return this._array.every(fCallback,oThis)
}var result=true;
this.forEach(function(v,i,a){if(fCallback.call(oThis,v,i,a)===false){result=false;
jindo.$A.Break()
}});
return result
};
jindo.$A.prototype.some=function(fCallback,oThis){if(typeof this._array.some!="undefined"){return this._array.some(fCallback,oThis)
}var result=false;
this.forEach(function(v,i,a){if(fCallback.call(oThis,v,i,a)===true){result=true;
jindo.$A.Break()
}});
return result
};
jindo.$A.prototype.refuse=function(oValue1){var a=jindo.$A(arguments);
return this.filter(function(v,i){return !a.has(v)
})
};
jindo.$A.prototype.slice=function(nStart,nEnd){var a=this._array.slice.call(this._array,nStart,nEnd);
return jindo.$A(a)
};
jindo.$A.prototype.splice=function(nIndex,nHowMany){var a=this._array.splice.apply(this._array,arguments);
return jindo.$A(a)
};
jindo.$A.prototype.shuffle=function(){this._array.sort(function(a,b){return Math.random()>Math.random()?1:-1
});
return this
};
jindo.$A.prototype.unique=function(){var a=this._array,b=[],l=a.length;
var i,j;
for(i=0;
i<l;
i++){for(j=0;
j<b.length;
j++){if(a[i]==b[j]){break
}}if(j>=b.length){b[j]=a[i]
}}this._array=b;
return this
};
jindo.$A.prototype.reverse=function(){this._array.reverse();
return this
};
jindo.$A.prototype.empty=function(){return this.length(0)
};
jindo.$A.Break=function(){if(!(this instanceof arguments.callee)){throw new arguments.callee
}};
jindo.$A.Continue=function(){if(!(this instanceof arguments.callee)){throw new arguments.callee
}};
jindo.$Ajax=function(url,option){var cl=arguments.callee;
if(!(this instanceof cl)){return new cl(url,option)
}function _getXHR(){if(window.XMLHttpRequest){return new XMLHttpRequest()
}else{if(ActiveXObject){try{return new ActiveXObject("MSXML2.XMLHTTP")
}catch(e){return new ActiveXObject("Microsoft.XMLHTTP")
}return null
}}}var loc=location.toString();
var domain="";
try{domain=loc.match(/^https?:\/\/([a-z0-9_\-\.]+)/i)[1]
}catch(e){}this._status=0;
this._url=url;
this._options=new Object;
this._headers=new Object;
this._options={type:"xhr",method:"post",proxy:"",timeout:0,onload:function(req){},onerror:null,ontimeout:function(req){},jsonp_charset:"utf-8",callbackid:"",sendheader:true};
this.option(option);
var _opt=this._options;
_opt.type=_opt.type.toLowerCase();
_opt.method=_opt.method.toLowerCase();
if(typeof window.__jindo2_callback=="undefined"){window.__jindo2_callback=new Array()
}switch(_opt.type){case"get":case"post":_opt.method=_opt.type;
_opt.type="xhr";
case"xhr":this._request=_getXHR();
break;
case"flash":this._request=new jindo.$Ajax.SWFRequest();
break;
case"jsonp":_opt.method="get";
this._request=new jindo.$Ajax.JSONPRequest();
this._request.charset=_opt.jsonp_charset;
this._request.callbackid=_opt.callbackid;
break;
case"iframe":this._request=new jindo.$Ajax.FrameRequest();
this._request._proxy=_opt.proxy;
break
}};
jindo.$Ajax.prototype._onload=function(){try{if(this._request.readyState==4){if(this._request.status!=200&&typeof this._options.onerror=="function"){this._options.onerror(jindo.$Ajax.Response(this._request))
}else{this._options.onload(jindo.$Ajax.Response(this._request))
}}}finally{this._status--
}};
jindo.$Ajax.prototype.request=function(oData){this._status++;
var t=this;
var req=this._request;
var opt=this._options;
var data,v,a=[],data="";
var _timer=null;
if(typeof oData=="undefined"||!oData){data=null
}else{for(var k in oData){v=oData[k];
if(typeof v=="function"){v=v()
}if(v instanceof Array||v instanceof jindo.$A){$A(v).forEach(function(value,index,array){a[a.length]=k+"="+encodeURIComponent(value)
})
}else{a[a.length]=k+"="+encodeURIComponent(v)
}}data=a.join("&")
}req.open(opt.method.toUpperCase(),this._url,true);
if(opt.sendheader){req.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8");
req.setRequestHeader("charset","utf-8");
for(var x in this._headers){if(typeof this._headers[x]=="function"){continue
}req.setRequestHeader(x,String(this._headers[x]))
}}if(typeof req.onload!="undefined"){req.onload=function(rq){clearTimeout(_timer);
t._onload(rq)
}
}else{req.onreadystatechange=function(rq){clearTimeout(_timer);
t._onload(rq)
}
}if(opt.timeout>0){_timer=setTimeout(function(){try{req.abort()
}catch(e){}opt.ontimeout(req)
},opt.timeout*1000)
}req.send(data);
return this
};
jindo.$Ajax.prototype.isIdle=function(){return this._status==0
};
jindo.$Ajax.prototype.abort=function(){try{this._request.abort()
}finally{this._status--
}return this
};
jindo.$Ajax.prototype.option=function(name,value){if(typeof name=="undefined"){return""
}if(typeof name=="string"){if(typeof value=="undefined"){return this._options[name]
}this._options[name]=value;
return this
}try{for(var x in name){this._options[x]=name[x]
}}catch(e){}return this
};
jindo.$Ajax.prototype.header=function(name,value){if(typeof name=="undefined"){return""
}if(typeof name=="string"){if(typeof value=="undefined"){return this._headers[name]
}this._headers[name]=value;
return this
}try{for(var x in name){this._headers[x]=name[x]
}}catch(e){}return this
};
jindo.$Ajax.Response=function(req){if(this===jindo.$Ajax){return new jindo.$Ajax.Response(req)
}this._response=req
};
jindo.$Ajax.Response.prototype.xml=function(){return this._response.responseXML
};
jindo.$Ajax.Response.prototype.text=function(){return this._response.responseText
};
jindo.$Ajax.Response.prototype.status=function(){return this._response.status
};
jindo.$Ajax.Response.prototype.readyState=function(){return this._response.readyState
};
jindo.$Ajax.Response.prototype.json=function(){if(this._response.responseJSON){return this._response.responseJSON
}else{if(this._response.responseText){try{return new Function("return "+this._response.responseText)()
}catch(e){return{}
}}}return{}
};
jindo.$Ajax.Response.prototype.header=function(name){if(typeof name=="string"){return this._response.getResponseHeader(name)
}return this._response.getAllResponseHeaders()
};
jindo.$Ajax.RequestBase=jindo.$Class({_headers:{},_respHeaders:{},_respHeaderString:"",callbackid:"",responseXML:null,responseJSON:null,responseText:"",status:404,readyState:0,$init:function(){},onload:function(){},abort:function(){},open:function(){},send:function(){},setRequestHeader:function(sName,sValue){this._headers[sName]=sValue
},getResponseHeader:function(sName){return this._respHeaders[sName]||""
},getAllResponseHeaders:function(){return this._respHeaderString
},_getCallbackInfo:function(){var id="";
if(this.callbackid!=""){var idx=0;
do{id="$"+this.callbackid+"_"+idx;
idx++
}while(window.__jindo2_callback[id])
}else{do{id="$"+Math.floor(Math.random()*10000)
}while(window.__jindo2_callback[id])
}return{id:id,name:"window.__jindo2_callback."+id}
}});
jindo.$Ajax.JSONPRequest=jindo.$Class({charset:"utf-8",_script:null,_onerror:null,_callback:function(data){if(this._onerror){clearTimeout(this._onerror);
this._onerror=null
}var self=this;
this.responseJSON=data;
this.onload(this);
setTimeout(function(){self.abort()
},10)
},abort:function(){if(this._script){try{this._script.parentNode.removeChild(this._script)
}catch(e){}}},open:function(method,url){this.responseJSON=null;
this._url=url
},send:function(data){var t=this;
var info=this._getCallbackInfo();
var head=document.getElementsByTagName("head")[0];
this._script=jindo.$("<script>");
this._script.type="text/javascript";
this._script.charset=this.charset;
if(head){head.appendChild(this._script)
}else{if(document.body){document.body.appendChild(this._script)
}}window.__jindo2_callback[info.id]=function(data){try{t.readyState=4;
t.status=200;
t._callback(data)
}finally{delete window.__jindo2_callback[info.id]
}};
var agent=jindo.$Agent();
if(agent.navigator().ie||agent.navigator().opera){this._script.onreadystatechange=function(){if(this.readyState=="loaded"){if(!t.responseJSON){t.readyState=4;
t.status=500;
t._onerror=setTimeout(function(){t._callback(null)
},200)
}this.onreadystatechange=null
}}
}else{this._script.onload=function(){if(!t.responseJSON){t.readyState=4;
t.status=500;
t._onerror=setTimeout(function(){t._callback(null)
},200)
}this.onload=null;
this.onerror=null
};
this._script.onerror=function(){if(!t.responseJSON){t.readyState=4;
t.status=404;
t._onerror=setTimeout(function(){t._callback(null)
},200)
}this.onerror=null;
this.onload=null
}
}this._script.src=this._url+"?_callback="+info.name+"&"+data
}}).extend(jindo.$Ajax.RequestBase);
jindo.$Ajax.SWFRequest=jindo.$Class({_callback:function(status,data,headers){this.readyState=4;
if((typeof status).toLowerCase()=="number"){this.status=status
}else{if(status==true){this.status=200
}}if(this.status==200){if(typeof data=="string"){try{this.responseText=decodeURIComponent(data)
}catch(e){}}if(typeof headers=="object"){this._respHeaders=headers
}}this.onload(this)
},open:function(method,url){var re=/https?:\/\/([a-z0-9_\-\.]+)/i;
this._url=url;
this._method=method
},send:function(data){this.responseXML=false;
this.responseText="";
var t=this;
var dat={};
var info=this._getCallbackInfo();
var swf=window.document[jindo.$Ajax.SWFRequest._tmpId];
function f(arg){switch(typeof arg){case"string":return'"'+arg.replace(/\"/g,'\\"')+'"';
break;
case"number":return arg;
break;
case"object":var ret="",arr=[];
if(arg instanceof Array){for(var i=0;
i<arg.length;
i++){arr[i]=f(arg[i])
}ret="["+arr.join(",")+"]"
}else{for(var x in arg){arr[arr.length]=f(x)+":"+f(arg[x])
}ret="{"+arr.join(",")+"}"
}return ret;
default:return'""'
}}data=(data||"").split("&");
for(var i=0;
i<data.length;
i++){pos=data[i].indexOf("=");
key=data[i].substring(0,pos);
val=data[i].substring(pos+1);
dat[key]=decodeURIComponent(val)
}window.__jindo2_callback[info.id]=function(success,data){try{t._callback(success,data)
}finally{delete window.__jindo2_callback[info.id]
}};
var oData={url:this._url,type:this._method,data:dat,charset:"UTF-8",callback:info.name,header_json:this._headers};
swf.requestViaFlash(f(oData))
}}).extend(jindo.$Ajax.RequestBase);
jindo.$Ajax.SWFRequest.write=function(swf_path){if(typeof swf_path=="undefined"){swf_path="./ajax.swf"
}jindo.$Ajax.SWFRequest._tmpId="tmpSwf"+(new Date).getMilliseconds()+Math.floor(Math.random()*100000);
document.write('<div style="position:absolute;top:-1000px;left:-1000px"><object id="'+jindo.$Ajax.SWFRequest._tmpId+'" width="1" height="1" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0"><param name="movie" value="'+swf_path+'"><param name = "allowScriptAccess" value = "always" /><embed name="'+jindo.$Ajax.SWFRequest._tmpId+'" src="'+swf_path+'" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" width="1" height="1" allowScriptAccess="always" swLiveConnect="true"></embed></object></div>')
};
jindo.$Ajax.FrameRequest=jindo.$Class({_frame:null,_proxy:"",_domain:"",_callback:function(id,data,header){var self=this;
this.readyState=4;
this.status=200;
this.responseText=data;
this._respHeaderString=header;
header.replace(/^([\w\-]+)\s*:\s*(.+)$/m,function($0,$1,$2){self._respHeaders[$1]=$2
});
this.onload(this);
setTimeout(function(){self.abort()
},10)
},abort:function(){if(this._frame){try{this._frame.parentNode.removeChild(this._frame)
}catch(e){}}},open:function(method,url){var re=/https?:\/\/([a-z0-9_\-\.]+)/i;
var dom=document.location.toString().match(re);
this._method=method;
this._url=url;
this._remote=String(url).match(/(https?:\/\/[a-z0-9_\-\.]+)(:[0-9]+)?/i)[0];
this._frame=null;
this._domain=(dom[1]!=document.domain)?document.domain:""
},send:function(data){this.responseXML="";
this.responseText="";
var t=this;
var re=/https?:\/\/([a-z0-9_\-\.]+)/i;
var info=this._getCallbackInfo();
var url=this._remote+"/ajax_remote_callback.html?method="+this._method;
var header=new Array;
window.__jindo2_callback[info.id]=function(id,data,header){try{t._callback(id,data,header)
}finally{delete window.__jindo2_callback[info.id]
}};
for(var x in this._headers){header[header.length]="'"+x+"':'"+this._headers[x]+"'"
}header="{"+header.join(",")+"}";
url+="&id="+info.id;
url+="&header="+encodeURIComponent(header);
url+="&proxy="+encodeURIComponent(this._proxy);
url+="&domain="+this._domain;
url+="&url="+encodeURIComponent(this._url.replace(re,""));
url+="#"+encodeURIComponent(data);
var fr=this._frame=jindo.$("<iframe>");
fr.style.position="absolute";
fr.style.visibility="hidden";
fr.style.width="1px";
fr.style.height="1px";
var body=document.body||document.documentElement;
if(body.firstChild){body.insertBefore(fr,body.firstChild)
}else{body.appendChild(fr)
}fr.src=url
}}).extend(jindo.$Ajax.RequestBase);
jindo.$H=function(hashObject){var cl=arguments.callee;
if(typeof hashObject=="undefined"){hashObject=new Object
}if(hashObject instanceof cl){return hashObject
}if(!(this instanceof cl)){return new cl(hashObject)
}this._table={};
for(var k in hashObject){if(this._table[k]==hashObject[k]){continue
}this._table[k]=hashObject[k]
}};
jindo.$H.prototype.$value=function(){return this._table
};
jindo.$H.prototype.$=function(key,value){if(typeof value=="undefined"){return this._table[key]
}this._table[key]=value;
return this
};
jindo.$H.prototype.length=function(){var i=0;
for(var k in this._table){if(typeof Object.prototype[k]!="undeifned"&&Object.prototype[k]===this._table[k]){continue
}i++
}return i
};
jindo.$H.prototype.forEach=function(callback,thisObject){var t=this._table;
var h=this.constructor;
for(var k in t){if(!t.propertyIsEnumerable(k)){continue
}try{callback.call(thisObject,t[k],k,t)
}catch(e){if(e instanceof h.Break){break
}if(e instanceof h.Continue){continue
}throw e
}}return this
};
jindo.$H.prototype.filter=function(callback,thisObject){var h=jindo.$H();
this.forEach(function(v,k,o){if(callback.call(thisObject,v,k,o)===true){h.add(k,v)
}});
return h
};
jindo.$H.prototype.map=function(callback,thisObject){var t=this._table;
this.forEach(function(v,k,o){t[k]=callback.call(thisObject,v,k,o)
});
return this
};
jindo.$H.prototype.add=function(key,value){this._table[key]=value;
return this
};
jindo.$H.prototype.remove=function(key){if(typeof this._table[key]=="undefined"){return null
}var val=this._table[key];
delete this._table[key];
return val
};
jindo.$H.prototype.search=function(value){var result=false;
this.forEach(function(v,k,o){if(v===value){result=k;
jindo.$H.Break()
}});
return result
};
jindo.$H.prototype.hasKey=function(key){var result=false;
return(typeof this._table[key]!="undefined")
};
jindo.$H.prototype.hasValue=function(value){return(this.search(value)!==false)
};
jindo.$H.prototype.sort=function(){var o=new Object;
var a=this.values();
var k=false;
a.sort();
for(var i=0;
i<a.length;
i++){k=this.search(a[i]);
o[k]=a[i];
delete this._table[k]
}this._table=o;
return this
};
jindo.$H.prototype.ksort=function(){var o=new Object;
var a=this.keys();
a.sort();
for(var i=0;
i<a.length;
i++){o[a[i]]=this._table[a[i]]
}this._table=o;
return this
};
jindo.$H.prototype.keys=function(){var keys=new Array;
for(var k in this._table){keys.push(k)
}return keys
};
jindo.$H.prototype.values=function(){var values=[];
for(var k in this._table){values[values.length]=this._table[k]
}return values
};
jindo.$H.prototype.toQueryString=function(){var buf=[],val=null,idx=0;
for(var k in this._table){if(typeof(val=this._table[k])=="object"&&val.constructor==Array){for(i=0;
i<val.length;
i++){buf[buf.length]=encodeURIComponent(k)+"[]="+encodeURIComponent(val[i]+"")
}}else{buf[buf.length]=encodeURIComponent(k)+"="+encodeURIComponent(this._table[k]+"")
}}return buf.join("&")
};
jindo.$H.prototype.empty=function(){var keys=this.keys();
for(var i=0;
i<keys.length;
i++){delete this._table[keys[i]]
}return this
};
jindo.$H.Break=function(){if(!(this instanceof arguments.callee)){throw new arguments.callee
}};
jindo.$H.Continue=function(){if(!(this instanceof arguments.callee)){throw new arguments.callee
}};
jindo.$Json=function(sObject){var cl=arguments.callee;
if(typeof sObject=="undefined"){sObject=new Object
}if(sObject instanceof cl){return sObject
}if(!(this instanceof cl)){return new cl(sObject)
}if(typeof sObject=="string"){try{sObject=new Function("return "+sObject)()
}catch(e){sObject=new Object
}}this._object=sObject
};
jindo.$Json.fromXML=function(sXML){var o=new Object;
var re=/\s*<(\/?[\w:\-]+)((?:\s+[\w:\-]+\s*=\s*(?:"(?:\\"|[^"])*"|'(?:\\'|[^'])*'))*)\s*((?:\/>)|(?:><\/\1>|\s*))|\s*<!\[CDATA\[([\w\W]*?)\]\]>\s*|\s*>?([^<]*)/ig;
var re2=/^[0-9]+(?:\.[0-9]+)?$/;
var ec={"&amp;":"&","&nbsp;":" ","&quot;":'"',"&lt;":"<","&gt;":">"};
var fg={tags:["/"],stack:[o]};
var es=function(s){return s.replace(/&[a-z]+;/g,function(m){return(typeof ec[m]=="string")?ec[m]:m
})
};
var at=function(s,c){s.replace(/([\w\:\-]+)\s*=\s*(?:"((?:\\"|[^"])*)"|'((?:\\'|[^'])*)')/g,function($0,$1,$2,$3){c[$1]=es(($2?$2.replace(/\\"/g,'"'):undefined)||($3?$3.replace(/\\'/g,"'"):undefined))
})
};
var em=function(o){for(var x in o){if(Object.prototype[x]){continue
}return false
}return true
};
var cb=function($0,$1,$2,$3,$4,$5){var cur,cdata="";
var idx=fg.stack.length-1;
if(typeof $1=="string"&&$1){if($1.substr(0,1)!="/"){var has_attr=(typeof $2=="string"&&$2);
var closed=(typeof $3=="string"&&$3);
var newobj=(!has_attr&&closed)?"":{};
cur=fg.stack[idx];
if(typeof cur[$1]=="undefined"){cur[$1]=newobj;
cur=fg.stack[idx+1]=cur[$1]
}else{if(cur[$1] instanceof Array){var len=cur[$1].length;
cur[$1][len]=newobj;
cur=fg.stack[idx+1]=cur[$1][len]
}else{cur[$1]=[cur[$1],newobj];
cur=fg.stack[idx+1]=cur[$1][1]
}}if(has_attr){at($2,cur)
}fg.tags[idx+1]=$1;
if(closed){fg.tags.length--;
fg.stack.length--
}}else{fg.tags.length--;
fg.stack.length--
}}else{if(typeof $4=="string"&&$4){cdata=$4
}else{if(typeof $5=="string"&&$5){cdata=es($5)
}}}if(cdata.length>0){var par=fg.stack[idx-1];
var tag=fg.tags[idx];
if(re2.test(cdata)){cdata=parseFloat(cdata)
}else{if(cdata=="true"||cdata=="false"){cdata=new Boolean(cdata)
}}if(typeof par=="undefined"){return
}if(par[tag] instanceof Array){var o=par[tag];
if(typeof o[o.length-1]=="object"&&!em(o[o.length-1])){o[o.length-1].$cdata=cdata;
o[o.length-1].toString=function(){return cdata
}
}else{o[o.length-1]=cdata
}}else{if(typeof par[tag]=="object"&&!em(par[tag])){par[tag].$cdata=cdata;
par[tag].toString=function(){return cdata
}
}else{par[tag]=cdata
}}}};
sXML=sXML.replace(/<(\?|\!-)[^>]*>/g,"");
sXML.replace(re,cb);
return jindo.$Json(o)
};
jindo.$Json.prototype.get=function(sPath){var o=this._object;
var p=sPath.split("/");
var re=/^([\w:\-]+)\[([0-9]+)\]$/;
var stack=[[o]],cur=stack[0];
var len=p.length,c_len,idx,buf,j,e;
for(var i=0;
i<len;
i++){if(p[i]=="."||p[i]==""){continue
}if(p[i]==".."){stack.length--
}else{buf=[];
idx=-1;
c_len=cur.length;
if(c_len==0){return[]
}if(re.test(p[i])){idx=+RegExp.$2
}for(j=0;
j<c_len;
j++){e=cur[j][p[i]];
if(typeof e=="undefined"){continue
}if(e instanceof Array){if(idx>-1){if(idx<e.length){buf[buf.length]=e[idx]
}}else{buf=buf.concat(e)
}}else{if(idx==-1){buf[buf.length]=e
}}}stack[stack.length]=buf
}cur=stack[stack.length-1]
}return cur
};
jindo.$Json.prototype.toString=function(){var func={$:function($){if(typeof $=="undefined"){return'""'
}if(typeof $=="boolean"){return $?"true":"false"
}if(typeof $=="string"){return this.s($)
}if(typeof $=="number"){return $
}if($ instanceof Array){return this.a($)
}if($ instanceof Object){return this.o($)
}},s:function(s){var e={'"':'\\"',"\\":"\\\\","\n":"\\n","\r":"\\r","\t":"\\t"};
var c=function(m){return(typeof e[m]!="undefined")?e[m]:m
};
return'"'+s.replace(/[\\"'\n\r\t]/g,c)+'"'
},a:function(a){var s="[",c="",n=a.length;
for(var i=0;
i<n;
i++){if(typeof a[i]=="function"){continue
}s+=c+this.$(a[i]);
if(!c){c=","
}}return s+"]"
},o:function(o){var s="{",c="";
for(var x in o){if(typeof o[x]=="function"){continue
}s+=c+this.s(x)+":"+this.$(o[x]);
if(!c){c=","
}}return s+"}"
}};
return func.$(this._object)
};
jindo.$Json.prototype.toXML=function(){var f=function($,tag){var t=function(s,at){return"<"+tag+(at||"")+">"+s+"</"+tag+">"
};
switch(typeof $){case"undefined":case"null":return t("");
case"number":return t($);
case"string":if($.indexOf("<")<0){return t($.replace(/&/g,"&amp;"))
}else{return t("<![CDATA["+$+"]]>")
}case"boolean":return t(String($));
case"object":var ret="";
if($ instanceof Array){var len=$.length;
for(var i=0;
i<len;
i++){ret+=f($[i],tag)
}}else{var at="";
for(var x in $){if(x=="$cdata"||typeof $[x]=="function"){continue
}ret+=f($[x],x)
}if(tag){ret=t(ret,at)
}}return ret
}};
return f(this._object,"")
};
jindo.$Json.prototype.toObject=function(){return this._object
};
jindo.$Json.prototype.$value=jindo.$Json.prototype.toObject;
jindo.$Cookie=function(){var cl=arguments.callee;
var cached=cl._cached;
if(cl._cached){return cl._cached
}if(!(this instanceof cl)){return new cl
}if(typeof cl._cached=="undefined"){cl._cached=this
}};
jindo.$Cookie.prototype.keys=function(){var ca=document.cookie.split(";");
var re=/^\s+|\s+$/g;
var a=new Array;
for(var i=0;
i<ca.length;
i++){a[a.length]=ca[i].substr(0,ca[i].indexOf("=")).replace(re,"")
}return a
};
jindo.$Cookie.prototype.get=function(sName){var ca=document.cookie.split(/\s*;\s*/);
var re=new RegExp("^(\\s*"+sName+"\\s*=)");
for(var i=0;
i<ca.length;
i++){if(re.test(ca[i])){return unescape(ca[i].substr(RegExp.$1.length))
}}return null
};
jindo.$Cookie.prototype.set=function(sName,sValue,nDays,sDomain,sPath){var sExpire="";
if(typeof nDays=="number"){sExpire=";expires="+(new Date((new Date()).getTime()+nDays*1000*60*60*24)).toGMTString()
}if(typeof sDomain=="undefined"){sDomain=""
}if(typeof sPath=="undefined"){sPath="/"
}document.cookie=sName+"="+escape(sValue)+sExpire+"; path="+sPath+(sDomain?"; domain="+sDomain:"");
return this
};
jindo.$Cookie.prototype.remove=function(sName,sDomain,sPath){if(this.get(sName)!=null){this.set(sName,"",-1,sDomain,sPath)
}return this
};
jindo.$Element=function(el){var cl=arguments.callee;
if(el&&el instanceof cl){return el
}if(!jindo.$(el)){return null
}if(!(this instanceof cl)){return new cl(el)
}this._element=jindo.$(el);
this.tag=(typeof this._element.tagName!="undefined")?this._element.tagName.toLowerCase():""
};
jindo.$Element.prototype.$value=function(){return this._element
};
jindo.$Element.prototype.visible=function(bVisible){if(typeof bVisible!="undefined"){this[bVisible?"show":"hide"]();
return this
}return(this.css("display")!="none")
};
jindo.$Element.prototype.show=function(){var s=this._element.style;
var b="block";
var c={p:b,div:b,form:b,h1:b,h2:b,h3:b,h4:b,ol:b,ul:b,fieldset:b,td:"table-cell",th:"table-cell",li:"list-item",table:"table",thead:"table-header-group",tbody:"table-row-group",tfoot:"table-footer-group",tr:"table-row",col:"table-column",colgroup:"table-column-group",caption:"table-caption",dl:b,dt:b,dd:b};
try{if(typeof c[this.tag]=="string"){s.display=c[this.tag]
}else{s.display="inline"
}}catch(e){s.display="block"
}return this
};
jindo.$Element.prototype.hide=function(){this._element.style.display="none";
return this
};
jindo.$Element.prototype.toggle=function(){this[this.visible()?"hide":"show"]();
return this
};
jindo.$Element.prototype.opacity=function(value){var v,e=this._element,b=this.visible();
value=parseFloat(value);
if(!isNaN(value)){value=Math.max(Math.min(value,1),0);
if(typeof e.filters!="undefined"){value=Math.ceil(value*100);
if(typeof e.filters!="unknown"&&typeof e.filters.alpha!="undefined"){e.filters.alpha.opacity=value
}else{e.style.filter=(e.style.filter+" alpha(opacity="+value+")")
}}else{e.style.opacity=value
}return value
}if(typeof e.filters!="undefined"){v=(typeof e.filters.alpha=="undefined")?(b?100:0):e.filters.alpha.opacity;
v=v/100
}else{v=parseFloat(e.style.opacity);
if(isNaN(v)){v=b?1:0
}}return v
};
jindo.$Element.prototype.appear=function(duration,callback){var self=this;
var op=this.opacity();
if(!this.visible()){op=0
}if(op==1){return this
}try{clearTimeout(this._fade_timer)
}catch(e){}callback=callback||new Function;
var step=(1-op)/((duration||0.3)*100);
var func=function(){op+=step;
self.opacity(op);
if(op>=1){callback(self)
}else{self._fade_timer=setTimeout(func,10)
}};
this.show();
func();
return this
};
jindo.$Element.prototype.disappear=function(duration,callback){var self=this;
var op=this.opacity();
if(op==0){return this
}try{clearTimeout(this._fade_timer)
}catch(e){}callback=callback||new Function;
var step=op/((duration||0.3)*100);
var func=function(){op-=step;
self.opacity(op);
if(op<=0){self.hide();
self.opacity(1);
callback(self)
}else{self._fade_timer=setTimeout(func,10)
}};
func();
return this
};
jindo.$Element.prototype.css=function(sName,sValue){var e=this._element;
if(sName=="opacity"){return typeof sValue=="undefined"?this.opacity():this.opacity(sValue)
}if(typeof sName=="string"){var view;
if(typeof sValue=="string"||typeof sValue=="number"){var obj=new Object;
obj[sName]=sValue;
sName=obj
}else{if(e.currentStyle){if(sName=="cssFloat"){sName="styleFloat"
}return e.currentStyle[sName]||e.style[sName]
}else{if(window.getComputedStyle){if(sName=="cssFloat"){sName="float"
}var d=e.ownerDocument||e.document||document;
return d.defaultView.getComputedStyle(e,null).getPropertyValue(sName.replace(/([A-Z])/g,"-$1").toLowerCase())||e.style[sName]
}else{if(sName=="cssFloat"&&/MSIE/.test(window.navigator.userAgent)){sName="styleFloat"
}return e.style[sName]
}}return null
}}if(typeof jindo.$H!="undefined"&&sName instanceof jindo.$H){sName=sName.$value()
}if(typeof sName=="object"){var v,type;
for(var k in sName){v=sName[k];
type=(typeof v);
if(type!="string"&&type!="number"){continue
}if(k=="opacity"){type=="undefined"?this.opacity():this.opacity(v);
continue
}if(k=="cssFloat"&&navigator.userAgent.indexOf("MSIE")>-1){k="styleFloat"
}try{e.style[k]=v
}catch(err){if(k=="cursor"&&v=="pointer"){e.style.cursor="hand"
}else{if(("#top#left#right#bottom#").indexOf(k+"#")>0&&(type=="number"||!isNaN(parseInt(v)))){e.style[k]=parseInt(v)+"px"
}}}}}return this
};
jindo.$Element.prototype.attr=function(sName,sValue){var e=this._element;
if(typeof sName=="string"){if(typeof sValue!="undefined"){var obj=new Object;
obj[sName]=sValue;
sName=obj
}else{if(sName=="class"||sName=="className"){return e.className
}return e.getAttribute(sName)
}}if(typeof jindo.$H!="undefined"&&sName instanceof jindo.$H){sName=sName.$value()
}if(typeof sName=="object"){for(var k in sName){if(/^on[a-zA-Z]+$/.test(k)){e[k]=sName[k];
continue
}if(typeof(sValue)!="undefined"&&sValue===null){e.removeAttribute(k)
}else{e.setAttribute(k,sName[k])
}}}return this
};
jindo.$Element.prototype.offset=function(nTop,nLeft){var oEl=this._element;
var oPhantom=null;
if(typeof nTop=="number"&&typeof nLeft=="number"){if(isNaN(parseInt(this.css("top")))){this.css("top",0)
}if(isNaN(parseInt(this.css("left")))){this.css("left",0)
}var oPos=this.offset();
var oGap={top:nTop-oPos.top,left:nLeft-oPos.left};
oEl.style.top=parseInt(this.css("top"))+oGap.top+"px";
oEl.style.left=parseInt(this.css("left"))+oGap.left+"px";
return this
}var bSafari=/Safari/.test(navigator.userAgent);
var bIE=/MSIE/.test(navigator.userAgent);
var nVer=bIE?navigator.userAgent.match(/(?:MSIE) ([0-9.]+)/)[1]:0;
var fpSafari=function(oEl){var oPos={left:0,top:0};
for(var oParent=oEl,oOffsetParent=oParent.offsetParent;
oParent=oParent.parentNode;
){if(oParent.offsetParent){oPos.left-=oParent.scrollLeft;
oPos.top-=oParent.scrollTop
}if(oParent==oOffsetParent){oPos.left+=oEl.offsetLeft+oParent.clientLeft;
oPos.top+=oEl.offsetTop+oParent.clientTop;
if(!oParent.offsetParent){oPos.left+=oParent.offsetLeft;
oPos.top+=oParent.offsetTop
}oOffsetParent=oParent.offsetParent;
oEl=oParent
}}return oPos
};
var fpOthers=function(oEl){var oPos={left:0,top:0};
var oDoc=oEl.ownerDocument||oEl.document||document;
var oHtml=oDoc.documentElement;
var oBody=oDoc.body;
if(oEl.getBoundingClientRect){if(!oPhantom){if(bIE&&nVer<8&&window.external){oPhantom={left:2,top:2};
oBase=null
}else{oPhantom={left:0,top:0}
}}var box=oEl.getBoundingClientRect();
if(oEl!==oHtml&&oEl!==oBody){oPos.left=box.left-oPhantom.left;
oPos.top=box.top-oPhantom.top;
oPos.left+=oHtml.scrollLeft||oBody.scrollLeft;
oPos.top+=oHtml.scrollTop||oBody.scrollTop
}}else{if(oDoc.getBoxObjectFor){var box=oDoc.getBoxObjectFor(oEl);
var vpBox=oDoc.getBoxObjectFor(oHtml||oBody);
oPos.left=box.screenX-vpBox.screenX;
oPos.top=box.screenY-vpBox.screenY
}else{for(var o=oEl;
o;
o=o.offsetParent){oPos.left+=o.offsetLeft;
oPos.top+=o.offsetTop
}for(var o=oEl.parentNode;
o;
o=o.parentNode){if(o.tagName=="BODY"){break
}if(o.tagName=="TR"){oPos.top+=2
}oPos.left-=o.scrollLeft;
oPos.top-=o.scrollTop
}}}return oPos
};
return(bSafari?fpSafari:fpOthers)(oEl)
};
jindo.$Element.prototype.width=function(width){if(typeof width=="number"){var e=this._element;
e.style.width=width+"px";
if(e.offsetWidth!=width){e.style.width=(width*2-e.offsetWidth)+"px"
}return this
}return this._element.offsetWidth
};
jindo.$Element.prototype.height=function(height){if(typeof height=="number"){var e=this._element;
e.style.height=height+"px";
if(e.offsetHeight!=height){var height=(height*2-e.offsetHeight);
if(height>0){e.style.height=height+"px"
}}return this
}return this._element.offsetHeight
};
jindo.$Element.prototype.className=function(sClass){var e=this._element;
if(typeof sClass=="undefined"){return e.className
}e.className=sClass;
return this
};
jindo.$Element.prototype.hasClass=function(sClass){return(" "+this._element.className+" ").indexOf(" "+sClass+" ")>-1
};
jindo.$Element.prototype.addClass=function(sClass){var e=this._element;
if(this.hasClass(sClass)){return this
}e.className=(e.className+" "+sClass).replace(/^\s+/,"");
return this
};
jindo.$Element.prototype.removeClass=function(sClass){var e=this._element;
e.className=(" "+e.className+" ").replace(" "+sClass+" "," ").replace(/\s+$/,"").replace(/^\s+/,"");
return this
};
jindo.$Element.prototype.toggleClass=function(sClass,sClass2){sClass2=sClass2||"";
if(this.hasClass(sClass)){this.removeClass(sClass);
if(sClass2){this.addClass(sClass2)
}}else{this.addClass(sClass);
if(sClass2){this.removeClass(sClass2)
}}return this
};
jindo.$Element.prototype.text=function(sText){var prop=(typeof this._element.innerText!="undefined")?"innerText":"textContent";
if(this.tag=="textarea"||this.tag=="input"){prop="value"
}if(typeof sText=="string"){try{this._element[prop]=sText
}catch(e){return this.html(sText.replace(/&/g,"&amp;").replace(/</g,"&lt;"))
}return this
}return this._element[prop]
};
jindo.$Element.prototype.html=function(sHTML){if(typeof sHTML=="string"){var oEl=this._element;
var bBugAgent=jindo.$Agent().navigator().ie||(jindo.$Agent().navigator().firefox&&!oEl.parentNode);
if(bBugAgent){var sId="R"+new Date().getTime()+parseInt(Math.random()*100000);
var oDoc=oEl.ownerDocument||oEl.document||document;
var oDummy;
var sTag=oEl.tagName.toLowerCase();
switch(sTag){case"select":case"table":oDummy=jindo.$("<div>");
oDummy.innerHTML="<"+sTag+' class="'+sId+'">'+sHTML+"</"+sTag+">";
break;
case"tr":case"thead":case"tbody":oDummy=jindo.$("<div>");
oDummy.innerHTML="<table><"+sTag+' class="'+sId+'">'+sHTML+"</"+sTag+"></table>";
break;
default:oEl.innerHTML=sHTML;
break
}if(oDummy){var oFound;
for(oFound=oDummy.firstChild;
oFound;
oFound=oFound.firstChild){if(oFound.className==sId){break
}}if(oFound){for(var oChild;
oChild=oEl.firstChild;
){oChild.removeNode(true)
}for(var oChild=oFound.firstChild;
oChild;
oChild=oFound.firstChild){oEl.appendChild(oChild)
}oDummy.removeNode&&oDummy.removeNode(true)
}oDummy=null
}}else{oEl.innerHTML=sHTML
}return this
}return this._element.innerHTML
};
jindo.$Element.prototype.evalScripts=function(sHTML){var aJS=[];
sHTML=sHTML.replace(new RegExp("<script(\\s[^>]+)*>(.*?)<\/script>","gi"),function(_,_,sPart){aJS.push(sPart);
return""
});
eval(aJS.join("\n"));
return this
};
jindo.$Element.prototype.outerHTML=function(){var e=this._element;
if(typeof e.outerHTML!="undefined"){return e.outerHTML
}var div=jindo.$("<div>");
var par=e.parentNode;
if(!par){return e.innerHTML
}par.insertBefore(div,e);
div.style.display="none";
div.appendChild(e);
var s=div.innerHTML;
par.insertBefore(e,div);
par.removeChild(div);
return s
};
jindo.$Element.prototype.toString=jindo.$Element.prototype.outerHTML;
jindo.$Element.prototype.append=function(oElement){var o=jindo.$Element(oElement).$value();
this._element.appendChild(o);
return jindo.$Element(o)
};
jindo.$Element.prototype.prepend=function(oElement){var e=this._element;
var o=jindo.$Element(oElement).$value();
if(e.childNodes.length>0){e.insertBefore(o,e.childNodes[0])
}else{e.appendChild(o)
}return jindo.$Element(o)
};
jindo.$Element.prototype.replace=function(oElement){var e=this._element;
var o=jindo.$Element(oElement).$value();
e.parentNode.insertBefore(o,e);
e.parentNode.removeChild(e);
return jindo.$Element(o)
};
jindo.$Element.prototype.appendTo=function(oElement){var o=jindo.$Element(oElement).$value();
o.appendChild(this._element);
return this
};
jindo.$Element.prototype.prependTo=function(oElement){var o=jindo.$Element(oElement).$value();
if(o.childNodes.length>0){o.insertBefore(this._element,o.childNodes[0])
}else{o.appendChild(this._element)
}return this
};
jindo.$Element.prototype.before=function(oElement){var o=jindo.$Element(oElement).$value();
this._element.parentNode.insertBefore(o,this._element);
return jindo.$Element(o)
};
jindo.$Element.prototype.after=function(oElement){var o=this.before(oElement);
o.before(this);
return o
};
jindo.$Element.prototype.parent=function(pFunc,limit){var e=this._element;
var a=[],p=null;
if(typeof pFunc=="undefined"){return jindo.$Element(e.parentNode)
}if(typeof limit=="undefined"||limit==0){limit=-1
}while(e.parentNode&&limit--!=0){p=jindo.$Element(e.parentNode);
if(e.parentNode==document.documentElement){break
}if(!pFunc||(pFunc&&pFunc(p))){a[a.length]=p
}e=e.parentNode
}return a
};
jindo.$Element.prototype.child=function(pFunc,limit){var e=this._element;
var a=[],c=null,f=null;
if(typeof pFunc=="undefined"){return jindo.$A(e.childNodes).filter(function(v){return v.nodeType==1
}).map(function(v){return jindo.$Element(v)
}).$value()
}if(typeof limit=="undefined"||limit==0){limit=-1
}(f=function(el,lim){var ch=null,o=null;
for(var i=0;
i<el.childNodes.length;
i++){ch=el.childNodes[i];
if(ch.nodeType!=1){continue
}o=jindo.$Element(el.childNodes[i]);
if(!pFunc||(pFunc&&pFunc(o))){a[a.length]=o
}if(lim!=0){f(el.childNodes[i],lim-1)
}}})(e,limit-1);
return a
};
jindo.$Element.prototype.prev=function(pFunc){var e=this._element;
var a=[];
var b=(typeof pFunc=="undefined");
if(!e){return b?jindo.$Element(null):a
}do{e=e.previousSibling;
if(!e||e.nodeType!=1){continue
}if(b){return jindo.$Element(e)
}if(!pFunc||pFunc(e)){a[a.length]=jindo.$Element(e)
}}while(e);
return b?jindo.$Element(e):a
};
jindo.$Element.prototype.next=function(pFunc){var e=this._element;
var a=[];
var b=(typeof pFunc=="undefined");
if(!e){return b?jindo.$Element(null):a
}do{e=e.nextSibling;
if(!e||e.nodeType!=1){continue
}if(b){return jindo.$Element(e)
}if(!pFunc||pFunc(e)){a[a.length]=jindo.$Element(e)
}}while(e);
return b?jindo.$Element(e):a
};
jindo.$Element.prototype.first=function(){var el=this._element.firstElementChild||this._element.firstChild;
if(!el){return null
}while(el&&el.nodeType!=1){el=el.nextSibling
}return el?jindo.$Element(el):null
};
jindo.$Element.prototype.last=function(){var el=this._element.lastElementChild||this._element.lastChild;
if(!el){return null
}while(el&&el.nodeType!=1){el=el.previousSibling
}return el?jindo.$Element(el):null
};
jindo.$Element.prototype.isChildOf=function(element){var e=this._element;
var el=jindo.$Element(element).$value();
while(e&&e.parentNode){e=e.parentNode;
if(e==el){return true
}}return false
};
jindo.$Element.prototype.isParentOf=function(element){var el=jindo.$Element(element).$value();
while(el&&el.parentNode){el=el.parentNode;
if(this._element==el){return true
}}return false
};
jindo.$Element.prototype.isEqual=function(element){try{return(this._element===jindo.$Element(element).$value())
}catch(e){return false
}};
jindo.$Element.prototype.fireEvent=function(sEvent,oProps){function IE(sEvent,oProps){sEvent=(sEvent+"").toLowerCase();
var oEvent=document.createEventObject();
if(oProps){for(k in oProps){oEvent[k]=oProps[k]
}oEvent.button=(oProps.left?1:0)+(oProps.middle?4:0)+(oProps.right?2:0);
oEvent.relatedTarget=oProps.relatedElement||null
}this._element.fireEvent("on"+sEvent,oEvent);
return this
}function DOM2(sEvent,oProps){var sType="HTMLEvents";
sEvent=(sEvent+"").toLowerCase();
if(sEvent=="click"||sEvent.indexOf("mouse")==0){sType="MouseEvent";
if(sEvent=="mousewheel"){sEvent="dommousescroll"
}}else{if(sEvent.indexOf("key")==0){sType="KeyboardEvent"
}}var evt=document.createEvent(sType);
if(oProps){switch(sType){case"MouseEvent":oProps.button=0+(oProps.middle?1:0)+(oProps.right?2:0);
evt.initMouseEvent(sEvent,true,true,null,oProps.detail,oProps.screenX,oProps.screenY,oProps.clientX,oProps.clientY,oProps.ctrl,oProps.alt,oProps.shift,oProps.meta,oProps.button,oProps.relatedElement);
break;
case"KeyboardEvent":if(evt.initKeyboardEvent){evt.initKeyboardEvent(sEvent,true,true,null,null,null,oProps.ctrl,oProps.alt,oProps.shift,oProps.meta);
evt.keyCode=oProps.keyCode;
evt.charCode=oProps.keyCode
}else{evt.initKeyEvent(sEvent,true,true,null,oProps.ctrl,oProps.alt,oProps.shift,oProps.meta,oProps.keyCode,oProps.keyCode)
}break;
default:evt.initEvent(sEvent,true,true)
}}else{evt.initEvent(sEvent,true,true)
}this._element.dispatchEvent(evt);
return this
}jindo.$Element.prototype.fireEvent=(typeof this._element.dispatchEvent!="undefined")?DOM2:IE;
return this.fireEvent(sEvent,oProps)
};
jindo.$Element.prototype.empty=function(){this.html("");
return this
};
jindo.$Element.prototype.remove=function(oChild){jindo.$Element(oChild).leave();
return this
};
jindo.$Element.prototype.leave=function(){var e=this._element;
if(e.parentNode){e.parentNode.removeChild(e)
}jindo.$Fn.freeElement(this._element);
return this
};
jindo.$Element.prototype.wrap=function(wrapper){var e=this._element;
wrapper=jindo.$Element(wrapper).$value();
if(e.parentNode){e.parentNode.insertBefore(wrapper,e)
}wrapper.appendChild(e);
return this
};
jindo.$Element.prototype.ellipsis=function(stringTail){stringTail=stringTail||"...";
var txt=this.text();
var len=txt.length;
var cur_h=this.height();
var i=0;
var h=this.text("A").height();
if(cur_h<h*1.5){return this.text(txt)
}cur_h=h;
while(cur_h<h*1.5){i+=Math.max(Math.ceil((len-i)/2),1);
cur_h=this.text(txt.substring(0,i)+stringTail).height()
}while(cur_h>h*1.5){i--;
cur_h=this.text(txt.substring(0,i)+stringTail).height()
}};
jindo.$Element.prototype.indexOf=function(element){try{var e=jindo.$Element(element).$value();
var n=this._element.childNodes;
var c=0;
var l=n.length;
for(var i=0;
i<l;
i++){if(n[i].nodeType!=1){continue
}if(n[i]===e){return c
}c++
}}catch(e){}return -1
};
jindo.$Element.prototype.queryAll=function(sSelector){return jindo.$$(sSelector,this._element)
};
jindo.$Element.prototype.query=function(sSelector){return jindo.$$.getSingle(sSelector,this._element)
};
jindo.$Element.prototype.test=function(sSelector){return jindo.$$.test(this._element,sSelector)
};
jindo.$Element.prototype.xpathAll=function(sXPath){return jindo.$$.xpath(sSelector,this._element)
};
jindo.$Fn=function(func,thisObject){var cl=arguments.callee;
if(func instanceof cl){return func
}if(!(this instanceof cl)){return new cl(func,thisObject)
}this._events=[];
this._tmpElm=null;
this._key=null;
if(typeof func=="function"){this._func=func;
this._this=thisObject
}else{if(typeof func=="string"&&typeof thisObject=="string"){this._func=new Function(func,thisObject)
}}};
jindo.$Fn.prototype.$value=function(){return this._func
};
jindo.$Fn.prototype.bind=function(){var a=jindo.$A(arguments).$value();
var f=this._func;
var t=this._this;
var b=function(){var args=jindo.$A(arguments).$value();
if(a.length){args=a.concat(args)
}return f.apply(t,args)
};
return b
};
jindo.$Fn.prototype.bindForEvent=function(){var a=arguments;
var f=this._func;
var t=this._this;
var m=this._tmpElm||null;
var b=function(e){var args=jindo.$A(a);
if(typeof e=="undefined"){e=window.event
}if(typeof e.currentTarget=="undefined"){e.currentTarget=m
}args.unshift(jindo.$Event(e));
return f.apply(t,args.$value())
};
return b
};
jindo.$Fn.prototype.attach=function(oElement,sEvent){var fn=null,l,ev=sEvent,el=oElement,ua=navigator.userAgent;
if((el instanceof Array)||(jindo.$A&&(el instanceof jindo.$A)&&(el=el.$value()))){for(var i=0;
i<el.length;
i++){this.attach(el[i],ev)
}return this
}if(!el||!ev){return this
}if(typeof el.$value=="function"){el=el.$value()
}el=jindo.$(el);
ev=ev.toLowerCase();
this._tmpElm=el;
fn=this.bindForEvent();
this._tmpElm=null;
if(typeof el.addEventListener!="undefined"){if(ev=="domready"){ev="DOMContentLoaded"
}else{if(ev=="mousewheel"&&ua.indexOf("WebKit")<0&&!/Opera/.test(ua)){ev="DOMMouseScroll"
}else{if(ev=="mouseenter"){ev="mouseover";
fn=jindo.$Fn._fireWhenElementBoundary(el,fn)
}else{if(ev=="mouseleave"){ev="mouseout";
fn=jindo.$Fn._fireWhenElementBoundary(el,fn)
}}}}el.addEventListener(ev,fn,false)
}else{if(typeof el.attachEvent!="undefined"){if(ev=="domready"){jindo.$Fn._domready(el,fn);
return this
}else{el.attachEvent("on"+ev,fn)
}}}if(!this._key){this._key="$"+jindo.$Fn.gc.count++;
jindo.$Fn.gc.pool[this._key]=this
}this._events[this._events.length]={element:el,event:sEvent.toLowerCase(),func:fn};
return this
};
jindo.$Fn.prototype.detach=function(oElement,sEvent){var fn=null,l,el=oElement,ev=sEvent,ua=navigator.userAgent;
if((el instanceof Array)||(jindo.$A&&(el instanceof jindo.$A)&&(el=el.$value()))){for(var i=0;
i<el.length;
i++){this.detach(el[i],ev)
}return this
}if(!el||!ev){return this
}if(jindo.$Element&&el instanceof jindo.$Element){el=el.$value()
}el=jindo.$(el);
ev=ev.toLowerCase();
var e=this._events;
for(var i=0;
i<e.length;
i++){if(e[i].element!==el||e[i].event!==ev){continue
}fn=e[i].func;
this._events=jindo.$A(this._events).refuse(e[i]).$value();
break
}if(typeof el.removeEventListener!="undefined"){if(ev=="domready"){ev="DOMContentLoaded"
}else{if(ev=="mousewheel"&&ua.indexOf("WebKit")<0){ev="DOMMouseScroll"
}else{if(ev=="mouseenter"){ev="mouseover"
}else{if(ev=="mouseleave"){ev="mouseout"
}}}}el.removeEventListener(ev,fn,false)
}else{if(typeof el.detachEvent!="undefined"){if(ev=="domready"){jindo.$Fn._domready.list=jindo.$Fn._domready.list.refuse(fn);
return this
}else{el.detachEvent("on"+ev,fn)
}}}return this
};
jindo.$Fn.prototype.delay=function(nSec,args){if(typeof args=="undefined"){args=[]
}setTimeout(this.bind.apply(this,args),nSec*1000);
return this
};
jindo.$Fn.prototype.free=function(oElement){var len=this._events.length;
while(len>0){var el=this._events[--len].element;
if(oElement&&el!=oElement){continue
}this.detach(el,this._events[len].event);
delete this._events[len]
}if(this._events.length==0){try{delete jindo.$Fn.gc.pool[this._key]
}catch(e){}}};
jindo.$Fn._domready=function(doc,func){if(typeof jindo.$Fn._domready.list=="undefined"){var f=null,l=jindo.$Fn._domready.list=jindo.$A([func]);
var done=false,execFuncs=function(){if(!done){done=true;
var evt={type:"domready",target:doc,currentTarget:doc};
while(f=l.shift()){f(evt)
}}};
(function(){try{doc.documentElement.doScroll("left")
}catch(e){setTimeout(arguments.callee,50);
return
}})();
doc.onreadystatechange=function(){if(doc.readyState=="complete"){doc.onreadystatechange=null;
execFuncs()
}}
}else{jindo.$Fn._domready.list.push(func)
}};
jindo.$Fn._fireWhenElementBoundary=function(doc,func){return function(evt){var oEvent=jindo.$Event(evt);
var relatedElement=jindo.$Element(oEvent.relatedElement);
if(relatedElement&&(relatedElement.isEqual(this)||relatedElement.isChildOf(this))){return
}func.call(this,evt)
}
};
jindo.$Fn.gc=function(){var p=jindo.$Fn.gc.pool;
for(var key in p){try{p[key].free()
}catch(e){}}jindo.$Fn.gc.pool=p={}
};
jindo.$Fn.freeElement=function(oElement){var p=jindo.$Fn.gc.pool;
for(var key in p){try{p[key].free(oElement)
}catch(e){}}};
jindo.$Fn.gc.count=0;
jindo.$Fn.gc.pool={};
if(typeof window!="undefined"){jindo.$Fn(jindo.$Fn.gc).attach(window,"unload")
}jindo.$Event=function(e){var cl=arguments.callee;
if(e instanceof cl){return e
}if(!(this instanceof cl)){return new cl(e)
}if(typeof e=="undefined"){e=window.event
}if(e===window.event&&document.createEventObject){e=document.createEventObject(e)
}this._event=e;
this._globalEvent=window.event;
this.type=e.type.toLowerCase();
if(this.type=="dommousescroll"){this.type="mousewheel"
}else{if(this.type=="DOMContentLoaded"){this.type="domready"
}}this.canceled=false;
this.element=e.target||e.srcElement;
this.currentElement=e.currentTarget;
this.relatedElement=null;
if(typeof e.relatedTarget!="undefined"){this.relatedElement=e.relatedTarget
}else{if(e.fromElement&&e.toElement){this.relatedElement=e[(this.type=="mouseout")?"toElement":"fromElement"]
}}};
jindo.$Event.prototype.mouse=function(){var e=this._event;
var delta=0;
var left=(e.which&&e.button==0)||!!(e.button&1);
var mid=(e.which&&e.button==1)||!!(e.button&4);
var right=(e.which&&e.button==2)||!!(e.button&2);
var ret={};
if(e.wheelDelta){delta=e.wheelDelta/120
}else{if(e.detail){delta=-e.detail/3
}}ret={delta:delta,left:left,middle:mid,right:right};
this.mouse=function(){return ret
};
return ret
};
jindo.$Event.prototype.key=function(){var e=this._event;
var k=e.keyCode||e.charCode;
var ret={keyCode:k,alt:e.altKey,ctrl:e.ctrlKey,meta:e.metaKey,shift:e.shiftKey,up:(k==38),down:(k==40),left:(k==37),right:(k==39),enter:(k==13),esc:(k==27)};
this.key=function(){return ret
};
return ret
};
jindo.$Event.prototype.pos=function(bGetOffset){var e=this._event;
var b=(this.element.ownerDocument||document).body;
var de=(this.element.ownerDocument||document).documentElement;
var pos=[b.scrollLeft||de.scrollLeft,b.scrollTop||de.scrollTop];
var ret={clientX:e.clientX,clientY:e.clientY,pageX:"pageX" in e?e.pageX:e.clientX+pos[0]-b.clientLeft,pageY:"pageY" in e?e.pageY:e.clientY+pos[1]-b.clientTop,layerX:"offsetX" in e?e.offsetX:e.layerX-1,layerY:"offsetY" in e?e.offsetY:e.layerY-1};
if(bGetOffset){var offset=jindo.$Element(this.element).offset();
ret.offsetX=ret.pageX-offset.left;
ret.offsetY=ret.pageY-offset.top
}return ret
};
jindo.$Event.prototype.stop=function(nCancel){nCancel=nCancel||jindo.$Event.CANCEL_ALL;
var e=(window.event&&window.event==this._globalEvent)?this._globalEvent:this._event;
var b=!!(nCancel&jindo.$Event.CANCEL_BUBBLE);
var d=!!(nCancel&jindo.$Event.CANCEL_DEFAULT);
this.canceled=true;
if(typeof e.preventDefault!="undefined"&&d){e.preventDefault()
}if(typeof e.stopPropagation!="undefined"&&b){e.stopPropagation()
}if(d){e.returnValue=false
}if(b){e.cancelBubble=true
}return this
};
jindo.$Event.prototype.stopDefault=function(){return this.stop(jindo.$Event.CANCEL_DEFAULT)
};
jindo.$Event.prototype.stopBubble=function(){return this.stop(jindo.$Event.CANCEL_BUBBLE)
};
jindo.$Event.CANCEL_BUBBLE=1;
jindo.$Event.CANCEL_DEFAULT=2;
jindo.$Event.CANCEL_ALL=3;
jindo.$ElementList=function(els){var cl=arguments.callee;
if(els instanceof cl){return els
}if(!(this instanceof cl)){return new cl(els)
}if(els instanceof Array||(jindo.$A&&els instanceof jindo.$A)){els=jindo.$A(els)
}else{if(typeof els=="string"&&cssquery){els=jindo.$A(cssquery(els))
}else{els=jindo.$A()
}}this._elements=els.map(function(v,i,a){return jindo.$Element(v)
})
};
jindo.$ElementList.prototype.get=function(idx){return this._elements.$value()[idx]
};
jindo.$ElementList.prototype.getFirst=function(){return this.get(0)
};
jindo.$ElementList.prototype.getLast=function(){return this.get(Math.Max(this._elements.length-1,0))
};
(function(proto){var setters="show,hide,toggle,addClass,removeClass,toggleClass,fireEvent,leave,";
setters+="empty,appear,disappear,className,width,height,text,html,css,attr";
jindo.$A(setters.split(",")).forEach(function(name){proto[name]=function(){var args=jindo.$A(arguments).$value();
this._elements.forEach(function(el){el[name].apply(el,args)
});
return this
}
});
jindo.$A(["appear","disappear"]).forEach(function(name){proto[name]=function(duration,callback){var len=this._elements.length;
var self=this;
this._elements.forEach(function(el,idx){if(idx==len-1){el[name](duration,function(){callback(self)
})
}else{el[name](duration)
}});
return this
}
})
})(jindo.$ElementList.prototype);
jindo.$S=function(str){var cl=arguments.callee;
if(typeof str=="undefined"){str=""
}if(str instanceof cl){return str
}if(!(this instanceof cl)){return new cl(str)
}this._str=str+""
};
jindo.$S.prototype.$value=function(){return this._str
};
jindo.$S.prototype.toString=jindo.$S.prototype.$value;
jindo.$S.prototype.trim=function(){return jindo.$S(this._str.replace(/^\s+|\s+$/g,""))
};
jindo.$S.prototype.escapeHTML=function(){var entities={'"':"quot","&":"amp","<":"lt",">":"gt"};
var s=this._str.replace(/[<>&"]/g,function(m0){return entities[m0]?"&"+entities[m0]+";":m0
});
return jindo.$S(s)
};
jindo.$S.prototype.stripTags=function(){return jindo.$S(this._str.replace(/<\/?(?:h[1-5]|[a-z]+(?:\:[a-z]+)?)[^>]*>/ig,""))
};
jindo.$S.prototype.times=function(nTimes){var buf=[];
for(var i=0;
i<nTimes;
i++){buf[buf.length]=this._str
}return jindo.$S(buf.join(""))
};
jindo.$S.prototype.unescapeHTML=function(){var entities={quot:'"',amp:"&",lt:"<",gt:">"};
var s=this._str.replace(/&([a-z]+);/g,function(m0,m1){return entities[m1]?entities[m1]:m0
});
return jindo.$S(s)
};
jindo.$S.prototype.escape=function(){var s=this._str.replace(/([\u0080-\uFFFF]+)|[\n\r\t"'\\]/g,function(m0,m1,_){if(m1){return escape(m1).replace(/%/g,"\\")
}return(_={"\n":"\\n","\r":"\\r","\t":"\\t"})[m0]?_[m0]:"\\"+m0
});
return jindo.$S(s)
};
jindo.$S.prototype.bytes=function(nBytes){var code=0,bytes=0,i=0,len=this._str.length;
var charset=((document.charset||document.characterSet||document.defaultCharset)+"").toLowerCase();
var cut=(typeof nBytes=="number");
if(charset=="utf-8"){for(i=0;
i<len;
i++){code=this._str.charCodeAt(i);
if(code<128){bytes+=1
}else{if(code<2048){bytes+=2
}else{if(code<65536){bytes+=3
}else{bytes+=4
}}}if(cut&&bytes>nBytes){this._str=this._str.substr(0,i);
break
}}}else{for(i=0;
i<len;
i++){bytes+=(this._str.charCodeAt(i)>128)?2:1;
if(cut&&bytes>nBytes){this._str=this._str.substr(0,i);
break
}}}return cut?this:bytes
};
jindo.$S.prototype.parseString=function(){var str=this._str.split(/&/g),pos,key,val,buf={};
for(var i=0;
i<str.length;
i++){key=str[i].substring(0,pos=str[i].indexOf("="));
val=decodeURIComponent(str[i].substring(pos+1));
if(key.substr(key.length-2,2)=="[]"){key=key.substring(0,key.length-2);
if(typeof buf[key]=="undefined"){buf[key]=[]
}buf[key][buf[key].length]=val
}else{buf[key]=val
}}return buf
};
jindo.$S.prototype.escapeRegex=function(){var s=this._str;
var r=/([\?\.\*\+\-\/\(\)\{\}\[\]\:\!\^\$\\\|])/g;
return jindo.$S(s.replace(r,"\\$1"))
};
jindo.$S.prototype.format=function(){var args=arguments;
var idx=0;
var s=this._str.replace(/%([ 0])?(-)?([1-9][0-9]*)?([bcdsoxX])/g,function(m0,m1,m2,m3,m4){var a=args[idx++];
var ret="",pad="";
m3=m3?+m3:0;
if(m4=="s"){ret=a+""
}else{if(" bcdoxX".indexOf(m4)>0){if(typeof a!="number"){return""
}ret=(m4=="c")?String.fromCharCode(a):a.toString(({b:2,d:10,o:8,x:16,X:16})[m4]);
if(" X".indexOf(m4)>0){ret=ret.toUpperCase()
}}}if(ret.length<m3){pad=jindo.$S(m1||" ").times(m3-ret.length).toString()
}(m2=="-")?(ret+=pad):(ret=pad+ret);
return ret
});
return jindo.$S(s)
};
jindo.$Document=function(el){var cl=arguments.callee;
if(el instanceof cl){return el
}if(!(this instanceof cl)){return new cl(el)
}this._doc=el||document;
this._docKey=this.renderingMode()=="Standards"?"documentElement":"body"
};
jindo.$Document.prototype.$value=function(){return this._doc
};
jindo.$Document.prototype.scrollSize=function(){var oBrowser=jindo.$Agent().navigator();
var oDoc=this._doc[(oBrowser.chrome||oBrowser.safari)?"body":this._docKey];
return{width:Math.max(oDoc.scrollWidth,oDoc.clientWidth),height:Math.max(oDoc.scrollHeight,oDoc.clientHeight)}
};
jindo.$Document.prototype.scrollPosition=function(){var oBrowser=jindo.$Agent().navigator();
var oDoc=this._doc[(oBrowser.chrome||oBrowser.safari)?"body":this._docKey];
return{left:oDoc.scrollLeft||window.pageXOffset||window.scrollX||0,top:oDoc.scrollTop||window.pageYOffset||window.scrollY||0}
};
jindo.$Document.prototype.clientSize=function(){var oBrowser=jindo.$Agent().navigator();
var oDoc=this._doc[this._docKey];
return(oBrowser.safari)?{width:window.innerWidth,height:window.innerHeight}:{width:oDoc.clientWidth,height:oDoc.clientHeight}
};
jindo.$Document.prototype.renderingMode=function(){var oBrowser=jindo.$Agent().navigator();
var sRet;
if("compatMode" in this._doc){sRet=this._doc.compatMode=="CSS1Compat"?"Standards":(oBrowser.ie?"Quirks":"Almost")
}else{sRet=oBrowser.safari?"Standards":"Quirks"
}return sRet
};
jindo.$Document.prototype.queryAll=function(sSelector){return jindo.$$(sSelector,this._doc)
};
jindo.$Document.prototype.query=function(sSelector){return jindo.$$.getSingle(sSelector,this._doc)
};
jindo.$Document.prototype.xpathAll=function(sXPath){return jindo.$$.xpath(sSelector,this._doc)
};
jindo.$Form=function(el){var cl=arguments.callee;
if(el instanceof cl){return el
}if(!(this instanceof cl)){return new cl(el)
}el=jindo.$(el);
if(!el.tagName||el.tagName.toUpperCase()!="FORM"){throw new Error("The element should be a FORM element")
}this._form=el
};
jindo.$Form.prototype.$value=function(){return this._form
};
jindo.$Form.prototype.serialize=function(){var self=this;
var oRet={};
var nLen=arguments.length;
var fpInsert=function(sKey){var sVal=self.value(sKey);
if(typeof sVal!="undefined"){oRet[sKey]=sVal
}};
if(nLen==0){jindo.$A(this.element()).forEach(function(o){if(o.name){fpInsert(o.name)
}})
}else{for(var i=0;
i<nLen;
i++){fpInsert(arguments[i])
}}return jindo.$H(oRet).toQueryString()
};
jindo.$Form.prototype.element=function(sKey){if(arguments.length>0){return this._form[sKey]
}return this._form.elements
};
jindo.$Form.prototype.enable=function(){var sKey=arguments[0];
if(typeof sKey=="object"){var self=this;
jindo.$H(sKey).forEach(function(bFlag,sKey){self.enable(sKey,bFlag)
});
return this
}var aEls=this.element(sKey);
if(!aEls){return this
}aEls=aEls.nodeType==1?[aEls]:aEls;
if(arguments.length<2){var bEnabled=true;
jindo.$A(aEls).forEach(function(o){if(o.disabled){bEnabled=false;
jindo.$A.Break()
}});
return bEnabled
}else{var sFlag=arguments[1];
jindo.$A(aEls).forEach(function(o){o.disabled=!sFlag
});
return this
}};
jindo.$Form.prototype.value=function(sKey){if(typeof sKey=="object"){var self=this;
jindo.$H(sKey).forEach(function(bFlag,sKey){self.value(sKey,bFlag)
});
return this
}var aEls=this.element(sKey);
if(!aEls){throw new Error("The element is not exist")
}aEls=aEls.nodeType==1?[aEls]:aEls;
if(arguments.length>1){var sVal=arguments[1];
jindo.$A(aEls).forEach(function(o){switch(o.type){case"radio":case"checkbox":o.checked=(o.value==sVal);
break;
case"select-one":var nIndex=-1;
for(var i=0,len=o.options.length;
i<len;
i++){if(o.options[i].value==sVal){nIndex=i
}}o.selectedIndex=nIndex;
break;
default:o.value=sVal;
break
}});
return this
}var aRet=[];
jindo.$A(aEls).forEach(function(o){switch(o.type){case"radio":case"checkbox":if(o.checked){aRet.push(o.value)
}break;
case"select-one":if(o.selectedIndex!=-1){aRet.push(o.options[o.selectedIndex].value)
}break;
default:aRet.push(o.value);
break
}});
return aRet.length>1?aRet:aRet[0]
};
jindo.$Form.prototype.submit=function(sTargetName,fValidation){var sOrgTarget=null;
if(typeof sTargetName=="string"){sOrgTarget=this._form.target;
this._form.target=sTargetName
}if(typeof sTargetName=="function"){fValidation=sTargetName
}if(typeof fValidation!="undefined"){if(!fValidation(this._form)){return this
}}this._form.submit();
if(sOrgTarget!==null){this._form.target=sOrgTarget
}return this
};
jindo.$Form.prototype.reset=function(fValidation){if(typeof fValidation!="undefined"){if(!fValidation(this._form)){return this
}}this._form.reset();
return this
};
jindo.$Template=function(str){var obj=null,tag="";
var cl=arguments.callee;
if(str instanceof cl){return str
}if(!(this instanceof cl)){return new cl(str)
}if(typeof str=="undefined"){str=""
}else{if((obj=document.getElementById(str))&&obj.tagName&&(tag=obj.tagName.toUpperCase())&&(tag=="TEXTAREA"||(tag=="SCRIPT"&&obj.getAttribute("type")=="text/template"))){str=(obj.value||obj.innerHTML).replace(/^\s+|\s+$/g,"")
}}this._str=str+""
};
jindo.$Template.splitter=/(?!\\)[\{\}]/g;
jindo.$Template.pattern=/^(?:if (.+)|elseif (.+)|for (?:(.+)\:)?(.+) in (.+)|(else)|\/(if|for)|=(.+)|js (.+)|set (.+))$/;
jindo.$Template.prototype.process=function(data){var key="\x01";
var leftBrace="\x02";
var rightBrace="\x03";
var tpl=(" "+this._str+" ").replace(/\\{/g,leftBrace).replace(/\\}/g,rightBrace).replace(/(?!\\)\}\{/g,"}"+key+"{").split(jindo.$Template.splitter),i=tpl.length;
var map={'"':'\\"',"\\":"\\\\","\n":"\\n","\r":"\\r","\t":"\\t","\f":"\\f"};
var reg=[/("(?:(?:\\.)+|[^\\"]+)*"|[a-zA-Z_][\w\.]*)/g,/[\n\r\t\f"\\]/g,/^\s+/,/\s+$/,/#/g];
var cb=[function(m){return(m.substring(0,1)=='"')?m:"d."+m
},function(m){return map[m]||m
},"",""];
var stm=[];
var lev=0;
tpl[0]=tpl[0].substr(1);
tpl[i-1]=tpl[i-1].substr(0,tpl[i-1].length-1);
if(i<2){return tpl
}while(i--){if(i%2){tpl[i]=tpl[i].replace(jindo.$Template.pattern,function(){var m=arguments;
if(m[10]){return m[10].replace(/(\w+)=(?:([a-zA-Z_][a-zA-Z0-9_]+)|(.+))$/g,function(){var mm=arguments;
var str="d."+mm[1]+"=";
if(mm[2]){str+="d."+mm[2]
}else{str+=mm[3].replace(/(=(?:[a-zA-Z_][\w\.]*)+)/g,function(m){return(m.substring(0,1)=="=")?"d."+m.replace("=",""):m
})
}return str
})+";"
}if(m[9]){return"s[i++]="+m[9].replace(/(=(?:[a-zA-Z_][\w\.]*)+)/g,function(m){return(m.substring(0,1)=="=")?"d."+m.replace("=",""):m
})+";"
}if(m[8]){return"s[i++]= d."+m[8]+";"
}if(m[1]){return"if("+m[1].replace(reg[0],cb[0]).replace(/d\.(typeof) /,"$1 ").replace(/ d\.(instanceof) d\./," $1 ")+"){"
}if(m[2]){return"}else if("+m[2].replace(reg[0],cb[0]).replace(/d\.(typeof) /,"$1 ").replace(/ d\.(instanceof) d\./," $1 ")+"){"
}if(m[5]){return("var t#=d."+m[5]+"||{},p#=isArray(t#),i#=0;for(var x# in t#){	if( (p# && isNaN(i#=parseInt(x#))) || (!p# && !t#.propertyIsEnumerable(x#)) ) continue;	d."+m[4]+"=t#[x#];"+(m[3]?"d."+m[3]+"=p#?i#:x#;":"")).replace(reg[4],lev++)
}if(m[6]){return"}else{"
}if(m[7]){return"};"
}return m[0]
})
}else{if(tpl[i]==key){tpl[i]=""
}else{if(tpl[i]){tpl[i]='s[i++]="'+tpl[i].replace(reg[1],cb[1])+'";'
}}}}tpl=tpl.join("").replace(new RegExp(leftBrace,"g"),"{").replace(new RegExp(rightBrace,"g"),"}");
tpl=(new Function("d",'var s=[],i=0;function isArray(o){ return Object.prototype.toString.call(o) == "[object Array]" };'+tpl+'return s.join("");'))(data);
return tpl
};
jindo.$Date=function(src){var a=arguments,t="";
var cl=arguments.callee;
if(src&&src instanceof cl){return src
}if(!(this instanceof cl)){return new cl(a[0],a[1],a[2],a[3],a[4],a[5],a[6])
}if((t=typeof src)=="string"){this._date=cl.parse(src)
}else{if(t=="number"){if(typeof a[1]=="undefined"){this._date=new Date(src)
}else{this._date=new Date(a[0],a[1],a[2],a[3],a[4],a[5],a[6])
}}else{if(t=="object"&&src.constructor==Date){(this._date=new Date).setTime(src.getTime());
this._date.setMilliseconds(src.getMilliseconds())
}else{this._date=new Date
}}}};
jindo.$Date.names={month:["January","Febrary","March","April","May","June","July","August","September","October","Novermber","December"],s_month:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],day:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],s_day:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],ampm:["AM","PM"]};
jindo.$Date.now=function(){return Date.now()
};
jindo.$Date.parse=function(strDate){return Date.parse(strDate)
};
jindo.$Date.prototype.$value=function(){return this._date
};
jindo.$Date.prototype.format=function(strFormat){var o={};
var d=this._date;
return(strFormat||"").replace(/[a-z]/ig,function callback(m){if(typeof o[m]!="undefined"){return o[m]
}switch(m){case"d":case"j":o.j=d.getDate();
o.d=(o.j>9?"":"0")+o.j;
return o[m];
case"l":case"D":case"w":case"N":o.w=d.getDay();
o.N=o.w?o.w:7;
o.D=jindo.$Date.names.s_day[o.w];
o.l=jindo.$Date.names.day[o.w];
return o[m];
case"S":return(!!(o.S=["st","nd","rd"][d.getDate()]))?o.S:(o.S="th");
case"z":o.z=Math.floor((d.getTime()-(new Date(d.getFullYear(),0,1)).getTime())/(3600*24*1000));
return o.z;
case"m":case"n":o.n=d.getMonth()+1;
o.m=(o.n>9?"":"0")+o.n;
return o[m];
case"L":o.L=this.isLeapYear();
return o.L;
case"o":case"Y":case"y":o.o=o.Y=d.getFullYear();
o.y=(o.o+"").substr(2);
return o[m];
case"a":case"A":case"g":case"G":case"h":case"H":o.G=d.getHours();
o.g=(o.g=o.G%12)?o.g:12;
o.A=o.G<12?jindo.$Date.names.ampm[0]:jindo.$Date.names.ampm[1];
o.a=o.A.toLowerCase();
o.H=(o.G>9?"":"0")+o.G;
o.h=(o.g>9?"":"0")+o.g;
return o[m];
case"i":o.i=(((o.i=d.getMinutes())>9)?"":"0")+o.i;
return o.i;
case"s":o.s=(((o.s=d.getSeconds())>9)?"":"0")+o.s;
return o.s;
case"u":o.u=d.getMilliseconds();
return o.u;
case"U":o.U=this.time();
return o.U;
default:return m
}})
};
jindo.$Date.prototype.time=function(nTime){if(typeof nTime=="number"){this._date.setTime(nTime);
return this
}return this._date.getTime()
};
jindo.$Date.prototype.year=function(nYear){if(typeof nYear=="number"){this._date.setFullYear(nYear);
return this
}return this._date.getFullYear()
};
jindo.$Date.prototype.month=function(nMon){if(typeof nMon=="number"){this._date.setMonth(nMon);
return this
}return this._date.getMonth()
};
jindo.$Date.prototype.date=function(nDate){if(typeof nDate=="number"){this._date.setDate(nDate);
return this
}return this._date.getDate()
};
jindo.$Date.prototype.day=function(){return this._date.getDay()
};
jindo.$Date.prototype.hours=function(nHour){if(typeof nHour=="number"){this._date.setHours(nHour);
return this
}return this._date.getHours()
};
jindo.$Date.prototype.seconds=function(nSec){if(typeof nSec=="number"){this._date.setSeconds(nSec);
return this
}return this._date.getSeconds()
};
jindo.$Date.prototype.minutes=function(nMin){if(typeof nMin=="number"){this._date.setMinutes(nMin);
return this
}return this._date.getMinutes()
};
jindo.$Date.prototype.isLeapYear=function(){var y=this._date.getFullYear();
return !(y%4)&&!!(y%100)||!(y%400)
};
jindo.$Window=function(el){var cl=arguments.callee;
if(el instanceof cl){return el
}if(!(this instanceof cl)){return new cl(el)
}this._win=el||window
};
jindo.$Window.prototype.$value=function(){return this._win
};
jindo.$Window.prototype.resizeTo=function(nWidth,nHeight){this._win.resizeTo(nWidth,nHeight);
return this
};
jindo.$Window.prototype.resizeBy=function(nWidth,nHeight){this._win.resizeBy(nWidth,nHeight);
return this
};
jindo.$Window.prototype.moveTo=function(nLeft,nTop){this._win.moveTo(nLeft,nTop);
return this
};
jindo.$Window.prototype.moveBy=function(nLeft,nTop){this._win.moveBy(nLeft,nTop);
return this
};
jindo.$Window.prototype.sizeToContent=function(){if(typeof this._win.sizeToContent=="function"){this._win.sizeToContent()
}else{var doc=jindo.$Document(this._win.document);
var clientSize=doc.clientSize();
var scrollSize=doc.scrollSize();
this.resizeBy(scrollSize.width-clientSize.width,scrollSize.height-clientSize.height)
}return this
};
if(typeof window!="undefined"){for(prop in jindo){window[prop]=jindo[prop]
}}if(typeof jindo=="undefined"){jindo={};
jindo.$Class=$Class;
jindo.$Event=$Event;
jindo.$H=$H;
jindo.$Fn=$Fn
}nhn.Component=jindo.$Class({_eventHandlers:null,_options:null,$init:function(){var ins=this.constructor._instances;
if(typeof ins=="undefined"){this.constructor._instances=ins=[]
}ins[ins.length]=this;
this._eventHandlers={};
this._options={};
this._options._setters={}
},option:function(sName,sValue){var nameType=(typeof sName);
if(nameType=="undefined"){return this._options
}else{if(nameType=="string"){if(typeof sValue!="undefined"){this._options[sName]=sValue;
if(typeof this._options._setters[sName]=="function"){this._options._setters[sName](sValue)
}return this
}else{return this._options[sName]
}}else{if(nameType=="object"){try{for(var x in sName){this._options[x]=sName[x];
if(typeof this._options._setters[x]=="function"){this._options._setters[x](sName[x])
}}}catch(e){}return this
}}}},optionSetter:function(sName,fSetter){var nameType=(typeof sName);
if(nameType=="undefined"){return this._options._setters
}else{if(nameType=="string"){if(typeof fSetter!="undefined"){this._options._setters[sName]=jindo.$Fn(fSetter,this).bind();
return this
}else{return this._options._setters[sName]
}}else{if(nameType=="object"){try{for(var x in sName){this._options._setters[x]=jindo.$Fn(sName[x],this).bind()
}}catch(e){}return this
}}}},fireEvent:function(sEvent,oEvent){var oEvent=oEvent?(oEvent instanceof jindo.$Event?oEvent._event:oEvent):{};
var inlineHandler=this["on"+sEvent];
var handlerList=this._eventHandlers[sEvent];
var bHasInlineHandler=typeof inlineHandler=="function";
var bHasHandlerList=typeof handlerList!="undefined";
if(!bHasInlineHandler&&!bHasHandlerList){return true
}var isRealEvent=(function(oEvent){try{if(oEvent instanceof Event){return true
}}catch(x){}try{if(oEvent instanceof MouseEvent){return true
}}catch(x){}try{if(oEvent instanceof KeyEvent){return true
}}catch(x){}try{if(("cancelBubble" in oEvent||"preventBubble" in oEvent)&&"type" in oEvent){return true
}}catch(x){}return false
})(oEvent);
if(!isRealEvent){try{if(typeof oEvent._extends=="undefined"){oEvent._extends=[];
oEvent.stop=function(){this._extends[this._extends.length-1].canceled=true
}
}oEvent._extends.push({type:sEvent,canceled:false});
oEvent.type=sEvent
}catch(e){isRealEvent=true
}}if(isRealEvent){oEvent=jindo.$Event(oEvent)
}var aArg=[oEvent];
for(var i=2,len=arguments.length;
i<len;
i++){aArg.push(arguments[i])
}if(bHasInlineHandler){inlineHandler.apply(this,aArg)
}if(bHasHandlerList){handlerList=handlerList.concat()
}for(var i=0,handler;
handler=handlerList[i];
i++){handler.apply(this,aArg)
}if(isRealEvent){return !oEvent.canceled
}var oPopedEvent=oEvent._extends.pop();
return !oPopedEvent.canceled
},attach:function(sEvent,fHandler){if(arguments.length==1){jindo.$H(arguments[0]).forEach(jindo.$Fn(function(fHandler,sEvent){this.attach(sEvent,fHandler)
},this).bind());
return this
}var handlers=this._eventHandlers[sEvent];
if(typeof handlers=="undefined"){handlers=this._eventHandlers[sEvent]=[]
}handlers.push(fHandler);
return this
},detach:function(sEvent,fHandler){if(arguments.length==1){jindo.$H(arguments[0]).forEach($Fn(function(fHandler,sEvent){this.detach(sEvent,fHandler)
},this).bind());
return this
}var handlers=this._eventHandlers[sEvent];
if(typeof handlers=="undefined"){return this
}for(var i=0,handler;
handler=handlers[i];
i++){if(handler===fHandler){handlers=handlers.splice(i,1);
break
}}return this
},detachAll:function(sEvent){var handlers=this._eventHandlers;
if(arguments.length){if(typeof handlers[sEvent]=="undefined"){return this
}delete handlers[sEvent];
return this
}for(var o in handlers){delete handlers[o]
}return this
}});
nhn.Component.factory=function(objs,opt){var retArr=[];
if(typeof opt=="undefined"){opt={}
}for(var i=0;
i<objs.length;
i++){try{obj=new this(objs[i],opt);
retArr[retArr.length]=obj
}catch(e){}}return retArr
};
nhn.HTMLComponent=jindo.$Class({tagName:""}).extend(nhn.Component);
nhn.HTMLComponent.paint=function(){var ins=this._instances;
if(typeof ins=="undefined"){return
}for(var i=0;
i<ins.length;
i++){if(ins[i]&&ins[i].paint){ins[i].paint()
}}};
nhn.HTMLComponent.factory=function(objs,opt){if(typeof objs=="string"){var sClassName=objs;
if(/^(\w+)\s*(?:\[(\w+)\s*=\s*(\w+)\])?$/.test(this.prototype.tagName)){var a=[];
objs=document.getElementsByTagName(RegExp.$1);
if(RegExp.$2&&RegExp.$3){for(var i=0;
i<objs.length;
i++){if(objs[i].getAttribute(RegExp.$2)==RegExp.$3){a[a.length]=objs[i]
}}objs=a
}if(sClassName){var regex=new RegExp("\\b"+sClassName+"\\b","i");
for(var i=0,a=[];
i<objs.length;
i++){if(regex.test(objs[i].className)){a[a.length]=objs[i]
}}objs=a
}}else{return[]
}}this._tmpFactory=nhn.Component.factory;
var objs=this._tmpFactory(objs,opt);
delete this._tmpFactory;
return objs
};
(function(_namespace){var jsTags=document.getElementsByTagName("script");
var jsTag=jsTags[jsTags.length-1];
if(jsTag&&/[\?&]jindo=([^&]+)/.test(jsTag.src)){_namespace=RegExp.$1
}var jindo=window[_namespace];
jindo.Component=jindo.$Class({_htEventHandler:null,_htOption:null,$init:function(){var t=this.constructor.getInstance();
t.push(this),this._htEventHandler={},this._htOption={},this._htOption._htSetter={}
},option:function(t,e){switch(typeof t){case"undefined":var i={};
for(var n in this._htOption){"htCustomEventHandler"!=n&&"_htSetter"!=n&&(i[n]=this._htOption[n])
}return i;
case"string":if("undefined"==typeof e){return this._htOption[t]
}if("htCustomEventHandler"==t){if("undefined"!=typeof this._htOption[t]){return this
}this.attach(e)
}this._htOption[t]=e,"function"==typeof this._htOption._htSetter[t]&&this._htOption._htSetter[t](e);
break;
case"object":for(var s in t){if("htCustomEventHandler"==s){if("undefined"!=typeof this._htOption[s]){continue
}this.attach(t[s])
}"_htSetter"!==s&&(this._htOption[s]=t[s]),"function"==typeof this._htOption._htSetter[s]&&this._htOption._htSetter[s](t[s])
}}return this
},optionSetter:function(t,e){switch(typeof t){case"undefined":return this._htOption._htSetter;
case"string":if("undefined"==typeof e){return this._htOption._htSetter[t]
}this._htOption._htSetter[t]=jindo.$Fn(e,this).bind();
break;
case"object":for(var i in t){this._htOption._htSetter[i]=jindo.$Fn(t[i],this).bind()
}}return this
},fireEvent:function(t,e){e=e||{};
var i=this["on"+t],n=this._htEventHandler[t]||[],s="function"==typeof i,o=n.length>0;
if(!s&&!o){return !0
}n=n.concat(),e.sType=t,"undefined"==typeof e._aExtend&&(e._aExtend=[],e.stop=function(){e._aExtend.length>0&&(e._aExtend[e._aExtend.length-1].bCanceled=!0)
}),e._aExtend.push({sType:t,bCanceled:!1});
var a,r,h=[e];
for(a=2,r=arguments.length;
r>a;
a++){h.push(arguments[a])
}if(s&&i.apply(this,h),o){var l;
for(a=0,l;
l=n[a];
a++){l.apply(this,h)
}}return !e._aExtend.pop().bCanceled
},attach:function(t,e){if(1==arguments.length){return jindo.$H(arguments[0]).forEach(jindo.$Fn(function(t,e){this.attach(e,t)
},this).bind()),this
}var i=this._htEventHandler[t];
return"undefined"==typeof i&&(i=this._htEventHandler[t]=[]),i.push(e),this
},detach:function(t,e){if(1==arguments.length){return jindo.$H(arguments[0]).forEach(jindo.$Fn(function(t,e){this.detach(e,t)
},this).bind()),this
}var i=this._htEventHandler[t];
if(i){for(var n,s=0;
n=i[s];
s++){if(n===e){i=i.splice(s,1);
break
}}}return this
},detachAll:function(t){var e=this._htEventHandler;
if(arguments.length){return"undefined"==typeof e[t]?this:(delete e[t],this)
}for(var i in e){delete e[i]
}return this
}}),jindo.Component.factory=function(t,e){var i,n=[];
"undefined"==typeof e&&(e={});
for(var s,o=0;
s=t[o];
o++){i=new this(s,e),n[n.length]=i
}return n
},jindo.Component.getInstance=function(){return"undefined"==typeof this._aInstance&&(this._aInstance=[]),this._aInstance
},jindo.LayerPosition=jindo.$Class({$init:function(t,e,i){this.option({sPosition:"outside-bottom",sAlign:"left",sValign:"",nTop:0,nLeft:0,bAuto:!1}),this.option(i||{}),this.setElement(t),e&&this.setLayer(e),t&&e&&this.setPosition(),this._wfSetPosition=jindo.$Fn(function(){var t=this._elLayer;
t&&this._welLayer.visible()&&this.fireEvent("beforeAdjust",{elLayer:t,htCurrentPosition:this.getCurrentPosition(),htAdjustedPosition:this._adjustPosition(this.getCurrentPosition())})&&(this.setPosition(),this.fireEvent("adjust",{elLayer:t,htCurrentPosition:this.getCurrentPosition()}))
},this),this.option("bAuto")&&this._wfSetPosition.attach(window,"scroll").attach(window,"resize")
},getElement:function(){return this._el
},setElement:function(t){return this._wel=this._el=jindo.$(t),this._el&&(this._wel=jindo.$Element(t)),this
},getLayer:function(){return this._elLayer
},setLayer:function(t){return this._elLayer=jindo.$(t),this._welLayer=jindo.$Element(t),this._elLayer.parentNode!=document.body&&document.body.appendChild(this._elLayer),this
},_isPosition:function(t,e){return t.sPosition.indexOf(e)>-1?!0:!1
},_setLeftRight:function(t,e){var i=this.getElement(),n=this.getLayer(),s=i.offsetWidth,o=n.offsetWidth;
i==document.body&&(s=jindo.$Document().clientSize().width);
var a=this._isPosition(t,"left"),r=this._isPosition(t,"right"),h=this._isPosition(t,"inside");
return a?h?e.nLeft+=t.nLeft:(e.nLeft-=o,e.nLeft-=t.nLeft):r?(e.nLeft+=s,h?(e.nLeft-=o,e.nLeft-=t.nLeft):e.nLeft+=t.nLeft):("left"==t.sAlign&&(e.nLeft+=t.nLeft),"center"==t.sAlign&&(e.nLeft+=(s-o)/2),"right"==t.sAlign&&(e.nLeft+=s-o,e.nLeft-=t.nLeft)),e
},_setVerticalAlign:function(t,e){var i=this.getElement(),n=this.getLayer(),s=i.offsetHeight,o=n.offsetHeight;
switch(i==document.body&&(s=jindo.$Document().clientSize().height),t.sValign){case"top":e.nTop+=t.nTop;
break;
case"middle":e.nTop+=(s-o)/2;
break;
case"bottom":e.nTop+=s-o-t.nTop
}return e
},_adjustScrollPosition:function(t){if(this.getElement()==document.body){var e=jindo.$Document().scrollPosition();
t.nTop+=e.top,t.nLeft+=e.left
}return t
},getPosition:function(t){"object"!=typeof t&&(t=this.option()),"undefined"==typeof t.nTop&&(t.nTop=0),"undefined"==typeof t.nLeft&&(t.nLeft=0);
var e,i=this._isPosition(t,"center"),n=this._isPosition(t,"inside"),s=this._isPosition(t,"top"),o=this._isPosition(t,"bottom"),a=this._isPosition(t,"left"),r=this._isPosition(t,"right");
a&&(e="left"),r&&(e="right"),s&&(e="top"),o&&(e="bottom"),i&&(e="center");
var h,l=this.getElement(),f=jindo.$Element(l),c=this.getLayer(),u=jindo.$Element(c),d=f.offset(),_=l.offsetWidth,p=l.offsetHeight,g=c.offsetWidth,E=c.offsetHeight,v={nTop:d.top,nLeft:d.left};
switch(l==document.body&&(h=jindo.$Document().clientSize(),_=h.width,p=h.height),g+=parseInt(u.css("marginLeft"),10)+parseInt(u.css("marginRight"),10)||0,E+=parseInt(u.css("marginTop"),10)+parseInt(u.css("marginBottom"),10)||0,e){case"center":v.nTop+=(p-E)/2,v.nTop+=t.nTop,v.nLeft+=(_-g)/2,v.nLeft+=t.nLeft;
break;
case"top":n?v.nTop+=t.nTop:v.nTop-=t.nTop+E,v=this._setLeftRight(t,v);
break;
case"bottom":v.nTop+=p,n?v.nTop-=t.nTop+E:v.nTop+=t.nTop,v=this._setLeftRight(t,v);
break;
case"left":n?v.nLeft+=t.nLeft:v.nLeft-=t.nLeft+g,v=this._setVerticalAlign(t,v);
break;
case"right":v.nLeft+=_,n?v.nLeft-=t.nLeft+g:v.nLeft+=t.nLeft,v=this._setVerticalAlign(t,v)
}if(v=this._adjustScrollPosition(v),jindo.$Agent().navigator().ie&&jindo.$Agent().navigator().version<8&&window.external){try{var m=window!=top&&window.frameElement&&!window.frameElement.frameBorder;
m&&(v.nLeft-=2,v.nTop-=2)
}catch(j){}}return v
},setPosition:function(t){var e=jindo.$Element(this.getLayer()),i=e.visible();
return i||e.show(),e.css("left","-9999px").css("top","0px"),"undefined"==typeof t&&(t=this.getPosition()),this.option("bAuto")&&(t=this._adjustPosition(t)),e.css("left",t.nLeft+"px").css("top",t.nTop+"px"),i||e.hide(),this
},getCurrentPosition:function(){var t=jindo.$Element(this.getLayer());
return{nTop:parseInt(t.css("top"),10),nLeft:parseInt(t.css("left"),10)}
},_isFullyVisible:function(t){var e=this.getLayer(),i=jindo.$Element(e),n=jindo.$Document().scrollPosition(),s=n.top,o=n.left,a=jindo.$Document().clientSize(),r=e.offsetWidth+(parseInt(i.css("marginLeft"),10)+parseInt(i.css("marginRight"),10)||0),h=e.offsetHeight+(parseInt(i.css("marginTop"),10)+parseInt(i.css("marginBottom"),10)||0);
return t.nLeft>=0&&t.nTop>=0&&a.width>=t.nLeft-o+r&&a.height>=t.nTop-s+h?!0:!1
},_mirrorHorizontal:function(t){if("center"==t.sAlign||"inside-center"==t.sPosition){return t
}var e={};
for(var i in t){e[i]=t[i]
}return this._isPosition(e,"right")?e.sPosition=e.sPosition.replace(/right/,"left"):this._isPosition(e,"left")?e.sPosition=e.sPosition.replace(/left/,"right"):"right"==e.sAlign?e.sAlign="left":"left"==e.sAlign&&(e.sAlign="right"),e
},_mirrorVertical:function(t){if("middle"==t.sValign||"inside-center"==t.sPosition){return t
}var e={};
for(var i in t){e[i]=t[i]
}return this._isPosition(e,"top")?e.sPosition=e.sPosition.replace(/top/,"bottom"):this._isPosition(e,"bottom")?e.sPosition=e.sPosition.replace(/bottom/,"top"):"top"==e.sValign?e.sValign="bottom":"bottom"==e.sValign&&(e.sValign="top"),e
},_adjustPosition:function(t){var e=this.option(),i=[];
i.push(t),i.push(this.getPosition(this._mirrorHorizontal(e))),i.push(this.getPosition(this._mirrorVertical(e))),i.push(this.getPosition(this._mirrorVertical(this._mirrorHorizontal(e))));
for(var n,s=0;
n=i[s];
s++){if(this._isFullyVisible(n)){t=n;
break
}}return t
}}).extend(jindo.Component),jindo.Dialog=jindo.$Class({$init:function(t){var e={sClassPrefix:"dialog-",LayerPosition:{sPosition:"inside-center",bAuto:!0}};
this.option(e),this.option(t||{}),this._bIsEventAttached=!1,this._bIsShown=!1,this._assignHTMLElements(),this._initLayerPosition()
},_assignHTMLElements:function(){this._elLayer=jindo.$('<div class="'+this.option("sClassPrefix")+'layer"></div>'),this._welLayer=jindo.$Element(this._elLayer),this._wfClick=jindo.$Fn(this._onClick,this),jindo.$Element.prototype.preventTapHighlight&&this._welLayer.preventTapHighlight(!0)
},_initLayerPosition:function(){this._oLayerPosition=new jindo.LayerPosition(document.body,this._elLayer,this.option("LayerPosition"))
},getLayer:function(){return this._elLayer
},getLayerPosition:function(){return this._oLayerPosition
},setLayerTemplate:function(t){this._sTemplate=t,this._template=jindo.$Template(this._sTemplate)
},getLayerTemplate:function(){return this._sTemplate
},show:function(t,e){if(!this.isShown()){this.attach(e),document.body.appendChild(this._elLayer),this._welLayer.html(this._template.process(t));
var i={elLayer:this._elLayer};
this.fireEvent("beforeShow",i)&&(this._welLayer.show(),this._attachEvents(),this.getLayerPosition().setPosition(),this._bIsShown=!0,this.fireEvent("show",i))
}},hide:function(){if(this.isShown()){var t={elLayer:this._elLayer};
this.fireEvent("beforeHide",t)&&(this.detachAll("close").detachAll("confirm").detachAll("cancel"),this._detachEvents(),this._welLayer.hide(),this._welLayer.leave(),this._bIsShown=!1,this.fireEvent("hide",t))
}},isShown:function(){return this._bIsShown
},_isEventAttached:function(){return this._bIsEventAttached
},_attachEvents:function(){return this._isEventAttached()||(this._wfClick.attach(this._elLayer,"click"),this._bIsEventAttached=!0),this
},_detachEvents:function(){return this._isEventAttached()&&(this._wfClick.detach(this._elLayer,"click"),this._bIsEventAttached=!1),this
},_onClick:function(t){var e,i,n,s=this.option("sClassPrefix");
(e=this._getClosest("."+s+"close",t.element))?this.fireEvent("close")&&this.hide():(i=this._getClosest("."+s+"confirm",t.element))?this.fireEvent("confirm")&&this.hide():(n=this._getClosest("."+s+"cancel",t.element))&&this.fireEvent("cancel")&&this.hide()
},_getClosest:function(t,e){return jindo.$$.test(e,t)?e:jindo.$$.getSingle("! "+t,e)
}}).extend(jindo.Component),jindo.Effect=function(t){if(this instanceof arguments.callee){throw new Error("You can't create a instance of this")
}var e=/^(\-?[0-9\.]+)(%|px|pt|em)?$/,i=/^rgb\(([0-9]+)\s?,\s?([0-9]+)\s?,\s?([0-9]+)\)$/i,n=/^#([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})$/i,s=/^#([0-9A-F])([0-9A-F])([0-9A-F])$/i,o=function(t){var o,a=t;
return e.test(t)?(a=parseFloat(t),o=RegExp.$2||""):i.test(t)?(a=[parseInt(RegExp.$1,10),parseInt(RegExp.$2,10),parseInt(RegExp.$3,10)],o="color"):n.test(t=t.replace(s,"#$1$1$2$2$3$3"))&&(a=[parseInt(RegExp.$1,16),parseInt(RegExp.$2,16),parseInt(RegExp.$3,16)],o="color"),{nValue:a,sUnit:o}
};
return function(e,i){var n;
if(arguments.length>1?(e=o(e),i=o(i),n=i.sUnit):(i=o(e),e=null,n=i.sUnit),e&&i&&e.sUnit!=i.sUnit){throw new Error("unit error")
}e=e&&e.nValue,i=i&&i.nValue;
var s=function(s){var o=t(s),a=function(t,e){return(e-t)*o+t+n
};
if("color"==n){var r=Math.max(0,Math.min(255,parseInt(a(e[0],i[0]),10)))<<16;
r|=Math.max(0,Math.min(255,parseInt(a(e[1],i[1]),10)))<<8,r|=Math.max(0,Math.min(255,parseInt(a(e[2],i[2]),10))),r=r.toString(16).toUpperCase();
for(var h=0;
6-r.length;
h++){r="0"+r
}return"#"+r
}return a(e,i)
};
return null===e&&(s.setStart=function(t){if(t=o(t),t.sUnit!=n){throw new Error("unit eror")
}e=t.nValue
}),s
}
},jindo.Effect.linear=jindo.Effect(function(t){return t
}),jindo.Effect.easeInSine=jindo.Effect(function(t){return 1==t?1:-Math.cos(t*(Math.PI/2))+1
}),jindo.Effect.easeOutSine=jindo.Effect(function(t){return Math.sin(t*(Math.PI/2))
}),jindo.Effect.easeInOutSine=jindo.Effect(function(t){return 0.5>t?0.5*jindo.Effect.easeInSine(0,1)(2*t):0.5*jindo.Effect.easeOutSine(0,1)(2*t-1)+0.5
}),jindo.Effect.easeOutInSine=jindo.Effect(function(t){return 0.5>t?0.5*jindo.Effect.easeOutSine(0,1)(2*t):0.5*jindo.Effect.easeInSine(0,1)(2*t-1)+0.5
}),jindo.Effect.easeInQuad=jindo.Effect(function(t){return t*t
}),jindo.Effect.easeOutQuad=jindo.Effect(function(t){return -(t*(t-2))
}),jindo.Effect.easeInOutQuad=jindo.Effect(function(t){return 0.5>t?0.5*jindo.Effect.easeInQuad(0,1)(2*t):0.5*jindo.Effect.easeOutQuad(0,1)(2*t-1)+0.5
}),jindo.Effect.easeOutInQuad=jindo.Effect(function(t){return 0.5>t?0.5*jindo.Effect.easeOutQuad(0,1)(2*t):0.5*jindo.Effect.easeInQuad(0,1)(2*t-1)+0.5
}),jindo.Effect.easeInCubic=jindo.Effect(function(t){return Math.pow(t,3)
}),jindo.Effect.easeOutCubic=jindo.Effect(function(t){return Math.pow(t-1,3)+1
}),jindo.Effect.easeInOutCubic=jindo.Effect(function(t){return 0.5>t?0.5*jindo.Effect.easeIn(0,1)(2*t):0.5*jindo.Effect.easeOut(0,1)(2*t-1)+0.5
}),jindo.Effect.easeOutInCubic=jindo.Effect(function(t){return 0.5>t?0.5*jindo.Effect.easeOut(0,1)(2*t):0.5*jindo.Effect.easeIn(0,1)(2*t-1)+0.5
}),jindo.Effect.easeInQuart=jindo.Effect(function(t){return Math.pow(t,4)
}),jindo.Effect.easeOutQuart=jindo.Effect(function(t){return -(Math.pow(t-1,4)-1)
}),jindo.Effect.easeInOutQuart=jindo.Effect(function(t){return 0.5>t?0.5*jindo.Effect.easeInQuart(0,1)(2*t):0.5*jindo.Effect.easeOutQuart(0,1)(2*t-1)+0.5
}),jindo.Effect.easeOutInQuart=jindo.Effect(function(t){return 0.5>t?0.5*jindo.Effect.easeOutQuart(0,1)(2*t):0.5*jindo.Effect.easeInQuart(0,1)(2*t-1)+0.5
}),jindo.Effect.easeInQuint=jindo.Effect(function(t){return Math.pow(t,5)
}),jindo.Effect.easeOutQuint=jindo.Effect(function(t){return Math.pow(t-1,5)+1
}),jindo.Effect.easeInOutQuint=jindo.Effect(function(t){return 0.5>t?0.5*jindo.Effect.easeInQuint(0,1)(2*t):0.5*jindo.Effect.easeOutQuint(0,1)(2*t-1)+0.5
}),jindo.Effect.easeOutInQuint=jindo.Effect(function(t){return 0.5>t?0.5*jindo.Effect.easeOutQuint(0,1)(2*t):0.5*jindo.Effect.easeInQuint(0,1)(2*t-1)+0.5
}),jindo.Effect.easeInCircle=jindo.Effect(function(t){return -(Math.sqrt(1-t*t)-1)
}),jindo.Effect.easeOutCircle=jindo.Effect(function(t){return Math.sqrt(1-(t-1)*(t-1))
}),jindo.Effect.easeInOutCircle=jindo.Effect(function(t){return 0.5>t?0.5*jindo.Effect.easeInCircle(0,1)(2*t):0.5*jindo.Effect.easeOutCircle(0,1)(2*t-1)+0.5
}),jindo.Effect.easeOutInCircle=jindo.Effect(function(t){return 0.5>t?0.5*jindo.Effect.easeOutCircle(0,1)(2*t):0.5*jindo.Effect.easeInCircle(0,1)(2*t-1)+0.5
}),jindo.Effect.easeInBack=jindo.Effect(function(t){var e=1.70158;
return 1==t?1:t/1*(t/1)*((1+e)*t-e)
}),jindo.Effect.easeOutBack=jindo.Effect(function(t){var e=1.70158;
return 0===t?0:(t=t/1-1)*t*((e+1)*t+e)+1
}),jindo.Effect.easeInOutBack=jindo.Effect(function(t){return 0.5>t?0.5*jindo.Effect.easeInBack(0,1)(2*t):0.5*jindo.Effect.easeOutBack(0,1)(2*t-1)+0.5
}),jindo.Effect.easeInElastic=jindo.Effect(function(t){var e,i=0,n=0;
return 0===t?0:1==(t/=1)?1:(i||(i=0.3),!n||1>n?(n=1,e=i/4):e=i/(2*Math.PI)*Math.asin(1/n),-(n*Math.pow(2,10*(t-=1))*Math.sin(2*(t-1)*Math.PI/i)))
}),jindo.Effect.easeOutElastic=jindo.Effect(function(t){var e,i=0,n=0;
return 0===t?0:1==(t/=1)?1:(i||(i=0.3),!n||1>n?(n=1,e=i/4):e=i/(2*Math.PI)*Math.asin(1/n),n*Math.pow(2,-10*t)*Math.sin(2*(t-e)*Math.PI/i)+1)
}),jindo.Effect.easeInOutElastic=jindo.Effect(function(t){var e,i=0,n=0;
return 0===t?0:2==(t/=0.5)?1:(i||(i=0.3*1.5),!n||1>n?(n=1,e=i/4):e=i/(2*Math.PI)*Math.asin(1/n),1>t?-0.5*n*Math.pow(2,10*(t-=1))*Math.sin(2*(t-e)*Math.PI/i):n*Math.pow(2,-10*(t-=1))*Math.sin(2*(t-e)*Math.PI/i)*0.5+1)
}),jindo.Effect.easeOutBounce=jindo.Effect(function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+0.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+0.9375:7.5625*(t-=2.625/2.75)*t+0.984375
}),jindo.Effect.easeInBounce=jindo.Effect(function(t){return 1-jindo.Effect.easeOutBounce(0,1)(1-t)
}),jindo.Effect.easeInOutBounce=jindo.Effect(function(t){return 0.5>t?0.5*jindo.Effect.easeInBounce(0,1)(2*t):0.5*jindo.Effect.easeOutBounce(0,1)(2*t-1)+0.5
}),jindo.Effect.easeInExpo=jindo.Effect(function(t){return 0===t?0:Math.pow(2,10*(t-1))
}),jindo.Effect.easeOutExpo=jindo.Effect(function(t){return 1==t?1:-Math.pow(2,-10*t/1)+1
}),jindo.Effect.easeInOutExpo=jindo.Effect(function(t){return 0.5>t?0.5*jindo.Effect.easeInExpo(0,1)(2*t):0.5*jindo.Effect.easeOutExpo(0,1)(2*t-1)+0.5
}),jindo.Effect.easeOutInExpo=jindo.Effect(function(t){return 0.5>t?0.5*jindo.Effect.easeOutExpo(0,1)(2*t):0.5*jindo.Effect.easeInExpo(0,1)(2*t-1)+0.5
}),jindo.Effect._cubicBezier=function(t,e,i,n){return function(s){function o(t){return((c*t+f)*t+l)*t
}function a(t){return((_*t+d)*t+u)*t
}function r(t){return(3*c*t+2*f)*t+l
}function h(t,e){var i,n,s,a,h,l;
for(s=t,l=0;
8>l;
l++){if(a=o(s)-t,Math.abs(a)<e){return s
}if(h=r(s),Math.abs(h)<0.000001){break
}s-=a/h
}if(i=0,n=1,s=t,i>s){return i
}if(s>n){return n
}for(;
n>i;
){if(a=o(s),Math.abs(a-t)<e){return s
}t>a?i=s:n=s,s=0.5*(n-i)+i
}return s
}var l=3*t,f=3*(i-t)-l,c=1-l-f,u=3*e,d=3*(n-e)-u,_=1-u-d;
return a(h(s,0.005))
}
},jindo.Effect.cubicBezier=function(t,e,i,n){return jindo.Effect(jindo.Effect._cubicBezier(t,e,i,n))
},jindo.Effect.cubicEase=jindo.Effect.cubicBezier(0.25,0.1,0.25,1),jindo.Effect.cubicEaseIn=jindo.Effect.cubicBezier(0.42,0,1,1),jindo.Effect.cubicEaseOut=jindo.Effect.cubicBezier(0,0,0.58,1),jindo.Effect.cubicEaseInOut=jindo.Effect.cubicBezier(0.42,0,0.58,1),jindo.Effect.cubicEaseOutIn=jindo.Effect.cubicBezier(0,0.42,1,0.58),jindo.Effect.overphase=jindo.Effect(function(t){return t/=0.652785,(Math.sqrt((2-t)*t)+0.1*t).toFixed(5)
}),jindo.Effect.sinusoidal=jindo.Effect(function(t){return -Math.cos(t*Math.PI)/2+0.5
}),jindo.Effect.mirror=jindo.Effect(function(t){return jindo.Effect.sinusoidal(0,1)(0.5>t?2*t:1-2*(t-0.5))
}),jindo.Effect.pulse=function(t){return jindo.Effect(function(e){return -Math.cos(e*(t-0.5)*2*Math.PI)/2+0.5
})
},jindo.Effect.wave=function(t,e){return jindo.Effect(function(i){return(e||1)*Math.sin(360*t*i*Math.PI/180).toFixed(5)
})
},jindo.Effect.easeIn=jindo.Effect.easeInCubic,jindo.Effect.easeOut=jindo.Effect.easeOutCubic,jindo.Effect.easeInOut=jindo.Effect.easeInOutCubic,jindo.Effect.easeOutIn=jindo.Effect.easeOutInCubic,jindo.Effect.bounce=jindo.Effect.easeOutBounce,jindo.Effect.elastic=jindo.Effect.easeInElastic,jindo.UIComponent=jindo.$Class({$init:function(){this._bIsActivating=!1
},isActivating:function(){return this._bIsActivating
},activate:function(){return this.isActivating()?this:(this._bIsActivating=!0,arguments.length>0?this._onActivate.apply(this,arguments):this._onActivate(),this)
},deactivate:function(){return this.isActivating()?(this._bIsActivating=!1,arguments.length>0?this._onDeactivate.apply(this,arguments):this._onDeactivate(),this):this
}}).extend(jindo.Component),jindo.HTMLComponent=jindo.$Class({sTagName:"",$init:function(){},paint:function(){return this._onPaint(),this
}}).extend(jindo.UIComponent),jindo.HTMLComponent.paint=function(){for(var t,e=this.getInstance(),i=0;
t=e[i];
i++){t.paint()
}},jindo.Timer=jindo.$Class({$init:function(){this._nTimer=null,this._nLatest=null,this._nRemained=0,this._nDelay=null,this._fRun=null,this._bIsRunning=!1
},start:function(t,e){return this.abort(),this._nRemained=0,this._nDelay=e,this._fRun=t,this._bIsRunning=!0,this._nLatest=this._getTime(),this.fireEvent("wait"),this._excute(this._nDelay,!1),!0
},isRunning:function(){return this._bIsRunning
},_getTime:function(){return(new Date).getTime()
},_clearTimer:function(){var t=!1;
return this._nTimer&&(clearInterval(this._nTimer),this._bIsRunning=!1,t=!0),this._nTimer=null,t
},abort:function(){var t=this._clearTimer();
return t&&(this.fireEvent("abort"),this._fRun=null),t
},pause:function(){var t=this._getTime()-this._nLatest;
return this._nRemained=Math.max(this._nDelay-t,0),this._clearTimer()
},_excute:function(t,e){var i=this;
this._clearTimer(),this._bIsRunning=!0;
var n=function(t){if(i._nTimer||t){i.fireEvent("run");
var n=i._fRun();
if(i._nLatest=i._getTime(),!n){return t||clearInterval(i._nTimer),i._nTimer=null,i._bIsRunning=!1,void i.fireEvent("end")
}i.fireEvent("wait"),(e||t)&&i._excute(i._nDelay,!1)
}};
t>-1?this._nTimer=setInterval(n,t):n(!0)
},resume:function(){return !this._fRun||this.isRunning()?!1:(this._bIsRunning=!0,this.fireEvent("wait"),this._excute(this._nRemained,!0),this._nRemained=0,!0)
}}).extend(jindo.Component),jindo.LayerManager=jindo.$Class({_bIsActivating:!1,_bIsHiding:!1,_bIsShowing:!1,_aLink:null,$init:function(t,e){this.option({sCheckEvent:"click",nCheckDelay:100,nShowDelay:0,nHideDelay:100}),this.option(e||{}),this.setLayer(t),this._aLink=[],this._oShowTimer=new jindo.Timer,this._oHideTimer=new jindo.Timer,this._oEventTimer=new jindo.Timer,this._wfOnEvent=jindo.$Fn(this._onEvent,this),this.getVisible(),this.activate()
},_onActivate:function(){this._wfOnEvent.attach(document,this.option("sCheckEvent"))
},_onDeactivate:function(){this._wfOnEvent.detach(document,this.option("sCheckEvent"))
},getVisible:function(){return this._wel.visible()
},_check:function(t){for(var e,i,n=jindo.$Element(t),s=0;
e=this._aLink[s];
s++){if(i=jindo.$Element(e),i&&(e=i.$value(),e&&(t==e||n.isChildOf(e)))){return !0
}}return !1
},_find:function(t){for(var e,i=0;
e=this._aLink[i];
i++){if(e==t){return i
}}return -1
},getLayer:function(){return this._el
},setLayer:function(t){return this._el=jindo.$(t),this._wel=jindo.$Element(t),this
},getLinks:function(){return this._aLink
},setLinks:function(t){return this._aLink=jindo.$A(t).unique().$value(),this
},link:function(t){if(arguments.length>1){for(var e=0,i=arguments.length;
i>e;
e++){this.link(arguments[e])
}return this
}return -1!=this._find(t)?this:(this._aLink.push(t),this)
},unlink:function(t){if(arguments.length>1){for(var e=0,i=arguments.length;
i>e;
e++){this.unlink(arguments[e])
}return this
}var n=this._find(t);
return n>-1&&this._aLink.splice(n,1),this
},_fireEventBeforeShow:function(){return this.fireEvent("beforeShow",{elLayer:this.getLayer(),aLinkedElement:this.getLinks()})
},_fireEventShow:function(){this._bIsShowing=!1,this.fireEvent("show",{elLayer:this.getLayer(),aLinkedElement:this.getLinks()})
},_fireEventBeforeHide:function(){var t=this.fireEvent("beforeHide",{elLayer:this.getLayer(),aLinkedElement:this.getLinks()});
return t||(this._bIsHiding=!1),t
},_fireEventHide:function(){this._bIsHiding=!1,this.fireEvent("hide",{elLayer:this.getLayer(),aLinkedElement:this.getLinks()})
},_show:function(t,e){var i=this;
this._oEventTimer.abort(),this._bIsShowing=!0,this._bIsHiding=!1,0>=e&&i._oHideTimer.abort(),this._oShowTimer.start(function(){t()
},e)
},_hide:function(t,e){var i=this;
this._bIsShowing=!1,this._bIsHiding=!0,0>=e&&i._oShowTimer.abort(),this._oHideTimer.start(function(){t()
},e)
},show:function(t){"undefined"==typeof t&&(t=this.option("nShowDelay"));
var e=this;
return this._show(function(){e.getVisible()||e._fireEventBeforeShow()&&(e._wel.show(),e._fireEventShow())
},t),this
},hide:function(t){"undefined"==typeof t&&(t=this.option("nHideDelay"));
var e=this;
return this._hide(function(){e.getVisible()&&e._fireEventBeforeHide()&&(e._wel.hide(),e._fireEventHide())
},t),this
},toggle:function(t){return !this.getVisible()||this._bIsHiding?this.show(t||this.option("nShowDelay")):this.hide(t||this.option("nHideDelay")),this
},_onEvent:function(t){var e=t.element,i=this;
this._oEventTimer.start(function(){!i._bIsHiding&&i.getVisible()&&(i._check(e)?i._bIsShowing||(i.fireEvent("ignore",{sCheckEvent:i.option("sCheckEvent")}),i._oHideTimer.abort(),i._bIsHiding=!1):"undefined"!=typeof e.tagName&&i.hide())
},this.option("nCheckDelay"))
}}).extend(jindo.UIComponent),jindo.RolloverArea=jindo.$Class({$init:function(t,e){this.option({sClassName:"rollover",sClassPrefix:"rollover-",bCheckMouseDown:!0,bActivateOnload:!0,htStatus:{sOver:"over",sDown:"down"}}),this.option(e||{}),this._elArea=jindo.$(t),this._aOveredElements=[],this._aDownedElements=[],this._wfMouseOver=jindo.$Fn(this._onMouseOver,this),this._wfMouseOut=jindo.$Fn(this._onMouseOut,this),this._wfMouseDown=jindo.$Fn(this._onMouseDown,this),this._wfMouseUp=jindo.$Fn(this._onMouseUp,this),this.option("bActivateOnload")&&this.activate()
},_addOvered:function(t){this._aOveredElements.push(t)
},_removeOvered:function(t){this._aOveredElements.splice(jindo.$A(this._aOveredElements).indexOf(t),1)
},_addStatus:function(t,e){jindo.$Element(t).addClass(this.option("sClassPrefix")+e)
},_removeStatus:function(t,e){jindo.$Element(t).removeClass(this.option("sClassPrefix")+e)
},_isInnerElement:function(t,e){return t===e?!0:jindo.$Element(t).isParentOf(e)
},_onActivate:function(){jindo.$Element.prototype.preventTapHighlight&&jindo.$Element(this._elArea).preventTapHighlight(!0),this._wfMouseOver.attach(this._elArea,"mouseover"),this._wfMouseOut.attach(this._elArea,"mouseout"),this.option("bCheckMouseDown")&&(this._wfMouseDown.attach(this._elArea,"mousedown"),this._wfMouseUp.attach(document,"mouseup"))
},_onDeactivate:function(){jindo.$Element.prototype.preventTapHighlight&&jindo.$Element(this._elArea).preventTapHighlight(!1),this._wfMouseOver.detach(this._elArea,"mouseover"),this._wfMouseOut.detach(this._elArea,"mouseout"),this._wfMouseDown.detach(this._elArea,"mousedown"),this._wfMouseUp.detach(document,"mouseup"),this._aOveredElements.length=0,this._aDownedElements.length=0
},_findRollover:function(t){var e=this.option("sClassName");
return jindo.$$.test(t,"."+e)?t:jindo.$$.getSingle("! ."+e,t)
},_onMouseOver:function(t){for(var e,i=t.element,n=t.relatedElement;
i=this._findRollover(i);
i=i.parentNode){n&&this._isInnerElement(i,n)||(this._addOvered(i),e={element:i,htStatus:this.option("htStatus"),weEvent:t},this.fireEvent("over",e)&&this._addStatus(e.element,e.htStatus.sOver))
}},_onMouseOut:function(t){for(var e,i=t.element,n=t.relatedElement;
i=this._findRollover(i);
i=i.parentNode){n&&this._isInnerElement(i,n)||(this._removeOvered(i),e={element:i,htStatus:this.option("htStatus"),weEvent:t},this.fireEvent("out",e)&&this._removeStatus(e.element,e.htStatus.sOver))
}},_onMouseDown:function(t){for(var e,i=t.element;
i=this._findRollover(i);
){e={element:i,htStatus:this.option("htStatus"),weEvent:t},this._aDownedElements.push(i),this.fireEvent("down",e)&&this._addStatus(e.element,e.htStatus.sDown),i=i.parentNode
}},_onMouseUp:function(t){var e,i,n,s=t.element,o=[],a=this._aDownedElements;
for(n=0;
i=a[n];
n++){o.push({element:i,htStatus:this.option("htStatus"),weEvent:t})
}for(;
s=this._findRollover(s);
s=s.parentNode){jindo.$A(a).indexOf(s)>-1||o.push({element:s,htStatus:this.option("htStatus"),weEvent:t})
}for(n=0;
e=o[n];
n++){this.fireEvent("up",e)&&this._removeStatus(e.element,e.htStatus.sDown)
}this._aDownedElements=[]
}}).extend(jindo.UIComponent),jindo.RolloverClick=jindo.$Class({$init:function(t,e){this.option({bActivateOnload:!0,sCheckEvent:"click",bCheckDblClick:!1,RolloverArea:{sClassName:"rollover",sClassPrefix:"rollover-",bCheckMouseDown:!1,bActivateOnload:!1,htStatus:{sOver:"over",sDown:"down"}}}),this.option(e||{});
var i=this;
this._oRolloverArea=new jindo.RolloverArea(t,this.option("RolloverArea")).attach({over:function(t){i.fireEvent("over",t)||t.stop()
},out:function(t){i.fireEvent("out",t)||t.stop()
}}),this._wfClick=jindo.$Fn(this._onClick,this),this._wfDblClick=jindo.$Fn(this._onClick,this),this.option("bActivateOnload")&&this.activate()
},_onClick:function(t){var e=t.element,i="click";
for("dblclick"==t.type&&(i=t.type);
e=this._oRolloverArea._findRollover(e);
){this.fireEvent(i,{element:e,htStatus:this._oRolloverArea.option("htStatus"),weEvent:t}),e=e.parentNode
}},_onActivate:function(){this._wfClick.attach(this._oRolloverArea._elArea,this.option("sCheckEvent")),this.option("bCheckDblClick")&&this._wfDblClick.attach(this._oRolloverArea._elArea,"dblclick"),this._oRolloverArea.activate()
},_onDeactivate:function(){this._wfClick.detach(this._oRolloverArea._elArea,this.option("sCheckEvent")),this._wfDblClick.detach(this._oRolloverArea._elArea,"dblclick"),this._oRolloverArea.deactivate()
}}).extend(jindo.UIComponent),jindo.SelectBox=jindo.$Class({sTagName:"select",_bDisabled:!1,_sPrevValue:null,_nSelectedIndex:0,_bRealFocused:!1,$init:function(t,e){this._aItemData=[],this._aListItem=[],this._aOptions=[],this.option({sClassPrefix:"selectbox-",nWidth:null,nHeight:null,bUseLayerPosition:!0,aOptionHTML:[],aOptionLabel:[],LayerPosition:{sPosition:"outside-bottom",sAlign:"left",nTop:0,nLeft:0},LayerManager:{sCheckEvent:"mousedown",nShowDelay:20,nHideDelay:0}}),this.option(e||{}),this._el=jindo.$(t),this._assignHTMLElements(),this.option("bUseLayerPosition")&&this._initLayerPosition(),this._initLayerManager(),this._initRolloverClick(),this._oTimer=new jindo.Timer,this._wfOnFocusSelect=jindo.$Fn(this._onFocusSelect,this),this._wfOnBlurSelect=jindo.$Fn(this._onBlurSelect,this),this._wfOnMouseDownBox=jindo.$Fn(this._onMouseDownBox,this),this._wfOnMouseDownList=jindo.$Fn(this._onMouseDownList,this),this._wfOnKeyDown=jindo.$Fn(this._onKeyDown,this),this._wfOnMouseWheel=jindo.$Fn(function(t){t.stop(jindo.$Event.CANCEL_DEFAULT),this._elLayer.scrollTop-=16*t.mouse().delta
},this),this._wfOnMouseWheelOnBody=jindo.$Fn(this.close,this),this._oAgent=jindo.$Agent(),this.activate()
},_assignHTMLElements:function(){var t=this.option("sClassPrefix"),e=this._el;
this._wel=jindo.$Element(e),this._elSelect=jindo.$$.getSingle("select."+t+"source",e),this._sSelectInnerHTML=this._elSelect.innerHTML,this._elOptionDefault=jindo.$$.getSingle("option."+t+"default",e),this._elSelectOptionGroup=jindo.$$.getSingle("select."+t+"source-option-group",e),this._elBox=jindo.$$.getSingle("."+t+"box",e),this._elLabel=jindo.$$.getSingle("."+t+"label",e),this._elLayer=jindo.$$.getSingle("."+t+"layer",e),this._elList=jindo.$$.getSingle("."+t+"list",e),this._elList.innerHTML="",this._elSelectList=jindo.$("<ul>"),this._elList.insertBefore(this._elSelectList,this._elList.firstChild)
},getSelectElement:function(){return this._elSelect
},getBoxElement:function(){return this._elBox
},getLabelElement:function(){return this._elLabel
},getLayerElement:function(){return this._elLayer
},getListElement:function(){return this._elList
},getSelectListElement:function(){return this._elSelectList
},_limitWidth:function(){var t=this.option("nWidth");
t&&(jindo.$Element(this.getBoxElement()).css({width:t+"px",overflowX:"hidden"}),jindo.$Element(this.getLayerElement()).css({width:t+"px",overflowX:"hidden",overflowY:"auto"}))
},_limitHeight:function(){var t=this.option("nHeight");
if(t){var e,i=jindo.$Element(this.getLayerElement()),n=i.$value().cloneNode(!0),s=jindo.$Element(n);
s.opacity(0),i.after(s),s.show(),e=s.height(),s.leave(),e>t&&i.css({height:t+"px",overflowX:"hidden",overflowY:"auto"})
}},_initLayerManager:function(){var t=this,e=this.option("sClassPrefix"),i=this.getSelectElement();
this._oLayerManager=new jindo.LayerManager(this.getLayerElement(),this.option("LayerManager")).attach({beforeShow:function(n){t.fireEvent("open")?(t._limitWidth(),t._limitHeight(),setTimeout(function(){try{i.focus()
}catch(t){}},10),t._wel.addClass(e+"open"),t.option("bUseLayerPosition")&&t.getLayerPosition().setPosition()):n.stop()
},show:function(){t._paintSelected()
},beforeHide:function(n){t.fireEvent("close")?(t._wel.removeClass(e+"open").removeClass(e+"focused"),setTimeout(function(){try{t.getSelectElement().blur()
}catch(e){}},10)):(n.stop(),setTimeout(function(){try{i.focus()
}catch(t){}},10))
}}).link(this.getBoxElement()).link(this.getLayerElement())
},getLayerManager:function(){return this._oLayerManager
},_initRolloverClick:function(){var t=this,e=this.option("sClassPrefix");
this._oRolloverClick=new jindo.RolloverClick(this.getSelectListElement(),{sCheckEvent:"mouseup",RolloverArea:{sClassName:e+"item",sClassPrefix:e+"item-"}}).attach({over:function(i){t._welOvered&&t._welOvered.removeClass(e+"item-over");
var n=jindo.$Element(i.element);
n.addClass(e+"item-over"),t._welOvered=n
},out:function(t){t.stop()
},click:function(i){var n=t._nSelectedIndex,s=-1;
jindo.$A(t._aItemData).forEach(function(t,e){t.elItem===i.element&&(s=e,jindo.$A.Break())
}),t.fireEvent("click",{nIndex:s,weEvent:i.weEvent})&&(-1!==s&&t.setValue(t._aItemData[s].sValue),s=t.getSelectedIndex(),s!=n&&(jindo.$Element(t.getSelectElement()).fireEvent("change"),t.fireEvent("change",{nIndex:s,nLastIndex:n})),jindo.$Element(i.element).hasClass(e+"notclose")||t.getLayerManager().hide())
}})
},getRolloverClick:function(){return this._oRolloverClick
},_initLayerPosition:function(){this._oLayerPosition=new jindo.LayerPosition(this.getBoxElement(),this.getLayerElement(),this.option("LayerPosition"))
},getLayerPosition:function(){return this._oLayerPosition
},_onActivate:function(){var t=this.option("sClassPrefix"),e=this.getSelectElement();
this._limitWidth(),this._wel.removeClass(t+"noscript"),jindo.$Element.prototype.preventTapHighlight&&jindo.$Element(this.getListElement()).preventTapHighlight(!0),this._wfOnFocusSelect.attach(e,"focus"),this._wfOnBlurSelect.attach(e,"blur"),this._wfOnMouseDownBox.attach(this.getBoxElement(),"mousedown"),this._wfOnMouseDownList.attach(this.getListElement(),"mousedown"),this._wfOnKeyDown.attach(e,"keydown"),this._wfOnMouseWheel.attach(e,"mousewheel"),this._wfOnMouseWheelOnBody.attach(document,"mousewheel"),this.paint(),this._sPrevValue=this.getValue()
},_onDeactivate:function(){this.getLayerManager().hide();
var t=this.option("sClassPrefix"),e=this.getSelectElement();
this._wel.addClass(t+"noscript"),jindo.$Element.prototype.preventTapHighlight&&jindo.$Element(this.getListElement()).preventTapHighlight(!1),this._wfOnFocusSelect.detach(e,"focus"),this._wfOnBlurSelect.detach(e,"blur"),this._wfOnMouseDownBox.detach(this.getBoxElement(),"mousedown"),this._wfOnMouseDownList.detach(this.getListElement(),"mousedown"),this._wfOnKeyDown.detach(e,"keydown"),this._wfOnMouseWheel.detach(e,"mousewheel"),this._wfOnMouseWheelOnBody.detach(document,"mousewheel")
},getValueOf:function(t){for(var e,i=0;
e=this._aItemData[i];
i++){if(e.sText==t){return e.sValue
}}return null
},getValue:function(){return this.getSelectElement().value
},getText:function(){var t=this._aItemData[this._nSelectedIndex];
return t&&t.sText||""
},getHTML:function(){return this.getLabelElement().innerHTML
},setValue:function(t){this.getSelectElement().value=t,this._sPrevValue=this.getValue(),this._paint()
},getSelectedIndex:function(){return this.getSelectElement().selectedIndex
},setSelectedIndex:function(t,e){if("undefined"==typeof e&&(e=!0),this._isSelectable(t)){var i=this.getSelectedIndex();
return this._setSelectedIndex(t),this._paint(),e&&i!=t&&this.fireEvent("change",{nIndex:t,nLastIndex:i}),!0
}return !1
},_setSelectedIndex:function(t){this.getSelectElement().selectedIndex=t
},_isSelectable:function(t){var e=this._aItemData[t];
return !e||e.bDisabled||e.bDefault?!1:!0
},getOptions:function(){return this._aOptions
},getListItems:function(){return this._aListItem
},getDisabled:function(){return this._bDisabled
},setOptionGroup:function(t){if(!this._elSelectOptionGroup||!this._elOptionDefault){return !1
}var e=this.getSelectElement(),i=this.option("sClassPrefix"),n=jindo.$$("."+i+"option-group-"+t,this._elSelectOptionGroup),s=this._elOptionDefault=this._elOptionDefault.cloneNode(!0);
e.innerHTML="",e.appendChild(s),this._nSelectedIndex=0;
for(var o=0;
o<n.length;
o++){e.appendChild(n[o].cloneNode(!0))
}return this._sPrevValue=this.getValue(),this.paint(),!0
},isSelected:function(){return !this._aItemData[this.getSelectedIndex()].bDefault
},setDefault:function(){var t=-1;
jindo.$A(this._aItemData).forEach(function(e,i){(e.bDefault||e.bSelected)&&(t=i)
}),0>t&&(t=0),this._nSelectedIndex=t,this._setSelectedIndex(t),this._sPrevValue=this.getValue(),this._paint()
},paint:function(){this._paintList(),this._paintSelected(),this._paintLabel(),this.getLayerManager().setLayer(this.getLayerElement())
},_paint:function(){this._paintSelected(),this._paintLabel()
},_paintLabel:function(){var t=jindo.$Element(this.getLabelElement()),e=this.option("aOptionHTML")[this._nSelectedIndex]||"",i=this.option("aOptionLabel")[this._nSelectedIndex]||"",n=this.getText();
e?t.html(i?i:e):t.text(n),t.attr("unselectable","on")
},_paintList:function(){var t=this.option("sClassPrefix");
this._aOptions=jindo.$$("option",this.getSelectElement());
var e=this._aOptions;
this._aItemData=[],this._aListItem=[],this._nSelectedIndex=0;
var i=this.getSelectListElement();
i.innerHTML="",this.option("nHeight")&&jindo.$Element(this.getLayerElement()).css("height","auto");
for(var n,s=[],o=[],a=0;
n=e[a];
a++){var r=jindo.$Element(n),h=r.hasClass(t+"default"),l="selected"==r.attr("selected"),f=h||n.disabled,c=this.option("aOptionHTML")[a]||"",u=r.text()||"",d=r.attr("value");
d||(r.attr("value",u),d=u),this._aItemData[a]={elOption:n,elItem:null,sHTML:c,sText:u,sValue:d,bDisabled:f,bSelected:l,bDefault:h};
var _=null,p=this._aItemData[a];
p.bDefault||(s.push(['<li style="',p.elOption.style.cssText,'" ','class="',p.elOption.className," ",t+(p.bDisabled?"item-disabled":"item"),'" unselectable="on">',p.sHTML||jindo.$S(p.sText).escapeHTML(),"</li>"].join("")),o.push(a))
}i.innerHTML=s.join("");
for(var g=i.childNodes,E=0,v=g.length;
v>E;
E++){var _=g[E];
this._aListItem.push(_),this._aItemData[o[E]].elItem=_
}return jindo.$Element(this.getLayerElement()).visible()&&(this._limitWidth(),this._limitHeight()),this._elSelect.disabled?void this.disable():void this.enable()
},_paintSelected:function(){var t,e=this.option("sClassPrefix"),i=this.getSelectedIndex(),n=this._nSelectedIndex;
if(this._welSelected&&(this._welSelected.removeClass(e+"item-selected"),this._welSelected=null),this._welOvered&&(this._welOvered.removeClass(e+"item-over"),this._welOvered=null),i=Math.min(i,this._aItemData.length-1),this._nSelectedIndex=i,t=this._aItemData[i],t&&t.elItem){var s=t.elItem,o=jindo.$Element(s);
if(this._welSelected=this._welOvered=o,o.addClass(e+"item-selected").addClass(e+"item-over"),this.isLayerOpened()){var a,r=this.getLayerElement(),h=parseInt(jindo.$Element(r).css("height"),10),l=s.offsetTop,f=s.offsetHeight,c=r.scrollTop;
a=i>n?!0:!1,(c>l||l>c+h)&&(r.scrollTop=l),a?l+f>h+c&&(r.scrollTop=l+f-h):c>l&&(r.scrollTop=l)
}}},isLayerOpened:function(){return this.getLayerManager().getVisible()
},disable:function(){this.getLayerManager().hide();
var t=this.option("sClassPrefix");
this._wel.addClass(t+"disabled"),this.getSelectElement().disabled=!0,this._bDisabled=!0
},enable:function(){var t=this.option("sClassPrefix");
this._wel.removeClass(t+"disabled"),this.getSelectElement().disabled=!1,this._bDisabled=!1
},open:function(){return this._bDisabled||this.getLayerManager().show(),this
},close:function(){return this.getLayerManager().hide(),this
},_onMouseDownBox:function(t){t.stop(jindo.$Event.CANCEL_DEFAULT),this._bDisabled||this.getLayerManager().toggle()
},_onMouseDownList:function(t){jindo.$$.getSingle("! ."+this.option("sClassPrefix")+"notclose",t.element)||t.stop(jindo.$Event.CANCEL_DEFAULT)
},_getSelectableIndex:function(t,e){var i,n=-1,s=this._aItemData.length-1;
for(i=0;
i<this._aItemData.length;
i++){this._isSelectable(i)&&(0>n?n=i:s=i)
}switch(e){case -1:if(t==n){return t
}for(i=t-1;
i>n;
i--){if(this._isSelectable(i)){return i
}}return n;
case 1:if(t==s){return t
}for(i=t+1;
s>i;
i++){if(this._isSelectable(i)){return i
}}return s;
case 1/0:return s;
case -1/0:return n
}},_onKeyDown:function(t){var e=t.key();
if(this._oAgent.os().mac&&this._oAgent.navigator().safari||this._oAgent.navigator().ie&&6==this._oAgent.navigator().version){var i=e.keyCode;
9!=i&&t.stop(jindo.$Event.CANCEL_DEFAULT);
var n=this.getSelectedIndex(),s=n;
switch(i){case 37:s=this._getSelectableIndex(n,-1);
break;
case 38:s=this._getSelectableIndex(n,-1);
break;
case 39:s=this._getSelectableIndex(n,1);
break;
case 40:s=this._getSelectableIndex(n,1);
break;
case 33:s=this._getSelectableIndex(n,-1/0);
break;
case 34:s=this._getSelectableIndex(n,1/0);
break;
case 13:this.getLayerManager().hide();
break;
case 9:this.getLayerManager().hide()
}var o={nIndex:s,nLastIndex:parseInt(this._nSelectedIndex,10)};
this._setSelectedIndex(s),this._paint(),o.nIndex!=o.nLastIndex&&this.fireEvent("change",o)
}else{this.isLayerOpened()&&(e.enter||9==e.keyCode)&&this.getLayerManager().hide()
}},_onFocusSelect:function(){var t=this.option("sClassPrefix"),e=this._wel;
if(!this.isLayerOpened()){if(!this.fireEvent("focus")){return void this.getSelectElement().blur()
}this._bRealFocused=!0
}if(e.addClass(t+"focused"),!this._oAgent.os().mac||!this._oAgent.navigator().safari){var i=this;
this._oTimer.start(function(){var t=i.getValue();
if(i._sPrevValue&&i._sPrevValue!=t){var e=i.getSelectElement().selectedIndex;
if(!i._isSelectable(e)){var n=-(i._nSelectedIndex-e);
return n=n>0?1:-1,i._setSelectedIndex(i._getSelectableIndex(i._nSelectedIndex,n,e)),!0
}var s={nIndex:e,nLastIndex:parseInt(i._nSelectedIndex,10)};
i._paint(),s.nIndex!=s.nLastIndex&&i.fireEvent("change",s),i._sPrevValue=t
}return !0
},10)
}},_onBlurSelect:function(){var t=this,e=this.option("sClassPrefix");
this._bRealFocused&&(this.fireEvent("blur"),this._wel.removeClass(e+"focused"),this._bRealFocused=!1),setTimeout(function(){t._oTimer.abort()
},10)
}}).extend(jindo.HTMLComponent),jindo.Transition=jindo.$Class({_nFPS:30,_aTaskQueue:null,_oTimer:null,_bIsWaiting:!0,_bIsPlaying:!1,$init:function(t){this._aTaskQueue=[],this._oTimer=new jindo.Timer,this._oSleepTimer=new jindo.Timer,this.option({fEffect:jindo.Effect.linear,bCorrection:!1}),this.option(t||{})
},fps:function(t){return arguments.length>0?(this._nFPS=t,this):this._nFPS
},isPlaying:function(){return this._bIsPlaying
},abort:function(){return this._aTaskQueue=[],this._oTimer.abort(),this._oSleepTimer.abort(),this._bIsPlaying&&this.fireEvent("abort"),this._bIsWaiting=!0,this._bIsPlaying=!1,this._htTaskToDo=null,this
},start:function(){return arguments.length>0&&this.queue.apply(this,arguments),this._prepareNextTask(),this
},queue:function(t){var e;
if("function"==typeof arguments[0]){e={sType:"function",fTask:arguments[0]}
}else{var i=[];
if(arguments[1] instanceof Array){i=arguments[1]
}else{var n=[];
jindo.$A(arguments).forEach(function(t,e){e>0&&(n.push(t),e%2===0&&(i.push(n.concat()),n=[]))
})
}e={sType:"task",nDuration:t,aList:[]};
for(var s=0,o=i.length;
o>s;
s++){var a,r=[],h=i[s][1];
for(var l in h){a=h[l],r.push(/^(@|style\.)(\w+)/i.test(l)?["style",RegExp.$2,a]:["attr",l,a])
}e.aList.push({elTarget:i[s][0],aValue:r})
}}return this._queueTask(e),this
},pause:function(){return this._oTimer.abort()&&this.fireEvent("pause"),this
},resume:function(){if(this._htTaskToDo){this._bIsWaiting===!1&&this._bIsPlaying===!0&&this.fireEvent("resume"),this._doTask(),this._bIsWaiting=!1,this._bIsPlaying=!0;
var t=this;
this._oTimer.start(function(){var e=!t._doTask();
return e&&(t._bIsWaiting=!0,setTimeout(function(){t._prepareNextTask()
},0)),!e
},this._htTaskToDo.nInterval)
}return this
},precede:function(){return this.start.apply(this,arguments),this
},sleep:function(t,e){return"undefined"==typeof e&&(e=function(){}),this._queueTask({sType:"sleep",nDuration:t,fCallback:e}),this._prepareNextTask(),this
},_queueTask:function(t){this._aTaskQueue.push(t)
},_dequeueTask:function(){var t=this._aTaskQueue.shift();
if(t){if("task"==t.sType){for(var e=t.aList,i=0,n=e.length;
n>i;
i++){for(var s=e[i].elTarget,o=null,a=0,r=e[i].aValue,h=r.length;
h>a;
a++){var l=r[a][0],f=r[a][1],c=r[a][2];
if("function"!=typeof c){var u=this.option("fEffect");
c=c instanceof Array?u(c[0],c[1]):u(c),r[a][2]=c
}if(c.setStart){if(this._isHTMLElement(s)){switch(o=o||jindo.$Element(s),l){case"style":c.setStart(o.css(f));
break;
case"attr":c.setStart(o.$value()[f])
}}else{c.setStart(s.getter(f))
}}}}}return t
}return null
},_prepareNextTask:function(){if(this._bIsWaiting){var t=this._dequeueTask();
if(t){switch(t.sType){case"task":this._bIsPlaying||this.fireEvent("start");
var e=1000/this._nFPS,i=e/t.nDuration;
this._htTaskToDo={aList:t.aList,nRatio:0,nInterval:e,nGap:i,nStep:0,nTotalStep:Math.ceil(t.nDuration/e)},this.resume();
break;
case"function":this._bIsPlaying||this.fireEvent("start"),t.fTask(),this._prepareNextTask();
break;
case"sleep":this._bIsPlaying&&(this.fireEvent("sleep",{nDuration:t.nDuration}),t.fCallback());
var n=this;
this._oSleepTimer.start(function(){n.fireEvent("awake"),n._prepareNextTask()
},t.nDuration)
}}else{this._bIsPlaying&&(this._bIsPlaying=!1,this.abort(),this.fireEvent("end"))
}}},_isHTMLElement:function(t){return"tagName" in t
},_doTask:function(){for(var t=this._htTaskToDo,e=parseFloat(t.nRatio.toFixed(5),1),i=t.nStep,n=t.nTotalStep,s=t.aList,o={},a=this.option("bCorrection"),r=0,h=s.length;
h>r;
r++){for(var l=s[r].elTarget,f=null,c=0,u=s[r].aValue,d=u.length;
d>c;
c++){var _=u[c][0],p=u[c][1],g=u[c][2](e);
if(this._isHTMLElement(l)){if(a){var E=/^\-?[0-9\.]+(%|px|pt|em)?$/.test(g)&&RegExp.$1||"";
if(E){var v=parseFloat(g);
v+=o[p]||0,v=parseFloat(v.toFixed(5)),r==h-1?g=Math.round(v)+E:(o[p]=v-Math.floor(v),g=parseInt(v,10)+E)
}}switch(f=f||jindo.$Element(l),_){case"style":f.css(p,g);
break;
case"attr":f.$value()[p]=g
}}else{l.setter(p,g)
}this._bIsPlaying&&this.fireEvent("playing",{element:l,sKey:p,sValue:g,nStep:i,nTotalStep:n})
}}return t.nRatio=Math.min(t.nRatio+t.nGap,1),t.nStep+=1,1!=e
}}).extend(jindo.Component),function(){var t=jindo.$Element.prototype.css;
jindo.$Element.prototype.css=function(e,i){return"opacity"==e?"undefined"!=typeof i?this.opacity(parseFloat(i)):this.opacity():"undefined"!=typeof i?t.call(this,e,i):t.call(this,e)
}
}()
})("jindo");
var CutLines={target:null,cacheCSS:{},cacheInnerCSS:{},log:[],consts:{limitByLines:10,multipleGravity:1.4,multipleLineHeight:1.5}};
CutLines.params={text:null,tail:"",maxWidth:0,maxLine:0,prefix:"",postfix:""};
CutLines.config={tag:"span",logLevel:"info",outputMode:"direct",cssMode:"cache",forcedCSS:null,forcedLine:false,forcedHeight:0,forcedInnerTarget:null};
CutLines._isEmpty=function(s){return(s==undefined||s==null||s=="")?true:false
};
CutLines._validParameter=function(p,vL){for(var vI in vL){if(p.toLowerCase()==vL[vI]){return vL[vI]
}}return vL[vL.length-1]
};
CutLines._camelCaps=function(s){if(s==null){return null
}var r="";
var c="";
var i=0;
for(i=0;
i<s.length-1;
i++){c=s.charAt(i);
if(c=="-"||c=="_"){i++;
c=s.charAt(i);
r+=(c>="a"&&c<="z"?c.toUpperCase():c)
}else{r+=c
}}r+=s.charAt(i);
return r
};
CutLines._startsWith=function(s,t){if(s==null||t==null){return false
}if(s.length<t.length){return false
}if(s.substring(0,t.length)==t){return true
}return false
};
CutLines._isCSSWithSizeEffect=function(key){return this._startsWith(key,"font")||this._startsWith(key,"margin")||this._startsWith(key,"padding")||this._startsWith(key,"line")||this._startsWith(key,"word-wrap")||this._startsWith(key,"list-style")||this._startsWith(key,"word-spacing")||this._startsWith(key,"letter-spacing")||this._startsWith(key,"white-space")
};
CutLines._copyCSS=function(s){var o=new Object;
if(window.getComputedStyle){var sAttr=(s.ownerDocument||s.document||document).defaultView.getComputedStyle(s,null);
for(var k in sAttr){k=(isNaN(k)?k:sAttr.item(k)).replace(/([A-Z])/g,"-$1").toLowerCase();
if(sAttr.getPropertyValue(k)!=undefined&&sAttr.getPropertyValue(k)!=null&&sAttr.getPropertyValue(k)!=""){if(this._isCSSWithSizeEffect(k)){o[k]=sAttr.getPropertyValue(k)
}}}}else{var sAttr=s.currentStyle||s.style;
for(var k in sAttr){if(sAttr[k]!=undefined&&sAttr[k]!=null&&sAttr[k]!=""){if(this._isCSSWithSizeEffect(k)){o[k]=sAttr[k]
}}}}return o
};
CutLines._applyCSS=function(t,s){for(var k in s){try{t.style[(window.getComputedStyle?camelCaps(k):k)]=s[k]
}catch(err){}}};
CutLines._getCacheKey=function(id){return id.replace(/[_0-9]+$/,"")
};
CutLines._copyComputedStyles=function(checker){if(this.config.cssMode=="full"){this._applyCSS(checker,this._copyCSS(this.target))
}else{if(this.config.cssMode=="cache"){var ck=this._getCacheKey(this.target.id);
if(this.cacheCSS[ck]==null){this.cacheCSS[ck]=this._copyCSS(this.target)
}this._applyCSS(checker,this.cacheCSS[ck])
}else{if(this.config.cssMode=="forced"){this._applyCSS(checker,this.config.forcedCSS)
}}}};
CutLines._copyComputedStylesWithinInners=function(){var r={};
if(this.config.forcedInnerTarget!=null){for(var tag in this.config.forcedInnerTarget){var t=this.config.forcedInnerTarget[tag];
var tmp=document.createElement(t);
this.target.appendChild(tmp);
if(this.config.cssMode=="full"){r[t]=this._copyCSS(tmp)
}else{if(this.config.cssMode=="cache"){var ck=this._getCacheKey(this.target.id);
if(this.cacheInnerCSS[ck]==null){this.cacheInnerCSS[ck][t]=this._copyCSS(tmp)
}}}this.target.removeChild(tmp)
}}return r
};
CutLines._initLog=function(){this.log=[]
};
CutLines._getLog=function(){var r="";
for(var l in this.log){r+=this.log[l]+"\n"
}return r
};
CutLines._isDebugLogEnabled=function(){return this.config.logLevel=="debug"?true:false
};
CutLines._isInfoLogEnabled=function(){return this.config.logLevel=="info"||this.config.logLevel=="debug"?true:false
};
CutLines._logDebug=function(lineNo,vars){if(this._isDebugLogEnabled()){var l="line="+lineNo;
for(var v in vars){l+=(", "+v+"="+vars[v])
}this.log[this.log.length]="[DEBUG] {"+l+"}"
}};
CutLines._logInfo=function(lineNo,vars){if(this._isInfoLogEnabled()){var l="line="+lineNo;
for(var v in vars){l+=(", "+v+"="+vars[v])
}this.log[this.log.length]="[INFO] {"+l+"}"
}};
CutLines._getBackwardDistance=function(d){return Math.min(Math.floor(d/2),5)
};
CutLines.setTarget=function(target){if(target==undefined||target==null){CutLines.target=null
}else{CutLines.target=target;
if(!CutLines.target.id){CutLines.target.id="cl_random_"+this.params.maxWidth+"_"+this.params.maxLine+"_"+Math.floor(Math.random()*999999)
}}};
CutLines.initParams=function(param){if(this._isEmpty(param)){return
}this.params.text=this._isEmpty(param.sourceText)?null:param.sourceText.replace(/<[bB]{1}[rR]{1}[ \/]*>/g,"<br />").replace(/ *$/g,"").replace(/&amp;/g,"&");
this.params.tail=this._isEmpty(param.tail)?"":param.tail;
this.params.maxWidth=this._isEmpty(param.maxWidth)||isNaN(param.maxWidth)||param.maxWidth<20||param.maxWidth>5000?0:param.maxWidth;
this.params.maxLine=this._isEmpty(param.maxLine)||isNaN(param.maxLine)||param.maxLine<1||param.maxLine>100?0:param.maxLine;
this.params.prefix=this._isEmpty(param.prefix)?"":param.prefix;
this.params.postfix=this._isEmpty(param.postfix)?"":param.postfix
};
CutLines.initConfigs=function(param){if(this._isEmpty(param)){return
}this.config.tag=this._isEmpty(param.tag)?"span":param.tag;
this.config.logLevel=this._validParameter(param.logLevel,["info","debug"]);
this.config.outputMode=this._validParameter(param.outputMode,["forward","direct"]);
this.config.cssMode=this._validParameter(param.cssMode,["full","none","forced","cache"]);
this.config.allowTag=param.allowTag==true&&(this.config.cssMode=="full"||this.config.cssMode=="cache")?true:false;
this.config.forcedCSS=this.config.cssMode=="forced"&&!this._isEmpty(param.forcedCSS)&&param.forcedCSS.length>0?param.forcedCSS:null;
this.config.forcedLine=!this._isEmpty(param.forcedLine)&&param.forcedLine==true?true:false;
this.config.forcedHeight=this._isEmpty(param.forcedHeight)||isNaN(param.forcedHeight)||param.forcedHeight<10||param.forcedHeight>100?0:param.forcedHeight;
this.config.forcedInnerTarget=(this.config.cssMode=="full"||this.config.cssMode=="cache")&&!this._isEmpty(param.addInnerStyleTarget)&&param.addInnerStyleTarget.length>0?param.addInnerStyleTarget:null
};
CutLines.setSource=function(text){this.text=this._isEmpty(text)?null:(this.config.allowTag==true?text.replace(/<[bB]{1}[rR]{1}[ \/]*>/g,"<br />"):text).replace(/ *$/g,"").replace(/&amp;/g,"&")
};
CutLines.setPrefix=function(prefix){this.prefix=this._isEmpty(prefix)?"":prefix
};
CutLines.process=function(){if(this.params.text==null||this.params.maxWidth==0||this.params.maxLine==0){this._logInfo(250,{msg:"A text and maximum width and lines are required.",text:this.params.sourceText,mxWd:this.params.maxWidth,mxLn:this.params.maxLine});
return{log:this._getLog()}
}var c=document.createElement(this.config.tag);
this._copyComputedStyles(c);
var aInnerCSS=this._copyComputedStylesWithinInners();
var o=this.target;
var t=this.params.text;
var tl=t.length;
var mxW=this.params.maxWidth;
var log="";
var tmp="";
var r="";
var pY=0;
var pX=0;
var pLX=0;
var mg=this.consts.multipleGravity;
var mlh=this.consts.multipleLineHeight;
var lt=0;
var mxLt=this.params.maxLine*this.consts.limitByLines;
o.parentNode.appendChild(c);
c.innerHTML="책";
var wc=c.offsetWidth;
var hc=this.config.forcedHeight==0?c.offsetHeight:this.config.forcedHeight;
c.innerHTML="";
this._initLog();
while(pY<this.params.maxLine&&pX<=tl&&lt<mxLt){var d=1;
while(d>0&&pX<=tl&&lt<mxLt){if(c.offsetHeight>hc*mlh){d=Math.max(this._getBackwardDistance(d),1);
pX-=d;
if(pX>0&&t.lastIndexOf("<",pX)>t.lastIndexOf(">",pX)){d=pX-t.lastIndexOf("<",pX);
pX-=d
}}else{if(pX>0&&t.lastIndexOf("<",pX)>t.lastIndexOf(">",pX)){d=t.indexOf(">",pX+1)+1-pX;
pX+=d
}else{d=Math.min(Math.floor(Math.abs(mxW-c.offsetWidth)/wc*(pX-pLX<2?mg:1)),tl-pX);
if(c.offsetWidth>mxW){pX-=Math.max(d,1)
}else{pX+=d
}}}tmp=t.substring(pLX,pX);
c.innerHTML=tmp;
lt++;
if(c.offsetHeight>hc*mlh||c.offsetWidth>mxW){var hasTag=false;
while((c.offsetHeight>hc*mlh||c.offsetWidth>mxW)&&lt<mxLt){if(this.config.allowTag==true){if(t.indexOf("<br",pLX)>=0&&t.indexOf("<br",pLX)<pX){d=pX-t.indexOf(">",t.indexOf("<br",pLX))-1;
pX-=d;
hasTag=true
}else{d=this._getBackwardDistance(d);
pX-=Math.max(d,1);
if(pX>0&&(t.lastIndexOf("<",pX)>t.lastIndexOf(">",pX)||pX==t.lastIndexOf(">",pX))){d=pX-t.lastIndexOf("<",pX);
pX-=d;
hasTag=true
}}}else{d=this._getBackwardDistance(d);
pX-=Math.max(d,1)
}tmp=t.substring(pLX,pX);
c.innerHTML=tmp;
for(var st in aInnerCSS){var tN=aInnerCSS[st];
var tI=c.getElementsByTagName(tN);
for(var tIdx=0;
tIdx<tI.length;
tIdx++){if(tI[tIdx].getAttribute("cl_ins")!="done"){for(var aS in aInnerStyles[tN]){tI[tIdx].style[aS]=aInnerStyles[tN][aS]
}tI[tIdx].setAttribute("cl_ins","done")
}}}lt++
}if(hasTag){d=0
}}}if(r!=""){r+="<br />"
}r+=tmp.replace(/ *$/g,"").replace(/<[bB]{1}[rR]{1}[ \/]*>/g,"");
pY++;
pLX=pX;
pX++;
c.innerHTML=""
}if(pX<=tl){var tLn=this.params.tail.length;
var lot=-1;
var lIx=r.length;
if(this.config.allowTag==true){if(r.lastIndexOf("<",lIx-tLn)>r.lastIndexOf(">",lIx-tLn)){r=r.substring(0,r.lastIndexOf("<",lIx-tLn)-1-tLn)
}else{r=r.substring(0,lIx-tLn)
}lIx=r.length;
do{lot=r.lastIndexOf("<",lIx-1);
lIx=r.lastIndexOf("<br />",lIx-1);
lt++
}while(lot==lIx&&lt<mxLt);
if(lot>r.lastIndexOf("</")){r+="</"+r.substring(lot+1,Math.min(r.indexOf(" ",lot+1)>-1?r.indexOf(" ",lot+1):lIx,r.indexOf(">",lot+1)>-1?r.indexOf(">",lot+1):lIx))+">"
}}else{r=r.substring(0,lIx-tLn)
}if(r.replace(/<br \/>/g,"")!=t.replace(/<br \/>/g,"")){r+=this.params.tail
}}if(this.config.forcedLine){for(var i=pY;
i<=this.params.maxLine;
i++){r+="<br />"
}}o.parentNode.removeChild(c);
var rtnValue={log:this._getLog(),line:pY,output:"",cost:lt};
if(this.config.outputMode=="direct"){o.innerHTML=this.params.prefix+r+this.params.postfix
}else{rtnValue.output=this.params.prefix+r+this.params.postfix
}return rtnValue
};
CutLines.putSummary=function(target,params,config){CutLines.setTarget(target);
CutLines.initParams(params);
CutLines.initConfigs(config);
return CutLines.process()
};
var linkBookDetail="/bookdb/book_detail.naver?bid=";
var linkBookEvent="/bookdb/book_detail.naver?bid=";
var linkBookInterview="/bookdb/event_view.naver?bid=";
function summarizeBasicTitle(targetItem,bid,isAdult){var param={sourceText:targetItem.innerHTML,maxWidth:targetItem.offsetWidth-2,tail:"..",maxLine:2,prefix:"<a href='"+linkBookDetail+bid+"'>",postfix:"</a>"+getIcon19(isAdult)};
return CutLines.putSummary(targetItem,param)
}function summarizeBasicAuthor(targetItem){var param={sourceText:targetItem.innerHTML,maxWidth:targetItem.offsetWidth,tail:"..",maxLine:1};
return CutLines.putSummary(targetItem,param)
}function summarizeBasicIntro(targetItem,maxLine){var param={sourceText:targetItem.innerHTML,maxWidth:targetItem.offsetWidth,tail:"..",maxLine:maxLine};
return CutLines.putSummary(targetItem,param)
}function defaultSummarize(targetItemId,param){var targetItem=document.getElementById(targetItemId);
if(!targetItem){return
}var newParam={};
if(!!param){for(var key in param){newParam[key]=param[key]
}}if(!param||!param.sourceText){newParam.sourceText=targetItem.innerHTML
}if(!param||!param.maxWidth){newParam.maxWidth=targetItem.offsetWidth
}if(!param||!param.tail){newParam.tail="..."
}if(!param||!param.maxLine){newParam.maxLine=1
}CutLines.putSummary(targetItem,newParam)
};
var bIE=/MSIE/.test(navigator.userAgent);
var bIEVer=/\bMSIE\s([0-9]+(\.[0-9]+)*);/.test(navigator.userAgent)?parseFloat(RegExp.$1):0;
try{document.execCommand("BackgroundImageCache",false,true)
}catch(e){}function hasClass(obj,sClass){return(" "+obj.className+" ").indexOf(" "+sClass+" ")>-1
}function addClass(obj,sClass){if(hasClass(obj,sClass)){return obj
}obj.className=(obj.className+" "+sClass).replace(/^\s+/,"")
}function removeClass(obj,sClass){obj.className=obj.className.replace(new RegExp("(^|\\s)"+sClass+"(\\s|$)")," ").replace(/\s+$/,"")
}function strReplaceAll(source,pattern,replaceText){var re=new RegExp("([[^*?+{.|])","g");
pattern=pattern.replace(re,"\\$1");
re=new RegExp(pattern,"g");
return source.replace(re,replaceText)
}function disableTag(source){var result=strReplaceAll(source,"<","&lt;");
result=strReplaceAll(result,">","&gt;");
return result
}function checkObjectWrap(obj,tail){var currentValue=obj.innerHTML;
var currentHeight=obj.offsetHeight;
obj.innerHTML="&nbsp;";
var result=(obj.offsetHeight==currentHeight);
obj.innerHTML=currentValue;
return result
}function resizeObj(obj,value,targetHeight,tail,start,end){var cutLength=Math.ceil((start+end)/2);
obj.innerHTML=value.substr(0,cutLength)+tail;
if(start!=cutLength){if(obj.offsetHeight==targetHeight){resizeObj(obj,value,targetHeight,tail,cutLength,end)
}else{resizeObj(obj,value,targetHeight,tail,start,cutLength-1)
}}}function cancelEvent(e){if(e){e.cancelBubble=true;
e.preventDefault();
e.stopPropagation()
}else{window.event.cancelBubble=true;
window.event.returnValue=false
}return false
}NAjax={TEXT:0,JSON:1,XML:2};
NAjax.getOption=function(opt){var option={returnType:NAjax.TEXT,nocache:true,async:true,method:"GET",body:null,callback:null};
if(opt){for(var i in opt){option[i]=opt[i]
}if(option.async&&option.callback==null){return null
}}return option
};
NAjax.load=function(url,option){var request;
if(!url){return null
}option=NAjax.getOption(option);
if(window.XMLHttpRequest){request=new XMLHttpRequest()
}else{if(window.ActiveXObject){request=new ActiveXObject("Microsoft.XMLHTTP")
}}var argv=new Array();
argv.push(request);
for(var i=1;
i<arguments.length;
i++){argv.push(arguments[i])
}request.open(option.method,url,option.async);
request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
if(option.nocache){request.setRequestHeader("If-Modified-Since","0")
}if(option.async){request.onreadystatechange=function(){NAjax._callback.apply(this,argv)
}
}request.send(option.body);
if(!option.async){return NAjax._getResult(request,option)
}else{return request
}};
NAjax._getResult=function(request,option){if(option.returnType==NAjax.TEXT){return request.responseText
}else{if(option.returnType==NAjax.JSON){try{eval("var jsonResult="+request.responseText)
}catch(e){jsonResult=null
}return jsonResult
}else{return request.responseXML
}}};
NAjax._callback=function(request,option){if(request==null||request.readyState!=4){return
}if(request.responseText.length==0){return
}var argv=new Array();
argv.push(NAjax._getResult(request,option));
for(var i=2;
i<arguments.length;
i++){argv.push(arguments[i])
}if(request.status!=200){argv[0]=null
}option.callback.apply(this,argv)
};
function book_zzim(bid,zTitle,browser){request=NAjax.load("/monitor/monitorJson.naver?bid="+bid,{callback:zzimJsonResult,returnType:NAjax.JSON},bid,zTitle,browser)
}function zzimJsonResult(obj,bid,zTitle,browser){if(obj=="not write"){alert("정기 점검 중입니다.")
}else{var oDialog=new jindo.Dialog({sClassPrefix:"dialog-"});
var sTemplate=['<div id="pop_wrap" style="width:450px;">','<div id="pop_header">',"<h1>책 찜하기</h1>",'<a href="#" class="dialog-close btn_close">','<img width="15" height="14" alt="레이어닫기" src="https://ssl.pstatic.net/static/common/btn/btn_close2.gif"/>',"</a>","</div>",'<div id="pop_container">','<div id="pop_content">','<div class="txt_zzim"><strong>{=title}</strong>을(를) <span>책찜</span>하셨습니다</div>','<p class="desc4"><strong> 찜 목록 </strong> 페이지에서 찜한 책의 구매정보를 확인하실 수 있습니다.</p>',"</div>","</div>",'<div id="pop_footer">',"<div>",'<a class="dialog-confirm"><img src="https://ssl.pstatic.net/static/book/image/btn_zzimlist.gif" alt="찜리스트 보기" title="찜리스트 보기" width="106" height="28" style="margin-right: 5px"></a>','<a class="dialog-cancel"><img src="https://ssl.pstatic.net/static/book/image/btn_close2.gif" alt="닫기" title="닫기" width="48" height="28"></a>',"</div>","</div>","</div>",].join("");
oDialog.setLayerTemplate(sTemplate);
oDialog.show({title:zTitle},{close:function(e){},cancel:function(e){document.location.href="/myroom/wish_add_stay.naver?bid="+bid
},confirm:function(e){document.location.href="/myroom/wish_add_go.naver?bid="+bid
}})
}}function book_monitor(type,bid,seq){if(arguments[3]){domain="http://book.naver.com"
}else{domain=""
}monitorJson(type,bid,seq)
}function monitorJsonResult(obj,type,bid,seq){request=null;
if(obj=="not write"){alert("정기 점검 중입니다.")
}else{if(obj=="not login"){if(confirm("로그인 후에 작성하실 수 있습니다")){monitorWindow(type,bid,seq)
}}else{if(obj=="monitor exits"){alert("신고해주신 내용을 처리 중에 있습니다")
}else{monitorWindow(type,bid,seq)
}}}}function monitorWindow(type,bid,seq){window.open(domain+"/monitor/bookMonitor.naver?bid="+bid+"&type="+type+"&seq="+seq,"bookmonitor","resizable=no,width=392,height=557,scrollbars=no")
}function monitorJson(type,bid,seq){request=NAjax.load("/monitor/monitorJson.naver?bid="+bid+"&type="+type+"&seq="+seq,{callback:monitorJsonResult,returnType:NAjax.JSON},type,bid,seq)
}function iframeParentResize(oTarget,nMinimunHeight,baseTarget){nMinimunHeight=nMinimunHeight||500;
var nHeight=(/MSIE/.test(navigator.userAgent)?document.body.scrollHeight+(document.body.offsetHeight-document.body.clientHeight):Math.max(document.body.scrollHeight,document.body.clientHeight)+20);
if((/Chrome/.test(navigator.userAgent))||(/Firefox/.test(navigator.userAgent))){var dummy=document.createElement("DIV");
if(baseTarget){baseTarget.appendChild(dummy);
nHeight=dummy.offsetTop;
baseTarget.removeChild(dummy)
}else{document.body.appendChild(dummy);
nHeight=dummy.offsetTop;
document.body.removeChild(dummy)
}nHeight+=20
}oTarget.style.height=(nHeight<nMinimunHeight)?nMinimunHeight+"px":nHeight+"px";
if(typeof oTarget._check=="undefined"){oTarget._check=0
}if(oTarget._check<5){oTarget._check++;
setTimeout("iframeAutoResize",100,[oTarget,nMinimunHeight])
}else{oTarget._check=0
}}function popupAutoResize(){var thisX=parseInt(document.body.scrollWidth);
var thisY=parseInt(document.body.scrollHeight);
var maxThisX=screen.width-50;
var maxThisY=screen.height-50;
var marginY=0;
if(navigator.userAgent.indexOf("MSIE 6")>0){marginY=45
}else{if(navigator.userAgent.indexOf("MSIE 7")>0){marginY=15
}else{if(navigator.userAgent.indexOf("Firefox")>0){marginY=50
}else{if(navigator.userAgent.indexOf("Opera")>0){marginY=30
}else{if(navigator.userAgent.indexOf("Netscape")>0){marginY=-2
}}}}}if(thisX>maxThisX){window.document.body.scroll="yes";
thisX=maxThisX
}if(thisY>maxThisY-marginY){window.document.body.scroll="yes";
thisX+=19;
thisY=maxThisY-marginY
}window.resizeTo(thisX+10,thisY+marginY);
dialogWidth=thisX+"px";
dialogHeight=thisY+marginY+"px"
}function openBookIntro(){document.getElementById("simpleIntro").style.display="none";
document.getElementById("intro").style.display="";
document.getElementById("openIntroSection").style.display="none";
document.getElementById("closeIntroSection").style.display=""
}function closeBookIntro(){document.getElementById("simpleIntro").style.display="";
document.getElementById("intro").style.display="none";
document.getElementById("openIntroSection").style.display="";
document.getElementById("closeIntroSection").style.display="none";
location.href="#book_info"
}function openAuthorIntro(){document.getElementById("simpleAuthorIntro").style.display="none";
document.getElementById("authorFullIntro").style.display="";
document.getElementById("openAuthorSection").style.display="none";
document.getElementById("closeAuthorSection").style.display=""
}function closeAuthorIntro(){document.getElementById("simpleAuthorIntro").style.display="";
document.getElementById("authorFullIntro").style.display="none";
document.getElementById("openAuthorSection").style.display="";
document.getElementById("closeAuthorSection").style.display="none";
location.href="#author_info"
}function pan(amount){this.ticks=amount;
this.tick=0
}pan.prototype.reset=function(){this.tick=0
};
pan.prototype.next=function(){this.tick++;
var a=Math.PI*(this.tick/this.ticks-0.5);
return(Math.sin(a)+1)/2
};
pan.prototype.more=function(){return this.tick<this.ticks
};
var textView={container:null,hasContents:true,bid:0,list:[],keyList:[],fileNoList:[],initFileNoList:[],bonus:[],query:"",request:null,requestKey:null,requestQueue:[],focusElement:null,textHeight:800,panObj:null,transit:null,"searchResult:":null,diff:0,textBegin:0,textEnd:0,scrolling:false,BLANK_IMAGE:"https://ssl.pstatic.net/static/w9/blank.gif"};
textView.err=function(){textView.fireOnce();
textView.fireOnce=""
};
textView.info=function(begin,end){this.begin=begin;
this.end=end;
this.element=null;
this.prevBlock=null;
this.nextBlock=null;
this.blocked=false
};
textView.info.prototype.equals=function(target){return(target instanceof textView.info&&this.begin==target.begin&&this.end==target.end)
};
textView.info.prototype.isInRange=function(block){if(block instanceof textView.text){return(this.begin<=block.fileNo)&&(block.fileNo<=this.end)
}else{return(this.begin<=block.begin)&&(block.end<=this.end)
}};
textView.info.prototype.split=function(block){var splitList=[];
var infoBlock1,infoBlock2;
if(this.isInRange(block)){if(this.begin<block.begin&&block.end<this.end){infoBlock1=new textView.info(this.begin,block.begin-1,textView.diff);
infoBlock2=new textView.info(block.end+1,this.end,textView.diff);
if(this.prevBlock!=null){this.prevBlock.nextBlock=infoBlock1
}infoBlock1.prevBlock=this.prevBlock;
infoBlock1.nextBlock=block;
block.prevBlock=infoBlock1;
block.nextBlock=infoBlock2;
infoBlock2.prevBlock=block;
infoBlock2.nextBlock=this.nextBlock;
if(this.nextBlock!=null){this.nextBlock.prevBlock=infoBlock2
}splitList.push(infoBlock1);
splitList.push(block);
splitList.push(infoBlock2)
}else{if(this.begin<block.begin){infoBlock1=new textView.info(this.begin,block.begin-1,textView.diff);
if(this.prevBlock!=null){this.prevBlock.nextBlock=infoBlock1
}infoBlock1.nextBlock=block;
block.prevBlock=infoBlock1;
block.nextBlock=this.nextBlock;
if(this.nextBlock!=null){this.nextBlock.prevBlock=block
}splitList.push(infoBlock1);
splitList.push(block)
}else{if(block.end<this.end){infoBlock2=new textView.info(block.end+1,this.end,textView.diff);
if(this.prevBlock!=null){this.prevBlock.nextBlock=block
}block.prevBlock=this.prevBlock;
block.nextBlock=infoBlock2;
infoBlock2.prevBlock=block;
infoBlock2.nextBlock=this.nextBlock;
if(this.nextBlock!=null){this.nextBlock.prevBlock=infoBlock2
}splitList.push(block);
splitList.push(infoBlock2)
}else{if(this.prevBlock!=null){this.prevBlock.nextBlock=block
}if(this.nextBlock!=null){this.nextBlock.prevBlock=block
}block.prevBlock=this.prevBlock;
block.nextBlock=this.nextBlock;
splitList.push(block)
}}}}return splitList
};
textView.info.prototype.getElement=function(){if(this.element==null){this.element=this.generateElement()
}return this.element
};
textView.info.prototype.generateElement=function(){if(this.end>=textView.textBegin&&textView.textEnd>=this.begin){var element=document.createElement("div");
var buffer="";
var start=Math.max(Math.min(Math.max(this.begin,textView.textBegin),textView.textEnd)-textView.diff,1);
var end=Math.min(Math.max(this.end,textView.textBegin),textView.textEnd)-textView.diff;
var range;
if(start==end){range=start
}else{range=start+"-"+end
}element.className="box";
if(textView.query!=""&&textView.searchResult!=null){buffer='<div class="matched_text">\n<p>이 책에는 <strong>&lsquo;'+disableTag(textView.query)+"&rsquo;</strong>(으)로 검색된 <strong>"+textView.searchResult.total+"건</strong>의 페이지가 있습니다.</p>\n<dl>";
for(var i=0;
i<textView.searchResult.summary.length;
i++){buffer=buffer+'<dt><a href="#" onClick="foldDetailSearchResult();return textView.requestText(&#34;'+textView.searchResult.summary[i].encoded+'&#34;)">'+((textView.searchResult.summary[i].page<1)?"?":textView.searchResult.summary[i].page)+"</a></dt>";
buffer=buffer+"<dd>"+textView.searchResult.summary[i].searchedText+"</dd>"
}buffer=buffer+'</dl>\n<p class="more"><a href="#" onClick=\'return unfoldDetailSearchResult()\'>검색 결과 전체보기</a></p>\n</div>\n'
}if(this.blocked){buffer=buffer+"<p><strong>"+range+"페이지</strong>는 열람 불가 입니다.<br/> 저작권 보호를 위해  본문의 일부만 보실 수 있습니다. 더 많은 내용은 책을 구매해서 보시기 바랍니다.</p>"
}else{buffer=buffer+"<p><strong>"+range+"페이지</strong>는  <a href=\"#\" onClick='return focusInput()'>본문 검색</a>을 통해서만 볼 수 있습니다.</p>"
}element.innerHTML=buffer;
return element
}else{return null
}};
textView.info.prototype.reload=function(){if(this.element!=null&&this.element.parentNode){var oldElement=this.element;
this.element=null;
var index=textView.getCurrentIndex();
var currentElement=textView.list[index].getElement();
var elementOffset=currentElement.offsetTop-textView.container.scrollTop;
oldElement.parentNode.replaceChild(this.getElement(),oldElement);
textView.container.scrollTop=currentElement.offsetTop-elementOffset
}};
textView.info.prototype.getNextBlock=function(){var nextBlock=this.nextBlock;
while(nextBlock!=null&&nextBlock.getElement()==null){nextBlock=nextBlock.nextBlock
}return nextBlock
};
textView.info.prototype.getPrevBlock=function(){var prevBlock=this.prevBlock;
while(prevBlock!=null&&prevBlock.getElement()==null){prevBlock=prevBlock.prevBlock
}return prevBlock
};
textView.text=function(info){this.isLoaded=false;
this.key=null;
this.base=null;
this.element=null;
this.textType=null;
this.text=null;
this.fileNo=null;
this.pageNo=null;
this.tag=null;
this.query=null;
this.prev=null;
this.next=null;
this.block=0;
this.prevText=null;
this.nextText=null;
this.prevBlock=null;
this.nextBlock=null;
this.indexName="";
this.init(info)
};
textView.text.prototype.equals=function(target){return(target instanceof textView.text&&this.fileNo==target.fileNo)
};
textView.text.prototype.init=function(info){this.textType=info.textType;
this.text=info.text;
this.indexName=info.indexName;
this.fileNo=info.fileNo;
this.pageNo=info.pageNo;
this.tag=info.tag;
this.query=info.query;
this.prev=info.prev;
this.next=info.next;
this.block=info.block;
this.begin=this.fileNo;
this.end=this.fileNo;
if(this.query==""||this.textType=="text"){this.base=info.text
}};
textView.text.prototype.getElement=function(){if(this.element==null){this.element=this.generateElement()
}return this.element
};
textView.text.prototype.generateElement=function(){var element=document.createElement("div");
element.unselectable="on";
element.style.MozUserSelect="none";
element.style.KhtmlUserSelect="none";
element.style.position="relative";
var buffer="";
if(this.textType=="image"){buffer=buffer+"<div style='position:relative'>";
if(this.query==""){buffer=buffer+"<img src='"+this.text+"' style='padding-left:51px;height:"+textView.textHeight+"px'>";
buffer=buffer+"<img src='"+textView.BLANK_IMAGE+"' style='position:absolute;width:1px;top:0px;left:0px;padding-left:51px;'>"
}else{buffer=buffer+"<img src='"+textView.BLANK_IMAGE+"' style='padding-left:51px;width:1px;height:"+textView.textHeight+"px'>";
buffer=buffer+"<img src='"+this.text+"' style='position:absolute;top:0px;left:0px;padding-left:51px;'>"
}buffer=buffer+"</div>";
element.innerHTML=buffer;
var makeCallBack=function(text){return function(){if(this.src!=textView.BLANK_IMAGE){this.style.height="";
this.style.width="";
if(textView.textHeight!=this.height&&this.height>100){textView.textHeight=this.height;
textView.resizeTextHeight()
}text.isLoaded=true
}}
};
element.getElementsByTagName("img")[0].onload=makeCallBack(this);
element.getElementsByTagName("img")[1].onload=makeCallBack(this)
}else{var opacity;
var text;
element.className="body_cnt";
if(this.query==""){text=this.text
}else{var dummy=document.createElement("div");
dummy.innerHTML=this.text;
var elementPos=dummy.firstChild;
var replaceElement;
while(elementPos!=null){if(elementPos.nodeName=="#text"&&elementPos.nodeValue!=null){replaceElement=document.createElement("div");
replaceElement.innerHTML=strReplaceAll(elementPos.nodeValue,this.query,'<span class="highlight">'+this.query+"</span>");
dummy.replaceChild(replaceElement,elementPos);
elementPos=replaceElement
}elementPos=elementPos.nextSibling
}text=dummy.innerHTML;
elementPos=null;
dummy=null
}if(this.block==2){opacity=95;
buffer=buffer+"<div style='width:100%;height:100%;position:absolute;left:0px;top:0px;background-color:#ffffff;opacity:"+Math.min((opacity/100+0.01),1)+";filter:alpha(opacity="+opacity+")'></div>"
}else{opacity=0
}buffer=buffer+'<div class="body_stit">'+this.indexName+"</div>"+text+'<div class="body_page">- <strong>'+this.pageNo+"</strong> -</div>";
element.innerHTML=buffer;
this.isLoaded=true
}this.showLink(element);
return element
};
textView.text.prototype.showLink=function(element){var link;
if(this.prevText==null&&this.prev){if(element.firstChild.tagName.toLowerCase()!="p"){link=document.createElement("p");
link.className="prev";
link.innerHTML='<a href="#" onClick="return textView.requestText(&#34;'+this.prev+'&#34;)">이전 페이지 보기</a>';
element.insertBefore(link,element.firstChild)
}}else{if(element.firstChild.tagName.toLowerCase()=="p"){element.removeChild(element.firstChild)
}}if(this.nextText==null&&this.next){if(element.lastChild.tagName.toLowerCase()!="p"){link=document.createElement("p");
link.className="next";
link.innerHTML='<a href="#" onClick="return textView.requestText(&#34;'+this.next+'&#34;)">다음 페이지 보기</a>';
element.appendChild(link)
}}else{if(element.lastChild.tagName.toLowerCase()=="p"){element.removeChild(element.lastChild)
}}};
textView.text.prototype.setLinkText=function(text){if(text instanceof textView.text){if(this.prevText==null&&(this.fileNo-1)==text.fileNo){this.prevText=text
}if(this.nextText==null&&(this.fileNo+1)==text.fileNo){this.nextText=text
}if(this.element!=null){this.showLink(this.element)
}}};
textView.text.prototype.reload=function(requestInfo){if(this.query!=requestInfo.query){if(this.textType=="image"){if(this.base==null||requestInfo.query!=""){return false
}else{var image=this.element.getElementsByTagName("img")[1];
this.isLoaded=false;
this.text=this.base;
image.style.display="none";
this.query=requestInfo.query
}}else{if(this.base==null){return false
}if(this.element!=null&&this.element.parentNode!=null){var oldElement=this.element;
this.element=null;
this.query=requestInfo.query;
oldElement.parentNode.replaceChild(this.getElement(),oldElement)
}}}if(requestInfo.focus){textView.focusElement=this;
textView.scrolling=true
}return true
};
textView.text.prototype.replace=function(textInfo){if(textInfo.query==""){this.base=textInfo.text
}this.query=textInfo.query;
this.pageNo=textInfo.pageNo;
this.tag=textInfo.tag;
this.next=this.next||textInfo.next;
this.prev=this.prev||textInfo.prev;
if(textInfo.textType=="image"){this.isLoaded=false;
if(textInfo.query==""){this.element.getElementsByTagName("img")[0].src=textInfo.text;
this.element.getElementsByTagName("img")[1].style.display="none"
}else{this.element.getElementsByTagName("img")[1].src=textInfo.text;
this.element.getElementsByTagName("img")[1].style.display=""
}}else{if(this.textType=="image"){var oldElement=this.getElement();
this.text=textInfo.text;
this.indexName=textInfo.indexName;
this.textType=textInfo.textType;
this.element=null;
oldElement.parentNode.replaceChild(this.getElement(),oldElement)
}}if(this.element!=null){this.showLink(this.element);
if(this.textType=="text"){if(this.element.getElementsByTagName("div").length>0&&this.element.getElementsByTagName("div")[0].className==""){this.element.getElementsByTagName("div")[0].style.height=this.element.offsetHeight
}}}textView.updatePage()
};
textView.text.prototype.getNextBlock=function(){var nextBlock=this.nextBlock;
while(nextBlock!=null&&nextBlock.getElement()==null){nextBlock=nextBlock.nextBlock
}return nextBlock
};
textView.text.prototype.getPrevBlock=function(){var prevBlock=this.prevBlock;
while(prevBlock!=null&&prevBlock.getElement()==null){prevBlock=prevBlock.prevBlock
}return prevBlock
};
textView.initText=function(container,bid,begin,end,textBegin,textEnd,fileNoList,keyList,diff,initRequest){textView.container=container;
textView.bid=bid;
container.oncontextmenu=function(){return false
};
textView.diff=diff;
textView.list.push(new textView.info(begin,end));
textView.textBegin=textBegin;
textView.textEnd=textEnd;
textView.initLoad(fileNoList,keyList,initRequest);
document.body.onselectstart=cancelEvent;
document.body.ondragselect=cancelEvent;
document.body.unselectable="on"
};
textView.initLoad=function(fileNoList,keyList,initRequest){for(var i=0;
i<keyList.length;
i++){if(keyList[i]!=""){var fakeTextInfo={textType:"image",text:textView.BLANK_IMAGE,indexName:"",fileNo:fileNoList[i],pageNo:"",tag:"",query:"__FAKE__",prev:"",next:"",block:0};
var fakeRequestInfo={key:keyList[i],focus:false,query:"__FAKE__"};
textView.loadText(fakeTextInfo,fakeRequestInfo)
}}if(initRequest!=null){textView.requestText(initRequest)
}else{textView.container.onscroll=textView.updatePage;
textView.updatePage()
}};
textView.inRequest=function(key){if(key==textView.requestKey){return true
}var result=false;
var length=textView.requestQueue.length;
for(var i=0;
i<length;
i++){if(key==textView.requestQueue[i].key){result=true;
break
}}return result
};
textView.requestText=function(requestInfo){var text;
if(!requestInfo.key){requestInfo={key:requestInfo,query:textView.query,focus:true}
}if(!textView.inRequest(requestInfo.key)){text=textView.getText(requestInfo.key);
if(text!=null&&text.reload(requestInfo)){window.setTimeout(textView.nextRequestText,100)
}else{if(textView.request==null){textView.requestKey=requestInfo.key;
textView.request=NAjax.load("/bookdb/text_info_json.naver?dencrt="+encodeURIComponent(requestInfo.key)+"&query="+encodeURIComponent(requestInfo.query),{callback:textView.loadText,returnType:NAjax.JSON},requestInfo)
}else{textView.requestQueue.push(requestInfo)
}}}return false
};
textView.nextRequestText=function(){if(textView.requestQueue.length>0){var currentFileNo=textView.list[textView.getCurrentIndex()].fileNo;
var sortFunction=function(a,b){var aScore=textView.keyList[a.key]?Math.abs(textView.keyList[a.key]-currentFileNo):0;
var bScore=textView.keyList[b.key]?Math.abs(textView.keyList[b.key]-currentFileNo):0;
var result=aScore-bScore;
return(result==0)?0:(result/Math.abs(result))
};
textView.requestQueue=textView.requestQueue.sort(sortFunction);
textView.requestText(textView.requestQueue.shift())
}else{textView.focusText()
}};
textView.loadText=function(textInfo,requestInfo){if(textInfo==null||textInfo.status<0){alert("유효하지 않거나 잘못된 URL 입니다.");
textView.request=null;
textView.requestKey="";
textView.container.onscroll=textView.updatePage;
textView.updatePage();
return
}var index=-1;
for(var i=0;
i<textView.list.length;
i++){if(textView.list[i].begin<=textInfo.fileNo&&textInfo.fileNo<=textView.list[i].end){index=i;
break
}}if(index>=0){var info=textView.list[index];
if(textInfo.block<2||(textInfo.block==2&&!textInfo.login)){var text;
if(info instanceof textView.info){text=new textView.text(textInfo);
text.key=requestInfo.key;
textView.keyList[requestInfo.key]=text.fileNo;
textView.fileNoList[text.fileNo]=text;
textView.rebuild(index,info.split(text))
}else{if(info instanceof textView.text){text=info;
text.replace(textInfo);
textView.keyList[requestInfo.key]=text.fileNo
}}if(text.block>0){textView.bonus.push(text)
}if(requestInfo.focus){textView.focusElement=text;
textView.scrolling=true
}}if(textInfo.login){if(textInfo.block>=2){alert("허용된 분량이 초과 되었거나, 저작권자에 의해 열람이 제한되었습니다.\n 더 많은 내용은 구매하여 보시기 바랍니다.");
textView.container.onscroll=textView.updatePage;
textView.updatePage()
}}else{var url="http://"+document.location.host+"/bookdb/text_view.naver?bid="+textView.bid+"&dencrt="+encodeURIComponent(requestInfo.key)+"&query="+encodeURIComponent(textView.query);
if(textInfo.block==2){window.setTimeout(function(){textView.requestLogin(url)
},1000)
}else{if(textInfo.block==3){textView.requestLogin(url)
}}}}textView.request=null;
textView.requestKey="";
textView.nextRequestText()
};
textView.requestLogin=function(callbackUrl){if(confirm("로그인 하시겠습니까?")){var url="https://nid.naver.com/nidlogin.login?url="+encodeURIComponent(callbackUrl);
window.location.href=url
}else{textView.removeBonusPage(-1)
}};
textView.rebuild=function(index,newList){var currentIndex=textView.getCurrentIndex();
var currentElement;
var elementOffset;
var textArea=document.getElementById("text_view");
if(currentIndex>=0){currentElement=textView.list[currentIndex].getElement();
elementOffset=currentElement.offsetTop-textView.container.scrollTop
}if(textView.list[index].element!=null){textArea.removeChild(textView.list[index].element)
}textView.list.splice.apply(textView.list,[index,1].concat(newList));
for(var i=index+newList.length-1;
i>=index;
i--){if(textView.list[i].getElement()!=null){if(textView.list[i].getNextBlock()==null){textArea.appendChild(textView.list[i].getElement())
}else{textArea.insertBefore(textView.list[i].getElement(),textView.list[i].getNextBlock().getElement())
}}if(textView.list[i] instanceof textView.text){if(textView.list[i].getPrevBlock() instanceof textView.text){var bodyLine=document.createElement("div");
bodyLine.className="";
textArea.insertBefore(bodyLine,textView.list[i].getElement())
}if(textView.list[i].getNextBlock() instanceof textView.text){var bodyLine=document.createElement("div");
bodyLine.className="";
textArea.insertBefore(bodyLine,textView.list[i].getNextBlock().getElement())
}if(textView.list[i-1] instanceof textView.text){textView.list[i].setLinkText(textView.list[i-1]);
textView.list[i-1].setLinkText(textView.list[i])
}if(textView.list[i+1] instanceof textView.text){textView.list[i].setLinkText(textView.list[i+1]);
textView.list[i+1].setLinkText(textView.list[i])
}}}if(currentIndex>=0){textView.container.scrollTop=currentElement.offsetTop-elementOffset
}};
textView.getIndex=function(obj){var index=-1;
for(var i=0;
i<textView.list.length;
i++){if(textView.list[i].equals(obj)){index=i;
break
}}return index
};
textView.removeText=function(text){textView.removeIndex(textView.getIndex(text))
};
textView.removeIndex=function(index){var removeBlock=textView.list[index];
if(!removeBlock||removeBlock instanceof textView.info){return false
}var currentIndex=textView.getCurrentIndex();
var currentElement;
var elementOffset;
var textArea=document.getElementById("text_view");
var beginIndex=index;
var endIndex=index;
if(currentIndex>=0&&currentIndex!=index){currentElement=textView.list[currentIndex].getElement();
elementOffset=currentElement.offsetTop-textView.container.scrollTop
}if(removeBlock.prevBlock!=null){if(removeBlock.prevBlock instanceof textView.info){beginIndex=index-1
}else{textArea.removeChild(removeBlock.prevBlock.getElement().nextSibling)
}}if(removeBlock.nextBlock!=null){if(removeBlock.nextBlock instanceof textView.info){endIndex=index+1
}else{textArea.removeChild(removeBlock.getElement().nextSibling)
}}delete textView.keyList[removeBlock.key];
delete textView.fileNoList[removeBlock.fileNo];
var begin=textView.list[beginIndex].begin;
var end=textView.list[endIndex].end;
var info=new textView.info(begin,end,textView.diff);
if(info.getElement()!=null){textArea.insertBefore(info.getElement(),textView.list[beginIndex].getElement())
}for(var i=beginIndex;
i<=endIndex;
i++){if(textView.list[i].element!=null){textArea.removeChild(textView.list[i].element)
}}if(textView.list[beginIndex-1]){textView.list[beginIndex-1].nextBlock=info;
info.prevBlock=textView.list[beginIndex-1]
}if(textView.list[endIndex+1]){info.nextBlock=textView.list[endIndex+1];
textView.list[endIndex+1].prevBlock=info
}if(currentIndex>=0&&currentIndex!=index){textView.container.scrollTop=currentElement.offsetTop-elementOffset
}textView.list.splice(beginIndex,endIndex-beginIndex+1,info);
textView.updatePage()
};
textView.focusText=function(){if(textView.focusElement!=null){if(textView.focusElement.isLoaded){var element=textView.focusElement.getElement();
var start=textView.container.scrollTop;
var end=element.offsetTop;
var currentFileNo=textView.list[textView.getCurrentIndex()].fileNo;
if(textView.transit!=null){window.clearTimeout(textView.transit)
}if(Math.abs(start-end)<1000){textView.panObj=new pan(10)
}else{textView.panObj=new pan(20)
}textView.container.onscroll="";
textView.transit=textView.scrollArea(start,end);
textView.focusElement=null
}else{window.setTimeout(textView.focusText,100)
}}};
textView.scrollArea=function(start,end){if(textView.panObj.more()){textView.container.scrollTop=start+(end-start)*textView.panObj.next();
return window.setTimeout(function(){textView.scrollArea(start,end)
},1)
}else{textView.scrolling=false;
textView.container.scrollTop=end;
textView.container.onscroll=textView.updatePage;
textView.updatePage();
return null
}};
textView.updatePage=function(){var index=textView.getCurrentIndex();
var currentPage;
if(index!=-1){currentPage=(textView.list[index].pageNo!=-1)?textView.list[index].pageNo:textView.list[index].tag;
if(currentPage!=""){document.getElementById("current_page").innerHTML=currentPage+"페이지"
}else{document.getElementById("current_page").innerHTML=""
}var text=textView.list[index];
var requestInfo={key:text.key,query:textView.query,focus:false};
if(!text.reload(requestInfo)){textView.requestText(requestInfo)
}var currentFileNo=textView.list[index].fileNo;
textView.removeBonusPage(currentFileNo)
}};
textView.removeBonusPage=function(currentFileNo){if(textView.scrolling){return
}if(currentFileNo==-1){for(var i=0;
i<textView.bonus.length;
i++){var target=textView.bonus[i];
if(target!=null){textView.removeText(target)
}}textView.bonus=[]
}else{if(Math.abs(textView.bonus[0]!=null&&textView.bonus[0].fileNo-currentFileNo)>0){var target=textView.bonus[0];
textView.removeText(target);
textView.bonus[0]=null
}}};
textView.getCurrentIndex=function(){var refPos=textView.container.scrollTop;
var index=-1;
var offset=Infinity;
for(var i=0;
i<textView.list.length;
i++){if(textView.list[i] instanceof textView.text&&Math.abs(refPos-textView.list[i].element.offsetTop)<offset){index=i;
offset=Math.abs(refPos-textView.list[i].element.offsetTop)
}}return index
};
textView.getText=function(key){if(textView.keyList[key]&&textView.keyList[key]!=null&&textView.fileNoList[textView.keyList[key]]){return textView.fileNoList[textView.keyList[key]]
}else{return null
}};
textView.resizeTextHeight=function(){var image;
for(var fileNo in textView.fileNoList){if(!textView.fileNoList[fileNo]||!("getElement" in textView.fileNoList[fileNo])){continue
}image=textView.fileNoList[fileNo].getElement().getElementsByTagName("img")[0];
if(image.src==textView.BLANK_IMAGE){image.style.height=textView.textHeight+"px"
}}};
textView.clearHighlight=function(){textView.query="";
for(var fileNo in textView.fileNoList){if(!textView.fileNoList[fileNo]||!("reload" in textView.fileNoList[fileNo])){continue
}textView.fileNoList[fileNo].reload({key:textView.fileNoList[fileNo].key,query:"",focus:false})
}textView.updatePage()
};
textView.reloadTextinfo=function(){var block;
for(var i=0;
i<textView.list.length;
i++){block=textView.list[i];
if(block instanceof textView.info){block.reload()
}}};
textView.clickContent=function(key){var textBody=document.getElementById("textBody");
if(hasClass(textBody,"result_unfolder")){foldDetailSearchResult()
}textView.requestText(key);
return false
};
function toggleTextContents(){var contents=document.getElementById("contents");
if(hasClass(contents,"index_on")){removeClass(contents,"index_on")
}else{addClass(contents,"index_on")
}}function toggleTextContentsOnAndFocus(){var contents=document.getElementById("contents");
addClass(contents,"index_on");
window.scrollTo(0,180);
return false
}function searchTextInBiblio(bid,page,sortType,fold){if(arguments.length==1){var obj=bid;
bid=obj.bid.value;
textView.query=obj.textSearchKeyword.value;
page=1
}else{document.getElementById("textSearchKeyword").value=textView.query
}sortType=sortType||0;
if(arguments.length<4){fold=false
}var url="/search/search_in_biblio_json.naver?bid="+bid+"&page="+page+"&query="+encodeURIComponent(textView.query)+"&sortType="+sortType;
NAjax.load(url,{callback:showSearchTextInBiblio,returnType:NAjax.JSON},fold);
return false
}function showSearchTextInBiblio(obj,fold){var currentPage=obj.currentPage;
var total=obj.total;
var totalPage=Math.ceil(total/5);
var startPage=Math.floor((currentPage-1)/5)*5+1;
var endPage=Math.min(startPage+5-1,totalPage);
var bid=obj.bid;
var query=obj.query;
var sortType=obj.sortType;
textView.searchResult=obj;
document.getElementById("textSearch_keyword").innerHTML="&lsquo;"+disableTag(obj.query)+"&rsquo;";
document.getElementById("textSearch_total").innerHTML=obj.total+"건";
var sort9,sort10;
var buffer;
if(obj.total>0){if(sortType==0){sort9='<strong><a href="#" onClick="return searchTextInBiblio(&#34;'+bid+"&#34;,1,0)\"><span>관련도순</span><span class='blind'>선택됨</span></a></strong>";
sort10='<a href="#" onClick="return searchTextInBiblio(&#34;'+bid+'&#34;,1,1)"><span>페이지순</span></a>'
}else{sort9='<a href="#" onClick="return searchTextInBiblio(&#34;'+bid+'&#34;,1,0)"><span>관련도순</span></a>';
sort10='<strong><a href="#" onClick="return searchTextInBiblio(&#34;'+bid+"&#34;,1,1)\"><span>페이지순</span><span class='blind'>선택됨</span></a></strong>"
}buffer='<div class="option_search"><ul class="sort_type"><li class="sort9">'+sort9+'</li><li class="sort10">'+sort10+"</li></ul></div>";
buffer=buffer+"<dl>";
for(var i=0;
i<obj.result.length;
i++){buffer=buffer+'<dt><a href="#" onClick="foldDetailSearchResult();return textView.requestText(&#34;'+obj.result[i].encoded+'&#34;)">'+((obj.result[i].page<0)?"?":obj.result[i].page)+"</a></dt>";
buffer=buffer+"<dd>"+obj.result[i].searchedText+"</dd>"
}buffer=buffer+"</dl>";
buffer=buffer+'<div class="paginate2">';
if(startPage>1){buffer=buffer+'<a href="#" class="prev2" onClick="return searchTextInBiblio(&#34;'+bid+"&#34;,"+1+","+sortType+')">맨 처음</a>\t';
buffer=buffer+'<a href="#" class="prev" onClick="return searchTextInBiblio(&#34;'+bid+"&#34;,"+(startPage-1)+","+sortType+')">이전</a>\t'
}for(var i=startPage;
i<=endPage;
i++){if(i==currentPage){buffer=buffer+'<a href="#" onClick="return false"><strong>'+i+"</strong></a>\t"
}else{buffer=buffer+'<a href="#" onClick="return searchTextInBiblio(&#34;'+bid+"&#34;,"+i+","+sortType+')">'+i+"</a>\t"
}}if(endPage<totalPage){buffer=buffer+'<a href="#" class="next" onClick="return searchTextInBiblio(&#34;'+bid+"&#34;,"+(endPage+1)+","+sortType+')">다음</a>\t';
buffer=buffer+'<a href="#" class="next2" onClick="return searchTextInBiblio(&#34;'+bid+"&#34;,"+totalPage+","+sortType+')">맨 끝</a>\t'
}buffer=buffer+"</div>";
textView.reloadTextinfo()
}else{textView.query="";
buffer='<p class="nothing"><strong>&lsquo;'+disableTag(obj.query)+'&rsquo;</strong>에 대한 본문검색 결과가 없습니다. 다른 책의 본문을 검색해 보세요.<br><a href="/search/text_search.naver?query='+encodeURIComponent(disableTag(obj.query))+'">'+disableTag(obj.query)+"에 대한 다른 책 본문 검색 결과 보기</a></p>"
}document.getElementById("textSearch_result").innerHTML=buffer;
if(fold){foldDetailSearchResult()
}else{unfoldDetailSearchResult()
}}function closeTextDetailSearch(){var textBody=document.getElementById("textBody");
removeClass(textBody,"result_unfolder");
removeClass(textBody,"result_folder");
document.getElementById("dimlayer").style.display="none";
textView.clearHighlight();
document.getElementById("textSearchKeyword").value="";
textView.searchResult=null;
textView.reloadTextinfo();
return false
}function toggleDetailSearchResult(){var textBody=document.getElementById("textBody");
if(hasClass(textBody,"result_folder")){unfoldDetailSearchResult()
}else{foldDetailSearchResult()
}return false
}function foldDetailSearchResult(){var textBody=document.getElementById("textBody");
var btn=document.getElementById("foldBtn");
var fold=btn.lastChild;
addClass(textBody,"result_folder");
removeClass(textBody,"result_unfolder");
document.getElementById("dimlayer").style.display="none";
fold.title="펼치기";
fold.alt="펼치기";
removeClass(btn,"unfold");
textView.updatePage();
return false
}function unfoldDetailSearchResult(){var textBody=document.getElementById("textBody");
var btn=document.getElementById("foldBtn");
var fold=btn.lastChild;
addClass(textBody,"result_unfolder");
removeClass(textBody,"result_folder");
document.getElementById("dimlayer").style.display="block";
fold.title="접기";
fold.alt="접기";
addClass(btn,"unfold");
return false
}function focusedStyle(flag){var obj=document.getElementById("textSearchKeyword");
if(flag){obj.parentNode.className="focus"
}else{obj.parentNode.className=""
}}function focusInput(){document.getElementById("textSearchKeyword").focus();
window.scrollTo(0,180);
return false
}function getCoverImageURL(bid,isAdultUser,isAdultBook,isAdultThumbnail){if(isAdultUser!="true"&&isAdultBook=="true"&&isAdultThumbnail=="true"){return"https://ssl.pstatic.net/static/book/img_age_config.jpg"
}var convertedBid="00000000".substring(0,8-bid.length)+bid;
return"https://bookthumb-phinf.pstatic.net/cover/"+convertedBid.substring(0,3)+"/"+convertedBid.substring(3,6)+"/"+convertedBid+".jpg"
}function getTemplateRank(imgRoot,rank){var rtn="";
for(var j=0;
j<rank.length;
j++){rtn+='<span class="no'+rank.charAt(j)+'"></span>'
}return rtn
}function getTemplateRankChange(imgRoot,rankChange){if(rankChange=="NEW"){return'<em class="new">New</em>'
}if(rankChange>0){return'<img src="'+imgRoot+'/ico_rank_up.gif" alt="순위상승" title="순위상승" width="5" height="12"> <em class="up">'+rankChange+"</em>"
}if(rankChange==0){return'<img src="'+imgRoot+'/ico_rank.gif" alt="순위변동없음" title="순위변동없음" width="5" height="12"> <em>0</em>'
}return'<img src="'+imgRoot+'/ico_rank_down.gif" alt="순위하락" title="순위하락" width="5" height="12"> <em class="down">'+(rankChange*-1)+"</em>"
}function currencyFormat(currencyPrice){if(currencyPrice==null){return"0"
}var currencyPriceLength=currencyPrice.length;
if(currencyPriceLength<1){return"0"
}var currencyPriceReturn=currencyPrice.charAt(0);
for(var idx=1;
idx<currencyPriceLength;
idx++){if((currencyPriceLength-idx)%3==0){currencyPriceReturn+=","
}currencyPriceReturn+=currencyPrice.charAt(idx)
}return currencyPriceReturn
}function startsWith(source,text){if(source==null||text==null){return false
}if(source.length<text.length){return false
}if(source.substring(0,text.length)==text){return true
}return false
}function endsWith(source,text){if(source==null||text==null){return false
}if(source.length<text.length){return false
}if(source.substring(source.length-text.length)==text){return true
}return false
}function camelCaps(src){if(src==null){return null
}var rtn="";
var c="";
var i=0;
for(i=0;
i<src.length-1;
i++){c=src.charAt(i);
if(c=="-"||c=="_"){i++;
c=src.charAt(i);
rtn+=(c>="a"&&c<="z"?c.toUpperCase():c)
}else{rtn+=c
}}rtn+=src.charAt(i);
return rtn
}function isCSSWithSizeEffect(key){return startsWith(key,"font")||startsWith(key,"margin")||startsWith(key,"padding")||startsWith(key,"line")||startsWith(key,"word-wrap")||startsWith(key,"list-style")||startsWith(key,"word-spacing")||startsWith(key,"letter-spacing")||startsWith(key,"white-space")
}function copyCss(source,target,direct){var obj=new Object;
if(window.getComputedStyle){var styleAttr=(source.ownerDocument||source.document||document).defaultView.getComputedStyle(source,null);
for(var key in styleAttr){key=(isNaN(key)?key:styleAttr.item(key)).replace(/([A-Z])/g,"-$1").toLowerCase();
if(styleAttr.getPropertyValue(key)!=undefined&&styleAttr.getPropertyValue(key)!=null&&styleAttr.getPropertyValue(key)!=""){if(isCSSWithSizeEffect(key)){obj[key]=styleAttr.getPropertyValue(key)
}}}}else{var styleAttr=source.currentStyle||source.style;
for(var key in styleAttr){if(styleAttr[key]!=undefined&&styleAttr[key]!=null&&styleAttr[key]!=""){if(isCSSWithSizeEffect(key)){obj[key]=styleAttr[key]
}}}}if(direct==true){applyCss(target,obj)
}else{return obj
}}function applyCss(target,styles){for(var k in styles){try{target.style[(window.getComputedStyle?camelCaps(k):k)]=styles[k]
}catch(err){}}}function smart_delete(bid,seq,postType){var msg="정말 삭제하시겠습니까?";
if(postType!=""){msg="블로그와 연동된 글입니다. \n삭제시 내 블로그의 글은 삭제되지 않습니다."
}if(confirm(msg)){document.location.href="/bookdb/review_write_action.naver?bid="+bid+"&seq="+seq+"&mode=delete"
}}var _GNB="/product/go.naver";
var shoppingGNB="http://shopping.naver.com/go.nhn";
function cpLink(cpName,cpUrl,bid,isbn,isCart){if(isCart==true){cpUrl=cpUrl+isbn
}if(cpName=="ridi"){cpUrl=cpUrl+"&referer=naver_book"
}window.open(cpUrl)
}function openContents(event){document.getElementById("biblioContents").style.height="";
document.getElementById("sectionOpen").style.display="none";
document.getElementById("sectionClose").style.display="";
return false
}function closeContents(event){document.getElementById("biblioContents").style.height="300px";
document.getElementById("sectionOpen").style.display="";
document.getElementById("sectionClose").style.display="none";
location.href="#bookContents";
return false
}function openBiblioContents(){document.getElementById("sectionOpen").style.display="none";
document.getElementById("sectionClose").style.display="";
document.getElementById("biblioContents").style.display="";
document.getElementById("simplebiblioContents").style.display="none"
}function closeBiblioContents(){document.getElementById("sectionOpen").style.display="";
document.getElementById("sectionClose").style.display="none";
document.getElementById("biblioContents").style.display="none";
document.getElementById("simplebiblioContents").style.display="";
location.href="#bookContents"
}function showPrin(){window.open("/review/notice.naver","review_info","scrollbars=1 resizable=no width=565 height=835");
return
}function getIcon19(isAdult){if(isAdult==true||isAdult=="true"){return'<img width="13" height="13" class="adult" alt="19세 이상" title="19세 이상" src="https://ssl.pstatic.net/static/book/image/icon_shield.png" complete="complete" />'
}return""
}var lastShowLayerElement="";
function showAdultLayer(bid,isLoginUser,isAdultUser,isAdultBook){hidePopUpLayer(lastShowLayerElement);
if(isAdultBook!="true"&&isAdultBook!=true){return true
}if(isAdultUser=="true"||isAdultUser==true){return true
}basis=document.getElementById("btn_buy_"+bid);
if(isLoginUser=="true"||isLoginUser==true){layer=$("only_adult_layer");
showPopUpLayer(layer,basis)
}else{layer=$("need_adult_layer");
showPopUpLayer(layer,basis)
}lastShowLayerElement=layer;
return false
}function showPopUpLayer(layer,basis){var location=getLayerLocation(basis);
layer.style.left=location.left;
layer.style.top=location.top;
layer.className="layerpopup on"
}function hidePopUpLayer(layer){if(layer==""||layer=="undefined"){return
}layer.className="layerpopup"
}function getLayerLocation(basis){var content=jindo.$Element($("content")).offset();
var offset=jindo.$Element(basis).offset();
var result={top:offset.top-content.top+"px",left:offset.left+basis.offsetWidth-content.left+"px"};
return result
}function charDisplayLength(c){var charCode=c.charCodeAt(0);
if(charCode>="A".charCodeAt(0)&&charCode<="Z".charCodeAt(0)){return 1.5
}if(charCode>=0&&charCode<=255){return 1
}return 2
}function summarizeText(text,maxLength,tail){var result=[];
var tag=[];
var isTag=false;
var textLength=0;
var isSummarized=false;
if(!text){return""
}text=text.replace(/^\s+|\s+$/,"");
for(var i=0;
i<text.length;
i++){var c=text.charAt(i);
if(c==">"){isTag=false;
tag.push(c);
result.push(tag.join(""));
tag=[];
continue
}if(c=="<"){isTag=true
}if(isTag){tag.push(c);
continue
}textLength+=charDisplayLength(c);
if(textLength>=maxLength){isSummarized=true;
break
}result.push(c)
}result=result.join("");
result=result.replace(/&[a-z]+$/g,"");
return(result+((isSummarized)?"</b>"+tail+"</p>":""))
}if(!Array.prototype.forEach){Array.prototype.forEach=function(fn,scope){for(var i=0,len=this.length;
i<len;
++i){fn.call(scope||this,this[i],i,this)
}}
}var naver=naver||{};
naver.book=naver.book||{};
naver.book.LikeLog=jindo.$Class({_element:{likeBtn:null,isListType:"N",bid:"",platform:"",pageUrl:"",elementId:""},setElement:function(element){this._element.likeBtn=element.likeBtn;
this._element.isListType=element.isListType;
this._element.bid=element.bid;
this._element.platform=element.platform;
this._element.pageUrl=element.pageUrl;
this._element.elementId=element.elementId
},bindEvent:function(){jindo.$Fn(function(){var isLikeOn=(this._element.likeBtn.hasClass("on")==true)?false:true;
this.registerLikeLog(this._element.bid,this._element.platform,this._element.pageUrl,isLikeOn)
},this).attach(this._element.likeBtn,"click")
},bindElementListEvent:function(){var self=this;
jindo.$A(jindo.$$("a[id^="+this._element.elementId+"]")).forEach(function(obj){jindo.$Fn(function(){var bid=this.attr("id").split(self._element.elementId)[1];
var isLikeOn=(this.hasClass("on")==true)?false:true;
self.registerLikeLog(bid,self._element.platform,self._element.pageUrl,isLikeOn)
},jindo.$Element(obj)).attach(jindo.$Element(obj),"click")
})
},registerLikeLog:function(bid,platform,pageUrl,isLikeOn){var url="/likeIt/likeItLog.naver";
$Ajax(url+"?contentsBid="+bid+"&platform="+platform+"&pageUrl="+pageUrl+"&isLikeOn="+isLikeOn,{onload:function(res){}}).request()
},run:function(){if(this._element.isListType=="N"){this.bindEvent()
}else{this.bindElementListEvent()
}}});
(function(exportTarget){var lcs_options={nnb:true};
var lcs_version="v0.6.0";
var lcs_add={};
var lcs_bc={};
var lcs_perf={};
var lcs_do_count=0;
function lcs_do(etc){if(!window.lcs_SerName){window.lcs_SerName="lcs.naver.com"
}var rs="";
var index;
var itarVal;
var doc=document;
var wlt=window.location;
var lcsServerAddr;
try{lcsServerAddr=(wlt.protocol?wlt.protocol:"http:")+"//"+window.lcs_SerName+"/m?"
}catch(e){return
}try{rs=lcsServerAddr+"u="+encodeURIComponent(wlt.href)+"&e="+(doc.referrer?encodeURIComponent(doc.referrer):"")
}catch(e){}try{if(typeof lcs_add.i=="undefined"){lcs_add.i=""
}if(lcs_do_count<1){lcs_setBrowserCapa();
if(lcs_options.nnb){lcs_setNNB()
}lcs_add.ct=lcs_getConnectType();
lcs_setNavigationTiming();
lcs_setPaintTiming();
lcs_setNavigationType()
}for(index in lcs_bc){if(typeof lcs_bc[index]!=="function"){rs+="&"+index+"="+encodeURIComponent(lcs_bc[index])
}}for(index in lcs_add){itarVal=lcs_add[index];
if(itarVal!==undefined&&typeof itarVal!=="function"){rs+="&"+index+"="+encodeURIComponent(itarVal)
}}if(lcs_do_count<1){for(index in lcs_perf){itarVal=lcs_perf[index];
if(itarVal){rs+="&"+index+"="+encodeURIComponent(itarVal)
}}}for(index in etc){if((index.length>=3&&typeof etc[index]!=="function")||index==="qy"){rs+="&"+index+"="+encodeURIComponent(etc[index])
}}if(!!etc===false||!!etc.pid===false){var pidFallback;
if(window.g_pid){pidFallback=g_pid
}else{pidFallback=lcs_get_lpid()
}rs+="&pid="+encodeURIComponent(pidFallback)
}var timeStr=new Date().getTime();
rs+="&ts="+timeStr;
rs+="&EOU";
var obj=document.createElement("img");
obj.src=rs;
obj.onload=function(){obj.onload=null;
return
};
lcs_do_count++
}catch(e){return
}}function lcs_do_gdid(gdid,etc){try{if(gdid){lcs_add.i=gdid;
if(etc){lcs_do(etc)
}else{lcs_do()
}}}catch(e){}}function lcs_setNNB(){try{var lsg=localStorage;
if(lsg){if(lsg.ls){var lc=lsg.ls;
if(lc.length==13){lcs_add.ls=lc;
return
}}var nnb=lcs_getNNBfromCookie();
if(nnb!=null&&nnb!=""){lsg.ls=nnb;
lcs_add.ls=nnb
}}}catch(e){}}function lcs_setBrowserCapa(){lcs_bc.os=lcs_getOS();
lcs_bc.ln=lcs_getlanguage();
lcs_bc.sr=lcs_getScreen();
lcs_bc.pr=window.devicePixelRatio||1;
var windowSize=lcs_getWindowSize();
lcs_bc.bw=windowSize.bw;
lcs_bc.bh=windowSize.bh;
lcs_bc.c=lcs_getColorDepth();
lcs_bc.j=lcs_getJavaEnabled();
lcs_bc.k=lcs_getCookieEnabled()
}function lcs_getOS(){var lcs_os="";
try{navigator.platform?(lcs_os=navigator.platform):""
}catch(e){}return lcs_os
}function lcs_getlanguage(){var lcs_ln="";
try{navigator.userLanguage?(lcs_ln=navigator.userLanguage):navigator.language?(lcs_ln=navigator.language):""
}catch(e){}return lcs_ln
}function lcs_getScreen(){var lcs_sr="";
try{if(window.screen&&screen.width&&screen.height){lcs_sr=screen.width+"x"+screen.height
}else{if(window.java||self.java){var sr=java.awt.Toolkit.getDefaultToolkit().getScreenSize();
lcs_sr=sr.width+"x"+sr.height
}}}catch(e){lcs_sr=""
}return lcs_sr
}function lcs_getWindowSize(){var doc=document;
var size={bw:"",bh:""};
try{size.bw=doc.documentElement.clientWidth?doc.documentElement.clientWidth:doc.body.clientWidth;
size.bh=doc.documentElement.clientHeight?doc.documentElement.clientHeight:doc.body.clientHeight
}catch(e){}return size
}function lcs_getColorDepth(){var colorDepth="";
try{if(window.screen){colorDepth=screen.colorDepth?screen.colorDepth:screen.pixelDepth
}else{if(window.java||self.java){var c=java.awt.Toolkit.getDefaultToolkit().getColorModel().getPixelSize();
colorDepth=c
}}}catch(e){colorDepth=""
}return colorDepth
}function lcs_getJavaEnabled(){var jsEnable="";
try{jsEnable=navigator.javaEnabled()?"Y":"N"
}catch(e){}return jsEnable
}function lcs_getCookieEnabled(){var cookieEnable="";
try{cookieEnable=navigator.cookieEnabled?"Y":"N"
}catch(e){}return cookieEnable
}function lcs_getNNBfromCookie(){try{var ck=document.cookie;
var k,v,i,ArrCookies=ck.split(";");
for(i=0;
i<ArrCookies.length;
i++){k=ArrCookies[i].substr(0,ArrCookies[i].indexOf("="));
v=ArrCookies[i].substr(ArrCookies[i].indexOf("=")+1);
k=k.replace(/^\s+|\s+$/g,"");
if(k=="NNB"){return unescape(v)
}}}catch(e){}}function lcs_getConnectType(){var ct="";
try{var conn=navigator.connection||navigator.mozConnection||navigator.webkitConnection;
if(conn&&typeof conn.type!="undefined"){switch(conn.type){case conn.CELL_2G:ct="2g";
break;
case conn.CELL_3G:ct="3g";
break;
case conn.CELL_4G:ct="4g";
break;
case conn.WIFI:ct="wifi";
break;
case conn.ETHERNET:ct="eth";
break;
case conn.UNKNOWN:ct="unknown";
break;
case conn.NONE:ct="none";
break;
default:ct=""
}}else{if(typeof blackberry!="undefined"&&typeof blackberry.network!="undefined"){var bnet=blackberry.network;
if(bnet=="Wi-Fi"){ct="wifi"
}else{if(bnet=="3G"){ct="3g"
}else{ct=bnet
}}}else{var lcs_isie=navigator.appName=="Microsoft Internet Explorer";
var lcs_ismac=navigator.userAgent.indexOf("MAC")>=0;
if(lcs_isie&&!lcs_ismac&&bd&&bd.addBehavior){var bd=document.body;
var lcs_ct="";
var obj=bd.addBehavior("#default#clientCaps");
ct=bd.connectionType;
bd.removeBehavior(obj)
}}}}catch(e){console.warn(e)
}return ct
}function lcs_setNavigationTiming(){var performance=window.performance||{};
if(performance.timing){var pt=performance.timing;
for(var key in pt){var value=pt[key];
if(typeof value==="number"){lcs_perf[key]=value
}}}}function lcs_setPaintTiming(){var performance=window.performance||{};
try{if(performance.getEntriesByType){var performanceEntries=performance.getEntriesByType("paint");
performanceEntries.forEach(function(performanceEntry,i,entries){var name=performanceEntry.name;
switch(name){case"first-paint":case"first-contentful-paint":lcs_perf[name]=performanceEntry.startTime;
break;
default:break
}})
}else{}}catch(e){console.warn(e)
}}function lcs_setNavigationType(){var ngt=getNavigationType();
if(ngt!==undefined){lcs_perf.ngt=ngt
}}function getNavigationType(){var performance=window.performance||{};
if(performance.navigation){return performance.navigation.type
}return
}var lpid=null;
function lcs_create_lpid(){var uaID;
var nnb=localStorage.ls;
if(nnb){uaID=nnb
}else{var nnbFallback;
nnbFallback=navigator.userAgent+Math.random();
uaID=nnbFallback
}var performance=window.performance||{};
var pageURL=location.href;
var currentTime;
if(performance.now){currentTime=performance.now()
}else{currentTime=new Date().getTime()
}lpid=hashFunction.md5(uaID+pageURL+currentTime);
return lpid
}function lcs_get_lpid(){if(lpid===null){lpid=lcs_create_lpid()
}return lpid
}function lcs_update_lpid(){lpid=lcs_create_lpid();
return lpid
}var hashFunction={};
(function(exportTarget){function safeAdd(x,y){var lsw=(x&65535)+(y&65535);
var msw=(x>>16)+(y>>16)+(lsw>>16);
return(msw<<16)|(lsw&65535)
}function bitRotateLeft(num,cnt){return(num<<cnt)|(num>>>(32-cnt))
}function md5cmn(q,a,b,x,s,t){return safeAdd(bitRotateLeft(safeAdd(safeAdd(a,q),safeAdd(x,t)),s),b)
}function md5ff(a,b,c,d,x,s,t){return md5cmn((b&c)|(~b&d),a,b,x,s,t)
}function md5gg(a,b,c,d,x,s,t){return md5cmn((b&d)|(c&~d),a,b,x,s,t)
}function md5hh(a,b,c,d,x,s,t){return md5cmn(b^c^d,a,b,x,s,t)
}function md5ii(a,b,c,d,x,s,t){return md5cmn(c^(b|~d),a,b,x,s,t)
}function binlMD5(x,len){x[len>>5]|=128<<len%32;
x[(((len+64)>>>9)<<4)+14]=len;
var i;
var olda;
var oldb;
var oldc;
var oldd;
var a=1732584193;
var b=-271733879;
var c=-1732584194;
var d=271733878;
for(i=0;
i<x.length;
i+=16){olda=a;
oldb=b;
oldc=c;
oldd=d;
a=md5ff(a,b,c,d,x[i],7,-680876936);
d=md5ff(d,a,b,c,x[i+1],12,-389564586);
c=md5ff(c,d,a,b,x[i+2],17,606105819);
b=md5ff(b,c,d,a,x[i+3],22,-1044525330);
a=md5ff(a,b,c,d,x[i+4],7,-176418897);
d=md5ff(d,a,b,c,x[i+5],12,1200080426);
c=md5ff(c,d,a,b,x[i+6],17,-1473231341);
b=md5ff(b,c,d,a,x[i+7],22,-45705983);
a=md5ff(a,b,c,d,x[i+8],7,1770035416);
d=md5ff(d,a,b,c,x[i+9],12,-1958414417);
c=md5ff(c,d,a,b,x[i+10],17,-42063);
b=md5ff(b,c,d,a,x[i+11],22,-1990404162);
a=md5ff(a,b,c,d,x[i+12],7,1804603682);
d=md5ff(d,a,b,c,x[i+13],12,-40341101);
c=md5ff(c,d,a,b,x[i+14],17,-1502002290);
b=md5ff(b,c,d,a,x[i+15],22,1236535329);
a=md5gg(a,b,c,d,x[i+1],5,-165796510);
d=md5gg(d,a,b,c,x[i+6],9,-1069501632);
c=md5gg(c,d,a,b,x[i+11],14,643717713);
b=md5gg(b,c,d,a,x[i],20,-373897302);
a=md5gg(a,b,c,d,x[i+5],5,-701558691);
d=md5gg(d,a,b,c,x[i+10],9,38016083);
c=md5gg(c,d,a,b,x[i+15],14,-660478335);
b=md5gg(b,c,d,a,x[i+4],20,-405537848);
a=md5gg(a,b,c,d,x[i+9],5,568446438);
d=md5gg(d,a,b,c,x[i+14],9,-1019803690);
c=md5gg(c,d,a,b,x[i+3],14,-187363961);
b=md5gg(b,c,d,a,x[i+8],20,1163531501);
a=md5gg(a,b,c,d,x[i+13],5,-1444681467);
d=md5gg(d,a,b,c,x[i+2],9,-51403784);
c=md5gg(c,d,a,b,x[i+7],14,1735328473);
b=md5gg(b,c,d,a,x[i+12],20,-1926607734);
a=md5hh(a,b,c,d,x[i+5],4,-378558);
d=md5hh(d,a,b,c,x[i+8],11,-2022574463);
c=md5hh(c,d,a,b,x[i+11],16,1839030562);
b=md5hh(b,c,d,a,x[i+14],23,-35309556);
a=md5hh(a,b,c,d,x[i+1],4,-1530992060);
d=md5hh(d,a,b,c,x[i+4],11,1272893353);
c=md5hh(c,d,a,b,x[i+7],16,-155497632);
b=md5hh(b,c,d,a,x[i+10],23,-1094730640);
a=md5hh(a,b,c,d,x[i+13],4,681279174);
d=md5hh(d,a,b,c,x[i],11,-358537222);
c=md5hh(c,d,a,b,x[i+3],16,-722521979);
b=md5hh(b,c,d,a,x[i+6],23,76029189);
a=md5hh(a,b,c,d,x[i+9],4,-640364487);
d=md5hh(d,a,b,c,x[i+12],11,-421815835);
c=md5hh(c,d,a,b,x[i+15],16,530742520);
b=md5hh(b,c,d,a,x[i+2],23,-995338651);
a=md5ii(a,b,c,d,x[i],6,-198630844);
d=md5ii(d,a,b,c,x[i+7],10,1126891415);
c=md5ii(c,d,a,b,x[i+14],15,-1416354905);
b=md5ii(b,c,d,a,x[i+5],21,-57434055);
a=md5ii(a,b,c,d,x[i+12],6,1700485571);
d=md5ii(d,a,b,c,x[i+3],10,-1894986606);
c=md5ii(c,d,a,b,x[i+10],15,-1051523);
b=md5ii(b,c,d,a,x[i+1],21,-2054922799);
a=md5ii(a,b,c,d,x[i+8],6,1873313359);
d=md5ii(d,a,b,c,x[i+15],10,-30611744);
c=md5ii(c,d,a,b,x[i+6],15,-1560198380);
b=md5ii(b,c,d,a,x[i+13],21,1309151649);
a=md5ii(a,b,c,d,x[i+4],6,-145523070);
d=md5ii(d,a,b,c,x[i+11],10,-1120210379);
c=md5ii(c,d,a,b,x[i+2],15,718787259);
b=md5ii(b,c,d,a,x[i+9],21,-343485551);
a=safeAdd(a,olda);
b=safeAdd(b,oldb);
c=safeAdd(c,oldc);
d=safeAdd(d,oldd)
}return[a,b,c,d]
}function binl2rstr(input){var i;
var output="";
var length32=input.length*32;
for(i=0;
i<length32;
i+=8){output+=String.fromCharCode((input[i>>5]>>>i%32)&255)
}return output
}function rstr2binl(input){var i;
var output=[];
output[(input.length>>2)-1]=undefined;
for(i=0;
i<output.length;
i+=1){output[i]=0
}var length8=input.length*8;
for(i=0;
i<length8;
i+=8){output[i>>5]|=(input.charCodeAt(i/8)&255)<<i%32
}return output
}function rstrMD5(s){return binl2rstr(binlMD5(rstr2binl(s),s.length*8))
}function rstrHMACMD5(key,data){var i;
var bkey=rstr2binl(key);
var ipad=[];
var opad=[];
var hash;
ipad[15]=opad[15]=undefined;
if(bkey.length>16){bkey=binlMD5(bkey,key.length*8)
}for(i=0;
i<16;
i+=1){ipad[i]=bkey[i]^909522486;
opad[i]=bkey[i]^1549556828
}hash=binlMD5(ipad.concat(rstr2binl(data)),512+data.length*8);
return binl2rstr(binlMD5(opad.concat(hash),512+128))
}function rstr2hex(input){var hexTab="0123456789abcdef";
var output="";
var x;
var i;
for(i=0;
i<input.length;
i+=1){x=input.charCodeAt(i);
output+=hexTab.charAt((x>>>4)&15)+hexTab.charAt(x&15)
}return output
}function str2rstrUTF8(input){return unescape(encodeURIComponent(input))
}function rawMD5(s){return rstrMD5(str2rstrUTF8(s))
}function hexMD5(s){return rstr2hex(rawMD5(s))
}function rawHMACMD5(k,d){return rstrHMACMD5(str2rstrUTF8(k),str2rstrUTF8(d))
}function hexHMACMD5(k,d){return rstr2hex(rawHMACMD5(k,d))
}function md5(string,key,raw){if(!key){if(!raw){return hexMD5(string)
}return rawMD5(string)
}if(!raw){return hexHMACMD5(key,string)
}return rawHMACMD5(key,string)
}exportTarget.md5=md5
})(hashFunction);
exportTarget.lcs_do=lcs_do;
exportTarget.lcs_do_gdid=lcs_do_gdid;
exportTarget.lcs_get_lpid=lcs_get_lpid;
exportTarget.lcs_update_lpid=lcs_update_lpid;
exportTarget.lcs_version=lcs_version
})(window);
if(typeof nclk=="undefined"){nclk={}
}if(typeof nclkMaxDepth=="undefined"){var nclkMaxDepth=8
}if(typeof ccsrv=="undefined"){var ccsrv="cc.naver.com"
}if(typeof nclkModule=="undefined"){var nclkModule="cc"
}if(typeof nsc=="undefined"){var nsc="decide.me"
}if(typeof g_pid=="undefined"){var g_pid=""
}if(typeof g_sid=="undefined"){var g_sid=""
}var nclkImg=[];
if(typeof nclkMaxEvtTarget=="undefined"){var nclkMaxEvtTarget=4
}if(typeof nclk_evt=="undefined"){var nclk_evt=0
}nclk.nclktagVersion="1.0.4";
nclk.addEvent=function(e,b,a){if(e.addEventListener){e.addEventListener(b,a,false)
}else{if(e.attachEvent){e["e"+b+a]=a;
e[b+a]=function(){e["e"+b+a](window.event)
};
e.attachEvent("on"+b,e[b+a])
}}};
nclk.generateCC=function(l){var r=l||window.event;
var f=r.target||r.srcElement;
var o=f.nodeName;
var m,p;
var q;
var b="",t="",k="",g="";
var a=0,n=0;
var h,s;
var i;
var j=-1;
if(r.button==2){return
}if(f.nodeType==3){f=f.parentNode
}if(f.parentNode&&f.parentNode.nodeName=="A"){f=f.parentNode
}p=f;
while(j<=nclkMaxEvtTarget){if(j>=nclkMaxEvtTarget){if(nclk_evt==2||nclk_evt==4){h=0;
m=p;
break
}else{return
}}else{i=nclk.getTag(f);
h=i[0];
s=i[1];
if(h==0){if(f.parentNode){f=f.parentNode;
j++
}else{h=0;
m=p;
break
}}else{m=f;
break
}}}switch(h){case 0:case 1:case 2:case 3:if(nclk_evt==2||nclk_evt==4){b="ncs.blank"
}else{return
}break;
case 4:b=nclk.findArea(m,1);
if(b==undefined){b=""
}q=nclk.parseNCStr(h,s);
b=b+"."+q[0];
break;
case 5:b=nclk.findArea(m,2);
if(b==undefined){b=""
}q=nclk.parseNCStr(h,s);
break;
case 6:q=nclk.parseNCStr(h,s);
b=q[0];
break;
default:return
}if(h==4||h==5||h==6){k=q[1];
t=q[2];
g=q[3];
n=parseInt(q[4],10)
}if(n==2){return
}else{a=n
}if(g){clickcr(m,b,t,k,r,a,g)
}else{clickcr(m,b,t,k,r,a)
}};
nclk.searchNextObj=function(a){var b=a.nextSibling;
if(b&&b.nodeType==3){b=b.nextSibling
}return b
};
nclk.getTag=function(g){var b=0;
if(!g){return 0
}var i;
var f;
var h;
var a="";
if(nclk_evt==1||nclk_evt==2){var e=nclk.searchNextObj(g);
if(e){if(e!=null&&e.nodeType==8&&e.data.indexOf("=")>0){a=nclk.trim(e.data)
}else{return[0,""]
}}else{return[0,""]
}}else{if(nclk_evt==3||nclk_evt==4){if(g.className){a=nclk.getClassTag(g.className);
if(!a){return[0,""]
}}else{return[0,""]
}}}a=nclk.trim(a);
i=a.split("=");
f=i[0].charAt(0);
h=i[0].substring(1);
if(f!="N"){return[0,""]
}if(h=="E"){b=1
}else{if(h=="I"){b=2
}else{if(h=="EI"||h=="IE"){b=3
}else{if(h=="IP"||h=="PI"){b=4
}else{if(h=="P"){b=5
}else{if(i[0].length==1){b=6
}else{b=0
}}}}}}return[b,a]
};
nclk.findArea=function(b,h){var j=0;
var g;
var k;
var m,f;
var e="";
var a=0;
var l;
var i;
if(!b){return
}if(h==1){a=1
}else{if(h==2){a=0
}}while(b=b.parentNode){g=b;
while(1){if(nclk_evt==1||nclk_evt==2){g=g.previousSibling;
if(g){if(g.nodeType==8){k=nclk.trim(g.data)
}else{continue
}}else{break
}}else{if(nclk_evt==3||nclk_evt==4){k=b.className;
if(!k){break
}}}if(k.indexOf("=")>0){m=k.split("=");
if(m[0].charAt(0)!="N"){continue
}i=m[0].substring(1);
if(i=="I"&&a==0){f=m[1].split(":");
if(f[0]=="a"){if(f[1]!=""&&f[1]!=undefined){e=f[1]
}}a++;
break
}else{if(i=="E"&&a==1){if(a==1){f=m[1].split(":");
if(f[0]=="a"){if(e==""){e=f[1]
}else{e=((f[1]==undefined)?"":f[1])+"."+e
}}}a++;
break
}else{if((i=="EI"||i=="IE")&&a==0){f=m[1].split(":");
if(f[0]=="a"){e=f[1]
}a+=2;
break
}}}}if(nclk_evt==3||nclk_evt==4){break
}}j++;
if(a>=2){l=e;
break
}if(j>=nclkMaxDepth){l=false;
break
}}return l
};
nclk.getServiceType=function(){var a;
if(typeof g_ssc!="undefined"&&typeof g_query!="undefined"){a=1
}else{a=0
}return a
};
nclk.parseNCStr=function(h,o){var a;
var m;
var l;
var e;
var b="",k="",p="",f="",n=0;
var g=2;
o=nclk.trim(o);
switch(h){case 4:g=4;
break;
case 5:g=3;
break;
case 6:g=2;
break;
case 1:case 2:case 3:default:return
}m=o.substring(g);
l=m.split(",");
for(var j=0;
j<l.length;
j++){e=l[j].split(":");
if(e[0]=="a"){b=e[1]
}else{if(e[0]=="r"){k=e[1]
}else{if(e[0]=="i"){p=e[1]
}else{if(e[0]=="g"){f=e[1]
}else{if(e[0]=="t"){n=e[1]
}}}}}}return[b,k,p,f,n]
};
nclk.trim=function(a){return a.replace(/^\s\s*/,"").replace(/\s\s*$/,"")
};
nclk.getClassTag=function(f){var b=new RegExp("N[^=]*=([^ $]*)");
var e=f.match(b);
var a=false;
if(e){a=e[0]
}return a
};
function nclk_do(){if(nclk_evt==1||nclk_evt==2||nclk_evt==3||nclk_evt==4){nclk.addEvent(document,"click",nclk.generateCC)
}}nclk.getScrollBarWidth=function(){var e=document.createElement("p");
e.style.width="200px";
e.style.height="200px";
var f=document.createElement("div");
f.style.position="absolute";
f.style.top="0px";
f.style.left="0px";
f.style.visibility="hidden";
f.style.width="200px";
f.style.height="150px";
f.style.overflow="hidden";
f.appendChild(e);
document.body.appendChild(f);
var b=e.offsetWidth;
f.style.overflow="scroll";
var a=e.offsetWidth;
if(b==a){a=f.clientWidth
}document.body.removeChild(f);
return(b-a)
};
nclk.findPos=function(b){var f=curtop=0;
try{if(b.offsetParent){do{f+=b.offsetLeft;
curtop+=b.offsetTop
}while(b=b.offsetParent)
}else{if(b.x||b.y){if(b.x){f+=b.x
}if(b.y){curtop+=b.y
}}}}catch(a){}return[f,curtop]
};
nclk.windowSize=function(e){if(!e){e=window
}var a=0;
if(e.innerWidth){a=e.innerWidth;
if(typeof(e.innerWidth)=="number"){var b=nclk.getScrollBarWidth();
a=e.innerWidth-b
}}else{if(document.documentElement&&document.documentElement.clientWidth){a=document.documentElement.clientWidth
}else{if(document.body&&(document.body.clientWidth||document.body.clientHeight)){a=document.body.clientWidth
}}}return a
};
nclk.checkIframe=function(i){var f=document.URL;
var h=i.parentNode;
var a;
var b;
if(h==null||h==undefined){return false
}while(1){if(h.nodeName.toLowerCase()=="#document"){if(h.parentWindow){a=h.parentWindow
}else{a=h.defaultView
}try{if(a.frameElement!=null&&a.frameElement!=undefined){if(a.frameElement.nodeName.toLowerCase()=="iframe"){b=a.frameElement.id;
if(!b){return false
}return b
}else{return false
}}else{return false
}}catch(g){return false
}}else{h=h.parentNode;
if(h==null||h==undefined){return false
}}}};
nclk.absPath=function(a){var e=window.location;
var f=e.href;
var b=e.protocol+"//"+e.host;
if(a.charAt(0)=="/"){if(a.charAt(1)=="/"){return e.protocol+a
}else{return b+a
}}if(/^\.\//.test(a)){a=a.substring(2)
}while(/^\.\./.test(a)){if(b!=f){f=f.substring(0,f.lastIndexOf("/"))
}a=a.substring(3)
}if(b!=f){if(a.charAt(0)!="?"&&a.charAt(0)!="#"){f=f.substring(0,f.lastIndexOf("/"))
}}if(a.charAt(0)=="/"){return f+a
}else{if(a.charAt(0)=="?"){f=f.split("?")[0];
return f+a
}else{if(a.charAt(0)=="#"){f=f.split("#")[0];
return f+a
}else{return f+"/"+a
}}}};
function clickcr(g,I,u,E,F,B,z){var G=navigator.userAgent.toLowerCase();
var k=(G.indexOf("safari")!=-1?true:false);
var D=/msie/.test(G)&&!/opera/.test(G);
var l=(window.location.protocol=="https:")?"https:":"http:";
var a=ccsrv.substring(ccsrv.indexOf(".")+1);
var t=window.event?window.event:F;
var s=-1;
var q=-1;
var p=-1;
var n=-1;
var S,f,i;
var r,j,m;
var N,K,J,M,A,C,w;
var P;
var H=0;
if(!B){B=0
}if(!z){z=""
}if(window.g_ssc!=undefined&&window.g_query!=undefined){H=1
}else{H=0
}try{M=nclk.windowSize(window);
i=nclk.checkIframe(g);
if(i){var v=nclk.findPos(document.getElementById(i));
if(t.clientX&&t.clientX!=undefined){S=document.body;
if(S.clientLeft&&S.clientTop){ifrSx=t.clientX-S.clientLeft;
ifrSy=t.clientY-S.clientTop
}else{ifrSx=t.clientX;
ifrSy=t.clientY
}}p=v[0]+ifrSx;
n=v[1]+ifrSy;
if(document.body&&(document.body.scrollTop||document.body.scrollLeft)){S=document.body;
s=p-S.scrollLeft;
q=n-S.scrollTop
}else{if(document.documentElement&&(document.documentElement.scrollTop||document.documentElement.scrollLeft)){f=document.documentElement;
s=p-f.scrollLeft;
q=n-f.scrollTop
}else{s=p;
q=n
}}}else{if(t.clientX&&t.clientX!=undefined){S=document.body;
if(S.clientLeft&&S.clientTop){s=t.clientX-S.clientLeft;
q=t.clientY-S.clientTop
}else{s=t.clientX;
q=t.clientY
}}if(document.body&&(document.body.scrollTop||document.body.scrollLeft)){p=document.body.scrollLeft+(s<0?0:s);
n=document.body.scrollTop+(q<0?0:q)
}else{if(document.documentElement&&(document.documentElement.scrollTop||document.documentElement.scrollLeft)){f=document.documentElement;
if(f.scrollLeft!=undefined){p=f.scrollLeft+(s<0?0:s)
}if(f.scrollTop!=undefined){n=f.scrollTop+(q<0?0:q)
}}else{p=(s<0?0:s);
n=(q<0?0:q)
}}if(t.pageX){p=t.pageX
}if(t.pageY){n=t.pageY
}}}catch(Q){}if(I==""||typeof I=="undefined"){return
}if(B==1){r=0
}else{if(g.href){A=g.nodeName.toLowerCase();
C=g.href.toLowerCase();
if((g.target&&g.target!="_self"&&g.target!="_top"&&g.target!="_parent")||(C.indexOf("javascript:")!=-1)||(g.getAttribute("href",2)&&g.getAttribute("href",2).charAt(0)=="#")||(C.indexOf("#")!=-1&&(C.substr(0,C.indexOf("#"))==document.URL))||A.toLowerCase()=="img"||D&&window.location.host.indexOf(a)==-1){r=0
}else{r=1
}}else{r=0
}}if(g.href&&g.href.indexOf(l+"//"+ccsrv)==0){j=g.href
}else{j=l+"//"+ccsrv+"/"+nclkModule+"?a="+I+"&r="+E+"&i="+u;
j+="&bw="+M+"&px="+p+"&py="+n+"&sx="+s+"&sy="+q+"&m="+r;
if(H==0){j+="&nsc="+nsc
}else{if(H==1){j+="&ssc="+g_ssc+"&q="+encodeURIComponent(g_query)+"&s="+g_sid+"&p="+g_pid+"&g="+z
}}if(C&&C.indexOf(l+"//"+ccsrv)!=0&&A.toLowerCase()!="img"){var O=g.href;
if(g.outerHTML&&!window.XMLHttpRequest){O=(/\shref=\"([^\"]+)\"/i.test(g.outerHTML)&&RegExp.$1).replace(/\\/g,"\\\\").replace(/%([A-Z0-9]{2})/ig,"\\$1");
(d=document.createElement("div")).innerHTML=O;
O=d.innerText.replace(/\\([A-Z0-9]{2})/gi,"%$1").replace(/\\\\/g,"\\")
}C=O.toLowerCase();
if(C.indexOf("http:")==0||C.indexOf("https:")==0||C.indexOf("javascript:")==0){j+="&u="+encodeURIComponent(O)
}else{w=nclk.absPath(O);
j+="&u="+encodeURIComponent(w)
}}else{if(g.href){if(g.href.length>0){j+="&u="+encodeURIComponent(g.href)
}else{j+="&u=about%3Ablank"
}}else{j+="&u=about%3Ablank"
}}}if(r==1){P=g.innerHTML;
g.href=j;
if(g.innerHTML!=P){g.innerHTML=P
}}else{if(document.images){var L=new Date().getTime();
j+="&time="+L;
if(k&&!g.href){var R=c=new Date();
while((R.getTime()-c.getTime())<100){R=new Date()
}var N=new Image();
nclkImg.push(N);
N.src=j
}else{var N=new Image();
nclkImg.push(N);
N.src=j
}}}return true
};
