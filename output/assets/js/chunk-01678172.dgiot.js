/*!
 *  build: 杭州数蛙科技有限公司 
 *  copyright: dgiot-dashboard 
 *  author: h7ml(h7ml@qq.com) 
 *  Time: 2022年07月14日16时43分38秒
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-01678172"],{1204:function(e,t,r){"use strict";r("13e7")},"13e7":function(e,t,r){},"1fa0":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{ref:"container",staticClass:"login-container",style:{backgroundImage:"url("+e.backgroundImage+")",backgroundRepeat:"no-repeat",backgroundSize:"100% 100%"}},[t("el-row",[t("el-col",{attrs:{lg:14,md:11,sm:24,xl:14,xs:24}},[t("div",{staticStyle:{color:"transparent"}},[e._v("占位符")])]),t("el-col",{attrs:{lg:9,md:12,sm:24,xl:9,xs:24}},[t("el-form",{ref:"form",staticClass:"login-form",attrs:{"label-position":"left",model:e.form,rules:e.rules}},[e.Default.title?t("div",{staticClass:"title-tips"},[e._v(" "+e._s(e.$translateTitle("home.login"))+" ")]):e._e(),t("el-form-item",{staticStyle:{"margin-top":"40px"},attrs:{prop:"username"}},[t("el-input",{directives:[{name:"focus",rawName:"v-focus"}],attrs:{placeholder:e.$translateTitle("home.Please enter user name"),tabindex:"1",type:"text"},scopedSlots:e._u([{key:"prefix",fn:function(){return[t("dgiot-icon",{attrs:{icon:"user-line"}})]},proxy:!0}]),model:{value:e.form.username,callback:function(t){e.$set(e.form,"username","string"===typeof t?t.trim():t)},expression:"form.username"}})],1),t("el-form-item",{attrs:{prop:"password"}},[t("el-input",{key:e.passwordType,ref:"password",attrs:{placeholder:e.$translateTitle("home.Please enter the password"),tabindex:"2",type:e.passwordType},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin.apply(null,arguments)}},scopedSlots:e._u([{key:"prefix",fn:function(){return[e.form.password.length?t("dgiot-icon",{attrs:{icon:"lock-line"}}):e._e()]},proxy:!0},"password"===e.passwordType&&e.form.password.length?{key:"suffix",fn:function(){return[t("dgiot-icon",{staticClass:"show-password",attrs:{icon:"eye-off-line"},nativeOn:{click:function(t){return e.handlePassword.apply(null,arguments)}}})]},proxy:!0}:{key:"suffix",fn:function(){return[e.form.password.length?t("dgiot-icon",{staticClass:"show-password",attrs:{icon:"eye-line"},nativeOn:{click:function(t){return e.handlePassword.apply(null,arguments)}}}):e._e()]},proxy:!0}],null,!0),model:{value:e.form.password,callback:function(t){e.$set(e.form,"password","string"===typeof t?t.trim():t)},expression:"form.password"}})],1),t("el-form-item",[t("el-input",{staticClass:"sbMc"},[t("el-button",{staticClass:"login-btn",attrs:{slot:"append",loading:e.loading,type:"primary"},nativeOn:{click:function(t){return e.handleLogin.apply(null,arguments)}},slot:"append"},[e._v(" "+e._s(e.$translateTitle("home.login"))+" ")])],1)],1),t("span",[t("router-link",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticStyle:{float:"left"},attrs:{to:"/register"}},[t("div",{staticStyle:{"margin-top":"20px"}},[e._v(" "+e._s(e.$translateTitle("home.registered"))+" ")])]),t("dgiot-language",{staticStyle:{float:"right","margin-top":"20px",cursor:"pointer"}})],1)],1)],1)],1)],1)},o=[],i=r("3e35f"),a=r.n(i),n=r("5880"),l=r("28d7"),u=r("1c4e"),c=Object.defineProperty,d=Object.defineProperties,h=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,g=(e,t,r)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,y=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&g(e,r,t[r]);if(m)for(var r of m(t))f.call(t,r)&&g(e,r,t[r]);return e},w=(e,t)=>d(e,h(t)),b=(e,t,r)=>new Promise((s,o)=>{var i=e=>{try{n(r.next(e))}catch(t){o(t)}},a=e=>{try{n(r.throw(e))}catch(t){o(t)}},n=e=>e.done?s(e.value):Promise.resolve(e.value).then(i,a);n((r=r.apply(e,t)).next())}),v={name:"Quick",directives:{focus:{inserted(e){e.querySelector("input").focus()}}},beforeRouteLeave(e,t,r){clearInterval(this.timer),clearInterval(this.interval),r()},data(){const e=(e,t,r)=>{""===t?r(new Error(this.info.empty)):r()},t=(e,t,r)=>{let s=4;Object(l["isPassword"])(t,s)?r():r(new Error(this.info.than+s+this.info.Bit))};return{interval:null,locationPath:location.href.split("/#")[0],info:{empty:this.$translateTitle("home.Username can not be empty"),than:this.$translateTitle("home.Password cannot be less than"),Bit:this.$translateTitle("home.Bit")},backgroundImage:a.a,nodeEnv:"production",form:{username:this.$route.query.username,password:this.$route.query.password},rules:{username:[{required:!0,trigger:"blur",validator:e}],password:[{required:!0,trigger:"blur",validator:t}]},loading:!1,passwordType:"password",redirect:void 0,timer:0}},computed:y({},Object(n["mapGetters"])({language:"settings/language",Default:"acl/Default",license:"acl/license",logo:"user/logo",objectId:"user/objectId",backgroundimage:"user/backgroundimage"})),watch:{language:{handler(e){this.changeInfo(e),this.$nextTick(()=>{this.$refs.form.resetFields()})},deep:!0,immediate:!0},"Default.background":{handler(e){this.backgroundImage=e},immediate:!0},$route:{handler(e){this.redirect=e.query&&e.query.redirect||"/"},immediate:!0}},beforeDestroy(){window.removeEventListener("message",this.iframeLogin)},mounted(){return b(this,null,(function*(){yield this.dgiotReset(),yield this.initShuwa(),this.$nextTick(()=>b(this,null,(function*(){yield this.defaultSet(),yield this.init()})))}))},created(){if(this.$route.query.username){const{username:e,password:t}=this.$route.query;this.form={username:e,password:t}}window.addEventListener("message",this.iframeLogin)},methods:w(y(w(y({},Object(n["mapMutations"])({setTitle:"settings/setTitle",setCopyright:"acl/setCopyright",setDefault:"acl/setDefault"})),{iframeLogin(e){return b(this,null,(function*(){try{const t={value:moment().format("YYYY:MM:DD  HH:mm:ss"),key:"startIframe",action:"save",type:"cookie",time:moment().format("YYYY:MM:DD  HH:mm:ss")};e.source.postMessage(t,e.origin);moment().format("YYYY:MM:DD  HH:mm:ss"),moment().format("YYYY:MM:DD  HH:mm:ss")}catch(t){console.log(t),this.$baseMessage(this.$translateTitle("alert.Data request error")+""+t,"error","dgiot-hey-message-error")}}))},routeDgiot(){return b(this,null,(function*(){try{yield setTimeout(()=>{this.objectId&&(console.log("userid",this.objectId),document.querySelector(".el-tree-node__content").click())},1200)}catch(e){console.log(e),this.$baseMessage(this.$translateTitle("alert.Data request error")+""+e,"error","dgiot-hey-message-error")}}))},init(){return b(this,null,(function*(){try{Cookies.remove("startIframe"),Cookies.remove("pwaLogin"),this.$nextTick(()=>b(this,null,(function*(){"dgiot_iframe"==window.name&&(Cookies.set("startIframe",moment().format("YYYY:MM:DD HH:mm:ss"),{expires:18e5}),yield this.goHome())})))}catch(e){console.log(e),this.$baseMessage(this.$translateTitle("alert.Data request error")+""+e,"error","dgiot-hey-message-error")}}))},defaultSet(){return b(this,null,(function*(){console.log("dgiot build time: "+dgiot.dateTime),console.log("startIframe time: "+Cookies.get("startIframe")),this.backgroundImage=Cookies.get("startIframe")?"https://s2.loli.net/2021/12/15/ciVTb7w62rxQ3a9.jpg":this.backgroundimage;const e=location.origin;Cookies.set("fileServer",e,{expires:18e5})}))},changeInfo(e){this.$set(this.info,"empty",this.$translateTitle("home.Username can not be empty")),this.$set(this.info,"than",this.$translateTitle("home.Password cannot be less than")),this.$set(this.info,"Bit",this.$translateTitle("home.Bit")),this.$forceUpdate()},forgotPwd(){this.$message(this.$translateTitle("home.Forgot password"))}}),Object(n["mapActions"])({dgiotReset:"user/dgiotReset",login:"user/login",queryAll:"user/queryAll",jwtlogin:"user/jwtlogin"})),{getCategory(e){let t="";return this.category.filter(r=>{r.type==e&&(t=r.data.CategoryName)}),t},initShuwa(){return b(this,null,(function*(){const e=yield Object(u["SiteDefault"])(),{copyright:t,logo:r,objectId:s,title:o}=e;this.setDefault(e),this.setTitle(o),this.setCopyright(t)}))},handlePassword(){"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick(()=>{this.$refs.password.focus()})},handleRoute(){return"/404"===this.redirect||"/403"===this.redirect?"/":this.redirect},handleLogin(){this.$refs.form.validate(e=>b(this,null,(function*(){if(!e)return!1;try{this.loading=!0,yield this.login(this.form),yield this.goHome()}finally{this.loading=!1}})))},goHome(){return b(this,null,(function*(){try{this.interval=setInterval(()=>b(this,null,(function*(){""!=Cookies.get("handleRoute")&&(console.log("handleRoute 存在，跳转页面"),yield this.$router.push(this.handleRoute()),yield this.routeDgiot(),clearInterval(this.interval),window.clearInterval(this.interval))})),1500)}catch(e){console.log(e),this.$baseMessage(this.$translateTitle("alert.Data request error")+""+e,"error","dgiot-hey-message-error")}}))}})},k=v,$=(r("1204"),r("2877")),x=Object($["a"])(k,s,o,!1,null,"9fd2a1fc",null);t["default"]=x.exports},"3e35f":function(e,t,r){e.exports=r.p+"static/img/background.8fed5e23.jpg"}}]);