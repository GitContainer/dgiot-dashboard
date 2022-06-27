/*!
 *  build: 杭州数蛙科技有限公司 
 *  copyright: dgiot-dashboard 
 *  author: h7ml(h7ml@qq.com) 
 *  Time: 2022年06月27日16时30分58秒
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app-dgiot-dbc60588"],{"0743":function(e,t,o){},"0f03":function(e,t,o){"use strict";o("5f8e")},1346:function(e,t,o){},"15a4":function(e,t,o){"use strict";o("560c")},1842:function(e,t,o){"use strict";o("0743")},"19af":function(e,t,o){var n={"./FRender.js":"d82d","./amis.js":"5030","./beFull.js":"d463","./dgiot.js":"59ab","./directive.js":"3f21","./drag.js":"7062","./driver.js":"9d39","./element.js":"73b5","./errorLog.js":"f46a","./lajax.js":"635a","./permissions.js":"2576","./support.js":"a7e8","./vue-audio-visual.js":"5b72"};function s(e){var t=r(e);return o(t)}function r(e){if(!o.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=r,e.exports=s,s.id="19af"},"24fb":function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"dgiot-layout-common",class:{fixed:e.fixedHeader,"no-tabs-bar":!e.showTabs}},[o("div",{staticClass:"dgiot-layout-header",class:{"fixed-header":e.fixedHeader}},[o("dgiot-header",{attrs:{layout:"common"}}),o("div",[o("dgiot-side-bar",{attrs:{layout:"common"}}),o("div",{directives:[{name:"show",rawName:"v-show",value:e.showTabs,expression:"showTabs"}],staticClass:"dgiot-main",class:{"is-collapse-main":e.collapse}},[o("dgiot-tabs",{attrs:{layout:"common"}})],1)],1)],1),o("div",{staticClass:"dgiot-main main-padding",class:{"is-collapse-main":e.collapse}},[o("dgiot-app-main")],1)])},s=[],r={name:"DgiotLayoutCommon",props:{collapse:{type:Boolean,default(){return!1}},fixedHeader:{type:Boolean,default(){return!0}},showTabs:{type:Boolean,default(){return!0}},device:{type:String,default(){return"desktop"}}}},i=r,a=(o("0f03"),o("2877")),l=Object(a["a"])(i,n,s,!1,null,"437785f2",null);t["default"]=l.exports},"250f":function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"vue-admin-beautiful-wrapper",class:e.classObj},[o("dgiot-layout-"+e.theme.layout,{tag:"component",attrs:{collapse:e.collapse,device:e.device,"fixed-header":e.theme.fixedHeader,"show-tabs":e.theme.showTabs}}),o("dgiot-theme-drawer"),o("el-backtop",{attrs:{target:"#dgiot"}})],1)},s=[],r=o("5880"),i=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,h=(e,t,o)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,f=(e,t)=>{for(var o in t||(t={}))u.call(t,o)&&h(e,o,t[o]);if(c)for(var o of c(t))d.call(t,o)&&h(e,o,t[o]);return e},p=(e,t)=>a(e,l(t)),g={name:"Layouts",data(){return{isMobile:!1,oldLayout:""}},computed:p(f({},Object(r["mapGetters"])({device:"settings/device",collapse:"settings/collapse",theme:"settings/theme"})),{classObj(){return{mobile:"mobile"===this.device}}}),beforeMount(){this.oldLayout=this.theme.layout,window.addEventListener("resize",this.handleLayouts)},beforeDestroy(){window.removeEventListener("resize",this.handleLayouts),this.theme.layout=this.oldLayout},mounted(){this.handleLayouts()},methods:p(f({},Object(r["mapActions"])({toggleDevice:"settings/toggleDevice",foldSideBar:"settings/foldSideBar",openSideBar:"settings/openSideBar"})),{handleLayouts(){const e=document.body.getBoundingClientRect().width-1<992;this.isMobile!==e&&(e?(this.oldLayout=this.theme.layout,this.foldSideBar()):this.openSideBar(),this.theme.layout=e?"vertical":this.oldLayout,this.toggleDevice(e?"mobile":"desktop"),this.isMobile=e)}})},m=g,b=(o("1842"),o("2877")),y=Object(b["a"])(m,n,s,!1,null,"57b1281f",null);t["default"]=y.exports},2576:function(e,t,o){"use strict";o.r(t);var n=o("a18c"),s=o("4360"),r=o("1af2"),i=o.n(r),a=o("bcc7"),l=o("1e51"),c=o("f121"),u=Object.defineProperty,d=Object.defineProperties,h=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,m=(e,t,o)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,b=(e,t)=>{for(var o in t||(t={}))p.call(t,o)&&m(e,o,t[o]);if(f)for(var o of f(t))g.call(t,o)&&m(e,o,t[o]);return e},y=(e,t)=>d(e,h(t)),x=(e,t,o)=>new Promise((n,s)=>{var r=e=>{try{a(o.next(e))}catch(t){s(t)}},i=e=>{try{a(o.throw(e))}catch(t){s(t)}},a=e=>e.done?n(e.value):Promise.resolve(e.value).then(r,i);a((o=o.apply(e,t)).next())});i.a.configure({easing:"ease",speed:500,trickleSpeed:200,showSpinner:!1}),n["default"].beforeEach((e,t,o)=>x(void 0,null,(function*(){if(window.errRoute=null,s["default"].dispatch("routes/setRoutesOpenTime",{router:e.meta.component,timestamp:moment(new Date).valueOf()}),"404"==e.name)return window.errRoute=e,console.log("dgiot router log---"),console.log(e),!1;const{showProgressBar:t}=s["default"].getters["settings/theme"];t&&i.a.start();let n=s["default"].getters["user/token"];if(c["loginInterception"]||(n=!0),n)if(s["default"].getters["routes/routes"].length)"/login"===e.path?(o({path:"/dashboard"}),t&&i.a.done()):o();else try{c["loginInterception"]||(yield s["default"].dispatch("user/setVirtualRoles")),yield s["default"].dispatch("routes/setRoutes",c["authentication"]),o(y(b({},e),{replace:!0}))}catch(r){dgiotlog.warn("错误拦截:",r),yield s["default"].dispatch("user/resetAll"),o(Object(l["toLoginRoute"])(e))}else c["routesWhiteList"].includes(e.path)?c["supportVisit"]&&!s["default"].getters["routes/routes"].length?(yield s["default"].dispatch("routes/setRoutes","visit"),o(y(b({},e),{replace:!0}))):o():o(Object(l["toLoginRoute"])(e))}))),n["default"].afterEach(e=>{let t;e.meta&&e.meta.title?(t=e.meta.component,document.title=Object(a["default"])(""+e.meta.title)):t=e,_.isPlainObject(t)||dgiotlog.getDgiotlog("src/dgiot/plugins/permissions.js").info("router ->",t),window.router=dgiot.router=t,window.routerConfig=e,i.a.status&&i.a.done()})},"25b8":function(e,t,o){e.exports={"menu-color":"rgba(255,255,255,.95)","menu-color-active":"rgba(255,255,255,.95)","menu-background":"#282c34","column-second-menu-background":"#fff"}},2987:function(e,t,o){},"2b1e":function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"dgiot-layout-horizontal",class:{fixed:e.fixedHeader,"no-tabs-bar":!e.showTabs}},[o("div",{staticClass:"dgiot-layout-header",class:{"fixed-header":e.fixedHeader}},[o("dgiot-header"),o("div",{directives:[{name:"show",rawName:"v-show",value:e.showTabs,expression:"showTabs"}],class:{"dgiot-tabs-horizontal":e.showTabs}},[o("div",{staticClass:"dgiot-main"},[o("dgiot-tabs")],1)])],1),o("div",{staticClass:"dgiot-main main-padding"},[o("dgiot-app-main")],1)])},s=[],r={name:"DgiotLayoutHorizontal",props:{collapse:{type:Boolean,default(){return!1}},fixedHeader:{type:Boolean,default(){return!0}},showTabs:{type:Boolean,default(){return!0}},device:{type:String,default(){return"desktop"}}}},i=r,a=(o("8125"),o("2877")),l=Object(a["a"])(i,n,s,!1,null,"1df1c642",null);t["default"]=l.exports},"33d7":function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"dgiot-layout-vertical",class:{fixed:e.fixedHeader,"no-tabs-bar":!e.showTabs}},[o("dgiot-side-bar"),"mobile"!==e.device||e.collapse?e._e():o("div",{staticClass:"v-modal",on:{click:e.handleFoldSideBar}}),o("div",{staticClass:"dgiot-main",class:{"is-collapse-main":e.collapse}},[o("div",{staticClass:"dgiot-layout-header",class:{"fixed-header":e.fixedHeader}},[o("dgiot-nav"),o("dgiot-tabs",{directives:[{name:"show",rawName:"v-show",value:e.showTabs,expression:"showTabs"}]})],1),o("dgiot-app-main")],1)],1)},s=[],r=o("5880"),i=Object.defineProperty,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,o)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,d=(e,t)=>{for(var o in t||(t={}))l.call(t,o)&&u(e,o,t[o]);if(a)for(var o of a(t))c.call(t,o)&&u(e,o,t[o]);return e},h={name:"DgiotLayoutVertical",props:{collapse:{type:Boolean,default(){return!1}},fixedHeader:{type:Boolean,default(){return!0}},showTabs:{type:Boolean,default(){return!0}},device:{type:String,default(){return"desktop"}}},methods:d({},Object(r["mapActions"])({handleFoldSideBar:"settings/foldSideBar"}))},f=h,p=(o("15a4"),o("2877")),g=Object(p["a"])(f,n,s,!1,null,"6f49194c",null);t["default"]=g.exports},"36b2":function(e,t,o){"use strict";o("2987")},"3f21":function(e,t,o){"use strict";o.r(t);var n=o("b0a0");Vue.directive("permissions",{inserted(e,t){let{value:o}=t;o&&(Object(n["hasAccess"])(o)||e.parentNode&&e.parentNode.removeChild(e))}}),Vue.directive("drag-dialog",{inserted(e,t,o){const n=e.querySelector(".el-dialog__header"),s=e.querySelector(".el-dialog");n.style.cssText+=";cursor:move;",s.style.cssText+=";top:0px;";const r=function(){return window.document.currentStyle?(e,t)=>e.currentStyle[t]:(e,t)=>getComputedStyle(e,!1)[t]}();n.onmousedown=e=>{const t=e.clientX-n.offsetLeft,o=e.clientY-n.offsetTop,i=s.offsetWidth,a=s.offsetHeight,l=document.body.clientWidth,c=document.body.clientHeight,u=s.offsetLeft,d=l-s.offsetLeft-i,h=s.offsetTop,f=c-s.offsetTop-a;let p=r(s,"left"),g=r(s,"top");p.includes("%")?(p=+document.body.clientWidth*(+p.replace(/\%/g,"")/100),g=+document.body.clientHeight*(+g.replace(/\%/g,"")/100)):(p=+p.replace(/\px/g,""),g=+g.replace(/\px/g,"")),document.onmousemove=function(e){let n=e.clientX-t,r=e.clientY-o;-n>u?n=-u:n>d&&(n=d),-r>h?r=-h:r>f&&(r=f),s.style.cssText+=`;left:${n+p}px;top:${r+g}px;`},document.onmouseup=function(e){document.onmousemove=null,document.onmouseup=null}}}}),Vue.directive("drag",{bind(e,t,o){if(e.querySelector(".el-dialog__header")&&e.querySelector(".el-dialog")){const t=e.querySelector(".el-dialog__header"),n=e.querySelector(".el-dialog");t.style.cssText+=";cursor:move;",n.style.cssText+=";top:0;";const s=function(){return window.document.currentStyle?(e,t)=>e.currentStyle[t]:(e,t)=>getComputedStyle(e,null)[t]}();t.onmousedown=e=>{const r=e.clientX-t.offsetLeft,i=e.clientY-t.offsetTop,a=n.offsetWidth,l=n.offsetHeight,c=document.body.clientWidth,u=document.body.clientHeight,d=n.offsetLeft,h=c-n.offsetLeft-a,f=n.offsetTop,p=u-n.offsetTop-l;let g=s(n,"left"),m=s(n,"top");g.includes("%")?(g=+document.body.clientWidth*(+g/100),m=+document.body.clientHeight*(+m/100)):(g=+g.slice(0,-2),m=+m.slice(0,-2)),document.onmousemove=function(e){let t=e.clientX-r,s=e.clientY-i;-t>d?t=-d:t>h&&(t=h),-s>f?s=-f:s>p&&(s=p),n.style.cssText+=`;left:${t+g}px;top:${s+m}px;`,o.child.$emit("drag-dialog")},document.onmouseup=function(){document.onmousemove=null,document.onmouseup=null}}}}})},"40a0":function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("keep-alive")},s=[],r={name:"DgiotEmptyLayout"},i=r,a=o("2877"),l=Object(a["a"])(i,n,s,!1,null,null,null);t["default"]=l.exports},"47d1":function(e,t,o){e.exports={"menu-color":"rgba(255,255,255,.95)","menu-color-active":"rgba(255,255,255,.95)","menu-background":"#282c34","column-second-menu-background":"#fff"}},5030:function(e,t,o){"use strict";o.r(t);o("f129"),o("833b"),o("fc84"),o("a592"),o("1546");var n=o("796d"),s=o("487a"),r=o.n(s);Vue.use(r.a),window.qs=n},"560c":function(e,t,o){},"59ab":function(e,t,o){"use strict";o.r(t);var n=o("f121"),s=o("5c96"),r=o("4360"),i=o("5d7c"),a=o("12cb");const l=r["default"].getters["user/token"],c=(r["default"].getters["settings/language"],a["default"].t("dgiotI18n.developer.Data is loading"));Vue.prototype.$baseToken=()=>l||Object(i["getToken"])(),Vue.prototype.$baseLoading=(e,t)=>{let o;return o=e?s["Loading"].service({lock:!0,text:t||c,spinner:"dgiot-loading-type"+e,background:"hsla(0,0%,100%,0.8)"}):s["Loading"].service({lock:!0,text:t||c,background:"hsla(0,0%,100%,.8)"}),o},Vue.prototype.$baseColorfullLoading=(e,t)=>{let o;if(e){switch(e){case 1:e="dots";break;case 2:e="gauge";break;case 3:e="inner-circles";break;case 4:e="plus";break}o=s["Loading"].service({lock:!0,text:t||c,spinner:e+"-loader",background:"hsla(0,0%,100%,.8)"})}else o=s["Loading"].service({lock:!0,text:t||c,spinner:"dots-loader",background:"hsla(0,0%,100%,.8)"});return o},Vue.prototype.$baseMessage=(e,t,o,r)=>{Object(s["Message"])({showClose:!0,message:e,type:t,dangerouslyUseHTMLString:o,duration:n["messageDuration"],customClass:r})},Vue.prototype.$baseAlert=(e,t,o)=>{s["MessageBox"].alert(e,t||"温馨提示",{confirmButtonText:"确定",dangerouslyUseHTMLString:!0,callback:()=>{o&&o()}}).then(()=>{})},Vue.prototype.$baseConfirm=(e,t,o,n,r,i)=>{s["MessageBox"].confirm(e,t||"温馨提示",{confirmButtonText:r||"确定",cancelButtonText:i||"取消",closeOnClickModal:!1,type:"warning",lockScroll:!1}).then(()=>{o&&o()}).catch(()=>{n&&n()})},Vue.prototype.$baseNotify=(e,t,o,r,i)=>{Object(s["Notification"])({title:t,message:e,position:r||"top-right",type:o||"success",duration:i||n["messageDuration"]})},Vue.prototype.$baseTableHeight=e=>{let t=window.innerHeight,o=291;const n=60;return"number"==typeof e?t=t-o-n*e:t-=o,t};const u=new Vue({methods:{emit(e,...t){this.$emit(e,...t)},on(e,t){this.$on(e,t)},off(e,t){this.$off(e,t)}}});Vue.prototype.$baseEventBus=u},"59e2":function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"dgiot-layout-comprehensive",class:{fixed:e.fixedHeader,"no-tabs-bar":!e.showTabs}},[o("dgiot-side-bar",{attrs:{layout:"comprehensive"}}),o("div",{staticClass:"dgiot-main",class:{"is-collapse-main":e.collapse}},[o("div",{staticClass:"dgiot-layout-header",class:{"fixed-header":e.fixedHeader}},[o("dgiot-nav",{attrs:{layout:"comprehensive"}}),o("dgiot-tabs",{directives:[{name:"show",rawName:"v-show",value:e.showTabs,expression:"showTabs"}]})],1),o("dgiot-app-main")],1)],1)},s=[],r={name:"DgiotLayoutComprehensive",props:{collapse:{type:Boolean,default(){return!1}},fixedHeader:{type:Boolean,default(){return!0}},showTabs:{type:Boolean,default(){return!0}},device:{type:String,default(){return"desktop"}}}},i=r,a=(o("36b2"),o("2877")),l=Object(a["a"])(i,n,s,!1,null,"852cba4e",null);t["default"]=l.exports},"5b72":function(e,t,o){"use strict";o.r(t);var n=o("3304"),s=o("cb88"),r=o.n(s);Vue.use(n["a"]),Vue.use(r.a,{ak:Vue.prototype.$dgiot.secret.baidu.map})},"5f8e":function(e,t,o){},"635a":function(e,t,o){"use strict";function n(e,t){window.addEventListener?window.addEventListener(e,t):window.attachEvent("on"+e,t)}function s(){try{var e=performance.timing,t={},o=(e.loadEventEnd-e.loadEventStart)/1e3;if(o<0)return void setTimeout((function(){s()}),200);for(item in t["重定向时间"]=(e.redirectEnd-e.redirectStart)/1e3,t["DNS解析时间"]=(e.domainLookupEnd-e.domainLookupStart)/1e3,t["TCP完成握手时间"]=(e.connectEnd-e.connectStart)/1e3,t["HTTP请求响应完成时间"]=(e.responseEnd-e.requestStart)/1e3,t["DOM开始加载前所花费时间"]=(e.responseEnd-e.navigationStart)/1e3,t["DOM加载完成时间"]=(e.domComplete-e.domLoading)/1e3,t["DOM结构解析完成时间"]=(e.domInteractive-e.domLoading)/1e3,t["脚本加载时间"]=(e.domContentLoadedEventEnd-e.domContentLoadedEventStart)/1e3,t["onload事件时间"]=(e.loadEventEnd-e.loadEventStart)/1e3,t["页面完全加载时间"]=t["重定向时间"]+t["DNS解析时间"]+t["TCP完成握手时间"]+t["HTTP请求响应完成时间"]+t["DOM结构解析完成时间"]+t["DOM加载完成时间"],t)console.info("timingObj","timingObj",item+":"+t[item]+"毫秒(ms)");console.info("performance",performance),console.info("timing",performance.timing)}catch(n){console.warn("timingObj",t),console.warn("timing",performance.timing),console.warn("performance",performance)}}o.r(t),"toJSON"in Error.prototype||Object.defineProperty(Error.prototype,"toJSON",{value(){const e={};return Object.getOwnPropertyNames(this).forEach((function(t){e[t]=this[t]}),this),e},configurable:!0,writable:!0});class r{constructor(e){let t=e;if("undefined"===typeof t)throw new Error("lajax初始化错误 - 构造函数的参数不能为空！");if("string"===typeof t)t={url:e};else{if("object"!==typeof t)throw new Error("lajax初始化错误 - 构造函数的参数格式不正确！");if("string"!==typeof e.url)throw new Error("lajax初始化错误 - 构造函数的参数 url 必须是一个字符串！");if(null!=e.logAjaxFilter&&"function"!==typeof e.logAjaxFilter)throw new Error("lajax初始化错误 - 构造函数的参数 logAjaxFilter 必须是一个函数！");if(null!=e.customDesc&&"function"!==typeof e.customDesc)throw new Error("lajax初始化错误 - 构造函数的参数 customDesc 必须是一个函数！")}this.url=t.url,this.autoLogError=null==t.autoLogError||t.autoLogError,this.autoLogRejection=null==t.autoLogRejection||t.autoLogRejection,this.autoLogAjax=null==t.autoLogAjax||t.autoLogAjax;const o=(e,t)=>!0;this.logAjaxFilter=null==t.logAjaxFilter?o:t.logAjaxFilter,this.stylize=null==t.stylize||t.stylize,this.stylize=this.stylize&&this._stylizeSupport(),this.showDesc=null==t.showDesc||t.showDesc,this.customDesc=t.customDesc;const n=1e4;this.interval=null==t.interval?n:t.interval;const s=5;this.maxErrorReq=null==t.maxErrorReq?s:t.maxErrorReq,this.errorReq=0,this.queue=[],this.xhr=null,this.xhrOpen=XMLHttpRequest.prototype.open,this.xhrSend=XMLHttpRequest.prototype.send,this._init()}_init(){this._getReqId(),this._loadFromStorage(),this.handleAddListener(),this._printDesc(),this._exceptionHandler(),this._ajaxHandler(),this._storageUnsendData(),this.timer=setInterval(()=>{this._send()},this.interval)}_getReqId(){if(this.reqId=document.querySelector('[name="_reqId"]')?document.querySelector('[name="_reqId"]').content:"",this.reqId||(this.reqId=window._reqId),this.reqId)this.idFromServer=!0;else{let e=Date.now();"undefined"!==typeof performance&&"function"===typeof performance.now&&(e+=performance.now()),this.reqId="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const o=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"===t?o:3&o|8).toString(16)}),this.idFromServer=!1}}_defaultDesc(e,t,o){return`🚀 lajax 前端日志模块加载完成。\n自动记录页面错误：      ${this.autoLogError?"✔":"✘"}\n自动记录Promise异常：   ${this.autoLogRejection?"✔":"✘"}\n自动记录Ajax请求：      ${this.autoLogAjax?"✔":"✘"}\n当前页面请求id：${t}${o?" (来自服务端)":" (自动生成)"}`}_printDesc(){if(console&&this.showDesc){let e;e=this.customDesc?this.customDesc(this.lastUnsend,this.reqId,this.idFromServer):this._defaultDesc(this.lastUnsend,this.reqId,this.idFromServer),this.stylize?console.log("%c"+e,`color: ${r.colorEnum.desc}; font-family: 宋体; line-height: 1.5;`):console.log(e)}}handleAddListener(){n("load",s)}_isSecret(){try{const e="lajax-test";return window.localStorage.setItem(e,"1"),window.localStorage.removeItem(e),!1}catch(e){return!0}}_loadFromStorage(){if(!this._isSecret()){const e=JSON.parse(window.localStorage.getItem("lajax"));Array.isArray(e)&&e.length&&(this.lastUnsend=e.length,this.queue=e,this._send()),window.localStorage.removeItem("lajax")}}_exceptionHandler(){this.autoLogError&&window.addEventListener("error",e=>{this.error("[OnError]",e.message,`(${e.lineno}行${e.colno}列)`)}),this.autoLogRejection&&window.addEventListener("unhandledrejection",e=>{this.error("[OnRejection]",e.reason)})}_stylizeSupport(){const e=!!window.chrome,t=-1!==navigator.userAgent.indexOf("Firefox");return e||t}_resolveUrl(e){const t=document.createElement("a");return t.href=e,`${t.protocol}//${t.host}${t.pathname}${t.search}${t.hash}`}_ajaxHandler(){if(this.autoLogAjax){const e=this;XMLHttpRequest.prototype.open=function(...t){this._lajaxMethod=t[0],this._lajaxUrl=e._resolveUrl(t[1]),e.xhrOpen.apply(this,t)},XMLHttpRequest.prototype.send=function(t){const o=new Date;e.logAjaxFilter(this._lajaxUrl,this._lajaxMethod)&&e._pushToQueue(o,r.levelEnum.info,`[ajax] 发送${this._lajaxMethod.toLowerCase()}请求：${this._lajaxUrl}`),this.addEventListener("readystatechange",(function(){if(e.logAjaxFilter(this._lajaxUrl,this._lajaxMethod))try{if(this.readyState===XMLHttpRequest.DONE){console&&console.group&&e.stylize,e._printConsole(o,r.levelEnum.info,`[ajax] 发送${this._lajaxMethod.toLowerCase()}请求：${this._lajaxUrl}`);const n=new Date,s=(n-o)/1e3,i=[];this.status>=200&&this.status<400?i.push("接口请求成功。"):i.push("接口请求失败！"),i.push(`请求耗时：${s}s URL：${this._lajaxUrl} 请求方式：${this._lajaxMethod}`),"post"===this._lajaxMethod.toLowerCase()&&i.push("表单数据：",t),i.push("状态码："+this.status),this.status>=200&&this.status<400?e.info("[ajax]",...i):e.error("[ajax]",...i),console&&console.group&&console.groupEnd()}}catch(n){const o=[];o.push("接口请求出错！"),o.push(`URL：${this._lajaxUrl} 请求方式：${this._lajaxMethod}`),"post"===this._lajaxMethod.toLowerCase()&&o.push("表单数据：",t),o.push("状态码："+this.status),o.push("ERROR："+n),e.error("[ajax]",...o)}})),e.xhrSend.call(this,t)}}}_storageUnsendData(){window.onunload=()=>{this.queue.length&&(navigator.sendBeacon&&navigator.sendBeacon(this.url,JSON.stringify(this.queue))?this.queue=[]:this._isSecret()?this._send():window.localStorage.setItem("lajax",JSON.stringify(this.queue)))}}_send(){const e=this.queue.length;if(e){this.xhr&&(this.xhr.onreadystatechange=null,this.xhr.abort());try{this.xhr=new XMLHttpRequest,this.xhrOpen.call(this.xhr,"POST",this.url,!0),this.xhr.setRequestHeader("Content-Type","application/json; charset=utf-8"),this.xhrSend.call(this.xhr,JSON.stringify(this.queue)),this.xhr.onreadystatechange=()=>{this.xhr.readyState===XMLHttpRequest.DONE&&(this.xhr.status>=200&&this.xhr.status<400?(this.queue.splice(0,e),this.errorReq=0,console&&(this.stylize?console.log(`%c[${this._getTimeString(null)}] - ${e}条日志发送成功！`,"color: "+r.colorEnum.sendSuccess):console.log(e+"条日志发送成功！"))):(this._printConsole(null,r.levelEnum.error,`发送日志请求失败！配置的接口地址：${this.url} 状态码：${this.xhr.status}`),this._checkErrorReq()),this.xhr=null)}}catch(t){this._printConsole(null,r.levelEnum.error,"发送日志请求失败！配置的接口地址："+this.url),this._checkErrorReq(),this.xhr=null}}}_checkErrorReq(){this.errorReq++,this.errorReq>=this.maxErrorReq&&(clearInterval(this.timer),this._printConsole(null,r.levelEnum.warn,`发送日志请求的连续失败次数过多，已停止发送日志。请检查日志接口 ${this.url} 是否正常！`))}_getTimeString(e){const t=null===e?new Date:e;let o=String(t.getHours());1===o.length&&(o="0"+o);let n=String(t.getMinutes());1===n.length&&(n="0"+n);let s=String(t.getSeconds());1===s.length&&(s="0"+s);let r=String(t.getMilliseconds());return 1===r.length?r="00"+r:2===r.length&&(r="0"+r),`${o}:${n}:${s}.${r}`}_getDateTimeString(e){const t=null===e?new Date:e,o=String(t.getFullYear());let n=String(t.getMonth()+1);1===n.length&&(n="0"+n);let s=String(t.getDate());return 1===s.length&&(s="0"+s),`${o}-${n}-${s} ${this._getTimeString(t)}`}_printConsole(e,t,...o){return""}_pushToQueue(e,t,...o){o.unshift(`{${this.reqId}}`),this.queue.push({time:this._getDateTimeString(e),level:t,messages:o,url:window.location.href,agent:navigator.userAgent})}_log(e,t,...o){this._printConsole(e,t,...o),this._pushToQueue(e,t,...o)}info(...e){this._log(null,r.levelEnum.info,...e)}log(...e){this.info(...e)}warn(...e){this._log(null,r.levelEnum.warn,...e)}error(...e){this._log(null,r.levelEnum.error,...e)}}r.levelEnum={info:"info",warn:"warn",error:"error"},r.colorEnum={info:"DodgerBlue",warn:"orange",error:"red",ajaxGroup:"#800080",sendSuccess:"green",desc:"#d30775"},t["default"]=r,window.Lajax=r},7062:function(e,t,o){"use strict";o.r(t),t["default"]={bind(e,t,o){const n=e.querySelector(".el-dialog__header"),s=e.querySelector(".el-dialog");n.style.cssText+=";cursor:move;",s.style.cssText+=";top:0px;";const r=function(){return window.document.currentStyle?(e,t)=>e.currentStyle[t]:(e,t)=>getComputedStyle(e,!1)[t]}();n.onmousedown=e=>{const t=e.clientX-n.offsetLeft,i=e.clientY-n.offsetTop,a=s.offsetWidth,l=s.offsetHeight,c=document.body.clientWidth,u=document.body.clientHeight,d=s.offsetLeft,h=c-s.offsetLeft-a,f=s.offsetTop,p=u-s.offsetTop-l;let g=r(s,"left"),m=r(s,"top");g.includes("%")?(g=+document.body.clientWidth*(+g.replace(/\%/g,"")/100),m=+document.body.clientHeight*(+m.replace(/\%/g,"")/100)):(g=+g.replace(/\px/g,""),m=+m.replace(/\px/g,"")),document.onmousemove=function(e){let n=e.clientX-t,r=e.clientY-i;-n>d?n=-d:n>h&&(n=h),-r>f?r=-f:r>p&&(r=p),s.style.cssText+=`;left:${n+g}px;top:${r+m}px;`,o.child.$emit("dragDialog")},document.onmouseup=function(e){document.onmousemove=null,document.onmouseup=null}}}}},"73b5":function(e,t,o){"use strict";o.r(t);var n=o("5c96"),s=o.n(n),r=(o("6693"),o("e05f"),o("12cb")),i=(o("450d"),o("5488")),a=o.n(i);Vue.component(a.a.name,a.a),Vue.use(s.a,{size:"small",i18n:(e,t)=>r["default"].t(e,t)})},8125:function(e,t,o){"use strict";o("1346")},"9d39":function(e,t,o){"use strict";o.r(t);var n=o("c24c"),s=o.n(n);o("01d7");Vue.prototype.$Driver=s.a},a55b:function(e,t,o){e.exports={"menu-color":"rgba(255,255,255,.95)","menu-color-active":"rgba(255,255,255,.95)","menu-background":"#282c34","column-second-menu-background":"#fff"}},a7e8:function(e,t,o){"use strict";o.r(t);var n=o("5c96"),s=o("f121");(window.ActiveXObject||"ActiveXObject"in window)&&Object(n["MessageBox"])({title:"温馨提示",message:'检测到您当前浏览器使用的是IE内核，自2015年3月起，微软已宣布弃用IE，且不再对IE提供任何更新维护，请<a target="_blank" style="color:blue" href="https://www.microsoft.com/zh-cn/edge/">点击此处</a>访问微软官网更新浏览器，如果您使用的是双核浏览器,请您切换浏览器内核为极速模式',type:"warning",showClose:!0,showConfirmButton:!1,closeOnClickModal:!1,closeOnPressEscape:!1,closeOnHashChange:!1,dangerouslyUseHTMLString:!0}),dgiotlog.log(` %c ${s["title"]}  %c 基于dgiot构建 `,"color: #fadfa3; background: #030307; padding:5px 0;","background: #fadfa3; padding:5px 0;")},d463:function(e,t){function o(e){function t(e){if(e.requestFullscreen)e.requestFullscreen();else if(e.mozRequestFullScreen)e.mozRequestFullScreen();else if(e.webkitRequestFullScreen)e.webkitRequestFullScreen();else{if(!e.msRequestFullScreen)return alert("当前浏览器不支持全屏，请更换浏览器"),!1;e.msRequestFullScreen()}}return t(document.getElementById(""+e))}function n(e){function t(e){if(dgiotlog.log("exitFullscreen",e),document.exitFullscreen)document.exitFullscreen();else if(document.mozCancelFullScreen)document.mozCancelFullScreen();else if(document.webkitExitFullscreen)document.webkitExitFullscreen();else{if(!document.msExitFullscreen)return alert("当前浏览器不支持全屏，请更换浏览器"),!1;document.msExitFullscreen()}}return t(document.getElementById(""+e))}Vue.prototype.$beFull=o,Vue.prototype.$exitFull=n},d82d:function(e,t){},ed673:function(e,t,o){var n={"./DgiotEmptyLayout/index.vue":"40a0","./DgiotLayoutCommon/index.vue":"24fb","./DgiotLayoutComprehensive/index.vue":"59e2","./DgiotLayoutHorizontal/index.vue":"2b1e","./DgiotLayoutVertical/index.vue":"33d7","./index.vue":"250f"};function s(e){var t=r(e);return o(t)}function r(e){if(!o.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=r,e.exports=s,s.id="ed673"},f46a:function(e,t,o){"use strict";o.r(t);var n=o("4360"),s=o("28d7"),r=o("f121");const i=r["errorLog"],a=()=>{const e="production";return Object(s["isString"])(i)?e===i:!!Object(s["isArray"])(i)&&i.includes(e)};a()&&(Vue.config.errorHandler=(e,t,o)=>{const s=window.location.href;"TypeError: Cannot read properties of undefined (reading 'MapTopic')"!==(null==e?void 0:e.message)?Vue.nextTick(()=>{n["default"].dispatch("errorLog/addErrorLog",{err:e,vm:t,info:o,url:s}).then(()=>{})}):console.warn("错误拦截:",e,t,o)})},f642:function(e,t,o){var n={"./asian.scss":"47d1","./blue-black.scss":"fae4","./blue-white.scss":"25b8","./element-green.scss":"4bba","./green-black.scss":"188e","./green-white.scss":"aa43","./green.scss":"7f48","./ocean.scss":"ff4f","./red-black.scss":"7f339","./red-white.scss":"6799","./red.scss":"c350","./white.scss":"2b83"};function s(e){var t=r(e);return o(t)}function r(e){if(!o.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=r,e.exports=s,s.id="f642"},fae4:function(e,t,o){e.exports={"menu-color":"rgba(255,255,255,.95)","menu-color-active":"rgba(255,255,255,.95)","menu-background":"#282c34","column-second-menu-background":"#fff"}}}]);