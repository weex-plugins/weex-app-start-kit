!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=74)}({0:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={setBundleUrl:function(e,t){var r=t.config.bundleUrl,n="",o="",i=void 0,s=r.indexOf("your_current_IP")>=0||r.indexOf("file://assets/")>=0,a=r.indexOf("file:///")>=0&&r.indexOf("WeexDemo.app")>0;if(s)i="file://assets/";else if(a)i=r.substring(0,r.lastIndexOf("/")+1);else{var l=/\/\/([^\/]+?)\//.exec(r),c=/\/\/.+\/([^\/]+?)\//.exec(r);l&&l.length>=2&&(n=l[1]),c&&c.length>=2&&(o=c[1]),i="http://"+n+"/"}var f="./weex.html?page=",u=i;return u="undefined"==typeof navigator||"Mozilla"!==navigator.appCodeName&&"Gecko"!==navigator.product?i+o+"/":"web"===o?f+"/dist/":f,u+e}}},1:function(e,t,r){var n,o,i=[];i.push(r(3)),n=r(2);var s=r(4);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=n=n.default),"function"==typeof o&&(o=o.options),o.__file="/Users/ali-130257n/www/weex-app-start-kit/src/include/navbar.vue",o.render=s.render,o.staticRenderFns=s.staticRenderFns,o.style=o.style||{},i.forEach(function(e){for(var t in e)o.style[t]=e[t]}),e.exports=n},2:function(e,t,r){"use strict";var n=weex.requireModule("navigator");e.exports={props:{title:{default:"Title",type:String},back:{default:!1,type:Boolean}},methods:{goHome:function(){n.pop()}}}},27:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var o=r(1),i=n(o),s=r(5),a=n(s),l=r(55),c=n(l);e.exports={components:{navbar:i.default,footer:a.default,"loading-item":c.default},data:function(){return{list:[{id:"1",user:{avatar:"",username:""},contents:{}},{id:"2",user:{avatar:"",username:""},contents:{}},{id:"3",user:{avatar:"",username:""},contents:{}}]}},methods:{change:function(e){this.place=e.value},changeType:function(e){this.type=e}}}},3:function(e,t){e.exports={navbar:{zIndex:200,position:"fixed",left:0,right:0,top:0,display:"flex",flexDirection:"row",height:88,backgroundColor:"#ffffff",alignItems:"center",borderBottomWidth:2,borderBottomStyle:"solid",borderBottomColor:"#dddddd"},"btn-icon-left":{zIndex:10,flexDirection:"row",alignItems:"center",width:180},"btn-arrow-left":{width:60,height:60,marginLeft:10},"btn-text":{color:"#0f89f5"},title:{position:"absolute",left:0,right:0,top:0,height:88,lineHeight:88,fontSize:34,textAlign:"center"}}},4:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:["navbar"]},[e.leftCorner?r("div",{staticClass:["btn-icon-left"],on:{click:e.goHome}},[r("image",{staticClass:["btn-arrow-left"],attrs:{src:e.leftCorner.src}}),r("text",{staticClass:["btn-text"]},[e._v(e._s(e.leftCorner.text))])]):e._e(),e.back?r("div",{staticClass:["btn-icon-left"],on:{click:e.goHome}},[r("image",{staticClass:["btn-arrow-left"],attrs:{src:"http://img1.vued.vanthink.cn/vued9c8e7e738ff94abee23eb69d7f1401e9.png"}}),r("text",{staticClass:["btn-text"]},[e._v("返回")])]):e._e(),e.rightCorner?r("div",{staticClass:["btn-icon-left"],on:{click:e.goHome}},[r("image",{staticClass:["btn-arrow-left"],attrs:{src:"rightCorner.src"}}),r("text",{staticClass:["btn-text"]},[e._v(e._s(e.rightCorner.text))])]):e._e(),r("text",{staticClass:["title"]},[e._v(e._s(e.title))])])},staticRenderFns:[]},e.exports.render._withStripped=!0},40:function(e,t){e.exports={container:{position:"relative",flex:1,flexDirection:"column",backgroundColor:"#e3e3e3"},map:{flex:1,position:"relative",backgroundColor:"#e3e3e3",paddingTop:88,minHeight:400,borderBottomWidth:10,borderBottomColor:"#ffffff"}}},48:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:["container"]},[r("navbar",{attrs:{title:"WEEX-APP-START-KIT"}}),r("scroller",{staticClass:["map"]},e._l(e.list,function(e){return r("loading-item",{key:e.id,attrs:{url:"./pages/article.js"}})})),r("footer",{attrs:{active:"0"}})],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},5:function(e,t,r){var n,o,i=[];i.push(r(7)),n=r(6);var s=r(8);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=n=n.default),"function"==typeof o&&(o=o.options),o.__file="/Users/ali-130257n/www/weex-app-start-kit/src/include/footer.vue",o.render=s.render,o.staticRenderFns=s.staticRenderFns,o.style=o.style||{},i.forEach(function(e){for(var t in e)o.style[t]=e[t]}),e.exports=n},55:function(e,t,r){var n,o,i=[];i.push(r(61)),n=r(59);var s=r(65);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=n=n.default),"function"==typeof o&&(o=o.options),o.__file="/Users/ali-130257n/www/weex-app-start-kit/src/include/loading-list-item.vue",o.render=s.render,o.staticRenderFns=s.staticRenderFns,o.style=o.style||{},i.forEach(function(e){for(var t in e)o.style[t]=e[t]}),e.exports=n},59:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),i=n(o),s=weex.requireModule("navigator");t.default={props:{url:{default:"",type:String}},methods:{redirect:function(){var e=i.default.setBundleUrl(this.url,weex);s.push({url:e})}}}},6:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),i=n(o),s=weex.requireModule("navigator");t.default={props:{active:{default:0}},data:function(){return{type:"",items:[{name:"Home",url:"home.js",icon:"http://img1.vued.vanthink.cn/vued40a1db1fb50417e72fc59c3535de9d1f.png"},{name:"Shop",url:"shop.js",icon:"http://img1.vued.vanthink.cn/vuede3edd4e57e450d00b3fa0e0fd82bc6af.png"},{name:"Video",url:"video.js",icon:"http://img1.vued.vanthink.cn/vueda026977b63cd85ebbcc0309a2f592082.png"},{name:"Profile",url:"profile.js",icon:"http://img1.vued.vanthink.cn/vued78336017bc3e794059a4fea0fe1450f9.png"}]}},methods:{changeUrl:function(e){console.log(this.items[e].url);var t=i.default.setBundleUrl(this.items[e].url,weex);console.log(t),s.push({url:t})}}}},61:function(e,t){e.exports={"loading-item":{height:360,margin:20,marginBottom:0,backgroundColor:"#ffffff",borderWidth:1,borderBottomWidth:2,borderColor:"rgba(0,0,0,0.2)"},"loading-image":{height:500}}},65:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:["loading-item"],attrs:{url:e.url},on:{click:e.redirect}},[r("image",{staticClass:["loading-image"],attrs:{src:"http://img1.vued.vanthink.cn/vued6d27c6be53c90c9392eb08e95af60f41.png"}})])},staticRenderFns:[]},e.exports.render._withStripped=!0},7:function(e,t){e.exports={footer:{flexDirection:"row",alignItems:"center",zIndex:200,position:"fixed",bottom:0,left:0,right:0,height:100,lineHeight:100,backgroundColor:"#ffffff",borderTopWidth:1,borderTopStyle:"solid",borderTopColor:"rgba(0,0,0,0.15)"},"footer-item":{flex:1,justifyContent:"center",alignItems:"center"},"footer-item-icon":{width:54,height:54},"btn-sm-text":{color:"#777777",fontSize:20},active:{color:"#1ba1e2"}}},74:function(e,t,r){var n,o,i=[];i.push(r(40)),n=r(27);var s=r(48);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=n=n.default),"function"==typeof o&&(o=o.options),o.__file="/Users/ali-130257n/www/weex-app-start-kit/src/index.vue",o.render=s.render,o.staticRenderFns=s.staticRenderFns,o.style=o.style||{},i.forEach(function(e){for(var t in e)o.style[t]=e[t]}),e.exports=n,e.exports.el="true",new Vue(e.exports)},8:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:["footer"]},e._l(e.items,function(t,n){return r("div",{key:t.url,staticClass:["footer-item"],on:{click:function(t){e.changeUrl(n)}}},[r("image",{staticClass:["footer-item-icon"],attrs:{src:t.icon}}),e.active!=n?r("text",{staticClass:["btn-sm-text"]},[e._v(e._s(t.name))]):e._e(),e.active==n?r("text",{staticClass:["btn-sm-text","active"]},[e._v(e._s(t.name))]):e._e()])}))},staticRenderFns:[]},e.exports.render._withStripped=!0}});